export const CASES_CSM4 = [
  {
    id: "CSM-ER01",
    category: "Expansion Revenue",
    difficulty: 2,
    scenario: "Usage data shows a customer is approaching the limits of their current plan — they've used 87% of their seat allotment this quarter. They haven't mentioned anything. How do you approach the potential expansion conversation?",
    quote: "Proactive expansion conversations feel like partnership. Reactive ones feel like a bill.",
    options: [
      "Proactively share the usage data: 'I noticed you're at 87% of your seat capacity — let's talk about what you'd want to do before you hit the ceiling.'",
      "Send the usage data to the account admin in a usage report email and note they should consider upgrading before hitting the ceiling.",
      "Automatically upgrade their plan when they hit 90% and send a notification.",
      "Email the account admin with the usage data and a link to upgrade options."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"growth":8,"executionRisk":-4},
    explanation: "Proactive expansion conversations — surfaced before the customer hits a constraint — feel like a service. Reactive ones after the limit is hit feel like a sales call in response to a problem. Sharing the 87% data now gives the customer time to plan their budget and expansion, positions you as a partner who's monitoring their success, and typically results in a faster, smoother expansion process. Automatic upgrades without conversation are a trust breach — don't spend a customer's money without a conversation. An email with upgrade links is impersonal and misses the relationship opportunity.",
    framework: "Usage-Led Expansion: surface constraint signals before they become friction.",
    principle: "The best expansion conversation happens before the customer needs to have it.",
    traps: [
      "Admin report email — routes an expansion conversation through an ops channel to someone who may lack budget authority; you lose the relationship dimension that makes a proactive conversation feel like partnership rather than a notification",
      "Auto-upgrade — charging without consent is a trust violation",
      "Admin email with links — impersonal and transactional; misses relationship value"
    ]
  },
  {
    id: "CSM-ER02",
    category: "Expansion Revenue",
    difficulty: 3,
    scenario: "You've identified a strong expansion opportunity in a customer account — an adjacent use case that would double their contract. Your champion loves the idea but says 'this will need to go through a new budget cycle — probably 6 months.' The AE is pushing you to close it this quarter. How do you handle the tension?",
    quote: "Rushed expansions that die in procurement are worse than expansions that take the right time.",
    options: [
      "Push the champion to expedite the budget process — the AE's pressure is valid.",
      "Be transparent with the AE: share what you've learned about the budget timeline and jointly plan a realistic expansion path.",
      "Pursue the expansion in a smaller department first to get a foothold this quarter.",
      "Propose to the AE that you fast-track a pilot of the expansion with a small user group this quarter, deferring the full contract to next quarter."
    ],
    correct: 1,
    consequences: {"executionRisk":-6,"growth":6,"teamMorale":5},
    explanation: "AE pressure doesn't change customer budget cycles — but it can drive CSMs toward behavior that damages the relationship. The right move is to share what you've learned honestly with the AE and jointly plan: what can be done to accelerate the internal process? Is there a smaller entry point that could close this quarter? Is there a way to get a LOI or commitment that counts toward the quarter even if the formal contract starts later? Department-level foothold is worth exploring as an intermediate step. Hard no to the AE without offering alternatives is unhelpful. Pressure on the champion without basis risks damaging the relationship.",
    framework: "Expansion Pacing: CSMs bridge AE urgency and customer readiness — don't sacrifice one for the other.",
    principle: "Tell the AE what's real. Find the path that serves both.",
    traps: [
      "Champion pressure to expedite — may damage a trusted relationship for a quarter-end number",
      "Unscoped pilot this quarter — a rushed pilot without champion buy-in adds implementation complexity mid-cycle and can create the impression of instability, making the full-contract close harder when the budget actually opens",
      "Department foothold without considering impact on the larger opportunity — might box out the bigger deal"
    ]
  },
  {
    id: "CSM-ER03",
    category: "Expansion Revenue",
    difficulty: 2,
    scenario: "A customer says during a QBR: 'We'd love to expand to our APAC team, but honestly we'd need to see better support response times in our current region first.' This is both a complaint and an expansion opportunity. How do you handle it?",
    quote: "Customers who tell you what they need to expand are the best partners you have.",
    options: [
      "Acknowledge both the support concern and the APAC interest in the QBR, then schedule a separate expansion discovery call for the following week before committing to a support improvement timeline.",
      "Pitch the APAC expansion immediately — a larger contract might prioritize their support tier.",
      "Take the support concern seriously first: commit to a specific improvement timeline, then revisit the APAC expansion as a subsequent conversation.",
      "Escalate the support concern to your VP to get it resolved faster."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"growth":7,"executionRisk":-6},
    explanation: "This customer has given you a conditional expansion: fix the support issue, and they'll expand. The right response is to honor that sequence — take the support concern seriously, commit to a specific measurable improvement, and then revisit APAC once you've demonstrated you can deliver. Pitching the expansion immediately while the support issue is unresolved makes it sound like you're trying to monetize their frustration. Escalating to VP is useful in parallel but doesn't address the sequence the customer has explicitly stated.",
    framework: "Conditional Expansion: customers signal their expansion conditions — meet them before pursuing the opportunity.",
    principle: "Earn the right to expand before you earn the revenue from it.",
    traps: [
      "Expansion call before the support commitment — the customer explicitly sequenced support first; booking the expansion call before demonstrating improvement signals you prioritized the commercial outcome over their stated condition, which is exactly what erodes the trust you need for the APAC conversation",
      "Immediate APAC pitch — rewards your urgency, not their condition; they told you what they need first",
      "VP escalation as substitute — useful for urgency but doesn't change the customer's stated sequence"
    ]
  },
  {
    id: "CSM-ER04",
    category: "Expansion Revenue",
    difficulty: 1,
    scenario: "You've been a CSM for a year and your company is implementing a policy that CSMs are now expected to own expansion revenue targets in addition to their retention responsibilities. You're comfortable with renewal but expansion selling feels like a different skill. What's your response?",
    quote: "The CSM who learns to sell expansion is the CSM who becomes indispensable.",
    options: [
      "Resist the change — expansion selling is the AE's job and mixing roles creates confusion.",
      "Request a 90-day exemption from expansion targets while completing formal training, with a plan to phase in the responsibility gradually after.",
      "Focus exclusively on retention — expansion is a bonus if it happens.",
      "Embrace it with support: ask for training on expansion sales skills, establish clear rules of engagement with AEs, and start with the customers where you have the strongest trust."
    ],
    correct: 3,
    consequences: {"growth":8,"teamMorale":6,"strategicPosition":7},
    explanation: "The shift to CSM-led expansion is a real and growing trend — and CSMs who adapt build significantly more career optionality and business impact. The right response is to embrace it thoughtfully: request the skills development you need, establish clear handoff rules with AEs (who handles what at what deal size), and start where you're strongest — with your highest-trust customers where expansion conversations feel natural. Blanket resistance ignores the business rationale. Pure retention focus treats expansion as optional when it's now a defined expectation.",
    framework: "Role Evolution: growth expectations in CSM roles are a career accelerator, not a threat.",
    principle: "The CSM who can retain and expand is worth twice the one who can only retain.",
    traps: [
      "Role resistance — puts you on the wrong side of a real business evolution",
      "Retention-only focus when expansion is now a defined KPI — treats a responsibility as optional",
      "90-day exemption request — delays adoption of a defined KPI and signals limited willingness to grow, which managers note when making staffing decisions in a role that's actively evolving"
    ]
  },
  {
    id: "CSM-ER05",
    category: "Expansion Revenue",
    difficulty: 3,
    scenario: "A long-term customer casually mentions they're evaluating a third-party tool to solve a use case that your product's upcoming roadmap actually covers — launching in Q3. The customer doesn't know about the roadmap item. Do you share it?",
    quote: "Roadmap transparency to a friendly customer is almost always better than roadmap secrecy.",
    options: [
      "Share the roadmap item confidentially: 'I can share that this is on our Q3 roadmap — it's not public yet, but I wanted you to know before you spent time evaluating another tool.'",
      "Say nothing — roadmap items are confidential and things could change.",
      "Tell them to wait and see — hint that something is coming without specifics.",
      "Ask your product team for permission to share the roadmap item before saying anything."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"growth":7,"strategicPosition":5},
    explanation: "Sharing a confidential roadmap item to save a trusted customer from an unnecessary third-party evaluation is the right relationship call — and it's a defensible business decision. You're not broadcasting the roadmap; you're giving a trusted partner the information they need to make a good decision. Frame it explicitly as confidential and as your genuine effort to serve them. Vague hinting is almost worse than saying nothing — it teases without informing and can damage trust if the item doesn't ship. Waiting for product permission adds unnecessary delay when the customer is actively evaluating alternatives right now.",
    framework: "Strategic Transparency: selective roadmap sharing with trusted customers is relationship capital, not a risk.",
    principle: "Give trusted customers the information they need to make good decisions.",
    traps: [
      "Saying nothing — they buy the third-party tool, then discover your feature ships in Q3 and feel deceived",
      "Vague hint — teases without informing; can backfire if they make a decision based on incomplete info",
      "Permission-first delay — the customer is evaluating now; the permission process will take longer than the decision"
    ]
  },
  {
    id: "CSM-ER06",
    category: "Expansion Revenue",
    difficulty: 2,
    scenario: "You have 8 accounts with expansion potential. You're trying to decide which ones to prioritize for active expansion conversations. What's your decision framework?",
    quote: "Expansion where there's no relationship yet is prospecting. Expansion where there's trust is harvest.",
    options: [
      "Prioritize by contract size — biggest accounts have the most expansion potential.",
      "Prioritize by adoption health and trust level — expand where the foundation is strongest.",
      "Prioritize by which accounts have the most obvious expansion use cases.",
      "Prioritize by which accounts have the soonest renewal dates — bundle expansion with renewal."
    ],
    correct: 1,
    consequences: {"growth":8,"customerTrust":6,"strategicPosition":5},
    explanation: "Expansion success is highly correlated with adoption health and relationship trust. Trying to expand accounts where adoption is weak or the relationship is fragile typically fails — the customer isn't convinced enough in the current value to invest in more. The right prioritization is accounts where adoption is strong, the relationship is trusted, and the customer has demonstrated success with what they have. Obvious use cases matter, but only where trust exists. Contract size matters, but a large account with poor adoption is a harder expansion than a smaller account with high adoption and strong relationship.",
    framework: "Expansion Prioritization: health and trust predict expansion success more than size or use cases alone.",
    principle: "Expand where you've earned it, not just where the math looks good.",
    traps: [
      "Contract size priority — big accounts with poor adoption resist expansion more than small accounts with strong adoption",
      "Use case visibility priority — a clear use case in a distrusted relationship still won't close",
      "Renewal bundling — opportunistic and can create pressure at exactly the wrong moment"
    ]
  },
  {
    id: "CSM-ER07",
    category: "Expansion Revenue",
    difficulty: 3,
    scenario: "A customer agrees to expand their contract but their internal approval process requires 3 levels of sign-off, which could take 6-8 weeks. Your AE wants the deal signed this quarter (4 weeks away). What's the realistic path?",
    quote: "Approval process reality always beats internal urgency.",
    options: [
      "Push the customer's procurement team to expedite — explain that the quarter-end matters.",
      "Accept it will close next quarter and set expectations with the AE.",
      "Work with your champion to map the approval steps and identify which can be accelerated or run in parallel.",
      "Offer a discount for signing before the formal approval process completes, with ratification to follow."
    ],
    correct: 2,
    consequences: {"executionRisk":-6,"growth":7,"customerTrust":6},
    explanation: "The first thing to do is understand the approval process fully — who approves, in what sequence, and which steps genuinely require serialization vs. which could run in parallel. Often customers estimate 6-8 weeks because that's the default assumption, but with active management some steps can accelerate. Working with your champion to create a parallel-step approval timeline is the best attempt at a quarter-end close. If the process truly can't close in 4 weeks, honest conversation with the AE is the right answer. Discount for pre-approval signing is risky both commercially and from a procurement governance standpoint.",
    framework: "Approval Navigation: map the actual process before accepting the default timeline.",
    principle: "Default timelines can often be compressed. First you have to understand what's actually fixed and what isn't.",
    traps: [
      "Procurement pressure on quarter-end basis — customers don't care about your quarter and pushing urgency without mutual benefit damages trust",
      "Immediate next-quarter acceptance — before understanding if the process can actually accelerate",
      "Pre-approval discount — commercial and governance risk; could create issues for the champion who signed early"
    ]
  },
  {
    id: "CSM-ER08",
    category: "Expansion Revenue",
    difficulty: 1,
    scenario: "A customer whose expansion you've been working on for 3 months tells you they've decided not to expand 'for now.' They liked the conversation but the timing isn't right. What do you do?",
    quote: "'Not now' is an invitation to stay in the conversation, not to exit it.",
    options: [
      "Accept the decision and remove them from your expansion pipeline.",
      "Offer a smaller-scope expansion that might fit their current budget.",
      "Ask if you can reconnect in 3 months when their situation may have changed.",
      "Ask what 'not now' means specifically — what would need to change for the timing to be right?"
    ],
    correct: 3,
    consequences: {"customerTrust":7,"growth":5,"executionRisk":-3},
    explanation: "A 'not now' response after 3 months of positive conversations has a reason behind it. Understanding what 'now' would look like — what would need to change in their budget, priorities, or organization — converts a dead end into a qualified future opportunity with a known trigger. It also maintains the relationship and signals that you're invested in their success, not just the transaction. Removing them from the pipeline entirely is premature. A 3-month follow-up is reasonable but generic and doesn't give you the specific trigger that would actually re-open the conversation.",
    framework: "Deferred Expansion: 'not now' has a condition — find it.",
    principle: "A customer who says 'not now' is a customer who might say 'yes' — if you understand what has to change.",
    traps: [
      "Pipeline removal — loses a warm expansion opportunity that only needs timing",
      "Generic 3-month follow-up — misses the specific trigger that would actually convert",
      "Smaller scope offer — may be right but should come after understanding what's actually blocking"
    ]
  },
  {
    id: "CSM-ER09",
    category: "Expansion Revenue",
    difficulty: 2,
    scenario: "You've just closed a significant expansion. Your AE sends you a message saying: 'Great work — I'll take it from here on the new modules.' You believe the customer relationship continuity requires you to remain the primary point of contact through the expanded deployment. How do you handle this?",
    quote: "AE-CSM handoffs done poorly are the fastest way to lose an account you just grew.",
    options: [
      "Have a conversation with your AE and manager to define clearly who owns what in the expanded relationship, before the customer experiences any confusion.",
      "Hand it over to the AE — the sale is done and you should stay in your lane.",
      "Stay primary and ask the AE to support you in the background.",
      "Let the customer decide who their primary contact should be."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"executionRisk":-6,"teamMorale":6},
    explanation: "AE/CSM ownership ambiguity post-expansion is a customer experience risk. The right move is to have a clear internal alignment conversation immediately — what does each person own (AE = commercial future, CSM = deployment and ongoing success), how does that get communicated to the customer, and who leads the kickoff for the new modules? The customer should never experience confusion about who their point of contact is. Letting the customer decide puts burden on them. Unilateral CSM primacy creates internal conflict with the AE.",
    framework: "Post-Expansion Handoff: define internal ownership before the customer experiences ambiguity.",
    principle: "Customers feel AE/CSM confusion more acutely than either party does.",
    traps: [
      "Pure AE handover — loses the relationship continuity that made the expansion possible",
      "Unilateral CSM primacy — conflict with AE surfaces in ways the customer notices",
      "Customer-decided primary — puts organizational burden on the customer for an internal question"
    ]
  },
  {
    id: "CSM-ER10",
    category: "Expansion Revenue",
    difficulty: 3,
    scenario: "Your company introduces a new product module that you believe would genuinely help 5 of your accounts. Your manager pushes you to pitch it to all 5 this quarter to meet a company adoption target. You think 2 of the 5 aren't ready for it yet. How do you handle the tension between company target and customer readiness?",
    quote: "Pitching products customers aren't ready for destroys the trust that makes future pitches possible.",
    options: [
      "Pitch all 5 — hitting the adoption target helps the company and it's ultimately the customer's choice.",
      "Pitch the 3 you believe are ready; flag your reasoning to your manager about the other 2 and propose a timeline for when they'd be ready.",
      "Pitch all 5 with a 'this may not be the right fit for everyone right now, but wanted you to be aware' qualifier to reduce pressure on the accounts that aren't ready.",
      "Pitch all 5 but frame it as 'just so you know this exists' rather than a sell."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"growth":6,"teamMorale":5},
    explanation: "This is a genuine tension between company targets and customer trust, and the right answer is to split the response thoughtfully. Pitch the 3 accounts where the timing and readiness are genuine — do it with full conviction. For the other 2, bring your reasoning to your manager: 'I believe these customers need X and Y before this module will succeed — here's my plan for when to introduce it.' This demonstrates professional judgment, not avoidance. A 'soft' pitch to all 5 — 'just so you know' — produces the worst outcome: no conviction, low conversion, and relationship dilution.",
    framework: "Timing-Based Expansion: push where the customer is ready, not where the target is set.",
    principle: "The best pitch is a pitch to a customer who's ready for it.",
    traps: [
      "Pitch all 5 blindly — drives adoption target at expense of 2 customer relationships and long-term trust",
      "Hedged pitch to all 5 — the qualifier that protects you with the 2 unready accounts undermines conviction with the 3 ready ones; low-confidence introductions convert poorly even when the fit is real",
      "Soft 'just FYI' pitch — no conviction, poor conversion, and confuses customers about your intent"
    ]
  },
  {
    id: "CSM-CO01",
    category: "CS Operations",
    difficulty: 2,
    scenario: "Your CSM team is being asked to implement a new customer health score system. The proposed metrics are heavily weighted toward product usage (logins, feature activations). You believe support ticket volume and stakeholder engagement are equally important. How do you contribute to the design?",
    quote: "A health score that only measures usage will miss every relationship-based churn.",
    options: [
      "Accept the proposed system — product usage is the most objective signal.",
      "Build your own informal scoring system alongside the official one.",
      "Advocate for a multi-dimensional health score: use your customer data to show how tickets and stakeholder engagement predict churn in ways that usage data alone doesn't.",
      "Wait until the new system has been used for a quarter and then suggest improvements based on outcomes."
    ],
    correct: 2,
    consequences: {"strategicPosition":8,"executionRisk":-6,"teamMorale":5},
    explanation: "Health score design is a strategic decision that directly affects your ability to predict and prevent churn. The right contribution is to bring your customer data and experience to the design conversation — show specific examples where usage looked fine but support ticket volume or executive disengagement predicted the churn. Advocacy based on evidence changes systems. Accepting a suboptimal system means working with the wrong signals. A parallel informal system creates confusion. Post-launch feedback takes a quarter longer than it needs to and may let churn occur that could have been prevented.",
    framework: "Health Score Design: advocate with data, not just with preference.",
    principle: "Health scores are only as good as the signals you include — fight for the right signals before the system is built.",
    traps: [
      "Accepting usage-only score — a common oversimplification that misses key churn predictors",
      "Parallel informal system — creates two systems that diverge and confuse prioritization",
      "Post-launch feedback — waiting a quarter means watching your flawed system produce wrong outcomes first"
    ]
  },
  {
    id: "CSM-CO02",
    category: "CS Operations",
    difficulty: 3,
    scenario: "You've been asked to take on 8 additional accounts as part of a CSM team restructuring, bringing your book from 22 to 30 accounts. The additional accounts are all mid-market with variable health. You're already close to your effective bandwidth ceiling. What's your response?",
    quote: "Saying yes to 8 more accounts while already at capacity is saying no to all 30.",
    options: [
      "Accept the additional accounts — adaptability is important in a restructuring.",
      "Accept but ask for an SDR or CS coordinator to support higher-volume tasks.",
      "Decline the additional accounts — you can't guarantee quality above your current load.",
      "Accept with a written capacity assessment: show your current coverage model, what coverage would look like at 30 accounts, and which accounts would receive reduced service."
    ],
    correct: 3,
    consequences: {"executionRisk":-7,"teamMorale":7,"strategicPosition":6},
    explanation: "Accepting additional accounts without a capacity conversation hides a quality problem that surfaces later as churn or escalations. The right response is to accept the accounts while creating explicit visibility into what coverage at 30 looks like — which accounts get high-touch, which get medium-touch, and which get lighter coverage. This is a management decision, not just a CSM one. Presenting the trade-offs lets your manager make an informed choice about staffing, coverage model adjustments, or account distribution. Pure refusal seems inflexible. Support request without a capacity model is asking for resources without demonstrating why.",
    framework: "Capacity Management: accept changes with visibility, not with silence.",
    principle: "The best response to an unrealistic workload is data — not yes, not no.",
    traps: [
      "Silent acceptance — quality deteriorates across all 30 accounts and you're the one accountable",
      "Flat refusal — inflexible response in a business restructuring context",
      "Support request without coverage model — asking for resources without showing why or what they'd do"
    ]
  },
  {
    id: "CSM-CO03",
    category: "CS Operations",
    difficulty: 2,
    scenario: "You notice your team is spending significant time on manual tasks — pulling usage reports from 3 different systems for every QBR and status update. You estimate this takes 4+ hours per account per quarter. What's your response?",
    quote: "Time spent on reports that could be automated is time not spent on customers.",
    options: [
      "Document the time spent, quantify the impact across the team, and propose a specific automation solution or tool to your manager.",
      "Keep doing it — the manual process ensures accuracy and understanding of the data.",
      "Find a workaround yourself — build a personal spreadsheet that consolidates the reports.",
      "Delegate the report-pulling to an intern or CS coordinator."
    ],
    correct: 0,
    consequences: {"executionRisk":-6,"teamMorale":7,"growth":5},
    explanation: "Manual processes that consume significant CSM time at scale are operational debt. The right response is to quantify the problem and propose a solution — not just complain about it or work around it. Documenting 4 hours × 30 accounts × 4 quarters = significant business case for tooling investment. This is the kind of operational contribution that builds your credibility as a CSM leader. Personal workarounds don't solve it for the team. Delegation is appropriate for some tasks but doesn't address the systemic inefficiency.",
    framework: "Operational Improvement: quantify the cost, then propose the solution.",
    principle: "Every manual process you can name is a proposal waiting to be made.",
    traps: [
      "Manual process defense — the accuracy argument rarely justifies 4 hours per account",
      "Personal workaround — solves it for you, leaves the team with the problem",
      "Delegation only — appropriate for some tasks but doesn't address the systemic tool gap"
    ]
  },
  {
    id: "CSM-CO04",
    category: "CS Operations",
    difficulty: 1,
    scenario: "You're asked to improve the company's NPS process. Currently, NPS surveys are sent annually and the response rate is 18%. The company wants to improve both response rate and action-ability of the data. What's your recommendation?",
    quote: "Annual NPS is a lagging indicator that tells you what you already knew.",
    options: [
      "Keep the annual survey but make it shorter — fewer questions will improve response rate.",
      "Shift to a transactional + relationship NPS model: brief transactional surveys after key interactions and a shorter annual relationship survey — with clear follow-up workflows for detractors.",
      "Increase the frequency to quarterly — more data points improve accuracy.",
      "Focus on in-app NPS prompts — they achieve higher response rates than email surveys."
    ],
    correct: 1,
    consequences: {"customerTrust":7,"strategicPosition":8,"executionRisk":-5},
    explanation: "Annual NPS surveys are blunt instruments — they capture sentiment once a year with significant recall bias and no connection to specific events. A transactional + relationship model is best practice: brief surveys after key milestones (onboarding completion, QBRs, support resolutions) capture real-time sentiment when it's most accurate, while an annual relationship survey provides directional benchmark data. Critically, the follow-up workflow for detractors is what makes NPS actionable — a low score with no follow-up is just noise. Quarterly full surveys add frequency without improving the diagnostic connection to specific interactions.",
    framework: "NPS Design: transactional surveys at key moments + annual relationship benchmark + detractor follow-up workflow.",
    principle: "NPS is only as useful as what you do with a low score.",
    traps: [
      "Shorter annual survey — improves response rate marginally but doesn't fix the lag or action-ability problem",
      "Quarterly full surveys — higher frequency of the same blunt instrument",
      "In-app only — good for product NPS, insufficient for relationship and service sentiment"
    ]
  },
  {
    id: "CSM-CO05",
    category: "CS Operations",
    difficulty: 3,
    scenario: "Your CS team has been asked to take ownership of upsell metrics in addition to retention. The AE team is worried this will create confusion about who owns expansion. You're asked to help design the rules of engagement between CS and Sales for expansion. What principles do you recommend?",
    quote: "CS and Sales with unclear boundaries don't compete — they confuse the customer.",
    options: [
      "CS owns all expansion on existing accounts — they have the relationship and the context.",
      "Sales owns all expansion — that's what they're trained and compensated for.",
      "Define the boundary by deal complexity and size: CS leads expansion conversations and passes to AE for deals above a defined threshold or requiring formal procurement.",
      "Let each team self-organize based on individual account dynamics."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"growth":7,"executionRisk":-7},
    explanation: "The most functional CS/Sales expansion model divides responsibility by deal complexity and size, not by account ownership or relationship claims. CSMs are well-positioned to identify and initiate expansion conversations — they have daily customer context. But large, complex expansion deals benefit from AE involvement for commercial negotiation and executive selling skills. A threshold-based handoff (e.g., CS leads conversations up to $X, AE leads for formal procurement processes or larger deals) gives each team clear ownership while serving the customer with the right expertise at the right stage. Self-organization creates inconsistency; single-team ownership misuses each team's strengths.",
    framework: "CS/Sales Rules of Engagement: threshold-based handoff that serves customer with right expertise.",
    principle: "Expansion ownership should follow deal complexity, not org politics.",
    traps: [
      "CS-only ownership — CSMs often lack the commercial negotiation skills for large formal expansions",
      "Sales-only ownership — AEs lack the daily customer context that generates expansion insight",
      "Self-organization — produces inconsistency and customer confusion about who their commercial contact is"
    ]
  },
  {
    id: "CSM-CO06",
    category: "CS Operations",
    difficulty: 3,
    scenario: "Your company is considering reducing the CSM team's headcount by 20% while holding customer count flat, with the gap covered by automation and scaled CS programs. You've been asked for your input on whether this is viable. What's your response?",
    quote: "Scaled CS can automate transactions. It cannot automate trust.",
    options: [
      "Support the plan — headcount reduction signals operational efficiency and aligns with the company's financial goals.",
      "Oppose the plan — you know from experience that the quality of coverage will drop and churn will rise.",
      "Ask your manager to evaluate the decision before you take a public position.",
      "Provide a data-driven assessment: identify which workflows are genuinely automatable, which require human judgment, and what specific churn risk the coverage reduction creates at your account tier."
    ],
    correct: 3,
    consequences: {"strategicPosition":8,"teamMorale":6,"executionRisk":-7},
    explanation: "When asked for your input on a structural decision, the highest-value contribution is honest data — not advocacy or opposition. Map your current activities: automated workflows (onboarding emails, health score updates, QBR invites) versus human-judgment activities (escalation calls, at-risk account conversations, executive relationship management). Then use your churn data to show what happens when at-risk accounts don't receive direct intervention. This makes the tradeoff explicit and lets leadership make an informed decision rather than an optimistic one. Silent support or blanket opposition are both low-value responses to a structural question that deserves analytical rigor.",
    framework: "Capacity Trade-off Analysis: when asked about headcount, bring data, not opinion.",
    principle: "The CSM who responds to cost pressure with data earns the right to shape the decision.",
    traps: [
      "Public support without analysis — endorses a decision whose consequences you can see before leadership can",
      "Blanket opposition — resistance without data is dismissed as turf protection",
      "Waiting for manager direction — you were asked for your input; silence is not a neutral choice"
    ]
  },
  {
    id: "CSM-CO07",
    category: "CS Operations",
    difficulty: 2,
    scenario: "Your company is rolling out a new CSM platform in a rushed migration. Historical customer interaction data from the old system is not being migrated — conversation logs, QBR notes, escalation history. You're being asked to start using the new system immediately. What's the risk and how do you respond?",
    quote: "Context loss in a CSM platform isn't a data problem — it's a customer experience problem.",
    options: [
      "Immediately flag the missing historical data to your manager: explain the service continuity risk and ask for a data migration plan before full cutover.",
      "Begin using the new system for all new interactions while maintaining a personal spreadsheet to reconstruct key historical notes over the next month.",
      "Keep using the old system until the data migration is complete, even if that's against the rollout plan.",
      "Reach out to each customer to have them brief you on the relationship history — it builds rapport while reconstructing context."
    ],
    correct: 0,
    consequences: {"customerTrust":7,"executionRisk":-8,"teamMorale":6},
    explanation: "Missing historical data in a CSM platform is a customer-facing risk, not just an operational inconvenience. When a customer references a conversation from 6 months ago and you have no record of it, you lose credibility and signal that you don't value the history of the relationship. The right move is to immediately flag the risk and request a migration path before full adoption. This is a business case that's easy to make: the cost of context loss in customer relationships outweighs the timeline pressure of a rushed migration. Adapting without historical context is flying blind on your entire book. Asking customers to brief you about their own history puts burden on them for your systems gap.",
    framework: "Platform Migration Risk: context continuity is a customer experience requirement, not a nice-to-have.",
    principle: "A CSM who doesn't know their customer's history doesn't have a customer relationship — they have a customer list.",
    traps: [
      "Personal spreadsheet reconstruction — incomplete, not searchable by teammates, and doesn't solve the platform-level gap; if you hand off an account or go on leave, the next CSM still has no access to the history",
      "Old system continued use against rollout plan — creates a two-system problem and delays the migration further",
      "Customer-briefed context reconstruction — burdens customers with compensating for your operational gap"
    ]
  },
  {
    id: "CSM-CO08",
    category: "CS Operations",
    difficulty: 2,
    scenario: "You're asked to present a CSM business impact report to your VP. You have data on renewal rates, NPS scores, adoption percentages, QBR completion rates, and escalation resolution times. How do you structure the most compelling presentation?",
    quote: "CSM impact is felt in renewals. Everything else is how you explain why.",
    options: [
      "Present all metrics with equal weight — let the VP determine which matter most for their priorities.",
      "Lead with renewal rate and net revenue retention, then show the leading indicators — adoption, NPS, engagement — that explain what's driving those outcomes.",
      "Lead with NPS — it's the most universally understood and benchmarkable customer satisfaction metric.",
      "Focus on QBR completion rate and escalation resolution time — they demonstrate the discipline and process quality of your team."
    ],
    correct: 1,
    consequences: {"strategicPosition":8,"customerTrust":5,"growth":6},
    explanation: "Business leadership cares primarily about outcomes tied to revenue: renewals, net revenue retention, and expansion. These are the metrics that justify CS investment. Once you've established the outcome headline, the leading indicators (adoption trends, NPS, executive engagement) explain the causal mechanisms — and make the case that your team's activities are what's driving the revenue outcomes. This structure makes the business case for CS while giving the VP a complete picture. NPS-first puts a sentiment metric before the revenue metric; process-first (QBR completion, escalation times) tells VPs about your operations, not your impact.",
    framework: "CS Business Case: outcomes first, leading indicators second.",
    principle: "VPs speak revenue. Start there, then explain the process that makes it possible.",
    traps: [
      "Equal weight presentation — creates metric sprawl where no story emerges",
      "NPS-first — important but secondary to revenue outcomes in a VP-level conversation",
      "Process metrics first — demonstrates competence but doesn't make the financial case for your team's value"
    ]
  },
  {
    id: "CSM-CO09",
    category: "CS Operations",
    difficulty: 2,
    scenario: "You've just joined as the new CSM manager. The team uses widely inconsistent playbooks — each CSM has their own approach to QBRs, renewals, and onboarding. Some approaches are excellent, some are weak. What's your change management approach to building consistency?",
    quote: "Before you standardize, understand what's worth standardizing.",
    options: [
      "Roll out a new unified playbook immediately to establish consistency from day one of your tenure.",
      "Allow each CSM to maintain their individual approaches — their customers have adapted to their methods.",
      "Shadow QBRs and renewals across the team, document the strongest practices, and build the standard playbook collaboratively with the team's top performers — so the standard reflects what actually works.",
      "Have each CSM present their current approach to the full team so everyone can learn from each other informally."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"executionRisk":-6,"strategicPosition":7},
    explanation: "A new manager who immediately imposes a new playbook without understanding the existing practices will standardize on assumptions rather than evidence — and will encounter significant resistance. The right approach is observation-first: shadow a range of customer interactions, document what's working across the team's highest performers, and then build the standard from those best practices. When the team's top performers have contributed to the playbook, they become its advocates, not its resistors. Allowing indefinite individual variation produces inconsistent customer experience at scale. Peer sharing without facilitation is useful but doesn't produce a standard.",
    framework: "Playbook Development: observe, document, co-build — in that order.",
    principle: "The playbook that sticks is the one the team helped write.",
    traps: [
      "Day-one playbook rollout — imposes a standard built on insufficient evidence and creates immediate resistance",
      "Individual approach preservation — inconsistency at scale produces inconsistent customer outcomes",
      "Peer sharing without synthesis — useful input but doesn't produce the consistent standard that a managed rollout requires"
    ]
  },
  {
    id: "CSM-CO10",
    category: "CS Operations",
    difficulty: 2,
    scenario: "Your company is moving to a tiered CSM model — high-touch, mid-touch, digital-touch. You've been asked to propose which of your 30 accounts belong in which tier. What criteria and framework do you use?",
    quote: "Account tiers should follow potential and risk, not just current size.",
    options: [
      "Segment purely by current contract value — largest contracts get high-touch, smallest get digital.",
      "Ask customers which tier they'd prefer and use that to inform the segmentation.",
      "Assign tiers based on which accounts are most actively engaged with you — high engagement earns high-touch.",
      "Build a multi-factor model: weight ARR, strategic value (logo importance, reference potential), growth opportunity, and current health score together — so that large at-risk accounts and high-potential growth accounts qualify for high-touch regardless of current size."
    ],
    correct: 3,
    consequences: {"strategicPosition":8,"growth":7,"executionRisk":-6},
    explanation: "A tiering model based solely on current ARR misallocates resources in two critical ways: it over-invests in large accounts that are healthy and self-sufficient, and it under-invests in smaller accounts with significant expansion potential or elevated churn risk. The right model combines current ARR with strategic value (reference potential, market logo importance), growth probability (is this account likely to double in 2 years?), and current health (a large at-risk account needs more intervention than a small stable one). This produces a segmentation that serves both business risk management and growth capture. Customer preference input is useful color but cannot be the basis for a coverage model.",
    framework: "Tiered Coverage: multi-factor segmentation outperforms size-only sorting.",
    principle: "High-touch resources go where churn risk and growth potential are highest — not just where ARR is biggest.",
    traps: [
      "ARR-only segmentation — over-serves stable large accounts, under-serves at-risk and high-growth smaller ones",
      "Customer preference input — customers will all say they want high-touch; this can't be the decision framework",
      "Engagement-based tiers — engaged accounts may not need high-touch; the accounts that need you most may be the least engaged"
    ]
  },
]
