export const CASES_SALES2 = [
  {
    id: "SL-NG01",
    category: "Negotiation",
    difficulty: 2,
    scenario: "The prospect says: 'We love the product but we need a 20% discount to get this through procurement.' You have 10% authority and would need VP approval for more. The deal is $300K. What's your response?",
    quote: "Every discount you give without extracting something is a gift with your own money.",
    options: [
      "Ask what they'd give you in return for additional discount — longer term, faster close, reference agreement, expanded scope.",
      "Offer your full 10% authority immediately to show good faith.",
      "Tell them 20% isn't possible and hold at list price — discounts set bad precedents.",
      "Escalate to your VP immediately and let them negotiate the rest."
    ],
    correct: 0,
    consequences: {"profitability":8,"growth":5,"customerTrust":6},
    explanation: "Discounts should always be traded, never given. Before going to your VP or deploying your own authority, find out what the prospect would offer in exchange — a 2-year commitment, a faster close date, a reference case study, expansion rights. This transforms a unilateral concession into a negotiated trade, which is both more profitable and more sustainable. Giving your full 10% immediately trains buyers that the first ask gets the discount. Holding at list with no flexibility loses the deal.",
    framework: "Trade-for-Trade Negotiation: every concession you make must cost the other side something.",
    principle: "Never give a discount. Trade it.",
    traps: [
      "Deploying your full discount authority immediately to 'show good faith'",
      "Going to your VP without first exhausting what you could trade at your own level",
      "Holding list price rigidly as if that's a principled position rather than a negotiation failure"
    ]
  },
  {
    id: "SL-NG02",
    category: "Negotiation",
    difficulty: 3,
    scenario: "You've sent the contract and the prospect has gone silent for 10 days after saying they were ready to sign. Your quarter ends in 8 days. You've sent two follow-up emails with no response. What's your next move?",
    quote: "Silence after a verbal commit is a signal, not an absence of one.",
    options: [
      "Send a 'mutual close plan' email with a specific date and next steps, creating structure around the timeline.",
      "Call their cell phone directly — radio silence after a commit demands a direct conversation.",
      "Escalate to your VP and ask them to call the prospect's executive contact.",
      "Offer an additional discount via email to restart the conversation."
    ],
    correct: 1,
    consequences: {"growth":7,"customerTrust":5,"executionRisk":-6},
    explanation: "Ten days of silence after a verbal commit means something changed. Two unanswered emails means the standard follow-up channel isn't working. A direct phone call — using the number you have from discovery — is the only way to get real information. You need to know if there's an internal blocker, a change in priority, a budget freeze, or simply inbox overload. A mutual close plan email is a reasonable tactic but only works if they're reading your emails — they're not. Offering a discount into silence is a classic panic move that signals desperation without diagnosing the real issue.",
    framework: "Deal Revival: when standard channels fail, escalate the medium, not the message.",
    principle: "A deal going quiet after a commit is a deal at risk — treat it like one.",
    traps: [
      "More emails in the same channel that isn't working",
      "Immediate executive escalation before trying a direct conversation yourself",
      "Discount into silence — you haven't even confirmed the deal is at risk for a price reason"
    ]
  },
  {
    id: "SL-NG03",
    category: "Negotiation",
    difficulty: 2,
    scenario: "Your prospect's legal team has sent back a contract with 14 redlines, many of them non-standard. Your legal team says it will take 3-4 weeks to review them all. Your quarter ends in 2 weeks. What's your approach?",
    quote: "Legal processes don't respect quarter-end — but legal teams sometimes respond to business urgency.",
    options: [
      "Tell the prospect the timeline is incompatible and offer to start next quarter.",
      "Ask the prospect's procurement lead to withdraw the non-critical redlines to accelerate closing.",
      "Work with your legal team to triage the 14 redlines — identify which are dealbreakers vs. which are negotiable, and resolve the easy ones immediately.",
      "Accept all non-financial redlines to close faster and protect margin."
    ],
    correct: 2,
    consequences: {"executionRisk":-7,"profitability":5,"customerTrust":6},
    explanation: "A 14-redline contract isn't reviewed as a monolith — it's triaged. Work with your legal team to categorize: which redlines are standard pushback you can resolve in 24 hours, which require careful review, which are non-starters. Address the easy ones immediately to show momentum. Simultaneously, your champion should be asking their procurement team to prioritize. Telling the prospect the timeline is incompatible abandons the deal. Accepting all non-financial redlines is reckless — legal terms have real business implications.",
    framework: "Contract Triage: not all redlines are equal — prioritize by impact and speed.",
    principle: "Speed in legal negotiation comes from triage, not shortcuts.",
    traps: [
      "Treating 14 redlines as a single monolithic delay",
      "Telling the prospect it won't close this quarter before you've tried to accelerate",
      "Blanket acceptance of non-financial redlines — liability, IP, and SLA terms have teeth"
    ]
  },
  {
    id: "SL-NG04",
    category: "Negotiation",
    difficulty: 1,
    scenario: "A prospect says: 'Your competitor is offering the same thing for 30% less.' You know your product is differentiated but the rep hasn't verified this claim. What's your immediate response?",
    quote: "Unverified competitive claims are leverage attempts, not facts — treat them as such.",
    options: [
      "Match the competitor's price immediately — you can't afford to lose on price.",
      "Offer to do a feature-by-feature comparison document to prove your value.",
      "Dismiss the claim: 'Our solution is in a different category — that comparison isn't fair to either vendor.'",
      "Ask for clarification: 'I'd want to make sure we're comparing apples to apples — what specifically are they including for that price?'"
    ],
    correct: 3,
    consequences: {"profitability":7,"customerTrust":6,"growth":4},
    explanation: "Competitive price claims are often negotiation tactics. Before responding to the number, understand what's actually being compared. What modules? What implementation support? What SLAs? What contract terms? In most cases, a detailed scope comparison reveals that the 30% cheaper solution includes less, requires more internal effort, or has hidden costs. Asking the clarifying question is not stalling — it's responsible due diligence that often deflates the price pressure entirely. Immediately matching sets a terrible precedent.",
    framework: "Competitive Handling: validate before conceding — most price claims don't survive scrutiny.",
    principle: "A number without context is a negotiation tactic, not a fact.",
    traps: [
      "Immediate price match — you accepted their framing without question",
      "Dismissing the comparison as unfair — sounds defensive, not confident",
      "Comparison document as a reflex — useful eventually but doesn't answer the question of what's actually included"
    ]
  },
  {
    id: "SL-NG05",
    category: "Negotiation",
    difficulty: 3,
    scenario: "You're negotiating a $1.2M enterprise deal and the prospect's CFO has personally gotten involved, asking for a 25% discount and citing 'budget constraints.' Your champion tells you privately that the CFO always does this — it's a tactic. But you've never met the CFO directly. How do you handle it?",
    quote: "When the CFO enters the negotiation, the real negotiation has begun.",
    options: [
      "Ask your champion to set up a direct CFO meeting and engage them personally on the value equation.",
      "Treat it as real and work with your champion to build a hard business case justifying the full price.",
      "Offer a mid-point 12-15% discount to resolve it without escalating internally.",
      "Tell your champion the price is firm and ask them to communicate that up."
    ],
    correct: 0,
    consequences: {"growth":7,"profitability":6,"strategicPosition":6},
    explanation: "CFO involvement is a signal that the deal needs executive-level value justification, not just a discount response. The right move is to ask for a direct meeting — CFOs respond to peers who speak their language: ROI, payback period, risk reduction. Meeting them directly lets you control the narrative, demonstrate business credibility, and avoid the game of telephone through your champion that usually distorts the message. Offering a 12-15% discount to 'resolve it' rewards the tactic and costs you real margin. Asking your champion to deliver firmness upward rarely works.",
    framework: "Executive Selling: match stakeholder level — when CFO engages, get in the room.",
    principle: "If the CFO is asking the question, the CFO needs to hear the answer.",
    traps: [
      "Treating CFO involvement as just another discount negotiation to resolve at a distance",
      "Mid-point discount — rewards the tactic, signals you have more room",
      "Champion as message carrier to the CFO — your message loses fidelity and authority"
    ]
  },
  {
    id: "SL-NG06",
    category: "Negotiation",
    difficulty: 2,
    scenario: "A prospect demands payment terms of Net-90 (payment 90 days after delivery), while your standard terms are Net-30. Finance says they can accept Net-60 maximum. The prospect says Net-90 or no deal. What do you do?",
    quote: "Payment terms are a financial instrument — price them accordingly.",
    options: [
      "Accept Net-90 to save the deal — payment terms are a small issue compared to the revenue.",
      "Keep terms at Net-60 but adjust pricing upward to offset the extended payment risk, and present it as a financing option.",
      "Counter with Net-60 and explain why Net-90 creates cash flow issues for your company.",
      "Escalate to your CFO and let finance resolve it directly with the prospect's CFO."
    ],
    correct: 1,
    consequences: {"profitability":8,"growth":5,"customerTrust":5},
    explanation: "Extended payment terms are a form of financing — the prospect is using your capital interest-free for an extra 30-60 days. The right commercial response is to price that into the deal. Offering Net-90 with a corresponding price increase is a legitimate, transparent trade that preserves your company's financial position while giving the prospect what they want. Simply counter-offering Net-60 with an explanation often ends in an impasse. Pure escalation to finance is abdicating the commercial conversation.",
    framework: "Commercial Structuring: price non-standard terms as the financial instruments they are.",
    principle: "Flexible terms are fine — just charge for them.",
    traps: [
      "Accepting Net-90 without financial adjustment — 60 days of free financing on $1M+ is real money",
      "Hard counter at Net-60 without offering a path to the prospect's preferred terms",
      "Escalating to finance without first structuring a creative commercial solution yourself"
    ]
  },
  {
    id: "SL-NG07",
    category: "Negotiation",
    difficulty: 2,
    scenario: "During final negotiations, your prospect reveals they've been negotiating with you and a competitor simultaneously, and will decide by end of week based on final best offers. Both options are on the table. What's your approach?",
    quote: "A best-and-final offer is only as good as your understanding of what they actually value.",
    options: [
      "Submit your most aggressive possible discount to win on price.",
      "Submit your current offer unchanged — if they want you, they'll choose you.",
      "Ask for a final conversation to understand their evaluation criteria before submitting your best offer.",
      "Tell them you don't participate in competitive bidding situations."
    ],
    correct: 2,
    consequences: {"profitability":7,"growth":6,"customerTrust":5},
    explanation: "Before you submit a best-and-final offer, you need to know what 'best' means to them. Is it price? Implementation speed? Support terms? Integration capabilities? A 30-minute final conversation often reveals that price is actually not the deciding factor, or that a specific non-price element would tip the decision. This lets you craft an offer that wins on the right dimension — not just the cheapest one. Submitting your most aggressive discount assumes the decision is purely price-driven, which it often isn't. Refusing to participate is a high-risk position that rarely wins.",
    framework: "Value-Based Final Offer: understand the decision criteria before you move on them.",
    principle: "You can't win a negotiation you don't understand.",
    traps: [
      "Maximum discount as default best-and-final — assumes price is the decision and often it isn't",
      "Holding firm without any differentiation — risks looking inflexible when competitors have moved",
      "Refusing to participate in competitive process — almost always the losing position"
    ]
  },
  {
    id: "SL-NG08",
    category: "Negotiation",
    difficulty: 1,
    scenario: "After months of negotiation, the prospect's procurement team sends a standard vendor agreement that replaces all your negotiated terms. Your legal team says it's heavily one-sided. Your champion says 'just sign it — everyone does.' What do you do?",
    quote: "A contract signed under pressure without review is a liability waiting to trigger.",
    options: [
      "Sign it — your champion knows their procurement process better than you do.",
      "Refuse to sign and ask your champion to escalate to have the negotiated terms reinstated.",
      "Sign the cover page but note that you don't accept the vendor terms attached.",
      "Have your legal team review and redline the standard agreement, prioritizing the most material terms."
    ],
    correct: 3,
    consequences: {"executionRisk":-10,"profitability":5,"customerTrust":4},
    explanation: "Procurement standard agreements are designed for commodity vendors, not for software providers with complex SLAs, IP considerations, and liability exposure. 'Everyone signs it' is procurement folklore used to reduce resistance. The right move is a legal review focused on material risks: liability caps, IP ownership, termination rights, SLAs. You don't need to redline everything — focus on the terms that could cost you real money or create unacceptable obligations. Signing the cover page while noting rejection of attached terms is not a legally coherent position and creates ambiguity.",
    framework: "Contract Risk Management: procurement standard terms are negotiation starting points, not final documents.",
    principle: "The worst time to read a contract is after you've signed it.",
    traps: [
      "Trusting your champion's 'everyone signs it' — they don't have your company's liability exposure in mind",
      "Refusing to sign entirely — counterproductive when targeted redlines are the real answer",
      "Partial acceptance notation — not a legally coherent position and may invalidate the agreement"
    ]
  },
  {
    id: "SL-NG09",
    category: "Negotiation",
    difficulty: 3,
    scenario: "You're negotiating a renewal with a key enterprise account. The customer says they need a 15% price reduction or they'll go to a competitor. Your product has deep integrations with their systems and switching costs are significant. You believe the threat is partially a bluff. What's your approach?",
    quote: "Switching costs are real leverage — but only if you use them honestly.",
    options: [
      "Acknowledge the pressure, quantify the switching cost with them explicitly, and offer a smaller reduction tied to expansion or multi-year commitment.",
      "Offer the 15% reduction immediately to preserve the relationship.",
      "Hold firm on price — their switching costs are too high for the threat to be real.",
      "Propose a QBR to re-establish value before entering any pricing discussion."
    ],
    correct: 0,
    consequences: {"profitability":7,"customerTrust":7,"growth":5},
    explanation: "High switching costs don't mean the customer won't switch — they mean they'll only switch when sufficiently motivated. Dismissing the threat entirely by hiding behind switching costs is arrogant and often backfires. The right move is to acknowledge the business reality honestly, bring the switching cost data into the conversation explicitly ('let's quantify what a migration actually costs'), and then use that context to negotiate a modest reduction tied to a commitment that benefits you — expansion or multi-year. This treats the customer as a partner rather than a hostage.",
    framework: "Renewal Negotiation: combine value demonstration with honest switching cost analysis.",
    principle: "Leverage works best when it's acknowledged, not wielded.",
    traps: [
      "Relying purely on switching costs to hold price — it signals you know they could leave and you're just daring them",
      "Immediate 15% reduction — validates the bluff and sets a precedent every renewal",
      "QBR as delay tactic — useful for value reinforcement but doesn't directly address the negotiation"
    ]
  },
  {
    id: "SL-NG10",
    category: "Negotiation",
    difficulty: 2,
    scenario: "Your prospect says they can only approve $150K this fiscal year, but the solution they need is priced at $210K. They seem genuinely constrained — it's not a negotiating tactic. What's your creative approach?",
    quote: "Budget constraints are a deal structure problem, not a deal killer.",
    options: [
      "Offer a stripped-down version of the product that fits the $150K budget.",
      "Propose a phased deal: $150K for core modules this year with a contractually committed expansion to $210K in the next fiscal year.",
      "Tell them to come back next fiscal year when they have a bigger budget.",
      "Offer a $60K discount to fit within their budget and capture the deal this year."
    ],
    correct: 1,
    consequences: {"growth":8,"profitability":5,"customerTrust":7},
    explanation: "Real budget constraints are a structuring challenge, not a price objection. A phased deployment — with the full scope legally committed across two fiscal years — lets the customer start now, manage their budget cycle, and gives you a contractually protected expansion. This is better than a stripped product (which under-delivers and damages reference value), waiting a full year (which the competitor will fill), or a $60K discount (which collapses your margin without need — their issue is cashflow timing, not price).",
    framework: "Creative Deal Structuring: match contract structure to the customer's real constraint.",
    principle: "When the budget doesn't fit, restructure the deal, not the product.",
    traps: [
      "Reduced scope deal — underdelivers and reduces reference value",
      "Deferring to next year — the competitor will be in that gap",
      "Discount as a workaround for a cash flow problem — solves the wrong problem, destroys margin"
    ]
  },
  {
    id: "SL-OH01",
    category: "Objection Handling",
    difficulty: 1,
    scenario: "A prospect says: 'We tried a similar solution 2 years ago and it failed.' This is one of the first things they mention in an initial meeting. How do you respond?",
    quote: "A failed past experience is the strongest possible buying signal — they want it to work.",
    options: [
      "Pivot immediately to your product's differentiating features to establish you're different.",
      "Acknowledge the pain and assure them your implementation process is different.",
      "Ask them to tell you more: what happened, what went wrong, what they'd need to see to feel confident this time.",
      "Send a case study of a similar company that successfully implemented your solution."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"growth":5,"executionRisk":-4},
    explanation: "A prospect who opens with a past failure is telling you exactly what this deal needs to overcome to close. The best response is to go deep on the failure: what was the use case, what broke down, was it technology, adoption, change management, or executive support? This isn't a objection to defend against — it's the clearest signal you'll ever get about what matters to them. Understanding the failure lets you specifically address it, or honestly acknowledge if you'd have the same problem. Pivoting to features or sending a case study before listening deeply is a classic miss.",
    framework: "Objection as Intelligence: failures reveal requirements more clearly than any questionnaire.",
    principle: "The person who tells you why the last deal failed is telling you how to win this one.",
    traps: [
      "Immediately pivoting to differentiation — sounds defensive before you've listened",
      "Assurance without understanding — 'we're different' means nothing without specifics",
      "Case study as social proof before you've diagnosed the specific failure mode"
    ]
  },
  {
    id: "SL-OH02",
    category: "Objection Handling",
    difficulty: 2,
    scenario: "A prospect says: 'We don't have budget for this right now.' It's the first thing they say after your 30-second intro. How do you handle it?",
    quote: "Budget objections at the opening are almost never about money.",
    options: [
      "Offer your lowest-tier package to lower the barrier immediately.",
      "Launch into your ROI pitch to demonstrate the solution will pay for itself.",
      "Tell them you understand and schedule a follow-up for next quarter when budget may be available.",
      "Acknowledge it and ask: 'Is that because budget is genuinely frozen, or is it that we haven't yet made the case for why this should be a priority?'"
    ],
    correct: 3,
    consequences: {"customerTrust":7,"growth":6,"executionRisk":-3},
    explanation: "A budget objection at the very opening of a first meeting is almost always a deflection, not a financial reality. It means: 'I'm not sure this is worth my time.' The right move is to directly but gently surface that distinction — 'is this about frozen budget, or about priority?' If it's priority, you still have a conversation to have. If it's genuinely frozen, you've qualified honestly and can set a meaningful follow-up timeline. Offering a lower tier or launching your ROI pitch before diagnosing the real signal is noise.",
    framework: "Objection Diagnosis: most early objections are trust or priority signals, not literal statements.",
    principle: "Budget objections rarely mean what they say.",
    traps: [
      "Treating it as a real budget constraint without testing that assumption",
      "Next-quarter follow-up without understanding why they're even in the meeting",
      "Immediate ROI pitch before establishing any rapport or understanding of their situation"
    ]
  },
  {
    id: "SL-OH03",
    category: "Objection Handling",
    difficulty: 2,
    scenario: "Late in an evaluation, a prospect says: 'We've decided to build this in-house instead of buying.' Your solution would have replaced 6 months of development work. How do you respond?",
    quote: "Build vs. buy is a decision, not a destination — it can be revisited.",
    options: [
      "Ask to present a total cost of ownership comparison between buying and building before they finalize.",
      "Accept the decision gracefully and ask to stay in touch for future opportunities.",
      "Escalate to the economic buyer to make sure they're aware of the full build cost.",
      "Offer a significant discount to make the buy option more attractive than building."
    ],
    correct: 0,
    consequences: {"growth":6,"strategicPosition":5,"customerTrust":5},
    explanation: "Build vs. buy decisions are frequently made without full accounting of the true build cost: developer time, ongoing maintenance, technical debt, security, and the opportunity cost of those engineering hours. A TCO comparison — done transparently and collaboratively — often reveals that building is 2-3x more expensive than the prospect estimated. Requesting a chance to present this analysis is a legitimate ask that gives the prospect better information. Immediate concession or graceful exit surrenders without an honest conversation. Escalating over the champion's head is a trust-destroying move.",
    framework: "Build vs. Buy Analysis: rarely are full build costs accurately estimated — surface them.",
    principle: "Build decisions are made on incomplete math — help them complete it.",
    traps: [
      "Graceful acceptance without a last attempt to reframe the decision",
      "Escalating to the economic buyer over your champion — nuclear option that destroys the relationship",
      "Discount as a response to a strategic preference — they've chosen strategy, not price resistance"
    ]
  },
  {
    id: "SL-OH04",
    category: "Objection Handling",
    difficulty: 3,
    scenario: "A technical evaluator in the prospect's team says publicly in a group call: 'This solution won't integrate with our data warehouse architecture.' Your solutions engineer whispers to you that it actually can integrate, but it requires a custom connector that takes 3-4 weeks to build. How do you handle the moment?",
    quote: "Technical credibility is earned in the hard moments, not the easy ones.",
    options: [
      "Agree with the evaluator to avoid conflict — bring up the integration path in a follow-up email.",
      "Say: 'That's a fair point to raise — can we pause and have our solutions engineer walk through exactly what the integration looks like and what it requires?'",
      "Immediately correct the evaluator: 'Actually, we do integrate — let me explain the approach.'",
      "Privately signal to your solutions engineer to handle the objection while you stay silent."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-6,"strategicPosition":5},
    explanation: "This requires transparency and technical precision simultaneously. The evaluator's concern is real — the integration does require work. The worst moves are either agreeing to avoid conflict (which leaves a false impression and creates a worse surprise later) or bluntly correcting them (which sounds defensive and combative). The right approach is to create space for a detailed, honest technical conversation: 'Let's walk through exactly what this looks like' — which lets your SE explain both that it's possible and what it requires. That's respectable credibility.",
    framework: "Technical Objection Handling: create space for honest technical clarity, not just rebuttals.",
    principle: "Handle technical objections with precision, not defensiveness.",
    traps: [
      "Agreeing to avoid conflict — you've just conceded a false point that will come up in procurement",
      "Blunt correction — sounds defensive and puts the evaluator on the spot in front of peers",
      "Delegating to SE nonverbally — unclear and leaves the evaluator's statement standing unchallenged"
    ]
  },
  {
    id: "SL-OH05",
    category: "Objection Handling",
    difficulty: 1,
    scenario: "A prospect says: 'Your solution is interesting but we're not ready to make a decision right now. Let's reconnect in 6 months.' It's a gentle brush-off. What do you do?",
    quote: "'Not now' with no context is 'no' with a polite delay attached.",
    options: [
      "Thank them and add a calendar reminder for 6 months out.",
      "Push back: 'Six months is a long time — what's holding you back today?'",
      "Ask what would need to be true in 6 months for a decision to be possible.",
      "Offer to stay in touch monthly with relevant content until they're ready."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"growth":5,"executionRisk":-3},
    explanation: "A 6-month timeline without any reason attached is usually a polite way to end the conversation. Before accepting it, understand what specifically changes in 6 months. Is it a budget cycle, a headcount decision, a strategic initiative completing, or just discomfort with deciding? If there's a real reason, you have a follow-up anchor. If they can't articulate what changes, you've surfaced that this is a deflection, not a timeline. Pushing back with 'what's holding you back today?' is too aggressive and feels like a pressure tactic. Monthly content nurturing is busy work if you haven't diagnosed why they said 6 months.",
    framework: "Timeline Objection: every deferral should have a named reason, or it isn't a timeline.",
    principle: "'Not now' without a reason is 'not ever' said slowly.",
    traps: [
      "Calendar + forget — passive and turns the deal cold",
      "Pushback framed as a challenge — creates pressure and resistance rather than dialogue",
      "Monthly content without a qualified follow-up plan — nurture without purpose"
    ]
  },
  {
    id: "SL-OH06",
    category: "Objection Handling",
    difficulty: 2,
    scenario: "A prospect who was very engaged through discovery and demo suddenly goes silent after you send the initial pricing email. Two follow-up emails and a voicemail have gone unanswered over 10 days. What's most likely happening and what do you do?",
    quote: "Silence after a pricing email is a message — it just isn't in words yet.",
    options: [
      "Stop all outreach for two weeks, then re-engage with new product content to rebuild interest.",
      "Call their cell phone repeatedly until you get a response — silence after engagement demands escalation.",
      "Send a revised pricing email with a discount, assuming price was the trigger for the silence.",
      "Reach out with a low-pressure, honest message: 'If something in the pricing didn't land right, or if priorities have shifted internally, I'd genuinely rather know than guess.'"
    ],
    correct: 3,
    consequences: {"customerTrust":7,"growth":6,"executionRisk":-4},
    explanation: "Silence after a pricing email almost always means one of three things: the price was higher than expected, something changed internally, or the prospect is conflict-averse and doesn't know how to say no. The best move is an honest, low-pressure message that explicitly gives them permission to tell you either of these things. This surfaces the real issue — and often re-engages a prospect who was just uncomfortable delivering bad news. A two-week pause is too passive. Aggressive callbacks create resentment. Sending a discount before you've confirmed price is even the issue is reactive and signals desperation.",
    framework: "Post-Pricing Silence: diagnose before you react — silence has a reason.",
    principle: "Give prospects permission to say the hard thing. Most of them want to.",
    traps: [
      "Two-week pause — turns an recoverable silence into a cold deal",
      "Aggressive follow-up — creates resentment when what they need is an easy exit or an honest conversation",
      "Discount into silence — may solve the wrong problem entirely and signals panic"
    ]
  },
  {
    id: "SL-OH07",
    category: "Objection Handling",
    difficulty: 1,
    scenario: "On a first cold call, a prospect says: 'We already have a vendor doing something similar — we're happy with them.' You don't know the vendor, what it covers, or whether the prospect fully understands your differentiation. How do you respond?",
    quote: "An incumbent vendor is an opening question, not a closed door.",
    options: [
      "Ask what their current solution covers and where they're most satisfied with it before saying anything else.",
      "Immediately share your three key differentiators against the most likely competitors in this space.",
      "Ask who the vendor is so you can explain precisely why you're a stronger solution.",
      "Thank them for their time and end the call — competing with entrenched vendors rarely succeeds."
    ],
    correct: 0,
    consequences: {"customerTrust":7,"growth":5,"executionRisk":-3},
    explanation: "A first-call incumbent objection is not a competitive battle — it's an invitation to understand the existing relationship. Before you differentiate, you need to know what you're differentiating against. 'Can you walk me through what that solution covers and where you're most satisfied?' accomplishes three things: it shows genuine curiosity rather than desperation, it surfaces what they value in the incumbent, and it almost always reveals a gap or pain point you can address. Launching into differentiation before you know the landscape is shooting in the dark. Naming the competitor first puts the prospect in the position of defending a vendor they didn't choose — it rarely goes well.",
    framework: "Incumbent Objection: understand the relationship before you challenge it.",
    principle: "You can't differentiate from something you don't understand.",
    traps: [
      "Immediate differentiation — you're competing with a shadow, not the actual solution they use",
      "Naming the competitor and rebutting — puts the prospect in a defensive posture for their vendor",
      "Ending the call — an incumbent vendor and a happy customer are two different things"
    ]
  },
  {
    id: "SL-OH08",
    category: "Objection Handling",
    difficulty: 2,
    scenario: "A prospect opens a discovery call by saying: 'I'll be honest — we've been burned before. A vendor promised us something and didn't deliver. I'm skeptical your company is any different.' This is said in the first two minutes. How do you respond?",
    quote: "The rep who listens to the wound earns the right to close it.",
    options: [
      "Share a relevant case study immediately to establish that your company has a track record of delivery.",
      "Acknowledge the experience and ask what specifically broke down — you want to understand before you defend.",
      "Promise that your company has a different implementation process and offer to connect them with a reference customer.",
      "Explain your NPS score and customer satisfaction data as evidence that your company doesn't have this pattern."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"growth":5,"executionRisk":-4},
    explanation: "A prospect who opens with a past failure is not asking you to prove you're better — they're testing whether you're the kind of person who listens or the kind who defends. The right move is to honor the experience rather than redirect from it. 'Can you tell me more about what broke down?' shows you're not threatened by the comparison and that you genuinely care about understanding the failure. This builds more credibility than a case study or a promise. Once you understand the failure, you can speak specifically to it — which is infinitely more powerful than a generic quality assertion.",
    framework: "Trust Recovery: curiosity before credibility.",
    principle: "Never defend against a wound before you understand it.",
    traps: [
      "Case study pivot — feels like you're trying to change the subject rather than acknowledge the pain",
      "Process promise — without specifics, sounds exactly like what the last vendor said",
      "Satisfaction data — impersonal and statistical; the prospect doesn't want data, they want to be heard"
    ]
  },
  {
    id: "SL-OH09",
    category: "Objection Handling",
    difficulty: 2,
    scenario: "Near the end of a discovery call, a prospect says: 'This sounds interesting, but I'm not really the decision-maker — you should probably talk to my VP.' What's your response?",
    quote: "Every stakeholder in a complex deal shapes the outcome — even the ones who say they don't.",
    options: [
      "Thank them and ask for the VP's email directly so you can redirect your primary efforts.",
      "Continue the discovery with them fully — they've shown clear interest and may have more influence than they're admitting.",
      "Ask about their role in the evaluation and what would help you most before you connect with the VP.",
      "Ask them to set up a three-way call with the VP immediately so you can brief both stakeholders at once."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"growth":6,"executionRisk":-3},
    explanation: "When someone says they're 'not the decision-maker,' they often mean they don't have final budget authority — not that they have no influence. Before you redirect to the VP, understand what this person's role actually is: are they the primary evaluator, a user champion, a technical gatekeeper, or an influencer? Each role changes your strategy. 'I appreciate you saying that — can you tell me about your role in this evaluation and what would be most useful for me to know before I speak with your VP?' does two things: it validates their involvement and gathers intelligence that will make your VP conversation far more effective. Immediately redirecting to the VP can feel dismissive — and you lose an internal ally.",
    framework: "Multi-Stakeholder Navigation: every stakeholder tells you something about the deal.",
    principle: "The person who tells you they're not the decision-maker is almost always still important.",
    traps: [
      "Immediate VP redirect — you've just sidelined someone who was trying to help you",
      "Continuing with them as if nothing changed — you need to understand the org and they've given you a signal",
      "Immediate three-way call request — premature before you understand who this person is and what the VP needs to hear"
    ]
  },
  {
    id: "SL-OH10",
    category: "Objection Handling",
    difficulty: 1,
    scenario: "A mid-market prospect says: 'Your pricing is too expensive — we're not an enterprise company.' You realize they've only seen your enterprise-tier pricing sheet, not the mid-market pricing options that actually apply to them. What do you do?",
    quote: "A price objection built on the wrong information isn't a real objection.",
    options: [
      "Offer a discount on the enterprise package to make it more accessible for their size.",
      "Agree that the enterprise solution may be more than they need and suggest they revisit when they've grown.",
      "Ask for their actual budget range before sharing any additional pricing information.",
      "Acknowledge the concern and introduce the tiered pricing options that actually apply to a company their size — they've been working from the wrong sheet."
    ],
    correct: 3,
    consequences: {"customerTrust":7,"growth":7,"executionRisk":-3},
    explanation: "This isn't a real price objection — it's an information gap. The prospect is objecting to pricing that was never intended for them. The fix is straightforward: acknowledge the concern, take responsibility for the information gap, and walk them through the pricing tier that actually applies. This kind of objection often closes quickly once the right information is shared. Offering a discount on the wrong package costs you margin unnecessarily. Suggesting they 'come back when they've grown' is patronizing and loses the deal entirely. Asking for budget before correcting the information gap delays the obvious fix.",
    framework: "Objection Diagnosis: before responding to price, confirm the prospect is evaluating the right number.",
    principle: "Fix the information before you negotiate the price.",
    traps: [
      "Enterprise discount — you've just reduced margin on a product they don't need instead of showing them the right one",
      "Deferring to future growth — loses the deal and offends the prospect",
      "Budget question before correction — adds friction when the solution is simply showing the right price tier"
    ]
  },
]
