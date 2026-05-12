import { getLevelInfo } from '../lib/engine'

export const ACHIEVEMENTS = [
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
    id: 'finance_mind',
    title: 'Finance Mind',
    desc: '10 Finance cases answered correctly.',
    icon: '💰',
    check: p => (p.categoryStats?.Finance?.correct || 0) >= 10,
  },
  {
    id: 'strategy_hawk',
    title: 'Strategy Hawk',
    desc: '10 Strategy cases answered correctly.',
    icon: '🦅',
    check: p => (p.categoryStats?.Strategy?.correct || 0) >= 10,
  },
  {
    id: 'crisis_surgeon',
    title: 'Crisis Surgeon',
    desc: '5 Crisis cases answered correctly.',
    icon: '🏥',
    check: p => (p.categoryStats?.Crisis?.correct || 0) >= 5,
  },
  {
    id: 'enterprise_ace',
    title: 'Enterprise Ace',
    desc: '5 Enterprise cases answered correctly.',
    icon: '🏢',
    check: p => (p.categoryStats?.Enterprise?.correct || 0) >= 5,
  },
  {
    id: 'category_explorer',
    title: 'Category Explorer',
    desc: 'Attempt at least one case in all 8 categories.',
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
]

export function checkNewAchievements(profile) {
  const newlyUnlocked = []
  for (const a of ACHIEVEMENTS) {
    if (!profile.achievements[a.id] && a.check(profile)) {
      newlyUnlocked.push(a)
    }
  }
  return newlyUnlocked
}
