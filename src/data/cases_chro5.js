export const CASES_CHRO5 = [
  {
    "id": "CHR-CE01",
    "category": "Culture & Engagement",
    "difficulty": 1,
    "scenario": "Your quarterly engagement survey shows overall satisfaction dropped from 74% to 61% in one quarter. The sharpest drop is in \"I believe leadership communicates openly\" — down from 68% to 44%. This is a 13-point overall drop in a single quarter, which is statistically significant. You present the results to the senior leadership team. What is your first move as CHRO?",
    "options": [
      "Schedule a company-wide town hall within two weeks where leadership presents the survey results, acknowledges the drop, and invites direct questions from employees.",
      "Commission a qualitative follow-up — focus groups or manager interviews — to diagnose the root cause before taking any visible action.",
      "Share the data with the CEO only and recommend a private leadership offsite to align on communication improvements before anything is communicated to staff.",
      "Immediately launch a \"communication improvement task force\" composed of mid-level managers and present it as HR's response to the survey."
    ],
    "correct": 0,
    "consequences": {
      "teamMorale": 10,
      "strategicPosition": 5,
      "executionRisk": -4
    },
    "explanation": "When trust in leadership communication is the primary driver of the drop, the most effective first move is visible, transparent action by leadership itself — not a back-channel diagnosis or a manager-led task force. A town hall within two weeks where leadership owns the data and invites questions directly addresses the root complaint: employees feel leadership does not communicate openly. Waiting for a qualitative follow-up before acting risks the perception that HR is managing the problem away from leadership. A private offsite delays visible action and signals more of the same closed-door behavior. A manager task force deflects ownership away from senior leadership, which is where the trust gap lives.",
    "framework": "Trust Recovery Model — when survey data points to a leadership communication gap, closing that gap requires the credibility of the same people who created it. HR can facilitate, but leaders must own the response visibly and quickly.",
    "principle": "When employees say leadership does not communicate openly, the remedy must be leadership communicating openly — not HR managing the optics of that failure.",
    "traps": [
      "Diagnosing before acting can feel rigorous but reads as avoidance to employees who already believe leadership does not listen.",
      "Keeping the data at the CEO level signals that HR is protecting leadership rather than advocating for employees.",
      "A task force composed of managers, not senior leaders, mismatches the level of accountability to the level at which trust was broken."
    ]
  },
  {
    "id": "CHR-CE02",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "An anonymous engagement survey contains the comment: \"Leadership makes big decisions and announces them to us. We have no voice.\" Twenty-three similar comments were submitted across different teams. When you bring this to the senior leadership team, the CEO responds: \"We communicate well — we have a monthly all-hands.\" How do you bridge the gap between leadership's perception and employee experience?",
    "options": [
      "Accept the CEO's framing and recommend increasing all-hands frequency to twice monthly, adding a Q&A segment, and closing out the feedback loop by reporting this at the next all-hands.",
      "Recommend an anonymous leadership feedback mechanism so the CEO and senior team can receive specific, individual feedback on communication style before designing a structural response.",
      "Present the CEO with a distinction between broadcasting and two-way communication — then propose structured input mechanisms (decision pre-reads, pulse check-ins, async feedback channels) for significant decisions.",
      "Convene a cross-functional employee advisory panel and give them a formal role in reviewing upcoming decisions before they are announced, then report the panel's existence at the next all-hands."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 9,
      "strategicPosition": 7,
      "executionRisk": -5
    },
    "explanation": "The CEO's rebuttal conflates communication volume with communication quality. The core employee complaint is not \"we don't hear from leadership\" — it is \"we have no voice in decisions.\" Increasing all-hands frequency addresses a symptom of a different problem. The CHRO's highest-leverage move is to reframe the diagnosis for the CEO: a monthly all-hands is a broadcast mechanism, not a voice mechanism. Structured input mechanisms — pre-reads shared before major decisions, async feedback channels, team-level check-ins — give employees actual influence, not just information. An anonymous 360 for leadership is useful but premature before the structural gap is addressed. An advisory panel is a valid long-term mechanism but is a slower intervention that delays change in the short term.",
    "framework": "Communication vs. Voice Framework — broadcasting information to employees is not the same as giving employees influence over decisions. Engagement drops when the gap between the two widens. Structural input mechanisms are the remedy for a voice deficit.",
    "principle": "When employees say they have no voice, adding more announcements does not solve the problem — adding upstream input does.",
    "traps": [
      "Accepting the CEO's rebuttal and increasing all-hands frequency validates a misdiagnosis and will produce the same survey result in the next quarter.",
      "Leading with anonymous 360 feedback for senior leaders can trigger defensiveness and create a political problem before you have built the case for structural change.",
      "An advisory panel is structurally sound but solves the problem at one degree of separation — most employees still have no individual voice unless the panel model cascades."
    ]
  },
  {
    "id": "CHR-CE03",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "Your company moved to full remote work 6 months ago. Engagement scores have dropped 12 points and collaboration scores are at an all-time low. The CEO wants to mandate 3 days in office per week. However, approximately 40% of your team was explicitly hired as \"remote-first\" and several employees relocated to other cities — including two employees in Cebu and one in Davao — based on that promise. How do you advise the CEO?",
    "options": [
      "Recommend a full return-to-office mandate for all employees with 30 days notice and a transition support package — relocation allowances for those who moved remotely — arguing that the business need for collaboration justifies the policy change and that financial support mitigates the personal impact.",
      "Address the collaboration and engagement gaps directly through structured virtual rituals, team working agreements, and remote-first tooling improvements rather than changing the location policy.",
      "Propose a 60-day hybrid pilot for Manila-based employees only — measure its impact on collaboration and engagement scores before expanding or formalizing a broader policy.",
      "Recommend a differentiated policy: employees hired as remote-first retain their remote status; employees hired before the remote policy are invited (not mandated) to return to office 2-3 days per week with team-level flexibility."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 8,
      "executionRisk": -6,
      "strategicPosition": 5
    },
    "explanation": "A blanket 3-day in-office mandate ignores a material difference in employee populations: those hired under a remote-first employment agreement have a reasonable reliance claim on that promise. Forcing them back risks voluntary attrition, potential constructive dismissal exposure, and reputational damage in the talent market. The differentiated policy acknowledges that not all employees are in the same position — it allows the company to test in-office collaboration benefits among the employees for whom no promise was made, without breaking commitments to those who were. A Manila-only pilot is directionally sound but narrows the feedback window. Addressing only the virtual collaboration infrastructure may solve process without solving the underlying connection deficit.",
    "framework": "Employment Promise vs. Business Need — when a policy change conflicts with an explicit employment representation, the legal and ethical obligation to honor that representation must be weighed against the operational benefit of uniformity. A segmented policy is often the right resolution.",
    "principle": "Policy changes that break explicit hiring promises create more attrition and legal risk than the collaboration benefit they recover.",
    "traps": [
      "A transition support package does not cure the employment contract breach — employees hired as remote-first have a reliance claim that financial mitigation does not extinguish, and the severance exposure on forced returns can exceed the collaboration benefit recovered.",
      "A pilot that excludes remote-first employees produces collaboration data with a survivorship bias — the most flexible employees are not representative of your full workforce.",
      "Investing only in remote tooling without addressing the social connection deficit may improve process scores but will not recover the relationship-quality dimension of collaboration."
    ]
  },
  {
    "id": "CHR-CE04",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "Your manager-driven recognition program shows that 60% of monthly \"kudos\" come from just 3 of 18 managers. The other 15 rarely or never use the system. Employee feedback reads: \"Only some teams feel recognized.\" Engagement data confirms a correlation between team recognition frequency and engagement scores. You need to fix the program. What is your approach?",
    "options": [
      "Replace the manager-only system with a peer-to-peer recognition platform that allows any employee to recognize any colleague, supplemented by a manager \"amplification\" function for public visibility.",
      "Make manager recognition a tracked metric in the quarterly performance review — managers who fall below a monthly minimum will receive a coaching conversation.",
      "Run a manager enablement session to show them the data and train them on recognition best practices, then relaunch the program with new prompts and examples.",
      "Restructure the program to give each manager a monthly recognition budget in the form of points or small monetary rewards, creating an incentive to use the system."
    ],
    "correct": 0,
    "consequences": {
      "teamMorale": 10,
      "executionRisk": -3,
      "growth": 3
    },
    "explanation": "The core structural flaw is that the program makes recognition solely dependent on manager behavior — a bottleneck that 15 out of 18 managers are not clearing. Peer-to-peer recognition removes the single-point-of-failure design and scales recognition across the whole organization, not just to teams with recognition-oriented managers. The manager amplification function preserves leadership visibility without making recognition contingent on it. Tracking recognition as a manager metric converts a cultural practice into a compliance obligation and typically produces low-quality, perfunctory recognition. Training alone does not change behavior when the system design is the problem — this has already been available for managers to use and 15 choose not to. Monetary incentives introduce a different dynamic where recognition is tied to budget consumption rather than genuine appreciation.",
    "framework": "Recognition System Design — programs that place recognition behind a behavioral dependency (manager action) will reflect the variance in manager behavior, not organizational generosity. Peer-to-peer architectures distribute the responsibility and produce higher frequency and authenticity.",
    "principle": "If your recognition program's output is controlled by manager discretion, your engagement scores will mirror management quality unevenly across the organization.",
    "traps": [
      "Mandatory recognition metrics lead to managers hitting minimum thresholds with generic kudos that employees recognize as compliance theater rather than genuine appreciation.",
      "Training solves a knowledge or skills gap — when managers have had access to the tool and choose not to use it, the gap is motivational or structural, not educational.",
      "Monetary budgets shift the recognition dynamic from \"I appreciate you\" to \"I have budget to spend,\" which can feel transactional and reduce authenticity."
    ]
  },
  {
    "id": "CHR-CE05",
    "category": "Culture & Engagement",
    "difficulty": 3,
    "scenario": "Your eNPS drops from +28 to +11 in one quarter. Detractor comments cluster around two themes: compensation (40%) and \"leadership doesn't listen\" (35%). You have confirmed both issues are real — compensation is below market by approximately 12% for engineering roles and the leadership communication gap is structural. You have limited budget (enough to address one issue meaningfully) and leadership is resistant to hearing they are poor communicators. How do you prioritize and act?",
    "options": [
      "Prioritize compensation — it affects 40% of detractor comments, is quantifiable, and provides a tangible signal to the team that the company responds to feedback. Address the communication gap through structural changes that don't require leadership to self-identify as the problem.",
      "Prioritize the leadership communication gap — eNPS recovery requires trust, and trust is harder to rebuild than compensation is to adjust. Present the data without framing it as a leadership failure: frame it as a process design issue that leadership can solve.",
      "Address both simultaneously at reduced scale: a targeted compensation adjustment for the most at-risk roles (engineering) and one structural communication change (pre-decision input mechanism). Accept partial impact on both rather than full impact on one.",
      "Commission a deeper survey to validate which issue has higher attrition correlation before committing budget, then present the finding to leadership as an evidence-based case for action on both dimensions."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 9,
      "executionRisk": -6,
      "strategicPosition": 7,
      "growth": 4
    },
    "explanation": "When trust is the underlying driver, a compensation fix without a trust repair will produce a temporary eNPS recovery followed by continued erosion — employees will take the raise and still leave once a better opportunity appears. The 35% \"leadership doesn't listen\" signal is a leading indicator of attrition that compensation alone will not address. The key CHRO skill here is reframing: instead of telling leadership \"you are poor communicators,\" the more effective approach is to present the communication gap as a structural design problem — the organization lacks mechanisms for employee input, not that any individual leader is inadequate. This approach makes it easier for leadership to act without requiring them to concede a personal failure. Splitting the budget across both issues dilutes the impact below the threshold of meaningful change. Commissioning more research delays action on a problem that has already surfaced with clear qualitative and quantitative validation.",
    "framework": "Trust-First Attrition Model — compensation dissatisfaction is an amplifier, not a root cause. When \"not being heard\" co-occurs with compensation complaints, fixing pay creates a temporary floor; fixing trust creates retention. The sequencing matters when you can only do one.",
    "principle": "Trust deficits outlast compensation adjustments. When budget is limited and both issues are real, fix the one that prevents you from keeping the employees you just gave raises to.",
    "traps": [
      "Choosing compensation because it has a higher detractor percentage mistakes the louder complaint for the higher-leverage one — compensation can be matched by competitors, trust cannot.",
      "Splitting limited budget produces a half-salary adjustment that doesn't close the market gap and a token communication change that employees recognize as performative.",
      "More research after a clear two-signal drop reads as stalling — employees who submitted detractor comments are watching for a response, not another survey."
    ]
  },
  {
    "id": "CHR-CE06",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "You need to build a values framework for a 90-person company that grew rapidly from 20 to 90 in 18 months. The original founding culture and the new-hire culture feel increasingly incoherent. The CEO wants five core values written and launched in 30 days. You know from experience that rushed values work typically produces hollow statements that employees do not connect with and that can actually reduce trust. How do you handle this?",
    "options": [
      "Accept the 30-day timeline, run a rapid pulse survey and two focus groups to collect language, and draft the five values using employee language — prioritizing speed and inclusion signal over depth.",
      "Push back on the 30-day timeline with a data-backed case: present examples of values frameworks that failed because of rushed process, propose a 60-day alternative with structured employee involvement, and offer a visible interim milestone (working sessions announced internally) to show progress.",
      "Propose that instead of creating new values, you first audit behaviors that are already working — identify the cultural patterns that made the company successful and name them as values, rooting the framework in observed reality rather than aspiration.",
      "Accept the 30-day timeline but reframe the deliverable: instead of \"final values,\" launch the 30-day output as a \"draft for comment\" that invites company-wide input, then finalize in 30 more days based on that feedback."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 8,
      "strategicPosition": 7,
      "executionRisk": -4
    },
    "explanation": "Accepting the 30-day timeline while reframing the deliverable as a \"draft for comment\" is the most effective approach because it meets the CEO's urgency need while protecting the integrity of the values process. The CEO wants visible momentum — a \"draft for comment\" launch in 30 days delivers that. The additional 30 days of employee input converts a top-down mandate into a co-created framework, which is the structural condition for employee identification with values. A full 60-day pushback risks the CEO proceeding without HR involvement. Pure speed with pulse surveys and focus groups can work but the 30-day output is likely to feel incomplete without a feedback loop built in. Starting from a behavioral audit is valuable but is a longer, more exploratory process that the CEO is not positioned to wait for.",
    "framework": "Values Co-Creation Process — employee identification with company values correlates directly with their participation in creating them. The minimum viable participation is a feedback loop before finalization, not the same as full co-design.",
    "principle": "A values draft that invites input is more powerful than finished values handed down — the draft-and-comment structure creates ownership without sacrificing timeline.",
    "traps": [
      "Full pushback on the CEO's timeline may result in the values being written without HR, which produces a worse outcome than a compressed timeline with HR involvement.",
      "Rushing to finalized values in 30 days without a feedback mechanism produces the hollow-statement outcome the CHRO is trying to avoid.",
      "A pure behavioral audit is a strong foundation but requires more time and qualitative analysis than a 30-day window allows."
    ]
  },
  {
    "id": "CHR-CE07",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "During an all-hands, a junior employee asks the CEO: \"We keep hearing about our growth — but what's the company's actual financial situation? Are we stable?\" The CEO responds: \"We're in a great position.\" Employees clearly sense the deflection — the Slack channel afterward has several comments like \"that was a non-answer.\" You are the CHRO observing this moment. What do you do in the next 48 hours?",
    "options": [
      "Draft a \"state of the company\" communication to be sent by the CEO within 48 hours — share what can be shared about financial health (runway, growth trajectory, next milestone) and acknowledge that the all-hands answer was incomplete.",
      "Hold skip-level listening sessions with team leads in the next week to gauge the depth of anxiety before recommending a communication action, so the CEO does not feel pressured into disclosing more than is appropriate.",
      "Meet with the CEO privately to flag the perception gap, share the Slack reactions, and recommend they proactively follow up with a written message to staff that provides more financial context.",
      "Work with the CEO and CFO to create a standard quarterly \"financial transparency briefing\" — a structured format for sharing financial health indicators with staff, launched as a new recurring practice rather than a reactive correction."
    ],
    "correct": 2,
    "consequences": {
      "teamMorale": 8,
      "strategicPosition": 6,
      "executionRisk": -5
    },
    "explanation": "The CHRO's highest-leverage move in the next 48 hours is a private, direct conversation with the CEO — not a unilateral communication action and not a listening tour that delays acknowledgment. The CEO needs to hear two things: what the Slack reaction signal means (erosion of trust in their real-time credibility), and a specific recommended action (a brief follow-up message that provides more context on financial health). Drafting the communication for the CEO is going too far — it bypasses the CEO's judgment about what is appropriate to disclose. Listening sessions before acting delays a response to a trust signal that is already visible and active in the Slack channel. A quarterly briefing structure is excellent as a long-term recommendation but does not address the immediate credibility gap created in the last 24 hours.",
    "framework": "Trust Recovery Window — employee trust erodes faster in a vacuum than in response to imperfect information. The 48-hour window after a perceived deflection is the highest-leverage moment for a follow-up that can recover credibility.",
    "principle": "When employees sense they received a non-answer, silence in the following 48 hours confirms that the deflection was intentional. A proactive follow-up changes that narrative.",
    "traps": [
      "Unilaterally drafting a company communication oversteps the CHRO role and removes the CEO's ownership of their own credibility repair.",
      "Listening sessions before acting allows a low-trust signal to compound — employees are already voicing their reaction in Slack, which means the signal is confirmed, not hypothetical.",
      "Framing the quarterly briefing as the response to this incident treats a trust moment as a process gap — employees will see that the specific question was not answered."
    ]
  },
  {
    "id": "CHR-CE08",
    "category": "Culture & Engagement",
    "difficulty": 3,
    "scenario": "Your VP Engineering and VP Sales have an ongoing public conflict. Their disagreements spill into Slack threads, cross-functional meetings, and skip-level conversations where their direct reports feel pressured to take sides. Cross-functional collaboration scores between Engineering and Sales have dropped sharply. The CEO calls the tension \"productive friction.\" Both VPs report to the CEO. How do you advise?",
    "options": [
      "Facilitate a structured conflict resolution session between the two VPs — present it as a team effectiveness intervention rather than a disciplinary action, and involve an external executive coach if needed.",
      "Present the CEO with behavioral data and downstream business impact: cross-functional collaboration scores, specific examples of teams being asked to take sides, and the attrition risk of key people caught in the middle. Make the case that \"productive friction\" between two leaders is structurally different from conflict that is exported to their reports.",
      "Meet privately with each VP to understand their perspective, surface any underlying trust or structural issue driving the conflict, and build a shared account of the problem before escalating to the CEO.",
      "Recommend that the CEO create a formal cross-functional operating committee with defined decision rights for Engineering-Sales intersections, removing the need for the two VPs to resolve disputes bilaterally."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 9,
      "executionRisk": -7,
      "strategicPosition": 6,
      "growth": 5
    },
    "explanation": "The CEO's belief in \"productive friction\" is the root obstacle — without changing that framing, any intervention the CHRO runs with the VPs will lack the authority and urgency needed to produce change. The most important move is to change the CEO's mental model with evidence. The distinction the CHRO must make is precise: friction between two senior leaders that produces better thinking is valuable; friction that is exported to their direct reports as social pressure to take sides is damaging and represents a leadership failure, not a feature. Presenting behavioral data — specific Slack incidents, collaboration score drops, skip-level conversations — gives the CEO evidence rather than an opinion. Facilitating a VP session without the CEO's mandate may feel premature to both VPs. Gathering individual perspectives before escalating is good practice but delays the CEO conversation, which is where the permission to intervene lives. The operating committee is useful structurally but does not address the interpersonal dynamic producing the behavior.",
    "framework": "Leadership Conflict Export Model — senior leader conflict is categorically different when it requires employees to navigate the conflict socially. At that point it is not a functional disagreement; it is an unsafe working environment for the people caught in between.",
    "principle": "The CEO's framing is the actual blocker. Reframe first, then intervene — without executive alignment, conflict resolution between the VPs will not hold.",
    "traps": [
      "Facilitating a VP session without the CEO's mandate signals that the CHRO is managing around the person with actual authority — neither VP is likely to take it seriously.",
      "Individual conversations with each VP before surfacing the issue to the CEO can be useful but delays addressing the CEO's misframing, which is the root enabler of the behavior.",
      "A structural committee fix treats the symptom (escalation path gaps) rather than the cause (two leaders behaving in ways that harm their teams)."
    ]
  },
  {
    "id": "CHR-CE09",
    "category": "Culture & Engagement",
    "difficulty": 2,
    "scenario": "Your company's Glassdoor rating has dropped from 4.2 to 3.4 over 6 months. Three recent leavers from the same team posted reviews citing \"poor management\" and \"no career growth.\" The team performs well on business metrics. You believe the reviews are genuine but one-sided. The CEO wants HR to respond to the reviews. How do you handle this?",
    "options": [
      "Respond to each Glassdoor review with a professional, non-defensive employer response that acknowledges the feedback, describes specific changes the company has made or is making, and invites the reviewer to continue the conversation.",
      "Contact the team's manager to discuss the reviews and determine whether a performance improvement plan is warranted based on the patterns described.",
      "Mobilize current engaged employees to leave positive reviews to offset the rating drop, then respond to the negative reviews with a brief acknowledgment.",
      "Investigate the management situation on that team first — review the manager's feedback history, exit interview data, and any previous HR touchpoints before deciding on a response strategy."
    ],
    "correct": 3,
    "consequences": {
      "teamMorale": 7,
      "strategicPosition": 8,
      "executionRisk": -5
    },
    "explanation": "Three reviews from the same team citing the same themes — management and career growth — is a pattern signal, not a random data point. Before the CHRO responds publicly or takes action on the manager, the appropriate move is to investigate whether the signal is valid. Exit interview data, previous HR touchpoints, and any informal feedback the CHRO may have received create a picture of whether this is a systemic management problem or a perception problem. Responding publicly to Glassdoor before understanding the root cause risks a response that is either tone-deaf (if the problem is real) or insufficiently targeted. Mobilizing positive reviews is reputationally risky if discovered, and does not address the underlying management gap. Going directly to a performance improvement plan for the manager before an investigation is premature and legally vulnerable.",
    "framework": "Exit Signal Triangulation — exit reviews that cluster around a single team and a single theme should be cross-referenced with exit interview data, tenure patterns, and HR history before determining whether the signal represents a management capability gap or a selection/expectation mismatch.",
    "principle": "A Glassdoor response strategy is only as credible as the action behind it. Investigate before you respond publicly.",
    "traps": [
      "Responding publicly to Glassdoor before investigating can result in a response that contradicts what an internal review will later surface, damaging HR's credibility.",
      "Review-mobilization campaigns are detectable by platforms and by employees, and if discovered will produce a worse PR and trust outcome than the original negative reviews.",
      "Jumping to a PIP without investigation skips the diagnostic step and may penalize a manager for a structural problem (role clarity, growth pathways) rather than a behavioral one."
    ]
  },
  {
    "id": "CHR-CE10",
    "category": "Culture & Engagement",
    "difficulty": 3,
    "scenario": "A post-layoff engagement survey (12 employees, 8%) shows classic survivor syndrome — remaining employees report anxiety, reduced trust, and uncertainty about job security. Productivity data confirms a 15% output drop. The CEO wants to move quickly back to \"normal\" by immediately returning to business-as-usual messaging and removing layoff-related topics from the next all-hands agenda. What do you recommend?",
    "options": [
      "Support the CEO's approach — employees need to see the leadership team operating confidently and normally, and dwelling on the layoff in official channels prolongs the anxiety rather than resolving it.",
      "Recommend a structured \"reset\" all-hands within two weeks: leadership directly acknowledges the layoff, explains the business context and decision rationale, shares the company's financial state and forward plan, and explicitly commits to the remaining team. Follow with small-group listening sessions for managers to hold with their teams.",
      "Focus on manager-level interventions — provide managers with a conversation guide and ask each manager to hold a one-on-one reset conversation with each direct report. Do not create a formal company-level acknowledgment.",
      "Recommend a 60-day monitoring window before any formal intervention — give employees time to process and let the engagement scores normalize before designing a response, to avoid over-engineering a natural recovery process."
    ],
    "correct": 1,
    "consequences": {
      "teamMorale": 10,
      "executionRisk": -7,
      "strategicPosition": 6,
      "growth": 5
    },
    "explanation": "Survivor syndrome is not resolved by pretending the layoff did not happen — it is resolved by directly addressing the two questions employees are silently asking: \"Why did this happen?\" and \"Am I next?\" Returning to business-as-usual messaging without acknowledgment communicates that leadership either does not see the anxiety or does not care about it, which deepens the trust gap. A structured all-hands that acknowledges the layoff, explains the context, shares the forward plan, and explicitly commits to the remaining team provides the information employees need to recalibrate their sense of safety. Manager-level one-on-ones are an important supplement but cannot substitute for a company-level acknowledgment from senior leadership. A 60-day wait will produce a deeper productivity hole — engagement research consistently shows that unacknowledged uncertainty prolongs the recovery period rather than shortening it.",
    "framework": "Survivor Syndrome Recovery Model — the two psychological needs after a layoff are understanding (why did this happen) and safety (am I next). Direct, transparent communication from leadership addresses both. Silence or business-as-usual messaging triggers neither.",
    "principle": "Employees cannot return to normal until leadership acknowledges what happened and makes the path forward credible. The fastest route back to normal is through acknowledgment, not around it.",
    "traps": [
      "Business-as-usual messaging reads as tone-deaf to employees who are watching leadership behavior for signals about whether they are trusted with the truth.",
      "Manager-only interventions without a senior leadership acknowledgment place an unfair burden on managers to answer questions about decisions they did not make.",
      "Waiting 60 days treats a confirmed engagement and productivity drop as a self-correcting problem — the data already shows it is active and worsening."
    ]
  }
]
