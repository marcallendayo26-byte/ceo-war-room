import { motion } from 'framer-motion'
import { ROLES } from '../data/config'

const PROOF_POINTS = [
  { value: '10', label: 'Leadership roles' },
  { value: '1,000+', label: 'Real-world scenarios' },
  { value: '10', label: 'Levels of mastery' },
]

// Short, scannable role descriptors for the welcome grid
const ROLE_BLURBS = {
  ceo:   'Strategy, finance, crisis, and org leadership',
  tech:  'Delivery, client management, and implementation',
  pm:    'Roadmap, discovery, metrics, and go-to-market',
  em:    'Hiring, technical debt, incidents, and culture',
  csm:   'Onboarding, renewals, escalations, and expansion',
  sales: 'Pipeline, negotiation, objections, and deal close',
  bd:    'Partnerships, channels, alliances, and ecosystem',
  cfo:   'Unit economics, cash, pricing, and capital decisions',
  cmo:   'Brand, demand gen, analytics, and product marketing',
  chro:  'Talent, culture, comp, org design, and HR ops',
}

export default function WelcomeScreen({ onGetStarted }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: 'rgb(7 15 28)' }}
    >
      <div className="w-full max-w-lg">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <p className="text-brand-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
            InnoFac Acumen
          </p>

          <h1 className="text-white font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
            Decisions under pressure<br />
            <span className="text-slate-400">expose what you actually know.</span>
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            Real business scenarios. No passive reading. Answer, get the framework behind the call, and track where your thinking breaks down.
          </p>
        </motion.div>

        {/* Proof points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          {PROOF_POINTS.map(({ value, label }, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-black text-xl">{value}</p>
              <p className="text-slate-500 text-[10px] mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="grid grid-cols-2 gap-2 mb-8"
        >
          {ROLES.map((r) => (
            <div
              key={r.id}
              className="bg-white/3 border border-white/8 rounded-xl px-3.5 py-3 flex items-start gap-3"
            >
              <span className="text-base flex-shrink-0 mt-0.5">{r.icon}</span>
              <div className="min-w-0">
                <p className="text-white text-xs font-bold leading-tight">{r.label}</p>
                <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">{ROLE_BLURBS[r.id]}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onGetStarted}
            className="px-10 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-2xl text-sm transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          >
            Choose your role →
          </button>
          <p className="text-slate-600 text-[10px] mt-3">Your progress is saved locally on this device.</p>
        </motion.div>
      </div>
    </div>
  )
}
