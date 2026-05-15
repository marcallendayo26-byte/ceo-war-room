export const CASES_TECH2 = [
  {
    id: "PD11",
    category: "Project Delivery",
    difficulty: 2,
    scenario: "You are 10 weeks into a fixed-price project. The client has requested 18 additional features since kickoff, all of which your team absorbed as \"clarifications.\" You are now 3 weeks behind and significantly over budget. The client says everything requested was always part of the original scope.",
    quote: "\"We signed a fixed-price contract. Everything we ask for is included.\"",
    options: [
      "Present a documented change log of every addition since kickoff with estimated hours. Initiate a formal scope vs contract review.",
      "Escalate to your CEO and ask them to renegotiate the contract.",
      "Accept it. Fixed-price means you absorb all risk and deliver everything.",
      "Stop work on all additions. Deliver only what was in the original signed scope document."
    ],
    correct: 0,
    consequences: {"cash":5,"growth":5,"profitability":15,"customerTrust":10,"teamMorale":10,"executionRisk":-20,"strategicPosition":10},
    explanation: "Fixed-price contracts cover the defined scope — nothing more. The key is documentation. If you have 18 logged additions with hours, you have evidence. A scope-vs-contract review walks the client through the original SOW and each addition. Many additions will be reclassifiable as change requests once made visible. This is a commercial conversation, not a conflict.",
    framework: "Fixed-Price Scope Governance — the original SOW is the contract. Every addition beyond it is billable. The defense is always the documented change log.",
    principle: "Fixed-price protects the client on scope. It does not protect the client from scope they added themselves.",
    traps: [
      "Absorbing 18 additions at fixed price means you are losing money on every hour worked beyond the original estimate.",
      "CEO escalation before you have presented evidence is premature and signals you cannot manage the commercial relationship.",
      "Stopping work on additions unilaterally without documentation creates a dispute about what was in scope to begin with."
    ]
  },
  {
    id: "PD12",
    category: "Project Delivery",
    difficulty: 3,
    scenario: "Your system integration relies on a third-party vendor providing an API. Your team says the API has been unstable. The vendor blames incorrect calls from your team. Your client's IT team says both parties are wrong and their firewall is configured correctly. The project is 2 weeks behind and no one is taking ownership.",
    quote: "\"Each party is saying it is the other's fault. We just need to wait for them to sort it out.\"",
    options: [
      "Assign your most senior developer to reproduce the API errors in isolation using a test harness and deliver a written root-cause report to both the vendor and client IT within 48 hours.",
      "Take unilateral ownership: run a joint technical session with all three parties, share logs from all sides, and identify the root cause together.",
      "Escalate to your client's project sponsor and ask them to force their IT team to fix it.",
      "Build a workaround that bypasses the problematic integration entirely."
    ],
    correct: 1,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":10,"executionRisk":-25,"strategicPosition":10},
    explanation: "Multi-vendor blame cycles are one of the most common project killers. No individual party will resolve it on their own — everyone has an incentive to protect their position. The only way out is a joint technical session where all logs are on the table simultaneously. The tech lead is best positioned to facilitate this because you have the most to lose from the delay.",
    framework: "Multi-Vendor Conflict Resolution — when vendors are blaming each other, convene a joint session with all parties and shared evidence. Blame cycles only end when everyone is in the same room.",
    principle: "The party who calls the meeting owns the resolution. Take the lead.",
    traps: [
      "A one-sided root-cause report from your developer carries no authority with the vendor or client IT — each party will dispute findings they were not present to validate, and the blame cycle restarts.",
      "Escalating to the sponsor before attempting a technical resolution wastes executive political capital on a solvable engineering problem.",
      "A bypass workaround may work short-term but creates permanent technical debt and does not fix the underlying integration."
    ]
  },
  {
    id: "PD13",
    category: "Project Delivery",
    difficulty: 1,
    scenario: "During sprint planning for Sprint 3, your team realizes that a core assumption from the project kickoff — that the client's existing user database could be used directly — is wrong. Their database schema is incompatible with your system's authentication model. This was never validated before development started.",
    quote: "\"We should have caught this at kickoff. The team should have asked more questions.\"",
    options: [
      "Add a sprint buffer to absorb the rework, quietly update the project timeline internally, and communicate to the client only when the rework is complete.",
      "Absorb the rework silently. It is your team's fault for not validating earlier.",
      "Document the assumption failure, assess the rework impact, raise it as a risk item with the client, and implement an assumption validation checklist for remaining sprints.",
      "Raise a change request immediately. The client should have provided accurate technical documentation."
    ],
    correct: 2,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":10,"teamMorale":10,"executionRisk":-15,"strategicPosition":5},
    explanation: "Unvalidated assumptions at kickoff are a process failure — usually shared between your team (who did not ask) and the client (who did not provide accurate docs). The right response is to surface the impact transparently, fix the process going forward, and assess whether a change request is warranted. Blame without process improvement produces the same failure on the next sprint.",
    framework: "Assumption Log — every major technical assumption should be documented and validated before work begins. A living assumption log prevents the same failure from recurring.",
    principle: "An assumption that is never validated is a risk that has already materialized — you just do not know it yet.",
    traps: [
      "Absorbing the rework silently without client visibility destroys your timeline credibility when the delay surfaces — and it always surfaces — leaving you without a documented reason for the slip.",
      "Absorbing silently is appropriate only if the impact is genuinely minor. A schema incompatibility is not minor.",
      "A change request may be warranted, but raising it before assessing impact puts you in a weak negotiating position."
    ]
  },
  {
    id: "PD14",
    category: "Project Delivery",
    difficulty: 2,
    scenario: "Your team's sprint velocity looks healthy on paper — they are hitting 40 story points per sprint consistently. But three client-facing features scheduled for this release have not actually been delivered. Investigation reveals that developers have been splitting stories into smaller, easier sub-tasks to inflate their velocity numbers.",
    quote: "\"Velocity is a team metric, not a delivery metric. Let us not overreact.\"",
    options: [
      "Recalibrate the sprint capacity target downward to match the team's actual throughput, so velocity and delivery realign without changing the sizing process.",
      "Set a minimum story-point threshold per ticket to prevent further splitting, and apply it retroactively to audit the last three sprints.",
      "Report the velocity inflation to the client immediately as a project risk.",
      "Reset the velocity measurement: redefine story sizing criteria, review the backlog for inflated splits, and have a private team conversation about delivery accountability."
    ],
    correct: 3,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":5,"teamMorale":10,"executionRisk":-15,"strategicPosition":5},
    explanation: "Story splitting to inflate velocity is a symptom — usually of unrealistic targets or a fear of being seen as underperforming. The fix is systemic: redefine what a story point means, review the backlog, and have a private conversation about what the team is optimizing for. Public confrontation creates defensiveness. Ignoring it means the delivery misses continue.",
    framework: "Velocity Integrity — story points measure work completed, not work attempted. When velocity and delivery diverge, the measurement system is broken.",
    principle: "Velocity that does not predict delivery is not a metric. It is a vanity number.",
    traps: [
      "Lowering the capacity target treats the symptom but not the root cause — story sizes are still inflated, so velocity numbers still do not predict delivery.",
      "A minimum point threshold discourages sub-task splitting but does not address why the team felt compelled to inflate in the first place; the behaviour resurfaces in other forms.",
      "Reporting to the client before resolving internally is premature and creates unnecessary alarm."
    ]
  },
  {
    id: "PD15",
    category: "Project Delivery",
    difficulty: 2,
    scenario: "The project is complete. The final delivery has been accepted. But the formal project close-out — final invoice, lessons learned session, knowledge handover documentation, and signed acceptance certificate — has been sitting incomplete for 6 weeks. The client is happy but busy. Your team has moved to new projects.",
    quote: "\"The client is happy. The formal close is just paperwork. We will get to it.\"",
    options: [
      "Schedule a 1-hour close-out session, complete the acceptance certificate and lessons learned together, and deliver the knowledge handover documentation within the week.",
      "Send the final invoice and close the project commercially without the formal documents.",
      "Send the outstanding documents to the client by email without scheduling a session, and ask them to sign and return the acceptance certificate at their convenience.",
      "Close the project internally, mark it complete in your project management system, and follow up on the outstanding paperwork during the next scheduled touchpoint."
    ],
    correct: 0,
    consequences: {"cash":5,"growth":5,"profitability":10,"customerTrust":10,"teamMorale":5,"executionRisk":-10,"strategicPosition":10},
    explanation: "Incomplete project close-out creates two real risks: the final invoice may be disputed months later with no signed acceptance, and undocumented knowledge leaves the client exposed in AMS. A 1-hour session with a structured agenda closes everything cleanly. The client who is \"too busy\" is usually willing for a focused, pre-structured session.",
    framework: "Project Close-Out Protocol — acceptance certificate, final invoice, lessons learned, knowledge handover. These four outputs define a properly closed project.",
    principle: "A project is not done until it is documented. Happy clients become unhappy clients when they cannot find the knowledge 6 months later.",
    traps: [
      "An unclosed project with no signed acceptance is an open liability. Anyone can dispute what was delivered.",
      "Emailing documents to a busy client with no structured session produces no signatures and no lessons learned — documents sit unread and the project stays legally open.",
      "Closing the project internally without the signed acceptance certificate means your final invoice has no formal delivery proof behind it — a serious exposure if the client disputes scope months later."
    ]
  },
  {
    id: "CM11",
    category: "Client Management",
    difficulty: 2,
    scenario: "Your key internal champion at the client — the person who championed the project to their board, understands the goals, and has been your main contact for 4 months — has just resigned. Their replacement is a senior manager who was skeptical of the project from the start and is now responsible for its success.",
    quote: "\"We just need to give the new manager time to get comfortable. They will come around.\"",
    options: [
      "Prepare a comprehensive project status report covering all decisions made to date and send it to the new manager before the end of the week.",
      "Request an urgent onboarding meeting with the new manager before they form opinions based on secondhand information.",
      "Ask the outgoing champion to brief their replacement before they leave.",
      "Escalate to the executive sponsor immediately to ensure project continuity."
    ],
    correct: 1,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":5,"executionRisk":-15,"strategicPosition":10},
    explanation: "A new skeptical stakeholder who inherits a project they did not support is a high-risk situation. The window to shape their understanding is immediately after they take over — before they form impressions based on rumors or their own skepticism. Request a direct briefing: here is what was decided, here is what was built, here is what we are delivering and why. Own the narrative.",
    framework: "Stakeholder Transition Management — when a project champion leaves, the first 2 weeks with their replacement are the highest-impact window. Brief them before someone else does.",
    principle: "A skeptic briefed by you early becomes a neutral. A skeptic briefed by rumor becomes an adversary.",
    traps: [
      "A written status report gives a skeptical new manager raw information without context or relationship — they will interpret it through their existing skepticism rather than the intent behind the decisions.",
      "Relying on the outgoing champion to hand over context is unreliable — they are mentally disengaged from a job they are leaving.",
      "Escalating to the executive sponsor before meeting the new manager directly creates political tension before a relationship is established."
    ]
  },
  {
    id: "CM12",
    category: "Client Management",
    difficulty: 3,
    scenario: "Your client's CEO mentioned in a board meeting that the new system will include real-time cross-branch analytics and AI-powered demand forecasting. Neither feature is in the project scope or your contract. Your client's project manager calls you and asks when those features will be ready. The board presentation was last week.",
    quote: "\"The CEO told the board. We have to find a way to deliver it or we look incompetent.\"",
    options: [
      "Commit to delivering both features. The client relationship requires it.",
      "Tell the client PM immediately that neither feature is in scope and you cannot deliver them.",
      "Meet with the client PM and executive sponsor. Clarify scope, quantify what delivery would cost and take, and offer a fast-track proposal.",
      "Deliver a lightweight version of both features to satisfy the board without full scope."
    ],
    correct: 2,
    consequences: {"cash":5,"growth":10,"profitability":10,"customerTrust":15,"teamMorale":5,"executionRisk":-10,"strategicPosition":15},
    explanation: "The CEO created an expectation problem — not you. The correct response is a direct meeting with the decision-makers: here is what is in scope, here is what was promised to the board, here is what it would cost and how long it would take to close the gap. This turns a crisis into a commercial conversation. Committing without a contract change is the worst outcome.",
    framework: "Out-of-Scope Executive Commitment — when a client executive promises features beyond the contract, surface it to the right stakeholders immediately and make the cost of delivery visible.",
    principle: "You cannot deliver what is not funded. Make the choice visible, not invisible.",
    traps: [
      "Committing to features not in scope without a contract change means you absorb the full cost of delivery.",
      "Refusing without offering a path forward leaves the client with a board expectation problem and no solution.",
      "A \"lightweight version\" of features that were described specifically to a board invites comparison and disappointment."
    ]
  },
  {
    id: "CM13",
    category: "Client Management",
    difficulty: 3,
    scenario: "A competing firm is pitching a similar system to one of your client's subsidiaries. You discover that the competitor's proposal contains methodology diagrams, project timeline structures, and onboarding frameworks that are near-identical to documents you shared with the client during the sales process — documents covered by your NDA.",
    quote: "\"It could be a coincidence. Methodologies look similar in this industry.\"",
    options: [
      "Document the similarities in detail, share the evidence with your business development director, and flag it as a competitive intelligence concern to monitor in future proposals.",
      "Raise it directly with the client's legal or procurement team, share the evidence, and ask for an explanation.",
      "Send the client's procurement lead a formal written notice citing the NDA clause and requesting a written explanation within 5 business days before taking further action.",
      "Report it to your legal team first and let them determine the appropriate response."
    ],
    correct: 3,
    consequences: {"cash":0,"growth":0,"profitability":5,"customerTrust":5,"teamMorale":5,"executionRisk":-10,"strategicPosition":10},
    explanation: "NDA breaches require legal assessment before any external action. Your legal team determines whether the evidence is sufficient, what the remedy is, and how to approach the client. Going directly to the client before legal review may compromise your legal position. Doing nothing allows the breach to continue unchallenged.",
    framework: "IP Breach Response Protocol — document the evidence, engage legal first, then take advised action. Never confront a potential breach without legal guidance.",
    principle: "IP protection starts with your legal team, not the client conversation.",
    traps: [
      "Treating a potential NDA breach as a competitive intelligence issue rather than a legal matter means you document the concern but take no protective action — the breach continues and your legal position weakens the longer you wait.",
      "Going to the client directly before legal review may waive certain legal remedies or escalate prematurely.",
      "Issuing a formal written notice to the client before legal review exposes your legal strategy, may be inadmissible as proper notice depending on the NDA's cure clause, and triggers a defensive response without giving you the leverage that a properly advised approach would."
    ]
  },
  {
    id: "CM14",
    category: "Client Management",
    difficulty: 2,
    scenario: "Your client's operations director sends emails at 10pm and 11pm most nights and expects responses by 8am. They CC your developer leads on client issues, ask for status on tickets that were logged 4 hours ago, and have told your team in a call that they \"do not trust the process, only personal updates.\" Two of your developers have told you the behavior is affecting their ability to sleep.",
    quote: "\"The client is just highly engaged. This is what good service looks like.\"",
    options: [
      "Meet privately with the operations director to understand their concerns and establish communication protocols together.",
      "Have your developers set their phones to do-not-disturb after 7pm and not respond until morning.",
      "Set up a shared Slack channel with the operations director and all developer leads so all client questions are visible, tracked, and answered in one place.",
      "Escalate to the client's executive sponsor and ask them to manage their operations director's communication style."
    ],
    correct: 0,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":10,"teamMorale":20,"executionRisk":-10,"strategicPosition":5},
    explanation: "Communication behavior that affects your team's sleep and well-being is a management issue, not just a preference. A private, professional conversation with the operations director — understanding why they feel they need constant updates and proposing a structured alternative — usually works. Most clients are unaware of the impact their communication style creates.",
    framework: "Client Communication Boundary Setting — establish working hours and communication protocols early. When these are violated, address it directly and early rather than absorbing indefinitely.",
    principle: "Clients who do not trust the process need the process explained and demonstrated, not bypassed.",
    traps: [
      "Having developers unilaterally go silent creates client anxiety and escalations without addressing the root cause.",
      "A shared channel with all developer leads included gives the operations director direct access to the entire team at all hours — it formalises the exact behaviour you are trying to reduce rather than containing it.",
      "Escalating past the operations director before speaking with them directly creates political damage before a conversation has been attempted."
    ]
  },
  {
    id: "TD11",
    category: "Technical Decisions",
    difficulty: 3,
    scenario: "Your platform's REST API is used by 14 client-side integrations. You need to change the response structure of your Orders endpoint — a breaking change — to support a new feature your product team requires. Maintaining two API versions simultaneously would cost 3 months of engineering time.",
    quote: "\"Just ship the new version. They can update their integrations.\"",
    options: [
      "Ship the breaking change immediately. Clients can adapt.",
      "Publish a deprecation notice with a 90-day migration window, provide a migration guide, and offer 2 migration support calls per client.",
      "Maintain both versions indefinitely. Never break client integrations.",
      "Build a transformation layer that maps the old response to the new one automatically."
    ],
    correct: 1,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":5,"executionRisk":-15,"strategicPosition":10},
    explanation: "Breaking changes are manageable when they come with adequate notice, clear migration guidance, and support. 90 days is the industry standard minimum. A transformation layer sounds elegant but adds permanent maintenance overhead. Maintaining two versions indefinitely is unsustainable.",
    framework: "API Deprecation Policy — semantic versioning + deprecation notices + migration window + support. This is the standard. Deviating in either direction (too fast or never) creates long-term cost.",
    principle: "Breaking changes are not the problem. Undisclosed breaking changes are.",
    traps: [
      "Shipping with no notice breaks 14 integrations simultaneously and destroys client trust.",
      "Indefinite dual versioning means every future change doubles your maintenance surface.",
      "A transformation layer adds a permanent mapping layer that must be maintained every time either side evolves."
    ]
  },
  {
    id: "TD12",
    category: "Technical Decisions",
    difficulty: 2,
    scenario: "Your team of 8 developers is proposing to split your monolithic application into microservices. They argue it will improve scalability and allow independent deployments. Your system currently serves 400 concurrent users at peak. The rewrite estimate is 6 months. You have no DevOps engineer on the team.",
    quote: "\"Microservices is how all modern systems are built. We have to evolve.\"",
    options: [
      "Approve the microservices migration. Modern architecture future-proofs the system.",
      "Reject it entirely. Keep the monolith.",
      "Reject the full migration but invest in modular monolith practices — cleaner boundaries, better test coverage, independent deployable modules.",
      "Approve a pilot: extract one non-critical service first to test the team's capability before committing."
    ],
    correct: 2,
    consequences: {"cash":0,"growth":5,"profitability":10,"customerTrust":5,"teamMorale":10,"executionRisk":-15,"strategicPosition":10},
    explanation: "Microservices solve problems at scale — distributed traffic, independent team deployments, fault isolation. At 400 concurrent users with no DevOps engineer, you are introducing distributed systems complexity (network failures, service discovery, distributed tracing, deployment pipelines) to solve problems you do not have. A modular monolith gives the benefits of separation without the operational overhead.",
    framework: "Architecture Fitness — architecture should match the scale and team capability of today, with a path toward tomorrow. Microservices require DevOps maturity that most teams building them do not have.",
    principle: "A well-structured monolith beats a poorly run microservices architecture every time.",
    traps: [
      "A 6-month microservices rewrite with no DevOps engineer produces distributed systems chaos, not scalability.",
      "Flat rejection without offering an alternative dismisses valid architectural concerns.",
      "A pilot sounds cautious but microservices complexity tends to be underestimated until the first service is in production and you need to debug across network boundaries."
    ]
  },
  {
    id: "TD13",
    category: "Technical Decisions",
    difficulty: 2,
    scenario: "Your developer added a widely-used open-source library to the project. During a security review, your legal team flags that the library uses a GPL v3 license. Your product is commercial and proprietary. The library is embedded in the core data processing module and replacing it would take 3-4 weeks.",
    quote: "\"Everyone uses open-source libraries. GPL is fine.\"",
    options: [
      "Keep the library. GPL is commonly misunderstood and practically never enforced.",
      "Switch from the GPL library to a permissively licensed alternative (MIT or Apache 2.0) immediately, and absorb the 3-4 week rework as a security and compliance obligation.",
      "Use a GPL license exception — contact the library author and request a commercial license.",
      "Get a formal legal opinion on the specific use case before making a change decision."
    ],
    correct: 3,
    consequences: {"cash":-5,"growth":0,"profitability":5,"customerTrust":5,"teamMorale":5,"executionRisk":-15,"strategicPosition":5},
    explanation: "GPL v3 in a commercial product is a genuine legal risk — but the actual impact depends on how the library is used (linked, embedded, distributed). A legal opinion on the specific use case gives you the accurate picture before you spend 3-4 weeks on a rework that may not be necessary, or before you leave an IP risk unaddressed.",
    framework: "Open Source License Audit — before using any open-source library in commercial software, validate its license against your distribution model. GPL, AGPL, and SSPL require particular care.",
    principle: "License risk is IP risk. Get legal clarity before you ship, not after.",
    traps: [
      "\"Practically never enforced\" is not a legal standard. GPL enforcement actions do happen, especially at acquisition due diligence.",
      "Switching immediately without a legal assessment may be unnecessary — your specific use of the library (linked vs. embedded, distributed vs. SaaS) could be compliant — and a rushed 3-4 week rework introduces regression risk with no confirmed benefit.",
      "A commercial license exception may be the right outcome — but only after legal confirms it is actually needed."
    ]
  },
  {
    id: "TD14",
    category: "Technical Decisions",
    difficulty: 3,
    scenario: "An enterprise client requires Single Sign-On (SSO) integration with their Azure Active Directory for all users. Your system currently uses username/password authentication with your own user database. Adding SSO will require changes to your authentication layer, session management, and user provisioning flow. The client says SSO is non-negotiable and they will not sign until it is confirmed.",
    quote: "\"SSO is a nice-to-have. Let us close the deal first and add it post-launch.\"",
    options: [
      "Evaluate the technical effort accurately, price it as a project addition, and commit only to a realistic timeline.",
      "Refuse. SSO integration is too complex to commit to mid-project.",
      "Agree to SSO in the contract without a delivery date. Figure it out after signing.",
      "Implement a basic SAML integration using a third-party auth provider to meet the requirement quickly."
    ],
    correct: 0,
    consequences: {"cash":5,"growth":10,"profitability":5,"customerTrust":15,"teamMorale":5,"executionRisk":-10,"strategicPosition":10},
    explanation: "SSO/SAML integration with Azure AD is well-understood work — the question is effort and timeline. A proper technical assessment gives you the hours, cost, and realistic delivery date. Committing without assessment creates a contract obligation with unknown cost. Refusing loses the deal unnecessarily. A third-party auth provider (Auth0, Okta) can significantly reduce the effort and is worth evaluating.",
    framework: "Enterprise Authentication Requirements — SSO, SAML, and OAuth2 integrations are standard enterprise requirements. Treat them as priced features, not post-launch surprises.",
    principle: "Never commit to a technical requirement you have not estimated. Never refuse one you have not evaluated.",
    traps: [
      "Agreeing to SSO in the contract without a delivery date creates a contractual obligation with an open timeline — the worst commercial outcome.",
      "Refusing SSO without evaluating the effort loses an enterprise deal over a solvable technical problem.",
      "A third-party auth provider is worth considering but should be part of the evaluation, not the first decision."
    ]
  },
  {
    id: "TD15",
    category: "Technical Decisions",
    difficulty: 2,
    scenario: "A production bug was reported that your team cannot reproduce in staging. After investigation, you find that staging uses a 5,000-record dataset while production has 2.3 million records. The bug only appears under high data volume. Staging and production also have different memory limits and different database index configurations.",
    quote: "\"Staging is close enough. We cannot replicate production exactly — it is too expensive.\"",
    options: [
      "Accept the parity gap. Reproduce bugs in production using debug tools.",
      "Add automated environment parity checks to your deployment pipeline to flag config divergence.",
      "Reproduce the bug directly in production using read-only investigation tools, then test the fix in staging.",
      "Create a production-like staging environment with representative data volume and matched configuration."
    ],
    correct: 1,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":5,"teamMorale":10,"executionRisk":-20,"strategicPosition":5},
    explanation: "Environment parity checks in the CI/CD pipeline catch divergence before it causes production-only bugs. They are cheaper than a full production-clone staging environment and more disciplined than ad-hoc investigation in production. Automated checks flag when someone changes a production config without updating staging.",
    framework: "Environment Parity Management — staging exists to find bugs before production. If staging cannot reproduce production bugs, it is not doing its job. Automated config parity checks are the scalable solution.",
    principle: "A staging environment that cannot reproduce production bugs is a false sense of security.",
    traps: [
      "Debugging in production exposes real data to risk and creates pressure to fix quickly under live conditions.",
      "A full production-clone staging environment is expensive to maintain and often still diverges over time.",
      "Reproducing in production and testing in staging inverts the purpose of staging — you are testing the fix in the less representative environment."
    ]
  },
  {
    id: "IM11",
    category: "Implementation",
    difficulty: 3,
    scenario: "You are rolling out a new system to 12 branches, starting with a pilot at 2 branches. The pilot go-live was rocky — 4 high-priority bugs, poor user adoption at 40%, and the branch managers are vocal about their dissatisfaction. The next 10 branches are scheduled to go live in 3 weeks.",
    quote: "\"The issues are known. The next rollout will be smoother now that we have the learnings.\"",
    options: [
      "Proceed with the next 10 branches on schedule. The pilot lessons are incorporated.",
      "Delay all remaining branches until the 2 pilot branches reach 80% adoption and zero open P1s.",
      "Pause the rollout. Fix the known issues first, then resume with 2-3 more branches as a second pilot.",
      "Proceed with 3 branches next, hold the remaining 7 until the 3-branch cohort shows stability."
    ],
    correct: 2,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":10,"executionRisk":-20,"strategicPosition":10},
    explanation: "Rolling out to 10 branches with open P1 bugs and 40% adoption at the pilot is scaling a failing system. The correct response is a controlled pause: fix the issues, bring the pilot to stability, then resume with a small cohort to validate the fixes before the full rollout. A staged expansion protects 10 branches from experiencing the same pilot problems.",
    framework: "Phased Rollout Gate Criteria — define go/no-go criteria for each rollout stage. Pilot stability (adoption rate, open P1 count) is the gate, not the calendar date.",
    principle: "A rocky pilot is feedback, not an anomaly. Do not ignore it across 10 more sites.",
    traps: [
      "Proceeding on schedule with known P1s and 40% adoption multiplies the existing problems by 5x.",
      "Waiting for 80% adoption at the pilot before any further rollout may take months with no parallel progress.",
      "Proceeding with 3 branches rather than pausing entirely delays the fix — you are still rolling out a broken system."
    ]
  },
  {
    id: "IM12",
    category: "Implementation",
    difficulty: 2,
    scenario: "The new system has been live for 6 weeks and is stable. The client is asking when they can decommission the old system. Their IT team wants to retain the old system for 12 months \"just in case.\" The old system costs ₱80K/month in licensing and maintenance. Your new system has replicated all functionality.",
    quote: "\"Keep both running. There is no rush and it reduces risk.\"",
    options: [
      "Support indefinite dual-running. Safety comes first.",
      "Recommend immediate decommission. The new system is proven and the cost is wasteful.",
      "Recommend a 6-month read-only retention window before decommission, giving the IT team ample time to identify any edge cases the new system may have missed.",
      "Propose a structured decommission plan: data archival, final migration of any remaining edge-case data, a 90-day read-only retention window, then full shutdown."
    ],
    correct: 3,
    consequences: {"cash":5,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":5,"executionRisk":-10,"strategicPosition":10},
    explanation: "A structured decommission plan with a defined timeline addresses the IT team's safety concern without committing to indefinite ₱80K/month cost. Data archival and a read-only retention window give them access to historical records. The 90-day window is usually sufficient for any audit or edge case. After 90 days, the old system has served its purpose.",
    framework: "Legacy System Decommission Protocol — archive data, migrate edge-cases, retain read-only for 90 days, then shut down. An indefinite retention period is usually fear management, not risk management.",
    principle: "Running two systems indefinitely doubles your risk surface, not halves it.",
    traps: [
      "Indefinite dual-running means both systems must be patched, maintained, and supported simultaneously.",
      "Immediate decommission without a structured plan misses data archival and edge-case migration — creating a real risk.",
      "A 6-month read-only window costs ₱480K in continued licensing and maintenance — six times what a structured 90-day plan costs — and the IT team's \"edge case\" concern is better addressed by a targeted data validation exercise, not an extended runway that delays cost savings with no defined exit criteria."
    ]
  },
  {
    id: "IM13",
    category: "Implementation",
    difficulty: 3,
    scenario: "The system goes live in 10 days. The client's CEO wants to invite their board of directors to a live demonstration of the system next Friday — 3 days before go-live — to showcase the investment. The system is functional but has 8 open P2 bugs and the UI needs final polish. Your team is in final testing.",
    quote: "\"The CEO wants to show the board. We make it work — it is good enough.\"",
    options: [
      "Propose a demo on the staging environment with a scripted walkthrough of the most polished flows, clearly framed as a pre-production preview.",
      "Refuse the demo. The system is not ready for executive presentation.",
      "Run the board demo on the live-in-progress system as requested.",
      "Rush the UI polish and fix at least 4 of the 8 P2 bugs before the demo day."
    ],
    correct: 0,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":15,"teamMorale":10,"executionRisk":-15,"strategicPosition":10},
    explanation: "A scripted staging demo is the professional answer. It gives the CEO their board moment, protects the team from a live system demo with known bugs, and avoids the risk of a P2 bug appearing in front of the board. Framing it as \"pre-production preview\" is honest and actually builds anticipation for go-live.",
    framework: "Executive Demo Risk Management — demos to boards should always run on scripted, controlled environments. Live system demos before go-live are a risk that rarely justifies the return.",
    principle: "Protect go-live quality from pre-launch showcase pressure.",
    traps: [
      "A live demo with 8 open P2 bugs is a coin-flip. If one surfaces in front of the board, it damages the project's credibility.",
      "Refusing the demo damages the relationship and the CEO's ability to show value to their board.",
      "Rushing UI polish and bug fixes 3 days before go-live introduces regression risk to the production release."
    ]
  },
  {
    id: "HC11",
    category: "Hypercare",
    difficulty: 1,
    scenario: "It is Monday morning, Day 1 of go-live. Your support inbox has 34 tickets already. Half are from users saying they \"cannot log in\" or \"do not know what to do.\" When you investigate, you discover that the client's IT team sent the go-live announcement email to all staff on Friday at 5:30pm — most never saw it before arriving this morning.",
    quote: "\"The email was sent. That is the client's communication problem.\"",
    options: [
      "Triage all 34 tickets immediately, prioritize login issues, and assign two developers to resolve them remotely via the help desk queue.",
      "Pause all other tickets and run a live walk-in support session at the client's office for the first 3 hours.",
      "Send a broadcast email to all staff with step-by-step login instructions and links to the quick-start guide, then let the help desk queue clear naturally.",
      "Send a help desk triage message to all affected users with login instructions and a link to the quick-start guide."
    ],
    correct: 1,
    consequences: {"cash":-5,"growth":5,"profitability":0,"customerTrust":20,"teamMorale":5,"executionRisk":-20,"strategicPosition":5},
    explanation: "A go-live communication failure on Day 1 is a user experience emergency. Thirty-four tickets in the first hours means hundreds of users are stuck. A live walk-in support session physically at the office converts a chaotic ticket storm into a controlled, visible support presence. It also gives users confidence that someone is there. Blaming the client's IT comms is technically correct and practically useless.",
    framework: "Go-Live Day 1 Surge Response — when a communication failure creates a user support surge on Day 1, deploy a physical support presence. It is faster than ticket triage and converts anxiety into confidence.",
    principle: "Day 1 of go-live is a user confidence problem, not a technical problem. Solve it like one.",
    traps: [
      "Remote ticket triage for \"cannot log in\" issues takes far longer than in-person resolution — without knowing which users are affected or what device configuration they are on, help desk staff spend most of the time gathering context rather than solving the problem.",
      "A broadcast email on Day 1 morning reaches users who are already at their desks and already anxious — many will not read it before calling again, and it does nothing for users with configuration issues that a written guide cannot resolve.",
      "A triage message with login instructions addresses users who can read and follow steps, but a Day 1 surge means many affected users are already anxious and on the phone — a text-based guide cannot replace the confidence that a human presence provides."
    ]
  },
  {
    id: "HC12",
    category: "Hypercare",
    difficulty: 3,
    scenario: "It is 10:30am on a Tuesday. Your system has been down for 45 minutes due to a database connection failure. The client's CEO, CFO, and 3 department heads are all sending messages simultaneously to different people on your team asking for updates. Your developers are in the middle of fixing the issue. Every message they respond to delays the fix by 5-10 minutes.",
    quote: "\"Everyone deserves an update. Let the developers respond to each stakeholder.\"",
    options: [
      "Send a single incident acknowledgement message to all stakeholders now, promising a resolution update within 30 minutes, then let the developers focus on the fix.",
      "Silence all communication until the system is restored, then send one comprehensive update.",
      "Nominate one person as the sole incident communicator. That person gives updates every 15 minutes. Developers respond to no one except internal technical discussion.",
      "Ask the client to nominate a single point of contact on their side to reduce the volume."
    ],
    correct: 2,
    consequences: {"cash":0,"growth":5,"profitability":0,"customerTrust":15,"teamMorale":15,"executionRisk":-25,"strategicPosition":5},
    explanation: "During a live incident, communication and resolution must be separated. Every message a developer answers delays the fix. A single communicator — project manager or tech lead who is not fixing the issue — sends structured 15-minute updates to all stakeholders simultaneously. This gives executives the visibility they need while protecting the fix team's focus.",
    framework: "Incident Communication Protocol — one communicator, one update cadence, all stakeholders. Never let communication interrupt resolution. This is the ITIL incident management standard.",
    principle: "The fastest way to fix an outage is to let the fixers fix it.",
    traps: [
      "A single acknowledgement message buys time but does not cover the ongoing pressure — executives will reply with follow-up questions, and without a designated communicator, a developer will eventually get pulled in to answer.",
      "Silence during an outage creates escalations and executive panic that are worse than a brief update.",
      "Asking the client to manage their own executives during a live outage you caused is tone-deaf."
    ]
  },
  {
    id: "AMS11",
    category: "AMS",
    difficulty: 2,
    scenario: "A new Philippine tax regulation takes effect in 90 days and requires changes to your client's invoicing module — specifically, the addition of new tax fields and updated computation logic. Your AMS contract covers bug fixes and minor enhancements. The client expects the update to be included in the AMS. Your legal and product team says it is a regulatory enhancement — a paid project.",
    quote: "\"It is a government requirement. We have to do it at no cost.\"",
    options: [
      "Do it at no cost. Regulatory compliance is a basic product obligation.",
      "Decline. The AMS contract does not cover regulatory changes.",
      "Check whether the change affects all your AMS clients, and if so, absorb it as a platform update shared across all of them.",
      "Assess the effort, classify it as a regulatory change request, and present a fast-track proposal — given the hard deadline."
    ],
    correct: 3,
    consequences: {"cash":5,"growth":5,"profitability":10,"customerTrust":10,"teamMorale":5,"executionRisk":-10,"strategicPosition":5},
    explanation: "Regulatory changes are not bugs — they are new requirements imposed by an external party. If the change affects only this client's configuration, it is a paid change request. If it affects your shared platform, the cost is shared across all clients as a platform update. The 90-day deadline adds urgency but does not change the commercial classification.",
    framework: "Regulatory Change Classification — platform-level regulatory changes are shared product costs. Client-specific regulatory configurations are change requests. Assess scope before deciding who pays.",
    principle: "Government-mandated does not mean free. It means urgent.",
    traps: [
      "Doing all regulatory work at no cost sets a precedent that every future government mandate is included in AMS regardless of effort.",
      "Declining without a proposal leaves the client without a compliant system in 90 days — a serious client risk.",
      "Before classifying a regulatory change as a billable change request, check whether it affects your entire AMS client base — if it does, absorbing it as a shared platform update avoids double-billing and sets the right commercial precedent."
    ]
  },
  {
    id: "AMS12",
    category: "AMS",
    difficulty: 3,
    scenario: "Your AMS client has just acquired a smaller competitor. They want to migrate the acquired company's 1,200 users and data into your system and consolidate both companies under one AMS contract at the current pricing. The acquisition doubles the user base and operational complexity. The client says \"it is just the same system with more users.\"",
    quote: "\"They are an existing client. We should support the acquisition at no extra cost.\"",
    options: [
      "Treat the acquisition as a new project — migration, onboarding, and a revised AMS contract.",
      "Extend the existing AMS contract to cover the acquired company at the current per-user rate, and handle the migration workstream under the AMS as an implementation service.",
      "Add the 1,200 users at the contracted per-user rate and propose a migration project separately.",
      "Negotiate a flat fee increase on the annual AMS contract to cover the additional users and migration, without separating migration as a distinct project engagement."
    ],
    correct: 0,
    consequences: {"cash":10,"growth":10,"profitability":15,"customerTrust":10,"teamMorale":5,"executionRisk":-10,"strategicPosition":15},
    explanation: "A client acquisition is a project and a contract event — not just a user count change. Data migration, change management, integration testing, and onboarding for 1,200 new users is a significant workstream. The revised AMS contract should reflect the doubled scope. Treating it as \"just more users\" undersells and underprices the real work involved.",
    framework: "Acquisition-Triggered Contract Review — when a client acquires another company, it triggers both a project (migration/onboarding) and a contract revision (updated scope and pricing). Handle both.",
    principle: "Loyal clients deserve fair pricing. Not free pricing.",
    traps: [
      "Absorbing the migration workstream into the existing AMS treats a time-bounded project deliverable as an ongoing support obligation — the migration cost is buried in AMS pricing and you have no formal project structure to manage it.",
      "Per-user pricing only addresses headcount. It misses migration effort, change management, and integration work — meaning you recover the licensing revenue but not the delivery cost.",
      "A flat fee increase bundles project work and support work into a single contract line, making it impossible to scope or govern the migration properly — scope creep from the migration bleeds into AMS with no commercial boundary."
    ]
  },
  {
    id: "AMS13",
    category: "AMS",
    difficulty: 3,
    scenario: "Your AMS contract includes a disaster recovery SLA: full system recovery within 4 hours of a declared disaster. The client requests a DR test this quarter. During the test, the recovery takes 9 hours — more than double the SLA. The backup restoration process has errors, and 3% of data from the last 48 hours is missing.",
    quote: "\"It was just a test. Real disasters will be handled differently.\"",
    options: [
      "Share the full DR test results with the client, acknowledge the gap, and present a 90-day improvement roadmap to bring recovery time in line with the SLA.",
      "Immediately treat the failed DR test as a critical finding: disclose the gap to the client formally, identify root causes, and present a remediation plan within 2 weeks.",
      "Revise the SLA downward in the next contract renewal to match actual capability.",
      "Convene an internal post-mortem to identify and fix the backup restoration errors, then run a second DR test in 30 days before disclosing any results to the client."
    ],
    correct: 1,
    consequences: {"cash":-10,"growth":0,"profitability":-5,"customerTrust":20,"teamMorale":5,"executionRisk":-25,"strategicPosition":5},
    explanation: "A DR test that fails at 9 hours vs a 4-hour SLA means your client's business continuity plan is based on a false premise. If a real disaster occurs, the client will lose 9+ hours — not 4. They have business decisions depending on that 4-hour commitment. Immediate, formal disclosure of the gap and a remediation plan is the only ethical and professional response.",
    framework: "DR Test Failure Response — a failed DR test is a finding that must be disclosed and remediated. It is not a test result to be normalized or hidden.",
    principle: "A DR SLA you cannot meet is not a safety net. It is a false promise.",
    traps: [
      "A 90-day roadmap without immediately disclosing the gap means the client continues to operate on a business continuity plan based on a 4-hour SLA that you now know is false — if a real disaster occurs during the 90-day window, the client suffers the consequence of information you withheld.",
      "Reducing the SLA at renewal without disclosing the current gap is a cover-up.",
      "Fixing the issue before disclosure may seem prudent, but it means the client makes business continuity decisions during that 30-day window based on a 4-hour SLA commitment you know is undeliverable — the remediation must be disclosed alongside the finding, not instead of it."
    ]
  },
  {
    id: "RQ11",
    category: "Risk & Quality",
    difficulty: 2,
    scenario: "Your automated dependency scanner flags a critical CVE (Common Vulnerabilities and Exposures) in a third-party library you use for PDF generation. The vulnerability allows remote code execution if a malicious PDF is uploaded through your file upload feature. The library has not released a patch yet. Your product is in production with 600 active clients.",
    quote: "\"There is no patch yet. We cannot do anything until the library fixes it.\"",
    options: [
      "Add the CVE to the project risk register, notify the client of the known vulnerability, and check the library's GitHub for patch progress weekly.",
      "Disable the PDF upload feature immediately and notify clients, pending a fix.",
      "Assess the real-world exploitability: if the file upload is authenticated and the attack vector is impractical, implement compensating controls while awaiting the patch.",
      "Replace the PDF generation library immediately with a maintained alternative, prioritise it above all other sprint work, and deploy the replacement within the current sprint."
    ],
    correct: 2,
    consequences: {"cash":-5,"growth":0,"profitability":0,"customerTrust":10,"teamMorale":5,"executionRisk":-20,"strategicPosition":5},
    explanation: "CVE response is not binary between \"wait\" and \"replace immediately.\" A risk assessment — who can upload PDFs, is the feature authenticated, what is the actual attack path — determines the urgency. Compensating controls (file type validation, size limits, sandboxed processing) can reduce the exploitability window while a proper patch is developed. Disabling the feature is valid if the risk is deemed high.",
    framework: "CVE Response Framework — assess exploitability in context, apply compensating controls, monitor for patch, plan migration. Not all CVEs have the same real-world risk profile.",
    principle: "Vulnerability severity is theoretical. Exploitability in your environment is what determines urgency.",
    traps: [
      "Logging the CVE and notifying the client without implementing compensating controls leaves a remote code execution vulnerability active in production while your team watches a GitHub thread — documentation is not a security control.",
      "Disabling a feature for 600 clients is a significant operational impact — only justified if compensating controls are insufficient.",
      "Replacing the library without assessing exploitability first may spend 3-4 weeks of sprint capacity on a migration where the actual attack vector in your environment was low-risk — and the replacement itself introduces new untested code into the PDF processing path."
    ]
  },
  {
    id: "RQ12",
    category: "Risk & Quality",
    difficulty: 3,
    scenario: "You are planning a major refactor of your core data processing module — the one handling all financial transactions. The module has 12% unit test coverage. Your team estimates the refactor will take 6 weeks. A full regression test suite would take 4 additional weeks to write. The client wants the refactor done in 6 weeks total.",
    quote: "\"We will write tests after the refactor. We always do.\"",
    options: [
      "Refactor in 6 weeks as requested. Write tests afterward as time allows.",
      "Refuse to start the refactor until test coverage is at a minimum of 60%.",
      "Write tests for the highest-risk transaction flows first (2 weeks), then refactor (6 weeks), then expand coverage.",
      "Refactor incrementally using the strangler fig pattern — replace one function at a time with tests, rather than a full 6-week rewrite."
    ],
    correct: 3,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":5,"teamMorale":10,"executionRisk":-20,"strategicPosition":10},
    explanation: "The strangler fig approach — replacing one function at a time, with tests written for each replacement — is the safest refactor strategy for financial code with low coverage. You never have a moment where the entire module is mid-refactor. Each replaced function has tests. The total timeline may be longer but the risk is dramatically lower.",
    framework: "Strangler Fig Refactoring — for high-risk, low-coverage modules, replace incrementally rather than rewriting in bulk. Each increment ships tested code.",
    principle: "Refactoring financial code without tests is a high-stakes gamble. Make the increments testable.",
    traps: [
      "\"Write tests after\" on financial code is \"find bugs in production.\" Tests after a refactor cannot catch regressions from the refactor itself.",
      "Refusing to start until 60% coverage is reached adds 4 weeks before a single line of refactoring begins.",
      "Writing tests for the highest-risk flows first is sound but still leaves a large untested surface during the refactor."
    ]
  },
  {
    id: "RQ13",
    category: "Risk & Quality",
    difficulty: 2,
    scenario: "A bug was reported in production that your QA team cannot reproduce in staging. You discover the root cause: staging uses anonymized test data with uniform record sizes, while production has 7 years of real operational data with irregular record lengths, null edge cases, and legacy entries with non-standard characters. The bug only triggers on specific historical records.",
    quote: "\"We tested it. If it does not appear in staging, it is not a test coverage problem.\"",
    options: [
      "Fix the bug, then create a data profile of the production edge cases and add representative test data to staging to prevent recurrence.",
      "Fix the bug in production using a hotfix, and document staging as permanently limited.",
      "Fix the bug and add a targeted unit test for the specific production record that triggered it, so staging will catch any regression to that exact case.",
      "Replace staging with a production data clone, anonymized for privacy compliance."
    ],
    correct: 0,
    consequences: {"cash":-5,"growth":5,"profitability":5,"customerTrust":10,"teamMorale":10,"executionRisk":-15,"strategicPosition":5},
    explanation: "The correct response has two parts: fix the bug, then fix the gap that allowed it. Creating a staging data profile based on production edge cases (null values, legacy characters, irregular lengths) improves future reproducibility without needing a full production clone. A full production clone is expensive to maintain and raises privacy compliance complexity.",
    framework: "Staging Data Representativeness — staging test data should include the edge cases present in production. Uniform, clean test data misses the errors that only appear in real operational data.",
    principle: "Fix the bug and fix the gap that hid it.",
    traps: [
      "Closing the staging test case means the next production-only bug will be discovered the same way — in production.",
      "A single targeted unit test only protects against regression of that exact record — the broader class of edge cases (null values, legacy characters, irregular lengths) remains invisible in staging, and the next production-only bug will surface the same way.",
      "A full production clone is expensive, requires ongoing anonymization, and often still diverges over time."
    ]
  },
  {
    id: "TR11",
    category: "Team & Resources",
    difficulty: 2,
    scenario: "Your best backend developer — 3 years with the team, owns 40% of the codebase — comes to you and asks for a 38% salary increase. They have an offer letter from another company. They say they would prefer to stay but need to close the gap. Your current HR band for their role does not support the new number.",
    quote: "\"We cannot break the salary band. If we do it for one, we do it for all.\"",
    options: [
      "Decline. Salary bands exist for a reason and breaking them sets a precedent.",
      "Have a candid conversation: understand whether it is purely about money, explore what total compensation (equity, role, growth path) looks like, and present what you can offer.",
      "Match the offer immediately. Losing this developer is not an option.",
      "Counter with 20% and let them decide. Split the difference."
    ],
    correct: 1,
    consequences: {"cash":-5,"growth":5,"profitability":0,"customerTrust":0,"teamMorale":15,"executionRisk":-15,"strategicPosition":10},
    explanation: "Salary bands are guidelines, not laws. A developer who owns 40% of your codebase has leverage that goes beyond their job title. A conversation that explores total compensation — base, equity, career trajectory, role expansion — may reveal that the gap is closable without a full 38% match. If it is purely about money and you cannot close it, losing them is a business decision that must be made consciously, not reflexively.",
    framework: "Total Compensation Negotiation — salary is one variable. Role clarity, equity, growth path, and work quality are others. Explore all before conceding or refusing.",
    principle: "The cost of replacing a developer who owns 40% of the codebase is always higher than the cost of retaining them.",
    traps: [
      "Rigid salary bands applied to a key person risk with an outside offer creates a retention failure that destroys morale across the team.",
      "Matching immediately without a conversation misses the opportunity to understand whether the real issue is money or something else.",
      "A 20% counter without understanding their motivation is guesswork. They may accept, or they may leave anyway."
    ]
  },
  {
    id: "TR12",
    category: "Team & Resources",
    difficulty: 2,
    scenario: "One of your senior developers is required to be on-site at the client's office 3 days per week per the project contract. The developer has been working from home full-time for 2 years and says remote work is non-negotiable for them. They are technically excellent and the client specifically requested their involvement. The client is firm on the on-site requirement.",
    quote: "\"Remote is the new normal. The client needs to adapt.\"",
    options: [
      "Side with the developer. Remote work is a reasonable accommodation and the client must accept it.",
      "Side with the client. The contract specifies on-site and the developer must comply.",
      "Facilitate a conversation between the developer and client: explore whether 2 days on-site instead of 3 is acceptable to both parties.",
      "Assign a different developer to on-site days and keep this developer remote in a supporting role."
    ],
    correct: 2,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":10,"teamMorale":10,"executionRisk":-10,"strategicPosition":5},
    explanation: "A negotiated middle ground — 2 days instead of 3 — often satisfies both parties. The developer gets reduced on-site time, the client gets physical presence for key collaboration days. If neither party will budge at all, the developer and the role are genuinely incompatible, and that is a staffing decision. Facilitating the conversation demonstrates leadership rather than just enforcing a policy.",
    framework: "Flexible Work Negotiation — contract requirements and employee preferences both have legitimate standing. The first step is negotiation, not enforcement.",
    principle: "Rigid enforcement without negotiation produces compliance or resignation. Negotiation produces solutions.",
    traps: [
      "The client contracted for on-site presence. Overriding that without their agreement is a contract breach.",
      "Forcing the developer to comply without attempting negotiation may result in their resignation — which loses the technical asset the client specifically requested.",
      "A split-role arrangement may work tactically but feels like a workaround that neither party fully agreed to."
    ]
  },
  {
    id: "TR13",
    category: "Team & Resources",
    difficulty: 1,
    scenario: "A new senior developer joined your team 3 weeks ago and is being onboarded onto an active 14-week project currently in Sprint 5. The rest of the team is heads-down on delivery. The new developer is taking longer than expected to get up to speed and has asked 3 other team members for help, slowing them down during a critical sprint.",
    quote: "\"Everyone was new once. The team just needs to help them out more.\"",
    options: [
      "Let the team handle onboarding organically. They know the codebase best.",
      "Move the new developer to documentation and non-sprint tasks until the project reaches a calmer phase.",
      "Push the new developer directly into sprint work immediately. Sink-or-swim accelerates learning.",
      "Assign one team member as a dedicated onboarding buddy for 2 weeks, accepting a short-term velocity dip."
    ],
    correct: 3,
    consequences: {"cash":0,"growth":5,"profitability":5,"customerTrust":0,"teamMorale":10,"executionRisk":-10,"strategicPosition":5},
    explanation: "Assigning a dedicated onboarding buddy creates a clear, contained support structure. The new developer gets focused help, and the rest of the team is protected from ad-hoc interruptions. A 2-week investment in proper onboarding produces a productive team member for the remaining 9 weeks. Organic onboarding during a critical sprint distributes the cost across the whole team unpredictably.",
    framework: "Structured Mid-Project Onboarding — new team members joining active projects need a named buddy, a clear ramp plan, and protected time. Organic onboarding during a crunch is the most disruptive approach.",
    principle: "Two weeks of structured onboarding costs less than 9 weeks of a developer who never fully ramped.",
    traps: [
      "Organic onboarding means 3-4 team members each lose 30-60 minutes daily to unstructured questions.",
      "Sink-or-swim in Sprint 5 of an active project produces errors, not learning.",
      "Keeping a senior developer on documentation for weeks wastes the hire and delays team capacity when you need it most."
    ]
  },
  {
    id: "TR14",
    category: "Team & Resources",
    difficulty: 3,
    scenario: "One of your developers is technically brilliant — your go-to person for the hardest architecture problems. But over the past 4 months, three team members have come to you separately to report that this developer is dismissive in code reviews, takes over others' tasks without being asked, and once told a junior developer their code was \"embarrassingly bad\" in a team standup.",
    quote: "\"They are too valuable technically to risk losing. Better to manage around the behavior.\"",
    options: [
      "Have a direct, private conversation: share the specific behaviors and their impact, set clear expectations, and put them on a 60-day behavioral improvement plan.",
      "Have the three reporting team members document their experiences in writing, share those statements with HR, and let HR lead the disciplinary process.",
      "Reassign this developer to lead an independent technical workstream — a solo architecture spike or R&D initiative — so their strengths are utilised without the friction points.",
      "Discuss the reported behavior privately with the developer, acknowledge their technical contribution, and coach them informally on communication style without documenting the conversation or setting formal expectations."
    ],
    correct: 0,
    consequences: {"cash":0,"growth":5,"profitability":0,"customerTrust":0,"teamMorale":20,"executionRisk":-10,"strategicPosition":10},
    explanation: "Technically brilliant people who harm team culture are a net negative once the morale cost is accounted for. But dismissal without a direct conversation is both legally risky and professionally unfair. A specific, documented conversation with a 60-day behavioral plan gives the individual a clear chance to change. Most people, when given specific behavioral feedback with real consequences, can adjust.",
    framework: "Behavioral Performance Management — technical performance and behavioral performance are both performance. Low technical performers get improvement plans. So do toxic high performers.",
    principle: "Managing around toxic behavior tells every other team member that brilliance buys immunity from accountability.",
    traps: [
      "Routing the issue through HR without a prior direct conversation means the developer receives formal HR action without ever hearing from their manager first — this is both procedurally unfair and tactically weaker than a documented direct conversation.",
      "Reassigning to a solo workstream removes the friction but rewards the behavior with a less accountable role — the team observes that dismissiveness earns autonomy, and the developer never receives feedback that their conduct was the problem.",
      "An informal coaching conversation without documentation or formal expectations gives the developer no clear understanding that their behaviour is a performance issue — if the behaviour continues, you have no documented basis for escalation and the three reporters feel their experiences were minimised."
    ]
  },
]
