export const CASES_PM = [
  {
    id: "RP01",
    category: "Roadmap & Prioritization",
    difficulty: 1,
    scenario: "Your sales team is pushing hard for a bulk-import CSV feature because three enterprise prospects mentioned it during demos. Your RICE analysis ranks it 7th out of 12 backlog items. A core workflow improvement ranks 1st with significantly higher reach and confidence. Sales argues that \"momentum is perishable.\"",
    quote: "\"If we don't build this now we'll lose three deals.\"",
    options: [
      "Build the top-RICE item and give sales a clear timeline and talking points for the CSV feature.",
      "Build the CSV import first — sales momentum and pipeline pressure justify the exception.",
      "Build both in parallel by splitting engineering capacity.",
      "Escalate to the CEO to break the tie between sales and product."
    ],
    correct: 0,
    consequences: {"growth":5,"strategicPosition":10,"executionRisk":-5,"teamMorale":5},
    explanation: "RICE scoring exists precisely to protect teams from the loudest voice in the room. The highest-RICE item delivers the most impact per unit of effort. Sales needs a crisp explanation and a realistic timeline — not your capitulation. Splitting engineering for a lower-priority item doubles context-switching costs.",
    framework: "RICE Prioritization (Reach × Impact × Confidence ÷ Effort)",
    principle: "Frameworks exist to protect teams from the loudest voice in the room.",
    traps: [
      "Giving in to pipeline pressure sets a precedent where sales overrides prioritization every quarter.",
      "Parallel work at 50% is not two features at full value — it's both features done worse, slower.",
      "Escalating a straightforward prioritization call to the CEO is an abdication of PM responsibility."
    ]
  },
  {
    id: "RP02",
    category: "Roadmap & Prioritization",
    difficulty: 2,
    scenario: "Your engineering lead says the team needs two full sprints to address growing technical debt before it starts visibly impacting performance. You have a Q3 roadmap with three features committed to enterprise customers. The lead says \"we can do features AND debt if we half-do both.\"",
    quote: "\"I'm worried we're building on a cracking foundation.\"",
    options: [
      "Approve the \"half-do both\" approach — you cannot break commitments to enterprise customers.",
      "Give engineering the two full sprints and proactively renegotiate one or two roadmap items with affected customers.",
      "Reject the debt work — engineering always wants more cleanup time than is necessary.",
      "Escalate to the CTO to make the call, since it's a technical decision."
    ],
    correct: 1,
    consequences: {"executionRisk":-15,"teamMorale":10,"customerTrust":5,"growth":0},
    explanation: "Half-done technical debt pays no dividend — it still accrues interest. One honest proactive conversation with a customer beats a slow-motion quality spiral that damages every future delivery. Real PMs renegotiate proactively when they have good reasons, rather than letting engineering debt silently compound.",
    framework: "Technical Debt Quadrant (Fowler) — reckless vs. prudent, deliberate vs. inadvertent",
    principle: "You cannot borrow time from the future indefinitely. Pay the debt or pay the interest forever.",
    traps: [
      "Half-measures on both means neither gets done properly. Two half-fixed things is worse than one fully fixed thing.",
      "Dismissing engineering concerns without data is how PMs lose trust with their teams permanently.",
      "Technical prioritization decisions with direct customer impact are a PM call, not a CTO call alone."
    ]
  },
  {
    id: "RP03",
    category: "Roadmap & Prioritization",
    difficulty: 1,
    scenario: "Your largest customer — 30% of ARR — requests a very specific workflow feature that maps only to their internal approval process. It would take three weeks to build and doesn't fit your platform strategy. No other customer has requested anything similar.",
    quote: "\"If you build this we will definitely renew for three years.\"",
    options: [
      "Build it immediately — 30% of ARR is existential and cannot be risked.",
      "Say no firmly to protect product strategy and accept the churn risk.",
      "Explore whether the underlying need can be met by a configurable solution that would serve multiple customers, and propose a timeline.",
      "Promise to prioritize it next quarter without making a hard commitment."
    ],
    correct: 2,
    consequences: {"customerTrust":10,"strategicPosition":10,"growth":5,"executionRisk":-5},
    explanation: "The answer is neither \"yes\" nor \"no\" — it's \"let's solve the underlying problem.\" Configurable or generalized solutions preserve strategic direction while honoring the customer relationship. Vague promises are worse than clear, honest responses and erode trust over time.",
    framework: "Jobs-to-be-Done reframing — solve the job, not the stated feature request",
    principle: "Build for the problem, not the customer. One solution should serve many.",
    traps: [
      "Building one-off features for large customers creates a catalog of unmaintainable exceptions that slow every future sprint.",
      "A flat refusal without exploring alternatives is lazy PM work that ignores real customer value.",
      "Vague roadmap promises destroy credibility faster than a clear \"no with explanation.\""
    ]
  },
  {
    id: "RP04",
    category: "Roadmap & Prioritization",
    difficulty: 2,
    scenario: "Four items are competing for one sprint slot: (A) a bug fix affecting 5% of users, (B) a new feature 40% of users want but your approach has low confidence, (C) an infrastructure upgrade invisible to users, (D) an onboarding improvement backed by strong activation data. Your stakeholders are split four ways.",
    quote: "\"Everyone has a valid argument. You need to make the call.\"",
    options: [
      "The bug fix — never let known bugs persist for users, regardless of how few are affected.",
      "The new feature — 40% demand is a strong signal that cannot be ignored.",
      "The infrastructure upgrade — technical health is the foundation everything else rests on.",
      "The onboarding improvement — data-backed, high confidence, direct impact on revenue-generating activation."
    ],
    correct: 3,
    consequences: {"growth":10,"profitability":5,"customerTrust":5,"executionRisk":-5},
    explanation: "High confidence plus data-backed evidence plus direct business impact wins. Onboarding improvements compound — every additional user who activates successfully is revenue retained. The 40% demand for the new feature with low confidence is a hypothesis, not a proven solution. Bugs affecting 5% of users belong in the next sprint, not as a priority override.",
    framework: "Impact × Confidence prioritization matrix",
    principle: "Confidence and evidence beat volume of requests.",
    traps: [
      "Prioritizing a 5%-impact bug above high-confidence revenue impact is risk-aversion masquerading as quality care.",
      "Demand without confidence means you might build the wrong solution for a real need — and waste the whole sprint.",
      "Infrastructure work that delivers no user value should be bundled with other work, not given a solo sprint slot."
    ]
  },
  {
    id: "RP05",
    category: "Roadmap & Prioritization",
    difficulty: 3,
    scenario: "You are 60% through a major feature build when competitive intelligence shows a rival will ship a near-identical feature in four weeks. Leadership is pushing to rush the release. Engineering says rushing risks a broken launch. You are caught in the middle.",
    quote: "\"If they ship it first we lose the narrative.\"",
    options: [
      "Ship a disciplined MVP version with the core functionality in three weeks, then ship the full version two weeks later.",
      "Push engineering to ship the full feature early regardless of quality — market timing matters.",
      "Pause the feature entirely and pivot to a different area of differentiation.",
      "Hold the original timeline — reacting to competitor noise with rushed work is always a mistake."
    ],
    correct: 0,
    consequences: {"growth":10,"strategicPosition":10,"executionRisk":-10,"customerTrust":5},
    explanation: "Rushing produces regret. A scoped, stable MVP gets you to market before the competitor while protecting quality and customer trust. The disciplined middle path beats both panic (rushing a broken feature) and paralysis (ignoring real market pressure). A two-wave ship is a professional PM move.",
    framework: "MVP scoping under time pressure — scope is the variable, quality is not",
    principle: "The best way to beat a deadline is to shrink the scope, not the quality bar.",
    traps: [
      "Shipping broken features to win a launch date damages customer trust in ways that take quarters to repair.",
      "Pivoting away from a 60% complete strategic feature is expensive waste — the sunk cost is real here.",
      "Completely ignoring a competitor ship date is not discipline, it's denial. The market signal is real."
    ]
  },
  {
    id: "RP06",
    category: "Roadmap & Prioritization",
    difficulty: 2,
    scenario: "Your CEO walks out of a customer visit and announces in your next all-hands that \"we're adding live chat to the product — the customer loves it and it will close three enterprise deals.\" Your RICE score has it ranked 9th out of 15. Your team is at full capacity.",
    quote: "\"I heard it from the customer directly. This is the priority now.\"",
    options: [
      "Add live chat to the top of the backlog immediately — the CEO has customer context you may not have.",
      "Ask the CEO for 24 hours to assess the full impact and trade-offs, then present a clear recommendation with data.",
      "Push back directly in the meeting — this is not how prioritization decisions should work.",
      "Add it to the roadmap without removing anything and let the team absorb the extra work."
    ],
    correct: 1,
    consequences: {"strategicPosition":5,"teamMorale":10,"executionRisk":-5,"growth":5},
    explanation: "You cannot fight a HiPPO in the moment. You can challenge it with data in a private conversation. Give yourself space to analyze, then return with: \"We can do this if we defer X and Y — here is the impact of both paths.\" That is not pushback; that is your job done well.",
    framework: "HiPPO management (Highest Paid Person's Opinion) through data framing",
    principle: "Never fight authority in the room. Fight it with evidence in a quiet conversation.",
    traps: [
      "Capitulating without analysis sets a precedent that any executive customer visit can override the roadmap.",
      "Public pushback on a CEO announcement embarrasses leadership and rarely changes the outcome.",
      "Adding to scope without removing anything is how teams burn out and sprint velocity collapses."
    ]
  },
  {
    id: "RP07",
    category: "Roadmap & Prioritization",
    difficulty: 1,
    scenario: "A competitor just shipped a feature your customers have been requesting. Your team is anxious. You have the same feature planned for Q4. Leadership is asking why you are behind and whether the roadmap needs to change.",
    quote: "\"We look like we're always following them. This is embarrassing.\"",
    options: [
      "Immediately reprioritize and attempt to ship the feature in two weeks regardless of quality.",
      "Drop the feature entirely — once a competitor ships something, it becomes table stakes, not differentiation.",
      "Confirm the Q4 timeline is still right given your trade-offs, brief leadership on the reasoning, and focus the team on quality execution.",
      "Launch an emergency competitive audit before making any roadmap decisions."
    ],
    correct: 2,
    consequences: {"strategicPosition":10,"teamMorale":10,"executionRisk":-10,"growth":5},
    explanation: "Reactive feature-matching is a losing strategy. The competitor's ship date does not change your engineering timeline, your quality bar, or the trade-offs you already analyzed. A calm, data-backed conversation with leadership reasserts your roadmap rationale. The team that follows its strategy wins.",
    framework: "Competitive positioning vs. reactive development",
    principle: "Your roadmap should be driven by your strategy, not your competitors' press releases.",
    traps: [
      "Two-week panic builds produce bugs, technical debt, and damaged customer trust. The rushing tax is real.",
      "Features competitors ship often become table stakes — walking away concedes ground you already planned to take.",
      "An audit as a delay tactic is procrastination. You already have the relevant competitive context."
    ]
  },
  {
    id: "RP08",
    category: "Roadmap & Prioritization",
    difficulty: 3,
    scenario: "Your leadership team wants a 12-month roadmap with monthly milestones shared with enterprise customers and investors. You know that SaaS discovery is iterative — in your experience, roadmaps beyond three months go significantly stale. You need to propose a structure everyone can work with.",
    quote: "\"Investors need predictability. Customers are asking for commitments.\"",
    options: [
      "Agree to a full 12-month roadmap with monthly milestones — predictability is what investors and customers need.",
      "Create the 12-month roadmap for external use and plan internally to ignore most of it after Q1.",
      "Push back entirely — detailed long-term roadmaps are anti-agile and destroy learning velocity.",
      "Propose a tiered structure: 3-month committed near-term, 6-month directional themes, 12-month strategic vision only."
    ],
    correct: 3,
    consequences: {"customerTrust":10,"strategicPosition":10,"executionRisk":-10,"growth":5},
    explanation: "The tiered roadmap is the industry-standard answer. It gives investors and customers the predictability they need while preserving team flexibility where uncertainty is real. Rigid 12-month roadmaps become broken promises. No roadmap is an investor relations disaster. Tiers solve both problems.",
    framework: "Now / Next / Later roadmap tiers — commit to outcomes, share themes, not tickets",
    principle: "Commit to outcomes, not features. Share themes, not tickets.",
    traps: [
      "A 12-month feature-level roadmap guarantees you will be apologizing for missed commitments within six months.",
      "Refusing to give investors and customers any roadmap visibility is a trust-destroying overcorrection.",
      "Two-faced roadmaps — one for show, one for real — destroy team credibility the moment anyone compares them."
    ]
  },
  {
    id: "RP09",
    category: "Roadmap & Prioritization",
    difficulty: 2,
    scenario: "Three separate enterprise customers each request a different native integration — Salesforce, HubSpot, and NetSuite. Each build takes six weeks. Each customer offers a $5K implementation fee but no additional ARR. Your stated strategic direction is to become an open platform with an integration marketplace.",
    quote: "\"Three integrations, three wins. What's the debate?\"",
    options: [
      "Invest eight weeks in building a proper integration framework or marketplace that enables all three and all future integrations.",
      "Build all three in parallel — $15K in combined implementation fees covers the cost and keeps all customers happy.",
      "Build the integration for the customer with the highest ARR first, then queue the others.",
      "Decline all three and stay focused on deepening your core product."
    ],
    correct: 0,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-10,"profitability":5},
    explanation: "Three bespoke integrations equal 18 weeks of work, triple the maintenance debt, and zero platform leverage. An integration framework takes eight weeks but creates infinite leverage. $15K in one-off fees is noise — a marketplace is a business model. When three separate requests reveal a pattern, you build the system, not the workarounds.",
    framework: "Platform thinking vs. point solution thinking — build leverage, not instances",
    principle: "Do the hard thing once. Build the system, not the workaround.",
    traps: [
      "Sequencing bespoke builds by ARR is just methodical waste — 18 weeks of integration debt with no leverage.",
      "Three parallel bespoke builds triples your maintenance surface and produces no strategic asset.",
      "Declining all three when you have a clear strategic path to platform leverage is a missed forcing function."
    ]
  },
  {
    id: "RP10",
    category: "Roadmap & Prioritization",
    difficulty: 3,
    scenario: "You are a PM at an early-stage startup with three engineers and six months of runway. You face a choice: (A) deepen core workflow quality, which will raise NPS but not directly drive new ARR, or (B) build a reporting feature two enterprise prospects say they need to sign contracts worth $300K ARR combined. Your runway math requires at least one deal.",
    quote: "\"We need that ARR. Build the reporting feature.\"",
    options: [
      "Deepen the core workflow — NPS and retention compound into revenue eventually.",
      "Spend two days talking to both prospects to verify reporting is truly the sole blocker before committing to build it.",
      "Build the reporting feature immediately — $300K ARR extends runway by 12 months and solves the existential risk.",
      "Explore a funding round to avoid making this trade-off under pressure."
    ],
    correct: 1,
    consequences: {"cash":10,"growth":10,"executionRisk":-10,"strategicPosition":5},
    explanation: "\"Customers say they need X to buy\" is a hypothesis, not a fact. Deals fall through for dozens of reasons unrelated to features. Spend two hours verifying before spending eight weeks building. If reporting is genuinely the sole blocker for qualified deals, option B becomes clearly right. But if it is not, you just spent your last six weeks on a feature that did not close the deal.",
    framework: "Hypothesis-driven roadmap decisions — validate before you build",
    principle: "Verify the assumption before you build the solution.",
    traps: [
      "Optimizing NPS when runway is six months is a luxury decision — survival comes first.",
      "Building without verification is the right instinct applied to an unconfirmed assumption. Two days of calls changes this calculus entirely.",
      "Raising a round to avoid a product decision is not a strategy — it is delay with dilution."
    ]
  },
  {
    id: "DR01",
    category: "Discovery & Research",
    difficulty: 1,
    scenario: "In user interviews, 8 out of 10 customers say they would \"definitely use\" a mobile app version of your platform. Your analytics show that 94% of sessions happen on desktop and mobile session duration averages 47 seconds. Mobile is clearly used but briefly. You are about to kick off mobile development.",
    quote: "\"Eight out of ten users asked for it. That's basically unanimous.\"",
    options: [
      "Start mobile development immediately — 80% stated intent is the strongest user signal you could get.",
      "Dismiss the interviews entirely — the behavioral data clearly shows mobile is not a priority.",
      "Probe deeper: ask what specific tasks they would complete on mobile, and analyze what mobile users actually do in those 47 seconds.",
      "Build a lightweight mobile prototype and run a test before committing to full development."
    ],
    correct: 2,
    consequences: {"customerTrust":10,"growth":10,"executionRisk":-15,"profitability":5},
    explanation: "The classic say-do gap: \"I would use it\" in interviews is almost always inflated. 47-second mobile sessions suggest a specific lightweight use case — likely notifications or quick status checks, not full workflows. Reconciling the stated intent with actual behavior reveals what to actually build, which is likely far smaller and faster than a full mobile app.",
    framework: "Say/Do Gap Analysis — behavioral data vs. stated preferences",
    principle: "What users say they want and what they actually do are two different data sets. Trust the behavior.",
    traps: [
      "Building a full mobile app based on stated intent without understanding the actual use case is multi-month waste.",
      "Dismissing qualitative signal entirely because it conflicts with one metric is analytically lazy.",
      "Prototyping before understanding the use case still builds the wrong thing — just faster."
    ]
  },
  {
    id: "DR02",
    category: "Discovery & Research",
    difficulty: 1,
    scenario: "You have completed six customer interviews and the same themes keep repeating. Your engineering team is idle and asking when they can start. Your manager is asking for the spec. A colleague says you need at least 20 interviews for statistically valid qualitative research.",
    quote: "\"Six interviews is not enough. You are about to build on bad data.\"",
    options: [
      "Run 14 more interviews to reach the 20-user threshold before writing any spec.",
      "Write the spec now since your manager is asking — you can validate with users after you ship.",
      "Keep discovering continuously while engineering builds in parallel to save time.",
      "Stop discovery when new interviews stop surfacing new themes — thematic saturation is your signal, not a headcount target."
    ],
    correct: 3,
    consequences: {"executionRisk":-10,"growth":5,"teamMorale":5,"customerTrust":5},
    explanation: "Thematic saturation — when interviews consistently repeat the same insights — is the right stopping signal. Six interviews at saturation beats 20 interviews with no new signal. Qualitative research is not statistics; you are not sampling for distribution, you are listening for patterns. When patterns stop changing, you have enough to write a testable hypothesis.",
    framework: "Thematic Saturation (Teresa Torres) — discover until saturation, then build and keep listening",
    principle: "Discover until you are saturated, then build and keep listening.",
    traps: [
      "A 20-interview target is a misapplication of quantitative sampling logic to qualitative research.",
      "Building in parallel during discovery produces specs that change mid-sprint — the most expensive kind of rework.",
      "Post-ship validation is not discovery — it is damage control after the build decision is made."
    ]
  },
  {
    id: "DR03",
    category: "Discovery & Research",
    difficulty: 2,
    scenario: "In a B2B sales context, the economic buyer — a VP of Operations — says her team needs better reporting. The end users, the operators who use your product daily, say reporting is fine but data entry is painful and time-consuming. You have capacity to address one problem this quarter.",
    quote: "\"She controls the budget. We build what she asks for.\"",
    options: [
      "Investigate whether the VP's reporting request is actually caused by unreliable data entry upstream — the symptoms may share a root cause.",
      "Build the data entry improvement — the operators use the product daily and their pain is the real problem.",
      "Build the reporting improvement — the VP controls the purchasing decision and renewal.",
      "Survey all operators to get a majority vote on which problem to solve first."
    ],
    correct: 0,
    consequences: {"customerTrust":15,"growth":10,"executionRisk":-10,"strategicPosition":5},
    explanation: "In B2B, the economic buyer often describes a symptom while the root cause is upstream. Bad reports are almost always caused by bad data. Fixing reporting on bad data solves nothing and creates an expensive facade. Connecting both layers in discovery almost always reveals the VP's real pain is data quality, not report design.",
    framework: "B2B Jobs-to-be-Done layering — buyer job vs. user job, symptom vs. root cause",
    principle: "The buyer describes the symptom. The user lives with the cause. Find the cause.",
    traps: [
      "Building for the buyer without understanding the root cause creates a fix that does not fix anything.",
      "Ignoring the buyer's stated pain is strategically risky even if you are technically correct about the root cause.",
      "Operator surveys measure preference, not root cause — they tell you what people want, not what they actually need."
    ]
  },
  {
    id: "DR04",
    category: "Discovery & Research",
    difficulty: 2,
    scenario: "You built a clickable prototype and tested it with five users. All five said they loved it and would use it daily. You are about to greenlight six weeks of development. Your UX researcher flags a concern about the quality of the feedback you received.",
    quote: "\"Five for five is as strong as it gets. Let's build it.\"",
    options: [
      "Proceed immediately — five positive responses from real users is strong signal.",
      "Pause and re-examine: users shown a prototype by its creator rarely criticize it. The feedback may be inflated by courtesy bias.",
      "Run more tests with the prototype until you have 15+ responses before deciding.",
      "Have the UX researcher run the next round of tests independently to remove the creator effect."
    ],
    correct: 1,
    consequences: {"executionRisk":-15,"customerTrust":5,"growth":5,"teamMorale":5},
    explanation: "Courtesy bias (social desirability bias) systematically inflates positive feedback in prototype sessions, especially when the PM or designer is in the room. The fix is not more sessions with the same format — it is changing the questions (\"What would you change?\" not \"Do you like it?\") and observing behavior rather than eliciting opinion.",
    framework: "Courtesy Bias / Desirability Bias in user testing",
    principle: "Never ask users if they like your prototype. Watch what they struggle with.",
    traps: [
      "Five consecutive positive reactions in a PM-led session is a warning sign, not confirmation. That pattern almost never reflects genuine independent evaluation.",
      "More sessions with the same biased format produce more biased data — volume does not fix methodology.",
      "Handing off to a researcher helps, but the core fix is asking better questions and observing behavior."
    ]
  },
  {
    id: "DR05",
    category: "Discovery & Research",
    difficulty: 1,
    scenario: "A customer submits a feature request: \"We need the export function to run 20% faster.\" Your engineering lead says she can hit that target in three weeks. Before you add it to the backlog, you want to understand whether this is the right problem to solve.",
    quote: "\"They asked for faster exports. Let's just make it faster.\"",
    options: [
      "Add it to the backlog — speed improvements are always welcome and the ask is clear.",
      "Ask how much faster they need and whether 20% is the threshold that unblocks them.",
      "Ask what they are trying to accomplish with the export and what they do with the file afterward.",
      "Check if other customers have requested faster exports before prioritizing one customer's request."
    ],
    correct: 2,
    consequences: {"customerTrust":10,"growth":5,"executionRisk":-10,"strategicPosition":5},
    explanation: "The customer's stated request hides the real job. Asking about the downstream use often reveals the actual solution — they may not need faster exports at all. They may need scheduled automated delivery, a direct integration that eliminates the export step entirely, or a real-time dashboard. The job is \"access the data quickly,\" not \"make the export faster.\"",
    framework: "Jobs-to-be-Done (Christensen) — the customer knows their problem, only you can find the real solution",
    principle: "The customer knows their problem. Only you can discover the real solution.",
    traps: [
      "Building what was asked without understanding why produces technically correct solutions that solve the wrong problem.",
      "Clarifying the degree of improvement still assumes export speed is the right lever. The job question comes first.",
      "Cross-customer demand validation is useful but premature — understand the job before you count votes."
    ]
  },
  {
    id: "DR06",
    category: "Discovery & Research",
    difficulty: 2,
    scenario: "Your analytics show Feature X has only 12% adoption 90 days after launch. Engineering wants to deprecate it. You have spoken with three customers who use it regularly and call it \"critical to their workflow.\" You believe discoverability is the real problem, not value.",
    quote: "\"Twelve percent is clear evidence it failed. Cut it.\"",
    options: [
      "Deprecate it — 12% adoption after 90 days is unambiguous evidence of failure.",
      "Keep it and defend it based on the three passionate customer conversations.",
      "Relaunch the feature with a marketing campaign to drive broader awareness.",
      "Run a targeted test: improve discoverability for a defined segment and measure adoption lift over 30 days before deciding."
    ],
    correct: 3,
    consequences: {"executionRisk":-10,"customerTrust":10,"growth":5,"teamMorale":5},
    explanation: "Killing at 12% without testing the discoverability hypothesis is premature. But defending a feature on three passionate users against clear data is also wrong. A scoped experiment isolates the variable. If an improved path moves adoption to 30%, the hypothesis was right. If it stays at 12%, kill it with confidence and data behind you.",
    framework: "Controlled Feature Experiment — isolate the variable, then decide",
    principle: "When data and intuition conflict, run an experiment. Do not choose sides — generate evidence.",
    traps: [
      "Killing without testing the discoverability hypothesis wastes the three weeks already invested in the build.",
      "Three passionate users versus 88% non-adoption is not a winning argument. Passion is a bias, not evidence.",
      "A marketing campaign for a feature with unknown value problems spends budget before understanding the issue."
    ]
  },
  {
    id: "DR07",
    category: "Discovery & Research",
    difficulty: 3,
    scenario: "Your SaaS company has scaled to 50 enterprise customers. Deep 1:1 interviews for every product decision are no longer feasible at your pace. Your team is pushing to switch entirely to quantitative signals — analytics, surveys, and NPS — for speed. You must define the right research operating model.",
    quote: "\"We can't do weekly calls with 50 enterprise accounts. Scale or fall behind.\"",
    options: [
      "Establish a continuous discovery habit: lightweight weekly conversations with one or two customers alongside quantitative signals for validation.",
      "Keep doing deep qualitative interviews for all significant decisions — losing customer closeness is too costly.",
      "Switch fully to quantitative research — it is statistically more valid at this customer count.",
      "Hire a dedicated UX researcher so PMs can focus on strategy and delivery."
    ],
    correct: 0,
    consequences: {"customerTrust":10,"growth":10,"executionRisk":-10,"strategicPosition":10},
    explanation: "Neither all-quantitative nor all-qualitative works at scale. The gold standard is continuous discovery — weekly customer conversations that take 30 minutes per session, combined with quantitative data for validation and sizing. Quantitative tells you how many and what. Qualitative tells you why. Outsourcing discovery to a researcher disconnects PMs from the insight that should drive their decisions.",
    framework: "Continuous Discovery Habits (Teresa Torres) — weekly touchpoints plus quantitative validation",
    principle: "At scale, stay close through habits. Weekly conversations beat quarterly deep dives.",
    traps: [
      "Quant alone tells you what is happening, never why. You will optimize the wrong things faster.",
      "Deep qualitative research for every decision at 50 accounts creates a bottleneck that halts the team.",
      "A researcher who discovers without PMs present produces insights PMs do not own or act on."
    ]
  },
  {
    id: "DR08",
    category: "Discovery & Research",
    difficulty: 2,
    scenario: "Your top 10 customers have submitted feature requests this quarter. Seven of your largest accounts each asked for a different feature. Three smaller accounts all asked for the same feature. Your team is debating whether to build the consensus request from the three, or investigate the varied requests from the seven.",
    quote: "\"Three customers agreeing is a signal. Seven customers disagreeing is noise.\"",
    options: [
      "Build the consensus feature from the three customers — agreement is a strong prioritization signal.",
      "Investigate the seven varied requests more deeply — they may share a common underlying workflow pain expressed differently.",
      "Weight by ARR: the seven larger accounts represent more revenue so their requests take priority.",
      "Survey all 10 customers to find which single feature they value most."
    ],
    correct: 1,
    consequences: {"customerTrust":10,"strategicPosition":10,"executionRisk":-5,"growth":10},
    explanation: "Seven different feature requests from power users often signals a fundamental workflow gap that each customer is working around in their own way. Finding the common root cause could unlock a single solution that satisfies all seven and creates far more product leverage than the consensus request from smaller accounts. Cluster the jobs, not the features.",
    framework: "Clustering feature requests by underlying job — different features, same pain",
    principle: "Different features, same pain. Always look for the problem behind the request.",
    traps: [
      "Consensus on a feature is useful signal but ignores whether the feature solves the highest-value job.",
      "ARR-weighting for features is a reasonable tie-breaker, not a discovery methodology.",
      "A survey at this stage measures preferences, not root cause — you need conversations, not rankings."
    ]
  },
  {
    id: "DR09",
    category: "Discovery & Research",
    difficulty: 3,
    scenario: "You have a hypothesis: customers will pay $50 per month for an advanced analytics add-on. Your engineering team wants to build the feature before testing willingness-to-pay. You believe the assumption needs validation before spending eight weeks on development.",
    quote: "\"We know our customers. They'll pay for it. Let's just build it.\"",
    options: [
      "Build an MVP and track upgrade conversions after launch.",
      "Add a \"coming soon — join the waitlist\" landing page and measure email capture rate.",
      "Create a live pricing page for the add-on with an \"Upgrade Now\" button that shows existing users — and measure who clicks through.",
      "Ask customers in discovery interviews whether they would pay $50 per month for the feature."
    ],
    correct: 2,
    consequences: {"profitability":10,"growth":5,"executionRisk":-15,"cash":5},
    explanation: "A fake paywall test (showing existing users a real pricing page with an upgrade CTA) is the gold standard for willingness-to-pay validation because it captures real behavioral intent — not stated preference. Building first is the most expensive way to test a hypothesis. Interview responses about payment are notoriously inflated. Clicking a real \"buy\" button is the closest proxy to an actual purchase decision.",
    framework: "Smoke Test / Fake Door Testing — behavioral validation before building",
    principle: "The only real validation is someone clicking buy. Everything else is a polite guess.",
    traps: [
      "Building first inverts the learning process — you spend eight weeks to confirm an assumption you could test in three days.",
      "Waitlist signups have even lower commitment than interviews. Email capture is cheap enough to over-index on.",
      "\"Would you pay?\" in an interview has a 60-80% false positive rate. People say yes to avoid disappointing you."
    ]
  },
  {
    id: "DR10",
    category: "Discovery & Research",
    difficulty: 2,
    scenario: "Your churn rate ticked up 2 percentage points this quarter. The current hypothesis across your team is that a recent pricing change is responsible. You have eight churned customers available for exit interviews. You want to surface the real cause, not just confirm the current theory.",
    quote: "\"The pricing change clearly caused this. Let's just verify.\"",
    options: [
      "Open with: \"Was our pricing too high?\" — direct questions get direct answers.",
      "Ask: \"What could we have done differently to keep you as a customer?\"",
      "Ask: \"Which competitor did you switch to and why did they win?\"",
      "Ask: \"Walk me through the moment you decided to leave.\""
    ],
    correct: 3,
    consequences: {"customerTrust":5,"growth":10,"executionRisk":-10,"strategicPosition":10},
    explanation: "The narrative technique — asking someone to walk through the moment of decision — surfaces the specific trigger: a frustrating support interaction, a workflow failure, a competitor demo that revealed a gap. Leading with \"was pricing too high?\" confirms your hypothesis instead of discovering truth. \"What could we do better?\" generates wishes, not diagnoses. The story of the moment is where the real data lives.",
    framework: "Churn postmortem narrative technique — the moment of decision carries all the truth",
    principle: "The moment of decision carries all the truth. Ask for the story, not the verdict.",
    traps: [
      "Asking a yes/no question about pricing when you already believe pricing is the cause guarantees confirmation bias.",
      "\"What could you have done differently\" generates aspirational feedback about the future, not diagnosis of the past.",
      "Competitor analysis is useful context but does not reveal why this customer specifically left at this specific time."
    ]
  },
]
