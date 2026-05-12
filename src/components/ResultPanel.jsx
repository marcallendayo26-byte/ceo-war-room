import { motion } from 'framer-motion'
import { CATEGORY_COLORS, HEALTH_LABELS } from '../data/config'
import { healthBarValue } from '../lib/engine'

export default function ResultPanel({ result, onNext }) {
  const { caseData, chosen, isCorrect, xpDelta, streakBonus, newStreak, healthDelta } = result
  const optionLabels = ['A', 'B', 'C', 'D']

  const relevantDeltas = Object.entries(healthDelta).filter(([, v]) => v !== 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      {/* Verdict banner */}
      <div
        className={`rounded-2xl px-6 py-4 border ${
          isCorrect
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-red-500/10 border-red-500/30'
        }`}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-black ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? '✓ Correct' : '✗ Wrong'}
            </span>
            {isCorrect && newStreak >= 3 && (
              <span className="bg-gold-500/20 text-gold-400 text-xs font-bold px-2.5 py-1 rounded-full border border-gold-500/30">
                🔥 {newStreak} streak
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {streakBonus > 0 && (
              <span className="text-gold-400 text-sm font-bold">+{streakBonus} streak bonus</span>
            )}
            <span
              className={`text-xl font-black ${xpDelta > 0 ? 'text-brand-400' : 'text-red-400'}`}
            >
              {xpDelta > 0 ? '+' : ''}{xpDelta} XP
            </span>
          </div>
        </div>

        <div className="mt-2 text-sm text-slate-400">
          You chose <strong className="text-white">{optionLabels[chosen]}</strong>.
          {!isCorrect && (
            <> The correct answer was <strong className="text-emerald-400">{optionLabels[caseData.correct]}</strong>.</>
          )}
        </div>
      </div>

      {/* Health impacts */}
      {relevantDeltas.length > 0 && (
        <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Company Impact</p>
          <div className="flex flex-wrap gap-2">
            {relevantDeltas.map(([key, delta]) => (
              <div
                key={key}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold
                  ${delta > 0 ? 'bg-emerald-500/12 text-emerald-400' : 'bg-red-500/12 text-red-400'}`}
              >
                <span>{HEALTH_LABELS[key]}</span>
                <span>{delta > 0 ? '+' : ''}{delta}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explanation */}
      <div className="bg-navy-800 border border-white/8 rounded-2xl px-5 py-5 space-y-4">
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Why this answer</p>
          <p className="text-slate-300 text-sm leading-relaxed">{caseData.explanation}</p>
        </div>

        <div className="border-t border-white/6 pt-4">
          <p
            className="text-[10px] font-bold uppercase tracking-widest mb-1"
            style={{ color: CATEGORY_COLORS[caseData.category] }}
          >
            Framework
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">{caseData.framework}</p>
        </div>

        <div className="border-t border-white/6 pt-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Executive Principle</p>
          <p className="text-white font-semibold text-sm italic">"{caseData.principle}"</p>
        </div>

        {caseData.traps && caseData.traps.length > 0 && (
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

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all duration-150
          bg-brand-500 hover:bg-brand-600 text-white active:scale-[0.98]"
      >
        Next Case →
      </button>
    </motion.div>
  )
}
