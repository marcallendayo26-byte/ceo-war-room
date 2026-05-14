export const CASES_EM2 = [
  {
    id: "EM-HS01",
    category: "Hiring & Staffing",
    difficulty: 2,
    scenario: "You're interviewing for a senior engineer role. Candidate A has 8 years of experience, deep expertise in your exact tech stack, but came across as dismissive of others' opinions in the panel interview. Candidate B has 5 years of experience, slightly less relevant stack knowledge, but was collaborative, asked sharp questions, and demonstrated strong learning velocity. Who do you hire?",
    quote: "Skills can be taught. Collaborative behavior in a panel interview cannot be unlearned.",
    options: [
      "Hire Candidate B — learning velocity and collaborative behavior predict long-term team health better than current skill match.",
      "Hire Candidate A — deep expertise and stack fit are hard to find and critical to your current roadmap.",
      "Hire neither — continue searching for someone with both technical depth and collaborative behavior.",
      "Hire Candidate A with a clear performance expectation around collaboration from day one."
    ],
    correct: 0,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":5},
    explanation: "Hiring a technically strong candidate who demonstrated dismissive behavior in a structured interview setting is high-risk. Interview behavior is typically more professional than day-to-day behavior — if they're dismissive in an interview, they're likely worse on a bad day. A senior engineer who undermines team collaboration has outsized negative impact: they discourage questions, slow down junior engineers, and create attrition risk. A 5-year engineer with strong learning velocity and collaboration will be at the same technical level as the 8-year engineer within 12-18 months — and without the team health cost.",
    framework: "Hiring for Team Health: technical skills are learnable; collaborative behavior is a cultural fit signal.",
    principle: "The engineer who interviews well but collaborates poorly will fail at the thing that matters most.",
    traps: [
      "Expertise-first hire — stack fit depreciates as tech evolves; behavior doesn't self-correct",
      "Performance expectation workaround — managing collaborative behavior after hire almost never works at the senior level",
      "Continue searching — reasonable but don't frame it as 'wait for perfect' when B is genuinely strong"
    ]
  },
  {
    id: "EM-HS02",
    category: "Hiring & Staffing",
    difficulty: 3,
    scenario: "You need to hire 3 engineers in Q1 but your recruiting pipeline is slow. Your manager suggests hiring contractors to fill the gap immediately. Your team lead says contractors often slow things down due to context-ramp and knowledge gaps. Who's right, and what do you do?",
    quote: "Contractors solve a capacity problem. They rarely solve a velocity problem.",
    options: [
      "Hire contractors immediately — the team needs capacity now and ramp can be managed.",
      "Evaluate the nature of the work: use contractors for well-defined, isolated tasks; continue recruiting for roles requiring deep context.",
      "Decline contractors — wait for the right full-time hires even if it takes longer.",
      "Hire one contractor to test the ramp experience before committing to more."
    ],
    correct: 1,
    consequences: {"executionRisk":-6,"teamMorale":5,"growth":5},
    explanation: "Both your manager and team lead are partially right. Contractors add capacity quickly but ramp slowly on complex, context-heavy work — and can actually slow teams down if the work requires deep system knowledge or frequent collaboration. The right answer is to evaluate the work type: isolated, well-scoped tasks (infrastructure automation, specific integrations, QA tooling) are well-suited to contractors. Core product work with high context requirements is not. Running a single contractor experiment is reasonable due diligence before scaling.",
    framework: "Contractor Fit: match contractor scope to work that doesn't require deep organizational context.",
    principle: "Contractors add headcount. Only the right contractor adds velocity.",
    traps: [
      "Full contractor adoption — ramp on complex work can create net-negative velocity for weeks",
      "Flat refusal — ignores that contractors can genuinely accelerate the right categories of work",
      "Single-contractor test — useful but doesn't help with the Q1 deadline if results take time to assess"
    ]
  },
  {
    id: "EM-HS03",
    category: "Hiring & Staffing",
    difficulty: 2,
    scenario: "You're building an interview process for a mid-level engineer role. Your current process is: recruiter screen → technical phone screen → 5-hour take-home assignment → full panel (3 interviews). You've noticed strong candidates are dropping off after the take-home assignment. What's the problem and how do you fix it?",
    quote: "Candidate experience is a signal of your culture — even before they join.",
    options: [
      "Reduce the take-home to 2 hours — still tests ability but reduces burden.",
      "Replace the take-home with a shorter, live coding session that requires less time commitment.",
      "Audit the entire process: understand where candidates drop, whether each step adds distinct signal, and redesign around minimum necessary friction.",
      "Offer compensation for the take-home time to attract candidates who are currently declining."
    ],
    correct: 2,
    consequences: {"teamMorale":6,"growth":6,"strategicPosition":5},
    explanation: "Drop-off at the take-home is a symptom of a process that asks for too much before it gives enough back. The right response is to audit the full process: does the 5-hour take-home provide signal not available from a 90-minute live session? Do all 3 panel interviews cover distinct dimensions, or are they redundant? Strong candidates in a competitive market won't spend 5 hours on an early-stage take-home from a company they barely know. Reducing to 2 hours is better but still misses the audit. Compensation for take-homes is non-standard and doesn't fix the underlying process problem.",
    framework: "Interview Process Design: minimum necessary friction per stage while maintaining distinct signal per step.",
    principle: "Every hour of interview you require is a filter — make sure it's filtering for the right things.",
    traps: [
      "Reduce take-home only — better but doesn't examine whether the take-home is the right format at all",
      "Live coding substitute — may be right but should come from an audit, not as a default swap",
      "Compensation for take-home — non-standard, adds complexity, doesn't fix the core issue"
    ]
  },
  {
    id: "EM-HS04",
    category: "Hiring & Staffing",
    difficulty: 3,
    scenario: "Your team has been approved to hire 2 senior engineers. Your existing team has a mix of strong mid-levels who are growing fast. A senior engineer in the team argues that the headcount should go to promoting mid-levels and hiring 2 junior engineers instead — saving money and investing in the existing team. What's your response?",
    quote: "Headcount decisions are strategy decisions. They should be treated as such.",
    options: [
      "Follow the engineer's advice — promoting from within is better for morale.",
      "Hire the 2 seniors as planned — you need proven capability now, not potential.",
      "Let the team vote on the approach — it affects them most.",
      "Evaluate what the headcount is meant to solve: if it's speed and immediate capability, hire seniors; if it's team development and cost, the proposed alternative has merit."
    ],
    correct: 3,
    consequences: {"teamMorale":7,"growth":6,"strategicPosition":7},
    explanation: "Headcount allocation is a strategy question, not a morale question. The right answer depends on what the 2 senior headcount is designed to solve. If you're in a critical delivery period with known technical leadership gaps, seniors add immediate capability. If your mid-levels are close to ready, promoting them and hiring juniors is a legitimate alternative that builds culture and saves money. The engineer's argument deserves genuine evaluation, not dismissal. Team voting on headcount allocation is inappropriate — it's an EM decision with input.",
    framework: "Headcount Strategy: match hire level to the actual problem you're solving.",
    principle: "Hire for what you need now. Build for what you need next. Don't confuse the two.",
    traps: [
      "Default promote-from-within — morale rationale doesn't answer the capability question",
      "Default senior hire — doesn't evaluate whether the alternative actually addresses the same needs",
      "Team vote — headcount is an EM decision with team input, not a democratic one"
    ]
  },
  {
    id: "EM-HS05",
    category: "Hiring & Staffing",
    difficulty: 2,
    scenario: "You've extended an offer to a strong candidate. They come back saying they have a competing offer that's 15% higher. Your budget allows a 5% increase. The gap is real. The candidate has been your top choice throughout. How do you handle the counteroffer?",
    quote: "Compensation gaps that don't close lose the candidate. Every alternative that can't close the gap needs to be real, not performative.",
    options: [
      "Offer the 5% increase but also present genuine non-compensation value: equity upside, technical scope, growth path, team quality.",
      "Offer the 5% increase and accept the decision either way.",
      "Decline to counter — competing on salary when you're budget-constrained sets a bad precedent.",
      "Ask your manager to approve additional budget given how strong the candidate is."
    ],
    correct: 0,
    consequences: {"teamMorale":6,"growth":5,"strategicPosition":5},
    explanation: "When you can't match a salary gap fully, non-compensation value has to be real and specific — not generic platitudes. Strong candidates evaluate total compensation holistically: equity, role scope, technical challenge, growth trajectory, team quality, remote flexibility, and culture. Present the 5% increase alongside genuinely differentiated elements of the role. Simultaneously, escalate the budget question to your manager — if the candidate is as strong as you believe, this is a business case worth making. Declining to counter because of precedent concerns forfeits a strong candidate over a principle that rarely applies in practice.",
    framework: "Compensation Negotiation: maximize the full offer, escalate the budget question, and be specific.",
    principle: "Generic 'culture and growth' pitches don't close salary gaps. Specific, credible differentiation does.",
    traps: [
      "5% only, no other differentiation — may not close the gap when 10% is what they need",
      "Declining on precedent — loses a strong candidate for an internal principle that doesn't help either party",
      "Manager escalation as first step — useful but should accompany a full offer, not precede it"
    ]
  },
  {
    id: "EM-HS06",
    category: "Hiring & Staffing",
    difficulty: 1,
    scenario: "You notice your team has no diversity — it's 8 engineers, all with similar backgrounds and CS degrees from similar universities. You want to change this in your next hire cycle. What's the most effective systemic approach?",
    quote: "Diverse outcomes require diverse inputs — at the sourcing stage, not the decision stage.",
    options: [
      "Evaluate candidates more favorably who bring different backgrounds — weight diversity in final decisions.",
      "Audit your sourcing: expand to bootcamps, HBCUs, Hispanic-serving institutions, non-traditional programs, and referral sources that reach different networks.",
      "Post the job description in more places — broader distribution reaches more candidates.",
      "Partner with a diversity-focused recruiting firm to source candidates."
    ],
    correct: 1,
    consequences: {"teamMorale":6,"strategicPosition":7,"growth":5},
    explanation: "Diversity starts at the top of the funnel. If your candidate pool is homogeneous, diverse hiring decisions are nearly impossible. Auditing and expanding your sourcing — to bootcamps, non-traditional CS programs, coding fellowships, university partnerships with different demographics — creates the diverse pipeline from which objective evaluation can produce diverse hires. Broadly posting more doesn't change which networks see the posts. A diversity recruiting firm is useful but should complement sourcing changes, not substitute for them. Adjusting final decisions by background introduces inconsistency and doesn't scale.",
    framework: "Diversity Sourcing: fix the pipeline, not the decision.",
    principle: "You can't hire a diverse team from a homogeneous pool.",
    traps: [
      "Decision-stage weighting — inconsistent, legally fraught, and doesn't scale",
      "Broader posting distribution — doesn't change which networks are reached",
      "Diversity firm only — useful supplement but doesn't address your own sourcing network"
    ]
  },
  {
    id: "EM-HS07",
    category: "Hiring & Staffing",
    difficulty: 3,
    scenario: "Your top performer is consistently unhappy about the quality of new hires on the team. She says 'the bar is dropping.' You've reviewed the recent hires and believe they're solid engineers who haven't yet had time to show their capabilities. How do you handle this?",
    quote: "Top performers who dictate hiring standards become the ceiling of your team, not just its floor.",
    options: [
      "Include her more in the hiring process to address her concerns.",
      "Tell her the hiring decisions are yours to make and her job is to help new hires succeed.",
      "Take her concern seriously but investigate before acting: review performance data on recent hires and have a direct conversation about what specific behaviors are driving her perception.",
      "Raise the hiring bar to align with her expectations — top performers' instincts on quality are usually right."
    ],
    correct: 2,
    consequences: {"teamMorale":7,"executionRisk":-5,"strategicPosition":6},
    explanation: "A top performer's concern about hiring bar deserves genuine investigation, not dismissal or reflexive accommodation. The right response is data-driven: review what specific behaviors or output she's observing, compare it to your own observations of the new hires, and have a direct conversation. Sometimes top performers are correct — there has been a slip. Sometimes they're exhibiting 'brilliant jerk' patterns, holding new hires to unrealistic standards or being impatient with ramp time. Including her more in hiring without investigating first may just give her veto power. Telling her it's not her call is technically correct but dismisses a potentially valid concern.",
    framework: "Concerns from Top Performers: investigate before accommodating or dismissing.",
    principle: "Top performers' instincts about team quality deserve data-validation, not automatic deference.",
    traps: [
      "Include in hiring without investigation — gives veto power before you've validated the concern",
      "Dismissal — potentially valid concern; top performers see things managers miss",
      "Raise the bar reflexively — may be right, but acting without investigating could misdiagnose the problem"
    ]
  },
  {
    id: "EM-HS08",
    category: "Hiring & Staffing",
    difficulty: 2,
    scenario: "You need to backfill a role after an engineer leaves unexpectedly. You have two options: open a new external search (8-12 weeks typically) or redistribute the work across the remaining 6 engineers temporarily. The work is critical and your team is already at capacity. What's your approach?",
    quote: "Temporary overload is survivable. Sustained overload is how you lose three engineers instead of one.",
    options: [
      "Redistribute immediately and start the external search in parallel.",
      "Bring in a contractor immediately to fill the gap while you search for a full-time hire.",
      "Ask each engineer to absorb 15% more work — they can handle it temporarily.",
      "Pause some non-critical projects to absorb the loss without overloading the team, and fast-track the hire."
    ],
    correct: 3,
    consequences: {"teamMorale":8,"executionRisk":-6,"growth":4},
    explanation: "A team already at capacity cannot absorb a departed engineer's full workload without consequences — and 'temporarily' has a way of becoming permanent. The right response is to create space: identify which projects are non-critical and can be paused or slowed, and use that capacity to cover the critical work while you fast-track the hire. Redistribution with a simultaneous search is necessary but not if it means everyone is operating at 115%. Even temporary overload at an already-full team accelerates attrition. Contractor consideration is valid for the right scope of work.",
    framework: "Backfill Capacity: scope reduction + fast-track hire > temporary overload.",
    principle: "The right response to losing one engineer is not spreading that engineer's work across everyone who remains.",
    traps: [
      "Redistribution without scope reduction — sustained overload risks losing 2-3 more engineers",
      "15% overload ask — underestimates the actual load and normalizes overwork",
      "Contractor first — valid option if the work is suited, but shouldn't delay evaluating scope reduction"
    ]
  },
  {
    id: "EM-HS09",
    category: "Hiring & Staffing",
    difficulty: 1,
    scenario: "A candidate you really like has a 3-week notice period. Your team urgently needs the role filled and is pushing you to ask them to start in 2 weeks by cutting the notice short. What do you do?",
    quote: "How a candidate treats their current employer is how they'll treat you.",
    options: [
      "Accept the 3-week notice period — honoring commitments at their current employer is a green flag.",
      "Ask them to see if they can cut the notice by a week — framing it as a strong desire to have them join.",
      "Tell them you'll start the offer contingent on an earlier start date.",
      "See if they can do prep work remotely during their notice period to shorten the ramp."
    ],
    correct: 0,
    consequences: {"teamMorale":7,"customerTrust":5,"executionRisk":-3},
    explanation: "A candidate who honors their notice period fully is demonstrating exactly the behavior you want on your team. Pressuring them to shorten it sends the message that you value your urgency over their professional integrity. It also creates a subtle dynamic where the candidate starts their tenure with you having already compromised a commitment — which can subtly lower their baseline for future commitments. Asking to cut the notice by a week, even framed as enthusiasm, still applies unwanted pressure. The remote prep compromise is a reasonable optional offer, not a requirement.",
    framework: "Professional Integrity Hiring: the behaviors candidates show before joining predict the behaviors they show after.",
    principle: "Honor the notice period. The company that rushes candidates in will rush them out.",
    traps: [
      "Asking to shorten — signals your urgency overrides their integrity",
      "Contingent offer on early start — coercive and could sour the relationship before day one",
      "Remote prep as a requirement — reasonable if genuinely optional, problematic if it's a substitute for accepting the full notice"
    ]
  },
  {
    id: "EM-HS10",
    category: "Hiring & Staffing",
    difficulty: 3,
    scenario: "You're considering promoting an IC engineer to a tech lead role — their first management-adjacent position. They're technically excellent but have shown impatience with less experienced teammates in code reviews. You believe they can grow past this. How do you approach the promotion?",
    quote: "Promoting someone without addressing their known gaps makes the gap your problem.",
    options: [
      "Promote immediately — technical excellence and leadership are correlated.",
      "Promote with a specific development plan: the impatience in code reviews is named explicitly, behavioral expectations are clear, and there's a 90-day check-in to assess.",
      "Delay the promotion until they've demonstrated improved collaboration for 6 months.",
      "Promote to a staff engineer role instead — increase scope without the people management expectations."
    ],
    correct: 1,
    consequences: {"teamMorale":8,"executionRisk":-6,"growth":6},
    explanation: "Promotions to leadership-adjacent roles should be paired with explicit gap naming and development plans, not just a title change. Saying 'you're being promoted AND here's the specific behavior we need to see change AND here's how we'll evaluate it at 90 days' is significantly more effective than either delaying indefinitely or promoting without addressing the issue. The 6-month delay is too conservative for someone who is otherwise ready. A staff engineer role is worth considering but doesn't address the underlying collaboration issue — it just reduces the immediate leadership surface area.",
    framework: "Promotion with Development Plan: name the gap explicitly before the promotion, not after.",
    principle: "Promoting someone with known gaps without naming them is hoping the problem resolves itself.",
    traps: [
      "Unconditional promotion — the impatience issue surfaces at scale with a title behind it",
      "6-month delay — overly conservative and may demotivate a strong candidate",
      "Staff engineer detour — may be right but doesn't resolve the collaboration gap you've already identified"
    ]
  },
  {
    id: "EM-IC01",
    category: "IC Management",
    difficulty: 2,
    scenario: "A strong mid-level engineer on your team has been consistently hitting their deliverables but is visibly disengaged — shorter standup updates, fewer Slack interactions, declining optional team events. They haven't flagged anything in 1:1s. What do you do?",
    quote: "Disengagement is quiet — it doesn't announce itself before it turns into a resignation.",
    options: [
      "Wait for them to raise it — if they haven't said anything, it's not your place to pry.",
      "Assign them a high-visibility project to re-energize them.",
      "Name what you're observing in your next 1:1: 'I've noticed you seem less engaged lately — is everything okay, both professionally and personally?'",
      "Check in with their teammates to understand if something happened."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"executionRisk":-5,"growth":4},
    explanation: "Managers who wait for disengaged engineers to self-report typically find out at resignation. The right move is to name the observation directly but non-accusatorially in a 1:1. 'I've noticed X — is everything okay?' opens the door without creating a presumption. The engineer may have a personal situation, a work frustration they didn't feel safe raising, or be actively interviewing elsewhere. All of those have different responses — but you can't respond to what you haven't surfaced. Assigning a big project to manufacture engagement is a guess at the solution before the diagnosis. Checking with teammates bypasses the direct relationship.",
    framework: "Engagement Monitoring: name observable changes early in 1:1s — before they become exits.",
    principle: "You can't fix disengagement you pretend not to notice.",
    traps: [
      "Wait and see — passive management on a signal that often precedes departure",
      "Project assignment — guessing at a solution before understanding the cause",
      "Peer intel gathering — bypasses the relationship and creates gossip dynamics"
    ]
  },
  {
    id: "EM-IC02",
    category: "IC Management",
    difficulty: 3,
    scenario: "An engineer consistently delivers technically excellent work but always needs significant time extensions. They underestimate every task by 2-3x and never flag it until the deadline passes. It's affecting sprint velocity. How do you coach this?",
    quote: "Estimation is a skill, not a talent — it can be built with the right feedback loops.",
    options: [
      "Add a 2x buffer to all their estimates automatically — account for the pattern at the planning level.",
      "Pair them with a more experienced engineer for estimation and planning until the skill improves.",
      "Put them on a performance improvement plan — consistent delivery misses are a performance issue.",
      "Have a direct coaching conversation: the pattern is named, you build estimation skills together, and ask them to proactively flag slippage as soon as they see it."
    ],
    correct: 3,
    consequences: {"teamMorale":7,"executionRisk":-7,"growth":5},
    explanation: "Estimation failure is almost always a skill gap, not a motivation gap — and it's fixable with coaching. The right approach is a direct but constructive conversation: name the pattern, explore what's causing the underestimation (optimism bias, scope creep, dependency underestimation), and build specific habits together — pre-task breakdown, explicit risk identification, 'when will I know I'm in trouble?' check-ins. Asking them to flag slippage early is a behavior change you can track. Buffer management at the planning level masks the problem without fixing it. PIP for an estimation skill gap is disproportionate. Pairing is useful but shouldn't substitute for the direct coaching conversation.",
    framework: "Estimation Coaching: name the pattern, build the skill, create the feedback loop.",
    principle: "Buffer is a workaround. Estimation coaching is a fix.",
    traps: [
      "Planning buffer — hides the problem at team level while it persists at individual level",
      "PIP for skill gap — inappropriate escalation for what is a coachable behavior",
      "Pairing only — useful supplement but doesn't replace the direct conversation"
    ]
  },
  {
    id: "EM-IC03",
    category: "IC Management",
    difficulty: 2,
    scenario: "A junior engineer asks to be assigned to a high-complexity infrastructure project usually handled by seniors. You know they're capable of learning but it will likely take them longer and could produce riskier output. How do you respond?",
    quote: "The best growth opportunities are slightly beyond reach, not safely within it.",
    options: [
      "Assign them with structured support: a senior engineer as a designated resource for consultation, defined checkpoints, and clear escalation criteria.",
      "Assign them fully and see how they do — growth requires challenge.",
      "Decline — the project is too complex and the risk of quality issues is too high.",
      "Give them a lower-complexity component of the project to start."
    ],
    correct: 0,
    consequences: {"teamMorale":8,"growth":6,"executionRisk":-5},
    explanation: "Stretch assignments are how engineers grow, but unsupported stretch assignments on high-risk infrastructure can create costly mistakes. The right model is scaffolded stretch: assign them the project, pair them with a senior for consultation (not oversight), define explicit checkpoints where output is reviewed, and agree on escalation criteria — when should they raise their hand vs. push through? This gives them real growth while managing delivery risk. Full unsupported assignment is reckless on infrastructure. Declining removes a development opportunity that the engineer clearly wants. Sub-component assignment is a reasonable alternative if the scaffolding model isn't available.",
    framework: "Scaffolded Stretch: growth assignments with defined support structures.",
    principle: "The best way to help an engineer grow is to make them responsible with a safety net, not to protect them from responsibility.",
    traps: [
      "Decline — removes a growth opportunity for risk aversion that structured support can address",
      "Full unsupported assignment — real growth opportunity with real infrastructure risk",
      "Sub-component only — lower-risk but also lower-growth than the full scaffolded assignment"
    ]
  },
  {
    id: "EM-IC04",
    category: "IC Management",
    difficulty: 3,
    scenario: "Your strongest engineer wants to transition to management. You genuinely believe they'd be a mediocre manager — they're technically brilliant but struggle with ambiguity and people-dynamics. However, saying no might cause them to leave. How do you handle this conversation?",
    quote: "Honesty that costs you in the short term almost always pays more than comfort that costs you later.",
    options: [
      "Support the transition — they may surprise you, and denying it risks losing them.",
      "Have an honest conversation: share your genuine observations about where management would be hard for them, and explore what they're actually looking for (growth, compensation, influence) to see if there's an alternative path.",
      "Offer a 'trial' management role — let them run one project as a team lead and see how it goes.",
      "Promote them to a staff engineer role as an alternative — more responsibility without people management."
    ],
    correct: 1,
    consequences: {"teamMorale":8,"strategicPosition":7,"executionRisk":-5},
    explanation: "This requires an honest conversation, not a strategic maneuver. The best engineering managers are often not the technically strongest engineers — the skills diverge significantly. An honest conversation that names what you've observed, explains why management might not leverage their strengths, and then explores the underlying motivation (compensation, growth, influence, status?) often reveals that a staff engineer path, a technical lead role, or even a different kind of challenge addresses the real need. Blind support without the honest conversation puts your team at risk and may make the engineer unhappy in a role that doesn't fit. A trial role can be useful context but shouldn't substitute for the conversation.",
    framework: "Honest Career Counseling: understand the real motivation before recommending or blocking a path.",
    principle: "Honesty about career fit is a gift, not a punishment.",
    traps: [
      "Passive support to avoid losing them — makes them unhappy in a role they're not suited for, then you lose them anyway",
      "Trial role without honest conversation — they'll still fail; the trial just delays the conversation",
      "Staff engineer deflection without exploring motivation — might be right answer but shouldn't be proposed before understanding what they're actually seeking"
    ]
  },
  {
    id: "EM-IC05",
    category: "IC Management",
    difficulty: 2,
    scenario: "A senior engineer on your team has been performing well technically but is consistently negative in team discussions — dismissing new ideas, expressing cynicism about product direction, and making new team members feel unwelcome. They are not violating any policies. What's your approach?",
    quote: "Cultural influence is as real as technical output — and equally your responsibility to manage.",
    options: [
      "Document the behavior and let HR handle it when it crosses a policy line.",
      "Give them more technically complex work to channel their energy productively.",
      "Have a direct private conversation: name the specific behaviors, explain their impact, and set clear expectations with a follow-up timeline.",
      "Let the team handle it — peer pressure is often more effective than manager feedback."
    ],
    correct: 2,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":4},
    explanation: "Negative cultural behavior from a senior engineer has outsized team impact — new members model their behavior partly on senior signals, and consistent cynicism creates a psychologically unsafe environment. This is precisely the type of issue that EMs are responsible for addressing directly, not escalating to HR (before a policy violation) or delegating to peer dynamics. A direct private conversation — specific behaviors named with their observed impact, followed by clear behavioral expectations and a defined check-in — is the right intervention. HR documentation is premature without a direct conversation first.",
    framework: "Cultural Performance: behavioral impact is as real as technical impact and equally your responsibility.",
    principle: "A brilliant engineer who makes the team worse is not performing well.",
    traps: [
      "HR escalation without direct conversation — premature and signals you're avoiding the conversation",
      "More technical work — doesn't address the interpersonal behavior",
      "Peer pressure delegation — EMs who outsource difficult conversations to peer dynamics undermine their own authority"
    ]
  },
  {
    id: "EM-IC06",
    category: "IC Management",
    difficulty: 1,
    scenario: "An engineer comes to you in a 1:1 and says they feel underpaid compared to their market rate based on recent research. They haven't threatened to leave but are clearly uncomfortable. How do you respond?",
    quote: "Compensation conversations delayed by discomfort are compensation conversations that become exit interviews.",
    options: [
      "Tell them compensation is reviewed annually and you'll raise it at the next cycle.",
      "Give them an immediate reassurance that they're valued without committing to anything specific.",
      "Ask them to provide documentation of the market data and you'll share it with HR.",
      "Take it seriously: acknowledge the conversation, commit to investigating their data, and provide a timeline for when you'll come back with a substantive response."
    ],
    correct: 3,
    consequences: {"teamMorale":8,"executionRisk":-4,"growth":4},
    explanation: "A compensation concern raised in a 1:1 deserves immediate, substantive engagement — not deferrals, bureaucratic deflection, or empty reassurance. The right response is to take it seriously on the spot: acknowledge the concern, ask about their research, commit to looking into it internally, and give a specific timeline for a real answer. This signals that you're an advocate and that concerns raised with you go somewhere. Annual cycle deferrals and documentation-first deflection signal the opposite. Reassurance without substance is a trust-depleting non-answer.",
    framework: "Compensation Advocacy: EMs are the bridge between engineer concerns and comp decisions.",
    principle: "Engineers who raise compensation concerns are giving you the chance to keep them. Don't waste it.",
    traps: [
      "Annual cycle deferral — a real concern dismissed by process; often leads to departure before the next cycle",
      "Documentation request — bureaucratic deflection; you should do the investigation, not ask them to prove it",
      "Empty reassurance — the least effective response to a substantive concern"
    ]
  },
  {
    id: "EM-IC07",
    category: "IC Management",
    difficulty: 3,
    scenario: "You're doing performance reviews and realize you have two engineers who are both good performers — neither is clearly underperforming — but your calibration forces you to give one a lower rating that will affect their bonus. Both would feel the lower rating is unfair. How do you handle this?",
    quote: "Forced ranking produces forced conversations. Have them honestly.",
    options: [
      "Apply the calibration honestly but have a direct conversation with whoever receives the lower rating: explain the process, what it means, and what would move them to the higher bucket.",
      "Give both the same rating — refuse to differentiate between solid performers.",
      "Give the lower rating to the engineer who's less likely to leave — protect retention pragmatically.",
      "Escalate to your manager to challenge the forced ranking policy."
    ],
    correct: 0,
    consequences: {"teamMorale":7,"executionRisk":-5,"strategicPosition":5},
    explanation: "Forced ranking is uncomfortable but common — and the right response is honest execution with high-quality communication. The engineer who receives the lower rating deserves a direct explanation: 'Both of you are performing well — this is calibrated against a larger population and here's specifically what would move you to the higher tier.' This is honest, developmental, and treats the engineer as a capable adult rather than hiding the process from them. Protective rating allocation by departure risk is manipulative and backfires when the lower-rated engineer compares notes. Refusing to differentiate violates the calibration and creates unfairness to others in the system.",
    framework: "Calibrated Review Communication: apply the process honestly and explain it transparently.",
    principle: "The worst performance review conversation is the one you don't have.",
    traps: [
      "Same rating for both — violates calibration and creates fairness issues for others in the org",
      "Retention-risk allocation — manipulative and corrodes trust when discovered",
      "Policy escalation without executing — avoidance that leaves the engineer without a review"
    ]
  },
  {
    id: "EM-IC08",
    category: "IC Management",
    difficulty: 2,
    scenario: "A mid-level engineer has been asking for promotion to senior for two cycles. You believe they're close but not quite there. They're getting frustrated and hint that they're looking at external opportunities. How do you handle this?",
    quote: "The gap between 'almost senior' and 'definitively senior' deserves a map, not a mystery.",
    options: [
      "Promote them — losing them to a competitor who gives them the title is a worse outcome.",
      "Give a clear, specific, time-bound gap description: what would 'senior' look like for them, what they're missing, and a concrete timeline for reassessment.",
      "Tell them the decision is final for this cycle and encourage patience.",
      "Ask HR to review the criteria — maybe the bar is too high for your context."
    ],
    correct: 1,
    consequences: {"teamMorale":8,"growth":6,"executionRisk":-4},
    explanation: "Engineers who've been passed over twice for promotion need a concrete, specific, and actionable gap description — not vague encouragement or a delayed answer. The right approach is to be specific: 'Here are three behaviors that would demonstrate senior-level ownership: X, Y, Z. Here's what I've seen so far and where I still see gaps. If you hit these in the next quarter, I'll advocate for promotion at the next cycle.' This is honest, developmental, and gives them agency. Premature promotion to prevent departure typically doesn't work — they still leave when the role doesn't match the level. Patience encouragement without specifics is what caused two cycles of frustration.",
    framework: "Promotion Clarity: gap descriptions must be specific, behavioral, and time-bound.",
    principle: "Vague feedback is a career stall. Specific feedback is a career map.",
    traps: [
      "Premature promotion — protecting a title without the performance creates calibration problems and rarely retains",
      "Patience without specifics — the third cycle of the same answer is the resignation letter",
      "HR criteria review — avoidance mechanism; the specific feedback should come from you"
    ]
  },
  {
    id: "EM-IC09",
    category: "IC Management",
    difficulty: 1,
    scenario: "One of your engineers has been remote full-time for 2 years, has excellent output, but has never met anyone on the team in person. You're planning a team offsite and their attendance would require international travel. They haven't been asked to attend yet. What's your approach?",
    quote: "Remote-first doesn't mean relationship-optional.",
    options: [
      "Don't require it — remote employees accepted the job without in-person attendance expectations.",
      "Make attendance mandatory for all team members including remote — culture requires in-person investment.",
      "Extend a genuine invitation, cover the travel cost, and make the value of attendance clear — without framing it as mandatory.",
      "Arrange a separate local meet-up for the remote engineer instead of the full team offsite."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"executionRisk":-3,"growth":4},
    explanation: "Offsites have significant relationship value for remote team members — often more than for co-located ones. The right approach is a genuine, non-coercive invitation with full company-covered travel and an honest description of what the offsite is for and why their presence matters. This respects their autonomy (remote work agreements vary) while making the opportunity available. Mandatory attendance creates resentment for someone who may have personal constraints around international travel. A separate local meet-up is a second-best substitute that signals they're an afterthought, not a full team member.",
    framework: "Remote Team Inclusion: genuine invitation + company-covered cost = inclusive without coercive.",
    principle: "Remote engineers who feel excluded from team culture become remote engineers looking for a new team.",
    traps: [
      "Non-invitation — misses the relationship-building value for someone who may especially benefit",
      "Mandatory attendance — coercive for an employee with remote work expectations; creates resentment",
      "Separate local event — signals they're not fully integrated into the team"
    ]
  },
  {
    id: "EM-IC10",
    category: "IC Management",
    difficulty: 3,
    scenario: "You discover that one of your engineers has been job-hunting — they left browser tabs open on a work computer and a teammate mentioned seeing interview prep materials. They haven't told you anything. What do you do?",
    quote: "An engineer interviewing elsewhere is asking a question your team hasn't answered yet.",
    options: [
      "Do nothing — it's their right to interview and confronting them could accelerate departure.",
      "Offer a preemptive raise to make staying more attractive.",
      "Tell HR so they can update succession planning.",
      "Have a direct but non-accusatory 1:1: 'I want to make sure we're working together on your career goals — are there things you'd like that you're not currently getting here?'"
    ],
    correct: 3,
    consequences: {"teamMorale":7,"executionRisk":-5,"growth":5},
    explanation: "Job searching is not a confrontable offense, and 'I saw your tabs' is not a conversation opener. But the behavior is a clear signal that something is unmet — compensation, growth opportunity, team dynamics, role scope, or management. The right response is an indirect but sincere 1:1 conversation that opens the door to the real issue without accusation. A manager who creates psychological safety for this conversation often learns something actionable — and sometimes retains someone who would have left without it. HR notification without a direct conversation first is premature and escalates past your responsibility level. A preemptive raise without understanding the underlying driver may not address what's actually pushing them out.",
    framework: "Retention Conversation: the best job-hunting response is a genuine career conversation.",
    principle: "Engineers interviewing elsewhere are asking a question. Your job is to create space for them to ask it directly.",
    traps: [
      "Passive observation — passive management of an active departure signal",
      "HR notification as first step — premature; this is a conversation you own before it becomes a succession issue",
      "Preemptive raise without diagnosis — if the issue isn't compensation, a raise doesn't solve it"
    ]
  },
]
