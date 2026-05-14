import { useState, useEffect, useCallback } from 'react'
import ProfileSelect from './components/ProfileSelect'
import Header from './components/Header'
import CaseCard from './components/CaseCard'
import ResultPanel from './components/ResultPanel'
import HealthMeters from './components/HealthMeters'
import CategoryStats from './components/CategoryStats'
import LevelUpModal from './components/LevelUpModal'
import AchievementToast from './components/AchievementToast'
import AchievementsPanel from './components/AchievementsPanel'
import Leaderboard from './components/Leaderboard'
import HistoryPanel from './components/HistoryPanel'
import AnalyticsPanel from './components/AnalyticsPanel'
import SettingsPanel from './components/SettingsPanel'
import WelcomeScreen from './components/WelcomeScreen'
import {
  pickNextCase, updateCooldown, applyConsequences,
  calcXP, getLevelInfo, updateCategoryStats,
  getWeakSpot, getDailyCase, getTodayStr, isDailyCompleted,
  getInitialHealth,
} from './lib/engine'
import {
  getProfile, saveProfile, getActiveProfileId, setActiveProfile, getAllProfiles,
} from './lib/storage'
import { checkNewAchievements } from './data/achievements'

// ─── Game state helpers ────────────────────────────────────────────────────

function freshGameState(profile) {
  const level = getLevelInfo(profile.totalXP).current.level
  const role = profile.role || 'ceo'
  return {
    profile: { ...profile, health: profile.health || getInitialHealth() },
    currentCase: pickNextCase(profile.cooldownIds || [], level, role),
    phase: 'playing',
    lastResult: null,
    leveledUpTo: null,
    pendingAchievement: null,
    weakSpotAlert: null,
    showLeaderboard: false,
    showAchievements: false,
    showHistory: false,
    showAnalytics: false,
    showSettings: false,
    caseStartTime: Date.now(),
    isDaily: false,
    rivalRefresh: 0,
  }
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState(() => {
    // Show welcome only when there are genuinely no profiles yet
    const profiles = getAllProfiles()
    return Object.keys(profiles).length === 0 ? 'welcome' : 'profile-select'
  })
  const [game, setGame] = useState(null)

  // Load active profile on mount
  useEffect(() => {
    const id = getActiveProfileId()
    if (id) {
      const p = getProfile(id)
      if (p) {
        setGame(freshGameState(p))
        setScreen('game')
      }
    }
  }, [])

  // ─── Profile selection ───────────────────────────────────────────────────

  const handleProfileSelected = useCallback(id => {
    const p = getProfile(id)
    if (!p) return
    setGame(freshGameState(p))
    setScreen('game')
  }, [])

  const handleSwitchProfile = useCallback(() => {
    setActiveProfile(null)
    setScreen('profile-select')  // always go to profile-select, never back to welcome
    setGame(null)
  }, [])

  // ─── Answer handler ──────────────────────────────────────────────────────

  const processAnswer = useCallback((chosenIdx, isRetry = false, isDaily = false) => {
    setGame(prev => {
      const c = isDaily ? getDailyCase() : prev.currentCase
      const p = prev.profile
      const isCorrect = chosenIdx === c.correct
      const prevLevel = getLevelInfo(p.totalXP).current.level

      const newStreak = isCorrect && !isRetry ? p.streak + 1 : (isCorrect ? p.streak : 0)
      const bestStreak = Math.max(p.bestStreak || 0, newStreak)

      const { xp: xpDelta, streakBonus } = calcXP(isCorrect, c.difficulty, newStreak, isRetry, isDaily)
      const totalXP = Math.max(0, p.totalXP + xpDelta)
      const newLevel = getLevelInfo(totalXP).current.level
      const leveledUp = newLevel > prevLevel

      const health = applyConsequences(p.health || getInitialHealth(), isCorrect ? c.consequences : {})
      const cooldownIds = isDaily ? p.cooldownIds : updateCooldown(p.cooldownIds || [], c.id)
      const categoryStats = updateCategoryStats(p.categoryStats || {}, c.category, isCorrect)

      // Daily challenge tracking
      let dailyChallenge = p.dailyChallenge
      let dailyChallengesCompleted = p.dailyChallengesCompleted || 0
      if (isDaily) {
        const alreadyCounted = dailyChallenge?.date === getTodayStr() && dailyChallenge?.completed
        dailyChallenge = { date: getTodayStr(), caseId: c.id, completed: true, correct: isCorrect }
        if (!alreadyCounted && isCorrect) dailyChallengesCompleted++
      }

      const retriesCorrect = (p.retriesCorrect || 0) + (isRetry && isCorrect ? 1 : 0)

      // Passive time tracking — cap at 5 min to exclude idle time
      const rawTime = Date.now() - (prev.caseStartTime || Date.now())
      const timeSpent = Math.min(rawTime, 5 * 60 * 1000)

      // Case history — keep last 50
      const historyEntry = {
        caseId: c.id,
        category: c.category,
        difficulty: c.difficulty,
        chosen: chosenIdx,
        correct: c.correct,
        isCorrect,
        xpDelta,
        isRetry,
        timeSpent,
        timestamp: Date.now(),
      }
      const prevHistory = p.caseHistory || []
      const caseHistory = [...prevHistory, historyEntry].slice(-50)

      const updatedProfile = {
        ...p,
        totalXP,
        streak: newStreak,
        bestStreak,
        casesAnswered: p.casesAnswered + 1,
        correctAnswers: p.correctAnswers + (isCorrect ? 1 : 0),
        retriesCorrect,
        dailyChallengesCompleted,
        cooldownIds,
        health,
        categoryStats,
        dailyChallenge,
        caseHistory,
        sessionStats: {
          correct: (p.sessionStats?.correct || 0) + (isCorrect ? 1 : 0),
          wrong: (p.sessionStats?.wrong || 0) + (isCorrect ? 0 : 1),
          xpEarned: (p.sessionStats?.xpEarned || 0) + Math.max(0, xpDelta),
        },
      }

      // Check achievements
      const newAchievements = checkNewAchievements(updatedProfile)
      if (newAchievements.length > 0) {
        const now = Date.now()
        newAchievements.forEach(a => { updatedProfile.achievements[a.id] = now })
      }

      saveProfile(updatedProfile)

      // Weak spot alert every 5 cases (but not on first answer)
      let weakSpotAlert = null
      if (updatedProfile.casesAnswered % 5 === 0 && updatedProfile.casesAnswered > 0) {
        weakSpotAlert = getWeakSpot(updatedProfile.categoryStats)
      }

      return {
        ...prev,
        profile: updatedProfile,
        phase: 'result',
        lastResult: {
          caseData: c,
          chosen: chosenIdx,
          isCorrect,
          xpDelta,
          streakBonus,
          newStreak,
          healthDelta: isCorrect ? c.consequences : {},
          isDaily,
          isRetry,
        },
        leveledUpTo: leveledUp ? getLevelInfo(totalXP).current : null,
        pendingAchievement: newAchievements[0] || null,
        weakSpotAlert,
        isDaily: false,
      }
    })
  }, [])

  const handleAnswer = useCallback(idx => processAnswer(idx, false, false), [processAnswer])
  const handleDailyAnswer = useCallback(idx => processAnswer(idx, false, true), [processAnswer])
  const handleRetry = useCallback(() => {
    setGame(prev => ({
      ...prev,
      phase: 'playing',
      currentCase: { ...prev.lastResult.caseData },
      isRetry: true,
      lastResult: null,
      caseStartTime: Date.now(),
    }))
  }, [])

  // ─── Next case ───────────────────────────────────────────────────────────

  const handleNext = useCallback(() => {
    setGame(prev => {
      const level = getLevelInfo(prev.profile.totalXP).current.level
      return {
        ...prev,
        phase: 'playing',
        currentCase: pickNextCase(prev.profile.cooldownIds, level, prev.profile.role || 'ceo'),
        lastResult: null,
        leveledUpTo: null,
        pendingAchievement: null,
        weakSpotAlert: null,
        isRetry: false,
        isDaily: false,
        caseStartTime: Date.now(),
      }
    })
  }, [])

  // ─── Daily challenge ─────────────────────────────────────────────────────

  const handleDailyChallenge = useCallback(() => {
    setGame(prev => ({
      ...prev,
      phase: 'playing',
      currentCase: getDailyCase(prev.profile.role || 'ceo'),
      isDaily: true,
      caseStartTime: Date.now(),
    }))
  }, [])

  // ─── Modals ──────────────────────────────────────────────────────────────

  const handleDismissLevelUp = useCallback(() => setGame(p => ({ ...p, leveledUpTo: null })), [])
  const handleDismissAchievement = useCallback(() => setGame(p => ({ ...p, pendingAchievement: null })), [])
  const handleDismissWeakSpot = useCallback(() => setGame(p => ({ ...p, weakSpotAlert: null })), [])

  // ─── Drill weak category ─────────────────────────────────────────────────

  const handleDrillCategory = useCallback((category) => {
    setGame(prev => {
      const level = getLevelInfo(prev.profile.totalXP).current.level
      const drillCase = pickNextCase(
        prev.profile.cooldownIds, level, prev.profile.role || 'ceo', null, category
      )
      return {
        ...prev,
        phase: 'playing',
        currentCase: drillCase,
        weakSpotAlert: null,
        lastResult: null,
        leveledUpTo: null,
        pendingAchievement: null,
        isRetry: false,
        isDaily: false,
        caseStartTime: Date.now(),
      }
    })
  }, [])

  // ─── Settings panel ──────────────────────────────────────────────────────

  const handleOpenSettings = useCallback(() => setGame(p => ({ ...p, showSettings: true })), [])

  // ─── Render ──────────────────────────────────────────────────────────────

  if (screen === 'welcome') {
    return <WelcomeScreen onGetStarted={() => setScreen('profile-select')} />
  }

  if (screen === 'profile-select' || !game) {
    return <ProfileSelect onProfileSelected={handleProfileSelected} />
  }

  const { profile, currentCase, phase, lastResult, leveledUpTo, pendingAchievement,
    weakSpotAlert, showLeaderboard, showAchievements, showHistory, showAnalytics,
    showSettings, isDaily, isRetry } = game

  const dailyAvailable = !isDailyCompleted(profile)

  return (
    <div className="min-h-screen" style={{ background: 'rgb(7 15 28)' }}>
      <Header
        profile={profile}
        onSwitchProfile={handleSwitchProfile}
        onLeaderboard={() => setGame(p => ({ ...p, showLeaderboard: true }))}
        onAchievements={() => setGame(p => ({ ...p, showAchievements: true }))}
        onHistory={() => setGame(p => ({ ...p, showHistory: true }))}
        onAnalytics={() => setGame(p => ({ ...p, showAnalytics: true }))}
        onDailyChallenge={handleDailyChallenge}
        dailyAvailable={dailyAvailable}
        onSettings={handleOpenSettings}
      />

      <main className="max-w-4xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_220px] gap-6 items-start">
        {/* Main play area */}
        <div className="min-w-0 space-y-3">
          {/* Daily challenge banner */}
          {dailyAvailable && phase === 'playing' && !isDaily && (
            <div
              className="rounded-2xl border border-gold-500/25 bg-gold-500/6 px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gold-500/10 transition-colors"
              onClick={handleDailyChallenge}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <div>
                  <p className="text-gold-400 text-xs font-bold">Daily Challenge available</p>
                  <p className="text-slate-500 text-[10px]">One special case today · 3x XP reward</p>
                </div>
              </div>
              <span className="text-gold-400 text-xs font-bold">Play →</span>
            </div>
          )}

          {/* Weak spot alert */}
          {weakSpotAlert && (
            <div className="rounded-2xl border border-red-500/25 bg-red-500/6 px-4 py-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-red-400 text-xs font-bold">Weak Spot Detected</p>
                <p className="text-slate-400 text-[11px]">
                  {weakSpotAlert.category}: {weakSpotAlert.correct}/{weakSpotAlert.total} correct ({Math.round(weakSpotAlert.pct * 100)}% accuracy)
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleDrillCategory(weakSpotAlert.category)}
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                  aria-label={`Practice ${weakSpotAlert.category} cases`}
                >
                  Practice this →
                </button>
                <button
                  onClick={handleDismissWeakSpot}
                  className="text-slate-600 hover:text-slate-400 text-xs"
                  aria-label="Dismiss weak spot alert"
                >✕</button>
              </div>
            </div>
          )}

          {phase === 'playing' && currentCase && (
            <CaseCard
              key={currentCase.id + (isRetry ? '-retry' : '') + (isDaily ? '-daily' : '')}
              caseData={currentCase}
              onAnswer={isDaily ? handleDailyAnswer : handleAnswer}
              isDaily={isDaily}
              isRetry={isRetry}
              keyboardActive={!showLeaderboard && !showAchievements && !showHistory && !showAnalytics && !showSettings}
            />
          )}
          {phase === 'result' && lastResult && (
            <ResultPanel
              result={lastResult}
              onNext={handleNext}
              onRetry={handleRetry}
            />
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-24 space-y-4">
          <HealthMeters
            health={profile.health || getInitialHealth()}
            healthDelta={phase === 'result' && lastResult ? lastResult.healthDelta : null}
          />
          <CategoryStats categoryStats={profile.categoryStats} role={profile.role || 'ceo'} />

          {/* Session stats */}
          <div className="bg-navy-800 border border-white/8 rounded-2xl p-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Session</p>
            <div className="space-y-2">
              {[
                { label: 'Correct', value: profile.sessionStats?.correct || 0, color: '#34d399' },
                { label: 'Wrong', value: profile.sessionStats?.wrong || 0, color: '#f87171' },
                { label: 'XP earned', value: `+${profile.sessionStats?.xpEarned || 0}`, color: '#3b9eff' },
                { label: 'Best streak', value: profile.bestStreak || 0, color: '#fbbf24' },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between text-xs">
                  <span className="text-slate-500">{label}</span>
                  <span className="font-bold" style={{ color }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Overlays */}
      <LevelUpModal level={leveledUpTo} onDismiss={handleDismissLevelUp} />
      <AchievementToast achievement={pendingAchievement} onDismiss={handleDismissAchievement} />

      {showLeaderboard && (
        <Leaderboard
          activeProfileId={profile.id}
          onClose={() => setGame(p => ({ ...p, showLeaderboard: false }))}
          onRivalsUpdated={() => setGame(p => ({
            ...p,
            showLeaderboard: false,
            profile: { ...p.profile, ...getProfile(p.profile.id) },
            rivalRefresh: p.rivalRefresh + 1,
          }))}
        />
      )}

      {showAchievements && (
        <AchievementsPanel
          profile={profile}
          onClose={() => setGame(p => ({ ...p, showAchievements: false }))}
        />
      )}

      {showHistory && (
        <HistoryPanel
          profile={profile}
          onClose={() => setGame(p => ({ ...p, showHistory: false }))}
        />
      )}

      {showAnalytics && (
        <AnalyticsPanel
          profile={profile}
          onClose={() => setGame(p => ({ ...p, showAnalytics: false }))}
        />
      )}

      {showSettings && (
        <SettingsPanel onClose={() => setGame(p => ({ ...p, showSettings: false }))} />
      )}
    </div>
  )
}
