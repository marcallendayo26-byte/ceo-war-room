export const CASES_CSM2 = [
  {
    id: "CSM-CP01",
    category: "Churn Prevention",
    difficulty: 2,
    scenario: "Your health score dashboard shows a customer has dropped from 'healthy' to 'at-risk' over the past 30 days — declining login frequency, an open support ticket that's been unresolved for 2 weeks, and no engagement with your last 3 QBR invites. The renewal is in 4 months. What's your immediate response?",
    quote: "A health score that drops silently is a churn signal that's asking to be heard.",
    options: [
      "Call your primary contact immediately and ask directly: 'I've noticed some changes in your engagement — is everything okay with the project?'",
      "Send a detailed check-in email summarizing the health signals you've observed and asking them to schedule a call to discuss — give them a week to respond before following up.",
      "Escalate to your VP and have them call the economic buyer to check in.",
      "Resolve the support ticket first, then reach out — fix the visible problem before the call."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-9,"growth":5},
    explanation: "A combined signal of declining usage, unresolved support issue, and ignored QBR invites is a strong churn indicator that requires immediate direct action. A phone call — not an email — is the right medium. The goal is to have an honest conversation: are they dissatisfied? Has something changed internally? Is there a blocker you don't know about? An email is too easy to ignore. Executive escalation before you've tried yourself bypasses the relationship. Fixing the support ticket first is fine to do in parallel, but it doesn't substitute for the conversation.",
    framework: "At-Risk Account Response: multi-signal health drops require phone calls, not emails.",
    principle: "The conversation you avoid with an at-risk account is the conversation you'll have at renewal — when it's too late.",
    traps: [
      "Detailed health-signal email — you're surfacing the alarming data in writing before having a conversation, which gives a disengaged contact a chance to go further dark or craft a defensive response rather than having an honest exchange",
      "Executive escalation before your own outreach — skips your ownership of the relationship",
      "Support ticket first — fix it in parallel, but the relationship conversation can't wait"
    ]
  },
  {
    id: "CSM-CP02",
    category: "Churn Prevention",
    difficulty: 3,
    scenario: "A customer tells you directly: 'We're going to evaluate our options at renewal and we're not certain we'll stay.' They don't cite a specific problem — just a general sense that they 'want to see what else is out there.' Renewal is in 6 months. What's your strategy?",
    quote: "'Shopping around' without a stated reason is a trust deficit looking for language.",
    options: [
      "Immediately offer a discount to pre-empt the competitive evaluation.",
      "Ask what's driving the desire to evaluate — and listen deeply before proposing any action.",
      "Propose a formal executive business review to reinforce value delivered since the start.",
      "Prepare a detailed competitive battlecard comparing your platform against likely alternatives and share it proactively so the customer is evaluating on accurate information."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-8,"growth":4},
    explanation: "Customers who say they want to 'see what else is out there' without citing a specific problem almost always have an underlying concern they haven't yet articulated — dissatisfaction with support, a growing product gap, a relationship that's gone stale, or an internal champion who's lost political capital. Before taking any action, understand the real signal. A discount offer before understanding the problem is premature and often signals desperation. An EBR is useful but should come after you understand what's driving the exploration, not as a reflexive value demonstration.",
    framework: "Churn Diagnosis: vague renewal uncertainty requires investigative curiosity before any intervention.",
    principle: "You can't solve a problem you haven't diagnosed.",
    traps: [
      "Immediate discount — rewards stated intent to shop around, signals you were overpriced",
      "EBR as the first move — leading with value demonstration before understanding the concern misses the root cause",
      "Competitive battlecard before discovery — you're assuming price and features are the decision criteria when the real driver may be a relationship gap or a product fit issue that no battlecard addresses"
    ]
  },
  {
    id: "CSM-CP03",
    category: "Churn Prevention",
    difficulty: 2,
    scenario: "A customer is unhappy and has submitted a formal escalation through your support system. While investigating, you discover the root cause is a miscommunication from the sales process — they were told a feature existed that currently doesn't. You have a product update meeting this week. What do you do?",
    quote: "A gap between what was promised and what was delivered is a company problem — own it fully.",
    options: [
      "Explain the miscommunication to the customer and point to the sales process as the cause.",
      "Contact the customer today to acknowledge the escalation and let them know you're actively investigating — then wait for the product update meeting before sharing details so you have something concrete to offer.",
      "Acknowledge the gap fully to the customer, apologize on behalf of the company, share what you can commit to, and escalate internally to prevent it from happening again.",
      "Offer a credit or discount as compensation for the missing feature."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":4},
    explanation: "When a customer was misled — even unintentionally — the right response is full ownership and immediate transparency, not deflection toward the sales team. Customers don't care about internal organizational fault lines. Acknowledge the gap, apologize sincerely, be clear about what you can and can't commit to going forward, and escalate internally to fix the process. Waiting for the product update is the wrong order — the customer needs to hear from you now. A discount can be part of the resolution but shouldn't be the opening move before the honest conversation.",
    framework: "Service Recovery: full ownership + immediate transparency + internal escalation.",
    principle: "Who created the problem is internal. Who owns solving it is always you.",
    traps: [
      "Pointing to sales as the cause — the customer doesn't care about your org chart",
      "Acknowledge-then-wait approach — the customer interprets 'I'm investigating, more soon' as the beginning of a delay pattern; without the acknowledgment of the root cause and an apology, you've bought time but not trust",
      "Discount as the first response — skips the acknowledgment that's actually what rebuilds trust"
    ]
  },
  {
    id: "CSM-CP04",
    category: "Churn Prevention",
    difficulty: 3,
    scenario: "You manage 40 accounts. Your at-risk customer signals are multiplying — you have 7 accounts showing yellow or red health scores. You don't have capacity to manage all 7 deeply. How do you prioritize?",
    quote: "Triage isn't neglect — it's the only way to save what can be saved.",
    options: [
      "Spend equal time on all 7 — every at-risk account deserves equal attention.",
      "Address the ones with the most visible complaints first — squeaky wheel gets the grease.",
      "Request a team meeting with your manager to review all 7 accounts together, document the risk factors for each, and build a joint prioritization framework before committing to any outreach.",
      "Prioritize by ARR and strategic value — focus deep work on the highest-value accounts first."
    ],
    correct: 3,
    consequences: {"executionRisk":-8,"growth":6,"strategicPosition":6},
    explanation: "When at-risk capacity exceeds bandwidth, triage by business impact is the right framework. Highest ARR and strategic value (reference potential, logo value, expansion potential) should determine depth of engagement. This isn't abandoning lower-value accounts — it's allocating your best effort where the financial and strategic consequences of churn are greatest. Equal effort on all 7 means no one gets the deep attention needed to actually turn. Loudest-complaint prioritization is reactive and often benefits lower-value accounts with more demanding contacts.",
    framework: "At-Risk Triage: prioritize by impact, not by noise or equality.",
    principle: "Not all churn is equal. Prevent the churn that matters most, most deeply.",
    traps: [
      "Equal effort across 7 — diluted attention helps nobody enough to actually turn",
      "Planning meeting before outreach — a 90-minute framework discussion while 7 accounts drift further at-risk is prioritizing process over urgency; you can triage and begin outreach today, then align with your manager",
      "Squeaky wheel prioritization — rewards the loudest, not the most strategically important"
    ]
  },
  {
    id: "CSM-CP05",
    category: "Churn Prevention",
    difficulty: 2,
    scenario: "A customer's internal champion emails to tell you they're leaving the company. They've been your main advocate and have facilitated every renewal. The new contact is unknown to you and hasn't responded to your outreach yet. Renewal is in 3 months. What's your immediate strategy?",
    quote: "When your champion leaves, your account relationship leaves with them unless you act immediately.",
    options: [
      "Ask your departing champion for an introduction to the new contact and any handover context before they leave.",
      "Send the new contact a detailed welcome email with a summary of the account history, key milestones, and a proposed agenda for your first call — give them 3 business days to respond before following up.",
      "Escalate to the economic buyer directly — don't wait for the new contact to settle in.",
      "Forward the renewal documents to the new contact with a cover note explaining the timeline and key terms — let the contract review process create the natural first touchpoint for the relationship."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-9,"strategicPosition":6},
    explanation: "Your departing champion is the most valuable asset you have in this moment. They can introduce you to the new contact, brief them on the relationship, transfer context about why they bought and what value they've experienced, and ideally set you up for a warm handover rather than a cold outreach. Once they're gone, that channel closes. Act while they're still at the company. Direct executive escalation before a warm intro attempt is skipping the richest available path. Waiting for the new contact to engage and treating renewal as mechanical ignores the relationship gap that will make renewal a cold negotiation.",
    framework: "Champion Transition: leverage the departing relationship to build the new one.",
    principle: "Your best advocate's last gift to you is their introduction.",
    traps: [
      "Detailed welcome email without warm intro — you're asking a stranger to self-onboard into a complex account history with no advocate; without the departing champion's endorsement, the email reads as vendor outreach and gets deprioritized",
      "Direct executive outreach before warm intro attempt — potentially impolitic if the executive wasn't in the previous relationship",
      "Contract-as-first-contact — the new contact's first meaningful interaction with you is a document that requires their signature, which positions the relationship as transactional before it's personal"
    ]
  },
  {
    id: "CSM-CP06",
    category: "Churn Prevention",
    difficulty: 1,
    scenario: "Your company's product roadmap just shifted and a feature your customer was counting on for Q3 has been pushed to Q1 next year. The customer has built workflows around the assumption this feature would be available. Their renewal is in Q4. How do you deliver this news?",
    quote: "Bad product news delivered with a plan is survivable. Bad product news delivered late is not.",
    options: [
      "Proactively reach out to brief the customer but frame the roadmap shift as a temporary re-sequencing — emphasize that the feature is still committed and ask them to document their specific use case so the product team can prioritize the Q1 build accordingly.",
      "Deliver the news proactively, explain the business impact as you understand it, and present workaround options or interim solutions.",
      "Have your product manager explain the roadmap change directly — it's their decision.",
      "Offer a discount at renewal to offset the roadmap miss."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":4},
    explanation: "Proactive delivery of bad product news — with workarounds and empathy — is the only approach that preserves trust. Waiting for them to discover it removes your opportunity to frame it constructively and lets them experience it as a surprise at the worst possible time (Q3 is now, renewal is Q4). Routing through the product manager signals you're hiding behind someone else. A discount at renewal is useful context but can't be the opening move — you need the honest conversation first, then discuss what's fair commercially.",
    framework: "Proactive Delivery: every piece of bad product news has a window where it can be constructively managed.",
    principle: "The news you delay is always worse when it arrives on its own.",
    traps: [
      "Re-sequencing spin without workaround plan — framing the delay as a 'temporary re-sequencing' without addressing the Q3 workflow impact the customer has already built is transparent minimization; the customer knows they've already committed to this feature and needs a bridge solution, not a messaging reframe",
      "Product manager routing — customer deserves their CSM to own the conversation",
      "Discount-led response — compensation without acknowledgment feels dismissive"
    ]
  },
  {
    id: "CSM-CP07",
    category: "Churn Prevention",
    difficulty: 3,
    scenario: "A customer is actively evaluating your competitor. Your champion tells you they have a formal RFP underway. You've delivered strong results — 23% efficiency gains documented. The primary driver seems to be price, though the champion hints there may also be a product gap in a newer use case. What's your retention strategy?",
    quote: "Retention is won by addressing what they're actually moving toward, not just away from.",
    options: [
      "Lead with your documented ROI — 23% efficiency gains should be decisive.",
      "Match the competitor's pricing immediately to remove the price objection.",
      "Have a frank conversation: understand both the price gap and the product gap, quantify the total cost of switching, and present a targeted retention offer.",
      "Escalate to your executive team to make a strong relationship-based case."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"profitability":5,"strategicPosition":7},
    explanation: "A retention strategy that only addresses one dimension of a two-dimensional problem loses. You need to understand both the price gap and the product gap, quantify them honestly, and then present a retention offer that addresses the actual decision criteria. The total cost of switching (migration, integration rebuild, retraining, risk) is often much higher than the price delta — and that's a powerful argument when quantified. Your ROI data is important evidence but not sufficient if there's a product gap that's driving evaluation. Immediate price matching without understanding the full picture gives away margin without addressing the product concern.",
    framework: "Multi-Dimensional Retention: diagnose all churn drivers before designing the retention offer.",
    principle: "Match the retention offer to the real decision, not the stated one.",
    traps: [
      "ROI-only strategy — ignores the product gap signal that may be the real driver",
      "Immediate price match — gives away margin without understanding if price is actually the primary issue",
      "Executive relationship play — powerful but insufficient if the product gap is real and unaddressed"
    ]
  },
  {
    id: "CSM-CP08",
    category: "Churn Prevention",
    difficulty: 2,
    scenario: "You've been working hard on a difficult at-risk account for 3 months. You've resolved the support backlog, improved adoption by 18%, and reconnected the executive relationship. The renewal conversation starts next week. But the customer still says they want to 'keep their options open.' What's your read and next step?",
    quote: "Operational fixes earn satisfaction. Relationship trust earns renewal.",
    options: [
      "Present the improvements clearly at the renewal conversation and let the data make the case.",
      "Escalate to your executive team to close the deal as a show of commitment.",
      "Offer a discount to close the gap between 'satisfied' and 'committed.'",
      "Ask the customer what remaining concerns or gaps would need to be addressed to make them confident about renewing."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"growth":6,"executionRisk":-6},
    explanation: "Three months of operational improvement hasn't fully converted them — which means there's still something unspoken. Before the renewal conversation, ask directly what would need to be true for them to feel confident. This surfaces any remaining concerns so you can address them before the meeting, not discover them during it. Presenting the data and letting it speak is insufficient if the concern isn't about the data. Discounting before understanding the remaining resistance is offering medicine before diagnosis.",
    framework: "Pre-Renewal Discovery: know every remaining concern before you enter the renewal room.",
    principle: "Renewals are won before the renewal conversation, not during it.",
    traps: [
      "Data presentation alone — the concern that survived 3 months of improvement is probably not operational",
      "Pre-emptive discount — you haven't confirmed what the gap actually is",
      "Executive escalation — useful for executive-level concerns; premature before you've surfaced the remaining issue"
    ]
  },
  {
    id: "CSM-CP09",
    category: "Churn Prevention",
    difficulty: 1,
    scenario: "A small customer ($12K ARR) sends you an email saying they're not renewing because 'the product isn't worth the price.' They're too small to be commercially significant. Do you respond, and how?",
    quote: "Small customers talk to large ones. Your response to the small churner is your brand.",
    options: [
      "Ask for a 15-minute exit interview to understand the specific dissatisfaction.",
      "Send a brief acknowledgment and ask if there's anything you could have done differently.",
      "Offer a significant discount to try to save the renewal.",
      "Reply to the cancellation email with a brief explanation of pricing rationale and a summary of the value delivered — if the customer doesn't see the ROI, more information may change their mind."
    ],
    correct: 0,
    consequences: {"customerTrust":7,"strategicPosition":5,"growth":3},
    explanation: "Small churners are valuable in two ways: they're potential future references (either positive or negative), and they carry product intelligence about value perception at the lower end of your market. An exit interview — even 15 minutes — yields real information about product-market fit at their tier, which is valuable for your product team and your positioning. It also signals to a small customer that they mattered, which influences what they say about you afterward. A discount offer without diagnosis solves the wrong problem. Simple acknowledgment without learning wastes the opportunity.",
    framework: "Churn Intelligence: every churner has information worth collecting.",
    principle: "Small customers exit loudly on the internet. Treat the exit with the same care as the sale.",
    traps: [
      "No response — the customer leaves with an impression that you didn't care, which they'll share",
      "Brief acknowledgment only — respectful but misses the learning opportunity",
      "Pricing rationale reply — a customer who has already decided to leave doesn't need to be persuaded they were wrong; unsolicited ROI justification reads as defensive and makes the exit more contentious"
    ]
  },
  {
    id: "CSM-CP10",
    category: "Churn Prevention",
    difficulty: 3,
    scenario: "Your company just had a significant service outage that affected 40% of your customers for 6 hours. Three of your largest accounts are demanding compensation. One is threatening to invoke the SLA breach clause. Your CEO is asking all CSMs to handle this personally. What's your communication approach?",
    quote: "How you respond in a crisis defines the relationship longer than the crisis itself.",
    options: [
      "Send a personalized email to each of your affected accounts within the hour acknowledging the outage and promising a follow-up call once the post-mortem is complete — this buys time while keeping communication open.",
      "Call each affected account immediately: acknowledge the outage, explain what happened (with what you know), state what's being done, and offer a specific make-good.",
      "Send a mass email apology from the CEO — centralized communication ensures consistency.",
      "Contact only the three accounts threatening compensation — they're the active risk."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-8,"strategicPosition":6},
    explanation: "Outage response requires immediacy, personalization, and honesty. Calling each major affected account personally — acknowledging the impact on their business, sharing what you know about the cause, what's being fixed, and what you're prepared to offer — demonstrates relationship ownership. 'We don't have the full post-mortem yet but here's what we know and here's what we're committed to' is honest and respectful. Waiting for the post-mortem delays the relationship conversation customers need. Mass CEO email is impersonal. Contacting only the threatening accounts signals that only squeaky wheels get service.",
    framework: "Crisis Communication: immediate, personal, honest outreach — then follow up with the full post-mortem.",
    principle: "In a crisis, the speed and sincerity of your communication matters more than the completeness of your information.",
    traps: [
      "Email-then-call sequencing — an email promising a future call still leaves the customer without a specific make-good for their business impact; enterprise accounts with SLA breach exposure need a direct conversation where you can hear their specific situation and respond to it, not a templated message",
      "Mass email — impersonal and insufficient for enterprise accounts with specific business impact",
      "Active-threat-only outreach — all affected customers deserve proactive contact"
    ]
  },
  {
    id: "CSM-EM01",
    category: "Escalation Management",
    difficulty: 2,
    scenario: "A customer's CTO sends an angry email to your CEO, CC'ing your VP and you, saying the product is 'fundamentally broken' and they've 'lost confidence in your ability to deliver.' This is the first you're hearing of this level of frustration — your contact hadn't flagged any major issues. What do you do in the first hour?",
    quote: "An executive escalation that bypasses you means your relationship failed before the email was sent.",
    options: [
      "Draft a detailed briefing document for your CEO and VP summarizing the account history, known issues, and what you're aware of regarding the CTO's concerns — then give your leadership 30 minutes to review before they respond to the thread.",
      "Call your primary contact urgently to understand what prompted the CTO's email before responding.",
      "Immediately reply to the thread: acknowledge the concern, commit to understanding the specifics, and propose a call within 24 hours.",
      "Prepare a comprehensive issue log to demonstrate you've been tracking everything."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"executionRisk":-8,"strategicPosition":6},
    explanation: "When an executive escalation lands in your inbox, you own the response even if your leadership is copied. Immediately acknowledge the escalation on the thread — this signals ownership and professionalism to all parties, including your CEO. Commit to a specific timeline (call within 24 hours) and gather the specifics. Simultaneously, call your contact — but the email thread needs your response first. Waiting for your CEO or VP to handle it signals that you're not capable of managing your own accounts. The issue log is useful later but doesn't address the urgent relationship need.",
    framework: "Escalation Response Protocol: CSM owns the acknowledgment, then the investigation, then the resolution.",
    principle: "Executive escalations don't remove your ownership — they reveal it.",
    traps: [
      "Briefing-first, leadership-response approach — while you're preparing the document the CTO is watching the thread go unanswered; every minute of silence on a CC'd escalation signals that the company isn't taking it seriously, and the CTO sees exactly who is and isn't responding",
      "Calling your contact first without acknowledging the thread — leaves the CTO waiting for a response",
      "Issue log as first action — defensive posture; the customer needs empathy and commitment, not documentation"
    ]
  },
  {
    id: "CSM-EM02",
    category: "Escalation Management",
    difficulty: 3,
    scenario: "An escalation meeting is scheduled with the customer's executive team tomorrow. You've gathered the facts and know that the root cause was partially your company's fault (a product bug that took too long to resolve) and partially the customer's (they ignored a critical migration warning). How do you handle the attribution in the meeting?",
    quote: "Shared responsibility presented honestly is more credible than sole blame assigned strategically.",
    options: [
      "Take full responsibility — it looks better and prevents a difficult attribution conversation.",
      "Present the attribution as primarily a product bug issue — since the migration warning was technical in nature, the customer's team reasonably may not have understood its urgency, which makes the company more accountable than a shared-fault framing would suggest.",
      "Focus only on what your company will do differently — customers don't respond well to hearing they contributed.",
      "Present the full picture accurately: what your company should have done differently, and what the customer's team could have done differently, with equal candor."
    ],
    correct: 3,
    consequences: {"customerTrust":8,"executionRisk":-7,"strategicPosition":6},
    explanation: "Full unilateral blame-taking is dishonest and creates a false precedent. But blaming the customer in an escalation meeting is equally damaging. The right approach is honest, balanced attribution — presented with equal respect for both sides. Executives in escalation meetings are looking for credibility and problem-solving orientation; they respond better to someone who can say 'here's what we got wrong, here's what we'd have needed from your team, and here's how we both prevent this together' than to either pure apology or finger-pointing. Full responsibility for partial responsibility is a lie that eventually comes out.",
    framework: "Escalation Attribution: honest bilateral accountability > unilateral blame-taking.",
    principle: "The customer respects honesty about their role more than they respect someone falling on a sword for them.",
    traps: [
      "Full unilateral blame — dishonest, sets precedent for similar dynamics, eventually surfaces as false",
      "Sole forward-focus — feels like deflection when the root cause is unacknowledged",
      "Tilted-toward-company attribution — absolving the customer of their role in the incident creates a false precedent: they didn't follow a critical migration warning, and a relationship that can't acknowledge that can't have an honest conversation about what each party needs to do differently"
    ]
  },
  {
    id: "CSM-EM03",
    category: "Escalation Management",
    difficulty: 2,
    scenario: "A customer is demanding a response to their escalation within 2 hours. Your engineering team is investigating the issue and realistically won't have a root cause analysis for 6-8 hours. The customer is threatening to start the SLA clock. What do you communicate?",
    quote: "Silence during an escalation is never neutral — it always reads as indifference.",
    options: [
      "Respond within the 2-hour window with what you know, a clear timeline for the full update, and the concrete actions being taken right now.",
      "Respond to the customer within the 2-hour window with a detailed list of the diagnostic steps your engineering team is currently running — showing the work in progress demonstrates urgency without overpromising a timeline.",
      "Escalate the engineering priority to get a response within 2 hours to meet their demand.",
      "Tell them the 2-hour demand is unrealistic for a proper investigation and ask for 8 hours."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":4},
    explanation: "Customers in escalation need to feel heard and see momentum — they don't need the full answer within 2 hours, they need to know that people are working on it. A 2-hour update that says 'here's what we know, here's what we don't, here's exactly what our team is doing right now, here's when you'll hear from us next' is far more relationship-preserving than silence. Waiting for complete information fails the 2-hour commitment. Engineering escalation is worth attempting in parallel but you can't guarantee it. Negotiating the timeline before giving any update further frustrates a customer who already feels ignored.",
    framework: "Escalation Communication Cadence: partial updates on schedule beat full answers late.",
    principle: "In an escalation, the most dangerous thing you can do is nothing.",
    traps: [
      "Diagnostic-steps-only update — listing what engineering is doing without committing to a next-update time or acknowledging the business impact of the delay reads as a technical briefing, not a relationship response; the customer starts their SLA clock regardless of how thorough your process summary is",
      "Engineering escalation as substitute for communication — they need both in parallel",
      "Timeline negotiation before any update — compounds the frustration instead of addressing it"
    ]
  },
  {
    id: "CSM-EM04",
    category: "Escalation Management",
    difficulty: 1,
    scenario: "Your customer has escalated an issue and it's now resolved to their technical team's satisfaction. But the customer's VP still seems cold in communications. The technical issue is fixed but the relationship seems damaged. What's your follow-up strategy?",
    quote: "Technical resolution is the floor, not the ceiling, of escalation recovery.",
    options: [
      "Share a detailed written post-mortem with the VP documenting the root cause, every step taken to resolve it, and the process changes implemented — give them the full picture so they can decide whether a call is needed.",
      "Schedule a brief check-in with the VP specifically to acknowledge the disruption, share what you've put in place to prevent recurrence, and ask if there's anything else they need.",
      "Send a detailed post-mortem document to the VP showing all the steps taken.",
      "Have your VP send a personal apology note to restore the executive relationship."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"strategicPosition":6,"executionRisk":-5},
    explanation: "Technical resolution and relationship resolution are not the same thing. When an executive is still cold after a technical fix, it means the relationship needs direct attention. A brief, personal check-in from you to the VP — acknowledging the disruption, demonstrating that you've changed something to prevent recurrence, and asking if there's anything else needed — closes the loop on the human dimension of the escalation. A post-mortem document is useful but impersonal. Your VP's involvement should be for genuine executive-level concerns, not as a substitute for your own relationship repair.",
    framework: "Post-Escalation Recovery: technical close ≠ relationship close.",
    principle: "Fix the system. Then fix the trust.",
    traps: [
      "Passive normalization — waiting for time to heal the relationship when a 20-minute call would do it now",
      "Detailed post-mortem as the primary recovery gesture — a VP who is cold after a technical resolution needs to feel heard, not informed; sending a document puts the emotional labor of interpreting it on them, and 'let me know if you need a call' lets a disengaged executive stay disengaged",
      "VP escalation for relationship repair — appropriate for executive relationship issues, but this one you can own"
    ]
  },
  {
    id: "CSM-EM05",
    category: "Escalation Management",
    difficulty: 3,
    scenario: "You're managing an escalation and your customer is asking for a service credit that represents 3 months of their contract value. Your company's policy allows credits up to 1 month. The customer's frustration is genuine and the issue significantly impacted their business. What's your approach?",
    quote: "Policy is the floor of your response, not the ceiling of your empathy.",
    options: [
      "Offer the maximum 1-month credit per policy — clearly explain the policy and hold the line.",
      "Offer 3 months to resolve the escalation — the relationship is worth more than the credit.",
      "Offer 1 month immediately, escalate internally with a specific business case for additional credit, and communicate that you're advocating on their behalf.",
      "Ask the customer to formally document their business impact so it can be reviewed by finance."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"profitability":5,"executionRisk":-7},
    explanation: "The right move is to offer what's within your authority immediately while simultaneously escalating the case internally with a strong business justification. Telling the customer 'I'm going to advocate for more on your behalf and here's the timeline' is transparent, relationship-preserving, and operationally correct. You're not promising what you can't deliver, but you're not abandoning them at the policy ceiling when their situation genuinely warrants advocacy. Unilaterally offering 3 months exceeds your authority. Requiring formal documentation as a prerequisite for advocacy feels bureaucratic and dismissive during a genuine escalation.",
    framework: "Credit Authority Management: offer what you can, escalate what you can't, advocate loudly.",
    principle: "You may not be able to give everything, but you can always advocate for what's right.",
    traps: [
      "Hard policy line only — technically defensible, relationship-damaging in a genuine escalation",
      "Unauthorized 3-month credit — exceeds your authority and creates a precedent your company may not be able to sustain",
      "Documentation prerequisite — punishes a frustrated customer with process when they need advocacy"
    ]
  },
  {
    id: "CSM-EM06",
    category: "Escalation Management",
    difficulty: 3,
    scenario: "A customer escalates that your product missed their SLAs for two weeks, costing them operational disruption. When you investigate, you find that your company's SLA measurement methodology differs from the customer's reading of the contract — by your metrics, you didn't breach. The customer believes you did. How do you handle this?",
    quote: "Being technically correct in a contract dispute is not the same as being a good partner.",
    options: [
      "Provide the technical data showing your SLA was not breached and formally close the escalation.",
      "Escalate to your legal team to clarify the contractual language before responding to the customer.",
      "Offer a service credit to resolve the dispute without engaging the contractual details.",
      "Acknowledge the gap in expectations honestly: explain the measurement difference without dismissing their experience, and then focus the conversation on what you should both do differently going forward."
    ],
    correct: 3,
    consequences: {"customerTrust":8,"executionRisk":-7,"strategicPosition":6},
    explanation: "SLA disputes where your metrics say 'no breach' but the customer experienced two weeks of disruption are relationship problems, not just contractual ones. Presenting data that says 'you're wrong' to a customer who experienced real operational impact will generate far more damage than the service credit you'd avoid. The right approach is honest transparency: explain the measurement difference clearly and respectfully, acknowledge what their team actually experienced, and then pivot to what both parties should change going forward. This demonstrates partnership. Legal routing before any customer conversation is cold and escalates tension unnecessarily. A service credit without explanation leaves the measurement misalignment unresolved.",
    framework: "SLA Dispute Resolution: technical correctness and relationship health are not the same thing.",
    principle: "A customer who experienced disruption needs acknowledgment, not a measurement lesson.",
    traps: [
      "Data-only close — a customer who felt real impact and is told 'our metrics say you're wrong' will escalate further",
      "Legal routing before customer conversation — signals you're building a defense rather than solving a problem",
      "Credit without explanation — temporary relief without resolving the understanding gap; sets up the same dispute next time"
    ]
  },
  {
    id: "CSM-EM07",
    category: "Escalation Management",
    difficulty: 2,
    scenario: "An escalation has been resolved. You need to present a 30-minute post-incident review to the customer's leadership team. The root cause involved both a product bug and a slow response from your support team. How do you structure the review for maximum credibility and relationship repair?",
    quote: "The post-incident review is not a defense — it's the beginning of renewed trust.",
    options: [
      "Acknowledge the business impact, explain root cause honestly (product + response time), describe specific changes already made, and give the customer a mechanism to hold you accountable going forward.",
      "Open with what your team did well during the incident before explaining the root cause — balance the narrative.",
      "Have your engineering team present the technical root cause first, then you take Q&A.",
      "Present the data from the incident, walk through the root cause analysis, then share next steps."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-6,"strategicPosition":6},
    explanation: "An effective post-incident review follows a specific sequence: (1) acknowledge the impact on their business — not yours — first; (2) explain the root cause honestly, including both the product bug and the slow response; (3) describe what has already changed as a result; (4) give the customer a way to hold you accountable — a named contact, a monitoring commitment, a check-in date. This sequence rebuilds trust because it centers the customer's experience, demonstrates ownership, and creates a forward accountability structure. Opening with what went right before explaining root cause sounds defensive. Data-first presentations are detached and feel like report-reading, not partner conversations.",
    framework: "Post-Incident Review: impact → root cause → change → accountability — in that order.",
    principle: "The post-mortem that rebuilds trust is the one that puts the customer's experience first.",
    traps: [
      "Balanced narrative opening — acknowledging what went well before the root cause sounds like minimization",
      "Engineering-led technical presentation — you own the customer relationship; your team supports you, not the other way around",
      "Data-first structure — detached and analytical when what's needed is human accountability and forward commitment"
    ]
  },
  {
    id: "CSM-EM08",
    category: "Escalation Management",
    difficulty: 2,
    scenario: "A complex technical escalation has been running for 3 weeks. Engineering is 60% to a resolution but needs 2 more weeks. The customer is threatening to bring in external consultants to expedite. How do you respond to the pressure while maintaining credibility?",
    quote: "In an escalation, a committed cadence matters more than a compressed timeline.",
    options: [
      "Ask your engineering team to provide a hard timeline commitment before you communicate anything to the customer.",
      "Share what's been done, what's happening now, and commit to a specific update cadence — regardless of whether there's new news, the customer will hear from you on schedule.",
      "Tell the customer that external consultants would likely slow things down by introducing a new team to a complex problem.",
      "Offer to bring in a third-party consultant yourself to accelerate the resolution process."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":4},
    explanation: "A customer threatening external consultants is a customer who has lost faith in your team's communication, not necessarily your technical ability. The fastest path to restoring that faith is a specific, consistent communication cadence — 'you will hear from me by Tuesday and Friday, regardless of whether there is new news.' This eliminates the silence that breeds worst-case assumptions. Waiting for engineering to commit to a hard timeline before communicating leaves the customer in a vacuum. Discouraging external consultants without offering a credible alternative sounds defensive. Bringing in your own third-party consultant is a high-cost move rarely available or appropriate.",
    framework: "Escalation Communication: cadence and transparency beat speed and heroics.",
    principle: "The customer threatening consultants is really asking for predictable contact. Give them that.",
    traps: [
      "Hard timeline request before communication — engineering may not be able to commit and you've delayed the communication the customer needs now",
      "External consultant discouragement — sounds defensive without offering something better in return",
      "Third-party consultant offer — rarely available and expensive; addresses the wrong problem"
    ]
  },
  {
    id: "CSM-EM09",
    category: "Escalation Management",
    difficulty: 2,
    scenario: "In an escalation meeting, the customer's VP asks: 'If this happens again, what exactly are you going to do about it?' The root cause was only identified last week and you don't yet have a fully documented prevention plan. What do you say?",
    quote: "A placeholder answer is better than a false one — if it comes with a commitment and a date.",
    options: [
      "Lay out the prevention plan using what you already know, even if it's incomplete — showing you're thinking about it matters.",
      "Tell them you need to involve your technical team before you can answer that question meaningfully.",
      "Commit to delivering a fully documented prevention and recovery plan by a specific date rather than giving an underprepared answer now.",
      "Focus on the prevention steps already implemented and anchor the conversation around those."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"executionRisk":-6,"strategicPosition":5},
    explanation: "When an executive asks a critical accountability question and you don't have the full answer, the worst response is an improvised or incomplete one — because you'll own those words forever. The right response is honest and forward-committed: 'I don't want to give you a placeholder — can I come back to you with a fully documented prevention and recovery plan by [specific date next week]?' This demonstrates integrity, sets a specific accountability point, and is far more credible than an unprepared answer. Laying out an incomplete plan sounds half-thought-through. Anchoring only on what's already been done avoids the future-facing accountability the executive was actually asking about.",
    framework: "Escalation Accountability: honesty about preparation gaps + specific commitment beats improvised completeness.",
    principle: "A committed date for the right answer is more credible than an immediate incomplete one.",
    traps: [
      "Incomplete plan answer — you'll be held to whatever you said and the gaps will undermine the whole plan",
      "Technical team deflection — accurate but feels like avoidance to an executive in an escalation meeting",
      "Already-done-only focus — you've answered the question about the past; the executive asked about the future"
    ]
  },
  {
    id: "CSM-EM10",
    category: "Escalation Management",
    difficulty: 3,
    scenario: "Two months after a significant escalation, the account appears recovered — usage is up, your champion is positive. But you've quietly noticed that the economic buyer has declined the last two QBR invites and stopped attending executive check-ins. What does this signal and what do you do?",
    quote: "The executive who goes quiet after a crisis is more dangerous than the one who stays angry.",
    options: [
      "Brief your champion on the executive's disengagement pattern and ask them to include the economic buyer in the next internal status update — use the champion's proximity to rebuild the executive's involvement organically.",
      "Flag the executive disengagement in your internal health score system and monitor for another 30 days.",
      "Ask your champion to help re-engage the economic buyer and get them back to the QBR.",
      "Send a personal note directly to the economic buyer — not another meeting invite: 'I noticed we haven't connected in a while — I'd value 20 minutes to hear how things are feeling from your perspective and make sure we're aligned on what comes next.'"
    ],
    correct: 3,
    consequences: {"customerTrust":9,"executionRisk":-8,"strategicPosition":7},
    explanation: "An economic buyer who disengages after an escalation is often someone who lost confidence and is quietly looking for an alternative or building a case for non-renewal. This is more dangerous than expressed anger, because it happens invisibly. The right response is direct, personal outreach — not another QBR invite (which they've already declined twice), but a personal note that explicitly acknowledges the gap and invites an honest conversation. Champion-only reliance when executive authority has shifted is a retention risk. Monitoring for another 30 days is too passive when the signal is already clear.",
    framework: "Post-Crisis Executive Recovery: quiet disengagement requires personal outreach, not more formal invitations.",
    principle: "An executive going quiet after a crisis is a crisis in slow motion.",
    traps: [
      "Champion sentiment as the only signal — champions normalize problems; the executive's behavior is the more important data point",
      "30-day monitoring — the executive may have already made a decision by the time you act",
      "Champion-proxy re-engagement — asking your champion to maneuver the economic buyer back into a meeting they've already declined twice signals you're unwilling to reach out directly, which makes the eventual outreach feel managed rather than genuine"
    ]
  },
]
