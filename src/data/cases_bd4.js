export const CASES_BD4 = [
  {
    id: "PRM01",
    category: "Partner Relations",
    difficulty: 1,
    scenario: "You are about to conduct your first Quarterly Business Review with a new reseller partner. They have been active for four months and closed two deals totaling $85K ARR. They are enthusiastic but have given you minimal pipeline visibility. You want the QBR to be useful rather than a formality.",
    quote: "\"This is our first formal QBR. I want it to actually change something.\"",
    options: [
      "Structure the QBR around three questions: what is working in their sales motion, where are they stuck, and what investment from you would unlock the next level of pipeline?",
      "Use the QBR to set pipeline expectations for Q2 and hold them accountable to a number.",
      "Use the QBR to review the two deals they closed and celebrate the wins.",
      "Use the QBR to assess whether the partner is worth continuing to invest in."
    ],
    correct: 0,
    consequences: {"growth":10,"customerTrust":10,"teamMorale":10,"executionRisk":-5},
    explanation: "An effective first QBR builds a collaborative partnership dynamic, not an accountability dynamic. The three-question structure surfaces what the partner needs to scale — whether that is better enablement, co-sell support, marketing materials, or introductions to specific customers. Holding them to a pipeline number after four months before you know what is blocking them is accountability without data. Celebration without diagnosis misses the opportunity.",
    framework: "Partner QBR structure — what's working, where are you stuck, what unlocks the next level",
    principle: "The most valuable QBR question is not \"what did you close?\" It is \"what would make you close twice as much?\"",
    traps: [
      "Celebrating wins without diagnosing what unlocks the next stage produces a comfortable meeting with no actionable outcome.",
      "Pipeline accountability before you understand what is blocking the partner creates pressure without a path to improvement.",
      "Using a QBR with a four-month-old partner as an evaluation exercise sends a message that the relationship is probationary, not collaborative."
    ]
  },
  {
    id: "PRM02",
    category: "Partner Relations",
    difficulty: 2,
    scenario: "A partner who has been in your program for 11 months has generated zero revenue, attended zero training sessions, and not responded to three outreach attempts in the last two months. Your partner agreement requires 30-day written notice of termination. Your head of partnerships wants to terminate. A junior team member argues you should try one more time.",
    quote: "\"Zero revenue, zero engagement, eleven months. What are we waiting for?\"",
    options: [
      "Try one more outreach — perhaps they have had internal changes that explain the silence.",
      "Send a final notice: \"We are preparing to close your partner account in 30 days unless we receive a response and a meeting scheduled by [specific date].\" Then terminate if there is no response.",
      "Issue the 30-day termination notice immediately — the data makes the decision clear.",
      "Downgrade to an inactive partner tier rather than terminating — preserve the relationship in case they re-engage."
    ],
    correct: 1,
    consequences: {"profitability":5,"teamMorale":5,"strategicPosition":5,"executionRisk":-5},
    explanation: "A final notice with a specific response deadline is both professional courtesy and a clean process step before termination. It gives the partner a final opportunity to re-engage while making the consequence of continued silence explicit. This is not a fourth outreach attempt — it is a formal notice that the relationship is ending unless they engage. It protects you from any future claim that termination was without warning.",
    framework: "Partner termination process — final notice with explicit deadline before executing termination",
    principle: "Always send one formal notice before terminating. Not to give them another chance — to document that they had one.",
    traps: [
      "An informal fourth outreach repeats the pattern that has already failed three times without adding any accountability structure.",
      "Immediate termination without a final formal notice skips a procedural step that protects you legally and professionally.",
      "An inactive tier for a partner who has generated zero value and zero engagement maintains overhead without any realistic path to activation."
    ]
  },
  {
    id: "PRM03",
    category: "Partner Relations",
    difficulty: 2,
    scenario: "Your partner's lead salesperson — the individual who personally sourced all four of the deals they have closed — has resigned. The partner's company says they are recruiting a replacement but the new hire will take 60-90 days to ramp. Your pipeline review shows three active opportunities that were being managed by the departing salesperson.",
    quote: "\"The person who made this partnership work just left. What do we do with the three open deals?\"",
    options: [
      "Trust the partner to manage the transition — personnel changes are their responsibility.",
      "Take over the three opportunities directly — a partner in transition cannot manage enterprise deals.",
      "Offer to co-sell the three active opportunities directly with the partner's management while they ramp the new hire.",
      "Pause all three deals until the new hire is ramped to avoid confusing the customer with multiple contacts."
    ],
    correct: 2,
    consequences: {"customerTrust":15,"growth":10,"executionRisk":-5,"teamMorale":5},
    explanation: "Active deals cannot afford 60-90 days of reduced attention during a partner sales transition. Offering to co-sell with the partner's management preserves customer relationship continuity, keeps the deals moving, and builds goodwill with the partner's leadership who are managing the transition stress. This is the moment when being an engaged partner earns long-term loyalty — and when passive partners lose deals.",
    framework: "Partner transition support — co-sell during personnel gaps to protect mutual pipeline",
    principle: "The deals at risk during a partner personnel transition are not their problem to solve alone. They are your problem to solve together.",
    traps: [
      "Leaving the partner to manage a three-deal transition without support while ramping a new hire risks all three opportunities going cold.",
      "Taking over the deals directly displaces the partner from their own customer relationships and signals you will sideline them when it is convenient.",
      "Pausing active enterprise deals for 60-90 days while a new hire ramps is not a competitive response — other vendors will continue selling."
    ]
  },
  {
    id: "PRM04",
    category: "Partner Relations",
    difficulty: 3,
    scenario: "Your top partner has been approached by a competitor who has offered them a higher revenue share and a dedicated partner success resource. The partner is signaling they may shift their focus. They currently represent $1.1M of your partner-sourced ARR. You need to decide how to respond.",
    quote: "\"The competitor is offering more. We need to decide if we match or let them walk.\"",
    options: [
      "Match the competitor's revenue share immediately — retaining $1.1M ARR justifies the economics.",
      "Do not match — setting a precedent of matching competitive offers invites every partner to negotiate against you using competitor pressure.",
      "Offer a one-time retention bonus rather than a structural revenue share increase.",
      "Have a direct executive-level conversation to understand what they actually value — higher revenue share may be a proxy for frustration with support, enablement, or product roadmap concerns."
    ],
    correct: 3,
    consequences: {"growth":5,"customerTrust":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "Partners who cite a competitor offer are often communicating a unmet need through a financial proxy. The revenue share number may be the stated reason, but the actual reason is frequently a roadmap gap, a support shortfall, or a feeling of being undervalued. An executive conversation to understand the real need often produces a solution that costs less than matching the revenue share and addresses the underlying issue. If the real reason truly is economics, you have better data to make the matching decision.",
    framework: "Partner retention — diagnose the real reason before matching the stated demand",
    principle: "A partner who leads with a competitor's better terms is usually telling you about a problem, not asking for money. Find the real problem first.",
    traps: [
      "Matching immediately rewards the pressure tactic and creates the expectation that every future competitive offer will be matched.",
      "Refusing to engage on a $1.1M partner relationship because of a precedent concern is commercially rigid — the precedent risk is manageable, the revenue loss is not.",
      "A retention bonus addresses the short-term defection risk but does not resolve the underlying reason the partner was receptive to the competitor in the first place."
    ]
  },
  {
    id: "PRM05",
    category: "Partner Relations",
    difficulty: 1,
    scenario: "A partner has been asking for six months about your product's roadmap in their vertical — specifically, whether you will build a feature their enterprise customers consistently request. You have delayed giving a clear answer because the feature is not confirmed on the roadmap. The partner is now saying they cannot continue investing in your product without roadmap visibility.",
    quote: "\"Six months of vague answers is not a partnership. Tell us what is on the roadmap.\"",
    options: [
      "Be direct: tell them whether the feature is under active consideration, what the timeline uncertainty is, and what customer evidence would help prioritize it. Give them a real answer, even if the answer is \"not yet.\"",
      "Continue to defer the answer until the roadmap is confirmed — committing to unconfirmed features creates false expectations.",
      "Give them a full internal roadmap view under NDA — they have earned the transparency.",
      "Add the feature to the roadmap to retain the partner — partner feedback is valid demand signal."
    ],
    correct: 0,
    consequences: {"customerTrust":15,"teamMorale":5,"strategicPosition":5,"executionRisk":-5},
    explanation: "Six months of deferred answers is not protecting confidentiality — it is eroding trust. A partner who is investing time and resources to sell your product deserves a real answer. \"Under consideration but not confirmed, here is what would help prioritize it\" is an honest answer that respects their investment and gives them a constructive path to influence the roadmap. Vague delays are worse for the relationship than a clear \"not currently prioritized.\"",
    framework: "Partner roadmap communication — honest uncertainty beats persistent vagueness",
    principle: "A vague roadmap answer six months in a row is not caution. It is a broken commitment to the partnership. Give a real answer.",
    traps: [
      "Full internal roadmap visibility creates commercial commitments and competitive exposure that a tiered partner-facing roadmap avoids.",
      "Continuing to defer the answer past six months is a pattern that has already damaged the relationship and will not produce a better outcome with more time.",
      "Adding a feature to the roadmap to retain one partner bypasses the PM prioritization process and creates a commitment that may not reflect actual strategic priorities."
    ]
  },
  {
    id: "PRM06",
    category: "Partner Relations",
    difficulty: 2,
    scenario: "You have invested 18 months building a strong relationship with a Systems Integrator. The primary relationship is with their Practice Director — the person who championed your product internally, built the team's certification, and sourced three significant deals. That Practice Director has just announced they are leaving to join a competitor. You have no relationship with anyone else at the SI.",
    quote: "\"He was the partnership. Now he is leaving. Do we still have a partnership?\"",
    options: [
      "Focus on maintaining the relationship with the departing Practice Director — follow them to the competitor and explore a new partnership there.",
      "Immediately contact the SI's leadership to introduce yourself, understand who the successor will be, and begin a transition relationship before the Practice Director's last day.",
      "Pause all partnership activities until the successor is identified and assess whether the partnership is worth restarting from scratch.",
      "Use the transition as an opportunity to renegotiate better terms with the SI's new leadership."
    ],
    correct: 1,
    consequences: {"customerTrust":10,"growth":5,"strategicPosition":10,"executionRisk":-5},
    explanation: "Single-threaded partnerships are a structural risk — when the champion leaves, the partnership can collapse. The window before the Practice Director's last day is critical: they can facilitate introductions, brief the successor on the partnership's history, and endorse the continuation. An immediate transition engagement, initiated before they leave, converts a single-threaded risk into a multi-threaded relationship while their credibility is still fully active at the SI.",
    framework: "Single-threaded partnership risk mitigation — use the transition window before it closes",
    principle: "A single-threaded partnership is not a partnership — it is a relationship with one person. The day they leave is the day you must build the second thread.",
    traps: [
      "Following the champion to a competitor creates a new relationship while abandoning the institutional partnership you invested 18 months building.",
      "Pausing all activities while waiting for the successor creates a months-long gap where the SI will build alternative relationships.",
      "Renegotiating terms during a transition exploits a moment of vulnerability and is a reputation-damaging move in the partner ecosystem."
    ]
  },
  {
    id: "PRM07",
    category: "Partner Relations",
    difficulty: 3,
    scenario: "You have discovered that one of your reseller partners has been telling prospects that your product is \"being rebuilt from scratch\" and will not be stable for another 18 months — a claim that is entirely false. This misinformation has damaged at least two deals and confused several prospects who asked your direct team about it.",
    quote: "\"Our partner is actively spreading false information about our product.\"",
    options: [
      "Terminate the partnership immediately — a partner who lies about your product is not a partner.",
      "Issue a cease-and-desist through your legal team — false commercial statements are actionable.",
      "Contact the partner's leadership directly, present the documented instances, and require immediate correction with the affected prospects.",
      "Address the affected prospects directly with accurate information and let the partner know their behavior has been documented."
    ],
    correct: 2,
    consequences: {"customerTrust":15,"strategicPosition":10,"executionRisk":-10,"growth":5},
    explanation: "The first response to documented partner misinformation is a direct, documented leadership conversation — not legal action, and not unilateral termination without prior engagement. The partner's leadership may not know this is happening, or this may be a rogue individual rather than company-level behavior. A direct conversation with specific documentation gives the partner's leadership a factual basis to act internally and correct the affected prospects. If they refuse to act, termination and legal options become appropriate.",
    framework: "Partner misinformation response — document, confront leadership, require correction before escalation",
    principle: "Partner misinformation requires a direct documented conversation before termination. Leadership may not know. Give them the chance to fix it.",
    traps: [
      "Immediate termination before contacting the partner's leadership may be bypassing a fixable situation and creates a more adversarial legal and commercial exit.",
      "A cease-and-desist as a first response escalates a potentially manageable situation to legal conflict before internal resolution is attempted.",
      "Correcting prospects and merely notifying the partner without requiring a direct correction and commitment to change allows the behavior to continue."
    ]
  },
  {
    id: "PRM08",
    category: "Partner Relations",
    difficulty: 2,
    scenario: "A partnership that was strong for two years has gone cold over the last six months. Pipeline dried up, your contact stopped returning calls, and the partner has not attended any of your joint events. There has been no formal communication that the partnership is ending — it is simply inactive. You want to understand whether this is recoverable.",
    quote: "\"Two years of strong partnership, six months of silence. Something changed.\"",
    options: [
      "Send a formal partnership review notice — if they do not respond, begin the termination process.",
      "Accept that the partnership has run its natural course and focus resources on newer, more active partners.",
      "Invest in a new co-marketing initiative to re-energize the partnership with fresh activity.",
      "Request an executive-level meeting specifically to understand what changed — not to salvage the relationship, but to learn the honest reason for the silence."
    ],
    correct: 3,
    consequences: {"strategicPosition":10,"teamMorale":5,"customerTrust":5,"executionRisk":-5},
    explanation: "Silent partnership deterioration almost always has a specific cause — a product gap, a competitive relationship the partner developed, an internal strategy change, or a relationship failure. Understanding the real cause serves two purposes: if the cause is fixable, you may recover a productive partnership; if it is not, you understand a pattern that may affect other partners and can avoid repeating it. A co-marketing initiative without diagnosis applies resources to a problem you do not understand.",
    framework: "Partnership autopsy — understand the cause of silence before deciding to salvage or close",
    principle: "A silent partnership has a reason. Find the reason before you invest resources to fix it or write it off.",
    traps: [
      "A formal review notice when the relationship has already deteriorated is more likely to trigger a formal termination than a renewal of engagement.",
      "Co-marketing investment in a cold partnership without understanding why it went cold applies resources to an undiagnosed problem.",
      "Accepting silence without diagnosis misses the learning opportunity — you do not know if this pattern is isolated or systemic."
    ]
  },
  {
    id: "PRM09",
    category: "Partner Relations",
    difficulty: 1,
    scenario: "You have three partner success managers on your team. Each manages approximately 8 partners. Your fastest-growing segment has 6 highly active partners generating most of your channel revenue, while the other 18 partners are low-engagement or developing. You need to decide how to allocate partner success time.",
    quote: "\"Twenty-four partners, three PSMs. Who gets the most attention?\"",
    options: [
      "Allocate PSM time proportional to partner revenue and growth trajectory — high-performing and high-potential partners get disproportionate attention.",
      "Assign one PSM exclusively to the six highest-revenue partners and two PSMs to the remaining eighteen.",
      "Distribute PSM time equally across all 24 partners — fairness prevents resentment.",
      "Let partners self-select for PSM engagement level based on their own needs."
    ],
    correct: 0,
    consequences: {"growth":15,"profitability":10,"teamMorale":5,"executionRisk":-5},
    explanation: "Partner success resources should be allocated where they generate the most return. High-revenue, high-engagement partners have proven their potential and need depth of support to sustain and grow. Low-engagement partners are served well by lighter-touch digital resources, group webinars, and community programs. Proportional allocation is not unfair to smaller partners — it is appropriate for where they are in the relationship lifecycle.",
    framework: "PSM resource allocation — proportional investment based on revenue and growth trajectory",
    principle: "Allocate partner success resources like a VC portfolio. Concentrate on the performers, provide infrastructure for the rest.",
    traps: [
      "Equal time across all partners means your highest-value partners get the same attention as partners who have generated nothing — a poor return on partner success investment.",
      "A dedicated PSM for six partners and two PSMs for eighteen creates a disparity that high-performing partners will notice and resent if they feel underserved relative to the attention their revenue deserves.",
      "Self-selection for engagement often means your most demanding low-revenue partners consume the most PSM time, inverting the optimal allocation."
    ]
  },
  {
    id: "PRM10",
    category: "Partner Relations",
    difficulty: 3,
    scenario: "You have received credible intelligence that one of your Gold-tier reseller partners is actively recruiting two of your senior partner success managers to join their firm. They have made direct approaches without notifying you. This creates both a talent risk and a partner trust issue — the same partner you are investing in is potentially undermining your team.",
    quote: "\"The partner we are helping the most is trying to hire the people helping them.\"",
    options: [
      "Immediately terminate the partnership — recruiting from your team is a direct violation of the relationship.",
      "Have a direct executive-level conversation with the partner: acknowledge what you have learned, state clearly that recruiting from your team is incompatible with a healthy partnership, and give them the opportunity to respond.",
      "Add a non-solicitation clause to your partner agreement prospectively and address the current situation informally.",
      "Do nothing about the recruitment but focus on retaining the at-risk employees through compensation and development opportunities."
    ],
    correct: 1,
    consequences: {"teamMorale":10,"strategicPosition":10,"executionRisk":-10,"customerTrust":5},
    explanation: "Unaddressed partner poaching erodes the trust foundation of the relationship and signals to your team that the behavior is acceptable. A direct executive conversation — not a legal threat, not termination — puts the issue on the table professionally. The partner may claim ignorance of the individual recruiter's approach, may agree to stop, or may reveal that the relationship has deteriorated further than you realized. All three outcomes are better than silence.",
    framework: "Partner trust violation response — direct executive conversation before escalation",
    principle: "Never let a partner trust violation go unaddressed. Name it directly. Give them the chance to explain or correct. Then decide.",
    traps: [
      "Immediate termination of a Gold-tier partnership over recruitment approaches that may be unauthorized by the partner's leadership is a disproportionate first response.",
      "A prospective non-solicitation clause does not address the current situation and the informal approach lacks the seriousness the violation deserves.",
      "Addressing only retention without confronting the partner allows the behavior to continue and signals that poaching your team carries no consequences."
    ]
  },
  {
    id: "CRD01",
    category: "Corporate Development",
    difficulty: 1,
    scenario: "Your company needs a contract lifecycle management (CLM) capability to serve enterprise customers. You can build it internally in 20 weeks, acquire a small CLM startup for $3M, or integrate with an established CLM vendor through a partnership. Your CTO prefers building for control, your CFO prefers the partnership for cost, and your CEO wants to decide quickly.",
    quote: "\"Build, buy, or partner. Three opinions in the room. Make the case.\"",
    options: [
      "Build internally — control over the roadmap and product experience justifies the 20-week investment.",
      "Acquire the startup — $3M buys an existing product, an engineering team, and an immediate go-to-market capability.",
      "Evaluate all three against the same criteria: time-to-customer-value, total cost of ownership, strategic importance of owning the capability, and integration complexity.",
      "Partner with the established CLM vendor — fastest time-to-market, lowest capital commitment, and customer value immediately."
    ],
    correct: 2,
    consequences: {"strategicPosition":10,"executionRisk":-10,"growth":5,"profitability":5},
    explanation: "Build vs. buy vs. partner is a framework decision, not a preference contest. The right answer depends on: how central CLM is to your differentiated value (build if core, partner if not), whether the startup's team and technology are worth $3M versus the build cost (buy if yes), and whether the partnership produces adequate customer value without strategic lock-in. Applying consistent criteria produces a defensible decision that all three executives can accept because the logic is explicit.",
    framework: "Build vs. Buy vs. Partner framework — time-to-value, total cost, strategic importance, integration complexity",
    principle: "Build, buy, or partner decisions made by function preference produce the wrong answer more often than decisions made by explicit criteria.",
    traps: [
      "Building for control when the capability is adjacent rather than core is the most expensive way to acquire a feature your customers need.",
      "Paying $3M for a startup without evaluating whether the acquisition produces better outcomes than building or partnering is capital allocation based on urgency, not analysis.",
      "Partnership is fastest but may create long-term dependency in a capability that enterprise customers expect you to own and control."
    ]
  },
  {
    id: "CRD02",
    category: "Corporate Development",
    difficulty: 2,
    scenario: "A strategic partner you have worked with for two years has fallen on hard times — their Series B fell through and they are running out of runway in four months. They have a technology asset you use in your platform and a team of eight engineers who know your product deeply. They are asking if you would consider an acquisition. The team is strong; the company is struggling.",
    quote: "\"The company is failing. But the team knows our product better than almost anyone.\"",
    options: [
      "Acquire the full company including all assets and technology for a price reflecting their distressed state.",
      "Decline the acquisition — buying a struggling company introduces financial and operational risk.",
      "Provide a bridge loan to extend their runway and revisit acquisition at a healthier price in six months.",
      "Explore an acqui-hire structure: hire the key engineering talent directly, license or acquire the specific technology asset you use, and wind down the commercial entity."
    ],
    correct: 3,
    consequences: {"strategicPosition":10,"growth":5,"executionRisk":-10,"teamMorale":5},
    explanation: "An acqui-hire is precisely designed for this situation: the company's value is in the team and the specific technology, not in the commercial entity or its liabilities. Acquiring the full distressed company means assuming their legal obligations, customer contracts, and unknown liabilities. An acqui-hire isolates the assets you actually want — the engineers and the technology — without the associated risk of the full company acquisition.",
    framework: "Acqui-hire structure — acquire assets (people and IP), not the company and its liabilities",
    principle: "When the value is the team and the technology, buy the team and the technology. Do not buy the company they happen to work for.",
    traps: [
      "A full distressed acquisition at a low price still inherits all unknown liabilities, customer obligations, and legal exposure of the struggling entity.",
      "Declining entirely when the specific assets you need are available at a favorable price misses a strategic opportunity with a known team.",
      "A bridge loan extends the timeline and their runway but does not resolve the acquisition question — in six months you are in the same decision with more time spent."
    ]
  },
  {
    id: "CRD03",
    category: "Corporate Development",
    difficulty: 2,
    scenario: "A venture-backed startup in your ecosystem is growing rapidly and building capabilities that are highly complementary to your product. They have 180 customers, $2M ARR, and just raised a Series A. You have the opportunity to make a $500K strategic investment for a 3% equity stake. This would give you board observer rights and early intelligence on their product direction.",
    quote: "\"A strategic investment buys us a seat at the table. But is a three percent stake worth half a million?\"",
    options: [
      "Make the investment only if you can negotiate a right of first refusal on any future acquisition — convert the strategic investment into a path to full ownership if they continue to grow.",
      "Decline — a 3% stake is too small to materially influence the company and $500K is capital better deployed in your own operations.",
      "Make the investment — board observer rights and early intelligence are worth $500K as strategic value regardless of financial return.",
      "Propose a commercial partnership first — if that proves valuable, revisit the investment with better pricing at their Series B."
    ],
    correct: 0,
    consequences: {"strategicPosition":10,"growth":5,"cash":-5,"executionRisk":-5},
    explanation: "A right of first refusal converts a 3% observer-rights investment into a strategic option on the full company. Without the ROFR, you pay $500K for intelligence and a minority seat while remaining a passive observer as they grow toward a potential acquisition by your competitor. With the ROFR, you have an embedded option to acquire the company you are watching and helping develop. The ROFR is the clause that makes the investment strategic rather than passive.",
    framework: "Strategic investment with ROFR — convert an observer stake into an acquisition option",
    principle: "A strategic investment without a right of first refusal is intelligence with no leverage. Add the ROFR to convert observation into optionality.",
    traps: [
      "Board observer rights and intelligence at $500K without an ROFR provides value that evaporates if a competitor acquires the company.",
      "Declining the investment entirely forfeits the earliest and cheapest opportunity to establish a strategic position in a fast-growing complementary company.",
      "Waiting until the Series B for better pricing after the value has been de-risked produces a more expensive entry with the same strategic value."
    ]
  },
  {
    id: "CRD04",
    category: "Corporate Development",
    difficulty: 3,
    scenario: "An industry analyst report has ranked your company in the top five for your category. A Fortune 500 strategic buyer in an adjacent market has reached out through an investment banker asking if you would be open to an acquisition conversation. You are not actively looking to sell. Your company is at $8M ARR with strong growth. Your founding team is split — two founders want to explore, one does not.",
    quote: "\"We are not for sale. But the right buyer at the right number changes every calculation.\"",
    options: [
      "Decline immediately — taking an acquisition meeting signals to your team and market that you are looking to exit.",
      "Consult legal and financial advisors before responding — an inbound acquisition inquiry at $8M ARR requires proper process.",
      "Respond through the banker that you are focused on independent growth but would consider a strategic partnership conversation.",
      "Agree to an exploratory conversation — understanding what the strategic buyer values about you is intelligence that has value independent of whether the deal proceeds."
    ],
    correct: 1,
    consequences: {"strategicPosition":10,"cash":5,"executionRisk":-10,"growth":5},
    explanation: "An inbound acquisition inquiry from a Fortune 500 through a banker is a significant commercial event that deserves proper process, not a hasty response. Your legal and financial advisors help you understand your fiduciary obligations, how to structure an NDA before sharing any information, whether a fairness opinion is warranted, and how to handle the founder split constructively. The advisor consultation informs the response — it does not delay it unnecessarily.",
    framework: "Inbound M&A response process — advisor consultation before any substantive engagement",
    principle: "An inbound acquisition inquiry deserves process, not instinct. Get your advisors on the phone before you respond.",
    traps: [
      "Declining immediately forecloses a potentially significant value event without understanding what the buyer values or what they would offer.",
      "An exploratory conversation without NDA and advisor protection may inadvertently share competitively sensitive information or create an implied commitment.",
      "A \"partnership instead of acquisition\" response is a deflection that serious strategic buyers recognize — you lose credibility without learning anything."
    ]
  },
  {
    id: "CRD05",
    category: "Corporate Development",
    difficulty: 2,
    scenario: "You have operated a successful OEM agreement for 18 months — your core technology is embedded in a larger platform's product under their brand. The OEM generates $420K in annual royalties with minimal sales effort. The platform partner has just announced a product consolidation that will retire the module powered by your technology in 12 months. Your revenue stream ends at their product retirement.",
    quote: "\"Eighteen months of reliable royalties. Twelve months until it disappears.\"",
    options: [
      "Accept the retirement gracefully — OEM revenue streams have natural end dates and $420K over 18 months was a positive outcome.",
      "Immediately begin identifying replacement OEM opportunities to backfill the revenue before it expires.",
      "Negotiate a wind-down arrangement: a 12-month extended royalty at the same rate as a transition payment, and an introduction to their customers who rely on the retiring module.",
      "Pursue an acquisition of the retiring module's customer base — if their product is being retired, those customers will need an alternative."
    ],
    correct: 2,
    consequences: {"cash":10,"growth":10,"customerTrust":5,"strategicPosition":5},
    explanation: "The 12-month retirement window is a negotiating opportunity, not just a countdown. The platform partner owes their customers a transition path — and introducing those customers to your product directly satisfies both their obligation and your growth need. Extended royalties acknowledge the disruption to your revenue planning. This is a collaborative negotiation where both parties have real interests that align: they need a customer transition path, you need revenue continuity and customer access.",
    framework: "OEM wind-down negotiation — extended royalties plus customer introduction converts exit into growth",
    principle: "When an OEM partner retires your module, their customers need somewhere to go. Position yourself as that destination.",
    traps: [
      "Accepting the retirement without negotiating leaves extended royalty payments and customer introductions on the table.",
      "Backfilling with replacement OEM opportunities is a parallel track that should run alongside the wind-down negotiation, not instead of it.",
      "Attempting to acquire the retiring module's customer base without the partner's cooperation creates an adversarial dynamic that will produce less customer conversion than a collaborative introduction."
    ]
  },
  {
    id: "CRD06",
    category: "Corporate Development",
    difficulty: 3,
    scenario: "Your company has grown to $12M ARR. Your board is asking whether to pursue a Series C for continued independent growth or begin a structured process to explore strategic acquisition. Your two largest strategic acquirer candidates — both of whom you know well from partnership discussions — have both recently made acquisitions in adjacent spaces. The window to sell at a premium may be closing.",
    quote: "\"Independent growth path or strategic sale. The board is split. You need to present a recommendation.\"",
    options: [
      "Recommend the Series C — independent growth at $12M ARR preserves optionality and maximizes eventual outcome.",
      "Recommend a structured sale process immediately — recent comparable acquisitions suggest premium pricing will compress as the strategic buyers satisfy their needs.",
      "Defer the recommendation — this is a board decision that should not be driven by BD leadership.",
      "Recommend running both tracks simultaneously: begin Series C conversations and reach out to strategic buyers, using each track to create leverage in the other."
    ],
    correct: 3,
    consequences: {"cash":15,"growth":10,"strategicPosition":15,"executionRisk":-10},
    explanation: "Running parallel tracks is the standard practice for maximizing outcome at this stage. Series C interest from investors establishes a credible independent valuation that sets a floor for acquisition conversations. Strategic buyer conversations may produce premium offers that exceed the Series C path. Each track creates leverage in the other — the existence of a viable Series C makes acquirers more urgent, and an acquisition offer creates investor urgency. The tracks are not mutually exclusive until you choose to close one.",
    framework: "Dual-track process — Series C and strategic sale simultaneously creates maximum leverage",
    principle: "Run both tracks. Independent valuation is the floor that makes strategic buyers move faster. Strategic interest is the ceiling that makes investors value more.",
    traps: [
      "Series C without any strategic exploration may miss a premium acquisition window that narrows as comparable acquisitions are completed.",
      "A structured sale process without Series C leverage gives acquirers the full negotiating advantage — they know there is no competing capital path.",
      "Deferring a strategic recommendation to \"the board alone\" when you have the deepest partnership and market intelligence abdicates your most valuable contribution to the decision."
    ]
  },
  {
    id: "CRD07",
    category: "Corporate Development",
    difficulty: 2,
    scenario: "A large enterprise software company wants to embed your analytics capability into their platform through a licensing agreement. They will pay a $200K upfront license fee plus $50K per year in ongoing royalties. In the license, they want the right to sublicense your technology to their customers. You are concerned that sublicensing rights could enable them to eventually replace you with a native solution built on your own IP.",
    quote: "\"Two hundred thousand upfront. But the sublicense right could let them clone us.\"",
    options: [
      "Accept the license but restrict sublicensing: their customers can access the capability through the platform, but the sublicense cannot be used to develop derivative products or rebuild the capability natively.",
      "Decline the sublicense right — the risk of your IP being used to build a replacement is too high.",
      "Accept the licensing agreement — $200K upfront and recurring royalties is strong near-term revenue.",
      "License a limited, non-core version of your analytics capability without the features that give you competitive differentiation."
    ],
    correct: 0,
    consequences: {"profitability":5,"strategicPosition":10,"executionRisk":-10,"cash":5},
    explanation: "Sublicensing rights for customer access are standard and necessary for the licensor to deliver value to their platform customers. Sublicensing rights that enable derivative product development are the IP risk. The distinction — use rights vs. development rights — is a standard licensing construct that most IP attorneys can draft in a few hours. Restricting sublicensing to access-only preserves the commercial value of the agreement while eliminating the IP substitution risk.",
    framework: "IP licensing with sublicense restrictions — use rights vs. development rights is the critical distinction",
    principle: "Sublicense for access is necessary. Sublicense for development is how your technology becomes their competitive advantage. Restrict the second, allow the first.",
    traps: [
      "Accepting open sublicensing rights potentially hands a large enterprise the building blocks to replicate your capability and exit the licensing agreement.",
      "Declining sublicensing entirely makes the license commercially unworkable — the licensor cannot deliver your capability to their customers without sublicensing rights.",
      "Licensing a limited version reduces the IP risk but also reduces the commercial value enough that the $200K upfront may be unobtainable."
    ]
  },
  {
    id: "CRD08",
    category: "Corporate Development",
    difficulty: 1,
    scenario: "You are evaluating a potential acquisition of a small company with $800K ARR, a six-person team, and a product that is highly complementary to yours. Your target acquisition price is $4M. During due diligence, you discover that two of their six customers represent 70% of ARR, both customers are on month-to-month contracts, and one of the two key customers has already begun evaluating alternatives.",
    quote: "\"The product is right. But seventy percent of their revenue is two customers on monthly contracts.\"",
    options: [
      "Proceed with the acquisition at $4M — the product and team justify the price regardless of customer concentration.",
      "Restructure the offer: reduce the upfront payment to $2M with an earnout of up to $2M contingent on retaining both key customers through 12-month contracts post-acquisition.",
      "Withdraw from the acquisition — customer concentration at this level is an unacceptable risk.",
      "Acquire only if both key customers will sign 12-month contracts before closing."
    ],
    correct: 1,
    consequences: {"profitability":10,"executionRisk":-15,"strategicPosition":5,"cash":5},
    explanation: "Customer concentration risk is real but the solution is deal structure, not withdrawal. An earnout tied to customer retention aligns the seller's incentives with retention — they are motivated to transition relationships effectively because their payout depends on it. A flat $4M acquisition on the current customer base prices in full value before the concentration risk is resolved. Requiring both customers to sign pre-close is the cleanest solution but may be difficult to execute without triggering their evaluation processes.",
    framework: "Acquisition earnout structure — tie payout to risk resolution, align seller incentives to post-close outcomes",
    principle: "Never pay full price for a concentrated revenue base. Use earnouts to price the risk and align the seller to resolving it.",
    traps: [
      "Full price acquisition with 70% customer concentration on month-to-month contracts could lose $560K ARR in the first quarter post-close.",
      "Withdrawal over a structurally solvable risk misses a potentially valuable product and team acquisition.",
      "Requiring pre-close customer signatures may accelerate the evaluation already underway and trigger the churn you are trying to prevent."
    ]
  },
  {
    id: "CRD09",
    category: "Corporate Development",
    difficulty: 3,
    scenario: "Your company is at a crossroads. You can continue on your current growth path toward a potential IPO in three to four years, or accept a strategic acquisition offer that values you at $85M — a 7x ARR multiple based on your $12M ARR. Your investors purchased at a 4x ARR average. The acquirer is a strong strategic fit. Your founding team wants to continue building; your board is interested in the return.",
    quote: "\"Seven times ARR today, or take the company public in three years at a higher multiple.\"",
    options: [
      "Accept the $85M offer — a certain 7x return versus an uncertain IPO path in a volatile market is a rational choice.",
      "Decline and pursue the IPO — you are building something meaningful and the long-term value is substantially higher.",
      "Use the offer as leverage: counter with $110M or request exclusivity while you run a 45-day process to determine if there is a higher strategic offer available.",
      "Request a fairness opinion from an independent bank before making any decision."
    ],
    correct: 2,
    consequences: {"cash":15,"strategicPosition":15,"growth":10,"executionRisk":-10},
    explanation: "A first acquisition offer is rarely the best offer. Using the $85M as a floor — counter at $110M and run a 45-day process — serves two purposes: it may produce a higher offer from the same buyer (many first offers have 20-30% room), and a competitive process with other potential acquirers may surface a higher-valuing buyer. The board's interest in the return and the founders' desire to continue building are both better served by knowing whether $85M is the market price or just the first bid.",
    framework: "M&A counter-offer process — use the first offer as a floor, not a ceiling",
    principle: "The first acquisition offer is always lower than the ceiling. Counter and run a process before you decide whether to accept.",
    traps: [
      "Accepting the first offer at $85M without testing the market means you will never know if a $110M or $130M was available.",
      "Declining without counter-offering forecloses a potentially significant value event — and the IPO market in three to four years is genuinely uncertain.",
      "A fairness opinion is a process step after you have a clearer sense of market pricing — it does not replace running a counter and a competitive process."
    ]
  },
  {
    id: "CRD10",
    category: "Corporate Development",
    difficulty: 2,
    scenario: "You have been running a strategic partnership with a startup for 14 months. Through the partnership, you have developed deep knowledge of their technology, their customer base, and their team quality. They are now raising a Series A and have invited you to participate in the round as a strategic investor. Other investors are interested. You must decide in 72 hours.",
    quote: "\"Fourteen months of partnership intelligence. Seventy-two hours to decide on the investment.\"",
    options: [
      "Invest a smaller amount than initially planned and explicitly negotiate partnership terms that protect against conflict of interest.",
      "Decline — investing creates a conflict of interest that will complicate the partnership dynamic.",
      "Request a 2-week extension to conduct proper financial due diligence, even at the risk of missing the round.",
      "Invest immediately — fourteen months of diligence effectively has already been completed through the partnership."
    ],
    correct: 3,
    consequences: {"strategicPosition":15,"growth":10,"cash":-5,"executionRisk":-5},
    explanation: "Partnership diligence is often more valuable than financial due diligence for early-stage strategic investments. Fourteen months of working with a team reveals their execution capability, product quality, customer relationships, and leadership character in ways that a standard due diligence process cannot. The 72-hour window is normal for competitive Series A rounds. The partnership-derived intelligence is genuine diligence — act on it.",
    framework: "Partnership-informed strategic investment — operational diligence precedes financial diligence in strategic investing",
    principle: "Fourteen months of partnership is your due diligence. In a competitive Series A, that is enough to move with confidence.",
    traps: [
      "Declining to invest when you have superior information and a strategic rationale is unnecessary caution — conflict of interest is manageable with standard investment disclosures.",
      "Requesting a two-week extension in a competitive Series A will likely cause you to miss the round entirely — other investors will not wait for you.",
      "Investing a smaller amount than warranted out of conflict-of-interest concern dilutes your strategic position without materially reducing the conflict."
    ]
  },
]
