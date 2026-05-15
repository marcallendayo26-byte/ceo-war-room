// Programmatic sound effects via Web Audio API.
// No external files — works on file:// protocol with no network.
//
// Design philosophy: feels like a polished decision tool, not a game show.
// Everything is short, purposeful, and non-annoying on repetition.

let _ctx = null
let _muted = localStorage.getItem('sfx_muted') === '1'

function ctx() {
  if (!_ctx) {
    try {
      _ctx = new (window.AudioContext || window.webkitAudioContext)()
    } catch {
      return null
    }
  }
  // Browsers auto-suspend AudioContext; resume on first use
  if (_ctx.state === 'suspended') _ctx.resume().catch(() => {})
  return _ctx
}

export function isMuted()    { return _muted }
export function toggleMuted() {
  _muted = !_muted
  localStorage.setItem('sfx_muted', _muted ? '1' : '0')
  return _muted
}

// ─── Primitive ─────────────────────────────────────────────────────────────

function tone({ freq = 440, type = 'sine', vol = 0.1, attack = 0.01, decay = 0.25, delay = 0, endFreq = null }) {
  const c = ctx()
  if (!c || _muted) return

  const osc  = c.createOscillator()
  const gain = c.createGain()
  osc.connect(gain)
  gain.connect(c.destination)

  osc.type = type
  const t = c.currentTime + delay
  osc.frequency.setValueAtTime(freq, t)
  if (endFreq !== null) {
    osc.frequency.linearRampToValueAtTime(endFreq, t + decay * 0.8)
  }

  gain.gain.setValueAtTime(0, t)
  gain.gain.linearRampToValueAtTime(vol, t + attack)
  gain.gain.exponentialRampToValueAtTime(0.001, t + decay)
  osc.start(t)
  osc.stop(t + decay + 0.02)
}

// ─── Sounds ────────────────────────────────────────────────────────────────

// Brief click when selecting an option — confirms the tap
export function playSelect() {
  tone({ freq: 680, vol: 0.055, attack: 0.004, decay: 0.038 })
}

// Two ascending tones — C5 → G5
export function playCorrect() {
  tone({ freq: 523.25, vol: 0.10, attack: 0.01, decay: 0.28 })
  tone({ freq: 783.99, vol: 0.08, attack: 0.01, decay: 0.28, delay: 0.10 })
}

// Quick sparkle arpeggio — G5 B5 D6 — plays after correct
export function playXP() {
  [783.99, 987.77, 1174.66].forEach((freq, i) =>
    tone({ freq, vol: 0.065, attack: 0.005, decay: 0.16, delay: i * 0.052 })
  )
}

// Low descending thud — wrong answer
export function playWrong() {
  tone({ freq: 220, type: 'triangle', vol: 0.13, attack: 0.01, decay: 0.32, endFreq: 160 })
}

// Ascending run — length scales with streak count
export function playStreak(n) {
  const runMap = {
    3:  [523.25, 659.25],
    5:  [523.25, 659.25, 783.99],
    10: [523.25, 659.25, 783.99, 1046.5],
  }
  const notes = runMap[n] || runMap[3]
  notes.forEach((freq, i) =>
    tone({ freq, vol: 0.095, attack: 0.01, decay: 0.28, delay: i * 0.09 })
  )
}

// Subtle card-deal sound — filtered noise burst, like a brief being placed
export function playDeal() {
  const c = ctx()
  if (!c || _muted) return

  const sampleRate = c.sampleRate
  const dur  = 0.07
  const buf  = c.createBuffer(1, Math.floor(sampleRate * dur), sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1

  const src    = c.createBufferSource()
  src.buffer   = buf
  const filter = c.createBiquadFilter()
  filter.type  = 'bandpass'
  filter.frequency.value = 3000
  filter.Q.value = 0.8

  const gain = c.createGain()
  gain.gain.setValueAtTime(0.09, c.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur)

  src.connect(filter)
  filter.connect(gain)
  gain.connect(c.destination)
  src.start(c.currentTime)
  src.stop(c.currentTime + dur + 0.01)
}

// Triumphant ascending arpeggio — C4 E4 G4 C5
export function playLevelUp() {
  [261.63, 329.63, 392.00, 523.25].forEach((freq, i) =>
    tone({ freq, vol: 0.11, attack: 0.02, decay: 0.5, delay: i * 0.10 })
  )
}

// Warm double chime — achievement unlocked
export function playAchievement() {
  tone({ freq: 659.25, vol: 0.09, attack: 0.01, decay: 0.40 })
  tone({ freq: 880.00, vol: 0.075, attack: 0.01, decay: 0.40, delay: 0.12 })
}
