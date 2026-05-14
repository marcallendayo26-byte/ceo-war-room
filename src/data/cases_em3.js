export const CASES_EM3 = [
  {
    id: "EM-SD01",
    category: "Sprint & Delivery",
    difficulty: 2,
    scenario: "It's day 3 of a 2-week sprint and a mid-sprint scope change from product would require replacing 40% of the sprint's committed work. Product says the change is urgent due to a competitive threat. Your team has already started the original work. What's your response?",
    quote: "Sprint commitments aren't rigid contracts — but frequent breaks erode the meaning of a commitment.",
    options: [
      "Have a structured conversation with product: acknowledge the urgency, make the swap cost explicit (what gets dropped, what debt is incurred, what's the team cost), and then decide together.",
      "Decline the change — the sprint is committed and scope changes undermine team predictability.",
      "Accept the change immediately — competitive threats are more important than sprint integrity.",
      "Accept the change but log it as an exception and track sprint scope change frequency."
    ],
    correct: 0,
    consequences: {"executionRisk":-7,"teamMorale":5,"strategicPosition":5},
    explanation: "Sprint changes aren't always wrong — competitive threats can genuinely be urgent. But they should never be invisible. The right approach is a structured trade-off conversation: what gets dropped from the committed work, what context-switching cost does the team pay, what partially completed work becomes waste, and how does this affect next sprint's capacity? Making the cost explicit lets product make an informed decision rather than experiencing the team as inflexible or as easily disrupted. Tracking the exception is a good practice regardless of the decision outcome.",
    framework: "Sprint Trade-off: make scope change costs explicit before agreeing or declining.",
    principle: "Never say no to a scope change without making the cost visible. Never say yes without making it a decision.",
    traps: [
      "Immediate acceptance — product never learns the actual cost of mid-sprint changes",
      "Flat refusal — inflexible in the face of genuine business urgency",
      "Exception logging only — useful tracking but doesn't replace the trade-off conversation"
    ]
  },
  {
    id: "EM-SD02",
    category: "Sprint & Delivery",
    difficulty: 3,
    scenario: "Your team has missed delivery commitments for 3 consecutive sprints. The cause is different each time: once a production incident, once underestimated complexity, once a dependency on another team. Your VP is getting frustrated. What's your diagnosis and response?",
    quote: "Three misses with three different causes isn't bad luck — it's a systemic planning problem.",
    options: [
      "Identify and fix the most recent cause — each sprint miss had a specific reason.",
      "Run a sprint retrospective focused on delivery reliability: examine estimation practices, dependency management, and capacity for unexpected work across all three misses.",
      "Reduce team commitments by 25% to create buffer — the team is consistently overcommitted.",
      "Present a root cause analysis to your VP before they lose confidence entirely."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"teamMorale":6,"strategicPosition":5},
    explanation: "Three consecutive misses with different surface causes suggest the real problem is systemic: your planning process doesn't account for the full range of risks your team faces. A focused retrospective examines the estimation process (how are estimates made?), how dependencies are tracked and managed, how much capacity is reserved for unplanned work (incidents, hotfixes, reviews), and whether your team's definition of 'committed' actually includes appropriate buffers. Addressing each miss individually is whack-a-mole. A 25% buffer without understanding the causes may be right but skips the analysis. The VP presentation is a good idea but downstream of the diagnosis.",
    framework: "Systemic Delivery Analysis: three misses are never three independent events.",
    principle: "Consecutive delivery misses are a planning system failure, not a team effort failure.",
    traps: [
      "Root cause per sprint — treats correlated failures as independent; misses the systemic issue",
      "Blanket capacity reduction without analysis — may be right but is a guess without data",
      "VP presentation before diagnosis — optics over substance; present with findings, not before them"
    ]
  },
  {
    id: "EM-SD03",
    category: "Sprint & Delivery",
    difficulty: 2,
    scenario: "Product wants a feature that your team estimates at 8 weeks. Product says the market window requires it in 4 weeks. Neither side will formally budge. What's your role in resolving this impasse?",
    quote: "When estimates and deadlines don't meet, the answer is usually in the scope, not the number.",
    options: [
      "Defend the 8-week estimate — the team's technical judgment should not be overridden by business pressure.",
      "Accept 4 weeks — the team will figure it out.",
      "Facilitate a scope negotiation: what version of this feature could ship in 4 weeks? What would be deferred? What would the technical cost of the deferred scope be?",
      "Ask your manager to mediate — this is an escalation that needs senior resolution."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"teamMorale":6,"growth":5},
    explanation: "Estimate-vs-deadline impasses are almost always resolvable through scope. Facilitating a 'what can ship in 4 weeks?' conversation with product — not 'can we go faster?', but 'what's the minimum viable version that captures the market window?' — is the right EM move. This respects the technical estimate while creating options for product. Sometimes the 4-week version captures 80% of the value; sometimes it reveals that the deadline was more flexible than stated. Defending the estimate as immovable ignores business context. Accepting 4 weeks without scope discussion results in cut corners you don't control.",
    framework: "Scope Negotiation: when time is fixed, make scope the variable.",
    principle: "Most technical-business timeline conflicts are scope conflicts in disguise.",
    traps: [
      "Defending estimate as immovable — ignores that scope can flex when time is constrained",
      "Accepting unrealistic deadline — the team will cut corners and you'll lose visibility into what was cut",
      "Escalation before scope negotiation — premature; you have the facilitation tools to resolve this yourself"
    ]
  },
  {
    id: "EM-SD04",
    category: "Sprint & Delivery",
    difficulty: 1,
    scenario: "Your team practices 2-week sprints. An engineer proposes switching to Kanban — no sprints, continuous flow. They argue that the sprint boundary creates artificial pressure and unnecessary context switching. How do you evaluate this?",
    quote: "Methodology should serve the team's work style, not impose structure for structure's sake.",
    options: [
      "Decline — sprint cadence provides predictability that product and stakeholders depend on.",
      "Agree immediately — the engineer knows their own workflow best.",
      "Try Kanban for one sprint cycle as an experiment.",
      "Evaluate the specific pain: what's causing the artificial pressure? Is it the sprint itself, or the planning and commitment practices around it?"
    ],
    correct: 3,
    consequences: {"teamMorale":7,"executionRisk":-4,"growth":4},
    explanation: "Sprint complaints are often symptoms of deeper issues with how the sprint is run rather than indictments of the sprint model itself. 'Artificial pressure' usually means the team is over-committed, estimates are too optimistic, or scope changes mid-sprint are common. 'Context switching' may indicate poor story sizing. Before switching methodology, diagnose whether the process around sprints needs fixing. If after investigation the team genuinely does better with Kanban-style flow (often true for maintenance-heavy or support teams), that's a legitimate conclusion. Immediate switch or immediate refusal both skip the diagnosis.",
    framework: "Methodology Evaluation: diagnose the pain before prescribing the process change.",
    principle: "The problem with your sprint is rarely the sprint itself.",
    traps: [
      "Decline without investigation — may be defending a process that's genuinely not working",
      "Immediate agreement — doesn't establish whether the root cause is the methodology or the practices",
      "Experiment sprint — premature without understanding what you're testing for"
    ]
  },
  {
    id: "EM-SD05",
    category: "Sprint & Delivery",
    difficulty: 3,
    scenario: "A critical dependency your team needs from another team is 3 weeks late. The dependent feature is blocking your delivery. The other team's EM says 'we're working on it' but has been saying that for 3 weeks. What's your escalation strategy?",
    quote: "Inter-team dependencies that slip without consequence will slip indefinitely.",
    options: [
      "Escalate to both your managers simultaneously with specific data: dependency requested date, current status, and business impact of continued delay.",
      "Keep following up with the other EM — patience and persistence will resolve it.",
      "Find a workaround to unblock your team — don't depend on another team's timeline.",
      "Ask the other EM for daily status updates to create accountability pressure."
    ],
    correct: 0,
    consequences: {"executionRisk":-8,"strategicPosition":6,"teamMorale":4},
    explanation: "After 3 weeks of 'we're working on it' with no delivery, peer-level follow-up has been exhausted. The right next step is a simultaneous escalation to both managers with documented facts — when the dependency was committed, current status, and the specific business impact of continued delay. This isn't adversarial — it's accurate reporting of a cross-team delivery issue that both managers need visibility on to resolve resource conflicts or priority decisions. Workarounds are worth exploring but shouldn't substitute for escalating a real cross-team delivery failure. Daily update requests are escalation theater, not escalation.",
    framework: "Cross-Team Escalation: document facts, surface to both managers simultaneously.",
    principle: "Dependencies that don't have management visibility don't have management priority.",
    traps: [
      "Continued peer follow-up — three weeks already confirmed this doesn't work",
      "Workaround only — solving the symptom while the dependency failure becomes someone else's next problem",
      "Daily status pressure — creates accountability theater without structural resolution"
    ]
  },
  {
    id: "EM-SD06",
    category: "Sprint & Delivery",
    difficulty: 2,
    scenario: "Your team consistently underestimates stories by 30-40% according to retrospective data. You've tried planning poker, T-shirt sizing, and other estimation techniques — none seem to help. What do you try next?",
    quote: "Estimation technique variety without changing what's being estimated produces consistent misses.",
    options: [
      "Add a 40% buffer to all estimates — accept the team's estimation bias and correct for it.",
      "Investigate what's causing the underestimation: are stories too large when estimated? Are unknowns not surfaced? Are dependencies missing from estimates?",
      "Switch to story points instead of hours — points estimation is less precise but more accurate.",
      "Accept the variation — 30-40% estimation error is within normal engineering variance."
    ],
    correct: 1,
    consequences: {"executionRisk":-8,"teamMorale":5,"growth":4},
    explanation: "Consistent 30-40% underestimation that persists across multiple estimation techniques points to a structural issue in what's being estimated, not how it's being estimated. Common root causes: stories are too large (estimation accuracy degrades with story size), unknowns and dependencies aren't surfaced during planning, technical debt overhead isn't accounted for, or team members don't include their non-coding work (reviews, meetings, incidents). Diagnosing the specific pattern of underestimation usually reveals the fix. Blanket buffering is a crutch that doesn't build estimation capability. Points vs. hours is a format change that doesn't address the underlying cause.",
    framework: "Estimation Root Cause: what's being estimated determines accuracy — not the technique.",
    principle: "Every consistent estimation error has a consistent cause. Find it.",
    traps: [
      "Blanket buffer — adaptive coping without skill development; the underlying problem remains",
      "Technique variety — you've already tried this; different technique isn't different diagnosis",
      "Accepting variance — 30-40% is not normal variance; it's a pattern that can be diagnosed and fixed"
    ]
  },
  {
    id: "EM-SD07",
    category: "Sprint & Delivery",
    difficulty: 1,
    scenario: "Sprint review is tomorrow and two stories were not completed. One was abandoned due to unexpected complexity (70% done), one was de-prioritized mid-sprint for a hot bug fix. How do you run the sprint review?",
    quote: "Sprint reviews that hide incompletions hide information the business needs.",
    options: [
      "Only demo what's completed — reviews should show finished work.",
      "Postpone the sprint review until the incomplete stories are finished.",
      "Demo completed work and be transparent about the two incompletes: state what happened, where things stand, and what the plan is for each.",
      "Demo the 70% complete story — partial work represents partial value."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"executionRisk":-5,"teamMorale":5},
    explanation: "Sprint reviews are information-sharing sessions for stakeholders — transparency about what was completed, what wasn't, and why is the right approach. Stakeholders need accurate information about what's coming and when; hiding incompletions gives them false confidence that erodes trust when reality becomes apparent. Demoing partial work creates confusion about what's actually shipped. Delaying the review delays stakeholder visibility unnecessarily. Being transparent about the two misses — with honest context and a next-steps plan — is exactly what allows stakeholders to adjust their own planning accurately.",
    framework: "Sprint Review Transparency: completed and incomplete stories both deserve honest reporting.",
    principle: "Stakeholders who see accurate sprint data can plan accurately. Stakeholders who see filtered data can't.",
    traps: [
      "Completed-only demo — stakeholders plan against false completeness",
      "Review postponement — delays stakeholder information unnecessarily",
      "Partial work demo — creates ambiguity about what's actually live and ready"
    ]
  },
  {
    id: "EM-SD08",
    category: "Sprint & Delivery",
    difficulty: 3,
    scenario: "Product wants to reduce your team's sprint cycle from 2 weeks to 1 week, arguing it will increase delivery frequency and responsiveness. Your team is resistant — they feel 1-week sprints don't give enough time for complex work. How do you evaluate this?",
    quote: "Sprint length should match the complexity of the work, not the urgency of the stakeholder.",
    options: [
      "Agree to 1-week sprints — faster cadence improves business responsiveness.",
      "Decline to change — the team's preference for 2-week cycles should be respected.",
      "Try 1-week sprints for one month and measure velocity impact before deciding.",
      "Evaluate the actual work mix: if most work is < 1-week stories, 1-week sprints are feasible; if stories typically require 1-2 weeks, the overhead of weekly planning/review would exceed the benefit."
    ],
    correct: 3,
    consequences: {"executionRisk":-6,"teamMorale":6,"growth":4},
    explanation: "Sprint length should be matched to work complexity. The right evaluation is empirical: look at your current story size distribution. If most stories close in 3-5 days, 1-week sprints add cadence without much overhead. If stories routinely span a full 2 weeks, 1-week sprints create constant carryover and planning overhead that reduces actual development time. The team's resistance may reflect legitimate work complexity concerns or may reflect preference inertia — you need data to distinguish. A time-boxed experiment is reasonable but should be informed by the work analysis, not done blind.",
    framework: "Sprint Length Evaluation: match cycle to work complexity, validated by story size distribution.",
    principle: "Sprint cadence is a tool, not a philosophy — choose it empirically.",
    traps: [
      "Business responsiveness as the primary driver — frequency of ceremony ≠ frequency of value delivery",
      "Team preference as sufficient reason — may be valid or may be inertia; you need data to know",
      "Time-boxed experiment without analysis — tells you outcome without root cause"
    ]
  },
  {
    id: "EM-SD09",
    category: "Sprint & Delivery",
    difficulty: 2,
    scenario: "Your team has been consistently delivering at 80% of committed capacity for 6 months. Leadership views this as a delivery problem. You believe it reflects accurate estimation and appropriate buffer. How do you frame this for leadership?",
    quote: "100% sprint completion every sprint usually means the team is sandbagging. 80% may mean they're being honest.",
    options: [
      "Present the data: show that the 80% being delivered is predictable, that quality is high, and that the remaining 20% typically represents genuine scope additions or complexity — not underperformance.",
      "Commit more in each sprint to get to 100% — increase velocity appearance to match leadership expectations.",
      "Reduce commitments by 20% to build a track record of hitting 100% commitments.",
      "Ask leadership to clarify what 'good' delivery looks like to them before defending the current approach."
    ],
    correct: 0,
    consequences: {"strategicPosition":8,"executionRisk":-6,"teamMorale":6},
    explanation: "The sprint completion percentage question is a framing problem with leadership, not a delivery problem. Presenting data — the consistency of 80% delivery, the quality of what was delivered, and the typical nature of the missing 20% (genuine scope changes, unforeseeable complexity) — reframes the conversation from 'you're not meeting targets' to 'this is what reliable, high-quality delivery looks like.' A team that delivers 80% predictably is more valuable than a team that commits 100% and delivers 60% unpredictably. Artificially inflating commitments to hit 100% produces exactly that failure mode.",
    framework: "Delivery Framing: predictable 80% is better than unpredictable 100% — prove it with data.",
    principle: "The goal is accurate commitments reliably kept, not ambitious ones heroically missed.",
    traps: [
      "Inflate commitments to hit 100% — creates exactly the delivery chaos you're trying to avoid",
      "Reduce to 80% commitment — creates the appearance of gaming without addressing the framing issue",
      "Asking for clarity first — legitimate but secondary to presenting your own data-driven framing"
    ]
  },
  {
    id: "EM-SD10",
    category: "Sprint & Delivery",
    difficulty: 3,
    scenario: "Your team has just finished a major quarterly delivery — 3 months of focused work. Morale is high but the team is visibly tired. Product is already loading up the next quarter's roadmap. You want to advocate for a brief recharge period. How do you make this case?",
    quote: "Teams that never decelerate eventually stop.",
    options: [
      "Tell product the team needs a break and negotiate 2 sprint weeks of lighter load.",
      "Quantify the sustainability risk: present data on sprint velocity trends, quality metrics, and engineer feedback, and frame the lighter load as investment in sustained velocity.",
      "Let the team decide what the next sprint looks like — they've earned autonomy.",
      "Say nothing — the team should manage their own energy levels."
    ],
    correct: 1,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":5},
    explanation: "Advocating for a recharge period requires business language, not just morale language. Quantifying the cost of not recharging — velocity degradation, bug rates after sustained pressure, attrition risk — frames the case in terms product and leadership care about. 'The team is tired' is a hard sell. 'Two lighter sprints now maintains 90% velocity next quarter and reduces attrition risk' is a business argument. Simply telling product the team needs a break without framing is likely to be overridden. Leaving it to the team to self-advocate underuses your positional ability to create structural space.",
    framework: "Sustainability Advocacy: frame team health in business continuity terms.",
    principle: "You can't advocate for your team in morale language to people who speak business language.",
    traps: [
      "Morale-only framing — legitimate concern presented in terms leadership can't prioritize",
      "Team autonomy delegation — team can advocate for themselves, but you have influence they don't",
      "Silence — neglects your responsibility to protect sustainable team performance"
    ]
  },
  {
    id: "EM-IR01",
    category: "Incident Response",
    difficulty: 2,
    scenario: "A P1 production incident has been going on for 45 minutes. Two engineers are debugging, but the conversation in the incident channel is noisy — everyone has theories, people are changing things without coordination, and no one has officially communicated to customers. What do you do?",
    quote: "Incident chaos produces longer incidents and worse post-mortems.",
    options: [
      "Let the engineers work — management intervention in debugging slows things down.",
      "Get on a call with the team to troubleshoot together.",
      "Immediately structure the response: designate an incident commander, assign a communications owner, establish a fix-focused channel separate from status updates, and halt uncoordinated changes.",
      "Draft the customer communication yourself while the engineers keep working."
    ],
    correct: 2,
    consequences: {"executionRisk":-10,"customerTrust":7,"teamMorale":5},
    explanation: "Uncoordinated incident response consistently produces longer resolution times. The right EM move at 45 minutes of chaos is to impose structure immediately: one incident commander who coordinates the diagnostic work, one communications owner who handles customer updates, and a clear coordination protocol (what changes require commander approval). This isn't micromanaging debugging — it's removing the coordination overhead that's actively slowing the fix. Drafting communications yourself while engineers work is directionally right but doesn't address the coordination chaos.",
    framework: "Incident Command Structure: designate roles immediately when coordination breaks down.",
    principle: "The fastest path to incident resolution is a structured response, not a faster debugger.",
    traps: [
      "Non-intervention in debugging — accurate that EM shouldn't debug, but ignores the coordination chaos that's slowing resolution",
      "Group call — adds more voices to an already noisy situation",
      "Communications-only focus — helps customers but doesn't address the chaotic internal response"
    ]
  },
  {
    id: "EM-IR02",
    category: "Incident Response",
    difficulty: 3,
    scenario: "Your team resolved a P1 incident in 3 hours. The post-mortem reveals that a junior engineer made a config change without following the change management process. The incident impacted customers for 90 minutes. How do you handle the post-mortem and the individual?",
    quote: "Blameful post-mortems produce engineers who hide problems. Blameless ones produce engineers who surface them.",
    options: [
      "Include the engineer's name in the post-mortem as the person who caused the incident.",
      "Use it as a learning moment for the whole team by discussing the mistake publicly in the post-mortem.",
      "Have a private disciplinary conversation with the junior engineer and note it in their performance record.",
      "Run a blameless post-mortem focused on systemic failures: why was the change management process not followed, what made it easy to skip, and how do you prevent it — independent of individual blame."
    ],
    correct: 3,
    consequences: {"teamMorale":9,"executionRisk":-8,"strategicPosition":6},
    explanation: "Blameless post-mortems are an established best practice in engineering precisely because blame suppresses information sharing — engineers who fear being named in post-mortems hide incidents and near-misses. The right post-mortem asks: what made the change management process easy to skip? Was it unclear? Cumbersome? Not reinforced? The junior engineer's individual error is less important than the system that allowed it. Separately, a private coaching conversation with the engineer is appropriate — help them understand the impact, not to discipline but to develop. Public discussion of the mistake by name is the worst of both worlds.",
    framework: "Blameless Post-mortem: system failures cause incidents; individual behavior is the symptom.",
    principle: "Name the system failure. Coach the individual privately.",
    traps: [
      "Named blame in post-mortem — chills future information sharing across the team",
      "Performance record notation for a process-gap incident — disproportionate and creates fear culture",
      "Public discussion by name — humiliating and suppresses the open culture post-mortems require"
    ]
  },
  {
    id: "EM-IR03",
    category: "Incident Response",
    difficulty: 2,
    scenario: "Your team has been having recurring P2 incidents every 2-3 weeks — same component, different triggers. Each post-mortem identifies a specific fix which gets implemented. But the incidents keep coming. What's missing from your post-mortem process?",
    quote: "Post-mortems that fix symptoms produce recurring incidents. Post-mortems that fix systems prevent them.",
    options: [
      "Add a pattern review: after 3+ incidents in the same component, conduct a component-level architectural review, not just a per-incident root cause analysis.",
      "More thorough root cause analysis per incident — the specific fixes aren't deep enough.",
      "Increase monitoring and alerting to catch issues earlier.",
      "Assign a dedicated engineer to own the problematic component and fix it comprehensively."
    ],
    correct: 0,
    consequences: {"executionRisk":-9,"teamMorale":6,"strategicPosition":6},
    explanation: "Recurring incidents in the same component despite individual fixes indicate a structural or architectural problem that per-incident root cause analysis can't surface. When a component has had 3+ incidents, a component-level review is warranted: what's the architecture of this component, what are the underlying structural weaknesses, is the tech debt accumulation the real pattern? Individual post-mortems find specific causes; pattern reviews find structural causes. Better monitoring is a useful complement but doesn't address the underlying fragility. An ownership assignment is useful for accountability but doesn't guarantee architectural insight.",
    framework: "Recurring Incident Analysis: pattern reviews reveal structural causes that per-incident analysis misses.",
    principle: "Three incidents in the same component is a component review, not three separate incidents.",
    traps: [
      "Deeper per-incident RCA — still looking at individual events when the pattern is the signal",
      "Monitoring improvement — helps detection but not prevention of the structural fragility",
      "Ownership assignment — creates accountability but doesn't automatically produce architectural diagnosis"
    ]
  },
  {
    id: "EM-IR04",
    category: "Incident Response",
    difficulty: 1,
    scenario: "A P1 incident is ongoing and your VP sends you a message asking for an update to share with customers. You have partial information — you know the scope of impact but not the root cause or ETA for resolution. What do you communicate?",
    quote: "Customers in an outage need honesty about uncertainty more than false precision.",
    options: [
      "Wait until you have the root cause before responding to your VP.",
      "Respond with what you know: scope of impact, that investigation is underway, and a specific time for the next update — without speculating on cause or ETA.",
      "Give a rough ETA based on your current best guess to manage expectations.",
      "Ask an engineer to pause and give you a full status update before responding."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-6,"teamMorale":5},
    explanation: "In an ongoing incident, stakeholders need accurate partial information on a defined schedule — not silence while waiting for complete information, and not speculative ETAs that will likely be wrong. The right communication structure: what is the known impact (customers affected, features unavailable), that the team is actively investigating, and a specific time for the next update (e.g., 'update in 30 minutes'). This keeps stakeholders appropriately informed without creating false expectations. Pulling engineers off the investigation for a status update extends the incident. A rough ETA guess is often worse than honest uncertainty.",
    framework: "Incident Communication: scope + investigation status + next update time = minimum viable update.",
    principle: "In a crisis, a scheduled partial update is more trustworthy than a delayed complete one.",
    traps: [
      "Waiting for complete information — leaves VP and customers without any update during a high-stress period",
      "Rough ETA guess — speculative ETAs that miss create secondary frustration",
      "Pausing engineers for status — extends the incident to improve communication about it"
    ]
  },
  {
    id: "EM-IR05",
    category: "Incident Response",
    difficulty: 3,
    scenario: "Following a major incident, your post-mortem identifies 12 action items. Past post-mortems at your company have generated similar lists that were never completed. How do you ensure this one is different?",
    quote: "Post-mortems that generate action items without owners and deadlines generate recurring incidents.",
    options: [
      "Assign all 12 items to your team as sprint work.",
      "Share the 12 items with the broader engineering team for collective prioritization.",
      "Triage the 12 items: identify the 3 with the highest recurrence prevention value, assign specific owners with deadlines, and track in your sprint board with the same visibility as product work.",
      "Add all 12 to your technical debt register and address them in the next debt reduction sprint."
    ],
    correct: 2,
    consequences: {"executionRisk":-9,"teamMorale":7,"strategicPosition":6},
    explanation: "The most common reason post-mortem action items are never completed is that all items are treated as equally important and none have real ownership. The right approach is ruthless triage: which 3 of the 12 would prevent the incident from recurring or materially reduce its impact? Assign specific owners with committed deadlines, and put them in your sprint board with the same visibility and accountability as product work. The remaining items should be triaged as lower priority or added to the technical debt register — not as a dumping ground, but with a realistic timeline. All 12 assigned without triage means none will happen.",
    framework: "Action Item Completion: triage → specific owner → deadline → sprint visibility.",
    principle: "An action item without an owner and a deadline is a wish, not a commitment.",
    traps: [
      "All 12 to team — without triage and ownership, collective ownership = no ownership",
      "Broader team prioritization — dilutes accountability and adds meeting overhead to an already loaded post-mortem",
      "Debt register for all 12 — the debt register is fine for lower-priority items but shouldn't absorb the critical prevention items"
    ]
  },
  {
    id: "EM-IR06",
    category: "Incident Response",
    difficulty: 2,
    scenario: "Your team's on-call rotation has one engineer who consistently responds late to incidents and another who is the de facto incident response expert. The expert is burning out from carrying the load. How do you fix this?",
    quote: "On-call rotations are only as reliable as the least prepared person in them.",
    options: [
      "Remove the late-responder from on-call — they're not reliable.",
      "Add more engineers to the on-call rotation to reduce per-person burden.",
      "Have the expert create documentation so others can handle incidents more independently.",
      "Have a direct conversation with the late-responder about their response times, and invest in incident response training and runbook development to reduce the knowledge gap."
    ],
    correct: 3,
    consequences: {"teamMorale":8,"executionRisk":-7,"growth":5},
    explanation: "On-call reliability gaps are usually skill and confidence gaps, not motivation gaps. The late-responder may be taking longer to engage because they feel unprepared — creating a feedback loop where avoidance increases the gap further. The right intervention is direct: address the response time expectation clearly, and invest in building their incident response capability through runbooks, pairing on incidents, tabletop exercises. This distributes the load sustainably. Removing them from rotation solves the short-term problem but doesn't build team capability. Documentation alone (option C) doesn't address the core confidence gap. Expanding rotation without fixing the skill gap just adds more unprepared engineers.",
    framework: "On-Call Capability Building: address behavior directly + build skills, not just redistribute load.",
    principle: "Expertise concentration is an on-call reliability risk. Build the team up, not just the runbooks.",
    traps: [
      "Removal from rotation — reduces the problem by reducing coverage without addressing capability",
      "Documentation only — helps but doesn't address the responder's lack of confidence or experience",
      "Rotation expansion — adds coverage without fixing the preparation problem"
    ]
  },
  {
    id: "EM-IR07",
    category: "Incident Response",
    difficulty: 1,
    scenario: "Your company has never had a formal incident severity classification (P1, P2, P3). Your team responds to all production issues with the same urgency. This is causing burnout and making it hard to prioritize. What's your proposal for a severity framework?",
    quote: "Everything being high priority means nothing is.",
    options: [
      "Propose a severity framework based on customer impact and business function scope: P1 (full outage or data loss), P2 (significant feature degraded, workaround exists), P3 (minor bug, low impact).",
      "Let engineers use their judgment on severity — they know the system best.",
      "Adopt an industry-standard severity framework from a vendor's runbook.",
      "Create a committee to define severity levels over 60 days."
    ],
    correct: 0,
    consequences: {"teamMorale":8,"executionRisk":-8,"strategicPosition":5},
    explanation: "A severity framework based on customer impact and business function scope is the right starting point — and the EM proposing it is the right level. Clear criteria (what defines P1 vs. P2 vs. P3) give engineers the judgment framework they need without forcing every issue through subjective escalation. Subjective judgment leads to inconsistency under stress. Industry templates are reasonable starting points but should be adapted to your context. A 60-day committee process is disproportionate for what should be a 1-week definition exercise.",
    framework: "Severity Classification: customer impact + business function scope = triage foundation.",
    principle: "A severity system that engineers understand and trust reduces both over-response and under-response.",
    traps: [
      "Individual judgment only — inconsistent under pressure, especially for newer engineers",
      "Vendor template adoption without adaptation — may not map to your specific system and customer agreements",
      "60-day committee — overcomplicated for a framework that should be fast to define and easy to apply"
    ]
  },
  {
    id: "EM-IR08",
    category: "Incident Response",
    difficulty: 3,
    scenario: "During a high-severity incident, the lead debugging engineer is making a mistake that you can see but they can't — they're looking in the wrong place. You know their track record and they're usually right. How do you intervene without damaging their confidence?",
    quote: "In an incident, being right matters more than being polite — but you can be both.",
    options: [
      "Stay quiet — trust their process and let them find the error on their own.",
      "Intervene directly but constructively: 'I might be wrong, but I'm noticing the error logs are also showing X in service Y — could that be related?'",
      "Take over the debugging — you see the path to resolution and time is critical.",
      "Ask a second engineer to look at the area you think is relevant without telling the lead."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"teamMorale":6,"customerTrust":6},
    explanation: "In an active incident, introducing a specific hypothesis — framed as a question, not a correction — is the right move. 'I might be wrong, but have you looked at X?' respects their expertise, adds your perspective, and lets them evaluate it without feeling overridden. This is faster than staying quiet and hoping they find it, and less disruptive than taking over. Taking over signals a lack of confidence in them that will outlast the incident. Directing a second engineer around the lead creates a confusing parallel investigation that adds noise.",
    framework: "Collaborative Incident Debugging: hypothesis as question, not correction.",
    principle: "The fastest incident resolution includes every relevant perspective — delivered as input, not authority.",
    traps: [
      "Silence — in a P1 incident, 'trust the process' is the wrong priority",
      "Taking over — faster in the moment, damages trust and confidence afterward",
      "Parallel second investigation — adds noise and bypasses the lead without informing them"
    ]
  },
  {
    id: "EM-IR09",
    category: "Incident Response",
    difficulty: 2,
    scenario: "Your team resolved a P1 data corruption incident. A small amount of customer data was corrupted and cannot be recovered. Customers need to be notified. Legal is cautious about what to disclose. What's your position on transparency?",
    quote: "The disclosure conversation you avoid becomes the legal liability you create.",
    options: [
      "Defer entirely to legal — this is outside your technical scope.",
      "Send customers a vague notification to satisfy legal while minimizing exposure.",
      "Provide your technical perspective to legal: what specifically was corrupted, how many customers were affected, how it happened, and what's been fixed. Advocate for full disclosure to affected customers.",
      "Only notify customers who specifically ask — proactive disclosure increases liability."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"strategicPosition":6,"executionRisk":-7},
    explanation: "Engineers and EMs have a responsibility to provide accurate technical facts to inform the disclosure decision — not to make the legal call, but not to be passive either. Customers who were affected by data corruption deserve to know: what was corrupted, how it might affect them, and what has been fixed. Your job is to ensure legal has accurate technical information, and to advocate for transparency as the right ethical and long-term business choice. Vague notifications and passive disclosure policies are the approaches that become trust-destroying when the full story eventually emerges — and it always does.",
    framework: "Disclosure Advocacy: provide accurate facts to legal and advocate for transparency.",
    principle: "Technical leaders who provide clear facts and advocate for transparency serve their customers and their company.",
    traps: [
      "Full legal deference without technical input — legal makes better decisions with accurate technical facts",
      "Vague notification — technically compliant but customer-deceptive; builds resentment when details surface",
      "Passive disclosure — waiting to be asked about a data corruption incident is ethically and legally problematic"
    ]
  },
  {
    id: "EM-IR10",
    category: "Incident Response",
    difficulty: 1,
    scenario: "After a busy incident month, your team's on-call engineer says they're exhausted and need a break from on-call. You have 5 engineers who could share the rotation. Currently 2 are always on call. What's your response?",
    quote: "On-call sustainability is a team design problem, not an individual endurance problem.",
    options: [
      "Tell them to push through — on-call is part of the role.",
      "Implement better monitoring and automation to reduce the volume of on-call pages.",
      "Hire a dedicated operations engineer to reduce on-call burden on development engineers.",
      "Immediately expand the rotation to all 5 eligible engineers and reduce each individual's on-call frequency."
    ],
    correct: 3,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":4},
    explanation: "On-call burnout is a systemic problem with a systemic fix — distribute the rotation. If 5 engineers are eligible and only 2 are carrying the load, expanding the rotation is the immediate right answer. The concern about expanding is usually preparedness (will others be effective?), which is solvable with runbooks and shadowing. Telling the engineer to push through is the fastest path to attrition. Hiring ops engineers is a medium-term investment that doesn't solve today's burnout. Better monitoring is valuable but takes weeks to show in reduced page volume.",
    framework: "On-Call Distribution: sustainable rotations require every eligible engineer participating.",
    principle: "On-call burnout is the most preventable form of team attrition.",
    traps: [
      "Push through — fastest path to resignation from a key engineer",
      "Ops engineer hire — right medium-term investment but doesn't solve the immediate burnout",
      "Monitoring improvement — right long-term investment but takes weeks to reduce page volume"
    ]
  },
]
