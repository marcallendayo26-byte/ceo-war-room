import { motion, AnimatePresence } from 'framer-motion'

function toRoman(n) {
  const map = [
    [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
    [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
    [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I'],
  ]
  let result = ''
  for (const [val, sym] of map) {
    while (n >= val) { result += sym; n -= val }
  }
  return result
}

const PRESTIGE_MESSAGES = [
  'You\'ve mastered the first cycle. The next one is harder — and you know it.',
  'Twice through the gauntlet. Most never make it once.',
  'Three cycles. Your pattern recognition is in a different class now.',
  'Four prestige completions. The scenarios haven\'t changed — you have.',
  'Five. At this point you\'re not just trained — you\'re calibrated.',
]

export default function PrestigeModal({ prestige, onDismiss }) {
  if (!prestige) return null

  const roman = toRoman(prestige)
  const message = PRESTIGE_MESSAGES[Math.min(prestige - 1, PRESTIGE_MESSAGES.length - 1)]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(7,15,28,0.92)', backdropFilter: 'blur(12px)' }}
        onClick={onDismiss}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="bg-navy-800 border border-gold-500/30 rounded-3xl px-8 py-10 text-center max-w-sm w-full"
          style={{ boxShadow: '0 0 60px rgba(245,158,11,0.12)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Diamond glyph */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
            className="text-5xl mb-1"
          >
            ✦
          </motion.div>

          <p className="text-gold-400 text-[10px] font-black uppercase tracking-[0.25em] mb-3">
            Prestige
          </p>

          {/* Roman numeral */}
          <p
            className="font-black mb-2 leading-none"
            style={{
              fontSize: 'clamp(3rem, 12vw, 5rem)',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {roman}
          </p>

          <p className="text-white font-bold text-lg mb-2">Level 10 Complete</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            {message}
          </p>

          <div className="bg-white/4 border border-white/8 rounded-2xl px-4 py-3 mb-8 text-left space-y-1.5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">What carries over</p>
            {[
              ['✓', 'All answers, accuracy & streaks', 'text-emerald-400'],
              ['✓', 'Category stats & weak spots', 'text-emerald-400'],
              ['✓', 'Achievements & badges', 'text-emerald-400'],
              ['↺', 'XP resets — level 1 again', 'text-gold-400'],
            ].map(([icon, label, color]) => (
              <div key={label} className="flex items-center gap-2 text-xs">
                <span className={`font-bold flex-shrink-0 ${color}`}>{icon}</span>
                <span className="text-slate-300">{label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onDismiss}
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-navy-900 transition-colors"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)' }}
          >
            Begin Prestige {roman} →
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
