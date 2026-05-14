export const CASES_PM3 = [
  {
    id: "GM01",
    category: "Go-to-Market",
    difficulty: 1,
    scenario: "Your new feature is technically ready to ship. Marketing says they need three more weeks to produce the full campaign assets. Sales wants it immediately to close Q3 deals before quarter end. Engineering says \"it works, ship it.\" You need to make a call that satisfies the business without wasting the marketing investment.",
    quote: "\"Why are we holding a working feature for a marketing campaign?\"",
    options: [
      "Soft-launch to existing customers now with minimal enablement so sales can demo it; run the full external campaign in three weeks.",
      "Hold the release for three weeks until the full marketing campaign is ready to launch together.",
      "Ship the feature now — the product is ready and sales urgency is real.",
      "Delay to next quarter when everything aligns cleanly."
    ],
    correct: 0,
    consequences: {"growth":10,"cash":5,"customerTrust":5,"executionRisk":-5},
    explanation: "The two-speed launch is the professional answer. A soft launch to existing customers enables sales immediately without wasting the full campaign investment. Three weeks of campaign assets have zero value if the deal closes in week one. Staging launches — internal and existing customers first, market-wide after — is a core PM skill that aligns all stakeholders.",
    framework: "Staged launch — soft launch enables sales, full launch maximizes market impact",
    principle: "Do not hold the product for the campaign. Hold the campaign for the full launch. Give sales the product today.",
    traps: [
      "Shipping without any enablement means CS and sales cannot effectively demo or position the feature.",
      "Holding a working feature three weeks for campaign assets is lost sales capacity and missed pipeline opportunity.",
      "Slipping to next quarter because of a minor coordination gap is a disproportionate response to an avoidable problem."
    ]
  },
  {
    id: "GM02",
    category: "Go-to-Market",
    difficulty: 2,
    scenario: "You are launching a new analytics module. Marketing wants to position it as \"the most powerful analytics in the market.\" Your honest assessment is that it is best-in-class for one specific use case — real-time operational dashboards — but weaker than competitors on historical trend analysis and custom report building.",
    quote: "\"Most powerful sounds good. Why complicate the messaging?\"",
    options: [
      "Use \"most powerful analytics\" — broad claims capture more buyer attention and can be validated later.",
      "Position specifically around the strength: \"The only platform built for real-time operational decision-making.\" Own the category where you win.",
      "Soften it to \"powerful analytics\" as a safe middle ground that avoids overstatement.",
      "Hold the launch until you close the historical analysis gap so the broad claim is defensible."
    ],
    correct: 1,
    consequences: {"customerTrust":10,"growth":10,"strategicPosition":15,"cash":5},
    explanation: "Overblown generic claims invite immediate comparison and generate disappointment when buyers discover the gaps. Specific positioning owns a category. If you are genuinely best at real-time operational dashboards, that is a position a qualified buyer can act on. \"Most powerful\" is a claim you cannot prove; \"only platform built for X\" is a promise you can keep and a market you can win.",
    framework: "Product Positioning (April Dunford — Obviously Awesome) — be the obvious choice for a specific buyer",
    principle: "Be the obvious choice for a specific buyer in a specific situation. Vague superlatives serve no one.",
    traps: [
      "Broad capability claims attract buyers who will test the weak spots and churn — or worse, publish negative reviews.",
      "\"Powerful analytics\" is forgettable. It differentiates nothing and positions you nowhere specific.",
      "Delaying launch to close every competitive gap means you never launch — competitors always have something."
    ]
  },
  {
    id: "GM03",
    category: "Go-to-Market",
    difficulty: 1,
    scenario: "You are launching a new $199 per month plan tier. Marketing wants to show only this price on the pricing page to keep things simple. You recommend also showing a $499 \"Enterprise\" tier even though it is several months from being fully scoped. Your head of marketing asks you to justify the recommendation.",
    quote: "\"Why show a plan we can't fully deliver yet?\"",
    options: [
      "Agree with marketing — never show pricing for capabilities you cannot fully deliver.",
      "Show three tiers including a free entry tier, a mid-market tier, and the enterprise tier.",
      "Show the $499 Enterprise tier as a price anchor: its presence makes $199 feel like exceptional value, increasing conversions on your primary tier.",
      "Remove all listed prices and use a \"contact sales\" model to maximize flexibility."
    ],
    correct: 2,
    consequences: {"growth":10,"cash":10,"profitability":5,"customerTrust":5},
    explanation: "Price anchoring is a foundational pricing psychology principle. Showing a higher tier makes your primary tier feel like a bargain, measurably increasing conversions. As long as the Enterprise tier represents a real future offering with honest positioning (not a fake plan), this is standard and ethical practice. This is why every major SaaS pricing page shows three or more tiers with the recommended plan highlighted.",
    framework: "Price Anchoring / Good-Better-Best pricing — context of price determines its perception",
    principle: "The context of price determines its perception. Show the comparison that makes your value obvious.",
    traps: [
      "A single pricing option gives buyers no context for whether $199 is cheap or expensive.",
      "A free tier introduced at the wrong time can cannibalize your primary tier before you have built the expansion mechanics.",
      "\"Contact sales\" pricing eliminates self-serve and requires a sales team to close every deal."
    ]
  },
  {
    id: "GM04",
    category: "Go-to-Market",
    difficulty: 2,
    scenario: "You are designing a beta program for a new API feature before general availability. You have four options: (A) open beta — anyone who requests access can join, (B) five hand-picked technical power users, (C) twenty customers who represent your main ICP segments, or (D) internal team members only.",
    quote: "\"More beta users means more feedback. Why limit it?\"",
    options: [
      "Open beta — broader participation produces more feedback volume and surfaces more bugs.",
      "Five power users — technical depth over breadth, they will find the most critical issues fastest.",
      "Internal dogfooding only — safest before exposing external customers to unfinished work.",
      "Twenty customers across your primary ICP segments — representative coverage of real use cases with actionable feedback."
    ],
    correct: 3,
    consequences: {"customerTrust":10,"executionRisk":-15,"growth":5,"teamMorale":5},
    explanation: "Open betas generate noise — the users who request early access are typically technical enthusiasts who are not representative of your buyer ICP. Five power users gives depth but no breadth. Internal users do not replicate real customer workflows. Twenty customers across your ICP segments is the Goldilocks answer: specific enough to get actionable feedback, diverse enough to catch real-world edge cases.",
    framework: "Beta design for ICP-representative signal — test with the people who will buy, not the people who love betas",
    principle: "Your beta should mirror your market. Test with the people who will buy it.",
    traps: [
      "Open beta feedback is high volume but low signal — enthusiasts find different issues than real buyers.",
      "Five power users will find bugs faster but miss onboarding and adoption issues that affect mainstream users.",
      "Internal users do not face the same setup friction, integration challenges, or workflow contexts as real customers."
    ]
  },
  {
    id: "GM05",
    category: "Go-to-Market",
    difficulty: 3,
    scenario: "You launched a major feature six weeks ago. Adoption is at 8% against a target of 35%. The feature itself tested well in prototype sessions and the engineering quality is high. Your CPO wants a post-mortem and a recovery plan by end of week.",
    quote: "\"Eight percent adoption is a failure. What went wrong?\"",
    options: [
      "Map the full adoption funnel step by step — where are users dropping off between discovery, first attempt, first success, and habit formation?",
      "Conclude that marketing did not do enough to promote the feature and request a paid campaign.",
      "Conclude the feature was not valuable enough and begin planning its deprecation.",
      "Lower access barriers by making the feature free or removing paywalls to drive adoption."
    ],
    correct: 0,
    consequences: {"executionRisk":-15,"growth":10,"customerTrust":5,"strategicPosition":5},
    explanation: "8% adoption on a well-tested feature almost always means a broken adoption path, not a broken feature. The activation funnel has four stages: discover the feature, attempt to use it, succeed at the first use, and integrate it into workflow. Most low-adoption features fail at discovery (users never knew it existed) or first-action (users found it but could not succeed). Find the broken step, fix that step.",
    framework: "Feature Adoption Funnel — Discover, Try, Activate, Habit — find the broken step",
    principle: "Low adoption is not proof of low value. It is proof of a broken path. Find the broken step.",
    traps: [
      "Deprecating a high-quality feature at six weeks because of adoption rates assumes the feature is the problem — it almost never is.",
      "A marketing campaign for a feature with a broken adoption path spends money accelerating users to the same failure point.",
      "Removing paywalls to drive adoption metrics produces adoption theater without understanding or fixing the underlying issue."
    ]
  },
  {
    id: "GM06",
    category: "Go-to-Market",
    difficulty: 2,
    scenario: "You shipped a significant feature four weeks ago. Your CS team is still not including it in customer onboarding calls and your sales team continues to demo the old workflow because \"they do not know the new one well enough.\" Both teams were notified via Slack and a product changelog update.",
    quote: "\"We shipped it. Why isn't the team using it?\"",
    options: [
      "Improve the product documentation and changelog so internal teams can self-serve the information.",
      "Recognize the structural failure: GTM teams were treated as an afterthought. Run a formal internal enablement session with demo scripts, objection handling, and customer talking points before any future launch.",
      "Send a more prominent internal announcement and follow up with the team leads directly.",
      "Escalate to leadership to make internal feature adoption a performance expectation for CS and sales."
    ],
    correct: 1,
    consequences: {"growth":10,"customerTrust":5,"teamMorale":10,"executionRisk":-5},
    explanation: "Internal launches fail because GTM teams are treated as an afterthought. A Slack message and a changelog are not enablement — they are announcements. The root cause is structural: CS and sales did not see the feature being built, do not understand its value proposition, and have not practiced the demo. Fix: include them in late sprint reviews and run a structured enablement session before every future launch.",
    framework: "Internal GTM readiness — pre-launch enablement is a product responsibility",
    principle: "You ship to two audiences: customers and your own team. Neglect either and your launch fails.",
    traps: [
      "Better documentation assumes the problem is knowledge, when it is actually practice and ownership.",
      "More prominent announcements produce more reading, not more competence — the demo still needs to be learned.",
      "Making internal adoption a performance issue without providing the tools to succeed creates resentment, not adoption."
    ]
  },
  {
    id: "GM07",
    category: "Go-to-Market",
    difficulty: 2,
    scenario: "You are adding a new $49 per month Starter tier below your existing $149 per month Professional tier to expand top-of-funnel. Your CFO is worried that existing Professional customers will downgrade to save $100 per month, eroding ARR. You need to design the tier boundary to prevent cannibalization.",
    quote: "\"If our own customers downgrade, we have built a discount button, not a growth engine.\"",
    options: [
      "Do not add the Starter tier — the cannibalization risk is too high to justify top-of-funnel expansion.",
      "Price Starter at $99 to reduce the gap and make downgrading less financially attractive.",
      "Design the Starter tier to lack specific features that Professional users actively depend on daily, and build natural usage-triggered upgrade prompts.",
      "Grandfather all existing Professional customers so they cannot downgrade regardless."
    ],
    correct: 2,
    consequences: {"growth":15,"cash":10,"profitability":5,"strategicPosition":10},
    explanation: "Tier cannibalization is solved by design, not by price gap. The Starter tier must reach the natural ceiling — enough value to attract new buyers and let them experience the product, but clearly missing capabilities that active Professional users rely on daily. Usage-based upgrade prompts (hitting the project limit, needing collaboration features, requiring advanced reporting) convert Starter users up organically.",
    framework: "Pricing tier design — each tier for a different buyer, ceiling creates the upgrade",
    principle: "Design each tier for a different buyer, not a different price point. The ceiling creates the upgrade.",
    traps: [
      "Refusing to build a Starter tier because of cannibalization risk sacrifices a real top-of-funnel growth lever.",
      "Price gap reduction does not prevent downgrading — feature differentiation does.",
      "Locking existing customers into a tier prevents a problem symptomatically without addressing whether Starter is actually designed correctly."
    ]
  },
  {
    id: "GM08",
    category: "Go-to-Market",
    difficulty: 3,
    scenario: "Your product is nominally self-serve but 80% of your revenue comes from enterprise accounts that require long sales cycles, security reviews, procurement approvals, and custom onboarding. Your growth team is focused heavily on improving self-serve conversion rates and PLG metrics.",
    quote: "\"Our self-serve numbers are weak. We need to fix the PLG funnel.\"",
    options: [
      "Invest in self-serve conversion — it scales better than enterprise sales and is the right long-term motion.",
      "Hire more enterprise sales reps to grow revenue while the product team focuses on self-serve.",
      "Move entirely away from self-serve and operate as a pure enterprise product.",
      "Your product investment should match your actual revenue source: if 80% of revenue is enterprise, prioritize enterprise workflow depth, security tooling, SSO, and CS enablement features."
    ],
    correct: 3,
    consequences: {"growth":10,"profitability":15,"strategicPosition":15,"cash":5},
    explanation: "This is a product-strategy mismatch. Where your revenue comes from should dictate where your product investment goes. Self-serve getting 20% of revenue but 60% of product attention is deeply misallocated. The right move is aligning product priorities to your actual growth motion. You can maintain both paths, but investment should be weighted to match where value is being generated today.",
    framework: "GTM motion alignment — product investment should follow the revenue motion",
    principle: "Build for the motion that generates your revenue. Optimize the one that generates your future.",
    traps: [
      "Self-serve as a long-term aspiration does not justify misallocating product capacity away from where 80% of revenue is generated today.",
      "Abandoning self-serve entirely removes optionality and top-of-funnel pipeline before you have proven pure enterprise scale.",
      "Hiring sales without fixing the product gaps enterprise buyers require produces a sales team selling into friction."
    ]
  },
  {
    id: "GM09",
    category: "Go-to-Market",
    difficulty: 3,
    scenario: "You are preparing to launch your SaaS product in Southeast Asia. You have strong product-market fit in the US. A trusted local partner says you need localized pricing in regional currency, localized support hours, and three specific compliance features before you can successfully land. Your CEO says \"just translate the UI and ship — we can iterate from real feedback.\"",
    quote: "\"Just translate it. Real feedback will tell us what else we need.\"",
    options: [
      "Separate must-haves from nice-to-haves: localize pricing in local currency and meet compliance minimums before launch. Support hours and remaining features follow after initial traction.",
      "Follow the local partner's recommendation completely — they know the market better than anyone in the organization.",
      "Follow the CEO's direction — minimal localization first, iterate from actual market signal.",
      "Delay the entire launch until all partner-recommended localization items are complete."
    ],
    correct: 0,
    consequences: {"growth":10,"customerTrust":10,"strategicPosition":10,"executionRisk":-10},
    explanation: "The CEO's \"just translate it\" approach underestimates the trust-breakers that kill conversion in SEA markets — showing USD pricing on a regional platform converts at near-zero in most B2B contexts there. The partner's full list may include six months of work. The PM's discipline is identifying the minimum required to earn trust at first contact: local currency, compliance floor, core UX — then iterating on everything else.",
    framework: "International GTM hierarchy — trust-breakers before launch, enhancements after traction",
    principle: "Localize the trust-breakers before launch. Localize everything else after you have signal.",
    traps: [
      "USD pricing alone will produce near-zero enterprise conversion in most SEA markets. That is not \"iterating\" — it is not launching.",
      "Full partner-recommended localization before any market signal inverts the learning process and may delay by months.",
      "Waiting for complete localization before launch means waiting indefinitely — the list always grows."
    ]
  },
  {
    id: "GM10",
    category: "Go-to-Market",
    difficulty: 1,
    scenario: "Your team just shipped a fix for a significant bug that was affecting 15% of your enterprise users over the past two weeks. The bug caused data export failures. Engineering confirmed the fix is deployed and stable. Your account executive says \"let's not remind customers about the bug — just move on quietly.\"",
    quote: "\"Bringing it up again just reminds them it was broken.\"",
    options: [
      "Agree with the AE — announcing a fix proactively draws attention back to a problem that is now resolved.",
      "Proactively notify all affected users: what happened, what the impact was, what the fix was, and what monitoring is now in place to prevent recurrence.",
      "Include it quietly in the weekly release notes without direct outreach to affected accounts.",
      "Wait to see if affected customers raise it themselves before deciding whether to communicate."
    ],
    correct: 1,
    consequences: {"customerTrust":15,"growth":5,"strategicPosition":5,"executionRisk":-5},
    explanation: "Proactive incident communication is consistently a trust-building move in enterprise B2B. Customers who see you own a problem, explain it clearly, and prove it is fixed become advocates. Silence and buried release notes signal evasion. 15% of enterprise users experiencing data export failures is significant enough that some of them already noticed — the question is whether they hear it from you first.",
    framework: "Trust-forward incident communication — own it, explain it, prove the fix",
    principle: "Never hide a fix. Announcing what you fixed proves you were watching, you care, and you acted.",
    traps: [
      "Staying quiet about a bug that affected 15% of enterprise users does not avoid the conversation — it delays it to a worse moment.",
      "Release notes are read by engineers, not by the VP of Ops whose reports just failed to export all week.",
      "Waiting for customers to raise it means the first conversation happens when they are already frustrated."
    ]
  },
  {
    id: "FD01",
    category: "Feature Decisions",
    difficulty: 1,
    scenario: "You need Single Sign-On for an upcoming enterprise deal pipeline. You could build it internally in six weeks with your engineering team, or integrate an Auth0 or Okta solution in two weeks for $500 per month. You have three enterprise deals worth approximately $150K combined ARR contingent on SSO availability.",
    quote: "\"We should own our authentication infrastructure. It is a strategic component.\"",
    options: [
      "Build SSO internally — authentication is infrastructure you should own and control.",
      "Delay all three enterprise deals until SSO is fully built and owned internally.",
      "Integrate a third-party solution — $500 per month against $150K ARR is an obvious decision, and your team's time is worth more than the component cost.",
      "Ask the enterprise prospects to accept a workaround for the next two quarters."
    ],
    correct: 2,
    consequences: {"cash":10,"growth":15,"executionRisk":-10,"strategicPosition":5},
    explanation: "Build vs. buy decisions should be anchored in core competency and opportunity cost. SSO is solved infrastructure — every major auth provider has done the hard security and compliance work already. Building it from scratch adds no differentiation to your product. At $500 per month against $150K ARR, the ROI is 25x. Buy the commodity, build the differentiator.",
    framework: "Build vs. Buy — core competency filter plus opportunity cost calculation",
    principle: "Build what differentiates you. Buy everything else.",
    traps: [
      "Building solved infrastructure instead of your actual product is the most expensive way to demonstrate ownership.",
      "Delaying $150K ARR for six weeks of infrastructure work has a straightforward cost that almost never makes strategic sense.",
      "Enterprise prospects who have a security requirement for SSO are not negotiating — they have a compliance mandate."
    ]
  },
  {
    id: "FD02",
    category: "Feature Decisions",
    difficulty: 1,
    scenario: "You are three weeks into a six-week sprint. A PM on your team has added four \"small\" items to the scope in the last five days because \"they are quick wins and fit naturally with what engineering is building.\" Engineering has just flagged that the sprint is now running at 140% of capacity.",
    quote: "\"They are tiny additions. Engineering should be able to absorb them.\"",
    options: [
      "Accept the additions — they are genuinely small and momentum matters more than rigidity.",
      "Split the team into two parallel tracks to handle both the original scope and the additions.",
      "Ask engineering to work additional hours this sprint to absorb the extra scope.",
      "Remove the four additions immediately: any scope addition mid-sprint requires removing something of equal size. Establish this as a standing team rule."
    ],
    correct: 3,
    consequences: {"teamMorale":15,"executionRisk":-15,"growth":5,"customerTrust":5},
    explanation: "Scope creep at 140% capacity means you will miss the sprint commitment or ship something broken. The rule is simple and non-negotiable: you can add to a sprint, but you must remove an equal amount. This is a PM culture issue as much as a process one. Every PM must internalize that \"small\" is relative to remaining capacity, not perceived complexity in isolation.",
    framework: "Sprint scope management — additions require removals, capacity is fixed",
    principle: "There is no such thing as a small addition when the sprint is full.",
    traps: [
      "Absorbing additions because they feel small is how sprints consistently blow up without any single obvious cause.",
      "Overtime requests for scope that was added without process is transferring a PM failure onto the engineering team.",
      "Parallel tracks for a three-week sprint extension fragment focus and produce nothing well."
    ]
  },
  {
    id: "FD03",
    category: "Feature Decisions",
    difficulty: 1,
    scenario: "Your team is planning the MVP for a new expense management module. After a two-hour planning session, the agreed scope includes: multi-currency support, approval workflows, receipt scanning via mobile, ERP integration, custom reporting, budget management, and four more features — twelve total. Engineering estimates nine months.",
    quote: "\"We need all twelve features for it to be viable. Less and it doesn't work.\"",
    options: [
      "Reframe: this is not an MVP, it is a full v1.0. An MVP should test the single riskiest assumption with the minimum scope that delivers that learning.",
      "Reduce to six features — if nine months is too long, do it in five.",
      "Approve the full scope — a twelve-feature MVP is justified for a complex domain like expense management.",
      "Cut only the ERP integration and custom reporting as the two most complex items."
    ],
    correct: 0,
    consequences: {"executionRisk":-15,"growth":5,"teamMorale":5,"strategicPosition":10},
    explanation: "MVP inflation is one of the most common PM failures. An MVP with twelve features is not minimal — it is a full product. The discipline is asking: \"What is the single assumption that, if wrong, kills this product? Build only what tests that.\" For expense management, the riskiest assumption might be \"employees will change their submission behavior.\" Test that with a simple form before building twelve features around a habit that may not change.",
    framework: "Lean MVP (Eric Ries) — minimum test of your riskiest assumption, not a small version of your vision",
    principle: "An MVP is the minimum test of your riskiest assumption. Not a small version of your full vision.",
    traps: [
      "A twelve-feature \"MVP\" that takes nine months is not minimal or viable — it is a bet-the-company v1.0 with no intermediate validation.",
      "Reducing from twelve to six features still leaves six unvalidated assumptions baked into a large build.",
      "Cutting the two hardest features is budgeting, not product thinking. The question is what assumption to test, not what is easiest to remove."
    ]
  },
  {
    id: "FD04",
    category: "Feature Decisions",
    difficulty: 2,
    scenario: "A feature you launched 18 months ago has 4% adoption across your user base. It costs approximately $12K per year in infrastructure and maintenance. It generates two to three support tickets weekly. Three customers use it regularly and have told your CS team it is critical to their workflow. No other customers have mentioned it.",
    quote: "\"Three customers love it. We can't just kill something people depend on.\"",
    options: [
      "Keep the feature — three customers calling something critical is sufficient justification.",
      "Notify the three active customers, provide a 90-day deprecation timeline with migration support and data export, then deprecate with the data behind you.",
      "Kill it immediately — 4% adoption and ongoing cost do not justify maintenance.",
      "Build a replacement feature that serves the same underlying need but is designed for broader adoption."
    ],
    correct: 1,
    consequences: {"profitability":5,"customerTrust":10,"executionRisk":-5,"teamMorale":5},
    explanation: "Feature kills should be data-driven and empathetic. 4% adoption and $12K maintenance with no growth trajectory is a clear deprecation signal. But the three active users deserve professional treatment: advance notice, support during the transition, and data portability. A 90-day deprecation window is the B2B SaaS standard that protects customer trust while cleaning up the product.",
    framework: "Feature deprecation protocol — data justifies the kill, empathy earns the trust",
    principle: "Kill features with data. Deprecate them with respect.",
    traps: [
      "Keeping low-adoption features forever means you never reduce maintenance debt and your product accumulates complexity indefinitely.",
      "Immediate deprecation without notice damages the three customers who depend on it and is professionally indefensible.",
      "Building a replacement before validating broader demand repeats the original adoption problem with more invested."
    ]
  },
  {
    id: "FD05",
    category: "Feature Decisions",
    difficulty: 2,
    scenario: "One enterprise customer needs a Salesforce integration and will not renew without it. A second customer needs a HubSpot integration. A third wants NetSuite. Each is a six-week build. Your platform strategy calls for becoming the system of record with an open integration layer. Three more integration requests are already in your support queue.",
    quote: "\"We have three integration requests and three willing customers. Build all three.\"",
    options: [
      "Build the Salesforce integration first since the renewal risk is highest.",
      "Build all three in parallel by assigning one engineer to each integration.",
      "Invest eight to ten weeks in building a proper integration framework that enables all three — and every future integration — in one to two weeks each.",
      "Defer all three integrations and refocus on core product depth."
    ],
    correct: 2,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-10,"profitability":5},
    explanation: "With three integrations in queue and a platform strategy on paper, the math is conclusive: three bespoke builds = 18 weeks plus triple the maintenance overhead. A framework build = 10 weeks, then each integration takes 1-2 weeks with 80% less maintenance. At four or more integrations, the framework pays back. Three in queue is the forcing function to invest in the platform, not the three individual builds.",
    framework: "Platform leverage calculation — build the system when the queue justifies it",
    principle: "Count the queue. When the queue is long enough, build the system.",
    traps: [
      "Sequencing bespoke integrations by urgency solves the renewal problem but creates indefinite maintenance debt.",
      "Three parallel bespoke builds triples the maintenance surface from day one and produces no leverage for future integrations.",
      "Deferring all integrations when customers are asking and willing to renew around them ignores real business signals."
    ]
  },
  {
    id: "FD06",
    category: "Feature Decisions",
    difficulty: 3,
    scenario: "You are considering redesigning your core navigation — a change that touches 40% of your codebase. Data shows it would improve onboarding for new users, but qualitative research suggests some existing power users will resist the change. Engineering estimates four months if done all at once.",
    quote: "\"Touching 40% of the codebase for a navigation change feels very risky.\"",
    options: [
      "Avoid the redesign entirely — 40% codebase impact is too high a risk for a navigation change.",
      "Survey users to see if the NPS impact justifies the engineering investment.",
      "Run an 18-month A/B test before committing to any change.",
      "Evaluate whether this decision can be made reversible: use feature flags and a staged rollout to make the navigation change something you can roll back, then proceed with appropriate speed."
    ],
    correct: 3,
    consequences: {"executionRisk":-15,"growth":10,"customerTrust":5,"teamMorale":10},
    explanation: "The most important question for high-impact decisions is whether they are reversible. Feature flags, staged rollouts, and opt-in migration paths turn irreversible-looking decisions into reversible ones. Once a change can be rolled back, you can move fast. The 40% codebase touch is a complexity signal worth acknowledging in the architecture — but it is not a reason to avoid a beneficial change.",
    framework: "Type 1 / Type 2 Decisions (Bezos) + Feature Flag Reversibility — engineer reversibility into big changes",
    principle: "Make irreversible decisions slowly. Make reversible decisions fast. Most decisions are reversible if you engineer them to be.",
    traps: [
      "Avoiding beneficial product improvements because of codebase scope is a permanent drag on product quality.",
      "An 18-month A/B test for a navigation change will produce stale data and block the team for six quarters.",
      "NPS surveys measure satisfaction with what exists, not willingness to adopt what you have not built yet."
    ]
  },
  {
    id: "FD07",
    category: "Feature Decisions",
    difficulty: 2,
    scenario: "Your sales team is consistently citing \"we lost the deal because we do not have Feature X\" in loss reports. Your competitive analysis shows Feature X has less than 15% adoption among the competitor's users, suggesting it is rarely used even where it exists. You must decide whether to build it.",
    quote: "\"Sales says we keep losing because of Feature X. We have to build it.\"",
    options: [
      "Recognize the feature parity trap: investigate whether Feature X is the actual buying criteria or whether sales is using it as a proxy explanation for losses that have different root causes.",
      "Build Feature X immediately — if sales is losing deals because of it, it has direct revenue impact.",
      "Do not build Feature X — competitors having it means it is table stakes, not differentiation, and you will always be behind.",
      "Build a simplified version of Feature X in two weeks to neutralize the competitive objection."
    ],
    correct: 0,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-10,"teamMorale":5},
    explanation: "Feature parity chasing locks you in reactive mode and commodity positioning. 15% adoption at a competitor means it is not core to their value proposition either. The real question is whether Feature X is the genuine buying criteria or whether it is being cited because the sales champion does not have a stronger internal reason to choose you. Win-loss analysis calls — not survey data — answer this. Build features because they win customers, not because they silence objections.",
    framework: "Feature Parity Trap — differentiation vs. reactive me-too development",
    principle: "Building their features makes you a worse version of them. Understand why you are losing before you build.",
    traps: [
      "Building features directly from loss report citations treats symptoms as diagnoses — deals can be lost for dozens of reasons.",
      "Conceding the ground entirely when Feature X is on your roadmap anyway is an overreaction in the other direction.",
      "A two-week simplified version of a feature that is rarely used by the competitor and may not be the real objection is wasted sprint capacity."
    ]
  },
  {
    id: "FD08",
    category: "Feature Decisions",
    difficulty: 2,
    scenario: "Your engineering team wants to build a fully configurable, multi-tenant, API-first version of a new workflow feature from the start. Their estimate is 16 weeks. A simpler hardcoded version that serves your current two customers who need it would take four weeks. You have no other confirmed customers for this feature yet.",
    quote: "\"We should build it right the first time. Refactoring later is more expensive.\"",
    options: [
      "Approve the flexible architecture — you will need the configurability when you scale.",
      "Build the four-week version for the two current customers and revisit the architecture when you have five or more customers with clear usage patterns.",
      "Find a third-party solution instead of building either version.",
      "Reject the feature entirely since it requires an architecture debate."
    ],
    correct: 1,
    consequences: {"profitability":5,"executionRisk":-10,"teamMorale":5,"growth":5},
    explanation: "YAGNI — You Aren't Gonna Need It yet. Building generalized architecture for two hypothetical customers before you understand the use patterns is systematic waste. Two customers do not justify 16 weeks of configurability. When you have five or more customers with proven patterns, you will understand exactly what to abstract and build it correctly. The four-week version generates the data that makes the 16-week version worth building.",
    framework: "YAGNI (You Aren't Gonna Need It) + Evolutionary Architecture — build for what you have, scale for what you've proven",
    principle: "Build for the customers you have. Scale the architecture for the patterns you have proven.",
    traps: [
      "Building configurable infrastructure for two unconfirmed use cases is four times more expensive and produces architecture that may be wrong.",
      "Third-party solutions for core workflow features you intend to own strategically create vendor lock-in at the wrong layer.",
      "Rejecting a customer-needed feature because of an architecture disagreement is an extreme response to a solvable problem."
    ]
  },
  {
    id: "FD09",
    category: "Feature Decisions",
    difficulty: 3,
    scenario: "You are about to greenlight a large feature build. Your engineering lead says the current architecture makes it technically infeasible and requires a three-month refactor. Two other engineers on the team propose a creative workaround they believe they can ship in four weeks, though they acknowledge it has some technical risks.",
    quote: "\"The senior engineer says it cannot be done. Two engineers say it can. Who is right?\"",
    options: [
      "Trust the lead engineer — senior experience and architectural knowledge outweigh creative workaround proposals.",
      "Side with the two engineers — a four-week solution is always preferable to a three-month refactor.",
      "Ask each side to independently scope their approach with explicit trade-offs and risks documented, then make the decision based on both scopes.",
      "Reject the feature if the team cannot reach consensus — disagreement signals too much technical risk."
    ],
    correct: 2,
    consequences: {"executionRisk":-10,"teamMorale":10,"growth":5,"strategicPosition":5},
    explanation: "Engineering debates about feasibility are competing hypotheses, not authority contests. The PM's role is not to adjudicate technical arguments — it is to structure a process that surfaces enough information for a well-reasoned decision. Independent scoping with explicit risk documentation converts a technical debate into a business decision: four weeks with defined risks versus three months with known architecture benefits. That is answerable.",
    framework: "Structured feasibility review — scope both options, let the data choose",
    principle: "Do not pick sides in technical debates. Scope both options and let the data choose.",
    traps: [
      "Defaulting to seniority in technical debates suppresses valid engineering perspectives and is not the PM's call to make.",
      "Automatically preferring the shorter estimate ignores the legitimate risk flags on the workaround approach.",
      "Rejecting a feature because engineers disagree on approach is an overreaction — engineering disagreement is normal and productive."
    ]
  },
  {
    id: "FD10",
    category: "Feature Decisions",
    difficulty: 1,
    scenario: "You have a new feature idea. Before bringing it to engineering for scoping, you want to validate that it is worth building at all. You have access to customer analytics, a list of recent feature requests, and the ability to schedule customer calls. What is the right validation sequence?",
    quote: "\"I have an idea. Should I take it straight to engineering?\"",
    options: [
      "Take it directly to engineering for a feasibility estimate, then decide whether to pursue it based on effort.",
      "Write a full PRD first and share it with stakeholders for alignment before doing any customer validation.",
      "Run a company-wide survey to measure interest in the feature before investing any further time.",
      "Start with the customer problem: review analytics for behavioral evidence, review feature requests for demand signal, and run two to three customer conversations before writing a single requirement."
    ],
    correct: 3,
    consequences: {"executionRisk":-15,"customerTrust":5,"teamMorale":5,"strategicPosition":10},
    explanation: "The correct validation sequence is problem-first, then solution. Analytics tells you if behavior supports the hypothesis. Feature requests tell you if demand is real. Customer conversations tell you the job-to-be-done and whether your feature concept addresses it. Writing a PRD before validating the problem embeds assumptions into a document that will be difficult to walk back after stakeholder alignment is built around it.",
    framework: "Discovery-first validation sequence — problem evidence before solution specification",
    principle: "Validate the problem before you specify the solution. Requirements built on unvalidated problems are expensive fiction.",
    traps: [
      "Engineering feasibility first inverts the process — you may invest a week in scoping something that customer data would invalidate in an hour.",
      "A PRD before customer validation locks in your initial assumptions and makes them expensive to revise after stakeholder buy-in.",
      "A company-wide survey for an early-stage feature idea produces a noise-to-signal ratio that will not help you decide anything."
    ]
  },
]
