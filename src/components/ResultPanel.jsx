import { motion } from 'framer-motion'
import { CATEGORY_COLORS, HEALTH_LABELS } from '../data/config'

export default function ResultPanel({ result, onNext, onRetry }) {
  const { caseData, chosen, isCorrect, xpDelta, streakBonus, newStreak, healthDelta, isDaily, isRetry } = result
  const optionLabels = ['A', 'B', 'C', 'D']
  const relevantDeltas = Object.entries(healthDelta).filter(([, v]) => v !== 0)
  const categoryColor = CATEGORY_COLORS[caseData.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      {/* ── 1. Verdict banner ─────────────────────────────────────────────── */}
      <div className={`rounded-2xl px-5 py-4 border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
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
          </div>
          <div className="flex items-center gap-2">
            {streakBonus > 0 && (
              <span className="text-gold-400 text-sm font-bold">+{streakBonus} bonus</span>
            )}
            {isDaily && isCorrect && (
              <span className="text-gold-400 text-sm font-bold">3×</span>
            )}
            <span className={`text-xl font-black ${xpDelta > 0 ? 'text-brand-400' : 'text-red-400'}`}>
              {xpDelta > 0 ? '+' : ''}{xpDelta} XP
            </span>
          </div>
        </div>
      </div>

      {/* ── 2. Answer callout — wrong answers only ─────────────────────────── */}
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

      {/* ── 3. Explanation ────────────────────────────────────────────────── */}
      <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4 space-y-4">
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Why this answer</p>
          <p className="text-slate-300 text-sm leading-relaxed">{caseData.explanation}</p>
        </div>

        {/* ── 4. Company impact ─────────────────────────────────────────── */}
        {relevantDeltas.length > 0 && (
          <div className="border-t border-white/6 pt-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Company impact</p>
            <div className="flex flex-wrap gap-2">
              {relevantDeltas.map(([key, delta]) => (
                <div
                  key={key}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${delta > 0 ? 'bg-emerald-500/12 text-emerald-400' : 'bg-red-500/12 text-red-400'}`}
                >
                  <span>{HEALTH_LABELS[key]}</span>
                  <span className="font-black">{delta > 0 ? '+' : ''}{delta}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 5. Framework + Principle — compact combined ────────────────── */}
        <div className="border-t border-white/6 pt-4 space-y-3">
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-1"
              style={{ color: categoryColor }}
            >
              Framework
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">{caseData.framework}</p>
          </div>
          <div className="rounded-xl border px-3 py-2.5" style={{ borderColor: `${categoryColor}25`, background: `${categoryColor}08` }}>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Executive Principle</p>
            <p className="text-white font-semibold text-sm italic">"{caseData.principle}"</p>
          </div>
        </div>

        {/* ── 6. Traps ──────────────────────────────────────────────────── */}
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

      {/* ── 7. Actions ────────────────────────────────────────────────────── */}
      <div className="flex gap-3">
        {!isCorrect && !isRetry && (
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
          Next Case →
        </button>
      </div>
    </motion.div>
  )
}
