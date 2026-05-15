export const CASES_TECH6 = [
  {
    "id": "TDI01",
    "category": "Delivery Innovation",
    "difficulty": 1,
    "scenario": "Your implementation team rebuilds data migration scripts from scratch for every new client. A review of the last five migrations shows that 80% of the logic — field mappings, data cleaning rules, validation checks — was identical across all five projects. Each rebuild takes 3 weeks of developer time and introduces unique bugs that delay go-live.",
    "options": [
      "Build a reusable data migration framework with parameterised templates for common field mappings, validation logic, and cleaning rules — leaving only client-specific overrides to be written per project.",
      "Continue building scripts from scratch but assign a senior developer to each migration to reduce error rates.",
      "Purchase a third-party ETL platform with visual mapping tools and mandate its use for all future migrations.",
      "Document the migration approach used in the last project as a reference guide for developers to follow on future projects."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -15,
      "profitability": 12,
      "teamMorale": 8,
      "customerTrust": 6
    },
    "explanation": "When 80% of migration logic is repeated across every project, the correct investment is to codify that 80% into a reusable, tested framework. Parameterised templates mean the next migration starts with a working base, not a blank file. Execution risk drops because the common logic has already been validated; developers only need to write and test the client-specific 20%. Assigning a senior developer to each from-scratch build adds cost without removing the structural problem. A third-party ETL tool addresses tooling but not the real asset — the accumulated knowledge of what your clients' data looks like. A reference document helps, but a running framework helps more.",
    "framework": "Reusable Asset Investment — when the same logic appears in more than three successive projects, it has earned the right to become a shared asset. The threshold for framework investment is repetition, not perfection.",
    "principle": "If you rebuilt it the same way five times, you were not solving a client problem. You were paying five times for the same solution.",
    "traps": [
      "Adding a senior developer to each from-scratch build treats the symptom (errors) rather than the cause (redundant rebuild) — and costs more per project, not less.",
      "A third-party ETL platform introduces vendor dependency and a learning curve without capturing InnoFac's specific knowledge of automotive dealership data structures.",
      "A reference document is passive — developers will interpret it differently, reproduce the same inconsistencies, and the next bug will still need to be fixed from scratch."
    ]
  },
  {
    "id": "TDI02",
    "category": "Delivery Innovation",
    "difficulty": 2,
    "scenario": "UAT consistently runs 2–3 weeks over plan across your implementations. Root cause analysis shows that dealership staff test incorrectly — they re-test already-passed scenarios, miss critical end-to-end flows, and log UI preference issues as defects. By the time critical flows are properly tested, the planned UAT window has expired and go-live must be pushed.",
    "options": [
      "Extend the UAT window in all future project plans to 5 weeks to absorb the overrun structurally.",
      "Assign a dedicated QA consultant to sit with dealership staff during UAT and correct their testing approach in real time.",
      "Design a structured UAT programme: pre-built test scripts for every critical flow, a business sign-off checklist, a defect triage rubric to separate genuine defects from preference items, and a UAT readiness gate before the window opens.",
      "Replace dealership-led UAT with internal QA sign-off — dealership staff are not qualified to run structured testing."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -18,
      "customerTrust": 12,
      "profitability": 8,
      "teamMorale": 6
    },
    "explanation": "The UAT problem is not a staffing problem or a time problem — it is a structure problem. Dealership staff are not professional testers, so they default to exploratory clicking rather than systematic validation. Pre-built test scripts for every critical flow remove the ambiguity: the tester follows the script, marks pass or fail, and the sign-off checklist confirms coverage. A defect triage rubric stops the overload of preference-based issues. A UAT readiness gate ensures the client enters the window prepared. Extending the window treats the symptom. A dedicated QA shadow adds cost without changing the underlying process. Replacing client-led UAT removes the client's accountability for their own sign-off.",
    "framework": "Structured UAT Design — user acceptance testing fails when it is unstructured. Pre-scripted test cases, explicit coverage tracking, and a defect classification rubric are the minimum conditions for a predictable UAT window.",
    "principle": "A UAT window that runs over is not a scheduling problem. It is a preparation problem.",
    "traps": [
      "A 5-week UAT window still overruns if the root cause — unstructured testing — is not fixed. You have built in slack, not a solution.",
      "A dedicated QA shadow adds consultant cost to every implementation and creates dependency on that individual rather than a repeatable client-led process.",
      "Removing client sign-off from UAT eliminates the accountability moment — the client can claim post-go-live that they never validated the system."
    ]
  },
  {
    "id": "TDI03",
    "category": "Delivery Innovation",
    "difficulty": 1,
    "scenario": "Branch readiness for go-live is assessed informally by the project manager based on walkthrough conversations and gut feel. In three of your last eight go-lives, critical readiness gaps — undertrained staff, incomplete master data, missing hardware — were discovered on go-live day. Each incident caused a delayed or aborted go-live.",
    "options": [
      "Build a Branch Go-Live Readiness Checklist: a structured, scored assessment covering staff training completion, master data sign-off, hardware and connectivity verification, and key-user confidence — with a minimum score required to proceed.",
      "Brief project managers more thoroughly on what to look for during their informal walkthrough visits.",
      "Add a final readiness meeting one day before go-live where the client confirms they are ready in writing.",
      "Hire a dedicated go-live coordinator role to own readiness assessment across all implementations."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -20,
      "customerTrust": 10,
      "teamMorale": 8,
      "profitability": 6
    },
    "explanation": "Three failed go-lives from the same root cause — informal readiness assessment — is a systemic failure, not bad luck. A structured, scored checklist with an explicit pass threshold converts a subjective judgment call into an objective gate. Every readiness dimension is visible, every gap is documented, and the go/no-go decision is no longer dependent on one person's confidence. Better PM briefing improves the informal process but does not change its fundamental subjectivity. A client confirmation letter is only as good as the client's own visibility into their readiness. A dedicated coordinator role adds headcount for a problem that a well-designed checklist can solve.",
    "framework": "Go-Live Gate Design — critical decision points in delivery need explicit, documented criteria. A go-live gate based on a scored checklist is more reliable than any individual's judgment, regardless of their experience.",
    "principle": "When informal assessment has failed three times, the answer is not a better assessor. It is a better assessment.",
    "traps": [
      "Better briefing for project managers preserves the subjective judgment problem — a more thorough gut-feel check is still a gut-feel check.",
      "A client sign-off letter shifts accountability but does not improve the quality of the assessment — clients will sign off readiness they cannot accurately self-assess.",
      "A dedicated coordinator role is an expensive structural response to a process gap that a well-designed checklist addresses at a fraction of the cost."
    ]
  },
  {
    "id": "TDI04",
    "category": "Delivery Innovation",
    "difficulty": 2,
    "scenario": "Cutover weekends are consistently chaotic. There is no master task list, communication between site teams and the central team breaks down, tasks are discovered in real time, and dependencies are missed. Post-cutover analysis of three recent go-lives shows the same categories of issues: sequence errors, missed dependency checks, and communication gaps between teams.",
    "options": [
      "Designate a senior consultant as the cutover lead for each go-live, giving them authority to sequence tasks and coordinate all site and central teams in real time during the cutover weekend.",
      "Design a Cutover Runbook: a sequenced, time-stamped task list with owner assignments, dependency markers, go/no-go checkpoints, and a real-time status dashboard for the cutover command team.",
      "Add a dedicated cutover project manager to own coordination across all teams during go-live weekends.",
      "Move to a phased cutover model where individual modules go live sequentially over several weeks to reduce weekend complexity."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -18,
      "customerTrust": 12,
      "teamMorale": 10,
      "profitability": 6
    },
    "explanation": "A chaotic cutover is a planning artefact problem, not a people problem. When the same failure categories repeat across three go-lives, the intelligence exists to design them out. A Cutover Runbook makes the entire weekend visible before it starts: every task is sequenced, every dependency is explicit, every owner is named, and every checkpoint is predefined. A status dashboard means the command team sees real-time progress rather than chasing updates by phone. Post-mortems improve hindsight but do not redesign the process. A dedicated cutover PM adds a coordinator but not a better coordination mechanism. Phased cutover may reduce weekend risk but extends the parallel-running period and creates integration complexity.",
    "framework": "Cutover Engineering — go-live cutover is a high-stakes, time-compressed operation. It must be engineered like a deployment procedure, not planned like a meeting agenda. Every task, sequence, dependency, and checkpoint should be designed before the cutover begins.",
    "principle": "A cutover weekend discovers nothing that a good runbook could not have anticipated. Chaos is a design deficit.",
    "traps": [
      "A senior cutover lead improves real-time coordination but the sequencing still lives in their head — the same dependency errors recur when that individual is unavailable, and the coordination quality regresses to chaos the moment the lead changes.",
      "A dedicated cutover PM is an expensive coordination layer that still depends on the PM's ability to manage an undocumented, improvised sequence.",
      "Phased cutover trades weekend chaos for weeks of parallel-running complexity and increases the window in which two systems must remain in sync."
    ]
  },
  {
    "id": "TDI05",
    "category": "Delivery Innovation",
    "difficulty": 3,
    "scenario": "Hypercare monitoring after go-live is entirely reactive. Your team waits for clients to report problems. Analysis of the last six go-lives shows that 70% of P1 issues were detectable in system logs 4–12 hours before the client noticed and called — at which point the issue had already disrupted operations and escalated to senior stakeholders.",
    "options": [
      "Introduce a daily check-in call with each client during the hypercare window so issues are surfaced earlier.",
      "Increase the hypercare team headcount so there are always staff available to respond quickly when clients call.",
      "Deploy a third-party application performance monitoring (APM) tool and have the team review its dashboards at the start of each shift.",
      "Build a proactive hypercare monitoring framework: automated alerting on key DMS health signals — failed transactions, sync errors, workflow stalls, API timeouts — with a triage SLA that initiates investigation before the client reports the issue."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -20,
      "customerTrust": 18,
      "strategicPosition": 12,
      "teamMorale": 8
    },
    "explanation": "If 70% of P1 issues are visible in logs hours before client impact, the innovation is to monitor those signals and act before the client calls. Automated alerting on DMS-specific health signals — failed transactions, sync errors, workflow stalls — converts a reactive support model into a proactive one. The team investigates and resolves before the issue escalates to senior stakeholders. More headcount on a reactive model means faster response to client reports, but it does not prevent the escalation. An APM tool reviewed at shift start is still reactive within the shift. A daily check-in call surfaces issues the client already knows about — not the ones brewing in the logs.",
    "framework": "Proactive Hypercare Architecture — the hypercare window is the highest-risk period post-go-live. Monitoring should be designed to detect anomalies in system behaviour before they produce client-visible failures, not after.",
    "principle": "If the system tells you a problem is coming and you wait for the client to call, you have chosen to be reactive.",
    "traps": [
      "More hypercare headcount on a reactive model improves response time but does not change the escalation pattern — the client still calls first, and the damage to trust is already done.",
      "An APM tool reviewed at shift handover is only as timely as the review interval — issues that develop mid-shift are invisible until the next check.",
      "Daily check-in calls surface client-perceived issues, not system-level early warnings — they do not give you the 4–12 hour detection window the logs already provide."
    ]
  },
  {
    "id": "TDI06",
    "category": "Delivery Innovation",
    "difficulty": 1,
    "scenario": "Client training is delivered by whichever implementation team member is available at the time. Materials vary by consultant — some use slides, some use live demos, some skip modules they consider less important. Post-go-live support tickets show that the same functional areas generate 60% of all user errors, and those areas correspond directly to modules where training depth was inconsistent.",
    "options": [
      "Require all consultants to submit their training materials to a shared folder so the team can see what each person uses.",
      "Build a standardised training programme: role-based training modules with a fixed script, guided exercises, a post-training competency check, and a trainer certification process for all consultants who deliver it.",
      "Contract a specialist learning and development firm to redesign all client training materials.",
      "Record video walkthroughs of every DMS module and send them to clients as self-service training resources before go-live."
    ],
    "correct": 1,
    "consequences": {
      "customerTrust": 14,
      "executionRisk": -12,
      "teamMorale": 6,
      "profitability": 8
    },
    "explanation": "Inconsistent training delivery is a programme design problem, not a talent problem. When the same consultant delivers different content depending on their own judgment, the training outcome is variable by definition. A standardised programme with role-based modules, fixed scripts, guided exercises, and a competency check removes the variable. A trainer certification process ensures every consultant delivers to the same standard. A shared folder of existing materials does not standardise delivery — it just makes inconsistency visible. Outsourcing to an L&D firm adds cost and removes the DMS-specific depth that only your consultants have. Pre-recorded videos have no feedback loop and cannot replace the interactive practice that builds procedural confidence.",
    "framework": "Training Programme Standardisation — delivery quality is determined by the programme design, not the individual trainer. Role-based modules, consistent scripts, and a competency gate are the minimum structure for repeatable training outcomes.",
    "principle": "If adoption is poor after training, look first at what was delivered — not just who delivered it.",
    "traps": [
      "A shared folder of existing materials makes inconsistency visible but does not resolve it — consultants will still select from the pool according to their own judgment.",
      "An external L&D firm can produce polished materials but lacks the DMS functional knowledge and automotive dealership context that makes training land with users.",
      "Self-service videos require motivated, self-directed learners — dealership staff preparing for go-live are neither. Videos do not replace supervised practice in the system."
    ]
  },
  {
    "id": "TDI07",
    "category": "Delivery Innovation",
    "difficulty": 2,
    "scenario": "DMS configuration is performed from scratch at every dealership implementation. Analysis of completed projects shows that 70% of configuration settings — chart of accounts structure, document numbering sequences, approval workflow logic, tax codes — are identical across all clients of the same dealership type. Each configuration phase takes 4 weeks. Errors introduced during repeated manual configuration cause rework in 60% of projects.",
    "options": [
      "Build a Configuration Template Library: pre-configured, tested baseline configurations for each dealership type — single-brand dealer, multi-brand dealer, used-car specialist — that are loaded at project start, with only the client-specific 30% configured from scratch.",
      "Develop a detailed configuration guide document so that consultants configure settings in a consistent order.",
      "Build a configuration validation script that runs after manual configuration is complete and flags common errors.",
      "Hire a configuration specialist whose sole role is to own DMS configuration across all implementations."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -18,
      "profitability": 14,
      "teamMorale": 10,
      "customerTrust": 8
    },
    "explanation": "When 70% of configuration is identical by client type, the correct investment is to pre-build and test that 70% once, then load it as a baseline at project start. A Configuration Template Library reduces the configuration phase from 4 weeks to the time needed for the remaining 30%, eliminates the rework caused by repeated manual errors, and makes the configuration asset testable and version-controlled. A configuration guide improves order and completeness but still requires manual execution of the full 70% every time. A validation script catches errors after the fact rather than preventing them. A configuration specialist centralises the skill but does not systemise the work — the specialist becomes a bottleneck and a single point of failure.",
    "framework": "Configuration Asset Management — repeated manual work that produces identical outputs is a candidate for productisation. Pre-built, tested templates are more reliable than well-documented procedures because they are executed, not followed.",
    "principle": "If you are configuring the same 70% of settings on every project, you are not implementing. You are retyping.",
    "traps": [
      "A configuration guide improves manual execution but does not eliminate the risk of human error on repetitive tasks — consultants will still misconfigure fields they configure correctly 90% of the time.",
      "A post-configuration validation script detects errors after 4 weeks of work rather than preventing them. The rework cost remains; you have only shortened the detection cycle.",
      "A configuration specialist becomes a critical dependency and a single point of failure — and does not produce a reusable asset that persists beyond that individual."
    ]
  },
  {
    "id": "TDI08",
    "category": "Delivery Innovation",
    "difficulty": 3,
    "scenario": "Your implementation methodology exists primarily in the heads of four senior consultants. Two clients have formally complained about inconsistent experiences — different project managers gave them different answers on scope, configuration decisions, and escalation handling for the same scenarios. Three junior consultants joined in the last six months and are making ad-hoc decisions that senior staff have to correct after the fact.",
    "options": [
      "Pair every junior consultant with a senior consultant throughout each project until they are fully trained.",
      "Build a structured case library documenting the 50 most common implementation decisions with senior consultants' recommended responses, and require all consultants to review it before each new project.",
      "Build an Implementation Playbook: documented decision frameworks for the 20 most common implementation scenarios, role-based responsibility matrices, escalation protocols, configuration decision trees, and onboarding modules that junior consultants complete before going to site.",
      "Promote one of the four senior consultants to a Head of Delivery role responsible for reviewing all project decisions."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -20,
      "customerTrust": 15,
      "teamMorale": 12,
      "strategicPosition": 14
    },
    "explanation": "Tribal knowledge that lives in four people's heads is a delivery risk that compounds with every new hire. An Implementation Playbook externalises that knowledge into a reusable, auditable asset. Decision frameworks for the 20 most common scenarios mean junior consultants have documented guidance before they make the call — not a correction after. Role matrices and escalation protocols reduce the inconsistency that clients experienced. Pairing junior and senior staff is effective on-the-job learning but does not produce a reusable asset and makes every junior consultant's quality dependent on their specific senior pairing. Monthly knowledge-sharing sessions create awareness but not behavioural guidance at the moment of decision. A Head of Delivery as a review layer creates a bottleneck and still depends on one person's judgment.",
    "framework": "Methodology Codification — when delivery consistency depends on individual experience rather than documented process, the methodology is not yet complete. A playbook is the product of your methodology becoming an asset.",
    "principle": "Expertise that exists only in experienced heads cannot be quality-controlled, scaled, or taught reliably. Write it down.",
    "traps": [
      "Senior-junior pairing produces effective individual development but makes quality dependent on the chemistry and availability of that pairing — it does not reduce the underlying tribal-knowledge risk.",
      "A case library improves pre-project awareness but does not guide decisions in the moment — junior consultants will still make ad-hoc calls when a situation feels different from any case they reviewed, and inconsistency across projects persists.",
      "A Head of Delivery review layer adds a sign-off step but does not equip junior consultants to make good decisions independently — it just catches them after the fact, more formally."
    ]
  },
  {
    "id": "TDI09",
    "category": "Delivery Innovation",
    "difficulty": 2,
    "scenario": "Every implementation begins with a 2-week discovery phase. Review of six completed projects shows that the same 80% of discovery questions were asked across all of them — business processes, dealership size, existing systems, reporting requirements, integration needs. However, each project manager uses different question formats, captures outputs differently, and produces discovery reports in inconsistent structures that downstream architects and configurators find difficult to use.",
    "options": [
      "Hire a dedicated discovery consultant who owns all discovery engagements across projects.",
      "Require project managers to complete a short discovery training course before leading engagements.",
      "Replace the 2-week discovery phase with a fixed 3-day discovery sprint using a single standardised questionnaire sent to the client in advance.",
      "Standardise discovery with a Discovery Accelerator: a pre-built question bank organised by domain, a structured output template that maps directly to configuration and architecture inputs, and a facilitation guide that junior consultants can run independently."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -15,
      "profitability": 10,
      "teamMorale": 8,
      "customerTrust": 8
    },
    "explanation": "The discovery problem has two layers: the input (inconsistent questions) and the output (inconsistent formats that confuse downstream teams). A Discovery Accelerator solves both simultaneously. A pre-built question bank captures institutional knowledge about what needs to be learned; a structured output template ensures what is learned is immediately useful to architects and configurators. A facilitation guide enables junior consultants to run it independently, reducing senior consultant dependency. Discovery training improves awareness but does not produce a reusable question bank or output format. A fixed questionnaire sent in advance removes the facilitated exploration that surfaces non-obvious requirements. A dedicated discovery consultant centralises the skill without producing a transferable asset.",
    "framework": "Discovery Productisation — when a delivery phase covers the same ground on every project, it should be designed as a product: defined inputs, repeatable process, structured outputs that feed directly into the next phase.",
    "principle": "Discovery that produces inconsistent outputs is not a discovery problem. It is a requirements-handoff problem in disguise.",
    "traps": [
      "A training course improves how project managers approach discovery but does not produce the structured artefact — the question bank and output template — that makes the process consistent and reusable.",
      "A fixed pre-sent questionnaire assumes clients can self-identify requirements accurately in writing, which they rarely can for complex DMS implementations — it trades coverage for speed.",
      "A dedicated discovery consultant creates a bottleneck on the critical path of every implementation and still does not produce a reusable asset when that person leaves."
    ]
  },
  {
    "id": "TDI10",
    "category": "Delivery Innovation",
    "difficulty": 3,
    "scenario": "The handoff from implementation to AMS (Application Managed Services) support is consistently poor. Support teams receive no structured information about client-specific configurations, open risks, customisations, or known issues. Post-go-live, support staff spend their first 2–3 weeks learning the client's setup through trial and error — during which P2 tickets are resolved slowly and clients escalate. Two clients have threatened to cancel their AMS contracts within the first 90 days.",
    "options": [
      "Require implementation project managers to join AMS support calls for the first 30 days after go-live to provide context on demand.",
      "Design a structured Client Handover Pack: a mandatory implementation close-out artefact covering client-specific configurations, all customisations with rationale, open risks with mitigations, known issues with workarounds, key contacts, and a tailored first-90-days support guide — reviewed and signed off by both the implementation PM and the AMS lead before handover.",
      "Build a shared knowledge base platform where implementation teams document what they learn and support teams can search it.",
      "Assign a dedicated transition manager for the first 60 days post-go-live to bridge the gap between implementation and support."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -20,
      "customerTrust": 18,
      "teamMorale": 10,
      "strategicPosition": 14,
      "growth": 6
    },
    "explanation": "The handover failure is a structured artefact problem. Support teams are slow because they are missing specific, structured information — not because there is a people gap. A Client Handover Pack with mandatory fields, dual sign-off from both the implementation PM and AMS lead, and an explicit first-90-days guide converts the handover from an informal conversation to a documented transition. The sign-off requirement means neither team can treat the handover as complete until the information exists. Keeping the PM on support calls for 30 days treats the symptom and creates a disincentive to invest in better documentation. A shared knowledge base is useful but passive — it requires teams to contribute and search rather than ensuring the critical information exists at the handover moment. A transition manager adds cost without improving the structural gap.",
    "framework": "Handover Engineering — the quality of an implementation-to-support handover is determined by the artefact, not the conversation. A mandatory close-out document with structured sections and dual sign-off is the minimum standard for a clean transition.",
    "principle": "A support team that learns the client through trial and error during hypercare is paying for a handover that never happened.",
    "traps": [
      "PM availability on support calls for 30 days creates a soft dependency that delays true handover, signals to clients that support cannot operate independently, and dis-incentivises investment in a proper handover document.",
      "A shared knowledge base relies on proactive contribution and discoverability — it does not guarantee the specific client information exists in a findable, structured form at the moment support needs it.",
      "A transition manager adds 60 days of bridge headcount but does not produce a reusable handover framework that improves every future transition."
    ]
  }
]
