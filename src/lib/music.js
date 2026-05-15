/**
 * music.js — Background music via HTML5 Audio
 *
 * Place any MP3 at:  /public/music.mp3
 * It will loop automatically and fade in on first user interaction.
 *
 * No file present → silent (no errors).
 */

let _audio     = null
let _isPlaying = false
let _fadeTimer = null

function getAudio() {
  if (!_audio) {
    _audio = new Audio('/music.mp3')
    _audio.loop   = true
    _audio.volume = 0
    _audio.preload = 'auto'
  }
  return _audio
}

export function startMusic(targetVol = 0.35) {
  if (_isPlaying) return
  const audio = getAudio()

  audio.play().then(() => {
    _isPlaying = true
    fadeVolumeTo(audio, targetVol, 5000)  // 5 s fade-in
  }).catch(() => {
    // File missing or browser blocked — fail silently
  })
}

export function stopMusic() {
  if (!_audio || !_isPlaying) return
  clearInterval(_fadeTimer)
  fadeVolumeTo(_audio, 0, 2000, () => {
    _audio.pause()
    _audio.currentTime = 0
    _isPlaying = false
  })
}

export function isMusicPlaying() { return _isPlaying }

// ─── Smooth volume ramp ──────────────────────────────────────────────────────

function fadeVolumeTo(audio, target, durationMs, onDone) {
  clearInterval(_fadeTimer)
  const steps    = 40
  const interval = durationMs / steps
  const delta    = (target - audio.volume) / steps
  let   count    = 0

  _fadeTimer = setInterval(() => {
    count++
    audio.volume = Math.min(1, Math.max(0, audio.volume + delta))
    if (count >= steps) {
      clearInterval(_fadeTimer)
      audio.volume = target
      onDone?.()
    }
  }, interval)
}
