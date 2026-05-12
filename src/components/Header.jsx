import { getLevelInfo } from '../lib/engine'
import { getProfile as loadProfile } from '../lib/storage'
import { LEVELS } from '../data/config'

export default function Header({ profile, onSwitchProfile, onLeaderboard, onAchievements, onDailyChallenge, dailyAvailable }) {
  const { current, next, progress, xpIntoLevel, xpForLevel } = getLevelInfo(profile.totalXP)
  const accuracy = profile.casesAnswered > 0
    ? Math.round((profile.correctAnswers / profile.casesAnswered) * 100)
    : 0

  // Rival info
  const rivalProfile = profile.rivalId ? loadProfile(profile.rivalId) : null
  const xpGap = rivalProfile ? profile.totalXP - rivalProfile.totalXP : null

  return (
    <header className="bg-navy-900 border-b border-white/8 px-4 py-3 sticky top-0 z-30">
      <div className="max-w-4xl mx-auto">
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {/* Avatar + name */}
            <button
              onClick={onSwitchProfile}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              title="Switch profile"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-black text-xs flex-shrink-0"
                style={{ background: profile.color }}
              >
                {profile.name[0].toUpperCase()}
              </div>
              <span className="text-white font-bold text-sm">{profile.name}</span>
              <span className="text-slate-600 text-xs">▾</span>
            </button>

            {profile.streak >= 3 && (
              <div className="flex items-center gap-1 bg-gold-500/15 border border-gold-500/25 rounded-full px-2 py-0.5">
                <span className="text-gold-400 text-[10px] font-bold">🔥 {profile.streak}</span>
              </div>
            )}

            {rivalProfile && (
              <div className="hidden sm:flex items-center gap-1 bg-red-500/10 border border-red-500/20 rounded-full px-2 py-0.5">
                <span className="text-[10px] font-bold" style={{ color: rivalProfile.color }}>
                  {rivalProfile.name[0]}
                </span>
                <span className={`text-[10px] font-bold ${xpGap >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {xpGap >= 0 ? `+${xpGap}` : xpGap} XP
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {dailyAvailable && (
              <button
                onClick={onDailyChallenge}
                className="flex items-center gap-1.5 bg-gold-500/15 border border-gold-500/30 rounded-full px-2.5 py-1 hover:bg-gold-500/20 transition-colors"
                title="Daily Challenge — 3x XP"
              >
                <span className="text-gold-400 text-[10px] font-bold">⭐ Daily</span>
              </button>
            )}
            <button onClick={onAchievements} className="text-slate-500 hover:text-slate-300 text-xs transition-colors" title="Achievements">
              🏅
            </button>
            <button onClick={onLeaderboard} className="text-slate-500 hover:text-slate-300 text-xs transition-colors" title="Leaderboard">
              🏆
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
              {next ? (
                <span className="text-slate-500 text-[10px]">{xpIntoLevel} / {xpForLevel} XP</span>
              ) : (
                <span className="text-gold-400 text-[10px] font-bold">MAX LEVEL</span>
              )}
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progress * 100}%`,
                  background: current.level >= 8
                    ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                    : current.level >= 5
                      ? 'linear-gradient(90deg, #7c3aed, #0066cc)'
                      : '#0066cc',
                }}
              />
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="text-white font-bold text-sm">{profile.totalXP.toLocaleString()}</span>
            <span className="text-slate-500 text-[10px] ml-1">XP</span>
          </div>
        </div>
      </div>
    </header>
  )
}
