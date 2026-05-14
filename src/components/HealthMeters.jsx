import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { healthBarValue, healthBarColor } from '../lib/engine'
import { HEALTH_LABELS } from '../data/config'

export default function HealthMeters({ health, healthDelta = null }) {
  const [pulseKeys, setPulseKeys] = useState(new Set())

  // When a new healthDelta arrives (after an answer), pulse the affected metrics
  useEffect(() => {
    if (!healthDelta) return
    const changed = Object.entries(healthDelta)
      .filter(([, v]) => v !== 0)
      .map(([k]) => k)
    if (changed.length === 0) return

    setPulseKeys(new Set(changed))
    const t = setTimeout(() => setPulseKeys(new Set()), 2800)
    return () => clearTimeout(t)
  }, [healthDelta])

  return (
    <div className="bg-navy-800 border border-white/8 rounded-2xl p-4">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Company Health</p>
      <div className="space-y-2.5">
        {Object.entries(HEALTH_LABELS).map(([key, label]) => {
          const displayVal = healthBarValue(key, health[key])
          const color = healthBarColor(displayVal)
          const delta = healthDelta?.[key]
          const isPulsing = pulseKeys.has(key)

          return (
            <div
              key={key}
              className={`rounded-lg -mx-1.5 px-1.5 py-0.5 transition-colors duration-300 ${isPulsing ? 'bg-white/5' : ''}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-400 text-[10px]">{label}</span>
                <div className="flex items-center gap-1.5">
                  <AnimatePresence>
                    {isPulsing && delta !== undefined && delta !== 0 && (
                      <motion.span
                        key={`delta-${key}`}
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.2 }}
                        className={`text-[10px] font-black ${delta > 0 ? 'text-emerald-400' : 'text-red-400'}`}
                      >
                        {delta > 0 ? '+' : ''}{delta}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span className="text-[10px] font-bold tabular-nums" style={{ color }}>{displayVal}</span>
                </div>
              </div>
              <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${displayVal}%`, background: color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
