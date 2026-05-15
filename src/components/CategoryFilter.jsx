import { useRef } from 'react'
import { X } from 'lucide-react'
import { CATEGORIES_BY_ROLE, CATEGORY_COLORS } from '../data/config'

export default function CategoryFilter({ role = 'ceo', activeCategory, onSelect }) {
  const scrollRef = useRef(null)
  const categories = CATEGORIES_BY_ROLE[role] || []

  return (
    <div className="relative">
      {/* Fade masks for scroll hint */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[rgb(7,15,28)] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[rgb(7,15,28)] to-transparent pointer-events-none z-10" />

      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto scrollbar-none px-2 py-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* All pill */}
        <button
          onClick={() => onSelect(null)}
          className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${
            !activeCategory
              ? 'bg-white/12 border-white/25 text-white'
              : 'border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/15'
          }`}
        >
          All
        </button>

        {categories.map(cat => {
          const color    = CATEGORY_COLORS[cat] || '#64748b'
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => onSelect(isActive ? null : cat)}
              className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all"
              style={{
                borderColor: isActive ? `${color}60` : 'rgba(255,255,255,0.08)',
                background:  isActive ? `${color}18` : 'transparent',
                color:       isActive ? color        : '#64748b',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = color }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#64748b' }}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
