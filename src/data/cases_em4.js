export const CASES_EM4 = [
  {
    id: "EM-CF01",
    category: "Cross-functional",
    difficulty: 2,
    scenario: "Product is pressuring your team to ship a feature with known security vulnerabilities, arguing the attack surface is small and the business case is strong. Your security engineer strongly disagrees. How do you handle this?",
    quote: "Known security vulnerabilities are not product trade-offs. They are liabilities.",
    options: [
      "Support your security engineer: the feature does not ship with known security vulnerabilities, and work with product to scope a secure version or adjust the timeline.",
      "Defer to product — the business case and small attack surface make it a reasonable risk.",
      "Escalate to your CTO immediately — this is above your level to decide.",
      "Compromise: ship behind a feature flag to limit exposure while the vulnerability is addressed."
    ],
    correct: 0,
    consequences: {"executionRisk":-10,"customerTrust":8,"strategicPosition":6},
    explanation: "Known security vulnerabilities are non-negotiable from a technical leadership standpoint. Your security engineer's assessment is your technical ground truth, and your job is to back them clearly. The right outcome is either a secure version of the feature or a timeline that allows the vulnerability to be resolved before shipping. A feature flag limits surface area but doesn't fix the vulnerability — it's still there. CTO escalation may be needed if product won't accept the answer, but you should state your position clearly first. 'Small attack surface' is not a security argument — it's an argument for why the breach probability is low, not why the vulnerability is acceptable.",
    framework: "Security Advocacy: EMs own the security of what ships from their team.",
    principle: "A known security vulnerability is not a business decision. It's a technical line.",
    traps: [
      "Product deference on security — attack surface size doesn't make vulnerabilities acceptable to ship",
      "Immediate CTO escalation — state your position first; escalate when product won't accept the technical reality",
      "Feature flag compromise — reduces exposure but the vulnerability still exists and the technical problem is deferred"
    ]
  },
  {
    id: "EM-CF02",
    category: "Cross-functional",
    difficulty: 3,
    scenario: "Design hands off mockups to your team that are technically infeasible in the agreed timeline — they require animations and interactions that your frontend engineers estimate at 3x the time design assumed. This pattern has happened 3 times in the last quarter. How do you address it systemically?",
    quote: "Design-engineering gaps that repeat are a process problem, not a talent problem.",
    options: [
      "Have engineers simplify the implementation — find a way to deliver the spirit of the design within the timeline.",
      "Address the pattern with design leadership: propose a formal design-engineering review early in the design process so feasibility is validated before handoff.",
      "Push back each time at handoff — quality conversation is better than process overhead.",
      "Ask design to simplify their designs to match engineering's capabilities."
    ],
    correct: 1,
    consequences: {"executionRisk":-7,"teamMorale":6,"strategicPosition":6},
    explanation: "Repeated feasibility mismatches at handoff indicate a structural process gap — design doesn't have engineering input early enough in their process. The right systemic fix is to establish a formal early-design engineering review: engineers engage with designs at the wireframe or prototype stage, not at final mockup handoff, so feasibility is validated before design investment is made. This saves both teams time and prevents the tension that builds from repeated late surprises. Ad-hoc pushback at each handoff doesn't build the process. Asking design to simplify to engineering capability frames the relationship as adversarial rather than collaborative.",
    framework: "Design-Engineering Process: feasibility review early in design prevents costly late handoff rework.",
    principle: "A problem that happens three times in a quarter is a process problem. Solve the process.",
    traps: [
      "Engineer workarounds each time — symptom management without root cause resolution",
      "Individual handoff pushback — creates ongoing friction without structural improvement",
      "Design simplification framing — adversarial; the ask should be for earlier collaboration, not capability reduction"
    ]
  },
  {
    id: "EM-CF03",
    category: "Cross-functional",
    difficulty: 2,
    scenario: "Your team's work regularly depends on data from the analytics team, who frequently delivers it late or in inconsistent formats. The analytics EM says 'we have our own priorities.' How do you handle this cross-team dependency?",
    quote: "Cross-team dependencies without explicit agreements will always lose to each team's internal priorities.",
    options: [
      "Design your data ingestion layer to handle inconsistent formats gracefully — make your team's pipeline format-agnostic so the analytics team's inconsistency stops blocking you.",
      "Build your own data pipeline to remove the dependency entirely.",
      "Work with the analytics EM to formalize the dependency: agree on data formats, delivery timelines, and an escalation path when the SLA is missed.",
      "Escalate to both your managers to resolve the priority conflict."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"teamMorale":5,"strategicPosition":6},
    explanation: "Informal cross-team dependencies will always compete with internal priorities and lose. The right move is to formalize the dependency into an explicit agreement: what format is the data delivered in, by when, what's the escalation path if it misses? This turns an informal expectation into a documented service-level agreement. Both teams benefit from clarity. Building your own pipeline eliminates the dependency but duplicates infrastructure and creates a maintenance burden — worth evaluating if the relationship is genuinely unworkable. Escalation before attempting a formal agreement at the EM level skips the right conversation.",
    framework: "Cross-Team Dependency Management: informal expectations → formal service agreements.",
    principle: "Dependencies without SLAs produce delivery failures without accountability.",
    traps: [
      "Format-agnostic pipeline — solves the format inconsistency but not the late delivery problem; your team still can't plan against a dependency that arrives unpredictably",
      "Own pipeline build — expensive solution to a relationship problem that should be solved first",
      "Manager escalation before EM agreement attempt — skips the right level and creates unnecessary conflict"
    ]
  },
  {
    id: "EM-CF04",
    category: "Cross-functional",
    difficulty: 3,
    scenario: "Your team is being asked to build a feature that's technically straightforward but has no clear product owner who can make decisions. Multiple product managers each own a piece. Every meeting ends with conflicting requirements and no decisions. Two weeks have been wasted. What's your move?",
    quote: "Engineering starts delivering when someone is accountable for what gets built.",
    options: [
      "Make the product decisions yourself to unblock the team — engineering needs to move.",
      "Run a requirements workshop with all PMs and document all requirements before building.",
      "Build the simplest technically feasible version and let the product team refine it after.",
      "Stop the feature work and escalate: 'We need a single decision-maker for this feature before engineering can proceed.'"
    ],
    correct: 3,
    consequences: {"executionRisk":-8,"teamMorale":6,"strategicPosition":5},
    explanation: "Two weeks of no decisions due to ownership ambiguity is a product organization failure that engineering cannot solve by building. The right move is to stop the work and escalate clearly: 'We need one person accountable for this feature's requirements before we can build it.' This is not obstructionist — it's accurate. Building the simplest version creates a different product decision problem downstream. A requirements workshop adds more meeting time to an already-stalled situation without addressing the root cause (no single decision-maker). Making product decisions yourself creates scope creep, misaligned ownership, and technical debt when priorities change.",
    framework: "Decision Ownership: engineering cannot ship without a product decision-maker.",
    principle: "A feature with no owner is a feature with no future.",
    traps: [
      "Engineering making product calls — creates technical work disconnected from accountable ownership",
      "Simplest version build — defers the ownership problem to post-launch when it's harder to fix",
      "Requirements workshop — adds process to a problem that's fundamentally about accountability, not information"
    ]
  },
  {
    id: "EM-CF05",
    category: "Cross-functional",
    difficulty: 2,
    scenario: "The sales team has promised a customer a feature that engineering hasn't built yet and isn't on the roadmap. The customer is a significant ACV. Your VP asks you to 'make it happen.' How do you respond?",
    quote: "A sales promise made without engineering input is a check the engineering team has to cash.",
    options: [
      "Scope the actual work, assess the impact on current commitments, and bring the trade-off clearly to your VP: 'Here's what this takes, here's what it moves or delays.'",
      "Commit to the customer request — the ACV justifies the priority change.",
      "Decline — sales shouldn't promise features engineering hasn't scoped.",
      "Build the feature in parallel without disrupting the current roadmap by having engineers work overtime."
    ],
    correct: 0,
    consequences: {"executionRisk":-7,"customerTrust":5,"strategicPosition":6},
    explanation: "The right response to 'make it happen' is 'here's what it takes and here's what it costs.' Scope the work honestly, assess the impact on committed roadmap items, and bring your VP a real trade-off: 'This takes X weeks, and it pushes Y and Z. Is that the right call?' That gives leadership a real decision to make rather than an engineering team that either heroically delivers or silently cuts corners. Blind commitment ignores actual capacity. Declining without offering a path forward is unhelpful. Overtime is the worst answer — it burns out your team and creates untested, under-reviewed code.",
    framework: "Sales-Engineering Alignment: scope first, then present the trade-off honestly.",
    principle: "You can usually deliver what sales promised. You just need to show what it costs.",
    traps: [
      "Blind VP commitment — removes decision-making visibility from leadership",
      "Flat decline — unhelpful without context on what a 'yes' would require",
      "Overtime build — depletes team health for a promise made without their input"
    ]
  },
  {
    id: "EM-CF06",
    category: "Cross-functional",
    difficulty: 1,
    scenario: "You've been asked to provide a technical architecture review of a proposal coming from a peer team. The proposal has significant flaws. The lead architect on that team is senior to you and has strong opinions. How do you deliver your review?",
    quote: "Technical feedback delivered with specificity and respect changes systems. Delivered with hesitation or condescension, it changes nothing.",
    options: [
      "Soften your feedback significantly — the architect's seniority means they probably know something you don't.",
      "Deliver your technical concerns clearly and specifically, framed as questions and observations rather than verdicts, with data where possible.",
      "Submit a written review documenting the flaws in detail, with supporting references, so the architect can engage with the concerns on their own timeline without the pressure of a live conversation.",
      "Submit your technical concerns to your manager first and let them decide how to deliver them."
    ],
    correct: 1,
    consequences: {"strategicPosition":8,"teamMorale":5,"executionRisk":-6},
    explanation: "Technical reviews are only valuable if they're honest. Framing concerns as questions ('I'm wondering if X could cause Y under high load — have you considered that?') rather than verdicts respects the architect's expertise while ensuring your observation is heard. Specific, data-grounded feedback is harder to dismiss than vague concerns. Softening to avoid conflict produces a rubber-stamp review that serves no one. Declining removes you from a process you were specifically asked to participate in. Manager escalation before attempting direct feedback is avoidance.",
    framework: "Peer Technical Review: specific + question-framed + data-supported = effective feedback.",
    principle: "Technical reviews that don't say what's wrong aren't reviews — they're applause.",
    traps: [
      "Softened feedback — seniority doesn't make flaws less real; the system doesn't care about org charts",
      "Written-only review to avoid live pressure — gives the architect full control to dismiss or deprioritize concerns without dialogue; significant flaws need a conversation, not a document they can ignore",
      "Manager escalation first — passive avoidance of your own professional responsibility"
    ]
  },
  {
    id: "EM-CF07",
    category: "Cross-functional",
    difficulty: 3,
    scenario: "Your company is undergoing a platform migration that requires significant coordination across 5 engineering teams. No one has been formally designated as the migration lead. Each team is working on their component independently, and integration points are uncoordinated. The migration is 8 weeks away. What do you do?",
    quote: "Migrations without a coordinator produce integration surprises at the worst possible time.",
    options: [
      "Focus on your team's component and trust the other teams to coordinate similarly.",
      "Volunteer to coordinate the migration yourself across all 5 teams.",
      "Raise the coordination gap with your manager and propose that a migration lead be formally designated.",
      "Set up a weekly cross-team sync and let coordination emerge organically."
    ],
    correct: 2,
    consequences: {"executionRisk":-9,"strategicPosition":7,"teamMorale":5},
    explanation: "A 5-team migration 8 weeks away with no coordinator is a structural risk that needs to be surfaced immediately at the management level. The right first move is to raise the gap and propose a formal solution — someone with authority, time, and cross-team visibility needs to own the coordination. Volunteering to do it yourself is a viable offer but shouldn't be offered before the management structure question is answered (you may lack the cross-team authority to be effective). Organic coordination through a weekly sync rarely produces the integration alignment that a complex migration requires.",
    framework: "Migration Leadership: cross-team migrations require designated authority, not organic coordination.",
    principle: "Hope is not a migration strategy. A coordinator is.",
    traps: [
      "Self-volunteering as first move — offer may be right, but the structural question must be raised first",
      "Focus on own component only — each team making the same choice guarantees integration surprises",
      "Weekly sync for organic coordination — insufficient for a complex multi-team migration with integration dependencies"
    ]
  },
  {
    id: "EM-CF08",
    category: "Cross-functional",
    difficulty: 2,
    scenario: "Your team has been asked to support a customer's custom integration request that will take significant engineering time. The request came through sales and has no formal product approval. How do you handle this?",
    quote: "Custom integration requests that bypass product are technical commitments made without engineering accountability.",
    options: [
      "Build the integration — a customer request backed by sales is sufficient authorization.",
      "Build a quick version now and formalize the roadmap process later.",
      "Decline — custom integrations should go through the product roadmap process.",
      "Escalate to product and your manager: 'This requires engineering time and isn't on the roadmap. We need a formal prioritization decision before we start.'"
    ],
    correct: 3,
    consequences: {"executionRisk":-7,"strategicPosition":5,"customerTrust":5},
    explanation: "Custom integration requests that bypass product create two problems: they consume engineering capacity that isn't tracked or accounted for, and they create maintenance commitments without formal ownership. The right move is to escalate for formal prioritization: 'This is valid customer work, but it requires X engineer-weeks and isn't currently prioritized. Product and leadership need to make a formal trade-off decision.' This is not bureaucratic obstruction — it's ensuring engineering time is allocated with visibility. Flat decline sounds rigid; building quickly and formalizing later is the same as bypassing the process with extra steps.",
    framework: "Engineering Prioritization Gate: custom work requires formal prioritization regardless of who requested it.",
    principle: "Engineering commitments made without product visibility create maintenance debt without ownership.",
    traps: [
      "Sales-backed work as sufficient authorization — bypasses the process that protects engineering capacity",
      "Flat decline — the customer need may be legitimate; the answer is prioritization, not refusal",
      "Quick build now, process later — creates the exact informal commitment the process is designed to prevent"
    ]
  },
  {
    id: "EM-CF09",
    category: "Cross-functional",
    difficulty: 1,
    scenario: "You've just learned that a key feature on your roadmap has been cut by product without consulting your team. Two engineers had already spent a week on early technical design. The decision was made above your level. How do you respond?",
    quote: "Retroactive process is cheaper than reactive resentment.",
    options: [
      "Have a conversation with product about the process: 'I accept this decision. For future deprioritizations, can we sync before the announcement so I can manage my team's time better?'",
      "Express your frustration directly to product — this decision cost the team a week of work.",
      "Document the engineering work already completed and ensure it's preserved and referenced if the feature is reconsidered — then move on.",
      "Escalate to your manager to push back on the product decision."
    ],
    correct: 0,
    consequences: {"teamMorale":7,"strategicPosition":6,"executionRisk":-4},
    explanation: "The product decision may be entirely correct — priorities change. But the process caused unnecessary engineering waste (one week of design work) and team frustration. The right response is to accept the outcome while advocating for a better process: an early heads-up before public deprioritization so you can redirect engineering effort before it's spent. This is professional, specific, and actionable — and it's the kind of cross-functional collaboration improvement that builds better working relationships. Expressing frustration without proposing a fix doesn't improve the process. Escalation to push back on a legitimate product decision is misplaced.",
    framework: "Process Improvement Feedback: accept the decision, improve the process.",
    principle: "You can't change a past decision. You can change the process that produced it.",
    traps: [
      "Frustration expression without proposal — venting, not improving",
      "Documenting completed work and moving on — preserves the artifacts but leaves the process gap in place; the same wasted-week scenario will repeat on the next deprioritization",
      "Escalation to reverse decision — misdirected energy; the issue is the process, not the outcome"
    ]
  },
  {
    id: "EM-CF10",
    category: "Cross-functional",
    difficulty: 3,
    scenario: "You're a new EM who's discovered that your team has been treated as an internal 'IT team' by the business — they receive requests from other departments without prioritization, often disrupting planned work. Your predecessor accepted this dynamic. What do you change and how?",
    quote: "Engineering teams treated as request-takers become reactive. Engineering teams with intake processes become partners.",
    options: [
      "Map the last quarter's ad-hoc requests by department and volume, then present leadership with a cost analysis of the disruption before proposing any process change.",
      "Implement a formal intake process: requests go through a triage system, are evaluated against product roadmap, and are prioritized with transparent timelines and trade-offs.",
      "Set a monthly quota for ad-hoc requests per department — cap the disruption at a manageable level without eliminating flexibility.",
      "Negotiate directly with each requesting department to reduce volume organically."
    ],
    correct: 1,
    consequences: {"executionRisk":-8,"teamMorale":8,"strategicPosition":7},
    explanation: "An informal request-acceptance culture is one of the most common causes of engineering team burnout and delivery failures. The right structural fix is a formal intake process: a visible request queue, evaluation criteria aligned with product roadmap, explicit timelines and trade-off visibility. This isn't about being unresponsive — it's about being reliably responsive with appropriate prioritization. Communication matters: announce the new process as a service improvement, not a refusal. Flat refusal creates immediate stakeholder conflict without offering an alternative. Individual departmental negotiations are ad hoc and unsustainable at scale.",
    framework: "Engineering Intake: formalize request management before informality manages you.",
    principle: "Engineers who say yes to everything eventually deliver nothing on time.",
    traps: [
      "Cost analysis before proposing a fix — produces a strong business case but extends the disruption while you gather data; you can present the analysis alongside the proposed fix, not as a prerequisite",
      "Per-department quota system — arbitrary caps create gaming behavior and require constant renegotiation as request patterns change; the intake process achieves the same protection with less overhead",
      "Individual negotiations — unsustainable and recreates informal dependencies at lower scale"
    ]
  },
  {
    id: "EM-TC01",
    category: "Team Culture",
    difficulty: 2,
    scenario: "Two of your engineers are in constant technical conflict — they argue in code reviews, design discussions, and occasionally in public Slack channels. Both are technically strong. The arguments are sometimes productive but often create a tense atmosphere. How do you address this?",
    quote: "Persistent interpersonal conflict is a team tax that everyone pays except the two people having it.",
    options: [
      "In your next sprint planning, structure work so the two engineers are reviewing different codebases, reducing the surface area for direct conflict while the team dynamic settles.",
      "Mediate a joint session between them — direct dialogue is more effective than parallel coaching.",
      "Have separate conversations with each engineer: name the pattern and its impact, and ask each to identify one behavior change they can commit to.",
      "Separate their work areas — assign them to components with minimal overlap."
    ],
    correct: 2,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":5},
    explanation: "Persistent conflict between engineers creates psychological safety issues for the rest of the team — especially junior members who are watching how the team models disagreement. Separate conversations allow each person to hear the impact honestly without the defensiveness triggered by a joint setting (where each person feels they need to justify their behavior). Ask each person to identify a behavior they can change, not to 'fix' the other person. Joint sessions work better once each person has reflected individually. Separation by component addresses proximity but not the dynamic — they'll still interact.",
    framework: "Interpersonal Conflict Coaching: separate conversations before joint sessions.",
    principle: "Two-person conflicts are almost always two separate coaching opportunities.",
    traps: [
      "Codebase separation as first move — reduces review overlap in one sprint but doesn't address the dynamic; they still share design discussions and Slack, and the conflict reasserts at the first intersection",
      "Immediate joint mediation — defensiveness in a joint session often escalates rather than resolves",
      "Component separation — removes the surface area but doesn't resolve the dynamic"
    ]
  },
  {
    id: "EM-TC02",
    category: "Team Culture",
    difficulty: 3,
    scenario: "You inherited a team with low psychological safety — engineers don't speak up in meetings, concerns are shared only in private channels or after the fact, and questions are rare in design reviews. How do you diagnose the root cause before trying to fix it?",
    quote: "Low psychological safety is a symptom. Its cause is almost always a specific behavior someone witnessed that never got corrected.",
    options: [
      "Run a team survey to understand how safe people feel.",
      "Have individual 1:1s with each engineer: 'What would make you feel safer sharing ideas in team meetings?'",
      "Set an explicit team norm in your first all-hands: frame disagreement as expected, demonstrate it yourself, and invite the team to test it — signaling that the environment has changed under new leadership.",
      "Observe team interactions yourself across several meetings and note specifically when silence, deflection, or avoidance occur and what triggered them."
    ],
    correct: 3,
    consequences: {"teamMorale":8,"executionRisk":-5,"growth":5},
    explanation: "Psychological safety surveys and 1:1s provide valuable perspectives, but the best diagnostic for low safety is direct behavioral observation. Watch team interactions across multiple meetings and notice: when does silence happen — after a specific person speaks, after ideas are challenged, after a senior engineer dismisses a suggestion? The pattern of silence reveals the specific trigger. Low psychological safety is almost always caused by specific uncorrected behaviors (dismissal, interruption, seniority-based override) rather than a generalized culture problem. Observation gives you behavioral data; surveys give you perceptions; declarations do nothing.",
    framework: "Safety Diagnosis: observe the specific triggers for silence before prescribing the remedy.",
    principle: "You can't fix psychological safety without knowing what broke it.",
    traps: [
      "Survey-only approach — gives perception data but not behavioral specifics",
      "1:1 questions — useful after you have hypotheses, but limited before you've observed the dynamic",
      "Norm declaration in all-hands — signals intent but doesn't identify the specific behavior causing silence; engineers who've been burned before won't change until they see the specific trigger handled differently"
    ]
  },
  {
    id: "EM-TC03",
    category: "Team Culture",
    difficulty: 2,
    scenario: "Your team has been distributed across 3 time zones for 8 months. Collaboration has degraded — async communication is slow, people feel disconnected, and there's a growing split between the in-timezone cluster and the remote engineers. How do you address first?",
    quote: "Distributed teams don't degrade because of tools. They degrade because of norms.",
    options: [
      "Establish explicit distributed work norms: response time expectations, meeting-free async hours, documentation standards, and how decisions are communicated across time zones.",
      "Improve collaboration tools — better async tooling resolves most distributed team friction.",
      "Shift to more synchronous work — more video calls resolve the connection gap.",
      "Invest in an annual in-person offsite to rebuild relationships."
    ],
    correct: 0,
    consequences: {"teamMorale":8,"executionRisk":-6,"growth":5},
    explanation: "Distributed team dysfunction is almost always a norms problem, not a tools problem. When people don't know what response time is expected, how decisions get made asynchronously, or when to escalate vs. wait — the ambiguity degrades collaboration. Establishing explicit distributed norms: what does async-first mean, when should you block vs. move forward, how are decisions documented, what's the meeting protocol for cross-timezone inclusion — creates the shared expectations that allow the team to function effectively. More synchronous calls add coordination overhead without fixing the norms gap. Offsite connection is valuable but doesn't sustain distributed collaboration between events.",
    framework: "Distributed Team Norms: explicit expectations replace the implicit ones that worked in-office.",
    principle: "Remote teams don't need more meetings. They need clearer norms.",
    traps: [
      "Tools improvement — helpful but rarely the root cause; better async tools with bad norms still produce bad async communication",
      "More synchronous work — adds meeting overhead and penalizes the time zones with early/late calls",
      "Annual offsite only — valuable but insufficient as the primary intervention for ongoing collaboration problems"
    ]
  },
  {
    id: "EM-TC04",
    category: "Team Culture",
    difficulty: 1,
    scenario: "You're new to the team and in your first week you notice your team's meetings are unproductive — no agendas, long discussions without decisions, and engineers leave unclear on next steps. How do you introduce structure without coming across as bureaucratic?",
    quote: "Structure in meetings isn't bureaucracy — it's respect for everyone's time.",
    options: [
      "Shadow the most frequent meeting types for two weeks and document the recurring patterns where discussions stall, then present the team with a targeted proposal based on what you observed.",
      "Introduce one change at a time: start with agendas 24 hours before meetings, then add a decision log, then a time check at halfway. Frame each as serving the team's time, not as process overhead.",
      "Overhaul the meeting structure completely in your first month — new leadership is a good time to reset norms.",
      "Ask the team how they'd like to improve meetings and implement their suggestions."
    ],
    correct: 1,
    consequences: {"teamMorale":8,"executionRisk":-5,"growth":4},
    explanation: "Meeting structure improvements are most sustainable when introduced incrementally and framed as time-serving rather than process-adding. Start with agendas — the single highest-leverage change — and let that settle before adding more. Each new element should be introduced with a clear rationale: 'We're doing this because I want everyone to leave knowing the next step.' Team input is valuable but should follow your first intervention — if you ask before doing anything, you get the same norms described back to you. A complete overhaul in month one creates resistance and doesn't have the relationship capital to stick.",
    framework: "Meeting Culture Change: incremental + rationale-driven > complete overhaul.",
    principle: "The fastest way to improve meeting culture is to make meetings noticeably better, not to announce that you will.",
    traps: [
      "Two-week observation before proposing changes — the team needs to see early leadership; observing for two weeks before acting signals passivity and lets the dysfunction continue unnecessarily",
      "Full overhaul in first month — insufficient relationship capital to drive changes; resistance is high",
      "Team input before action — gets you the current norms reflected back; lead first, refine with feedback"
    ]
  },
  {
    id: "EM-TC05",
    category: "Team Culture",
    difficulty: 3,
    scenario: "A senior engineer on your team is the unofficial 'culture keeper' — they've been there 4 years, know everything, and are widely liked. However, their technical opinions now resist change and they've been discouraging junior engineers from proposing new approaches. How do you address this?",
    quote: "Culture keepers become culture blockers when their influence stops enabling and starts preventing.",
    options: [
      "Reframe their role explicitly: give them ownership of a technical evolution initiative — something that channels their institutional knowledge toward enabling the team rather than anchoring it.",
      "Give newer engineers opportunities to lead design discussions to shift the influence balance.",
      "Have a direct conversation: acknowledge their value and their specific positive contributions, then name the specific behaviors that are limiting the team's ability to evolve.",
      "Move them to an individual contributor track where their influence is less team-wide."
    ],
    correct: 2,
    consequences: {"teamMorale":8,"strategicPosition":7,"growth":6},
    explanation: "Culture influence from a long-tenured engineer is a real asset — until it calcifies. The right approach is direct and specific: name the specific behaviors (discouraging junior proposals, resisting technical evolution) and their impact on the team's growth, while genuinely acknowledging their value. Senior engineers who've crossed into culture-blocking territory often don't realize it and respond well to honest, respectful feedback. Letting it go accepts permanent limitations on junior growth. Giving juniors more airtime is useful complementarily but doesn't address the blocking behavior directly. Role-track changes are a last resort, not a first intervention.",
    framework: "Senior Influence Coaching: direct + specific + respectful before structural intervention.",
    principle: "Long tenure earns trust. It doesn't earn the right to limit others.",
    traps: [
      "Role reframing before direct feedback — giving them an evolution initiative sounds constructive, but it sidesteps the specific discouraging behavior; they'll own the initiative while still shutting down junior proposals in daily work",
      "Airtime redistribution only — doesn't address the discouragement behavior",
      "Role-track change as first step — disproportionate response before a direct coaching conversation"
    ]
  },
  {
    id: "EM-TC06",
    category: "Team Culture",
    difficulty: 2,
    scenario: "You want to introduce a team retrospective practice — your team has never done them. You propose a bi-weekly retro. One senior engineer dismisses it as 'too Agile' and 'a waste of time.' Other engineers seem uncertain. How do you proceed?",
    quote: "Retrospectives that are done poorly are a waste of time. Done well, they're the highest-leverage team practice.",
    options: [
      "Drop the idea — the senior engineer's resistance suggests the team isn't ready.",
      "Run one retro as a pilot without the dissenting engineer and see how it goes.",
      "Make it mandatory — retrospectives are a standard engineering practice.",
      "Acknowledge the concern, describe specifically what a good retro looks like and what it's for, and propose a 4-session trial with the agreement to evaluate together afterward."
    ],
    correct: 3,
    consequences: {"teamMorale":7,"executionRisk":-5,"growth":6},
    explanation: "Retro resistance from a senior engineer is a common blocker that can be addressed by making the practice tangible and time-bounded. The right approach: acknowledge the 'waste of time' concern is valid for badly-run retros, describe what a well-run retro looks like (tight timeboxes, specific outcomes, follow-through on action items), and propose a trial with a defined evaluation point. This treats the concern as reasonable and puts the evidence in the future rather than arguing about the principle. Mandatory retros without buy-in produce performative compliance. Running it without the dissenter excludes a key voice from the team process.",
    framework: "Practice Adoption: address the concern, describe the vision, time-box the trial.",
    principle: "New team practices need demonstration, not mandate.",
    traps: [
      "Dropping based on one voice — one senior engineer's resistance shouldn't veto a high-value practice",
      "Excluding dissenter from trial — they're the most important person to convince",
      "Mandatory enforcement — compliance without conviction produces garbage retros"
    ]
  },
  {
    id: "EM-TC07",
    category: "Team Culture",
    difficulty: 1,
    scenario: "A junior engineer shared a creative technical proposal in a design review and it was quickly dismissed by two senior engineers without real engagement. The junior engineer went quiet for the rest of the meeting. You saw the proposal had genuine merit. What do you do?",
    quote: "How senior engineers treat junior proposals in public determines whether junior engineers make proposals in the future.",
    options: [
      "Re-engage the proposal in the meeting: 'I'd like to go back to [name]'s idea — I think there's something worth exploring here. Can we give it a few minutes?'",
      "Redirect the discussion in the meeting by asking the two senior engineers a specific technical question about the proposal, drawing them into examining it more carefully without overtly reversing their dismissal.",
      "Follow up with the junior engineer privately after the meeting to validate their idea.",
      "Address the senior engineers privately after the meeting about their dismissive behavior."
    ],
    correct: 0,
    consequences: {"teamMorale":9,"executionRisk":-4,"growth":7},
    explanation: "In-meeting intervention is the highest-leverage response because it demonstrates to the whole team — including the junior engineer — that their ideas are worth real engagement. Saying 'I want to go back to that proposal' immediately signals that dismissal isn't the final word. It also sends a clear message to the senior engineers without making them feel publicly called out. Private follow-up with the junior is also appropriate as a second step, but doesn't repair the public dynamic. Private coaching of the seniors is necessary over time but doesn't help the junior engineer in this moment.",
    framework: "Psychological Safety in Action: re-engage dismissed ideas in the moment.",
    principle: "Psychological safety is built in real time, not after the meeting.",
    traps: [
      "Redirecting through a question to the seniors — adds a step between dismissal and re-engagement; the junior engineer has already gone quiet and the room has moved on; a direct re-engagement is faster and clearer",
      "Private-only follow-up — helps the individual but doesn't repair the public dynamic",
      "Private senior coaching only — right eventually, but the immediate opportunity is the public re-engagement"
    ]
  },
  {
    id: "EM-TC08",
    category: "Team Culture",
    difficulty: 3,
    scenario: "Your team is growing from 5 to 12 engineers over the next 6 months. You're proud of your current team culture but you know team growth can dilute or destroy it. What do you do proactively to scale the culture?",
    quote: "Culture doesn't scale by itself — it scales through deliberate onboarding and explicit norms.",
    options: [
      "Involve current team members in hiring by having them assess culture fit during interviews — prioritize candidates who already reflect the team's values so the culture reinforces itself as headcount grows.",
      "Document your team's explicit norms and expectations, integrate them into onboarding, and involve current team members as culture carriers through formal onboarding pairing.",
      "Only hire people who match the current culture — preserve by selection.",
      "Hold culture-focused all-hands quarterly to reinforce values as the team grows."
    ],
    correct: 1,
    consequences: {"teamMorale":8,"strategicPosition":7,"growth":6},
    explanation: "Culture scales through explicit transmission, not osmosis. The right approach is to make your culture norms explicit and written — what does the team value, how are decisions made, how are conflicts handled, what does good code review look like? Then integrate this into a structured onboarding and pair new hires with senior team members who embody the culture. Hiring purely for culture match creates a homogeneous team that stops evolving. Quarterly culture all-hands are useful supplements but don't substitute for systematic onboarding. Trusting natural perpetuation works until you hit ~8 people and the informal transmission breaks.",
    framework: "Culture Scaling: explicit norms + structured onboarding + culture pairing.",
    principle: "Culture that isn't written down isn't culture — it's memory, and it doesn't survive growth.",
    traps: [
      "Culture-fit hiring as primary mechanism — interview assessment of culture fit is highly subjective; using it as the primary scaling mechanism amplifies existing biases and produces the same homogeneity risk as selection-only hiring, without the explicit norm transmission that actually works",
      "Selection-only culture preservation — creates homogeneity that limits team diversity and adaptability",
      "Periodic all-hands only — too infrequent and too indirect to build culture in new hires"
    ]
  },
  {
    id: "EM-TC09",
    category: "Team Culture",
    difficulty: 2,
    scenario: "After a difficult quarter with missed deliveries and a major incident, your team's morale is visibly low. Engineers are going through the motions, 1:1s are shorter than usual, and energy in standups has dropped. How do you lead through this?",
    quote: "Teams that are demoralized need to be heard before they can be motivated.",
    options: [
      "Set ambitious goals for next quarter to give the team something to work toward.",
      "Organize a team social event to boost morale.",
      "Have honest 1:1s: ask each person how they're doing, what's weighing on them, and what they need from you — before proposing any action.",
      "Give a team-wide acknowledgment speech recognizing the difficult quarter and the hard work."
    ],
    correct: 2,
    consequences: {"teamMorale":9,"executionRisk":-5,"growth":5},
    explanation: "Demoralized teams need to be heard first — not motivated, not entertained, not recognized. Every individual has a slightly different version of what made the quarter hard. Individual 1:1s create the safety for honest answers that group settings can't. Only after you understand what each person is carrying can you respond appropriately: some need acknowledgment, some need clarity about what's changing, some need to understand that the misses weren't their fault. Ambitious goals without processing what happened creates 'forced march' energy. Social events feel tone-deaf when real work problems are unaddressed. Team speeches work only when the team feels individually heard.",
    framework: "Post-Difficulty Leadership: listen individually before acting collectively.",
    principle: "Motivation that doesn't start with listening is motivation that doesn't land.",
    traps: [
      "Ambitious next-quarter goals — projects positivity that doesn't match the team's emotional reality",
      "Social event — avoidance of the real conversation; teams feel it",
      "Team speech — useful after individual conversations; hollow before them"
    ]
  },
  {
    id: "EM-TC10",
    category: "Team Culture",
    difficulty: 3,
    scenario: "You discover that two of your engineers have been making off-color jokes in a private Slack channel that includes only part of the team. Some engineers who saw it are uncomfortable. No one has formally complained. What do you do?",
    quote: "Unreported discomfort is not the same as acceptable behavior.",
    options: [
      "Check in individually with the engineers who appeared uncomfortable to understand the impact before deciding how to respond.",
      "Send a general team message about appropriate communication standards without naming anyone.",
      "Escalate to HR immediately — this is a potential policy violation.",
      "Have a direct private conversation with the two engineers: name the specific behavior and its impact on the team environment, without waiting for a formal complaint."
    ],
    correct: 3,
    consequences: {"teamMorale":8,"executionRisk":-5,"strategicPosition":6},
    explanation: "Waiting for a formal complaint before addressing harmful behavior is passive management. Unreported discomfort is still discomfort — some people never complain directly, especially about peer behavior. A private conversation with the two engineers — specifically naming what was seen and why it's a problem — is the right first intervention. It's not a HR escalation, it's direct management. Immediate HR escalation before a direct conversation is disproportionate for first-time off-color behavior. A general team message without direct accountability allows the behavior to continue under cover of the ambiguity.",
    framework: "Culture Accountability: direct private conversation first, without waiting for formal complaints.",
    principle: "Your team's culture is partly defined by the behavior you see and say nothing about.",
    traps: [
      "Individual check-ins before acting — gathering more input sounds thorough, but you already have enough to act; asking uncomfortable engineers to describe the impact before you've addressed the behavior extends the time they're in a team environment where it's still occurring",
      "Immediate HR escalation — disproportionate before a direct conversation has been attempted",
      "General message without accountability — well-intentioned but allows the specific behavior to continue"
    ]
  },
]
