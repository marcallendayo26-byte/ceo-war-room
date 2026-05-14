export const LEVELS = [
  { level: 1,  title: 'Situational Thinker',    xpRequired: 0 },
  { level: 2,  title: 'Pattern Reader',          xpRequired: 150 },
  { level: 3,  title: 'Trade-off Navigator',     xpRequired: 400 },
  { level: 4,  title: 'Leverage Finder',         xpRequired: 800 },
  { level: 5,  title: 'Systems Operator',        xpRequired: 1500 },
  { level: 6,  title: 'Strategic Executor',      xpRequired: 2800 },
  { level: 7,  title: 'Principal Thinker',       xpRequired: 5000 },
  { level: 8,  title: 'Crisis Commander',        xpRequired: 9000 },
  { level: 9,  title: 'Board-Level Strategist',  xpRequired: 16000 },
  { level: 10, title: '0.1% Problem Solver',     xpRequired: 28000 },
]

// XP rewards per difficulty, multiplied at higher levels
export const XP_CORRECT = { 1: 15, 2: 25, 3: 40 }
export const XP_WRONG   = { 1: -5, 2: -10, 3: -15 }

// Streak bonuses: trigger on N consecutive correct answers
export const STREAK_BONUS = [
  { streak: 3,  bonus: 10 },
  { streak: 5,  bonus: 20 },
  { streak: 10, bonus: 50 },
]

// Cooldown: store the last N answered case IDs in the profile.
// pickNextCase uses a dynamic window (60% of the active pool) drawn from
// this list, so this value just needs to be >= the largest pool size.
export const COOLDOWN_SIZE = 160

// Weight for cooldown cases (vs 1.0 for fresh cases)
export const COOLDOWN_WEIGHT = 0.04

// At higher levels, prefer harder cases
// level ≥ 5: difficulty-3 cases get 2x weight; level ≥ 8: 3x weight
export const DIFFICULTY_BOOST = [
  { minLevel: 5, difficulty: 3, multiplier: 2 },
  { minLevel: 8, difficulty: 2, multiplier: 1.5 },
  { minLevel: 8, difficulty: 3, multiplier: 3 },
]

export const HEALTH_DEFAULTS = {
  cash: 60,
  growth: 50,
  profitability: 50,
  customerTrust: 60,
  teamMorale: 70,
  executionRisk: 40,   // lower = better (risk is lower)
  strategicPosition: 50,
}

export const HEALTH_LABELS = {
  cash: 'Cash',
  growth: 'Growth',
  profitability: 'Profitability',
  customerTrust: 'Client Trust',
  teamMorale: 'Team Morale',
  executionRisk: 'Exec. Risk',
  strategicPosition: 'Strategic Pos.',
}

// executionRisk is inverted: lower = better. Display as (100 - value) for "safety" visual.
export const INVERTED_METRICS = ['executionRisk']

