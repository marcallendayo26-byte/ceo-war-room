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

export function createProfile(name, color) {
  const store = load()
  const id = `p_${Date.now()}`
  store.profiles[id] = buildNewProfile(id, name, color)
  store.activeProfileId = id
  save(store)
  return store.profiles[id]
}

export function saveProfile(profile) {
  const store = load()
  store.profiles[profile.id] = profile
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

// ─── Profile shape ─────────────────────────────────────────────────────────

export const PROFILE_COLORS = [
  '#0066cc', '#059669', '#7c3aed', '#db2777',
  '#ea580c', '#0891b2', '#dc2626', '#ca8a04',
]

export function buildNewProfile(id, name, color) {
  return {
    id,
    name,
    color,
    createdAt: Date.now(),
    totalXP: 0,
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
    sessionStats: { correct: 0, wrong: 0, xpEarned: 0 },
  }
}
