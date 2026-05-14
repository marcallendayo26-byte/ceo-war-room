import { CASES as CASES1 } from '../data/cases'
import { CASES2 } from '../data/cases2'
import { CASES3 } from '../data/cases3'
import { CASES_TECH } from '../data/cases_tech'
import { CASES_TECH2 } from '../data/cases_tech2'
import { CASES_TECH3 } from '../data/cases_tech3'
import { CASES_TECH4 } from '../data/cases_tech4'
import { CASES_TECH5 } from '../data/cases_tech5'
import { CASES_PM } from '../data/cases_pm'
import { CASES_PM2 } from '../data/cases_pm2'
import { CASES_PM3 } from '../data/cases_pm3'
import { CASES_PM4 } from '../data/cases_pm4'
import { CASES_PM5 } from '../data/cases_pm5'
import { CASES_PM6 } from '../data/cases_pm6'
import { CASES_PM7 } from '../data/cases_pm7'
import { CASES_EM } from '../data/cases_em'
import { CASES_EM2 } from '../data/cases_em2'
import { CASES_EM3 } from '../data/cases_em3'
import { CASES_EM4 } from '../data/cases_em4'
import { CASES_EM5 } from '../data/cases_em5'
import { CASES_EM6 } from '../data/cases_em6'
import { CASES_CSM } from '../data/cases_csm'
import { CASES_CSM2 } from '../data/cases_csm2'
import { CASES_CSM3 } from '../data/cases_csm3'
import { CASES_CSM4 } from '../data/cases_csm4'
import { CASES_CSM5 } from '../data/cases_csm5'
import { CASES_SALES } from '../data/cases_sales'
import { CASES_SALES2 } from '../data/cases_sales2'
import { CASES_SALES3 } from '../data/cases_sales3'
import { CASES_SALES4 } from '../data/cases_sales4'
import { CASES_BD } from '../data/cases_bd'
import { CASES_BD2 } from '../data/cases_bd2'
import { CASES_BD3 } from '../data/cases_bd3'
import { CASES_BD4 } from '../data/cases_bd4'
import { CASES_BD5 } from '../data/cases_bd5'
import { CASES_CFO } from '../data/cases_cfo'
import { CASES_CFO2 } from '../data/cases_cfo2'
import { CASES_CFO3 } from '../data/cases_cfo3'
import { CASES_CFO4 } from '../data/cases_cfo4'
import { CASES_CFO5 } from '../data/cases_cfo5'
import { CASES_CFO6 } from '../data/cases_cfo6'
import { CASES_CFO7 } from '../data/cases_cfo7'
import { CASES_CFO8 } from '../data/cases_cfo8'
import { CASES_CFO9 } from '../data/cases_cfo9'
import { CASES_CMO } from '../data/cases_cmo'
import { CASES_CMO2 } from '../data/cases_cmo2'
import { CASES_CMO3 } from '../data/cases_cmo3'
import { CASES_CMO4 } from '../data/cases_cmo4'
import { CASES_CMO5 } from '../data/cases_cmo5'
import { CASES_CMO6 } from '../data/cases_cmo6'
import { CASES_CMO7 } from '../data/cases_cmo7'
import { CASES_CMO8 } from '../data/cases_cmo8'
import { CASES_CHRO } from '../data/cases_chro'
import { CASES_CHRO2 } from '../data/cases_chro2'
import { CASES_CHRO3 } from '../data/cases_chro3'
import { CASES_CHRO4 } from '../data/cases_chro4'
import { CASES_CHRO5 } from '../data/cases_chro5'
import { CASES_CHRO6 } from '../data/cases_chro6'
import { CASES_CHRO7 } from '../data/cases_chro7'
import { CASES_CHRO8 } from '../data/cases_chro8'

