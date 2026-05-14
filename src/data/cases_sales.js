export const CASES_SALES = [
  {
    id: "SL-PM01",
    category: "Pipeline Management",
    difficulty: 2,
    scenario: "Your pipeline coverage is 2.8x quota with 6 weeks left in the quarter. Industry benchmark is 3x minimum. Your manager is pushing you to add more top-of-funnel activity immediately, but your existing deals are at late stages and need intensive attention. What do you prioritize?",
    quote: "Coverage is a lagging indicator — deal quality is what closes quarters.",
    options: [
      "Focus 80% on advancing existing late-stage deals; selectively add only high-quality net-new opps.",
      "Comply with manager's request and split time 50/50 between new prospecting and current deals.",
      "Halt all prospecting until you close the existing pipeline — you're close enough to make it.",
      "Ask your manager to assign an SDR to handle top-of-funnel while you close."
    ],
    correct: 0,
    consequences: {"growth":8,"profitability":5,"executionRisk":-6},
    explanation: "Late-stage deals have the highest conversion probability and the shortest time to revenue. Spreading attention equally dilutes close rates on deals that are almost won. The right move is to protect your closeable pipeline while adding only the most qualified new opportunities — ones that could realistically close this quarter. Blind compliance with a coverage metric at the expense of deal quality is a common trap.",
    framework: "Pipeline Prioritization: late-stage velocity beats top-of-funnel volume when time is short.",
    principle: "Close what's closeable before you plant what can't harvest this quarter.",
    traps: [
      "Treating coverage ratio as a hard rule regardless of deal stage mix",
      "Stopping prospecting entirely — dangerous for next quarter's pipeline",
      "Delegating to an SDR without ensuring handoff quality on late-stage deals"
    ]
  },
  {
    id: "SL-PM02",
    category: "Pipeline Management",
    difficulty: 2,
    scenario: "One of your top reps consistently submits deals to CRM only after they're already closed, making pipeline forecasts unreliable. She's your highest performer by revenue. When you address it, she says 'I don't want competitors to see my deals in the system.' What do you do?",
    quote: "Data hygiene is a team sport — one exception corrupts the whole forecast.",
    options: [
      "Make an exception — she's your top performer and her results speak for themselves.",
      "Explain why CRM data accuracy matters and set a non-negotiable 48-hour entry SLA for all deals.",
      "Escalate to her manager immediately to avoid appearing to favor her.",
      "Create a separate private pipeline tracker just for her deals to address her security concern."
    ],
    correct: 1,
    consequences: {"teamMorale":4,"executionRisk":-8,"strategicPosition":5},
    explanation: "Performance doesn't exempt anyone from process compliance — and the competitor visibility concern is almost always a rationalization. CRM hygiene is foundational to forecast accuracy, resource allocation, and deal support. A private tracker for one rep creates a two-tier system and signals to the team that rules are optional for top performers. Address it directly, acknowledge her concern, but enforce the standard with empathy and firmness.",
    framework: "Process Accountability: consistency matters more than accommodation, especially for high performers others watch.",
    principle: "The standard you walk past is the standard you accept.",
    traps: [
      "Using her revenue numbers to justify a permanent exception",
      "Immediate escalation before having the direct conversation yourself",
      "Creating workarounds that validate the behavior instead of changing it"
    ]
  },
  {
    id: "SL-PM03",
    category: "Pipeline Management",
    difficulty: 3,
    scenario: "You have a $2.1M deal that has been 'finalizing contracts' for 5 weeks. The champion says procurement is slow. You've submitted it as likely to close this quarter. With 2 weeks left, your VP asks you to reforecast it. Legal at the prospect says they need 3 more weeks minimum. What do you do?",
    quote: "A deal in procurement is not a deal in hand.",
    options: [
      "Keep it in this quarter's forecast — procurement delays are normal and the business decision is made.",
      "Push the champion to escalate internally to accelerate procurement as a condition of keeping priority.",
      "Move it to next quarter in your forecast and immediately brief your VP on the revised timeline.",
      "Offer a quarter-end discount to the champion to create urgency and get procurement to expedite."
    ],
    correct: 2,
    consequences: {"customerTrust":5,"executionRisk":-10,"profitability":3},
    explanation: "Forecasting a deal you know won't close is a credibility-destroying mistake. Legal saying 3 more weeks is hard data — it overrides your champion's optimism. The right move is to reforecast immediately, brief your VP proactively, and simultaneously work the champion on internal escalation. Discounting to manufacture urgency is a margin-destroying tactic that often backfires when procurement sees it as a signal you were overpriced to begin with.",
    framework: "Forecast Integrity: forecast what you can close, not what you want to close.",
    principle: "A forecast that protects your comfort is a forecast that destroys your credibility.",
    traps: [
      "Leaving a deal in forecast because 'the business decision is made' — procurement kills deals",
      "Reflexive discounting as a substitute for deal management",
      "Delaying the VP conversation hoping procurement moves faster"
    ]
  },
  {
    id: "SL-PM04",
    category: "Pipeline Management",
    difficulty: 2,
    scenario: "You suspect one of your reps is sandbagging — understating pipeline confidence to make quota easier to hit. His win rate on 'commit' deals is 94%, suggesting he only upgrades deals when they're already won. What's your approach?",
    quote: "Sandbagging is rational behavior in a broken incentive system.",
    options: [
      "Confront him directly with the data and put him on a performance improvement plan.",
      "Change the commission structure to reward pipeline accuracy, not just closed revenue.",
      "Accept it — a 94% commit accuracy is actually a good thing for planning.",
      "Analyze his pipeline patterns, have a coaching conversation around the data, and set mutual expectations on forecast accuracy."
    ],
    correct: 3,
    consequences: {"teamMorale":6,"executionRisk":-7,"growth":4},
    explanation: "Sandbagging is usually a rational response to bad incentives or fear of being held to inflated forecasts. Before escalating to discipline, understand why it's happening. A data-driven coaching conversation — showing the pattern without accusation — opens the door to honest dialogue. Then set shared expectations. Immediate PIP is disproportionate for what is essentially a trust and incentive problem. Accepting it ignores real damage to organizational planning and other reps' morale.",
    framework: "Behavior = Incentives + Environment: fix the system, not just the symptom.",
    principle: "Diagnose before you prescribe — sandbagging is a symptom, not the disease.",
    traps: [
      "Treating it as a performance issue before understanding the cause",
      "Accepting high commit accuracy as good without questioning what's missing",
      "Changing comp structure without addressing the underlying trust issue first"
    ]
  },
  {
    id: "SL-PM05",
    category: "Pipeline Management",
    difficulty: 1,
    scenario: "You're reviewing your deals and realize that 60% of your pipeline is with a single account — a large enterprise prospect. The deal could make your year if it closes, but if it slips or falls apart, you'll miss quota badly. What's your pipeline management response?",
    quote: "Concentration risk in pipeline is the same as concentration risk in investing.",
    options: [
      "Quietly diversify pipeline by prospecting additional accounts while maintaining strong engagement on the large deal.",
      "Focus everything on the large deal — it's too important to let slip by splitting attention.",
      "Tell your manager about the concentration risk immediately and ask for pipeline support.",
      "Accelerate the large deal by offering pricing incentives to reduce the timeline uncertainty."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"growth":6,"strategicPosition":4},
    explanation: "Pipeline concentration risk is a real problem even when the large deal looks solid. The right move is to actively build parallel pipeline so a single deal outcome doesn't determine your quarter. This doesn't mean abandoning the large deal — it means being disciplined about treating it as one path to quota, not the only path. Proactively briefing your manager is also wise, but the primary action is within your control: diversify.",
    framework: "Pipeline Diversification: no single deal should represent >40% of your quarter's number.",
    principle: "Build optionality in your pipeline the same way you'd build it in any portfolio.",
    traps: [
      "All-in on the large deal because the math looks compelling",
      "Offering discounts to accelerate a deal that may be on track — giving away margin unnecessarily",
      "Waiting to tell manager until the risk materializes"
    ]
  },
  {
    id: "SL-PM06",
    category: "Pipeline Management",
    difficulty: 2,
    scenario: "You're inheriting a territory mid-year. The previous rep's CRM data is a mess — many deals have no activity logged in 90+ days, stage definitions are inconsistent, and close dates are unrealistic. Your quota for the half is set based on this pipeline. What's your first move?",
    quote: "Inheriting a pipeline is inheriting someone else's assumptions — verify everything.",
    options: [
      "Start fresh — ignore the CRM data and build your own pipeline from scratch.",
      "Conduct rapid discovery calls on every deal in the pipeline to assess true status before committing to a forecast.",
      "Accept the pipeline as-is and ask your manager to reduce quota given the data quality issues.",
      "Flag the data issues to your manager and ask for a 30-day delay on your forecast commitment."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"customerTrust":6,"strategicPosition":5},
    explanation: "The only way to know what's real in an inherited pipeline is to talk to the customers. A rapid discovery sprint — even brief 15-minute calls — tells you which deals are alive, what the real decision timeline is, and where to focus energy. Ignoring the CRM and building from scratch throws away potentially real opportunities. Asking for quota relief or forecast delays before you have facts is premature and signals a lack of initiative.",
    framework: "Pipeline Audit: ground truth comes from customers, not from CRM fields.",
    principle: "Never forecast what you haven't verified — especially in an inherited book.",
    traps: [
      "Trusting inherited CRM data without validation",
      "Asking for quota adjustments before you've done your own discovery",
      "Starting entirely fresh and missing real opportunities buried in the old pipeline"
    ]
  },
  {
    id: "SL-PM07",
    category: "Pipeline Management",
    difficulty: 3,
    scenario: "Your company is changing CRM systems mid-quarter. The migration will leave 2 weeks where pipeline data is unreliable. Your VP wants you to freeze deal stage changes during the migration to prevent data corruption. But three of your deals are ready to advance. What do you do?",
    quote: "Process compliance has a cost — the question is whether you're paying it or someone else is.",
    options: [
      "Follow the freeze directive exactly — deal advancement can wait 2 weeks.",
      "Advance the deals in the old CRM before the migration cutover and document everything offline.",
      "Flag the conflict to your VP with specific deal details, asking for a migration exception on those three deals.",
      "Advance the deals in the new CRM anyway — business continuity outweighs data migration concerns."
    ],
    correct: 2,
    consequences: {"executionRisk":-6,"customerTrust":4,"strategicPosition":5},
    explanation: "This is a process-vs-business tension that requires escalation rather than unilateral action in either direction. Silently freezing active deals creates real customer relationship risk. Going rogue in the new CRM risks exactly the data corruption the freeze was designed to prevent. The right move is to proactively flag the specific conflict — 'here are three deals, here's the business impact of freezing them' — and ask for a formal exception. Let your VP make an informed decision.",
    framework: "Escalation Protocol: when directives conflict with customer reality, surface the conflict with specifics.",
    principle: "Don't choose between compliance and customers without giving your manager the chance to solve it.",
    traps: [
      "Blindly following the freeze without flagging real customer impact",
      "Taking unilateral action in either system without approval",
      "Vague escalation without specific deal context your VP needs to decide"
    ]
  },
  {
    id: "SL-PM08",
    category: "Pipeline Management",
    difficulty: 1,
    scenario: "You have 12 active opportunities. Industry research suggests AEs can effectively manage 8-10 deals simultaneously before quality degrades. You've noticed you're spending less time on later-stage deals because earlier-stage ones are demanding attention. What's the right response?",
    quote: "More pipeline isn't better pipeline — focus is what converts.",
    options: [
      "Keep all 12 — dropping deals feels like giving up potential revenue.",
      "Work longer hours temporarily until some deals close naturally and reduce the load.",
      "Ask for SDR support to manage the earlier-stage deals on your behalf.",
      "Qualify out the weakest 2-4 deals based on fit, urgency, and buyer engagement, and focus on the remainder."
    ],
    correct: 3,
    consequences: {"growth":7,"executionRisk":-6,"profitability":4},
    explanation: "Spreading attention across too many deals is a leading cause of late-stage slippage. The counterintuitive answer is to deliberately drop weak deals now — deals with poor qualification signals, disengaged champions, or unclear urgency. This concentrates your best effort on the deals most likely to close and prevents the quality decay that kills your win rate. Asking for SDR support on deals you own is misaligned — SDRs generate new pipeline, they don't manage existing ones.",
    framework: "Deal Focus: ruthless qualification at every stage, not just entry.",
    principle: "The best thing you can do for your strong deals is let go of your weak ones.",
    traps: [
      "Hoarding pipeline out of psychological attachment to volume",
      "Using SDRs to substitute for your own deal management",
      "Working harder as a substitute for working smarter on fewer deals"
    ]
  },
  {
    id: "SL-PM09",
    category: "Pipeline Management",
    difficulty: 2,
    scenario: "You've been offered a large inbound opportunity — $800K — but the prospect's procurement process is known to be 9-12 months, well beyond your quarterly targets. Your manager wants you to add it to pipeline immediately. You're skeptical it helps your near-term numbers. What's your position?",
    quote: "Not all revenue is equal — timing is part of the value equation.",
    options: [
      "Add it with an accurate projected close date and manage expectations with your VP about its impact on current-quarter performance.",
      "Add it to pipeline as requested — large deals are always worth pursuing regardless of timeline.",
      "Decline the opportunity — if it won't close in the quarter, it's a distraction.",
      "Add it to pipeline but mark it as low priority until Q3 so it doesn't distort your near-term forecast."
    ],
    correct: 0,
    consequences: {"strategicPosition":7,"executionRisk":-5,"growth":5},
    explanation: "This is a timing and expectation management problem. The opportunity is real and valuable — ignoring it would be wrong. But adding it to pipeline without accurate close dates distorts your forecast and creates false expectations. The right move is to log it truthfully with a realistic 9-12 month close date, have a transparent conversation with your VP about what this does and doesn't solve for this quarter, and develop a parallel near-term pipeline to cover current targets. Both things can be true at once.",
    framework: "Forecast Integrity + Long-cycle Deal Management: log accurately, manage by stage, separate from near-term targets.",
    principle: "Big deals deserve investment — just don't let them crowd out the quarter you're in.",
    traps: [
      "Treating it as current-quarter coverage when it clearly isn't",
      "Declining it entirely because the timeline is long",
      "Hiding the timeline mismatch to avoid a hard conversation with your VP"
    ]
  },
  {
    id: "SL-PM10",
    category: "Pipeline Management",
    difficulty: 3,
    scenario: "End of quarter: you're $180K short of quota. You have two deals you could potentially close — a $220K deal that needs another 2 weeks of legal review, or a $195K deal where the prospect will commit now if you give a 15% discount. The discounted deal would leave you over quota but significantly erode margin. What do you do?",
    quote: "Quota attainment and deal quality are both real metrics — don't sacrifice one to fake the other.",
    options: [
      "Take the discounted deal immediately — hitting quota is the top priority.",
      "Evaluate the real cost of the discount vs. the strategic value of quota attainment, then decide with full information.",
      "Push hard on the legal deal to accelerate the timeline — avoid the discount entirely.",
      "Ask your manager which deal to prioritize and let them own the decision."
    ],
    correct: 1,
    consequences: {"profitability":4,"executionRisk":-5,"strategicPosition":6},
    explanation: "This decision requires actual analysis, not reflexive quota-chasing or discount avoidance. What does 15% off a $195K deal cost in gross margin vs. the benefit of this quarter's quota attainment vs. the probability and cost of accelerating legal review? Sometimes quota attainment unlocks accelerators that more than offset the discount. Sometimes it doesn't. The right answer is to run the numbers, understand the legal deal's actual acceleration options, and make an informed decision — not default to either option without analysis.",
    framework: "Decision Analysis: model the real trade-offs before acting on either pressure.",
    principle: "Never discount out of panic. Never avoid discounting out of principle. Decide from data.",
    traps: [
      "Reflexively taking the discounted deal because quota pressure feels urgent",
      "Refusing the discount on principle without understanding what it actually costs vs. earns",
      "Delegating the decision entirely to avoid ownership"
    ]
  },
  {
    id: "SL-DI01",
    category: "Discovery",
    difficulty: 1,
    scenario: "You're in an initial discovery call and the prospect immediately says 'just send me the pricing deck and we'll take a look.' They seem ready to skip discovery entirely. What do you do?",
    quote: "A prospect who skips discovery is a prospect who will skip the deal.",
    options: [
      "Send the pricing deck immediately — they asked for it and you want to be responsive.",
      "Tell them you'll send pricing but only after a 30-minute call to ensure the numbers are relevant.",
      "Politely redirect: explain that without understanding their situation, any pricing you share will likely be off-market for their needs.",
      "Send a generic pricing range and schedule a follow-up to qualify properly."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"growth":5,"executionRisk":-4},
    explanation: "Sending pricing before understanding the customer's situation is a trap. You'll send a number they'll anchor to, out of context, with no value frame. The right move is to redirect with a value-to-them rationale: 'I want to make sure what I send is actually relevant to your situation — can I ask a few questions first?' This respects their time, positions you as a consultant rather than a vendor, and protects you from a premature price anchoring problem.",
    framework: "Discovery-First Selling: price without context creates price objections.",
    principle: "Never lead with price. Lead with understanding.",
    traps: [
      "Sending pricing immediately to appear responsive — you just lost your framing advantage",
      "Making discovery a mandatory obstacle rather than a value-add conversation",
      "Sending a range as a compromise — anchors at the low end and gives nothing useful"
    ]
  },
  {
    id: "SL-DI02",
    category: "Discovery",
    difficulty: 2,
    scenario: "You're halfway through a discovery call and realize the prospect doesn't have budget allocated for your solution. They're exploring options but have no purchase authority or timeline. By MEDDIC criteria, they're essentially unqualified. You have 30 minutes left in the call. What do you do?",
    quote: "Time spent on unqualified deals is time stolen from qualified ones.",
    options: [
      "Complete the full call — maybe the conversation will help them build internal business case.",
      "Pivot to selling them on internal advocacy — get them to become a champion who builds the budget case.",
      "Politely end the call early — there's no deal here and your time is valuable.",
      "Ask directly: 'Help me understand how a purchase like this would get funded in your organization — what would need to be true?' Then decide based on the answer."
    ],
    correct: 3,
    consequences: {"growth":6,"executionRisk":-5,"customerTrust":5},
    explanation: "Before disqualifying, validate your assumption. 'No budget' often means 'no budget right now' or 'no one has asked us to allocate one yet.' The right move is a direct question about how funding decisions get made — this reveals whether there's a real path to purchase or whether this is a genuine dead end. If the answer is genuinely no path, you can gracefully wrap up without burning 30 minutes. If there's a path, you've just started the real discovery.",
    framework: "MEDDIC Qualification: Economic Buyer + Decision Process must be surfaced before investing full discovery.",
    principle: "Qualify harder before you invest more — not harder after.",
    traps: [
      "Completing a full discovery call on a prospect you know is unqualified — sunk cost trap",
      "Abandoning prematurely before validating your assumption about budget",
      "Assuming 'no budget' means 'no deal' without asking how budgets get created"
    ]
  },
  {
    id: "SL-DI03",
    category: "Discovery",
    difficulty: 2,
    scenario: "Your champion is enthusiastic and engaged, but every time you ask to include the economic buyer in a meeting, they deflect: 'I'll handle the executive presentation myself once we've aligned on the details.' Three meetings in, you still haven't spoken to the decision-maker. What's your concern and response?",
    quote: "A champion who blocks you from the executive is a champion who can't sell your deal.",
    options: [
      "Reframe the executive meeting as value for your champion: 'I want to make sure you have the air cover you need when you present this upward.'",
      "Trust your champion — if they're confident they can get it done, let them run it.",
      "Go around your champion and reach out to the economic buyer directly.",
      "Accept the dynamic and build the strongest possible business case for your champion to present independently."
    ],
    correct: 0,
    consequences: {"customerTrust":7,"growth":6,"executionRisk":-7},
    explanation: "Being blocked from the economic buyer is one of the top predictors of deal loss. Your champion may be well-intentioned but lacks the authority or confidence to close without you in the room. The right move is to reframe the ask as beneficial to your champion — framing executive involvement as air cover for them, not a threat to their ownership. Going around them destroys trust. Accepting the block and hoping for the best is how deals die quietly at the end.",
    framework: "Multi-threading: champion access is necessary but not sufficient — economic buyer access is required.",
    principle: "If your deal lives in one person's hands, your deal is at risk.",
    traps: [
      "Trusting a champion's confidence as a substitute for executive access",
      "Going directly to the economic buyer without your champion's knowledge — relationship nuclear option",
      "Building an elaborate deck to compensate for not having the right room"
    ]
  },
  {
    id: "SL-DI04",
    category: "Discovery",
    difficulty: 1,
    scenario: "A prospect tells you in discovery: 'We've already evaluated three vendors and we're really just checking a compliance box with your meeting.' They seem disengaged. How do you respond?",
    quote: "A prospect who tells you the truth is giving you a gift — use it.",
    options: [
      "Push through your standard discovery script — you need the information regardless.",
      "Acknowledge the dynamic directly: 'I appreciate you being upfront. Can I ask what the other vendors are offering that's resonating, and whether there's anything they're not covering that brought you to us?'",
      "End the call — if they've already decided, your time is better spent elsewhere.",
      "Immediately offer your most competitive pricing to change the dynamic."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"growth":5,"executionRisk":-4},
    explanation: "This prospect is being honest with you — that's actually valuable. The right move is to honor their transparency and use it to find a real angle. Asking about gaps in competitor offerings, what's still unresolved, or what they wish they'd seen in the process is genuine discovery. It might reveal an opening, or confirm there isn't one — either outcome is better than wasting 45 minutes on a scripted pitch to someone who's checked out. Jumping to price discounts signals desperation, not competitiveness.",
    framework: "Challenger Reframe: treat buyer transparency as intelligence, not rejection.",
    principle: "The buyer who tells you you're losing is giving you a chance to win.",
    traps: [
      "Ignoring the signal and pushing through your pitch script",
      "Exiting too quickly — what looks like a closed decision often has cracks",
      "Competing on price before understanding the real evaluation criteria"
    ]
  },
  {
    id: "SL-DI05",
    category: "Discovery",
    difficulty: 3,
    scenario: "During discovery, you uncover that the prospect's real problem is one your product can only partially solve. A competitor's product would actually be a better fit for their core use case, though yours is stronger in adjacent areas they mentioned. What do you do?",
    quote: "Selling someone the wrong solution is the fastest way to lose a customer and a reference.",
    options: [
      "Focus your discovery on the adjacent areas where you're stronger and deprioritize the core use case.",
      "Continue to position your product as a fit for all their needs — every product has gaps.",
      "Be transparent: share where you're strong and where you have gaps, and let the prospect decide with full information.",
      "Disqualify the deal immediately and refer them to the competitor."
    ],
    correct: 2,
    consequences: {"customerTrust":10,"strategicPosition":6,"growth":3},
    explanation: "Transparency here is both the ethical and the strategically smart choice. Customers who buy the wrong solution churn, leave bad reviews, and never give referrals. Being honest about fit — 'here's where we're best in class, here's where you'd need to evaluate trade-offs' — positions you as a trusted advisor and often leads to a sale anyway, because trust is the rarest commodity in sales. Immediate referral to a competitor is too extreme before understanding how the prospect values the adjacent strengths you do offer.",
    framework: "Consultative Selling: advise for fit, not just for the close.",
    principle: "The sale you should lose is the one that comes back to haunt you.",
    traps: [
      "Cherry-picking which problems to 'discover' based on where you're strongest",
      "Pitching your adjacencies so hard you obscure the core fit gap",
      "Immediate disqualification before exploring whether the adjacent strengths might outweigh the gap"
    ]
  },
  {
    id: "SL-DI06",
    category: "Discovery",
    difficulty: 2,
    scenario: "You're doing discovery at a large enterprise. The business unit champion wants to buy, but mentions that IT has veto power over all software purchases and has historically blocked similar solutions due to security requirements. You don't have a relationship with IT. What do you do?",
    quote: "Every no has a name — find it before it finds you.",
    options: [
      "Focus on the business unit — if the business case is strong enough, IT will be overruled.",
      "Accelerate the commercial process so that by the time IT is involved, momentum is too strong to stop.",
      "Have your solution engineering team prepare a comprehensive security documentation package proactively.",
      "Ask your champion to introduce you to the IT stakeholder now, before the evaluation advances further."
    ],
    correct: 3,
    consequences: {"executionRisk":-9,"customerTrust":6,"growth":5},
    explanation: "IT blockers kill deals late in the process when you've invested the most. The right move is to surface this risk early and build an IT relationship through your champion — framing it as a collaborative evaluation, not an obstacle. Security documentation helps but isn't sufficient alone; IT needs to be sold to, not just cleared. Trying to build momentum that 'overrules' IT almost always fails at enterprise accounts where IT has formal veto authority and accelerating to outrun a stakeholder backfires every time.",
    framework: "Stakeholder Mapping: identify all veto points early and engage them, don't avoid them.",
    principle: "The stakeholder you ignore is the stakeholder who kills your deal.",
    traps: [
      "Treating IT as a documentation exercise rather than a real stakeholder to sell",
      "Assuming business unit enthusiasm will override IT governance",
      "Accelerating the deal to outrun IT — they have institutional veto power that doesn't expire"
    ]
  },
  {
    id: "SL-DI07",
    category: "Discovery",
    difficulty: 2,
    scenario: "You're discovering a prospect's situation and they volunteer that their current vendor's contract is up in 4 months. They seem to be exploring alternatives but haven't confirmed they're actively evaluating. How does this change your approach?",
    quote: "Contract timing is the closest thing to built-in urgency — use it wisely.",
    options: [
      "Use the timing as a natural anchor: explore their experience with the current vendor, what they'd want to be different, and what a good replacement evaluation would look like.",
      "Move fast — immediately present your solution and push toward a quick evaluation timeline.",
      "Ask them directly: 'Are you running a formal evaluation or just exploring?' before investing further.",
      "Offer a competitive displacement program — pricing incentives for switching before their contract expires."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"growth":6,"strategicPosition":5},
    explanation: "Contract renewal timing is a natural inflection point — but jumping immediately to a pitch squanders the discovery opportunity it creates. The right move is to use the timeline as context for deeper discovery: what's working with the current vendor, what isn't, what they'd prioritize in an alternative. This gives you the intelligence to position your solution as specifically better in the ways that matter to them. Asking bluntly about formal evaluation is reasonable but secondary to the richer conversation about their dissatisfaction. Displacement pricing is premature before you know if they have real pain.",
    framework: "Event-Based Selling: use triggering events (contract expiry) to deepen discovery, not shortcut it.",
    principle: "Urgency isn't leverage until you understand what they'd change.",
    traps: [
      "Rushing to pitch because you see a competitive window — you skip understanding what they actually want",
      "Treating 'are you evaluating?' as the key question — the richer discovery is around their unmet needs",
      "Jumping to displacement pricing before establishing your value"
    ]
  },
  {
    id: "SL-DI08",
    category: "Discovery",
    difficulty: 3,
    scenario: "You're in a discovery call and the prospect keeps deflecting your questions with vague answers: 'We're just exploring our options,' 'Still early stages,' 'Not sure yet.' After 20 minutes you have very little useful information. What's your move?",
    quote: "Vague prospects aren't uninterested — they're untrusting.",
    options: [
      "Keep asking questions — eventually they'll open up.",
      "Name the dynamic: 'I get the sense you're being cautious about sharing details — can I ask what would make this conversation more useful for you?'",
      "Shift to pitching your solution since discovery isn't working.",
      "End the call and follow up with a more structured questionnaire they can fill out asynchronously."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"growth":5,"executionRisk":-4},
    explanation: "Persistent vagueness is almost always a trust signal, not a disinterest signal. The prospect isn't sure how you'll use their information, or has been burned by vendors who turned discovery into a pitch. Naming the dynamic directly — without accusation — is a high-trust move that often breaks the pattern. It signals that you're actually there to help, not just to find angles. Continuing the same approach will produce the same results. Pivoting to pitch confirms their suspicion that it was never about them.",
    framework: "Trust-Based Discovery: when discovery stalls, address the relationship, not just the questions.",
    principle: "When the conversation stops flowing, ask about the conversation.",
    traps: [
      "Persistence without adaptation — asking more questions in the same way",
      "Pivoting to pitch when discovery fails — the worst signal you can send",
      "Async questionnaire as avoidance of the real issue: trust hasn't been established"
    ]
  },
  {
    id: "SL-DI09",
    category: "Discovery",
    difficulty: 1,
    scenario: "A prospect asks: 'Can you just send me a demo video so I can watch it on my own time before we meet?' You have a strong live demo that you've refined based on industry pain points. What's your response?",
    quote: "An asynchronous demo is a conversation stopper dressed as a convenience.",
    options: [
      "Send the demo video — being easy to work with builds goodwill.",
      "Decline and insist on a live demo only — the live version is significantly better.",
      "Offer a brief recorded overview while proposing a live session where you can tailor the demo to their specific challenges.",
      "Send the demo with a specific question: 'Let me know which part resonates most and we can go deep on that live.'"
    ],
    correct: 2,
    consequences: {"customerTrust":7,"growth":5,"executionRisk":-3},
    explanation: "Recorded demos are lower quality and remove your ability to probe, adapt, and handle objections in real time. The right move is to offer a recorded overview as a courtesy while positioning the live session as where the real value is — because it's tailored to them. Option D is a reasonable fallback but doesn't adequately frame the superiority of the live interaction. Declining entirely is too rigid. Pure accommodation loses your chance to differentiate through a tailored conversation.",
    framework: "Demo Strategy: live discovery-driven demos convert at dramatically higher rates than canned videos.",
    principle: "A demo that isn't tailored is a pitch that says nothing specific.",
    traps: [
      "Pure accommodation — sending video to be easy at the cost of conversion",
      "Hard refusal — inflexibility creates friction without benefit",
      "Follow-up question on the video is clever but secondary to getting a live session booked"
    ]
  },
  {
    id: "SL-DI10",
    category: "Discovery",
    difficulty: 3,
    scenario: "You discover in a call that the prospect is also evaluating a competitor you know builds deep product integrations with the prospect's core tech stack — something your product currently lacks. The prospect didn't bring this up but you know it's likely a critical factor. Do you surface it?",
    quote: "The objection you don't surface will surface later — at the worst possible time.",
    options: [
      "Don't bring it up — let them discover that limitation on their own if it matters to them.",
      "Acknowledge the integration gap only if asked, and meanwhile position other strengths aggressively.",
      "Ask about their current tech stack generally and let them surface the integration concern naturally.",
      "Surface it proactively: 'One thing I'd want to make sure we address in our evaluation is how we integrate with your current stack — can you walk me through what that looks like?'"
    ],
    correct: 3,
    consequences: {"customerTrust":9,"strategicPosition":5,"executionRisk":-6},
    explanation: "Proactively surfacing a known potential weakness is one of the highest-trust moves you can make in sales. It signals that you're not hiding things and that you're focused on their actual success, not just the close. More practically, if integration matters to them and you don't address it, the competitor will — framing it as a knockout in the final comparison. By surfacing it yourself, you control the narrative: you can quantify the gap, discuss your roadmap, and explore whether it's actually a blocking issue. Option C is passive and hopes they don't connect the dots.",
    framework: "Pre-emptive Objection Handling: name the elephant before the competitor does.",
    principle: "Trust is built by the things you say when you didn't have to say them.",
    traps: [
      "Hoping the prospect doesn't notice — they will, and it'll cost you the deal and the relationship",
      "Generic stack question hoping the issue surfaces naturally — too passive when you already know it's a risk",
      "Waiting to be asked — by then you're on the defensive and the competitor has already framed it"
    ]
  },
]
