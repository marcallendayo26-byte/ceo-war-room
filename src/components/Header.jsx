import { getLevelInfo } from '../lib/engine'
import { LEVELS } from '../data/config'

export default function Header({ state, onReset }) {
  const { totalXP, streak, bestStreak, casesAnswered, correctAnswers } = state
  const { current, next, progress, xpIntoLevel, xpForLevel } = getLevelInfo(totalXP)
  const accuracy = casesAnswered > 0 ? Math.round((correctAnswers / casesAnswered) * 100) : 0

  return (
    <header className="bg-navy-900 border-b border-white/8 px-4 py-3 sticky top-0 z-30">
      <div className="max-w-4xl mx-auto">
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-white font-black text-sm tracking-tight">CEO WAR ROOM</span>
              <span className="text-slate-500 text-xs ml-2 hidden sm:inline">Business Problem-Solving Game</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {streak >= 3 && (
              <div className="flex items-center gap-1 bg-gold-500/15 border border-gold-500/30 rounded-full px-2.5 py-1">
                <span className="text-gold-400 text-xs font-bold">🔥 {streak} streak</span>
              </div>
            )}
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
              <span>{casesAnswered} cases</span>
              <span className="text-slate-600">·</span>
              <span>{accuracy}% accuracy</span>
            </div>
            <button
              onClick={onReset}
              className="text-slate-600 hover:text-slate-400 text-xs transition-colors"
              title="Reset progress"
            >
              Reset
            </button>
          </div>
        </div>

        {/* XP / Level bar */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest">Lv.{current.level}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white text-xs font-semibold">{current.title}</span>
              {next && (
                <span className="text-slate-500 text-[10px]">{xpIntoLevel} / {xpForLevel} XP → {next.title}</span>
              )}
              {!next && (
                <span className="text-gold-400 text-[10px] font-bold">MAX LEVEL</span>
              )}
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progress * 100}%`,
                  background: current.level >= 8 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' :
                              current.level >= 5 ? 'linear-gradient(90deg, #7c3aed, #0066cc)' :
                              '#0066cc',
                }}
              />
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="text-white font-bold text-sm">{totalXP.toLocaleString()}</span>
            <span className="text-slate-500 text-[10px] ml-1">XP</span>
          </div>
        </div>
      </div>
    </header>
  )
}
