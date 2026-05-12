export const LEVELS = [
  { level: 1, title: 'Business Analyst',          xpRequired: 0 },
  { level: 2, title: 'Associate Consultant',       xpRequired: 150 },
  { level: 3, title: 'Engagement Manager',         xpRequired: 400 },
  { level: 4, title: 'Strategy Lead',              xpRequired: 800 },
  { level: 5, title: 'VP of Business',             xpRequired: 1500 },
  { level: 6, title: 'COO Mindset',                xpRequired: 2800 },
  { level: 7, title: 'C-Level Operator',           xpRequired: 5000 },
  { level: 8, title: 'Turnaround Specialist',      xpRequired: 9000 },
  { level: 9, title: 'Partner-Level Strategist',   xpRequired: 16000 },
  { level: 10, title: '0.1% Problem Solver',       xpRequired: 28000 },
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

// Cooldown: cases in the last N plays have near-zero probability
export const COOLDOWN_SIZE = 15

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
  Strategy:    '#0066cc',
  Finance:     '#059669',
  Sales:       '#7c3aed',
  Product:     '#db2777',
  Operations:  '#ea580c',
  Leadership:  '#0891b2',
  Crisis:      '#dc2626',
  Enterprise:  '#ca8a04',
}
