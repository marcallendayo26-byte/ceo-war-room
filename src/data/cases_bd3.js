export const CASES_BD3 = [
  {
    id: "MXP01",
    category: "Market Expansion",
    difficulty: 1,
    scenario: "You are planning to enter the Australian market. You have two options: hire a direct country manager and build a local sales team over 12 months, or partner with an established local reseller who already has 80 enterprise relationships in your target segment. The reseller wants a two-year exclusive arrangement. Direct entry would take $600K in year one. The reseller expects a 25% revenue share.",
    quote: "\"Direct gives us control. Partner gives us speed. Which matters more right now?\"",
    options: [
      "Partner for year one to establish market presence and customer reference accounts, with a contractual option to build direct sales in year two as volume justifies it.",
      "Partner with the reseller — 80 existing enterprise relationships is faster and cheaper than 12 months of direct hiring.",
      "Go direct — control over customer relationships and brand in a new market is worth the higher upfront cost.",
      "Enter both simultaneously — direct and partner in parallel to maximize market coverage."
    ],
    correct: 0,
    consequences: {"growth":10,"cash":10,"executionRisk":-10,"strategicPosition":10},
    explanation: "New market entry is a hypothesis, not a certainty. Committing $600K to a direct team before validating that Australian enterprises buy your product the same way US ones do is high-risk. A partner-first year validates the market economics while generating reference customers. A contractual option to build direct once volume justifies it preserves the long-term control objective without betting $600K on unproven demand.",
    framework: "Partner-led market entry with a direct option — validate then control",
    principle: "Enter new markets through partners to validate the market. Build direct once the market is proven.",
    traps: [
      "$600K in direct market entry before validating local buying behavior is a high-cost bet on an unconfirmed hypothesis.",
      "Two-year exclusivity without a direct option creates a dependency that prevents you from building local control even if the market grows significantly.",
      "Direct and partner in parallel creates channel conflict on day one of market entry — the worst possible first impression in a new market."
    ]
  },
  {
    id: "MXP02",
    category: "Market Expansion",
    difficulty: 2,
    scenario: "You are entering the Japanese market and have two partner candidates. Partner A is a large local IT distributor with 2,000 enterprise clients, strong brand recognition, and a track record of distributing international software products — but they carry 40 other vendors and your product will be one of many. Partner B is a boutique consultancy with deep domain expertise in your vertical, 60 targeted clients who are your exact ICP, and a team that has already championed your product internally.",
    quote: "\"Two thousand clients or sixty. Scale versus fit. Which do we pick?\"",
    options: [
      "Partner A — 2,000 enterprise clients is the fastest path to market scale in Japan.",
      "Partner B first, use their early wins and reference customers to negotiate better terms with Partner A later.",
      "Both — use Partner A for market breadth and Partner B for vertical depth simultaneously.",
      "Partner B — 60 ICP-aligned clients with internal champions is a higher-quality starting point."
    ],
    correct: 1,
    consequences: {"growth":10,"customerTrust":10,"strategicPosition":15,"executionRisk":-5},
    explanation: "In a new market, reference customers matter more than volume. Partner B's 60 ICP clients, internal product champions, and domain expertise will produce better early customers and more compelling local case studies than Partner A's 2,000-client breadth with 40 competing vendors. Those reference customers then give you the proof points to negotiate with Partner A from a position of demonstrated market traction rather than potential.",
    framework: "Market entry sequencing — depth before breadth, proof before scale",
    principle: "In a new market, your first customers become your best sales tool. Optimize for reference quality before distribution volume.",
    traps: [
      "2,000 clients shared across 40 vendors means your product gets a fraction of a sales rep's attention and time.",
      "Partner B alone limits your market coverage ceiling once you have validated the approach.",
      "Running both partners simultaneously in a relationship-driven market like Japan creates channel conflict that can permanently damage both partnerships."
    ]
  },
  {
    id: "MXP03",
    category: "Market Expansion",
    difficulty: 2,
    scenario: "You want to expand into the financial services vertical. A specialized fintech consultant — a firm of 15 people who advise CFOs at mid-market financial institutions — wants to represent your product. They have no reseller experience but deep domain credibility. Your head of partnerships is skeptical about partnering with a firm that has never sold software before.",
    quote: "\"They know the buyers but they have never resold software. Can they actually execute?\"",
    options: [
      "Decline — a partner without software reselling experience will require too much hand-holding to justify the investment.",
      "Run a structured 90-day pilot: assign them one qualified opportunity with your team in co-sell, and evaluate their ability to advance the deal before extending full reseller rights.",
      "Accept and invest in structured onboarding: sales process training, demo certification, commercial term guidance, and a co-sell arrangement for the first three deals where your team presents alongside them.",
      "Offer a referral-only arrangement rather than full reselling rights until they prove they can close a deal."
    ],
    correct: 2,
    consequences: {"growth":10,"customerTrust":10,"executionRisk":-5,"strategicPosition":10},
    explanation: "Domain credibility with CFOs in financial services is an asset that cannot be manufactured quickly. The lack of software reselling experience is a training problem, not a fit problem. A structured co-sell for the first three deals converts their domain credibility into software sales capability while protecting deal quality. The investment in onboarding a high-credibility domain partner typically produces better outcomes than signing an experienced reseller who does not know your vertical.",
    framework: "Domain-credible partner onboarding — invest in capability, not just fit",
    principle: "A partner who knows your buyer deeply is worth training on how to sell. A partner who knows how to sell but not your buyer is not.",
    traps: [
      "Declining a partner with direct CFO access in your target vertical because they lack software sales experience is trading domain for process.",
      "A single-deal pilot before committing to the full onboarding investment sets a low bar — one deal does not reveal whether they can build a repeatable pipeline across their 15-client base.",
      "Referral-only removes their incentive to actively develop pipeline and keeps you from leveraging their customer relationships for actual revenue."
    ]
  },
  {
    id: "MXP04",
    category: "Market Expansion",
    difficulty: 3,
    scenario: "Your market entry partner in Southeast Asia has been active for eight months. They registered 12 opportunities at program launch but have since gone quiet — no updates, no new registrations, no customer introductions. When you ask for a pipeline review, they say they are \"building relationships\" and will have customer meetings \"next quarter.\" This pattern has repeated for three quarters.",
    quote: "\"Building relationships\" for eight months with no meetings scheduled is not a strategy.",
    options: [
      "Give them another quarter — relationship-based sales cycles in Southeast Asia genuinely take longer than in Western markets.",
      "Terminate the partnership and pursue a different local partner who is active in the market.",
      "Issue a performance improvement notice with 60-day minimum activity requirements: registered pipeline, customer meetings held, or a deal at proposal stage.",
      "Schedule an in-person executive visit to the market to understand the real situation — eight months without customer meetings requires a direct assessment."
    ],
    correct: 3,
    consequences: {"strategicPosition":10,"executionRisk":-10,"growth":5,"customerTrust":5},
    explanation: "Three quarters of \"relationship building\" without a single customer meeting is a pattern that deserves direct investigation, not another quarter of tolerance. An in-person executive visit accomplishes two things: it demonstrates commitment to the partner and the market (which signals are read culturally in relationship-based markets), and it allows you to directly assess whether the market opportunity is real, the partner is capable, or whether you are managing a zombie relationship. You cannot manage this remotely.",
    framework: "Partner underperformance in relationship markets — direct assessment before policy action",
    principle: "In relationship-driven markets, underperformance requires a personal visit before a performance notice. You must see the situation directly.",
    traps: [
      "Another quarter of tolerance without direct investigation is four quarters of resource waste if the partner is genuinely inactive.",
      "A performance notice is a Western business management tool that may be read as disrespectful in Southeast Asian business culture and damage the relationship permanently.",
      "Terminating before conducting a direct assessment may end a partnership that was one executive visit away from activation."
    ]
  },
  {
    id: "MXP05",
    category: "Market Expansion",
    difficulty: 1,
    scenario: "You are launching in Germany. A potential local partner tells you that enterprise prospects in Germany require data residency (all customer data stored within Germany), a German-language product interface, and local invoicing in EUR with German VAT compliance before they will evaluate any software. Your product currently has none of these. The partner says they cannot represent your product until you build them.",
    quote: "\"Without data residency and German language, we cannot even get a meeting.\"",
    options: [
      "Validate the requirements with three direct customer discovery calls before investing in any of them — partner-stated requirements sometimes overstate what buyers actually need.",
      "Invest in all three requirements before launching — the partner knows the market and their requirements are non-negotiable.",
      "Prioritize data residency first since it has a clear regulatory basis, and propose a 90-day pilot with two enterprise prospects using English-language product and EU billing to test whether the remaining requirements are hard gates before investing in them.",
      "Find a different German partner who is willing to work with your current product and build the customer demand first."
    ],
    correct: 0,
    consequences: {"customerTrust":5,"executionRisk":-10,"growth":5,"strategicPosition":5},
    explanation: "Partners who are close to buyers sometimes overstate requirements — particularly around language interfaces that buyers may tolerate in English if the product is clearly best-in-class. However, data residency in Germany has a specific legal and regulatory basis (GDPR enforcement culture, industry regulations) that buyers are unlikely to waive. Three discovery calls — not 20 — quickly reveal which requirements are hard gates versus preferences. This prevents investing in expensive compliance work based on one partner's summary.",
    framework: "Market entry requirement validation — confirm compliance must-haves before investing in them",
    principle: "Local partners know the market. They do not always distinguish between \"must-have\" and \"nice-to-have.\" Three customer calls will.",
    traps: [
      "Building all three before validating which ones are actual gates could produce a 6-month investment in a German language interface that buyers would have waived for a superior product.",
      "Prioritizing data residency alone is directionally correct but still skips the validation step — spending 90-day pilot capacity on a two-prospect test delays the broader discovery that three customer calls would produce in two weeks.",
      "Finding a partner willing to work around compliance requirements does not solve the underlying compliance problem — the requirements are about the market, not the partner."
    ]
  },
  {
    id: "MXP06",
    category: "Market Expansion",
    difficulty: 2,
    scenario: "You have strong PMF in the general mid-market. An industry-specific system integrator wants to partner to expand your product into the healthcare vertical — a segment you have not pursued. They have 30 hospital system clients and deep regulatory expertise. However, entering healthcare requires HIPAA compliance work your team estimates at 16 weeks and $180K.",
    quote: "\"They are handing us healthcare. But we have to earn the right to enter it.\"",
    options: [
      "Invest in HIPAA compliance and enter healthcare through the SI partner.",
      "Negotiate a shared investment: the SI partner funds a portion of the compliance cost in exchange for preferred partner status in the vertical for two years.",
      "Scope the HIPAA work precisely before committing — get an independent technical assessment of whether 16 weeks and $180K is accurate, since internal engineering estimates for compliance work frequently underestimate scope.",
      "Build a small healthcare pilot with two hospital clients first — validate that your core product solves the vertical's problem before investing in full compliance."
    ],
    correct: 1,
    consequences: {"cash":5,"growth":10,"strategicPosition":10,"executionRisk":-10},
    explanation: "Vertical expansion via an industry SI is a legitimate market entry strategy — they provide regulatory knowledge, customer access, and credibility you would take years to build alone. Sharing the compliance investment cost through preferred partner terms converts a unilateral $180K cost into a partnership investment with structured returns. The SI's willingness to co-invest is also a signal of their commitment — partners who will not share costs often will not share effort.",
    framework: "Vertical expansion cost sharing — preferred partner terms as the economic instrument",
    principle: "A partner who asks you to invest in market entry but will not invest themselves is not as committed as they claim.",
    traps: [
      "Fully funding the compliance investment gives the SI a competitive advantage they did not pay for — they can take your compliant product to any competitor.",
      "Getting an independent scope assessment is a useful risk-management step but delays the SI negotiation — if the estimate is off by 30%, the cost-sharing structure still resolves it better than absorbing the full cost alone.",
      "A small pilot before compliance work may expose you to HIPAA liability at the pilot stage — in healthcare, compliance precedes customer access, not the other way around."
    ]
  },
  {
    id: "MXP07",
    category: "Market Expansion",
    difficulty: 3,
    scenario: "You are exiting a market entry partnership in Brazil that has not worked — your partner has been active for 14 months with minimal revenue, two customer disputes, and a key account you need to transition directly. The partnership agreement has a six-month notice period and a non-solicitation clause covering their existing client introductions for 12 months post-termination.",
    quote: "\"We need to exit cleanly. But the contract makes it complicated.\"",
    options: [
      "Trigger the six-month notice period immediately and comply fully with the non-solicitation clause.",
      "Engage a local Brazilian counsel to advise on whether the non-solicitation clause is enforceable under Brazilian law before triggering any notice — enforceability varies significantly by jurisdiction.",
      "Negotiate an early termination with the partner — offer a one-time exit payment to release both parties from the full six-month notice and non-solicitation period.",
      "Immediately transition the key account to direct sales and deal with the contractual consequences afterward."
    ],
    correct: 2,
    consequences: {"strategicPosition":5,"executionRisk":-15,"customerTrust":5,"profitability":5},
    explanation: "A negotiated early exit is almost always preferable to a formal termination dispute when a relationship has already deteriorated. An exit payment — structured as a settlement, not a penalty — gives the partner an economic reason to cooperate with the transition, release non-solicitation protections on specific accounts, and execute a clean handover rather than a contested one. The cost of a one-time payment is typically far less than six months of partnership maintenance plus potential litigation over the non-solicitation clause.",
    framework: "Partnership exit negotiation — economic settlement for clean transition outperforms formal termination",
    principle: "Partnership exits that go through the legal process take twice as long and cost three times as much as ones that go through a negotiated settlement.",
    traps: [
      "Full contractual compliance gives you the legal protection but may produce six months of adversarial partnership that damages the key account relationship you need to transition.",
      "Engaging local counsel on enforceability is a useful parallel step but delays the exit negotiation — the partner's willingness to settle is independent of whether the clause is ultimately enforceable, and waiting on legal opinion gives the partner more time in a deteriorating situation.",
      "Transitioning the key account before resolving the contractual terms creates an immediate breach of the non-solicitation clause and significant legal exposure."
    ]
  },
  {
    id: "MXP08",
    category: "Market Expansion",
    difficulty: 2,
    scenario: "You are entering the Middle East through a local distribution partner. They have strong relationships and are highly motivated. However, your legal team has flagged that their parent company has a minority stake held by a government-linked entity, which creates FCPA (Foreign Corrupt Practices Act) compliance questions. The partner insists this is a standard ownership structure in the region and \"everyone operates this way.\"",
    quote: "\"This is how business is done here. Everyone has government-linked investors.\"",
    options: [
      "Accept the partnership — standard regional ownership structures should not create compliance risk for your company.",
      "Decline immediately — any government-linked connection in a distribution partner creates FCPA exposure that is not worth the market opportunity.",
      "Proceed with the partnership but exclude all government entities from the partner's eligible customer list.",
      "Commission independent legal due diligence on the partner's ownership structure and business practices before making any decision."
    ],
    correct: 3,
    consequences: {"executionRisk":-15,"strategicPosition":5,"customerTrust":5,"cash":5},
    explanation: "FCPA exposure from a government-linked distribution partner is a genuine legal risk that requires expert analysis, not BD judgment alone. \"Everyone does it\" is the most common rationalization heard before a compliance enforcement action. Independent legal due diligence establishes whether the ownership structure creates actual liability, what safeguards are needed, or whether the partner fails the legal threshold entirely. This is a decision that must be informed by counsel, not by the partner's characterization of regional norms.",
    framework: "FCPA due diligence — government-linked partners require independent legal review, not BD judgment",
    principle: "\"Everyone does it\" is the sentence that precedes most compliance enforcement actions. Get independent legal review.",
    traps: [
      "Accepting on the basis of regional norms without legal review makes your company's leadership personally liable if enforcement action follows.",
      "Declining immediately without due diligence may eliminate a legitimate partnership opportunity — the ownership structure may pass legal scrutiny with appropriate safeguards.",
      "Excluding government customers operationally does not address the legal question of whether the ownership structure creates FCPA exposure on all transactions."
    ]
  },
  {
    id: "MXP09",
    category: "Market Expansion",
    difficulty: 1,
    scenario: "You have been successfully selling in the US enterprise market. A European enterprise software company approaches you about becoming their exclusive distributor for your product across the EU. They have 3,000 existing enterprise clients, a localized support infrastructure, and deep regulatory knowledge. They want a five-year exclusive distribution agreement at a 30% wholesale discount from your list price.",
    quote: "\"Three thousand clients, full infrastructure, five-year exclusivity. Where is the catch?\"",
    options: [
      "Accept the distribution arrangement but negotiate to three years with performance milestones and a mutual right to review exclusivity annually after year two.",
      "Accept the five-year exclusive distribution agreement — this is the fastest possible EU market entry.",
      "Decline exclusivity and offer a preferred distributor arrangement with better economics instead.",
      "Counter with a non-exclusive arrangement at a higher wholesale discount — 20% discount without exclusivity."
    ],
    correct: 0,
    consequences: {"growth":15,"cash":5,"strategicPosition":10,"executionRisk":-5},
    explanation: "A five-year exclusive distribution agreement hands over EU market control for the duration of your most critical growth period — with no mechanism to adapt if the distributor underperforms or if you need to build a direct European presence. Three years with annual performance reviews after year two and a clear milestone framework gives you the distribution speed you want with the flexibility to course-correct. Five years without a review mechanism is too long for a relationship that has not yet proven itself.",
    framework: "Distribution agreement term negotiation — shorter initial commitment with performance review rights",
    principle: "Five-year exclusivity means five years of market control you cannot reclaim. Three years with a review right is the same distribution with an exit door.",
    traps: [
      "A five-year exclusive with no performance conditions gives the distributor permanent EU market protection regardless of what they actually do with it.",
      "Refusing exclusivity for a distributor investing in 3,000-client infrastructure and localized support will lose the partnership to a competitor who accepts the terms.",
      "Non-exclusive at a higher discount still underperforms for the distributor — they need exclusivity to justify the infrastructure investment."
    ]
  },
  {
    id: "MXP10",
    category: "Market Expansion",
    difficulty: 3,
    scenario: "Your company just closed a $15M Series B. Your board is pushing for aggressive international expansion across APAC, EMEA, and LATAM simultaneously. Your VP of BD has a partner shortlist in each region. Your COO warns that simultaneous three-region expansion will strain operations, support, and product localization capacity. You need to recommend an expansion sequence.",
    quote: "\"The money is here. The investors want global. Operations says we can't do everything.\"",
    options: [
      "Expand all three regions simultaneously — the Series B funding is specifically for growth and hesitation sends the wrong signal to investors.",
      "Sequence by market readiness: rank each region by inbound demand signal, partner strength, and operational complexity, then stage entry one region at a time on a 6-month cadence.",
      "Expand EMEA first: largest addressable market among the three, regulatory alignment with US practices, and English-language compatibility reduces localization burden.",
      "Expand APAC first — highest growth rates globally and the Series B gives you the runway to absorb the higher complexity."
    ],
    correct: 1,
    consequences: {"strategicPosition":15,"executionRisk":-15,"growth":10,"cash":5},
    explanation: "Simultaneous three-region expansion with a constrained operations team produces three mediocre market entries instead of one well-executed one. Sequencing by market readiness — using objective criteria like inbound demand, partner quality, and operational complexity — produces a defensible investment thesis, concentrates resources where returns are highest, and allows each market entry to benefit from lessons learned in the previous one.",
    framework: "International expansion sequencing — market readiness criteria over geographic or investor preference",
    principle: "Simultaneous international expansion with limited operations capacity produces three failed market entries. Sequence for success, not for optics.",
    traps: [
      "Simultaneous expansion driven by investor pressure without operational capacity is how Series B companies burn capital on geography before achieving unit economics in their first markets.",
      "EMEA first is defensible but represents a single regional preference, not a sequencing framework — the right answer is a methodology, not a specific region.",
      "APAC-first for growth rate reasons ignores that high-growth markets often require the most localization investment and have the least similarity to your US go-to-market motion."
    ]
  },
  {
    id: "ECO01",
    category: "Ecosystem & Marketplace",
    difficulty: 1,
    scenario: "You are evaluating whether to build a public API and launch a developer program. Your core product is a B2B SaaS platform with 400 enterprise customers. Three enterprise customers have requested API access to build internal integrations. Your CTO is enthusiastic about becoming a platform. Your CFO wants to understand the business case before committing engineering resources.",
    quote: "\"Three customers want an API. Does that make us a platform?\"",
    options: [
      "Build the public API immediately — platform businesses command premium valuations and strategic positioning.",
      "Scope a private API for the three requesting customers, priced as a premium add-on, and treat their usage data and integration patterns as the business case for a future public developer program.",
      "Build a private API for the three requesting customers first and evaluate platform investment based on actual usage and demand signals.",
      "Partner with an iPaaS provider to offer API-like connectivity without building native API infrastructure."
    ],
    correct: 2,
    consequences: {"executionRisk":-10,"strategicPosition":5,"growth":5,"profitability":5},
    explanation: "Three customers requesting API access is a demand signal, not a platform mandate. A private API serves the immediate need, generates real usage data, reveals what developers actually build, and informs whether a public developer program is worth the investment. Public APIs require documentation, versioning, support, and stability guarantees that private APIs do not. Validate before you commit to the full platform infrastructure investment.",
    framework: "Private-to-public API progression — validate developer demand before investing in platform infrastructure",
    principle: "A platform is not declared — it is earned. Build a private API first. Build the platform when the usage data demands it.",
    traps: [
      "A public API without proven demand creates documentation, support, and versioning obligations that consume significant ongoing engineering capacity.",
      "Pricing the private API as a premium add-on optimizes near-term monetization but signals to enterprise customers that integration access is a revenue item rather than a platform capability — potentially delaying the broader adoption that makes the public API viable.",
      "iPaaS connectivity serves integration use cases but does not enable customers to build custom applications — a different and often more valuable use case."
    ]
  },
  {
    id: "ECO02",
    category: "Ecosystem & Marketplace",
    difficulty: 2,
    scenario: "You have built an integration marketplace with 12 certified partner integrations. A new potential marketplace partner makes a strong integration but their product directly competes with one of your native features — a feature that generates 15% of your ARR. They argue their integration will bring joint customers who use both products.",
    quote: "\"Their integration is great. Their product competes with ours. Do we list them?\"",
    options: [
      "List them on a trial basis for 90 days and remove them if the native feature's adoption declines.",
      "Decline — listing a direct competitor's integration helps customers move off your feature and reduces your ARR in that category.",
      "List them with product differentiation messaging: clearly position your native feature for the use cases where it is stronger, and list the integration for use cases where the combination genuinely serves customers better.",
      "List them — an open marketplace with all relevant integrations is more valuable to customers than a curated marketplace that avoids competitive tension."
    ],
    correct: 3,
    consequences: {"customerTrust":15,"growth":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "Marketplace credibility depends on listing the integrations that genuinely serve customers, not the ones that avoid internal commercial tension. Customers who discover you excluded a useful integration will trust your marketplace less — and may go find the integration elsewhere. If your native feature is genuinely better for some use cases, that differentiation wins on product merit. A marketplace that protects your ARR by limiting customer choice is not a marketplace — it is a walled garden.",
    framework: "Marketplace integrity over internal ARR protection — customer value builds ecosystem trust",
    principle: "A marketplace that only lists non-competitive integrations is not a marketplace. Customer trust in your ecosystem depends on completeness.",
    traps: [
      "Declining to list a strong integration because it competes with one feature signals to all developers that your marketplace is not genuinely open.",
      "Differentiation messaging is valid but does not address the listing decision — customers will evaluate the product, not your positioning copy.",
      "A 90-day trial with removal triggers based on native feature adoption is a conflict-of-interest governance mechanism that will damage developer trust when discovered."
    ]
  },
  {
    id: "ECO03",
    category: "Ecosystem & Marketplace",
    difficulty: 2,
    scenario: "You are building a partner ecosystem and a marketplace. Two partners are asking for different monetization models: Partner A wants a transaction fee model (you take 15% of every deal they close through your marketplace). Partner B wants a subscription listing model ($2,000/year to be listed, regardless of transaction volume). You need to decide on a single model or offer both.",
    quote: "\"One partner wants a cut of every deal. The other wants a flat annual fee. Which model builds the better ecosystem?\"",
    options: [
      "Offer both tiers: subscription listing for early-stage or smaller partners, transaction fee for established partners with proven volume. Match the model to the partner stage.",
      "Subscription listing only — predictable revenue and lower barrier to entry for smaller partners.",
      "Transaction fee only — you earn more as partners succeed, creating perfect economic alignment.",
      "Launch with subscription listing only for the first 12 months to build partner density, then introduce a transaction fee tier once you have enough volume data to set a rate that does not deter high-value partners."
    ],
    correct: 0,
    consequences: {"growth":10,"profitability":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "A flat subscription fee creates barriers for early-stage partners who have not yet generated transaction volume — they pay the same as established partners, which is economically unfair at their stage. A transaction fee model discourages established partners from pricing their services correctly because you take a cut of every deal. Tiered models — listing fee for access, transaction fee once volume justifies it — match the economic model to the partner's lifecycle stage and produce the most sustainable ecosystem economics.",
    framework: "Marketplace monetization tiering — subscription for access, transaction for scale",
    principle: "Match the monetization model to the partner's lifecycle stage. Early partners need a low-cost floor. Established partners need transaction alignment.",
    traps: [
      "Transaction-only creates friction for high-value partners who do large deals — they will avoid your marketplace if 15% comes off every enterprise contract.",
      "Subscription-only creates a flat barrier that disproportionately burdens early-stage partners who have uncertain volume.",
      "Deferring the transaction fee tier for 12 months delays a meaningful revenue stream and gives high-volume partners 12 months of underpriced access that creates a renegotiation fight when you finally introduce the model."
    ]
  },
  {
    id: "ECO04",
    category: "Ecosystem & Marketplace",
    difficulty: 3,
    scenario: "Your product is deeply integrated with a major platform's ecosystem. A developer who built an integration on your marketplace has published a popular add-on used by 2,000 of your customers. They are now monetizing it through a subscription that bypasses your platform entirely — collecting payments directly, with no visibility or revenue share to you. Their license agreement is technically silent on this.",
    quote: "\"A developer is earning $20K/month from our customers through our platform. And we get nothing.\"",
    options: [
      "Demand immediate revenue sharing — they are monetizing access to your customer base.",
      "Update your marketplace terms to require all future commercial add-ons to route through your monetization layer, and open a negotiation with the existing developer about a revenue sharing arrangement going forward.",
      "Approach the developer with a co-marketing proposal: offer to feature their add-on prominently in your marketplace in exchange for a voluntary 10% revenue share — making the arrangement beneficial rather than adversarial.",
      "Remove their integration from the marketplace — a developer who monetizes outside your platform violates the ecosystem's commercial integrity."
    ],
    correct: 1,
    consequences: {"profitability":5,"strategicPosition":10,"executionRisk":-5,"customerTrust":5},
    explanation: "The developer operated within your terms — you cannot retroactively enforce a clause that did not exist. Removing them damages trust with all your developers. Demanding revenue sharing without first updating your terms creates an adversarial dynamic with a developer who brought 2,000 customers real value. The professional response is forward-looking: update the terms for all future commercial add-ons and open a good-faith negotiation with the existing developer about a voluntary arrangement that works for both parties.",
    framework: "Marketplace governance — prospective terms plus good-faith negotiation beats retroactive enforcement",
    principle: "You cannot enforce a rule that did not exist. Update your terms for the future and negotiate a fair arrangement for the present.",
    traps: [
      "Demanding retroactive revenue sharing for activity that was not prohibited creates a developer relations crisis and immediate legal exposure.",
      "A co-marketing offer in exchange for voluntary revenue share is a softer approach but still applies commercial pressure retroactively — the developer agreed to nothing, and the \"voluntary\" framing will read as coercive to a developer who was acting within existing terms.",
      "Removing a popular integration used by 2,000 customers to make a commercial point damages customer experience and signals to all developers that success on your platform can be punished."
    ]
  },
  {
    id: "ECO05",
    category: "Ecosystem & Marketplace",
    difficulty: 1,
    scenario: "Your company has been a certified ISV on a major cloud platform's marketplace for 18 months. Your listing generates approximately $180K ARR annually — roughly 8% of your total revenue. The platform has announced a 40% increase to their marketplace transaction fees effective in 90 days, which would reduce your net revenue from marketplace deals by $72K annually.",
    quote: "\"The platform raised fees 40%. We have 90 days to decide what to do.\"",
    options: [
      "Accept the fee increase — marketplace revenue, even at higher fees, is still net-positive distribution.",
      "Remove your listing and migrate marketplace customers to direct — the fee increase makes the channel economics negative.",
      "Negotiate with the platform for a volume-based fee reduction or a grandfather rate for existing revenue before deciding whether to stay listed.",
      "Raise prices on marketplace-listed plans to pass the cost increase through to marketplace customers."
    ],
    correct: 2,
    consequences: {"profitability":5,"cash":5,"strategicPosition":5,"executionRisk":-5},
    explanation: "Negotiation before unilateral action is always the right first step when an established platform changes terms. ISVs with 18 months of proven marketplace revenue and active customers have legitimate negotiating leverage — volume-based fee structures or grandfather rates for existing customers are standard accommodations that platforms extend to retain active, revenue-generating ISVs. The 90-day window is the negotiating window.",
    framework: "Platform fee change response — negotiate before accepting or exiting",
    principle: "Platforms change terms. Established ISVs with proven revenue have more negotiating leverage than they think. Use the 90-day window.",
    traps: [
      "Accepting without negotiating leaves potential accommodations on the table and sets a precedent of passive acceptance for future increases.",
      "Removing your listing and migrating customers in 90 days is a disruptive operational response to a problem that may be solvable through negotiation.",
      "Raising prices for marketplace customers to cover the fee increase makes your product more expensive in a specific channel without changing the underlying fee problem."
    ]
  },
  {
    id: "ECO06",
    category: "Ecosystem & Marketplace",
    difficulty: 2,
    scenario: "You are deciding whether to build a native feature that three of your marketplace integration partners currently provide. The combined revenue those partners generate through your marketplace is $240K annually. Building the feature in-house would take 10 weeks and would eliminate the need for a third-party integration. It would also cut off the $240K that flows through your partner ecosystem.",
    quote: "\"We could build this ourselves. But building it kills three partners.\"",
    options: [
      "Build it — native capabilities are always preferable to third-party integrations for product quality and customer experience.",
      "Do not build it — eliminating $240K in ecosystem value to save customers the cost of a third-party integration is poor ecosystem stewardship.",
      "Acquire the best of the three integration partners rather than building from scratch.",
      "Assess whether the native feature genuinely solves the problem better than the existing integrations, and whether your partners can evolve to complement the native capability rather than replicate it."
    ],
    correct: 3,
    consequences: {"strategicPosition":10,"customerTrust":5,"executionRisk":-5,"growth":5},
    explanation: "First-party versus third-party decisions require two questions: does native genuinely improve the customer experience, and can existing partners evolve to complement rather than compete? Many native features displace the basic version of an integration while creating demand for the advanced version the third-party partners provide. If that evolution is possible, you strengthen the ecosystem and the product simultaneously. If partners cannot evolve, the $240K is a consideration but not the deciding factor.",
    framework: "First-party vs. third-party decision — customer value plus ecosystem evolution potential",
    principle: "Before you build what your partners built, ask whether they can build what you cannot. Native basics can coexist with partner-built advanced capabilities.",
    traps: [
      "Building native by default without evaluating ecosystem impact creates a reputation as an untrustworthy platform partner — developers will hesitate to build on your ecosystem.",
      "Protecting partner revenue at the cost of native product quality prioritizes ecosystem economics over customer experience.",
      "Acquiring a partner to get their capability is often more expensive and slower than building it, and creates integration complexity that native development avoids."
    ]
  },
  {
    id: "ECO07",
    category: "Ecosystem & Marketplace",
    difficulty: 3,
    scenario: "You are building an integration marketplace. You have 800 customers who are asking when the marketplace will launch. Engineering estimates eight months for the full vision: partner portal, certification workflow, transaction processing, and customer-facing directory. You want to launch in three months to capture market momentum.",
    quote: "\"Eight months for the full build. Three months for the market window. How do we close the gap?\"",
    options: [
      "Launch a curated beta in three months with five to eight hand-picked partner integrations, a basic customer directory, and manual partner onboarding — then build the self-serve infrastructure while the market is warm.",
      "Announce the marketplace now and set expectations for an eight-month launch — managing expectations early is better than surprising customers.",
      "Scope a minimum-viable marketplace: build only the customer-facing directory and partner listing in three months, defer the certification workflow and transaction processing to a six-month phase, and recruit partners under manual agreements in the interim.",
      "Partner with a third-party marketplace platform rather than building native infrastructure to hit the three-month window."
    ],
    correct: 0,
    consequences: {"growth":10,"customerTrust":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "A curated beta with five high-quality integrations delivers customer value, generates real usage data, and maintains market momentum without committing to the full infrastructure investment before you understand actual usage patterns. Manual processes that will eventually be automated are acceptable in a beta — you are learning what customers need, not building at scale. The full self-serve infrastructure gets built on the basis of what the beta teaches you.",
    framework: "Staged marketplace launch — curated beta validates demand, informs infrastructure investment",
    principle: "Launch a curated beta when the full build takes too long. Five great integrations and manual processes beat eight months of waiting.",
    traps: [
      "Waiting eight months for the full build misses the market window and leaves 800 customers asking about a launch that keeps getting pushed.",
      "Announcing eight months in advance without a near-term delivery creates eight months of expectation management that will consume more BD time than building the beta.",
      "Scoping a directory-only MVP in three months with no certification or transaction capability means early partners cannot transact through the marketplace — you launch a listing page that generates no revenue and no partner commitment."
    ]
  },
  {
    id: "ECO08",
    category: "Ecosystem & Marketplace",
    difficulty: 2,
    scenario: "You want to grow your integration marketplace from 15 to 50 partner integrations in 12 months. Your partner team has identified 120 potential integration partners. You have the capacity to properly onboard, certify, and support approximately 25 new partnerships this year. How do you prioritize which 25 to pursue?",
    quote: "\"We can do twenty-five properly or one hundred and twenty poorly. Which twenty-five?\"",
    options: [
      "Prioritize by partner company size — larger companies bring more credibility to your marketplace.",
      "Score each candidate on customer overlap (how many of your customers also use their product), integration complexity (lighter integrations first), and strategic value (does this partner bring new buyers to your platform).",
      "Prioritize by inbound interest — partners who reached out to you are more motivated and will convert faster.",
      "Run an open application process and select the first twenty-five partners who complete the certification requirements."
    ],
    correct: 1,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-10,"customerTrust":5},
    explanation: "Marketplace partner selection is a resource allocation problem with clear optimization criteria. Customer overlap determines immediate adoption potential — integrations that serve your existing customers activate without additional acquisition. Integration complexity determines speed-to-launch. Strategic value — partners who bring new buyers to your ecosystem — determines long-term growth leverage. Combining all three gives you a ranked list that optimizes for both near-term and long-term marketplace value.",
    framework: "Marketplace partner prioritization scoring — customer overlap, integration complexity, and strategic buyer value",
    principle: "Prioritize the integrations that get used immediately, launch quickly, and bring new buyers to your ecosystem. Everything else waits.",
    traps: [
      "Company size correlates weakly with integration adoption — a small company with 60% customer overlap is more valuable than a large company with 5%.",
      "Inbound interest indicates motivation but not fit — the most motivated partner may have minimal customer overlap or low strategic value.",
      "First-come-first-served selection for certification produces a marketplace shaped by partner motivation, not customer value or strategic fit."
    ]
  },
  {
    id: "ECO09",
    category: "Ecosystem & Marketplace",
    difficulty: 1,
    scenario: "A new category of AI-powered productivity tools is emerging. Three vendors in this category have approached you about integration partnerships. None of them has significant market adoption yet, but the category is growing fast. Your product roadmap includes building a native AI feature in 12 months. Integrating with these early AI tools now could establish your ecosystem position before the category matures.",
    quote: "\"The category is early. The partnerships are cheap. Do we move now or wait?\"",
    options: [
      "Wait until the category matures and clear market leaders emerge — investing in early-stage integrations means most of them will fail.",
      "Partner with all three now — early ecosystem positioning in emerging categories creates durable competitive advantage.",
      "Partner with one or two of the strongest early players under a lightweight agreement — low integration depth, easy to exit if they fail, but early positioning if they win.",
      "Build your own AI feature instead of partnering — own the category rather than hosting others in it."
    ],
    correct: 2,
    consequences: {"strategicPosition":10,"growth":5,"executionRisk":-5,"teamMorale":5},
    explanation: "Emerging category partnerships are an options strategy — you are buying the right to a stronger relationship if a partner wins, at a cost of lightweight integration investment now. The key is keeping the integration shallow enough to exit if the vendor fails, while going deep enough to be a credible early partner if they win. Lightweight agreements — API connections, co-marketing, joint customer referrals — are low-cost options on emerging category bets.",
    framework: "Emerging category partnership as options strategy — lightweight agreements create low-cost future positioning",
    principle: "In an emerging category, cheap early options beat expensive late commitments. Partner shallow now, go deep when winners emerge.",
    traps: [
      "Waiting for category maturity means entering partnerships at the same time as every competitor — the early positioning advantage is gone.",
      "Deep integration with all three simultaneously overcommits resources before any of them have proven market adoption.",
      "Building a native AI feature in 12 months when the category is changing every quarter means you may build the wrong feature at significant cost."
    ]
  },
  {
    id: "ECO10",
    category: "Ecosystem & Marketplace",
    difficulty: 3,
    scenario: "Your platform has 30 certified integration partners. One of your top three marketplace partners — responsible for 18% of marketplace traffic — has been found to be scraping customer data from your platform in violation of your API terms of service. Their integration is widely used and customers rely on it daily. Removing them from the marketplace will cause significant customer disruption.",
    quote: "\"They violated our terms. But 18% of marketplace traffic depends on them.\"",
    options: [
      "Give them a warning and 30 days to fix the violation — customer disruption from removal is too high.",
      "Suspend new installations immediately, notify the partner of the specific violation, and give them 48 hours to confirm they have stopped the scraping behavior — then set a 14-day remediation window with required technical documentation before reinstatement.",
      "Quietly resolve the data scraping issue bilaterally without public notification — customer concern is not worth the PR risk.",
      "Suspend new installations immediately, notify the partner formally of the specific violation, give them 14 days to remediate with documentation, and notify affected customers of the situation and timeline."
    ],
    correct: 3,
    consequences: {"customerTrust":15,"strategicPosition":10,"executionRisk":-10,"growth":5},
    explanation: "A data violation requires immediate action on new installations — you cannot knowingly continue enabling new customers to be exposed. But 14 days for remediation acknowledges that an established integration cannot be corrected instantly. Customer notification is not optional when their data was accessed in violation of terms — it is legally required in many jurisdictions and is the trust-preserving action regardless. Quiet resolution of a data violation is never the right answer.",
    framework: "Marketplace terms violation response — suspend new installs, remediation window, customer notification",
    principle: "Data violations require immediate action on new exposure and transparent customer communication. There is no quiet resolution for a data trust issue.",
    traps: [
      "A 30-day warning continues the violation for 30 more days across all new installations — you are knowingly extending the exposure.",
      "A 48-hour stop-confirmation window before beginning formal remediation adds an intermediate checkpoint that delays the structured process — if the partner has not stopped scraping by the time you issue the formal notice, the 14-day remediation clock is the appropriate accountability mechanism.",
      "Quiet bilateral resolution of a data scraping violation violates your legal notification obligations and creates significantly higher liability if discovered later."
    ]
  },
]
