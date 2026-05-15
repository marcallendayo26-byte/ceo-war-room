/**
 * music.js — Ambient background music via Web Audio API
 *
 * No external files. Pure synthesis. Cinematic war-room atmosphere.
 * Auto-starts on first user interaction. No UI controls needed.
 *
 * Design: A minor drone (A1 root, E2 fifth, C3 minor-third) with slow
 * LFO tremolo per layer, plate reverb tail, occasional wandering Am
 * pentatonic melody notes, and a barely-audible low-frequency pulse.
 */

let _ctx         = null
let _masterGain  = null
let _isPlaying   = false
let _nodes       = []
let _melodyTimer = null
let _pulseTimer  = null

function getCtx() {
  if (!_ctx) {
    try { _ctx = new (window.AudioContext || window.webkitAudioContext)() }
    catch { return null }
  }
  if (_ctx.state === 'suspended') _ctx.resume().catch(() => {})
  return _ctx
}

function buildReverb(c) {
  const dur    = 3.5
  const decay  = 2.6
  const rate   = c.sampleRate
  const length = Math.floor(rate * dur)
  const buf    = c.createBuffer(2, length, rate)
  for (let ch = 0; ch < 2; ch++) {
    const data = buf.getChannelData(ch)
    for (let i = 0; i < length; i++)
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay)
  }
  const conv  = c.createConvolver()
  conv.buffer = buf
  return conv
}

export function startMusic(vol = 0.22) {
  if (_isPlaying) return
  const c = getCtx()
  if (!c) return

  _masterGain = c.createGain()
  _masterGain.gain.setValueAtTime(0, c.currentTime)
  _masterGain.gain.linearRampToValueAtTime(vol, c.currentTime + 5)
  _masterGain.connect(c.destination)

  const reverb  = buildReverb(c)
  const dryGain = c.createGain()
  const wetGain = c.createGain()
  dryGain.gain.value = 0.45
  wetGain.gain.value = 0.55
  dryGain.connect(_masterGain)
  wetGain.connect(reverb)
  reverb.connect(_masterGain)

  // Am drone layers: A1, E2, A2, C3, E3, A3
  const droneSpec = [
    { freq: 55.00,  vol: 0.55, type: 'sawtooth', detune:  0, lfoHz: 0.07, lfoAmt: 0.07 },
    { freq: 55.00,  vol: 0.22, type: 'sawtooth', detune:  8, lfoHz: 0.11, lfoAmt: 0.05 },
    { freq: 82.41,  vol: 0.38, type: 'sawtooth', detune:  0, lfoHz: 0.05, lfoAmt: 0.05 },
    { freq: 110.00, vol: 0.24, type: 'sine',      detune:  0, lfoHz: 0.14, lfoAmt: 0.04 },
    { freq: 130.81, vol: 0.16, type: 'triangle',  detune: -4, lfoHz: 0.09, lfoAmt: 0.03 },
    { freq: 164.81, vol: 0.11, type: 'sine',      detune:  0, lfoHz: 0.18, lfoAmt: 0.03 },
    { freq: 220.00, vol: 0.07, type: 'triangle',  detune:  5, lfoHz: 0.23, lfoAmt: 0.025 },
  ]

  droneSpec.forEach(({ freq, vol: v, type, detune, lfoHz, lfoAmt }) => {
    const osc     = c.createOscillator()
    const gn      = c.createGain()
    const lfo     = c.createOscillator()
    const lfoGain = c.createGain()

    osc.type = type; osc.frequency.value = freq; osc.detune.value = detune
    gn.gain.value = v
    lfo.type = 'sine'; lfo.frequency.value = lfoHz
    lfoGain.gain.value = v * lfoAmt

    lfo.connect(lfoGain); lfoGain.connect(gn.gain)
    osc.connect(gn); gn.connect(dryGain); gn.connect(wetGain)
    lfo.start(); osc.start()
    _nodes.push(osc, gn, lfo, lfoGain)
  })

  _nodes.push(dryGain, wetGain, reverb)
  scheduleNextNote(c, wetGain)
  schedulePulse(c, dryGain)
  _isPlaying = true
}

export function stopMusic() {
  if (!_isPlaying) return
  clearTimeout(_melodyTimer); clearTimeout(_pulseTimer)
  _melodyTimer = null; _pulseTimer = null
  if (_masterGain) {
    const c = getCtx()
    if (c) {
      _masterGain.gain.cancelScheduledValues(c.currentTime)
      _masterGain.gain.linearRampToValueAtTime(0, c.currentTime + 2.2)
    }
  }
  setTimeout(() => {
    _nodes.forEach(n => { try { n.stop?.() } catch (_) {} try { n.disconnect() } catch (_) {} })
    _nodes = []; _isPlaying = false; _masterGain = null
  }, 2400)
}

export function isMusicPlaying() { return _isPlaying }

// Am pentatonic: A C D E G — two octaves
const MELODY_NOTES = [110, 130.81, 146.83, 164.81, 196.00, 220.00, 261.63, 293.66, 329.63, 392.00]

function scheduleNextNote(c, wet) {
  _melodyTimer = setTimeout(() => {
    if (!_isPlaying) return
    const freq    = MELODY_NOTES[Math.floor(Math.random() * MELODY_NOTES.length)]
    const osc     = c.createOscillator()
    const gn      = c.createGain()
    const t       = c.currentTime
    const sustain = 3.5 + Math.random() * 2.5
    osc.type = 'sine'; osc.frequency.value = freq
    gn.gain.setValueAtTime(0, t)
    gn.gain.linearRampToValueAtTime(0.20, t + 1.4)
    gn.gain.linearRampToValueAtTime(0, t + sustain)
    osc.connect(gn); gn.connect(wet)
    osc.start(t); osc.stop(t + sustain + 0.1)
    scheduleNextNote(c, wet)
  }, 14000 + Math.random() * 18000)
}

function schedulePulse(c, dry) {
  _pulseTimer = setTimeout(() => {
    if (!_isPlaying) return
    const t   = c.currentTime
    const dur = 0.22
    const buf = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    const src = c.createBufferSource(); src.buffer = buf
    const filter = c.createBiquadFilter()
    filter.type = 'lowpass'; filter.frequency.value = 72; filter.Q.value = 2.4
    const gn = c.createGain()
    gn.gain.setValueAtTime(0, t)
    gn.gain.linearRampToValueAtTime(0.28, t + 0.012)
    gn.gain.exponentialRampToValueAtTime(0.001, t + dur)
    src.connect(filter); filter.connect(gn); gn.connect(dry)
    src.start(t); src.stop(t + dur + 0.02)
    schedulePulse(c, dry)
  }, 3400 + Math.random() * 900)
}
