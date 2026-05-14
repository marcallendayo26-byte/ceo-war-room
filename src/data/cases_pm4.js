export const CASES_PM4 = [
  {
    id: "TP01",
    category: "Team & Process",
    difficulty: 1,
    scenario: "Mid-sprint, a P0 production bug breaks a core workflow for all customers. Engineering estimates three days to investigate and fix. Your sprint was already at full capacity. Stakeholders are watching and the team is stretched.",
    quote: "\"The bug is P0. Everything else waits. But sprint commitments are also due.\"",
    options: [
      "Immediately remove lower-priority sprint items equal to the estimated bug-fix effort, protect the remaining commitments, and communicate the change to stakeholders.",
      "Ask engineering to work evenings and weekends to fix the bug without dropping sprint commitments.",
      "Let the team self-organize without PM intervention — this is an engineering problem.",
      "Extend the sprint by three days to absorb the bug fix without dropping any planned items."
    ],
    correct: 0,
    consequences: {"teamMorale":10,"executionRisk":-10,"customerTrust":5,"growth":0},
    explanation: "Sprint hygiene requires acknowledging reality, not hiding it. A P0 consumes real capacity — something else must come out. The PM's job is to make that trade-off explicit and communicate it proactively, not to expect the team to absorb it through heroics. A healthy sprint plan is a contract with realistic scope, not a wish list that expands during emergencies.",
    framework: "Sprint capacity management under disruption — P0 in means something else out",
    principle: "When a P0 hits, make the trade-off explicit. Do not absorb it invisibly through heroics.",
    traps: [
      "Overtime requests for structural capacity problems burn out the team and produce error-prone work under pressure.",
      "Disengaging from a sprint disruption is an abdication of the PM's planning and communication responsibility.",
      "Extending sprints during emergencies creates a precedent where scope is never fixed and every disruption becomes a timeline negotiation."
    ]
  },
  {
    id: "TP02",
    category: "Team & Process",
    difficulty: 2,
    scenario: "You discover that your engineering team has started holding daily stand-ups without inviting you, and has been doing so for the past two weeks. When you ask about it, the tech lead says \"we move faster without the PM in stand-ups.\" This is the first you have heard this feedback.",
    quote: "\"PMs slow stand-ups down. We added fifteen minutes every day.\"",
    options: [
      "Assert your attendance as non-negotiable — stand-ups are a cross-functional ritual.",
      "Reflect on what PM behavior is creating friction: unclear specs that cause mid-meeting delays, adding scope during stand-up, or using stand-up for status collection rather than unblocking.",
      "Accept the exclusion and find other ways to stay informed about engineering progress.",
      "Escalate to the engineering manager to reinstate the PM's inclusion in stand-ups."
    ],
    correct: 1,
    consequences: {"teamMorale":15,"executionRisk":-10,"growth":5,"customerTrust":5},
    explanation: "Engineers excluding PMs from stand-ups is a trust and behavior signal, not a scheduling preference. Something in the PM's stand-up behavior is creating friction — common causes include adding scope in the meeting, asking questions that require deep technical answers, or using stand-up as a PM status update rather than a team unblocking session. Fixing the behavior restores the invitation without requiring a mandate.",
    framework: "PM-Engineering trust patterns — exclusion signals behavior, not scheduling",
    principle: "If the team is working around you, the question is not how to force your way back in. It is what you are doing that is in the way.",
    traps: [
      "Mandating attendance without understanding why you were excluded makes the stand-up more uncomfortable and the trust worse.",
      "Passive acceptance of exclusion from daily engineering rhythm disconnects you from the team's actual work.",
      "Escalating to the engineering manager before understanding and addressing your own behavior is politically costly and skips the real problem."
    ]
  },
  {
    id: "TP03",
    category: "Team & Process",
    difficulty: 1,
    scenario: "Engineering spent three days building a feature before discovering that the spec had an ambiguous edge case that required reworking half of the completed code. The engineer says \"the spec was not clear about how the system should behave when a user has zero records.\" This is the second spec ambiguity incident in three sprints.",
    quote: "\"This keeps happening. We waste days every time a spec has a gap.\"",
    options: [
      "Hold the engineer accountable for not raising the question before starting development.",
      "Write longer, more detailed specs that preemptively cover every edge case.",
      "Introduce a structured spec review: engineering reads the complete spec, surfaces all questions, and both PM and engineering sign off on a shared understanding before development starts.",
      "Move to verbal specification instead of written docs to allow faster clarification."
    ],
    correct: 2,
    consequences: {"teamMorale":10,"executionRisk":-15,"growth":5,"customerTrust":5},
    explanation: "Spec ambiguity is a process failure, not a writing or reading failure. Longer specs do not catch what you do not know you do not know. A structured review where engineering reads the spec cold and raises questions before a single line is written catches 80% of edge case ambiguities cheaply. The sign-off creates shared ownership — both PM and engineering own the understanding, not just the document.",
    framework: "Definition of Ready / Spec review process — sign-off before development starts",
    principle: "A spec is only done when engineering has read it and has no questions. Until then, it is a draft.",
    traps: [
      "Holding an engineer accountable for not raising a question about an ambiguous spec is blaming the symptom.",
      "Longer specs create more surface area for misunderstanding and do not systematically surface what the PM did not know to specify.",
      "Verbal specifications are fast but un-trackable and create a new class of ambiguity — differing memories of what was agreed."
    ]
  },
  {
    id: "TP04",
    category: "Team & Process",
    difficulty: 2,
    scenario: "Your team's sprint retrospectives consistently produce the same three action items quarter after quarter: \"write better documentation,\" \"improve test coverage,\" and \"clarify requirements earlier.\" Nothing has changed in six months. The retros take 90 minutes each and morale around them is low.",
    quote: "\"We keep identifying the same problems. Nothing ever actually changes.\"",
    options: [
      "Run retrospectives more frequently — monthly instead of quarterly will produce fresher insights.",
      "Switch to a different retrospective format to surface new themes.",
      "Eliminate retrospectives — they are consuming time without producing value.",
      "Keep the format but fix the accountability structure: every action item must have a single named owner, a completion date, and explicit follow-up at the opening of the next retrospective."
    ],
    correct: 3,
    consequences: {"teamMorale":15,"executionRisk":-10,"growth":5,"customerTrust":5},
    explanation: "The same action items appearing every quarter means the insights are being generated but not acted on. The format rarely matters — the accountability structure does. Every retrospective action item needs one named owner (not \"the team\"), a specific completion date (not \"this quarter\"), and a mandatory opening check-in at the following retro. Without these three elements, retrospectives are professionally structured complaint sessions.",
    framework: "Action-driven retrospectives — owner, date, and follow-up are non-negotiable",
    principle: "A retrospective action without an owner is a wish. Add a name and a date.",
    traps: [
      "More frequent retrospectives with the same accountability structure produces the same outcome faster.",
      "Changing formats when the real problem is follow-up accountability treats the wrong variable.",
      "Eliminating retrospectives removes the forum for structural improvement, which makes recurring problems permanently invisible."
    ]
  },
  {
    id: "TP05",
    category: "Team & Process",
    difficulty: 3,
    scenario: "You are a solo PM across three product teams: Growth, Core Product, and Platform. Each team has asked leadership for a dedicated PM. You have capacity for approximately 1.5 PMs worth of work. Leadership wants you to cover all three teams without additional headcount for at least two more quarters.",
    quote: "\"We need you to make this work for now. All three teams need PM support.\"",
    options: [
      "Identify the team with the highest product risk and deepest decision ambiguity, and invest deeply there. Provide lighter-touch structure for teams that are more execution-ready.",
      "Distribute your time equally across all three teams — fair allocation prevents favoritism.",
      "Negotiate immediately for headcount — working at 1.5x capacity is unsustainable and will produce poor outcomes for all three.",
      "Let each team self-manage and only engage when they explicitly ask for PM input."
    ],
    correct: 0,
    consequences: {"executionRisk":-10,"teamMorale":10,"growth":10,"strategicPosition":5},
    explanation: "When you cannot be everywhere, you go where decisions are hardest and the cost of poor decisions is highest. Teams with clear direction and strong engineering maturity can operate effectively with lighter PM involvement: well-defined OKRs, async spec reviews, and standing decision frameworks. Distributing time equally is the worst outcome — no team gets enough depth. Apply concentration where it creates the most leverage.",
    framework: "PM bandwidth allocation — depth where risk is highest, structure where teams are execution-ready",
    principle: "Be where you are most needed, not where you are most comfortable.",
    traps: [
      "Equal time distribution guarantees that no team gets enough PM support to make the high-stakes decisions well.",
      "Refusing to work within constraint until headcount arrives is not pragmatic at an early-stage company — the two-quarter ask is real.",
      "Passive on-demand PM support for three teams produces no roadmap clarity, no prioritization, and three teams moving in different directions."
    ]
  },
  {
    id: "TP06",
    category: "Team & Process",
    difficulty: 1,
    scenario: "Your team ships a feature and three customers immediately report obvious UI inconsistencies on mobile and a broken state when a user has an empty data set. The engineer says \"it passed QA and I tested it myself.\" Your CS team is frustrated by the pattern — this is the third sprint in a row with post-launch quality issues.",
    quote: "\"It passed QA. I do not understand how this keeps slipping through.\"",
    options: [
      "Hire better QA engineers who will catch more edge cases before shipping.",
      "Establish a formal Definition of Done that includes mobile testing, edge case scenarios, empty and error states, and PM acceptance sign-off before any item is marked complete.",
      "Require engineers to do longer testing cycles before marking features as ready.",
      "Add a dedicated QA team stage to the development workflow."
    ],
    correct: 1,
    consequences: {"executionRisk":-15,"teamMorale":10,"customerTrust":5,"growth":5},
    explanation: "\"Passed QA\" means different things to different people without a shared Definition of Done. The DoD is the team's explicit checklist — what \"done\" means for every item. Mobile states, empty states, error states, cross-browser behavior, and PM sign-off are all part of done. Without a written DoD, everyone operates on a different mental model and the customer pays the price at each launch.",
    framework: "Definition of Done (Scrum) — explicit shared checklist, not individual judgment",
    principle: "Done means done by everyone's definition. Write it down.",
    traps: [
      "Hiring better QA engineers treats the symptom — the absence of a shared checklist means any QA engineer will miss different things.",
      "Longer testing cycles without a defined scope of what to test produces longer cycles that miss the same things.",
      "A dedicated QA stage adds a handoff without fixing the root issue of an undefined quality standard."
    ]
  },
  {
    id: "TP07",
    category: "Team & Process",
    difficulty: 2,
    scenario: "Your designer wants to spend three weeks redesigning the settings page to conform to your new design system before it accumulates further debt. Your roadmap has two sprints of committed feature work. The designer makes a compelling case: \"Design debt compounds just like technical debt and we keep deferring it.\"",
    quote: "\"Every sprint we defer this, the settings page gets more inconsistent.\"",
    options: [
      "Approve the redesign now — the designer's point about compounding debt is correct and should be prioritized.",
      "Reject it — committed roadmap work takes precedence and design debt can wait.",
      "Acknowledge the legitimacy of the debt, commit to a specific sprint slot immediately after the current roadmap commitments, and add it to the official schedule.",
      "Let the designer work on the settings page independently in parallel with feature development."
    ],
    correct: 2,
    consequences: {"teamMorale":15,"executionRisk":-5,"customerTrust":5,"strategicPosition":5},
    explanation: "Design debt is real and the designer's frustration is valid. But \"right now vs. later\" is not the right framing — \"when and is it actually scheduled?\" is. A committed sprint slot with a specific date transforms designer frustration into patience. Saying \"later\" without a date is a polite no that will resurface as the same conversation in three sprints. Transparency plus a concrete commitment is the professional answer.",
    framework: "Design debt scheduling — commitment with date beats vague deferral",
    principle: "Saying later without a date is just a polite no. Give them a sprint slot.",
    traps: [
      "Dropping committed feature work for design debt when you have enterprise commitments creates a credibility problem with customers.",
      "Rejecting with no plan sets up the identical conversation in three sprints, plus accumulated additional debt.",
      "Parallel workstreams require parallel engineering capacity the team does not have — design work without engineering to implement it produces mockups, not progress."
    ]
  },
  {
    id: "TP08",
    category: "Team & Process",
    difficulty: 2,
    scenario: "Two new engineers joined your team two weeks ago. During sprint planning, they say they lack enough product context to make confident technical decisions and are defaulting to \"safe\" solutions that may not be optimal. Your engineering lead has covered the technical architecture and stack but has not involved you in their onboarding.",
    quote: "\"We do not understand why we are building what we are building.\"",
    options: [
      "Point the engineers to your product documentation and roadmap — everything they need is documented.",
      "Ask the engineering lead to extend their technical onboarding to include product context.",
      "Pair each new engineer with a senior engineer who can provide product context alongside technical mentorship.",
      "Run a PM-led onboarding session: walk through real customer use cases, share analytics, play back two or three actual customer calls, and connect the roadmap to the specific customer problems it solves."
    ],
    correct: 3,
    consequences: {"teamMorale":15,"executionRisk":-10,"customerTrust":5,"growth":5},
    explanation: "Engineers who understand the customer problems they are solving make better technical decisions, not just faster ones. Specifications without context produce technically correct implementations that solve the wrong problem. A PM-led onboarding covering real customer workflows, usage data, and the \"why\" behind roadmap decisions builds product empathy that pays dividends in every future sprint.",
    framework: "Product empathy onboarding — engineers who know the customer build better solutions",
    principle: "Engineers who have heard a customer's pain build better solutions than engineers who have only read specs.",
    traps: [
      "Documentation gives engineers what to build. They already know that. They need to understand why.",
      "An engineering lead covering product context will cover it through a technical lens — the customer empathy piece requires PM involvement.",
      "Peer mentorship shares technical context well, but senior engineers are not better equipped than PMs to convey customer problems."
    ]
  },
  {
    id: "TP09",
    category: "Team & Process",
    difficulty: 3,
    scenario: "You are scaling from one product team to four. You need to decide how to split ownership. Option A: by feature area (each team owns a set of product features). Option B: by customer journey stage (Acquisition, Activation, Retention, Expansion). Option C: by customer segment (SMB, Mid-Market, Enterprise). You need a recommendation for leadership.",
    quote: "\"How we structure the teams will shape how we think about the product for years.\"",
    options: [
      "There is no universally right answer: for a B2B SaaS with a conversion and retention funnel you are still optimizing, journey-based teams usually win because they own outcomes rather than features.",
      "Customer journey teams — each team owns a measurable outcome and can move their full stack to improve it.",
      "Customer segment teams — each team deeply knows their customer and can tailor the product to them.",
      "Feature area teams — cleanest technical ownership and easiest to staff."
    ],
    correct: 0,
    consequences: {"strategicPosition":15,"executionRisk":-10,"teamMorale":10,"growth":10},
    explanation: "Feature-based teams optimize features. Outcome-based teams optimize the business. A Retention team that owns churn rate can improve onboarding, deepen core features, and build health score tooling — without handing off across team boundaries. Customer segment teams work well when your SMB and Enterprise products are genuinely different, but at four teams creating duplication risk. Journey-based teams are the right answer for a single-product SaaS scaling toward PMF.",
    framework: "Product team topology — outcomes-based teams over feature-based or segment-based at single-product scale",
    principle: "Structure teams around the outcomes they own, not the features they build.",
    traps: [
      "Feature teams create teams that optimize their own area at the expense of the customer experience crossing team boundaries.",
      "Journey teams are generally right, but this option is incomplete — the explanation matters as much as the choice.",
      "Segment-based teams create product duplication, competing roadmaps, and shared infrastructure conflicts for a single-product company."
    ]
  },
  {
    id: "TP10",
    category: "Team & Process",
    difficulty: 2,
    scenario: "Your junior PM is hitting all delivery metrics consistently: sprints ship on time, specs are detailed, stakeholders are aligned. But she never brings customer insights to planning sessions unprompted, never surfaces a strategic problem before it is assigned to her, and is described by engineers as \"a feature factory PM\" who executes but does not lead.",
    quote: "\"She delivers everything we ask. But she never asks anything herself.\"",
    options: [
      "Add strategic responsibilities to her OKRs and measure her on strategic deliverables.",
      "Assign one structured discovery sprint per quarter: she owns a customer problem from hypothesis to recommendation with no execution deliverable — just learning and synthesis.",
      "Move her toward a project management role where strong execution skills are the primary requirement.",
      "Provide direct feedback that she needs to be more strategic, and check in on progress monthly."
    ],
    correct: 1,
    consequences: {"teamMorale":10,"executionRisk":-5,"growth":5,"strategicPosition":5},
    explanation: "The feature factory pattern almost always comes from a delivery backlog that leaves no structural space for strategic thinking. Adding strategic OKRs without creating the space to do the work is measuring a capability the environment does not allow to develop. A dedicated discovery sprint — quarterly, with no execution deliverable — breaks the cycle and measures insight quality rather than delivery velocity.",
    framework: "PM skill development — structured discovery time to build strategic muscle",
    principle: "You cannot grow strategic muscle in a gym that only has delivery equipment. Create the space.",
    traps: [
      "Measuring strategic deliverables without changing the environment that prevents strategic work creates frustration without development.",
      "Moving an execution-capable PM to project management because she has not yet been given space to be strategic is the wrong solution.",
      "\"Be more strategic\" feedback without structural support is direction without a path — she will hear it and not know what to do with it."
    ]
  },
  {
    id: "GR01",
    category: "Growth & Monetization",
    difficulty: 1,
    scenario: "You are designing a freemium tier for your SaaS platform. The debate: make it very limited with basic features only, or make it quite generous with most features and a low user cap. Both have advocates on your team. You need a principled framework for where to draw the line.",
    quote: "\"More generous means more users. More limited means more upgrades. Which matters?\"",
    options: [
      "Make it as limited as possible to protect revenue from free-tier users.",
      "Make it as generous as possible to maximize top-of-funnel growth and word-of-mouth.",
      "The free tier should deliver enough value that users experience the core product promise and naturally want more, but hit a ceiling at the point of natural growth.",
      "Copy the freemium structure of the market leader in your category."
    ],
    correct: 2,
    consequences: {"growth":15,"cash":5,"profitability":5,"customerTrust":10},
    explanation: "The freemium ceiling must sit at the natural upgrade trigger — the moment the user's own growth creates a need for more. Too limited: users never reach the aha moment and churn before they have a reason to upgrade. Too generous: users never hit a natural ceiling and have no internal justification to pay. The ceiling should feel logical and earned, not arbitrary.",
    framework: "Freemium ceiling design — deliver the aha moment, create the natural upgrade trigger",
    principle: "Free should feel like the beginning of something, not a worse version of the product.",
    traps: [
      "Maximum limitation prevents users from experiencing the value that would motivate them to pay — you are protecting revenue from customers who have not yet seen it.",
      "Maximum generosity converts free users into permanent free users with no structural reason to upgrade.",
      "Copying a market leader's freemium tier assumes your product, economics, and customer jobs are identical to theirs."
    ]
  },
  {
    id: "GR02",
    category: "Growth & Monetization",
    difficulty: 2,
    scenario: "You are considering switching from flat per-seat pricing to usage-based pricing. Your current average contract is $500 per month for a five-seat team. With usage-based pricing, heavy users might generate $2,000 per month and light users $50. Your CPO is excited about the alignment with customer value. Your CFO is nervous.",
    quote: "\"Usage pricing aligns cost with value. What is the CFO worried about?\"",
    options: [
      "The risk that customers reduce usage to minimize their bills, shrinking revenue.",
      "The infrastructure cost of building usage tracking and metering systems.",
      "The risk that the sales team cannot close fixed-contract enterprise deals under a usage model.",
      "The risk that revenue becomes unpredictable month-to-month, creating forecasting and cash flow challenges."
    ],
    correct: 3,
    consequences: {"profitability":10,"cash":5,"growth":5,"executionRisk":-10},
    explanation: "Usage-based pricing aligns cost with value and enables land-and-expand, but the primary business risk is revenue unpredictability. A range of $50 to $2,000 per customer per month makes financial planning extremely difficult and creates cash flow variance. The standard mitigation is usage-based pricing with a committed minimum floor — the Snowflake model — which gives you value alignment without sacrificing revenue predictability.",
    framework: "Usage-Based Pricing + Revenue Predictability — committed minimums preserve the floor",
    principle: "Usage pricing unlocks value alignment. Committed minimums preserve the floor.",
    traps: [
      "Customers reducing usage to reduce bills is possible but less common in B2B than feared — they need the product to do their work.",
      "Enterprise contracts under usage pricing are negotiated with committed minimums, which sales teams adapt to quickly.",
      "Infrastructure cost is real but solvable — it is an implementation cost, not a strategic risk to the business model."
    ]
  },
  {
    id: "GR03",
    category: "Growth & Monetization",
    difficulty: 2,
    scenario: "Your sales team focuses entirely on new logo acquisition. Your Net Revenue Retention is running at 92% — meaning that before any new logo ARR, your existing base shrinks by 8% annually. Your head of sales says \"we just need to close more new logos to offset the loss.\"",
    quote: "\"We close more deals and the NRR problem goes away.\"",
    options: [
      "NRR below 100% is a product and CS problem, not a sales problem. Closing more logos just grows the leaky base larger. The fix is building expansion mechanics into the product.",
      "Agree — growing new logo ARR fast enough can mathematically offset any NRR below 100%.",
      "Hire more Customer Success managers to reduce churn and improve upsell rates.",
      "Focus on reducing churn in onboarding, then address expansion in a later quarter."
    ],
    correct: 0,
    consequences: {"growth":10,"profitability":10,"strategicPosition":10,"cash":5},
    explanation: "NRR below 100% means your existing base is shrinking every year before a single new deal closes. Selling into a leaky bucket accelerates the problem — more revenue at the top, same proportional loss at the bottom, higher cost of growth. The SaaS benchmark for healthy compounding growth is NRR above 120%. PM's role: build expansion that happens naturally as customers grow — usage limits, seat triggers, multi-product paths.",
    framework: "Net Revenue Retention + Product-Led Expansion — NRR below 100% is a product problem",
    principle: "If your product does not expand revenue as customers grow, you have a product problem, not a sales problem.",
    traps: [
      "Growing new logos with 92% NRR means your sales team is running a treadmill that gets faster every year.",
      "More CS managers improve coverage but do not build the product expansion mechanics that make NRR scale.",
      "Sequential \"fix churn first, then expansion\" ignores that some of your best expansion candidates are also your happiest non-churning customers."
    ]
  },
  {
    id: "GR04",
    category: "Growth & Monetization",
    difficulty: 1,
    scenario: "Your self-serve sign-up to activation rate is 23%. Your category benchmark is 40%. Leadership is asking what is wrong with the product. You have been asked to produce a diagnosis and action plan by end of week.",
    quote: "\"Twenty-three percent activation means 77% of sign-ups are wasted. What is broken?\"",
    options: [
      "Reduce pricing to lower the barrier for users who are not activating.",
      "Map the activation funnel step by step and identify the largest drop-off point: sign-up to first login, first login to setup, setup to first core action, or first action to first value moment.",
      "Improve onboarding email sequences to re-engage users who signed up but did not activate.",
      "Conduct a survey of recent sign-ups who did not activate to understand their reasons."
    ],
    correct: 1,
    consequences: {"growth":15,"executionRisk":-10,"customerTrust":5,"profitability":5},
    explanation: "A 17-point gap to benchmark is a funnel problem, not a product or pricing problem. You do not know which step is broken until you measure each step. The largest drop-off is where you invest. Optimizing email sequences without knowing where users drop out spends budget on the wrong step. Funnel analysis before action is the PM discipline — find the broken step, then fix it specifically.",
    framework: "Activation Funnel Analysis — find the broken step, fix the broken step",
    principle: "Before you optimize activation, find the step that is broken. Fixing everything equally improves nothing specifically.",
    traps: [
      "Lower pricing changes willingness to pay, not ability to activate — these are different problems.",
      "Re-engagement emails are useful but they address drop-off after the fact, not the cause of the drop-off.",
      "Surveying non-activators tells you their stated reasons, which are often not the actual funnel breakdown."
    ]
  },
  {
    id: "GR05",
    category: "Growth & Monetization",
    difficulty: 2,
    scenario: "You are designing a PLG viral loop. Your first mechanic: users can invite collaborators to shared workspaces, and those collaborators can see the product in action. Your growth lead calls this \"a natural viral loop.\" You want to pressure-test the claim before investing in the feature.",
    quote: "\"Collaboration plus sharing equals viral growth. Right?\"",
    options: [
      "Approve the loop design — sharing features inherently create exposure and exposure creates growth.",
      "Measure the viral coefficient first — the loop only works if each user invites more than one person who activates.",
      "The loop requires all three components: invited collaborators must receive a compelling invitation, experience genuine value on their first session, and have a reason to create their own account — otherwise it is exposure, not a loop.",
      "Track invite rates in analytics before deciding whether to invest further."
    ],
    correct: 2,
    consequences: {"growth":15,"strategicPosition":10,"cash":5,"executionRisk":-10},
    explanation: "Most \"sharing features\" create exposure but not growth loops. A true PLG loop requires three functional components: the invitation creates curiosity and gets the right person to visit, the first session delivers a specific moment of value, and there is a clear and logical reason for the collaborator to create their own account. Without all three, you have built a product demo, not a compounding acquisition engine.",
    framework: "PLG Viral Loop Design — invitation, activation, and conversion trigger are all required",
    principle: "Exposure is not a loop. A loop requires a reason to convert, not just a reason to look.",
    traps: [
      "Sharing creates awareness. Awareness without conversion mechanics creates eyeballs, not accounts.",
      "Measuring viral coefficient is important but premature — first you need to verify the loop has the right mechanics.",
      "Analytics tracking tells you what is happening, not whether the design will work in principle."
    ]
  },
  {
    id: "GR06",
    category: "Growth & Monetization",
    difficulty: 3,
    scenario: "You want to validate the right price point for a new $X per month analytics add-on before building it. You have four research options: (A) ask customers in discovery interviews what they would pay, (B) Van Westendorp price sensitivity survey, (C) A/B test two different price points on a real pricing page with existing users, or (D) conjoint analysis with a research firm.",
    quote: "\"We need to know what to charge before we build. How do we find out?\"",
    options: [
      "Interview customers and ask what they would pay — direct customer input gives you the clearest answer.",
      "Run a Van Westendorp survey — the four-question framework gives you an acceptable price range.",
      "Conjoint analysis with a research firm — statistically rigorous and industry standard.",
      "A/B test two real price points on a live pricing page and measure who clicks to upgrade — behavioral intent beats stated preference."
    ],
    correct: 3,
    consequences: {"profitability":10,"growth":5,"cash":10,"executionRisk":-10},
    explanation: "Real behavioral intent on an actual pricing page is the most accurate WTP signal available before a product is built. Interviews and surveys measure stated preferences, which consistently overstate actual payment willingness by 30-60%. Van Westendorp gives a directional range but not conversion probability. Conjoint is rigorous but expensive and slow. Showing real users a real price with a real upgrade button captures the decision behavior you actually care about.",
    framework: "Willingness-to-Pay research hierarchy — behavioral data over stated preferences",
    principle: "The most accurate price test is the one where money actually changes hands. Everything else is prediction.",
    traps: [
      "\"Would you pay X?\" in an interview has a 30-60% false positive rate. People say yes to be helpful and to avoid disappointing you.",
      "Van Westendorp is excellent for directional range but cannot tell you actual conversion rates at a given price.",
      "Conjoint analysis is expensive, slow, and measures preference between hypothetical scenarios rather than real purchase behavior."
    ]
  },
  {
    id: "GR07",
    category: "Growth & Monetization",
    difficulty: 2,
    scenario: "Your CS team currently flags at-risk accounts based on gut instinct and recency of contact. You want to build a data-driven early warning system for churn. You need to identify which behavioral signals in your product data should drive the model.",
    quote: "\"We are always surprised by churn. By the time we know, it is too late.\"",
    options: [
      "Track login frequency trend, feature adoption trend, and abandonment of key workflow steps — behavioral signals showing the product is leaving the user's daily routine.",
      "Track NPS score, number of support tickets opened, and current billing status.",
      "Track contract renewal date, company headcount changes from LinkedIn, and executive sponsor turnover.",
      "Track email open rates for product updates, time since last CSM check-in, and satisfaction survey scores."
    ],
    correct: 0,
    consequences: {"customerTrust":10,"growth":10,"executionRisk":-10,"profitability":5},
    explanation: "Behavioral signals within the product are the earliest indicators of churn because they change before the customer consciously decides to leave. Falling login frequency, declining feature adoption, and workflow abandonment are detectable 30-60 days before a renewal conversation. By the time NPS drops or emails go unanswered, the customer has usually already made their mental decision.",
    framework: "Product-led churn prediction — behavioral signals lead the decision, not the outcome metrics",
    principle: "Churn starts in the product weeks before the cancellation email. Behavioral signals are your early warning system.",
    traps: [
      "NPS and support tickets are output signals — they reflect decisions already made, not the decision in progress.",
      "External signals like LinkedIn headcount are useful but lag behind product behavior signals and require non-product data sources.",
      "Email open rates and survey scores are engagement signals that track your communication, not product value delivery."
    ]
  },
  {
    id: "GR08",
    category: "Growth & Monetization",
    difficulty: 2,
    scenario: "Your pricing page converts at 2.1% of visitors to paid plan. Your category benchmark is around 4.5%. Your current page shows four pricing tiers with annual billing only. You need to identify the highest-impact single change to test first.",
    quote: "\"We are half the benchmark conversion rate. What one thing do we change first?\"",
    options: [
      "Reduce from four tiers to three to simplify the decision and reduce choice paralysis.",
      "Add a monthly billing option alongside annual with a savings callout — removing annual-only commitment friction is typically the largest conversion lever.",
      "Add enterprise customer logos and social proof above the fold.",
      "Reduce all tier prices by 10% to lower the financial barrier to entry."
    ],
    correct: 1,
    consequences: {"growth":15,"cash":10,"profitability":5,"customerTrust":5},
    explanation: "Annual-only pricing is the highest-friction element on most SaaS pricing pages. Many self-serve buyers will not commit to a 12-month contract on a first visit. Adding monthly pricing (at a higher monthly rate) alongside annual with a visible savings callout dramatically increases top-of-funnel conversion. The monthly-to-annual upgrade path then converts trial customers over time without losing the long-term revenue.",
    framework: "Pricing page conversion optimization — reduce the first commitment ask",
    principle: "Reduce the first commitment ask. Monthly pricing is not a discount — it is a door opener.",
    traps: [
      "Tier count is a secondary conversion factor. Moving from four to three tiers rarely moves conversion rates dramatically.",
      "Social proof is a trust signal, not a commitment friction reducer. It helps the already-interested visitor, not the hesitant one.",
      "Price reduction before testing commitment friction means you may be leaving revenue on the table that the pricing page architecture was losing, not the price itself."
    ]
  },
  {
    id: "GR09",
    category: "Growth & Monetization",
    difficulty: 3,
    scenario: "You are selling into a 500-person enterprise. The champion is interested but can only get budget approval for a 10-seat pilot. Your sales team wants to hold firm on a minimum 50-seat contract to justify the deal cost. The account has significant expansion potential.",
    quote: "\"A ten-seat pilot is not worth our sales cost. We need at least fifty seats.\"",
    options: [
      "Negotiate for 50 seats upfront — a larger initial contract is always more efficient.",
      "Decline the pilot and only pursue deals that start at your minimum viable contract size.",
      "Accept the 10-seat pilot: design the product to surface natural expansion need at 10 seats so that growth to 50 happens through product motion rather than sales motion.",
      "Offer the 10-seat pilot free for 90 days to reduce the entry barrier and accelerate the champion's internal approval."
    ],
    correct: 2,
    consequences: {"growth":15,"cash":5,"strategicPosition":10,"customerTrust":10},
    explanation: "Product-led land-and-expand wins when the product does the selling. A 10-seat pilot in a 500-person company that genuinely proves value will expand — but only if expansion is designed into the product. Seat limit notifications, invite-a-colleague prompts, and workflow sharing create natural expansion moments without another sales cycle. Insisting on 50 seats upfront forces a harder negotiation and skips the proof-of-value step that makes the larger commitment easy.",
    framework: "Product-Led Land and Expand — first contract is a beachhead, not the destination",
    principle: "Land small if the product expands large. The first contract is a beachhead, not the destination.",
    traps: [
      "50 seats without a proof of value creates a harder negotiation and higher churn risk if the pilot phase fails silently.",
      "Refusing pilots from 500-person enterprises because the first order is small is a pattern that costs you your most valuable enterprise accounts.",
      "A free pilot removes the customer's psychological commitment to making it work and makes the paid conversion conversation harder."
    ]
  },
  {
    id: "GR10",
    category: "Growth & Monetization",
    difficulty: 3,
    scenario: "Your freemium product has 10,000 free users and 200 paying customers — a 2% conversion rate generating $50K MRR. A well-funded competitor just launched a free tier that matches your free tier feature-for-feature. Your free tier is no longer a competitive differentiator. You need to rethink your monetization strategy.",
    quote: "\"They just copied our free tier. Our main acquisition channel is gone.\"",
    options: [
      "Keep your freemium model and compete on product quality — better product wins long-term.",
      "Eliminate the free tier entirely and move to a 14-day free trial plus paid-only model.",
      "Raise prices on your 200 paying customers to offset the loss of the freemium moat.",
      "Shift from indefinite freemium to a time-limited or usage-limited trial that preserves top-of-funnel access, and redirect product investment toward deepening paid-tier differentiation."
    ],
    correct: 3,
    consequences: {"growth":10,"profitability":15,"strategicPosition":15,"cash":10},
    explanation: "When a competitor matches your free tier, indefinite free stops being a moat and becomes pure cost that funds their competitive advantage. Time or usage-limited trials preserve top-of-funnel while eliminating the indefinite infrastructure burden. More importantly, this is the forcing function to invest in deepening your paid tier differentiation — making the premium product so clearly better that the competitive free tier becomes irrelevant. The real battle is paid, not free.",
    framework: "Freemium-to-Trial conversion under competitive pressure — invest in paid differentiation",
    principle: "When free stops being a moat, it becomes a moat for your competitor. Invest in the paid value proposition.",
    traps: [
      "Competing on quality while a well-funded competitor matches your free tier assumes quality alone drives conversion — it rarely does without structural acquisition advantages.",
      "Eliminating the free tier entirely removes top-of-funnel before you have built the paid-tier product that justifies the higher conversion ask.",
      "Raising prices on existing customers to offset a strategic challenge is misaligned — you are taxing the customers who stayed while the structural problem persists."
    ]
  },
]
