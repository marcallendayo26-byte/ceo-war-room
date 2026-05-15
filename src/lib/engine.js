import { CONSEQUENCE_CASES, CONSEQUENCE_MAP } from '../data/consequences'
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
import { CASES4 } from '../data/cases4'
import { CASES_TECH6 } from '../data/cases_tech6'
import { CASES_PM8 } from '../data/cases_pm8'
import { CASES_CSM6 } from '../data/cases_csm6'
import { CASES_CFO10 } from '../data/cases_cfo10'
import { CASES_BD6 } from '../data/cases_bd6'

const CMO_CASES = [
  ...CASES_CMO, ...CASES_CMO2, ...CASES_CMO3, ...CASES_CMO4,
  ...CASES_CMO5, ...CASES_CMO6, ...CASES_CMO7, ...CASES_CMO8,
]
const CHRO_CASES = [
  ...CASES_CHRO, ...CASES_CHRO2, ...CASES_CHRO3, ...CASES_CHRO4,
  ...CASES_CHRO5, ...CASES_CHRO6, ...CASES_CHRO7, ...CASES_CHRO8,
]

const CEO_CASES = [...CASES1, ...CASES2, ...CASES3, ...CASES4]
const TECH_CASES = [...CASES_TECH, ...CASES_TECH2, ...CASES_TECH3, ...CASES_TECH4, ...CASES_TECH5, ...CASES_TECH6]
const PM_CASES = [...CASES_PM, ...CASES_PM2, ...CASES_PM3, ...CASES_PM4, ...CASES_PM5, ...CASES_PM6, ...CASES_PM7, ...CASES_PM8]
const EM_CASES = [...CASES_EM, ...CASES_EM2, ...CASES_EM3, ...CASES_EM4, ...CASES_EM5, ...CASES_EM6]
const CSM_CASES = [...CASES_CSM, ...CASES_CSM2, ...CASES_CSM3, ...CASES_CSM4, ...CASES_CSM5, ...CASES_CSM6]
const SALES_CASES = [...CASES_SALES, ...CASES_SALES2, ...CASES_SALES3, ...CASES_SALES4]
const BD_CASES = [...CASES_BD, ...CASES_BD2, ...CASES_BD3, ...CASES_BD4, ...CASES_BD5, ...CASES_BD6]
const CFO_CASES = [
  ...CASES_CFO, ...CASES_CFO2, ...CASES_CFO3, ...CASES_CFO4,
  ...CASES_CFO5, ...CASES_CFO6, ...CASES_CFO7, ...CASES_CFO8, ...CASES_CFO9, ...CASES_CFO10,
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

export function pickNextCase(cooldownIds, currentLevel, role = 'ceo', excludeId = null, categoryFilter = null, reviewQueue = []) {
  const CASES = getCasePool(role)
  let pool = excludeId ? CASES.filter(c => c.id !== excludeId) : CASES
  if (categoryFilter) {
    const narrowed = pool.filter(c => c.category === categoryFilter)
    if (narrowed.length > 0) pool = narrowed   // fall back to full pool if category has no cases
  }

  // ── Spaced repetition: 35 % chance to surface a review case ─────────────
  // Only applies when not drilling a specific category.
  if (!categoryFilter && reviewQueue.length > 0 && Math.random() < 0.35) {
    const caseMap = new Map(CASES.map(c => [c.id, c]))
    const reviewable = reviewQueue.map(id => caseMap.get(id)).filter(Boolean)
    if (reviewable.length > 0) {
      return reviewable[Math.floor(Math.random() * reviewable.length)]
    }
  }

  // Dynamic cooldown: suppress the most-recently-seen 60% of the pool.
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

// ─── Review queue helpers ──────────────────────────────────────────────────

// Add a case to the review queue (wrong answers land here).
// Capped at 20; prevents duplicates; most-recent first.
export function addToReviewQueue(queue, caseId) {
  return [caseId, ...(queue || []).filter(id => id !== caseId)].slice(0, 20)
}

// Remove a case from the review queue (answered correctly).
export function removeFromReviewQueue(queue, caseId) {
  return (queue || []).filter(id => id !== caseId)
}

// ─── Pack case picker ──────────────────────────────────────────────────────

// Pick a case for a specific pack act, avoiding already-played cases.
export function pickPackCase(act, usedCaseIds, cooldownIds, role) {
  const CASES = getCasePool(role)
  const usedSet = new Set(usedCaseIds || [])

  let pool = CASES.filter(c => c.category === act.category && !usedSet.has(c.id))
  if (act.difficulty) pool = pool.filter(c => c.difficulty === act.difficulty)

  // Graceful fallback: relax difficulty, then category
  if (pool.length === 0) {
    pool = CASES.filter(c => c.category === act.category && !usedSet.has(c.id))
  }
  if (pool.length === 0) {
    pool = CASES.filter(c => c.category === act.category)
  }
  if (pool.length === 0) {
    pool = CASES  // last resort
  }

  // Prefer non-cooldown cases
  const cooldownSet = new Set(cooldownIds || [])
  const weights = pool.map(c => ({ c, w: cooldownSet.has(c.id) ? 0.1 : 1.0 }))
  const total = weights.reduce((s, { w }) => s + w, 0)
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

// ─── Consequence case helpers ──────────────────────────────────────────────

// Pick a consequence case triggered by a wrong answer in the given category.
// Avoids recently-used consequence IDs to prevent repetition within a session.
export function pickConsequenceCase(triggeredCategory, usedConsequenceIds = []) {
  const usedSet = new Set(usedConsequenceIds)
  let pool = CONSEQUENCE_CASES.filter(
    c => c.triggerCategories.includes(triggeredCategory) && !usedSet.has(c.id)
  )
  // Fallback: if category has no unused matches, allow any unused consequence
  if (pool.length === 0) {
    pool = CONSEQUENCE_CASES.filter(c => !usedSet.has(c.id))
  }
  // Last resort: allow any consequence case
  if (pool.length === 0) pool = CONSEQUENCE_CASES
  return pool[Math.floor(Math.random() * pool.length)]
}

export function getConsequenceCaseById(id) {
  return CONSEQUENCE_MAP.get(id) || null
}

// ─── Board Confidence helpers ──────────────────────────────────────────────

// Returns the status label, color, and description for a given confidence value.
export function getBoardStatus(confidence) {
  if (confidence >= 80) return { label: 'Confident',  color: '#34d399', description: 'The board stands behind you' }
  if (confidence >= 60) return { label: 'Stable',     color: '#0066cc', description: 'Board relationship is solid' }
  if (confidence >= 40) return { label: 'Watching',   color: '#fbbf24', description: 'The board is monitoring closely' }
  if (confidence >= 20) return { label: 'Concerned',  color: '#f97316', description: 'Board confidence is eroding fast' }
  return                       { label: 'Hostile',    color: '#ef4444', description: 'A vote of no confidence is imminent' }
}

// How much board confidence changes per answer.
// Correct: +difficulty*1.5 (rounded). Wrong: -difficulty*4. Consequence cases amplify by 1.5×.
export function calcBoardDelta(isCorrect, difficulty, isConsequence = false, newStreak = 0) {
  let delta = isCorrect
    ? Math.ceil(difficulty * 1.5)
    : -(difficulty * 4)
  if (isConsequence) delta = Math.round(delta * 1.5)
  if (isCorrect && newStreak >= 5) delta += 3
  return delta
}

// ─── Health crisis helpers ─────────────────────────────────────────────────

// Returns display names of health metrics currently in crisis (display value < 25).
export function getCrisisMetrics(health) {
  if (!health) return []
  const crisis = []
  const h = { ...HEALTH_DEFAULTS, ...health }
  if (healthBarValue('cash',              h.cash)              < 25) crisis.push('cash reserves')
  if (healthBarValue('teamMorale',        h.teamMorale)        < 25) crisis.push('team morale')
  if (healthBarValue('customerTrust',     h.customerTrust)     < 25) crisis.push('client trust')
  if (healthBarValue('strategicPosition', h.strategicPosition) < 25) crisis.push('strategic position')
  if (healthBarValue('executionRisk',     h.executionRisk)     < 25) crisis.push('execution risk')
  if (healthBarValue('growth',            h.growth)            < 25) crisis.push('growth')
  if (healthBarValue('profitability',     h.profitability)     < 25) crisis.push('profitability')
  return crisis
}

// Returns a one-line situational context string when health is in crisis,
// injected above the case scenario to make the stakes feel connected.
export function getHealthContextLine(health) {
  const crisis = getCrisisMetrics(health)
  if (crisis.length === 0) return null
  if (crisis.length === 1)
    return `With ${crisis[0]} in critical territory, every call is under the microscope:`
  return `With ${crisis[0]} and ${crisis[1]} both in crisis, the board is watching every move:`
}

// ─── Company Chronicle ─────────────────────────────────────────────────────

// Generates a short narrative paragraph from the profile's history and health.
// Returns null if there is no meaningful history yet.
export function generateChronicle(profile) {
  const history      = profile.caseHistory || []
  const health       = profile.health || getInitialHealth()
  const stats        = profile.categoryStats || {}
  const boardConf    = profile.boardConfidence ?? 60

  if (history.length < 3) return null

  const segments = []

  // ── Tenure opener ─────────────────────────────────────────────
  const total        = history.length
  const totalCorrect = history.filter(h => h.isCorrect).length
  const totalPct     = totalCorrect / total

  const recent       = history.slice(-10)
  const recentPct    = recent.filter(h => h.isCorrect).length / recent.length

  if (total < 10) {
    const tone = totalPct >= 0.7 ? 'promising early signals' : 'an uncertain start'
    segments.push(`${total} decisions into your tenure — ${tone}. The board is forming its view.`)
  } else {
    const trend =
      recentPct > totalPct + 0.12 ? 'your judgment is sharpening' :
      recentPct < totalPct - 0.12 ? 'your recent decisions have been costly' :
      'your pattern is consistent'
    segments.push(`${total} decisions in. ${trend.charAt(0).toUpperCase() + trend.slice(1)}.`)
  }

  // ── Strength ──────────────────────────────────────────────────
  const strong = Object.entries(stats)
    .filter(([, s]) => s.total >= 3 && s.correct / s.total >= 0.75)
    .sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total))
  if (strong.length > 0) {
    segments.push(`Your ${strong[0][0]} instincts have been your sharpest weapon.`)
  }

  // ── Weakness ──────────────────────────────────────────────────
  const weak = Object.entries(stats)
    .filter(([, s]) => s.total >= 3 && s.correct / s.total < 0.5)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
  if (weak.length > 0) {
    segments.push(`But ${weak[0][0]} has been your blind spot — and the company still carries those scars.`)
  }

  // ── Health narrative ──────────────────────────────────────────
  const crisisItems = getCrisisMetrics(health)
  if (crisisItems.length >= 2) {
    segments.push(`${crisisItems[0].charAt(0).toUpperCase() + crisisItems[0].slice(1)} and ${crisisItems[1]} are both in crisis. The company is fragile.`)
  } else if (crisisItems.length === 1) {
    segments.push(`${crisisItems[0].charAt(0).toUpperCase() + crisisItems[0].slice(1)} has reached a critical low. One more wrong call here could break it.`)
  } else {
    const healthVals = Object.keys(health).map(k => healthBarValue(k, health[k]))
    const avg = healthVals.reduce((s, v) => s + v, 0) / healthVals.length
    if (avg > 65) {
      segments.push('The company is in solid shape. But the board knows how fast that can change.')
    } else if (avg > 45) {
      segments.push('The company is holding — not thriving, not failing. The margin for error is thin.')
    }
  }

  // ── Board narrative ───────────────────────────────────────────
  const boardStatus = getBoardStatus(boardConf)
  if (boardConf < 25) {
    segments.push(`The board is ${boardStatus.label.toLowerCase()}. A vote of no confidence is within reach.`)
  } else if (boardConf < 45) {
    segments.push(`The board is watching every move. Their patience is not unlimited.`)
  } else if (boardConf > 80) {
    segments.push(`The board trusts your direction. Use that capital before the next crisis spends it.`)
  }

  return segments.join(' ')
}
