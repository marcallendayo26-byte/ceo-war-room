import { motion, AnimatePresence } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/achievements'

export default function AchievementsPanel({ profile, onClose }) {
  const unlocked = profile?.achievements || {}

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(7,15,28,0.88)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-navy-800 border border-white/12 rounded-3xl p-6 w-full max-w-sm max-h-[80vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white font-black text-lg">Achievements</p>
              <p className="text-slate-500 text-xs">
                {Object.keys(unlocked).length} / {ACHIEVEMENTS.length} unlocked
              </p>
            </div>
            <button onClick={onClose} className="text-slate-600 hover:text-slate-300 transition-colors">✕</button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {ACHIEVEMENTS.map(a => {
              const isUnlocked = !!unlocked[a.id]
              return (
                <div
                  key={a.id}
                  className={`rounded-xl p-3 border transition-all
                    ${isUnlocked
                      ? 'border-gold-500/30 bg-gold-500/8'
                      : 'border-white/6 bg-white/3 opacity-50'}`}
                >
                  <div className="text-xl mb-1.5">{isUnlocked ? a.icon : '🔒'}</div>
                  <p className={`text-xs font-bold mb-0.5 ${isUnlocked ? 'text-white' : 'text-slate-500'}`}>
                    {a.title}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{a.desc}</p>
                  {isUnlocked && (
                    <p className="text-[9px] text-gold-500/70 mt-1">
                      {new Date(unlocked[a.id]).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
