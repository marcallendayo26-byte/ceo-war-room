import { motion } from 'framer-motion'
import { healthBarValue, healthBarColor } from '../lib/engine'
import { HEALTH_LABELS } from '../data/config'

export default function PackBridge({ pack, actIndex, lastResult, packHealth, onNext }) {
  const completedAct = pack.acts[actIndex]
  const nextAct      = pack.acts[actIndex + 1]
  const isLast       = !nextAct

  // Health deltas from this answer (only if wrong — correct consequences handled by engine)
  const relevantDeltas = Object.entries(lastResult?.healthDelta || {}).filter(([, v]) => v !== 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0  }}
      exit={{    opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-3"
    >
      {/* Act result + bridge narrative */}
      <div
        className="rounded-2xl border px-5 py-5"
        style={{ background: `${pack.color}08`, borderColor: `${pack.color}25` }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: pack.color }}>
          Act {actIndex + 1} of {pack.acts.length} — {lastResult?.isCorrect ? 'Good Call' : 'Tough Lesson'}
        </p>

        {completedAct.bridge && (
          <p className="text-slate-300 text-sm leading-relaxed">{completedAct.bridge}</p>
        )}

        {/* Health impact */}
        {relevantDeltas.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {relevantDeltas.map(([key, delta]) => (
              <div
                key={key}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                  delta > 0 ? 'bg-emerald-500/12 text-emerald-400' : 'bg-red-500/12 text-red-400'
                }`}
              >
                <span>{HEALTH_LABELS[key]}</span>
                <span className="font-black">{delta > 0 ? '+' : ''}{delta}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mission health snapshot */}
      <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Mission Health</p>
        <div className="space-y-2">
          {Object.entries(HEALTH_LABELS).map(([key, label]) => {
            const val   = healthBarValue(key, packHealth[key])
            const color = healthBarColor(val)
            return (
              <div key={key}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-slate-500 text-[10px]">{label}</span>
                  <span className="text-[10px] font-bold tabular-nums" style={{ color }}>{val}</span>
                </div>
                <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${val}%`, background: color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Next act preview / final CTA */}
      {nextAct ? (
        <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
            Next — Act {actIndex + 2}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{nextAct.narrative}</p>
        </div>
      ) : (
        <div
          className="rounded-2xl border px-5 py-4 text-center"
          style={{ background: `${pack.color}08`, borderColor: `${pack.color}25` }}
        >
          <p className="text-white font-bold text-sm">Final act complete.</p>
          <p className="text-slate-400 text-xs mt-1">Your mission outcome is being calculated.</p>
        </div>
      )}

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl font-bold text-sm text-white transition-all active:scale-[0.98]"
        style={{ background: pack.color }}
      >
        {isLast ? 'See Mission Outcome →' : `Continue to Act ${actIndex + 2} →`}
      </button>
    </motion.div>
  )
}
