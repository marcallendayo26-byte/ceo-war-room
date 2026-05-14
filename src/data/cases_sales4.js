export const CASES_SALES4 = [
  {
    id: "SL-QF01",
    category: "Quota & Forecasting",
    difficulty: 2,
    scenario: "It's the middle of Q3 and you're at 58% of quota with 6 weeks left. To hit 100% you need to close $420K in 6 weeks. Your pipeline has $580K in deals but many are at early stages. What's the most disciplined response?",
    quote: "Hope is not a forecast strategy.",
    options: [
      "Triage your pipeline: identify what is realistically closeable in 6 weeks and build a specific closing plan for those deals only.",
      "Forecast 100% and work to hit it — optimism drives performance.",
      "Ask your manager for help — additional support can help close the gap.",
      "Push every deal hard regardless of stage — maximize probability by maximizing activity."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"growth":6,"profitability":4},
    explanation: "When the math is hard, clarity beats optimism. The right move is to triage ruthlessly: which deals have decision authority confirmed, budget committed, and timeline that closes in 6 weeks? Work backward from those deals and build a specific closing plan. Then honestly assess the gap — if you can realistically close $320K of closeable pipeline, plan around that and identify what to do about the remaining $100K gap. Forecasting 100% while hoping the early-stage deals accelerate is denial. Pushing all deals equally dilutes attention on the closeable ones.",
    framework: "Close-Window Triage: clarity on what's closeable > false optimism about everything.",
    principle: "A forecast built on hope is a plan to fail with good intentions.",
    traps: [
      "Optimistic 100% forecast — feels motivating but leads to poor resource allocation",
      "Pushing all deals equally — spreads attention and kills late-stage close rates",
      "Asking for manager help before doing your own triage — should be done in parallel, not instead of your own analysis"
    ]
  },
  {
    id: "SL-QF02",
    category: "Quota & Forecasting",
    difficulty: 3,
    scenario: "Your manager asks you to submit a weekly forecast. You genuinely believe your commit number is $280K but you know your manager historically pushes back on anything below $350K. If you submit $350K, you'll feel pressure to close deals that aren't ready. What do you do?",
    quote: "A forecast that tells management what they want to hear is a forecast that fails everyone.",
    options: [
      "Submit $350K to avoid the conversation and work hard to make it real.",
      "Submit $280K with a clear explanation of each deal's stage and what it would take to move them.",
      "Submit $315K as a compromise — gives them a number they can work with and preserves some buffer.",
      "Ask your manager what number they need and back into it from there."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"teamMorale":5,"strategicPosition":5},
    explanation: "Forecast integrity is the foundation of a functional sales organization. Submitting an inflated forecast you don't believe creates a cascade of problems: your manager makes commitments to their VP based on false data, the business allocates resources against revenue that won't arrive, and you face pressure to close deals that aren't ready — which leads to discounting or relationship damage. Submit your honest number, back it up with deal-level specifics, and have the hard conversation. A manager who punishes honest forecasting is a management problem — but it's not solved by lying.",
    framework: "Forecast Integrity: the number you believe is the only number worth submitting.",
    principle: "A forecast is a promise. Only make promises you can keep.",
    traps: [
      "Inflated forecast to avoid pushback — management makes real decisions on your false numbers",
      "Compromise number — you've just taught yourself that your forecasts are negotiating positions",
      "Asking manager what they need and reverse-engineering — this is the definition of a false forecast"
    ]
  },
  {
    id: "SL-QF03",
    category: "Quota & Forecasting",
    difficulty: 2,
    scenario: "Your quota was set based on last year's territory performance, but you've since lost your two largest accounts to churn and been assigned a geographic segment with fewer enterprise prospects. You believe your quota is unachievable. What's the appropriate course of action?",
    quote: "A quota divorced from territory reality is a quota that destroys morale and accountability.",
    options: [
      "Work as hard as possible anyway — complaining about quota is unprofessional.",
      "Accept it and begin negotiating next year's quota in your performance reviews.",
      "Document the specific changes (churn, territory reconfiguration) and make a formal business case to your manager for a quota adjustment.",
      "Verbally raise the concern with your manager and see if they'll adjust informally."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"executionRisk":-6,"strategicPosition":5},
    explanation: "Quota adjustments are legitimate business requests when territory fundamentals have changed materially. The right approach is a documented business case — specific accounts lost, specific territory reconfigurations, comparative analysis of the previous territory's opportunity pool vs. the current one. This gives your manager something concrete to take up the chain. Verbal conversations without documentation rarely result in formal adjustments. Accepting it silently and waiting for the annual cycle protects no one. Working toward an unachievable quota destroys confidence and eventually performance.",
    framework: "Quota Management: fair quotas require accurate territory inputs — advocate formally when they diverge.",
    principle: "An unachievable quota isn't a motivator — it's a resignation letter in slow motion.",
    traps: [
      "Acceptance without action — unachievable quotas predictably produce demoralization and departure",
      "Verbal-only escalation — too easily dismissed without data",
      "Annual renegotiation timing — waiting a year with the wrong quota is a year of underperformance on record"
    ]
  },
  {
    id: "SL-QF04",
    category: "Quota & Forecasting",
    difficulty: 1,
    scenario: "You've had your best quarter ever — 143% of quota. Your manager is now planning to significantly increase your quota next quarter based on your performance. You believe this quarter was unusually strong due to two large deals that were one-time events. What do you do?",
    quote: "Today's overachievement is tomorrow's inflated quota if you let it be set without context.",
    options: [
      "Say nothing — higher quota means higher OTE if you hit it.",
      "Wait for the quota number to come and then negotiate from there.",
      "Push back hard on any quota increase — you don't want to set an unrealistic precedent.",
      "Proactively brief your manager on the two exceptional deals: their size, context, and why they aren't repeatable."
    ],
    correct: 3,
    consequences: {"teamMorale":7,"executionRisk":-6,"strategicPosition":5},
    explanation: "Proactively sharing context about why a quarter was exceptional is both honest and self-protective. If your manager sets next quarter's quota based on a one-time 143% performance, you'll spend the next quarter with a number you can't hit, your confidence will suffer, and your manager will wonder what happened. Brief them now: 'Here's why this quarter was exceptional, here's what I think is a realistic baseline, here's what I think is achievable with the right support.' This is a mark of analytical maturity that good managers respect.",
    framework: "Performance Context: one-quarter data is a sample, not a trend — communicate the difference.",
    principle: "Set expectations with context. Quota set on outliers produces predictable disappointment.",
    traps: [
      "Silence — you end up with an unachievable quota and no one to blame but yourself",
      "Hard pushback on any increase — looks like low ambition rather than analytical accuracy",
      "Wait and negotiate — delays the conversation past the point where context matters to the planning process"
    ]
  },
  {
    id: "SL-QF05",
    category: "Quota & Forecasting",
    difficulty: 3,
    scenario: "End of quarter: you need one more deal to hit quota. You have a prospect ready to sign but the implementation team has flagged that they're already overloaded and a new project would hurt quality. If you don't close this deal, you miss quota. What do you do?",
    quote: "A close that creates a bad customer is a quota hit that costs more than a quota miss.",
    options: [
      "Discuss the delivery capacity constraint with your implementation lead and identify whether any workaround exists before deciding.",
      "Close the deal — quota is your number to hit and delivery is their problem to solve.",
      "Delay the close to next quarter — a bad customer experience is worse than a missed quota.",
      "Close the deal but be transparent with the prospect that implementation will start in 30 days."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"customerTrust":6,"profitability":4},
    explanation: "This is a cross-functional problem that needs a cross-functional answer before you decide whether to close. Talk to your implementation lead: is there a workaround — contractor coverage, a phased start, or a different team allocation? If yes, close with the adjusted timeline clearly communicated to the customer. If no, you have to choose between quota and customer quality — and the honest answer is that closing a deal into known delivery failure is a short-term quota hit that generates a churn and a bad reference. The decision requires facts, not just sales urgency.",
    framework: "Delivery-Aware Selling: a bad deployment is a worse outcome than a missed quota.",
    principle: "Never close something you can't deliver. The short-term math never adds up.",
    traps: [
      "Close and let delivery figure it out — you've just created a delivery crisis and a damaged customer",
      "Immediate delay to next quarter without exploring workarounds — too fast to surrender",
      "Close with delayed start without customer conversation — they find out and feel misled"
    ]
  },
  {
    id: "SL-QF06",
    category: "Quota & Forecasting",
    difficulty: 2,
    scenario: "You have a rep on your team who is consistently 120%+ of quota but whose forecast accuracy is poor — he regularly commits deals that don't close and closes deals he never committed. Your VP is frustrated with the forecast unreliability. What's the coaching focus?",
    quote: "Revenue without predictability is valuable to you but costly to the business.",
    options: [
      "Don't address it — 120% performance should earn forecast flexibility.",
      "Focus coaching on forecast mechanics: what data signals should drive a commit, what should stay in upside.",
      "Put him on a forecast accuracy PIP alongside his revenue recognition.",
      "Pair him with your most forecast-accurate rep to observe and learn."
    ],
    correct: 1,
    consequences: {"teamMorale":6,"executionRisk":-7,"strategicPosition":5},
    explanation: "High performers who create forecast chaos have a skills gap, not a motivation gap. The right coaching approach is teaching forecast mechanics: what does a 'commit' actually mean, what deal signals justify commit status, what should stay in 'best case.' This is a learnable discipline, and high performers are typically receptive because accurate forecasting makes their own work easier. A PIP is disproportionate for what is a process and skills issue in a strong performer. Peer pairing can be useful but shouldn't substitute for direct coaching on the specific skill gap.",
    framework: "Forecast Coaching: teach the mechanics, not just the standards.",
    principle: "Great reps who forecast poorly need coaching, not consequences.",
    traps: [
      "Performance excuse — 120% doesn't make forecast chaos acceptable to the organization",
      "PIP for a skills issue in a high performer — heavy-handed and will damage the relationship",
      "Peer shadowing as a substitute — useful supplement but not the primary intervention"
    ]
  },
  {
    id: "SL-QF07",
    category: "Quota & Forecasting",
    difficulty: 2,
    scenario: "Your company wants to implement a new commit/best-case/pipeline forecast framework. Half your team has been doing deals for years with a simple open/closed system and resists the change. How do you drive adoption?",
    quote: "Forecast frameworks only work when the people submitting them believe in them.",
    options: [
      "Mandate compliance and inspect the forecast weekly until the behavior changes.",
      "Let resistance run its course — culture changes slowly and compliance will come with time.",
      "Explain the 'why' behind the framework — how it helps them, not just the business — and run training sessions before enforcing compliance.",
      "Enforce for new hires but grandfather the old framework for experienced reps."
    ],
    correct: 2,
    consequences: {"teamMorale":7,"executionRisk":-6,"strategicPosition":5},
    explanation: "Behavioral change in experienced salespeople requires understanding and conviction, not just compliance mandates. Explaining how the new framework helps them — better visibility into their own pipeline health, better coaching from managers, better support on at-risk deals — addresses the 'why bother' question. Then run hands-on training with their actual deals so it's not abstract. Mandate compliance only after the understanding is in place. Letting resistance run is passive management. Grandfathering creates a two-tier system that makes the new framework feel punitive to newer reps.",
    framework: "Change Management in Sales: adults change behaviors when they understand the benefit, not just the requirement.",
    principle: "Tell them why it helps them first. Enforce second.",
    traps: [
      "Immediate mandated compliance without explanation — produces surface behavior, not real adoption",
      "Passive waiting for culture change — you'll wait forever",
      "Grandfathering — signals the new standard is optional, which means it isn't a standard"
    ]
  },
  {
    id: "SL-QF08",
    category: "Quota & Forecasting",
    difficulty: 3,
    scenario: "Your company is considering raising quota 20% across the board for next year while adding only 5% to territory size. Leadership argues this is driven by product improvements that increase win rates. You disagree — win rates haven't changed materially. How do you engage with this?",
    quote: "Quotas set without data are aspirations pretending to be plans.",
    options: [
      "Accept it — quota setting is leadership's prerogative and resisting it looks weak.",
      "Informally poll other reps to build collective pushback against the change.",
      "Negotiate personally for a lower individual quota and let the systemic issue be someone else's problem.",
      "Present your analysis to your VP: win rate data, territory capacity analysis, and a realistic growth projection with supporting assumptions."
    ],
    correct: 3,
    consequences: {"strategicPosition":8,"teamMorale":6,"executionRisk":-5},
    explanation: "When quota assumptions are wrong, the right move is to bring data to the conversation — not to resist or avoid it. Pull your win rate trends, territory opportunity analysis, and realistic growth model and present them as a business analysis, not a complaint. This is the kind of contribution that earns credibility with leadership and, importantly, may actually change the decision. Silent acceptance of unrealistic quotas destroys morale across the team. Individual negotiation for your own number while ignoring the systemic problem is selfish. Collective informal pushback looks like organized resistance, which is politically destructive.",
    framework: "Upward Influence: data-driven business cases change plans; complaining doesn't.",
    principle: "If the plan is wrong, bring the analysis that proves it — professionally, directly.",
    traps: [
      "Silent acceptance — looks cooperative but guarantees a year of missed quotas and attrition",
      "Individual negotiation — solves your problem while leaving the team with an unrealistic baseline",
      "Informal collective pushback — leadership sees it as resistance, not analysis, and responds accordingly"
    ]
  },
  {
    id: "SL-QF09",
    category: "Quota & Forecasting",
    difficulty: 2,
    scenario: "A deal you committed in your forecast just slipped to next quarter three days before quarter-end. This closes a $95K gap in your number. You have two pipeline deals that could potentially pull forward — one with a realistic chance, one that's a stretch. What's your approach?",
    quote: "Quarter-end recovery is about maximizing probability, not maximizing activity.",
    options: [
      "Focus entirely on the more realistic deal; use the stretch deal only if the realistic one falls through.",
      "Push both deals as hard as possible — more effort across both increases overall probability.",
      "Call your VP immediately and reforecast — transparency before action.",
      "Offer discounts on both deals to create quarter-end urgency."
    ],
    correct: 0,
    consequences: {"growth":7,"executionRisk":-6,"profitability":4},
    explanation: "Quarter-end recovery requires focus, not scatter-shot effort. Put your best energy into the deal with the highest realistic probability of pulling forward — understand what it would take (a decision, a contract, a commercial condition) and execute against that precisely. Keep the stretch deal warm but don't dilute your attention between both equally. Transparent VP update is the right second step but shouldn't be your first call before you've assessed the options. Discounting both deals to create urgency may not work for pull-forward on deals where urgency is the constraint, and it destroys margin unnecessarily.",
    framework: "Triage at Quarter-End: maximize expected value by concentrating on highest-probability recovery.",
    principle: "When time is short, focus compounds. Effort spread thin compounds nothing.",
    traps: [
      "Equal effort on both deals — dilutes your best work between a strong bet and a long shot",
      "VP update as first action — assess your options before reporting; come with a plan, not just news",
      "Blanket discounting — doesn't address the real constraint (which is timing, not price) and costs margin"
    ]
  },
  {
    id: "SL-QF10",
    category: "Quota & Forecasting",
    difficulty: 1,
    scenario: "You're new to the role and being asked to submit a weekly forecast for the first time. You have very limited visibility into your deals because you've only been in seat for 3 weeks. What do you include in your first forecast?",
    quote: "An honest forecast with visible uncertainty is more valuable than a confident forecast built on nothing.",
    options: [
      "Forecast conservatively — submit low numbers until you understand your pipeline better.",
      "Submit your best estimate with explicit confidence levels and caveats per deal, noting that you're still developing pipeline visibility.",
      "Ask your manager how to forecast and copy the format from the previous rep.",
      "Delay your forecast until you've had 30 days to fully assess your pipeline."
    ],
    correct: 1,
    consequences: {"executionRisk":-6,"teamMorale":6,"strategicPosition":5},
    explanation: "Your first forecast should be honest about both the numbers and your current visibility limitations. Annotate each deal with your confidence level and note that you're still in pipeline assessment mode. This is what good analytical judgment looks like — not false precision or artificial conservatism. Managers who understand sales cycles will appreciate the transparency and use it to provide better coaching. Copying the previous rep's format without context produces a forecast that may be entirely wrong. Delaying creates a gap in the team's visibility.",
    framework: "New Rep Forecasting: honest uncertainty + visible caveats > false precision.",
    principle: "The first forecast you submit sets the tone for the forecasting relationship you'll have.",
    traps: [
      "Artificially conservative numbers — sounds humble but doesn't reflect your actual read of the deals",
      "Copying previous rep's forecast — may perpetuate inaccurate deal statuses you haven't verified",
      "Delaying the forecast — creates a visibility gap and signals you're not ready to contribute"
    ]
  },
  {
    id: "SL-DE01",
    category: "Deal Execution",
    difficulty: 2,
    scenario: "Your proposal has been submitted and the prospect has gone through 3 rounds of questions. They're now asking for a pilot / proof of concept before signing. POCs at your company are resource-intensive and often used to delay. How do you handle this request?",
    quote: "An unstructured POC is a way to delay a yes without ever having to say no.",
    options: [
      "Agree to the POC — removing all barriers to purchase shows commitment.",
      "Decline the POC and explain that your customer references provide better validation.",
      "Propose a structured POC with defined success criteria, timeline, and a decision commitment tied to the outcome.",
      "Offer a limited-time free trial instead of a formal POC."
    ],
    correct: 2,
    consequences: {"growth":7,"executionRisk":-7,"customerTrust":6},
    explanation: "POCs are legitimate evaluation tools when scoped properly — and delay tactics when they're not. The right response is to agree to the concept but require mutual commitment: defined success criteria (what would 'pass' look like?), a clear timeline, and an explicit statement that a successful POC leads to a signed contract. Without those elements, you're investing resources in an open-ended evaluation that can be extended indefinitely. A decision-linked POC turns 'maybe' into 'yes' or 'no' — which is always better than 'not yet.'",
    framework: "POC Structuring: success criteria + timeline + decision commitment = a real POC.",
    principle: "A POC without success criteria is a free trial with professional services attached.",
    traps: [
      "Unconditional POC agreement — you've just funded a delay with your resources",
      "Declining in favor of references — references and POCs answer different questions",
      "Free trial — even less structure than a POC, even more prone to delay and drift"
    ]
  },
  {
    id: "SL-DE02",
    category: "Deal Execution",
    difficulty: 3,
    scenario: "A deal that was supposed to close this quarter has been held up because one member of the buying committee — the CISO — has concerns about data residency. You've never spoken to the CISO. Your champion says the CISO is 'hard to get.' What's your closing strategy?",
    quote: "Unaddressed stakeholder concerns don't resolve themselves — they become veto votes.",
    options: [
      "Send a detailed data residency FAQ document to your champion for them to pass along.",
      "Offer a contractual data residency commitment to address the concern without a meeting.",
      "Ask your legal team to prepare a formal data residency statement and send it through procurement.",
      "Ask your champion to arrange a direct meeting between you (and your security architect if needed) and the CISO."
    ],
    correct: 3,
    consequences: {"executionRisk":-9,"growth":7,"customerTrust":6},
    explanation: "A CISO with unaddressed concerns is a deal-stopper. Documents forwarded through a champion rarely resolve security concerns because the CISO needs to interact with your experts to validate — not read a FAQ. The right move is a direct meeting between your technical resources and the CISO, facilitated by your champion. This is the most efficient path to either resolving the concern or discovering it's a deal-killer. Contractual commitments without a conversation may satisfy procurement but don't address a CISO who hasn't yet agreed they're satisfied.",
    framework: "Security Stakeholder Engagement: CISOs respond to peers with technical credibility, not documents.",
    principle: "Technical objections require technical conversations — not documentation drops.",
    traps: [
      "FAQ via champion — documents don't answer follow-up questions; the CISO needs to interact with an expert",
      "Legal statement via procurement — addresses the paper trail but not the CISO's underlying concern",
      "Contractual commitment without conversation — you may get the signature but you haven't resolved the concern"
    ]
  },
  {
    id: "SL-DE03",
    category: "Deal Execution",
    difficulty: 2,
    scenario: "You're about to enter final negotiations and your champion tells you: 'Just so you know, our CFO will want to see us get at least 10% off — it's a psychological thing, she needs to feel like she got a deal.' Is this useful information and how do you use it?",
    quote: "Knowing what someone needs to feel good lets you give it to them on your own terms.",
    options: [
      "Build 10% into your pre-negotiation pricing and let the CFO 'negotiate' it back to your original target.",
      "Ignore it — responding to psychological motivations compromises your negotiating integrity.",
      "Give the 10% off immediately when the CFO asks to save time.",
      "Tell your champion to manage the CFO's expectations — that's what internal champions are for."
    ],
    correct: 0,
    consequences: {"profitability":8,"growth":5,"customerTrust":5},
    explanation: "Intelligent deal structuring accounts for the human dynamics of decision-making. If you know the CFO needs to feel a win to approve the deal, building a negotiating buffer into your opening position is legitimate commercial strategy — not manipulation. You're not misrepresenting value; you're creating room for the psychological closure the CFO needs. Ignoring the information and presenting your target number as the opening is just leaving value on the table unnecessarily. Giving the 10% immediately when asked rewards the ask without providing the feeling of victory. Having your champion manage the CFO is outsourcing what's your responsibility.",
    framework: "Stakeholder Psychology: design deal structures that allow each stakeholder to feel they won.",
    principle: "Price isn't just math — it's theater. Know who needs what performance.",
    traps: [
      "Ignoring champion intelligence about stakeholder psychology — wastes valuable information",
      "Immediate 10% on first ask — CFO doesn't feel like she won if it was given without resistance",
      "Delegating CFO management to champion — this is your negotiation to lead"
    ]
  },
  {
    id: "SL-DE04",
    category: "Deal Execution",
    difficulty: 1,
    scenario: "You're in a deal and your champion asks you: 'Can you help me build the internal business case for this?' What's the right response?",
    quote: "A champion who can't sell the deal internally is a champion who will lose it internally.",
    options: [
      "Build the business case yourself and give it to them to present.",
      "Co-build the business case with them — you provide the structure, data, and ROI framework; they provide the internal context, stakeholders, and political framing.",
      "Tell them it's their job to build the internal case — your role is the external sale.",
      "Provide a standard ROI template and let them fill it in themselves."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"growth":7,"executionRisk":-5},
    explanation: "Helping your champion build the internal business case is one of the highest-leverage activities in a sales cycle. The right approach is collaborative: you bring structure, ROI methodology, relevant benchmarks, and competitive positioning; they bring the internal politics, the language that resonates with their leadership, and the stakeholders who need to be mentioned. A business case you write for them loses authenticity. A template they fill in alone misses the depth you could add. A co-built case is more credible internally and strengthens your champion's confidence in presenting it.",
    framework: "Champion Enablement: the best business case is one your champion helped build.",
    principle: "Enable your champion — don't replace them or abandon them.",
    traps: [
      "Writing it for them — loses internal authenticity and credibility",
      "Refusing to help — your champion's success is your deal's success",
      "Template-only approach — misses the insight you could bring to strengthen the case"
    ]
  },
  {
    id: "SL-DE05",
    category: "Deal Execution",
    difficulty: 3,
    scenario: "A deal worth $340K is stuck. Your champion is engaged but the procurement team says they're waiting on sign-off from a 'steering committee' that meets quarterly — and the next meeting is 8 weeks away. Your quarter ends in 4 weeks. What are your options?",
    quote: "Committees don't have urgency. People on committees do.",
    options: [
      "Accept the 8-week timeline — quarterly steering committees are standard enterprise governance.",
      "Offer a significant discount for signing before the committee meeting.",
      "Ask your champion to find out who can call an emergency steering committee session or grant an interim approval.",
      "Have your executive team contact the steering committee sponsor to request an expedited review."
    ],
    correct: 2,
    consequences: {"growth":7,"executionRisk":-6,"strategicPosition":5},
    explanation: "Steering committees are real governance structures but they're not immovable. The first move is to understand whether an expedited approval path exists — can a committee member grant conditional approval? Can the committee hold a special session? Can one person's signature move forward pending committee ratification? Your champion often doesn't know the full answer until they ask. Discounting to beat the committee timeline may not even be available to the prospect (they still need the committee) and wastes margin. Executive contact without understanding the governance structure first is premature.",
    framework: "Governance Navigation: every formal process has an informal escalation path — find it.",
    principle: "Governance structures have workarounds. Your job is to help your champion find them.",
    traps: [
      "Passive acceptance — steering committees often have flexibility that nobody thinks to ask about",
      "Discount offer — the committee may not be authorized to approve early even with a better price",
      "Executive escalation before internal exploration — your champion should exhaust internal options first"
    ]
  },
  {
    id: "SL-DE06",
    category: "Deal Execution",
    difficulty: 3,
    scenario: "You've reached verbal agreement on all terms. The prospect said they'd return the signed contract 'by end of week' — three weeks ago. Every follow-up produces 'next week.' It's now quarter-end and this deal is 35% of your quota. How do you diagnose and break the stall?",
    quote: "A deal with verbal alignment and no signature has exactly one contract: uncertainty.",
    options: [
      "Have your VP call the economic buyer directly — executive-to-executive pressure will break the logjam.",
      "Extend favourable pricing terms for another 30 days to reduce any urgency pressure the customer may feel.",
      "Send the contract again with a firm 48-hour deadline and escalate to legal if they miss it.",
      "Call your champion directly: 'We've had alignment on all the terms — I want to make sure I'm not missing something on your end. Is there a specific step I can help you navigate?'"
    ],
    correct: 3,
    consequences: {"growth":7,"executionRisk":-7,"customerTrust":6},
    explanation: "A deal with verbal agreement and no signature is stalling for a reason — and three weeks of 'next week' means the standard follow-up channel isn't surfacing that reason. A direct phone call to your champion, explicitly naming the alignment and asking what's blocking movement, is the fastest path to a real answer. The blocker might be a legal review, a budget freeze, an internal sign-off that's slower than expected, or a change in priority. You need the information to respond appropriately. Executive escalation before you've diagnosed the problem is a nuclear option that can backfire. Deadline ultimatums frequently damage relationships on deals that were going to close anyway.",
    framework: "Signature Stall: diagnose the specific internal blocker before applying external pressure.",
    principle: "Verbal alignment is not a deal. Find out what's between alignment and signature.",
    traps: [
      "Immediate VP escalation — diplomatic escalation before diagnosis often makes you look controlling, not helpful",
      "Extended pricing offer — reducing pressure may be the opposite of what this deal needs",
      "48-hour ultimatum — creates conflict in a deal that may be stalled for a legitimate internal reason"
    ]
  },
  {
    id: "SL-DE07",
    category: "Deal Execution",
    difficulty: 3,
    scenario: "After 4 months of active selling, your champion confirms all stakeholders are aligned. At final contract review, a previously invisible stakeholder — the VP of Risk — appears with 6 requirements you've never heard of. What's your response?",
    quote: "An unknown stakeholder appearing at contract stage is a relationship gap that needs to close fast.",
    options: [
      "Request a direct meeting with the VP of Risk immediately to understand the requirements, triage which are dealbreakers versus preferences, and assess what you can address and by when.",
      "Ask your champion why the VP of Risk wasn't flagged earlier and hold them accountable for the missed stakeholder mapping.",
      "Address all 6 requirements in writing and send them back through procurement the same day to demonstrate responsiveness.",
      "Ask your legal and security teams to respond formally on your behalf and await their output."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"growth":6,"customerTrust":6},
    explanation: "A surprise stakeholder at contract stage is a crisis that requires immediate direct engagement, not blame or bureaucratic routing. Call your champion to get context, then request a meeting with the VP of Risk directly. Your goal is to understand the requirements, categorize them by criticality, and identify fast paths to resolution. Some of the 6 may be easily satisfied by existing documentation; others may require more. You won't know until you talk. Holding your champion accountable for missing the VP of Risk is the wrong priority — that conversation can come later. Sending a written response without a call risks guessing wrong on what's actually important.",
    framework: "Late Stakeholder Engagement: meet them directly and triage fast — every day of delay is a day the deal could die.",
    principle: "A stakeholder you haven't met is a risk you haven't managed.",
    traps: [
      "Champion blame — unhelpful and doesn't address the immediate problem",
      "Written response without a call — you may resolve the wrong concerns and miss the actual blocker",
      "Legal routing — adds latency when speed is what the situation demands"
    ]
  },
  {
    id: "SL-DE08",
    category: "Deal Execution",
    difficulty: 2,
    scenario: "During a joint demo with a prospect's engineering team, their lead engineer asks highly specific technical questions your solutions engineer can't fully answer on the spot. The questions are legitimate and detailed — and the prospect is clearly watching how you handle it. What's the right response in the moment?",
    quote: "A rep who says 'I don't know but I'll find out' earns more trust than one who guesses.",
    options: [
      "Your AE takes over the conversation and pivots to business value to redirect away from the technical gap.",
      "Your solutions engineer acknowledges the limits of what they can answer right now and commits to a dedicated technical deep-dive with your engineering team.",
      "Your SE provides their best guess at an answer and sends a corrections email after the call.",
      "Acknowledge the question and redirect: tell the engineering team you'll compile a technical FAQ document for them after the call."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-5,"strategicPosition":5},
    explanation: "Engineering teams respect precision and intellectual honesty above all. Saying 'that's a great question and I want to make sure you get an accurate answer — can we schedule a dedicated 30-minute technical session with our engineering team next week?' demonstrates exactly the kind of competence and integrity that builds confidence. An AE pivoting to business value in the middle of a technical question looks evasive. Guessing and sending corrections is a credibility risk that makes everything you say suspect. A FAQ document is a useful follow-up but doesn't answer the specific question they asked.",
    framework: "Technical Demo Handling: precision and honesty beat breadth and improvisation.",
    principle: "In front of engineers, 'I'll get you the right answer' is better than any improvised answer.",
    traps: [
      "AE pivot to business value — engineers see this as evasion and it damages your technical credibility",
      "Best-guess answer with corrections — corrections email signals you were guessing and undermines trust in all your answers",
      "Post-call FAQ — useful as a follow-up but doesn't satisfy the question asked in the room"
    ]
  },
  {
    id: "SL-DE09",
    category: "Deal Execution",
    difficulty: 2,
    scenario: "Your champion tells you the CFO is the final sign-off and won't approve without an ROI calculation specifically tied to labor cost savings. You have industry benchmarks but no customer-specific data. How do you build the CFO-ready ROI case?",
    quote: "An ROI model the CFO helped build is an ROI model the CFO believes.",
    options: [
      "Use your conservative industry benchmarks directly — they're well-sourced and defensible.",
      "Ask your solutions engineering team to build a model using reasonable assumptions and submit it ahead of the CFO meeting.",
      "Collaborate with your champion to gather their actual inputs — hours, headcount, process costs — and co-build a bottom-up model the CFO can interrogate.",
      "Schedule a CFO meeting where you present the ROI methodology and let them fill in their own numbers in the room."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"growth":7,"strategicPosition":6},
    explanation: "CFOs don't trust ROI models they weren't part of building. The right approach is to work with your champion to gather the customer's own data — current labor hours, process costs, headcount allocations — and build a bottom-up model from their numbers. This creates a model that's both defensible (because it uses their data) and pre-sold (because your champion helped build it and believes it). Industry benchmarks are a useful sanity check but feel generic to a CFO who knows their own business. An SE-built model with assumptions gets picked apart. Letting the CFO fill in numbers in the meeting is high-risk — you lose control of the narrative.",
    framework: "Co-Built ROI: the champion who helps build the case is the champion who presents it internally.",
    principle: "The CFO's own numbers always beat your benchmarks.",
    traps: [
      "Industry benchmarks only — a CFO who doesn't recognize their own business in the numbers won't approve",
      "SE-built model with assumptions — gets interrogated and weakens your credibility when assumptions are challenged",
      "In-meeting number fill-in — you lose the narrative and the CFO's numbers may not support your case"
    ]
  },
  {
    id: "SL-DE10",
    category: "Deal Execution",
    difficulty: 2,
    scenario: "During final contract review, the prospect asks: 'If we sign today, can you guarantee implementation starts in 2 weeks?' You know your implementation queue is currently 4–5 weeks. What do you say?",
    quote: "The answer they want to hear now creates a problem you'll own for the rest of the relationship.",
    options: [
      "Tell them yes — you'll sort out the implementation scheduling details once the deal is signed.",
      "Offer a premium option to expedite implementation and jump the queue, framing it as a service upgrade.",
      "Say 'we'll do our best' to avoid committing to a timeline while leaving the question open.",
      "Tell them the honest timeline — 4–5 weeks — and ask what would make that work for them rather than disappoint them after signing."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"executionRisk":-9,"growth":5},
    explanation: "Agreeing to a 2-week start when the queue is 4-5 weeks is a promise that will be broken — and broken promises on implementation timing are one of the fastest ways to lose a new customer before value is delivered. The right answer is the honest one, delivered with a problem-solving frame: 'I want to be straight with you — our current queue is 4-5 weeks. I'd rather tell you now than surprise you after you've signed. Can we talk about what would make a 4-5 week start work for your planning?' This demonstrates integrity, avoids a damaging expectation gap, and often surfaces that the constraint was more flexible than they implied. 'We'll do our best' is the worst of both worlds — it's not a commitment and it's not honest.",
    framework: "Timeline Honesty: the relationship you protect by telling the truth is worth more than the deal you protect by not.",
    principle: "A start date is a promise. Only make the one you can keep.",
    traps: [
      "Agreeing to 2 weeks — you've just started the relationship with a broken commitment",
      "Premium expedite offer — may not be available and feels like upselling at the moment of closing",
      "'We'll do our best' — non-commitment that will be interpreted as a yes and experienced as a no"
    ]
  },
]
