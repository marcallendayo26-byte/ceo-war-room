export const CASES_CSM3 = [
  {
    id: "CSM-QE01",
    category: "QBR & Executive Engagement",
    difficulty: 2,
    scenario: "You're preparing a QBR for a customer who is not particularly impressed by your standard metrics dashboard. Your champion tells you their CFO will be attending and wants to see 'business impact, not product metrics.' What does your QBR agenda look like?",
    quote: "Executives speak the language of outcomes. Dashboards speak the language of activity.",
    options: [
      "Rebuild the QBR narrative around business outcomes: cost saved, hours recovered, revenue influenced, risk reduced — with specific $ figures and comparison to pre-implementation baseline.",
      "Keep your standard metrics dashboard — it's comprehensive and shows strong usage numbers.",
      "Focus the QBR on product roadmap and upcoming features — show what's coming, not just what happened.",
      "Let your champion tell you exactly what to present and build it to spec."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"growth":7,"strategicPosition":6},
    explanation: "A CFO in the room demands a business outcomes conversation, not a product metrics review. The right QBR reframes everything in business language: 'You recovered 1,200 hours of analyst time last quarter' beats 'feature adoption is 78%.' Every metric you present should connect to a dollar value or a business risk reduction. This requires working with your champion beforehand to understand what the CFO's priorities are and what baseline data exists for comparison. A roadmap-forward QBR is future-focused but doesn't address the CFO's need to understand what value has already been delivered.",
    framework: "Executive QBR: translate product metrics to business outcomes before entering the room.",
    principle: "Every slide in an executive QBR should be answerable with 'so what?' before you show it.",
    traps: [
      "Standard metrics dashboard — meaningless to a CFO who didn't buy feature adoption",
      "Roadmap-forward QBR — skips the accountability for past performance",
      "Champion-driven spec — useful input but abdicates your strategic thinking; the CFO expects your judgment, not just your compliance"
    ]
  },
  {
    id: "CSM-QE02",
    category: "QBR & Executive Engagement",
    difficulty: 3,
    scenario: "You're in the middle of a QBR and the economic buyer says: 'Honestly, we're not sure we're getting the ROI we expected when we purchased. Can you help me understand the value?' This is a surprise — your champion told you they were happy. How do you respond in the moment?",
    quote: "An executive who asks about ROI in a QBR is giving you an opportunity most vendors don't get.",
    options: [
      "Present the adoption metrics and usage data you've already prepared — let the numbers speak.",
      "Pause the prepared agenda: 'I want to make sure we answer that question directly. Can you tell me what ROI looked like in your original expectations so we can walk through it together?'",
      "Acknowledge the concern and commit to a separate ROI analysis meeting in the next two weeks.",
      "Apologize for the gap and offer a discount at renewal to bridge the expectation."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":5},
    explanation: "An executive asking about ROI in a QBR is not a disaster — it's a signal that they're engaged and want to be convinced. The right move is to abandon your prepared deck immediately and create space for the real conversation. Ask what their original ROI expectations were, so you can walk through the gap honestly: where have you delivered, where have you fallen short, what can be done about the shortfall? This requires presence and adaptability, not defensiveness. Sticking to the prepared deck while an executive has clearly moved on is a trust-destroying disconnect. A separate meeting defers the conversation the executive wants now.",
    framework: "Real-Time QBR Adaptation: the most important question in the room always overrides the prepared agenda.",
    principle: "The executive who asks the hard question in the room deserves the honest answer in the room.",
    traps: [
      "Presenting prepared metrics to an executive who's already signaled they're not enough",
      "Deferral to separate meeting — the executive's question deserves engagement now, not later",
      "Apology + discount without understanding the gap — premature before you know what they expected"
    ]
  },
  {
    id: "CSM-QE03",
    category: "QBR & Executive Engagement",
    difficulty: 2,
    scenario: "Your QBR request was accepted by the customer but they've reduced the meeting to 20 minutes and removed the executive sponsor from the invite. It's now a working-level call. What does this signal and how do you adapt?",
    quote: "A QBR that loses its executives has lost its purpose.",
    options: [
      "Proceed with the 20-minute working-level call — some engagement is better than none.",
      "Reschedule with a specific ask to reinstate the executive: 'We need to discuss topics that require executive visibility — can we find a 30-minute slot that works for them?'",
      "Ask your champion why the executive was removed before deciding how to proceed.",
      "Accept the format but use the 20-minute call to re-establish value and rebuild the executive relationship separately."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"executionRisk":-5,"strategicPosition":5},
    explanation: "Before deciding whether to reschedule or adapt, understand why the executive was removed. Is it a scheduling conflict (benign) or a signal of reduced engagement (concerning)? Your champion has this context. If it's scheduling, reschedule with specific executive availability. If it's a signal, that's critical intelligence about the account's health — and the 20-minute call becomes a discovery conversation rather than a QBR. Proceeding blindly without understanding the signal misses critical account intelligence. Immediately pushing for executive reinstatement without context can feel presumptuous.",
    framework: "QBR Signal Reading: format changes tell you about account health before the meeting happens.",
    principle: "Before you adapt the meeting, understand why the meeting changed.",
    traps: [
      "Proceeding without asking why — you're missing critical account health intelligence",
      "Immediate executive re-invite demand without understanding context — could be a normal schedule change",
      "Accept and rebuild separately — valid partial response but misses the diagnostic step"
    ]
  },
  {
    id: "CSM-QE04",
    category: "QBR & Executive Engagement",
    difficulty: 1,
    scenario: "A customer hasn't accepted your last three QBR invites. You've sent emails and left voicemails. Their renewal is 6 months away and their health score is 'yellow.' What does the lack of QBR engagement mean and what do you do?",
    quote: "Customers who stop showing up to QBRs have already started leaving.",
    options: [
      "Keep sending QBR invites — they'll respond when the time is right.",
      "Stop sending QBR invites and shift to smaller, more targeted touchpoints to re-establish engagement.",
      "Escalate to the economic buyer with a formal account review request.",
      "Treat the silence as an at-risk signal: reach out through a different channel and ask directly if the relationship is working."
    ],
    correct: 3,
    consequences: {"customerTrust":8,"executionRisk":-7,"growth":4},
    explanation: "Three consecutive declines of QBR invitations combined with a yellow health score and 6-month renewal horizon is an at-risk signal, not a scheduling problem. The right response is to abandon the QBR format and attempt direct contact through a different channel — a phone call, a direct message to the economic buyer, or an informal outreach from your leadership. Ask directly: 'Is everything okay with the relationship? I want to make sure we're serving you well.' Continuing to send the same QBR invites is the definition of insanity. Formal review request to the economic buyer is an appropriate nuclear option if direct contact also fails.",
    framework: "Engagement Failure: three ignored invites = at-risk signal, not scheduling friction.",
    principle: "When the format fails, change the format. When the channel fails, change the channel.",
    traps: [
      "Keep sending the same invite — they've told you three times they're not engaged this way",
      "Smaller touchpoints without diagnosing the disengagement — treating symptoms, not cause",
      "Economic buyer escalation as first step — appropriate if direct contact fails, not before"
    ]
  },
  {
    id: "CSM-QE05",
    category: "QBR & Executive Engagement",
    difficulty: 3,
    scenario: "In a QBR, the economic buyer says: 'I want to see your product roadmap for the next 12 months before we decide about renewal.' You know the roadmap has some items they'd love and some gaps they might not like. How do you present it?",
    quote: "Selective roadmap sharing feels great until the gap shows up after the signature.",
    options: [
      "Share the full roadmap, including the gaps, and proactively discuss how the gaps map to their stated priorities.",
      "Present only the roadmap items you know they'll like — emphasize the positive.",
      "Tell them the roadmap is confidential and offer a redacted version without the specific timelines.",
      "Let your product manager present the roadmap — they'll know best how to position it."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-6,"strategicPosition":6},
    explanation: "Full roadmap transparency — including the gaps — is the right approach. If you share only the good news and they discover the gaps post-renewal, you've damaged trust at the worst possible moment. If they see the full picture and choose to renew knowing the gaps, you have a genuinely informed customer who's committed for the right reasons. Proactively mapping the gaps to their priorities gives you the chance to address them (workarounds, third-party integrations, timing adjustments) before they become objections. Confidentiality claims about roadmap items are usually not necessary and feel evasive.",
    framework: "Roadmap Transparency: informed renewals are durable. Informed-by-omission renewals churn.",
    principle: "Share the gaps before they find them. Customers who find gaps after signing feel deceived.",
    traps: [
      "Positive-only roadmap — renewal signed on false premises churns the moment the gap hits",
      "Confidentiality deflection — feels evasive and damages executive trust",
      "Product manager presentation as a shield — you own the account conversation; PM support is secondary"
    ]
  },
  {
    id: "CSM-QE06",
    category: "QBR & Executive Engagement",
    difficulty: 2,
    scenario: "Your champion wants to skip the QBR this quarter because 'everything is going well and nobody wants another meeting.' What's the risk and how do you respond?",
    quote: "QBRs are most important when everything seems fine.",
    options: [
      "Skip it — if things are going well there's no urgency, and respecting their time builds goodwill.",
      "Explain the value: QBRs when things are good are how you document value, prepare for renewal, and strengthen the executive relationship before pressure appears.",
      "Reduce the QBR to a 20-minute written summary instead of a meeting.",
      "Wait until the next scheduled QBR and double up on agenda items then."
    ],
    correct: 1,
    consequences: {"customerTrust":7,"strategicPosition":8,"executionRisk":-5},
    explanation: "Skipping QBRs when things are going well is a classic CSM mistake. QBRs in healthy periods accomplish things that QBRs in crisis periods can't: they document and reinforce value before renewal conversations begin, they build executive relationships when there's no urgency, and they create the context for honest conversations later. If you only hold QBRs when there are problems, you've created the association that QBRs = problems. Help your champion understand this strategic purpose — the QBR isn't for them personally, it's for the executive audience that needs to be maintained.",
    framework: "Strategic QBR Timing: healthy periods are when QBR value compounds, not when they should be skipped.",
    principle: "QBRs skipped during good times are renewals fought in bad ones.",
    traps: [
      "Skipping it — you lose the relationship maintenance and value documentation moment",
      "Written summary substitute — loses the executive face time that is half the QBR's value",
      "Doubling up later — a backloaded QBR is a rushed QBR; the lost cadence creates gaps"
    ]
  },
  {
    id: "CSM-QE07",
    category: "QBR & Executive Engagement",
    difficulty: 1,
    scenario: "You're preparing for your first QBR with a new economic buyer who just joined the customer company. They have no context on the history of your relationship or the value delivered to date. How do you structure the QBR?",
    quote: "A QBR for a new executive is a first impression on the relationship's history.",
    options: [
      "Run your standard QBR agenda — they'll learn the context as you go.",
      "Skip the current QBR and schedule a separate onboarding session first to give them context.",
      "Begin with a concise retrospective of the relationship, the original goals, what's been achieved, and what's ahead — tailored to their role.",
      "Ask your champion to brief the new executive on the history before the QBR."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"strategicPosition":6,"growth":4},
    explanation: "A new executive walking into a QBR without context will feel lost and form an impression of the relationship that's shaped by confusion rather than value. The right approach is to open with a concise, executive-appropriate history: why you were purchased, what goals were set, what's been achieved in measurable terms, and what the forward plan looks like. This respects their time, demonstrates that you understand business context, and creates the foundation for a productive forward conversation. Asking your champion to brief them is useful but doesn't replace your own ability to own the narrative in the room.",
    framework: "New Executive QBR: context before content — always.",
    principle: "A new executive in your QBR deserves to feel caught up, not thrown in.",
    traps: [
      "Standard QBR agenda — a new executive without context gets lost in the metrics",
      "Separate onboarding session — adds delay and splits what could be a single efficient interaction",
      "Champion-only briefing — the champion may not frame it the way you would, and you still need to lead the room"
    ]
  },
  {
    id: "CSM-QE08",
    category: "QBR & Executive Engagement",
    difficulty: 3,
    scenario: "During a QBR, the economic buyer asks: 'What would you do differently if you were in our position?' This is an unexpected, open-ended question. How do you respond?",
    quote: "The executive who asks what you'd do in their shoes is testing whether you think like a partner or a vendor.",
    options: [
      "Deflect: 'That's really your team's call — we're here to support whatever you decide.'",
      "Ask clarifying questions to understand exactly what they mean before answering.",
      "Redirect to your product roadmap and upcoming features that might address their situation.",
      "Give a genuine, specific answer based on what you've observed about their deployment and gaps."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"strategicPosition":8,"growth":5},
    explanation: "This question is a trust test. An executive who asks what you'd do in their position wants a real answer, not corporate deflection or a feature roadmap. They're asking whether you're genuinely paying attention to their business, whether you have perspective worth hearing, and whether you're willing to be honest. Give a specific, thoughtful answer grounded in what you've actually observed — even if it includes things that are hard to say. Deflection is the worst answer. Redirecting to the roadmap is a non-answer. Asking for clarification can be appropriate but risks feeling like you're buying time to think of something safe.",
    framework: "Partner vs. Vendor: executives ask real questions to see if they're talking to a partner.",
    principle: "When an executive asks for your opinion, give it. The worst thing you can do is not have one.",
    traps: [
      "Deflection — confirms you're a vendor, not a partner",
      "Roadmap redirect — non-answer that sidesteps what they actually asked",
      "Clarification delay — can work briefly, but usually reads as stalling before a safe answer"
    ]
  },
  {
    id: "CSM-QE09",
    category: "QBR & Executive Engagement",
    difficulty: 2,
    scenario: "Your most important customer's executive team has agreed to participate in a joint case study with your marketing team. Your marketing team wants to schedule it immediately. But you have a support ticket from 2 weeks ago that's still unresolved with this customer. What do you do?",
    quote: "Don't let marketing borrow trust your customer service hasn't earned yet.",
    options: [
      "Resolve the support ticket before scheduling the case study — ensure the relationship is in good standing before asking for a public endorsement.",
      "Proceed with the case study immediately — this is a great opportunity and the ticket is a minor issue.",
      "Schedule the case study but keep it separate from the support ticket — they're handled by different teams.",
      "Ask the customer if they're comfortable proceeding despite the open ticket."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"strategicPosition":7,"executionRisk":-5},
    explanation: "Asking a customer to publicly endorse your company while you have an unresolved service issue is a relationship inconsistency that erodes trust — especially if the customer's team experiences the contrast. The ticket may seem minor internally, but to the customer, a 2-week unresolved issue is the current reality of working with you. Resolve it first, then proceed from a position of genuine good standing. Treating them as separate tracks ignores the customer's experience of your company as a unified entity. Asking the customer if they're comfortable is respectful but shifts burden onto them.",
    framework: "Reference Readiness: don't ask for advocacy while you have outstanding service debt.",
    principle: "The relationship you ask to borrow for marketing should be in better shape than the marketing opportunity.",
    traps: [
      "Proceeding immediately — if the customer's team experiences the contrast, you've damaged the reference",
      "Separate tracks — operationally reasonable but ignores the customer's unified experience of your company",
      "Customer permission without resolution — puts burden on them to say it's okay, when you should just fix it"
    ]
  },
  {
    id: "CSM-QE10",
    category: "QBR & Executive Engagement",
    difficulty: 1,
    scenario: "An executive at a key customer asks you to stop holding QBRs and just 'be available when we need you.' They say the scheduled reviews feel forced and they prefer ad-hoc interaction. How do you respond?",
    quote: "Ad-hoc relationships are reactive by definition — and reactive is always behind.",
    options: [
      "Agree completely — if that's how they prefer to work, honor it.",
      "Agree to reduce formality but maintain a minimum cadence of structured touchpoints, framed as their call to make anytime.",
      "Explain why QBRs are important for their account health and hold the cadence.",
      "Replace quarterly QBRs with monthly informal check-ins."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-5,"strategicPosition":6},
    explanation: "Adapting to an executive's communication preference is smart — insisting on a format they dislike is not. But pure ad-hoc availability means you lose the proactive insight-sharing, value documentation, and renewal preparation that structured reviews provide. The right balance: honor the request by reducing formality and making each interaction less 'meeting' and more 'conversation,' while maintaining at minimum one formal business review 60-90 days before renewal. Frame it as flexible and useful for them rather than a vendor obligation.",
    framework: "CSM Flexibility: adapt the format, not the function.",
    principle: "The format is negotiable. The relationship investment is not.",
    traps: [
      "Full ad-hoc acceptance — reactive model means you lose the proactive account health work that drives renewals",
      "Hard QBR cadence insistence — inflexibility on format alienates an executive who's told you what they want",
      "Monthly check-ins without structure — informal frequency doesn't replace one strategic annual review"
    ]
  },
  {
    id: "CSM-RN01",
    category: "Renewals",
    difficulty: 2,
    scenario: "You're 90 days from a renewal and haven't started the formal renewal conversation yet. Your champion says 'no news is good news.' You have a yellow health score and adoption at 60%. What's your approach?",
    quote: "90 days to renewal with a yellow health score is a 30-day problem dressed as a 90-day one.",
    options: [
      "Trust your champion — they know their organization and if there were an issue, they'd have flagged it.",
      "Send a formal renewal proposal and let the customer's response tell you where things stand.",
      "Start the renewal conversation now, even if informal: review usage data together, surface any gaps, and understand what renewal looks like internally.",
      "Wait 30 days and see if health score improves before starting the renewal conversation."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"growth":7,"executionRisk":-8},
    explanation: "A yellow health score and 60% adoption at 90 days from renewal is an early warning that needs immediate attention. Starting an informal renewal conversation now — framed around understanding their experience and what success looks like going forward — gives you time to address issues before they become renewal objections. Waiting for health improvement delays the conversation to a point where there's no room to recover. Formal renewal proposals at 90 days when the relationship is yellow create a commercial pressure that can harden resistance. Champion trust on a yellow account is misplaced optimism.",
    framework: "Renewal Timing: at-risk accounts need renewal conversation to start 90-120 days out, not 60.",
    principle: "The best time to start a renewal conversation is before anyone thinks it's renewal season.",
    traps: [
      "Champion deference with yellow health score — champions normalize problems; your data is more objective",
      "Formal proposal at 90 days with yellow health — commercial push without resolved issues is premature",
      "30-day wait — hope is not a renewal strategy"
    ]
  },
  {
    id: "CSM-RN02",
    category: "Renewals",
    difficulty: 3,
    scenario: "A customer wants to downgrade at renewal — reducing from an enterprise plan ($180K) to a professional plan ($60K). The stated reason is budget. You know their adoption is strong and the enterprise features are actively used. How do you handle this?",
    quote: "Downgrades requested at renewal are almost never about money — they're about value not yet articulated.",
    options: [
      "Accept the downgrade — customers should get the plan that fits their needs.",
      "Offer a discount on the enterprise plan to make it closer to the professional plan price.",
      "Ask your VP to call the economic buyer and defend the enterprise value directly.",
      "Quantify what they'd lose in the downgrade specifically — which enterprise features they actively use and the business impact of losing them."
    ],
    correct: 3,
    consequences: {"profitability":7,"customerTrust":8,"growth":5},
    explanation: "A downgrade from an actively used enterprise plan is almost certainly a budget conversation masquerading as a needs conversation. Before offering a discount or accepting the downgrade, make explicit what the customer would actually lose — in concrete usage terms and business impact. 'You used Feature X 847 times last quarter, which drives Y — that feature is enterprise-only. Here's what the professional plan does and doesn't include.' This reframes the decision from 'same thing for less money' to 'meaningfully less capability for less money' — which is often enough to change the calculus. A discount without this conversation gives away margin without addressing the value gap in their thinking.",
    framework: "Downgrade Defense: quantify the loss before accepting it or discounting to prevent it.",
    principle: "A customer who says 'less plan' often means 'I don't know what I'm paying for.'",
    traps: [
      "Accepting the downgrade without articulating what they lose — they may not realize the impact",
      "Immediate discount without value conversation — gives away $120K without addressing the value perception gap",
      "Executive escalation as first response — your analysis should come first; escalation is a second tool"
    ]
  },
  {
    id: "CSM-RN03",
    category: "Renewals",
    difficulty: 2,
    scenario: "A customer that you've had a strong relationship with for 2 years says at renewal: 'We want you to know we're renewing, but we also think the price needs to come down 10%.' They're not threatening to leave. They're just stating a position. How do you handle this?",
    quote: "Not every discount request is a crisis — but every discount given without a trade is a precedent.",
    options: [
      "Ask what they'd offer in return — multi-year commitment, expanded scope, case study, or reference.",
      "Give the 10% immediately — they've been a great customer and the goodwill is worth it.",
      "Hold firm at current pricing — they said they're renewing anyway.",
      "Offer 5% as a compromise and see if they accept."
    ],
    correct: 0,
    consequences: {"profitability":8,"customerTrust":7,"growth":5},
    explanation: "A stated renewal with a price request attached is a negotiation, not a crisis. The right move is to treat it like one: ask what they'd offer in exchange. A 2-year or 3-year commitment in exchange for a 10% reduction might be a good business decision. A reference case study or speaking engagement might be worth 5%. Or maybe the ask collapses when they realize there's nothing specific driving it. Giving the 10% without any trade sets the expectation that asking at renewal time is always rewarded. Holding firm entirely ignores a legitimate commercial negotiation opportunity. Arbitrary 5% compromise is neither principled nor trade-based.",
    framework: "Renewal Negotiation: every discount should be a trade.",
    principle: "A customer who knows they're renewing and asks for a discount is giving you a negotiation opportunity.",
    traps: [
      "Immediate 10% — rewarded with no value in return, sets precedent for every renewal",
      "Hard hold on price — misses the opportunity to extract a real commercial trade",
      "Arbitrary 5% split — neither principled nor trade-based; trains them to expect the split next year"
    ]
  },
  {
    id: "CSM-RN04",
    category: "Renewals",
    difficulty: 1,
    scenario: "Your customer just had a major internal reorganization announced. The buying unit has been restructured and it's unclear who owns the budget for your contract. Renewal is in 45 days. What do you do?",
    quote: "Organizational change is the most common reason known renewals fail to close.",
    options: [
      "Wait for the reorganization to settle — things will become clearer in a few weeks.",
      "Immediately work with your existing champion to understand the new structure and identify who has budget authority.",
      "Send the renewal contract to the same contact as last year and see if it gets approved.",
      "Ask your champion to get the renewal approved before the new structure is formalized."
    ],
    correct: 1,
    consequences: {"executionRisk":-9,"growth":6,"customerTrust":6},
    explanation: "45 days to renewal during a reorg is a genuine crisis. The right response is immediate proactive investigation: who owns the budget now, who's the decision-maker in the new structure, and what's the fastest path to getting the renewal approved in the new org. Your existing champion may or may not have the authority to approve in the new structure — find out now. Waiting for the dust to settle with 45 days left is extremely risky. Sending the contract to the old contact assumes continuity that may not exist. Asking your champion to rush an approval before the structure is formalized may put them in an awkward political position.",
    framework: "Reorg Renewal Response: map the new structure immediately — don't wait for it to settle.",
    principle: "Organizational change doesn't pause contract timelines. Your response has to be faster than the change.",
    traps: [
      "Waiting for clarity — 45 days evaporates during a reorg and renewals that 'should' happen don't",
      "Contract to old contact — may be incorrect and creates delays or the wrong approver",
      "Rush approval before formalization — puts champion in political jeopardy before they know their authority"
    ]
  },
  {
    id: "CSM-RN05",
    category: "Renewals",
    difficulty: 3,
    scenario: "You have a $300K renewal and your AE is insisting on being part of the renewal conversation because they want to upsell to $400K during the renewal. You believe the relationship needs stability, not expansion, right now. Who leads and how do you navigate this internal tension?",
    quote: "Upselling into a fragile relationship is the fastest way to lose both the expansion and the renewal.",
    options: [
      "Let the AE lead — the expansion opportunity is good for the company.",
      "Establish that you lead the renewal conversation; the AE participates but doesn't run it.",
      "Have a conversation with your manager and the AE's manager to align on sequencing before the customer meeting.",
      "Tell the AE to wait until after renewal to pursue the expansion."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"customerTrust":7,"profitability":5},
    explanation: "This is an internal alignment problem that should be resolved before the customer meeting, not during it. Get your manager and the AE's manager aligned on the strategy: is this renewal stable enough for an expansion conversation, or should that wait? The right answer depends on the actual account health — if it's genuinely strong, a combined renewal + expansion conversation can work. If it's fragile, expansion pressure during renewal risks both. But this decision shouldn't be made ad hoc in front of the customer. Having the conversation and aligning on sequencing is the most professional and relationship-protective approach.",
    framework: "Internal Deal Alignment: resolve CSM/AE strategy before customer contact, never during.",
    principle: "Customer-facing disagreements start with internal conversations.",
    traps: [
      "AE-led renewal — expansion-first posture in a fragile relationship risks the renewal",
      "Unilateral CSM ownership without alignment conversation — creates internal conflict that surfaces in the meeting",
      "AE waits entirely — may be right for the account but should be a joint decision, not a unilateral one"
    ]
  },
  {
    id: "CSM-RN06",
    category: "Renewals",
    difficulty: 3,
    scenario: "Your company has just announced the acquisition of a smaller competitor. Several of your customers are aware and calling to ask directly: 'Will our CSM change? Will the roadmaps merge? Are you going to drop features we rely on?' How do you manage this wave of uncertainty?",
    quote: "Acquisition anxiety in customers is best treated with honest specificity, not vague reassurance.",
    options: [
      "Wait for your company's official acquisition communication before having direct conversations with customers.",
      "Reassure all customers that 'nothing will change' — it's the most stabilizing message available.",
      "Escalate all customer questions to your VP so they're handled centrally and consistently.",
      "Respond directly and honestly to each customer: share what you know, acknowledge what hasn't been decided yet, and commit to keeping them updated as decisions are made."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"executionRisk":-6,"strategicPosition":7},
    explanation: "Customers who call with acquisition concerns are testing one thing: whether they're going to get a real answer or a PR message. 'Nothing will change' is almost always false and will destroy trust the moment it's disproved. Waiting for official communication leaves customers in a vacuum, which they fill with worst-case assumptions. Routing everything through your VP creates delays and removes the relationship continuity that makes you valuable. The right response is direct, honest, and specific: 'Here's what I know — CSM continuity is X, roadmap is under discussion, here's what I'll flag for you as decisions are made.' Customers respect the honesty and remember it at renewal time.",
    framework: "Acquisition Communication: honest specificity builds more trust than reassurance.",
    principle: "Customers who call during uncertainty are giving you an opportunity to earn their loyalty — or lose it.",
    traps: [
      "Waiting for official comms — customers in uncertainty don't wait; they start exploring alternatives",
      "'Nothing will change' — the most common and most dangerous reassurance; almost always false",
      "VP routing — removes your relationship ownership at the moment customers most need their primary contact"
    ]
  },
  {
    id: "CSM-RN07",
    category: "Renewals",
    difficulty: 1,
    scenario: "A customer's renewal is 30 days away. Their health score is strong, adoption is high, and your champion is actively positive. Your manager says: 'Don't over-engineer it — just send the paper.' What do you do?",
    quote: "A healthy renewal is an invitation to deepen a relationship, not just close a transaction.",
    options: [
      "Have a brief but intentional renewal conversation — acknowledge the year's outcomes, ask what they want more or less of, and then send the paper.",
      "Follow your manager's guidance and process the renewal efficiently — complex treatment for healthy accounts wastes both parties' time.",
      "Send the renewal contract with a personalized note highlighting the year's key achievements.",
      "Run a full QBR before the renewal to maximize relationship depth before signing."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"strategicPosition":6,"growth":5},
    explanation: "A healthy renewal is the best possible moment for a genuine relationship conversation — not because something is at risk, but because you can have a forward-looking discussion about the next year from a position of mutual satisfaction. A 30-minute call that acknowledges the year's outcomes and asks 'what would you want more or less of in the next 12 months?' produces three things: expansion intelligence, early warning of any concerns that aren't in the health score, and a genuine feeling of partnership from the customer. Purely transactional renewals, even healthy ones, miss this window. A full QBR is over-investment for a simple healthy renewal.",
    framework: "Healthy Renewal Conversation: even clean closes benefit from intentional human interaction.",
    principle: "Healthy accounts are the ones with room to grow — treat renewal as the moment to plant that seed.",
    traps: [
      "Pure transaction processing — efficient but misses the expansion intelligence and forward relationship investment",
      "Personalized note only — better than nothing, but asynchronous and doesn't surface insights a conversation would",
      "Full QBR — disproportionate for a healthy renewal and can feel like more process than the customer wants"
    ]
  },
  {
    id: "CSM-RN08",
    category: "Renewals",
    difficulty: 3,
    scenario: "A customer is prepared to renew but conditions it on a specific feature being included in the contract. The feature is on your roadmap but not committed for a specific release date. Without a commitment, they say they'll consider alternatives. How do you handle this?",
    quote: "A roadmap commitment you can't keep is a trust withdrawal, not a renewal deposit.",
    options: [
      "Commit to the feature in the contract to secure the renewal — your product team will find a way to deliver it.",
      "Be honest about the timing uncertainty, explain what you can responsibly commit to, and structure the contract to give them recourse if the roadmap changes.",
      "Tell them that contracts are based on current features and the renewal should reflect current capability only.",
      "Offer a discount as partial compensation for the feature gap and close on current terms."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":5},
    explanation: "Committing to a roadmap feature with an uncertain timeline in a contract is a trust time-bomb. If the feature ships late, you've breached a contractual commitment. If it doesn't ship, you've lied. The right approach is transparent structuring: 'I don't want to commit to a date I'm not certain about, but here's where this sits on the roadmap, here's how I'll advocate internally for your prioritization, and here's a contract clause that gives you options if our timeline changes significantly.' This is honest and gives the customer confidence that you're their advocate, not a vendor who makes promises to close deals. Pure 'current features only' is inflexible and loses the renewal. Discount without engagement ignores the actual concern.",
    framework: "Roadmap Commitment: structure the contract around what you can honestly commit to.",
    principle: "A renewal signed on a promise you can't keep is a churn deferred, not a renewal secured.",
    traps: [
      "Contract commitment on uncertain roadmap — you own the miss when the feature is late",
      "Current features only stance — inflexible and signals you're not invested in their long-term success",
      "Discount for gap — compensates financially for what they actually need addressed functionally"
    ]
  },
  {
    id: "CSM-RN09",
    category: "Renewals",
    difficulty: 2,
    scenario: "A low-churn-risk customer who has paid annually for 3 years now requests a switch to monthly billing at renewal, citing 'budget flexibility.' Your company strongly prefers annual contracts. How do you handle the request?",
    quote: "A flexibility request is almost always a specific concern in disguise.",
    options: [
      "Agree to monthly billing — customer flexibility preferences should be honored to maintain satisfaction.",
      "Hold firm on annual billing — your company's model isn't customer-negotiable.",
      "Ask what specifically is driving the flexibility need and explore whether there's a structure that addresses their actual concern without giving up the annual commitment.",
      "Offer a significant discount on the annual contract to make it financially more compelling than monthly billing."
    ],
    correct: 2,
    consequences: {"profitability":7,"customerTrust":8,"executionRisk":-5},
    explanation: "A customer who's paid annually for 3 years and suddenly wants monthly billing has a specific reason that 'flexibility' is masking. Is it a budget cycle change? A new CFO enforcing cash flow controls? An upcoming reorg that makes annual commitments uncertain? Understanding the actual driver lets you respond to the real concern — which might be solved by quarterly billing, a contract amendment clause, or a specific protection provision — rather than automatically giving up annual terms. Full monthly conversion reduces your revenue predictability and often signals a customer who's less confident than they appear. Pure firmness loses the renewal.",
    framework: "Payment Terms Discovery: 'flexibility' is a symptom — find the underlying concern before restructuring.",
    principle: "The customer asking for monthly billing is usually asking about something else.",
    traps: [
      "Immediate monthly agreement — reduces revenue predictability and may signal deeper account uncertainty you haven't diagnosed",
      "Hard annual stance — risks losing the renewal over a terms conversation that may have a creative solution",
      "Discount-first response — gives away margin without understanding if price is even the concern"
    ]
  },
  {
    id: "CSM-RN10",
    category: "Renewals",
    difficulty: 3,
    scenario: "Three of your accounts have renewals in the same week. One is healthy, one is yellow-health, one is red-health with an escalation open. You can personally lead only one renewal conversation this week. How do you allocate your time?",
    quote: "Where you spend your energy in renewal week is where you think the risk is.",
    options: [
      "Lead the healthy account renewal personally — it's the cleanest opportunity for a relationship win this week.",
      "Lead the yellow-health account — there's still time to address the concerns and protect the revenue.",
      "Delegate all three to a standard renewal process and triage based on which surfaces objections first.",
      "Lead the red-health renewal personally — it carries the highest churn risk. Create a structured check-in for the yellow account this week. Let the healthy renewal proceed through your standard process with a personal note."
    ],
    correct: 3,
    consequences: {"executionRisk":-8,"growth":6,"customerTrust":7},
    explanation: "Renewal week triage should follow risk, not opportunity. The red account is your most critical work — a failed renewal with an open escalation is a churn event that has reputational and financial consequences beyond the one account. Your direct involvement is required. The yellow account needs meaningful attention too — a structured check-in or call this week, even if you're not leading the formal renewal conversation, to surface any remaining concerns. The healthy account can be managed through your standard process with a personal note from you; it doesn't require live management. Leading the healthy account first because it feels like a win is triage by comfort, not by impact.",
    framework: "Renewal Week Triage: allocate personal time by churn risk, not by ease of close.",
    principle: "Your time in renewal week should go where the most damage can be prevented.",
    traps: [
      "Healthy account leadership — feels rewarding but it's the lowest-risk renewal in your queue",
      "Yellow account primary — meaningful risk, but red account carries more immediate and certain consequences",
      "All three to standard process — the red account will not survive a standard renewal process with an open escalation"
    ]
  },
]
