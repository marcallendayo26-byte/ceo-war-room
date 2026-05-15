import { motion } from 'framer-motion'
import { generateChronicle } from '../lib/engine'

export default function CompanyChronicle({ profile }) {
  const chronicle = generateChronicle(profile)
  if (!chronicle) return null

  const caseCount = (profile.caseHistory || []).length

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-800 border border-white/8 rounded-2xl p-4"
      style={{ borderColor: 'rgba(124,58,237,0.18)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#7c3aed' }}>
          Company Chronicle
        </p>
        <span className="text-[9px] text-slate-600">{caseCount} decisions</span>
      </div>

      {/* Decorative left rule */}
      <div className="flex gap-3">
        <div
          className="flex-shrink-0 w-0.5 rounded-full self-stretch"
          style={{ background: 'rgba(124,58,237,0.35)' }}
        />
        <p className="text-slate-400 text-[11px] leading-relaxed italic">
          {chronicle}
        </p>
      </div>
    </motion.div>
  )
}
