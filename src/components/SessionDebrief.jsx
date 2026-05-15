import { motion } from 'framer-motion'

// Analyzes the last 10 session cases and returns a plain-language insight.
function generateInsight(cases) {
  if (!cases.length) return null

  // Per-category breakdown for this batch
  const byCategory = {}
  cases.forEach(({ category, isCorrect }) => {
    if (!byCategory[category]) byCategory[category] = { correct: 0, total: 0 }
    byCategory[category].total++
    if (isCorrect) byCategory[category].correct++
  })

  // Category with the most wrong answers (min 2 attempts)
  const struggled = Object.entries(byCategory)
    .filter(([, s]) => s.total >= 2 && s.correct < s.total)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))

  const correct = cases.filter(c => c.isCorrect).length
  const pct = correct / cases.length

  if (struggled.length > 0) {
    const [cat, s] = struggled[0]
    const missed = s.total - s.correct
    return `You missed ${missed} of ${s.total} ${cat} cases — this category is worth drilling directly.`
  }
  if (pct >= 0.9) return 'Near-perfect batch. Your pattern recognition is operating at a high level.'
  if (pct >= 0.75) return 'Solid accuracy. Study the explanations for your wrong answers — the traps are the lesson.'
  if (pct >= 0.5) return 'Mixed batch. Focus less on being right and more on understanding why the correct answer works.'
  return 'Tough stretch — but wrong answers today are sharper instincts next session.'
}

export default function SessionDebrief({ sessionCases, profile, onContinue, onEnd }) {
  // We only analyze the most recent 10 cases
  const batch     = sessionCases.slice(-10)
  const correct   = batch.filter(c => c.isCorrect).length
  const wrong     = batch.length - correct
  const pct       = Math.round((correct / batch.length) * 100)
  const xpEarned  = profile.sessionStats?.xpEarned || 0
  const bestStreak = profile.bestStreak || 0
  const insight   = generateInsight(batch)

  // Category breakdown
  const byCategory = {}
  batch.forEach(({ category, isCorrect }) => {
    if (!byCategory[category]) byCategory[category] = { correct: 0, total: 0 }
    byCategory[category].total++
    if (isCorrect) byCategory[category].correct++
  })
  const categoryRows = Object.entries(byCategory)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))

  const gradeColor = pct >= 75 ? '#34d399' : pct >= 50 ? '#fbbf24' : '#f87171'
  const gradeLabel = pct >= 75 ? 'Strong' : pct >= 50 ? 'Developing' : 'Struggling'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(7,15,28,0.88)', backdropFilter: 'blur(8px)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1,   y: 0  }}
        exit={{    opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="bg-navy-800 border border-white/12 rounded-3xl w-full max-w-sm overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-7 pb-5 text-center border-b border-white/6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Session Check-In · {batch.length} cases</p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="text-center">
              <p className="text-3xl font-black" style={{ color: gradeColor }}>{pct}%</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{gradeLabel}</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-black text-white">{correct}<span className="text-slate-500 text-lg">/{batch.length}</span></p>
              <p className="text-[10px] text-slate-500 mt-0.5">Correct</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-black text-brand-400">+{xpEarned}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">XP total</p>
            </div>
          </div>
          {bestStreak >= 3 && (
            <p className="text-[11px] text-gold-400 font-semibold">🔥 Best streak this session: {bestStreak}</p>
          )}
        </div>

        {/* Insight */}
        {insight && (
          <div className="px-6 py-4 border-b border-white/6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Coaching Note</p>
            <p className="text-slate-300 text-sm leading-relaxed">{insight}</p>
          </div>
        )}

        {/* Category breakdown */}
        <div className="px-6 py-4 border-b border-white/6">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">This Batch</p>
          <div className="space-y-2">
            {categoryRows.map(([cat, s]) => {
              const catPct = s.correct / s.total
              const color  = catPct >= 0.75 ? '#34d399' : catPct >= 0.5 ? '#fbbf24' : '#f87171'
              return (
                <div key={cat} className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-400 truncate">{cat}</p>
                  </div>
                  <div className="w-20 h-1.5 bg-white/8 rounded-full overflow-hidden flex-shrink-0">
                    <div className="h-full rounded-full" style={{ width: `${catPct * 100}%`, background: color }} />
                  </div>
                  <p className="text-[11px] font-bold flex-shrink-0" style={{ color }}>{s.correct}/{s.total}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-5 flex gap-3">
          <button
            onClick={onEnd}
            className="flex-1 py-3 rounded-2xl font-bold text-sm border border-white/12 text-slate-400 hover:border-white/25 hover:text-white transition-all"
          >
            Exit Session
          </button>
          <button
            onClick={onContinue}
            className="flex-1 py-3 rounded-2xl font-bold text-sm bg-brand-500 hover:bg-brand-600 text-white transition-all"
          >
            Keep Going →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
