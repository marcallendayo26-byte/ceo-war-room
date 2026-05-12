import { useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORY_COLORS } from '../data/config'

const DIFFICULTY_LABELS = { 1: 'Foundational', 2: 'Intermediate', 3: 'Executive' }
const DIFFICULTY_COLORS = { 1: '#34d399', 2: '#fbbf24', 3: '#f87171' }

export default function CaseCard({ caseData, onAnswer, isDaily = false, isRetry = false }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setTimeout(() => onAnswer(idx), 200)
  }

  const optionLabels = ['A', 'B', 'C', 'D']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-navy-800 border border-white/8 rounded-2xl overflow-hidden"
    >
      {/* Case header */}
      <div className="px-6 pt-5 pb-4 border-b border-white/6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${CATEGORY_COLORS[caseData.category]}22`, color: CATEGORY_COLORS[caseData.category] }}
          >
            {caseData.category}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${DIFFICULTY_COLORS[caseData.difficulty]}18`, color: DIFFICULTY_COLORS[caseData.difficulty] }}
          >
            {DIFFICULTY_LABELS[caseData.difficulty]}
          </span>
          {isDaily && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400">
              ⭐ Daily · 3x XP
            </span>
          )}
          {isRetry && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/8 text-slate-400">
              ↩ Retry · ½ XP
            </span>
          )}
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">{caseData.scenario}</p>

        {caseData.quote && (
          <div className="mt-4 border-l-2 border-brand-500/40 pl-3">
            <p className="text-slate-400 text-sm italic">{caseData.quote}</p>
          </div>
        )}
      </div>

      {/* Options */}
      <div className="p-4 space-y-2.5">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">What do you recommend?</p>
        {caseData.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={selected !== null}
            className={`w-full text-left rounded-xl px-4 py-3 flex items-start gap-3 transition-all duration-150 border
              ${selected === null
                ? 'border-white/8 bg-white/4 hover:bg-white/8 hover:border-brand-500/40 cursor-pointer'
                : selected === idx
                  ? 'border-brand-500/60 bg-brand-500/10 cursor-default'
                  : 'border-white/4 bg-white/2 opacity-40 cursor-default'
              }`}
          >
            <span
              className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black mt-0.5"
              style={{
                background: selected === idx ? '#0066cc' : 'rgba(255,255,255,0.08)',
                color: selected === idx ? '#fff' : '#64748b',
              }}
            >
              {optionLabels[idx]}
            </span>
            <span className="text-slate-300 text-sm leading-relaxed">{option}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
