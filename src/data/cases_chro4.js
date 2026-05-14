export const CASES_CHRO4 = [
  {
    "id": "CHR-LD01",
    "category": "Learning & Development",
    "difficulty": 1,
    "scenario": "You have $50,000 in annual L&D budget for 90 employees across your B2B SaaS company. A department head requests all-hands leadership training at $18,000 for a 1-day external facilitator event. Separately, an individual contributor has applied for a $2,200 technical certification directly tied to their current project. Two first-time managers hired in the past 3 months have been flagged by HR as needing management fundamentals training ($3,000 each for a 4-week online program). You need to allocate the budget.",
    "options": [
      "Fund the all-hands leadership training — company-wide programs have the broadest impact per dollar and the department head's support gives the program organizational backing.",
      "Fund the two new manager programs ($6,000 total) and the technical certification ($2,200), and defer the all-hands training — prioritize targeted development with measurable role-specific impact.",
      "Fund only the all-hands training and defer the certifications and management programs — one cohesive company-wide initiative is better than fragmented individual programs.",
      "Allocate $9,200 to the three targeted programs and reserve the remaining $40,800 in a central pool for Q2–Q4 requests — avoid committing too much budget in Q1."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 7,
      "growth": 5,
      "executionRisk": -3
    },
    "explanation": "An $18,000 1-day all-hands event has the lowest per-participant behavioral impact in L&D — one-day events are high-visibility but low-transfer. Leadership awareness from a single day is rarely retained without follow-up reinforcement. The new manager programs address a specific, acute need: two first-time managers who have been identified as needing support within their first 90 days. Unaddressed management gaps in the first 3 months produce team-level problems within 6–12 months. The technical certification is high-ROI per dollar — it directly enables the employee's current work and costs $2,200. The combined $8,200 for three targeted, high-transfer programs produces more behavioral change per dollar than a single all-hands day, while the remaining $41,800 is available for high-impact investments in subsequent quarters.",
    "framework": "L&D ROI Prioritization — high-transfer learning (role-specific, applied, multi-session) produces more behavioral change per dollar than high-visibility learning (all-hands, 1-day events). Budget allocation should prioritize transfer rate over breadth of reach.",
    "principle": "Spend L&D budget where the training-to-behavior transfer rate is highest — a $3,000 program that changes how a manager leads 8 people has more organizational impact than an $18,000 event that changes how 90 people think for one day.",
    "traps": [
      "All-hands events feel high-impact because they are visible and universally attended, but visibility is not the same as transfer — one-day leadership awareness sessions rarely produce behavior change without reinforcement.",
      "Deferring new manager development in the first 90 days allows management patterns (good and bad) to solidify before any intervention is applied — early management is the highest-leverage intervention window.",
      "Reserving most of the budget in a central pool sounds prudent but often results in year-end spending on whatever is available rather than strategic allocation to actual needs."
    ]
  },
  {
    "id": "CHR-LD02",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "Your company ran a 2-day management skills workshop for 12 managers 3 months ago. Post-training satisfaction was 85% — participants rated the content as relevant and the facilitator as excellent. Three months later, your Q3 engagement survey shows manager effectiveness scores are statistically unchanged versus Q2. One-on-one interviews with direct reports of trained managers show similar themes: \"My manager talks about what they learned but still runs meetings the same way.\" You have $12,000 remaining in the L&D budget and another workshop cohort is being planned.",
    "options": [
      "Cancel the second cohort — the training is not producing behavior change and repeating it is a poor use of budget.",
      "Survey the 12 trained managers to identify which specific skills they are struggling to apply, then run targeted micro-training sessions on those specific topics.",
      "Replace the workshop format with a 3-month online management cohort program — the 2-day format is likely too short to produce lasting behavior change.",
      "Add a post-training reinforcement structure to the second cohort: 90-day coaching check-ins, peer learning circles, and manager-observed behavior scorecards tied to the workshop competencies."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 7,
      "growth": 5,
      "executionRisk": -4
    },
    "explanation": "Cancelling the second cohort treats the training design as the failure when the problem is post-training support — the satisfaction scores show the content was well-received, which means the training itself is not the problem. Replacing the format with a 3-month online cohort may improve transfer, but without addressing the post-training application gap, a longer format with the same lack of reinforcement will produce the same result. Surveying for skill gaps is valuable research but is a diagnostic step, not a corrective one. The reinforcement structure addresses the documented failure mode directly: the direct report interviews confirm managers learned the concepts but are not applying them, which is a classic transfer failure caused by the absence of reinforcement. Peer circles, coaching check-ins, and behavioral scorecards create the accountability and application scaffolding that converts workshop learning into on-the-job behavior.",
    "framework": "Training Transfer Model — behavior change after training requires three conditions: relevant content (confirmed: 85% satisfaction), opportunity to practice (partially met), and accountability reinforcement (absent). When transfer fails, the missing element is almost always reinforcement, not content.",
    "principle": "Post-training reinforcement structures produce more behavior change from existing content than redesigning the training itself — fix the transfer infrastructure before redesigning the program.",
    "traps": [
      "Cancelling a high-satisfaction training because engagement scores did not move misdiagnoses the failure — the content was received, the problem is that there was no system for applying it.",
      "Redesigning the format extends the timeline and changes the variable that was not the problem — a 3-month online cohort without reinforcement will also fail transfer.",
      "Surveying for skill gaps is useful but is a planning input, not a remediation action — it delays the corrective response by one additional cycle."
    ]
  },
  {
    "id": "CHR-LD03",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "You want to launch a mentorship program at your 110-person SaaS company. Senior employees have indicated willingness to mentor but say they cannot commit to structured monthly sessions. Junior employees want mentorship but report that previous attempts at formal scheduling felt \"forced and awkward.\" The company has tried two formal mentorship programs in the past 4 years — both failed within 3 months for the same reasons: low session completion rates and participants dropping out. You need a design that actually works this time.",
    "options": [
      "Launch a cohort-based structured program with defined monthly themes and assigned mentor-mentee pairs — prior failures were due to poor structure, not too much structure.",
      "Launch an opt-in informal mentorship marketplace: build a directory of senior mentors with their areas of expertise, and let junior employees schedule 30-minute async or sync conversations on demand, without recurring commitments.",
      "Hire an external coaching firm to run a formal 6-month leadership development program targeting junior employees — outsource the facilitation to remove the scheduling burden from senior staff.",
      "Run a skills-based peer mentorship model: identify specific skill gaps across the junior employee population, pair people based on complementary expertise, and structure sessions around concrete skill transfer rather than career mentorship."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 8,
      "growth": 5,
      "executionRisk": -3
    },
    "explanation": "The prior failures provide a clear diagnostic: forced structure and scheduled sessions are the failure modes, not insufficient structure. Adding more structure to a program that failed twice from over-structure is the definition of trying the same thing and expecting different results. An external coaching firm removes scheduling burden from seniors but does not give junior employees access to the institutional knowledge and network that makes mentorship valuable. Peer mentorship for skill transfer is valuable but is not the same as mentorship — it addresses skills, not career navigation, sponsorship, or organizational learning. The on-demand marketplace model removes the structural friction that killed the previous programs: seniors browse available rather than committed, juniors schedule when they have a specific question rather than showing up to fill a calendar slot.",
    "framework": "Demand-Driven Mentorship Design — programs that match willing mentors with motivated mentees on a demand basis have consistently higher completion rates than programs that assign pairs and require scheduled commitments. Frequency follows motivation; motivation does not follow frequency.",
    "principle": "Design mentorship programs around the actual behavior of mentors and mentees, not the behavior you wish they had — if they don't show up for structured sessions, build a structure that does not require scheduled showing up.",
    "traps": [
      "Diagnosing the prior failures as insufficient structure is the most intuitive fix but is exactly backward — both failures involved structured programs; the design must break the pattern.",
      "External coaching provides professional development but does not connect junior employees to organizational context, sponsor networks, or the internal knowledge that makes mentorship uniquely valuable.",
      "Skills-based peer mentorship is a different product — it addresses a different need and will not satisfy the mentorship demand from junior employees who want access to senior perspective."
    ]
  },
  {
    "id": "CHR-LD04",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "Your engineering team of 18 has proposed a \"learning day\" once per month — one full working day per engineer for unstructured exploration of new technologies, personal projects, or online courses. The CTO is supportive and estimates the total cost at approximately $18,000/month in foregone output time. The CEO is skeptical: \"We're a 90-person Series B company, not Google. We can't afford to lose 18 engineer-days per month.\" You are the CHRO. The engineering team has said informally that learning time is a significant retention factor for them.",
    "options": [
      "Endorse the full learning day with a 3-month pilot and a defined success metric: measure engineer NPS, voluntary attrition, and technology debt reduction before and after the pilot.",
      "Propose a structured version: one half-day per month per engineer (9 engineer-days instead of 18), with engineers sharing a brief monthly summary of what they explored — demonstrating output, not just consumption.",
      "Support the CEO's position — at Series B, execution velocity outweighs developer exploration time and the foregone output cost is real.",
      "Offer a compromise: 4 learning days per year (quarterly) rather than monthly — this significantly reduces the cost while preserving the signal that the company values development."
    ],
    "correct": 0,
    "consequences": {
      "teamMorale": 9,
      "growth": 5,
      "executionRisk": -2,
      "strategicPosition": 4
    },
    "explanation": "The CEO's concern is real but it frames the decision as pure cost rather than investment with measurable return. A 3-month pilot with defined success metrics converts the debate from a values argument (exploration vs. execution) to a business outcome question (does this improve retention and velocity or not?). Supporting the CEO's position without a counter-proposal misses the CHRO's role, which includes surfacing retention risk — and the engineering team has named learning time explicitly. A half-day version with mandatory summaries converts learning time into a reporting obligation, which degrades its value to engineers as genuine exploration. Quarterly learning days send the right principle but dilute the signal enough that engineers will not update their retention decision on 4 days per year.",
    "framework": "Pilot-Based L&D Investment — when a development initiative has uncertain ROI, design a time-bounded pilot with pre-defined measurement criteria. A 3-month pilot converts a values debate into a data-generation exercise and gives skeptics a rational off-ramp if the data is positive.",
    "principle": "Learning time for engineers is a retention investment — measure it like one. Design a pilot with a retention metric, not just a cost metric, and let the data decide.",
    "traps": [
      "Supporting the CEO's position without a data-gathering proposal means the company will continue to debate the question without evidence, and the engineers' retention signal goes unaddressed.",
      "Half-day with mandatory summaries undermines the developmental intent — exploration that must be justified is no longer exploration, and engineers recognize the difference.",
      "Quarterly learning days are too infrequent to generate enough data for a pilot evaluation and are not compelling enough to change how engineers think about the company's commitment to their development."
    ]
  },
  {
    "id": "CHR-LD05",
    "category": "Learning & Development",
    "difficulty": 3,
    "scenario": "You have identified 12 high-potential employees across product, engineering, and customer success. You want to invest in a HiPo development program. Option A: an internal program with job rotations, stretch assignments, and monthly coaching sessions with two senior leaders — total cost $12,000, 12-month timeline. Option B: sponsor 4 employees (one per quarter) to an external 5-day leadership program at $8,000 each — total cost $32,000 over the year. Option C: no formal program — flag the 12 HiPos to their managers and trust natural development opportunities to emerge. You have $20,000 in HiPo development budget.",
    "options": [
      "Implement Option A — the internal program develops all 12 HiPos at $1,000 per person and builds cross-functional relationships across the cohort.",
      "Implement Option B within budget — select the 2 highest-potential HiPos for the external program ($16,000), and use the remaining $4,000 for internal stretch assignments for the other 10.",
      "Implement Option C — trust managers to develop their HiPo direct reports through natural opportunities. Formal programs add overhead without meaningfully improving outcomes.",
      "Implement Option A ($12,000) and use the remaining $8,000 to fund external program spots for 1 employee who is at highest flight risk — combine both approaches within budget."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 8,
      "growth": 7,
      "strategicPosition": 6,
      "executionRisk": -3
    },
    "explanation": "Option C (no formal program) is not a development strategy — it is wishful thinking. Research consistently shows that \"flagging HiPos to managers\" without structured programming produces no systematic outcome: managers develop their HiPos inconsistently, cross-functional exposure does not happen organically, and HiPos who are flagged but given nothing formal often increase their external job searching because they feel the company talked about their potential without investing in it. Option B alone excludes 10 of 12 HiPos from any program and uses $16,000 on 2 people. Option A alone serves all 12 at $12K but misses the opportunity to provide a high-value external program for the highest-risk employee. The combined approach serves all 12 through the internal program while using the remaining $8K for maximum retention leverage — one external program spot for the HiPo most likely to leave without visible investment.",
    "framework": "HiPo Development Portfolio — HiPo programs are most effective when they combine breadth (all identified HiPos receive a development signal) with targeted depth (highest-risk HiPos receive accelerated investment). Budget allocation should serve the broadest population first, then deploy surplus on highest-leverage individuals.",
    "principle": "Flagging HiPo status without a program accelerates attrition — employees who are told they are high-potential and then given nothing tangible read the gap as a credibility signal about whether the company will ever act on the promise.",
    "traps": [
      "Concentrating both external program spots on 2 of 12 HiPos leaves 10 people identified as high-potential with no development investment — the implicit message is that HiPo status is recognition, not a development commitment.",
      "The \"trust natural development\" option is the most budget-friendly but produces the worst outcome for cross-functional development, consistent HiPo treatment, and retention.",
      "Avoiding the external program entirely to save cost ignores that external experiences (peer networks, external perspective, cohort learning) produce outcomes the internal program cannot replicate for the highest-potential employees."
    ]
  },
  {
    "id": "CHR-LD06",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "A manager requests that their direct report — a strong senior analyst — be enrolled in a $4,500 executive coaching program. The manager describes it to HR as a \"communication issues intervention\" and says the employee \"struggles with executive presence and stakeholder communication.\" The employee has not been told about the coaching request. They have strong performance ratings on technical output but 360 feedback from peers shows some communication friction. The manager frames it as a performance concern rather than a development investment.",
    "options": [
      "Approve the coaching program as requested — the manager has identified a real gap and coaching is the right intervention for executive presence.",
      "Decline the request — coaching initiated without the employee's knowledge or buy-in produces low ROI, and framing development as a performance fix signals the employee is deficient.",
      "Approve the coaching program contingent on the employee being involved in the framing: introduce it as a sponsored development opportunity, not a performance intervention, and give the employee input on the coach selection.",
      "Direct the manager to have a direct feedback conversation with the employee about the communication gaps before any coaching investment — coaching without clear feedback is out of sequence."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 8,
      "growth": 5,
      "executionRisk": -3
    },
    "explanation": "Approving without changing the framing produces a coaching engagement where the employee is told they were \"referred for coaching\" without context — they will discover the performance framing through the intake process and the damage to trust will be significant. Declining entirely misses a real development opportunity for someone with a known gap — the 360 feedback is consistent, the manager's concern is legitimate, and executive coaching is the right tool for communication and executive presence development. Requiring the feedback conversation first is the right sequence in a pure feedback model, but the CHRO should not send the manager back without also correcting the framing problem — the coaching will still be received as a punitive intervention if the manager's frame doesn't change. Approving with a reframe as a sponsored development opportunity — and giving the employee input on coach selection — converts a potentially punitive process into a genuine investment signal.",
    "framework": "Coaching as Development vs. Remediation — executive coaching produces high ROI when the coachee has buy-in, understands the purpose, and chooses to engage. Coaching as a mandated performance intervention is experienced as a warning signal and produces low engagement and low transfer.",
    "principle": "Coaching without the coachee's informed buy-in is not coaching — it is surveillance with a coach. Reframe it as a development investment and involve the employee from the start.",
    "traps": [
      "Approving the coaching without addressing the framing produces a coaching engagement the employee will experience as a veiled performance warning — they will disengage, the coach will struggle, and the company will spend $4,500 on theater.",
      "Declining entirely ignores that the development need is real and documented in 360 data — the answer is not no coaching but better-designed coaching.",
      "Sending the manager back to deliver feedback first without also correcting the coaching framing risks a well-intentioned feedback conversation that is immediately followed by \"and you're being enrolled in a coaching program\" — which combines the worst of both approaches."
    ]
  },
  {
    "id": "CHR-LD07",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "Your company doubled from 45 to 90 employees in 4 months and you are onboarding 15 new hires in a single month. Your current onboarding program is a 3-day orientation designed for 2–3 people at a time — it runs on slide decks, a document repository, and 1:1 manager introductions. No structured peer integration, no hands-on practice, and no onboarding assessment at 30 or 90 days. You need to scale onboarding for 15 without reducing quality.",
    "options": [
      "Run the existing 3-day program in two parallel groups of 7–8 — double the delivery without changing the content, and hire a temporary HR coordinator to manage logistics.",
      "Hire an onboarding consultant to run the 15-person cohort — outsource the facilitation while you redesign the internal program for future cohorts.",
      "Delay onboarding for 2 weeks to redesign the program — a poor onboarding experience for 15 people simultaneously creates a negative signal at the exact moment these employees are forming their opinion of the company.",
      "Redesign the onboarding program before running the cohort: compress the informational slide content into a pre-boarding LMS track (completed before Day 1) and use the 3 in-person days entirely for structured peer integration, role simulation, and Q&A with senior leaders."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 8,
      "growth": 6,
      "executionRisk": -4
    },
    "explanation": "Running the existing program in parallel groups scales logistics but does not fix the content problem — a program that is mostly slides and documents has low information transfer and no hands-on practice, and running it twice does not make it better. Delaying by 2 weeks creates a gap where 15 new hires have started but have no structured integration experience — this is worse than a flawed program. An onboarding consultant can run the current program well, but it is still the same low-quality program at consultant rates. Restructuring the program by moving informational content into a pre-boarding LMS track is the correct intervention: it takes the slide-heavy days and converts them from passive information delivery to applied learning. The 3 in-person days become genuinely productive — peer connection, practice, and senior-leader access — rather than a firehose of documents.",
    "framework": "Onboarding Content Architecture — separate informational content (company history, tools, process documentation) from experiential content (peer integration, practice, culture exposure). Informational content belongs in async pre-boarding; experiential content requires in-person time and cannot be scaled by simply repeating slides.",
    "principle": "Scaling onboarding for large cohorts means removing the bottleneck, not multiplying it — move information delivery to async pre-boarding so that in-person time serves the purposes that only in-person can serve.",
    "traps": [
      "Doubling the delivery of a poor program doubles the poor experience — if the program does not transfer knowledge effectively at 3 people, it will not do so at 8.",
      "Delaying for a program redesign is operationally tempting but leaves new hires in a structural vacuum during their highest-engagement window.",
      "Outsourcing facilitation buys time but perpetuates the content architecture problem — a consultant running the same slide-heavy program produces the same low-transfer outcome at higher cost."
    ]
  },
  {
    "id": "CHR-LD08",
    "category": "Learning & Development",
    "difficulty": 3,
    "scenario": "A senior engineer with 4 years at your company and high performance ratings wants to transition into product management. There is no open PM role on your team of 6 PMs. Their engineering manager does not want to lose them and has hinted they may quietly discourage the transition. The employee has explicitly told you: \"If I can't start moving toward PM within 6 months, I'm going to look elsewhere.\" You are the CHRO. The Head of Product is open to the idea but says \"we don't have room right now.\"",
    "options": [
      "Tell the employee that career transitions require an open role and that you will flag them for the next PM opening — there is nothing else the company can do without a vacancy.",
      "Create a formal internal transition plan: assign the engineer a part-time PM project for the next 6 months (scoped with the Head of Product), define specific PM competencies to demonstrate, and commit to a formal role review at the 6-month mark.",
      "Facilitate a transfer conversation between the engineer, their manager, and the Head of Product — the CHRO's role is to surface the conversation, not design the outcome.",
      "Offer the engineer a lateral move to a technical PM or solutions architect role — a bridge role that uses their engineering skills while exposing them to product thinking without requiring a full PM slot."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 9,
      "growth": 6,
      "strategicPosition": 5,
      "executionRisk": -4
    },
    "explanation": "Telling the employee to wait for a vacancy is effectively accepting the departure — a 4-year, high-performing senior engineer with a 6-month timeline and no visible progress will leave. A three-way facilitation conversation surfaces the tension but does not produce a plan — if the manager is already quietly discouraging the transition, a conversation without structure does not change the power dynamic. Offering a bridge role is creative but may not satisfy the employee's explicit desire to be on a PM trajectory, and technical PM roles are often perceived as a consolation, not a path. The formal transition plan is the strongest response: it gives the employee a 6-month structured experience with PM work, produces evidence of PM competency or lack thereof, and creates a concrete organizational commitment to evaluate the transition. It also removes the manager's ability to quietly block the process by making the plan visible and HR-endorsed.",
    "framework": "Internal Career Transition Design — when a high-performer names a transition timeline, the retention risk is real and time-bound. A structured transition plan with a defined review checkpoint converts an existential \"will you ever let me do this\" into a concrete \"here is your path to prove you can.\"",
    "principle": "When a high-performer gives you a 6-month ultimatum on a career transition, a structured plan with a defined outcome review is the only response that has a chance of keeping them — a facilitated conversation is not a plan.",
    "traps": [
      "Waiting for a vacancy treats the engineering talent pool as infinitely patient — it does not account for the fact that the employee will leave before a PM vacancy appears if there is no visible progress.",
      "A three-way facilitation conversation without a structured outcome depends on the engineering manager's cooperation, which the scenario has already flagged as unreliable.",
      "Bridge roles are appropriate for employees who are uncertain about the transition — for an employee who is certain and has a deadline, offering a consolation path is likely to accelerate the departure."
    ]
  },
  {
    "id": "CHR-LD09",
    "category": "Learning & Development",
    "difficulty": 2,
    "scenario": "Three months after launching a new Learning Management System with 500 curated courses, only 12% of your 100 employees have completed any voluntary course. Mandatory compliance training has 95% completion. The content has been positively reviewed by the employees who have used it. Manager feedback is neutral — \"I don't really think about it.\" The LMS platform has solid usage analytics. You have $8,000 remaining in the L&D budget for Q4.",
    "options": [
      "Launch a manager-led activation campaign: brief all managers on 3 recommended courses relevant to their team's current work, and ask each manager to assign one course to their team in Q4 with a discussion at their next team meeting.",
      "Mandate a minimum of 2 course completions per quarter for all employees — voluntary adoption has failed; mandatory access is the only reliable driver of completion.",
      "Redesign the course catalog — 500 courses is overwhelming. Curate a \"Top 10\" per role family and surface those prominently in the LMS as the default landing page.",
      "Offer a gamified incentive: employees who complete 3 courses in Q4 receive a $50 learning stipend or are entered into a prize draw — completion rewards convert voluntary behavior into motivated behavior."
    ],
    "correct": 0,
    "consequences": {
      "teamMorale": 7,
      "growth": 5,
      "executionRisk": -3
    },
    "explanation": "Mandating voluntary development content is self-defeating — it converts a development culture signal into a compliance burden, which is exactly what it looks like when mandatory courses hit 95% and voluntary courses hit 12%. Catalog redesign addresses discoverability but the manager feedback (\"I don't really think about it\") is the root cause — employees follow their manager's attention. Incentive programs produce a temporary spike in completion that reverts once the incentive cycle ends, and $50 for 3 courses is unlikely to change behavior for employees who are not already motivated by the content. The manager-led activation campaign addresses the root cause: manager attention is the primary driver of employee development behavior. Briefing managers on 3 specific courses and asking them to facilitate one at a team meeting embeds the LMS into existing workflows rather than competing with them.",
    "framework": "Manager-Mediated L&D Adoption — voluntary LMS adoption follows manager attention, not content quality. When managers are neutral about L&D tools, employees are neutral. When managers actively reference specific courses in context, employees complete them. The activation campaign is a manager behavior change campaign, not a marketing campaign.",
    "principle": "L&D adoption is a manager behavior problem — employees don't use development tools that their managers don't reference. Activate managers before redesigning the product.",
    "traps": [
      "Mandating voluntary development content destroys its developmental meaning — it joins the compliance module category in employees' mental models, which is the opposite of the culture you are trying to build.",
      "Catalog redesign addresses discoverability but not motivation — if employees are not motivated to search for courses at all, having fewer to choose from doesn't change completion behavior.",
      "Incentive programs produce short-term completion spikes without building habits — employees complete courses to earn the reward, not to develop, and completion rates revert to baseline when the incentive cycle ends."
    ]
  },
  {
    "id": "CHR-LD10",
    "category": "Learning & Development",
    "difficulty": 3,
    "scenario": "You need to transition 20 engineers from legacy on-premise infrastructure to cloud-native development over the next 6 months. The company's platform migration depends on this. Training options: (A) send all 20 engineers to a 5-day external bootcamp at $2,500 each ($50,000 total); (B) hire an L&D contractor to build a custom internal training curriculum and facilitate it over 10 weeks ($25,000, but 10-week timeline with delayed starts); (C) hire 2 cloud-native engineers at market rate as \"peer coaches\" embedded alongside the current team during a 6-month migration sprint (estimated $80,000 in total compensation for 6 months). You have $60,000 in L&D budget.",
    "options": [
      "Option A — send all 20 engineers to the bootcamp. Fastest to deploy, within budget, and puts all engineers through the same curriculum simultaneously.",
      "Option B — hire the L&D contractor. Custom content mapped to your actual stack is more relevant than a generic bootcamp, and the 10-week timeline fits within the 6-month migration window.",
      "Option C — hire 2 peer coaches. Embedded learning during live migration produces deeper transfer than training-then-apply, but it exceeds the L&D budget by $20,000.",
      "Option A for 10 engineers (the most advanced) to accelerate their ramp, and use $10,000 to bring in a cloud-native contractor for a 3-month knowledge transfer engagement for the remaining 10 — split-path approach within budget."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 8,
      "growth": 9,
      "cash": -4,
      "executionRisk": -6,
      "strategicPosition": 7
    },
    "explanation": "Bootcamp (Option A) produces training-then-apply: engineers learn cloud-native concepts for 5 days and return to a legacy codebase without live migration context — transfer rates for abstract technical skills without immediate application are low. Custom internal training (Option B) is relevant but the 10-week curriculum build time plus facilitation schedule creates a delay in a 6-month migration window, and an L&D contractor building content for your stack is not the same as an engineer who has executed the migration pattern before. The peer coach model costs $20,000 more than the L&D budget but produces the highest transfer rate: engineers learn cloud-native patterns in the context of real migration decisions, mistakes are caught in real-time, and the knowledge is embedded in the team permanently rather than delivered once and retained partially. The $20,000 budget exception is justified by the platform migration dependency — training failure here is a business-critical execution risk, not just an L&D miss.",
    "framework": "Learning-in-Context Principle — for complex technical skill acquisition tied to an active project, embedded peer coaching during live work produces higher transfer than any classroom format. The cost difference between training and coaching should be evaluated against the cost of failed or slow skill transfer on a business-critical project.",
    "principle": "When technical training is a prerequisite for a business-critical migration, the learning model that produces the highest transfer rate is the right one — optimize for transfer, not budget compliance.",
    "traps": [
      "Bootcamps for technical migration skills optimize for cost and speed of delivery but underperform on transfer — engineers leave with cloud-native awareness but lack the pattern-recognition that comes from applying it on real infrastructure.",
      "Custom internal content is more relevant than generic bootcamps but creates the same training-then-apply gap — relevance of content does not compensate for the absence of real-world application context during learning.",
      "The split-path approach divides the team into two different training experiences, creating a two-tier technical development gap within the engineering cohort precisely when you need consistent cloud-native competency across all 20 engineers."
    ]
  }
]
