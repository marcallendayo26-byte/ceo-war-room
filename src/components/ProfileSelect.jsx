import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pencil } from 'lucide-react'

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
import {
  PROFILE_COLORS, getAllProfiles, createProfile,
  deleteProfile, setActiveProfile, updateProfile,
} from '../lib/storage'
import { getLevelInfo } from '../lib/engine'
import { ACHIEVEMENTS } from '../data/achievements'
import { ROLES } from '../data/config'

// ─── Profile card ─────────────────────────────────────────────────────────────

function ProfileCard({ profile, onSelect, onDelete, onEdit, rivalId }) {
  const { current } = getLevelInfo(profile.totalXP)
  const accuracy = profile.casesAnswered > 0
    ? Math.round((profile.correctAnswers / profile.casesAnswered) * 100)
    : 0
  const unlockedCount = Object.keys(profile.achievements || {}).length
  const isRival = rivalId === profile.id
  const roleInfo = ROLES.find(r => r.id === (profile.role || 'ceo'))

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-navy-800 border border-white/8 rounded-2xl p-5 hover:border-white/20 transition-all cursor-pointer group"
      onClick={() => onSelect(profile.id)}
    >
      {isRival && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
          RIVAL
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
          style={{ background: profile.color }}
        >
          {profile.name[0].toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-bold truncate">{profile.name}</span>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ background: `${profile.color}22`, color: profile.color }}
            >
              Lv.{current.level}
            </span>
            {(profile.prestige || 0) > 0 && (
              <span
                className="text-[9px] font-black px-1.5 py-0.5 rounded-full flex-shrink-0"
                style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}
                title={`Prestige ${toRoman(profile.prestige)}`}
              >
                ✦{toRoman(profile.prestige)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-slate-500 text-xs">{current.title}</p>
            <span className="text-slate-600 text-[10px]">·</span>
            <span className="text-slate-500 text-[10px]">
              {roleInfo?.icon} {roleInfo?.label}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="text-slate-500">XP</div>
              <div className="text-white font-semibold">{profile.totalXP.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-slate-500">Accuracy</div>
              <div className="text-white font-semibold">{accuracy}%</div>
            </div>
            <div>
              <div className="text-slate-500">Badges</div>
              <div className="text-white font-semibold">{unlockedCount}/{ACHIEVEMENTS.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* XP bar */}
      <div className="mt-4">
        {(() => {
          const { progress, next } = getLevelInfo(profile.totalXP)
          return (
            <div className="h-1 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${(next ? progress : 1) * 100}%`, background: profile.color }}
              />
            </div>
          )
        })()}
      </div>

      {/* Edit + Delete — visible on hover */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={e => { e.stopPropagation(); onEdit(profile.id) }}
          className="text-slate-500 hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-white/8"
          title="Edit profile"
          aria-label="Edit profile"
        >
          <Pencil size={13} />
        </button>
        <button
          onClick={e => { e.stopPropagation(); onDelete(profile.id) }}
          className="text-slate-600 hover:text-red-400 transition-colors p-1 rounded-lg hover:bg-white/8 text-xs leading-none"
          title="Delete profile"
          aria-label="Delete profile"
        >
          ✕
        </button>
      </div>
    </motion.div>
  )
}

// ─── Edit profile form ────────────────────────────────────────────────────────

function EditProfileForm({ profile, onSaved, onCancel }) {
  const [name, setName] = useState(profile.name)
  const [color, setColor] = useState(profile.color)

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    updateProfile(profile.id, { name: trimmed, color })
    onSaved()
  }

  const roleInfo = ROLES.find(r => r.id === (profile.role || 'ceo'))

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-navy-800 border border-brand-500/40 rounded-2xl p-6"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-base flex-shrink-0"
          style={{ background: color }}
        >
          {(name.trim()[0] || profile.name[0]).toUpperCase()}
        </div>
        <div>
          <p className="text-white font-bold text-sm">Edit Profile</p>
          <p className="text-slate-500 text-[11px]">
            {roleInfo?.icon} {roleInfo?.label} · Your progress is kept
          </p>
        </div>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-slate-400 text-xs mb-1.5">Display name</label>
        <input
          autoFocus
          type="text"
          maxLength={20}
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
          style={{ colorScheme: 'dark' }}
        />
      </div>

      {/* Color */}
      <div className="mb-5">
        <label className="block text-slate-400 text-xs mb-2">Profile color</label>
        <div className="flex gap-2 flex-wrap">
          {PROFILE_COLORS.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className="w-8 h-8 rounded-xl transition-transform"
              style={{
                background: c,
                outline: color === c ? '3px solid white' : 'none',
                outlineOffset: '2px',
                transform: color === c ? 'scale(1.15)' : 'scale(1)',
              }}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!name.trim()}
          className="flex-1 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm disabled:opacity-40 transition-colors"
        >
          Save changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  )
}

// ─── Create profile form ──────────────────────────────────────────────────────

function CreateProfileForm({ onCreated, onCancel }) {
  const [name, setName] = useState('')
  const [color, setColor] = useState(PROFILE_COLORS[0])
  const [role, setRole] = useState('ceo')

  const handleSubmit = e => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    const profile = createProfile(trimmed, color, role)
    onCreated(profile)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-navy-800 border border-white/12 rounded-2xl p-6"
    >
      <p className="text-white font-bold mb-4">Create Profile</p>

      <div className="mb-4">
        <label className="block text-slate-400 text-xs mb-2">Your role</label>
        <div className="grid grid-cols-2 gap-2">
          {ROLES.map(r => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRole(r.id)}
              className={`rounded-xl border p-3 text-left transition-all ${
                role === r.id
                  ? 'border-brand-500 bg-brand-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="text-lg mb-1">{r.icon}</div>
              <div className="text-white text-xs font-bold leading-tight">{r.label}</div>
              <div className="text-slate-500 text-[10px] mt-0.5 leading-tight">{r.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-slate-400 text-xs mb-1.5">Your name</label>
        <input
          autoFocus
          type="text"
          maxLength={20}
          placeholder="e.g. Allen, Jose, Maria..."
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
          style={{ colorScheme: 'dark' }}
        />
      </div>

      <div className="mb-6">
        <label className="block text-slate-400 text-xs mb-2">Profile color</label>
        <div className="flex gap-2 flex-wrap">
          {PROFILE_COLORS.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className="w-8 h-8 rounded-xl transition-transform"
              style={{
                background: c,
                outline: color === c ? '3px solid white' : 'none',
                outlineOffset: '2px',
                transform: color === c ? 'scale(1.15)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!name.trim()}
          className="flex-1 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm disabled:opacity-40 transition-colors"
        >
          Create
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm transition-colors"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  )
}

// ─── Main ProfileSelect screen ────────────────────────────────────────────────

export default function ProfileSelect({ onProfileSelected }) {
  const [profiles, setProfiles] = useState(() => getAllProfiles())
  const [creating, setCreating] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const refresh = () => setProfiles(getAllProfiles())

  const profileList = Object.values(profiles).sort((a, b) => b.totalXP - a.totalXP)

  const handleSelect = id => {
    setActiveProfile(id)
    onProfileSelected(id)
  }

  const handleDelete = id => {
    if (!window.confirm('Delete this profile? All progress will be lost.')) return
    deleteProfile(id)
    refresh()
  }

  const handleEdit = id => {
    setCreating(false)
    setEditingId(id)
  }

  const handleEditSaved = () => {
    refresh()
    setEditingId(null)
  }

  const handleCreated = profile => {
    refresh()
    setCreating(false)
    onProfileSelected(profile.id)
  }

  const rivalId = profileList.find(p => p.rivalId)?.rivalId || null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12" style={{ background: 'rgb(7 15 28)' }}>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">InnoFac Acumen</p>
        <h1 className="text-white text-3xl font-black mb-2">Who's playing?</h1>
        <p className="text-slate-500 text-sm">Each profile has its own level, XP, and progress.</p>
      </motion.div>

      <div className="w-full max-w-md space-y-3">
        <AnimatePresence mode="popLayout">
          {profileList.map(p => (
            <motion.div key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -20 }}>
              {editingId === p.id ? (
                <EditProfileForm
                  profile={p}
                  onSaved={handleEditSaved}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <ProfileCard
                  profile={p}
                  onSelect={handleSelect}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  rivalId={rivalId}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {creating ? (
          <CreateProfileForm onCreated={handleCreated} onCancel={() => setCreating(false)} />
        ) : (
          !editingId && (
            <motion.button
              layout
              onClick={() => setCreating(true)}
              className="w-full py-4 rounded-2xl border border-dashed border-white/15 text-slate-500 hover:text-white hover:border-white/30 text-sm font-semibold transition-all"
            >
              + New Profile
            </motion.button>
          )
        )}

        {profileList.length === 0 && !creating && (
          <p className="text-center text-slate-600 text-sm pt-2">No profiles yet. Create one to start.</p>
        )}
      </div>
    </div>
  )
}
