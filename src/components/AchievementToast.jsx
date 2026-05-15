import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playAchievement } from '../lib/sounds'

export default function AchievementToast({ achievement, onDismiss }) {
  useEffect(() => {
    if (!achievement) return
    playAchievement()
    const t = setTimeout(onDismiss, 4000)
    return () => clearTimeout(t)
  }, [achievement, onDismiss])

  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex items-center gap-3 bg-navy-800 border border-gold-500/40 rounded-2xl px-5 py-3 shadow-2xl">
            <span className="text-2xl">{achievement.icon}</span>
            <div>
              <p className="text-[10px] font-bold text-gold-400 uppercase tracking-widest">Achievement Unlocked</p>
              <p className="text-white font-bold text-sm">{achievement.title}</p>
              <p className="text-slate-400 text-xs">{achievement.desc}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
