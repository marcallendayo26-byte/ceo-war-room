import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, CheckCircle2, Zap } from 'lucide-react'
import { LEVELS } from '../data/config'
import { getLevelInfo } from '../lib/engine'

// Average net XP per case — weighted for higher-level difficulty distribution
// Level ≥5 skews toward difficulty-3 cases. 70% accuracy estimate.
function avgXPPerCase(level) {
  if (level >= 8) return 22   // mostly exec-level cases
  if (level >= 5) return 20   // mix heavy on difficulty-3
  return 17                   // more foundational cases
}

function casesEstimate(xpNeeded, level) {
  if (xpNeeded <= 0) return 0
  return Math.ceil(xpNeeded / avgXPPerCase(level))
}

function sessionEstimate(cases) {
  return Math.ceil(cases / 10)   // ~10 cases per session
}

// Bar colour consistent with Header XP bar
function levelColor(level) {
  if (level >= 8) return 'linear-gradient(90deg,#f59e0b,#ef4444)'
  if (level >= 5) return 'linear-gradient(90deg,#7c3aed,#0066cc)'
  return '#0066cc'
}

function statusOf(lvl, current, totalXP) {
  if (lvl.level <  current.level) return 'done'
  if (lvl.level === current.level) return 'current'
  return 'locked'
}

export default function ProgressionPanel({ profile, onClose }) {
  const { current, next, xpIntoLevel, xpForLevel, progress } = getLevelInfo(profile.totalXP)
  const totalXP  = profile.totalXP
  const curLevel = current.level

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
          initial={{ opacity: 0, scale: 0.93, y: 16 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{    opacity: 0, scale: 0.96        }}
          className="bg-navy-800 border border-white/12 rounded-3xl p-6 w-full max-w-sm max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* ── Header ──────────────────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white font-black text-lg">Rank Progression</p>
              <p className="text-slate-500 text-[11px] mt-0.5">Your path to 0.1% Problem Solver</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-600 hover:text-slate-300 transition-colors p-1 rounded-lg"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* ── Current rank card ────────────────────────────────────────── */}
          <div
            className="rounded-2xl p-4 mb-5 border"
            style={{ borderColor: 'rgba(59,158,255,0.25)', background: 'rgba(59,158,255,0.06)' }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mb-0.5">Current Rank</p>
                <p className="text-white font-black text-base">{current.title}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Level {current.level} · {totalXP.toLocaleString()} XP total</p>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                style={{ background: levelColor(current.level) }}
              >
                {current.level}
              </div>
            </div>
            {next && (
              <>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-slate-400 text-[11px]">Progress to Level {next.level}</p>
                  <p className="text-slate-300 text-[11px] font-semibold tabular-nums">{xpIntoLevel.toLocaleString()} / {xpForLevel.toLocaleString()} XP</p>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: levelColor(current.level) }}
                  />
                </div>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <Zap size={11} className="text-brand-400" />
                  <p className="text-slate-400 text-[11px]">
                    <span className="text-white font-semibold">{(next.xpRequired - totalXP).toLocaleString()} XP</span>
                    {' '}to <span className="text-brand-300 font-semibold">{next.title}</span>
                    {' '}· ~{casesEstimate(next.xpRequired - totalXP, curLevel).toLocaleString()} cases
                  </p>
                </div>
              </>
            )}
          </div>

          {/* ── Level table ─────────────────────────────────────────────── */}
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">All Ranks</p>
          <div className="space-y-2">
            {LEVELS.map((lvl, i) => {
              const status     = statusOf(lvl, current, totalXP)
              const xpNeeded   = lvl.xpRequired - totalXP
              const cases      = casesEstimate(xpNeeded, curLevel)
              const sessions   = sessionEstimate(cases)
              const isDone     = status === 'done'
              const isCurrent  = status === 'current'
              const isLocked   = status === 'locked'

              return (
                <motion.div
                  key={lvl.level}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.04, duration: 0.22 }}
                  className={`rounded-xl px-3.5 py-3 flex items-center gap-3 border ${
                    isCurrent
                      ? 'border-brand-500/35 bg-brand-500/8'
                      : isDone
                        ? 'border-white/6 bg-white/3'
                        : 'border-white/5 bg-white/1'
                  }`}
                >
                  {/* Level badge */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0"
                    style={{
                      background: isDone || isCurrent
                        ? levelColor(lvl.level)
                        : 'rgba(255,255,255,0.06)',
                      color: isDone || isCurrent ? '#fff' : '#475569',
                      opacity: isLocked ? 0.5 : 1,
                    }}
                  >
                    {lvl.level}
                  </div>

                  {/* Title + XP */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold truncate ${
                      isCurrent ? 'text-white' : isDone ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {lvl.title}
                    </p>
                    <p className="text-[10px] text-slate-600 mt-0.5 tabular-nums">
                      {lvl.xpRequired.toLocaleString()} XP required
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex-shrink-0 text-right">
                    {isDone && (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    )}
                    {isCurrent && (
                      <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">You</span>
                    )}
                    {isLocked && (
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500 font-semibold tabular-nums">~{cases.toLocaleString()} cases</p>
                        <p className="text-[9px] text-slate-600 tabular-nums">{sessions} session{sessions !== 1 ? 's' : ''}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ── Footer note ─────────────────────────────────────────────── */}
          <p className="text-slate-600 text-[10px] text-center mt-4 leading-relaxed">
            Estimates based on ~20 XP/case average at your level.<br/>
            Streaks and daily challenges will get you there faster.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
