export const CASES_CHRO8 = [
  {
    "id": "CHR-ER01",
    "category": "Employee Relations",
    "difficulty": 1,
    "scenario": "An employee comes to HR with a complaint: their manager has asked them to work weekends without additional pay, citing \"company needs.\" The employee is a salaried professional. There is no overtime or weekend work policy in the employee handbook. How do you respond to the complaint?",
    "options": [
      "Tell the employee that salaried professionals are generally expected to work hours necessary to complete their work, and that weekend work may be reasonable without additional pay.",
      "Ask the employee to document all weekend hours worked and submit them to HR for review before taking any action.",
      "Draft a weekend work policy with clear overtime provisions and eligibility thresholds, present it to the CEO for approval within the week, and communicate to the employee that HR is formalizing the policy before issuing any determination on their specific situation.",
      "Acknowledge the complaint, review the employee's contract and the applicable labor law provisions for salaried workers in the Philippines, meet with the manager to understand the business need, and follow up with the employee within 48 hours with clarity on what is required and what is not."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 7,
      "executionRisk": -6
    },
    "explanation": "The correct response to a complaint in a policy gap is to acknowledge it, investigate the facts (employment contract terms, applicable labor law, business context), and provide a clear, timely answer. In the Philippines, the Labor Code distinguishes between managerial and rank-and-file employees on overtime entitlement — the classification matters. The CHRO must also understand the manager's framing of \"company needs\": is this a recurring expectation or a one-time peak? Dismissing the complaint by citing salaried norms ignores the employee's right to clear information and may be factually wrong depending on classification. Stopping weekend requests immediately before investigation may create an operational disruption and preempts a resolution process. Asking for documentation before acknowledging the complaint signals a defensive posture rather than a fair process.",
    "framework": "Policy Gap Complaint Protocol — when a complaint surfaces in a policy gap, the CHRO's first obligation is clarity: determine what the law and contract require, then address both the business need and the employee's rights with specificity.",
    "principle": "Employees with complaints in policy gaps deserve an answer, not a deflection. The absence of a policy is not a defense — it is a gap the CHRO must close.",
    "traps": [
      "Citing salaried norms without checking the employee's labor classification assumes a conclusion that may be legally incorrect under Philippine Labor Code provisions.",
      "Prioritizing policy development over the live complaint leaves the employee without clarity for weeks — in the Philippines, an employer actively drafting overtime policy while a complaint is pending can be read as constructive acknowledgment of the violation, worsening the legal exposure rather than resolving it.",
      "Asking for documentation before acknowledging the complaint converts a legitimate inquiry into an audit of the employee, which is adversarial and damages trust."
    ]
  },
  {
    "id": "CHR-ER02",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "Two employees have filed informal complaints against each other: one alleges harassment, the other alleges false accusation and defamation. Both are high performers on the same team. Neither has indicated any intention to leave. You must conduct a fair investigation without destroying either employee's professional standing. How do you structure the process?",
    "options": [
      "Conduct a joint mediation session where both employees present their accounts simultaneously in a structured facilitation — this gives both parties equal voice and reduces the time investment of separate investigations.",
      "Meet informally with both employees together and get their buy-in on a \"mutual professionalism agreement\" — if both parties agree to move forward, close the complaint without formal investigation.",
      "Conduct two separate, sequential investigations led by HR with support from a neutral third party (external consultant or senior HR from another function) — interview each complainant, collect evidence independently, identify witnesses, and document findings before any joint action or resolution.",
      "Escalate to legal counsel immediately given the mutual complaint nature — treat both allegations as formal legal matters rather than HR investigations to protect the company from liability."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -7,
      "teamMorale": 6,
      "strategicPosition": 5
    },
    "explanation": "Mutual complaints require structured, parallel, independent investigations rather than shortcuts. The key design principles are: separating the two complainants throughout the process (each has a right to a fair hearing without the other's influence), maintaining confidentiality (each party does not learn what the other said during investigation), using a neutral third party to reduce perceived HR bias, and producing documented findings that can withstand scrutiny. A joint mediation session before investigation conflates fact-finding with resolution — harassment allegations require a factual determination before mediation is appropriate. A mutual professionalism agreement without investigation does not address the allegations and may constitute improper handling of a harassment complaint (regulatory risk). Immediate legal escalation removes HR from a situation it should be equipped to handle and creates a formally adversarial dynamic that is likely unnecessary.",
    "framework": "Mutual Complaint Investigation Protocol — when both parties have filed complaints, each complaint must be investigated independently on its own merits before any joint action. The investigation sequence should be: separate fact-finding → findings documented → resolution options evaluated → HR-led outcome with legal review if findings are substantiated.",
    "principle": "Mutual complaints are not symmetric — a harassment allegation and a defamation allegation require the same rigorous independent process, even if they feel like they cancel each other out.",
    "traps": [
      "Joint sessions before investigation give dominant or more articulate parties a structural advantage and can contaminate the witness accounts of colleagues who hear both sides together.",
      "A mutual agreement without findings leaves the harassment allegation unresolved, which is both a legal risk and an unfair outcome for the complaining employee if the allegation is substantiated.",
      "Immediate legal escalation is appropriate when findings reveal potential criminal conduct or regulatory breach — for an initial mutual complaint, it introduces adversarial framing that escalates rather than resolves."
    ]
  },
  {
    "id": "CHR-ER03",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "A manager reports that a direct report has been posting about work frustrations on a public social media account. The posts do not reveal confidential information but are critical of the company culture and name specific colleagues. HR has no social media policy. The manager wants HR to instruct the employee to stop. How do you respond?",
    "options": [
      "Instruct the employee to remove the posts and stop making public comments about the company — protecting the company's reputation is a reasonable employment expectation even without a written policy.",
      "Decline to take disciplinary action given the absence of a policy, but use this case as the trigger to draft a social media policy. Simultaneously, meet with the employee to understand their concerns and address the underlying issue.",
      "Schedule a meeting with the employee to discuss the impact of the posts on named colleagues (who may have a separate interpersonal grievance claim) and explore whether there are underlying issues that HR can address, while making clear what a future social media policy will require — then proceed to develop the policy.",
      "Forward the posts to legal counsel and wait for a legal opinion before engaging with the manager or employee, since this involves potential defamation of named colleagues."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 7,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "The most complete response addresses three simultaneous problems: the employee's conduct, the impact on named colleagues, and the absence of a policy. Meeting with the employee gives HR the chance to understand what's driving the behavior — in most cases, public social media complaints are a symptom of an unaddressed grievance. Naming colleagues creates a separate potential harassment or defamation issue for those individuals, which HR has an obligation to consider independently. Using the conversation to preview what a social media policy will require sets expectations without issuing a disciplinary action that may be legally unsustainable without a policy. Simply refusing action ignores the impact on named colleagues. Immediately instructing removal may be legally problematic (in some jurisdictions employee speech is protected even if HR dislikes it) and does not address the root cause. Legal escalation for an initial social media complaint is disproportionate and delays an employee relations response that should happen promptly.",
    "framework": "Social Media Complaint Response — employee social media conduct requires a three-part response: (1) understand the root grievance, (2) assess harm to specific parties (named colleagues), and (3) use the incident to develop a prospective policy rather than creating a new rule retroactively to punish the behavior.",
    "principle": "When an employee makes their frustrations public, the social media post is the symptom. The HR response should address the grievance, not just the post.",
    "traps": [
      "Instructing removal without a policy basis may constitute improper restriction of employee expression, particularly if the posts discuss workplace conditions (which are often protected subjects).",
      "Declining action entirely ignores the impact on named colleagues who have not consented to being publicly discussed.",
      "Legal escalation for reputational rather than evidentiary reasons delays a timely human conversation and treats a manageable employee relations situation as a litigation risk prematurely."
    ]
  },
  {
    "id": "CHR-ER04",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "An employee (age 52, with 7 years of tenure) files a formal grievance alleging they were passed over for promotion in favor of a 29-year-old with 5 years of tenure. The selection was based on a leadership assessment. You must conduct an investigation. How do you proceed?",
    "options": [
      "Review the leadership assessment methodology and scoring for both candidates, interview the decision-makers to document their selection rationale, request that the promotion decision-maker provide written justification, and assess whether age was a factor in the framing or weighting of the assessment.",
      "Conduct an independent demographic analysis of recent promotions at the company to determine if there is a systemic age-based pattern before examining this individual case.",
      "Interview both the complainant and the promoted employee to understand how each perceives the fairness of the process, then make a recommendation based on both accounts.",
      "Review only the complainant's performance record and the assessment results — if the promoted employee scored higher on the assessment, close the investigation without further review."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -8,
      "strategicPosition": 7,
      "teamMorale": 6
    },
    "explanation": "An age discrimination grievance requires a rigorous process investigation, not a performance comparison. The correct approach examines the instrument and process: Was the leadership assessment valid and consistently applied? Were the criteria established before candidates were evaluated? Did the decision-maker's framing of the assessment include any age-related language or assumptions (e.g., \"energy,\" \"adaptability,\" \"long-term potential\")? These are the questions that determine whether discrimination occurred. A company-wide demographic analysis is useful for systemic analysis but does not address the individual grievance — it is an optional supplement, not a substitute. Interviewing both candidates gives the CHRO a narrative comparison but not a process audit — the investigation must examine the decision, not the outcome. Reviewing only the scores and closing the case misses the entire class of discriminatory practice that works through assessment design or application bias, not through explicit statements.",
    "framework": "Discrimination Grievance Protocol — the investigation of a discrimination complaint must examine the process through which the decision was made, not simply compare outcomes. Bias can operate through instrument design, criteria application, and decision-maker framing — none of which show up in a score comparison.",
    "principle": "A fair outcome in a biased process is not proof of non-discrimination. The investigation must examine the process, not just validate the result.",
    "traps": [
      "Leading with a demographic analysis converts an individual grievance into a systemic investigation before the individual case has been examined — it may be perceived as delaying a direct response.",
      "Interviewing both candidates introduces a comparison dynamic that disadvantages the complainant (who must argue against an actual promotion decision) and makes the investigation feel more like a contest than a process audit.",
      "Closing the case because the scores favor the promoted employee ignores that the complaint is about whether the scoring instrument or its application was free from age bias."
    ]
  },
  {
    "id": "CHR-ER05",
    "category": "Employee Relations",
    "difficulty": 3,
    "scenario": "A VP has been informally \"managing out\" a direct report by progressively removing responsibilities, excluding them from key meetings, and assigning them low-visibility work. The employee has noticed and filed a complaint. The VP denies any intent and characterizes the changes as \"role evolution.\" You believe the VP is acting in bad faith but the behavior is subtle and circumstantial. How do you handle this?",
    "options": [
      "Document the pattern of role changes in the HR file as background context for future reference, and schedule a quarterly touchpoint with the employee to monitor their engagement level — maintaining a passive observation posture while the evidence base develops before any escalation.",
      "Document a detailed timeline of the role changes (responsibilities removed, meetings excluded from, task assignments) with dates and witnesses, and present this to the VP and their manager (the CEO) as a pattern that requires explanation — without pre-judging intent, but making clear that the pattern is visible and under review.",
      "Put the VP on a formal behavioral improvement plan for management conduct and require them to restore the employee's responsibilities pending the outcome of the investigation.",
      "Advise the employee that constructive dismissal through informal management-out behavior is a recognized legal risk and offer a severance package as a resolution to avoid a formal complaint."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -8,
      "teamMorale": 7,
      "strategicPosition": 6
    },
    "explanation": "The pattern of informal management-out behavior — even when each individual action is defensible — can constitute constructive dismissal under Philippine labor law if the cumulative effect makes the employee's continued employment substantially worse. The CHRO's role in this situation is to make the pattern visible and documented without prematurely adjudicating intent. Presenting a timeline to the VP and CEO serves two purposes: it creates a formal record that HR is aware of the pattern, and it creates accountability pressure on the VP to either explain the changes legitimately or stop the behavior. Advising the employee that nothing actionable has occurred dismisses a legitimate pattern signal and leaves the employee without protection. A formal VP behavioral improvement plan before the investigation is complete is procedurally premature and legally risky. Offering severance immediately converts the situation from a potential management misconduct case to a financial settlement, which rewards the VP's behavior and may invite similar patterns in the future.",
    "framework": "Constructive Dismissal Pattern Recognition — informal management-out behavior is legally actionable in the Philippines when it cumulatively degrades the employee's employment conditions. HR's intervention point is when the pattern becomes visible — not after the legal threshold is crossed.",
    "principle": "Management-out campaigns are designed to be individually defensible. The CHRO's job is to see the pattern, name it formally, and create accountability before the employee is forced out.",
    "traps": [
      "Monitoring without intervening allows the management-out pattern to continue — by the time the evidence base is 'sufficient,' the employee's working conditions may have deteriorated past the constructive dismissal threshold, and HR's documented passive awareness becomes part of the liability rather than part of the defense.",
      "A VP behavioral improvement plan before investigation findings are complete is procedurally incorrect and creates a legal basis for the VP to claim unfair treatment.",
      "An immediate severance offer resolves the immediate situation but signals to other managers that informal management-out behavior results in a paid resolution rather than accountability."
    ]
  },
  {
    "id": "CHR-ER06",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "During a performance review, a manager tells their direct report: \"To be honest, I'm not sure this company is the right fit for you long-term.\" The employee contacts HR afterward, saying they felt threatened with termination. The manager says they were being \"honest\" and \"transparent.\" How do you mediate and set the right standard?",
    "options": [
      "Side with the employee — the statement was inappropriate regardless of intent and should be treated as an implicit threat of termination, triggering a formal investigation.",
      "Dismiss the complaint — performance reviews include difficult conversations and the employee's interpretation is subjective. Encourage the employee to have a follow-up conversation with their manager directly.",
      "Advise the manager to issue a written clarification to the employee confirming that their employment is not under threat and that the comment was meant as developmental feedback.",
      "Meet separately with both the manager and employee to understand context and full exchange. If the statement was made without accompanying performance documentation or a formal PIP, coach the manager on appropriate performance communication language, document the conversation, and close the loop with the employee on what the statement did and did not mean."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 7,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "This situation requires a nuanced mediation that validates the employee's experience, corrects the manager's communication, and clarifies the company's standards for performance conversations — without converting a management communication error into a formal disciplinary action against the manager. Separate conversations allow each party to speak freely. If the statement was made without prior documented performance concerns, a PIP, or HR involvement, it was an unstructured personal opinion in a formal HR process — which is both procedurally incorrect and damaging to the employee. Coaching the manager on performance communication standards and documenting the interaction protects both parties. Treating it as an implicit termination threat and launching a formal investigation may be disproportionate if the full context does not support that reading. A written clarification from the manager is better than nothing but may feel like the company is managing optics rather than addressing the communication standard failure. Dismissing the complaint ignores the employee's right to a safe performance process and validates a management communication practice the company should not want to become normative.",
    "framework": "Performance Conversation Standards — performance reviews are formal HR processes with specific procedural requirements. Managers do not have the authority to make employability statements outside of a documented performance process, regardless of their intent.",
    "principle": "A manager's \"honest\" opinion in a formal review is not a substitute for documented performance feedback. Coaching on the standard is the right response; ignoring the impact is not.",
    "traps": [
      "Formal investigation for a single ambiguous statement may be disproportionate and can be perceived by the manager as punitive for a mistake that coaching can address.",
      "A written clarification letter from the manager treats the incident as a PR problem rather than a communication standards problem — it may reassure the employee without changing the manager's behavior.",
      "Dismissing the complaint validates the manager's communication approach and tells employees that subjective statements about their long-term fit have no consequences."
    ]
  },
  {
    "id": "CHR-ER07",
    "category": "Employee Relations",
    "difficulty": 3,
    "scenario": "An anonymous whistleblower complaint alleges that the VP Finance has been approving personal expenses as business entertainment — specifically business-class flights claimed as client entertainment, totaling approximately $3,200 over 6 months. The amounts are individually small but the pattern is suspicious. The VP Finance is well-regarded by the CEO and has been with the company for 4 years. How do you handle the investigation?",
    "options": [
      "Bring the complaint directly to the CEO and let them decide how to proceed — the VP Finance reports to the CEO and the CHRO should not independently investigate a VP without CEO authorization.",
      "Conduct a preliminary internal review of the specific expenses cited, verify the supporting documentation, and determine whether the pattern is substantiated before escalating to the CEO or board — protecting both the complainant's anonymity and the subject's right not to be prejudged.",
      "Engage the audit committee or board representative (if available) and external legal counsel to conduct an independent review of the VP Finance's expense approvals over the period in question, without alerting the CEO or VP Finance until the review has produced initial findings.",
      "Dismiss the complaint as low-value — $3,200 over 6 months is not material for a company of this size, and the anonymous nature of the complaint makes it less credible."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -9,
      "strategicPosition": 8,
      "customerTrust": 5
    },
    "explanation": "A whistleblower complaint about financial misconduct by a finance executive requires independent oversight — it cannot be investigated by a process that the accused can influence or that involves the CEO who has a close relationship with the accused. Engaging an audit committee or board representative and external legal counsel is the correct escalation path because it protects the integrity of the investigation, protects the CHRO from being placed in an impossible position (investigating a peer or superior with the CEO as the judge), and ensures the outcome is legally defensible. Bringing it directly to the CEO first is problematic when the CEO has a close relationship with the subject — it risks the investigation being stopped before it starts. Internal preliminary review is reasonable for low-stakes operational complaints but is insufficient for a financial integrity allegation against a VP. Dismissing based on materiality misunderstands whistleblower complaints — the value of the conduct is not the test; the pattern and policy compliance are.",
    "framework": "Financial Misconduct Investigation Governance — allegations of financial misconduct against senior finance executives require governance-level oversight, not operational HR investigation. The credibility of the outcome depends on the independence of the process from the subject and their reporting line.",
    "principle": "When the subject of a financial misconduct complaint has a close relationship with the person who would normally authorize the investigation, the investigation must bypass that relationship entirely.",
    "traps": [
      "Bringing the complaint to the CEO first when the CEO and VP Finance are closely allied may result in the investigation being redirected, minimized, or stopped before the facts are established.",
      "Internal preliminary review by HR of finance expense records places CHRO in the role of forensic auditor and creates a chain of custody problem — CHRO is not equipped to independently certify financial records.",
      "Materiality dismissal fails to recognize that expense fraud is a pattern problem, not a value problem — $3,200 discovered in a preliminary review often indicates a larger pattern that has not yet been examined."
    ]
  },
  {
    "id": "CHR-ER08",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "An employee is on a medically approved leave and is due to return in 2 weeks. Their team has been struggling without them. The employee's manager contacts HR asking whether there is a way to \"transition them out\" during the leave period. The employee's condition is a protected medical situation under employment law. How do you advise the manager?",
    "options": [
      "Tell the manager that transitioning an employee during a medically approved leave is legally prohibited and explain the return-to-work obligations the company has, including maintaining the employee's role or a comparable one.",
      "Advise the manager that while termination during leave is not permitted, they can begin a performance documentation process now so that any performance-related concerns are on record before the employee returns.",
      "Suggest that the manager have a candid conversation with the employee by phone during the leave period to explore whether the employee would be open to a mutual separation agreement with a severance package.",
      "Escalate to legal counsel immediately and remove the manager from any further communication with the employee for the remainder of the leave."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -9,
      "teamMorale": 6,
      "strategicPosition": 5
    },
    "explanation": "The CHRO's response to a request to \"transition out\" an employee on medical leave must be clear, direct, and legally grounded. Under Philippine labor law, terminating or constructively dismissing an employee on legitimate medical leave exposes the company to significant liability. The correct answer is to advise the manager that the question they are asking describes a legally prohibited action, explain the company's return-to-work obligations, and redirect the conversation to managing the team's capacity through legitimate means (temporary coverage, contract support). Starting a performance documentation process during medical leave is not protective — it creates a timeline that will look retaliatory in any future proceeding. Contacting the employee to explore mutual separation during leave is coercive and legally risky — employees on medical leave may not be in a position to make voluntary decisions without duress. Immediate legal escalation may be appropriate if the manager persists, but the first response should be clear advisory guidance, not removal.",
    "framework": "Protected Leave Employment Obligation — employers in the Philippines are required to maintain the employment relationship during approved medical leave and must provide a return path. Any action targeting the employment relationship during protected leave creates constructive dismissal exposure.",
    "principle": "When a manager asks how to end an employment relationship during protected leave, the CHRO's answer is: you cannot, and here is why.",
    "traps": [
      "Performance documentation initiated during medical leave creates a paper trail that courts and regulators read as preparation for a retaliatory termination — it is legally worse than no documentation.",
      "A \"voluntary\" mutual separation conversation initiated by the company during medical leave is not genuinely voluntary — the employee is in a vulnerable position and any agreement reached may be voidable.",
      "Immediate escalation to legal counsel without first advising the manager deprives the CHRO of the opportunity to provide direct guidance and may signal that every difficult manager question becomes a legal matter."
    ]
  },
  {
    "id": "CHR-ER09",
    "category": "Employee Relations",
    "difficulty": 2,
    "scenario": "Two direct reports of the same manager have had a personal conflict that has escalated into hostile communication over Slack — passive-aggressive comments, delayed responses on shared tasks, and a reported incident of a public dismissive remark during a team standup. Other team members are uncomfortable. The manager has not intervened, saying \"adults should handle their own conflicts.\" The behavior is disruptive but not illegal. How do you intervene?",
    "options": [
      "Advise the manager that their failure to intervene constitutes a management performance issue and issue a formal coaching memo. Request that the manager address the conflict directly in the next 5 business days.",
      "Contact the two conflicting employees directly to conduct individual HR conversations about the impact of their behavior on team performance and the company's conduct expectations, then meet with the manager to set expectations for their role in managing team dynamics going forward.",
      "Hold a facilitated three-way conversation with both employees and the manager present to surface the conflict openly and establish shared behavioral agreements.",
      "Refer the situation to the team's manager with a coaching guide on peer conflict facilitation and ask them to schedule a team retrospective to surface and address the interpersonal dynamics — treating HR's role as advisory to the manager rather than as a direct party in the intervention."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 8,
      "executionRisk": -5,
      "strategicPosition": 4
    },
    "explanation": "When a manager abdicates responsibility for an active team conflict, HR must intervene on two levels: with the conflicting employees and with the manager. Individual conversations with each employee allow HR to (a) name the behavior specifically (hostile Slack communication, public dismissive remarks), (b) connect it to company conduct expectations, and (c) understand each party's account without creating a confrontational joint session. The subsequent manager conversation sets the expectation that managing team interpersonal dynamics is part of the management role — HR is not a permanent substitute for it. Starting with a formal coaching memo to the manager escalates too quickly and converts a management development issue into a disciplinary one before coaching has been tried. A three-way facilitated session before individual conversations gives more powerful or more articulate parties a structural advantage and conflates the fact-gathering stage with the resolution stage. Waiting for further escalation allows the team environment to deteriorate and increases the probability of the conflict becoming a formal HR complaint or attrition.",
    "framework": "Team Conflict Intervention Sequence — HR intervention in team conflict follows a standard sequence: individual conversations to understand accounts, HR sets conduct expectations, then manager coaching to develop their conflict management capability. Skipping steps in either direction (too formal too early, or too passive too long) prolongs the conflict.",
    "principle": "A manager who says \"adults should handle their own conflicts\" is not modeling maturity — they are avoiding their job. HR intervention names the behavior and the standard, then returns ownership to the manager.",
    "traps": [
      "A formal coaching memo as the first management intervention converts a development conversation into a disciplinary record — this is appropriate for a repeated pattern, not a first instance.",
      "A facilitated three-way session before individual conversations puts both parties in the same room before HR knows the facts, giving the more forceful party a platform to dominate the narrative.",
      "Routing the intervention back through the manager who has already declined to act returns the resolution to the party who created the vacuum — the team will observe that HR's response to management abdication is to reinforce management's authority without addressing the behavior, which signals that HR will not intervene when managers opt out."
    ]
  },
  {
    "id": "CHR-ER10",
    "category": "Employee Relations",
    "difficulty": 3,
    "scenario": "Your company needs to reduce headcount by 10% (9 employees) due to a revenue shortfall. Legal has confirmed the process is permissible. The CEO wants to retain all high performers based on performance ratings, regardless of role criticality. You have run the numbers and this approach would disproportionately select out lower-rated employees who are predominantly from two protected demographic groups. The selection rationale is not explicitly discriminatory but the disparate impact is statistically significant. How do you advise?",
    "options": [
      "Implement the CEO's performance-based selection — it is an objective, defensible criterion and the intent is not discriminatory. Document the business rationale carefully.",
      "Present the CEO with the disparate impact analysis and recommend a selection methodology that weighs both performance and role criticality — identifying roles that are not essential to the recovery plan regardless of the performer's rating, and roles where the business cannot absorb the loss. Apply the selection criteria consistently and document all decisions with both dimensions visible.",
      "Refuse to proceed with the reduction until the selection methodology has been reviewed and cleared by external employment legal counsel for disparate impact risk.",
      "Implement the CEO's selection but add a hiring commitment for the affected demographic groups — pre-plan to hire from those groups in the next talent acquisition cycle to offset the demographic imbalance."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -9,
      "strategicPosition": 8,
      "teamMorale": 5,
      "growth": 4
    },
    "explanation": "A selection methodology that produces statistically significant disparate impact on protected groups is legally risky even when the criterion itself (performance ratings) appears neutral. The CHRO's obligation is to present the CEO with this risk analysis and propose an alternative selection approach that achieves the business objective (cost reduction) while materially reducing the disparate impact. A performance-and-criticality model is legally more defensible because it serves the business purpose directly — retaining roles essential to the recovery plan — rather than simply keeping the highest performers in roles that may not be needed. Implementing without challenge accepts a known legal risk and may expose the company to a collective discrimination claim. Waiting for legal clearance before any action delays a financially urgent process unnecessarily — the right move is to redesign the methodology and then proceed with a legal review of the new approach. Pre-committing to future diverse hiring does not cure a discriminatory selection methodology and is not legally recognized as an offset.",
    "framework": "Disparate Impact Analysis in Reduction-in-Force — when a selection methodology produces statistically significant adverse impact on a protected class, the employer must either justify the selection criterion as a bona fide occupational requirement or replace it with a methodology that achieves the business purpose with less discriminatory effect.",
    "principle": "The CEO's intent does not determine the legal test. A neutral criterion that produces disproportionate demographic impact triggers the same legal risk as explicit discrimination. The CHRO's job is to surface this before the selection is made.",
    "traps": [
      "Careful documentation of a legally risky decision creates a better paper trail for plaintiffs, not a better defense — documentation does not cure the legal problem of disparate impact.",
      "Delaying the entire reduction pending external legal clearance misframes the urgency — the CHRO should redesign the methodology and engage legal concurrently with the process, not sequentially.",
      "Future diversity hiring commitments as an offset for a reduction-in-force are not a legal defense and, if documented, can be used as evidence of awareness of the discriminatory effect without correction."
    ]
  }
]