export const CATEGORY_COLORS = {
  // CEO role
  Strategy:           '#0066cc',
  Finance:            '#059669',
  Sales:              '#7c3aed',
  Product:            '#db2777',
  Operations:         '#ea580c',
  Leadership:         '#0891b2',
  Crisis:             '#dc2626',
  Enterprise:         '#ca8a04',
  Marketing:          '#0d9488',
  Ethics:             '#6366f1',
  // CFO role
  'Unit Economics':           '#059669',
  'Cash & Runway':            '#0066cc',
  'Financial Planning':       '#7c3aed',
  'Pricing Strategy':         '#db2777',
  'Capital Allocation':       '#ea580c',
  'Fundraising & Investors':  '#0891b2',
  'Cost Structure':           '#ca8a04',
  'M&A':                      '#dc2626',
  // Tech Lead role
  'Project Delivery': '#0066cc',
  'Client Management':'#059669',
  'Technical Decisions': '#7c3aed',
  Implementation:     '#db2777',
  Hypercare:          '#ea580c',
  AMS:                '#0891b2',
  'Risk & Quality':   '#dc2626',
  'Team & Resources': '#ca8a04',
  // Product Manager role
  'Roadmap & Prioritization': '#2563eb',
  'Discovery & Research':     '#0891b2',
  'Metrics & Analytics':      '#7c3aed',
  'Stakeholder Management':   '#db2777',
  'Go-to-Market':             '#059669',
  'Feature Decisions':        '#ea580c',
  'Team & Process':           '#ca8a04',
  'Growth & Monetization':    '#dc2626',
  'Influencing Without Authority': '#6366f1',
  // Engineering Manager role
  'Technical Debt':           '#2563eb',
  'Architecture Decisions':   '#059669',
  'Hiring & Staffing':        '#7c3aed',
  'IC Management':            '#db2777',
  'Sprint & Delivery':        '#0891b2',
  'Incident Response':        '#ea580c',
  'Cross-functional':         '#ca8a04',
  'Team Culture':             '#dc2626',
  'Negotiating Up & Across':  '#0066cc',
  // Customer Success Manager role
  'Onboarding':               '#2563eb',
  'Product Adoption':         '#059669',
  'Churn Prevention':         '#7c3aed',
  'Escalation Management':    '#db2777',
  'QBR & Executive Engagement': '#0891b2',
  'Renewals':                 '#ea580c',
  'Expansion Revenue':        '#ca8a04',
  'CS Operations':            '#dc2626',
  // Sales Lead role
  'Pipeline Management':      '#2563eb',
  'Discovery':                '#059669',
  'Negotiation':              '#7c3aed',
  'Objection Handling':       '#db2777',
  'Account Strategy':         '#0891b2',
  'Competitive Selling':      '#ea580c',
  'Quota & Forecasting':      '#ca8a04',
  'Deal Execution':           '#dc2626',
  // BD Director role
  'Partnership Strategy':     '#2563eb',
  'Deal Structuring':         '#059669',
  'Channel Management':       '#7c3aed',
  'Alliance & Co-Sell':       '#db2777',
  'Market Expansion':         '#0891b2',
  'Ecosystem & Marketplace':  '#ea580c',
  'Partner Relations':        '#ca8a04',
  'Corporate Development':    '#dc2626',
  // CMO role
  'Brand & Positioning':          '#db2777',
  'Demand Generation':            '#2563eb',
  'Content & SEO':                '#059669',
  'Marketing-Sales Alignment':    '#7c3aed',
  'Analytics & Attribution':      '#0891b2',
  'PR & Communications':          '#ea580c',
  'Campaign Strategy':            '#ca8a04',
  'Product Marketing':            '#dc2626',
  // CHRO role
  'Talent Acquisition':           '#2563eb',
  'Performance Management':       '#059669',
  'Compensation & Benefits':      '#7c3aed',
  'Learning & Development':       '#db2777',
  'Culture & Engagement':         '#0891b2',
  'HR Operations':                '#ea580c',
  'Organizational Design':        '#ca8a04',
  'Employee Relations':           '#dc2626',
  // Enterprise pack — new categories
  'Contracting & Legal Risk':         '#6366f1',
  'Board & Governance':               '#8b5cf6',
  'Data Migration':                   '#06b6d4',
  'Adoption & Change Management':     '#10b981',
  'Security & Compliance':            '#ef4444',
  'Product vs Implementation':        '#f97316',
  'AI & Emerging Tech':               '#a855f7',
  'Commercial Costing':               '#14b8a6',
  'Strategic Partner & Equity':       '#f59e0b',
  'AMS & Support Operations':         '#3b82f6',
  'Engineering Org Design':           '#22c55e',
  // Innovation layer
  'Innovation Strategy':              '#7c3aed',
  'Delivery Innovation':              '#0891b2',
  'Product Innovation':               '#db2777',
  'AMS Innovation':                   '#059669',
  'Commercial Innovation':            '#ca8a04',
  'Ecosystem Innovation':             '#6366f1',
}

// ─── Role → category mapping ───────────────────────────────────────────────
// Single source of truth used by CategoryStats, HistoryPanel, and validation.

