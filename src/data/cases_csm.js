export const CASES_CSM = [
  {
    id: "CSM-ON01",
    category: "Onboarding",
    difficulty: 1,
    scenario: "A new enterprise customer has just signed. The implementation kickoff is scheduled for next week. You receive an email from their project lead saying three of the five planned stakeholders have been pulled for another internal project and won't be available for the first month. What do you do?",
    quote: "An onboarding without stakeholders is a deployment with no one to succeed.",
    options: [
      "Reschedule the kickoff and work with the customer to identify replacement stakeholders or a revised timeline that ensures the right people are involved.",
      "Proceed with the reduced team and document that the delay risk is on their side.",
      "Begin onboarding with whoever is available and loop in the missing stakeholders later.",
      "Escalate immediately to the economic buyer — this is a risk to the project's success."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"executionRisk":-7,"growth":4},
    explanation: "Starting an enterprise onboarding without the core stakeholders is one of the leading causes of failed implementations. The right move is to pause, surface the risk clearly and professionally, and work jointly on a solution: alternative stakeholders, a phased start, or a modified timeline. Proceeding and documenting 'risk is on their side' is defensively unhelpful and won't save you when the implementation fails. Escalating immediately to the economic buyer before working with the project lead is skipping the right channel.",
    framework: "Onboarding Readiness: stakeholder availability is a prerequisite, not a nice-to-have.",
    principle: "A delayed start you planned beats a failed start you pushed through.",
    traps: [
      "Documenting blame preemptively — when implementation fails, that note helps no one",
      "Starting with partial team — missing stakeholders means missing requirements, missed adoption, and rework",
      "Immediate executive escalation before working with the project lead — bypasses the right channel"
    ]
  },
  {
    id: "CSM-ON02",
    category: "Onboarding",
    difficulty: 2,
    scenario: "You're onboarding a mid-market customer and discover midway through implementation that the data they've migrated is significantly dirtier than expected — missing fields, duplicate records, inconsistent formats. This will add 3-4 weeks to the timeline. How do you handle this?",
    quote: "Data quality problems discovered in implementation were always pre-existing — own the conversation, not the cause.",
    options: [
      "Absorb the delay and don't tell the customer — you don't want to start the relationship with bad news.",
      "Proactively brief the customer: share what you found, the timeline impact, and a specific remediation plan.",
      "Pause the implementation and send a formal change order for the additional work.",
      "Try to work around the data issues and deliver on the original timeline, noting quality limitations in the deployment."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-7},
    explanation: "Data quality surprises must be communicated immediately and transparently. The customer deserves to know the real scope, the revised timeline, and the remediation options — including whether data cleanup is their responsibility, yours, or shared. Absorbing the delay silently means delivering late with no explanation. A formal change order before any conversation creates an adversarial dynamic around what should be a collaborative problem. Working around data quality and shipping a limited deployment sets the product up to underperform from day one.",
    framework: "Proactive Communication: surprises in implementation require immediate transparency, not damage control later.",
    principle: "Customers can handle bad news. They can't handle bad news delivered late.",
    traps: [
      "Silence and absorption — project lands late with no warning, destroying credibility",
      "Immediate change order — adversarial framing before a collaborative conversation",
      "Workaround delivery — you ship a broken deployment and the customer blames the product"
    ]
  },
  {
    id: "CSM-ON03",
    category: "Onboarding",
    difficulty: 2,
    scenario: "Your new customer's internal champion is highly engaged and technically capable, but you're noticing that end users aren't attending training sessions — attendance has been around 20%. The champion keeps saying 'they'll come around.' You're 4 weeks into a 6-week onboarding. What's your concern and response?",
    quote: "Adoption starts with attendance. You can't train people who aren't in the room.",
    options: [
      "Trust the champion — they know their organization better than you do.",
      "Extend the onboarding timeline to give users more time to engage.",
      "Flag the adoption risk to the champion with specific data and jointly develop a plan to increase attendance, including executive reinforcement if needed.",
      "Move ahead with the users who are engaged — 20% adoption in the core users is a foundation to build on."
    ],
    correct: 2,
    consequences: {"customerTrust":7,"executionRisk":-8,"growth":4},
    explanation: "Low training attendance is a leading indicator of post-launch adoption failure — and it needs to be addressed before go-live, not after. The right move is to quantify the risk specifically to your champion: 'Current attendance projects to X% adoption at launch — our experience shows this leads to Y outcomes.' Then partner on a solution: mandatory sessions, executive mandate, lunch-and-learns, small group sessions. Champions who believe users 'will come around' often lack the executive support to drive behavior change. Extending the timeline without fixing the adoption driver just delays the same problem.",
    framework: "Adoption Risk Management: identify leading indicators of churn during onboarding.",
    principle: "Low training attendance is not a training problem — it's a change management problem.",
    traps: [
      "Champion deference — your experience with hundreds of implementations outweighs their optimism",
      "Timeline extension without fixing root cause — you're extending a failing dynamic, not solving it",
      "Accepting 20% as a foundation — 80% non-adoption at launch rarely improves post-go-live without intervention"
    ]
  },
  {
    id: "CSM-ON04",
    category: "Onboarding",
    difficulty: 3,
    scenario: "A 3-month onboarding is reaching its scheduled end date but the customer has only completed 60% of the agreed milestones due to their own resource constraints and internal delays. Formally, you're done. They're not. What do you do?",
    quote: "Contractual completion and actual success are not the same thing — and your customers will remember which one you chose.",
    options: [
      "Close the onboarding phase formally and transition to standard support — they had their time.",
      "Offer to extend onboarding at additional cost — the resource delays were their issue.",
      "Complete all remaining milestones on their behalf to meet the definition of done — it's faster and maintains goodwill.",
      "Have a candid conversation about the gap, agree on a prioritized set of remaining milestones, and provide time-limited continued support to close the critical items."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"executionRisk":-6,"growth":5},
    explanation: "An onboarding closed at 60% completion isn't actually closed — it's a setup for a difficult first year. The right approach is a candid joint review: which of the remaining 40% are critical to the customer's success? Prioritize those and provide time-limited support to complete them before formal close. This isn't unlimited extension — it's a structured, mutual effort to ensure the customer is actually set up to succeed. Formal close at 60% protects the SLA on paper while destroying the relationship in practice. Doing it for them creates dependency and doesn't build the customer's internal capability.",
    framework: "Success-Oriented Onboarding: completion should be measured by customer readiness, not calendar.",
    principle: "A customer closed at 60% is a customer set up to fail at 100%.",
    traps: [
      "Formal close at 60% — technically defensible, practically harmful",
      "Paid extension for their delays — punitive framing poisons the relationship",
      "Completing it for them — builds dependency, doesn't build capability"
    ]
  },
  {
    id: "CSM-ON05",
    category: "Onboarding",
    difficulty: 1,
    scenario: "You've just been assigned a new customer who had a difficult relationship with your company before you came on board — a delayed implementation, a billing dispute, and a product gap that still exists. The customer is skeptical and cautious at the kickoff call. How do you start?",
    quote: "Inherited trust debt can only be paid with honest acknowledgment and consistent action.",
    options: [
      "Open by acknowledging the history directly: 'I know the relationship has had some challenges, and I want to understand your perspective before we talk about next steps.'",
      "Start fresh — don't reference the past and focus entirely on what you're going to do going forward.",
      "Apologize extensively for past issues and promise a different experience going forward.",
      "Have your manager join the kickoff to signal executive commitment to the account."
    ],
    correct: 0,
    consequences: {"customerTrust":9,"executionRisk":-5,"growth":4},
    explanation: "Pretending a difficult history didn't happen is transparently false and creates immediate distrust. Acknowledging it directly — with genuine curiosity about their experience — signals that you're not there to spin, you're there to understand and fix. This doesn't mean dwelling on the past or over-apologizing (which can feel performative). It means naming the elephant in the room with sincerity, then shifting to actionable partnership. Manager presence is useful but shouldn't substitute for your own willingness to engage with the history honestly.",
    framework: "Trust Recovery: acknowledge before you advance.",
    principle: "You can't build forward from a foundation you won't acknowledge.",
    traps: [
      "False fresh start — customers see right through it and lose whatever trust remained",
      "Extensive apology without action — performative, not substantive",
      "Manager attendance as the primary trust signal — relationship ownership needs to be yours"
    ]
  },
  {
    id: "CSM-ON06",
    category: "Onboarding",
    difficulty: 2,
    scenario: "Three weeks into onboarding, your main contact at the customer goes on parental leave for 3 months. The backup they designated is new to the company and unfamiliar with the project context. What's your onboarding strategy adjustment?",
    quote: "Single-threaded customer relationships are fragile by design.",
    options: [
      "Slow the onboarding until the primary contact returns.",
      "Invest extra time in the backup: share full project context, document everything already completed, and build the relationship proactively.",
      "Ask the customer to assign a more senior backup who has existing context.",
      "Continue at normal pace and accept that some context loss is inevitable."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-7,"growth":4},
    explanation: "This is a relationship continuity challenge, and the right response is proactive investment in the backup contact — not waiting for the primary to return. Brief the backup fully, provide comprehensive documentation of what's been done and why, and over-communicate for the first few weeks while they get up to speed. This protects the onboarding momentum and builds a second strong relationship in the account. Waiting 3 months loses critical momentum. Asking for a senior backup puts an unreasonable demand on the customer during an already stressful period.",
    framework: "Multi-threading: single-threaded relationships fail at the most inconvenient times.",
    principle: "Your customer contact's absence is your documentation quality's audition.",
    traps: [
      "Waiting for primary to return — 3 months of paused onboarding is 3 months of delayed value",
      "Demanding a senior backup — punishes the customer for normal human events",
      "Normal pace without context investment — the backup will feel overwhelmed and the project suffers"
    ]
  },
  {
    id: "CSM-ON07",
    category: "Onboarding",
    difficulty: 3,
    scenario: "Your product's standard onboarding is designed for 50-person teams. You're onboarding an enterprise customer with 800 users across 6 departments. The standard onboarding playbook doesn't scale — you'd need 4x the normal time and resources. What's your approach?",
    quote: "Playbooks are starting points for standard customers, not straitjackets for complex ones.",
    options: [
      "Run the standard playbook — treating all customers consistently is important.",
      "Escalate to your CSM leadership to request an enterprise onboarding plan and additional resources before the kickoff.",
      "Adapt the playbook yourself: identify the high-value departments for a phased rollout, prioritize early wins, and set realistic expectations about full deployment timing.",
      "Reduce the scope — onboard 50 users in the standard model and call it done."
    ],
    correct: 2,
    consequences: {"customerTrust":8,"executionRisk":-8,"growth":6},
    explanation: "Enterprise customers require enterprise-grade onboarding plans, and a proactive escalation to get the right resources is the right first move — before the kickoff, not after you're already behind. Bringing leadership in at the start signals you're serious about the account and gets you the resources to succeed. Adapting the playbook alone risks under-resourcing a complex deployment. Standard playbook with 800 users is a recipe for failure. Scoping down to 50 users to fit the model ignores the customer's actual need.",
    framework: "Escalation Before Execution: complex accounts require aligned resources before you start.",
    principle: "The time to say 'this needs more' is before you start, not after you've committed to the wrong plan.",
    traps: [
      "Standard playbook on an enterprise account — consistency is not the same as appropriateness",
      "Solo playbook adaptation without escalation — you may lack the resources to execute what you design",
      "Scope reduction to fit the model — the customer bought enterprise onboarding, not 50-user onboarding"
    ]
  },
  {
    id: "CSM-ON08",
    category: "Onboarding",
    difficulty: 2,
    scenario: "During onboarding, the customer asks you to build several custom reports and configurations that go beyond what was included in the contract. The requests are reasonable but would take significant additional time. How do you respond?",
    quote: "Scope creep in onboarding is generosity that creates unsustainable expectations.",
    options: [
      "Do the extra work — customer satisfaction during onboarding drives renewal.",
      "Decline all requests not in the contract — you can't set a precedent of free extras.",
      "Do the highest-value custom work for free, and frame the rest as a professional services engagement.",
      "Have a transparent conversation: acknowledge the value of the requests, explain what's in scope, and propose a structured way to address out-of-scope items."
    ],
    correct: 3,
    consequences: {"customerTrust":8,"profitability":6,"executionRisk":-5},
    explanation: "Scope management in onboarding requires both customer-centricity and business discipline. The right move is transparency: explain what's in scope, acknowledge the value of the out-of-scope requests, and offer a structured path — either a PS engagement or a prioritized list to revisit post-onboarding. Free scope creep trains customers to expect unlimited accommodation, creates an unsustainable workload, and devalues your professional services capability. Hard refusal on all extras creates friction without offering a solution. Selectively doing some for free while charging for others creates an inconsistent experience.",
    framework: "Scope Management: transparency + structure > accommodation > refusal.",
    principle: "Saying yes to everything during onboarding is saying no to sustainable success.",
    traps: [
      "Doing all extra work for free — trains the expectation and depletes your team",
      "Hard refusal on anything not in contract — adversarial and unnecessary",
      "Selective free work with no clear logic — inconsistent and hard to defend"
    ]
  },
  {
    id: "CSM-ON09",
    category: "Onboarding",
    difficulty: 1,
    scenario: "A customer is in onboarding and their key stakeholder is asking for weekly status updates from you directly, even though you've already shared a shared project dashboard with all the same information. This is creating a significant time commitment. How do you handle it?",
    quote: "Reporting requests often mask an anxiety that dashboards alone don't address.",
    options: [
      "Ask what information is missing from the dashboard that would make it sufficient, and address that underlying concern.",
      "Tell them the dashboard has all the information they need and you can't commit to weekly calls.",
      "Provide the weekly updates — the customer's comfort is worth the time.",
      "Automate a weekly email summary from the dashboard to replace the manual updates."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"executionRisk":-5,"growth":4},
    explanation: "When a customer requests more frequent direct communication despite having a complete dashboard, the problem is usually not the information — it's confidence or trust. Asking what's missing from the dashboard surfaces the real concern: maybe they don't trust what they're seeing, maybe they want your interpretation, maybe they feel disconnected from the project. Understanding that concern lets you address it — either by improving the dashboard or by reframing the check-ins more efficiently. A flat refusal signals the relationship isn't your priority. Automated emails are impersonal and likely to not satisfy the actual need.",
    framework: "Stakeholder Communication: over-communication requests usually signal an unmet underlying need.",
    principle: "The question behind the question is always more important than the question itself.",
    traps: [
      "Unconditional weekly calls — expensive time commitment that doesn't address the root cause",
      "Hard refusal to dashboard — dismissive and damages trust",
      "Automated email — impersonal substitute that ignores the trust and relationship dimension"
    ]
  },
  {
    id: "CSM-ON10",
    category: "Onboarding",
    difficulty: 3,
    scenario: "Six weeks into onboarding, the customer's executive sponsor is replaced by a new one who was not involved in the purchase decision and is skeptical about the initiative. The original sponsor's priorities have been deprioritized. What's your immediate strategy?",
    quote: "Executive sponsor changes are the single largest predictor of post-onboarding churn.",
    options: [
      "Continue working through your existing champion — the executive transition is above your level to manage.",
      "Request an introductory meeting with the new sponsor as soon as possible to establish the relationship and context.",
      "Ask your VP or exec to reach out to the new sponsor at the C-level.",
      "Accelerate the onboarding to create facts on the ground before the new sponsor can derail it."
    ],
    correct: 1,
    consequences: {"customerTrust":9,"executionRisk":-9,"strategicPosition":7},
    explanation: "A new executive sponsor who is skeptical can kill a deployment — even a successful one — if they're not engaged early. The highest-priority action is to get in front of them immediately: introduce yourself, understand their priorities, and connect your solution to their agenda rather than their predecessor's. This resets the sponsorship rather than losing it. Working through your champion alone leaves the executive unengaged. Executive escalation from your company before you've tried yourself is jumping over a step you own. Accelerating to create fait accompli often backfires — new executives resent feeling boxed in.",
    framework: "Sponsor Transition Management: new executives require new relationship investment.",
    principle: "An executive who didn't buy the deal needs to be re-sold the value — immediately.",
    traps: [
      "Champion-only strategy when executive authority has shifted — your champion no longer controls the outcome",
      "Your executive escalation before your own introduction — skips a step that's yours to own",
      "Accelerated fait accompli — creates resentment in a new executive who didn't choose the project"
    ]
  },
  {
    id: "CSM-PA01",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "Usage data shows that a key feature your customer was sold on has 8% adoption among their users 90 days post-launch. The feature is core to the value proposition that justified the purchase. The customer hasn't mentioned it. What do you do?",
    quote: "Low adoption is a fact. Ignoring it is a choice that always costs more later.",
    options: [
      "Wait for the customer to bring it up — you don't want to create problems they haven't noticed.",
      "Arrange additional training sessions for the underused feature.",
      "Proactively bring the data to the customer: share the 8% stat, explain why the feature matters for their goals, and jointly diagnose the barrier.",
      "Alert your product team to investigate if the feature has usability issues."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":5},
    explanation: "8% adoption of a core feature 90 days post-launch is a churn signal — but it's also a fixable problem if addressed now. Waiting for the customer to notice means waiting for the moment they question the ROI, which usually happens at renewal. The right move is to bring it proactively: show the data, connect the adoption gap to their business outcomes, and have a genuine joint diagnostic conversation. Is it awareness? Training quality? Workflow fit? A competitive internal tool? Each diagnosis has a different solution. Training alone is premature before the diagnosis.",
    framework: "Adoption Analytics: usage data is your early warning system — act on it proactively.",
    principle: "Every day of low adoption is a day your renewal is being decided without you.",
    traps: [
      "Waiting for the customer to notice — by then it's a retention conversation, not an adoption one",
      "Reflexive training — training solves an awareness problem; it doesn't solve a workflow or usability problem",
      "Product alert only — product may need to know, but the customer conversation can't wait for a product investigation"
    ]
  },
  {
    id: "CSM-PA02",
    category: "Product Adoption",
    difficulty: 3,
    scenario: "A customer has high feature adoption but is using your product in a way that's different from what you intended — they've built workarounds for features they find clunky and avoid your core analytics. Their usage makes the platform look less valuable than it is. How do you handle this?",
    quote: "Customers who work around your product are telling you what your product should be.",
    options: [
      "Educate them on the 'right way' to use the product — they're missing out on key value.",
      "Accept their usage pattern — if they're getting value, the method doesn't matter.",
      "Document their workarounds and escalate to product as a feature request.",
      "Ask them to walk you through their workflow: understand why they built the workarounds before suggesting alternatives."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"strategicPosition":6,"growth":4},
    explanation: "Customers who build workarounds are not doing it to be difficult — they're doing it because something in your product wasn't working for their specific workflow. Before prescribing the 'right way,' understand why they diverged. There may be a legitimate usability issue your product team needs to know about. There may also be a simple explanation that converts them back to the intended workflow. But the conversation starts with curiosity, not correction. Pure acceptance without investigation misses the improvement opportunity and leaves the customer in a suboptimal experience.",
    framework: "Behavioral Discovery: workarounds are user research in disguise.",
    principle: "Before you tell a customer how to use your product, ask why they use it their way.",
    traps: [
      "Immediate 'right way' education — you haven't earned the right to prescribe before you understand",
      "Product escalation only — the customer conversation has to happen regardless of what product does",
      "Accepting workarounds without inquiry — you miss the product intelligence and the adoption opportunity"
    ]
  },
  {
    id: "CSM-PA03",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "You're reviewing a customer's usage and notice that while average adoption is 65%, there's a specific department — Finance — with 12% adoption. Other departments are at 70-80%. The Finance lead wasn't part of the original buying committee. What's your approach?",
    quote: "Adoption averages hide the department that's going to cost you the renewal.",
    options: [
      "Identify why Finance is the outlier: schedule a specific conversation with the Finance lead to understand their barriers.",
      "Focus on improving the 65% average — that's the headline metric.",
      "Ask your champion to drive Finance adoption internally — that's an internal change management issue.",
      "Report the 65% adoption and note the Finance outlier — if the customer is satisfied overall, it's acceptable."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"executionRisk":-6,"growth":5},
    explanation: "Departmental adoption outliers are rarely random — Finance at 12% usually means either the product doesn't fit their workflow, they weren't onboarded properly, or they have a competing tool. Each has a different solution. The right move is a direct conversation with the Finance lead — not routed through your champion — to understand the specific barrier. Champions can help facilitate but often don't have the technical or political influence to drive adoption in departments they don't own. Average adoption can look acceptable while a key department's resistance quietly becomes the renewal story.",
    framework: "Segment-Level Adoption: averages mask outliers that determine renewal outcomes.",
    principle: "The department with the lowest adoption is the department that decides your renewal.",
    traps: [
      "Average-focused reporting — misses the outlier that's going to be the renewal conversation",
      "Champion-routed fix — champions rarely have adoption influence across departments they don't own",
      "Accepting 65% with a noted outlier — documents the problem without solving it"
    ]
  },
  {
    id: "CSM-PA04",
    category: "Product Adoption",
    difficulty: 1,
    scenario: "A customer's adoption has plateaued at 45% for 60 days despite standard onboarding. You've done training sessions and sent 3 how-to emails. What's your diagnostic hypothesis and next move?",
    quote: "When the same intervention produces the same result, try a different diagnosis.",
    options: [
      "Run another round of training — some users need more repetition.",
      "Do a live workflow audit: observe how users are actually working and identify adoption barriers in context.",
      "Escalate to your manager — the adoption problem may require a product fix.",
      "Offer to expand the onboarding scope at no charge to drive better engagement."
    ],
    correct: 1,
    consequences: {"customerTrust":8,"executionRisk":-7,"growth":5},
    explanation: "Training and emails have been tried and haven't worked. The same approach repeated is not a strategy — it's persistence without learning. The right next step is a live workflow audit: sit with actual end users (or ask them to walk you through their workday) and find where the product fails to fit. Is it too many clicks? Does it break at a specific workflow step? Is there a competing tool they prefer? Observational research surfaces blockers that users can't articulate in a survey. More training without this diagnosis will produce the same plateau.",
    framework: "Adoption Diagnostics: when standard interventions fail, observe before prescribing.",
    principle: "Users who don't adopt aren't bad at following instructions — they're telling you something about your product.",
    traps: [
      "More training — same intervention, same result",
      "Immediate escalation — you haven't yet done the diagnosis that would make an escalation useful",
      "Expanded onboarding scope — generous but doesn't address the unknown root cause"
    ]
  },
  {
    id: "CSM-PA05",
    category: "Product Adoption",
    difficulty: 3,
    scenario: "A customer's power users are heavily engaged, but 70% of their user base has logged in fewer than 3 times in 90 days. The power users are loud advocates — they love the product. But the broader adoption is weak. How do you frame this for your renewal conversation?",
    quote: "Power user love is a sales asset. Broad adoption is a renewal asset.",
    options: [
      "Lead with the power user advocacy — their enthusiasm demonstrates product value.",
      "Focus renewal conversations on the power users' use cases and avoid the broader adoption discussion.",
      "Be transparent with the customer: share both the power user engagement and the broad adoption data, and collaboratively address what's driving the gap.",
      "Attribute the low broad adoption to change management challenges on the customer's side."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"executionRisk":-7,"growth":5},
    explanation: "Transparent renewal conversations outperform cherry-picked ones in long-term account health. Customers who buy renewals without understanding their adoption reality churn in the next cycle anyway — now with distrust. The right approach is to share both data points and use the contrast to drive a joint improvement plan: what would convert the 70% from occasional users to regular ones? This positions you as a partner in their success rather than a vendor protecting their number. Power user advocacy is useful supporting evidence but can't substitute for enterprise-wide adoption in a large account renewal.",
    framework: "Renewal Transparency: surface adoption gaps before renewal, not at the next renewal.",
    principle: "A customer who renews without knowing their adoption gap will churn with it.",
    traps: [
      "Leading with power user advocacy only — selective framing that backfires when the customer eventually sees the full picture",
      "Avoiding the broad adoption topic entirely — the conversation you avoid in year 1 becomes the reason they don't renew in year 2",
      "Blaming change management — accurate but blame never helps; joint ownership does"
    ]
  },
  {
    id: "CSM-PA06",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "A newly onboarded customer shows strong login adoption — 85% of users are logging in weekly — but usage data reveals zero engagement with your analytics and reporting features, which are the highest-value and highest-ROI components of the platform. They're using it as a data entry tool. What's your concern and approach?",
    quote: "High login rates with low feature depth is a renewal waiting to be questioned.",
    options: [
      "Be satisfied — 85% login adoption is strong; customers adopt advanced features at their own pace.",
      "Run an analytics and reporting training session immediately to drive feature awareness.",
      "Escalate to your product team that the analytics features may have a UX problem affecting adoption.",
      "Bring the gap to your champion: 'Your team is actively using the platform, which is great — but the analytics layer, where most customers see the biggest ROI, hasn't been touched yet. Can we look at what it would take to get your team using it?'"
    ],
    correct: 3,
    consequences: {"customerTrust":8,"executionRisk":-7,"growth":6},
    explanation: "Customers who use a platform as a data entry tool but never touch the high-value analytics layer will experience renewal as 'we paid a lot for something we use like a spreadsheet.' This is a proactive CSM risk — you need to address it before the customer forms that opinion. The right move is to name the gap to your champion in a way that's framed around opportunity, not criticism: 'Here's what you're not getting, here's what you could be getting, let's plan for it together.' Training alone without the business context doesn't create urgency. Escalating to product assumes it's a product problem when it's likely an adoption and change management one.",
    framework: "Depth vs. Breadth Adoption: high breadth + low depth is not a healthy adoption profile.",
    principle: "A customer who logs in but doesn't use the value engine will ask at renewal why they paid for it.",
    traps: [
      "Satisfaction with login rate — logins without value usage are a churn setup, not a success story",
      "Immediate training — without the 'why this matters for your business' framing, training on features they haven't asked about doesn't convert",
      "Product escalation — likely not a product problem; most analytics adoption gaps are change management"
    ]
  },
  {
    id: "CSM-PA07",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "Six months post-launch, overall adoption is 80%. But you notice finance users account for only 5% of expected usage — consistently below every other role type. The gap is unexplained and your primary champion is in operations. What's your next step?",
    quote: "Adoption gaps by role are almost never random.",
    options: [
      "Request a session specifically with the finance team lead — not your champion — to understand their workflow, what they're using instead of your product, and where it isn't fitting.",
      "Send targeted training content to finance users to improve their awareness of relevant features.",
      "Flag the finance adoption gap to your product team as potential evidence of an unsupported workflow.",
      "Include the finance adoption gap in the next QBR agenda and let the customer's team address it internally."
    ],
    correct: 0,
    consequences: {"customerTrust":8,"executionRisk":-6,"growth":5},
    explanation: "A role-specific adoption gap that persists for 6 months has a structural cause — either the product doesn't fit the finance team's workflow, they weren't properly onboarded, they have a competing internal tool, or nobody made the case for why they should change their process. Your champion in operations may not have visibility into or authority over the finance team's behavior. The right move is a direct conversation with the finance team lead — bypassing your champion on this specific issue — to understand the barrier from their perspective. Training content doesn't surface structural barriers. Product escalation is premature before the discovery conversation.",
    framework: "Role-Specific Adoption: champion visibility doesn't extend to departments they don't own.",
    principle: "Every adoption gap by role has a specific cause. Find it at the source.",
    traps: [
      "Targeted training without discovery — treats an unknown root cause with a known remedy",
      "Product escalation before discovery — you don't yet know if this is a product problem or a change management one",
      "QBR delegation — puts an internal adoption problem in your champion's hands when they may lack the context or authority to fix it"
    ]
  },
  {
    id: "CSM-PA08",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "You manage 25 accounts and are asked to improve adoption across your book of business. You have limited time. What's the highest-leverage approach to prioritizing your adoption efforts?",
    quote: "Adoption effort spread equally produces equal mediocrity everywhere.",
    options: [
      "Run a standard adoption campaign — training emails and check-ins — across all 25 accounts simultaneously.",
      "Segment your book by adoption health and business impact: concentrate intensive effort on the accounts where adoption improvement is most critical to renewal and expansion outcomes.",
      "Ask your product team to improve the UI to make adoption easier across the board without requiring manual intervention.",
      "Identify your highest-adoption accounts and run a webinar to share their best practices with the rest of your book."
    ],
    correct: 1,
    consequences: {"executionRisk":-7,"growth":7,"customerTrust":6},
    explanation: "Adoption effort distributed equally across 25 accounts means no account gets enough attention to actually change. The highest-leverage approach is segmentation: which accounts have the biggest adoption gap AND the highest stakes if that gap isn't closed? Yellow-health accounts with renewals in 6 months and high ARR are where adoption work is most directly tied to revenue outcomes. Green accounts can receive lighter-touch support. The accounts where adoption improvement would unlock expansion are also high-priority. Blanket campaigns produce marginal lifts everywhere but rarely turn at-risk accounts. Product UI requests are long-cycle and don't address your immediate book needs.",
    framework: "Adoption Portfolio Management: prioritize where the impact of closing the gap is greatest.",
    principle: "You have enough time to move the accounts that matter. Not all of them at once.",
    traps: [
      "Equal effort across all accounts — produces uniform mediocrity rather than concentrated impact",
      "Product UI request as the strategy — long-cycle and doesn't address your immediate portfolio risk",
      "Best practices webinar — useful supplementary content but doesn't address individual account barriers"
    ]
  },
  {
    id: "CSM-PA09",
    category: "Product Adoption",
    difficulty: 2,
    scenario: "A customer's adoption has grown steadily to 72% over 6 months. But reviewing their usage, you see they use only one of three major feature areas deeply — the others are untouched. They're unaware the other two exist. How do you approach this?",
    quote: "Customers who use one feature area deeply are customers who haven't seen the rest of the platform yet.",
    options: [
      "Send a product features overview document and relevant training links for the unexplored areas.",
      "Add the unexplored features to the next QBR agenda as a live demonstration.",
      "Tie the unexplored features to the customer's current business goals: 'You've gotten strong results from [Feature A]. I want to show you something related — we have a capability that directly addresses [current process they mentioned] and I don't think you've seen it yet.'",
      "Flag the unexplored feature areas internally as an upsell opportunity for the account team to pursue separately."
    ],
    correct: 2,
    consequences: {"customerTrust":9,"growth":7,"executionRisk":-4},
    explanation: "Introducing unexplored feature areas is most effective when framed as a natural extension of what the customer is already doing well — not as a product demo or an upsell pitch. Connecting the feature to a business problem they've mentioned in conversation ('you told me your team spends hours on X — this feature addresses that') converts a product education moment into a partnership moment. Sending documents and training links puts the burden on the customer to connect the dots themselves. A QBR demo is valid but can feel formal; a conversational tie-in feels like genuine attention to their business.",
    framework: "Adjacent Adoption: connect features to known business problems, not to the product catalog.",
    principle: "A feature introduced in context of a customer's goal lands 10x better than one introduced in context of your product.",
    traps: [
      "Document and training links — passive content that customers rarely self-convert from",
      "QBR demo — valid but more formal and less immediate than a contextual conversation",
      "Internal upsell flag only — misses the adoption opportunity and defers to commercial motion when CSM-led adoption is more natural"
    ]
  },
  {
    id: "CSM-PA10",
    category: "Product Adoption",
    difficulty: 3,
    scenario: "You've worked hard on a customer's adoption challenges, improving from 25% to 55% over 4 months. The renewal is 6 weeks away and the customer says they appreciate the progress but '55% isn't where we expected to be at this point.' How do you frame the renewal conversation?",
    quote: "Trajectory is more honest than a snapshot — and more compelling.",
    options: [
      "Anchor the renewal conversation on non-adoption metrics where performance is stronger.",
      "Offer a discount to reflect the unmet adoption expectations and reduce friction on the renewal.",
      "Present a case study of a similar customer who faced the same adoption ramp and eventually succeeded.",
      "Lead with the progress trajectory and commit to a specific roadmap for reaching the customer's adoption target — don't just defend the current number."
    ],
    correct: 3,
    consequences: {"customerTrust":9,"growth":7,"executionRisk":-6},
    explanation: "A customer whose expectation was higher than current performance needs two things: validation that their expectation is reasonable, and a credible plan for getting there. The right renewal frame is: 'Going from 25% to 55% in 4 months shows significant momentum — here's specifically what drove the improvement, here's what we've diagnosed as the remaining barriers, and here's the 90-day plan to get you to 80%.' This is more compelling than any discount or a case study, because it shows you understand their situation specifically and have a plan. Pivoting to non-adoption metrics is avoidance. A discount signals you don't believe in your own roadmap.",
    framework: "Progress Narrative: momentum + plan is a stronger renewal argument than a current-state defense.",
    principle: "Customers renew on confidence in the future, not just satisfaction with the past.",
    traps: [
      "Metric pivot away from adoption — the customer named the concern; redirecting signals you can't address it",
      "Discount for unmet expectations — signals doubt in your ability to deliver rather than commitment to do so",
      "Case study framing — helpful context but doesn't address their specific plan, which is what they need to see"
    ]
  },
]
