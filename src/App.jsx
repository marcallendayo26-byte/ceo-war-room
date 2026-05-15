import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import PrestigeModal from './components/PrestigeModal'
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
import { applyFontSize, getFontSize } from './lib/prefs'
import { CATEGORY_COLORS } from './data/config'
import {
  isMuted, toggleMuted,
  playCorrect, playXP, playWrong, playStreak,
} from './lib/sounds'
import {
  addToReviewQueue, removeFromReviewQueue, pickPackCase,
  pickConsequenceCase, getConsequenceCaseById,
  calcBoardDelta, getBoardStatus, getHealthContextLine, generateChronicle,
} from './lib/engine'
import SessionDebrief    from './components/SessionDebrief'
import PackSelect        from './components/PackSelect'
import PackBriefing      from './components/PackBriefing'
import PackBridge        from './components/PackBridge'
import PackOutcome       from './components/PackOutcome'
import BoardMeter        from './components/BoardMeter'
import CompanyChronicle  from './components/CompanyChronicle'
import VoNCModal         from './components/VoNCModal'

// ─── Game state helpers ────────────────────────────────────────────────────

function freshGameState(profile) {
  const level = getLevelInfo(profile.totalXP).current.level
  const role = profile.role || 'ceo'
  return {
    profile: { ...profile, health: profile.health || getInitialHealth() },
    currentCase: pickNextCase(profile.cooldownIds || [], level, role, null, null, profile.reviewQueue || []),
    phase: 'playing',
    lastResult: null,
    leveledUpTo: null,
    prestigedTo: null,
    pendingAchievement: null,
    weakSpotAlert: null,
    showLeaderboard: false,
    showAchievements: false,
    showHistory: false,
    showAnalytics: false,
    showSettings: false,
    showMissions: false,
    showDebrief: false,
    showVoNC: false,
    caseStartTime: Date.now(),
    isDaily: false,
    rivalRefresh: 0,
    // Session tracking (in-memory, not persisted)
    sessionCases: [],
    // Scenario pack state
    activePack: null,
    packActIndex: 0,
    packResults: [],
    packHealth: null,
    packPhase: 'playing',   // 'briefing' | 'playing' | 'bridge' | 'outcome'
    packXpEarned: 0,
    // GOT Arc state (session-only; boardConfidence persists in profile)
    pendingConsequences: [],   // [{ consequenceCaseId, triggerAtCase, sourceCategory }]
    usedConsequenceIds: [],    // prevents same consequence twice per session
    isConsequence: false,      // whether the current case is a ripple event
    sourceCategory: null,      // what past wrong triggered this consequence
    prevBoardConfidence: null, // for delta display in BoardMeter
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

  // Sound + shake state
  const [sfxMuted,    setSfxMuted]    = useState(isMuted)
  const [shakeActive, setShakeActive] = useState(false)
  const prevSoundTs = useRef(0)

  // Restore font-size preference immediately on mount
  useEffect(() => { applyFontSize(getFontSize()) }, [])

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

  // ─── Sound + shake orchestration ────────────────────────────────────────

  useEffect(() => {
    const ts = game?.lastResult?.soundTs
    if (!ts || ts === prevSoundTs.current) return
    prevSoundTs.current = ts
    const { isCorrect, newStreak } = game.lastResult
    if (isCorrect) {
      playCorrect()
      setTimeout(() => playXP(), 195)
      if ([3, 5, 10].includes(newStreak)) setTimeout(() => playStreak(newStreak), 380)
    } else {
      playWrong()
      setShakeActive(true)
      const t = setTimeout(() => setShakeActive(false), 480)
      return () => clearTimeout(t)
    }
  }, [game?.lastResult?.soundTs])

  const handleToggleMute = useCallback(() => setSfxMuted(toggleMuted()), [])

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
      const rawXP = Math.max(0, p.totalXP + xpDelta)

      // Prestige: first correct non-retry answer while already at max level
      const shouldPrestige = prevLevel === 10 && isCorrect && !isRetry
      let newPrestige = p.prestige || 0
      const totalXP = shouldPrestige ? 0 : rawXP
      if (shouldPrestige) newPrestige++

      const newLevel = getLevelInfo(totalXP).current.level
      const leveledUp = !shouldPrestige && newLevel > prevLevel

      // Apply health consequences — correct answers use c.consequences, wrong answers
      // use c.wrongConsequences (only set on consequence cases; normal cases have none).
      const healthConsequences = isCorrect ? (c.consequences || {}) : (c.wrongConsequences || {})
      const health = applyConsequences(p.health || getInitialHealth(), healthConsequences)
      const cooldownIds = isDaily ? p.cooldownIds : updateCooldown(p.cooldownIds || [], c.id)
      const categoryStats = updateCategoryStats(p.categoryStats || {}, c.category, isCorrect)

      // ── Spaced repetition queue ──────────────────────────────────────────
      const wasInReview = (p.reviewQueue || []).includes(c.id)
      let reviewQueue = p.reviewQueue || []
      let reviewCleared = false
      if (!isRetry && !isDaily) {
        if (isCorrect && wasInReview) {
          reviewQueue = removeFromReviewQueue(reviewQueue, c.id)
          reviewCleared = true
        } else if (!isCorrect && !wasInReview) {
          reviewQueue = addToReviewQueue(reviewQueue, c.id)
        }
      }
      const reviewClaredCount = (p.reviewCleared || 0) + (reviewCleared ? 1 : 0)

      // ── Board confidence ─────────────────────────────────────────────────
      const isConsequenceCase = !!(c._isConsequence)
      const boardDelta        = calcBoardDelta(isCorrect, c.difficulty, isConsequenceCase, newStreak)
      const prevBoardConf     = p.boardConfidence ?? 60
      const newBoardConfidence = Math.max(0, Math.min(100, prevBoardConf + boardDelta))
      const shouldTriggerVoNC = newBoardConfidence < 20 && prevBoardConf >= 20

      // ── Consequence injection ─────────────────────────────────────────────
      // After a wrong answer in normal play, queue a ripple-event crisis case.
      let newPendingConsequences = prev.pendingConsequences || []
      let newUsedConsequenceIds  = prev.usedConsequenceIds  || []
      if (!isCorrect && !isRetry && !isDaily && !prev.activePack) {
        const picked = pickConsequenceCase(c.category, newUsedConsequenceIds)
        if (picked) {
          const triggerAtCase = (updatedProfile.casesAnswered || 0) + Math.floor(Math.random() * 5) + 3
          newPendingConsequences = [...newPendingConsequences, {
            consequenceCaseId: picked.id,
            triggerAtCase,
            sourceCategory: c.category,
          }]
          newUsedConsequenceIds = [...newUsedConsequenceIds, picked.id].slice(-20)
        }
      }

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

      // Case history — keep last 200
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
      const caseHistory = [...prevHistory, historyEntry].slice(-200)

      const updatedProfile = {
        ...p,
        totalXP,
        prestige: newPrestige,
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
        reviewQueue,
        reviewCleared: reviewClaredCount,
        boardConfidence: newBoardConfidence,
        consequencesTriggered: (p.consequencesTriggered || 0) + (isConsequenceCase ? 1 : 0),
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

      // ── Session case log (in-memory) ────────────────────────────────────
      const newSessionCases = [
        ...prev.sessionCases,
        { caseId: c.id, category: c.category, difficulty: c.difficulty, isCorrect, xpDelta },
      ]

      // ── Pack state update ────────────────────────────────────────────────
      const inPack = !!prev.activePack
      const packHealth = inPack
        ? applyConsequences(prev.packHealth || getInitialHealth(), isCorrect ? c.consequences : {})
        : prev.packHealth
      const packResults = inPack
        ? [...prev.packResults, { actIndex: prev.packActIndex, caseId: c.id, category: c.category, isCorrect, xpDelta }]
        : prev.packResults
      const packXpEarned = inPack ? (prev.packXpEarned || 0) + Math.max(0, xpDelta) : prev.packXpEarned

      // Trigger debrief after every 10 non-pack cases
      const showDebrief = !inPack && newSessionCases.length >= 10 && newSessionCases.length % 10 === 0

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
          healthDelta: healthConsequences,
          isDaily,
          isRetry,
          isReview: wasInReview,
          reviewCleared,
          soundTs: Date.now(),
        },
        leveledUpTo: leveledUp ? getLevelInfo(totalXP).current : null,
        prestigedTo: shouldPrestige ? newPrestige : null,
        pendingAchievement: newAchievements[0] || null,
        weakSpotAlert,
        isDaily: false,
        sessionCases: newSessionCases,
        packHealth,
        packResults,
        packXpEarned,
        showDebrief,
        showVoNC: shouldTriggerVoNC,
        pendingConsequences: newPendingConsequences,
        usedConsequenceIds: newUsedConsequenceIds,
        isConsequence: false,   // reset after processing; next case sets it in handleNext
        prevBoardConfidence: prevBoardConf,
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

      // If in pack mode, transition to the bridge screen instead
      if (prev.activePack) {
        const isLastAct = prev.packActIndex >= prev.activePack.acts.length - 1
        return {
          ...prev,
          phase: 'result',
          packPhase: isLastAct ? 'outcome' : 'bridge',
        }
      }

      // ── Check pending consequence cases ──────────────────────────────────
      const pending = prev.pendingConsequences || []
      const casesAnswered = prev.profile.casesAnswered || 0
      const dueConsequences = pending.filter(c => c.triggerAtCase <= casesAnswered)

      if (dueConsequences.length > 0) {
        const [first, ...remaining] = dueConsequences
        const otherPending = pending.filter(c => c.triggerAtCase > casesAnswered)
        const consequenceCase = getConsequenceCaseById(first.consequenceCaseId)
        if (consequenceCase) {
          return {
            ...prev,
            phase: 'playing',
            currentCase: { ...consequenceCase, _isConsequence: true, _sourceCategory: first.sourceCategory },
            pendingConsequences: [...otherPending, ...remaining],
            isConsequence: true,
            sourceCategory: first.sourceCategory,
            lastResult: null,
            leveledUpTo: null,
            pendingAchievement: null,
            weakSpotAlert: null,
            isRetry: false,
            isDaily: false,
            caseStartTime: Date.now(),
          }
        }
      }

      // ── Normal next case ─────────────────────────────────────────────────
      return {
        ...prev,
        phase: 'playing',
        currentCase: pickNextCase(
          prev.profile.cooldownIds,
          level,
          prev.profile.role || 'ceo',
          null,
          null,
          prev.profile.reviewQueue || [],
        ),
        lastResult: null,
        leveledUpTo: null,
        pendingAchievement: null,
        weakSpotAlert: null,
        isRetry: false,
        isDaily: false,
        isConsequence: false,
        sourceCategory: null,
        caseStartTime: Date.now(),
      }
    })
  }, [])

  // ─── Pack handlers ───────────────────────────────────────────────────────

  const handleOpenMissions  = useCallback(() => setGame(p => ({ ...p, showMissions: true })), [])
  const handleCloseMissions = useCallback(() => setGame(p => ({ ...p, showMissions: false })), [])

  const handleStartPack = useCallback((pack) => {
    setGame(prev => ({
      ...prev,
      showMissions: false,
      activePack: pack,
      packActIndex: 0,
      packResults: [],
      packHealth: getInitialHealth(),
      packXpEarned: 0,
      packPhase: 'briefing',
      phase: 'playing',
      lastResult: null,
    }))
  }, [])

  const handlePackBegin = useCallback(() => {
    setGame(prev => {
      const act  = prev.activePack.acts[0]
      const used = prev.packResults.map(r => r.caseId)
      const nextCase = pickPackCase(act, used, prev.profile.cooldownIds, prev.profile.role || 'ceo')
      return {
        ...prev,
        packPhase: 'playing',
        currentCase: nextCase,
        phase: 'playing',
        lastResult: null,
        caseStartTime: Date.now(),
      }
    })
  }, [])

  const handlePackNextAct = useCallback(() => {
    setGame(prev => {
      const newActIndex = prev.packActIndex + 1
      const act  = prev.activePack.acts[newActIndex]
      const used = prev.packResults.map(r => r.caseId)
      const nextCase = pickPackCase(act, used, prev.profile.cooldownIds, prev.profile.role || 'ceo')
      return {
        ...prev,
        packActIndex: newActIndex,
        packPhase: 'playing',
        currentCase: nextCase,
        phase: 'playing',
        lastResult: null,
        caseStartTime: Date.now(),
      }
    })
  }, [])

  const handlePackDone = useCallback(() => {
    // Save pack completion to profile
    setGame(prev => {
      const pack = prev.activePack
      const correct = prev.packResults.filter(r => r.isCorrect).length
      const total   = prev.packResults.length
      const existing = prev.profile.packCompletions?.[pack.id] || { count: 0, bestCorrect: 0, bestTotal: 0 }
      const isBetter = !existing.bestTotal || (correct / total) > (existing.bestCorrect / existing.bestTotal)
      const updatedCompletions = {
        ...(prev.profile.packCompletions || {}),
        [pack.id]: {
          count: existing.count + 1,
          bestCorrect: isBetter ? correct : existing.bestCorrect,
          bestTotal:   isBetter ? total   : existing.bestTotal,
          lastPlayedAt: Date.now(),
        },
      }
      const updatedProfile = { ...prev.profile, packCompletions: updatedCompletions }
      saveProfile(updatedProfile)
      const level = getLevelInfo(updatedProfile.totalXP).current.level
      return {
        ...prev,
        profile: updatedProfile,
        activePack: null,
        packActIndex: 0,
        packResults: [],
        packHealth: null,
        packXpEarned: 0,
        packPhase: 'playing',
        phase: 'playing',
        currentCase: pickNextCase(
          updatedProfile.cooldownIds,
          level,
          updatedProfile.role || 'ceo',
          null,
          null,
          updatedProfile.reviewQueue || [],
        ),
        lastResult: null,
        sessionCases: [],   // fresh session after pack
      }
    })
  }, [])

  const handlePackCancel = useCallback(() => {
    setGame(prev => {
      const level = getLevelInfo(prev.profile.totalXP).current.level
      return {
        ...prev,
        activePack: null,
        packActIndex: 0,
        packResults: [],
        packHealth: null,
        packXpEarned: 0,
        packPhase: 'playing',
        phase: 'playing',
        currentCase: pickNextCase(
          prev.profile.cooldownIds,
          level,
          prev.profile.role || 'ceo',
          null,
          null,
          prev.profile.reviewQueue || [],
        ),
        lastResult: null,
      }
    })
  }, [])

  // ─── Session debrief ─────────────────────────────────────────────────────

  const handleDismissDebrief = useCallback(() => setGame(p => ({ ...p, showDebrief: false })), [])

  const handleEndSession = useCallback(() => {
    setGame(prev => {
      const level = getLevelInfo(prev.profile.totalXP).current.level
      // Reset session stats on the profile and return to play
      const updatedProfile = {
        ...prev.profile,
        sessionStats: { correct: 0, wrong: 0, xpEarned: 0 },
      }
      saveProfile(updatedProfile)
      return {
        ...prev,
        profile: updatedProfile,
        showDebrief: false,
        sessionCases: [],
        phase: 'playing',
        currentCase: pickNextCase(
          updatedProfile.cooldownIds,
          level,
          updatedProfile.role || 'ceo',
          null,
          null,
          updatedProfile.reviewQueue || [],
        ),
        lastResult: null,
      }
    })
  }, [])

  // ─── Vote of No Confidence ───────────────────────────────────────────────

  const handleAcknowledgeVoNC = useCallback(() => {
    setGame(p => ({ ...p, showVoNC: false }))
  }, [])

  // ─── Legacy Mode toggle ───────────────────────────────────────────────────

  const handleToggleLegacy = useCallback(() => {
    setGame(prev => {
      const updatedProfile = { ...prev.profile, legacyMode: !prev.profile.legacyMode }
      saveProfile(updatedProfile)
      return { ...prev, profile: updatedProfile }
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
  const handleDismissPrestige = useCallback(() => setGame(p => ({ ...p, prestigedTo: null })), [])
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

  const { profile, currentCase, phase, lastResult, leveledUpTo, prestigedTo, pendingAchievement,
    weakSpotAlert, showLeaderboard, showAchievements, showHistory, showAnalytics,
    showSettings, showMissions, showDebrief, showVoNC, isDaily, isRetry,
    activePack, packPhase, packActIndex, packResults, packHealth, packXpEarned, sessionCases,
    isConsequence, sourceCategory, prevBoardConfidence } = game

  const dailyAvailable    = !isDailyCompleted(profile)
  const activeCase        = phase === 'playing' ? currentCase : lastResult?.caseData
  const activeCategoryColor = CATEGORY_COLORS[activeCase?.category] || '#0066cc'

  // Pack-mode derived values
  const inPackPlay      = !!activePack && packPhase === 'playing'
  const packAct         = inPackPlay ? activePack?.acts[packActIndex] : null
  const isCurrentReview = !inPackPlay && !!(currentCase && (profile.reviewQueue || []).includes(currentCase.id))
  const packNextLabel   = activePack
    ? (packActIndex >= (activePack.acts.length - 1) ? 'See Mission Outcome →' : 'Continue Mission →')
    : 'Next Case →'
  // Modals that should suppress keyboard shortcuts in the game
  const anyModalOpen = showLeaderboard || showAchievements || showHistory || showAnalytics || showSettings || showMissions || showDebrief || showVoNC

  // Health context — injected above crisis-state cases so every decision feels situated
  const healthContextLine = phase === 'playing' && !isConsequence
    ? getHealthContextLine(profile.health)
    : null

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: 'rgb(7 15 28)' }}>

      {/* ── Ambient category glow ── sits behind all content ─────────────── */}
      <AnimatePresence>
        <motion.div
          key={activeCategoryColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{    opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div style={{
            position: 'absolute',
            top: '-25vh', left: '-15vw',
            width: '65vw', height: '65vw',
            borderRadius: '50%',
            background: activeCategoryColor,
            filter: 'blur(130px)',
            opacity: 0.038,
          }} />
        </motion.div>
      </AnimatePresence>

      {/* ── All content above glow ────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Header
        profile={profile}
        onSwitchProfile={handleSwitchProfile}
        onLeaderboard={() => setGame(p => ({ ...p, showLeaderboard: true }))}
        onAchievements={() => setGame(p => ({ ...p, showAchievements: true }))}
        onHistory={() => setGame(p => ({ ...p, showHistory: true }))}
        onAnalytics={() => setGame(p => ({ ...p, showAnalytics: true }))}
        onDailyChallenge={handleDailyChallenge}
        dailyAvailable={dailyAvailable}
        onMissions={handleOpenMissions}
        onSettings={handleOpenSettings}
        sfxMuted={sfxMuted}
        onToggleMute={handleToggleMute}
      />

      <main className="max-w-4xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_220px] gap-6 items-start">
        {/* Main play area */}
        <div className="min-w-0 space-y-3">
          {/* Daily challenge banner — hidden during pack missions */}
          {dailyAvailable && phase === 'playing' && !isDaily && !activePack && (
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

          {/* Shake wrapper — wrong answers nudge the play area */}
          <motion.div
            animate={shakeActive
              ? { x: [0, -7, 6, -5, 4, -2, 0], transition: { duration: 0.38, ease: 'easeOut' } }
              : { x: 0 }
            }
          >
            <AnimatePresence mode="wait">
              {/* ── Pack: Mission Briefing ──────────────────────────────── */}
              {activePack && packPhase === 'briefing' && (
                <PackBriefing
                  key="pack-briefing"
                  pack={activePack}
                  onBegin={handlePackBegin}
                  onCancel={handlePackCancel}
                />
              )}

              {/* ── Pack: Between-act Bridge ────────────────────────────── */}
              {activePack && packPhase === 'bridge' && (
                <PackBridge
                  key="pack-bridge"
                  pack={activePack}
                  actIndex={packActIndex}
                  lastResult={lastResult}
                  packHealth={packHealth}
                  onNext={handlePackNextAct}
                />
              )}

              {/* ── Pack: Mission Outcome ───────────────────────────────── */}
              {activePack && packPhase === 'outcome' && (
                <PackOutcome
                  key="pack-outcome"
                  pack={activePack}
                  packResults={packResults}
                  packHealth={packHealth}
                  xpEarned={packXpEarned}
                  onDone={handlePackDone}
                />
              )}

              {/* ── Normal / Pack-playing: Case card ───────────────────── */}
              {(!activePack || packPhase === 'playing') && phase === 'playing' && currentCase && (
                <CaseCard
                  key={currentCase.id + (isRetry ? '-retry' : '') + (isDaily ? '-daily' : '')}
                  caseData={currentCase}
                  onAnswer={isDaily ? handleDailyAnswer : handleAnswer}
                  isDaily={isDaily}
                  isRetry={isRetry}
                  isReview={isCurrentReview}
                  isConsequence={isConsequence}
                  sourceCategory={sourceCategory}
                  healthContext={healthContextLine}
                  packContext={packAct?.narrative || null}
                  packActLabel={packAct ? `Act ${packActIndex + 1} of ${activePack.acts.length} · ${packAct.category}` : null}
                  keyboardActive={!anyModalOpen}
                />
              )}

              {/* ── Normal / Pack-playing: Result panel ────────────────── */}
              {(!activePack || packPhase === 'playing') && phase === 'result' && lastResult && (
                <ResultPanel
                  key="result"
                  result={lastResult}
                  onNext={handleNext}
                  onRetry={handleRetry}
                  nextLabel={packNextLabel}
                  legacyMode={!!(profile.legacyMode)}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-24 space-y-4">
          <HealthMeters
            health={profile.health || getInitialHealth()}
            healthDelta={phase === 'result' && lastResult ? lastResult.healthDelta : null}
          />

          {/* Board Confidence */}
          <BoardMeter
            confidence={profile.boardConfidence ?? 60}
            prevConfidence={phase === 'result' ? prevBoardConfidence : null}
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

          {/* Company Chronicle — narrative story */}
          <CompanyChronicle profile={profile} />
        </div>
      </main>

      {/* Overlays */}
      <LevelUpModal level={leveledUpTo} onDismiss={handleDismissLevelUp} />
      <PrestigeModal prestige={prestigedTo} onDismiss={handleDismissPrestige} />
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
        <SettingsPanel
          onClose={() => setGame(p => ({ ...p, showSettings: false }))}
          legacyMode={!!(profile.legacyMode)}
          onToggleLegacy={handleToggleLegacy}
        />
      )}

      {/* Vote of No Confidence — fires when board confidence first crosses below 20 */}
      <AnimatePresence>
        {showVoNC && <VoNCModal onAcknowledge={handleAcknowledgeVoNC} />}
      </AnimatePresence>

      {/* Mission select modal */}
      <AnimatePresence>
        {showMissions && (
          <PackSelect
            profile={profile}
            onStart={handleStartPack}
            onClose={handleCloseMissions}
          />
        )}
      </AnimatePresence>

      {/* Session debrief modal — fires every 10 cases */}
      <AnimatePresence>
        {showDebrief && (
          <SessionDebrief
            sessionCases={sessionCases}
            profile={profile}
            onContinue={handleDismissDebrief}
            onEnd={handleEndSession}
          />
        )}
      </AnimatePresence>

      </div>{/* end content-above-glow wrapper */}
    </div>
  )
}