export const CATEGORIES_BY_ROLE = {
  ceo:   ['Strategy', 'Finance', 'Sales', 'Product', 'Operations', 'Leadership', 'Crisis', 'Enterprise', 'Marketing', 'Ethics', 'Contracting & Legal Risk', 'Board & Governance', 'Innovation Strategy'],
  cfo:   ['Unit Economics', 'Cash & Runway', 'Financial Planning', 'Pricing Strategy', 'Capital Allocation', 'Fundraising & Investors', 'Cost Structure', 'M&A', 'Commercial Costing', 'Commercial Innovation'],
  tech:  ['Project Delivery', 'Client Management', 'Technical Decisions', 'Implementation', 'Hypercare', 'AMS', 'Risk & Quality', 'Team & Resources', 'Data Migration', 'Adoption & Change Management', 'Security & Compliance', 'Delivery Innovation'],
  pm:    ['Roadmap & Prioritization', 'Discovery & Research', 'Metrics & Analytics', 'Stakeholder Management', 'Go-to-Market', 'Feature Decisions', 'Team & Process', 'Growth & Monetization', 'Influencing Without Authority', 'Product vs Implementation', 'AI & Emerging Tech', 'Product Innovation'],
  em:    ['Technical Debt', 'Architecture Decisions', 'Hiring & Staffing', 'IC Management', 'Sprint & Delivery', 'Incident Response', 'Cross-functional', 'Team Culture', 'Negotiating Up & Across', 'Engineering Org Design'],
  csm:   ['Onboarding', 'Product Adoption', 'Churn Prevention', 'Escalation Management', 'QBR & Executive Engagement', 'Renewals', 'Expansion Revenue', 'CS Operations', 'AMS & Support Operations', 'AMS Innovation'],
  sales: ['Pipeline Management', 'Discovery', 'Negotiation', 'Objection Handling', 'Account Strategy', 'Competitive Selling', 'Quota & Forecasting', 'Deal Execution'],
  bd:    ['Partnership Strategy', 'Deal Structuring', 'Channel Management', 'Alliance & Co-Sell', 'Market Expansion', 'Ecosystem & Marketplace', 'Partner Relations', 'Corporate Development', 'Strategic Partner & Equity', 'Ecosystem Innovation'],
  cmo:   ['Brand & Positioning', 'Demand Generation', 'Content & SEO', 'Marketing-Sales Alignment', 'Analytics & Attribution', 'PR & Communications', 'Campaign Strategy', 'Product Marketing'],
  chro:  ['Talent Acquisition', 'Performance Management', 'Compensation & Benefits', 'Learning & Development', 'Culture & Engagement', 'HR Operations', 'Organizational Design', 'Employee Relations'],
}

export const ROLES = [
  {
    id: 'ceo',
    label: 'CEO / Strategist',
    description: 'Strategy, finance, sales, product, and organizational leadership.',
    icon: '🏛️',
  },
  {
    id: 'tech',
    label: 'Technology Lead',
    description: 'Project delivery, client management, implementation, hypercare, and AMS.',
    icon: '⚙️',
  },
  {
    id: 'pm',
    label: 'Product Manager',
    description: 'Roadmap, discovery, metrics, stakeholder management, and go-to-market.',
    icon: '🧭',
  },
  {
    id: 'em',
    label: 'Engineering Manager',
    description: 'Technical debt, hiring, IC management, sprint delivery, incidents, and team culture.',
    icon: '🛠️',
  },
  {
    id: 'csm',
    label: 'Customer Success Manager',
    description: 'Onboarding, adoption, churn prevention, escalations, QBRs, renewals, and expansion.',
    icon: '🤝',
  },
  {
    id: 'sales',
    label: 'Sales Lead (AE)',
    description: 'Pipeline management, discovery, negotiation, objection handling, and deal execution.',
    icon: '🎯',
  },
  {
    id: 'bd',
    label: 'BD Director',
    description: 'Partnerships, alliances, channel strategy, ecosystem development, and market expansion.',
    icon: '🌐',
  },
  {
    id: 'cfo',
    label: 'CFO / Finance Lead',
    description: 'Unit economics, cash & runway, pricing strategy, capital allocation, and M&A.',
    icon: '💰',
  },
  {
    id: 'cmo',
    label: 'CMO / Marketing Lead',
    description: 'Brand strategy, demand generation, content & SEO, analytics, PR, and product marketing.',
    icon: '📣',
  },
  {
    id: 'chro',
    label: 'CHRO / People Lead',
    description: 'Talent acquisition, performance management, compensation, culture, and org design.',
    icon: '👥',
  },
]
