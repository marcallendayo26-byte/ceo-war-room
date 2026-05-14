export const CASES_CHRO6 = [
  {
    "id": "CHR-HO01",
    "category": "HR Operations",
    "difficulty": 1,
    "scenario": "During a routine HR audit in an employee's third month of employment, you discover that their employment contract lists a start date of March 1 while the offer letter states March 4. The employee actually started on March 4 and has been working normally since. The original contract has never been re-signed or corrected. What do you do?",
    "options": [
      "Do nothing — the employee started and has been working, so the practical relationship is established and there is no material harm.",
      "Issue a completely new employment contract with the correct start date, have the employee sign it, and replace the original document in the file.",
      "Issue a contract addendum or amendment that corrects the start date to March 4, have both parties sign it, and file it with the original contract. Document the discrepancy and correction in the HR file.",
      "Notify the employee verbally that the contract has a discrepancy and keep a note in the HR file, but hold off on formal correction until a legal review is completed."
    ],
    "correct": 2,
    "consequences": {
      "executionRisk": -8,
      "strategicPosition": 4
    },
    "explanation": "A signed contract addendum is the correct and proportionate response. It creates a clean paper trail that accurately reflects the employment relationship without the cost and complexity of reissuing a full contract. The discrepancy is a clerical error with no material consequences — the employee was paid from the correct date, has been working normally, and the legal relationship is not in dispute. Doing nothing leaves an unresolved inconsistency that could create ambiguity in a future dispute about tenure, benefits eligibility, or termination. Issuing a fully new contract is disproportionate for a one-date administrative error. Waiting for a legal review introduces unnecessary delay for a low-risk administrative correction.",
    "framework": "HR Records Accuracy Standard — employment records must reflect the actual terms of employment. Administrative discrepancies should be corrected promptly with a signed amendment rather than left unresolved or treated as requiring legal escalation.",
    "principle": "A clean HR file is not bureaucracy — it is the evidentiary record of the employment relationship. Small uncorrected discrepancies compound into legal exposure at the worst possible moment.",
    "traps": [
      "Treating a clean paper trail as optional because \"nothing bad happened\" assumes future disputes about tenure, notice periods, or benefits will not reference contract dates.",
      "Reissuing a full contract for a clerical error creates more administrative complexity than necessary and may unintentionally void or reset terms the employee relies on.",
      "Deferring to legal review for a single-date administrative error delays a simple correction and signals over-escalation habits that slow routine HR operations."
    ]
  },
  {
    "id": "CHR-HO02",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "Your HRIS is currently a collection of spreadsheets and manual processes. You are scaling from 90 to 150 employees over 12 months. This quarter alone you had 2 payroll errors and 3 delayed onboardings due to HR bandwidth constraints. Leave tracking is inconsistent across teams. Do you invest in HRIS software, hire a second HR ops person, or try to fix the spreadsheets?",
    "options": [
      "Hire a second HR ops person — the errors are a capacity problem, and a skilled person can manage the existing system better while you assess software needs.",
      "Fix and standardize the spreadsheet system with clear SOPs, ownership, and audit checklists — the current errors are process failures, not tool failures, and software will not fix a process problem.",
      "Run a 90-day parallel test: implement a basic HRIS for one department (Engineering) while the current system runs elsewhere — evaluate the error rate difference before committing.",
      "Implement an HRIS platform — at 90-150 employees the manual infrastructure is structurally failing. Software will reduce error rates, automate leave and onboarding workflows, and free up HR capacity for higher-value work. A second person alone will not solve the systemic problem."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -8,
      "growth": 6,
      "teamMorale": 5
    },
    "explanation": "At 90 employees heading toward 150, the spreadsheet HRIS has already passed its structural limit — payroll errors and delayed onboardings are not isolated incidents but predictable outputs of a manual system under scale pressure. Hiring a second person to operate a broken system adds cost without fixing the root cause; the same errors will recur with more volume. Fixing spreadsheets with better SOPs extends the life of an inherently fragile system — a process error in a formula, a manual entry missed, or a sick day from the person who holds institutional knowledge will produce the same failures. HRIS software at this stage addresses the root cause: it automates workflows, enforces data integrity, tracks leave consistently, and reduces the cognitive load that causes errors. A 90-day one-department pilot delays the solution while the error rate continues in a growing company.",
    "framework": "Infrastructure Before Headcount Rule — adding people to maintain a broken system scales the problem rather than solves it. At 90+ employees, HRIS is table-stakes infrastructure, not a nice-to-have.",
    "principle": "Manual HR systems fail predictably at scale. The question is not whether to implement software but how quickly, and the cost of delay is measured in errors and attrition risk.",
    "traps": [
      "Hiring a second ops person to manage spreadsheets treats a tool problem as a capacity problem — you will have two people making the same class of errors at higher volume.",
      "SOP-driven spreadsheet improvements are fragile because they rely on perfect human execution of a system with no enforcement mechanism.",
      "A one-department pilot introduces a two-system complexity (some employees on HRIS, others not) and delays company-wide consistency by months."
    ]
  },
  {
    "id": "CHR-HO03",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "Your Philippines-based company needs to hire 5 employees in Indonesia. Your options are: (A) set up a legal entity in Indonesia — a 3-4 month process costing $15,000+ in legal and registration fees; (B) use an Employer of Record (EOR) service at $400-600 per employee per month; or (C) hire them as independent contractors. These roles are full-time, ongoing positions requiring close operational integration. How do you structure the Indonesia hiring?",
    "options": [
      "Set up a legal entity — it is the most legally clean structure and lowers per-employee cost once the 5 roles are in place, with the setup cost amortized over time.",
      "Use an Employer of Record service — it enables compliant hiring immediately, avoids the 3-4 month entity setup delay, eliminates misclassification risk, and can be transitioned to a local entity later if the Indonesia operation grows.",
      "Hire as independent contractors — it is the fastest and cheapest option and allows you to assess the business case for Indonesia before committing to legal infrastructure.",
      "Hire 2 as EOR initially to validate the Indonesia roles, then set up the entity while the remaining 3 are onboarded through EOR once the entity is ready."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -7,
      "growth": 7,
      "cash": -4
    },
    "explanation": "EOR is the structurally correct choice for 5 full-time, operationally integrated roles in a new market. It provides immediate compliant employment (avoiding the 3-4 month entity timeline), eliminates misclassification risk (which the contractor option creates), handles local tax and benefits compliance, and preserves the option to establish a legal entity later if the business scales. The entity setup makes economic sense eventually but is premature for 5 roles — the $15K+ legal cost plus operational complexity of a foreign entity does not amortize efficiently at this headcount. Independent contractors for full-time, manager-directed roles is a misclassification risk under Indonesian labor law, which has strict employment regulations. The split approach (2 EOR now, entity for 3 later) adds unnecessary coordination complexity and delays full team onboarding.",
    "framework": "Market Entry HR Structure — for initial hires in a new market where the business commitment is provisional, EOR provides the highest ratio of compliance coverage to implementation speed. Entity setup is warranted when headcount justifies the fixed cost and operational permanence is confirmed.",
    "principle": "The cheapest hiring structure in a new market is the one that does not create a $50,000 misclassification liability six months later.",
    "traps": [
      "Entity setup math often looks favorable in a spreadsheet but ignores the 3-4 month ramp time during which the business is blocked from making hires.",
      "Contractor classification for full-time, manager-directed, dedicated roles in Indonesia is misclassification under Indonesian labor law regardless of what the contract says.",
      "Hybrid EOR/entity approaches during a 90-day window create two HR systems and two compliance frameworks that HR must manage simultaneously during a growth phase."
    ]
  },
  {
    "id": "CHR-HO04",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "You discover that 4 employees who have been classified as independent contractors for 12 months show all indicators of employee status: they work exclusively for your company, use company equipment, take direction from your managers on hours and work methods, and have no other clients. Legal counsel has flagged a misclassification risk that could require back taxes and benefits. How do you handle reclassification?",
    "options": [
      "Consult with legal counsel to assess the specific back-tax exposure, develop a reclassification plan with a realistic timeline (4-8 weeks), communicate directly with the 4 affected workers, and initiate the correction process proactively before any regulatory inquiry.",
      "Reclassify the 4 workers as employees immediately, calculate and pay any back contributions owed, and correct their contracts — transparency with regulators is the lowest-risk path.",
      "Restructure the contractor arrangements to reduce the indicia of employment — reduce hours concentration, change the contract language, and adjust billing structure — to make the classification more defensible without formal reclassification.",
      "Obtain written opinions from the 4 contractors affirming their independent status and preference for the contractor arrangement, and document this affirmatively in their files as a risk mitigation measure."
    ],
    "correct": 0,
    "consequences": {
      "executionRisk": -8,
      "teamMorale": 6,
      "cash": -5
    },
    "explanation": "When legal counsel flags a misclassification risk with clear indicia of employment, the correct response is proactive reclassification with legal guidance — not restructuring the fact pattern or seeking contractor consent. The consultation-led approach (option B) is better than immediate reclassification (option A) because the 4-8 week timeline with legal guidance ensures the back-tax calculation is accurate, the reclassification is correctly structured under Philippine labor law, and the communication with affected workers is handled appropriately. Restructuring the arrangements to reduce employment indicia after the fact attempts to cure a compliance problem by changing the appearance without changing the substance, which is legally riskier than the original misclassification. Contractor consent affirmations do not change the legal employment test — misclassification is assessed by the actual nature of the relationship, not by what both parties claim it is.",
    "framework": "Labor Misclassification Correction Protocol — when employment indicia are clear and legal counsel has flagged risk, proactive correction with proper back-calculation is both the legally correct and commercially rational path. The cost of voluntary correction is predictable; the cost of a regulatory finding is not.",
    "principle": "Misclassification is not cured by contract language or consent — it is a facts-and-circumstances test. Once the facts are clear, correction is the only defensible path.",
    "traps": [
      "Restructuring arrangements after a misclassification flag is discovered can look like evidence of awareness and intent to evade, which worsens the legal position if subsequently audited.",
      "Contractor consent forms are not legally meaningful for employment classification purposes and create a false sense of documentation coverage.",
      "Immediate reclassification without legal guidance on back contributions may result in incorrect calculations that create new compliance gaps."
    ]
  },
  {
    "id": "CHR-HO05",
    "category": "HR Operations",
    "difficulty": 3,
    "scenario": "A new data privacy law requires documented employee consent for HR data processing, a formal data retention policy, and a data subject access request (DSAR) process. The compliance deadline is 3 months away. Your HR team estimates 200 internal hours to build this from scratch. An external compliance consultant quotes $8,000 for a complete implementation package. Your internal HR capacity is already stretched. How do you proceed?",
    "options": [
      "Build internally — $8,000 is a significant expense for a small company, and the 200 hours can be distributed across the 3-month window at roughly 15 hours per week.",
      "Hire the compliance consultant — $8,000 for a compliant, audit-ready implementation is cost-effective compared to the regulatory fine exposure, the opportunity cost of 200 HR hours, and the quality risk of a first-time internal build.",
      "Hire the consultant for the policy framework and documentation templates ($4,000 scope), then implement and operationalize internally using the templates as a guide.",
      "Request a compliance extension from the regulatory authority and use the additional time to build internally, preserving budget."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -9,
      "cash": -4,
      "strategicPosition": 6
    },
    "explanation": "Data privacy compliance built by a first-time internal team under time pressure has a high error rate. The $8,000 consultant cost should be evaluated against three things: the regulatory fine exposure (typically multiples of $8,000), the opportunity cost of 200 hours of HR capacity in a team already stretched thin, and the quality risk of getting the DSAR process or consent framework wrong. At a 90-person company with a 3-month deadline and no prior experience with this regulatory framework, a consultant is the right call. The partial scope (option C) is a reasonable compromise but carries risk of implementation errors in exactly the high-stakes operational components. Regulatory extension requests are rarely granted for newly enacted laws with published effective dates and are an unreliable risk management strategy.",
    "framework": "Build vs. Buy for Compliance — when a compliance requirement is time-bounded, technically specialized, and carries regulatory fine exposure, the buy decision is evaluated against fine risk, not just implementation cost.",
    "principle": "Compliance is not the place to optimize for internal cost when the penalty for getting it wrong is a fine that dwarfs the consultant fee.",
    "traps": [
      "The 15-hour-per-week math assumes even distribution and no other competing priorities — in a stretched HR team, it will compress into the final 2 weeks and produce a rushed output.",
      "A policy framework without correct operationalization (especially DSAR response workflows) will fail an audit even if the documents look correct on paper.",
      "Regulatory extension requests introduce uncertainty into a compliance timeline and may not be granted, leaving the company in a worse position than if they had acted immediately."
    ]
  },
  {
    "id": "CHR-HO06",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "Your offboarding checklist includes revoking system access, collecting equipment, and conducting exit interviews. In the last 6 months, 3 employees left without completing the checklist — system access was revoked late in 2 cases and never revoked in 1. No breach occurred, but the risk exposure is clear. How do you fix the offboarding process?",
    "options": [
      "Retrain all managers on the offboarding checklist and add a confirmation step requiring manager sign-off that the checklist was completed before HR closes the departing employee's file.",
      "Issue a company-wide process reminder and add the completed offboarding checklist as a mandatory field in the HR file closure process, flagging files with incomplete checklists for quarterly audit.",
      "Implement a digital offboarding workflow in your HRIS that auto-assigns tasks to the relevant owners (HR, IT, manager) with deadline notifications and escalations if items are not completed.",
      "Move system access revocation out of the manager-dependent offboarding flow entirely — make it an automatic HR-IT trigger on the last day, independent of checklist completion, and keep the rest of the checklist for equipment and exit interview."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -9,
      "strategicPosition": 5
    },
    "explanation": "System access revocation is a security control, not an administrative nicety — its failure creates direct data exposure risk. Moving it out of the manager-checklist flow and making it an automatic HR-IT trigger on the last day eliminates the human failure mode entirely. This is the highest-priority fix because it addresses the highest-risk item (data security) with the most reliable mechanism (automation, not human action). Retraining managers on the checklist adds a step (sign-off) to a process that already had a step (checklist) which was not being followed — it does not change the underlying failure mode. A digital HRIS workflow is a good structural improvement but takes time to implement and may not be available for the current tool set. A company-wide reminder and audit flag is a process documentation improvement that does not prevent the next breach.",
    "framework": "Security-Critical Process Design — any control that prevents data exposure should not be dependent on human checklist adherence. The design principle is to automate security actions and keep discretionary steps for lower-risk activities.",
    "principle": "If your security process fails when a human forgets a step, the process is under-engineered. Security-critical actions should be automated triggers, not checklist items.",
    "traps": [
      "Manager sign-off adds accountability but does not change the failure mode — a manager who did not complete the checklist is unlikely to refuse to sign off on an incomplete file.",
      "An HRIS digital workflow is the right long-term investment but should be implemented after the immediate security gap is closed with an automated access trigger.",
      "Quarterly audits catch the problem after the exposure has already occurred — they are a reporting mechanism, not a prevention mechanism."
    ]
  },
  {
    "id": "CHR-HO07",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "An employee is returning from 3-month parental leave in two weeks. In their absence, their team was reorganized. Their role has been partially absorbed by colleagues, and the interim manager who covered their function has been made permanent. The returning employee was not informed of any of these changes before their return date. How do you handle their return?",
    "options": [
      "Meet with the new permanent manager first to confirm whether there is a role for the returning employee, and then contact the employee once that is clarified.",
      "Allow the employee to return normally and let their new manager walk them through the changes on their first day back — it is better to deliver context in person than over a call during their leave.",
      "Reach out to the returning employee immediately, before their return date, to inform them of the changes — role scope, team structure, and the management change — and schedule a meeting with HR and their new manager to clarify their updated role and expectations before day one back.",
      "Reach out to the returning employee before their return date to warn them there have been organizational changes, and offer to schedule a conversation after their return once they have had time to settle back in."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 8,
      "executionRisk": -7,
      "strategicPosition": 4
    },
    "explanation": "Returning from parental leave to discover your role has been restructured without notice is a significant trust and legal risk event. Informing the employee before their return date — with full transparency about what has changed — is both the ethically correct action and the legally prudent one. In many jurisdictions (and under Philippine labor practice), materially altering an employee's role without notice constitutes constructive dismissal if the employee objects. Proactive communication before the return gives the employee time to process the changes, ask questions, and arrive with context rather than discovering a disrupted situation on day one. Waiting until day one removes the employee's ability to prepare and can trigger an immediate emotional response in a high-stress setting. Confirming with the manager before contacting the employee treats the organization's convenience over the employee's right to timely information. A soft warning (\"there have been changes\") without specifics creates anxiety without resolution.",
    "framework": "Return-to-Work Transparency Standard — employees returning from protected leave have a right to full information about changes to their role and team before they return, not after. Information withheld until day one is a trust and legal liability.",
    "principle": "Parental leave return surprises are preventable. Preventing them is not a courtesy — in most jurisdictions it is a legal obligation.",
    "traps": [
      "The \"better in person\" instinct protects delivery comfort, not the employee — it is the company's discomfort with a difficult conversation that drives the delay, not the employee's interest.",
      "Waiting for role clarity before contacting the employee delays a conversation that may need to happen regardless of what the new manager decides.",
      "A vague heads-up without specifics is worse than no contact — it triggers anxiety without providing the information needed to respond to it."
    ]
  },
  {
    "id": "CHR-HO08",
    "category": "HR Operations",
    "difficulty": 3,
    "scenario": "Your 90-person company has no documented HR policies in four high-risk areas: workplace harassment, employee data handling, social media conduct, and conflict of interest. A new VP joins and asks for the policy handbook. When you escalate to the CEO, they say: \"We don't need bureaucracy — we're a startup.\" How do you make the case and prioritize what gets built?",
    "options": [
      "Accept the CEO's position for now and document the absence of policies in your risk register. When a specific incident arises that requires a policy, use that as the entry point to draft the relevant policy.",
      "Reframe the policy case for the CEO in risk terms rather than compliance terms: one harassment complaint without a written policy and process can result in a DOLE complaint, litigation, and management distraction that costs far more than a policy development exercise. Prioritize the two highest-risk policies (harassment and data handling) and present a 30-day delivery plan.",
      "Draft all four policies independently using standard templates, have legal review them, and present them to the CEO as a complete handbook — making the ask to approve rather than asking permission to start.",
      "Propose a policy development process that involves a cross-functional working group of team leads — this distributes the authorship, reduces the \"bureaucracy\" perception by making policies employee-generated, and accelerates adoption."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -9,
      "strategicPosition": 7,
      "teamMorale": 5
    },
    "explanation": "The CEO's \"no bureaucracy\" objection is about framing, not about substance. Reframing in risk terms — specifically the financial and operational cost of a harassment complaint without a policy — converts the conversation from a values debate (bureaucracy vs. agility) to a business risk calculation that the CEO can engage with. Prioritizing harassment and data handling first (the two highest-risk areas) makes the ask manageable rather than asking the CEO to approve four policies simultaneously. Documenting the absence and waiting for an incident is a reactive strategy that results in policy development under time pressure in the middle of an active complaint — the worst possible context for creating fair processes. Presenting a complete handbook without buy-in risks a flat rejection and no progress at all. A working group approach is constructive for long-term adoption but introduces a design-by-committee delay for compliance-urgent policies.",
    "framework": "Policy Sequencing by Risk Exposure — not all missing policies carry equal legal and financial risk. Harassment and data handling generate the most costly organizational incidents without policy coverage. Start there, build the case with risk math, and sequence the rest.",
    "principle": "The CEO will approve the policies they refused to build once they understand the price tag of not having them. Present the cost of absence, not the content of compliance.",
    "traps": [
      "Accepting the CEO's position and waiting for an incident guarantees the policy gets written in the worst circumstances — during an active complaint with legal, regulator, and employee pressure.",
      "Presenting a complete handbook as a fait accompli may work once but signals that HR circumvents rather than influences leadership, which damages your credibility for future initiatives.",
      "A working group is well-suited for values documents and culture work, but harassment and data handling policies require legal precision that group authorship may dilute."
    ]
  },
  {
    "id": "CHR-HO09",
    "category": "HR Operations",
    "difficulty": 2,
    "scenario": "Monthly payroll processing takes 2 full days of manual work. In the last 3 months there were 3 payroll errors: 2 underpayments and 1 overpayment (recovered). An automated payroll system costs $800 per month. The CEO sees this as unnecessary overhead because \"we're not big enough yet.\" How do you make the case for the investment?",
    "options": [
      "Accept the CEO's position and focus on improving the manual process with better checklists and a second-reviewer step to reduce errors without additional cost.",
      "Escalate to the CFO rather than the CEO, framing the errors as a financial controls issue rather than an HR efficiency issue, and let the CFO make the recommendation.",
      "Propose automating only the most error-prone components (tax computation, leave deduction) while keeping payroll entry manual, to reduce cost while addressing the highest-risk steps.",
      "Build a cost-benefit case: 2 payroll days per month = approximately 16 hours of HR time at fully-loaded cost; 3 errors in 3 months is a trajectory that will worsen as headcount grows; and the $800/month cost should be compared to the HR time cost plus the legal and trust cost of payroll errors — present this to the CEO as a financial decision, not an HR request."
    ],
    "correct": 3,
    "consequences": {
      "executionRisk": -7,
      "cash": -3,
      "growth": 5,
      "teamMorale": 5
    },
    "explanation": "The CEO's objection is based on a perceived size threshold that does not map to the actual risk profile. The CHRO's move is to reframe the decision in financial terms the CEO already understands. Sixteen hours of HR time per month at a conservative loaded cost is not trivial. Three payroll errors in three months is not a rounding issue — underpaid employees lose trust in HR and payroll accuracy, and the trajectory only worsens with growth. At $800/month, the system pays back within 1-2 months in recovered HR time alone, before accounting for error liability. The dual-reviewer manual process is an improvement but does not eliminate the structural error probability in a manual system. Partial automation is technically complex and still leaves manual entry steps that generate errors. Escalating to the CFO may produce the right outcome but uses a political workaround that can damage the CEO-CHRO relationship.",
    "framework": "HR Technology ROI Framing — convert the \"is it worth it\" decision into a time-and-error-cost calculation. The question is not \"are we big enough for automation\" but \"is the cost of not automating less than $800/month\"?",
    "principle": "Payroll errors are not just an HR problem — they are an employee trust problem. Once an employee is underpaid, they watch every payslip. That loss of trust does not show up on a balance sheet.",
    "traps": [
      "Adding a second reviewer to a manual process halves the error rate in theory but doubles the labor cost of payroll processing, often making the cost argument for automation stronger, not weaker.",
      "Partial automation that requires manual data entry at any step retains the same error class (manual entry errors) that produces most payroll mistakes.",
      "Using the CFO as leverage creates an ally but signals that HR cannot build a business case directly to the CEO — this is a pattern to avoid for credibility reasons."
    ]
  },
  {
    "id": "CHR-HO10",
    "category": "HR Operations",
    "difficulty": 3,
    "scenario": "Your company is under a labor authority compliance audit triggered by a former employee's complaint of unpaid overtime and improper termination. HR records are incomplete — several performance records and correspondence files are missing. Legal counsel was engaged this morning. The auditors are expected in 10 days. How do you manage the process?",
    "options": [
      "Work with legal counsel to reconstruct missing records using manager recollections, email archives, and system logs, then present the most complete picture possible to the auditors.",
      "Immediately conduct a full HR records audit to determine exactly what is and is not available, provide legal counsel with a complete picture of the gaps, then let legal counsel lead the audit response strategy — including what to proactively disclose to auditors and how.",
      "Focus on producing documentation that addresses the specific claims (overtime payment records and the termination process) and brief the CEO and relevant managers to prepare their accounts before the audit.",
      "Request a 30-day extension from the labor authority to allow time for records reconstruction and legal preparation."
    ],
    "correct": 1,
    "consequences": {
      "executionRisk": -9,
      "strategicPosition": 5,
      "cash": -4
    },
    "explanation": "When legal counsel is engaged and a regulatory audit is imminent, the CHRO's role is to support the legal strategy, not to lead it. The first action is a complete records audit — not to reconstruct documents but to give legal counsel a factually accurate picture of what exists and what is missing. Legal counsel needs this to determine the disclosure strategy, which must be honest about gaps. Attempting to reconstruct missing records, even from legitimate sources (email archives, manager recollections), carries significant risk if the reconstruction is later characterized as document preparation during an active audit. Focusing only on the complaint-specific records without giving legal counsel a full picture creates additional exposure if the audit expands in scope. Requesting an extension may be appropriate on legal counsel's advice, but it should be legal counsel making that recommendation, not HR acting unilaterally.",
    "framework": "Audit Response Protocol — in any regulatory audit proceeding where legal counsel is engaged, HR's role is to provide complete factual information to legal and execute the legal team's strategy. HR should not make disclosure, reconstruction, or strategy decisions independently.",
    "principle": "During a live audit, the worst outcomes come from HR trying to manage the legal strategy rather than supporting it. Know your role and execute it cleanly.",
    "traps": [
      "Record reconstruction from memory and secondary sources during an active audit can be characterized as document fabrication, which is a materially worse legal position than incomplete records.",
      "Briefing managers to prepare their accounts without legal oversight creates aligned narratives that may contradict other evidence and expose the company to obstruction claims.",
      "Unilateral extension requests from HR without legal counsel guidance may not be permissible under the audit process and could be seen as non-cooperation."
    ]
  }
]
