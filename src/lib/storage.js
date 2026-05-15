const KEY = 'ceo_war_room_v2'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { profiles: {}, activeProfileId: null }
  } catch {
    return { profiles: {}, activeProfileId: null }
  }
}

function save(store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
  } catch {}
}

// ─── Profile CRUD ──────────────────────────────────────────────────────────

export function getAllProfiles() {
  return load().profiles
}

export function getActiveProfileId() {
  return load().activeProfileId
}

export function setActiveProfile(id) {
  const store = load()
  store.activeProfileId = id
  save(store)
}

export function createProfile(name, color, role = 'ceo') {
  const store = load()
  const id = `p_${Date.now()}`
  store.profiles[id] = buildNewProfile(id, name, color, role)
  store.activeProfileId = id
  save(store)
  return store.profiles[id]
}

export function saveProfile(profile) {
  const store = load()
  store.profiles[profile.id] = profile
  save(store)
}

export function updateProfile(id, updates) {
  const store = load()
  if (!store.profiles[id]) return
  store.profiles[id] = { ...store.profiles[id], ...updates }
  save(store)
}

export function deleteProfile(id) {
  const store = load()
  delete store.profiles[id]
  if (store.activeProfileId === id) {
    const remaining = Object.keys(store.profiles)
    store.activeProfileId = remaining.length > 0 ? remaining[0] : null
  }
  save(store)
}

export function getProfile(id) {
  return load().profiles[id] || null
}

export function clearAll() {
  localStorage.removeItem(KEY)
}

// ─── Backup: export / import ───────────────────────────────────────────────

export function exportData() {
  try {
    const json = JSON.stringify(load(), null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    const date = new Date().toISOString().split('T')[0]
    a.download = `innofac-acumen-backup-${date}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    return true
  } catch {
    return false
  }
}

export function importData(jsonString) {
  try {
    const parsed = JSON.parse(jsonString)
    if (!parsed.profiles || typeof parsed.profiles !== 'object') {
      throw new Error('Invalid backup: missing profiles object')
    }
    save(parsed)
    return true
  } catch {
    return false
  }
}

// ─── Profile shape ─────────────────────────────────────────────────────────

export const PROFILE_COLORS = [
  '#0066cc', '#059669', '#7c3aed', '#db2777',
  '#ea580c', '#0891b2', '#dc2626', '#ca8a04',
]

export function buildNewProfile(id, name, color, role = 'ceo') {
  return {
    id,
    name,
    color,
    role,
    createdAt: Date.now(),
    totalXP: 0,
    prestige: 0,
    streak: 0,
    bestStreak: 0,
    casesAnswered: 0,
    correctAnswers: 0,
    retriesCorrect: 0,
    dailyChallengesCompleted: 0,
    cooldownIds: [],
    health: null, // set from HEALTH_DEFAULTS in engine
    achievements: {},       // { [achievementId]: timestamp }
    categoryStats: {},      // { [category]: { correct, total } }
    dailyChallenge: null,   // { date, caseId, completed, correct }
    rivalId: null,
    caseHistory: [],        // last 200 entries, oldest first
    sessionStats: { correct: 0, wrong: 0, xpEarned: 0 },
    reviewQueue: [],        // case IDs that need re-drilling (spaced repetition)
    packCompletions: {},    // { [packId]: { count, bestCorrect, bestTotal, lastPlayedAt } }
  }
}
