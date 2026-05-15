export const CASES_BD2 = [
  {
    id: "CHM01",
    category: "Channel Management",
    difficulty: 1,
    scenario: "Your direct sales team and your top reseller partner are both actively working the same enterprise prospect — a 400-person manufacturing company. The reseller claims they introduced the prospect 90 days ago. Your direct rep claims they sourced the opportunity independently three weeks ago. The prospect is confused by the dual outreach and has complained to your CEO.",
    quote: "\"Two reps from your company called me this week. I thought you had a channel program.\"",
    options: [
      "Implement a deal registration system immediately; resolve this specific conflict by having one internal conversation with both parties and assigning a single owner based on actual customer relationship depth.",
      "Award the deal to the direct rep — they have the most recent activity and the reseller should have registered the deal sooner.",
      "Award the deal to the reseller — first introduction takes precedence and they have seniority in the relationship.",
      "Escalate to the CEO to make the ownership decision — since the complaint reached them directly, they should resolve it."
    ],
    correct: 0,
    consequences: {"customerTrust":15,"teamMorale":5,"executionRisk":-15,"growth":5},
    explanation: "Channel conflict without a resolution system is a structural failure, not a people problem. The immediate fix is a single internal decision based on actual customer relationship depth, communicated clearly to both parties and to the customer. The structural fix — deal registration — prevents every future conflict. A customer complaining to your CEO about dual outreach is a trust emergency that requires clean resolution, not a competition.",
    framework: "Channel conflict resolution + deal registration — structural fix prevents systemic recurrence",
    principle: "Channel conflict is a process failure. Fix the immediate deal, then fix the system that allowed it.",
    traps: [
      "First-introduction rules without a registration system are unenforceable and resellers will claim every deal they touched.",
      "Siding with direct without investigating relationship depth rewards recency over actual pipeline development.",
      "Escalating channel conflict to the CEO sets a precedent that every ownership dispute reaches the top of the org — and still leaves both reps on the account until the CEO rules, which may take days the prospect will notice."
    ]
  },
  {
    id: "CHM02",
    category: "Channel Management",
    difficulty: 2,
    scenario: "You are designing a tiered partner program with Gold, Silver, and Bronze levels. You need to decide what criteria determine each tier and what benefits each tier receives. You have 14 active partners with revenue ranging from $20K to $450K annually. Leadership wants the program to drive revenue concentration in your top partners while maintaining relationships with smaller ones.",
    quote: "\"We want our best partners to feel special and our smaller ones to have a path forward.\"",
    options: [
      "Base tiers entirely on trailing 12-month revenue — simple, objective, and directly tied to business outcomes.",
      "Base tiers on a weighted scorecard: revenue (50%), certifications (25%), and customer satisfaction scores from joint accounts (25%).",
      "Base tiers on revenue plus certification completion — this ensures partners who earn Gold are both commercially active and technically competent.",
      "Base tiers on revenue plus a minimum number of certified deals closed — this ensures Gold partners are both high-revenue and have demonstrated they can close and implement successfully."
    ],
    correct: 1,
    consequences: {"growth":10,"customerTrust":10,"strategicPosition":10,"teamMorale":5},
    explanation: "Revenue-only tiers reward deal closure but not partner quality. A partner who closes large deals but installs them poorly, or who cannot demo competently, is a customer satisfaction risk at your highest tier. A weighted scorecard that includes revenue, certification, and customer satisfaction creates a Gold partner profile that is genuinely valuable to your customers, not just to your revenue line. Customer satisfaction scores also give you an early warning on partner quality before complaints reach your team.",
    framework: "Partner tier design — revenue plus quality creates tier value that benefits customers, not just BD metrics",
    principle: "Gold partner status should mean something to the customer, not just to the revenue report. Measure what you want to reward.",
    traps: [
      "Revenue-only tiers create Gold partners who are high-revenue but potentially low-quality — a risk to your brand at the accounts that matter most.",
      "Revenue plus certification is better than revenue alone but misses the customer satisfaction dimension that is most visible post-sale.",
      "Counting certified deals closed rewards volume through the right process but not the quality of the outcome — a partner who closes ten certified deals with poor customer satisfaction scores earns Gold regardless of what their customers experience."
    ]
  },
  {
    id: "CHM03",
    category: "Channel Management",
    difficulty: 2,
    scenario: "Your Gold-tier reseller missed their quarterly revenue target by 40% in Q2 and is now 35% behind in Q3. They have been a strong partner for two years. In the last six months, they lost two key salespeople and brought on a new sales leader who is still ramping. They are asking for a 90-day performance improvement plan rather than a tier demotion.",
    quote: "\"We've been loyal partners for two years. Give us time to rebuild.\"",
    options: [
      "Demote immediately to Silver — tier status should reflect current performance, not historical relationship.",
      "Grant the 90-day PIP: two-year track record plus a clear structural cause (team turnover) justifies temporary underperformance.",
      "Grant the 90-day PIP with specific milestones — minimum pipeline generated, new sales hire onboarded, and one deal closed — with monthly check-ins and automatic review at 90 days.",
      "Grant the 90-day PIP and temporarily waive Gold tier requirements to give the new sales leader time to ramp — tier status should reflect the team they will have, not the team they lost."
    ],
    correct: 2,
    consequences: {"growth":5,"customerTrust":5,"teamMorale":10,"executionRisk":-5},
    explanation: "Two-year track record plus an identifiable structural cause — team turnover — justifies a performance improvement window. But a PIP without milestones is a 90-day delay without accountability. Specific milestones with monthly check-ins create the transparency both parties need: the partner knows exactly what is expected, and you have the data to make a clean decision at 90 days. Good-faith partners meet structured PIPs; bad-faith partners use them to delay the inevitable.",
    framework: "Partner Performance Improvement Plan — milestones plus check-ins turn PIPs into decisions, not delays",
    principle: "A PIP without milestones is just a postponed demotion. Build in the checkpoints that make the outcome clear.",
    traps: [
      "Immediate demotion of a two-year Gold partner experiencing a documented structural disruption signals that loyalty is worthless — damaging to your broader partner ecosystem message.",
      "A PIP without milestones gives the partner flexibility but gives you no mechanism to evaluate progress or make a clean decision at 90 days.",
      "Waiving tier requirements during the PIP removes the performance pressure that motivates recovery — a Gold partner who retains Gold status without meeting Gold-level milestones has less incentive to rebuild than one who knows demotion is a real outcome."
    ]
  },
  {
    id: "CHM04",
    category: "Channel Management",
    difficulty: 1,
    scenario: "Three of your reseller partners have reported that their sales teams cannot confidently demo your product. In the last two months, two deals were lost at the demo stage where the reseller was presenting. Partners are asking for more training. Your CS team says they do not have capacity to run partner training alongside customer onboarding.",
    quote: "\"We're losing deals because our partners can't demo. But our CS team is maxed out.\"",
    options: [
      "Hire dedicated partner enablement staff — if partners cannot demo, it is a headcount problem.",
      "Have your direct sales team co-present all partner demos until partners are confident — then transition.",
      "Have your CS team deliver a live group training session for all three partners simultaneously — addressing the gap in one session minimizes the time investment while solving the immediate problem.",
      "Build a self-serve partner certification program: recorded demos, scenario-based training modules, and a certification assessment that partners complete on their own schedule."
    ],
    correct: 3,
    consequences: {"growth":10,"executionRisk":-10,"teamMorale":5,"customerTrust":5},
    explanation: "Scaling partner enablement through CS headcount is unsustainable — CS capacity will always be constrained. Self-serve certification programs with recorded content scale indefinitely, run 24/7, and produce a consistent baseline across all partners regardless of where they are located. Certification assessments create accountability without requiring a trainer. This is the infrastructure investment that lets you grow your partner channel without proportionally growing your internal team.",
    framework: "Scalable partner enablement — self-serve certification scales where headcount does not",
    principle: "Partner enablement that requires your time every time cannot scale. Build the program once, let it run forever.",
    traps: [
      "Dedicated enablement headcount solves the immediate problem but creates a linear scaling dependency between partner count and headcount.",
      "A group training session solves the immediate gap for three partners but does not produce a scalable baseline for future partners — the fourth reseller who joins next quarter faces the same problem from scratch.",
      "Direct team co-presenting all partner demos undermines the partner's credibility with their own customers and creates dependency rather than capability."
    ]
  },
  {
    id: "CHM05",
    category: "Channel Management",
    difficulty: 3,
    scenario: "Your direct sales team has been pursuing a large healthcare system deal for four months. A partner with regional healthcare exclusivity has now registered the same account and is claiming your direct team violated their exclusivity agreement. Your legal review shows the exclusivity clause covers \"new business development\" in the region, which is ambiguous about whether your direct team's four-month existing pursuit qualifies as prior activity.",
    quote: "\"The agreement says healthcare in the Southeast. That's our account now.\"",
    options: [
      "Propose a co-engagement: bring both parties together on the account and negotiate a commercial split that acknowledges the partner's exclusivity while protecting the direct team's four months of relationship development.",
      "Defend the direct team's position — four months of documented activity constitutes prior pursuit that predates the partner's registration.",
      "Honor the partner's exclusivity claim — they have a signed contract and you must respect it.",
      "Have the direct rep close the deal as quickly as possible before the partner can formally assert their claim — a signed customer contract establishes the commercial reality that any subsequent dispute must work around."
    ],
    correct: 0,
    consequences: {"customerTrust":10,"growth":5,"executionRisk":-10,"strategicPosition":5},
    explanation: "Legal ambiguity in exclusivity clauses is best resolved commercially, not in a courtroom. A co-engagement that splits economics proportionally — acknowledging the partner's contractual exclusivity while compensating the direct team's documented investment — produces a deal and preserves both relationships. Choosing a side without a clear legal position damages either your partner ecosystem or your direct sales team's trust in how conflicts are resolved.",
    framework: "Exclusivity conflict resolution — co-engagement over adversarial positioning when legal outcome is uncertain",
    principle: "When contract language is genuinely ambiguous, the fastest path to resolution is a commercial arrangement that acknowledges both parties' legitimate interests.",
    traps: [
      "Honoring the partner's claim without acknowledging the four months of direct work destroys trust with your own sales team and may lose the deal entirely.",
      "Defending the direct position without exploring a co-engagement invites litigation over a clause that a judge may read either way.",
      "Closing before the partner can formally assert their claim wins the deal but triggers an exclusivity breach claim that arrives as a legal dispute instead of a commercial negotiation — and you have no co-engagement split to offer as resolution."
    ]
  },
  {
    id: "CHM06",
    category: "Channel Management",
    difficulty: 2,
    scenario: "You are transitioning from a 100% direct sales motion to a 60% direct / 40% channel model over 18 months. Your direct sales team is resistant — they see the channel as a threat to their commissions and territory. Two top direct reps have asked leadership directly whether their territories will be reduced.",
    quote: "\"Are you building a channel to replace us or to help us?\"",
    options: [
      "Reassure the direct team their territories are safe — channel partners will only work accounts direct sales does not pursue.",
      "Be transparent: territories will evolve, but direct reps who develop channel relationships will have a bigger effective reach without proportional increase in their workload.",
      "Pay direct reps a finder's fee for any deals they facilitate with partners — align direct rep incentives to channel success.",
      "Separate direct and channel territories entirely — no overlap, no conflict, no ambiguity."
    ],
    correct: 1,
    consequences: {"teamMorale":10,"growth":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "Reassuring direct reps that \"nothing will change\" when you are fundamentally shifting your go-to-market is dishonest and will damage trust when the change becomes visible. Transparent communication — that the model is evolving and that direct reps who work with partners will have leverage, not competition — builds buy-in from the reps who are most adaptable. Honesty with a clear upside narrative is harder than reassurance and far more durable.",
    framework: "Channel transition change management — transparent framing with an upside narrative beats false reassurance",
    principle: "Your direct team will find out the channel is a change. Tell them before they do, and tell them what is in it for them.",
    traps: [
      "False reassurance about territories creates a trust crisis the moment channel partners start working adjacent accounts — which is the entire point of the transition.",
      "Finder's fees for channel facilitation create a transactional relationship between direct and partner that breaks down on larger deals.",
      "Fully separate territories eliminate channel conflict but also eliminate the collaborative selling motion that makes the channel transition most effective."
    ]
  },
  {
    id: "CHM07",
    category: "Channel Management",
    difficulty: 2,
    scenario: "You currently require no certification before a partner can resell your product. Three partners have sold implementations that resulted in poor customer experiences and escalations to your support team. Your head of partnerships wants mandatory certification before any reselling. Your head of sales worries certification requirements will reduce partner recruitment.",
    quote: "\"Certification will shrink the channel. But so will bad implementations.\"",
    options: [
      "Require certification only for the three partners who caused the escalations — they have demonstrated the gap; imposing requirements on all partners punishes those who have not had issues.",
      "Require full certification before any reselling activity — quality over volume is the right long-term position.",
      "Implement a tiered access model: basic selling access requires light certification; implementation authority requires full certification. Partners can sell before they can implement.",
      "Require certification only for partners who want Gold tier status — leave Bronze and Silver open."
    ],
    correct: 2,
    consequences: {"customerTrust":15,"growth":5,"executionRisk":-15,"strategicPosition":10},
    explanation: "The real problem is not whether partners can sell — it is whether they can implement. A tiered model solves the quality problem precisely: certification gates the high-risk activity (implementation) while keeping the low-risk activity (selling, prospecting) accessible. New partners can begin developing pipeline immediately while completing implementation certification in parallel. Quality is protected where it matters, and recruitment is not blocked.",
    framework: "Tiered certification — gate the high-risk activity, not the low-risk one",
    principle: "Certification requirements should protect what matters most. Selling is low risk. Implementing is where quality failures happen.",
    traps: [
      "Retroactive certification requirements for the three offending partners addresses past failures but allows every other partner to implement without qualification — the fourth poor implementation comes from a partner you did not require to certify.",
      "Full certification before any selling creates a barrier that will measurably reduce partner recruitment and delay time-to-first-deal for every new partner.",
      "Tier-based certification exemptions for lower tiers still allow uncertified partners to implement your product for real customers."
    ]
  },
  {
    id: "CHM08",
    category: "Channel Management",
    difficulty: 3,
    scenario: "A channel partner who contributes $800K annually to your ARR has just been acquired by your largest competitor. The acquisition closes in 45 days. Their current customer contracts with your product continue through their natural renewal dates — the next renewals begin in four months. You need to decide how to respond before and after the acquisition closes.",
    quote: "\"Our best partner is becoming our competitor's distribution arm.\"",
    options: [
      "Terminate the partnership agreement immediately — a competitor-owned partner represents an unacceptable commercial and data risk.",
      "Notify the partner that their acquisition by a competitor triggers the change-of-control clause and begin renegotiating the agreement under new terms that restrict data access and limit their ability to co-sell your product.",
      "Negotiate a wind-down arrangement with the acquiring competitor — professional transitions protect mutual customers.",
      "Notify the partner immediately that the agreement will not be renewed post-acquisition; begin direct outreach to joint customers now, before the acquisition closes, to transition them to a direct or alternative partner relationship."
    ],
    correct: 3,
    consequences: {"customerTrust":10,"strategicPosition":15,"growth":5,"executionRisk":-10},
    explanation: "A partner acquired by your competitor will now have an incentive to transition your joint customers to the competitor's product at renewal. The 45 days before acquisition closes is your window to contact joint customers proactively — not to poach them, but to begin the transition to a direct relationship before your partner's new parent organization has an incentive to recommend otherwise. Waiting until after the acquisition closes cedes that window entirely.",
    framework: "Competitor acquisition of channel partner — the pre-close window is your transition opportunity",
    principle: "When your partner becomes your competitor's asset, your customers become at-risk accounts. Reach out before the acquisition closes.",
    traps: [
      "Immediate termination may violate the existing agreement and creates legal risk during a sensitive commercial period.",
      "Renegotiating the agreement restricts future behavior but does not protect the four months of customer access that begins immediately after the acquisition closes — the competitor's new asset can influence customers through existing relationships long before any renegotiated terms take effect.",
      "Negotiating a wind-down with the acquiring competitor is unlikely to produce terms that protect your customer relationships over their new parent's commercial interests."
    ]
  },
  {
    id: "CHM09",
    category: "Channel Management",
    difficulty: 1,
    scenario: "You have 18 reseller partners but only 5 are generating meaningful revenue. The other 13 have signed partner agreements, completed basic onboarding, and then gone quiet — no registered deals, no customer inquiries, no engagement for four or more months. Your partner program is consuming support, license provisioning, and management overhead for partners who produce nothing.",
    quote: "\"We have eighteen partners on paper and five partners in reality.\"",
    options: [
      "Run a re-engagement campaign with a 60-day deadline: inactive partners who do not register a deal or complete a certification checkpoint within 60 days are moved to a lighter-touch program tier or offboarded.",
      "Downgrade all 13 inactive partners to a no-benefit Bronze tier immediately — they remain on the roster but receive no partner support, co-marketing access, or product discounts until they generate activity.",
      "Survey all 13 inactive partners to understand why they went quiet — the root cause may be a product, pricing, or enablement gap that is costing you activity across all segments.",
      "Assign each inactive partner to a partner success manager for personal outreach and reactivation."
    ],
    correct: 0,
    consequences: {"profitability":5,"teamMorale":10,"executionRisk":-5,"growth":5},
    explanation: "Inactive partners are not benign — they consume resources, dilute your partner program's quality metrics, and create confusion for prospects about who is a credible partner. A 60-day re-engagement deadline with a clear minimum threshold separates genuinely inactive partners from ones who have opportunities in development. Partners who miss the threshold move to a lightweight program or off the roster. This cleans the program without mass termination that creates negative word-of-mouth.",
    framework: "Partner program hygiene — re-engagement deadline with threshold creates a self-selecting roster",
    principle: "A partner who does not engage is not a partner — they are overhead. Create a process that surfaces the real ones.",
    traps: [
      "Downgrading without a reactivation path removes the incentive that motivates partners to engage — partners who face no consequence for inactivity and no pathway back to benefits have no reason to change behavior.",
      "A survey identifies systemic barriers but does not create a deadline — partners who complete the survey but do not register deals continue consuming overhead, now with documented reasons instead of actionable commitments.",
      "Personal outreach for 13 inactive partners consumes significant partner success bandwidth on the lowest-ROI segment of your program."
    ]
  },
  {
    id: "CHM10",
    category: "Channel Management",
    difficulty: 3,
    scenario: "Your single largest channel partner — responsible for 35% of your total partner-sourced ARR — has notified you that they are considering reducing their commitment to your product line because their margin has been compressed by your recent pricing changes. They represent $1.2M in annual channel revenue. They are asking for a temporary discount exception or they will de-prioritize your product.",
    quote: "\"We made more money selling your product two years ago. The economics have shifted.\"",
    options: [
      "Grant the exception — losing $1.2M in channel revenue to a pricing dispute is not worth the principle.",
      "Analyze the margin compression: if your pricing change genuinely reduced their economics below the threshold that makes your product worth prioritizing, negotiate a volume-based rebate structure that restores their economics without creating a visible price exception.",
      "Hold firm — creating pricing exceptions for large partners sets a precedent that every partner will negotiate to.",
      "Offer to co-invest in their sales enablement rather than discounting — reduce their cost of selling instead of your price."
    ],
    correct: 1,
    consequences: {"profitability":5,"growth":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "A volume-based rebate structure solves the partner's margin problem without a visible price exception that every other partner can demand. The rebate is earned through performance (volume), not given as a concession (relationship). This restores the partner's economics while preserving price integrity across your partner ecosystem. It also creates an incentive to grow their volume to maintain the rebate threshold.",
    framework: "Volume rebate structure — restore economics through earned performance, not visible price exception",
    principle: "Never grant price exceptions when you can solve the same problem with a volume incentive. One sets a precedent; the other creates performance alignment.",
    traps: [
      "Granting a pricing exception will be known by every other partner within one quarter and will produce the same conversation with all of them.",
      "Holding firm on a pricing change that genuinely compressed a $1.2M partner's economics risks losing the revenue and damaging the relationship.",
      "Sales enablement co-investment does not solve a margin problem — it addresses their cost of selling, not their unit economics on the deals they close."
    ]
  },
  {
    id: "ACS01",
    category: "Alliance & Co-Sell",
    difficulty: 1,
    scenario: "You have signed a co-sell agreement with a major cloud platform. Their sales reps can register your product as part of joint solutions and receive a co-sell credit. After three months, only 2 of their 400 enterprise reps have ever co-sold your product. The program is technically active but practically invisible.",
    quote: "\"We have a co-sell agreement. We do not have a co-sell motion.\"",
    options: [
      "Escalate to the platform partner's alliance manager — low rep adoption is their responsibility to solve.",
      "Launch a co-sell incentive campaign targeting all 400 reps — offer a $500 SPiFF per co-sell registration to generate initial activity and identify which reps are most responsive.",
      "Identify the two reps who are co-selling, understand why they engaged, and build an internal champion program that replicates their motivation across a targeted set of 20-30 reps in your best-fit regions.",
      "Increase co-sell incentives across all 400 reps with a higher credit structure."
    ],
    correct: 2,
    consequences: {"growth":10,"strategicPosition":10,"executionRisk":-5,"teamMorale":5},
    explanation: "Large platform co-sell programs do not activate through announcements — they activate through individual rep relationships. Two reps engaging is not a failure; it is a proof point and a starting point. Understanding why those two reps co-sold (a specific customer need, a regional solution pattern, a personal relationship) and replicating it with 20-30 targeted reps is far more efficient than broad incentive programs that reach 400 reps at low intensity.",
    framework: "Co-sell activation — scale from early adopters, not from top-down incentive broadcasts",
    principle: "Co-sell programs activate rep by rep, not org by org. Find the two who are doing it and scale their reason.",
    traps: [
      "Escalating to the alliance manager creates process activity but does not change the individual rep motivation that drives actual co-sell volume.",
      "A broad SPiFF generates registrations but optimizes for volume not quality — reps who register deals for the incentive rather than genuine fit produce pipeline that does not convert, and you learn nothing about why the two successful reps engaged.",
      "Increasing credits to all 400 reps diffuses investment across the vast majority who will never co-sell your product regardless of incentive level."
    ]
  },
  {
    id: "ACS02",
    category: "Alliance & Co-Sell",
    difficulty: 2,
    scenario: "An enterprise customer is about to sign a $180K contract. Your alliance partner claims they influenced the deal through a meeting eight months ago where their rep mentioned your product. Your direct sales rep developed the account for six months, wrote the proposal, ran four demos, and negotiated the final terms. The partner is claiming co-sell credit and their commission structure.",
    quote: "\"Our rep planted the seed. You just harvested it.\"",
    options: [
      "Pay full co-sell credit — partners who influence deals must be compensated or they stop providing referrals.",
      "Deny the co-sell credit — one mention eight months ago without any documented follow-through is not meaningful influence.",
      "Split the commission 50/50 as a goodwill gesture to preserve the alliance relationship.",
      "Define and implement a formal deal influence policy: co-sell credit requires documented activity within the last 90 days or a customer-confirmed referral on record. Apply that standard to this deal."
    ],
    correct: 3,
    consequences: {"profitability":10,"strategicPosition":10,"executionRisk":-5,"growth":5},
    explanation: "The absence of a deal influence policy is the real problem — not this specific dispute. An influence standard that requires documented recent activity (within 90 days) or a customer-confirmed referral prevents every future deal from becoming a retrospective argument. Applying the standard to this deal produces a defensible outcome. A 50/50 goodwill split rewards a claim that would not survive scrutiny and creates the expectation that all future disputes resolve the same way.",
    framework: "Deal influence policy — documented recent activity or confirmed referral as the standard for co-sell credit",
    principle: "Co-sell credit disputes reveal the absence of a policy. Build the policy before the next dispute, apply it to this one.",
    traps: [
      "Paying full co-sell credit for an eight-month-old meeting with no follow-through sets a precedent for retrospective credit claims on every significant deal.",
      "Flat denial without a policy produces an adversarial response and damages the alliance on a deal where some influence may be legitimate.",
      "Goodwill splits without a policy produce the same dispute on every future deal, each time with a different claim and the same unresolvable ambiguity."
    ]
  },
  {
    id: "ACS03",
    category: "Alliance & Co-Sell",
    difficulty: 3,
    scenario: "An audit of your revenue sources reveals that 42% of your new ARR in the last 12 months has come through one platform partner's ecosystem — co-sells, marketplace listings, and referrals from their sales team. Your CEO is pleased with the growth. Your board is flagging concentration risk. What is the right response?",
    quote: "\"Forty-two percent from one partner is either a great story or a dangerous dependency.\"",
    options: [
      "Maintain and deepen the platform relationship while actively investing in diversifying your acquisition mix — target the concentration to below 25% over 18 months without reducing absolute volume from the platform partner.",
      "Immediately reduce dependence by cutting investment in the platform partner and diversifying to other channels.",
      "Double down on the platform partner by building deeper integrations and co-marketing campaigns that increase platform-sourced ARR — concentration at 42% means you are underpenetrated; maximize the channel before diversifying.",
      "Immediately begin reducing platform-sourced leads by capping deal registrations from the partner channel and shifting those accounts to direct — faster diversification reduces the dependency more quickly than building parallel channels."
    ],
    correct: 0,
    consequences: {"strategicPosition":15,"growth":10,"executionRisk":-15,"cash":5},
    explanation: "Platform concentration is a real risk — a pricing change, API deprecation, or strategic pivot by the partner can devastate your pipeline overnight. But the response is not to reduce the source that is working; it is to build other sources to the same quality. Target the concentration metric, not the absolute volume. This preserves the relationship value while systematically reducing the dependency.",
    framework: "Channel concentration management — diversify the mix, not the source that is working",
    principle: "Concentration risk is not solved by reducing the source that is working. It is solved by building sources that are not working yet.",
    traps: [
      "Deepening the platform investment increases absolute volume but also increases concentration — if the partner reprices or restricts access at 55% or 60% dependency, the impact is worse than at 42%.",
      "Capping registrations from a performing partner channel voluntarily reduces revenue without creating the alternative sources that would replace it — concentration decreases but so does growth.",
      "Disclosing without a plan is a risk acknowledgment, not a risk mitigation — it satisfies the board communication requirement but does not protect the business."
    ]
  },
  {
    id: "ACS04",
    category: "Alliance & Co-Sell",
    difficulty: 2,
    scenario: "A strategic alliance partner proposes building a deeply integrated joint solution — combining core capabilities from both products into a single packaged offering. Both companies contribute engineering resources, co-own the go-to-market, and share revenue. The build is estimated at four months. This would be your deepest ever partnership integration.",
    quote: "\"Together we solve a problem neither of us can solve alone. Let's build it.\"",
    options: [
      "Agree to the joint solution — deep integration creates genuine market differentiation and competitive barriers.",
      "Run a structured discovery phase before committing: validate the customer demand for the joint solution with ten customer interviews before engineering investment begins.",
      "Agree to the joint solution but negotiate to own the integration layer — if you control the architecture, you retain the ability to redirect it toward other partners if this relationship deteriorates.",
      "Accept but limit integration depth — build an API-based connection rather than a deeply embedded joint product."
    ],
    correct: 1,
    consequences: {"growth":10,"executionRisk":-15,"customerTrust":5,"strategicPosition":10},
    explanation: "Joint solutions that solve real customer problems can create durable competitive advantages. Joint solutions built on partner excitement without customer validation become expensive integration debt. Ten customer interviews before committing four months of engineering from two organizations is the minimum diligence required. If customers validate the demand, the build is justified. If they do not, you have saved eight months of combined engineering time.",
    framework: "Joint solution validation — customer evidence before engineering commitment",
    principle: "The most expensive joint solution is the one built without customer validation. Interview ten customers before writing one line of code.",
    traps: [
      "Committing to four months of joint engineering on partner enthusiasm without customer demand validation is one of the most common and most expensive BD mistakes.",
      "Owning the integration layer solves the ownership concern but not the validation problem — controlling the architecture of a solution no customer asked for does not make it a good investment.",
      "An API connection does not deliver the joint solution the partner proposed — if the customer need is real, the integration depth matters."
    ]
  },
  {
    id: "ACS05",
    category: "Alliance & Co-Sell",
    difficulty: 1,
    scenario: "A large horizontal software platform has approached you about an ISV partnership. Their marketplace has 180,000 customers. The first step they require is a two-way data integration with their platform APIs, estimated at six weeks of engineering. After that, co-sell discussions can begin. Your VP of Engineering is concerned about taking a six-week API integration dependency before any commercial co-sell terms are agreed.",
    quote: "\"They want the integration first and the co-sell discussion second. Is that the right order?\"",
    options: [
      "Build the integration first — it proves commitment and opens the co-sell conversation.",
      "Build the integration in parallel with co-sell negotiations — do not let sequencing slow a significant opportunity.",
      "Negotiate co-sell commercial terms before starting any integration work — the technical investment should follow commercial alignment.",
      "Sign a non-binding letter of intent outlining co-sell intent, then begin the integration in parallel — the LOI signals mutual commitment while allowing both tracks to proceed without one blocking the other."
    ],
    correct: 2,
    consequences: {"strategicPosition":10,"executionRisk":-10,"growth":5,"cash":5},
    explanation: "Commercial terms before technical investment is the right sequencing for large integrations where your leverage is highest pre-build. Once the integration is complete, your negotiating position weakens — you have already invested. Six weeks of engineering is a significant capital commitment that should be preceded by at minimum a term sheet or MOU outlining co-sell structure, revenue share, and marketplace commitment. Parallel negotiation is reasonable for lightweight integrations, not for six-week dependencies.",
    framework: "Integration sequencing — commercial alignment before technical investment preserves negotiating leverage",
    principle: "You negotiate from strength before you build. After you build, you negotiate from dependency.",
    traps: [
      "Building first demonstrates commitment but reduces leverage — you have invested before securing any commercial commitment.",
      "Parallel negotiation while building is workable for small integrations, but for a six-week engineering dependency, you risk completing the build with no commercial agreement.",
      "A non-binding LOI signals intent but does not protect you if co-sell terms are never formalized — completing the six-week integration with only an LOI in hand leaves you in the same position as having no agreement, with leverage lost."
    ]
  },
  {
    id: "ACS06",
    category: "Alliance & Co-Sell",
    difficulty: 3,
    scenario: "Your alliance partner — a $2B revenue SaaS company — informs you that their new strategy involves moving into one of your core product areas. They will be building a competing feature into their platform. Your products have been complementary for three years and you currently co-sell with approximately $3M in mutual pipeline. You have 90 days before their new feature launches.",
    quote: "\"They are building what we build. The alliance just became a competitive threat.\"",
    options: [
      "Immediately terminate the alliance and stop all information sharing — the strategic situation has fundamentally changed.",
      "Continue the alliance unchanged — competing on one feature does not invalidate three years of complementary value.",
      "Accelerate your own product in their area before their feature launches — the 90-day window is a competitive advantage.",
      "Schedule an executive-level conversation to understand the scope of their product expansion, define the new boundaries of collaboration versus competition, and decide based on whether enough complementary value remains to justify the relationship."
    ],
    correct: 3,
    consequences: {"strategicPosition":15,"executionRisk":-10,"growth":5,"customerTrust":5},
    explanation: "A $2B partner entering one product area does not automatically make a three-year alliance worthless. But continuing as if nothing changed ignores real competitive risk. An executive conversation establishes what their expansion actually covers, whether joint customers will be solicited, and what information protection is needed. If 70% of the complementary value remains, the alliance may survive with new boundaries. If their expansion directly competes for your core customers, the answer changes.",
    framework: "Alliance competitive reassessment — executive dialogue before termination or continuation",
    principle: "When an ally becomes a partial competitor, understand the scope before you decide the relationship. Ninety percent of the value may still be worth protecting.",
    traps: [
      "Immediate termination of a $3M mutual pipeline relationship over a product expansion that may not directly compete for the same customers is a disproportionate first response.",
      "Continuing unchanged without addressing the competitive overlap leaves you sharing information with a company that is now building against you.",
      "Rushing a product response in 90 days to beat a $2B company to market in an area they have been planning for months is unlikely to succeed and burns engineering resources."
    ]
  },
  {
    id: "ACS07",
    category: "Alliance & Co-Sell",
    difficulty: 2,
    scenario: "You are evaluating whether to list your product on a major B2B software marketplace. The marketplace charges a 20-25% transaction fee on all sales generated through their platform. They have 2 million monthly active buyers. Your direct CAC for comparable deals is approximately $4,200 per closed customer.",
    quote: "\"Twenty-five percent is steep. But two million buyers is real.\"",
    options: [
      "Model the decision: compare 20-25% transaction fee against your $4,200 direct CAC on a per-deal basis, and list if the marketplace fee is lower than your direct acquisition cost for deals of that size.",
      "List on the marketplace but only offer your entry-level product tier — limit transaction fee exposure on small deals and use the marketplace as a top-of-funnel for upsell to higher tiers sold direct.",
      "List on the marketplace and model which deal sizes work at 20-25%, then disable marketplace checkout for deals above a certain ACV threshold where direct sales is more cost-effective.",
      "Negotiate the transaction fee below 15% before agreeing to list."
    ],
    correct: 0,
    consequences: {"growth":10,"profitability":5,"strategicPosition":5,"cash":5},
    explanation: "Marketplace transaction fees are not inherently expensive or cheap — they must be compared against your alternative acquisition cost for the same customer. If your ACV is $8,000 and the transaction fee is $2,000 (25%), that is cheaper than your $4,200 direct CAC. If your ACV is $6,000 and the fee is $1,500, it is dramatically cheaper. The math determines the decision, not the percentage.",
    framework: "Marketplace CAC comparison — transaction fee vs. direct acquisition cost determines the decision",
    principle: "A marketplace fee is only expensive relative to what you would have spent to acquire the same customer yourself. Do the math first.",
    traps: [
      "Limiting to entry-level tiers on the marketplace assumes upsell happens naturally — but buyers who close on the marketplace often anchor to that buying channel, and disabling higher-tier checkout breaks the conversion path at the moment of intent.",
      "Disabling marketplace checkout above an ACV threshold creates a disjointed buyer experience — prospects who discover you through 2 million active buyers are directed away from the marketplace at the point of purchase on your most valuable deals.",
      "Negotiating to 15% before modeling the economics means you may be negotiating below your actual break-even point unnecessarily."
    ]
  },
  {
    id: "ACS08",
    category: "Alliance & Co-Sell",
    difficulty: 3,
    scenario: "A global systems integrator has proposed a joint market development initiative: they will invest $500K in building a dedicated practice around your product if you invest $500K in market development funds (MDF) for joint events, content, and sales resources over two years. This would be your largest single partnership investment. The SI has a track record of building practices around complementary products but has never focused on your category before.",
    quote: "\"A million dollars committed on both sides. This is either a real partnership or an expensive mistake.\"",
    options: [
      "Accept the joint investment — an SI practice built around your product creates significant long-term distribution.",
      "Structure it as a milestone-based commitment: release MDF tranches against practice-building milestones — first hire, first certification cohort, first joint customer win — rather than committing $500K upfront.",
      "Accept the joint investment but require the SI to provide quarterly practice-building reports — transparency creates accountability without restructuring the financial commitment.",
      "Offer $250K MDF if they match with $750K — your investment should be proportionally lower given their larger organization."
    ],
    correct: 1,
    consequences: {"growth":10,"strategicPosition":15,"executionRisk":-15,"cash":5},
    explanation: "A $500K MDF commitment released upfront to an unproven practice is a bet, not an investment. Milestone-based tranches convert the bet into an investment: you fund each stage of practice development after evidence that the previous stage was completed. If the SI builds the practice as committed, you get the distribution you are paying for. If they do not, you have not committed the full amount to an underperforming program.",
    framework: "MDF milestone tranches — release investment against evidence of practice-building, not upfront",
    principle: "Large partnership investments should be structured like venture: tranches against milestones, not checks against promises.",
    traps: [
      "Committing $500K upfront gives you no mechanism to course-correct if practice development stalls after the SI has banked the funding.",
      "Quarterly reports create an audit trail of progress but do not withhold funding if milestones are missed — you still release the full $500K on schedule regardless of what the reports show.",
      "Negotiating to a lower upfront commitment does not solve the milestone accountability problem — you are still releasing funds without performance evidence."
    ]
  },
  {
    id: "ACS09",
    category: "Alliance & Co-Sell",
    difficulty: 1,
    scenario: "A well-funded competitor in an adjacent space — they solve a different problem for the same buyers — approaches you about a bidirectional technology integration. Their product and yours are complementary, their customer base overlaps 40% with yours, and a joint integration would genuinely benefit shared customers. They also compete with you for a small number of deals where buyers consider both approaches.",
    quote: "\"We're mostly complementary but occasionally we're on the same shortlist.\"",
    options: [
      "Accept the integration and formalize a co-sell arrangement — the 40% customer overlap means joint go-to-market activity will accelerate deals for both companies and offset any competitive friction.",
      "Accept the integration — 40% customer overlap and genuine complementarity creates significant customer value.",
      "Accept the integration, but define data-sharing guardrails: integrate at the product level for customer benefit, do not share commercial intelligence, pipeline data, or customer lists.",
      "Accept the integration but limit it to a one-way connection that benefits your customers without giving the adjacent competitor access to your product data."
    ],
    correct: 2,
    consequences: {"customerTrust":10,"growth":10,"strategicPosition":10,"executionRisk":-5},
    explanation: "Adjacent competitor partnerships — co-opetition — are common and genuinely valuable when handled with clear guardrails. Customers benefit from the integration, the 40% overlap gets better joint value, and the occasional competitive situation is manageable with clear rules. The guardrail is commercial intelligence separation: integrate for product value, not for mutual pipeline visibility. Many of the strongest ecosystem integrations exist between companies that occasionally compete.",
    framework: "Adjacent co-opetition — product integration with commercial intelligence firewall",
    principle: "You can integrate with a partial competitor. Just make sure the integration shares product value, not commercial intelligence.",
    traps: [
      "A co-sell arrangement with a partial competitor creates shared pipeline visibility — your deal data, customer contacts, and sales cycle timing become accessible to a company that is on your shortlist on a subset of deals.",
      "Accepting without guardrails creates a pathway for a partial competitor to accumulate commercial intelligence about your shared customer base.",
      "One-way integration that only benefits your customers creates an asymmetric arrangement the partner will not accept — and misses the genuine mutual value available."
    ]
  },
  {
    id: "ACS10",
    category: "Alliance & Co-Sell",
    difficulty: 3,
    scenario: "Your product relies on a major platform partner's API for a core feature used by 65% of your customers. The platform partner has just announced a pricing change that will increase your API costs by 300% in 90 days. This change would make your most popular pricing tier unprofitable without passing the increase to customers. You have no contractual protection against the change.",
    quote: "\"They changed the pricing. We built our product on their API. Now we are exposed.\"",
    options: [
      "Absorb the cost increase and adjust your pricing tiers in the next annual cycle — disrupting customers now is worse than margin compression.",
      "Immediately raise prices across all affected tiers to pass the cost through to customers.",
      "Negotiate directly with the platform partner for a 12-month price freeze in exchange for a multi-year API commitment — locking in volume at current pricing buys time to build a migration path without immediately alerting customers to the problem.",
      "Execute on three parallel tracks: negotiate directly with the platform partner for a volume discount or transition period, begin engineering a migration path to reduce API dependency, and communicate transparently with customers about the situation and timeline."
    ],
    correct: 3,
    consequences: {"executionRisk":-15,"cash":5,"customerTrust":10,"strategicPosition":10},
    explanation: "Platform dependency crises require simultaneous action on the commercial, technical, and customer fronts. Negotiation may produce a volume discount or extended timeline. Engineering migration reduces future exposure. Transparent customer communication builds trust before a forced price change becomes a surprise. Acting on only one track — raising prices, absorbing costs, or terminating — leaves the others unaddressed and the underlying vulnerability intact.",
    framework: "Platform dependency crisis — commercial negotiation, technical migration, and customer communication in parallel",
    principle: "Platform dependency is not a one-day problem to solve. It is a multi-track response that must run simultaneously.",
    traps: [
      "Absorbing the increase defers the structural problem and guarantees margin compression on your most popular tier.",
      "Immediate price increases passed to customers without communication or context will produce significant churn in the affected tier.",
      "A multi-year commitment at current pricing delays the cost increase but deepens the API dependency you are trying to reduce — when the freeze ends, you are further from migration readiness and the partner has less incentive to negotiate again."
    ]
  },
]
