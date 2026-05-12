import { CATEGORY_COLORS } from '../data/config'

// ─── Period helpers ────────────────────────────────────────────────────────

export function getPeriodBounds(period) {
  const now = new Date()
  const start = new Date(now)

  switch (period) {
    case 'day':
      start.setHours(0, 0, 0, 0)
      break
    case 'week':
      start.setDate(now.getDate() - now.getDay())
      start.setHours(0, 0, 0, 0)
      break
    case 'month':
      start.setDate(1)
      start.setHours(0, 0, 0, 0)
      break
    case 'year':
      start.setMonth(0, 1)
      start.setHours(0, 0, 0, 0)
      break
    case 'all':
    default:
      return { start: new Date(0), end: new Date(now.getTime() + 86400000) }
  }

  return { start, end: new Date(now.getTime() + 86400000) }
}

export function filterByPeriod(history, period) {
  const { start, end } = getPeriodBounds(period)
  return history.filter(e => e.timestamp >= start.getTime() && e.timestamp < end.getTime())
}

// ─── Core stats ────────────────────────────────────────────────────────────

export function computeStats(entries) {
  if (entries.length === 0) {
    return { questions: 0, correct: 0, accuracy: 0, totalTime: 0, avgTime: 0, xpEarned: 0 }
  }

  const correct = entries.filter(e => e.isCorrect).length
  const totalTime = entries.reduce((s, e) => s + (e.timeSpent || 0), 0)
  const xpEarned = entries.reduce((s, e) => s + Math.max(0, e.xpDelta || 0), 0)

  return {
    questions: entries.length,
    correct,
    accuracy: Math.round((correct / entries.length) * 100),
    totalTime,                              // ms
    avgTime: Math.round(totalTime / entries.length),  // ms per case
    xpEarned,
  }
}

export function formatTime(ms) {
  if (!ms || ms < 1000) return '0s'
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  if (h > 0) return `${h}h ${m % 60}m`
  if (m > 0) return `${m}m ${s % 60}s`
  return `${s}s`
}

// ─── Activity chart data ───────────────────────────────────────────────────

// Returns last N buckets with label + question count + correct count
export function getActivityBars(history, period) {
  const now = new Date()

  if (period === 'day') {
    // Last 24 hours by hour
    const buckets = Array.from({ length: 24 }, (_, i) => {
      const h = (now.getHours() - 23 + i + 24) % 24
      return { label: h === 0 ? '12a' : h < 12 ? `${h}a` : h === 12 ? '12p' : `${h - 12}p`, h, questions: 0, correct: 0 }
    })
    const cutoff = new Date(now); cutoff.setHours(now.getHours() - 23, 0, 0, 0)
    history.filter(e => e.timestamp >= cutoff.getTime()).forEach(e => {
      const hour = new Date(e.timestamp).getHours()
      const idx = buckets.findIndex(b => b.h === hour)
      if (idx >= 0) { buckets[idx].questions++; if (e.isCorrect) buckets[idx].correct++ }
    })
    return buckets
  }

  if (period === 'week') {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const buckets = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now); d.setDate(now.getDate() - now.getDay() + i)
      return { label: days[d.getDay()], date: d.toDateString(), questions: 0, correct: 0 }
    })
    const { start } = getPeriodBounds('week')
    history.filter(e => e.timestamp >= start.getTime()).forEach(e => {
      const key = new Date(e.timestamp).toDateString()
      const idx = buckets.findIndex(b => b.date === key)
      if (idx >= 0) { buckets[idx].questions++; if (e.isCorrect) buckets[idx].correct++ }
    })
    return buckets
  }

  if (period === 'month') {
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
    const buckets = Array.from({ length: daysInMonth }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth(), i + 1)
      return { label: `${i + 1}`, date: d.toDateString(), questions: 0, correct: 0 }
    })
    const { start } = getPeriodBounds('month')
    history.filter(e => e.timestamp >= start.getTime()).forEach(e => {
      const key = new Date(e.timestamp).toDateString()
      const idx = buckets.findIndex(b => b.date === key)
      if (idx >= 0) { buckets[idx].questions++; if (e.isCorrect) buckets[idx].correct++ }
    })
    return buckets
  }

  if (period === 'year') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const buckets = months.map((label, i) => ({ label, month: i, questions: 0, correct: 0 }))
    const { start } = getPeriodBounds('year')
    history.filter(e => e.timestamp >= start.getTime()).forEach(e => {
      const m = new Date(e.timestamp).getMonth()
      buckets[m].questions++; if (e.isCorrect) buckets[m].correct++
    })
    return buckets
  }

  // All time: last 12 months
  const buckets = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 11 + i, 1)
    return { label: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()], monthKey: `${d.getFullYear()}-${d.getMonth()}`, questions: 0, correct: 0 }
  })
  history.forEach(e => {
    const d = new Date(e.timestamp)
    const key = `${d.getFullYear()}-${d.getMonth()}`
    const idx = buckets.findIndex(b => b.monthKey === key)
    if (idx >= 0) { buckets[idx].questions++; if (e.isCorrect) buckets[idx].correct++ }
  })
  return buckets
}

// ─── Category breakdown ────────────────────────────────────────────────────

export function getCategoryBreakdown(entries) {
  const map = {}
  for (const e of entries) {
    if (!map[e.category]) map[e.category] = { total: 0, correct: 0, time: 0 }
    map[e.category].total++
    if (e.isCorrect) map[e.category].correct++
    map[e.category].time += e.timeSpent || 0
  }
  return Object.entries(map)
    .map(([cat, v]) => ({ category: cat, ...v, accuracy: Math.round((v.correct / v.total) * 100), color: CATEGORY_COLORS[cat] }))
    .sort((a, b) => b.total - a.total)
}

// ─── Activity calendar (last 84 days) ─────────────────────────────────────

export function getCalendarData(history) {
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const map = {}
  history.forEach(e => {
    const d = new Date(e.timestamp); d.setHours(0, 0, 0, 0)
    const key = d.getTime()
    if (!map[key]) map[key] = { questions: 0, correct: 0, time: 0 }
    map[key].questions++
    if (e.isCorrect) map[key].correct++
    map[key].time += e.timeSpent || 0
  })

  const days = []
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today); d.setDate(today.getDate() - i)
    const key = d.getTime()
    days.push({ date: d, key, ...(map[key] || { questions: 0, correct: 0, time: 0 }) })
  }
  return days
}

// ─── Time of day ───────────────────────────────────────────────────────────

export function getTimeOfDay(history) {
  const slots = [
    { label: 'Morning', range: '5–11am', hours: [5,6,7,8,9,10], count: 0 },
    { label: 'Afternoon', range: '12–5pm', hours: [12,13,14,15,16,17], count: 0 },
    { label: 'Evening', range: '6–9pm', hours: [18,19,20,21], count: 0 },
    { label: 'Night', range: '10pm–4am', hours: [22,23,0,1,2,3,4], count: 0 },
  ]
  history.forEach(e => {
    const h = new Date(e.timestamp).getHours()
    const slot = slots.find(s => s.hours.includes(h))
    if (slot) slot.count++
  })
  return slots
}

// ─── Accuracy trend (last 20 answers rolling) ─────────────────────────────

export function getAccuracyTrend(history) {
  const recent = history.slice(-30)
  if (recent.length < 3) return []
  return recent.map((_, i) => {
    if (i < 2) return null
    const window = recent.slice(Math.max(0, i - 4), i + 1)
    const correct = window.filter(e => e.isCorrect).length
    return { i, accuracy: Math.round((correct / window.length) * 100) }
  }).filter(Boolean)
}
