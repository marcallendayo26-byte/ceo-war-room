import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CASES as CASES1 } from '../data/cases'
import { CASES2 } from '../data/cases2'
import { CASES_TECH } from '../data/cases_tech'
import { CASES_TECH2 } from '../data/cases_tech2'
import { CASES_PM } from '../data/cases_pm'
import { CASES_PM2 } from '../data/cases_pm2'
import { CASES_PM3 } from '../data/cases_pm3'
import { CASES_PM4 } from '../data/cases_pm4'
import { CASES_EM } from '../data/cases_em'
import { CASES_EM2 } from '../data/cases_em2'
import { CASES_EM3 } from '../data/cases_em3'
import { CASES_EM4 } from '../data/cases_em4'
import { CASES_CSM } from '../data/cases_csm'
import { CASES_CSM2 } from '../data/cases_csm2'
import { CASES_CSM3 } from '../data/cases_csm3'
import { CASES_CSM4 } from '../data/cases_csm4'
import { CASES_SALES } from '../data/cases_sales'
import { CASES_SALES2 } from '../data/cases_sales2'
import { CASES_SALES3 } from '../data/cases_sales3'
import { CASES_SALES4 } from '../data/cases_sales4'
import { CASES_BD } from '../data/cases_bd'
import { CASES_BD2 } from '../data/cases_bd2'
import { CASES_BD3 } from '../data/cases_bd3'
import { CASES_BD4 } from '../data/cases_bd4'
import { CATEGORY_COLORS, CATEGORIES_BY_ROLE } from '../data/config'

const ALL_CASES = [...CASES1, ...CASES2, ...CASES_TECH, ...CASES_TECH2, ...CASES_PM, ...CASES_PM2, ...CASES_PM3, ...CASES_PM4, ...CASES_EM, ...CASES_EM2, ...CASES_EM3, ...CASES_EM4, ...CASES_CSM, ...CASES_CSM2, ...CASES_CSM3, ...CASES_CSM4, ...CASES_SALES, ...CASES_SALES2, ...CASES_SALES3, ...CASES_SALES4, ...CASES_BD, ...CASES_BD2, ...CASES_BD3, ...CASES_BD4]

const DIFFICULTY_LABELS = { 1: 'Foundational', 2: 'Intermediate', 3: 'Executive' }
const OPTION_LABELS = ['A', 'B', 'C', 'D']

function HistoryEntry({ entry, isOpen, onToggle }) {
  const caseData = ALL_CASES.find(c => c.id === entry.caseId)
  if (!caseData) return null

  const color = CATEGORY_COLORS[caseData.category]

  return (
    <div className={`rounded-xl border transition-colors ${isOpen ? 'border-white/15 bg-white/4' : 'border-white/6 bg-white/2 hover:border-white/12'}`}>
      {/* Summary row */}
      <button className="w-full text-left px-4 py-3 flex items-start gap-3" onClick={onToggle}>
        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black mt-0.5 ${entry.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
          {entry.isCorrect ? '✓' : '✗'}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap mb-1">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: `${color}20`, color }}>
              {caseData.category}
            </span>
            <span className="text-[10px] text-slate-600">{DIFFICULTY_LABELS[caseData.difficulty]}</span>
            <span className="text-[10px] text-slate-600">{new Date(entry.timestamp).toLocaleDateString()}</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{caseData.scenario}</p>
        </div>

        <div className="flex-shrink-0 text-right ml-2">
          <span className={`text-xs font-bold ${entry.xpDelta > 0 ? 'text-brand-400' : 'text-red-400'}`}>
            {entry.xpDelta > 0 ? '+' : ''}{entry.xpDelta} XP
          </span>
          <div className="text-slate-600 text-[10px] mt-0.5">{isOpen ? '▲' : '▼'}</div>
        </div>
      </button>

      {/* Expanded detail */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/6">
              {/* Options */}
              <div className="space-y-1.5">
                {caseData.options.map((opt, i) => {
                  const isChosen = i === entry.chosen
                  const isCorrect = i === caseData.correct
                  let bg = 'bg-white/3 border-white/6 text-slate-500'
                  if (isCorrect) bg = 'bg-emerald-500/12 border-emerald-500/30 text-emerald-300'
                  else if (isChosen && !isCorrect) bg = 'bg-red-500/12 border-red-500/30 text-red-300'

                  return (
                    <div key={i} className={`flex items-start gap-2 rounded-lg px-3 py-2 border text-xs ${bg}`}>
                      <span className="font-bold flex-shrink-0 w-4">{OPTION_LABELS[i]}</span>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                      {isChosen && !isCorrect && <span className="flex-shrink-0 text-[10px] font-bold text-red-400">You chose</span>}
                      {isCorrect && <span className="flex-shrink-0 text-[10px] font-bold text-emerald-400">Correct</span>}
                    </div>
                  )
                })}
              </div>

              {/* Principle reminder */}
              <div className="rounded-lg bg-white/3 border border-white/6 px-3 py-2">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Principle</p>
                <p className="text-white text-xs font-semibold italic">"{caseData.principle}"</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HistoryPanel({ profile, onClose }) {
  const [filter, setFilter] = useState('All')
  const [openId, setOpenId] = useState(null)

  const FILTERS = ['All', 'Wrong only', ...(CATEGORIES_BY_ROLE[profile?.role] || CATEGORIES_BY_ROLE.ceo)]

  const history = [...(profile?.caseHistory || [])].reverse() // newest first

  const filtered = history.filter(e => {
    if (filter === 'All') return true
    if (filter === 'Wrong only') return !e.isCorrect
    return e.category === filter
  })

  const totalWrong = history.filter(e => !e.isCorrect).length
  const accuracy = history.length > 0 ? Math.round(((history.length - totalWrong) / history.length) * 100) : 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: 'rgba(7,15,28,0.90)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-navy-800 border border-white/12 rounded-3xl w-full max-w-lg max-h-[85vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-white/8 flex-shrink-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-white font-black text-lg">Case History</p>
                <p className="text-slate-500 text-xs">
                  {history.length} cases · {accuracy}% accuracy · {totalWrong} wrong
                </p>
              </div>
              <button onClick={onClose} className="text-slate-600 hover:text-slate-300 transition-colors mt-1">✕</button>
            </div>

            {/* Filter pills */}
            <div className="flex gap-1.5 flex-wrap">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all ${
                    filter === f
                      ? 'bg-brand-500 text-white'
                      : 'bg-white/6 text-slate-500 hover:text-white'
                  }`}
                >
                  {f}
                  {f === 'Wrong only' && totalWrong > 0 && (
                    <span className="ml-1 bg-red-500/30 text-red-400 rounded-full px-1">{totalWrong}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="overflow-y-auto flex-1 px-4 py-4 space-y-2">
            {filtered.length === 0 && (
              <p className="text-slate-600 text-sm text-center py-10">
                {history.length === 0 ? 'No cases answered yet.' : 'Nothing matches this filter.'}
              </p>
            )}
            {filtered.map((entry, i) => (
              <HistoryEntry
                key={`${entry.caseId}-${entry.timestamp}`}
                entry={entry}
                isOpen={openId === `${entry.caseId}-${entry.timestamp}`}
                onToggle={() => setOpenId(prev =>
                  prev === `${entry.caseId}-${entry.timestamp}` ? null : `${entry.caseId}-${entry.timestamp}`
                )}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
