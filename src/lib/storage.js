const KEY = 'ceo_war_room_v1'

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveState(state) {
  try {
    // Persist only the durable fields, not transient UI state
    const { totalXP, streak, bestStreak, casesAnswered, correctAnswers, cooldownIds, health } = state
    localStorage.setItem(KEY, JSON.stringify({ totalXP, streak, bestStreak, casesAnswered, correctAnswers, cooldownIds, health }))
  } catch {
    // Storage quota exceeded or private browsing — silently fail
  }
}

export function clearState() {
  localStorage.removeItem(KEY)
}
