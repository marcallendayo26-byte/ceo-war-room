import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  filterByPeriod, computeStats, formatTime,
  getActivityBars, getCategoryBreakdown,
  getCalendarData, getTimeOfDay, getAccuracyTrend,
} from '../lib/analytics'

const PERIODS = [
  { key: 'day',   label: 'Today' },
  { key: 'week',  label: 'This Week' },
  { key: 'month', label: 'This Month' },
  { key: 'year',  label: 'This Year' },
  { key: 'all',   label: 'All Time' },
]

// ─── Mini chart components ─────────────────────────────────────────────────

function BarChart({ bars, height = 80 }) {
  const max = Math.max(...bars.map(b => b.questions), 1)
  const showEvery = bars.length > 14 ? Math.ceil(bars.length / 10) : 1

  return (
    <div className="flex items-end gap-0.5 w-full" style={{ height }}>
      {bars.map((bar, i) => {
        const pct = bar.questions / max
        const correctPct = bar.questions > 0 ? bar.correct / bar.questions : 0
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5 group relative">
            <div
              className="w-full rounded-t-sm transition-all duration-300 relative overflow-hidden"
              style={{ height: Math.max(pct * (height - 16), bar.questions > 0 ? 3 : 1) }}
            >
              {/* wrong portion */}
              <div className="absolute inset-0 rounded-t-sm" style={{ background: 'rgba(248,113,113,0.25)' }} />
              {/* correct portion */}
              <div
                className="absolute bottom-0 left-0 right-0 rounded-t-sm"
                style={{ height: `${correctPct * 100}%`, background: bar.questions > 0 ? '#0066cc' : 'rgba(255,255,255,0.05)' }}
              />
            </div>
            {i % showEvery === 0 && (
              <span className="text-[8px] text-slate-600 truncate w-full text-center">{bar.label}</span>
            )}
            {/* Tooltip */}
            {bar.questions > 0 && (
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-navy-900 border border-white/12 rounded-lg px-2 py-1 text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-10 transition-opacity">
                {bar.questions} Q · {bar.correct} ✓
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function TrendLine({ points, height = 60 }) {
  if (points.length < 2) return <div className="text-slate-600 text-xs text-center py-4">Need more answers to show trend.</div>

  const w = 300
  const pad = 8
  const minY = Math.min(...points.map(p => p.accuracy))
  const maxY = Math.max(...points.map(p => p.accuracy), minY + 10)
  const scaleX = (i) => pad + (i / (points.length - 1)) * (w - pad * 2)
  const scaleY = (v) => height - pad - ((v - minY) / (maxY - minY + 1)) * (height - pad * 2)

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${scaleX(i).toFixed(1)},${scaleY(p.accuracy).toFixed(1)}`).join(' ')
  const fillPath = `${path} L${scaleX(points.length - 1).toFixed(1)},${height} L${scaleX(0).toFixed(1)},${height} Z`

  const last = points[points.length - 1]
  const first = points[0]
  const trend = last.accuracy - first.accuracy
  const trendColor = trend > 0 ? '#34d399' : trend < 0 ? '#f87171' : '#64748b'

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-slate-500">Accuracy trend (last 30 answers)</span>
        <span className="text-xs font-bold" style={{ color: trendColor }}>
          {trend > 0 ? '▲' : trend < 0 ? '▼' : '—'} {Math.abs(trend)}%
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${height}`} className="w-full" style={{ height }}>
        <defs>
          <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={trendColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={trendColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={fillPath} fill="url(#trendGrad)" />
        <path d={path} fill="none" stroke={trendColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={scaleX(i)} cy={scaleY(p.accuracy)} r="2" fill={trendColor} />
        ))}
      </svg>
    </div>
  )
}

function CalendarHeatmap({ days }) {
  const max = Math.max(...days.map(d => d.questions), 1)
  const weeks = []
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7))

  return (
    <div>
      <div className="flex gap-0.5">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((day, di) => {
              const intensity = day.questions / max
              const isToday = day.date.toDateString() === new Date().toDateString()
              return (
                <div
                  key={di}
                  className="w-3 h-3 rounded-sm relative group cursor-default"
                  style={{
                    background: day.questions === 0
                      ? 'rgba(255,255,255,0.04)'
                      : `rgba(0,102,204,${0.2 + intensity * 0.8})`,
                    outline: isToday ? '1px solid rgba(251,191,36,0.6)' : 'none',
                  }}
                  title={`${day.date.toDateString()}: ${day.questions} Q`}
                >
                  {day.questions > 0 && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-navy-900 border border-white/12 rounded px-1.5 py-1 text-[9px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-10">
                      {day.date.toLocaleDateString('en', { month: 'short', day: 'numeric' })} · {day.questions}Q · {formatTime(day.time)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <span className="text-[9px] text-slate-600">Less</span>
        {[0.04, 0.3, 0.55, 0.8, 1].map((op, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: i === 0 ? 'rgba(255,255,255,0.04)' : `rgba(0,102,204,${op})` }} />
        ))}
        <span className="text-[9px] text-slate-600">More</span>
      </div>
    </div>
  )
}

function TimeOfDayChart({ slots }) {
  const max = Math.max(...slots.map(s => s.count), 1)
  const total = slots.reduce((s, sl) => s + sl.count, 0)
  const peak = slots.reduce((best, s) => s.count > best.count ? s : best, slots[0])

  return (
    <div className="space-y-2">
      {slots.map(slot => (
        <div key={slot.label}>
          <div className="flex items-center justify-between mb-0.5">
            <div>
              <span className="text-xs text-slate-300 font-medium">{slot.label}</span>
              <span className="text-[10px] text-slate-600 ml-1.5">{slot.range}</span>
            </div>
            <span className="text-[10px] text-slate-400">
              {slot.count} Q{total > 0 ? ` · ${Math.round((slot.count / total) * 100)}%` : ''}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${(slot.count / max) * 100}%`,
                background: slot.label === peak.label && slot.count > 0 ? '#0066cc' : 'rgba(0,102,204,0.4)',
              }}
            />
          </div>
        </div>
      ))}
      {peak.count > 0 && (
        <p className="text-[10px] text-slate-500 pt-1">
          You play most in the <span className="text-white font-semibold">{peak.label.toLowerCase()}</span>.
        </p>
      )}
    </div>
  )
}

// ─── Stat card ─────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, color = '#3b9eff' }) {
  return (
    <div className="bg-white/3 border border-white/6 rounded-xl px-3 py-3">
      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white font-black text-xl leading-tight" style={{ color }}>{value}</p>
      {sub && <p className="text-[10px] text-slate-600 mt-0.5">{sub}</p>}
    </div>
  )
}

// ─── Main panel ────────────────────────────────────────────────────────────

export default function AnalyticsPanel({ profile, onClose }) {
  const [period, setPeriod] = useState('week')

  const history = profile?.caseHistory || []

  const periodEntries = useMemo(() => filterByPeriod(history, period), [history, period])
  const stats = useMemo(() => computeStats(periodEntries), [periodEntries])
  const bars = useMemo(() => getActivityBars(history, period), [history, period])
  const categories = useMemo(() => getCategoryBreakdown(periodEntries), [periodEntries])
  const calendarDays = useMemo(() => getCalendarData(history), [history])
  const timeOfDay = useMemo(() => getTimeOfDay(history), [history])
  const trendPoints = useMemo(() => getAccuracyTrend(history), [history])

  // Streak data
  const longestStreak = profile?.bestStreak || 0
  const currentStreak = profile?.streak || 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        style={{ background: 'rgba(7,15,28,0.92)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-navy-800 border border-white/12 rounded-3xl w-full max-w-lg max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-white/8 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-black text-lg">Analytics</p>
                <p className="text-slate-500 text-xs">{profile?.name} · {history.length} total cases</p>
              </div>
              <button onClick={onClose} className="text-slate-600 hover:text-slate-300 transition-colors">✕</button>
            </div>

            {/* Period tabs */}
            <div className="flex gap-1">
              {PERIODS.map(p => (
                <button
                  key={p.key}
                  onClick={() => setPeriod(p.key)}
                  className={`flex-1 text-[10px] font-bold py-1.5 rounded-lg transition-all ${
                    period === p.key
                      ? 'bg-brand-500 text-white'
                      : 'text-slate-500 hover:text-white bg-white/4'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-5 py-4 space-y-5">

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              <StatCard
                label="Time Spent"
                value={formatTime(stats.totalTime)}
                sub={stats.questions > 0 ? `~${formatTime(stats.avgTime)}/case` : 'No data'}
                color="#3b9eff"
              />
              <StatCard
                label="Questions"
                value={stats.questions}
                sub={`${stats.correct} correct`}
                color="#34d399"
              />
              <StatCard
                label="Accuracy"
                value={stats.questions > 0 ? `${stats.accuracy}%` : '—'}
                sub={`+${stats.xpEarned} XP`}
                color={stats.accuracy >= 70 ? '#34d399' : stats.accuracy >= 40 ? '#fbbf24' : '#f87171'}
              />
            </div>

            {/* Streak row */}
            <div className="grid grid-cols-2 gap-2">
              <StatCard label="Current Streak" value={`${currentStreak}🔥`} sub="correct in a row" color="#fbbf24" />
              <StatCard label="Best Streak" value={`${longestStreak}⚡`} sub="all time record" color="#a78bfa" />
            </div>

            {/* Activity bar chart */}
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Questions Answered</p>
              <BarChart bars={bars} height={72} />
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-brand-500" />
                  <span className="text-[9px] text-slate-500">Correct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm" style={{ background: 'rgba(248,113,113,0.35)' }} />
                  <span className="text-[9px] text-slate-500">Wrong</span>
                </div>
              </div>
            </div>

            {/* Accuracy trend */}
            {trendPoints.length >= 3 && (
              <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-4">
                <TrendLine points={trendPoints} height={60} />
              </div>
            )}

            {/* Category breakdown */}
            {categories.length > 0 && (
              <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Categories</p>
                <div className="space-y-2.5">
                  {categories.map(c => (
                    <div key={c.category}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium" style={{ color: c.color }}>{c.category}</span>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span>{c.total}Q</span>
                          <span className="font-bold" style={{ color: c.accuracy >= 70 ? '#34d399' : c.accuracy >= 40 ? '#fbbf24' : '#f87171' }}>
                            {c.accuracy}%
                          </span>
                          <span>{formatTime(c.time)}</span>
                        </div>
                      </div>
                      <div className="h-1 rounded-full bg-white/6 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${(c.total / (categories[0]?.total || 1)) * 100}%`, background: c.color, opacity: 0.7 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activity calendar */}
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Activity — Last 12 Weeks</p>
              <div className="overflow-x-auto">
                <CalendarHeatmap days={calendarDays} />
              </div>
            </div>

            {/* Time of day */}
            <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">When You Play</p>
              <TimeOfDayChart slots={timeOfDay} />
            </div>

            {/* Empty state */}
            {history.length === 0 && (
              <div className="text-center py-6 text-slate-600 text-sm">
                Answer some cases to see your analytics.
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
