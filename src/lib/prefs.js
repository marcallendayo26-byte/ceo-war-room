/**
 * prefs.js — lightweight user preferences (not profile-specific)
 * Stored separately from profile data so they persist across profile switches.
 */

const KEY = 'innofac_acumen_prefs_v1'

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} }
}

function save(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)) } catch {}
}

// ─── Font size ─────────────────────────────────────────────────────────────

export const FONT_SIZES = [
  { id: 'normal',  label: 'Normal',   scale: '100%' },
  { id: 'large',   label: 'Large',    scale: '115%' },
  { id: 'xlarge',  label: 'X-Large',  scale: '130%' },
]

export function getFontSize() {
  return load().fontSize || 'normal'
}

export function setFontSize(id) {
  save({ ...load(), fontSize: id })
  applyFontSize(id)
}

/** Call once on app mount to restore the saved preference. */
export function applyFontSize(id) {
  const entry = FONT_SIZES.find(s => s.id === id) || FONT_SIZES[0]
  document.documentElement.style.fontSize = entry.scale
}