const CMO_CASES = [
  ...CASES_CMO, ...CASES_CMO2, ...CASES_CMO3, ...CASES_CMO4,
  ...CASES_CMO5, ...CASES_CMO6, ...CASES_CMO7, ...CASES_CMO8,
]
const CHRO_CASES = [
  ...CASES_CHRO, ...CASES_CHRO2, ...CASES_CHRO3, ...CASES_CHRO4,
  ...CASES_CHRO5, ...CASES_CHRO6, ...CASES_CHRO7, ...CASES_CHRO8,
]

const CEO_CASES = [...CASES1, ...CASES2, ...CASES3]
const TECH_CASES = [...CASES_TECH, ...CASES_TECH2, ...CASES_TECH3, ...CASES_TECH4, ...CASES_TECH5]
const PM_CASES = [...CASES_PM, ...CASES_PM2, ...CASES_PM3, ...CASES_PM4, ...CASES_PM5, ...CASES_PM6, ...CASES_PM7]
const EM_CASES = [...CASES_EM, ...CASES_EM2, ...CASES_EM3, ...CASES_EM4, ...CASES_EM5, ...CASES_EM6]
const CSM_CASES = [...CASES_CSM, ...CASES_CSM2, ...CASES_CSM3, ...CASES_CSM4, ...CASES_CSM5]
const SALES_CASES = [...CASES_SALES, ...CASES_SALES2, ...CASES_SALES3, ...CASES_SALES4]
const BD_CASES = [...CASES_BD, ...CASES_BD2, ...CASES_BD3, ...CASES_BD4, ...CASES_BD5]
const CFO_CASES = [
  ...CASES_CFO, ...CASES_CFO2, ...CASES_CFO3, ...CASES_CFO4,
  ...CASES_CFO5, ...CASES_CFO6, ...CASES_CFO7, ...CASES_CFO8, ...CASES_CFO9,
]

function getCasePool(role) {
  if (role === 'tech') return TECH_CASES
  if (role === 'pm') return PM_CASES
  if (role === 'em') return EM_CASES
  if (role === 'csm') return CSM_CASES
  if (role === 'sales') return SALES_CASES
  if (role === 'bd') return BD_CASES
  if (role === 'cfo') return CFO_CASES
  if (role === 'cmo') return CMO_CASES
  if (role === 'chro') return CHRO_CASES
  return CEO_CASES
}

// Public accessor used by PDF export — always reflects the live case pools
export function getCasesForRole(role) {
  return getCasePool(role)
}

// Lookup a case by ID across ALL role pools (used by HistoryPanel and others)
const ALL_POOLS_FLAT = [
  ...CEO_CASES, ...TECH_CASES, ...PM_CASES, ...EM_CASES,
  ...CSM_CASES, ...SALES_CASES, ...BD_CASES, ...CFO_CASES,
  ...CMO_CASES, ...CHRO_CASES,
]
const CASE_BY_ID = new Map(ALL_POOLS_FLAT.map(c => [c.id, c]))
export function getCaseById(id) {
  return CASE_BY_ID.get(id) || null
}
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

export function pickNextCase(cooldownIds, currentLevel, role = 'ceo', excludeId = null, categoryFilter = null) {
  const CASES = getCasePool(role)
  let pool = excludeId ? CASES.filter(c => c.id !== excludeId) : CASES
  if (categoryFilter) {
    const narrowed = pool.filter(c => c.category === categoryFilter)
    if (narrowed.length > 0) pool = narrowed   // fall back to full pool if category has no cases
  }

  // Dynamic cooldown: suppress the most-recently-seen 60% of the pool.
  // This guarantees a user must work through ~40% of cases before seeing
  // any given case again — much better than a fixed window of 15.
  const effectiveCooldownSize = Math.floor(pool.length * 0.6)
  const activeCooldown = new Set((cooldownIds || []).slice(0, effectiveCooldownSize))

  const weights = pool.map(c => {
    let w = activeCooldown.has(c.id) ? COOLDOWN_WEIGHT : 1.0
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

export function getDailyCase(role = 'ceo') {
  const CASES = getCasePool(role)
  const dateStr = `${getTodayStr()}-${role}`
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
