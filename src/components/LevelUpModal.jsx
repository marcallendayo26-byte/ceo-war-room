import { motion, AnimatePresence } from 'framer-motion'

export default function LevelUpModal({ level, onDismiss }) {
  if (!level) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(7,15,28,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onDismiss}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-navy-800 border border-white/12 rounded-3xl px-8 py-10 text-center max-w-sm w-full"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-5xl mb-4">🏆</div>
          <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">Level Up</p>
          <p className="text-white text-3xl font-black mb-1">Level {level.level}</p>
          <p
            className="font-bold text-lg mb-6"
            style={{
              background: level.level >= 8
                ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                : level.level >= 5
                  ? 'linear-gradient(90deg, #a78bfa, #3b9eff)'
                  : 'linear-gradient(90deg, #34d399, #3b9eff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {level.title}
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Your judgment is sharpening. Keep going — the cases get harder from here.
          </p>
          <button
            onClick={onDismiss}
            className="w-full py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-colors"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
