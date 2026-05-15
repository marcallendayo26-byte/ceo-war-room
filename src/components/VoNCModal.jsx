import { motion } from 'framer-motion'

// Vote of No Confidence — fires when board confidence first crosses below 20.
// Dramatic acknowledgment; confidence stays low until the player recovers through correct answers.
export default function VoNCModal({ onAcknowledge }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(7,15,28,0.92)', backdropFilter: 'blur(10px)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        className="bg-navy-800 border border-red-500/40 rounded-3xl w-full max-w-sm overflow-hidden"
      >
        {/* Red accent bar */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #dc2626, #ef4444)' }} />

        <div className="px-6 py-7 text-center">
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-5xl mb-4"
          >
            ⚖️
          </motion.div>

          <p className="text-[10px] font-bold text-red-400/70 uppercase tracking-widest mb-2">
            Board Resolution
          </p>
          <p className="text-white font-black text-xl mb-4 leading-tight">
            Vote of No Confidence
          </p>

          <div className="bg-red-500/8 border border-red-500/20 rounded-2xl px-5 py-4 mb-5 text-left">
            <p className="text-slate-300 text-sm leading-relaxed">
              The board has formally called your leadership into question. A pattern of poor decisions has eroded their confidence to a critical low.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              You remain in position — for now. Every decision from this point forward will be scrutinized. There is no margin for error.
            </p>
          </div>

          {/* Stakes */}
          <div className="space-y-1.5 mb-6 text-left">
            {[
              'Board confidence must be rebuilt through correct, high-stakes decisions',
              'Wrong answers carry amplified consequences while confidence is low',
              'Legacy Mode removes your safety net — no retries',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                <span className="text-red-400/60 flex-shrink-0 mt-0.5">▸</span>
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={onAcknowledge}
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-white transition-all active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
          >
            Face the Board →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
