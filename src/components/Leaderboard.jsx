import { motion, AnimatePresence } from 'framer-motion'
import { getAllProfiles, saveProfile } from '../lib/storage'
import { getLevelInfo } from '../lib/engine'
import { ACHIEVEMENTS } from '../data/achievements'

export default function Leaderboard({ activeProfileId, onClose, onRivalsUpdated }) {
  const profiles = Object.values(getAllProfiles()).sort((a, b) => b.totalXP - a.totalXP)
  const activeProfile = profiles.find(p => p.id === activeProfileId)

  const handleSetRival = rivalId => {
    if (!activeProfile) return
    const updated = { ...activeProfile, rivalId: rivalId === activeProfile.rivalId ? null : rivalId }
    saveProfile(updated)
    onRivalsUpdated()
  }

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
          className="bg-navy-800 border border-white/12 rounded-3xl p-6 w-full max-w-sm"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white font-black text-lg">Leaderboard</p>
              <p className="text-slate-500 text-xs">All profiles on this device</p>
            </div>
            <button onClick={onClose} className="text-slate-600 hover:text-slate-300 transition-colors">✕</button>
          </div>

          {profiles.length === 0 && (
            <p className="text-slate-600 text-sm text-center py-6">No profiles yet.</p>
          )}

          <div className="space-y-2">
            {profiles.map((p, i) => {
              const { current } = getLevelInfo(p.totalXP)
              const isYou = p.id === activeProfileId
              const isRival = activeProfile?.rivalId === p.id
              const badgeCount = Object.keys(p.achievements || {}).length
              const accuracy = p.casesAnswered > 0 ? Math.round((p.correctAnswers / p.casesAnswered) * 100) : 0

              const rankEmoji = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`

              return (
                <div
                  key={p.id}
                  className={`rounded-xl px-4 py-3 flex items-center gap-3 border transition-all
                    ${isYou ? 'border-brand-500/40 bg-brand-500/8' : 'border-white/6 bg-white/3'}`}
                >
                  <span className="text-base w-6 text-center flex-shrink-0">{rankEmoji}</span>

                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ background: p.color }}
                  >
                    {p.name[0].toUpperCase()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-sm font-bold truncate">{p.name}</span>
                      {isYou && <span className="text-[9px] text-brand-400 font-bold">YOU</span>}
                      {isRival && <span className="text-[9px] text-red-400 font-bold">RIVAL</span>}
                    </div>
                    <p className="text-slate-500 text-[10px]">Lv.{current.level} · {accuracy}% acc · {badgeCount} badges</p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-white font-bold text-sm">{p.totalXP.toLocaleString()}</div>
                    <div className="text-slate-500 text-[10px]">XP</div>
                  </div>

                  {!isYou && activeProfileId && (
                    <button
                      onClick={() => handleSetRival(p.id)}
                      className={`text-[10px] font-bold px-2 py-1 rounded-lg transition-colors flex-shrink-0
                        ${isRival ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-white/6 text-slate-500 hover:text-white'}`}
                      title={isRival ? 'Remove rival' : 'Set as rival'}
                    >
                      {isRival ? '⚔ Rival' : '+ Rival'}
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {profiles.length > 0 && (
            <p className="text-slate-600 text-[10px] text-center mt-4">
              Tap "+ Rival" to track a rival's XP in your header.
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
