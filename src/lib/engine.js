import { CASES } from '../data/cases'
import {
  LEVELS, XP_CORRECT, XP_WRONG, STREAK_BONUS,
  COOLDOWN_SIZE, COOLDOWN_WEIGHT, DIFFICULTY_BOOST,
  HEALTH_DEFAULTS, INVERTED_METRICS,
} from '../data/config'

// ─── Level helpers ─────────────────────────────────────────────────────────

export function getLevelInfo(totalXP) {
  let current = LEVELS[0]
  let next = LEVELS[1]
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVELS[i].xpRequired) {
      current = LEVELS[i]
      next = LEVELS[i + 1] || null
      break
    }
  }
  const xpIntoLevel = totalXP - current.xpRequired
  const xpForLevel = next ? next.xpRequired - current.xpRequired : 1
  const progress = next ? Math.min(xpIntoLevel / xpForLevel, 1) : 1
  return { current, next, progress, xpIntoLevel, xpForLevel }
}

// ─── XP calculation ────────────────────────────────────────────────────────

export function calcXP(isCorrect, difficulty, streak) {
  const base = isCorrect ? XP_CORRECT[difficulty] : XP_WRONG[difficulty]
  if (!isCorrect) return base

  // Streak bonus: find the highest applicable streak milestone
  let bonus = 0
  for (const { streak: threshold, bonus: b } of [...STREAK_BONUS].reverse()) {
    if (streak > 0 && streak % threshold === 0) {
      bonus = b
      break
    }
  }
  return base + bonus
}

// ─── Weighted random case selection ────────────────────────────────────────

export function pickNextCase(cooldownIds, currentLevel) {
  const weights = CASES.map(c => {
    let w = cooldownIds.includes(c.id) ? COOLDOWN_WEIGHT : 1.0

    // Apply difficulty boost for higher levels
    for (const { minLevel, difficulty, multiplier } of DIFFICULTY_BOOST) {
      if (currentLevel >= minLevel && c.difficulty === difficulty) {
        w *= multiplier
        break
      }
    }
    return { c, w }
  })

  const total = weights.reduce((sum, { w }) => sum + w, 0)
  let rand = Math.random() * total
  for (const { c, w } of weights) {
    rand -= w
    if (rand <= 0) return c
  }
  return weights[weights.length - 1].c
}

// ─── Cooldown management ───────────────────────────────────────────────────

export function updateCooldown(cooldownIds, newId) {
  const updated = [newId, ...cooldownIds.filter(id => id !== newId)]
  return updated.slice(0, COOLDOWN_SIZE)
}

// ─── Health meter updates ──────────────────────────────────────────────────

export function applyConsequences(health, consequences) {
  const updated = { ...health }
  for (const [key, delta] of Object.entries(consequences)) {
    if (key in updated) {
      updated[key] = Math.min(100, Math.max(0, updated[key] + delta))
    }
  }
  return updated
}

export function healthBarValue(key, value) {
  // executionRisk is inverted: show (100 - value) as "safety"
  return INVERTED_METRICS.includes(key) ? 100 - value : value
}

export function healthBarColor(value) {
  if (value >= 70) return '#34d399'
  if (value >= 40) return '#fbbf24'
  return '#f87171'
}

// ─── Initial state builder ─────────────────────────────────────────────────

export function buildInitialState() {
  return {
    totalXP: 0,
    streak: 0,
    bestStreak: 0,
    casesAnswered: 0,
    correctAnswers: 0,
    cooldownIds: [],
    health: { ...HEALTH_DEFAULTS },
    currentCase: null,
    phase: 'playing',    // 'playing' | 'result' | 'levelup'
    lastResult: null,
    leveledUpTo: null,
    sessionStats: { correct: 0, wrong: 0, xpEarned: 0 },
  }
}
