import { motion } from 'framer-motion'
import { CATEGORY_COLORS, HEALTH_LABELS } from '../data/config'

export default function ResultPanel({ result, onNext, onRetry, nextLabel = 'Next Case →', legacyMode = false }) {
  const { caseData, chosen, isCorrect, xpDelta, streakBonus, newStreak, healthDelta, isDaily, isRetry, isReview, reviewCleared } = result
  const optionLabels    = ['A', 'B', 'C', 'D']
  const relevantDeltas  = Object.entries(healthDelta).filter(([, v]) => v !== 0)
  const categoryColor   = CATEGORY_COLORS[caseData.category]

  const verdictSpring = isCorrect
    ? { type: 'spring', damping: 9,  stiffness: 170, delay: 0.05 }
    : { type: 'spring', damping: 20, stiffness: 280, delay: 0.05 }

  return (
    <motion.div
      // Panel slides up — children manage their own opacity
      initial={{ y: 18 }}
      animate={{ y: 0  }}
      exit={{    opacity: 0, y: -10, transition: { duration: 0.18 } }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-3"
    >
      {/* ── BEAT 1: Verdict ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        transition={verdictSpring}
        className={`relative rounded-2xl px-5 py-4 border ${
          isCorrect
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-red-500/10 border-red-500/30'
        }`}
      >
        {/* Glow flash that fades immediately */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ background: isCorrect ? 'rgba(52,211,153,0.18)' : 'rgba(239,68,68,0.14)' }}
        />

        {/* XP burst — one-shot float up and dissolve */}
        {xpDelta > 0 && (
          <motion.div
            initial={{ opacity: 1, y: 0,   scale: 1.1 }}
            animate={{ opacity: 0, y: -52, scale: 0.85 }}
            transition={{ duration: 0.8, ease: [0.16, 0.8, 0.38, 1], delay: 0.08 }}
            className="absolute right-5 top-2 pointer-events-none select-none font-black text-2xl"
            style={{ color: '#3b9eff', zIndex: 20 }}
          >
            +{xpDelta}
          </motion.div>
        )}

        <div className="flex items-center justify-between flex-wrap gap-2 relative">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xl font-black ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? '✓ Correct' : '✗ Wrong'}
            </span>
            {isCorrect && newStreak >= 3 && (
              <span className="bg-gold-500/20 text-gold-400 text-xs font-bold px-2.5 py-1 rounded-full border border-gold-500/30">
                🔥 {newStreak} streak
              </span>
            )}
            {isDaily && (
              <span className="bg-gold-500/20 text-gold-400 text-xs font-bold px-2.5 py-1 rounded-full border border-gold-500/30">
                ⭐ Daily Challenge
              </span>
            )}
            {isRetry && (
              <span className="bg-white/8 text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                ↩ Retry
              </span>
            )}
            {isReview && isCorrect && reviewCleared && (
              <span className="bg-amber-500/15 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/25">
                📌 Review cleared
              </span>
            )}
            {isReview && !isCorrect && (
              <span className="bg-amber-500/10 text-amber-500/70 text-xs font-semibold px-2.5 py-1 rounded-full">
                📌 Still reviewing
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {streakBonus > 0 && (
              <span className="text-gold-400 text-sm font-bold">+{streakBonus} bonus</span>
            )}
            {isDaily && isCorrect && (
              <span className="text-gold-400 text-sm font-bold">3×</span>
            )}
            {/* XP number — scales in from large */}
            <motion.span
              initial={{ scale: 1.55, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              transition={{ type: 'spring', damping: 11, stiffness: 190, delay: 0.10 }}
              className={`text-xl font-black ${xpDelta > 0 ? 'text-brand-400' : 'text-red-400'}`}
            >
              {xpDelta > 0 ? '+' : ''}{xpDelta} XP
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* ── BEAT 2: Everything else fades in 240 ms after verdict ────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.24, duration: 0.28 }}
        className="space-y-3"
      >
        {/* ── Answer callout — wrong only ────────────────────────────────── */}
        {!isCorrect && (
          <div className="space-y-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/6 px-4 py-3">
              <p className="text-[10px] font-bold text-red-400/70 uppercase tracking-widest mb-1">Your call — {optionLabels[chosen]}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{caseData.options[chosen]}</p>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/8 px-4 py-3">
              <p className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest mb-1">The right call — {optionLabels[caseData.correct]}</p>
              <p className="text-white text-sm font-medium leading-relaxed">{caseData.options[caseData.correct]}</p>
            </div>
          </div>
        )}

        {/* ── Explanation ────────────────────────────────────────────────── */}
        <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4 space-y-4">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Why this answer</p>
            <p className="text-slate-300 text-sm leading-relaxed">{caseData.explanation}</p>
          </div>

          {/* ── Company impact ────────────────────────────────────────────── */}
          {relevantDeltas.length > 0 && (
            <div className="border-t border-white/6 pt-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Company impact</p>
              <div className="flex flex-wrap gap-2">
                {relevantDeltas.map(([key, delta], i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 + i * 0.055, duration: 0.22 }}
                    className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                      delta > 0
                        ? 'bg-emerald-500/12 text-emerald-400'
                        : 'bg-red-500/12 text-red-400'
                    }`}
                  >
                    <span>{HEALTH_LABELS[key]}</span>
                    <span className="font-black">{delta > 0 ? '+' : ''}{delta}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Framework + Principle ─────────────────────────────────────── */}
          <div className="border-t border-white/6 pt-4 space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: categoryColor }}>
                Framework
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">{caseData.framework}</p>
            </div>
            <div className="rounded-xl border px-3 py-2.5" style={{ borderColor: `${categoryColor}25`, background: `${categoryColor}08` }}>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Executive Principle</p>
              <p className="text-white font-semibold text-sm italic">"{caseData.principle}"</p>
            </div>
          </div>

          {/* ── Traps ─────────────────────────────────────────────────────── */}
          {caseData.traps?.length > 0 && (
            <div className="border-t border-white/6 pt-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Why smart people get this wrong</p>
              <ul className="space-y-2">
                {caseData.traps.map((trap, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-red-400/60 flex-shrink-0 mt-0.5">▸</span>
                    {trap}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Actions ───────────────────────────────────────────────────────  */}
        <div className="flex gap-3">
          {!isCorrect && !isRetry && !legacyMode && (
            <button
              onClick={onRetry}
              className="flex-1 py-4 rounded-2xl font-bold text-sm border border-white/12 text-slate-300 hover:border-white/25 hover:text-white transition-all"
            >
              ↩ Retry (½ XP)
            </button>
          )}
          <button
            onClick={onNext}
            className="flex-1 py-4 rounded-2xl font-bold text-sm bg-brand-500 hover:bg-brand-600 text-white transition-all active:scale-[0.98]"
          >
            {nextLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
