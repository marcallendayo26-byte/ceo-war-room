export const CASES_CHRO7 = [
  {
    "id": "CHR-OD01",
    "category": "Organizational Design",
    "difficulty": 1,
    "scenario": "Your company is growing from 90 to 150 employees over 12 months. Currently, all 8 department heads report directly to the CEO. The CEO is stretched, decisions are delayed, and department heads are not getting enough strategic guidance. You need to design a management layer between the CEO and department level. What is your recommended approach?",
    "options": [
      "Hire 3-4 senior executive hires externally (COO, CTO, CRO) to create a C-suite that absorbs the reporting lines below them.",
      "Hire a single Chief of Staff to the CEO to manage coordination, communication, and decision-routing across all departments, reducing the CEO's administrative load without changing reporting lines.",
      "Create a formal executive committee of existing department heads that meets weekly, with the CEO delegating operational decisions to the committee rather than restructuring reporting lines.",
      "Promote the two most senior department heads to \"VP\" level with expanded spans of control, giving each oversight of 3-4 departments, while the CEO retains 2-3 direct reports."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -6,
      "growth": 7,
      "strategicPosition": 6
    },
    "explanation": "At the 90-150 scale, the most effective intervention is creating a lightweight executive layer using existing leadership rather than adding external hires or administrative workarounds. Promoting existing senior leaders preserves institutional knowledge, signals internal career development, and is faster to implement than external recruitment. Two VP-level leaders managing 3-4 departments each is a proven span of control at this company size. External C-suite hiring is expensive, slow (4-6 months to recruit and onboard), and risky — external hires at senior levels have a higher attrition rate in the first 12 months. An executive committee without changed reporting lines does not reduce the CEO's decision load — it just adds a meeting layer. A Chief of Staff manages coordination but does not provide the leadership depth that department heads need.",
    "framework": "Span of Control Scaling — at 8 direct reports, a CEO's effective decision capacity is exceeded. The intervention point for a mid-management layer is typically 6-8 direct reports. Internal promotions at this stage are faster, cheaper, and better retained than external hires.",
    "principle": "Growing companies should build the management layer they need from the talent they already have before importing leadership from outside.",
    "traps": [
      "External C-suite hires solve the org chart problem on paper but create a 6-month onboarding gap and introduce culture risk during a critical growth phase.",
      "Executive committees without clear authority do not reduce decision bottlenecks — they create consensus requirements that slow decisions further.",
      "A Chief of Staff solves the CEO's administrative burden but leaves department heads without the strategic leadership oversight they need to develop and execute independently."
    ]
  },
  {
    "id": "CHR-OD02",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "Your company has two business units: a software product (70% of revenue, high margin) and a professional services arm (30% of revenue, lower margin). Engineering resources are currently shared, creating constant prioritization conflict between the two units — product needs features, services needs delivery capacity. Do you separate them into distinct P&L units with dedicated resources, or maintain a shared model?",
    "options": [
      "Keep shared resources but hire a dedicated delivery engineer on the services side to reduce the services unit's dependency on shared product engineering, then reassess in 6 months.",
      "Maintain shared engineering with a formal resource allocation committee that meets fortnightly to adjudicate cross-unit priority conflicts using agreed criteria (revenue impact, strategic alignment, deadline urgency).",
      "Separate into two distinct P&L units with dedicated engineering resources for each — give each unit a general manager, a budget, and accountability for its own results.",
      "Dedicate 60% of engineering capacity to product and 40% to services on a fixed allocation model, with exceptions managed through the CEO's direct approval."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -6,
      "growth": 8,
      "strategicPosition": 8,
      "profitability": 5
    },
    "explanation": "When two business units with structurally different economics are competing for the same core resource, the conflict is structural and will not be resolved by scheduling a committee or adjusting ratios. Dedicated P&L units with separate engineering resources eliminate the structural conflict, create accountability clarity, allow each unit to hire for its specific needs (product engineers vs. services engineers have different profiles), and enable accurate unit-level profitability measurement. At 70/30 revenue split, the company has enough scale to fund both units without over-engineering. A resource allocation committee codifies the conflict as an ongoing management activity rather than eliminating it — the committee will consume leadership time without removing the root cause. Partial dedication (one delivery hire) reduces but does not eliminate the dependency. Fixed allocation percentages apply a blunt instrument to a dynamic demand pattern and will produce under- and over-supply in both directions.",
    "framework": "Shared Resource Conflict Resolution — when two units with different business models compete for the same resource, the conflict is structural. The resolution is structural (dedicated resources) not operational (better prioritization process).",
    "principle": "You cannot optimize a shared resource for two competing business models simultaneously. At some point, the coordination overhead of sharing exceeds the efficiency of dedicating.",
    "traps": [
      "Allocation committees solve the politics of priority decisions but do not solve the capacity problem — the engineering headcount is still finite and both units still compete for it.",
      "A single delivery hire is a short-term capacity patch that will be exhausted when services revenue grows, resetting the same conflict at higher stakes.",
      "Fixed percentage allocation prevents dynamic resource use and will produce systematic over-servicing of one unit while the other's needs go unmet whenever the ratio does not match actual demand."
    ]
  },
  {
    "id": "CHR-OD03",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "After a reorganization, two team leads share responsibility for customer onboarding: one owns technical setup, the other owns training and adoption. Since the reorg, NPS has dropped from 4.6 to 3.8. Both leads report their work is being blocked by the other. Client escalations have increased. The handoff between technical setup and training is where delays and misunderstandings occur. How do you fix the ownership design?",
    "options": [
      "Create a shared onboarding SLA with specific handoff criteria between the two leads — define what \"technical setup complete\" means exactly, document the handoff process, and hold both leads jointly accountable for the end-to-end NPS.",
      "Consolidate the full onboarding function under a single owner — appoint one team lead as the end-to-end onboarding owner responsible for both technical setup and training outcomes, with the other lead becoming an individual contributor or moving to a different function.",
      "Introduce a dedicated Customer Onboarding Manager role that sits above both team leads and coordinates the end-to-end client experience, removing the handoff friction by adding a coordination layer.",
      "Assign each client a dedicated onboarding lead who owns both the technical and training phases for their specific accounts, eliminating the specialization split."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -7,
      "customerTrust": 9,
      "growth": 5
    },
    "explanation": "The root problem is split ownership with no single point of accountability for the client experience. The most effective fix is consolidating ownership under a single end-to-end onboarding lead. This eliminates the handoff friction (which is where delays occur), creates unambiguous accountability for NPS, and gives the client a single point of contact. Detailed SOPs and shared SLAs (option A) can reduce friction but do not eliminate the coordination cost of split ownership — both leads must still align before acting, and disagreements will still escalate. Adding a coordination manager above both leads adds headcount and a bureaucratic layer to solve a problem that can be solved by simplifying the structure below. Per-client dedicated leads is an interesting model but requires more headcount and is inconsistent with a specialization-based hiring strategy.",
    "framework": "Ownership Clarity Principle — when handoffs are the source of quality failures, adding more process to the handoff rarely solves the problem. Eliminating the handoff by consolidating ownership is the higher-leverage structural fix.",
    "principle": "If two people share accountability for a customer outcome, the customer has no accountable owner. Single-threaded ownership is the default for client-facing functions.",
    "traps": [
      "Detailed handoff SOPs can improve the handoff experience but do not change the fact that two people with potentially competing priorities must coordinate before the client gets what they need.",
      "A coordination manager adds cost and a management layer to compensate for a structural design problem that could be fixed by changing the structure itself.",
      "Per-client dedicated leads scale linearly with customer volume and are costly to maintain, and do not address the specialization rationale that motivated the split in the first place."
    ]
  },
  {
    "id": "CHR-OD04",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "Your company has 4 offices: Manila, Cebu, Davao, and a recently opened Singapore hub. Each location has developed its own informal culture, onboarding approach, and HR processes. Some variation is healthy; some is creating inconsistency in employee experience and compliance risk. As CHRO, you need to design a \"One Company\" operating model without crushing local autonomy. How do you decide what to standardize and what to localize?",
    "options": [
      "Apply a two-layer model: standardize the infrastructure (payroll, compliance, benefits baseline, performance ratings calibration) and let offices own the experience layer (onboarding tone, team rituals, office culture, manager 1-on-1 formats).",
      "Standardize everything HR-related — one employee handbook, one onboarding process, one performance review format — and allow teams to adapt communication style and team rituals locally.",
      "Create an \"Office Culture Charter\" for each location that documents their local norms, and use an annual cross-office sync to identify and harmonize the biggest inconsistencies.",
      "Assign a Manila-based HR generalist as the single point of contact for all four offices, responsible for identifying and flagging inconsistencies as they surface and coordinating a quarterly standardization review across locations."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -5,
      "teamMorale": 8,
      "strategicPosition": 7
    },
    "explanation": "The two-layer model is the structurally correct approach because it applies standardization precisely where variation creates legal and operational risk (payroll, compliance, benefits, calibration) and preserves autonomy precisely where variation creates engagement value (office culture, team rituals, manager style). Standardizing everything creates unnecessary friction — onboarding tone in Cebu does not need to be identical to Singapore, and attempting to enforce it will create resentment without adding value. An Office Culture Charter documents variation but does not systematically identify or resolve high-risk inconsistencies. Waiting 12 months for Singapore to stabilize allows compliance inconsistencies to compound — the infrastructure layer should be standardized before variations become established practices that are harder to unwind.",
    "framework": "Standardize-Localize Framework — compliance and operational controls should be uniform across locations because inconsistency creates legal and equity risk. Culture and experience should be localized because uniformity destroys the belonging that local norms create.",
    "principle": "In a multi-office company, enforce the standard where inconsistency creates risk; release control where consistency destroys value.",
    "traps": [
      "Full standardization of the experience layer treats cultural variation as a problem to be solved rather than an asset to be managed — Manila teams and Singapore teams do not need identical onboarding ceremonies.",
      "Culture charters document the current state without a mechanism for resolving compliance-risk variations — they preserve the problem in writing.",
      "A single generalist managing compliance coordination across four offices and multiple markets will be overwhelmed by volume — inconsistencies that should be resolved by structural design get queued behind one person's bandwidth, which is the same fragility the current informal setup already has."
    ]
  },
  {
    "id": "CHR-OD05",
    "category": "Organizational Design",
    "difficulty": 3,
    "scenario": "The CEO wants to move to a \"flat organization\" model — eliminating most manager titles and replacing them with \"area leads\" who have no formal authority. The inspiration is a well-known tech company's organizational model. Your company currently has 90 employees with active performance management challenges, unclear career ladders, and accountability gaps. How do you advise the CEO?",
    "options": [
      "Endorse the move to a flat model but propose a 90-day change management plan: a company-wide communication campaign explaining the philosophy, manager coaching sessions on autonomous team facilitation, and a leadership reading list on self-management frameworks — presenting the cultural shift as an education-first rollout.",
      "Recommend piloting the flat model in one team (Engineering or Product) for 6 months before company-wide rollout, with specific metrics to evaluate impact on delivery speed, accountability, and employee experience.",
      "Advise against the flat model in its current context: the accountability and performance management challenges the company already has are structural symptoms that flat structures amplify, not resolve. Recommend solving the underlying accountability design before changing the authority structure.",
      "Accept the flat model as a cultural direction but propose retaining formal performance management authority with HR (rather than area leads) to preserve accountability mechanisms."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -8,
      "strategicPosition": 7,
      "teamMorale": 4
    },
    "explanation": "Flat organizational models work in specific conditions: mature teams with high trust, clear output metrics, strong self-management capability, and established accountability norms. A company with active performance management challenges and accountability gaps has the opposite of those preconditions. Removing formal management authority in that context does not solve the accountability problem — it removes the mechanism through which accountability is exercised while the underlying culture remains unchanged. The CHRO's obligation is to advise the CEO truthfully, even when the advice is unwelcome. The pilot approach is a reasonable compromise but risks a 6-month experiment that produces a false positive (one well-functioning team validates a model that will fail across the broader organization) or a false negative. Retaining HR as the sole authority for performance management is operationally unscalable at 90 employees and creates an HR bottleneck for decisions that should sit with operational leaders.",
    "framework": "Organizational Model Prerequisite Analysis — flat structures require high organizational maturity as a prerequisite. Removing formal authority in an environment with existing accountability failures accelerates those failures rather than transforming the culture.",
    "principle": "Flat organizational models are the output of high organizational trust and maturity, not the input. You cannot reorganize your way to accountability.",
    "traps": [
      "A change management campaign installs the vocabulary of self-management without the underlying accountability infrastructure — employees learn the language of the model before experiencing the conditions that make it work, which produces confusion rather than autonomy in a company that already has accountability gaps.",
      "A pilot in the strongest team produces data that is not representative of the company — you are measuring the model in conditions most likely to make it succeed.",
      "Centralizing performance authority in HR solves the authority vacuum with an unscalable workaround that positions HR as the bad cop and removes managers from their most important responsibility."
    ]
  },
  {
    "id": "CHR-OD06",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "Your company acquires a 25-person startup. The acquired team has a different title structure, a higher compensation philosophy for senior roles, and a very autonomous working style. Integration is required within 6 months. The acquired CEO becomes a VP in the new structure. Three acquired employees have already declined to accept your company's adjusted compensation bands. How do you lead the integration?",
    "options": [
      "Enforce the company's standard compensation bands for all acquired employees — exceptions create inequity and will become known, creating resentment among the existing team.",
      "Treat the three declines as early indicators of a broader cultural misalignment, and recommend the CEO hold a direct conversation with the new VP to establish clear compensation expectations for their team — placing accountability for comp acceptance on the VP as part of their integration commitment.",
      "Offer retention packages (cash bonuses paid over 18 months) to the 3 employees who declined rather than adjusting their base compensation, preserving band integrity while securing their tenure.",
      "Apply a structured integration approach: keep the acquired team on their existing comp for 12 months under a \"legacy band\" designation while harmonizing titles, roles, and reporting. Use the 12 months to review whether the broader comp philosophy needs updating, and grandfather adjustments for the 3 who declined."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 7,
      "executionRisk": -5,
      "strategicPosition": 6,
      "growth": 5
    },
    "explanation": "Acquisition integration rarely succeeds when comp harmonization is forced immediately. The 12-month legacy band approach buys time to do two things: retain the key talent the company just paid an acquisition premium to bring in, and evaluate whether the broader comp philosophy needs revision. Three early declines signal that the gap may be structural (the acquired team's comp market is genuinely different) rather than individual (three outliers who want too much). Forcing immediate band compliance risks losing exactly the talent the acquisition was meant to secure and creates legal and morale risk with the acquired team's new VP (their direct reports are being asked to take pay cuts). Retention packages are a reasonable tactical option but defer the structural question about comp bands. Accepting the departures of 3 decliners underestimates the signal — 3 out of 25 (12%) refusing in week one is not a coincidence.",
    "framework": "Acquisition Integration Sequencing — talent retention during the first 12 months post-acquisition is a higher priority than structural harmonization. The 12-month legacy approach preserves optionality: you can tighten bands later; you cannot un-lose key hires.",
    "principle": "Acquisition comp harmonization done too fast destroys the value you just acquired. The 12-month legacy band is not a concession — it is a retention investment.",
    "traps": [
      "Enforcing standard bands immediately ignores the reality that the acquisition price you paid already reflected the acquired team's market comp — refusing to honor that in employment is a breach of the implicit deal.",
      "Framing three compensation declines as a VP management problem rather than a structural comp gap misattributes the cause — if the acquired team's market rate is genuinely higher, the VP cannot resolve it through persuasion, and placing that accountability on them puts the VP in an untenable position with their own team.",
      "Treating three early declines as a culture signal rather than a comp signal misreads the data and rationalizes losing talent the company paid a premium to acquire."
    ]
  },
  {
    "id": "CHR-OD07",
    "category": "Organizational Design",
    "difficulty": 3,
    "scenario": "The VP Sales wants to create a \"Strategic Accounts\" team of 3 senior AEs dedicated to the company's 10 largest accounts. This requires pulling top performers from the general sales pipeline team, reducing its overall capacity. The VP argues this will drive expansion revenue in large accounts. You need to assess the structural and talent risks before the CEO approves the design. How do you advise?",
    "options": [
      "Support the proposal — concentrating top talent on the highest-revenue accounts is a rational allocation of scarce sales capacity.",
      "Reject the proposal — pulling top performers from the general sales pipeline creates a short-term revenue risk that outweighs the speculative expansion opportunity in 10 accounts.",
      "Support with a structured condition: before the team is formed, confirm that the general sales pipeline has enough capacity to maintain quota attainment without the 3 pulled AEs, define clear handoff criteria for which accounts qualify as \"Strategic,\" and set a 6-month review gate on expansion revenue contribution from the new team.",
      "Recommend hiring 3 new AEs with enterprise account management experience specifically for the strategic accounts team rather than pulling top performers from the existing pipeline team."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -6,
      "growth": 8,
      "strategicPosition": 7
    },
    "explanation": "Strategic account teams are a proven sales structure for maximizing expansion revenue in high-value accounts, but the design risk here is in the execution conditions, not the concept. The CHRO's role is to ensure that the structural conditions for success are in place before the team is formed. The three conditions matter: capacity modeling ensures the general sales team does not collapse to below-quota performance when the 3 AEs are pulled; clear account qualification criteria prevent \"strategic\" from becoming a subjective designation that creates sales team resentment; and a 6-month review creates accountability for the investment. Unconditional support ignores legitimate pipeline risk. Outright rejection overweights short-term capacity concern against a strategic growth model that the VP and CEO are likely to proceed with regardless. Hiring net-new AEs for strategic accounts is the cleanest structural option but is slower, more expensive, and the VP explicitly wants top performers, not new hires.",
    "framework": "Role Specialization Risk Assessment — when creating a specialized team requires pulling capacity from an existing function, the condition for approval is confirming that the source function remains above its performance floor. Specialization that breaks the base is not a win.",
    "principle": "Strategic account teams work when general pipeline capacity can absorb the pull. The CHRO's job is to verify that math before the CEO approves the structure.",
    "traps": [
      "Unconditional support for a structurally sound idea without modeling the downstream capacity impact is a common CHRO failure — the concept can be right while the execution conditions make it destructive.",
      "Rejecting the concept entirely overestimates short-term pipeline risk and underestimates the strategic value of concentrated attention on the company's highest-revenue accounts.",
      "New external hires for strategic accounts delays the formation by 3-4 months and introduces onboarding risk — the VP specifically wants proven performers who know the product and the customer base."
    ]
  },
  {
    "id": "CHR-OD08",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "Your HR function is currently 2 generalists supporting 90 employees. You have budget for 3 additional HR hires over the next 12 months. You need to decide how to structure the HR function for scale. The options are: specialist HRBPs embedded in Engineering, Product, and Sales; a centralized HR shared services model; or a mix of generalists plus one L&D or TA specialist. Which model do you choose?",
    "options": [
      "Three specialist HRBPs embedded in Engineering, Product, and Sales — deep business partnership at the team level will have the highest strategic impact.",
      "One centralized HR shared services hire (HR operations generalist) to absorb the compliance, records, and process load, plus one Talent Acquisition specialist (given the 90→150 headcount growth plan), with the third hire reserved for 12 months out when the need is clearer.",
      "Three generalist HRBP hires — this gives the broadest coverage and preserves flexibility across all teams without committing to deep specialization too early.",
      "One L&D specialist, one TA specialist, and one HR operations generalist — build the full specialist model immediately to future-proof the HR function."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -6,
      "growth": 7,
      "teamMorale": 6,
      "strategicPosition": 5
    },
    "explanation": "At 90-150 employees, the most pressing HR capacity needs are operational (the 2 generalists are already stretched, producing payroll errors and delayed onboardings) and talent acquisition (adding 60 people in 12 months is a major recruiting load). Prioritizing an HR ops generalist and a TA specialist addresses the two highest-urgency needs. The third hire deferred for 12 months creates the right sequencing — by then the company will have clearer visibility into whether L&D, a third HRBP, or another specialist is the bottleneck. Three embedded HRBPs is a mature model but premature at 90 employees — the embedded HRBP model works well at 200+ where each business unit has enough people to justify dedicated HR support. Three generalists solve coverage but not specialization depth. The full 3-specialist model assumes a maturity of HR function design that doesn't fit a company still running payroll on spreadsheets.",
    "framework": "HR Function Sequencing — build HR capacity in order of urgency: operational compliance first (to prevent errors), talent acquisition second (to fuel growth), L&D and specialist partnerships third (to develop what you have hired). The sequence should follow business risk.",
    "principle": "HR hiring should solve your most expensive active problems first. At 90→150 scale, the active problems are payroll errors and recruiting capacity — not L&D.",
    "traps": [
      "Three embedded HRBPs is a prestige model that looks good in org charts but requires a company maturity and HR infrastructure that a 90-person company has not yet built.",
      "Three generalists provide coverage but do not develop the institutional HR expertise the function needs as the company scales — generalist roles will hit the same knowledge ceilings the current 2 people are hitting.",
      "Future-proofing by building the full specialist model immediately assumes the business needs in 12 months are knowable today — deferring the third hire preserves optionality for actual emerging needs."
    ]
  },
  {
    "id": "CHR-OD09",
    "category": "Organizational Design",
    "difficulty": 2,
    "scenario": "You have 3 Customer Success Managers (CSMs) who each own a mix of onboarding, retention, and expansion work across their assigned accounts. At 150 accounts, the CSMs are stretched and quality is declining. You are evaluating whether to restructure into 3 specializations: onboarding specialists, retention specialists, and expansion specialists. How do you evaluate this restructuring?",
    "options": [
      "Proceed with the specialization restructure — division of labor will improve depth and quality in each function and is a standard CS model at this scale.",
      "Pilot the specialization with one CSM moving to a pure expansion role and evaluate the impact on expansion revenue over 90 days before restructuring the other two.",
      "Add a fourth CSM generalist before restructuring — the quality decline is a capacity problem, not a model problem, and adding headcount is faster and lower-risk than a reorg.",
      "Evaluate the restructuring against three criteria before deciding: (1) whether the account volume in each specialization justifies a dedicated FTE, (2) whether the current CSMs have the capability or desire to specialize, and (3) whether the handoff points between onboarding, retention, and expansion create more client experience risk than the current model."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -5,
      "customerTrust": 8,
      "growth": 6,
      "strategicPosition": 6
    },
    "explanation": "Specialization models have clear benefits at scale (depth, expertise, efficiency) and clear costs (client relationship fragmentation, handoff complexity, individual CSM career satisfaction). At 150 accounts across 3 CSMs, the question is not whether to specialize but whether the conditions for specialization are met. The three-criteria evaluation ensures the decision is grounded in actual numbers: if 150 accounts divide into 40 onboardings, 80 renewals, and 30 expansions, the volume may not justify 1.0 FTEs in the smaller buckets. Current CSM capability and preferences matter because forced specialization of someone hired as a generalist may trigger attrition. Handoff point evaluation is essential — the CHR-OD03 pattern shows that split ownership at handoff points is where client satisfaction erodes. Proceeding without this analysis risks creating the same handoff problem that destroyed onboarding NPS in earlier cases. A pure headcount add may solve capacity without addressing the structural mismatch. A 90-day expansion pilot tests one dimension of the model but does not evaluate onboarding or retention dynamics.",
    "framework": "Specialization Readiness Test — specialization is justified when (a) volume supports dedicated FTEs, (b) talent capability matches the specialized role, and (c) handoff design can maintain client experience continuity. All three must be evaluated.",
    "principle": "Specialization solves depth problems but creates handoff problems. Evaluate the trade before committing to the restructure.",
    "traps": [
      "Proceeding with specialization because \"it's the standard model at scale\" ignores the specific conditions of your account mix, headcount, and current CSM capability.",
      "A headcount add without model evaluation will produce the same quality decline in 6 months when the new hire is also stretched across all three functions.",
      "A 90-day expansion pilot generates data on one of three specialization tracks and makes it easier to confirm a decision that has not been fully evaluated."
    ]
  },
  {
    "id": "CHR-OD10",
    "category": "Organizational Design",
    "difficulty": 3,
    "scenario": "A proposal has been made to create a Chief of Staff to the CTO role. The stated scope includes owning internal engineering communication, coordinating with Talent Acquisition on engineering hires, and managing the quarterly roadmap planning process. You are skeptical that this role is well-designed. The CEO is supportive. How do you evaluate the role design and advise?",
    "options": [
      "Support the role — Chiefs of Staff are proven at scaling executive bandwidth and the CTO clearly has a coordination problem that this role can solve.",
      "Advise the CEO and CTO to test whether the proposed scope reflects genuine gaps or whether it reflects the CTO's preference to delegate tasks that are actually core to their job as a senior leader, then redesign the role scope to include only activities where a CoS adds leverage without creating ownership ambiguity.",
      "Recommend an alternative: hire a strong Engineering Program Manager (EPM) to own roadmap planning and cross-team coordination, which solves the stated problem without creating an ambiguous senior role.",
      "Decline to advise against the CTO's preferred organizational model — the CTO owns their function and the CHRO should offer implementation support rather than evaluation."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -7,
      "strategicPosition": 8,
      "growth": 5
    },
    "explanation": "The Chief of Staff role, when poorly designed, becomes a political buffer between the executive and their organization — information flows through the CoS, ownership becomes diffuse, and direct reports lose access to the executive they need decisions from. The CHRO's responsibility is to evaluate the role design against this risk. The evaluation should probe: Are these actually gaps, or is the CTO avoiding the work? If the CTO is not communicating with engineering, the solution is coaching the CTO — not hiring someone to communicate for them. If the CTO is not participating in TA, the solution is expectation-setting — not removing TA coordination from their accountability. If roadmap planning is genuinely beyond the CTO's capacity, a scoped EPM role with clear deliverables is more legible and less politically risky than a CoS with ambiguous authority. Supporting the role without evaluation cedes the CHRO's organizational design responsibility. Declining to advise is an abdication — CHRO is accountable for org design quality.",
    "framework": "Chief of Staff Role Evaluation — test whether the proposed scope reflects (a) genuine leverage gaps (tasks the executive cannot do well at current volume) or (b) delegated responsibilities that belong to the executive role itself. Only category (a) justifies a CoS.",
    "principle": "A Chief of Staff who owns work that belongs to the executive reduces organizational clarity. A Chief of Staff who extends the executive's reach on true leverage activities adds clarity. The design must distinguish between the two.",
    "traps": [
      "Supporting the role without design evaluation installs an ambiguous authority structure that will generate confusion for every team that intersects with the CTO's function.",
      "An EPM is a strong alternative for the operational coordination scope but may not address all elements — if there is genuine communication and strategic leverage work, the EPM design undershoots.",
      "Declining to evaluate because the CTO owns their function conflates functional ownership with organizational design quality — CHRO is accountable for role design across all functions, including engineering leadership."
    ]
  }
]
