import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import CaseCard from './components/CaseCard'
import ResultPanel from './components/ResultPanel'
import HealthMeters from './components/HealthMeters'
import LevelUpModal from './components/LevelUpModal'
import {
  buildInitialState, pickNextCase, updateCooldown,
  applyConsequences, calcXP, getLevelInfo,
} from './lib/engine'
import { loadState, saveState, clearState } from './lib/storage'

function mergeWithSaved(initial, saved) {
  if (!saved) return initial
  return {
    ...initial,
    totalXP: saved.totalXP ?? initial.totalXP,
    streak: saved.streak ?? initial.streak,
    bestStreak: saved.bestStreak ?? initial.bestStreak,
    casesAnswered: saved.casesAnswered ?? initial.casesAnswered,
    correctAnswers: saved.correctAnswers ?? initial.correctAnswers,
    cooldownIds: saved.cooldownIds ?? initial.cooldownIds,
    health: { ...initial.health, ...(saved.health ?? {}) },
  }
}

export default function App() {
  const [state, setState] = useState(() => {
    const base = buildInitialState()
    const saved = loadState()
    const merged = mergeWithSaved(base, saved)
    merged.currentCase = pickNextCase(merged.cooldownIds, getLevelInfo(merged.totalXP).current.level)
    return merged
  })

  // Save on every state change
  useEffect(() => {
    saveState(state)
  }, [state])

  const handleAnswer = useCallback((chosenIdx) => {
    setState(prev => {
      const c = prev.currentCase
      const isCorrect = chosenIdx === c.correct
      const prevLevel = getLevelInfo(prev.totalXP).current.level

      const newStreak = isCorrect ? prev.streak + 1 : 0
      const bestStreak = Math.max(prev.bestStreak, newStreak)

      // XP — streakBonus is only included when correct
      const baseXP = calcXP(isCorrect, c.difficulty, newStreak)
      // Separate streak bonus for display
      const streakBonus = isCorrect
        ? ([10, 5, 3].includes(newStreak) ? (newStreak === 10 ? 50 : newStreak === 5 ? 20 : 10) : 0)
        : 0
      const xpDelta = baseXP  // already includes streak bonus from calcXP

      const totalXP = Math.max(0, prev.totalXP + xpDelta)
      const newLevel = getLevelInfo(totalXP).current.level
      const leveledUp = newLevel > prevLevel

      // Health: only apply consequences on correct answer
      const consequences = isCorrect ? c.consequences : {}
      const health = applyConsequences(prev.health, consequences)

      const cooldownIds = updateCooldown(prev.cooldownIds, c.id)

      return {
        ...prev,
        totalXP,
        streak: newStreak,
        bestStreak,
        casesAnswered: prev.casesAnswered + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        cooldownIds,
        health,
        phase: 'result',
        lastResult: {
          caseData: c,
          chosen: chosenIdx,
          isCorrect,
          xpDelta,
          streakBonus,
          newStreak,
          healthDelta: isCorrect ? c.consequences : {},
        },
        leveledUpTo: leveledUp ? getLevelInfo(totalXP).current : null,
        sessionStats: {
          correct: prev.sessionStats.correct + (isCorrect ? 1 : 0),
          wrong: prev.sessionStats.wrong + (isCorrect ? 0 : 1),
          xpEarned: prev.sessionStats.xpEarned + Math.max(0, xpDelta),
        },
      }
    })
  }, [])

  const handleNext = useCallback(() => {
    setState(prev => ({
      ...prev,
      phase: 'playing',
      currentCase: pickNextCase(prev.cooldownIds, getLevelInfo(prev.totalXP).current.level),
      lastResult: null,
      leveledUpTo: null,
    }))
  }, [])

  const handleDismissLevelUp = useCallback(() => {
    setState(prev => ({ ...prev, leveledUpTo: null }))
  }, [])

  const handleReset = useCallback(() => {
    if (!window.confirm('Reset all progress? This cannot be undone.')) return
    clearState()
    const base = buildInitialState()
    base.currentCase = pickNextCase([], 1)
    setState(base)
  }, [])

  const { phase, currentCase, lastResult, leveledUpTo } = state

  return (
    <div className="min-h-screen" style={{ background: 'rgb(7 15 28)' }}>
      <Header state={state} onReset={handleReset} />

      <main className="max-w-4xl mx-auto px-4 py-6 grid lg:grid-cols-[1fr_220px] gap-6 items-start">
        {/* Main play area */}
        <div className="min-w-0">
          {phase === 'playing' && currentCase && (
            <CaseCard key={currentCase.id} caseData={currentCase} onAnswer={handleAnswer} />
          )}
          {phase === 'result' && lastResult && (
            <ResultPanel result={lastResult} onNext={handleNext} />
          )}
        </div>

        {/* Sidebar: health meters */}
        <div className="lg:sticky lg:top-24">
          <HealthMeters health={state.health} />

          {/* Session mini-stats */}
          <div className="mt-4 bg-navy-800 border border-white/8 rounded-2xl p-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">This Session</p>
            <div className="space-y-2">
              {[
                { label: 'Correct', value: state.sessionStats.correct, color: '#34d399' },
                { label: 'Wrong', value: state.sessionStats.wrong, color: '#f87171' },
                { label: 'XP earned', value: `+${state.sessionStats.xpEarned}`, color: '#3b9eff' },
                { label: 'Best streak', value: state.bestStreak, color: '#fbbf24' },
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

      <LevelUpModal level={leveledUpTo} onDismiss={handleDismissLevelUp} />
    </div>
  )
}
