import { BarChart2, ClipboardList, Award, Trophy, CalendarDays, Settings, Volume2, VolumeX, Swords } from 'lucide-react'
import { getLevelInfo } from '../lib/engine'
import { getProfile as loadProfile } from '../lib/storage'

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

export default function Header({
  profile, onSwitchProfile,
  onLeaderboard, onAchievements, onHistory, onAnalytics,
  onDailyChallenge, dailyAvailable,
  onMissions,
  onSettings,
  sfxMuted, onToggleMute,
}) {
  const { current, next, progress, xpIntoLevel, xpForLevel } = getLevelInfo(profile.totalXP)

  const rivalProfile = profile.rivalId ? loadProfile(profile.rivalId) : null
  const xpGap = rivalProfile ? profile.totalXP - rivalProfile.totalXP : null

  const iconBtn = (label) => ({
    className: 'w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/8 transition-all focus:outline-none focus:ring-1 focus:ring-brand-500/50',
    'aria-label': label,
    title: label,
  })

  return (
    <header className="bg-navy-900 border-b border-white/8 px-4 py-3 sticky top-0 z-30">
      <div className="max-w-4xl mx-auto">
        {/* Top row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {/* Avatar + name */}
            <button
              onClick={onSwitchProfile}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-brand-500/50 rounded-lg px-1 py-0.5"
              aria-label="Switch profile"
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

          <div className="flex items-center gap-0.5">
            {dailyAvailable && (
              <button
                onClick={onDailyChallenge}
                className="flex items-center gap-1.5 bg-gold-500/15 border border-gold-500/30 rounded-full px-2.5 py-1 hover:bg-gold-500/20 transition-colors mr-1 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                aria-label="Daily Challenge — 3x XP"
                title="Daily Challenge — 3x XP"
              >
                <CalendarDays size={11} className="text-gold-400" />
                <span className="text-gold-400 text-[10px] font-bold">Daily</span>
              </button>
            )}

            <button onClick={onMissions}     {...iconBtn('Mission Mode')}><Swords      size={15} /></button>
            <button onClick={onAnalytics}    {...iconBtn('Analytics')}><BarChart2    size={15} /></button>
            <button onClick={onHistory}      {...iconBtn('Case History')}><ClipboardList size={15} /></button>
            <button onClick={onAchievements} {...iconBtn('Achievements')}><Award        size={15} /></button>
            <button onClick={onLeaderboard}  {...iconBtn('Leaderboard')}><Trophy       size={15} /></button>

            <div className="w-px h-4 bg-white/10 mx-1" />

            <button onClick={onToggleMute} {...iconBtn(sfxMuted ? 'Unmute sounds' : 'Mute sounds')}>
              {sfxMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
            <button onClick={onSettings} {...iconBtn('Settings')}><Settings size={15} /></button>
          </div>
        </div>

        {/* XP / Level bar */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 flex items-center gap-1.5">
            {(profile.prestige || 0) > 0 && (
              <span
                className="text-[9px] font-black px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}
                title={`Prestige ${toRoman(profile.prestige)}`}
              >
                ✦{toRoman(profile.prestige)}
              </span>
            )}
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
