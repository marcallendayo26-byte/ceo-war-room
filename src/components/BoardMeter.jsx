import { motion } from 'framer-motion'
import { getBoardStatus } from '../lib/engine'

export default function BoardMeter({ confidence = 60, prevConfidence = null }) {
  const status    = getBoardStatus(confidence)
  const isHostile = confidence < 20
  const isConcerned = confidence < 40 && !isHostile
  const delta     = prevConfidence !== null ? confidence - prevConfidence : null

  return (
    <div
      className="bg-navy-800 border border-white/8 rounded-2xl p-4"
      style={isHostile ? { borderColor: 'rgba(239,68,68,0.35)' } : isConcerned ? { borderColor: 'rgba(251,191,36,0.25)' } : {}}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Board Confidence</p>
        <div className="flex items-center gap-1.5">
          {delta !== null && delta !== 0 && (
            <span className={`text-[10px] font-bold ${delta > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {delta > 0 ? `+${delta}` : delta}
            </span>
          )}
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: `${status.color}18`, color: status.color }}
          >
            {status.label}
          </span>
        </div>
      </div>

      {/* Confidence bar */}
      <div className="mb-2">
        <div className="h-2 bg-white/8 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: `${prevConfidence ?? confidence}%` }}
            animate={{ width: `${confidence}%` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: status.color }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-slate-600">Hostile</span>
          <span className="text-[9px] text-slate-600 font-bold">{confidence}</span>
          <span className="text-[9px] text-slate-600">Confident</span>
        </div>
      </div>

      {/* Status description */}
      <p className="text-[10px] text-slate-500 leading-relaxed">{status.description}</p>

      {/* Danger zone warning */}
      {isHostile && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 rounded-xl border border-red-500/30 bg-red-500/8 px-3 py-2"
        >
          <p className="text-[10px] font-bold text-red-400 leading-relaxed">
            ⚠ The board is losing patience. A vote of no confidence is within reach.
          </p>
        </motion.div>
      )}
    </div>
  )
}
