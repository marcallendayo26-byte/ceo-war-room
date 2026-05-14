export const CASES_BD = [
  {
    id: "PST01",
    category: "Partnership Strategy",
    difficulty: 1,
    scenario: "A major CRM platform with 200,000 business customers approaches you about a certified integration partnership. Building the integration takes six weeks. In exchange, you get listed in their marketplace and access to their partner co-sell program. Your product roadmap already has this integration planned for Q3 independent of any partnership.",
    quote: "\"We were going to build this anyway. Why do we need their partnership terms?\"",
    options: [
      "Accept the partnership — marketplace listing and co-sell access are distribution you cannot buy directly.",
      "Build the integration independently and skip the partnership — you get the same technical outcome without giving away co-sell economics.",
      "Negotiate a partnership-lite arrangement: list in the marketplace without the full co-sell program commitments.",
      "Delay the integration to Q4 until you can negotiate better partnership terms."
    ],
    correct: 0,
    consequences: {"growth":15,"strategicPosition":10,"cash":5,"customerTrust":5},
    explanation: "Building the integration gets you the technical connection. The partnership gets you distribution — marketplace discovery by 200,000 customers and a co-sell motion with their sales team. These are fundamentally different outcomes. The integration was on your roadmap anyway, so the incremental cost of partnership terms is low against the distribution upside.",
    framework: "Build vs. Partner vs. Both — technical parity is not distribution parity",
    principle: "An integration gives you the connection. A partnership gives you the audience. They are not the same thing.",
    traps: [
      "Building independently gets you the feature but not the discovery — you are invisible in a 200K-customer marketplace.",
      "Partnership-lite without co-sell eliminates the highest-value component of the partnership structure.",
      "Delaying to negotiate better terms is a mistake when the terms are already reasonable for the distribution upside on offer."
    ]
  },
  {
    id: "PST02",
    category: "Partnership Strategy",
    difficulty: 2,
    scenario: "Your first significant reseller partner — responsible for three of your last five enterprise deals — is asking for 18-month exclusivity in their vertical (mid-market manufacturing). They argue exclusivity motivates them to invest in your product training and customer pipeline. Your team worries about locking out other partners and your own direct sales in that vertical.",
    quote: "\"We need exclusivity or we cannot justify the investment in your product.\"",
    options: [
      "Grant full exclusivity — they have already proven performance and need the incentive to go deeper.",
      "Offer performance-conditioned exclusivity: they retain exclusivity in the vertical as long as they hit quarterly revenue milestones. Underperformance triggers a 60-day cure period before exclusivity lapses.",
      "Decline all exclusivity — exclusivity limits your market access and creates dangerous dependency.",
      "Counter with 6-month exclusivity and reassess based on results."
    ],
    correct: 1,
    consequences: {"growth":10,"strategicPosition":10,"executionRisk":-10,"cash":5},
    explanation: "Unconditional exclusivity rewards the promise of effort, not actual results. Performance-conditioned exclusivity aligns incentives correctly — the partner earns the market protection by delivering revenue, not by signing a contract. The cure period is professional courtesy that avoids punishing a partner for one bad quarter while still protecting your market access.",
    framework: "Performance-conditioned exclusivity — earn the protection through results",
    principle: "Never give away market access unconditionally. Exclusivity should be earned every quarter, not locked in at signing.",
    traps: [
      "Unconditional exclusivity hands over market protection with no recourse if the partner underperforms or goes quiet.",
      "Rejecting all exclusivity for a partner who has already delivered results removes their incentive to invest further.",
      "Six months is too short for a partner to build a genuine pipeline and validate the investment — it rewards short sprints, not market development."
    ]
  },
  {
    id: "PST03",
    category: "Partnership Strategy",
    difficulty: 2,
    scenario: "A large enterprise software platform with 50,000 customers in your exact target segment is inviting you to become a certified ISV. The benefits: marketplace listing, co-sell access, and dedicated partner support. The cost: 20% of revenue on all platform-sourced deals, a $15K annual certification fee, and a roadmap commitment to maintain compatibility with their quarterly API updates.",
    quote: "\"Their platform reaches every customer we want. But 20% revenue share is steep.\"",
    options: [
      "Join as a full ISV partner — distribution access to 50K target customers justifies the economics.",
      "Decline — 20% revenue share permanently reduces your margin on a growing revenue stream.",
      "Model the math first: calculate what CAC currently costs you for a comparable enterprise deal, compare it to 20% revenue share on expected platform-sourced ACV, and decide based on whether 20% is cheaper than your current acquisition cost.",
      "Negotiate the revenue share down to 10-12% before committing to any certification investment."
    ],
    correct: 2,
    consequences: {"strategicPosition":10,"growth":10,"profitability":5,"executionRisk":-5},
    explanation: "Revenue share decisions must be evaluated against your alternative cost of customer acquisition, not against an abstract \"too high\" threshold. If your enterprise CAC is $8,000 and the platform-sourced ACV is $30,000, 20% ($6,000) is cheaper than going direct. If your direct CAC is $2,000, 20% is expensive. The math, not the percentage, makes the decision.",
    framework: "Revenue share vs. CAC comparison — partner cost must be evaluated against your acquisition alternative",
    principle: "Revenue share is only expensive if it costs more than what you would spend to acquire the same customer yourself.",
    traps: [
      "Committing without modeling the unit economics risks entering a partnership where distribution is profitable but margin is permanently impaired.",
      "Declining distribution to 50K target customers over a revenue share percentage without doing the math is an intuition-based decision that could cost significant growth.",
      "Negotiating before modeling your own numbers means you do not know whether 10% or 20% is the right threshold."
    ]
  },
  {
    id: "PST04",
    category: "Partnership Strategy",
    difficulty: 1,
    scenario: "You have six inbound partnership requests sitting in your queue from companies that have approached you directly. Your CEO wants you to also run an outbound partnership program targeting 20 specific strategic partners. You have bandwidth for four partnerships this quarter. How do you allocate between inbound and outbound?",
    quote: "\"Everyone wants to partner with us now. But we also have a target list. Which do we work?\"",
    options: [
      "Work all six inbound first — they approached you, so their motivation is higher.",
      "Focus entirely on the 20 strategic outbound targets — your list reflects your strategy, not their agenda.",
      "Respond positively to all six inbound to maintain goodwill, but only advance the ones that convert quickly.",
      "Evaluate all six inbound against your strategic criteria and prioritize the two or three that best fit; use remaining bandwidth for your highest-priority outbound targets."
    ],
    correct: 3,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-5,"teamMorale":5},
    explanation: "Inbound partners have higher initial motivation, but motivation alone does not equal strategic fit. The right framework is to screen all inbound against your strategic criteria — vertical fit, customer overlap, revenue potential, integration depth — and advance only the ones that pass. Remaining bandwidth goes to your highest-priority outbound targets. Partnership quality beats partnership volume.",
    framework: "Strategic partner qualification — screen inbound, prioritize outbound, optimize for fit not volume",
    principle: "Your partner roster should reflect your strategy. Inbound enthusiasm is a starting point, not a qualification.",
    traps: [
      "Working inbound in arrival order optimizes for partner motivation, not strategic value.",
      "Ignoring inbound entirely wastes warm opportunities that may be faster to close than cold outbound.",
      "Responding positively to all six without advancing them creates expectation debt and damages relationships when you go quiet."
    ]
  },
  {
    id: "PST05",
    category: "Partnership Strategy",
    difficulty: 3,
    scenario: "A major Systems Integrator — one of the top five global SIs — has approached you about becoming a delivery partner. They want to implement your product for their enterprise clients. This is a significant distribution opportunity. The catch: they also implement your two biggest competitors and will not commit to any preferential treatment of your product.",
    quote: "\"They will bring us into deals. But they will also bring our competitors.\"",
    options: [
      "Accept, but invest heavily in SI enablement to make your product the easiest and most profitable for their consultants to implement — create a pull motion from within the SI organization.",
      "Decline — a partner who actively implements competitors will never be a true advocate for your product.",
      "Accept the SI partnership — access to global enterprise deals outweighs the neutrality concern.",
      "Negotiate for preferred partner status before signing any agreement."
    ],
    correct: 0,
    consequences: {"growth":10,"strategicPosition":15,"executionRisk":-5,"teamMorale":5},
    explanation: "Neutral SI partnerships are won from the inside, not from the contract. Their consultants recommend what they know best and what earns them the most billable hours. The BD strategy is to make your product the one that is easiest to implement, best documented, and most lucrative for their practice — that creates genuine preference without exclusivity. Declining a global SI because they also implement competitors is leaving major distribution on the table.",
    framework: "SI preference through enablement — create pull from the consultant, not from the contract",
    principle: "You cannot contract your way to partner preference. You earn it by making your product the most valuable for their consultants to recommend.",
    traps: [
      "Accepting without an enablement strategy produces a passive listing relationship with no active recommendation.",
      "Declining global SI distribution because of multi-vendor neutrality is a significant strategic error — nearly all major SIs are multi-vendor.",
      "Preferred partner status in a multi-vendor SI is largely cosmetic — the real preference happens at the consultant level, not in the contract."
    ]
  },
  {
    id: "PST06",
    category: "Partnership Strategy",
    difficulty: 2,
    scenario: "You learn that a potential technology partner — a company whose product is adjacent but not competitive — is in advanced acquisition talks with your largest competitor. The partnership would have given you access to their 30,000-customer base. The acquisition may close in 60 days. You must decide whether to accelerate, pause, or abandon the partnership discussions.",
    quote: "\"If our competitor acquires them, any partnership we sign becomes worthless.\"",
    options: [
      "Immediately accelerate and attempt to close a signed partnership before the acquisition completes.",
      "Have a direct conversation with their BD team: understand whether a partnership signed pre-acquisition would survive the transaction, and decide based on what you learn.",
      "Pause all discussions and wait to see if the acquisition closes before investing more time.",
      "Abandon the partnership and immediately pursue their two closest competitors as an alternative."
    ],
    correct: 1,
    consequences: {"strategicPosition":10,"executionRisk":-10,"growth":5,"cash":5},
    explanation: "The right move is not speed or pause — it is information. A pre-acquisition partnership agreement may survive or may be void depending on deal structure, change-of-control clauses, and acquirer intentions. Before deciding, you need to know what a signed agreement would actually be worth post-acquisition. That question is direct and professional, and the answer changes your decision entirely.",
    framework: "Change-of-control due diligence — understand survivability before accelerating or abandoning",
    principle: "Never race to sign a contract whose value you have not confirmed survives the event that threatens it.",
    traps: [
      "Racing to sign before the acquisition closes may produce a signed agreement that the acquirer voids on day one.",
      "Pausing entirely may allow the acquisition to close and the opportunity to disappear while you wait.",
      "Abandoning without first understanding survivability discards a potentially valuable pre-acquisition window."
    ]
  },
  {
    id: "PST07",
    category: "Partnership Strategy",
    difficulty: 1,
    scenario: "One of your happiest customers — a 200-person professional services firm — approaches you about becoming a reseller of your product to their own clients. They have 40 active client relationships in your exact ICP. They want a 20% referral fee and your standard reseller agreement. Your direct sales team is nervous about channel conflict.",
    quote: "\"Our best customer wants to sell us. Is that a good thing?\"",
    options: [
      "Decline — customers who become resellers create pricing complexity and channel conflict.",
      "Accept but cap their territory to only the clients they currently serve to prevent direct channel conflict.",
      "Accept — a motivated reseller with 40 ICP clients in active relationships is a high-conversion partner.",
      "Offer a referral agreement instead of a full reseller arrangement — they get commission, you retain the sales relationship."
    ],
    correct: 2,
    consequences: {"growth":15,"cash":10,"customerTrust":10,"strategicPosition":5},
    explanation: "A customer who becomes a reseller has two powerful advantages: they use the product themselves (authentic advocacy) and they already have trusted relationships with 40 ICP clients. This is among the highest-conversion partner profile available. The channel conflict concern is manageable — deal registration and territory clarity solve it. Turning down an enthusiastic, credible reseller over a manageable concern is poor BD judgment.",
    framework: "Customer-to-partner conversion — self-use plus warm relationships creates highest-conversion partner profile",
    principle: "Your most credible resellers are the ones who use your product themselves. Manage the conflict, do not avoid the opportunity.",
    traps: [
      "Declining a motivated, credible reseller with direct ICP access over a manageable concern is a significant missed opportunity.",
      "Capping to current clients limits the partnership to zero net-new distribution and removes the primary value of the arrangement.",
      "A referral-only structure removes their incentive to invest in active pipeline development — they will only pass warm leads, not develop territory."
    ]
  },
  {
    id: "PST08",
    category: "Partnership Strategy",
    difficulty: 3,
    scenario: "You have operated a successful three-year technology alliance with a complementary SaaS vendor. Their new CEO has pivoted their product upmarket into enterprise, which now partially overlaps with your target segment. The overlap is approximately 25% of deals. Your joint customers are asking whether the two products still work well together.",
    quote: "\"We were partners. Their new direction makes us partial competitors.\"",
    options: [
      "Immediately terminate the alliance — a partner who competes with you in any deals is no longer a viable partner.",
      "Continue the alliance unchanged — 25% overlap is manageable and the 75% complementary value remains.",
      "Accelerate your own upmarket push to reclaim the overlapping segment before they establish it.",
      "Negotiate a co-existence agreement: define the deal scenarios where you collaborate versus compete, formalize mutual referral for non-overlapping deals, and establish customer communication protocols."
    ],
    correct: 3,
    consequences: {"customerTrust":10,"strategicPosition":10,"executionRisk":-10,"growth":5},
    explanation: "Co-opetition — the state of being simultaneously cooperative and competitive — is common at scale and manageable with the right agreements. Terminating a successful three-year alliance over 25% overlap destroys the 75% value still intact. A co-existence agreement with clear rules of engagement protects both parties, reassures joint customers, and preserves the relationship value that took three years to build.",
    framework: "Co-opetition management — define the boundary, preserve the alliance, protect the customers",
    principle: "Partial competition does not require total separation. Define where you compete and where you collaborate, then enforce the boundary.",
    traps: [
      "Terminating a valuable alliance over 25% overlap destroys significant mutual value and likely damages joint customer relationships.",
      "Continuing unchanged without addressing the overlap creates ambiguity that erodes trust with both joint customers and the partner.",
      "Accelerating your upmarket push in response to an ally's pivot is reactivity dressed as strategy."
    ]
  },
  {
    id: "PST09",
    category: "Partnership Strategy",
    difficulty: 2,
    scenario: "Your partnership program has grown to 12 active partners. Leadership is asking for a quarterly partnership ROI review. You track number of partners, pipeline generated, and deals closed. Your CFO says the data is insufficient and wants a true ROI calculation. How do you build a defensible partnership ROI framework?",
    quote: "\"Tell me what we actually get per dollar invested in partnerships.\"",
    options: [
      "Build a full unit economics model: partner-sourced ACV against total partner program cost (headcount, commissions, MDF, enablement), compared to your direct CAC for equivalent deals.",
      "Track pipeline generated per partner and compare to direct sales pipeline cost — revenue attribution is sufficient.",
      "Use partner NPS and engagement scores as proxies for ROI — financial metrics miss the strategic value.",
      "Report deals closed through partner channel versus direct as the primary ROI metric."
    ],
    correct: 0,
    consequences: {"profitability":10,"strategicPosition":5,"executionRisk":-5,"teamMorale":5},
    explanation: "True partnership ROI requires the complete cost picture compared against an acquisition alternative. Deals closed without program cost is just a revenue number. Pipeline without cost comparison is directional at best. The defensible framework is partner-sourced ACV divided by total program cost (all-in: headcount, commissions, certifications, MDF, events), benchmarked against your direct sales CAC for equivalent deal size and complexity.",
    framework: "Partnership ROI = partner-sourced ACV ÷ total program cost vs. direct CAC equivalent",
    principle: "Partnership ROI is only meaningful when measured against what you would have spent to acquire the same customer directly.",
    traps: [
      "Pipeline attribution without program cost produces a revenue number, not a return calculation.",
      "Partner NPS and engagement scores are relationship health signals, not ROI — they do not answer the CFO's question.",
      "Deals closed without a cost denominator is the most common and least useful partnership metric reported to CFOs."
    ]
  },
  {
    id: "PST10",
    category: "Partnership Strategy",
    difficulty: 3,
    scenario: "You are evaluating three potential strategic partnerships simultaneously. Partner A: large market reach, low strategic fit, their customers use your product for a tangential use case. Partner B: small but highly aligned, their customers are your exact ICP, but the partner has limited brand recognition. Partner C: medium reach, medium fit, but a guaranteed co-marketing budget of $200K.",
    quote: "\"One has reach. One has fit. One has money. Pick two.\"",
    options: [
      "Partner A and C — market reach and co-marketing budget produce the fastest top-of-funnel results.",
      "Partner B first: high ICP fit means every deal generates a reference-quality customer. Use early wins to attract Partner A or C at better terms.",
      "Partner B and C — ICP alignment and co-marketing funding is the most defensible combination.",
      "All three — partner capacity allows it and diversification reduces dependency risk."
    ],
    correct: 1,
    consequences: {"strategicPosition":15,"growth":10,"customerTrust":5,"executionRisk":-10},
    explanation: "ICP-fit partnerships generate reference customers, case studies, and proof points that compound. Partner A's reach with tangential use cases produces volume without depth — those customers churn faster and refer less. Using Partner B wins to upgrade your negotiating position with reach partners is a sequencing strategy, not a compromise. Building on proof before scale is sound BD architecture.",
    framework: "Partnership sequencing — fit before scale, proof before reach",
    principle: "Build on high-fit partnerships first. Reference customers from the right ICP unlock better terms from reach partners later.",
    traps: [
      "Reach plus marketing budget without ICP fit produces pipeline that does not convert or retain well.",
      "Choosing C for the co-marketing budget before validating ICP fit means spending $200K on the wrong market signal.",
      "Three simultaneous partnerships exceeds most BD team capacity and produces three shallow relationships instead of one deep one."
    ]
  },
  {
    id: "DST01",
    category: "Deal Structuring",
    difficulty: 1,
    scenario: "You are negotiating your first formal reseller agreement with a regional partner who has already closed two deals using an informal arrangement. They are asking for a 30% revenue share on all deals they source. Your direct sales cost for comparable enterprise deals runs approximately 22% of ACV when fully loaded. How do you approach the revenue share negotiation?",
    quote: "\"Thirty percent is what our resellers in other industries earn. It's standard.\"",
    options: [
      "Accept 30% — they have already proven performance and reseller relationships should be rewarded generously.",
      "Decline 30% — it exceeds your fully-loaded direct sales cost and makes partner deals less profitable than direct.",
      "Counter with a tiered structure: 20% on deals up to $50K ACV, 25% on deals above $50K, with a performance bonus to 30% if they hit annual targets.",
      "Offer 15% with a one-year review — start conservative and let performance drive increases."
    ],
    correct: 2,
    consequences: {"profitability":10,"growth":10,"executionRisk":-5,"strategicPosition":5},
    explanation: "A flat 30% exceeds your direct sales cost, making partner-sourced deals marginally less profitable than direct — which is acceptable for smaller deals where your team has limited reach, but problematic on large deals where your direct team could close. Tiered structures with performance bonuses align incentives: partners earn more on bigger deals and by delivering volume. Starting low and reviewing creates different dynamics — partners anchor to the low number and resent the review.",
    framework: "Revenue share tiering — align partner economics to deal complexity and volume performance",
    principle: "Revenue share should make partner deals economically attractive without making direct sales uncompetitive on your largest opportunities.",
    traps: [
      "30% flat on all deals makes large partner-sourced deals less profitable than your direct sales motion for the same contract.",
      "Declining before offering a counter creates an adversarial start to what should be a long-term commercial relationship.",
      "Starting at 15% anchors the relationship low — performance-based upside to 30% requires significantly more partner investment to reach the level they opened with."
    ]
  },
  {
    id: "DST02",
    category: "Deal Structuring",
    difficulty: 2,
    scenario: "A large enterprise software vendor wants to white-label your product for their customer base of 80,000 SMBs. They will sell it under their brand, handle all customer support, and manage billing. They want to pay you a wholesale price of 35% of their end-user retail price. You currently sell the same product direct at $199 per month per user.",
    quote: "\"We handle everything. You just take 35 cents on every dollar we collect.\"",
    options: [
      "Accept — 35% of their retail price at 80,000 SMBs represents massive scale even at lower margin.",
      "Decline — white-labeling at 35% destroys your brand and significantly impairs your margin structure.",
      "Counter with 55% wholesale to bring the economics closer to your direct margin.",
      "Model the cannibalization risk and floor economics first: what is the minimum wholesale price that keeps you profitable given your infrastructure cost, and does white-labeling at scale undercut your direct SMB pricing power?"
    ],
    correct: 3,
    consequences: {"profitability":10,"cash":5,"strategicPosition":10,"executionRisk":-10},
    explanation: "White-label deals require two analyses before negotiating: (1) floor economics — what is the minimum margin you can operate at given infrastructure cost? (2) cannibalization — does white-labeling at this price prevent you from selling direct to SMBs at $199? If their end-user price is $80/month and your wholesale is $28, you may be permanently depressing the SMB market price. If it is $250/month and wholesale is $87, the economics work well. Do the math before countering.",
    framework: "White-label floor economics + cannibalization analysis — model before negotiating",
    principle: "White-label deals look like scale. They can also permanently impair your pricing power in a segment. Model both before signing.",
    traps: [
      "Accepting without modeling creates a permanent wholesale commitment that may undercut your direct pricing or fail to cover infrastructure cost at higher usage.",
      "Declining 80,000 SMBs without even modeling the economics is scale aversion over an unanswered financial question.",
      "Countering with 55% before knowing your floor is anchoring to a number that may still be wrong in either direction."
    ]
  },
  {
    id: "DST03",
    category: "Deal Structuring",
    difficulty: 2,
    scenario: "A strategic partner wants a Most Favored Nation (MFN) clause in your agreement: they want a contractual guarantee that no other partner will receive better commercial terms than they do. If you give any other partner better pricing or terms, their agreement automatically adjusts to match. They are your second-largest partner by revenue.",
    quote: "\"We just need assurance that we're not at a disadvantage to your other partners.\"",
    options: [
      "Decline the MFN clause — it permanently limits your ability to negotiate differentiated terms with future partners.",
      "Accept the MFN clause — it is a reasonable ask from a significant revenue contributor.",
      "Offer a limited MFN: same terms as partners of equivalent tier and volume commitment, not an open-ended guarantee across all partner types.",
      "Accept MFN for pricing only, excluding other commercial terms like territory, exclusivity, and support levels."
    ],
    correct: 0,
    consequences: {"strategicPosition":15,"executionRisk":-15,"growth":5,"profitability":5},
    explanation: "An open-ended MFN clause is one of the most dangerous terms in a BD agreement. It means every future negotiation with every other partner becomes constrained by what you have already given this one. You can never give a startup partner an introductory rate, never offer a strategic partner a creative deal structure, and never negotiate differently based on market or volume. MFN clauses that sound like fairness commitments become competitive handcuffs.",
    framework: "MFN clause risk — open-ended MFN permanently constrains all future partner negotiations",
    principle: "Most Favored Nation sounds fair. It is actually a permanent ceiling on your commercial flexibility with every future partner.",
    traps: [
      "Accepting an open-ended MFN trades short-term goodwill for permanent commercial inflexibility across your entire partner ecosystem.",
      "A limited MFN within tier is more defensible but still creates internal complexity and audit obligations for every future deal.",
      "Restricting MFN to pricing only still creates a contractual obligation to review and match pricing with every new deal — ongoing administrative burden and exposure."
    ]
  },
  {
    id: "DST04",
    category: "Deal Structuring",
    difficulty: 1,
    scenario: "You are finalizing a co-development agreement with a technology partner. The plan is to build a joint integration module that takes four months and will be embedded in both products. The partner's legal team proposes that all jointly developed IP should be co-owned 50/50. Your engineering team will contribute 70% of the build effort.",
    quote: "\"We each own half. That's how joint development works.\"",
    options: [
      "Accept 50/50 co-ownership — joint development should produce joint ownership regardless of contribution ratio.",
      "Reject co-ownership entirely: you retain full IP ownership; the partner receives a perpetual license to use the joint module.",
      "Counter with contribution-weighted ownership: 70/30 reflecting the actual engineering investment.",
      "Accept 50/50 ownership but require mutual consent for any third-party licensing of the jointly developed IP."
    ],
    correct: 1,
    consequences: {"strategicPosition":10,"profitability":5,"executionRisk":-10,"cash":5},
    explanation: "Co-owned IP creates permanent legal entanglement — neither party can commercialize, license, or modify the asset without the other's consent. At 70% contribution, your team built most of the module but receives the same rights as the party who built 30%. Retained ownership with a perpetual license to the partner is cleaner: you control your IP roadmap, they have full usage rights, and no joint consent is required for future development.",
    framework: "IP ownership in co-development — license beats co-ownership for operational flexibility",
    principle: "Co-owned IP is IP neither party fully controls. A license preserves your roadmap freedom while giving your partner everything they actually need.",
    traps: [
      "50/50 co-ownership regardless of contribution ratio is legally equal but economically unbalanced — and creates joint consent requirements on every future change.",
      "Contribution-weighted ownership is fairer but still creates joint consent complexity on every future change — retaining full ownership and granting a perpetual license eliminates that entanglement entirely.",
      "50/50 with mutual consent for licensing still leaves you unable to independently commercialize your own engineering investment."
    ]
  },
  {
    id: "DST05",
    category: "Deal Structuring",
    difficulty: 3,
    scenario: "A major telecommunications company wants to bundle your software with their enterprise connectivity packages. They project 500 customer deployments in year one. In exchange for preferred bundle placement, they want you to guarantee a fixed wholesale price for three years with no increase, and they want a Service Level Agreement with financial penalties if you miss 99.9% uptime.",
    quote: "\"We need price certainty and reliability certainty before we can bundle your product.\"",
    options: [
      "Accept both terms — 500 enterprise deployments in year one justifies significant commercial concessions.",
      "Accept the SLA with penalties but decline the three-year price lock — inflation and infrastructure cost changes make it untenable.",
      "Negotiate both: accept a three-year price lock indexed to CPI for inflation protection, and accept the SLA but negotiate the penalty structure so it applies only to extended outages, not brief incidents.",
      "Decline both — bundle arrangements with carriers always favor the carrier and create more risk than reward."
    ],
    correct: 2,
    consequences: {"cash":5,"growth":15,"executionRisk":-10,"strategicPosition":10},
    explanation: "A three-year flat price lock ignores cost inflation and infrastructure scaling. A CPI index preserves the economic logic of the deal while giving the partner their pricing certainty. Unstructured SLA penalties — financial penalties for any uptime miss — can be disproportionate for brief incidents that have no material customer impact. Negotiating a tiered penalty structure (minor incidents = service credits, extended outages = financial penalties) is standard and defensible.",
    framework: "Long-term contract structuring — CPI indexing plus tiered SLA penalties preserves economics and limits downside",
    principle: "Price locks are reasonable. Price locks without inflation protection are deferred losses. Index everything you agree to hold flat.",
    traps: [
      "Accepting a flat three-year price lock means every year of cost inflation directly compresses your margin on a growing revenue stream.",
      "Accepting SLA penalties without tiering them means a five-minute incident during low-traffic hours could trigger the same financial consequence as a four-hour outage.",
      "Declining 500 enterprise deployments because the commercial terms need negotiation is the wrong starting position."
    ]
  },
  {
    id: "DST06",
    category: "Deal Structuring",
    difficulty: 2,
    scenario: "You are structuring a referral agreement with a boutique consulting firm. The debate internally is whether to pay a one-time referral fee (10% of first-year ACV, paid on contract signing), a recurring commission (8% of all revenue for the life of the customer), or a hybrid (5% one-time plus 3% recurring for two years).",
    quote: "\"We want something that keeps them motivated after the deal closes, not just before.\"",
    options: [
      "One-time referral fee — simpler to administer and aligns with the partner's effort, which is heaviest at deal close.",
      "Recurring commission for life of customer — maximizes partner motivation to refer high-quality, long-retention customers.",
      "Let the consulting firm choose the structure that best fits their business model.",
      "Hybrid structure — balances closing incentive with retention-aligned motivation without indefinite commission obligations."
    ],
    correct: 3,
    consequences: {"growth":10,"profitability":5,"customerTrust":5,"executionRisk":-5},
    explanation: "One-time fees incentivize closing, not quality. Partners who earn nothing after close have no reason to refer customers who are likely to retain well versus customers who close quickly. Lifetime recurring commissions create indefinite obligations that are difficult to forecast and can outlast the value the partner delivered. Hybrid structures create the closing incentive needed for partners to prioritize your product while the multi-year tail keeps them invested in customer quality without permanent open-ended cost.",
    framework: "Partner compensation design — align incentives to desired behavior across the customer lifecycle",
    principle: "Pay partners for what you want. One-time fees buy deals. Recurring commissions buy quality deals. Hybrid buys both.",
    traps: [
      "One-time fees create partners who are motivated to close but indifferent to whether the customer succeeds post-sale.",
      "Lifetime recurring creates a permanent cost that may far exceed the value the partner delivered after year two.",
      "Letting the partner choose their structure means every partner agreement is different and your commission book becomes unmanageable at scale."
    ]
  },
  {
    id: "DST07",
    category: "Deal Structuring",
    difficulty: 3,
    scenario: "You are negotiating a strategic go-to-market agreement with a well-funded startup whose product is directly complementary to yours. Both companies are roughly equal in stage. They propose a fully reciprocal arrangement: equal co-marketing investment, mutual referrals with no financial compensation, and shared customer success resources on joint accounts. No money changes hands.",
    quote: "\"Let's keep it clean. Equal effort, equal benefit, no spreadsheets.\"",
    options: [
      "Accept the co-marketing and referral reciprocity, but define clear success metrics and a 90-day review to assess whether each party is contributing equally before formalizing long-term terms.",
      "Require financial referral fees on both sides — equity arrangements always break down when contribution becomes unequal.",
      "Accept the reciprocal arrangement — simplicity and equality build stronger long-term partnerships.",
      "Decline non-financial arrangements at your stage — you need a financial incentive structure to hold partners accountable."
    ],
    correct: 0,
    consequences: {"growth":5,"strategicPosition":10,"teamMorale":5,"executionRisk":-10},
    explanation: "Reciprocal equity arrangements work well when both parties contribute equally — and collapse when they do not. The risk is not the structure itself, it is the absence of a calibration mechanism. A 90-day review with defined contribution metrics (referrals passed, co-marketing assets delivered, joint customer engagements) creates the accountability layer without introducing financial complexity. If contribution is genuinely equal, the arrangement continues. If not, you have the data to restructure.",
    framework: "Equity partnership review gate — define contribution metrics before assuming equal participation",
    principle: "Reciprocal partnerships work until they do not. Build in a calibration review before the imbalance becomes resentment.",
    traps: [
      "Accepting pure reciprocity without metrics gives you no mechanism to address contribution imbalance before it damages the relationship.",
      "Mandating financial fees on a reciprocal arrangement between peers introduces transaction complexity that may deter the partnership entirely.",
      "Declining a well-aligned startup partner because the structure is non-financial is commercially rigid — some of the strongest partnerships operate on equity, not fees."
    ]
  },
  {
    id: "DST08",
    category: "Deal Structuring",
    difficulty: 1,
    scenario: "A potential partner is asking for a 30-day exclusivity window before signing — they want you to pause all other partnership discussions in their vertical while they conduct internal approvals. They argue this is standard practice to protect their investment in the evaluation process. This would block three other conversations you have in progress.",
    quote: "\"Give us thirty days to get approvals. We just need to know you're not signing someone else while we're deciding.\"",
    options: [
      "Grant the 30-day exclusivity — it is reasonable to protect a partner who is actively evaluating.",
      "Offer a limited commitment: you will not proactively sign a competing partner in their vertical during their review, but you will not pause existing conversations already in progress.",
      "Decline all exclusivity on evaluation — you cannot pause your pipeline for a company that has not committed.",
      "Grant exclusivity only if they commit to a decision date and a signed LOI within 15 days."
    ],
    correct: 1,
    consequences: {"strategicPosition":10,"executionRisk":-5,"growth":5,"teamMorale":5},
    explanation: "Pre-signature exclusivity is a common ask and a legitimate one — but it should not block conversations already underway. The professional counter is a good-faith commitment: you will not proactively sign a new competing partner during their review window, but you will not freeze active discussions. This protects your pipeline while signaling genuine seriousness to the evaluating partner.",
    framework: "Pre-signature exclusivity — good-faith non-solicitation, not pipeline freeze",
    principle: "Commitment before signature should be proportional. Good-faith non-solicitation is reasonable. Pausing your active pipeline is not.",
    traps: [
      "Full 30-day exclusivity freezes three active conversations for a partner who has not yet committed to anything.",
      "Flat declining exclusivity signals you are not serious about the partnership and will be negotiating with everyone simultaneously.",
      "Demanding an LOI in 15 days as the price of exclusivity creates pressure that may derail a genuine partnership that simply requires internal approval time."
    ]
  },
  {
    id: "DST09",
    category: "Deal Structuring",
    difficulty: 2,
    scenario: "A large platform partner wants your customer usage data as part of the integration agreement — specifically, which features your mutual customers use, session frequency, and customer health scores. They argue this data helps them better serve joint customers. Their legal team says this is standard for deep integration partners.",
    quote: "\"To make the integration truly valuable, we need to see how customers are using both products.\"",
    options: [
      "Share the requested data — deep integration partners need usage data to deliver joint customer value.",
      "Decline all customer data sharing — usage data and health scores are commercially sensitive and could expose your customer relationships.",
      "Share data only for customers who have explicitly opted in to joint data sharing.",
      "Share anonymized, aggregated usage trends only — no individual customer data, no health scores, no identifiable records."
    ],
    correct: 2,
    consequences: {"customerTrust":15,"executionRisk":-10,"strategicPosition":5,"growth":5},
    explanation: "Customer usage data and health scores are commercially sensitive: your churn risk signals, engagement patterns, and product adoption rates reveal your business health to a partner who may become a competitor or share data with one. Opt-in data sharing respects customer consent, limits your legal exposure, and builds trust with customers who choose to participate. It also sets a principled standard that protects you when the partnership dynamics change.",
    framework: "Customer data sharing governance — consent-based sharing protects commercial and legal exposure",
    principle: "Customer data belongs to your customers first. Share it on their terms, not a partner's contract terms.",
    traps: [
      "Sharing health scores and usage data gives your partner a real-time view of your churn risk and customer engagement — commercially sensitive information that should not be in any partner agreement.",
      "Declining all data sharing may limit the depth of integration possible and is a harder position to maintain if the partner has legitimate joint-service use cases.",
      "Aggregated anonymized data is safer than individual records but still shares product engagement patterns that reveal your business trajectory."
    ]
  },
  {
    id: "DST10",
    category: "Deal Structuring",
    difficulty: 3,
    scenario: "You are finalizing a major strategic partnership agreement. Your legal team has identified five non-standard clauses the partner has inserted: (1) a unilateral termination right with 30-day notice, (2) an audit right over your customer contracts, (3) a non-compete in adjacent product categories, (4) a joint steering committee with equal veto rights on product integrations, and (5) a benchmark pricing clause requiring annual price transparency.",
    quote: "\"Legal says five clauses are non-standard. Which battles do we fight?\"",
    options: [
      "Push back on all five — accepting non-standard terms sets a precedent for all future partner agreements.",
      "Accept all five — the partnership opportunity justifies accepting their standard negotiating positions.",
      "Refer all five to your legal team and let them negotiate — this is above BD scope.",
      "Prioritize based on strategic impact: fight hard on the non-compete and audit right (existential exposure), negotiate the steering committee structure, and accept the termination right and pricing benchmark with appropriate definitions."
    ],
    correct: 3,
    consequences: {"strategicPosition":15,"executionRisk":-15,"profitability":5,"growth":5},
    explanation: "Contract negotiations require triage, not uniform resistance. The non-compete in adjacent categories is existential — it limits your product roadmap permanently. The audit right over customer contracts exposes commercially sensitive client relationships. These are the fights worth having. The steering committee veto can be structured as advisory-only or with narrow scope. Termination rights and benchmark pricing with good definitions are manageable. Fight the clauses that threaten your business, accommodate the ones you can live with.",
    framework: "Contract clause triage — fight existential terms, negotiate structural terms, accept manageable terms",
    principle: "Not all non-standard clauses are equal. Fight the ones that limit your future. Live with the ones that are annoying but survivable.",
    traps: [
      "Pushing back uniformly on all five signals inflexibility and exhausts goodwill on terms that do not actually matter.",
      "Accepting all five includes an open-ended non-compete and an audit right that creates permanent commercial exposure.",
      "Referring all five to legal without BD prioritization produces a legal negotiation that is technically thorough but commercially directionless."
    ]
  },
]
