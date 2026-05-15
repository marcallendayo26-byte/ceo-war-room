// ─── Ripple-event consequence cases ────────────────────────────────────────
// These cases fire 3-7 answers AFTER a wrong answer in triggerCategories.
// They represent direct fallout from past decisions — the GOT effect.
// All are Executive difficulty (3), category 'Crisis'.
//
// wrongConsequences: applied to health when answered INCORRECTLY (compounds damage).
// consequences:      applied to health when answered CORRECTLY (partial recovery).

export const CONSEQUENCE_CASES = [

  // ── STRATEGY FALLOUT ──────────────────────────────────────────────────────

  {
    id: 'con-strategy-001',
    triggerCategories: ['Strategy', 'Finance', 'Leadership'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Six months after your company\'s major strategic pivot — which received significant internal pushback — two of your top three revenue-generating sales leads have resigned and joined a direct competitor. A LinkedIn post by one of them has gone viral: "Left because the strategy stopped making sense." The board has requested an emergency briefing. How do you respond?',
    options: [
      'Hold a transparent all-hands: acknowledge the departures directly, explain your strategic conviction with evidence, and commit to a 30-day structured feedback window to show you are listening — not wavering.',
      'Announce a formal strategy review committee to signal responsiveness to internal dissent. If top performers disagreed, the market may too.',
      'Accelerate the replacement search and keep leadership messaging tight — resignations are normal in pivots, and drawing attention amplifies the narrative.',
      'Offer retention bonuses to remaining sales staff and frame the departures as a natural culture reset that selected for true believers.',
    ],
    correct: 0,
    explanation: 'When key talent exits publicly over strategy, silence and spin compound the damage. Transparent, conviction-led communication — combined with a feedback window — shows leadership under pressure without showing weakness. Strategy reviews signal wavering to the market. Retention bonuses buy presence, not alignment. Minimizing the news only fuels the LinkedIn cycle.',
    framework: 'Crisis communication: narrative control through transparency, not suppression',
    principle: '"When the strategy is right and the departure is loud, the only answer is a louder, calmer conviction."',
    consequences: { teamMorale: 10, strategicPosition: 6 },
    wrongConsequences: { teamMorale: -10, strategicPosition: -8, cash: -5 },
    traps: [
      'Confusing a communication crisis for a strategy crisis — the real problem is a narrative gap, not a direction problem.',
      'Retention packages buy presence and create resentment in high-performers who don\'t need them.',
      'Launching a "strategy review" when you believe in the direction signals wavering conviction to investors and the market.',
    ],
  },

  {
    id: 'con-strategy-002',
    triggerCategories: ['Strategy', 'Enterprise', 'Marketing'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A competitor has used your public statements about your strategic roadmap — made at a recent industry conference — to announce a direct competitive product, explicitly framed as "the alternative to [your company\'s] approach." Three top enterprise prospects have paused their buying decisions pending clarity. Your team is asking whether you telegraphed too much.',
    options: [
      'Accelerate the differentiating features that cannot be easily copied, and reposition the narrative around execution speed — your moat is how fast you ship, not what you announce.',
      'Issue a public response highlighting the competitor\'s announcement as validation of your market direction, then redirect to your customer track record.',
      'Brief your three wavering prospects privately under NDA with unreleased roadmap detail — restore their confidence before the RFP window closes.',
      'Convene an emergency roadmap review — if a competitor replicated your strategy this quickly, it may not have been sufficiently differentiated.',
    ],
    correct: 0,
    explanation: 'When a competitor weaponizes your strategy against you, the response is execution, not rhetoric. Shipping differentiating features — especially hard-to-replicate ones — proves your roadmap is not just a slide deck. Public rebuttals position you as reactive. Private briefings patch the symptom. Strategy reviews signal panic that prospects will detect.',
    framework: 'Competitive positioning: execution-led differentiation over narrative defense',
    principle: '"The best answer to a competitor who stole your strategy is shipping the features they can\'t."',
    consequences: { strategicPosition: 8, growth: 6 },
    wrongConsequences: { strategicPosition: -8, customerTrust: -6, growth: -5 },
    traps: [
      'A competitor entering your category confirms you were right about the market — treat it as validation, not threat.',
      'NDA briefings buy weeks; execution builds permanent moat.',
    ],
  },

  {
    id: 'con-strategy-003',
    triggerCategories: ['Strategy', 'Finance', 'Ethics', 'Board & Governance'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A prominent analyst has published a report arguing that your company\'s recent decisions show "a pattern of short-term optimization at the expense of sustainable competitive position." Three board members have forwarded you the report with no comment. One has scheduled a one-on-one with you for tomorrow. You suspect the report was informed by a disgruntled former executive.',
    options: [
      'Prepare a structured, data-led response addressing each claim — acknowledge where the critique has merit, and present a specific plan for any area where it does. Bring this to the board one-on-one tomorrow.',
      'Investigate who leaked to the analyst before the board meeting — understanding the source changes how you interpret the motivation and framing.',
      'Dismiss the report in board communications as an agenda-driven hit piece — boards understand competitive dynamics and anonymous sources.',
      'Proactively reach out to the analyst for a correction briefing before the board meeting to shift the narrative.',
    ],
    correct: 0,
    explanation: 'A board response grounded in data and honest acknowledgment of real weaknesses builds far more confidence than defensive posturing. Investigating leaks signals paranoia. Dismissing the report as a hit piece forces board members to choose sides. Analyst outreach without internal alignment first leaves you exposed in your own board meeting.',
    framework: 'Board management: data-driven honesty over narrative defensiveness',
    principle: '"A board loses confidence not in leaders who make mistakes, but in leaders who cannot acknowledge them."',
    consequences: { strategicPosition: 6, teamMorale: 4 },
    wrongConsequences: { strategicPosition: -8, teamMorale: -5, executionRisk: 8 },
    traps: [
      'Focusing on the leak source rather than the substance is a classic distraction that backfires in front of boards.',
      'Loyalty from the board and confidence from the board are different things — seeking loyalty through dismissal destroys confidence.',
    ],
  },

  {
    id: 'con-strategy-004',
    triggerCategories: ['Strategy', 'Operations', 'Product', 'Sprint & Delivery'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'The first milestone of a strategic initiative you championed has missed its target by 40%. The initiative was announced publicly with significant fanfare three months ago. Your team is divided — half believe the plan was too aggressive, half believe execution failed. You have an all-hands in two hours.',
    options: [
      'Own the miss directly. Separate what was a planning failure from an execution failure, and commit to a revised milestone with a specific plan change. Keep the initiative alive with adjusted expectations.',
      'Reframe the milestone miss as a "learning sprint" and hold the original timeline — showing confidence is what teams need in down moments.',
      'Announce a 30-day pause to "reassess scope and resourcing" — give yourself time before making a public commitment.',
      'Shift accountability to the specific team or function that missed their component — being honest about where execution broke down is fair to those who delivered.',
    ],
    correct: 0,
    explanation: 'Owning a miss clearly, separating planning from execution failures, and committing to a revised plan is the only move that rebuilds credibility. "Learning sprint" is the most destructive form of leader-speak — teams know the difference. A pause hemorrhages momentum. Accountability-shifting in all-hands settings destroys team trust permanently.',
    framework: 'Performance recovery: radical candor and credible recommitment',
    principle: '"You can survive a missed milestone. You cannot survive a leader who pretends it wasn\'t one."',
    consequences: { teamMorale: 8, strategicPosition: 5, executionRisk: -8 },
    wrongConsequences: { teamMorale: -12, executionRisk: 10, growth: -5 },
    traps: [
      '"Learning sprint" language is the most-used and most-distrusted reframe in corporate communication.',
      'Accountability-shifting in all-hands settings is visible, remembered, and unforgivable across team lines.',
    ],
  },

  // ── FINANCE FALLOUT ────────────────────────────────────────────────────────

  {
    id: 'con-finance-001',
    triggerCategories: ['Finance', 'Cash & Runway', 'Unit Economics', 'Financial Planning'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Revised financial modeling shows your runway is 4 months shorter than what you communicated to investors at your last board meeting. The discrepancy stems from a modeling assumption that changed after the meeting. Your lead investor is asking for an updated financial package before month-end.',
    options: [
      'Contact your lead investor immediately, explain the modeling change directly, present the revised runway with your response plan, and initiate bridge conversations before they ask.',
      'Prepare an updated financial package that presents the new runway without drawing explicit attention to the discrepancy from the prior communication — the numbers will speak for themselves.',
      'Delay the package by 30 days until you have additional data showing the revised trajectory is stabilizing — never deliver bad news without a solution.',
      'Brief your board chair first, then your lead investor — establish internal alignment before external disclosure so you speak with one voice.',
    ],
    correct: 0,
    explanation: 'Investor trust is the most fragile resource a CEO manages. Proactive, unambiguous disclosure — delivered with a clear response plan — is far less damaging than delay or softened disclosure. Investors universally say they can manage bad news; they cannot manage surprises. Delayed delivery signals you\'re managing the narrative rather than the business.',
    framework: 'Investor relations: radical transparency under financial pressure',
    principle: '"Investors don\'t fund perfect execution. They fund honest leadership of imperfect reality."',
    consequences: { cash: 8, strategicPosition: 6 },
    wrongConsequences: { cash: -12, strategicPosition: -8, executionRisk: 10 },
    traps: [
      'Presenting revised numbers without explicit comparison is not "transparent enough" — investors will notice and be angry you didn\'t flag it.',
      '"Never deliver bad news without a solution" is great for ops reviews, catastrophic for investor relations.',
    ],
  },

  {
    id: 'con-finance-002',
    triggerCategories: ['Finance', 'Cost Structure', 'Capital Allocation', 'Operations'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A decision to reduce customer success headcount as a cost-cutting measure six months ago has led your second-largest enterprise client — 12% of ARR — to issue a formal notice of dissatisfaction and request an executive escalation. Their account health scores have been declining for 90 days. The board is asking about churn risk.',
    options: [
      'Get on a plane. Executive-to-executive meeting within 5 business days — no slides, just listening and a specific remediation plan with named owners and a 30-day check-in.',
      'Send a formal executive letter acknowledging the concern and outlining a 60-day remediation plan with specific SLA commitments — buy time while you restructure the account.',
      'Temporarily assign additional CS resources to this account from other clients to stabilize before formalizing structural changes.',
      'Schedule a QBR in two weeks and use it as the forum to address their concerns through your normal executive engagement process.',
    ],
    correct: 0,
    explanation: 'A formal notice of dissatisfaction from a 12% ARR client is a code-red event. The only signal that changes their trajectory is executive urgency made physical — not a letter, not a QBR in two weeks. The meeting is not about slides; it\'s about demonstrating you consider this a priority. Robbing other accounts creates new churn risk and buys weeks, not solutions.',
    framework: 'Enterprise account recovery: urgency signaling through executive presence',
    principle: '"At 12% ARR, no remediation plan saves the account. Only visible executive commitment does."',
    consequences: { customerTrust: 10, cash: 5 },
    wrongConsequences: { customerTrust: -12, cash: -8, growth: -6 },
    traps: [
      'A formal notice of dissatisfaction is not a normal escalation — it is a pre-churn signal with a legal paper trail.',
      'Robbing other accounts to stabilize one trades a certain churn risk for several probable ones.',
    ],
  },

  {
    id: 'con-finance-003',
    triggerCategories: ['Finance', 'M&A', 'Capital Allocation', 'Fundraising & Investors'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'During due diligence for an acquisition you are targeting, your CFO discovers a financial model error in materials you presented to the board 60 days ago — a revenue projection that overstated forward growth by 15% due to a formula error. Budget allocations were approved partially based on this number. The acquisition closes in 30 days.',
    options: [
      'Notify your audit committee chair and board chair immediately — bring the corrected figures, explain the error source, and present updated modeling. The acquisition timeline continues on corrected numbers.',
      'Correct the model internally and restate the projections in your next scheduled board deck — the timing before close is inopportune for a separate disclosure.',
      'Delay closing by 30 days while you work through the implications of the revised projections on the deal rationale.',
      'Assess whether the 15% overage materially changes the board\'s likely budget decisions before disclosing — immaterial errors don\'t always require formal restatement.',
    ],
    correct: 0,
    explanation: 'A financial model error that affected board decisions requires immediate, proactive disclosure regardless of acquisition timing or perceived materiality. Audit committees exist precisely for this. Waiting for a scheduled meeting, delaying the deal, or applying your own materiality judgment all create governance liabilities. The CEO who surfaces errors voluntarily builds trust; the one who is caught hiding them loses the board.',
    framework: 'Financial governance: voluntary disclosure over strategic timing',
    principle: '"In financial governance, the cover-up is never smaller than the error."',
    consequences: { cash: 5, executionRisk: -8, strategicPosition: 5 },
    wrongConsequences: { cash: -8, executionRisk: 12, strategicPosition: -8 },
    traps: [
      'Applying your own materiality judgment is a board\'s prerogative, not management\'s.',
      'Acquisition timing pressure is the most common reason executives delay disclosures — and the reason regulators look hardest at that period.',
    ],
  },

  {
    id: 'con-finance-004',
    triggerCategories: ['Finance', 'Cash & Runway', 'Financial Planning'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your company has missed revenue targets for the second consecutive quarter, triggering a financial covenant with your debt facility requiring a minimum revenue run rate. Your bank has called an emergency meeting. If covenant relief is denied, you must pay down 30% of the facility immediately — a cash position you cannot sustain.',
    options: [
      'Go in with full transparency: current state, root cause, corrective actions with named owners, and a conservative financial plan showing path to covenant compliance. Ask for 2 quarters of relief.',
      'Ask for 1 quarter of relief initially — more achievable and it demonstrates you are not requesting excessive latitude from the lender.',
      'Bring your CFO and a restructuring advisor — it signals seriousness and gives the bank third-party validation of your plan.',
      'Explore refinancing with a different lender before the meeting — entering with an alternative reduces negotiating vulnerability.',
    ],
    correct: 0,
    explanation: 'Covenant relief negotiations are won on the bank\'s confidence in management transparency and plan credibility, not on minimizing the ask. Asking for 2 quarters with a complete plan is more credible than 1 quarter with a partial story. A restructuring advisor in the room before exhausting primary options signals you may already be in deeper trouble. Parallel refinancing takes months — it cannot be your primary play this week.',
    framework: 'Debt negotiation: lender confidence through plan credibility',
    principle: '"Lenders grant covenant relief to management teams they trust, not teams who minimize their asks."',
    consequences: { cash: 10, executionRisk: -6 },
    wrongConsequences: { cash: -12, executionRisk: 10, strategicPosition: -6 },
    traps: [
      'A smaller ask seems conservative but signals you don\'t believe your own plan.',
      'Restructuring advisors before you\'ve exhausted primary bank options signal you\'re preparing for a different outcome — the bank notices.',
    ],
  },

  // ── LEADERSHIP / HR FALLOUT ───────────────────────────────────────────────

  {
    id: 'con-hr-001',
    triggerCategories: ['Leadership', 'Operations', 'Hiring & Staffing', 'Talent Acquisition', 'IC Management', 'Organizational Design'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your VP of Engineering — a founding team member, day-one — has submitted her resignation citing a loss of faith in leadership direction following recent organizational changes. She has not gone public yet. She leads 22 engineers who are fiercely loyal to her. You have 24 hours before rumors start.',
    options: [
      'Meet with her directly and listen first — before packages, before communications, before anything. Understand her specific concerns honestly. Only make a counter-offer if you intend to follow through on what she is asking for.',
      'Immediately prepare a team communication from her to the engineering team to pre-empt rumors and control the narrative before she can.',
      'Offer significant equity acceleration — make it financially irrational for her to leave.',
      'Begin a quiet executive search in parallel while attempting a one-week dialogue — protect business continuity regardless of outcome.',
    ],
    correct: 0,
    explanation: 'A founding VP\'s resignation is a leadership referendum, not a retention negotiation. The only ethical and strategically sound response is genuine dialogue first. Counter-offers without addressing underlying concerns fail within 6 months 80% of the time. Starting an executive search before honest dialogue is the kind of leadership betrayal that — when it surfaces — confirms everything she was concerned about.',
    framework: 'Leadership retention: honest dialogue over financial engineering',
    principle: '"You cannot buy back a founder\'s faith with equity. You can only listen your way back to it — or not."',
    consequences: { teamMorale: 10, executionRisk: -8 },
    wrongConsequences: { teamMorale: -12, executionRisk: 10, strategicPosition: -6 },
    traps: [
      'Pre-emptive team communications before dialogue is spin control and will be perceived as exactly that.',
      'Equity acceleration retains the body, not the mind — a VP who resigns for culture reasons and stays for money becomes a morale tax.',
    ],
  },

  {
    id: 'con-hr-002',
    triggerCategories: ['Leadership', 'Ethics', 'Culture & Engagement', 'Employee Relations', 'Team Culture'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'An anonymous Glassdoor review — specific enough to identify the role and team — has gone viral on LinkedIn, alleging a toxic management style from a senior leader and citing specific incidents. Multiple candidates in your active hiring pipeline have messaged your recruiter asking about the post. Employer brand metrics dropped 18 points in a week.',
    options: [
      'Investigate the specific incidents through HR immediately. If substantiated, act on them — and only then commit to a public statement about your leadership standards. Do not respond publicly before the investigation is complete.',
      'Have HR and Legal draft a public response that respectfully disputes the characterization and outlines your company values — silence reads as admission.',
      'Identify and coach the senior leader to post a company response on Glassdoor, framing it as a reflection of your culture.',
      'Accelerate employer brand investments — sponsored content, employee testimonials — to flood the channel with positive signal while you work the issue internally.',
    ],
    correct: 0,
    explanation: 'A specific, credible review requires an investigation before a PR response. Public statements before investigation are either lies (if the incidents occurred) or premature (if they didn\'t). Employer brand marketing while the underlying issue festers is a delay, not a solution — sophisticated candidates will see through it.',
    framework: 'Employer brand crisis: substance before narrative',
    principle: '"Your employer brand is only as strong as your willingness to act on what it promises."',
    consequences: { teamMorale: 8, customerTrust: 4 },
    wrongConsequences: { teamMorale: -10, executionRisk: 8, growth: -5 },
    traps: [
      'Public responses before internal investigation are either premature or misleading — either way they compound the crisis.',
      'Coaching a leader to respond on Glassdoor creates legal exposure if the review was accurate.',
    ],
  },

  {
    id: 'con-hr-003',
    triggerCategories: ['Leadership', 'Operations', 'Organizational Design', 'Performance Management', 'Team & Resources'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A reorganization 90 days ago — combining two teams under a single VP — has triggered near-open conflict. The VP is visibly struggling with the expanded scope. Five senior ICs have collectively written a letter requesting a reversal, citing a "leadership vacuum and loss of technical direction." Two have said they will resign if the situation doesn\'t change.',
    options: [
      'Meet with each IC individually to understand the specific concerns, then make a decision — either address the VP\'s gaps through coaching and interim support, or acknowledge the reorg was too aggressive and adjust. Either way, commit with clarity.',
      'Hold firm — reversals signal poor planning and undermine leadership authority. Add a technical program manager to support the VP without conceding the structure.',
      'Announce a performance improvement plan for the VP and share this signal with the concerned ICs so they know their feedback was heard.',
      'Accept the reorg reversal immediately — when senior ICs collectively write a letter, the signal is clear and fast correction beats slow.',
    ],
    correct: 0,
    explanation: 'A collective letter from senior ICs is a serious signal but not a referendum. The right response is individual diagnosis, not immediate capitulation or doubling down. Making a decision with full information and committing to it is the only play that preserves leadership credibility. Sharing a VP\'s PIP with concerned ICs violates confidentiality and is a serious governance failure.',
    framework: 'Organizational change management: diagnosis before decision',
    principle: '"A reorg that generates a letter is telling you something. Listening well is not the same as reversing immediately."',
    consequences: { teamMorale: 8, executionRisk: -6 },
    wrongConsequences: { teamMorale: -12, executionRisk: 8, strategicPosition: -5 },
    traps: [
      'Treating any reorg reversal as automatically weak — some reorgs are wrong and fast correction is strength, not capitulation.',
      'Sharing a VP PIP with ICs to signal responsiveness is a fireable offense in most jurisdictions.',
    ],
  },

  {
    id: 'con-hr-004',
    triggerCategories: ['Leadership', 'Hiring & Staffing', 'Talent Acquisition', 'IC Management'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'The CRO you recruited externally 4 months ago has not closed a single strategic deal. Your head of sales — who was passed over for the role — has been back-channeling concerns to board members. Two enterprise deals that were pipeline-mature have stalled under the new CRO\'s leadership. The board is asking for an update next month.',
    options: [
      'Have an unambiguous performance conversation with the CRO this week — define specific, measurable 90-day outcomes with clear consequences. Brief the board proactively on your assessment and plan before they ask.',
      'Transfer the two stalled enterprise deals to your head of sales temporarily while the CRO orients — protect the revenue regardless of organizational optics.',
      'Brief your head of sales that you\'re aware of his concerns and expect feedback routed through you, not the board — then manage the CRO separately.',
      'Give the CRO the full 6-month mark before assessing — enterprise sales cycles are long and 4 months is too early to judge.',
    ],
    correct: 0,
    explanation: 'A 4-month executive who has stalled mature pipeline deals requires a direct performance conversation now, not at the 6-month mark. Board members receiving back-channel concerns is a governance problem — but it is solved through the CRO\'s performance, not by managing your head of sales\'s communication style. Transferring deals doesn\'t address the leadership gap and further undermines the CRO\'s credibility.',
    framework: 'Executive performance management: early intervention over patience',
    principle: '"In executive hires, six months of patience is six months of organizational damage. Act at the first clear signal."',
    consequences: { growth: 8, teamMorale: 5, cash: 5 },
    wrongConsequences: { growth: -8, teamMorale: -6, cash: -6 },
    traps: [
      '"Too early to judge" at 4 months with stalled mature pipeline is not patience — it\'s avoidance.',
      'Managing your head of sales\'s communication to the board treats a symptom while ignoring the disease.',
    ],
  },

  {
    id: 'con-hr-005',
    triggerCategories: ['Leadership', 'Culture & Engagement', 'HR Operations', 'Team Culture', 'Employee Relations'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your return-to-office mandate — 3 days per week — has triggered a coordinated response: 31 employees representing 40% of engineering and product have signed a petition requesting permanent remote flexibility. Two senior engineers have already accepted offers from fully-remote competitors. A journalist has reached out for comment.',
    options: [
      'Decline to comment to the journalist until you\'ve held a town hall with the signing employees. Understand the specific concerns, acknowledge the resignations, and make a policy decision with full information — before it becomes a public narrative.',
      'Issue a company-wide message reaffirming the policy with a clear rationale — ambiguity about commitment will cost you more talent than the departures already have.',
      'Grant a 60-day exception while forming an employee working group to evaluate the hybrid framework — this buys goodwill and time.',
      'Meet individually with the two engineers who resigned and offer role upgrades to retain them before the petition gains further momentum.',
    ],
    correct: 0,
    explanation: 'A journalist call and a 31-person petition are symptoms of a communication and trust gap — not primarily a policy problem. The highest-leverage move is understanding what is driving the petition before taking any public position. Policy reaffirmations without dialogue alienate 40% of your technical team. Exceptions under organized pressure create a governance pattern: your next policy will face the same playbook.',
    framework: 'Change management: listening before communicating',
    principle: '"The employees who sign petitions are telling you something. The ones who don\'t are deciding whether to stay."',
    consequences: { teamMorale: 8, executionRisk: -5 },
    wrongConsequences: { teamMorale: -10, executionRisk: 8, growth: -5 },
    traps: [
      'Reaffirming policy without dialogue treats the petition as insubordination rather than feedback.',
      'Policy exceptions under organized pressure set a precedent — your next policy will be contested the same way.',
    ],
  },

  // ── OPERATIONS / CRISIS FALLOUT ───────────────────────────────────────────

  {
    id: 'con-ops-001',
    triggerCategories: ['Operations', 'Risk & Quality', 'Technical Decisions', 'Technical Debt', 'Sprint & Delivery', 'Incident Response'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A critical system outage brought your platform down for 4 hours during peak usage. Post-incident analysis reveals the failure originated in infrastructure flagged for maintenance in three separate engineering reviews over the past year — each time the fix was deferred due to sprint priorities. Your two largest enterprise clients are demanding an executive call.',
    options: [
      'Get on executive calls with both clients within 24 hours — come with a complete incident timeline, root cause, and a concrete maintenance plan with dates. Own that it was preventable. Then commission a full technical debt audit with board-level visibility.',
      'Have your engineering lead handle the client calls — this is a technical incident and they are best positioned to explain the root cause.',
      'Prioritize completing the incident report before client calls — you need the full analysis before committing to anything.',
      'Schedule client calls for day 5 after you\'ve prepared a comprehensive remediation roadmap with SLA commitments and compensation offers.',
    ],
    correct: 0,
    explanation: 'For enterprise clients experiencing an outage from preventable causes, executive presence is not optional — it determines whether they begin churn conversations. Coming with a timeline and plan — even before the full report is complete — demonstrates leadership. Delegating to engineering signals management didn\'t prioritize the relationship. Delays beyond 48 hours in client communication during an outage are both contractually and relationship-damaging.',
    framework: 'Incident response: client trust recovery through executive ownership',
    principle: '"When the failure was preventable, the only recovery play is executive accountability. No SLA credit substitutes for it."',
    consequences: { customerTrust: 10, executionRisk: -8 },
    wrongConsequences: { customerTrust: -12, executionRisk: 10, cash: -6 },
    traps: [
      'Delegating enterprise incident calls to engineering sends the message that executives don\'t consider this a priority.',
      'Waiting for the complete incident report delays the relationship conversation past the recovery window.',
    ],
  },

  {
    id: 'con-ops-002',
    triggerCategories: ['Operations', 'Project Delivery', 'Implementation', 'Sprint & Delivery', 'Execution'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A critical deliverable for your largest client has slipped by 6 weeks — the third timeline revision in 8 months. The client\'s CTO has escalated directly to your board, bypassing your account team. Your board has forwarded the note to you with a single line: "This needs to be handled." What is your move?',
    options: [
      'Call the client CTO directly today — before preparing any materials. Acknowledge the escalation, own the pattern, and ask: "What does resolved look like for you?" Build the recovery plan around that answer.',
      'Prepare a comprehensive recovery plan with revised commitments and executive sign-off, then request a meeting — going in without a plan is unprofessional.',
      'Escalate internally first — hold the delivery team accountable before committing externally. Get the internal story straight.',
      'Request that the board respond to the CTO\'s email acknowledging the concern and buying you 72 hours to prepare a formal response.',
    ],
    correct: 0,
    explanation: 'A client who escalated to your board has decided the normal relationship is broken. The only signal that changes their trajectory is immediate, unscripted executive engagement. Asking "What does resolved look like for you?" reframes you from the source of the problem to a partner in solving it. Board-mediated delays compound the signal that you\'re managing optics instead of the relationship.',
    framework: 'Enterprise escalation: urgency over preparation',
    principle: '"The client who escalated to your board doesn\'t want your plan. They want to know you understand how serious this is."',
    consequences: { customerTrust: 12, executionRisk: -8 },
    wrongConsequences: { customerTrust: -12, executionRisk: 8, cash: -8 },
    traps: [
      'Preparing a recovery plan before calling signals you prioritize looking good over moving fast — they will know.',
      '"Getting the internal story straight" turns a client crisis into an internal political exercise.',
    ],
  },

  {
    id: 'con-ops-003',
    triggerCategories: ['Operations', 'Risk & Quality', 'Security & Compliance', 'Ethics', 'Data Migration'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your security team has discovered that a misconfigured data pipeline — introduced during a recent infrastructure migration — may have exposed a subset of client records for up to 72 hours. The exposure window is closed. No evidence of access or misuse has been found. Legal says you\'re in a "notification grey zone." Your Head of Security recommends voluntary notification; your General Counsel recommends waiting for more evidence.',
    options: [
      'Notify potentially affected clients now — proactively, before legal certainty, with full transparency about what happened and what you\'re doing. Commit to a 5-business-day update with a complete assessment.',
      'Wait for the full forensic analysis before notification — notifying prematurely raises concerns that may not be warranted and creates disproportionate client anxiety.',
      'Notify only the clients whose records were in the highest-risk segment — a targeted, proportionate disclosure is more defensible.',
      'Follow your General Counsel\'s guidance — legal frameworks exist for these situations and overriding counsel on a notification decision creates liability.',
    ],
    correct: 0,
    explanation: 'In data security, proactive disclosure is both the ethical and long-term strategic choice — even in a grey zone, even before forensic certainty. Clients who hear about potential exposures from you first are more forgiving than those who hear from regulators or the press. "Grey zone" legal advice covers minimum compliance, not trust. Selective notification creates a documented record of triage that becomes Exhibit A in future litigation.',
    framework: 'Data security ethics: proactive disclosure over legal minimum compliance',
    principle: '"Your clients\' data is a trust, not a liability to be managed. Treat every exposure decision as if the outcome is public."',
    consequences: { customerTrust: 8, executionRisk: -8 },
    wrongConsequences: { customerTrust: -10, executionRisk: 10, cash: -6 },
    traps: [
      'Selective notification creates a paper trail showing you made triage decisions about whose data mattered more.',
      '"Following counsel\'s guidance" on minimum disclosure when you have evidence of exposure is a compliance decision, not a leadership decision.',
    ],
  },

  {
    id: 'con-ops-004',
    triggerCategories: ['Operations', 'Risk & Quality', 'Negotiation', 'Deal Structuring'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A critical third-party vendor — whose platform underpins 30% of your product delivery capability — has sent a contract termination notice effective in 60 days, citing unpaid invoices that accumulated during your restructuring. Replacement options exist but require 90-120 days to implement. A payment plan proposal was rejected by their CFO.',
    options: [
      'Escalate to their CEO with a specific settlement proposal addressing the outstanding balance and a forward commitment — match their urgency. Simultaneously begin vendor migration immediately, treating 60 days as a hard deadline regardless of negotiation outcome.',
      'Engage Legal to challenge the termination notice on procedural grounds — buy time while you negotiate separately through normal channels.',
      'Settle the outstanding invoices in full immediately, even at short-term cash cost — vendor relationship continuity is worth it.',
      'Accept the termination, accelerate the replacement timeline aggressively, and brief clients on potential service disruption in advance.',
    ],
    correct: 0,
    explanation: 'Vendor termination with a 60-day notice when replacement takes 90-120 days is a gap requiring simultaneous negotiation and contingency execution — not either/or. CEO-to-CEO escalation with a specific settlement reframes the conversation outside normal accounts-receivable dynamics. Legal challenges buy weeks but destroy the relationship permanently. Full settlement may not be possible without knowing your cash position.',
    framework: 'Vendor crisis: parallel negotiation and contingency execution',
    principle: '"When you cannot afford to lose a vendor and cannot afford to pay them, you negotiate and migrate simultaneously."',
    consequences: { executionRisk: -8, cash: 4, customerTrust: 5 },
    wrongConsequences: { executionRisk: 10, cash: -8, customerTrust: -6 },
    traps: [
      'Legal challenges to termination are slow, expensive, and signal no intention of paying — ending the relationship permanently.',
      'Settling without knowing your full cash picture trades one crisis for another.',
    ],
  },

  {
    id: 'con-ops-005',
    triggerCategories: ['Operations', 'Product', 'Risk & Quality', 'Feature Decisions', 'Product Innovation'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A product calculation error — introduced 4 months ago in a major release — has been discovered across 8 enterprise accounts. Clients have been making business decisions based on inaccurate outputs. Two clients have independently noticed and are asking your account teams for an explanation. Your product team estimates 3 weeks to patch.',
    options: [
      'Notify all 8 affected accounts today — before any of them discover it independently. Explain what happened, the impact scope, the resolution timeline, and offer to review any decisions made using affected outputs.',
      'Prioritize the two who have already noticed — manage the active conversations before broadening your disclosure scope.',
      'Ship the patch first, then notify all accounts — disclosing before resolution creates 3 weeks of client anxiety with no actionable next steps.',
      'Assess the materiality of the error before notifying — if the error was small enough that it didn\'t change any client decisions, notification creates unnecessary concern.',
    ],
    correct: 0,
    explanation: 'A calculation error affecting business decisions across 8 enterprise accounts requires universal proactive disclosure. The two accounts who already noticed will compare notes. If any of the other six hear from them rather than from you, your trust deficit doubles. Assessing materiality is the client\'s prerogative, not yours — they decide whether this changed their decisions, not you.',
    framework: 'Product quality transparency: universal proactive disclosure',
    principle: '"When your product gives clients bad data, the only acceptable response is telling all of them, immediately."',
    consequences: { customerTrust: 10, executionRisk: -6 },
    wrongConsequences: { customerTrust: -12, executionRisk: 8, cash: -5 },
    traps: [
      'Selective notification creates a category of clients who learn from other clients — permanently destroying their trust.',
      '"Ship the patch first" is indistinguishable from concealment when the delay reaches 3 weeks.',
    ],
  },

  // ── SALES / MARKET FALLOUT ────────────────────────────────────────────────

  {
    id: 'con-sales-001',
    triggerCategories: ['Sales', 'Pipeline Management', 'Negotiation', 'Deal Execution', 'Account Strategy', 'Renewals', 'Churn Prevention'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your largest client — 18% of ARR — has issued an RFP to your top two competitors. Your account team says they\'ve been warning about declining executive sponsor engagement for 6 months. The renewal is in 5 months. Your competitor\'s sales director has been spotted at the client\'s HQ twice this month.',
    options: [
      'Request an executive-to-executive meeting this week — not to pitch, but to listen. Specifically ask what would need to be true for them to remove you from the competitive process. Then decide honestly whether you can deliver it.',
      'Respond to the RFP aggressively with your strongest commercial terms — competing on price and features is your best leverage given the timeline.',
      'Accelerate product roadmap delivery for the features this client has been requesting — demonstrate you\'re listening before the RFP closes.',
      'Have Legal review the current contract for provisions that would complicate a competitor transition — use this as leverage in retention conversations.',
    ],
    correct: 0,
    explanation: 'A client who has issued an RFP is telling you the relationship failed at the executive level — not the product level. The RFP is the symptom. Executive-to-executive dialogue positioned as listening (not pitching) is the only intervention that addresses the actual cause. RFP responses compete on features and price — exactly the framing a client in this state will use to justify leaving. Legal leverage is a relationship-ender disguised as a tactic.',
    framework: 'Enterprise retention: relationship recovery before competitive response',
    principle: '"An 18% ARR client issuing an RFP is a leadership failure, not a sales failure. Leadership must respond to it."',
    consequences: { customerTrust: 10, cash: 8, growth: 6 },
    wrongConsequences: { customerTrust: -12, cash: -10, growth: -6 },
    traps: [
      'Competing in the RFP validates their reframing of the relationship as transactional — you become a commodity in your own retention story.',
      'Legal leverage in a renewal conversation signals you\'re preparing to lose and trying to make it painful — guaranteeing the outcome you fear.',
    ],
  },

  {
    id: 'con-sales-002',
    triggerCategories: ['Sales', 'Pipeline Management', 'Competitive Selling', 'Negotiation', 'Brand & Positioning'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A major lost deal has surfaced as a competitor\'s win announcement on LinkedIn, with the client publicly praising the competitor\'s "partnership approach" versus "the previous vendor\'s transactional model." The post is circulating in your industry. Three prospects in active pipeline have sent it to their account managers asking for a response.',
    options: [
      'Arm your account managers with a calm, factual response for prospect conversations — acknowledge competition exists, redirect to your track record with clients who have similar needs. Do not engage the LinkedIn post publicly.',
      'Respond publicly on LinkedIn, tagging the client — respectfully tell your side of the partnership story.',
      'Accelerate case study creation from your three strongest reference clients to provide social proof that counters the narrative.',
      'Have your CEO post a company values statement about partnership and long-term thinking — reframe your brand narrative without addressing the specific loss.',
    ],
    correct: 0,
    explanation: 'A public competitive loss is managed in private sales conversations, not public channels. Public responses — even respectful ones — draw more attention to the post, create documentation of the dispute, and signal insecurity to prospects. CEO values posts without addressing the specific situation read as defensive rebranding and sophisticated buyers see through it.',
    framework: 'Competitive loss management: private narrative over public defense',
    principle: '"Competitive losses that go public are won back in private conversations, not public rebuttals."',
    consequences: { growth: 6, strategicPosition: 5 },
    wrongConsequences: { growth: -8, strategicPosition: -6, customerTrust: -5 },
    traps: [
      'LinkedIn responses to competitive losses elevate the post\'s visibility and create a record that prospects will research.',
      'CEO values posts without specific context are universally read as defensive rebranding — they confirm the concern rather than address it.',
    ],
  },

  {
    id: 'con-sales-003',
    triggerCategories: ['Sales', 'Quota & Forecasting', 'Pipeline Management', 'Demand Generation'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your sales team has missed quota for the second consecutive quarter — Q2 was 22% below target. You\'re entering Q3 with the board expecting recovery. Your head of sales attributes the miss to "market headwinds and a tough ICP shift." Your top two reps have both privately told HR they are considering leaving. What is your assessment and action?',
    options: [
      'Commission a closed-lost pipeline audit this week — analyze the last 12 months for root cause patterns. If data shows a systemic ICP or qualification problem, own the strategy change. If it shows execution gaps, address those at the leadership level immediately.',
      'Believe the market headwind narrative and adjust targets — demoralized teams need wins, and unreachable targets compound the performance problem.',
      'Replace your head of sales immediately — two consecutive misses with a "market headwinds" narrative signals a leadership problem at the function level.',
      'Focus on retaining the two reps at risk of leaving — your best performers are worth more than the attribution debate.',
    ],
    correct: 0,
    explanation: 'Two consecutive misses with a "market headwinds" narrative is a diagnosis problem before it\'s a performance problem. A closed-lost data audit is the fastest way to distinguish between a genuine market shift and an execution or qualification gap. Target adjustments without root cause reward underperformance and calibrate expectations downward permanently. Replacing the head of sales without data is leadership theater.',
    framework: 'Sales performance: data-led diagnosis before intervention',
    principle: '"When sales leadership blames the market, your first job is to audit whether the market is actually the variable."',
    consequences: { growth: 8, cash: 5 },
    wrongConsequences: { growth: -8, cash: -6, teamMorale: -5 },
    traps: [
      'Market headwind narratives are the most commonly offered and most commonly incorrect explanation for consecutive misses.',
      'Adjusting targets without root cause creates a permanent floor effect — teams learn that misses get targets lowered.',
    ],
  },

  // ── BOARD / GOVERNANCE FALLOUT ────────────────────────────────────────────

  {
    id: 'con-board-001',
    triggerCategories: ['Board & Governance', 'Ethics', 'Strategy', 'Finance', 'Leadership'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'An independent board member — one who has been privately critical of recent decisions — has published an opinion piece in a prominent business publication that, while not naming your company, is clearly recognizable to anyone in your industry as a critique of your strategic direction. Other board members are asking whether this signals a broader governance breakdown.',
    options: [
      'Request a one-on-one with the board member within 48 hours — listen without an agenda. Then convene a full board session to establish shared governance norms around public communications. Do not make the conversation adversarial.',
      'Raise the behavior formally with your board chair and request the member be reminded of their fiduciary duty and confidentiality obligations.',
      'Respond publicly to the op-ed with a rebuttal — board members who take positions publicly should expect a public response.',
      'Ignore the op-ed — engaging elevates a secondary narrative and the piece will be forgotten within a week.',
    ],
    correct: 0,
    explanation: 'A board member publishing a recognizable critique signals a governance trust breakdown requiring direct, non-adversarial dialogue before any formal action. Raising formal complaints with the chair before attempting dialogue creates an adversarial dynamic that fractures the board further. Public rebuttals draw more attention and confirm the perception of dysfunction. Ignoring it works in 48-hour news cycles but not in board dynamics — the underlying concern festers.',
    framework: 'Board governance: relationship repair before formal process',
    principle: '"A board member who goes public has given up on internal dialogue. Your first job is to reopen it."',
    consequences: { strategicPosition: 6, executionRisk: -5 },
    wrongConsequences: { strategicPosition: -8, executionRisk: 8, teamMorale: -5 },
    traps: [
      'Formal complaints before dialogue permanently convert a governance issue into a political one.',
      'Public rebuttals of board critiques are the definition of governance dysfunction — they confirm everything the piece suggested.',
    ],
  },

  {
    id: 'con-board-002',
    triggerCategories: ['Ethics', 'Finance', 'Board & Governance', 'Security & Compliance'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'A regulatory body has opened a preliminary inquiry into business practices from the past 18 months. Your General Counsel believes it was triggered by a complaint from a former employee. No formal charges have been made. Resolution could take 6-18 months. You have an investor update scheduled for next week.',
    options: [
      'Disclose the inquiry proactively in the investor update — present what you know, what you don\'t know, your legal team\'s assessment, and your cooperation posture. Investors who learn about regulatory inquiries from sources other than you lose confidence permanently.',
      'Consult with Legal and delay the investor update two weeks to allow a full assessment of the inquiry before disclosure.',
      'Disclose only to your board chair and lead investor in confidence — tier your disclosure to manage the information carefully before the general update.',
      'Do not disclose — the inquiry is preliminary and unresolved, and premature disclosure creates market risk without providing useful information.',
    ],
    correct: 0,
    explanation: 'A regulatory inquiry — even preliminary — is material information for investors if it could affect the company\'s business or financial condition. Proactive disclosure in the scheduled update, with your legal team\'s posture clearly stated, is the only play that preserves investor trust. Tiered disclosure creates a governance class of investors with preferential information. Non-disclosure of a known inquiry creates significant legal exposure.',
    framework: 'Investor disclosure: regulatory transparency over narrative management',
    principle: '"Investors can handle regulatory inquiries. They cannot handle being the last to know about them."',
    consequences: { strategicPosition: 5, executionRisk: -5, cash: 3 },
    wrongConsequences: { strategicPosition: -8, executionRisk: 10, cash: -6 },
    traps: [
      'Tiered disclosure — telling some investors before others — is a Reg FD violation in public companies and a governance breach in private ones.',
      '"Preliminary and unresolved" is not a threshold for non-disclosure — the existence of the inquiry is itself the material fact.',
    ],
  },

  {
    id: 'con-board-003',
    triggerCategories: ['Leadership', 'Board & Governance', 'Strategy', 'Ethics'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your co-founder — who transitioned to a board observer role 18 months ago — has sent a formal letter to the full board expressing concern about the company\'s departure from its founding mission and questioning recent executive hires. The letter was shared with all board members without your knowledge. Three employees close to the co-founder already know about it.',
    options: [
      'Call the co-founder today — not the board, not Legal, the co-founder. Listen to their concerns directly without defensiveness. Then brief the board on your conversation and propose a structured dialogue on the mission questions raised.',
      'Work with your board chair to formally address the letter at the next board meeting — this is a governance matter and should go through the appropriate board process.',
      'Brief key employees before the letter circulates further — narrative control in the leadership team is essential before this becomes a culture event.',
      'Respond directly to the board by email, addressing each concern point by point — give your version of events before the board forms their view.',
    ],
    correct: 0,
    explanation: 'A co-founder\'s letter to the board is a relationship fracture wearing governance language. The only move that can actually resolve it is direct human dialogue — before any formal process, any employee brief, or any point-by-point rebuttal. Formal board processes over what is fundamentally a relationship issue will calcify the conflict. Point-by-point email rebuttals are fuel for board-level conflict.',
    framework: 'Co-founder conflict: relationship first, process second',
    principle: '"Co-founder letters to boards are cries for a conversation that never happened. Have the conversation first."',
    consequences: { teamMorale: 8, strategicPosition: 5 },
    wrongConsequences: { teamMorale: -10, strategicPosition: -8, executionRisk: 8 },
    traps: [
      'Board governance processes exist for fiduciary issues — co-founder relationship breakdowns are leadership issues wearing governance clothes.',
      'Employee narrative management before executive dialogue tells your people that optics matter more to you than resolution.',
    ],
  },

  {
    id: 'con-board-004',
    triggerCategories: ['Leadership', 'Ethics', 'Board & Governance', 'Culture & Engagement', 'Strategy'],
    category: 'Crisis',
    difficulty: 3,
    scenario: 'Your board chair has informed you that an anonymous letter, signed by "Senior Leadership," has been received, alleging a pattern of decisions that prioritize short-term metrics over long-term company health and citing specific examples from the past two quarters. The board is convening a special session in 5 days. You have no direct evidence of who wrote it.',
    options: [
      'Walk into the board session prepared to address every example cited — with your actual reasoning, your assessment of the outcome, and honest acknowledgment of what you would do differently. Do not arrive defensive.',
      'Bring a 90-day performance dashboard showing the overall trajectory is positive, framing the letter as a selective view from someone who misunderstands the full picture.',
      'Investigate who sent the letter before the session — understanding the source changes how you interpret the motivation.',
      'Propose that an external governance advisor review the letter\'s claims before the full board session — this depoliticizes the process.',
    ],
    correct: 0,
    explanation: 'An anonymous letter with specific examples is a referendum on your transparency and decision-making. Arriving prepared to address each example directly — with honest assessment including acknowledgment of mistakes — is the only posture that builds board confidence. Dashboards that show macro-positive trends without addressing specific claims are transparent deflection. Investigating the source before the session prioritizes political positioning over substance.',
    framework: 'Board accountability: direct engagement with specific critique',
    principle: '"A board that receives an anonymous letter is watching to see whether you lead with data or defensiveness."',
    consequences: { strategicPosition: 6, teamMorale: 5 },
    wrongConsequences: { strategicPosition: -8, teamMorale: -6, executionRisk: 8 },
    traps: [
      'Performance dashboards are macro arguments in response to specific accusations — the board will notice the pivot.',
      'Source investigation before board preparation signals your first concern was political, not operational.',
    ],
  },

]

// Fast lookup map for consequence case retrieval by ID
export const CONSEQUENCE_MAP = new Map(CONSEQUENCE_CASES.map(c => [c.id, c]))
