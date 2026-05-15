import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { SCENARIO_PACKS } from '../data/packs'

export default function PackSelect({ profile, onStart, onClose }) {
  const completions = profile.packCompletions || {}
  // Show packs for user's role + any 'any'-role packs
  const available = SCENARIO_PACKS.filter(p => !p.role || p.role === (profile.role || 'ceo'))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
      style={{ background: 'rgba(7,15,28,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0  }}
        exit={{    opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className="bg-navy-800 border border-white/12 rounded-3xl w-full max-w-sm overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/6">
          <div>
            <p className="text-white font-black text-base">Mission Mode</p>
            <p className="text-slate-500 text-[11px] mt-0.5">Narrative scenario packs</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/8 transition-all"
          >
            <X size={14} />
          </button>
        </div>

        {/* Pack list */}
        <div className="p-4 space-y-3">
          {available.length === 0 && (
            <p className="text-slate-500 text-sm text-center py-6">No missions available for this role yet.</p>
          )}
          {available.map((pack, i) => {
            const comp = completions[pack.id]
            const completed = !!comp
            const bestPct = comp && comp.bestTotal > 0
              ? Math.round((comp.bestCorrect / comp.bestTotal) * 100)
              : null

            return (
              <motion.button
                key={pack.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: i * 0.06 }}
                onClick={() => onStart(pack)}
                className="w-full text-left bg-white/3 hover:bg-white/6 border border-white/8 hover:border-white/16 rounded-2xl p-4 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${pack.color}20` }}
                  >
                    {pack.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-bold text-sm">{pack.title}</p>
                      {completed && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
                          ✓ {bestPct}%
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{pack.subtitle}</p>
                    <p className="text-slate-600 text-[10px] mt-1.5">
                      {pack.acts.length} decisions · {pack.role ? pack.role.toUpperCase() : 'Any role'}
                      {comp ? ` · Played ${comp.count}×` : ''}
                    </p>
                  </div>
                  <span className="text-slate-600 text-lg flex-shrink-0 self-center">›</span>
                </div>
              </motion.button>
            )
          })}
        </div>

        <div className="px-4 pb-5">
          <p className="text-[10px] text-slate-600 text-center">Health carries through each act. Wrong calls compound.</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
