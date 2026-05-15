// Scenario Packs — each is a narrative arc of connected acts.
//
// Act shape:
//   narrative  — situation briefing shown before the case card
//   category   — which category to pull a case from
//   difficulty — 1 | 2 | 3 | null (any)
//   bridge     — story beat shown AFTER answering, before next act
//
// Outcome tiers based on % correct:  great ≥ 0.75 | ok ≥ 0.5 | bad < 0.5

export const SCENARIO_PACKS = [
  // ──────────────────────────────────────────────────────────────────────────
  // PACK 1: The 90-Day Mandate  (CEO)
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'ceo-90-days',
    role: 'ceo',
    title: 'The 90-Day Mandate',
    subtitle: 'Board pressure. Inherited chaos. Your first real test.',
    icon: '🏛️',
    color: '#0066cc',
    intro: {
      heading: 'You just became CEO.',
      body: 'The previous CEO resigned under board pressure after two consecutive revenue misses. You were the board\'s second choice — they made that clear. You have 90 days to demonstrate a credible plan, stop the bleeding, and earn the room\'s confidence. Every decision in these next three months will be watched, questioned, and remembered.',
      stakes: '7 decisions. One mandate. Fail to lead and the board will make the next decision for you.',
    },
    acts: [
      {
        narrative: 'Day 3 — You\'ve had your first all-hands. Half the room looks relieved; the other half looks skeptical. Two of your inherited VPs are already running competing narratives about why the company missed. You need to establish authority without triggering a talent exodus.',
        category: 'Leadership',
        difficulty: 2,
        bridge: 'The leadership issue is contained — for now. But while you were managing that, the CFO dropped a number on your desk you weren\'t expecting.',
      },
      {
        narrative: 'Day 14 — Q3 actuals just landed. Revenue is up 9% YoY but gross margin compressed 5 points due to aggressive discounting to hit the number. The board doesn\'t know yet. Your CFO says you can frame it as a pricing strategy issue, not an execution problem. You\'re not so sure.',
        category: 'Finance',
        difficulty: 2,
        bridge: 'You\'ve bought some credibility with the board. Now the revenue team needs a decision.',
      },
      {
        narrative: 'Day 28 — Your VP Sales wants to close a marquee logo that would appear in every pitch deck. The deal requires a 25% discount from list price, a 90-day POC at no charge, and a custom SLA that engineering says will cost 6 weeks of roadmap. The logo is real. So is the cost.',
        category: 'Sales',
        difficulty: 2,
        bridge: 'Good. The sales motion is getting cleaner. But then day 41 hits like a brick.',
      },
      {
        narrative: 'Day 41 — A customer posted on LinkedIn about a "data exposure incident." Engineering says it was a misconfiguration on the customer\'s side, not yours. Legal says you have no breach to report. But the post is getting traction, a journalist just emailed for comment, and three other customers have called your CSM team asking what happened.',
        category: 'Crisis',
        difficulty: 3,
        bridge: 'You handled the external story. Internally, a slower crisis has been building on the product side.',
      },
      {
        narrative: 'Day 55 — Product wants to pause feature development for a 6-week "platform hardening" sprint — performance, tech debt, test coverage. Engineering is burned out and this is legitimate. But Sales has three deals in late stage that are predicated on features promised for Q4. Both teams are in your office expecting an answer.',
        category: 'Product',
        difficulty: 2,
        bridge: 'The product roadmap is clearer. Now the board wants to know what you\'re doing about the competitive threat.',
      },
      {
        narrative: 'Day 72 — Your biggest competitor just closed a $45M Series C. They\'ve hired aggressively, poached two of your engineers, and announced a new enterprise tier that directly overlaps your flagship product. The board\'s Monday message: "We need your strategic response before the next quarterly review."',
        category: 'Strategy',
        difficulty: 3,
        bridge: 'You\'ve navigated every wave thrown at you. One more test before the board meeting.',
      },
      {
        narrative: 'Day 88 — Two of your best engineers accepted offers elsewhere. One cited comp, one cited the company\'s direction. Both were recruited by the competitor. The board meeting is in 48 hours. You can address this in your presentation as a talent risk — or you can try to solve it quietly before you walk in that room.',
        category: 'Leadership',
        difficulty: 3,
        bridge: null,
      },
    ],
    outcome: {
      great: {
        title: 'Mandate Earned',
        body: 'The board extended your runway. Not because you were perfect — but because you were decisive, transparent, and showed you understand the machine you\'re running. They\'ll still second-guess you, but they\'re no longer looking for a replacement.',
      },
      ok: {
        title: 'Provisional Confidence',
        body: 'The board is cautiously supportive. Some calls were textbook; others raised eyebrows. You have another 90 days to demonstrate pattern consistency. The window is still open — don\'t waste it.',
      },
      bad: {
        title: 'The Board Is Asking Questions',
        body: 'You survived the 90 days, but the board is not satisfied. Several of your decisions showed reactive rather than strategic thinking. An informal search for "alternative leadership options" has quietly begun. You have one quarter to reverse the narrative.',
      },
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  // PACK 2: Runway or Revenue  (CFO)
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'cfo-runway',
    role: 'cfo',
    title: 'Runway or Revenue',
    subtitle: '14 months of cash. An optimistic CEO. A skeptical board.',
    icon: '💰',
    color: '#059669',
    intro: {
      heading: 'You are the CFO. The clock is already running.',
      body: 'You joined a 58-person B2B SaaS startup six weeks ago. The last CFO left after a disagreement with the CEO about burn rate. The board hired you specifically because they\'re nervous about capital efficiency. The CEO thinks the business is about to inflect. You\'ve seen the model — it\'s optimistic. You have 14 months of runway at current burn.',
      stakes: '6 decisions. Every wrong call accelerates the clock.',
    },
    acts: [
      {
        narrative: 'Month 1 — The CEO wants to hire 8 engineers immediately, citing a product roadmap that\'s "18 months behind where we need to be." Loaded cost would consume 4 months of additional runway. The product isn\'t proven at scale yet. Sales pipeline looks promising but conversion is inconsistent.',
        category: 'Cash & Runway',
        difficulty: 2,
        bridge: 'Headcount is addressed. But the unit economics conversation can\'t be avoided any longer.',
      },
      {
        narrative: 'Month 2 — You\'ve now modeled the cohort data. CAC is $16,800. LTV at current churn is $21,200 — a ratio of 1.26x. The VP Sales says "give us scale and it fixes itself." You\'re not sure the business has the runway to find out. The board wants your take next week.',
        category: 'Unit Economics',
        difficulty: 2,
        bridge: 'The board heard your analysis. Now Sales is back with an opportunity that forces a pricing decision.',
      },
      {
        narrative: 'Month 4 — Your largest prospect is a 2,000-seat enterprise deal. Their procurement team is pushing for a price 30% below your standard annual contract, wants quarterly billing (reduces cash flow predictability), and needs a custom security addendum that Legal estimates at $40K to implement. The CEO says "take it — we need the logo."',
        category: 'Pricing Strategy',
        difficulty: 2,
        bridge: 'The deal is resolved. Now you owe the board a reforecast.',
      },
      {
        narrative: 'Month 6 — Board wants three scenarios for the next 18 months: base, upside, and downside. In the base case, you hit Series A metrics by month 11. In the downside, you need a bridge round by month 9. The lead investor is on the call and is asking pointed questions about your assumptions. The CEO is trying to steer the conversation toward the upside.',
        category: 'Financial Planning',
        difficulty: 3,
        bridge: 'The board meeting went as well as it could. But by month 9, the downside case is where you are.',
      },
      {
        narrative: 'Month 9 — You have 5 months of runway. A current investor is offering a bridge round: $2.5M at a 20% discount to your last valuation (a down round effectively). Two other angels are willing to participate on the same terms. The CEO wants to decline and push for a clean Series A. Your model says you won\'t make it.',
        category: 'Fundraising & Investors',
        difficulty: 3,
        bridge: 'You got the bridge. Series A closes at month 12 — but at a lower valuation than expected. Now comes the hardest decision.',
      },
      {
        narrative: 'Month 13 — Series A just closed. $8M. The CEO\'s plan calls for the full team to remain intact and invest aggressively in growth. Your analysis says you can extend runway to 22 months with disciplined cost management — but that requires not backfilling 4 open reqs and removing one underperforming team. The CEO disagrees. The board wants you to align.',
        category: 'Capital Allocation',
        difficulty: 3,
        bridge: null,
      },
    ],
    outcome: {
      great: {
        title: 'Capital Efficient. Board Confident.',
        body: 'You stewarded the business through its tightest window without sacrificing strategic position. The board now trusts your numbers. When Series B conversations begin, your track record is the strongest argument in the room.',
      },
      ok: {
        title: 'Survived, Not Optimized',
        body: 'The company is still standing and the Series A is closed. Some of your calls were conservative when aggression was needed, or aggressive when preservation was the right move. The board has noted both. You\'ll get another cycle to demonstrate the pattern.',
      },
      bad: {
        title: 'The Numbers Don\'t Lie',
        body: 'Several decisions left value on the table or added risk to the balance sheet. The Series A terms reflected investor uncertainty. You\'ll need to rebuild credibility with the board through disciplined execution in the next 18 months. The clock reset — but it\'s still running.',
      },
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  // PACK 3: Zero to One  (PM)
  // ──────────────────────────────────────────────────────────────────────────
  {
    id: 'pm-zero-to-one',
    role: 'pm',
    title: 'Zero to One',
    subtitle: 'No process. No roadmap. A CEO who decides everything.',
    icon: '🧭',
    color: '#7c3aed',
    intro: {
      heading: 'You are the first PM. There is no playbook.',
      body: 'You joined a 22-person startup as their first product manager. The product exists — it was built by engineers following the CEO\'s vision and feedback from a single large customer. There\'s no discovery process, no roadmap, no metrics framework. The CEO makes most product decisions in Slack. Sales is already promising features you don\'t know about. Your job is to build a real product function without blowing up what\'s working.',
      stakes: '6 decisions. Build the function right or get bypassed entirely.',
    },
    acts: [
      {
        narrative: 'Week 2 — You\'ve been in every meeting and read every Slack thread. The product was built around feedback from one customer — a $200K ARR anchor that accounts for 60% of revenue. You don\'t know if anyone else wants what they want. The CEO\'s position: "They are the market." You need to figure out what\'s real before you build anything.',
        category: 'Discovery & Research',
        difficulty: 1,
        bridge: 'You have a better picture of reality. Now the whole company is waiting for you to produce a roadmap.',
      },
      {
        narrative: 'Week 6 — Everyone wants the roadmap. Engineering wants to reduce technical debt. Sales says three deals are blocked without a mobile app. The CEO wants an AI feature to stay competitive. Your user research suggests the core workflow is confusing and retention is the real problem. You can only execute one major initiative this quarter.',
        category: 'Roadmap & Prioritization',
        difficulty: 2,
        bridge: 'The roadmap is set and stakeholders are (mostly) aligned. Now the data is talking.',
      },
      {
        narrative: 'Week 10 — You finally have activation tracking. 34% of users who sign up complete onboarding. Of those, only 41% are still active after 30 days. The CEO looks at the same data and says "our best customers love the product — the others just don\'t get it yet." You think the product is leaking users before it ever shows them its value.',
        category: 'Metrics & Analytics',
        difficulty: 2,
        bridge: 'You\'ve made progress on the activation problem. Then Sales drops a contract on your desk.',
      },
      {
        narrative: 'Week 14 — A customer signed a contract that includes a feature your team didn\'t know about — a bulk export API. Sales closed the deal two months ago and assumed engineering could build it. Engineering estimates 6–8 weeks. You have a committed delivery date in 4 weeks. The CEO says "figure it out."',
        category: 'Stakeholder Management',
        difficulty: 2,
        bridge: 'You navigated the commitment. Now the CEO has a new idea.',
      },
      {
        narrative: 'Week 20 — The CEO saw a competitor launch an AI-powered feature and wants to respond immediately. He\'s already told two prospects "we\'re launching this next quarter." You have a retention problem that\'s still not solved, 3 months of committed roadmap backlog, and one engineering team. The CEO says market timing matters more than anything right now.',
        category: 'Feature Decisions',
        difficulty: 3,
        bridge: 'You protected the roadmap. Now the company is entering a new vertical — and needs your sign-off.',
      },
      {
        narrative: 'Week 24 — The company is planning a launch in the SMB market after spending two years serving enterprise. Marketing has planned a large campaign starting in 6 weeks. Sales has three LOIs. Your honest assessment: the product UX was designed for IT administrators, not the business owners who buy in SMB. The launch will generate pipeline you may not be able to convert.',
        category: 'Go-to-Market',
        difficulty: 3,
        bridge: null,
      },
    ],
    outcome: {
      great: {
        title: 'The Function is Built',
        body: 'You established a product discipline where none existed — without alienating the CEO or losing the trust of engineering. Decisions are now grounded in data and framework, not Slack instincts. The company is building something defensible.',
      },
      ok: {
        title: 'Progress, Not Transformation',
        body: 'You brought structure to some parts of the process, but several decisions showed you still defaulting to the path of least resistance. The CEO still makes too many product calls. You\'ll need to earn more credibility before you can change that dynamic.',
      },
      bad: {
        title: 'Still Spinning',
        body: 'The product function exists in org chart only. Decisions are still reactive, roadmap is still driven by whoever talked to the CEO last, and engineering is frustrated. You need to either drive a reset conversation or accept that your influence here will stay limited.',
      },
    },
  },
]
