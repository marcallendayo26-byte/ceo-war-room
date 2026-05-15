export const CASES_EM = [
  {
    id: "EM-TD01",
    category: "Technical Debt",
    difficulty: 2,
    scenario: "Your team estimates 35% of every sprint is spent working around legacy code and fixing recurring bugs in a 6-year-old authentication module. Engineers are frustrated. Product is pushing for new features. You have no dedicated time allocated for debt reduction. What's your approach?",
    quote: "Technical debt is a tax on every future decision. The longer you pay it, the more it compounds.",
    options: [
      "Quantify the debt's cost in engineering velocity terms and bring a proposal to product: reserve 20% of capacity per sprint for debt reduction with defined outcomes.",
      "Create a dedicated 'debt hours' block within each sprint — reserve Friday afternoons for debt work so it can't be displaced by feature requests.",
      "Pause all feature work for one sprint to do a full debt paydown.",
      "Propose a strangler fig pattern: build a new auth module in parallel and gradually route traffic until the legacy one can be retired."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"teamMorale":7,"growth":5},
    explanation: "Technical debt needs to be made visible as a business cost, not just an engineering complaint. Quantifying it — '35% of sprint capacity = X engineer-weeks per quarter lost to workarounds' — translates it into language product and leadership understand. A proposal for dedicated debt capacity with measurable velocity outcomes turns an abstract complaint into a business case. Full sprint pauses create product delivery gaps. Weekend rewrites produce undertested code and burn out your team. Absorbing it silently rewards the status quo.",
    framework: "Debt Visibility: translate technical cost into business cost before proposing a solution.",
    principle: "Technical debt you can't quantify is debt you can't budget.",
    traps: [
      "Informal debt blocks — unprotected time gets reclaimed under deadline pressure and never builds the business case product needs to see",
      "Full sprint pause — creates a product gap that's hard to justify without prior data",
      "Strangler fig without product buy-in — the pattern is sound but still requires quantified cost data and capacity allocation before leadership will fund it"
    ]
  },
  {
    id: "EM-TD02",
    category: "Technical Debt",
    difficulty: 3,
    scenario: "Your team has identified three categories of technical debt: a critical security vulnerability in an old library (high severity, complex fix), a deprecated API integration that works but will break in 6 months (medium severity), and poor test coverage on core business logic (low immediate severity, high long-term risk). You have capacity for one. How do you prioritize?",
    quote: "Not all debt is equal — prioritize by blast radius, not by how much the team hates it.",
    options: [
      "Fix the deprecated API integration — a known hard deadline is more actionable than open-ended risks.",
      "Fix the security vulnerability first — security issues are always top priority.",
      "Improve test coverage — without it, you can't safely fix the other two without creating new problems.",
      "Fix the security vulnerability and deprecated API concurrently — split the team so neither the live risk nor the hard deadline is missed."
    ],
    correct: 1,
    consequences: {"executionRisk":-10,"customerTrust":7,"strategicPosition":5},
    explanation: "A critical security vulnerability with a complex fix is unambiguously the right first priority — it represents potential customer data exposure, regulatory risk, and company liability that dwarfs the other concerns. The 6-month API deadline is known and can be scheduled. The test coverage issue is real but doesn't have a near-term blast radius equivalent to a live security gap. Parallel sub-teams on three debt items dilutes focus and is only viable if you have excess capacity — you've been told you don't. Test coverage as the priority is backward: you address the known risk first, then build the safety net for future changes.",
    framework: "Debt Prioritization: blast radius × time sensitivity = priority order.",
    principle: "Security debt is not debt — it's a live risk that can't be scheduled away.",
    traps: [
      "Deprecated API because it has a deadline — deadlines matter but don't override active security exposure",
      "Test coverage first — philosophical appeal but wrong order when a security gap is live",
      "Concurrent fix attempt — splitting limited capacity doesn't eliminate the trade-off; complex security work done under divided attention increases the risk of an incomplete or buggy fix"
    ]
  },
  {
    id: "EM-TD03",
    category: "Technical Debt",
    difficulty: 2,
    scenario: "A senior engineer proposes a full rewrite of the core data pipeline — a 6-month project. She argues the current system is brittle and the debt is becoming unmanageable. The current system, while imperfect, is in production and working. How do you evaluate this proposal?",
    quote: "Rewrites feel liberating in planning and dangerous in execution.",
    options: [
      "Approve the rewrite — a senior engineer's technical judgment on their own system should be trusted.",
      "Decline — rewrites are almost always riskier than incremental refactoring.",
      "Ask for a structured proposal: what specific problems does the rewrite solve, what's the risk if we don't, what's the incremental refactoring alternative, and what's the migration plan?",
      "Propose a phased rewrite: rewrite one component per quarter to spread the risk."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"teamMorale":5,"strategicPosition":6},
    explanation: "Full rewrites have a notoriously poor success rate — the 'second system effect' is real. But the proposal may be justified. The right response is to require a structured evaluation: what problems does the current system create, what's the measurable cost, what's the incremental alternative and why is it insufficient, and what does a safe migration look like? This respects the engineer's judgment while ensuring the decision is data-driven rather than frustration-driven. Automatic approval is reckless. Automatic decline ignores the possibility that the debt is genuinely unmanageable. Phased rewrite without evaluating whether incremental refactoring could work skips the key question.",
    framework: "Rewrite Evaluation: always compare against the best incremental alternative before approving.",
    principle: "The question isn't 'should we rewrite?' — it's 'what does the rewrite solve that refactoring can't?'",
    traps: [
      "Auto-approval — deference to seniority without requiring a business case",
      "Auto-decline — rewrites are sometimes the right answer; this prejudgment skips the analysis",
      "Phased rewrite as a compromise — reasonable direction but shouldn't skip the comparison with incremental refactoring"
    ]
  },
  {
    id: "EM-TD04",
    category: "Technical Debt",
    difficulty: 1,
    scenario: "Your team consistently takes shortcuts under deadline pressure — hardcoded values, skipped tests, undocumented functions. Each individual shortcut seems small. Over 18 months it's become significant. Product management says deadlines won't change. What's your systemic response?",
    quote: "Individual shortcuts are local decisions. Accumulated shortcuts are a systemic failure.",
    options: [
      "Negotiate a 'quality budget' with product each sprint — a fixed block of engineering hours reserved for tests and documentation alongside feature work.",
      "Enforce no-shortcut policies — if features can't be built properly, they should be delayed.",
      "Add a post-sprint debt review where engineers are accountable for what they cut.",
      "Implement a technical debt register: every shortcut taken in a sprint is logged, estimated, and added to the backlog with a planned repayment timeline."
    ],
    correct: 3,
    consequences: {"executionRisk":-7,"teamMorale":6,"growth":4},
    explanation: "The problem isn't that shortcuts happen — under pressure they're sometimes unavoidable. The problem is that shortcuts are invisible and never repaid. A debt register makes them visible: when something is cut, it's documented with an estimate and added to the backlog. This creates accountability without blame, makes the accumulation visible to product and leadership, and creates a natural prioritization mechanism. Post-sprint accountability reviews can feel punitive. Zero-shortcut enforcement either misses deadlines or creates dishonest estimates.",
    framework: "Technical Debt Register: make debt visible at the moment it's incurred.",
    principle: "Debt you can't see is debt you can never pay.",
    traps: [
      "Quality budget without a register — reserves time for quality work but still leaves accumulated shortcuts invisible to product and leadership",
      "Accountability reviews — retroactive blame without a system for tracking and repayment",
      "Zero-shortcut enforcement — either misses deadlines or forces engineers to over-estimate to create buffer"
    ]
  },
  {
    id: "EM-TD05",
    category: "Technical Debt",
    difficulty: 3,
    scenario: "A major customer is demanding a feature in 3 weeks. Your team says it's possible but only if they bypass your standard testing and code review process. Your CTO is supportive of shipping fast for this customer. You have concerns. What do you do?",
    quote: "Bypassing quality for one customer creates a quality debt paid by all customers.",
    options: [
      "Ship with reduced testing but ensure the bypass is documented, the debt is logged, and a hardening sprint is scheduled immediately after.",
      "Scope down the delivery: ship only the integration hooks and configuration layer in 3 weeks, then complete the full feature with proper QA in the following sprint.",
      "Refuse — bypassing standards sets a precedent that will cost more than the customer is worth.",
      "Negotiate the scope: what subset of the feature can be built in 3 weeks without bypassing quality standards?"
    ],
    correct: 0,
    consequences: {"executionRisk":-6,"customerTrust":6,"profitability":4},
    explanation: "This is a real business situation where the right answer isn't absolute. When leadership alignment is clear, a managed exception is better than an unmanaged one. The key elements: make the bypass explicit and documented (no one pretends full standards were followed), log the debt formally, and commit to a hardening sprint immediately after delivery. This is different from letting a shortcut disappear. Refusing when the CTO is aligned is career-limiting without new information. Pure compliance without documentation or follow-through is how technical risks accumulate invisibly. Scope negotiation is worth attempting but may not resolve in time.",
    framework: "Managed Exception: when you can't prevent a shortcut, control and document it.",
    principle: "The difference between a managed exception and a standard erosion is documentation and follow-through.",
    traps: [
      "Unilateral scope reduction without customer alignment — delivering partial functionality without agreement risks damaging the customer relationship the entire bypass was meant to protect",
      "Flat refusal against aligned CTO and customer — correct in principle but escalation without leverage",
      "Scope negotiation ignoring time reality — worth trying but don't let it become delay tactic"
    ]
  },
  {
    id: "EM-TD06",
    category: "Technical Debt",
    difficulty: 2,
    scenario: "You're inheriting a team that has significant undocumented code — functions with no comments, no README files, knowledge locked in two senior engineers' heads. One of those engineers just gave notice. What do you do in the next 30 days?",
    quote: "Bus factor of one is not a risk metric — it's a departure announcement.",
    options: [
      "Ask the departing engineer to document everything before they leave.",
      "Conduct structured knowledge transfer sessions: pair the departing engineer with team members on every critical system they own, document in real-time, and prioritize by blast radius.",
      "Use the departure as a catalyst: dedicate a sprint to documentation before the engineer leaves.",
      "Commission a system audit before they leave: have the departing engineer write an architecture decision record (ADR) for every critical component they own."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"teamMorale":6,"growth":4},
    explanation: "A departing engineer with single-threaded knowledge is a countdown. 'Document everything before you leave' produces a single documentation dump that's often incomplete and unreviewed. Structured pair sessions — where the knowledge is transferred to a specific person who will own it, not just written down — is significantly more effective. The transfer happens through working together, not through writing alone. Dedicating a full sprint to documentation is reasonable but less targeted than pairing. A new hire can't recover knowledge that left with the previous engineer.",
    framework: "Knowledge Transfer: pair-based transfer > documentation alone > nothing.",
    principle: "Knowledge that lives in one person's head is infrastructure that's about to go offline.",
    traps: [
      "'Document everything' directive — produces a document nobody verifies and everyone ignores",
      "Full-sprint documentation — better than nothing but less effective than paired transfer",
      "ADR documentation only — captures architectural intent but misses the operational edge cases, unwritten rules, and failure modes that only surface during paired working sessions"
    ]
  },
  {
    id: "EM-TD07",
    category: "Technical Debt",
    difficulty: 2,
    scenario: "Your team wants to upgrade to a new framework version that would require refactoring 40% of the codebase. It would take 2 sprints to complete. The benefits: better performance, security patches, and access to modern tooling. The cost: 2 sprints with no feature output. How do you decide?",
    quote: "Framework upgrades are investments. Investments require ROI analysis, not just enthusiasm.",
    options: [
      "Approve it — staying current with framework versions is table stakes.",
      "Decline for now — 2 sprints with no feature output is too expensive.",
      "Require a structured proposal: specific performance gains, security risk of staying behind, and a phased upgrade plan that allows incremental progress rather than a 2-sprint block.",
      "Approve a phased upgrade: start with non-critical services to validate the refactoring scope and surface hidden dependencies before committing the full codebase."
    ],
    correct: 2,
    consequences: {"executionRisk":-6,"teamMorale":5,"strategicPosition":5},
    explanation: "Framework upgrades need a real cost-benefit analysis, not reflexive approval or denial. The right response is to ask for specifics: what measurable performance gain comes from the upgrade, what's the actual security risk of remaining on the current version, and is there a phased path that allows incremental progress rather than a 2-sprint feature freeze? Phased upgrades often reduce risk significantly and can be distributed across multiple sprints. A 'slow quarter' deferral is vague and often never materializes. Blanket approval ignores team capacity and product commitments.",
    framework: "Upgrade Evaluation: cost-benefit with phased execution option.",
    principle: "Upgrades approved on principle but not on analysis are how 2-sprint projects become 5-sprint ones.",
    traps: [
      "Automatic approval — treats currency as sufficient justification without ROI analysis",
      "Automatic decline — treats feature output as the only valid use of engineering time",
      "Phased approval without structured proposal — committing to any upgrade path without quantifying the security risk and performance gain still asks product to accept a feature freeze on faith"
    ]
  },
  {
    id: "EM-TD08",
    category: "Technical Debt",
    difficulty: 1,
    scenario: "An engineer proposes using a popular new open-source library to solve a problem in your codebase. The library solves the problem elegantly. However, it has no enterprise support, was created 8 months ago, and has limited production usage history. How do you evaluate this?",
    quote: "New and elegant is not the same as proven and safe.",
    options: [
      "Approve it — the engineering community has vetted it and it solves the problem cleanly.",
      "Ask the engineer to implement a thin abstraction layer so the library can be swapped out easily if needed.",
      "Approve it with a required abstraction layer — if the library is cleanly encapsulated and swappable, the abandonment risk is manageable regardless of its maturity.",
      "Run a time-boxed evaluation: review the library's issue tracker, check production adoption signals, and consider the risk of it being abandoned."
    ],
    correct: 3,
    consequences: {"executionRisk":-6,"teamMorale":5,"strategicPosition":4},
    explanation: "New open-source libraries require structured evaluation, not reflexive approval or denial. The right approach is a time-boxed assessment: check the issue tracker for open critical bugs, evaluate the contribution velocity and maintainer responsiveness, look for production usage at scale, and assess the abandonment risk. 8 months with limited production history is a real risk signal. Adding an abstraction layer is smart practice and should probably be done regardless, but it doesn't substitute for the evaluation itself — a bad dependency is still a risk even if abstracted.",
    framework: "Dependency Evaluation: issue tracker + production adoption + abandonment risk = go/no-go.",
    principle: "The elegance of a solution doesn't reduce the risk of its dependency.",
    traps: [
      "Community approval as sufficient — popularity doesn't equal production readiness",
      "Abstraction layer as the primary mitigation — good practice but doesn't address adoption and abandonment risk",
      "Abstraction-as-sufficient-mitigation — reduces swap cost but doesn't protect against a live critical bug in an unvetted library currently running in production"
    ]
  },
  {
    id: "EM-TD09",
    category: "Technical Debt",
    difficulty: 3,
    scenario: "Your product has grown organically and now has 3 different ways to do the same data transformation — one in each microservice that developed independently. Each works, but consistency failures between them cause subtle bugs. Fixing it requires coordinated refactoring across all 3 services. What's your approach?",
    quote: "Inconsistency at scale produces bugs that no individual owner can see.",
    options: [
      "Create a shared library for the transformation, then migrate each service one at a time with thorough testing at each step.",
      "Standardize forward: require all new transformation code to use a common utility module and let the legacy divergence decay naturally as each service is touched.",
      "Pick the best implementation and standardize all 3 services to it in a single sprint.",
      "Assign ownership of all 3 services to one team so consistency is their responsibility."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"teamMorale":5,"strategicPosition":6},
    explanation: "Divergent implementations of the same logic are a long-term bug factory. The right approach is to extract the canonical implementation into a shared library, then migrate each service sequentially with tests at each step — not in parallel, which multiplies coordination risk. This is slower than a simultaneous sprint but dramatically safer. Single-sprint standardization creates a large blast radius if something goes wrong. Consolidating ownership sounds elegant but doesn't fix the technical divergence; it just gives one team three inconsistent things to manage.",
    framework: "Shared Library Extraction: canonical implementation → sequential migration with tests.",
    principle: "Consistency problems require structural solutions, not ownership changes.",
    traps: [
      "Forward-only standardization — the three inconsistent implementations remain live and bug-producing for years; you've slowed the divergence but not fixed the existing one",
      "Single-sprint standardization — too much blast radius; mistakes in coordinated refactoring create multi-service outages",
      "Ownership consolidation — doesn't fix the technical divergence, just assigns blame for future bugs"
    ]
  },
  {
    id: "EM-TD10",
    category: "Technical Debt",
    difficulty: 2,
    scenario: "Your team's test coverage is at 31%. You want it at 70%+. Engineers resist writing tests for existing code — they say 'it's not their code' and it's tedious. New features are always prioritized over test writing. How do you move the needle?",
    quote: "Test coverage doesn't improve through mandate. It improves through habits and incentives.",
    options: [
      "Mandate 70% coverage on all new code going forward — enforce it in CI/CD.",
      "Set a coverage floor on new code (e.g., 80% per PR) and let the existing coverage catch up as code is touched during feature work.",
      "Dedicate a full sprint to writing tests for the existing codebase.",
      "Pair engineers with QA to write tests for legacy code as a knowledge-sharing exercise."
    ],
    correct: 1,
    consequences: {"executionRisk":-7,"teamMorale":5,"growth":4},
    explanation: "The right model is to set a high bar on new code through CI/CD enforcement, and let existing coverage improve incrementally as code is touched — rather than either mandating a retroactive sprint (which produces mechanical, low-quality tests) or a blanket new-code-only policy (which lets the existing codebase remain fragile forever). A coverage floor per PR on new and modified code is the most sustainable path. Over time, frequently touched code naturally gets covered, while dormant code — which is also low-risk — gets deferred. The blanket 70% mandate on existing code creates resentment without a timeline; the full-sprint approach burns morale for marginal test quality.",
    framework: "Coverage Ratchet: enforce on new code, improve incrementally on touched code.",
    principle: "Coverage mandated without enforcement mechanisms is a number, not a standard.",
    traps: [
      "Mandate without enforcement — engineers write tests to hit the number, not to actually validate behavior",
      "Full sprint on legacy tests — generates low-quality coverage quickly but doesn't build the habit",
      "QA pairing only — better for knowledge but still doesn't create systematic improvement"
    ]
  },
  {
    id: "EM-AD01",
    category: "Architecture Decisions",
    difficulty: 3,
    scenario: "Your team is debating whether to build a new data processing system as a monolith or microservices. Monolith: faster to build, simpler to operate. Microservices: more scalable long-term but 3x the operational complexity for your current 8-person team. Product wants it live in 4 months. What's your recommendation?",
    quote: "The architecture that can't be built is the architecture that can't be run.",
    options: [
      "Microservices — it's the industry standard and you'll need to scale eventually.",
      "Hybrid: build the core as a monolith but extract the highest-scale component as a microservice now.",
      "Monolith — build for your current size and operational complexity, with a clear refactoring path when you outgrow it.",
      "Delay the decision: build a prototype of each approach and compare after 6 weeks."
    ],
    correct: 2,
    consequences: {"executionRisk":-8,"teamMorale":6,"growth":5},
    explanation: "Architecture decisions should match team size, operational maturity, and near-term scale requirements — not the industry trend or future aspirations. For an 8-person team with a 4-month delivery window, microservices introduce distributed systems complexity, independent deployment pipelines, and inter-service communication overhead that will significantly increase build and operational risk. A well-structured monolith with clear module boundaries can be extracted into microservices when the team and scale justify it. The hybrid approach sounds pragmatic but still requires microservice operational knowledge for one component. A 6-week prototype delay burns 40% of the delivery window.",
    framework: "Architecture-Team Fit: match system complexity to operational capability.",
    principle: "The best architecture is the one your team can build, deploy, and operate reliably.",
    traps: [
      "Microservices by default — industry trend ≠ right choice for this team size and timeline",
      "Hybrid — sounds pragmatic but still requires microservice operational complexity for the extracted component",
      "Prototype delay — 6 weeks is too expensive when you have 4 months total"
    ]
  },
  {
    id: "EM-AD02",
    category: "Architecture Decisions",
    difficulty: 2,
    scenario: "Your team is about to integrate a third-party service for payments processing. The shortcut is to call the third-party API directly from your business logic. The cleaner approach is to build a payments abstraction layer first. The abstraction adds ~2 weeks to the timeline. What's your call?",
    quote: "Abstractions are expensive until the day you need to change what they're hiding.",
    options: [
      "Skip the abstraction — direct integration is faster and you can always refactor later.",
      "Use a payments orchestration service that already provides the abstraction.",
      "Build a minimal abstraction: a single interface file that the business logic calls, deferring the full abstraction layer.",
      "Build the abstraction — payments providers change, fail, or get replaced. Two weeks now is worth months of future refactoring."
    ],
    correct: 3,
    consequences: {"executionRisk":-7,"strategicPosition":6,"growth":4},
    explanation: "Payments is one of the highest-justification cases for an abstraction layer: payment providers are frequently replaced, have compliance requirements that change, and are often swapped during acquisitions. Two weeks of abstraction work now prevents 4-8 weeks of surgical refactoring later when every payments call is tightly coupled to a specific provider. The 'always refactor later' promise for payments is almost never kept — the coupling becomes deeply embedded. A minimal abstraction (option C) is a reasonable compromise but often becomes technical debt if not completed. A payments orchestration service is a valid option worth evaluating if it fits the use case.",
    framework: "Abstraction ROI: high-change surfaces (payments, auth, notifications) justify abstraction layers.",
    principle: "Couple to things that don't change. Abstract the things that will.",
    traps: [
      "Direct integration — 'refactor later' is never later for payments; the coupling becomes permanent",
      "Minimal abstraction only — often left incomplete and provides false security",
      "Orchestration service — valid option but requires evaluation before recommendation"
    ]
  },
  {
    id: "EM-AD03",
    category: "Architecture Decisions",
    difficulty: 3,
    scenario: "Two senior engineers on your team have a strong technical disagreement about database design for a new service — one advocates for a relational database, one for a document store. Both have valid technical arguments. The debate has been ongoing for 2 weeks and is blocking progress. How do you resolve it?",
    quote: "Two valid approaches that can't reach consensus need a decision-maker, not more debate.",
    options: [
      "Call a structured technical review with the full team: 30-minute presentations from each side, criteria defined upfront, team vote.",
      "Make the decision yourself after reviewing both proposals, with clear reasoning documented.",
      "Give both engineers one week to produce a joint written comparison against shared criteria, with your decision as the tiebreaker if they can't align.",
      "Ask your CTO to make the call — it's an architectural decision above your level."
    ],
    correct: 0,
    consequences: {"teamMorale":7,"executionRisk":-7,"strategicPosition":5},
    explanation: "A two-week technical standoff between senior engineers is a leadership failure, not just a technical one. The right resolution is a structured technical review: define the evaluation criteria before anyone presents (consistency, query performance for your specific access patterns, operational complexity, team familiarity), hear both cases against those criteria, and make a decision with the team. This respects both engineers' expertise, gives everyone a voice, and produces a documented decision. Indefinite debate rewards whoever is louder, not whoever is right. Making the decision yourself without the team process creates resentment. Escalating to CTO for a standard architectural decision signals lack of engineering leadership.",
    framework: "Technical Decision Framework: define criteria first, then evaluate options, then decide.",
    principle: "When experts disagree, the decision needs structure — not more time.",
    traps: [
      "Unilateral EM decision — correct if necessary but misses the opportunity to build team alignment",
      "Joint document from disagreeing engineers — two people in active conflict tend to produce a document that preserves the argument, not resolves it, adding a week without the structured criteria that make the team review effective",
      "CTO escalation — appropriate for cross-team or company-wide architectural decisions, not a single service database choice"
    ]
  },
  {
    id: "EM-AD04",
    category: "Architecture Decisions",
    difficulty: 2,
    scenario: "Your team is about to build a new feature that touches an area of the codebase that's known to be fragile. The feature could be built quickly with minimal changes (risky) or correctly with significant refactoring of the fragile area first (time-consuming). Product wants it in 2 weeks. What's your recommendation?",
    quote: "Building on a fragile foundation doesn't just risk the feature — it risks what was already there.",
    options: [
      "Build quickly with minimal changes — get the feature out and address the fragility later.",
      "Be transparent with product about the trade-off: explain the risk of building on the fragile code and propose a 2-option choice — fast-and-risky vs. 4-week-and-stable.",
      "Time-box the refactoring: allocate the first 5 days of the sprint to stabilize the fragile area, then build the feature on top of whatever state it's in at day 5.",
      "Build a thin wrapper around the fragile code as a compromise — isolate it without full refactoring."
    ],
    correct: 1,
    consequences: {"customerTrust":7,"executionRisk":-7,"teamMorale":5},
    explanation: "Technical trade-offs on delivery timelines are business decisions, not just engineering decisions — and product needs to own them with full information. The right move is to present both options with honest cost-benefit: fast delivery with elevated incident risk, or a longer delivery with a more stable foundation. That's a legitimate business choice. Concealing the refactoring work from product removes their ability to make an informed decision. The wrapper compromise is worth mentioning as a third option in the proposal. Defaulting to fast-and-risky without surfacing the risk removes product's agency entirely.",
    framework: "Risk Transparency: technical risks belong in product trade-off conversations.",
    principle: "Engineering trade-offs that aren't surfaced to product become engineering problems that get blamed on product.",
    traps: [
      "Default to fast — removes product's ability to make an informed decision",
      "Arbitrary time-box refactoring — touching a fragile area without completing the stabilization can make it more unstable than before, and the feature still ships on a partially-refactored foundation",
      "Wrapper only — not surfacing the full trade-off and may still leave the fragility intact"
    ]
  },
  {
    id: "EM-AD05",
    category: "Architecture Decisions",
    difficulty: 3,
    scenario: "Your company is growing fast and you're being asked to architect for 10x the current load. Your current system handles load well but wasn't designed for scale. The architectural changes required are significant. Where do you start?",
    quote: "Optimizing for tomorrow's scale with yesterday's load data is premature. Optimizing after you've hit the ceiling is too late.",
    options: [
      "Do a full architectural redesign now before scale becomes a problem.",
      "Horizontally scale the existing system and defer architectural changes until you've hit a real constraint.",
      "Load test the current system to find the actual bottlenecks, then make targeted investments at those specific points.",
      "Hire an external architect to design the 10x architecture — this is too important for in-house design."
    ],
    correct: 2,
    consequences: {"executionRisk":-8,"strategicPosition":7,"growth":5},
    explanation: "10x scaling begins with measurement, not assumption. Load testing reveals where the actual bottlenecks are — which are almost never where engineers expect them to be. Targeted investment at real bottlenecks is dramatically more effective than full architectural redesign based on hypothetical load. It also lets you ship in stages rather than gambling on a single large architectural bet. Horizontal scaling buys time but doesn't solve structural bottlenecks. External architects bring perspective but typically lack the context of your specific system's behavior — internal engineers with load test data are a better starting point.",
    framework: "Scale Engineering: measure first, invest precisely, defer what doesn't need solving yet.",
    principle: "The bottleneck you find in load testing is never the one you predicted.",
    traps: [
      "Full redesign from scratch — expensive, slow, and based on assumptions not data",
      "Pure horizontal scaling — eventually hits structural limits that scaling doesn't fix",
      "External architect-first — useful input but lacks system-specific context that load data provides"
    ]
  },
  {
    id: "EM-AD06",
    category: "Architecture Decisions",
    difficulty: 2,
    scenario: "You're evaluating whether to build a new internal capability or buy a SaaS solution. Build cost: 2 engineers for 3 months, ongoing maintenance. Buy cost: $80K/year, faster deployment, external dependency. The capability is moderately core to your product. What's your evaluation framework?",
    quote: "Build what differentiates you. Buy what doesn't.",
    options: [
      "Build — owning your infrastructure gives you control and customizability.",
      "Buy — SaaS solutions let you move faster and reduce operational overhead.",
      "Run a 30-day pilot of the SaaS solution to evaluate before making a decision.",
      "Evaluate on differentiation value: if the capability is core to your product's competitive advantage, lean toward build. If it's commodity infrastructure, lean toward buy."
    ],
    correct: 3,
    consequences: {"executionRisk":-5,"profitability":6,"strategicPosition":7},
    explanation: "Build vs. buy decisions hinge on differentiation. Core product capabilities — things that directly create customer value or competitive advantage — usually justify build investment because external dependencies create strategic risk. Commodity infrastructure (logging, monitoring, authentication) should almost always be bought — building it yourself is reinventing wheels that don't differentiate your product. 'Moderately core' means the differentiation analysis is the right lens, not a blanket policy. A SaaS pilot is reasonable to de-risk the buy option, but it's downstream of the framework question.",
    framework: "Build vs. Buy: differentiation value determines the default direction.",
    principle: "Every decision to build something non-differentiating is a decision to not build something that is.",
    traps: [
      "Build default — control is valuable but comes at the cost of engineer time that could go elsewhere",
      "Buy default — commodity justification; speed of deployment doesn't determine strategic fit",
      "Pilot before framework — pilots answer 'does this work?' not 'should we own this?'"
    ]
  },
  {
    id: "EM-AD07",
    category: "Architecture Decisions",
    difficulty: 1,
    scenario: "A new engineer joins your team and immediately proposes replacing several established technical tools with newer alternatives they used at their previous company. Their suggestions have technical merit. The existing tools work well for your team. How do you respond?",
    quote: "New engineers often bring the most valuable external perspective — and the least context for when to apply it.",
    options: [
      "Welcome the perspective and ask them to write up a comparison: what specific problems does each new tool solve that the current one doesn't, and what's the migration cost?",
      "Decline politely — established tools that work shouldn't be disrupted by every new hire's preferences.",
      "Implement the suggestions — fresh perspectives often improve stagnant systems.",
      "Ask the team whether they want to evaluate the new tools — team consensus matters."
    ],
    correct: 0,
    consequences: {"teamMorale":7,"executionRisk":-5,"strategicPosition":4},
    explanation: "New engineer tool proposals should be channeled into structured evaluation rather than either reflexively accepted or dismissed. Asking for a written comparison — what problems does the new tool solve that the current doesn't, what's the migration cost — accomplishes two things: it gives the engineer a fair hearing and it requires them to build context before advocating for change. Many tool suggestions don't survive their own analysis. The ones that do become genuinely useful contributions. Team consensus voting on tool changes is impractical and can polarize rather than resolve.",
    framework: "Tool Evaluation: welcome perspective, require structured analysis before action.",
    principle: "New perspectives are an asset. New perspectives plus context are a superpower.",
    traps: [
      "Immediate implementation — disrupts working systems based on preference, not demonstrated need",
      "Flat decline — dismisses potentially valuable input and discourages future contributions",
      "Team consensus vote — tool decisions shouldn't be democratic without a structured evaluation basis"
    ]
  },
  {
    id: "EM-AD08",
    category: "Architecture Decisions",
    difficulty: 3,
    scenario: "Your team is implementing a feature that will touch the authentication system. During design review, a senior engineer flags that the proposed implementation has a subtle race condition that occurs under high concurrency. They estimate fixing it will add 1 week. Product is pushing to ship without the fix because the race condition 'only happens at extreme scale we haven't hit.' What's your call?",
    quote: "Known security bugs don't care about your current scale.",
    options: [
      "Ship without the fix — the business risk of the race condition at current scale is low.",
      "Fix the race condition before shipping — auth systems with known vulnerabilities should not ship.",
      "Ship with feature flags to limit exposure while the fix is built.",
      "Ask your security team to assess the actual risk before deciding."
    ],
    correct: 1,
    consequences: {"executionRisk":-10,"customerTrust":7,"strategicPosition":5},
    explanation: "A known race condition in an authentication system is not a 'deal with it later' item — auth bugs that allow session hijacking, unauthorized access, or data exposure can have severe consequences even if they occur rarely. 'We haven't hit that scale yet' is not a security argument; it's a timeline argument. The right call is to fix it before shipping. One week to secure an auth system is a legitimate business investment. Feature flags to limit exposure don't fix a concurrency bug. Security team assessment adds latency without changing the fundamental answer.",
    framework: "Security-First Architecture: known auth vulnerabilities do not ship, regardless of current load.",
    principle: "The probability of a security bug doesn't determine whether you should fix it — the severity does.",
    traps: [
      "Ship without fix — known auth vulnerabilities are not risk-acceptable at any scale",
      "Feature flags as mitigation — limits surface area but doesn't fix the underlying concurrency issue",
      "Security team assessment delay — useful context but the answer to 'ship a known auth bug?' is already no"
    ]
  },
  {
    id: "EM-AD09",
    category: "Architecture Decisions",
    difficulty: 2,
    scenario: "Your product has hit a performance bottleneck in your database queries. One engineer wants to add caching aggressively. Another wants to optimize the underlying queries first. Both approaches would help. Which do you prioritize?",
    quote: "Cache a bad query and you've made the bad query harder to find.",
    options: [
      "Add caching first — it's faster to implement and immediately improves performance.",
      "Do both in parallel — assign each engineer to their preferred approach and compare results.",
      "Optimize queries first — understand and fix the root cause before adding caching on top.",
      "Add an index to the most queried table first — that's typically the fastest win."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"strategicPosition":5,"teamMorale":4},
    explanation: "Query optimization should precede caching because caching an inefficient query masks the inefficiency rather than fixing it. Once a layer of caching is in place, the query performance characteristics become invisible — invalidation complexity grows, and the underlying slow query may eventually surface under cache miss conditions. The right sequence is: profile to understand which queries are slow and why, optimize those specifically, then add caching where appropriate as a deliberate layer for data that changes rarely. Index addition is a valid quick win but is part of query optimization, not an alternative to it.",
    framework: "Performance Optimization Sequence: profile → optimize → cache.",
    principle: "Don't cache what you haven't understood. Don't optimize what you haven't measured.",
    traps: [
      "Cache first — hides the problem and adds invalidation complexity",
      "Parallel approaches — dilutes focus; better to understand the problem before diversifying solutions",
      "Index-first shortcut — part of the optimization step, not a substitute for the sequence"
    ]
  },
  {
    id: "EM-AD10",
    category: "Architecture Decisions",
    difficulty: 3,
    scenario: "Your company is evaluating adopting AI/ML features into your product. Your engineers are excited but have limited ML experience. The business timeline is aggressive — leadership wants something shipping in Q2. You have 4 options on the table: build a custom model, fine-tune an open-source model, use an AI API service, or hire a specialist team. What's your framework for deciding?",
    quote: "The fastest path to an AI feature is rarely the one that starts with model training.",
    options: [
      "Build a custom model — it's the most differentiated long-term investment.",
      "Fine-tune an open-source model — best balance of customization and speed.",
      "Hire ML specialists before deciding — you need the expertise to evaluate the options properly.",
      "Evaluate API services first: fastest path to production, lowest technical risk, and lets you validate the use case before committing to deeper infrastructure."
    ],
    correct: 3,
    consequences: {"growth":7,"executionRisk":-7,"strategicPosition":6},
    explanation: "For a team with limited ML experience and an aggressive timeline, AI API services (OpenAI, Anthropic, Google, etc.) are overwhelmingly the right starting point. They require no model training infrastructure, let you ship in weeks not months, and — critically — let you validate whether the use case actually delivers customer value before committing to the significant investment of custom or fine-tuned models. Custom models require months of data collection, training, and infrastructure. Fine-tuning requires ML expertise your team lacks. Hiring before deciding adds a hiring cycle to an already aggressive timeline. Start with APIs, prove the use case, then invest deeper if it warrants.",
    framework: "AI Adoption Sequence: API first → prove use case → fine-tune if warranted → custom if differentiated.",
    principle: "Don't build what you haven't validated. API services let you validate before you commit.",
    traps: [
      "Custom model — requires ML infrastructure and expertise you don't have on an aggressive timeline",
      "Fine-tuning as default — requires ML expertise and infrastructure; API is faster and lower risk",
      "Hire before deciding — adds cycle time to a fast timeline and doesn't change the evaluation framework"
    ]
  },
]
