import { CATEGORY_COLORS, CATEGORIES_BY_ROLE } from '../data/config'

export default function CategoryStats({ categoryStats, role = 'ceo' }) {
  const categories = CATEGORIES_BY_ROLE[role] || CATEGORIES_BY_ROLE.ceo

  return (
    <div className="bg-navy-800 border border-white/8 rounded-2xl p-4">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Category Accuracy</p>
      <div className="space-y-2">
        {categories.map(cat => {
          const stats = categoryStats?.[cat]
          const total = stats?.total || 0
          const correct = stats?.correct || 0
          const pct = total > 0 ? Math.round((correct / total) * 100) : null
          const color = CATEGORY_COLORS[cat]

          return (
            <div key={cat}>
              <div className="flex justify-between mb-0.5">
                <span className="text-[10px] text-slate-500">{cat}</span>
                <span className="text-[10px] font-bold" style={{ color: pct === null ? '#334155' : pct >= 70 ? '#34d399' : pct >= 40 ? '#fbbf24' : '#f87171' }}>
                  {pct === null ? '—' : `${pct}%`}
                </span>
              </div>
              <div className="h-1 rounded-full bg-white/6 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: pct === null ? '0%' : `${pct}%`,
                    background: pct === null ? 'transparent' : color,
                    opacity: pct === null ? 0 : 0.85,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
