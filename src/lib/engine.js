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

export function calcXP(isCorrect, difficulty, streak, isRetry = false, isDaily = false) {
  let base = isCorrect ? XP_CORRECT[difficulty] : XP_WRONG[difficulty]
  if (isRetry && isCorrect) base = Math.floor(base / 2)

  let streakBonus = 0
  if (isCorrect && !isRetry) {
    for (const { streak: threshold, bonus } of [...STREAK_BONUS].reverse()) {
      if (streak > 0 && streak % threshold === 0) {
        streakBonus = bonus
        break
      }
    }
  }

  let total = base + streakBonus
  if (isDaily && isCorrect) total *= 3
  return { xp: total, streakBonus }
}

// ─── Weighted random case selection ────────────────────────────────────────

export function pickNextCase(cooldownIds, currentLevel, excludeId = null) {
  const pool = excludeId ? CASES.filter(c => c.id !== excludeId) : CASES
  const weights = pool.map(c => {
    let w = cooldownIds.includes(c.id) ? COOLDOWN_WEIGHT : 1.0
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

// ─── Daily challenge ───────────────────────────────────────────────────────

export function getDailyCase() {
  const today = new Date()
  const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  // Deterministic hash of date → same case for everyone on the same day
  let hash = 0
  for (const ch of dateStr) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffffffff
  return CASES[Math.abs(hash) % CASES.length]
}

export function getTodayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function isDailyCompleted(profile) {
  return profile.dailyChallenge?.date === getTodayStr() && profile.dailyChallenge?.completed
}

// ─── Cooldown management ───────────────────────────────────────────────────

export function updateCooldown(cooldownIds, newId) {
  const updated = [newId, ...cooldownIds.filter(id => id !== newId)]
  return updated.slice(0, COOLDOWN_SIZE)
}

// ─── Health meter updates ──────────────────────────────────────────────────

export function applyConsequences(health, consequences) {
  const base = health || { ...HEALTH_DEFAULTS }
  const updated = { ...base }
  for (const [key, delta] of Object.entries(consequences)) {
    if (key in updated) {
      updated[key] = Math.min(100, Math.max(0, updated[key] + delta))
    }
  }
  return updated
}

export function healthBarValue(key, value) {
  return INVERTED_METRICS.includes(key) ? 100 - value : value
}

export function healthBarColor(value) {
  if (value >= 70) return '#34d399'
  if (value >= 40) return '#fbbf24'
  return '#f87171'
}

// ─── Category stats ────────────────────────────────────────────────────────

export function updateCategoryStats(categoryStats, category, isCorrect) {
  const current = categoryStats[category] || { correct: 0, total: 0 }
  return {
    ...categoryStats,
    [category]: {
      correct: current.correct + (isCorrect ? 1 : 0),
      total: current.total + 1,
    },
  }
}

export function getWeakSpot(categoryStats) {
  // Returns the weakest category if it has ≥3 attempts and <50% accuracy
  let worst = null
  let worstPct = 1
  for (const [cat, { correct, total }] of Object.entries(categoryStats)) {
    if (total >= 3) {
      const pct = correct / total
      if (pct < 0.5 && pct < worstPct) {
        worstPct = pct
        worst = { category: cat, correct, total, pct }
      }
    }
  }
  return worst
}

// ─── Initial health ────────────────────────────────────────────────────────

export function getInitialHealth() {
  return { ...HEALTH_DEFAULTS }
}
