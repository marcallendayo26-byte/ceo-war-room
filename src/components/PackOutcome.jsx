import { motion } from 'framer-motion'
import { healthBarValue, healthBarColor } from '../lib/engine'
import { HEALTH_LABELS } from '../data/config'

export default function PackOutcome({ pack, packResults, packHealth, xpEarned, onDone }) {
  const correct = packResults.filter(r => r.isCorrect).length
  const total   = packResults.length
  const pct     = total > 0 ? correct / total : 0

  const tier    = pct >= 0.75 ? 'great' : pct >= 0.5 ? 'ok' : 'bad'
  const outcome = pack.outcome[tier]

  const tierConfig = {
    great: { emoji: '🏆', label: 'Mission Success',  color: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)' },
    ok:    { emoji: '📋', label: 'Partial Success',  color: '#fbbf24', bg: 'rgba(251,191,36,0.08)',   border: 'rgba(251,191,36,0.25)' },
    bad:   { emoji: '⚠️', label: 'Mission Struggled', color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.25)' },
  }
  const tc = tierConfig[tier]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0  }}
      exit={{    opacity: 0 }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-3"
    >
      {/* Outcome banner */}
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 10, delay: 0.08 }}
        className="rounded-2xl border px-5 py-6 text-center"
        style={{ background: tc.bg, borderColor: tc.border }}
      >
        <div className="text-5xl mb-3">{tc.emoji}</div>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: tc.color }}>
          {tc.label}
        </p>
        <p className="text-white font-black text-xl mb-1">{outcome.title}</p>
        <p className="text-slate-300 font-bold text-2xl mb-1">
          {correct}/{total} <span className="text-slate-500 text-base font-normal">correct</span>
        </p>
        {xpEarned > 0 && (
          <p className="text-brand-400 text-sm font-bold mt-2">+{xpEarned} XP earned</p>
        )}
      </motion.div>

      {/* Outcome narrative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22, duration: 0.28 }}
        className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4"
      >
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Board Assessment</p>
        <p className="text-slate-300 text-sm leading-relaxed">{outcome.body}</p>
      </motion.div>

      {/* Final health */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.28 }}
        className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4"
      >
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Company at Mission End</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {Object.entries(HEALTH_LABELS).map(([key, label]) => {
            const val   = healthBarValue(key, packHealth[key])
            const color = healthBarColor(val)
            return (
              <div key={key} className="flex items-center gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-500 truncate">{label}</p>
                  <div className="h-1 bg-white/8 rounded-full overflow-hidden mt-0.5">
                    <div className="h-full rounded-full" style={{ width: `${val}%`, background: color }} />
                  </div>
                </div>
                <span className="text-[10px] font-bold flex-shrink-0" style={{ color }}>{val}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Decision log */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.38, duration: 0.28 }}
        className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4"
      >
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Decision Log</p>
        <div className="space-y-1.5">
          {packResults.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`text-[10px] font-black flex-shrink-0 ${r.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                {r.isCorrect ? '✓' : '✗'}
              </span>
              <span className="text-[11px] text-slate-500 truncate flex-1">
                Act {i + 1} · {r.category}
              </span>
              <span className={`text-[10px] font-bold flex-shrink-0 ${r.xpDelta > 0 ? 'text-brand-400' : 'text-red-400'}`}>
                {r.xpDelta > 0 ? '+' : ''}{r.xpDelta}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        onClick={onDone}
        className="w-full py-4 rounded-2xl font-bold text-sm bg-brand-500 hover:bg-brand-600 text-white transition-all active:scale-[0.98]"
      >
        Return to Base
      </motion.button>
    </motion.div>
  )
}
