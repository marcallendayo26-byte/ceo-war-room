import { healthBarValue, healthBarColor } from '../lib/engine'
import { HEALTH_LABELS } from '../data/config'

export default function HealthMeters({ health }) {
  return (
    <div className="bg-navy-800 border border-white/8 rounded-2xl p-4">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Company Health</p>
      <div className="space-y-2.5">
        {Object.entries(HEALTH_LABELS).map(([key, label]) => {
          const displayVal = healthBarValue(key, health[key])
          const color = healthBarColor(displayVal)
          return (
            <div key={key}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-400 text-[10px]">{label}</span>
                <span className="text-[10px] font-bold" style={{ color }}>{displayVal}</span>
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
