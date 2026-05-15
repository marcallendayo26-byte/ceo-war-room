import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORY_COLORS } from '../data/config'
import { playSelect, playDeal } from '../lib/sounds'

const DIFFICULTY_LABELS = { 1: 'Foundational', 2: 'Intermediate', 3: 'Executive' }
const DIFFICULTY_COLORS = { 1: '#34d399', 2: '#fbbf24', 3: '#f87171' }

// Visual atmosphere per difficulty level
// Each tier should feel emotionally different — not just labelled
const DIFFICULTY_ATMO = {
  1: {
    accent:  '#34d399',                                          // top bar color
    wash:    'rgba(52,211,153,0.045)',                           // bg tint
    border:  'rgba(255,255,255,0.08)',
  },
  2: {
    accent:  '#fbbf24',
    wash:    'rgba(251,191,36,0.065)',
    border:  'rgba(255,255,255,0.08)',
  },
  3: {
    accent:  '#f87171',
    wash:    'rgba(248,113,113,0.08)',
    border:  'rgba(248,113,113,0.22)',   // tinted border — feels live
    pulse:   true,                       // animated breathing border
  },
}

const KEY_MAP = { a: 0, b: 1, c: 2, d: 3 }

export default function CaseCard({ caseData, onAnswer, isDaily = false, isRetry = false, isReview = false, isConsequence = false, sourceCategory = null, healthContext = null, packContext = null, packActLabel = null, keyboardActive = true }) {
  const [selected, setSelected]   = useState(null)
  const [thinking, setThinking]   = useState(false)

  // Deal sound plays once when this card arrives
  useEffect(() => { playDeal() }, [])

  const handleSelect = (idx) => {
    if (selected !== null) return
    playSelect()
    setSelected(idx)
    setThinking(true)
    // 450 ms of suspense — enough to feel the weight of the decision
    setTimeout(() => onAnswer(idx), 450)
  }

  // A/B/C/D keyboard shortcuts
  useEffect(() => {
    if (!keyboardActive || selected !== null) return
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const idx = KEY_MAP[e.key.toLowerCase()]
      if (idx !== undefined && idx < caseData.options.length) {
        e.preventDefault()
        handleSelect(idx)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [keyboardActive, selected, caseData.options.length])

  const optionLabels = ['A', 'B', 'C', 'D']
  const atm = DIFFICULTY_ATMO[caseData.difficulty] || DIFFICULTY_ATMO[1]

  return (
    <motion.div
      initial={{ opacity: 0, x: 28, y: 6 }}
      animate={{ opacity: 1, x: 0,  y: 0 }}
      exit={{    opacity: 0, x: -22,       transition: { duration: 0.18 } }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: '#0d1b2e',
        border: `1px solid ${atm.border}`,
      }}
    >
      {/* ── Difficulty atmosphere — subtle colour wash ─────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${atm.wash} 0%, transparent 70%)`,
        }}
      />

      {/* ── Executive-only: breathing border overlay ───────────────────── */}
      {atm.pulse && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: '1px solid rgba(248,113,113,0.5)' }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* ── Difficulty accent line — top ────────────────────────────────── */}
      <div style={{ height: 2, background: atm.accent, opacity: 0.75, flexShrink: 0 }} />

      {/* ── Consequence (Ripple Event) banner ──────────────────────────────── */}
      {isConsequence && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 pt-4 pb-0 relative"
        >
          <div className="rounded-xl border border-red-500/30 bg-red-500/8 px-3.5 py-2.5 mb-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-red-400/80 mb-1">
              ⚡ Consequence — Ripple Event
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              This situation stems from a recent {sourceCategory || 'leadership'} decision that went wrong. The board is watching how you respond.
            </p>
          </div>
        </motion.div>
      )}

      {/* ── Health crisis context strip ─────────────────────────────────────── */}
      {!isConsequence && healthContext && (
        <div className="px-5 pt-4 pb-0 relative">
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/6 px-3.5 py-2 mb-1">
            <p className="text-amber-400/80 text-[11px] leading-relaxed font-medium">{healthContext}</p>
          </div>
        </div>
      )}

      {/* ── Pack context strip ──────────────────────────────────────────── */}
      {packContext && (
        <div className="px-5 pt-4 pb-0 relative">
          <div
            className="rounded-xl border px-3.5 py-2.5 mb-1"
            style={{ borderColor: `${atm.accent}25`, background: `${atm.accent}06` }}
          >
            {packActLabel && (
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: atm.accent }}>
                {packActLabel}
              </p>
            )}
            <p className="text-slate-400 text-[11px] leading-relaxed">{packContext}</p>
          </div>
        </div>
      )}

      {/* ── Case header ─────────────────────────────────────────────────── */}
      <div className="px-6 pt-5 pb-4 border-b border-white/6 relative">
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
          {isReview && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400">
              📌 Review
            </span>
          )}
          {isConsequence && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-500/15 text-red-400">
              ⚡ Consequence
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

      {/* ── Options ─────────────────────────────────────────────────────── */}
      <div className="p-4 space-y-2.5 relative">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
          What do you recommend?
          {keyboardActive && selected === null && (
            <span className="ml-2 text-slate-700 normal-case font-normal">Press A · B · C · D</span>
          )}
        </p>

        {caseData.options.map((option, idx) => {
          const isSelected = selected === idx
          const isDimmed   = selected !== null && !isSelected

          return (
            <motion.button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              aria-label={`Option ${optionLabels[idx]}: ${option}`}
              // Pulse ring on the chosen option while "thinking"
              animate={isSelected && thinking ? {
                boxShadow: [
                  '0 0 0 0px rgba(0,102,204,0)',
                  '0 0 0 4px rgba(0,102,204,0.38)',
                  '0 0 0 2px rgba(0,102,204,0.22)',
                  '0 0 0 4px rgba(0,102,204,0.38)',
                  '0 0 0 0px rgba(0,102,204,0)',
                ],
              } : { boxShadow: '0 0 0 0px rgba(0,102,204,0)' }}
              transition={{ duration: 0.46, ease: 'easeInOut' }}
              className={`w-full text-left rounded-xl px-4 py-3 flex items-start gap-3 border
                ${selected === null
                  ? 'border-white/8 bg-white/4 hover:bg-white/8 hover:border-brand-500/40 cursor-pointer focus:outline-none focus:border-brand-500/60 focus:bg-white/8'
                  : isSelected
                    ? 'border-brand-500/60 bg-brand-500/10 cursor-default'
                    : 'border-white/4 bg-white/2 cursor-default'
                }`}
              style={{
                // Non-selected options bleed away during the thinking moment
                opacity: isDimmed ? (thinking ? 0.16 : 0.4) : 1,
                transition: 'opacity 0.22s ease, border-color 0.15s, background 0.15s',
              }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black mt-0.5"
                style={{
                  background: isSelected ? '#0066cc' : 'rgba(255,255,255,0.08)',
                  color:      isSelected ? '#fff'    : '#64748b',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {optionLabels[idx]}
              </span>
              <span className="text-slate-300 text-sm leading-relaxed">{option}</span>
            </motion.button>
          )
        })}

        {/* Thinking indicator — appears while waiting for the verdict */}
        <AnimatePresence>
          {thinking && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="text-center text-[10px] text-slate-600 uppercase tracking-widest pt-1 select-none"
            >
              Reviewing…
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
