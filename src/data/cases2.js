export const CASES2 = [
  {
    "id": "S06",
    "category": "Strategy",
    "difficulty": 1,
    "scenario": "Your B2B SaaS company needs a feature your top clients have been requesting for months: a native accounting integration. You can build it in-house in 4 months, or use an existing API connector like Merge.dev that takes 2 weeks but costs $800/month in licensing.",
    "quote": "\"We should build everything ourselves. We own the IP and control the roadmap.\"",
    "options": [
      "Use the third-party API. Ship in 2 weeks and keep the team on core product.",
      "Build it in-house. Own the integration fully and pay nothing ongoing.",
      "Build it in-house but do a quick API workaround first to buy time.",
      "Run a competitive analysis to determine which integrations your competitors already offer, then prioritize based on that landscape rather than committing to either build or buy yet."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Build-vs-buy is a resource allocation decision, not a pride decision. If the integration is not your core differentiator, buying saves 3.5 months of engineering time that compounds into your actual product. $800/month for a solved problem is almost always cheaper than the opportunity cost of your best engineers.",
    "framework": "Build vs Buy — only build what gives you a differentiated advantage. Everything else is infrastructure that someone else has already solved better.",
    "principle": "Ship in 2 weeks or ship in 4 months. The market does not wait.",
    "traps": [
      "Sounds disciplined but is actually expensive. 4 months of senior engineering time costs far more than $800/month.",
      "Two systems doing the same job creates technical debt immediately and confuses your support team.",
      "Adds a research step before acting on an already-clear client request — spends weeks analyzing the landscape when a 2-week solution is already on the table."
    ]
  },
  {
    "id": "S07",
    "category": "Strategy",
    "difficulty": 2,
    "scenario": "Your platform has 3,000 active business users. Developers from adjacent companies are asking for API access to build on top of your product. Opening an API would create an ecosystem but also require documentation, rate-limiting infrastructure, and a developer support process you do not have yet.",
    "quote": "\"An open API turns us into a platform. That is a 10x opportunity.\"",
    "options": [
      "Launch a public API immediately to capture developer interest now.",
      "Launch a private beta API with 5 selected developer partners first.",
      "Ignore the API requests. Focus on the core product for your main customers.",
      "Build the full API program — docs, sandbox, support team — before launching."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 15,
      "profitability": 0,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 20
    },
    "explanation": "A public API before you understand how developers use it creates support nightmares and breaks trust when you have to version or deprecate. A private beta with real partners lets you learn which use cases matter, where the API falls short, and how much support load to expect — before you are locked in.",
    "framework": "Staged Platform Opening — treat the API like a product. Validate with a small group, learn, then open to the public with real documentation and support.",
    "principle": "Opening your platform too fast is as dangerous as opening it too slow.",
    "traps": [
      "Public without structure means inbound support tickets you cannot handle, breaking changes that damage early adopters.",
      "Ignoring developer demand is ignoring a distribution channel. Third-party apps can become your biggest acquisition source.",
      "Full build before any feedback means you build the wrong API, then have to maintain two versions."
    ]
  },
  {
    "id": "S08",
    "category": "Strategy",
    "difficulty": 2,
    "scenario": "Your B2B SaaS product has solid product-market fit with small businesses but struggles to land deals above ₱500K/year. You are deciding between product-led growth (PLG) — letting users sign up and expand on their own — and a sales-led motion with account executives closing bigger contracts.",
    "quote": "\"PLG is what all the great SaaS companies are doing now. Let us go PLG.\"",
    "options": [
      "Go fully PLG. Remove all sales friction and let the product sell itself.",
      "Go fully sales-led. Hire 3 AEs and build a pipeline-driven culture.",
      "Run PLG for SMB, and add a sales layer only for accounts above a revenue threshold.",
      "Hire one dedicated PLG growth manager to optimize the self-serve funnel before adding any sales layer — improve free-to-paid conversion rates before investing in account executives."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 20,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 20
    },
    "explanation": "PLG and sales-led are not mutually exclusive — they serve different customer segments. SMBs self-serve and upgrade organically. Mid-market and enterprise need a human in the loop, procurement processes, and custom contracts. The hybrid model maximizes both acquisition efficiency and deal size.",
    "framework": "Segmented GTM — match your go-to-market motion to your customer segment. PLG for velocity, sales-led for expansion and enterprise.",
    "principle": "No single GTM motion wins every segment. Design for the customer, not the ideology.",
    "traps": [
      "Pure PLG works for simple products with low switching cost. Complex B2B workflows need onboarding support.",
      "Pure sales-led is expensive. CAC goes up, burn rate increases, and you miss the long tail of self-serve customers.",
      "Optimizing PLG conversion fixes the SMB funnel but does not address the structural gap — deals above ₱500K stall because they require human negotiation, procurement steps, and custom contracts that no funnel tweak resolves."
    ]
  },
  {
    "id": "S09",
    "category": "Strategy",
    "difficulty": 3,
    "scenario": "You run a two-sided marketplace connecting freelancers with SME clients. You are profitable but growth has slowed. You are considering raising the platform fee: either increase the take rate on freelancers from 10% to 15%, or add a subscription fee for client businesses. Both would increase revenue 30% if adoption holds.",
    "quote": "\"We need more revenue. Either side can absorb a price increase.\"",
    "options": [
      "Raise the freelancer take rate. Freelancers are supply-side and have fewer alternatives.",
      "Introduce a subscription for client businesses. Clients get more value anyway.",
      "Do both simultaneously to hit revenue targets faster.",
      "Raise neither. Instead, introduce premium features that both sides can opt into."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "Price increases on a two-sided marketplace damage network effects. Raising freelancer fees pushes supply to alternatives. Raising client fees reduces demand, which then hurts supply earnings anyway. Premium opt-in features grow ARPU without forcing anyone off the platform — and signal product improvement, not extraction.",
    "framework": "Two-Sided Market Pricing — in a marketplace, a price increase on either side shrinks the network. Value extraction and network growth are in permanent tension.",
    "principle": "Monetize through value creation, not through increasing take from existing value.",
    "traps": [
      "Freelancers are your supply. Raise their cost and the best ones move to competitors first.",
      "Client subscription sounds safer but adds friction to acquisition — fewer new clients means less work for freelancers.",
      "Double price increase in a competitive marketplace is how you hand growth to your competitor."
    ]
  },
  {
    "id": "S10",
    "category": "Strategy",
    "difficulty": 1,
    "scenario": "A larger tech company has offered to acquire your 3-year-old B2B SaaS company for 4x ARR. Your current growth rate is 80% YoY and you have ₱8M in ARR. The offer is in cash and closes in 60 days. Your co-founder wants to take it. You believe you can be worth 10x this in 3 years.",
    "quote": "\"This is life-changing money. We should take it now before something goes wrong.\"",
    "options": [
      "Ask for a 90-day extension to finish your fundraising process and create competitive pressure.",
      "Decline and continue building independently.",
      "Counter at 7x ARR. If they say no, walk away.",
      "Accept the offer. A bird in hand is worth two in the bush."
    ],
    "correct": 0,
    "consequences": {
      "cash": 10,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 20
    },
    "explanation": "A 60-day pressure close is a negotiating tactic. The right move is to create a real competitive process. Running a fundraising process in parallel forces the acquirer to compete with your future valuation. If the acquisition is the right outcome, it will survive 90 days. If not, you find out at a higher price.",
    "framework": "Exit Optionality — the best time to negotiate an acquisition is when you do not need to sell. Create competitive pressure before deciding.",
    "principle": "Never negotiate with one party and one deadline. Always create alternatives.",
    "traps": [
      "4x ARR for an 80% YoY growth company is a below-market offer. You are likely undervaluing by a factor of 2.",
      "Outright rejection closes the door. You lose the optionality of a higher offer or better terms.",
      "Countering high with no leverage just signals desperation if they walk."
    ]
  },
  {
    "id": "S11",
    "category": "Strategy",
    "difficulty": 2,
    "scenario": "Three clients represent 68% of your SaaS revenue. One of them just notified you they are going in-house and will leave in 6 months. That client alone is 30% of ARR. You have a pipeline but nothing will close in time to replace that revenue.",
    "quote": "\"We should fight to keep them. Offer deep discounts and custom features.\"",
    "options": [
      "Offer deep discounts and a custom roadmap to retain them at all costs.",
      "Analyze why they are leaving, address the real issue, and make one strong counter-offer with no panic discounting.",
      "Accept the loss. Start an aggressive outbound campaign to replace the revenue.",
      "Immediately raise prices on the other two large clients to offset the revenue drop."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Panic retention destroys margin and sets a precedent. But doing nothing also fails. The right move is a calm diagnosis — understand the real reason they are leaving, make one clean counter-offer if fixable, and simultaneously diversify your revenue base. Concentrated client risk is the underlying problem.",
    "framework": "Revenue Concentration Risk — when any single client is >15% of revenue, you have a structural vulnerability. Fix the concentration, not just the symptom.",
    "principle": "Retention is earned before the client tells you they are leaving, not after.",
    "traps": [
      "Deep discounts plus custom work means you shrink margin and distort your roadmap. If they still leave, you are worse off.",
      "Correct on diversification but ignores the chance that the departure is fixable with a real product or service fix.",
      "Raising prices on vulnerable clients while you are in trouble accelerates churn."
    ]
  },
  {
    "id": "S12",
    "category": "Strategy",
    "difficulty": 3,
    "scenario": "Your PH-based operations software has 200 clients and ₱20M ARR in the Philippines. An Indonesian partner is offering to co-distribute in Indonesia, and a Singapore investor is asking you to open a regional HQ there. Your PH product-market fit is still deepening and you have 18 months of runway.",
    "quote": "\"Southeast Asia is the opportunity. We need to be regional before someone else gets there.\"",
    "options": [
      "Accept both — Indonesia distribution and Singapore HQ. Move fast before competitors do.",
      "Open Singapore HQ only. Establish a regional entity for fundraising and credibility.",
      "Accept the Indonesia co-distribution only — low capital, test regional demand without HQ overhead.",
      "Focus exclusively on the Philippines for 12 more months and revisit when you hit ₱50M ARR."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "Expanding before deepening domestic PMF is one of the most common ways startups destroy themselves. 18 months of runway with a deepening home market is not expansion capital. A co-distribution test in Indonesia costs little and tells you if your product travels. An HQ without a market is overhead.",
    "framework": "Geographic Expansion Sequencing — deepen before widening. Expansion multiplies your problems, not just your opportunities.",
    "principle": "Prove you can dominate one market before you try to enter five.",
    "traps": [
      "Two simultaneous expansion tracks on 18 months runway is how you run out of money in two countries.",
      "Singapore HQ signals regionalism to investors but burns cash without generating a single new customer.",
      "Pure PH focus is the safest play but the Indonesia test costs almost nothing and could validate a huge upside."
    ]
  },
  {
    "id": "F06",
    "category": "Finance",
    "difficulty": 1,
    "scenario": "Your SaaS startup raised ₱15M 8 months ago. You are now burning ₱1.5M/month and have ₱7M left — less than 5 months of runway. Revenue is growing but slowly. The board says you need to extend runway immediately.",
    "quote": "\"We just need to raise another round. Our growth numbers will attract investors.\"",
    "options": [
      "Start a new fundraising process immediately and hope to close in 3 months.",
      "Cut burn by 40% now through headcount reduction and contract cuts, buying 8+ months of runway.",
      "Double down on sales to grow revenue fast enough to become default alive.",
      "Cut burn 20% and start fundraising simultaneously."
    ],
    "correct": 3,
    "consequences": {
      "cash": 10,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 5,
      "teamMorale": -5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "With 5 months of runway, fundraising alone is a bet — rounds take 3-6 months and often fall through. Cutting burn alone may kill momentum. The dual-track response — cut enough to extend survival and start raising — gives you the most options. Investors also see disciplined burn management as a signal of maturity.",
    "framework": "Default Alive vs Default Dead — Paul Graham's framework. You are default dead if your burn exceeds your path to profitability. Fix the trajectory, then raise.",
    "principle": "Never let yourself have less than 9 months of runway without a plan.",
    "traps": [
      "Fundraising on 5 months runway means you will sign any term sheet. Desperation destroys valuation and terms.",
      "A 40% cut signals panic to the team and market. Overdoing it destroys morale and momentum.",
      "Trying to grow revenue in 5 months is the right idea but too slow to execute without a burn reduction buffer."
    ]
  },
  {
    "id": "F07",
    "category": "Finance",
    "difficulty": 2,
    "scenario": "Your bootstrapped B2B SaaS is at ₱10M ARR, growing 50% YoY, and profitable at 20% margin. A VC firm is offering ₱30M for 25% equity. Taking the money would let you hire 15 people and expand. But you currently own 100% and take dividends every quarter.",
    "quote": "\"Thirty million buys us 2 years of aggressive hiring. That is how you win markets.\"",
    "options": [
      "Negotiate the terms — ask for ₱20M at 15% dilution instead.",
      "Decline. Protect your ownership and keep the profitable, dividend-generating business.",
      "Take the VC money. Growth capital at this stage wins markets.",
      "Take the money but only deploy it on sales and marketing, not headcount."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "VC money is not free. 25% equity means you answer to investors, optimize for their exit timeline, and may be pushed toward growth-at-any-cost. A profitable SaaS at 50% YoY growth has real leverage. If you want capital, negotiate hard. 25% is too dilutive for a company with your metrics. A deal on your terms is very different from accepting the first offer.",
    "framework": "Dilution-Free Growth Optionality — profitable companies choose when and whether to take capital. Unprofitable ones have no choice.",
    "principle": "Raise capital when you have leverage, not because someone offered it.",
    "traps": [
      "Standard VC terms at 25% put you on a 5-7 year exit path with new reporting obligations and pressure to grow faster than your market.",
      "Restricting capital use defeats the purpose. VC investors will not accept deployment constraints.",
      "Declining outright forfeits the leverage you have — a profitable, high-growth company is in the strongest possible position to negotiate better terms, not to walk away from the table."
    ]
  },
  {
    "id": "F08",
    "category": "Finance",
    "difficulty": 2,
    "scenario": "Your product has 4,000 free users and 80 paying customers — a 2% conversion rate. Your free tier is generous: unlimited projects, unlimited users, just no advanced analytics or API. Investors say the free tier is too good and you are leaving money on the table.",
    "quote": "\"We need to tighten the freemium limits so people have a reason to pay.\"",
    "options": [
      "Cut the free tier dramatically — limit to 3 projects and 2 users.",
      "Audit why free users are not converting, then redesign the upgrade path before touching limits.",
      "Add paywalls only to new features, not existing ones. Grandfather current free users.",
      "Eliminate the free tier entirely and move to trial-only (14 days)."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Cutting free tier limits without understanding the conversion problem is guesswork. If users are not upgrading, the issue is likely onboarding, activation, or unclear value — not that the free tier is too good. Audit conversion blockers first. If you do tighten limits, grandfather existing users to avoid backlash.",
    "framework": "Freemium Optimization — the free tier is not the problem. The upgrade trigger is. Fix the path to value before restricting access.",
    "principle": "Do not punish your best potential customers because your funnel is broken.",
    "traps": [
      "Dramatic cuts create immediate churn and negative word-of-mouth. You lose the top of the funnel that generates paying customers.",
      "Partly right but misses the root cause. Paywalls on new features do not fix why current users do not convert.",
      "Eliminating free tier removes your acquisition engine and may not fix conversion if the real issue is elsewhere."
    ]
  },
  {
    "id": "F09",
    "category": "Finance",
    "difficulty": 3,
    "scenario": "Your B2B SaaS costs ₱25,000 to acquire each customer (CAC). Your average contract is ₱8,000/year. That means it takes more than 3 years to recover the cost of acquiring each customer, but most contracts renew only once or twice. You are growing fast but your investors are concerned.",
    "quote": "\"Growth at scale will fix the unit economics. We need more clients first.\"",
    "options": [
      "Keep scaling. The economics will improve as the team gets more efficient.",
      "Stop new customer acquisition until you fix the unit economics.",
      "Segment your acquisition: reduce spend on channels with high CAC, reinvest in channels with CAC under ₱8,000.",
      "Raise prices to ₱15,000/year and accept slower growth."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 15,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 15
    },
    "explanation": "Broken unit economics do not fix themselves at scale — they compound. But stopping acquisition kills momentum. The correct move is surgical: identify which channels produce profitable customers (CAC < LTV) and shift budget there, while cutting or fixing the channels producing negative-return customers.",
    "framework": "CAC/LTV by Channel — not all acquisition is equal. Profitable growth comes from knowing which channels produce customers who stay and pay, not just who signs up.",
    "principle": "Scale the things that work. Cut the things that do not. Never average them together.",
    "traps": [
      "\"Scale fixes unit economics\" is one of the most expensive lies in SaaS. You are burning cash on every customer.",
      "Full stop kills pipeline and demoralizes the sales team. It is also unnecessary if some channels are already profitable.",
      "Price increases help LTV but may tank conversion rates. Do not price your way out of a distribution problem."
    ]
  },
  {
    "id": "F10",
    "category": "Finance",
    "difficulty": 1,
    "scenario": "A mid-sized enterprise wants to sign a ₱2M annual contract but insists on Net-60 payment terms — they pay 60 days after invoice. Your current monthly burn is ₱800K and you have 4 months of runway. The deal would be transformative for the business.",
    "quote": "\"This is our biggest deal ever. We have to accept their terms.\"",
    "options": [
      "Accept Net-60. The deal is too important to lose over payment terms.",
      "Decline. Net-60 will cause a cash crisis before the payment arrives.",
      "Accept the deal but immediately take a bridge loan to cover the cash gap.",
      "Counter with Net-30 and offer a 2% early payment discount as an incentive."
    ],
    "correct": 3,
    "consequences": {
      "cash": 10,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Net-60 on a ₱2M deal means you wait 2 months for the first payment. With 4 months runway, you may run out of cash before the check clears. Countering with Net-30 plus an early payment discount is common practice and signals commercial maturity. Most enterprises expect negotiation on payment terms.",
    "framework": "Cash Conversion Cycle — the gap between delivering value and collecting payment is a hidden cost. The longer it takes to get paid, the more working capital you need.",
    "principle": "Revenue on paper does not pay salaries. Cash flow does.",
    "traps": [
      "Accepting Net-60 with 4 months runway could mean payroll failure before you see the money.",
      "Declining outright kills the deal. You have negotiating room before you refuse.",
      "A bridge loan to cover a payment timing issue is an expensive solution to a negotiable problem."
    ]
  },
  {
    "id": "F11",
    "category": "Finance",
    "difficulty": 2,
    "scenario": "You are redesigning your SaaS pricing. Currently it is flat ₱4,500/month per company regardless of size. Options are: per-seat pricing (₱600/user/month), usage-based (₱0.80 per transaction), or a tiered flat model (₱3K/₱7K/₱15K based on company size).",
    "quote": "\"Usage-based is the future of SaaS pricing. Every investor loves it.\"",
    "options": [
      "Move to tiered flat pricing segmented by company size.",
      "Switch to usage-based. Align price with value delivered.",
      "Switch to per-seat. It is simple and predictable for clients.",
      "Keep flat pricing but raise it to ₱7,500/month for new clients, grandfather existing ones."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "Tiered flat pricing aligns price with client size and value — small clients pay small rates, large clients pay more. Per-seat creates perverse incentives (clients limit users to control cost, reducing adoption). Usage-based is great for infrastructure but creates budget uncertainty in operational software. Tiered flat is the best balance for B2B operations tools.",
    "framework": "Value-Based Pricing Architecture — the right model aligns what you charge with the value clients receive. Misaligned pricing creates churn and resistance to growth.",
    "principle": "Pricing is a product decision, not a finance decision.",
    "traps": [
      "Per-seat pricing punishes adoption. Clients who should have 20 users sign up for 5 to save money.",
      "Usage-based works for variable consumption products. For workflow software, unpredictable bills cause budget anxiety and cancellation.",
      "Raising price for new clients with no change to the product model delays the real structural issue."
    ]
  },
  {
    "id": "F12",
    "category": "Finance",
    "difficulty": 3,
    "scenario": "Your startup needs ₱5M immediately to make payroll and cover operations for the next 3 months while a Series A closes. Options are: a bridge loan at 3% monthly interest from a lender, a convertible note from your existing angels at a 20% discount to the next round, or asking a large enterprise client to prepay 12 months of their contract.",
    "quote": "\"The Series A will close next month. Let us just take whatever bridge is fastest.\"",
    "options": [
      "Take the bridge loan at 3% monthly. Fast and clean.",
      "Ask the enterprise client to prepay 12 months in exchange for a 10% discount.",
      "Issue a convertible note to existing angels at 20% discount.",
      "Negotiate a 30-day Series A close acceleration with your lead investor by offering a 5% discount to the pre-money valuation — a small concession that eliminates the bridge need entirely."
    ],
    "correct": 1,
    "consequences": {
      "cash": 15,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "A 3% monthly bridge loan is 36% annualized — extremely expensive. Convertible note from existing angels aligns incentives and is cheaper, but 20% discount is high. A client prepayment at 10% discount is typically the cheapest capital available: you pay 10% once vs 36%/year on a loan. It also deepens client commitment.",
    "framework": "Capital Stack Cost Comparison — the cheapest money is always customer revenue. Bridge loans are the most expensive. Know your cost before you take it.",
    "principle": "The most expensive capital is the one you take without comparing alternatives.",
    "traps": [
      "3% monthly is deceptively cheap-sounding. Over 3 months, that is ₱450K in interest on ₱5M.",
      "Convertible notes at 20% discount dilute your Series A — every new investor sees that discount.",
      "Assumes the lead investor will accept an accelerated timeline on demand — institutional investors rarely move faster for a discount, and cutting pre-money by 5% affects all incoming investors, not just the lead."
    ]
  },
  {
    "id": "GTM06",
    "category": "Sales",
    "difficulty": 1,
    "scenario": "You gave a 45-minute product demo to the operations manager of a target account 3 weeks ago. They said they loved it but the deal has gone cold. Emails are unanswered. You later learned the actual decision-maker is the CFO, who was not in the demo.",
    "quote": "\"The ops manager loved it. We just need to follow up more aggressively.\"",
    "options": [
      "Keep following up with the ops manager. They are your champion.",
      "Send a cold email directly to the CFO with the business case and ROI numbers.",
      "Ask the ops manager directly to introduce you to the CFO.",
      "Send a summary email to the ops manager recapping the demo and value proposition, then schedule a follow-up in 3 weeks to give them time to socialize the idea internally before pushing for next steps."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "Deals stall when you are talking to the wrong person. A warm introduction from the ops manager to the CFO is 10x more effective than a cold email. The ops manager becomes your internal champion — they want the product, they just cannot buy it. Make it easy for them to bring you to the decision-maker.",
    "framework": "Multi-Threading — in B2B sales, identify every stakeholder: champion, decision-maker, economic buyer. A deal with only one contact is a deal that can be killed by one absence.",
    "principle": "The demo is not the sale. Access to the buyer is.",
    "traps": [
      "The ops manager cannot say yes. More follow-ups with someone without authority wastes time.",
      "Cold email to the CFO without a warm intro reads as unprofessional and may annoy your only existing contact.",
      "Puts the burden on the ops manager to sell internally with no support, and a 3-week follow-up gap on a deal that has already gone cold lets urgency die completely — the real problem is the CFO has never been in the room."
    ]
  },
  {
    "id": "GTM07",
    "category": "Sales",
    "difficulty": 2,
    "scenario": "A hot inbound lead contacted you directly. Midway through your discovery call, you realize they are currently a paying customer of your largest competitor and are unhappy with the product. They want a full demo next week and seem ready to switch.",
    "quote": "\"This is a gift. Their competitor client is practically handing us a win.\"",
    "options": [
      "Lead the demo with a direct feature comparison showing where you are better.",
      "Do not mention the competitor. Just show your product and let it speak for itself.",
      "Offer an aggressive competitive discount immediately to lock in the switch.",
      "Spend the first 15 minutes of the call deeply understanding why they are unhappy with their current product."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "A prospect unhappy with a competitor is a warm lead, not a guaranteed close. You need to understand their real pain — because the same decision-making that chose the wrong product can reject yours too. Spend time diagnosing the real problem. Then the demo is surgical, not generic.",
    "framework": "Pain-First Selling — the product demo closes deals. The discovery call wins them. Understand the pain before you prescribe the solution.",
    "principle": "Listen twice as long as you talk in discovery. You are diagnosing, not pitching.",
    "traps": [
      "Direct comparisons sound defensive and put you in the competitor's frame. Let your product stand on its own.",
      "Skipping discovery when you have such a clear pain signal wastes your best asset.",
      "Discounting on the first call trains the client to always negotiate and signals low confidence in your product."
    ]
  },
  {
    "id": "GTM08",
    "category": "Sales",
    "difficulty": 2,
    "scenario": "You have 300 trial users who signed up in the last 30 days. Only 18 (6%) have converted to paying. The other 282 users completed setup but never came back after day 3. Your NPS from paying customers is 72.",
    "quote": "\"We need the sales team to call all 282 inactive trial users.\"",
    "options": [
      "Analyze where users drop off in the trial flow, then fix the activation experience first.",
      "Have sales call all 282 inactive trials this week.",
      "Reduce the trial from 30 days to 7 days to create urgency.",
      "Offer a 50% discount to all inactive trial users to trigger conversion."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "If users disappear after day 3, the problem is activation — they never experienced the core value. Calling 282 users without fixing the experience wastes sales resources and gets \"not now\" answers that could have been \"yes\" if the product had shown its value first. Diagnose before prescribing.",
    "framework": "Activation vs Acquisition — growth has three phases: users must arrive, activate (experience core value), then convert. Skipping activation leads to wasted acquisition.",
    "principle": "If users leave before they see value, more sales calls do not fix the product.",
    "traps": [
      "Calling 282 inactive users without knowing why they left means you cannot answer their real objections.",
      "Shorter trial does not fix an activation gap. It just means users hit the wall sooner.",
      "Discounting to inactive users trains the market to wait for sales to panic-email them."
    ]
  },
  {
    "id": "GTM09",
    "category": "Sales",
    "difficulty": 3,
    "scenario": "An enterprise client wants to sign a ₱4M/year contract — your largest deal ever — but requires 3 custom modules not on your roadmap. Your product team estimates it is 6 months of engineering work. Taking the deal would freeze your standard product development for half a year.",
    "quote": "\"Four million pesos. We cannot walk away from this.\"",
    "options": [
      "Accept the deal and divert engineering to the custom work immediately.",
      "Accept the core contract now and propose a custom module roadmap as a separate paid engagement.",
      "Accept the deal but price the custom work at ₱2M extra and negotiate a longer delivery timeline.",
      "Decline. Custom work is a product trap. Protect the roadmap."
    ],
    "correct": 1,
    "consequences": {
      "cash": 15,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "Enterprise custom deals are not inherently bad — but they must be priced and scoped as separate products. If the client sees real value in the custom modules, they will pay for the engineering. If they balk at the additional price, the custom work was not actually valuable — they just wanted it free. Separating the core from the custom protects your roadmap and tests the real demand.",
    "framework": "Land and Expand with Scoped Custom Work — close on what you already have, then propose the custom roadmap as a funded extension. Never bundle custom work into the base contract.",
    "principle": "If a client wants something custom, they should pay for it to be built.",
    "traps": [
      "₱4M deal that freezes your roadmap for 6 months kills 12 other potential deals in that time.",
      "Declining your biggest ever deal without attempting to restructure is a missed opportunity.",
      "Good direction but negotiating modules into the core contract still risks scope creep."
    ]
  },
  {
    "id": "GTM10",
    "category": "Sales",
    "difficulty": 1,
    "scenario": "A high-value prospect has been in your pipeline for 2 months. In the final meeting, they ask for a 30% discount to close this quarter, saying their budget only allows it. They are a perfect ICP fit and would be a strong reference customer.",
    "quote": "\"Thirty percent off is a lot but we need reference clients. Let us just close it.\"",
    "options": [
      "Grant the 30% discount. The reference value outweighs the margin loss.",
      "Decline the discount. Hold your price and explain the ROI again.",
      "Offer 10-15% if they commit to a multi-year contract or agree to be a reference client.",
      "Counter with a discount on implementation fees rather than the subscription fee."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "Discounts must have conditions attached, or they signal that your price was never real. Offer a smaller discount tied to a multi-year commitment, a case study agreement, or faster payment terms. This turns the discount into a trade — you give less margin, they give more commitment or visibility.",
    "framework": "Conditional Discounting — never discount without getting something of equal value in return. Unconditional discounts teach clients to always negotiate.",
    "principle": "A discount with no condition is a price reduction. A discount with a condition is a negotiation.",
    "traps": [
      "30% unconditional discount sets a precedent. Every renewal, every referral they send will expect 30% off.",
      "Refusing completely risks losing a client who genuinely has a budget constraint and could be a great reference.",
      "Discounting implementation rather than SaaS keeps the ARR clean — smart tactically, but the logic still applies: require something in return."
    ]
  },
  {
    "id": "GTM11",
    "category": "Sales",
    "difficulty": 2,
    "scenario": "You signed a reseller agreement with a regional IT distributor 6 months ago. They have brought in 8 clients. Now your own direct sales team is pursuing the same 3 accounts the distributor is actively working. A conflict has erupted and the distributor is threatening to drop you.",
    "quote": "\"Our direct team can close these faster. The distributor is too slow.\"",
    "options": [
      "Let the direct team close the deals. Your distribution partner is not exclusive.",
      "Pull the direct team back. Honor the channel and protect the relationship.",
      "Drop the distributor and go direct only. The channel is more trouble than it is worth.",
      "Negotiate a formal territory or account segmentation agreement to prevent future conflicts."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "Channel conflict is a management failure, not a sales opportunity. A distributor who feels undercut stops selling you. A structured agreement on accounts, territories, or deal registration prevents conflict before it starts. The 8 clients they brought in are worth protecting the relationship.",
    "framework": "Channel Conflict Management — without explicit rules, channel conflict is inevitable. Design account rules of engagement before deploying multiple go-to-market motions.",
    "principle": "Channel partners sell more when they trust you. Conflict destroys trust faster than it creates revenue.",
    "traps": [
      "Letting direct close distributor accounts burns the channel, and with it the 8 clients and future introductions.",
      "Pulling back fixes the immediate conflict but does not prevent it next month.",
      "Going direct-only removes a proven acquisition channel for the sake of short-term control."
    ]
  },
  {
    "id": "GTM12",
    "category": "Sales",
    "difficulty": 3,
    "scenario": "You are finalizing a large enterprise contract. The legal team proposes month-to-month terms, claiming they never sign multi-year contracts with software vendors. Your CFO wants annual pre-paid contracts for revenue predictability. Both sides are now deadlocked.",
    "quote": "\"Annual contracts are non-negotiable for us. We need the revenue predictability.\"",
    "options": [
      "Offer a 3-month pilot at full price, converting to annual only after the pilot.",
      "Accept month-to-month. Landing the account and expanding is more important.",
      "Propose annual with a 60-day termination-for-convenience clause as a compromise.",
      "Hold firm on annual. Revenue predictability is fundamental to your model."
    ],
    "correct": 0,
    "consequences": {
      "cash": 10,
      "growth": 15,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "A 3-month paid pilot is not a concession — it is a proof of value. Most enterprises that resist annual contracts do so because they fear lock-in on unproven software. A short paid pilot removes that fear, generates early revenue, and almost always converts to annual once the product delivers. It is also a stronger signal of confidence in your product than demanding annual upfront.",
    "framework": "Pilot-to-Annual Conversion — in enterprise sales, a paid pilot that converts is worth more than an annual contract signed under duress that gets cancelled at renewal.",
    "principle": "The best annual contract starts as a successful 90-day engagement.",
    "traps": [
      "Deadlocking over contract length loses the deal entirely. Annual contracts mean nothing if the client walks.",
      "Month-to-month with no path to annual creates a permanent instability in your revenue forecast.",
      "Termination-for-convenience clauses on annual contracts give you neither the protection of annual nor the flexibility the client wants."
    ]
  },
  {
    "id": "P06",
    "category": "Product",
    "difficulty": 1,
    "scenario": "Your top-paying client — 15% of ARR — has submitted a feature request: a custom approval workflow specific to their internal process. Your product manager says it is not on the roadmap and adding it would benefit only this one client. The client is threatening to build it internally and reduce their reliance on your product.",
    "quote": "\"They are our biggest client. We have to build it.\"",
    "options": [
      "Build the feature exactly as requested. Client retention is the priority.",
      "Explore whether the underlying need can be solved with a configurable feature that works for all clients.",
      "Decline and explain it is not on the roadmap. Hold the product vision.",
      "Offer to build it as a paid custom module, separate from the core product."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "One-off features for a single client create technical debt and divergence from product vision. But the underlying need is often universal — they want flexible approval workflows, which most operations teams want. Reframing as a configurable solution serves this client and every future one.",
    "framework": "Specific vs Generalized Feature Requests — the client tells you what they want, not what to build. Your job is to find the general solution to a specific problem.",
    "principle": "Build for the problem, not for the client who described it.",
    "traps": [
      "A one-off feature becomes permanent debt and opens every other client to the same expectation.",
      "Rejecting the request without exploring the underlying need damages the relationship unnecessarily.",
      "Paid custom modules work — but only after you have determined the need is genuinely one-client-specific."
    ]
  },
  {
    "id": "P07",
    "category": "Product",
    "difficulty": 2,
    "scenario": "Your B2B SaaS product is web-first. 60% of your users access it only on desktop. But sales teams keep losing deals because prospects ask if you have a mobile app. You have one engineer available and 3 months before the next major release cycle.",
    "quote": "\"Every competitor has a mobile app. We are losing deals because of this.\"",
    "options": [
      "Build a native iOS and Android app with the one available engineer.",
      "Buy a white-label mobile app framework and customize it.",
      "Build a Progressive Web App (PWA) — mobile-optimized in browser, no app store needed.",
      "Deprioritize mobile. Focus the engineer on core product improvements that affect all 60% desktop users."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "A PWA closes the sales objection (it appears on your phone, installs from the browser) at a fraction of the cost. One engineer cannot maintain two native apps and the core product. A PWA is the right resource-constrained answer that unblocks sales without creating unsustainable engineering overhead.",
    "framework": "Minimum Lovable Product on Mobile — PWAs handle 80% of mobile use cases for B2B tools. Save native app investment for when mobile is a primary workflow, not a sales checkbox.",
    "principle": "Solve the real problem — the sales objection — not the ideal solution.",
    "traps": [
      "Two native apps with one engineer means the core product suffers and neither app is well-maintained.",
      "White-label frameworks create long-term lock-in and limited customization.",
      "Ignoring a repeated sales objection that is costing you deals is a choice to keep losing them."
    ]
  },
  {
    "id": "P08",
    "category": "Product",
    "difficulty": 2,
    "scenario": "Your engineering team is delivering new features 50% slower than they did a year ago. The reason is clear: the codebase is 4 years old and has significant technical debt from fast early growth. Engineers are frustrated. Clients are complaining about feature delays. The board wants roadmap velocity back.",
    "quote": "\"Let us just rebuild the whole thing from scratch. Clean slate, modern stack.\"",
    "options": [
      "Approve a full rewrite. Start fresh with a modern architecture.",
      "Assign two engineers to document the full scope of technical debt in a board-ready audit report first — establish the baseline metrics before committing to any refactoring investment.",
      "Freeze the feature roadmap for 2 quarters and focus entirely on tech debt.",
      "Allocate 20-30% of engineering time to refactoring in parallel with feature development."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Full rewrites almost always go over time, over budget, and under-deliver. The new system has to replicate years of implicit product logic. A disciplined 20-30% allocation to refactoring (Martin Fowler's \"strangler fig\" approach) pays down debt sustainably without killing delivery.",
    "framework": "Strangler Fig Pattern — replace legacy components incrementally rather than rebuilding all at once. Keeps the product running while modernizing the underlying architecture.",
    "principle": "Technical debt is real debt. Pay it down consistently rather than letting it compound.",
    "traps": [
      "Full rewrites famously fail. Netscape rewrote its browser from scratch in 2000 and almost killed the company.",
      "Adds a documentation layer before any action when the problem and its causes are already well understood — velocity continues declining during the weeks spent producing a report that the engineering team could brief verbally in 30 minutes.",
      "Freezing feature delivery for 2 quarters freezes revenue growth and client trust simultaneously."
    ]
  },
  {
    "id": "P09",
    "category": "Product",
    "difficulty": 3,
    "scenario": "You built your product around a core analytics dashboard. Product analytics show that only 12% of users open the dashboard more than once per week. Usage data reveals that the most-used features are the task assignment tools you built as secondary features 6 months ago.",
    "quote": "\"Users just need better onboarding for the analytics. That is our core value prop.\"",
    "options": [
      "Reposition the product around task management as the core, keep analytics as a secondary feature.",
      "Remove the analytics dashboard. Simplify the product around task management.",
      "Double down on analytics. Improve onboarding and in-product education.",
      "Survey users to understand the gap before making any product decisions."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 20
    },
    "explanation": "When behavior contradicts your assumptions, behavior wins. Users are telling you what the product is through their actions. Repositioning around what users actually do is not a pivot — it is product clarity. You keep the analytics, you just stop selling the wrong value proposition.",
    "framework": "Product-Market Fit Signals — watch what users do, not what they say. Behavioral data beats survey data for understanding real product value.",
    "principle": "The product your users love and the product you think you built are sometimes different things.",
    "traps": [
      "If 88% of users ignore the core feature, the problem is not onboarding. The feature is not delivering value.",
      "Removing analytics when some users depend on it is too aggressive. The feature has value — just not primary value.",
      "Surveys at this point are useful but will slow you down. The behavioral data is already clear enough to act."
    ]
  },
  {
    "id": "P10",
    "category": "Product",
    "difficulty": 1,
    "scenario": "Your workflow automation product has clients across 5 industries. Product analytics show one industry — construction — has 3x higher engagement, 50% lower churn, and 4x higher NPS than any other vertical. Other verticals are average.",
    "quote": "\"We built a horizontal product. Focusing on one vertical would limit our market.\"",
    "options": [
      "Stay horizontal. Verticalizing limits your total addressable market.",
      "Verticalize the product and GTM for construction while running it as a pilot to see if specialization accelerates growth.",
      "Go all-in on construction immediately. Drop marketing to other industries.",
      "Investigate why construction performs differently before committing to a direction."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 20
    },
    "explanation": "Vertical focus in B2B SaaS consistently outperforms horizontal strategy at the early and mid stages. Construction clients refer other construction clients. Your marketing becomes specific. Your case studies are credible. You become the default platform for that industry. Horizontal is a strategy for companies with ₱500M+ in ARR — not for early PMF.",
    "framework": "Vertical SaaS Strategy — owning a vertical means winning the category. Horizontal means competing against everything with nothing specific to say to anyone.",
    "principle": "The riches are in the niches — until you are large enough to go wide.",
    "traps": [
      "Staying horizontal ignores the strongest product-market fit signal you have ever received.",
      "Dropping other verticals immediately is over-correction. Run construction as a focused GTM pilot while others wind down naturally.",
      "The signal is clear enough. Investigation before action when data this strong exists is just hesitation."
    ]
  },
  {
    "id": "P11",
    "category": "Product",
    "difficulty": 2,
    "scenario": "Your operations management SaaS currently has no AI features. Clients are increasingly asking about AI, and two competitors have launched AI-powered suggestions. You have collected enough operational data to train useful models. Adding AI would take 3 months and require one senior ML engineer.",
    "quote": "\"AI is table stakes now. If we do not ship it, we look behind.\"",
    "options": [
      "Build a full AI recommendations engine and launch it as a headline feature.",
      "Do not build AI. Focus on depth and reliability of core features.",
      "Identify one specific workflow where AI predictions would save users the most time, and ship that first.",
      "Partner with an AI vendor to white-label their models and launch faster."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "AI for its own sake creates technical complexity with unclear ROI. AI that solves one real user problem creates immediate, measurable value. Starting narrow lets you prove the model, collect feedback, and earn user trust before scaling AI across the product. \"AI-powered X\" is compelling. \"AI-powered everything\" is noise.",
    "framework": "Focused AI Integration — AI features compound. The first use case proves the infrastructure. Subsequent ones get faster and cheaper. Start with the highest-impact workflow.",
    "principle": "Ship AI where it earns its keep. Not everywhere it can fit.",
    "traps": [
      "A full recommendations engine is an 18-month project masquerading as a 3-month one. You will ship something generic.",
      "Ignoring AI when competitors are shipping it and clients are asking is a positioning risk.",
      "White-labeling AI from a vendor is fast but creates dependency, data privacy concerns, and undifferentiated features."
    ]
  },
  {
    "id": "P12",
    "category": "Product",
    "difficulty": 3,
    "scenario": "Your team spent 4 months building an advanced reporting module. Three days before your planned launch, a competitor ships a very similar feature and gets press coverage. Your product manager wants to delay launch and add differentiation. Your CEO wants to ship immediately and claim priority.",
    "quote": "\"They beat us to it. We need to rethink or we look like copycats.\"",
    "options": [
      "Delay launch by 4-6 weeks. Add differentiating features before shipping.",
      "Launch immediately as planned. Being second with a good product beats being late with a great one.",
      "Cancel the feature. Find a completely different angle the competitor has not addressed.",
      "Launch on schedule but shift the narrative — position around your specific use case, not the general feature."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "A competitor launching first is a positioning problem, not a product problem. Your product is already built — it has specific design decisions, integration points, and user context they do not. Launching with a focused narrative (e.g., \"reporting built specifically for construction teams\") beats a generic feature comparison.",
    "framework": "Narrative Differentiation — in product launches, the story matters as much as the feature. When a competitor owns the general category, own a specific one.",
    "principle": "First is better. First in a category is best. But specific beats general when you are second.",
    "traps": [
      "A 4-6 week delay extends your engineering opportunity cost and signals internal panic to anyone watching.",
      "Launching without a narrative change means the market will compare you directly to the competitor who launched first.",
      "Cancelling 4 months of work because a competitor shipped first is an enormous waste."
    ]
  },
  {
    "id": "O06",
    "category": "Operations",
    "difficulty": 1,
    "scenario": "Your SaaS company's customer support team handles 400 tickets/month. With your growth rate, that will become 900/month in 6 months. The team is already stretched. You are deciding between hiring 3 more support agents or investing in a chatbot and self-serve help center.",
    "quote": "\"Clients want human support. Technology cannot replace that.\"",
    "options": [
      "Build a self-serve help center and AI chat first, then hire based on remaining volume.",
      "Hire 3 support agents immediately.",
      "Outsource support to a BPO provider.",
      "Implement a tiered support model where only customers on premium plans get live support, routing standard plan tickets to email with a 48-hour SLA — this monetizes support access and reduces volume simultaneously."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Headcount scales linearly. A well-built help center scales infinitely. Most support tickets are the same 20 questions. Solving those in a knowledge base and chatbot deflects 40-60% of volume before it hits your team. Hire based on what is left — not based on projections before you have deflection data.",
    "framework": "Support Deflection First — build the self-serve layer, measure deflection rate, then hire to cover what remains. Never hire to absorb volume that a FAQ could handle.",
    "principle": "Hire the last 30% of support load after automation handles the first 70%.",
    "traps": [
      "Three agents solve this year's problem. Next year you need 6. The year after, 12. Headcount solutions compound.",
      "BPO outsourcing reduces quality and creates a distance from client feedback that product teams need.",
      "Changes the support terms for existing customers mid-contract, damaging trust with precisely the clients who need the most help — and the customers who raise the most tickets are often your highest-value accounts."
    ]
  },
  {
    "id": "O07",
    "category": "Operations",
    "difficulty": 2,
    "scenario": "A software house in Vietnam is offering development services at 40% of your current PH team's cost. Quality of their sample work is acceptable but not exceptional. Your current team is high quality and culturally aligned. Your runway is tightening and the board is asking for burn reduction.",
    "quote": "\"Forty percent cheaper is forty percent cheaper. The math is obvious.\"",
    "options": [
      "Move all development offshore to cut burn immediately.",
      "Hire one offshore engineer as a test while keeping your core team intact.",
      "Keep the current team and find other areas to cut costs.",
      "Negotiate with the current team on salaries in exchange for equity."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Offshore development at 40% lower cost sounds compelling, but quality gaps, timezone friction, and communication overhead often absorb 20-30% of that savings. Starting with a single offshore hire on a non-critical workstream lets you validate whether the actual productivity difference justifies restructuring your core team.",
    "framework": "Test Before Restructure — before making irreversible decisions about your core team, validate the assumption with a contained, low-risk pilot.",
    "principle": "The cost of a bad hire is always higher than the salary you saved.",
    "traps": [
      "Moving all development offshore destroys morale, loses institutional knowledge, and often delivers less value than the savings suggest.",
      "Ignoring the cost signal when runway is tightening is not a viable response to the board.",
      "Salary cuts for equity create resentment unless the equity is genuinely valuable and the cut is meaningful."
    ]
  },
  {
    "id": "O08",
    "category": "Operations",
    "difficulty": 2,
    "scenario": "Your cloud infrastructure costs jumped from ₱80K to ₱320K/month as your user base grew 4x. The engineering team says the architecture is not optimized. An AWS audit found three areas of major overspend: over-provisioned servers, uncompressed data transfers, and idle dev environments left running 24/7.",
    "quote": "\"Cloud costs are the price of growth. We should not over-engineer for savings.\"",
    "options": [
      "Do nothing. Cloud costs are a variable cost that scales with revenue.",
      "Move to a cheaper cloud provider immediately.",
      "Do the AWS audit fixes — right-size servers, compress transfers, auto-shut dev environments.",
      "Build a dedicated DevOps function to manage cloud cost optimization full-time."
    ],
    "correct": 2,
    "consequences": {
      "cash": 10,
      "growth": 5,
      "profitability": 15,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "When you already know the three specific causes of overspend, fixing them is not \"over-engineering\" — it is basic financial discipline. These are not architectural trade-offs; they are hygiene issues. Right-sizing and shutting off idle environments typically recover 30-50% of cloud overspend in days.",
    "framework": "Cloud FinOps — treat infrastructure cost like any other P&L line. Regular audits and hygiene saves 30-50% without changing architecture.",
    "principle": "If you know exactly where the waste is, fix it. Deliberation is not due diligence.",
    "traps": [
      "\"Variable cost of growth\" logic is only valid if the spend is proportional to revenue. A 4x jump from 1x growth is a bug.",
      "Provider migrations take 6-12 months and may not save more than fixing the current overspend.",
      "A full DevOps function costs more per month than the overspend. Use existing engineers to implement the known fixes."
    ]
  },
  {
    "id": "O09",
    "category": "Operations",
    "difficulty": 3,
    "scenario": "Your lead backend engineer — the person who built your core infrastructure and knows the most critical systems — tells you a competitor has offered them a 60% salary increase. They are not openly threatening to leave but are \"just letting you know.\" You cannot easily replace this engineer in less than 6 months.",
    "quote": "\"We cannot set a precedent of giving in to salary ultimatums.\"",
    "options": [
      "Match the offer immediately. You cannot afford to lose this person.",
      "Do not match. Explain you cannot set precedents. Let them decide.",
      "Start a discreet hiring process immediately while thanking them for telling you.",
      "Have an honest conversation about what it would take to keep them, separate from the outside offer."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "The engineer told you about the offer — that is a loyalty signal, not a threat. They want to stay but need to know you value them. A direct conversation (not framed as a negotiation response) lets you understand whether the issue is salary, recognition, growth, or something else. Matching blindly is transactional. Refusing blindly is cold. A real conversation is leadership.",
    "framework": "Retention Through Recognition — the best employees do not leave for money alone. They leave when they do not feel seen. Address the whole person, not just the counter-offer.",
    "principle": "The engineer who told you about the offer is asking to stay. Hear them.",
    "traps": [
      "Matching immediately signals that the only way to get a raise is to bring an outside offer. Others will follow.",
      "Refusing to engage sends a clear message: the company does not value you beyond your current contract.",
      "Starting to hire while pretending to listen destroys trust the moment they find out — and they will find out."
    ]
  },
  {
    "id": "O10",
    "category": "Operations",
    "difficulty": 1,
    "scenario": "Your operations and sales teams are using completely different tools: sales uses HubSpot, operations uses a custom-built internal system, and finance uses spreadsheets. Data is duplicated, reports conflict, and nobody has a single view of client status. This is causing billing errors and missed renewal dates.",
    "quote": "\"Everyone has their own tools. We should not force a change they will resist.\"",
    "options": [
      "Integrate the existing tools via APIs to share data without forcing platform changes.",
      "Consolidate all teams onto HubSpot as the central system — it already handles CRM, and operations and finance can be migrated onto it to eliminate the duplication.",
      "Force a migration to one unified platform for all teams.",
      "Hire a data analyst to manually reconcile reports between systems."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Tool changes create massive resistance. Integration via APIs or middleware (Zapier, Make, or native connectors) solves the data synchronization problem without forcing workflow changes. You fix the billing errors and missed renewals — which have real revenue impact — without a 6-month migration project.",
    "framework": "Integration Before Migration — solve the data problem, not the tool problem. Teams are productive in their current tools. Make the data flow across them.",
    "principle": "The goal is shared data, not shared software.",
    "traps": [
      "Consolidating onto a sales-optimized CRM forces operations teams into workflows designed for pipeline management, not service delivery — creating new friction while the root data problem remains.",
      "Forcing platform migration creates adoption resistance, a 6-month productivity dip, and possible tool failure.",
      "A data analyst who manually reconciles is a human patch on a system problem. They will always be one resignation away from chaos."
    ]
  },
  {
    "id": "L06",
    "category": "Leadership",
    "difficulty": 1,
    "scenario": "Your top-performing sales rep has been requesting a promotion to Sales Manager for 6 months. They are your best closer and consistently hit 130% of quota. However, two peers on the team have told you privately that this person is difficult to collaborate with and sometimes undermines team morale.",
    "quote": "\"Numbers do not lie. They are the best performer. They deserve the promotion.\"",
    "options": [
      "Promote them. Top individual performance earns leadership roles.",
      "Have a direct, private conversation about the collaboration feedback before making any decision.",
      "Decline the promotion. Leadership requires more than individual performance.",
      "Create a 90-day \"manager trial\" to test their leadership ability before the formal title."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "The best individual performers are often the worst managers — different skill sets. But refusing without a real conversation is unfair and opaque. A direct conversation sharing the specific feedback gives them the chance to respond, grow, and understand what leadership actually requires. It is also the only honest path.",
    "framework": "Individual Contributor vs Manager Track — promoting high-performing ICs into management without testing leadership behaviors is one of the most common management mistakes.",
    "principle": "Managing others requires different skills than excelling yourself. Test before promoting.",
    "traps": [
      "Promoting a difficult collaborator into a management role amplifies the problem. They now manage the people they alienated.",
      "Declining without explanation is unfair and will lose a high performer who had no chance to address the issue.",
      "The trial is a reasonable idea but without the direct feedback conversation first, they will not know what they are being tested on."
    ]
  },
  {
    "id": "L07",
    "category": "Leadership",
    "difficulty": 2,
    "scenario": "You are the CTO. The CEO regularly jumps directly into product team Slack channels, asks engineers for status updates without going through the PM, and occasionally suggests feature ideas that bypass the roadmap process. The product team is frustrated and confused about who is actually in charge.",
    "quote": "\"The CEO just wants to stay close to the product. That is healthy for a founder.\"",
    "options": [
      "Establish a formal weekly product review meeting where the CEO's questions and feature ideas are captured and addressed in a structured forum.",
      "Create a new Slack channel just for the CEO to ask questions without disrupting the team.",
      "Raise the issue with the CEO privately — explain the impact on team clarity and velocity.",
      "Have the PMs filter all CEO requests and reply on behalf of the team."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 0,
      "teamMorale": 20,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Founder CEOs micromanaging product teams is an extremely common startup dysfunction. It is also fixable — but only through a direct, private, data-driven conversation. The CTO is the right person to have this conversation. Frame it as a velocity and clarity issue, not a personal criticism. Most founders will adjust when shown the concrete cost.",
    "framework": "Clear Org Authority — team confusion about decision rights is a leadership structure problem. The fix is clarity, not workarounds.",
    "principle": "Organizational drag caused by unclear authority costs more than the conversations needed to fix it.",
    "traps": [
      "A weekly review meeting creates a structured channel but does not stop the CEO from bypassing it between sessions — the fundamental authority confusion remains unaddressed.",
      "A separate channel is a workaround that does not address the real issue and the CEO will just bypass it.",
      "Having PMs filter CEO requests turns your PM into a political buffer — exhausting and unsustainable."
    ]
  },
  {
    "id": "L08",
    "category": "Leadership",
    "difficulty": 2,
    "scenario": "You have two co-founders. You (CEO) want to raise a Series A and accelerate growth. Your co-founder (COO) wants to stay bootstrapped, reach profitability, and build more slowly. The disagreement has become visible to the team and is affecting decision-making on hires and product.",
    "quote": "\"We just need to talk it out. We have always been able to resolve things.\"",
    "options": [
      "Push through your position as CEO. You have the strategic authority.",
      "Defer to the COO to keep the peace. Harmony matters more than the decision.",
      "Put the question formally to the board and let them decide the direction.",
      "Bring in a neutral board member or advisor to help structure the conversation."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 15
    },
    "explanation": "Co-founder disagreements on company direction are existential if unresolved. A neutral third party structures the conversation so both sides feel heard, clarifies the real trade-offs, and helps reach a decision neither can reach alone. This is not about who wins — it is about the company having a clear direction.",
    "framework": "Founder Alignment Process — use structured facilitation for high-stakes co-founder disagreements. The goal is a decision both founders can execute on, not a winner.",
    "principle": "Co-founder disagreement without resolution is not a management problem — it is a company survival problem.",
    "traps": [
      "Forcing your position creates a co-founder who is executing a strategy they disagree with. That does not end well.",
      "Deferring to keep peace when you believe the direction is wrong will build resentment and eventually surface at the worst time.",
      "Board decision on a strategic split between founders signals governance problems to investors."
    ]
  },
  {
    "id": "L09",
    "category": "Leadership",
    "difficulty": 3,
    "scenario": "You are 18 months into building your company and need to introduce quarterly OKRs and a project management system. Your founding team of 12 people has always operated informally. Three senior engineers are openly resistant, saying process will slow them down. They are also your best performers.",
    "quote": "\"If they are resistant, the process is too heavy. We should keep doing what works.\"",
    "options": [
      "Co-design the process with the resistant engineers. Get them to shape what they will live with.",
      "Implement OKRs regardless. Company scale requires process and the resistant engineers need to adapt.",
      "Drop the OKR initiative. If your best people resist it, it will fail.",
      "Implement process only for non-engineering teams and leave the engineers to work as they prefer."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 15
    },
    "explanation": "Resistant engineers are often the most important voices in a process design conversation — they have the most to lose if it is bad. Co-design converts critics into advocates. OKRs shaped by the people who will use them get adopted. OKRs imposed from above get gamed or ignored.",
    "framework": "Change Management Through Participation — resistance is often not about the change itself but about not being consulted. Involve resisters in design.",
    "principle": "The people most resistant to a process change are often the ones whose input would make it work.",
    "traps": [
      "Abandoning process because your best people resist it lets your loudest voices veto organizational growth.",
      "Imposing OKRs on resistant engineers results in performative compliance — numbers that look fine but mean nothing.",
      "Two-tier process systems create division and signal to engineering that they are exempt from company norms."
    ]
  },
  {
    "id": "L10",
    "category": "Leadership",
    "difficulty": 1,
    "scenario": "A new hire (3 months in) is not meeting expectations. Their output is significantly below the bar you set during onboarding. They are likable, work hard, and seem to genuinely care. But two senior team members have told you the rest of the team is picking up their slack.",
    "quote": "\"They are still learning. Give them more time — they are a good person.\"",
    "options": [
      "Give them 3 more months. Patience is part of good management.",
      "Have a direct performance conversation with clear expectations, a 30-day improvement plan, and daily check-ins.",
      "Let them go now. Three months is enough to assess fit.",
      "Move them to a different role internally that might be a better fit."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 0,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Tolerating underperformance without direct feedback is unfair to the employee and to the team. The employee deserves to know specifically where they are falling short and what success looks like. A structured 30-day plan with clear metrics is not punishment — it is the clearest chance they have to succeed. If they cannot meet it, the decision becomes easier and fairer.",
    "framework": "Performance Improvement Plan — always deliver direct feedback with a defined success bar and timeline before making a separation decision.",
    "principle": "Kindness without clarity is not kindness. It is avoiding a hard conversation at someone else's expense.",
    "traps": [
      "Three more months without intervention just delays the same conversation. The team's morale continues to erode.",
      "Letting go after 3 months without a documented improvement attempt creates legal exposure and may be premature.",
      "Moving a poor performer to another role without addressing performance just exports the problem."
    ]
  },
  {
    "id": "CR06",
    "category": "Crisis",
    "difficulty": 1,
    "scenario": "Your SaaS platform experienced a security breach. An attacker accessed a database containing client names, emails, and hashed passwords. No financial data was exposed. You discovered it 48 hours ago and have patched the vulnerability. Clients do not know yet.",
    "quote": "\"We already fixed it. If we tell clients, we will lose them.\"",
    "options": [
      "Disclose the breach to clients after the full remediation report is ready — once the vulnerability is closed, a transparent message with clear context will limit damage better than an urgent notice sent before you understand the full scope.",
      "Notify only the clients whose data was definitely accessed.",
      "Notify all affected clients immediately with a clear explanation of what happened, what was exposed, and what you did.",
      "Issue a vague security update notice without specifying the breach."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 20,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Data breach disclosure is not optional — it is a legal requirement in most jurisdictions and a trust imperative. Clients who find out you hid a breach will leave and tell everyone. Clients who receive a transparent, fast, professional disclosure notice respect the honesty. Your response to a breach defines your security culture more than the breach itself.",
    "framework": "Security Incident Response — notify fast, be specific, explain remediation. Transparency in a crisis builds more trust than silence.",
    "principle": "The breach is the incident. The cover-up is the catastrophe.",
    "traps": [
      "Tying disclosure to the remediation timeline violates data protection frameworks that require client notification within 72 hours of discovery — not of fix. Waiting weeks for a full report likely puts you in breach of legal obligations.",
      "Limiting notification to \"definitely accessed\" clients exposes you legally if a broader impact is later discovered.",
      "Vague notices without specifics are worse than no notice — they signal you are hiding something."
    ]
  },
  {
    "id": "CR07",
    "category": "Crisis",
    "difficulty": 2,
    "scenario": "Your platform went down for 4 hours during business hours due to a database failure. Your largest client, who represents 20% of ARR, is furious. Their operations were disrupted and they are requesting a meeting with your CEO. They are also hinting at contract termination.",
    "quote": "\"We need to promise them this will never happen again.\"",
    "options": [
      "Promise it will never happen again and offer a 50% discount for the affected month.",
      "Offer to hire a dedicated operations engineer for their account to prevent future incidents.",
      "Escalate internally and delay the client meeting until you have a full technical post-mortem ready.",
      "Apologize, explain what failed, what you are doing to prevent it, and offer an SLA credit as per contract."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Never promise something you cannot guarantee — \"it will never happen again\" is a promise no software company can keep. What you can promise is your response process, your SLA credits, and your prevention investments. Specific, honest communication after an outage builds more long-term trust than panic discounting.",
    "framework": "Incident Post-Mortem Communication — blameless post-mortems with clear root cause and remediation are the gold standard for technical incident communication with clients.",
    "principle": "After an outage: explain, fix, credit. Never promise invulnerability.",
    "traps": [
      "\"Never happen again\" is a lie. It will happen again. When it does, you have destroyed all credibility.",
      "Delaying the meeting signals avoidance. Clients want human contact, not a perfect post-mortem.",
      "A dedicated engineer for one client is unsustainable and signals that the fix is human supervision, not better infrastructure."
    ]
  },
  {
    "id": "CR08",
    "category": "Crisis",
    "difficulty": 2,
    "scenario": "A former client posted a detailed negative review on LinkedIn and G2 describing a bad implementation experience. The post has 3,000 likes and is being circulated in your industry. Your sales team is seeing it come up in demos. The claims are partially accurate but lack context.",
    "quote": "\"We need to fight back publicly. The post is misleading.\"",
    "options": [
      "Contact the former client privately to understand their concerns and offer to resolve them.",
      "Post a public rebuttal with the full context and correct the factual errors.",
      "Ignore it. Responding publicly draws more attention to the negative review.",
      "Have your marketing team respond with positive client testimonials to bury the negative post."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "A private conversation with the reviewer is almost always more productive than a public war. If the client had a genuinely bad experience, understand why and address it — even if they are wrong about some details. A public resolution (\"we reached out and resolved this\") is far more powerful than a public rebuttal.",
    "framework": "Review Crisis Response — address public complaints privately first. The public audience sees how you handle it more than what you say about it.",
    "principle": "How you respond to criticism tells the market more about you than the criticism itself.",
    "traps": [
      "Public rebuttals, even if factually correct, look defensive and escalate the conflict. The market dislikes companies that fight with clients.",
      "Ignoring a 3,000-like post that is hitting your demos is not an option. It needs a response strategy.",
      "Burying with testimonials is a PR hack that sophisticated buyers see through and resent."
    ]
  },
  {
    "id": "CR09",
    "category": "Crisis",
    "difficulty": 3,
    "scenario": "Your company's data processing practices are being investigated by the National Privacy Commission after a client filed a complaint about how you use their client data. Your legal counsel says you are probably compliant but exposure is uncertain. The investigation could take 6-12 months and becoming public knowledge could affect your sales pipeline.",
    "quote": "\"We did nothing wrong. We should be transparent about the investigation to show confidence.\"",
    "options": [
      "Issue a public statement proactively disclosing the investigation.",
      "Say nothing publicly. Cooperate with the NPC fully and resolve it privately.",
      "Brief your top 5 enterprise clients individually and confidentially before the investigation becomes public — controlling the narrative with your most important relationships.",
      "Hire a PR firm to shape coverage in case the investigation becomes public."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Regulatory investigations are typically confidential unless you are required to disclose. Voluntary public disclosure of an unresolved investigation creates market uncertainty without any benefit. The right play is full cooperation, rapid remediation of any genuine gaps, and complete silence publicly until either exonerated or required to disclose.",
    "framework": "Regulatory Response Protocol — cooperate fully, remediate genuinely, do not pre-empt disclosure obligations. Voluntary disclosure of unresolved investigations creates risk without benefit.",
    "principle": "Legal processes have their own timeline. Do not accelerate public exposure before you have a resolution.",
    "traps": [
      "Proactive disclosure of an ongoing investigation signals to clients and competitors that something is wrong before you know what you are dealing with.",
      "Briefing enterprise clients about an unresolved investigation creates anxiety in your most valuable relationships with no operational reason — unlike a data breach, they have no exposure here, so you are injecting pipeline risk voluntarily.",
      "A PR firm managing a live regulatory investigation is a red flag signal to sophisticated clients."
    ]
  },
  {
    "id": "CR10",
    "category": "Crisis",
    "difficulty": 1,
    "scenario": "Your lead engineer resigned suddenly on a Monday with no notice. They were in the middle of a critical integration project for your largest client, due in 3 weeks. No one on the team has full context on the work. The client does not know yet.",
    "quote": "\"Do not tell the client. We will figure it out internally and deliver on time.\"",
    "options": [
      "Tell the client immediately, reset expectations, and offer a revised timeline.",
      "Do not tell the client. Attempt to deliver on time and only disclose if you miss the deadline.",
      "Tell the client you are managing a team change and ask if there is any flexibility on scope.",
      "Offer the departing engineer a large consulting fee to hand over knowledge before they leave."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Clients respect honesty and transparency far more than false confidence. \"Managing a team change\" is honest without being alarmist. Asking about scope flexibility opens a practical conversation rather than just announcing a delay. Clients who are blindsided by a missed deadline with no warning lose trust permanently.",
    "framework": "Proactive Client Communication — when internal problems will affect delivery, inform early. Clients who know early can adjust. Clients who find out late feel deceived.",
    "principle": "Early transparency about a risk is a service. Late revelation of a failure is a betrayal.",
    "traps": [
      "Full immediate disclosure with a delay reset is slightly over-alarming. You do not yet know if you will actually miss the deadline.",
      "Hiding the situation and hoping to deliver is gambling with your biggest client relationship.",
      "Paying a large consulting fee signals desperation and creates a precedent. First attempt direct knowledge transfer."
    ]
  },
  {
    "id": "E06",
    "category": "Enterprise",
    "difficulty": 1,
    "scenario": "An enterprise client is asking for a 99.9% uptime SLA (about 8.7 hours of downtime allowed per year). Your current infrastructure supports 99.5% uptime on average. Meeting the 99.9% SLA would require significant infrastructure investment and operational changes.",
    "quote": "\"Sign the SLA. We will figure out the infrastructure later. We need the contract.\"",
    "options": [
      "Sign the 99.9% SLA. Close the deal and upgrade infrastructure immediately.",
      "Decline the SLA requirement. Be honest about your current capability.",
      "Offer a 99.5% SLA with financial penalties on your end if you breach it.",
      "Counter with 99.7% and commit to reaching 99.9% within 12 months with a roadmap."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Signing an SLA you cannot currently meet is a ticking clock for breach of contract. But offering nothing is also wrong — you have a clear upgrade path. Proposing a realistic intermediate SLA with a committed roadmap to 99.9% is honest, commercially sophisticated, and often accepted by enterprise clients who respect transparency.",
    "framework": "Honest SLA Negotiation — enterprise clients prefer a vendor who can meet what they sign over one who signs anything. Negotiate on commitment, not bravado.",
    "principle": "Never sign an SLA you cannot currently meet without a funded remediation plan.",
    "traps": [
      "Signing a capability you do not have exposes you to financial penalties and client distrust the first time you breach it.",
      "Declining entirely often kills the deal when a middle path exists.",
      "99.5% with penalties is honest but shows no path to improvement — less compelling than a roadmap."
    ]
  },
  {
    "id": "E07",
    "category": "Enterprise",
    "difficulty": 2,
    "scenario": "You are implementing your platform for a large enterprise with 5 subsidiaries across 3 countries. Each subsidiary has different workflows, currencies, and tax requirements. The project manager at the client side wants a single unified configuration. Your implementation team says that is technically impossible without major customization.",
    "quote": "\"The client knows their business. If they say one config, we deliver one config.\"",
    "options": [
      "Propose a shared core platform with subsidiary-level configuration modules.",
      "Push back and deliver 5 separate configurations as the technically correct solution.",
      "Attempt to deliver a single unified configuration as requested.",
      "Escalate to the client's CTO to reset expectations on what is technically feasible."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 15
    },
    "explanation": "Enterprise clients often request unified configurations for political reasons — they want consistency. But a platform that acknowledges local differences through a shared core and modular config is both technically sound and commercially differentiated. Presenting this architecture positions you as a thoughtful partner, not a vendor who just executes requests.",
    "framework": "Enterprise Architecture Consultation — your job is not just to deliver what is asked. It is to understand the underlying need and deliver the right solution.",
    "principle": "Clients tell you what they want. Your job is to deliver what they need.",
    "traps": [
      "Forcing a single config that is technically impossible leads to project failure and contract disputes.",
      "Simply refusing to deliver what was asked without an alternative destroys trust.",
      "Escalating past the project manager creates political damage that will haunt the entire engagement."
    ]
  },
  {
    "id": "E08",
    "category": "Enterprise",
    "difficulty": 2,
    "scenario": "A government enterprise deal worth ₱6M has been in your pipeline for 8 months. It has passed technical evaluation, budget approval, and executive sign-off. It is now stuck in procurement, which says the evaluation process needs to restart due to an internal policy change. You have invested ₱800K in business development for this deal.",
    "quote": "\"We need to call the executives and get them to override procurement.\"",
    "options": [
      "Escalate to the executives who approved the deal and ask them to push procurement to move.",
      "Accept the restart. Submit all required documents cleanly for the new evaluation.",
      "Withdraw from the process. Eight months and no close signals this deal is not real.",
      "Engage a government relations consultant to navigate the procurement restart."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Government procurement restarts are common and do not mean the deal is dead. The technical evaluation and executive sign-off are still valid signals. Submitting cleanly for the restart costs relatively little compared to the ₱6M deal value. Executive escalation over a procedural restart creates political friction that jeopardizes the deal.",
    "framework": "Government Sales Patience — procurement timelines are not negotiating tactics; they are structural. Patience and clean process compliance is the playbook.",
    "principle": "Government deals reward those who can outlast the process, not those who fight it.",
    "traps": [
      "Asking executives to override their own procurement signals that you do not respect their internal process.",
      "Withdrawing after passing all technical and approval stages because of a procedural delay is leaving a legitimate deal on the table.",
      "Engaging a government relations consultant for a procurement restart (not an access problem) is an expensive mismatch."
    ]
  },
  {
    "id": "E09",
    "category": "Enterprise",
    "difficulty": 3,
    "scenario": "An enterprise client wants source code escrow as a condition of signing. They are concerned that if your company closes, they will have no access to the product. You have never done escrow before. Legal says it requires a three-party agreement with an escrow agent and ongoing deposit requirements.",
    "quote": "\"Source code escrow is standard practice. We should just agree to it.\"",
    "options": [
      "Agree to source code escrow as a standard enterprise concession.",
      "Decline source code escrow entirely. It sets a dangerous precedent.",
      "Agree to escrow but charge a setup and annual maintenance fee to cover the legal and operational cost.",
      "Offer an alternative: a service continuity guarantee with a 12-month wind-down provision instead of code escrow."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "Source code escrow is legitimate but costly — legal fees, escrow agent fees, deposit maintenance. If you agree without recovering cost, you create an expensive obligation for every future enterprise deal. Charging a fair escrow fee makes the client weigh the real value of the request, and covers your ongoing obligation.",
    "framework": "Enterprise Concession Pricing — when an enterprise requires non-standard services, price them. Non-priced concessions become expected standards for all future deals.",
    "principle": "Agreed-to obligations without pricing are discounts in disguise.",
    "traps": [
      "Agreeing without cost recovery sets a precedent — every enterprise deal now has free escrow expectations.",
      "Declining a standard risk-mitigation request when it can be accommodated at a fee loses the deal unnecessarily.",
      "Service continuity provisions are weaker protection than escrow — clients will see through the substitution."
    ]
  },
  {
    "id": "E10",
    "category": "Enterprise",
    "difficulty": 1,
    "scenario": "You are 90 days into an enterprise implementation. The client's IT security team has just raised concerns about your cloud storage compliance with their internal data residency policy — all data must be stored within the Philippines. Your current infrastructure uses AWS Singapore region. This was not raised during procurement.",
    "quote": "\"Their IT team is being difficult. This was not part of the original agreement.\"",
    "options": [
      "Escalate to the client's executive sponsor and ask them to override IT.",
      "Continue the implementation as-is and document that the requirement was raised post-contract.",
      "Formally engage your legal team to assess whether data residency compliance is contractually required before committing to any infrastructure change.",
      "Add a Philippine data residency option to your infrastructure roadmap and propose a timeline to comply."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Data residency concerns from enterprise IT are legitimate and common — even when raised late. The right response is to treat it as a real requirement, present a concrete timeline to comply, and demonstrate infrastructure maturity. Overriding IT or dismissing the concern creates adversarial internal politics that will haunt the implementation.",
    "framework": "Late-Stage Compliance Requirements — treat late-raised compliance requirements as feature requests, not blockers. Build a timeline and price it if necessary.",
    "principle": "Security and compliance teams are protecting real risk. Take them seriously even when it is inconvenient.",
    "traps": [
      "Going over IT's head creates a political enemy who will undermine the implementation even after go-live.",
      "Documenting and continuing without action leaves you vulnerable when the client formally invokes the concern.",
      "Using legal posture as the first response turns a solvable infrastructure problem into an adversarial relationship — even if you are contractually correct, winning the argument costs more than building the PH region."
    ]
  },
  {
    "id": "MK01",
    "category": "Marketing",
    "difficulty": 1,
    "scenario": "You have ₱150K/month for marketing. Two channels have shown results: Google Ads brings in 20 qualified leads/month at ₱5K CAC, and content marketing (SEO blog) has generated 8 inbound leads last quarter at almost zero variable cost but requires 3 months of consistent investment before compounding.",
    "quote": "\"Paid ads are working. Let us scale Google Ads and pause content.\"",
    "options": [
      "Split: ₱100K on Google Ads for near-term pipeline, ₱50K on content for long-term compounding.",
      "Stop Google Ads. Invest entirely in content and SEO for long-term compounding.",
      "Go all-in on Google Ads. It has proven ROI and scales predictably.",
      "Reallocate ₱50K/month toward a referral incentive program — existing clients are the cheapest and most credible lead source, and you currently have zero investment there."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 15,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "Google Ads creates rented demand — it stops the moment you stop paying. Content marketing creates owned demand — it compounds over time and drives CAC toward zero. Smart B2B marketers fund both: paid for near-term pipeline, content for long-term moat. The 70/30 split maintains cash flow while building the asset.",
    "framework": "Demand Capture vs Demand Creation — paid ads capture existing demand. Content creates new demand and builds authority. Both are necessary at different ratios depending on stage.",
    "principle": "The best marketing channel you have is the one that works while you sleep.",
    "traps": [
      "Paid-only creates a revenue cliff if you ever need to cut budget. CAC never improves.",
      "Content-only abandons a working near-term channel with no replacement pipeline for 3-6 months.",
      "Redirecting budget to a referral program before optimizing your two proven channels starves near-term pipeline for a lead source that takes months to activate — referral volume compounds from a satisfied client base, which paid acquisition is still building."
    ]
  },
  {
    "id": "MK02",
    "category": "Marketing",
    "difficulty": 2,
    "scenario": "Your company has been called \"WorkflowPH\" for 3 years. You want to rebrand to \"Kela\" as you expand regionally — it is shorter, more memorable, and does not limit you to one country. Your 200 existing PH clients love the current name. Your designers say the new brand is significantly stronger.",
    "quote": "\"Clients love WorkflowPH. A rebrand will confuse everyone.\"",
    "options": [
      "Rebrand fully to Kela. Announce it broadly and switch all assets overnight.",
      "Rebrand to Kela for all new acquisition but keep WorkflowPH in client-facing communications for 12 months.",
      "Keep WorkflowPH forever. Client familiarity is too valuable to risk.",
      "Test the new brand on a new product line before committing to a full rebrand."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 20
    },
    "explanation": "Overnight rebrands create confusion and brand equity loss. Phased rebrands — using the new brand externally while transitioning client-facing materials over 12 months — protect existing relationships while building the new identity. Existing clients get continuity; new prospects see the stronger brand.",
    "framework": "Phased Brand Transition — new brand externally first. Internal and client-facing materials follow in structured waves. Announce the rebrand with context, not silence.",
    "principle": "Rebrands fail when done too fast or not at all. Phase them.",
    "traps": [
      "Overnight switches cause link breakage, email domain confusion, and client disorientation all at once.",
      "A regional brand trapped in a PH-specific name is a permanent headwind for international growth.",
      "Testing a new brand on a sub-product creates dilution — the brand appears as two different identities in the same market."
    ]
  },
  {
    "id": "MK03",
    "category": "Marketing",
    "difficulty": 2,
    "scenario": "Your best-performing client — a well-known logistics company — is happy with your product and willing to give you a glowing verbal testimonial. But they refuse to be named publicly because they see your software as a competitive advantage they do not want others to know about.",
    "quote": "\"Without a named case study, the testimonial is worthless.\"",
    "options": [
      "Decline to use their testimonial. Anonymous case studies lack credibility.",
      "Use an anonymous case study: \"A leading logistics company reduced ops costs by 34%.\"",
      "Write a detailed ROI story with their industry, company size, and results but obscure the name.",
      "Convince them to go public by offering a discount or co-marketing benefit."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 15
    },
    "explanation": "Anonymous case studies with specificity (industry, company size, quantified results, use case) carry significant credibility without compromising the client. \"A 500-person logistics company cut operational errors by 44% in 90 days\" is compelling without revealing the client. Specificity is more persuasive than a name.",
    "framework": "Evidence Marketing Under NDA — specific, quantified outcomes carry the weight that names would. Use every specific the client allows.",
    "principle": "Specific anonymous > vague named. Numbers tell the story.",
    "traps": [
      "Walking away from a strong testimonial because it is not public is leaving a marketing asset unused.",
      "Generic anonymous (just \"leading logistics company\") lacks detail and reads as made up.",
      "Incentivizing clients to publish creates transactional case studies that readers sense are not genuine."
    ]
  },
  {
    "id": "MK04",
    "category": "Marketing",
    "difficulty": 3,
    "scenario": "Your B2B SaaS pricing starts at ₱3,500/month and goes up to ₱25,000/month for enterprise. Your marketing team is debating whether to show pricing on your website. Showing prices filters leads by budget. Hiding prices creates more demo requests but from a wider range of budgets.",
    "quote": "\"Never show pricing. It just gives competitors a reference point.\"",
    "options": [
      "Show all pricing tiers publicly on the website.",
      "Hide pricing entirely. Force prospects into a sales conversation.",
      "Show the entry tier price only (\"Starting at ₱3,500/month\"), linking to a contact form for larger plans.",
      "Show pricing only for SMB tiers and use \"Contact us\" for enterprise."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "Showing only the entry price qualifies SMB buyers self-serve (they know if they can afford it) while keeping enterprise pricing in a sales conversation where value can be built before price is discussed. Full price transparency reduces demo volume but increases conversion rate. The right choice depends on your sales model and average deal complexity.",
    "framework": "Pricing Transparency Strategy — in B2B, pricing transparency increases with simplicity and decreases with deal complexity. Match your pricing display to where value justification happens.",
    "principle": "Show what can be understood. Protect what requires explanation.",
    "traps": [
      "Full public pricing on enterprise deals short-circuits the value conversation before it starts.",
      "Hiding all pricing creates friction for SMB buyers who just need a quick budget check before booking a demo.",
      "Anchoring with the starting price is correct, but linking to a form for everything above is too abrupt — tiers up to a threshold work better."
    ]
  },
  {
    "id": "MK05",
    "category": "Marketing",
    "difficulty": 1,
    "scenario": "You have ₱200K/month in marketing budget and are running 6 channels simultaneously: Google Ads, LinkedIn, content, webinars, a referral program, and a partner newsletter. None are performing well. Your team is spread thin across all of them.",
    "quote": "\"More channels mean more chances to hit. We should keep running all of them.\"",
    "options": [
      "Identify the top 1-2 channels by pipeline contribution and double down. Cut or pause the rest.",
      "Cut all channels and focus exclusively on outbound sales instead.",
      "Keep all 6 channels. Diversification reduces risk.",
      "Hire a marketing agency to manage all 6 channels more professionally."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "Six underperforming channels means the budget and team are spread too thin to excel at anything. The top 1-2 channels — identified by pipeline attribution data — should receive concentrated resources. This is not about risk; it is about building genuine expertise and momentum in fewer places.",
    "framework": "Channel Concentration Strategy — a startup with limited marketing resources cannot dominate six channels. Concentrate where the evidence is strongest.",
    "principle": "Six mediocre channels beat one great channel only if you have the team for six.",
    "traps": [
      "Diversification is a portfolio strategy for large companies. For resource-constrained marketing teams, it means nothing done well.",
      "Cutting all marketing to do outbound only is an over-correction. Some of your 6 channels may already be working.",
      "An agency managing 6 underperforming channels costs more and does not fix the channel selection problem."
    ]
  },
  {
    "id": "MK06",
    "category": "Marketing",
    "difficulty": 2,
    "scenario": "Your B2B SaaS onboarding takes 5 steps, requires a call with a success manager, and takes on average 3 weeks before the first value. A competitor launched a self-serve product with 5-minute setup. You are seeing demo-to-activation drop rates at 55%. Clients who do activate have 90% retention.",
    "quote": "\"Our product is complex. Self-serve is not possible for our use case.\"",
    "options": [
      "Keep the current onboarding. Clients who need hand-holding need hand-holding.",
      "Redesign onboarding to enable at least a partial self-serve first-value experience in under 30 minutes.",
      "Reduce the number of steps by removing features from the onboarding flow.",
      "Hire more customer success managers to reduce the onboarding time from the supply side."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 20
    },
    "explanation": "A 55% drop between demo and activation is a product and onboarding problem, not a complexity problem. The competitor showing 5-minute setup proves the complexity narrative wrong. Redesigning for a 30-minute first-value experience does not eliminate complexity — it removes the friction that prevents clients from ever experiencing the core value.",
    "framework": "Time to First Value (TTFV) — the metric that predicts activation, retention, and expansion most reliably in B2B SaaS. Reduce TTFV, everything else improves.",
    "principle": "Complexity is what the product handles. Simplicity is what the user experiences.",
    "traps": [
      "Defending complexity as a feature is the most common excuse for bad product design.",
      "Removing features from onboarding reduces complexity but may hide value that drives activation.",
      "More CS managers is a headcount solution to a product problem. It scales linearly while the drop rate stays constant."
    ]
  },
  {
    "id": "MK07",
    "category": "Marketing",
    "difficulty": 2,
    "scenario": "You are launching a new product tier. Your marketing team wants to use a testimonial from a client who is now on a different version of the product and may not represent the new tier's experience. They are enthusiastic but their use case was different. The testimonial is compelling.",
    "quote": "\"It is a real client saying real things. What is the problem?\"",
    "options": [
      "Use the testimonial as-is. It is genuine and compelling.",
      "Do not use it. Mismatched testimonials can mislead prospects.",
      "Ask the client to record a new testimonial specific to the features they used that are also in the new tier.",
      "Use it with proper context — disclose it is from a client on a different tier."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "The most compelling testimonials are specific. Asking the client to speak specifically to the features that overlap with the new tier makes the testimonial both accurate and more persuasive. A mismatched testimonial that closes a deal creates a client whose experience differs from what they expected — that is the start of churn.",
    "framework": "Testimonial Specificity — the best proof is specific to the use case, the buyer stage, and the features being evaluated. Generic enthusiasm rarely closes.",
    "principle": "A testimonial that closes the wrong client is worse than no testimonial.",
    "traps": [
      "A testimonial from a different product experience sets expectations the new tier may not meet.",
      "Declining to use a willing client advocate is wasteful when a simple reshoot resolves the issue.",
      "\"With context\" disclosures in testimonials reduce conversion. The clean solution is a relevant testimonial."
    ]
  },
  {
    "id": "MK08",
    "category": "Marketing",
    "difficulty": 3,
    "scenario": "Your operations software competes against 14 similar products in the Philippine market. A brand consultant recommends two strategies: broad positioning (\"The #1 Operations Platform for Philippine SMEs\") or a narrow niche (\"The operations platform built for food and beverage businesses in the Philippines\").",
    "quote": "\"We do not want to limit ourselves. Broad positioning reaches more businesses.\"",
    "options": [
      "Go broad. A larger market position captures more potential customers.",
      "Find a middle position: \"The operations platform for service businesses in the Philippines.\"",
      "Use different messaging for each vertical — broad for general ads, specific for industry ads.",
      "Go narrow. Own the food and beverage niche completely, then expand."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 15,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 25
    },
    "explanation": "Category ownership in a crowded market is more valuable than category presence. Being \"the F&B operations platform\" means every F&B operator in the Philippines who hears about operations software thinks of you first. You earn referrals from within the industry. Your marketing language resonates because you understand their specific problems.",
    "framework": "Category Design — narrow categories are winnable. Broad categories are fought for endlessly. Win the small category, then expand.",
    "principle": "A big fish in a small pond beats a small fish in a big one — until the pond grows.",
    "traps": [
      "Broad positioning means you are competing against everyone with generic language that resonates with no one specifically.",
      "Dual messaging creates an inconsistent brand and is expensive to execute well.",
      "\"Service businesses\" is still too broad to own. F&B is specific enough to dominate."
    ]
  },
  {
    "id": "EG01",
    "category": "Ethics",
    "difficulty": 1,
    "scenario": "Your largest client asks you to add a clause to your contract that prevents you from selling your software to any of their direct competitors. In exchange, they will increase their contract by 40%. You currently have no clients in their industry.",
    "quote": "\"Forty percent more revenue from one client. And we get exclusivity protection for them.\"",
    "options": [
      "Decline the exclusivity clause entirely and explain why.",
      "Accept the exclusivity clause. The revenue increase justifies it.",
      "Offer a 6-month right of first refusal on competitor clients, not full exclusivity.",
      "Accept for their direct competitors only, explicitly excluding adjacent markets."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "A single-client exclusivity clause in an industry you are not yet in is a fair-sounding trap. If that industry turns out to be your strongest vertical, you have contractually blocked yourself from it. The 40% increase is compensation for permanently constraining your business. Explain the business reason for declining — most sophisticated clients will respect it.",
    "framework": "Exclusivity Traps in Commercial Agreements — exclusivity has a real economic cost even when it feels free. Always calculate: what is the value of the market you are surrendering?",
    "principle": "Never sell your future market access for today's revenue unless the price reflects the full value of what you are giving up.",
    "traps": [
      "40% increase sounds attractive. A fully dominated industry vertical is worth 10x that.",
      "Right of first refusal is a middle ground but still restricts your commercial freedom.",
      "Limiting to direct competitors sounds reasonable but is difficult to enforce legally and still limits expansion."
    ]
  },
  {
    "id": "EG02",
    "category": "Ethics",
    "difficulty": 2,
    "scenario": "During a routine code review, your senior engineer discovers a bug that has been silently corrupting data in low-traffic edge cases for 6 months. Analysis shows 12 clients are affected, with data errors ranging from minor to significant. No client has reported it. It will take 3 weeks to fix properly.",
    "quote": "\"No one has noticed. We fix it quietly, release an update, and move on.\"",
    "options": [
      "Fix the bug and restore affected data, then include a clear disclosure in your next scheduled product release communication — pairing the notification with a concrete fix demonstrates accountability without creating panic before a resolution exists.",
      "Disclose to all 12 affected clients immediately, explain the impact, and provide a timeline to fix.",
      "Fix it first, then notify clients after the fix is deployed.",
      "Notify only the clients with significant data errors; others had minimal impact."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 20,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "A data corruption bug affecting client data is not a fixable-in-silence event. Clients have the right to know their data was affected so they can audit, restore backups, or take their own corrective actions. Immediate disclosure with a clear remediation timeline is the only ethical path. Silent fixes that are later discovered destroy trust permanently.",
    "framework": "Responsible Disclosure of Product Defects — data integrity issues affecting clients require immediate, full disclosure. The timeline to fix is separate from the obligation to inform.",
    "principle": "Client data belongs to the client. When it is compromised, they must be told.",
    "traps": [
      "Bundling a data integrity disclosure into a product release email is not legally compliant notification — affected clients need a direct, specific notice that allows them to assess and act on their own exposure, not a footnote in a release log.",
      "Fixing before notifying delays information clients need to audit their own systems. Hours matter in data integrity events.",
      "Triaging disclosure by impact level sounds reasonable but creates a tiered trustworthiness that clients will resent."
    ]
  },
  {
    "id": "EG03",
    "category": "Ethics",
    "difficulty": 2,
    "scenario": "A serious investor is in due diligence for a potential ₱20M investment. Before signing an NDA, their associate asks for a list of your top 10 clients by revenue so they can \"quickly validate market traction.\" Sharing this data would expose which businesses are your paying customers.",
    "quote": "\"It is just a list. They are going to find out in due diligence anyway.\"",
    "options": [
      "Share the client list immediately. Investors need this to proceed.",
      "Share aggregated metrics instead: industry breakdown, retention rates, average contract value.",
      "Decline to share any client data before an NDA is signed.",
      "Share anonymized client profiles — size, industry, use case — but not company names."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Client lists are sensitive commercial information. Sharing them before an NDA is signed means an investor — who may also be invested in your competitors — can use that information without legal obligation. The NDA is not a formality; it creates enforceable confidentiality. Any investor who refuses to sign an NDA before accessing sensitive client data is not a trustworthy partner.",
    "framework": "Pre-NDA Information Hygiene — commercial client data, pricing information, and sensitive IP should never be shared in pre-NDA conversations, regardless of investor interest level.",
    "principle": "Protecting your clients' privacy protects your business. An investor who needs your client list to evaluate you can get it after they sign.",
    "traps": [
      "Pre-NDA sharing of client data exposes you and your clients to risk with no legal protection.",
      "Aggregated metrics are safe to share but do not answer the NDA question directly.",
      "Anonymized profiles are safer but still give enough to potentially identify clients and violate confidentiality obligations."
    ]
  },
  {
    "id": "EG04",
    "category": "Ethics",
    "difficulty": 3,
    "scenario": "During a sales team review, you discover that two senior account executives have been promising prospective clients features that do not exist and timelines that engineering has already said are not feasible. Both closed ₱3.5M in contracts last quarter. The clients will start implementation next month.",
    "quote": "\"They hit their numbers. We just need to figure out delivery.\"",
    "options": [
      "Deliver what was promised. Find a way to build the features or meet the timeline.",
      "Put both AEs on a formal performance improvement plan, suspend their commission on the affected deals, and have your legal team manage all client communication going forward.",
      "Keep the contracts active but quietly adjust the roadmap to accommodate the promises.",
      "Call the clients proactively. Disclose the discrepancy, renegotiate scope, and address the AE behavior separately."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Clients who begin implementation based on false promises will discover the discrepancy. Better they discover it from you now, with a corrected and honest scope, than from an implementation team 90 days in. The AE behavior must also be addressed — tolerating it as \"they hit their numbers\" makes it a company standard.",
    "framework": "Ethical Sales Culture — what salespeople are rewarded for defines what they do. If closing on false promises goes unaddressed, it becomes culture.",
    "principle": "You can fix a misstated promise. You cannot fix a betrayed client.",
    "traps": [
      "Attempting to deliver on impossible promises creates a death march that burns engineers and still fails.",
      "Involving legal before attempting a direct client conversation signals conflict before resolution — clients who receive legal communication rather than a proactive account manager immediately assume the worst and accelerate toward exit.",
      "Quietly adjusting the roadmap abandons other clients' priorities and still does not fix the timeline problem."
    ]
  },
  {
    "id": "EG05",
    "category": "Ethics",
    "difficulty": 1,
    "scenario": "A junior employee approaches you privately and says they witnessed a senior manager making repeated inappropriate comments to two female team members over the past month. The junior employee is worried about retaliation if they formally report it. The senior manager leads your largest account team.",
    "quote": "\"These are serious allegations. We need to investigate quietly to avoid disrupting the account team.\"",
    "options": [
      "Thank the employee, initiate a formal investigation through HR immediately, and protect the reporter from retaliation.",
      "Investigate quietly without telling HR. Protect the team from disruption.",
      "Talk to the senior manager first and give them a chance to explain before escalating.",
      "Advise the junior employee to report it directly to HR if they want to proceed."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 0,
      "teamMorale": 20,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Harassment reports require a formal process — immediately, regardless of the seniority of the accused. Informal conversations with the accused before investigation can compromise the process and signal to the reporter that seniority protects people. Formal HR process protects the reporter, provides due process to the accused, and protects the company legally.",
    "framework": "Harassment Response Protocol — formal process, immediate action, reporter protection. Informal handling of harassment is not protecting anyone.",
    "principle": "How a company handles its first harassment report defines its culture forever.",
    "traps": [
      "\"Quiet investigation\" without HR typically means nothing happens. And retaliation against the reporter becomes a second incident.",
      "Talking to the accused first compromises the investigation and signals to the reporter that their concern is being minimized.",
      "Redirecting the employee to HR themselves removes your responsibility as a manager. They came to you. You own the response."
    ]
  },
  {
    "id": "EG06",
    "category": "Ethics",
    "difficulty": 3,
    "scenario": "Your tax advisor has proposed a structuring arrangement that would significantly reduce your corporate tax bill by routing revenue through a holding company in Singapore. The arrangement is technically legal under current Philippine tax law. However, it feels aggressive, and your CFO raises concerns about optics if the company goes public or seeks institutional investors.",
    "quote": "\"It is legal. Why would we not do it if it saves us money?\"",
    "options": [
      "Implement the structure. Legal is legal.",
      "Get a second legal opinion on the structure before deciding.",
      "Decline. Tax optimization that could embarrass you publicly is not worth the savings.",
      "Implement a lighter version of the structure — use Singapore only for genuine regional operations, not purely for tax routing."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 15
    },
    "explanation": "The CFO is raising the right concern. Tax structures that are technically legal but reputationally aggressive can create problems with institutional investors, IPO due diligence, and regulatory scrutiny. A second legal opinion verifies the analysis and may reveal risks your current advisor missed. The savings must be weighed against the probability and cost of future exposure.",
    "framework": "Legal vs Ethical Tax Planning — the question is not only \"is it legal?\" but \"does this reflect how we want to operate and be perceived?\" The two can diverge.",
    "principle": "If your tax strategy would make the front page of a newspaper and you would be embarrassed, reconsider.",
    "traps": [
      "\"Legal is legal\" ignores the reputational, investor, and regulatory risk your CFO correctly identified.",
      "Declining without a second opinion may mean leaving legitimate savings on the table for a structure that is actually clean.",
      "A lighter version without understanding the legal foundation of the full structure may create unpredictable compliance gaps."
    ]
  }
]
