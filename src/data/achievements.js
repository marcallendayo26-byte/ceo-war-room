import { getLevelInfo } from '../lib/engine'

// ─── Achievement shape ─────────────────────────────────────────────────────
// { id, title, desc, icon, check(profile), roles? }
// roles: array of role IDs that can earn this achievement.
// When omitted (universal achievements), all roles can earn it.

export const ACHIEVEMENTS = [
  // ── Universal ──────────────────────────────────────────────────────────────
  {
    id: 'first_blood',
    title: 'First Blood',
    desc: 'Answer your first case correctly.',
    icon: '🎯',
    check: p => p.correctAnswers >= 1,
  },
  {
    id: 'on_a_roll',
    title: 'On a Roll',
    desc: '5 correct answers in a row.',
    icon: '🔥',
    check: p => p.bestStreak >= 5,
  },
  {
    id: 'unstoppable',
    title: 'Unstoppable',
    desc: '10 correct answers in a row.',
    icon: '⚡',
    check: p => p.bestStreak >= 10,
  },
  {
    id: 'centurion',
    title: 'Centurion',
    desc: 'Answer 100 cases total.',
    icon: '💯',
    check: p => p.casesAnswered >= 100,
  },
  {
    id: 'category_explorer',
    title: 'Category Explorer',
    desc: 'Attempt at least one case in all categories for your role.',
    icon: '🗺️',
    check: p => Object.keys(p.categoryStats || {}).length >= 8,
  },
  {
    id: 'boardroom',
    title: 'Boardroom Voice',
    desc: 'Reach Level 5.',
    icon: '📊',
    check: p => getLevelInfo(p.totalXP).current.level >= 5,
  },
  {
    id: 'c_level',
    title: 'C-Level Mindset',
    desc: 'Reach Level 7.',
    icon: '👔',
    check: p => getLevelInfo(p.totalXP).current.level >= 7,
  },
  {
    id: 'top_percent',
    title: '0.1% Problem Solver',
    desc: 'Reach Level 10. The hardest grind in the game.',
    icon: '🏆',
    check: p => getLevelInfo(p.totalXP).current.level >= 10,
  },
  {
    id: 'daily_warrior',
    title: 'Daily Warrior',
    desc: 'Complete 7 daily challenges.',
    icon: '📅',
    check: p => (p.dailyChallengesCompleted || 0) >= 7,
  },
  {
    id: 'comeback_king',
    title: 'Comeback King',
    desc: 'Retry a wrong answer and get it right.',
    icon: '↩️',
    check: p => (p.retriesCorrect || 0) >= 1,
  },

  // ── CEO / Strategist ───────────────────────────────────────────────────────
  {
    id: 'finance_mind',
    title: 'Finance Mind',
    desc: '10 Finance cases answered correctly.',
    icon: '💰',
    roles: ['ceo'],
    check: p => (p.categoryStats?.Finance?.correct || 0) >= 10,
  },
  {
    id: 'strategy_hawk',
    title: 'Strategy Hawk',
    desc: '10 Strategy cases answered correctly.',
    icon: '🦅',
    roles: ['ceo'],
    check: p => (p.categoryStats?.Strategy?.correct || 0) >= 10,
  },
  {
    id: 'crisis_surgeon',
    title: 'Crisis Surgeon',
    desc: '5 Crisis cases answered correctly.',
    icon: '🏥',
    roles: ['ceo'],
    check: p => (p.categoryStats?.Crisis?.correct || 0) >= 5,
  },
  {
    id: 'enterprise_ace',
    title: 'Enterprise Ace',
    desc: '5 Enterprise cases answered correctly.',
    icon: '🏢',
    roles: ['ceo'],
    check: p => (p.categoryStats?.Enterprise?.correct || 0) >= 5,
  },

  // ── Technology Lead ────────────────────────────────────────────────────────
  {
    id: 'delivery_expert',
    title: 'Delivery Expert',
    desc: '10 Project Delivery cases answered correctly.',
    icon: '🚀',
    roles: ['tech'],
    check: p => (p.categoryStats?.['Project Delivery']?.correct || 0) >= 10,
  },
  {
    id: 'risk_guardian',
    title: 'Risk Guardian',
    desc: '5 Risk & Quality cases answered correctly.',
    icon: '🛡️',
    roles: ['tech'],
    check: p => (p.categoryStats?.['Risk & Quality']?.correct || 0) >= 5,
  },
  {
    id: 'client_anchor',
    title: 'Client Anchor',
    desc: '10 Client Management cases answered correctly.',
    icon: '⚓',
    roles: ['tech'],
    check: p => (p.categoryStats?.['Client Management']?.correct || 0) >= 10,
  },

  // ── Product Manager ────────────────────────────────────────────────────────
  {
    id: 'discovery_expert',
    title: 'Discovery Expert',
    desc: '10 Discovery & Research cases answered correctly.',
    icon: '🔬',
    roles: ['pm'],
    check: p => (p.categoryStats?.['Discovery & Research']?.correct || 0) >= 10,
  },
  {
    id: 'roadmap_master',
    title: 'Roadmap Master',
    desc: '10 Roadmap & Prioritization cases answered correctly.',
    icon: '🧭',
    roles: ['pm'],
    check: p => (p.categoryStats?.['Roadmap & Prioritization']?.correct || 0) >= 10,
  },
  {
    id: 'metrics_driven',
    title: 'Metrics Driven',
    desc: '10 Metrics & Analytics cases answered correctly.',
    icon: '📐',
    roles: ['pm'],
    check: p => (p.categoryStats?.['Metrics & Analytics']?.correct || 0) >= 10,
  },

  // ── Engineering Manager ────────────────────────────────────────────────────
  {
    id: 'incident_commander',
    title: 'Incident Commander',
    desc: '5 Incident Response cases answered correctly.',
    icon: '🚨',
    roles: ['em'],
    check: p => (p.categoryStats?.['Incident Response']?.correct || 0) >= 5,
  },
  {
    id: 'tech_debt_fighter',
    title: 'Tech Debt Fighter',
    desc: '10 Technical Debt cases answered correctly.',
    icon: '🧱',
    roles: ['em'],
    check: p => (p.categoryStats?.['Technical Debt']?.correct || 0) >= 10,
  },
  {
    id: 'talent_builder',
    title: 'Talent Builder',
    desc: '10 Hiring & Staffing cases answered correctly.',
    icon: '🌱',
    roles: ['em'],
    check: p => (p.categoryStats?.['Hiring & Staffing']?.correct || 0) >= 10,
  },

  // ── Customer Success Manager ───────────────────────────────────────────────
  {
    id: 'renewal_strategist',
    title: 'Renewal Strategist',
    desc: '10 Renewals cases answered correctly.',
    icon: '🔄',
    roles: ['csm'],
    check: p => (p.categoryStats?.Renewals?.correct || 0) >= 10,
  },
  {
    id: 'churn_defender',
    title: 'Churn Defender',
    desc: '5 Churn Prevention cases answered correctly.',
    icon: '🧲',
    roles: ['csm'],
    check: p => (p.categoryStats?.['Churn Prevention']?.correct || 0) >= 5,
  },
  {
    id: 'escalation_handler',
    title: 'Escalation Handler',
    desc: '5 Escalation Management cases answered correctly.',
    icon: '🧯',
    roles: ['csm'],
    check: p => (p.categoryStats?.['Escalation Management']?.correct || 0) >= 5,
  },

  // ── Sales Lead ─────────────────────────────────────────────────────────────
  {
    id: 'pipeline_surgeon',
    title: 'Pipeline Surgeon',
    desc: '10 Pipeline Management cases answered correctly.',
    icon: '🔧',
    roles: ['sales'],
    check: p => (p.categoryStats?.['Pipeline Management']?.correct || 0) >= 10,
  },
  {
    id: 'discovery_sharpener',
    title: 'Discovery Sharpener',
    desc: '10 Discovery cases answered correctly.',
    icon: '💡',
    roles: ['sales'],
    check: p => (p.categoryStats?.Discovery?.correct || 0) >= 10,
  },
  {
    id: 'deal_closer',
    title: 'Deal Closer',
    desc: '10 Deal Execution cases answered correctly.',
    icon: '🤝',
    roles: ['sales'],
    check: p => (p.categoryStats?.['Deal Execution']?.correct || 0) >= 10,
  },

  // ── BD Director ────────────────────────────────────────────────────────────
  {
    id: 'partnership_architect',
    title: 'Partnership Architect',
    desc: '10 Partnership Strategy cases answered correctly.',
    icon: '🏗️',
    roles: ['bd'],
    check: p => (p.categoryStats?.['Partnership Strategy']?.correct || 0) >= 10,
  },
  {
    id: 'channel_builder',
    title: 'Channel Builder',
    desc: '10 Channel Management cases answered correctly.',
    icon: '📡',
    roles: ['bd'],
    check: p => (p.categoryStats?.['Channel Management']?.correct || 0) >= 10,
  },
  {
    id: 'market_expander',
    title: 'Market Expander',
    desc: '5 Market Expansion cases answered correctly.',
    icon: '🌍',
    roles: ['bd'],
    check: p => (p.categoryStats?.['Market Expansion']?.correct || 0) >= 5,
  },

  // ── CFO / Finance Lead ─────────────────────────────────────────────────────
  {
    id: 'unit_economist',
    title: 'Unit Economist',
    desc: '10 Unit Economics cases answered correctly.',
    icon: '📐',
    roles: ['cfo'],
    check: p => (p.categoryStats?.['Unit Economics']?.correct || 0) >= 10,
  },
  {
    id: 'cash_guardian',
    title: 'Cash Guardian',
    desc: '5 Cash & Runway cases answered correctly.',
    icon: '🏦',
    roles: ['cfo'],
    check: p => (p.categoryStats?.['Cash & Runway']?.correct || 0) >= 5,
  },
  {
    id: 'deal_architect',
    title: 'Deal Architect',
    desc: '5 M&A cases answered correctly.',
    icon: '🤝',
    roles: ['cfo'],
    check: p => (p.categoryStats?.['M&A']?.correct || 0) >= 5,
  },
  {
    id: 'pricing_strategist',
    title: 'Pricing Strategist',
    desc: '10 Pricing Strategy cases answered correctly.',
    icon: '💎',
    roles: ['cfo'],
    check: p => (p.categoryStats?.['Pricing Strategy']?.correct || 0) >= 10,
  },

  // ── Prestige ───────────────────────────────────────────────────────────────
  {
    id: 'prestige_1',
    title: 'Prestige I',
    desc: 'Reach Level 10 and reset. The cycle begins again.',
    icon: '✦',
    check: p => (p.prestige || 0) >= 1,
  },
  {
    id: 'prestige_2',
    title: 'Prestige II',
    desc: 'Two full cycles. Most never complete one.',
    icon: '✦✦',
    check: p => (p.prestige || 0) >= 2,
  },
  {
    id: 'prestige_3',
    title: 'Prestige III',
    desc: 'Three cycles. There is nothing left to prove.',
    icon: '✦✦✦',
    check: p => (p.prestige || 0) >= 3,
  },
]

// Returns achievements visible to the given role (universal + role-specific)
export function getAchievementsForRole(role) {
  return ACHIEVEMENTS.filter(a => !a.roles || a.roles.includes(role))
}

export function checkNewAchievements(profile) {
  const role = profile.role || 'ceo'
  const relevant = getAchievementsForRole(role)
  const newlyUnlocked = []
  for (const a of relevant) {
    if (!profile.achievements[a.id] && a.check(profile)) {
      newlyUnlocked.push(a)
    }
  }
  return newlyUnlocked
}
