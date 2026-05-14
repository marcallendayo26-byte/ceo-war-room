export const CASES_SALES3 = [
  {
    id: "SL-AS01",
    category: "Account Strategy",
    difficulty: 2,
    scenario: "You've just closed a $180K deal with a large enterprise. The account has 12 business units that could benefit from your solution. Your instinct is to immediately start expanding. Your customer success team says the customer needs 90 days to stabilize the initial rollout before you introduce anything new. What do you do?",
    quote: "Expansion into unstable ground is how you turn a land into a churn.",
    options: [
      "Respect the 90-day stabilization recommendation and use the time to map the expansion landscape without selling.",
      "Start expansion conversations now — you have momentum and senior relationships from the initial sale.",
      "Find a different business unit champion not involved in the current rollout to start a parallel expansion track.",
      "Wait only 30 days and then begin expansion, splitting the difference between speed and stability."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"growth":6,"executionRisk":-7},
    explanation: "Premature expansion is one of the most common causes of enterprise account churn. If the initial rollout is unstable, an expansion conversation feels like a sales push rather than a partnership. The right move is to invest the 90 days in intelligence gathering — map the org, identify business unit champions, build the expansion business case — so that when you do re-engage commercially, you come in with relevance, not just opportunism. Starting a parallel track in another business unit is high-risk if word gets back to your primary champion that you went around them.",
    framework: "Land and Expand: stabilize before you scale — churn erases growth.",
    principle: "The best time to expand an account is after the first deal is working.",
    traps: [
      "Leveraging initial momentum as license to expand — momentum in sales doesn't equal stability in deployment",
      "Parallel expansion track in another BU — risks appearing to circumvent your primary sponsor",
      "30-day compromise — arbitrary and doesn't address the underlying stability concern"
    ]
  },
  {
    id: "SL-AS02",
    category: "Account Strategy",
    difficulty: 3,
    scenario: "Your largest account ($2.4M ARR) has a new economic buyer following a leadership change. The new VP has relationships with your main competitor and is known for consolidating vendors. Your champion from the original deal is still in place but no longer has decision authority. What's your immediate priority?",
    quote: "Relationship capital depreciates fast when organizational power shifts.",
    options: [
      "Intensify the relationship with your existing champion — loyalty will carry the account.",
      "Reach out directly to the new VP for an executive briefing before they form opinions about your solution.",
      "Ask your champion to introduce you to the new VP immediately.",
      "Prepare a competitive displacement defense and wait for the VP to initiate a review."
    ],
    correct: 1,
    consequences: {"strategicPosition":9,"customerTrust":6,"executionRisk":-8},
    explanation: "A new economic buyer with a competitor relationship is a retention threat that needs to be addressed immediately, not reactively. Direct outreach for an executive briefing — offering to review how your solution is performing and what value it's driving — is proactive and appropriate. Going through your champion risks having the message filtered by someone who no longer holds power. Waiting for a review to be initiated means you're playing defense on the competitor's timeline. Your existing champion is still valuable for intel and internal navigation but isn't sufficient protection on their own.",
    framework: "Account Retention: new economic buyers must be personally engaged before they form preferences.",
    principle: "In an account, the power that matters is the power that's current.",
    traps: [
      "Champion loyalty as account defense — champions who've lost authority can't protect you",
      "Waiting for a formal review — you'll be presenting to an audience that already has a preference",
      "Champion introduction only — the meeting still needs to be yours to lead, not filtered through them"
    ]
  },
  {
    id: "SL-AS03",
    category: "Account Strategy",
    difficulty: 2,
    scenario: "You're mapping a strategic account and discover 3 different business units are independently evaluating your product — none of them know the others are evaluating. How do you handle this?",
    quote: "Enterprise accounts that don't know they're buying the same thing will discover it at the worst possible time.",
    options: [
      "Work each unit independently — competing evaluations increase your probability of at least one win.",
      "Tell each unit about the others and suggest they coordinate internally before proceeding.",
      "Proactively connect the evaluations through a senior executive conversation about an enterprise-wide agreement.",
      "Pick the most advanced evaluation and focus there, deprioritizing the others."
    ],
    correct: 2,
    consequences: {"growth":9,"strategicPosition":8,"customerTrust":7},
    explanation: "Multiple parallel evaluations at the same account are a massive opportunity to reframe from three small deals into one strategic enterprise agreement with better pricing, central IT governance, and executive sponsorship. The risk of leaving them independent is that a C-suite leader discovers it, consolidates the evaluation, and may favor your competitor in the unified process. Getting ahead of it — proactively connecting to an executive who can champion an enterprise deal — is the highest-leverage move both commercially and relationally.",
    framework: "Enterprise Account Strategy: parallel fragmented evaluations should become one strategic deal.",
    principle: "Three small deals in the same account is one big deal waiting to be led.",
    traps: [
      "Independent pursuit — three chances to win becomes one executive decision you weren't part of",
      "Telling each unit about the others without an enterprise-level conversation — creates internal politics without a solution",
      "Focusing on the most advanced deal — missing the 2x-3x revenue opportunity of consolidation"
    ]
  },
  {
    id: "SL-AS04",
    category: "Account Strategy",
    difficulty: 2,
    scenario: "Your $500K account has a 90% renewal probability but you've been told they've been approached by a competitor with a new feature you don't have. Your champion says they're 'just taking a look.' Should you be concerned, and what do you do?",
    quote: "'Just taking a look' at a competitor is your first notice of a retention risk.",
    options: [
      "Don't panic — 90% renewal probability is strong and champions take vendor calls regularly.",
      "Ask your champion directly: 'How serious is this evaluation and what are they offering that we're not?'",
      "Ask your product team to accelerate the missing feature on the roadmap.",
      "Schedule a proactive business review to reinforce value and surface whether the feature gap is actually a concern to them."
    ],
    correct: 3,
    consequences: {"customerTrust":8,"strategicPosition":6,"executionRisk":-6},
    explanation: "A business review lets you do three things simultaneously: reinforce the value you're already delivering, surface whether the competitor's feature is actually a priority vs. just interesting, and deepen the relationship before the renewal conversation becomes a competitive one. Going directly to 'how serious is this?' can feel threatening to a champion who may be just being curious. Accelerating a roadmap item without understanding if it's actually needed is a reactive product strategy mistake.",
    framework: "Proactive Retention: reinforce value before renewal pressure creates a competitive context.",
    principle: "Account retention is won in the months before renewal, not the week of.",
    traps: [
      "90% confidence as an excuse to be passive — competitive activity is always a risk signal",
      "Roadmap pressure based on one retention concern — bad product strategy from sales urgency",
      "Asking champion to reveal competitor's offer — puts them in an awkward position and rarely gets honest data"
    ]
  },
  {
    id: "SL-AS05",
    category: "Account Strategy",
    difficulty: 3,
    scenario: "You inherit an account that has been 'red' for 18 months — unhappy with implementation delays, poor support responsiveness, and a product feature that never shipped as promised. The account is up for renewal in 3 months. The previous AE made promises that weren't kept. What's your strategy?",
    quote: "Inherited trust debt requires payment before you can make new deposits.",
    options: [
      "Request an honest discovery meeting: 'Before we talk renewal, I want to understand the full picture of what's happened.'",
      "Arrange an executive apology from your VP and a detailed remediation plan before any commercial conversation.",
      "Lead with an aggressive renewal offer — a strong discount signals you want their business.",
      "Focus on the one or two things you can immediately fix to build momentum and confidence."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-7,"strategicPosition":5},
    explanation: "Walking into a red account with a renewal discount signals you think money is the problem. The real problem is trust. The first conversation needs to be about listening — understanding the full scope of the failure from their perspective — before you can propose any solution. An honest discovery meeting signals accountability and curiosity rather than defensiveness. After understanding the full picture, an executive apology and remediation plan may well be appropriate, but you can't prescribe a fix you haven't diagnosed. Quick wins are useful but insufficient when there's accumulated grievance.",
    framework: "Account Recovery: diagnose before you prescribe — trust debt can't be paid with a discount.",
    principle: "The first thing a red account needs is to be heard, not sold to.",
    traps: [
      "Discount-led renewal — assumes price is the problem when it's trust",
      "Executive apology before discovery — you're prescribing before you've diagnosed",
      "Quick wins as the primary strategy — too superficial for 18 months of accumulated failure"
    ]
  },
  {
    id: "SL-AS06",
    category: "Account Strategy",
    difficulty: 1,
    scenario: "You have 15 accounts in your territory. Three accounts represent 70% of your ARR. The remaining 12 are small and mostly self-serve. How should you allocate your time?",
    quote: "Account coverage should follow revenue concentration, not account count.",
    options: [
      "Distribute time equally across all 15 accounts — every customer deserves equal attention.",
      "Build a tiered coverage model: high-touch for top 3, mid-touch for 4-6, light-touch for the rest.",
      "Focus exclusively on the three large accounts and formally hand off the small accounts to CS.",
      "Invest 70% of your time in the three large accounts and use digital/CS touches for the rest."
    ],
    correct: 1,
    consequences: {"growth":7,"customerTrust":6,"executionRisk":-5},
    explanation: "Account coverage should be tiered, not binary. Equal time across all accounts means systematically under-serving your most valuable relationships. Full handoff of smaller accounts ignores the fact that some of them may be growth opportunities. A tiered model — high-touch for strategic accounts, structured mid-touch for growth accounts, light-touch + CS for small ones — maximizes coverage quality across the portfolio. The key is defining the tiers by revenue potential, not just current size.",
    framework: "Tiered Account Coverage: match investment to potential, not to equality.",
    principle: "Treat all customers well; invest in all customers proportionally.",
    traps: [
      "Equal time — mathematically guarantees under-serving your most important accounts",
      "Top 3 only + full CS handoff — abandons accounts with growth potential",
      "70% in big 3 but no defined model for the rest — ad hoc coverage of 12 accounts"
    ]
  },
  {
    id: "SL-AS07",
    category: "Account Strategy",
    difficulty: 2,
    scenario: "An existing customer wants to expand their usage, but the expansion would require a new implementation project that your delivery team is currently capacity-constrained on. If you close the expansion now, you'll have a signed contract but no delivery capacity for 4 months. The customer wants to start in 6 weeks. What do you do?",
    quote: "Revenue you can't deliver is worse than revenue you didn't close.",
    options: [
      "Close the expansion immediately and let delivery figure out the timeline.",
      "Be transparent with the customer about the 4-month timeline before closing.",
      "Close the deal with a 4-month start date built into the contract.",
      "Delay the close until delivery capacity exists — don't sign what you can't deliver."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"executionRisk":-8,"profitability":4},
    explanation: "The right move is to be fully transparent about the delivery timeline and build it into the contract — not spring it on them post-signature or hide it in hopes they won't notice. If you close with vague delivery expectations, you'll have a contract dispute and a damaged relationship in 6 weeks. If the customer accepts a 4-month start date with eyes open, you have a clean commitment. If they can't wait 4 months, this surfaces a real mismatch before you create an obligation you can't keep. Option D is too conservative — delay loses the momentum of an expansion conversation.",
    framework: "Delivery-Aware Selling: never sell timelines you don't control.",
    principle: "A customer who signs with false expectations is a customer who will churn with anger.",
    traps: [
      "Close now and let delivery figure it out — creates a contract dispute when reality sets in",
      "Delay until capacity exists — loses momentum and the deal may not survive the wait",
      "Close with a 4-month start date WITHOUT telling the customer during negotiation — buried terms create anger"
    ]
  },
  {
    id: "SL-AS08",
    category: "Account Strategy",
    difficulty: 3,
    scenario: "Your company is about to announce a significant price increase (25%) effective in 90 days. You have renewal conversations coming up with 5 accounts. Do you proactively tell them before the announcement or wait for the formal communication?",
    quote: "How you deliver bad news is as important as the news itself.",
    options: [
      "Wait for the official company announcement — share pricing changes through official channels only.",
      "Say nothing until they ask about pricing in the renewal conversation.",
      "Offer your top accounts grandfathered pricing if they renew before the price increase takes effect.",
      "Proactively call your top accounts before the announcement with a heads-up and a transition plan."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"growth":6,"strategicPosition":5},
    explanation: "Strategic accounts deserve a heads-up before a formal announcement — it signals respect for the relationship and gives you a chance to frame the increase in the context of value delivered. Call them personally, explain the rationale, discuss what has changed or improved to justify the new pricing, and explore how you can work within their planning cycles. This is almost always rewarded with loyalty and faster renewal. Waiting for the formal announcement lets them feel blindsided. Grandfathered pricing only if they renew early is a legitimate commercial option but should be offered in the context of a genuine conversation, not as the sole message.",
    framework: "Relationship-First Communication: strategic accounts get strategic communication, not mass email.",
    principle: "Customers who feel warned are customers who stay. Customers who feel blindsided leave.",
    traps: [
      "Official channels only — impersonal for accounts that trust their AE as a partner",
      "Silence until asked — the worst outcome; destroys trust when the increase hits",
      "Grandfathered pricing offer without a relationship conversation — transactional and misses the real opportunity"
    ]
  },
  {
    id: "SL-AS09",
    category: "Account Strategy",
    difficulty: 2,
    scenario: "A customer you've served for 3 years just told you they're moving to a competitor. They say the decision is final. The competitor offers a feature you don't have, and the customer also mentioned price, though it was secondary. What's the right response?",
    quote: "A churning customer is your most valuable teacher.",
    options: [
      "Ask for a formal win/loss conversation focused on product gap and pricing — not to change the decision, but to understand it fully.",
      "Offer a significant discount and feature roadmap commitment to win them back.",
      "Accept the decision and ask what you could have done differently.",
      "Escalate to your VP to make a retention offer before the customer's transition date."
    ],
    correct: 0,
    consequences: {"strategicPosition":7,"customerTrust":7,"growth":3},
    explanation: "A churning customer who's willing to talk is one of the most valuable sources of product and sales intelligence you have. The right move is a structured win/loss debrief — focused on learning, not reversal. This signals respect for their decision, gives you honest competitive intelligence, and occasionally surfaces a misunderstanding that can change the outcome. Immediately going to discounts or executive retention offers signals desperation and rarely reverses a well-considered decision. Pure acceptance without a learning conversation wastes the opportunity.",
    framework: "Win/Loss Analysis: every lost deal contains the seeds of the next won one.",
    principle: "Customers who leave honestly are giving you a gift — accept it and learn.",
    traps: [
      "Pure graceful acceptance without structured learning — respectful but wastes the intelligence",
      "Discount + roadmap commitment — rarely reverses a decision made on feature and relationship grounds, and commits your product team",
      "Immediate VP escalation — feels like panic, not partnership"
    ]
  },
  {
    id: "SL-AS10",
    category: "Account Strategy",
    difficulty: 1,
    scenario: "You've been carrying an account for 2 years with very little growth. The account is profitable but flat. Your VP is pushing you to either grow it or deprioritize it. How do you diagnose whether there's real growth potential before deciding?",
    quote: "Flat accounts aren't necessarily stuck — they may just be undersold.",
    options: [
      "Run usage analytics to see how deeply the product is adopted within the current deployment.",
      "Do a full account mapping — identify who's using the product, who isn't, and which business units are untouched.",
      "Ask the champion: 'What would need to be true for you to expand your usage in the next 12 months?'",
      "Set a 60-day deadline: if you can't identify a concrete growth path, deprioritize."
    ],
    correct: 1,
    consequences: {"growth":7,"strategicPosition":6,"executionRisk":-4},
    explanation: "Flat accounts often look flat because they've never been properly mapped — you're selling to one champion in one business unit while the rest of the organization is untouched. A full account map — who's using, who's not, which teams and use cases are unexplored — typically reveals 2-3 expansion vectors in accounts that appeared saturated. Usage analytics is complementary but incomplete on its own (shows depth, not breadth). Asking the champion for permission to grow is too passive. The 60-day deadline is reasonable as a secondary action after the diagnosis.",
    framework: "Account Mapping: whitespace analysis reveals growth that relationship management alone misses.",
    principle: "Flat accounts need mapping, not just managing.",
    traps: [
      "Usage analytics alone — shows current adoption depth but not expansion breadth",
      "Asking champion about growth — they can only see their own domain; you need the full org picture",
      "Immediate deprioritization deadline before investing in diagnosis"
    ]
  },
  {
    id: "SL-CS01",
    category: "Competitive Selling",
    difficulty: 2,
    scenario: "You're in a competitive evaluation and the prospect asks you directly: 'How do you compare to [Competitor X]?' Competitor X has a feature set gap versus yours but also has significantly more enterprise customers in this industry. What's your approach?",
    quote: "Competitive comparisons are controlled by whoever frames them first.",
    options: [
      "Lead with your feature advantages and minimize the competitor's customer base advantage.",
      "Provide a feature-by-feature comparison chart that objectively shows both strengths.",
      "Acknowledge where the competitor is strong, then pivot to where your solution delivers superior outcomes for their specific use case.",
      "Avoid direct comparison: 'Every solution is different — let's focus on what you need.'"
    ],
    correct: 2,
    consequences: {"customerTrust":8,"strategicPosition":6,"growth":5},
    explanation: "The best competitive answer acknowledges the competitor's genuine strengths before pivoting to yours — it demonstrates confidence and integrity rather than fear or salesmanship. If you acknowledge the competitor's enterprise footprint honestly, the prospect trusts your analysis of your own advantages. Then pivot to the specific dimensions that matter for this customer's use case. A feature chart puts you on the competitor's terrain. Avoiding the question entirely frustrates prospects and signals you have something to hide.",
    framework: "Competitive Positioning: acknowledge, pivot, differentiate — in that order.",
    principle: "The rep who validates the competition earns the right to distinguish themselves.",
    traps: [
      "Leading with your strengths before acknowledging theirs — sounds defensive, not confident",
      "Feature comparison chart — lets the prospect (and competitor) define the evaluation criteria",
      "Question avoidance — frustrates and signals weakness"
    ]
  },
  {
    id: "SL-CS02",
    category: "Competitive Selling",
    difficulty: 3,
    scenario: "You discover during a sales cycle that the competitor has an executive relationship with the economic buyer — they played golf last month. Your champion is strong but not at the executive level. How does this change your strategy?",
    quote: "In competitive deals, access beats content — almost every time.",
    options: [
      "Outwork the competitor with better discovery, a stronger proposal, and more thorough follow-through.",
      "Accept that you're disadvantaged and focus on out-competing on product and price.",
      "Have your own VP or CEO reach out directly to the economic buyer to establish a peer relationship.",
      "Ask your champion to facilitate an executive-level meeting between your leadership and the economic buyer."
    ],
    correct: 3,
    consequences: {"strategicPosition":8,"growth":6,"executionRisk":-6},
    explanation: "Relationship-based deals favor the incumbent relationship unless challenged at the same level. The right response is to rapidly build an executive connection through your champion — not instead of them. Having your VP reach out directly without your champion's facilitation is a relationship move that can backfire if it bypasses the person who's advocating for you internally. Outworking on content is insufficient when the executive already has a preference shaped by personal relationship. Focus and price alone rarely overcome executive relationship gravity.",
    framework: "Executive Relationship Strategy: match the competitive relationship at the right level, through the right channel.",
    principle: "To compete with a relationship, build one.",
    traps: [
      "Content and process excellence alone — rarely beats a relationship advantage at the executive level",
      "VP direct outreach without champion facilitation — bypasses your advocate, risks the relationship",
      "Accepting disadvantage — premature concession in a competitive situation"
    ]
  },
  {
    id: "SL-CS03",
    category: "Competitive Selling",
    difficulty: 2,
    scenario: "A prospect mentions the competitor has told them your company has had 'significant customer churn' and 'product stability issues.' These claims are largely false but have clearly created doubt. How do you respond without looking defensive?",
    quote: "Responding to FUD with facts looks defensive. Responding with proof looks confident.",
    options: [
      "Acknowledge the concern without validating it: 'I understand why that would matter. Let me show you our actual retention data and connect you with 3 reference customers in your space.'",
      "Directly refute the claims: 'That's simply not true — here are the facts.'",
      "Report the competitor's behavior to your VP and ask them to address it through formal channels.",
      "Ignore it and let your product strengths speak for themselves."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"strategicPosition":7,"growth":5},
    explanation: "Competitive FUD (Fear, Uncertainty, Doubt) is most effectively neutralized with direct evidence rather than counter-claims. A direct refutation — 'that's false' — sounds defensive and creates a he-said/she-said dynamic. The right move is to take the concern seriously, offer real data (churn metrics, uptime stats), and give the prospect the ability to verify through reference customers. This answers the concern without escalating the competitive tension. Reporting the competitor behavior through formal channels is rarely effective and often escalates poorly.",
    framework: "FUD Response: counter with evidence, not argument.",
    principle: "Facts presented by customers are worth ten times more than facts presented by you.",
    traps: [
      "Direct refutation — enters a dispute the prospect can't resolve and that benefits the competitor",
      "Formal complaint escalation — rarely works and makes you look unable to handle competitive dynamics",
      "Letting product speak — doesn't address a specific concern that's already in the prospect's head"
    ]
  },
  {
    id: "SL-CS04",
    category: "Competitive Selling",
    difficulty: 1,
    scenario: "You're in a competitive evaluation and realize the prospect's evaluation criteria were largely written based on your competitor's feature set — they have several requirements that align exactly with things your competitor does that you don't. What do you do?",
    quote: "Competing on criteria you didn't write is competing on ground the enemy chose.",
    options: [
      "Respond to all criteria as best you can and hope your overall profile is compelling.",
      "Ask to schedule a working session to understand the business outcomes behind the criteria, and reframe around outcomes where you're stronger.",
      "Politely decline the evaluation — the criteria are rigged and you can't win.",
      "Offer a features roadmap commitment to address the gaps in your solution."
    ],
    correct: 1,
    consequences: {"strategicPosition":8,"growth":6,"customerTrust":5},
    explanation: "Evaluation criteria written from a competitor's template are a solvable problem — but not through the RFP response itself. The right move is to get in front of the decision-makers and reframe the evaluation around business outcomes rather than feature checkboxes. 'What are you actually trying to achieve with this?' usually reveals that the outcomes can be achieved multiple ways, and that your approach may be superior for their specific context even where you have feature gaps. Declining is premature. Feature roadmap commitments to close criteria gaps are notoriously unreliable and often backfire.",
    framework: "Evaluation Reframing: shift from feature-matching to outcome-mapping.",
    principle: "Change the criteria or change the evaluator — never just respond to criteria you didn't help write.",
    traps: [
      "Responding to rigged criteria — fighting a battle on someone else's terrain",
      "Declining the evaluation — too early, you may have more influence than you think",
      "Roadmap commitments to fill gaps — creates delivery debt and credibility risk"
    ]
  },
  {
    id: "SL-CS05",
    category: "Competitive Selling",
    difficulty: 3,
    scenario: "You're the incumbent vendor in a renewal evaluation that has become competitive. The prospect says they want to 'run a fair process' and evaluate 3 vendors. You've delivered strong results for 2 years. How do you position as incumbent without being complacent?",
    quote: "Incumbents who assume they'll win are exactly the incumbents who lose.",
    options: [
      "Rely on your relationship and track record — your results should speak for themselves.",
      "Offer pre-emptive pricing improvement to disincentivize a real evaluation.",
      "Treat this as a new competitive sale: lead with a formal value review, executive engagement, and a refreshed commercial offer.",
      "Ask your champion to advocate against running a competitive process."
    ],
    correct: 2,
    consequences: {"growth":7,"strategicPosition":7,"customerTrust":7},
    explanation: "Incumbents lose renewals when they rely on relationship inertia and past results. A formal competitive evaluation requires you to sell again — not assume. Bring a structured value review (here's what we delivered, here's the ROI), executive engagement from your leadership, and a refreshed commercial offer that shows you're still hungry for the business. This demonstrates you take them seriously and you're still the right partner going forward. Pre-emptive pricing improvement without a value conversation signals insecurity. Discouraging the evaluation process alienates your champion.",
    framework: "Incumbent Competition: win renewals as if you're selling for the first time.",
    principle: "Your best competitive defense is acting like you're not the incumbent.",
    traps: [
      "Relationship reliance — past goodwill doesn't close future renewals against motivated competitors",
      "Pre-emptive pricing without value conversation — gives away margin without addressing the real evaluation",
      "Asking champion to block the process — makes you look afraid of fair competition"
    ]
  },
  {
    id: "SL-CS06",
    category: "Competitive Selling",
    difficulty: 3,
    scenario: "Late in a competitive sales cycle, your competitor drops their price by 40% and offers a free 6-month implementation. Your champion seems genuinely impressed and mentions they're re-evaluating. What's your response?",
    quote: "A 40% price cut at the end of a sales cycle is a signal worth interrogating.",
    options: [
      "Match the competitive discount immediately to preserve the deal — you can recover margin on expansion.",
      "Ask your champion to pause for 48 hours while you consult your VP about a counter-offer.",
      "Produce a detailed product comparison document that reestablishes your technical superiority.",
      "Have a frank conversation with your champion: 'That's a meaningful move — it's worth asking what's bundled in that implementation, what the post-free-period economics look like, and whether pricing at that level is sustainable for a vendor you'd depend on for years.'"
    ],
    correct: 3,
    consequences: {"profitability":7,"strategicPosition":8,"customerTrust":6},
    explanation: "A last-minute 40% price drop paired with a free implementation is a desperation move — and smart buyers know it. Rather than matching it (which starts a race to the bottom you can't sustain), the right response is to help your champion think critically about what the offer actually means. What's bundled in the 'free' implementation — and what happens when it ends? What are the economics in year 2? A vendor who drops 40% to win the deal may have structural problems. This isn't an attack — it's genuine due diligence. Customers who think through total cost often return to the more stable choice. A comparison document doesn't address the financial dynamic that's now front of mind.",
    framework: "Last-Minute Competitive Discount: interrogate the offer, don't just counter it.",
    principle: "Teach your champion to ask questions a vendor desperate to win doesn't want to answer.",
    traps: [
      "Immediate price match — race to the bottom with a competitor who's already shown they'll go further",
      "48-hour pause for VP consultation — delay in a competitive situation often means the deal is decided without you",
      "Product comparison document — doesn't address the financial question that's now dominant"
    ]
  },
  {
    id: "SL-CS07",
    category: "Competitive Selling",
    difficulty: 2,
    scenario: "A competitor is spreading FUD — claiming your company is 'too small and financially unstable' to be a long-term partner. Multiple prospects are asking about your company's stability unprompted. How do you address this systematically?",
    quote: "FUD spreads in the spaces you don't occupy. Fill them first.",
    options: [
      "Proactively build a credibility narrative — relevant customer logos, financial backers, growth trajectory, and partnership depth — and address stability before prospects raise it.",
      "Report the competitor's FUD campaign to your VP and request a formal public rebuttal from marketing.",
      "Avoid responding to it directly — elevating the concern signals that it's credible.",
      "Add a company stability slide to your standard deck and use it to respond when the objection comes up."
    ],
    correct: 0,
    consequences: {"strategicPosition":8,"customerTrust":7,"growth":5},
    explanation: "Stability FUD is most effectively neutralized proactively — not reactively. If you're hearing the concern from multiple prospects, assume it's circulating broadly and get ahead of it. Build a credibility package: significant customer logos who've been with you for years, investor or financial backing data, growth metrics, and the depth of your ecosystem partnerships. Introduce this narrative before prospects raise it — 'I want to share some context about where we are as a company' — so you're setting the frame, not responding to someone else's frame. A reactive slide in your deck means you only address it after doubt has already been planted.",
    framework: "Proactive Credibility: own your narrative before the competitor shapes it.",
    principle: "Stability concerns don't disappear when ignored — they grow. Address them before they're asked.",
    traps: [
      "Formal rebuttal request — marketing rebuttals rarely reach individual prospects and can elevate the story",
      "Silence strategy — giving FUD room to spread unchallenged is choosing to lose the narrative",
      "Reactive deck slide — you're still letting the competitor control when the conversation happens"
    ]
  },
  {
    id: "SL-CS08",
    category: "Competitive Selling",
    difficulty: 2,
    scenario: "Midway through a competitive evaluation, you confirm that your product has a genuine capability gap — not a perception issue, but a real missing feature the prospect needs. It's on your Q4 roadmap. What do you do?",
    quote: "Genuine gaps handled with honesty are survivable. Genuine gaps handled with spin are not.",
    options: [
      "Minimize the gap in conversation — emphasize what you do well and hope it doesn't become the deciding factor.",
      "Acknowledge the gap directly: share where it sits on the roadmap, what the timing looks like, and what customers do in the interim while waiting for it.",
      "Offer a custom development commitment to deliver the feature before the evaluation closes.",
      "Ask your product team to accelerate the feature specifically to help close this deal."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"strategicPosition":6,"executionRisk":-5},
    explanation: "Genuine product gaps handled honestly are rarely the deal-killers that reps fear. Handled with spin, they always are — because the customer finds out eventually. The right response is direct acknowledgment: the gap exists, here's the roadmap context, here's what other customers do as an interim workaround, and here's a realistic view of timing. This earns enormous credibility because it's so rare. Custom development commitments made to close individual deals create delivery debt that haunts your engineering team and often get delayed anyway. Asking for product acceleration based on one deal is poor product strategy.",
    framework: "Gap Transparency: honest gaps with a plan are survivable. Disguised gaps are not.",
    principle: "The rep who acknowledges the gap honestly wins more trust than the one who spins around it.",
    traps: [
      "Minimizing the gap — prospects usually verify features independently; the gap will surface",
      "Custom development commitment — creates delivery debt and rarely closes the timing gap the prospect cares about",
      "Product acceleration request for one deal — poor product strategy driven by sales urgency"
    ]
  },
  {
    id: "SL-CS09",
    category: "Competitive Selling",
    difficulty: 3,
    scenario: "Your competitor has infiltrated your existing account through a department head who ran a shadow evaluation without your knowledge. IT and procurement are now formally involved. Your champion didn't know either. What's your strategy?",
    quote: "A back-channel evaluation discovered late is still recoverable — if you move immediately.",
    options: [
      "Ask your champion to shut down the evaluation before it advances further — you're the incumbent and should have been consulted.",
      "Request an emergency meeting with the economic buyer to block the competitive process from formalizing.",
      "Have your champion help you map the evaluation scope, then proactively request a meeting with the department head who initiated it and the IT team to understand what they actually need.",
      "Submit a formal counter-proposal directly to the IT team before the evaluation concludes."
    ],
    correct: 2,
    consequences: {"strategicPosition":8,"customerTrust":7,"executionRisk":-7},
    explanation: "A shadow competitive evaluation isn't a defeat — it's an intelligence signal that the department head had a need that wasn't being met through your current relationship. The right response is to engage openly rather than defensively: understand what problem they were trying to solve, and demonstrate that you're interested in solving it. Ask your champion to facilitate introductions to the department head and IT team, then have a genuine discovery conversation. Asking your champion to shut it down alienates internal stakeholders and rarely works. An emergency economic buyer meeting before you understand the evaluation will look reactive and political.",
    framework: "Shadow Evaluation Recovery: treat competitor infiltration as a discovery signal, not an attack.",
    principle: "Back-channel evaluations usually mean an unmet need. Solve the need.",
    traps: [
      "Champion-driven shutdown — internal power plays by champions often make you look like the aggressive vendor",
      "Emergency economic buyer escalation — looks like panic before you've even diagnosed the need",
      "Counter-proposal before discovery — you're competing on criteria you don't understand yet"
    ]
  },
  {
    id: "SL-CS10",
    category: "Competitive Selling",
    difficulty: 3,
    scenario: "You're in a head-to-head competitive bake-off. Both vendors scored similarly on technical criteria. The decision will come down to 'total partnership value.' Your competitor has a consulting arm; you don't. How do you argue your case?",
    quote: "Partnership isn't defined by the size of your services catalog.",
    options: [
      "Lead with your lower total cost of ownership over three years — the consulting arm adds cost, not just value.",
      "Emphasize the deep integration between your product and your implementation capabilities — tight ownership beats broad breadth.",
      "Offer to bring in a certified partner consulting firm to match the competitor's consulting capability.",
      "Reframe partnership around outcomes: 'Here are the specific results we've delivered for companies like yours, here's the executive access you'd have, and here's what we're prepared to commit to in your contract — those are the things that define a real partnership.'"
    ],
    correct: 3,
    consequences: {"strategicPosition":8,"customerTrust":7,"growth":6},
    explanation: "When the decision comes down to 'partnership value,' the rep who wins is the one who best defines what partnership actually means in practice. Reframing from services breadth to outcomes, access, and commitment is a powerful move: it shifts the conversation from features (consulting arm) to results (what we've actually done for customers like you). Specific outcome data, commitment language in the contract, and a named executive contact are all more tangible than a consulting org chart. Leading with TCO is a cost argument in a conversation that's explicitly about value. Bringing in a third-party partner as a match is a reactive, last-minute concession that can seem desperate.",
    framework: "Reframing Partnership: define what partnership means before the competitor's definition wins by default.",
    principle: "You can't beat a consulting arm by getting one. Beat it by making consulting irrelevant to the decision.",
    traps: [
      "TCO argument — cost framing in a value conversation rarely wins the sale",
      "Integration focus — narrower argument than what 'total partnership' requires",
      "Third-party consulting matchup — reactive and signals you were competing on terrain you didn't choose"
    ]
  },
]
