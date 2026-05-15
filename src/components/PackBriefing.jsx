import { motion } from 'framer-motion'

export default function PackBriefing({ pack, onBegin, onCancel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0  }}
      exit={{    opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-800 border border-white/8 rounded-2xl overflow-hidden"
      style={{ borderColor: `${pack.color}30` }}
    >
      {/* Accent bar */}
      <div style={{ height: 3, background: pack.color }} />

      <div className="px-6 py-6">
        {/* Pack identity */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${pack.color}20` }}
          >
            {pack.icon}
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: pack.color }}>
              Mission Briefing
            </p>
            <p className="text-white font-black text-lg leading-tight">{pack.title}</p>
          </div>
        </div>

        {/* Situation */}
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-white font-bold text-sm mb-1">{pack.intro.heading}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{pack.intro.body}</p>
          </div>

          {/* Stakes */}
          <div
            className="rounded-xl border px-4 py-3"
            style={{ borderColor: `${pack.color}25`, background: `${pack.color}08` }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: pack.color }}>
              What's at Stake
            </p>
            <p className="text-white text-sm font-medium">{pack.intro.stakes}</p>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 mb-6 space-y-1.5">
          {[
            `${pack.acts.length} connected decisions`,
            'Company health carries through every act',
            'Your outcome is determined by the full arc',
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="text-slate-600 flex-shrink-0">▸</span>
              {rule}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3.5 rounded-2xl font-bold text-sm border border-white/12 text-slate-400 hover:border-white/25 hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onBegin}
            className="flex-1 py-3.5 rounded-2xl font-bold text-sm text-white transition-all"
            style={{ background: pack.color }}
          >
            Begin Mission →
          </button>
        </div>
      </div>
    </motion.div>
  )
}
