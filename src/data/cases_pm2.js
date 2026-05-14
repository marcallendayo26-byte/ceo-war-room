export const CASES_PM2 = [
  {
    id: "MA01",
    category: "Metrics & Analytics",
    difficulty: 1,
    scenario: "Your team tracks 14 different metrics every week: DAU, MAU, NPS, support tickets, feature adoption rates, churn, CAC, LTV, session length, error rates, and more. Leadership says Monday metrics reviews take two hours and nothing actionable comes out of them. You need to redesign the measurement system.",
    quote: "\"I look at 14 numbers every Monday and I still don't know what to do.\"",
    options: [
      "Identify one North Star Metric that captures the core value your product delivers, supported by three to five diagnostic metrics.",
      "Reduce to three metrics: monthly revenue, churn rate, and NPS — the simplest possible dashboard.",
      "Keep all 14 metrics but automate the reporting to reduce the meeting burden.",
      "Let each team own their own set of metrics and report up only when something is off-track."
    ],
    correct: 0,
    consequences: {"growth":10,"profitability":5,"executionRisk":-10,"teamMorale":10},
    explanation: "Too many metrics create noise and diffuse focus. A North Star Metric captures delivered customer value — for a SaaS workflow tool it might be \"tasks completed per active user per week.\" Revenue and retention follow from that. Three to five diagnostic metrics tell you which lever to pull when the NSM moves. Everything else is data, not measurement.",
    framework: "North Star Metric Framework (Sean Ellis) — one metric to optimize, a handful to diagnose",
    principle: "One metric to optimize. A handful to diagnose. Everything else is noise.",
    traps: [
      "Revenue, churn, and NPS are outcome metrics — they tell you what happened, not what to do about it.",
      "Automating 14 metrics produces a faster Monday meeting with the same lack of direction.",
      "Siloed metrics without a shared team-level goal produces local optimization that ignores the whole."
    ]
  },
  {
    id: "MA02",
    category: "Metrics & Analytics",
    difficulty: 1,
    scenario: "Your CEO returns from a conference excited: \"We just hit 50,000 registered users! I told our investors.\" You pull up the dashboard and see that only 2,400 of those are monthly active users — a 4.8% activation rate. You need to respond without deflating the moment.",
    quote: "\"Fifty thousand users. That's a milestone worth celebrating.\"",
    options: [
      "Celebrate with the CEO — registered users is a genuine milestone and the moment matters.",
      "Reframe the conversation: \"Great top-of-funnel signal. Our quality metric is 2,400 MAU — here's the activation gap and our plan to close it.\"",
      "Quietly flag the MAU number in your next written report without raising it in person.",
      "Tell the CEO directly that registered users is a vanity metric and should not be shared with investors."
    ],
    correct: 1,
    consequences: {"growth":10,"strategicPosition":10,"executionRisk":-5,"teamMorale":5},
    explanation: "Vanity metrics feel good but do not drive decisions. Your job is to redirect leadership toward actionable metrics without deflating momentum. Framing registrations as \"top-of-funnel signal\" and MAU as the \"quality metric\" is honest, constructive, and professional. It also sets up the activation funnel conversation your team needs to have.",
    framework: "Vanity Metrics vs. Actionable Metrics (Lean Startup) — measure what drives decisions",
    principle: "Celebrate the funnel top; obsess over the output. Help leadership tell the difference.",
    traps: [
      "Celebrating without context embeds the wrong metric in leadership's mental model, making future corrections harder.",
      "Quietly noting it later lets the wrong metric be shared with investors and compounded.",
      "Calling out a CEO for a vanity metric in public without offering a constructive reframe is politically costly and avoidable."
    ]
  },
  {
    id: "MA03",
    category: "Metrics & Analytics",
    difficulty: 1,
    scenario: "You ran an A/B test on your onboarding flow. Variant B increased Day-7 retention from 41% to 44%. The result reached 95% statistical significance with 1,200 users per variant. Your engineering lead says \"three percentage points is not worth shipping — that is well within measurement noise.\"",
    quote: "\"Three points is basically nothing. Run a better test.\"",
    options: [
      "Agree with the engineer — re-run with a larger sample size to confirm the signal.",
      "Run a Variant C before shipping anything — build on the learning before committing.",
      "Ship Variant B: statistical significance is reached, and a 3pp Day-7 retention lift compounds to meaningful revenue at scale.",
      "Treat 41% vs. 44% as within noise and keep the current onboarding flow."
    ],
    correct: 2,
    consequences: {"growth":10,"profitability":5,"customerTrust":5,"executionRisk":-5},
    explanation: "Three percentage points on Day-7 retention is not small when you calculate the business impact. At 1,200 users a month, 3pp retention = roughly 36 more customers per cohort staying. That compounds into LTV. Statistical significance plus adequate sample size plus directional impact = ship it. Running a Variant C without a hypothesis is procrastination after you have a winner.",
    framework: "Statistical significance + business impact calculation — never judge lift in isolation",
    principle: "Never judge a test result by its percentage point lift alone. Always calculate the business impact.",
    traps: [
      "Chasing a larger sample when you already have statistical significance is analysis paralysis.",
      "Iterating on a variant that is already a winner without a clear hypothesis for improvement delays compounding gains.",
      "Calling a statistically significant result \"noise\" is a misunderstanding of what significance means."
    ]
  },
  {
    id: "MA04",
    category: "Metrics & Analytics",
    difficulty: 2,
    scenario: "After setting activation as your team's north star — defined as completing three core actions in the first seven days — a sprint ships a feature that auto-completes action two for new users. Activation jumps from 34% to 61%. You review the downstream data and find Day-30 retention is completely unchanged.",
    quote: "\"Activation is up 27 points. The team crushed it this sprint.\"",
    options: [
      "Celebrate the activation improvement — 27-point gains are rare and the metric moved as designed.",
      "Add additional downstream metrics to catch gaming in future sprints.",
      "Remove the auto-complete feature immediately since it is causing measurement interference.",
      "Investigate: the auto-complete likely gamed the metric without changing real user behavior. Redefine activation around a meaningful behavioral milestone."
    ],
    correct: 3,
    consequences: {"executionRisk":-15,"growth":5,"teamMorale":5,"strategicPosition":10},
    explanation: "Goodhart's Law in action: when a measure becomes a target, it ceases to be a good measure. The team optimized the metric instead of the outcome. The right fix is redefining activation around a behavior that cannot be auto-completed and that genuinely predicts retention — like \"user successfully completed their first real workflow.\" The auto-complete is a symptom, not the root cause.",
    framework: "Goodhart's Law / Metric Gaming — measure behavioral outcomes, not intermediate steps",
    principle: "A metric that can be gamed will be gamed. Design metrics tied to real behavioral outcomes.",
    traps: [
      "Celebrating a metric that proved meaningless embeds the wrong measurement in your team's mental model.",
      "Removing the feature addresses the symptom but does not fix the root problem — the metric definition is still gameable.",
      "Adding more metrics to catch gaming is treating the symptom. The root fix is a metric that cannot be gamed."
    ]
  },
  {
    id: "MA05",
    category: "Metrics & Analytics",
    difficulty: 2,
    scenario: "Your blended monthly churn rate looks stable at 3%. You run cohort analysis and discover that customers who joined in the last three months churn at 7% monthly, while customers from before that period churn at 1%. Your leadership team only looks at the blended 3% figure and considers the business healthy.",
    quote: "\"Churn is holding at 3%. We're in good shape on retention.\"",
    options: [
      "Alert leadership immediately: the blended rate is masking a worsening trend. Investigate what changed in the product, onboarding, or customer mix three months ago.",
      "Keep reporting the 3% aggregate — cohort-level variance is normal and self-corrects over time.",
      "Wait another quarter to see if the cohort trend stabilizes before escalating.",
      "Lower pricing for new customers to improve their retention numbers."
    ],
    correct: 0,
    consequences: {"growth":10,"customerTrust":10,"executionRisk":-15,"cash":5},
    explanation: "Aggregate metrics hide cohort-level deterioration until it is too late to course-correct cheaply. 7% monthly churn in recent cohorts means something fundamentally changed in your onboarding, product, or customer acquisition mix. If you do not catch this now, the blended rate will visibly worsen in 60-90 days — at which point the problem is much harder to fix.",
    framework: "Cohort Analysis for retention — aggregates lie, cohorts tell the truth",
    principle: "Aggregates lie. Cohorts tell the truth. Always ask: which cohort?",
    traps: [
      "\"It will self-correct\" is not a data-backed hypothesis — it is hope. Churn rarely self-corrects without an identified cause.",
      "Waiting a quarter to escalate a clear deterioration signal means months of compounding damage before action.",
      "Lowering pricing addresses symptom not cause — if the product is not delivering value, cheaper does not help."
    ]
  },
  {
    id: "MA06",
    category: "Metrics & Analytics",
    difficulty: 3,
    scenario: "Your analytics show that users who adopt Feature X within their first two weeks have 40% lower 90-day churn than users who do not. Your CPO wants to aggressively push all new users into Feature X adoption during onboarding and set it as a key PM success metric.",
    quote: "\"Feature X users churn 40% less. Make everyone use Feature X.\"",
    options: [
      "Implement aggressive Feature X onboarding immediately — the correlation is strong and the business case is clear.",
      "Recognize the correlation-causation risk: highly engaged users both adopt Feature X and retain better. Design an experiment with a holdout group before changing onboarding.",
      "Remove Feature X from the onboarding flow to test whether it is truly necessary for retention.",
      "Make Feature X adoption a mandatory step that blocks progress until completed."
    ],
    correct: 1,
    consequences: {"executionRisk":-15,"growth":5,"customerTrust":5,"strategicPosition":10},
    explanation: "The classic correlation trap. Your most engaged users adopt Feature X AND churn less — but Feature X might not be causing retention. They might be retained because they are high-fit customers who also happen to explore more features. Forcing passive users into Feature X may do nothing or harm their experience. A randomized experiment with a holdout group is the only way to establish causation.",
    framework: "Correlation vs. Causation in product analytics — experiments establish causation",
    principle: "Your most retained users do many things differently. Correlation shows correlation. Experiments show cause.",
    traps: [
      "Betting your onboarding redesign on a correlation without testing causation could worsen activation and retention simultaneously.",
      "Removing the feature to test necessity is the inverse of the problem — you need to test whether it is the cause, not whether it is needed.",
      "Mandatory gates on features users did not choose alienate users and inflate completion rates without improving outcomes."
    ]
  },
  {
    id: "MA07",
    category: "Metrics & Analytics",
    difficulty: 1,
    scenario: "You are about to kick off a three-month project to rebuild your onboarding flow. The team is ready to start wireframing. You have not yet defined how you will measure success. Your design lead says \"we will know if it works when we see the results.\"",
    quote: "\"We will know a better onboarding when we see it.\"",
    options: [
      "Start wireframing immediately — good design instincts are a valid starting point.",
      "Create a project timeline and resource plan before anything else.",
      "Define success metrics and measure your current baseline before writing a single wireframe.",
      "Get sales and CS buy-in on the new onboarding direction before beginning design."
    ],
    correct: 2,
    consequences: {"executionRisk":-15,"growth":5,"teamMorale":5,"customerTrust":5},
    explanation: "Measuring success is impossible without a baseline and pre-defined criteria. Without them, you spend three months building and cannot objectively evaluate whether it worked. This is one of the first PM responsibilities before any build begins: define the metric, measure the current state, set the threshold for success. \"We will know it when we see it\" produces unmeasured launches.",
    framework: "Pre-mortem Metric Definition — baseline and success criteria before build begins",
    principle: "Define what success looks like before you start. Otherwise you will celebrate anything.",
    traps: [
      "Starting with wireframes before metrics means the team optimizes for visual polish, not measured outcomes.",
      "A project plan without a definition of success is a schedule for an undefined destination.",
      "Internal alignment is important but it is not the first dependency — measurement design is."
    ]
  },
  {
    id: "MA08",
    category: "Metrics & Analytics",
    difficulty: 2,
    scenario: "Your growth team is excited about a new paid acquisition channel. The CAC is $800 and the projected LTV for users from this channel is $1,100, giving an LTV:CAC ratio of approximately 1.4x. They want to scale budget allocation to this channel immediately before competitors find it.",
    quote: "\"LTV is higher than CAC. It's profitable. We should scale now.\"",
    options: [
      "Scale the channel immediately — a positive LTV:CAC ratio means every acquired customer is profitable.",
      "Do not scale — LTV:CAC should be at minimum 3:1 before any channel is worth aggressive investment.",
      "Run a small incremental budget test to confirm the LTV estimate holds at higher volume before scaling.",
      "Investigate the payback period first: if you are spending $800 now and recouping it over 36 months, you could scale into a cash flow crisis despite positive LTV."
    ],
    correct: 3,
    consequences: {"cash":10,"profitability":10,"executionRisk":-10,"growth":5},
    explanation: "LTV:CAC of 1.4x looks profitable but ignores timing. If CAC is paid upfront and LTV accrues over 36 months, you need working capital to fund each customer acquired — and at scale, you can grow yourself into a cash crisis while technically profitable on paper. The SaaS benchmark is 3:1 LTV:CAC with a 12-month or less payback period. Both dimensions matter.",
    framework: "LTV:CAC ratio + Payback Period — profitable on paper, insolvent in cash",
    principle: "Positive LTV:CAC is necessary but not sufficient. Payback period determines if you survive long enough to profit.",
    traps: [
      "Positive LTV:CAC without payback analysis has bankrupted multiple fast-growing SaaS companies.",
      "The 3:1 threshold is a useful benchmark but the more important dynamic here is cash timing.",
      "An incremental test is prudent but does not address the fundamental payback period problem."
    ]
  },
  {
    id: "MA09",
    category: "Metrics & Analytics",
    difficulty: 3,
    scenario: "Your product shows strong DAU growth of 25% quarter-over-quarter. But revenue per active user has declined 15% over the same period. Your marketing team is celebrating growth. Your CFO is alarmed by the revenue trend. Both metrics are real and both are moving in opposite directions.",
    quote: "\"Users are up 25%. Revenue per user is down 15%. What is actually happening?\"",
    options: [
      "Investigate the mismatch: you are likely acquiring a different type of user, or your monetization model is not capturing value from new usage patterns.",
      "Trust the revenue decline — DAU growth that does not translate to revenue is a fundamental product problem.",
      "Trust the DAU growth — revenue per user will recover naturally as users mature on the platform.",
      "Raise prices across all tiers to recover revenue per user while maintaining growth."
    ],
    correct: 0,
    consequences: {"growth":10,"profitability":10,"strategicPosition":10,"executionRisk":-10},
    explanation: "Growing users with declining revenue per user signals one of three things: you are attracting lower-value user segments, your monetization model does not capture value from new use cases, or free-tier users are inflating DAU without converting. The answer requires auditing new user cohorts against paying cohorts and tracing the conversion funnel. Both teams are right about their number — neither knows what it means.",
    framework: "Engagement-Monetization Gap Analysis — growth and revenue divergence diagnostic",
    principle: "Growing users who do not grow revenue means your value capture is broken, not your value creation.",
    traps: [
      "DAU growth that does not convert to revenue is a liability at scale — more servers, more support, less money.",
      "Trusting the revenue decline without investigating the growth trend misses the real structural shift.",
      "Raising prices before understanding the acquisition mix change could accelerate churn of newly acquired users."
    ]
  },
  {
    id: "MA10",
    category: "Metrics & Analytics",
    difficulty: 2,
    scenario: "A new board member challenges you in a quarterly review: \"Why do you track Day-7 retention as your primary activation metric instead of Day-30? Day-30 gives you a much more complete picture of whether customers are actually sticking around.\"",
    quote: "\"Day-7 feels arbitrary. Day-30 is when you really know.\"",
    options: [
      "Agree and switch to Day-30 retention as the primary metric — a longer window is a better signal.",
      "Defend Day-7: it is a leading indicator you can close the feedback loop on within a sprint cycle, whereas Day-30 data arrives too late to inform current team decisions.",
      "Use Day-7 for the engineering team and Day-30 for board reporting as a compromise.",
      "Track both Day-7 and Day-30 as co-primary metrics to satisfy both perspectives."
    ],
    correct: 1,
    consequences: {"executionRisk":-10,"teamMorale":10,"growth":5,"strategicPosition":5},
    explanation: "The key PM discipline is actionability within your iteration cycle. Day-7 retention results from onboarding changes are visible in time to inform the following sprint. Day-30 data arrives 30 days after a user's first session — you have shipped four more sprints by then. Day-30 is strategic for cohort quality analysis; Day-7 is operational for making decisions. You use both, but for different purposes.",
    framework: "Leading vs. Lagging Metrics — optimize for the metric you can act on within your cycle",
    principle: "Optimize for metrics you can act on within your iteration cycle. Use lagging metrics for strategy.",
    traps: [
      "Day-30 as primary creates a 30-day feedback delay on every onboarding experiment — quarterly learning pace.",
      "Two different metrics for two audiences produces two narratives and no shared understanding.",
      "Co-primary metrics split team attention and create confusion about what to optimize when they diverge."
    ]
  },
  {
    id: "SM01",
    category: "Stakeholder Management",
    difficulty: 1,
    scenario: "Your engineering team estimates a new feature at eight weeks. You need it in four weeks for a strategic launch. You have reviewed the complexity yourself and the estimate seems correct. Neither the timeline nor the engineering constraints are wrong — they simply do not fit together.",
    quote: "\"Engineering says eight weeks. The launch is in four. Who blinks?\"",
    options: [
      "Tell engineering to find a way to deliver in four weeks — the timeline is fixed.",
      "Escalate to the CTO to pressure the engineering team to move faster.",
      "Sit down with the tech lead and scope a four-week version: what 70% of the value can you deliver in half the time?",
      "Accept the eight-week estimate and move the launch date."
    ],
    correct: 2,
    consequences: {"teamMorale":10,"executionRisk":-10,"growth":5,"customerTrust":5},
    explanation: "The PM's job is not to accept or reject estimates — it is to find the version of the feature that fits the constraint while testing the most important hypothesis. A four-week scoped version may deliver as much learning and strategic value as the full eight-week build. The conversation to have is: \"What is the minimum that proves this works?\" not \"How do we go faster?\"",
    framework: "Scope negotiation via MVP framing — timeline is fixed, scope is the variable",
    principle: "When the timeline is fixed, scope is the variable. Find the version that fits.",
    traps: [
      "\"Find a way\" without changing scope is a demand that creates overtime, cuts corners, and damages team trust.",
      "Using the CTO to pressure engineering bypasses your partnership with the team and rarely produces better outcomes.",
      "Moving the launch before exploring scope options is the most expensive first response."
    ]
  },
  {
    id: "SM02",
    category: "Stakeholder Management",
    difficulty: 2,
    scenario: "Sales is closing a large enterprise deal where the prospect insists on a custom reporting module they claim is critical to their workflow. A sales leader tells you: \"Just say yes — we will figure out the product side after the contract is signed.\" This would be the third time this quarter that sales has pre-sold unbuilt custom work.",
    quote: "\"Close the deal first. We can figure out product reality later.\"",
    options: [
      "Say yes to support the sales team — ARR is the primary objective and product can adapt.",
      "Say no to the custom work and let sales manage the fallout with the prospect.",
      "Escalate to the CEO to establish a policy that sales cannot commit custom product work without PM sign-off.",
      "Define what is genuinely feasible within your standard product, present it clearly to the prospect, and simultaneously propose a pre-sales PM review process to prevent future over-promises."
    ],
    correct: 3,
    consequences: {"customerTrust":10,"teamMorale":10,"executionRisk":-15,"growth":5},
    explanation: "One custom exception becomes a pattern of technical debt and broken customer expectations. The root issue is not this deal — it is the absence of a deal desk process. Close the loop on this specific deal by defining what is actually buildable, and simultaneously fix the process so every future prospect gets honest expectations. You cannot fix culture with a single no.",
    framework: "Pre-sales PM engagement / Deal desk process — close the deal, fix the process",
    principle: "Say yes to the deal. Say no to the custom work. Then fix the process.",
    traps: [
      "Agreeing to build undefined custom work after contract signing creates a guaranteed delivery failure and customer relationship damage.",
      "A flat no on the custom work without offering alternatives leaves the sales team stranded and the root problem unsolved.",
      "Escalating to the CEO without first proposing the fix positions you as the blocker, not the solution."
    ]
  },
  {
    id: "SM03",
    category: "Stakeholder Management",
    difficulty: 1,
    scenario: "Your VP of Product is presenting the Q3 roadmap to the executive team tomorrow. You have seen recent customer data in the last two days that contradicts the assumptions behind two items on the roadmap. You are confident the data is valid and changes the prioritization case for both.",
    quote: "\"The exec presentation is tomorrow. There is no time to change it now.\"",
    options: [
      "Request a 30-minute pre-brief with your VP today to share the data and propose specific adjustments before the executive meeting.",
      "Present the roadmap as prepared — it is the VP's presentation and not your place to intervene.",
      "Update the roadmap slides yourself with the new data before the presentation.",
      "Raise your concerns during the executive presentation itself for maximum visibility."
    ],
    correct: 0,
    consequences: {"strategicPosition":10,"customerTrust":5,"teamMorale":10,"executionRisk":-5},
    explanation: "Ambushing your VP in an executive meeting with contradicting data is career-limiting and avoidable. A pre-brief today gives your leadership the chance to make an informed decision before walking into a high-stakes room. You bring data, not opinions. Your VP either adjusts the presentation or makes an informed choice to hold the current direction — either way, you have done your job correctly.",
    framework: "Managing up with data — inform before the room, not in the room",
    principle: "Bring data to your manager before they walk into a room. Never ambush them with a surprise.",
    traps: [
      "Withholding valid customer data from your VP because \"it's their presentation\" is a failure of PM responsibility.",
      "Changing the VP's presentation without their knowledge is a severe overstep regardless of your intentions.",
      "Public escalation in an exec meeting destroys your working relationship with your manager and rarely improves the outcome."
    ]
  },
  {
    id: "SM04",
    category: "Stakeholder Management",
    difficulty: 2,
    scenario: "Design wants three weeks to fully research and prototype a new navigation pattern. Engineering wants to start building immediately using the current pattern to avoid delay. You have a five-week delivery deadline that cannot move. Both teams have legitimate concerns.",
    quote: "\"Engineering says build now. Design says wait three weeks. You decide.\"",
    options: [
      "Side with engineering — ship with the current pattern and redesign afterward.",
      "Facilitate a focused one-week design sprint: timebox the research, test two concepts with three users, and make a decision by day five so engineering can start with confidence.",
      "Side with design — UX investment prevents expensive rework and the timeline should flex.",
      "Delay the deadline by three weeks to fully accommodate the design process."
    ],
    correct: 1,
    consequences: {"teamMorale":10,"executionRisk":-10,"customerTrust":5,"growth":5},
    explanation: "PMs own the trade-off, not one function's preferences. A one-week design sprint is the disciplined answer to \"not enough time.\" It is not zero research — it is rigorous research within a hard timebox. Design gets focused input; engineering gets enough certainty to start. Neither team gets everything they want, but the product gets what it needs.",
    framework: "Design Sprint at reduced scale (Google Ventures) — timebox the most important question",
    principle: "You cannot do three weeks of research in one week. But you can find the most important question and answer it.",
    traps: [
      "Shipping with the current pattern when design has flagged a real structural concern creates expensive rework after launch.",
      "Moving deadlines for design process disputes is a precedent that will be invoked in every future sprint.",
      "A three-week delay for navigation research on a five-week project is a 60% timeline extension for one input."
    ]
  },
  {
    id: "SM05",
    category: "Stakeholder Management",
    difficulty: 3,
    scenario: "A key enterprise customer asks to see your product roadmap as part of their three-year contract renewal evaluation. Sharing your internal roadmap would expose competitive strategy and create binding commitments you might not keep. Refusing entirely risks the renewal.",
    quote: "\"We need to see where the product is going before we commit for three years.\"",
    options: [
      "Share the full internal roadmap under a mutual NDA — enterprise contracts require that level of transparency.",
      "Decline to share any roadmap — competitive confidentiality outweighs the renewal risk.",
      "Prepare a customer-facing roadmap document with committed near-term items, directional themes, and strategic vision tiers — shared with explicit flexibility caveats.",
      "Redirect the conversation to your product vision and past delivery track record instead of specific roadmap items."
    ],
    correct: 2,
    consequences: {"customerTrust":15,"growth":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "A tiered customer-facing roadmap is standard enterprise practice. Committed items (next 90 days), directional themes (next two to three quarters), and strategic vision (annual) give the customer enough to assess direction without binding you to specific feature deliveries. The key discipline: never share ticket-level detail, always label tiers clearly, include a caveats section.",
    framework: "Tiered customer roadmap — committed / directional / vision with explicit flexibility caveats",
    principle: "Give customers enough to trust you. Not enough to sue you.",
    traps: [
      "Sharing your full internal roadmap creates specific feature commitments that will be invoked in the contract and used as leverage at every QBR.",
      "Flat refusal of roadmap transparency with a three-year renewal on the table is strategically damaging and avoidable.",
      "A product vision conversation without roadmap structure does not give the procurement team what they need to justify the renewal internally."
    ]
  },
  {
    id: "SM06",
    category: "Stakeholder Management",
    difficulty: 2,
    scenario: "Marketing needs a new campaign landing page feature for a major campaign launching in three weeks. Customer Success needs a workflow improvement for a struggling key account that has signaled churn risk. You have engineering capacity for only one of these this sprint.",
    quote: "\"Both teams say their item is the most critical. You have to pick one.\"",
    options: [
      "Give it to Marketing — they asked first and the launch date is fixed.",
      "Give it to the stakeholder with the most senior executive sponsor.",
      "Split engineering capacity between both at 50% quality to satisfy both stakeholders.",
      "Score both against business impact: quantify the ARR at risk from churn vs. the incremental ARR opportunity from the campaign, and choose accordingly."
    ],
    correct: 3,
    consequences: {"growth":5,"customerTrust":10,"executionRisk":-10,"teamMorale":5},
    explanation: "Retention vs. acquisition trade-offs require ARR math, not seniority or arrival order. Protecting existing ARR from active churn risk is usually higher urgency than incremental ARR from a campaign. But if the campaign represents $500K ARR and the account at risk is small, the calculation changes. Quantify both sides before deciding — that is your job.",
    framework: "ARR-weighted impact scoring — retention urgency vs. acquisition opportunity",
    principle: "When capacity is fixed, protect the ARR at greatest immediate risk.",
    traps: [
      "First-come-first-served is the easiest possible decision framework and also the least strategic.",
      "Executive sponsor seniority is political prioritization, not business prioritization.",
      "Two half-done features in an emergency is the worst of both — neither outcome is achieved."
    ]
  },
  {
    id: "SM07",
    category: "Stakeholder Management",
    difficulty: 1,
    scenario: "You have a Quarterly Business Review with a key enterprise customer in two days. This customer has been unhappy about three production incidents over the past quarter. Your engineering team identified and fixed the root cause last sprint and deployed improved monitoring. The account executive suggests focusing the QBR on the roadmap to \"move past\" the incidents.",
    quote: "\"Let's focus forward. Nobody wants to talk about what went wrong.\"",
    options: [
      "Lead with direct accountability: document what happened, what the root cause was, what the fix was, and what monitoring now exists to prevent recurrence.",
      "Follow the account executive's lead and focus entirely on the roadmap and positive future updates.",
      "Let the account executive run the QBR — it is their customer relationship.",
      "Postpone the QBR until you have 30 consecutive clean days to demonstrate stability."
    ],
    correct: 0,
    consequences: {"customerTrust":15,"growth":5,"strategicPosition":5,"executionRisk":-10},
    explanation: "Accountability without defensiveness is the most powerful trust-building move in enterprise B2B relationships. Customers who see you own problems clearly, explain them honestly, and prove the fix become advocates. Pivoting to the roadmap without addressing the incidents signals evasion. The formula: what happened, root cause, fix shipped, monitoring in place. Brevity and ownership are everything.",
    framework: "Trust repair through radical transparency — own it completely, prove it is fixed",
    principle: "Own the problem completely. The fix is proof of character.",
    traps: [
      "Leaving the QBR to the account executive without PM involvement signals that product does not care about accountability.",
      "Ignoring three incidents in a QBR when the customer already knows about them reads as deliberate deflection.",
      "Postponing the QBR to wait for clean days delays the accountability conversation and prolongs customer frustration."
    ]
  },
  {
    id: "SM08",
    category: "Stakeholder Management",
    difficulty: 2,
    scenario: "You need legal sign-off on a new data-sharing feature before launch. The Head of Legal has missed three scheduled review meetings and has not responded to two email summaries you sent. Your launch is in two weeks and you cannot ship without the sign-off.",
    quote: "\"I cannot get Legal to engage and the clock is ticking.\"",
    options: [
      "Ship the feature and assume silence implies approval — you made multiple good-faith attempts to engage them.",
      "Send a concise one-page decision brief with a clear deadline: \"I need your input by [date]. If I have not heard back, I will escalate to [shared manager] for help prioritizing this review.\"",
      "Keep requesting meetings until Legal responds — you cannot force them to engage.",
      "Go directly to the CEO to override Legal and authorize the launch yourself."
    ],
    correct: 1,
    consequences: {"executionRisk":-15,"teamMorale":5,"customerTrust":5,"growth":5},
    explanation: "A concise brief with a deadline and an explicit escalation notice creates a response without burning bridges. \"Silence implies approval\" on legal matters is a professional and legal disaster. Going straight to the CEO skips the escalation ladder and creates unnecessary political friction. The brief is firm, professional, and moves the decision — it is how professionals unstick stuck processes.",
    framework: "Escalation ladder for unresponsive stakeholders — deadline, notice, named escalation path",
    principle: "A clear deadline with a stated consequence for silence is not a threat. It is respect.",
    traps: [
      "Shipping without legal sign-off on a data-sharing feature is a compliance and liability risk regardless of how many meeting requests you sent.",
      "Continuing to request without an escalation mechanism allows indefinite blocking with no accountability.",
      "Skipping directly to the CEO creates political damage and sets a precedent of bypassing appropriate process."
    ]
  },
  {
    id: "SM09",
    category: "Stakeholder Management",
    difficulty: 3,
    scenario: "Analytics and usage data clearly show that a feature your engineering lead personally championed and built six months ago has 3% adoption and consistently negative NPS sentiment from the users who do use it. You want to deprecate it. The engineering lead is proud of the work and will take it personally.",
    quote: "\"The data is clear. But telling him feels like a battle I do not want to have.\"",
    options: [
      "Kill the feature quietly in a release note without specific communication to the engineering lead.",
      "Keep the feature to preserve the working relationship and team morale.",
      "Have a private data-driven conversation with the engineering lead before any announcement: share the metrics, acknowledge their effort, explain the strategic reasoning, and involve them in the deprecation plan.",
      "Present the deprecation decision in the next sprint review meeting with the full team present for transparency."
    ],
    correct: 2,
    consequences: {"teamMorale":15,"executionRisk":-5,"customerTrust":5,"strategicPosition":5},
    explanation: "Feature kills have an interpersonal dimension that is as important as the strategic one. Surprising someone in a group setting about work they built and care about is humiliating and avoidable. A private, data-led conversation that acknowledges the genuine contribution and involves them in the deprecation plan turns a potential conflict into a professional moment. Engineers respect PMs who handle hard things like adults.",
    framework: "Feature deprecation with stakeholder management — data gives you the right, empathy earns the trust",
    principle: "Data gives you the right to kill features. Empathy gives you the right to keep your team.",
    traps: [
      "Quiet deprecation without conversation is cowardly and will damage trust when discovered.",
      "Keeping low-value features to avoid conflict transfers the cost to product quality, maintenance burden, and every future engineering sprint.",
      "Public announcements of deprecation without private preparation put individuals in an impossible position."
    ]
  },
  {
    id: "SM10",
    category: "Stakeholder Management",
    difficulty: 2,
    scenario: "Your engineering team has begun padding sprint estimates by 30-40% because they have experienced their in-progress work being redirected mid-sprint three times in the last two quarters due to sales escalations. Trust has eroded. Velocity looks healthy on paper but the padding is masking the real problem.",
    quote: "\"We need the buffer. Priorities change every time we start building.\"",
    options: [
      "Address the padding directly — tell the engineering team to stop inflating estimates.",
      "Accept the padding as a reasonable engineering self-protection mechanism.",
      "Adopt a no-estimates agile approach and let engineering self-organize around outcomes instead.",
      "Acknowledge the root cause: commit to protecting in-flight work from mid-sprint changes except for genuine P0 emergencies, establish an explicit exception process, and rebuild trust through consistent behavior over two to three sprints."
    ],
    correct: 3,
    consequences: {"teamMorale":15,"executionRisk":-15,"growth":5,"customerTrust":5},
    explanation: "Estimate padding is a trust tax caused by a broken process, not an estimating problem. Engineers pad because their past pain was completely real — their in-progress work was redirected mid-sprint. The fix is a structural commitment: in-flight work is protected except in documented P0 emergencies. After two or three sprints of consistent behavior, padding disappears because the tax is no longer warranted.",
    framework: "PM-Engineering trust contract — sprint protection plus exception process",
    principle: "Padding is a trust tax. You pay it until you prove the roadmap can be trusted.",
    traps: [
      "Asking engineers to stop padding without changing the behavior that caused padding is gaslighting.",
      "Accepting padding permanently means your velocity is perpetually misreported and team capacity is wasted.",
      "No-estimates approaches require a level of team maturity and PM-engineering trust that does not currently exist here."
    ]
  },
]
