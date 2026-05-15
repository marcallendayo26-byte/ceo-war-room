export const CASES_TECH = [
  {
    "id": "PD01",
    "category": "Project Delivery",
    "difficulty": 1,
    "scenario": "Three days before a sprint ends, two developers tell you they cannot finish their assigned stories. Combined, this is 40% of the sprint commitment. The client's project manager asks for a status update tomorrow.",
    "quote": "\"We can say we are 90% done. The last 10% is just testing.\"",
    "options": [
      "Descope the incomplete stories, deliver what is done, and carry the rest to next sprint.",
      "Tell the client you are on track. The work will be done by end of week.",
      "Ask the team to work overtime to finish everything before the sprint ends.",
      "Extend the sprint by 3 days, complete all stories, and present the full commitment at a slightly delayed review."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Descoping incomplete work and being transparent about carry-over is the correct agile response. It gives the client accurate information, maintains sprint hygiene, and prevents the team from rushing untested code into a delivery. Transparency about velocity issues early is always better than a surprise at the end.",
    "framework": "Sprint Integrity — a sprint commitment is a forecast, not a contract. When capacity drops, descope rather than cut corners on quality or communication.",
    "principle": "Deliver less with full quality rather than more with hidden risk.",
    "traps": [
      "Claiming 90% done when key features are missing is a lie that breaks trust at the review.",
      "Overtime on a delivery crunch signals poor planning and creates burnout debt that hits the next sprint.",
      "Extending the sprint to hide a miss inflates your velocity metrics and trains the team to paper over capacity problems rather than surface them — the next sprint starts with the same unresolved dynamics."
    ]
  },
  {
    "id": "PD02",
    "category": "Project Delivery",
    "difficulty": 2,
    "scenario": "You are 6 weeks into a 16-week project. The client has added 12 new requirements since kickoff — none formally approved as change requests. Each one was framed as \"just a small clarification.\" Your team has absorbed them but the timeline is now at risk.",
    "quote": "\"We cannot push back on the client this early. We need to maintain the relationship.\"",
    "options": [
      "Keep absorbing requests. Maintain client goodwill and catch up later.",
      "Schedule a scope alignment session, document all additions, and formally assess the timeline impact together with the client.",
      "Stop all new work. Refuse any requirement that was not in the original scope.",
      "Add 3 weeks to the timeline unilaterally and inform the client via email."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "Scope creep managed without documentation is scope creep that compounds. A formal alignment session is not confrontational — it is professional. Walking the client through what was added, what it costs, and what the options are (accept timeline impact, descope something else, or fund additional resources) puts both parties in control.",
    "framework": "Change Control Process — every untracked addition is a hidden risk. Document, assess, and decide together. Never absorb silently.",
    "principle": "Scope that is not controlled is a project that is not managed.",
    "traps": [
      "Absorbing silently creates an impossible delivery position. You will miss the deadline and have no documentation to explain why.",
      "A hard stop on all new input destroys the collaborative relationship. It is also an overreaction.",
      "Unilateral timeline changes without explanation are a governance failure that escalates immediately."
    ]
  },
  {
    "id": "PD03",
    "category": "Project Delivery",
    "difficulty": 2,
    "scenario": "A key milestone — the completion of the core data module — is slipping by 2 weeks. This module gates everything else in the project. You have two options: wait and push all downstream milestones, or ship the module with known gaps and let other teams work around them.",
    "quote": "\"Ship it. The other teams are waiting and we cannot afford to fall further behind.\"",
    "options": [
      "Ship with known gaps. Keep the downstream teams unblocked.",
      "Delay the milestone. Fix the gaps properly before other teams build on top of it.",
      "Split the module — ship the complete parts now, delay only the incomplete parts.",
      "Ship with known gaps but create a technical debt log and fix during the next sprint."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Splitting the deliverable is the most disciplined response. It keeps downstream teams unblocked on what is complete while not forcing other teams to build on top of known gaps — which creates rework costs that compound. \"Ship everything with gaps\" sounds fast but creates exponentially more work when downstream code inherits those gaps.",
    "framework": "Thin Vertical Slices — deliver what is fully complete, hold what is not. Partial completions are a dependency trap waiting to explode.",
    "principle": "A gap in a foundation module becomes a gap in everything built on top of it.",
    "traps": [
      "Shipping a gapped data module means every team that touches it builds workarounds. You pay 10x the debt later.",
      "A full delay cascades to every downstream milestone — more painful than a partial delivery.",
      "Technical debt logs work for minor items. Core module gaps are too foundational to defer."
    ]
  },
  {
    "id": "PD04",
    "category": "Project Delivery",
    "difficulty": 3,
    "scenario": "You are running two parallel workstreams for the same client. Both have the same go-live date. Both are behind. You have one senior developer who can save either one — but not both. Workstream A serves the client's finance team (critical for month-end). Workstream B serves operations (important but not time-sensitive).",
    "quote": "\"We need to deliver both. Tell the senior dev to split time evenly.\"",
    "options": [
      "Split the senior dev's time evenly between both workstreams.",
      "Push both go-live dates by 3 weeks and reset with the client.",
      "Hire a contractor immediately to cover the capacity gap on Workstream B.",
      "Assign the senior dev to Workstream A. Communicate the delay on B proactively."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "When you cannot save both, save the one with the highest business impact. Finance month-end is a hard deadline with regulatory consequences. Proactive communication about the B delay — with a revised timeline — gives the client time to adjust. Splitting the senior dev produces two partial deliveries and likely two failures.",
    "framework": "Triage Decision-Making — when resources are insufficient for all commitments, rank by business impact and communicate early on what will slip.",
    "principle": "One fully saved workstream beats two broken ones.",
    "traps": [
      "Splitting an expert's time across two behind workstreams means neither gets enough support to recover.",
      "Contractors need ramp-up time. If the gap is urgent, a new hire solves next month's problem, not this week's.",
      "Pushing both go-live dates punishes the finance team that has a hard regulatory deadline."
    ]
  },
  {
    "id": "PD05",
    "category": "Project Delivery",
    "difficulty": 1,
    "scenario": "Your team's original estimate for a feature module was 6 weeks. Midway through week 3, a developer realizes the estimate missed a major integration complexity. The revised estimate is 10 weeks total — 4 weeks more than originally told to the client.",
    "quote": "\"Let us not tell the client yet. Maybe we can find a way to catch up first.\"",
    "options": [
      "Tell the client immediately. Share what changed, why, and the new estimate.",
      "Absorb the delay internally and try to recover through overtime.",
      "Reduce the feature scope to fit the original timeline without telling the client.",
      "Tell the client at the next weekly call — no need to raise it urgently."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Early disclosure of a reforecast is always better than a surprise at the original deadline. Clients need to plan around delivery dates. A 4-week slip discovered in week 3 gives them 7 weeks to adjust. The same discovery at week 6 gives them zero days. The sooner you tell them, the more options they have.",
    "framework": "Early Warning System — surface scope or timeline risks the moment they are identified. The cost of early disclosure is a difficult conversation. The cost of late disclosure is a broken relationship.",
    "principle": "Bad news delivered early is a problem. Bad news delivered late is a crisis.",
    "traps": [
      "Overtime on an estimation miss is burning out the team to hide a problem. The client still finds out — just later.",
      "Descoping without client knowledge is changing what they contracted for without their consent.",
      "Waiting for the weekly call when you have a known 4-week slip costs the client planning time they needed."
    ]
  },
  {
    "id": "PD06",
    "category": "Project Delivery",
    "difficulty": 2,
    "scenario": "The client's designated project manager has been unresponsive for 2 weeks. Three decisions are blocked waiting for their approval: a schema design choice, a UI direction, and an integration approach. Your team is spinning on other tasks but velocity is dropping.",
    "quote": "\"We cannot escalate. It will embarrass their PM and damage the relationship.\"",
    "options": [
      "Send a structured decision brief to the client PM via email, documenting each blocked item, the cost of delay, and a deadline for response — giving them one final opportunity before escalation.",
      "Escalate to the client's project sponsor and explain the impact of the blocked decisions.",
      "Make the decisions yourself and document them as \"assumed approved pending response.\"",
      "Send a formal letter of delay notification citing the blocked items."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Escalating to the sponsor is the right move when the PM is unresponsive and the project is blocked. Frame it factually — not as a complaint about the PM, but as a business risk: these decisions are blocking delivery. Most sponsors will appreciate the visibility and unblock the decisions faster than any alternative.",
    "framework": "Decision Escalation Path — blocked decisions need an escalation path. Waiting is not neutral — it consumes schedule buffer that you cannot recover.",
    "principle": "Escalation is not confrontation. It is risk management.",
    "traps": [
      "A written decision brief with a deadline still depends on the PM to respond. If they have been unresponsive for two weeks, a polished email does not change the dynamic — the decisions stay blocked and the deadline continues to slip.",
      "Making decisions and marking them \"assumed approved\" is a governance risk. If the client disagrees, you redo the work.",
      "A formal delay notification without a direct conversation is adversarial before it is necessary."
    ]
  },
  {
    "id": "PD07",
    "category": "Project Delivery",
    "difficulty": 3,
    "scenario": "With 2 weeks left before go-live, the project manager suggests cutting the UAT phase from 2 weeks to 3 days to recover from a development delay. The client has agreed to the shorter UAT. Your QA lead says 3 days is not enough to properly test the system.",
    "quote": "\"The client agreed to it. If something breaks in production, that is their decision.\"",
    "options": [
      "Accept the shortened UAT. The client has agreed and the risk is theirs.",
      "Refuse the go-live. UAT cannot be cut below minimum quality standards.",
      "Propose a risk-based UAT: prioritize testing the highest-risk user journeys in 3 days, document what is untested.",
      "Extend the go-live by 2 weeks against the client's preference to preserve full UAT."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Risk-based testing is the professional middle ground. You cannot test everything in 3 days — but you can cover the highest-impact flows. Document what was tested and what was not, get sign-off from the client on the known gaps, and proceed with explicit acknowledgment of the risk. This keeps the go-live timeline while giving the client real information.",
    "framework": "Risk-Based Testing — when time is constrained, rank test coverage by business criticality. Test what breaks the most if it fails. Document everything else as known risk.",
    "principle": "A 3-day UAT with explicit known risk is better than a 3-day UAT that pretends to be a 2-week one.",
    "traps": [
      "The client agreeing to cut UAT does not transfer liability for a bad go-live to them — your reputation is still at stake.",
      "Refusing to go live against an agreed plan causes a bigger client relationship problem than a managed risk.",
      "Extending go-live against client preference without a formal change process is a governance breach."
    ]
  },
  {
    "id": "PD08",
    "category": "Project Delivery",
    "difficulty": 1,
    "scenario": "During a sprint review, two developers present different implementations of the same feature. When asked, it becomes clear they had different understandings of the requirement — both reasonable interpretations of an ambiguous user story written at the start of the project.",
    "quote": "\"One of them clearly did not read the requirements properly.\"",
    "options": [
      "Hold a retrospective to understand which developer misread the requirements, then use it as a coaching opportunity to improve individual requirements-reading skills.",
      "Implement both and let the client pick their preferred version.",
      "Default to the more technically elegant implementation and move on.",
      "Clarify the requirement with the client, choose one implementation, and add a requirement review step to your process."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "When two experienced developers interpret the same requirement differently, the requirement is ambiguous — not the developers. Fix the root cause: clarify with the client and add a requirement review checkpoint to catch this earlier. Blame solves nothing and kills psychological safety. Two implementations is a waste.",
    "framework": "Definition of Ready — requirements should be clear, testable, and unambiguous before a developer starts work. When they are not, multiple interpretations are predictable.",
    "principle": "Ambiguous requirements always produce wrong implementations. Fix the input, not the output.",
    "traps": [
      "Treating a reasonable interpretation of an ambiguous requirement as a misread trains developers to seek excessive clarification on every story rather than fixing the process that produced the ambiguity.",
      "Two implementations is double the work and delays delivery. Clients do not want to arbitrate technical decisions.",
      "The \"more elegant\" implementation may be the wrong one for the business use case."
    ]
  },
  {
    "id": "PD09",
    "category": "Project Delivery",
    "difficulty": 2,
    "scenario": "You are 70% through a 20-week project when the client's new CEO asks to pivot the system's core workflow — from a request-based model to an approval-based model. Your lead architect says this is effectively starting over on the core module. The original CEO who signed off on the design has left the company.",
    "quote": "\"The new CEO is the client. We have to accommodate what they want.\"",
    "options": [
      "Document the full impact: what needs to be rebuilt, the cost, and the revised timeline. Present it to the client as a formal change request.",
      "Acknowledge the pivot request verbally, pause development on the affected module, and flag the situation to your delivery director before engaging further with the client.",
      "Accommodate the pivot immediately. The client always has the right to change direction.",
      "Build a facade that makes the request-based model look like an approval model without changing the core."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "The new CEO has the right to change direction — but not for free. A formal change request documents what was built, what needs to change, and what it costs in time and money. This gives the client a real decision: absorb the cost and proceed with the new direction, or accept the original design. It also protects your team from building the pivot only to have no budget approved.",
    "framework": "Change Request Management — any mid-project direction change must go through formal change control. The client can change their mind. The contract must change too.",
    "principle": "A pivot with no change request is a pivot that someone else pays for — usually your team.",
    "traps": [
      "Escalating internally before engaging the client introduces a delay and signals disorganization at the moment the new CEO is forming their first impression of your team's responsiveness.",
      "Immediately accommodating a major pivot without formal change control means you absorb the cost of the rework.",
      "A workflow facade is technical debt that will explode during implementation or hypercare."
    ]
  },
  {
    "id": "PD10",
    "category": "Project Delivery",
    "difficulty": 3,
    "scenario": "Two of your projects share the same senior developer — your only person who knows the legacy integration layer both projects need. Project A's deadline is next week. Project B's deadline is in 3 weeks. This week, the developer reports they are already at 120% capacity on Project A alone.",
    "quote": "\"Tell them to manage their time better. Both clients are paying for their commitment.\"",
    "options": [
      "Tell the developer to manage both. Both clients are paying for delivery.",
      "Pull the developer fully to Project A, delay Project B, and inform Project B's client now.",
      "Notify both clients of the shared dependency and propose revised timelines.",
      "Hire a contractor to shadow the developer this week to reduce the bus factor."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "The right move for Project A's urgency is to pull the developer fully to it. But Project B's client deserves immediate notice — not a surprise delay at week 3. Parallel notification manages both relationships professionally. The deeper issue is the single-person dependency: escalate that as a structural risk for both projects.",
    "framework": "Resource Dependency Transparency — shared critical resources are a risk. When that risk materializes, both affected clients must know immediately.",
    "principle": "Client surprises cost relationships. Early notice costs a difficult conversation.",
    "traps": [
      "120% capacity means something will fail. Telling someone to \"manage better\" at 120% produces burnout and errors.",
      "Notifying both without a plan sounds fair but leaves both clients without a concrete path forward.",
      "A contractor shadowing in one week cannot absorb enough context to meaningfully reduce the dependency."
    ]
  },
  {
    "id": "CM01",
    "category": "Client Management",
    "difficulty": 1,
    "scenario": "Your client's operations manager is frustrated with a recent delay and has sent an email directly to your CEO, copying your entire leadership team. The email describes the delay as \"a pattern of underperformance.\" You are the project lead. Your CEO forwards it to you with two words: \"Fix this.\"",
    "quote": "\"The client is overreacting. The delay was minor and outside our control.\"",
    "options": [
      "Reply to all defending your team's performance and correcting the client's characterization.",
      "Have your CEO reply and manage the escalation at the executive level.",
      "Call the operations manager directly before your CEO responds. Understand their frustration and commit to a resolution call.",
      "Send a formal written response with a timeline of events showing the delay was the client's fault."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "When a client escalates to your CEO, the fastest path to resolution is a direct human conversation — not an email war. Call before your CEO responds. Acknowledge the frustration, understand the real concern, and propose a resolution call. Most escalations de-escalate quickly when the project lead shows up personally and listens.",
    "framework": "Escalation De-escalation — client escalations are emotional events before they are factual ones. Address the emotion first, facts second.",
    "principle": "Pick up the phone. Most escalation emails are requests to be heard.",
    "traps": [
      "Defending your team publicly in a reply-all email turns a manageable escalation into a documented dispute.",
      "Delegating to your CEO signals you cannot manage your own client relationship.",
      "A timeline proving the client is at fault is the fastest way to permanently damage the relationship even if you are right."
    ]
  },
  {
    "id": "CM02",
    "category": "Client Management",
    "difficulty": 2,
    "scenario": "The client's IT department and business operations team are giving you conflicting requirements for the same module. IT wants a lightweight integration with minimal data exposure. Operations wants a deep integration with full data sync. Both have sign-off authority and neither is willing to compromise.",
    "quote": "\"Let us build both options and let the client sort it out internally.\"",
    "options": [
      "Build both and present them to the client for a decision.",
      "Pick the IT requirement. Security and IT governance typically override business preferences.",
      "Build the operations version and document that IT requirements were noted but overridden.",
      "Escalate to the client's executive sponsor to facilitate an internal decision."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "Internal client conflict is not your problem to solve — but it is your job to surface it to someone who can solve it. The executive sponsor is the person with authority over both IT and operations. Bringing them in is not escalation in the negative sense — it is removing a blocker that no one else in the project has authority to remove.",
    "framework": "Sponsor Escalation for Internal Conflict — your job is to deliver the project, not to mediate your client's internal politics. Bring in the authority level that can.",
    "principle": "Build the wrong thing faster is still building the wrong thing.",
    "traps": [
      "Two competing implementations doubles the work and the decision still has to be made by the client.",
      "Choosing IT over operations without authority creates an enemy in the operations team who will resist adoption.",
      "Documenting an override without proper authority is a governance liability if the decision is later disputed."
    ]
  },
  {
    "id": "CM03",
    "category": "Client Management",
    "difficulty": 2,
    "scenario": "The client insists on daily 1-hour status calls with your full team. Your team spends 5 hours per week in calls that your senior developer describes as \"mostly repetitive and covering things the client could read in the status report.\" Morale is dropping and delivery is slowing.",
    "quote": "\"The client is paying for this. They can ask for daily calls if they want.\"",
    "options": [
      "Have a direct conversation with the client about call efficiency — propose an async daily update plus one weekly sync.",
      "Unilaterally reduce calls to twice a week and inform the client via email.",
      "Keep the daily calls. The client is paying and this is their right.",
      "Have only the PM attend daily calls, not the full team."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Daily full-team calls burning 5 hours/week are a delivery tax. But the right approach is a direct conversation with the client — not a unilateral change. Propose a format that gives the client the same information with less team time: async daily written updates plus one structured weekly sync. Most clients agree when the efficiency argument is made respectfully.",
    "framework": "Communication Protocol Optimization — client communication should inform, not consume. Redesign the format, not just the frequency.",
    "principle": "A client who feels informed is a client who does not need daily calls.",
    "traps": [
      "Accepting a format that costs 5 hours of delivery time per week compounds to 20+ hours per sprint — a whole developer week lost monthly.",
      "Unilateral reduction without conversation reads as disrespect. The client will escalate.",
      "PM-only calls work for status updates but exclude the client from technical decisions where developer input is needed."
    ]
  },
  {
    "id": "CM04",
    "category": "Client Management",
    "difficulty": 3,
    "scenario": "The project is 2 weeks behind schedule. In the steering committee, the client's project manager presents a slide claiming the delay was caused entirely by late deliverables from your team. In reality, 70% of the delay was caused by the client's own IT team being 3 weeks late on providing the integration credentials your team needed.",
    "quote": "\"We cannot contradict them in front of the steering committee. We need to protect the relationship.\"",
    "options": [
      "Stay silent during the meeting. Address it privately with the client PM after.",
      "Request a pause in the meeting and ask for a 10-minute private conversation with the client PM before continuing.",
      "Agree with the client PM's version publicly, then document your version in the minutes.",
      "Correct the record immediately in the meeting with the documented evidence."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "A brief pause to align before continuing is the most professionally elegant move. It prevents a public confrontation while not accepting a false narrative on record. Most client PMs, when given the chance to recalibrate privately, will correct or soften their position before the meeting resumes.",
    "framework": "Steering Committee Conflict Protocol — never accept a false narrative on record. Never create a public confrontation. Find the path between: pause, align, then continue.",
    "principle": "Steering committees set the official record. Protect yours without burning the relationship.",
    "traps": [
      "Silent acceptance means the steering committee minutes record your team as the cause of the delay. That record follows the project.",
      "Immediately contradicting the client PM in front of executives creates an adversarial dynamic that survives the rest of the project.",
      "Agreeing publicly then correcting in minutes is a contradiction that makes your team look passive-aggressive."
    ]
  },
  {
    "id": "CM05",
    "category": "Client Management",
    "difficulty": 1,
    "scenario": "Eight weeks into a 20-week project, the original client POC who managed the relationship is reassigned. The new POC's first message to you is: \"I have reviewed everything and I want to restart the requirements phase from scratch. I am not confident in what was approved before.\"",
    "quote": "\"New POC, new rules. Let us restart to be safe.\"",
    "options": [
      "Restart the requirements phase as requested. Keep the client happy.",
      "Decline to restart. The requirements were properly signed off and you will continue.",
      "Schedule a structured onboarding session for the new POC covering what was built, what was decided, and why — before discussing any changes.",
      "Escalate to the client executive to confirm whether the project direction has officially changed."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "A new POC requesting a full restart is almost always a confidence issue, not a requirements issue. They did not participate in the decisions and feel exposed. A structured onboarding — walking them through what was built, the rationale, and the sign-off trail — usually converts their anxiety into ownership. Only genuine gaps found during this session warrant reopening requirements.",
    "framework": "POC Transition Management — new stakeholders inherit decisions they did not make. Build their confidence through structured context transfer before accepting any resets.",
    "principle": "A restart request is usually a context request in disguise.",
    "traps": [
      "Restarting requirements at week 8 without examining the root cause means you may restart unnecessarily.",
      "Refusing to engage with a new POC's concerns is relationship suicide at the beginning of a new working relationship.",
      "Escalating past the new POC before meeting them sends a hostile signal before the relationship has started."
    ]
  },
  {
    "id": "CM06",
    "category": "Client Management",
    "difficulty": 2,
    "scenario": "You are 12 weeks into implementation. The client's IT security team has just been introduced to the project for the first time. They have concerns about your authentication approach, data storage, and API structure — all of which were implemented and tested. Addressing their concerns would require 3 weeks of rework.",
    "quote": "\"Their IT team should have been involved from day one. This is the client's problem, not ours.\"",
    "options": [
      "Declare it a client-side change request and bill for all rework.",
      "Absorb the rework cost in exchange for a documented commitment from the client that IT will be included as a mandatory stakeholder from project kickoff on all future engagements.",
      "Implement the minimum changes required to satisfy IT without full rework.",
      "Document that IT was not in the project scope, present the rework cost as a change request, and co-own the solution with the client."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "Late stakeholder introduction is a project governance failure — usually shared between your team (who did not ask \"who else needs to be in scope?\") and the client (who did not involve IT). The right response is co-ownership: document what happened, present the rework as a change request, and work collaboratively on how to share the cost. Full billing is adversarial; full absorption is unsustainable.",
    "framework": "Shared Governance Accountability — when a late stakeholder causes rework, the responsibility is usually shared. The resolution should be too.",
    "principle": "Who pays for a late discovery depends on who had the responsibility to prevent it.",
    "traps": [
      "Billing fully when your own project process did not proactively identify IT as a stakeholder creates an unfair dispute.",
      "Absorbing 3 weeks of rework in exchange for a future-project promise sets the precedent that late-breaking requirements have no cost — the next stakeholder introduced late will expect the same treatment.",
      "Minimum-viable IT compliance on a security review often fails the next IT audit."
    ]
  },
  {
    "id": "CM07",
    "category": "Client Management",
    "difficulty": 3,
    "scenario": "The client's executive sponsor — the person who approved the budget and signed the contract — has been absent from all steering committees for the last 6 weeks. Without their presence, decisions that require executive authority are stacking up. Three critical design decisions are blocked. The project is starting to drift.",
    "quote": "\"Executives are busy. We should just make the decisions ourselves and inform them later.\"",
    "options": [
      "Request a 30-minute meeting with the sponsor specifically framed around the business risk of the blocked decisions.",
      "Halt the project until the sponsor re-engages.",
      "Escalate through the client's own chain of command — go to whoever the sponsor reports to.",
      "Make the blocked decisions and send a summary to the sponsor."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Executive sponsors disengage because the project feels fine — they hear no urgent signal. A meeting request framed not as a status update but as \"these three decisions carry this much business risk if unresolved\" changes the signal. Most sponsors will re-engage when the cost of inaction is made specific and visible.",
    "framework": "Sponsor Re-engagement — absent sponsors need a specific, business-impact-framed reason to return. Generic check-ins do not move them. Risk-specific agenda items do.",
    "principle": "Executives respond to risk language, not status updates.",
    "traps": [
      "Making authority-level decisions without authority creates liability and sets a precedent the sponsor may later override.",
      "Halting the project is a nuclear option that creates a contract dispute before the problem warrants it.",
      "Going above the sponsor before trying to re-engage them directly is politically damaging."
    ]
  },
  {
    "id": "CM08",
    "category": "Client Management",
    "difficulty": 1,
    "scenario": "After 10 weeks of development, the client's operations team says the user interface \"does not feel right.\" The designs were reviewed and approved at week 2 in a formal sign-off session. No design changes were requested during development. Your UX designer is frustrated.",
    "quote": "\"They signed off on it. They need to live with what they approved.\"",
    "options": [
      "Hold firm. The client signed off on the design and must accept it.",
      "Run a structured feedback session to identify specific pain points, then propose targeted adjustments as a change request.",
      "Rebuild the UI from scratch based on their new feedback.",
      "Offer a post-go-live UI enhancement sprint at a reduced rate."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "\"Does not feel right\" is not an actionable requirement. A structured feedback session with real users produces specific, actionable pain points — some of which may be genuine oversights, others may be change of mind. Targeted adjustments on genuine issues are reasonable; changes for preference drift are a change request. You can only tell the difference after you run the session.",
    "framework": "Feedback Triage — vague dissatisfaction needs specificity before action. Run structured sessions, separate genuine gaps from preference changes, then decide.",
    "principle": "Never rebuild based on \"feels wrong.\" Build based on specific, testable user problems.",
    "traps": [
      "\"You signed off\" is legally correct but destroys the relationship if genuine usability issues exist.",
      "Rebuilding from scratch on vague feedback with no change request is the most expensive possible response.",
      "Post-go-live enhancement sprints delay value delivery and often get deprioritized after launch."
    ]
  },
  {
    "id": "CM09",
    "category": "Client Management",
    "difficulty": 2,
    "scenario": "Two weeks before go-live, you discover that the client's end users — the warehouse staff who will use the system daily — have never been consulted during the project. Their supervisor designed all the workflows. During a trial session, the staff says the designed process does not match how they actually work and they will not use the system.",
    "quote": "\"The supervisor approved everything. The staff just need to adapt to the new process.\"",
    "options": [
      "Proceed with go-live. User adoption is a client-side change management problem.",
      "Delay go-live. Spend 2 weeks redesigning the workflows with actual end-user input.",
      "Facilitate a rapid co-design session with end users, identify the top 3 critical workflow gaps, and address those before go-live.",
      "Go live on schedule but assign an intensive 2-week hypercare team to handle adoption resistance."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "A system that users refuse to use is a failed implementation regardless of technical quality. But a full 2-week delay is an over-correction. A rapid co-design session to identify the critical gaps — the ones that will actually block adoption — and fix those before go-live is the minimum viable intervention. Not every workflow preference is worth a delay.",
    "framework": "User Adoption Risk — technology adoption fails when end users feel no ownership of the process. Late involvement requires rapid co-design, not full redesign.",
    "principle": "A system no one uses has zero ROI, regardless of how well it was built.",
    "traps": [
      "Proceeding with known adoption resistance guarantees a failed go-live and a hypercare nightmare.",
      "A full 2-week redesign delay over 3 critical workflow gaps is likely disproportionate.",
      "Hypercare to manage refusal is expensive, temporary, and does not fix the underlying workflow problem."
    ]
  },
  {
    "id": "CM10",
    "category": "Client Management",
    "difficulty": 3,
    "scenario": "You are running an implementation for a company with 4 departments: Finance, HR, Operations, and IT. Each department head has submitted requirements. Finance and HR requirements are technically incompatible — they require two different data structures for the same employee record. Both department heads say they will not accept a compromise.",
    "quote": "\"Build both structures. We can sync them in the background.\"",
    "options": [
      "Build both structures and sync them. Technical problem, technical solution.",
      "Choose one structure. Decide based on which department has more users.",
      "Propose a unified data structure that satisfies the minimum viable need of both departments.",
      "Escalate to the client CEO. This is an organizational decision disguised as a technical one."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "Two incompatible data structures for the same entity is not a technical problem — it is an organizational conflict that has found its way into your project. No technical solution can resolve a political disagreement about how employees are classified. The CEO is the only person in the organization with authority to make this call.",
    "framework": "Organizational Decision vs Technical Problem — when requirements are incompatible due to organizational politics, escalate. Technical solutions to organizational problems always fail.",
    "principle": "Data model conflicts are org chart conflicts in disguise.",
    "traps": [
      "Dual structures with background sync creates permanent technical debt and a point of failure that will haunt every data report.",
      "Choosing based on user count picks a loser, not a solution. The losing department will resist adoption.",
      "A \"unified minimum viable\" structure satisfies no one when each department's requirements are non-negotiable."
    ]
  },
  {
    "id": "TD01",
    "category": "Technical Decisions",
    "difficulty": 1,
    "scenario": "Your senior developer recommends using a niche open-source library for a core data transformation layer. It is significantly more powerful than the mainstream alternative. However, it has 200 GitHub stars, was last updated 14 months ago, and has only 1 active maintainer.",
    "quote": "\"It does exactly what we need. Performance benchmarks are 4x faster than the alternative.\"",
    "options": [
      "Use the mainstream library for now and optimize later if performance becomes an issue.",
      "Use the mainstream alternative. Long-term maintainability matters more than performance.",
      "Fork the niche library and maintain your own version.",
      "Use the niche library. Performance gains are significant and the developer knows it well."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Performance optimization should be driven by measured problems, not hypothetical benchmarks. The mainstream library is almost certainly fast enough for the current scale. A library with 1 maintainer and no recent updates is an abandonment risk — if a security vulnerability emerges or a breaking change occurs, you are on your own.",
    "framework": "Dependency Risk Assessment — evaluate libraries on: community size, update frequency, maintainer count, and abandonment risk — not just feature set.",
    "principle": "Choose the boring technology until you have a proven reason not to.",
    "traps": [
      "4x faster on a benchmark does not mean 4x faster on your actual use case. Optimizing for unmeasured problems is premature.",
      "Forking an open-source library means you own all future maintenance. It is rarely worth it.",
      "Framing the decision as 'long-term maintainability vs performance' understates the true risk: a library with a single maintainer is an abandonment risk — no security patches, no fixes when a breaking change arrives."
    ]
  },
  {
    "id": "TD02",
    "category": "Technical Decisions",
    "difficulty": 2,
    "scenario": "Sprint 7 of 14. Your lead developer proposes refactoring the authentication module — not because it is broken, but because the current implementation will not scale past 10,000 users. You currently have 800 users and the client's 12-month target is 3,000 users.",
    "quote": "\"We will hit 10,000 users eventually. Better to fix it now while we understand the code.\"",
    "options": [
      "Approve the refactor. Technical debt compounds and the team knows the code now.",
      "Defer the refactor. Log it, add a threshold trigger (e.g., 6,000 users), and schedule it then.",
      "Reject the refactor. The system works and you have a delivery schedule to meet.",
      "Do a partial refactor: only the components that are the highest scaling risk."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Refactoring for a scale problem that is 3x your 12-month target away is premature optimization. Log it, set a threshold that triggers the work when it becomes real, and keep delivery momentum. Mid-project refactors of working systems introduce regression risk for a problem you will not face for 12+ months.",
    "framework": "Deferred Technical Investment — not all technical debt needs immediate payment. Defer improvements to future you-with-more-data, triggered by specific measurable thresholds.",
    "principle": "Optimize for tomorrow's scale when tomorrow's scale is a real constraint, not a hypothesis.",
    "traps": [
      "Mid-project refactors of working modules introduce regression risk. \"We understand the code now\" is true but will also be true when the problem is real.",
      "Rejecting without logging means the debt is forgotten until it becomes urgent.",
      "Partial refactors leave the system in an inconsistent state — harder to reason about than either extreme."
    ]
  },
  {
    "id": "TD03",
    "category": "Technical Decisions",
    "difficulty": 2,
    "scenario": "Week 4 of implementation. Your integration plan assumed the client's ERP has a REST API. Your developer has just discovered it uses a proprietary XML-over-SFTP protocol with no documentation — only a 200-page legacy vendor manual. Your timeline allocated 2 weeks for integration. This will realistically take 6.",
    "quote": "\"We should have asked earlier. Just absorb it and deliver.\"",
    "options": [
      "Absorb the extra 4 weeks internally. Take responsibility for the assumption.",
      "Issue a change request immediately for the 4-week timeline and cost impact.",
      "Research whether the ERP vendor has a modern API layer you missed, or an integration middleware option.",
      "Build a custom adapter using the legacy protocol and absorb the cost."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Before issuing a change request or absorbing the cost, verify the assumption completely. ERP vendors often have middleware layers, certified integration partners, or API gateway options that are not obvious in the main documentation. A 2-hour investigation may reveal a 2-week solution. Absorbing 4 weeks of engineering on an unverified problem is premature.",
    "framework": "Assumption Verification Before Escalation — when a technical assumption fails, exhaust alternatives before deciding who bears the cost.",
    "principle": "Discover the full solution space before allocating the problem.",
    "traps": [
      "Absorbing a 4-week gap on an assumption that the client also shared responsibility for sets a bad precedent.",
      "Issuing a change request before verifying there is no simpler solution weakens your negotiating position.",
      "Building a custom adapter for a legacy protocol when a supported path may exist is the most expensive first move."
    ]
  },
  {
    "id": "TD04",
    "category": "Technical Decisions",
    "difficulty": 3,
    "scenario": "You are 11 weeks into a 20-week project. Your architect discovers that the approved database schema — which 3 modules are now built on top of — has a fundamental flaw: it cannot support multi-tenancy, which is in the product roadmap for 6 months from now. Fixing it now means 3 weeks of rework. Ignoring it means a much larger rewrite later.",
    "quote": "\"That is a problem for future us. Deliver the current scope and let the next team deal with it.\"",
    "options": [
      "Log the flaw in the technical backlog, note that multi-tenancy is a Phase 2 concern, and plan a migration sprint at the start of Phase 2 when the scope formally expands.",
      "Fix it immediately. Rework now is cheaper than a rewrite later.",
      "Design a migration path: document what needs to change and build a phased approach into the roadmap.",
      "Present both options to the client with the cost and risk of each, and let them decide."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 15
    },
    "explanation": "A known architectural flaw that blocks a roadmap item 6 months away is a client disclosure obligation. They are paying for a system that needs to support their product roadmap. Presenting both options gives the client real information to make a business decision. Hiding the flaw and delivering \"clean\" is a betrayal of the advisory role.",
    "framework": "Architectural Risk Disclosure — when you discover a flaw that will affect the client's roadmap, disclose it. Let the client weigh the cost of fixing now vs the cost of fixing later.",
    "principle": "Your client is paying for your expertise. Hiding what you know is not protecting them.",
    "traps": [
      "Deferring the fix to a Phase 2 migration sprint assumes the migration will be straightforward once 3 additional modules are also built on top of the flawed schema — by Phase 2, the rework cost is likely 3x what it would be now.",
      "Fixing immediately without client input spends their budget without their consent.",
      "A migration path sounds disciplined but defers a real decision without giving the client the option to fix it now."
    ]
  },
  {
    "id": "TD05",
    "category": "Technical Decisions",
    "difficulty": 1,
    "scenario": "The client insists on hosting your application on their own on-premise servers. Their current server is a 5-year-old machine with 8GB RAM and a single-core processor running Windows Server 2012. Your application requires at minimum 16GB RAM and a modern multi-core environment to perform reliably.",
    "quote": "\"The client owns the infrastructure. It is their call where we host it.\"",
    "options": [
      "Document the performance risks in writing, get written acceptance from the client, and deploy with a formal disclaimer.",
      "Refuse to deploy until the client upgrades to the minimum specifications.",
      "Proceed with the client's server. It is their infrastructure decision.",
      "Propose a 3-month cloud trial before any on-premise decision, with a cost comparison."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "The client can choose their infrastructure but you cannot pretend insufficient infrastructure is your problem to solve post-deployment. Documenting the risk formally — \"the application cannot perform reliably below these specifications, and performance issues arising from this configuration are outside our support scope\" — protects you legally and gives the client a clear choice.",
    "framework": "Minimum Viable Infrastructure Documentation — when a client insists on substandard infrastructure, document the risk formally and get written acceptance before deploying.",
    "principle": "You can deploy anywhere. You can only support environments that meet the requirements.",
    "traps": [
      "Deploying without documentation means you own every performance complaint on their underpowered server.",
      "Refusing to deploy is an overreach — the decision is theirs to make, but the risk is theirs to accept in writing.",
      "A cloud trial adds time and cost to a client who has already made their hosting decision."
    ]
  },
  {
    "id": "TD06",
    "category": "Technical Decisions",
    "difficulty": 2,
    "scenario": "Two of your senior developers disagree on which framework to use for a new reporting module. Developer A wants to use your team's existing stack. Developer B wants to introduce a new framework they believe is significantly better for this use case. Both arguments are technically valid. The decision needs to be made this week.",
    "quote": "\"Let them fight it out. The best argument should win.\"",
    "options": [
      "Ask both developers to write a 1-page technical decision brief, present in a structured team review, and vote on the stronger argument.",
      "Run a 3-day spike: both developers build the same feature in their preferred framework and compare.",
      "Choose the new framework. If Developer B's argument is valid, take the better tool.",
      "Choose the existing stack. Consistency and reduced onboarding complexity outweigh marginal gains."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "When the debate is theoretical, make it empirical. A 3-day spike produces real evidence: actual code, real performance numbers, and actual developer experience. It also gives both developers ownership of the decision — whoever loses has contributed to a data-driven outcome, not been overruled by opinion.",
    "framework": "Technical Spike — use time-boxed spikes to resolve architectural debates with evidence rather than opinion.",
    "principle": "Turn arguments into experiments. Data ends debates.",
    "traps": [
      "A structured argument review still resolves the debate by opinion — it surfaces who argues better, not which framework actually performs better in your specific use case and team context.",
      "Defaulting to consistency is valid for minor decisions. A significant module in a reporting system is worth a spike.",
      "\"The argument is valid\" is not the same as \"the framework is right for this specific use case and team.\""
    ]
  },
  {
    "id": "TD07",
    "category": "Technical Decisions",
    "difficulty": 3,
    "scenario": "Your system depends on a third-party SMS gateway for OTP authentication. In production, the gateway has failed 3 times in the last 2 months — causing 15-45 minute outages each time. The vendor's SLA is 99.5% uptime but their actual performance has been 98.2%. Your client is asking why authentication is unreliable.",
    "quote": "\"The vendor is breaching their SLA. We should hold them accountable and wait for them to fix it.\"",
    "options": [
      "Formally invoke the SLA breach clause, request a root-cause analysis from the vendor, and schedule a review call in 30 days to assess whether they have resolved the underlying infrastructure issue.",
      "Replace the vendor immediately with a more reliable SMS gateway.",
      "Add a backup SMS gateway as a failover. Keep the primary vendor but route to backup on failure.",
      "Switch to email OTP as the primary authentication method to remove the SMS dependency."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "A single-vendor dependency for a critical auth path is a design risk regardless of SLA promises. The fastest path to reliability is failover — keep the primary vendor (or replace them) but route to a backup when the primary fails. This is standard resilience architecture for any business-critical integration.",
    "framework": "Vendor Dependency Resilience — single points of failure in critical paths need redundancy. SLA enforcement is a contractual remedy, not a technical one.",
    "principle": "SLA credits do not fix the outage. Redundancy does.",
    "traps": [
      "SLA breach procedures produce credits and a roadmap, not uptime. The next outage will still happen during the 30-day review window, and your client will still experience authentication failures while you wait for a vendor report.",
      "Replacing the vendor takes weeks and does not help current reliability while the switch is in progress.",
      "Email OTP has different security tradeoffs and requires client consent. It is not a direct substitute."
    ]
  },
  {
    "id": "TD08",
    "category": "Technical Decisions",
    "difficulty": 1,
    "scenario": "You are 2 weeks before starting data migration. Your data analyst has finished cleaning the client's legacy data and found that 23% of records have missing or incorrect fields that your new system requires as mandatory. The client's operations team says \"the data is fine, we know how to read it.\"",
    "quote": "\"If the operations team says the data is fine, it is fine. Load it.",
    "options": [
      "Load the data as-is. The operations team knows their data.",
      "Delay the migration until the client cleans the data to meet the required standards.",
      "Auto-correct missing fields using defaults and document the assumptions.",
      "Load valid records now. Flag and isolate the 23% with issues, provide a report, and give the client 2 weeks to correct them."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Loading dirty data into a system that requires clean data produces corrupted outputs from day one. The right move is a phased migration: load what is clean, isolate what is not, and give the client ownership of fixing the isolated records. This keeps the project moving while making data quality the client's responsibility to resolve.",
    "framework": "Phased Data Migration — migrate what is clean, quarantine what is not, and give the client a structured remediation path. Never let dirty data block all progress.",
    "principle": "Bad data in produces bad data out. No amount of logic fixes corrupt input.",
    "traps": [
      "\"The ops team knows their data\" is not the same as \"the data meets the system's requirements.\" These are different truths.",
      "Full delay for data cleaning gives the client no urgency and blocks your entire project.",
      "Auto-correcting with defaults manufactures data. The client may not know a default was applied."
    ]
  },
  {
    "id": "TD09",
    "category": "Technical Decisions",
    "difficulty": 2,
    "scenario": "A government client wants your application hosted on-premise inside their data center — citing data sovereignty. Your team has no experience managing on-premise infrastructure. Cloud hosting would be half the cost and take 4 weeks vs 12 weeks for on-premise setup. The client will not negotiate on this requirement.",
    "quote": "\"We can figure out on-premise. The contract is too important to lose over hosting preference.\"",
    "options": [
      "Accept the contract and immediately subcontract the infrastructure setup to a certified on-premise infrastructure partner.",
      "Accept the contract contingent on the client providing a dedicated on-premise infrastructure engineer from their IT team to handle server setup and configuration under your team's technical direction.",
      "Assign your most senior developer to study on-premise setup best practices for 2 weeks before the infrastructure sprint begins, then lead the configuration internally.",
      "Propose a private cloud setup within a Philippine data center as a compromise."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 10,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "On-premise infrastructure is a specialized skill. Accepting and subcontracting is the right move — it keeps the contract while bringing in the competency you lack. The subcontractor handles infrastructure, your team handles the application. This is how specialized implementation firms scale into new delivery models without pretending expertise they do not have.",
    "framework": "Competency Gap Bridging — identify what you do not know, find a partner who does, and structure the engagement so clients get full capability without requiring you to fake expertise.",
    "principle": "Subcontract your gaps. Never pretend they do not exist.",
    "traps": [
      "Relying on the client's IT team for infrastructure setup transfers the dependency onto a resource you cannot manage or hold accountable — delays in their setup directly block your application deployment with no recourse.",
      "Two weeks of self-study does not produce the configuration depth needed for a government data center environment — security hardening, network segmentation, and compliance controls require experience that cannot be compressed into pre-reading.",
      "A private cloud compromise may satisfy the technical intent but not the regulatory requirement of data sovereignty."
    ]
  },
  {
    "id": "TD10",
    "category": "Technical Decisions",
    "difficulty": 3,
    "scenario": "During UAT, your QA team discovers that the system response time under load (500 concurrent users) is 8-12 seconds per request. The client's requirement is under 3 seconds. Your lead developer says fixing this requires changing the core query architecture — a 5-week effort at this stage of the project.",
    "quote": "\"UAT users are heavy testers. Real users will not hit 500 concurrent sessions.\"",
    "options": [
      "Proceed to go-live. Real-world load will likely be lower than test load.",
      "Add database indexing and caching as a short-term fix to meet the 3-second requirement, and schedule the architecture rework post-go-live.",
      "Delay go-live by 5 weeks to fix the query architecture properly.",
      "Negotiate a new performance SLA with the client: accept 5 seconds as the new standard."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "The correct response is a layered fix: apply indexing and caching to hit the requirement for go-live (a known, tested approach), and schedule the architectural fix for a post-launch sprint when the risk profile is lower. This keeps the go-live date, meets the agreed SLA, and pays down the architectural debt on a proper timeline.",
    "framework": "Performance Fix Triage — distinguish between short-term fixes (indexing, caching) that meet SLA requirements and long-term architectural work that improves fundamentals. Apply both on different timelines.",
    "principle": "Ship what meets the requirement. Fix the foundation in production when stakes are lower.",
    "traps": [
      "Going live with 8-12 second response times on a 3-second SLA is a contractual breach from day one.",
      "A 5-week delay for an architectural fix when a valid short-term fix exists costs the project more than necessary.",
      "Renegotiating SLAs to cover your performance gap is dishonest and will be rejected by most clients."
    ]
  },
  {
    "id": "IM01",
    "category": "Implementation",
    "difficulty": 1,
    "scenario": "The system is technically ready for go-live. However, the client's team has completed only 30% of the required training. Key users — including the finance lead who will run month-end close on the new system — have not attended any sessions. Go-live is in 5 days.",
    "quote": "\"The system is ready. If the client's team is not trained, that is their problem.\"",
    "options": [
      "Go live as scheduled. User training is the client's responsibility.",
      "Delay go-live until key users complete training.",
      "Go live for the trained 30%, delay go-live for untrained users and critical processes.",
      "Compress training into 2 intensive days and proceed with go-live."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "A phased go-live by user readiness is the most pragmatic response. The trained 30% get value immediately. The finance lead — whose untrained status is a genuine business risk (month-end close failure is catastrophic) — is held back until ready. This distinguishes between \"we delayed the project\" and \"we protected the business from a predictable failure.\"",
    "framework": "Readiness-Gated Go-Live — go-live readiness is not just technical. User readiness for critical business processes is equally a go/no-go criterion.",
    "principle": "A system gone live that no one can use is not a successful go-live.",
    "traps": [
      "Going live when the finance lead is untrained guarantees a month-end close crisis within 30 days.",
      "Full delay for all users because some are untrained punishes the trained 30% unnecessarily.",
      "2 intensive days for someone with no exposure often produces false confidence, not real competence."
    ]
  },
  {
    "id": "IM02",
    "category": "Implementation",
    "difficulty": 2,
    "scenario": "During the final data migration run the night before go-live, you discover that 8% of inventory records were duplicated due to a mapping error in the migration script. The error is fixable but will take 6-8 hours to correct. Go-live is scheduled for 7am. It is currently midnight.",
    "quote": "\"Eight percent is manageable. We go live and fix it during hypercare.\"",
    "options": [
      "Proceed with go-live. Fix the duplicates during hypercare.",
      "Roll back to the old system tonight, run the corrected migration script tomorrow, and push go-live to the same time next week.",
      "Go live on schedule and run a parallel manual correction process alongside the new system.",
      "Delay go-live by 1 day. Fix the migration error properly and re-run validation."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A 1-day delay to fix a known data error is almost always the right call. Duplicate inventory records in an operations system cause cascading errors: double-counts in reports, incorrect reorder calculations, wrong stock valuations. These cascade faster than hypercare can fix them. One day of delay is dramatically cheaper than weeks of post-go-live data correction.",
    "framework": "Go-Live Data Quality Gate — data integrity errors discovered pre-go-live must be weighed against the cascading cost of those errors in a live system. 8% inventory duplicates is above any reasonable quality threshold.",
    "principle": "Fix known data errors before go-live. They compound in production.",
    "traps": [
      "Duplicate inventory records will propagate into every transaction from day one. \"We will fix it in hypercare\" becomes weeks of corrections.",
      "A full rollback discards 3 days of completed cutover work — data mappings, configuration, and user account setup — all of which must be redone. A 1-day targeted fix to the migration script is a far lower-cost intervention.",
      "Manual correction alongside a live system creates data inconsistency between manual and system records."
    ]
  },
  {
    "id": "IM03",
    "category": "Implementation",
    "difficulty": 2,
    "scenario": "The client wants a 4-week parallel run — running the old and new systems simultaneously so users can verify outputs match. Your team estimates it will require 60% of their capacity to support two live systems. The project budget has no allowance for parallel run support. You are already at the end of the contracted scope.",
    "quote": "\"Parallel runs are standard practice. We have to support it.\"",
    "options": [
      "Propose a scoped parallel run: 2 weeks instead of 4, covering only the highest-risk processes — as a change request.",
      "Decline. The parallel run was not in scope and you cannot afford the capacity.",
      "Support the full parallel run at no additional charge. It is part of good implementation practice.",
      "Advise the client to run the parallel internally and offer to review discrepancies on request."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "A parallel run is valuable for risk mitigation but it is also a project deliverable with real cost. A scoped version — 2 weeks covering critical processes only — is a legitimate negotiation. Presenting it as a change request maintains commercial integrity while showing the client you are working toward their success, not just protecting margins.",
    "framework": "Scope Change Recognition — parallel run support is a deliverable. If it was not in scope, it is a change request. Offer a scoped alternative to make the ask reasonable.",
    "principle": "Good faith does not mean unlimited scope. It means being honest about what your team can absorb.",
    "traps": [
      "Absorbing 60% of team capacity on out-of-scope work with no budget means burning your team and your margin.",
      "Declining entirely is commercially correct but damages the relationship at a critical project milestone.",
      "Client-run parallel with ad-hoc review puts all the work on the client and offers no real quality assurance."
    ]
  },
  {
    "id": "IM04",
    "category": "Implementation",
    "difficulty": 3,
    "scenario": "It is go-live weekend. Cutover is at midnight. At 10pm, your QA lead discovers a bug in the payroll calculation module: overtime pay is being calculated at the wrong rate for employees on shifting schedules. This affects approximately 15% of the client's employees. Go-live cannot be easily reversed — 3 days of cutover work has been completed.",
    "quote": "\"We are too far in to roll back. Go live and patch it first thing Monday.\"",
    "options": [
      "Proceed with go-live. Patch Monday morning before payroll runs.",
      "Escalate to the client's CEO and HR lead right now. Let them make the go/no-go call with full information.",
      "Go live, but immediately disable payroll processing for shifting employees pending the fix.",
      "Roll back the entire cutover and delay go-live."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "A payroll calculation error affecting 15% of employees is a material defect that the client's leadership must know about before go-live. They may have a payroll run scheduled for Monday. Informing them now gives them the options: proceed and disable payroll for shifting employees, roll back, or apply an emergency fix before 7am. Taking this decision yourself removes their agency on their most sensitive business process.",
    "framework": "Critical Defect Escalation — when a go-live defect affects employee pay, legal compliance, or financial integrity, escalate to the client immediately. Do not make this decision alone.",
    "principle": "Payroll errors are legal and employee trust issues. Always escalate these.",
    "traps": [
      "\"Patch Monday before payroll\" assumes payroll does not run until later. Payroll processing may be automated and immediate.",
      "Rolling back after 3 days of cutover work without consulting the client is a unilateral decision on their business.",
      "Disabling payroll for 15% of employees without telling the client creates a Monday crisis they have no context for."
    ]
  },
  {
    "id": "IM05",
    "category": "Implementation",
    "difficulty": 1,
    "scenario": "The client's project manager asks to skip UAT entirely, citing time pressure. They say their team \"trusts the system\" and wants to go straight from development to go-live. The project has a fixed go-live date tied to a regulatory deadline.",
    "quote": "\"If the client says skip UAT, we skip UAT. They own the risk.\"",
    "options": [
      "Skip UAT as requested. The client accepts the risk.",
      "Refuse to proceed without UAT. It is non-negotiable for quality.",
      "Compress UAT to 3 days focused only on regulatory-relevant processes.",
      "Perform internal testing as a substitute for UAT and present the results to the client."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "When UAT cannot be full, it should be risk-focused. Regulatory-deadline go-lives need to pass the regulatory processes above all else. A compressed 3-day UAT that covers every regulatory-critical workflow gives the client the assurance they need without sacrificing the timeline. Skipping it entirely, even with client consent, leaves you exposed when something regulatory fails in production.",
    "framework": "Risk-Based UAT Compression — when full UAT is impossible, cover the highest-consequence failure points first. Regulatory and financial processes always go first.",
    "principle": "Some testing is always better than no testing. Prioritize ruthlessly.",
    "traps": [
      "Client-accepted risk on a skipped UAT still damages your reputation when production fails. The client will forget they agreed to skip it.",
      "Refusing to proceed is too rigid when a reasonable compressed alternative exists.",
      "Internal testing is not UAT — it does not test the actual user workflow or catch user-specific edge cases."
    ]
  },
  {
    "id": "IM06",
    "category": "Implementation",
    "difficulty": 2,
    "scenario": "You ran 4 training sessions over 2 weeks. Post-training assessments show that users can perform tasks during training but support calls spike immediately after — users forget procedures as soon as the trainer leaves. Go-live is in 3 weeks.",
    "quote": "\"More training sessions will fix it. Schedule two more rounds before go-live.\"",
    "options": [
      "Run 2 more training sessions. Repetition improves retention.",
      "Switch to on-the-job training: embed trainers with users during their actual work for 3 days post-go-live.",
      "Create short video walkthroughs for each key process and post them on the company intranet.",
      "Build in-app guidance: contextual help tooltips, workflow prompts, and a searchable FAQ inside the system."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "If users forget as soon as the trainer leaves, the training format is the problem — not the volume. Adult learning research consistently shows that learning during real task execution is significantly more retained than classroom training. Embedding trainers for the first 3 days of live use is expensive but produces the highest adoption rate. In-app guidance is a great complement and should be built, but it is a reference tool — not a replacement for on-the-job coaching for complex workflows.",
    "framework": "Learning Transfer — classroom training produces knowledge. On-the-job coaching produces behavior change. The goal is behavioral change, not test scores.",
    "principle": "Train people in the context they will use the skill. Not before, not away from it.",
    "traps": [
      "More sessions of the same format that is already failing produces more of the same forgetting.",
      "In-app guidance is essential and should be built, but it is a reference tool, not a training replacement for complex workflows.",
      "Video walkthroughs are great for reference but have low engagement rates for users under time pressure."
    ]
  },
  {
    "id": "IM07",
    "category": "Implementation",
    "difficulty": 3,
    "scenario": "Phase 1 of a two-phase implementation went live 6 weeks ago. It has been rocky — 3 major bugs post-launch, a 2-day data sync failure, and ongoing user complaints. Phase 2 is scheduled to start next month and adds more complex functionality. The client's CEO is questioning whether to continue.",
    "quote": "\"Phase 1 had issues but Phase 2 will be better. We learned from the mistakes.\"",
    "options": [
      "Present a Phase 2 go/no-go assessment to the client CEO with a specific stability metric and a revised timeline.",
      "Delay Phase 2 until Phase 1 is stable — fewer than 5 open production issues for 3 consecutive weeks.",
      "Proceed with Phase 2 on schedule. You have learned from Phase 1.",
      "Offer to reduce Phase 2 scope to restore confidence, and proceed on schedule with the reduced scope."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "A CEO questioning Phase 2 deserves a rigorous, transparent assessment — not a sales pitch. Presenting specific go/no-go criteria (e.g., stability thresholds, open issue counts) and a revised timeline shows professional maturity. The CEO can make an informed decision rather than feeling managed.",
    "framework": "Phase Gate Review — each project phase should clear defined quality gates before the next begins. Make the criteria explicit, measurable, and shared with the client.",
    "principle": "Proceeding on schedule when the foundation is unstable multiplies the problems, not the solutions.",
    "traps": [
      "\"We learned from Phase 1\" is not a measurable commitment. The CEO needs evidence, not reassurance.",
      "Delaying without criteria is vague. \"Until it is stable\" is not actionable without a specific definition.",
      "Reducing scope to save the timeline still proceeds into Phase 2 before Phase 1 is proven stable."
    ]
  },
  {
    "id": "IM08",
    "category": "Implementation",
    "difficulty": 1,
    "scenario": "Two weeks after go-live, three of your client's most experienced employees — the \"power users\" who know the old system inside out — are openly telling their colleagues to use the old system workarounds instead of the new workflows. Their influence is causing 40% of the team to bypass the new system for key processes.",
    "quote": "\"It is the client's job to manage their own staff. We delivered the system.\"",
    "options": [
      "Share adoption metrics with the client's management team and recommend they initiate an internal change management campaign to reinforce the new workflows.",
      "Sit down directly with the power users. Understand their specific objections and address what is fixable.",
      "Escalate to the client's management and ask them to discipline the power users.",
      "Add system-enforced restrictions that prevent access to old workarounds."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Power users who resist adoption almost always have a real reason — a workflow gap, a missing feature, or a genuine usability problem. They are also your most effective advocates if you convert them. A direct conversation that takes their objections seriously is the highest-ROI intervention. Some objections will reveal genuine product gaps; others will be resolved through training.",
    "framework": "Influencer Conversion Strategy — in any adoption rollout, convert the skeptical power users first. They are the ones whose resistance spreads.",
    "principle": "The person loudest against the system usually understands it best. Listen to them.",
    "traps": [
      "Handing adoption metrics to management without your own direct engagement treats the symptom from a distance — managers communicating top-down mandates rarely convert skeptical power users, and the workarounds continue underground.",
      "Disciplining power users for using workarounds creates resentment and underground resistance.",
      "System restrictions without addressing the underlying objection convert resisters into adversaries."
    ]
  },
  {
    "id": "IM09",
    "category": "Implementation",
    "difficulty": 2,
    "scenario": "The go-live date is fixed by a government regulatory deadline — missing it means your client faces fines. With 5 weeks to go, you assess that the system needs 8 more weeks of work to be fully feature-complete as per the original scope. You cannot change the date.",
    "quote": "\"We have to deliver the full scope on time. Tell the team to work through the weekends.\"",
    "options": [
      "Push the team through weekends to deliver the full scope on time.",
      "Go live on the deadline with a partially complete system and document everything as \"in development.\"",
      "Inform the client immediately: present a prioritized MVP scope that can be delivered by the regulatory deadline.",
      "Ask the client to get a regulatory extension."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "A fixed deadline with an 8-week gap is a scope problem that requires an immediate, honest client conversation. The only ethical and practical path is to collaboratively define an MVP that meets the regulatory requirements by the deadline, with a clear post-launch roadmap for the remaining features. Forcing overtime to deliver the full scope will produce burnout and a low-quality go-live.",
    "framework": "MVP Scope Triage — when the deadline is fixed and the scope is not achievable, the scope must flex. Identify the regulatory minimum viable product and deliver that.",
    "principle": "A fixed deadline and a fixed scope is a fixed disaster. One of them must flex.",
    "traps": [
      "Weekend overtime to cover an 8-week gap in 5 weeks is mathematically impossible without damaging quality.",
      "Going live with incomplete features without a clear client-agreed scope creates expectation gaps and support nightmares.",
      "Regulatory extensions are rarely granted and should not be your first response to a delivery gap."
    ]
  },
  {
    "id": "IM10",
    "category": "Implementation",
    "difficulty": 3,
    "scenario": "Go-live morning. The integration between your new system and the client's accounting software fails completely — it worked perfectly in staging. Initial investigation shows the accounting software in production is running a different version than staging, with an incompatible API change. Hundreds of users are waiting to start work.",
    "quote": "\"Roll back and go home. We will fix it and reschedule.\"",
    "options": [
      "Roll back to the old system immediately.",
      "Keep the new system live, manually process accounting transactions for the day, and fix the integration by end of day.",
      "Call the accounting software vendor for emergency support and wait for their response before proceeding.",
      "Keep the new system live, isolate the accounting module, and activate a manual workaround for accounting only while your team fixes the integration."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "A full rollback costs the entire go-live investment and demoralizes the team and client. A manual workaround for the broken module keeps operations running while the team fixes the integration in parallel. Isolating the failure to one module is the correct incident response: contain, workaround, fix, restore.",
    "framework": "Go-Live Incident Containment — when a partial failure occurs at go-live, contain the failure, activate workarounds for the affected module, and fix in parallel. Full rollback is a last resort.",
    "principle": "One broken integration is not a broken go-live. Contain and fix.",
    "traps": [
      "Full rollback loses the entire go-live investment. The non-accounting modules are working — use them.",
      "Manual processing of all accounting for a full day without a clear fix timeline is unsustainable.",
      "Waiting for the vendor before doing anything is passive response when your team can contain the issue now."
    ]
  },
  {
    "id": "HC01",
    "category": "Hypercare",
    "difficulty": 1,
    "scenario": "It is Day 3 post go-live. Users are complaining the system is \"slow.\" Page load times average 4-6 seconds. In staging, loads averaged under 2 seconds. Your infrastructure is identical to staging. The client's CEO has already heard about it and is asking for a response.",
    "quote": "\"It is probably just user traffic. Give it a few days to settle.\"",
    "options": [
      "Immediately investigate: check server logs, database query times, and network latency against staging baselines.",
      "Add application-level caching for the most-used pages to reduce server load while you investigate the root cause.",
      "Scale up the server immediately to handle the load.",
      "Send the client a holding message and promise a resolution in 48 hours."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "Performance degradation on Day 3 is a red flag that needs immediate investigation, not patience. The gap between staging and production performance always has a specific cause: missing indexes, connection pool limits, N+1 queries under real data volume, or misconfigured caching. Start with logs and baselines — you need data before you can fix anything.",
    "framework": "Performance Triage Protocol — measure before you act. Server logs, query plans, and network traces tell you where the bottleneck is. Never scale blindly.",
    "principle": "You cannot fix a performance problem you have not measured.",
    "traps": [
      "Adding caching before diagnosing the root cause may mask a deeper problem — a misconfigured query or missing index will resurface the moment cache expires or data volume grows.",
      "Scaling up without diagnosing the root cause may add cost without fixing the actual bottleneck.",
      "A 48-hour holding message when the CEO has already heard about it is too slow."
    ]
  },
  {
    "id": "HC02",
    "category": "Hypercare",
    "difficulty": 2,
    "scenario": "Two weeks post go-live, a critical bug is discovered: the system is sending duplicate purchase order notifications — every PO triggers 2-3 email notifications to suppliers. Thirty clients are affected. Suppliers are confused and some have started processing duplicate orders as a result.",
    "quote": "\"It is just duplicate emails. Not the end of the world.\"",
    "options": [
      "Send a fix in the next scheduled release in 2 weeks.",
      "Push a hotfix immediately, notify all affected clients and their suppliers, and provide guidance on which orders are valid.",
      "Disable PO notifications entirely until the fix is ready.",
      "Tell clients to inform their suppliers to ignore duplicates while you work on the fix."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "Duplicate POs being processed by suppliers is a financial and operational emergency — not just a notification bug. The full response is immediate: hotfix, client notification with context, and guidance for suppliers on which orders are real. Partial responses (disable notifications, tell clients to warn suppliers) leave the financial exposure unresolved.",
    "framework": "Severity Classification — a bug causing downstream financial actions by third parties is a P1 incident. P1 incidents get hotfixes, full client communication, and executive notification within hours.",
    "principle": "When your bug causes financial actions outside your system, fix it at the speed of the business impact.",
    "traps": [
      "A 2-week scheduled fix while suppliers are processing duplicate orders creates weeks of financial reconciliation problems.",
      "Disabling notifications stops the bug but also stops legitimate PO workflows — breaking operations.",
      "Telling clients to \"warn suppliers to ignore duplicates\" is unworkable at scale and does not stop duplicate orders already in progress."
    ]
  },
  {
    "id": "HC03",
    "category": "Hypercare",
    "difficulty": 2,
    "scenario": "Your hypercare agreement covers 4 weeks post go-live with 8 hours of daily support. It is now Week 5. The client says they are \"not ready to transition to AMS\" and wants hypercare extended — at the same rate — for another 4 weeks. Your team is already assigned to a new project starting next week.",
    "quote": "\"We cannot leave the client stranded. Extend it at no cost.\"",
    "options": [
      "Extend hypercare at no cost for another 4 weeks.",
      "Refuse. The contract ended and your team has new commitments.",
      "Offer a 2-week transition extension at a reduced daily rate, with a formal AMS contract signed by end of week.",
      "Reduce hypercare to 4 hours/day for the extension period at the same daily rate."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Extending at no cost with no AMS contract sets a precedent that hypercare has no boundary. A 2-week bridge at a reduced rate gives the client a short transition period while moving them onto a proper commercial footing. It also respects your team's new project commitments by setting a hard endpoint.",
    "framework": "Hypercare-to-AMS Transition — define the transition clearly at the start of hypercare. When clients resist leaving, offer a bridging extension only with an AMS contract signed in parallel.",
    "principle": "Goodwill extensions without a commercial path create an expectation of unlimited free support.",
    "traps": [
      "Free extension without AMS signup creates an indefinite support obligation with no revenue.",
      "Refusing abruptly damages the relationship and leaves the client with a genuine support gap.",
      "Same rate for half the support is commercially fair but does not solve the AMS transition problem."
    ]
  },
  {
    "id": "HC04",
    "category": "Hypercare",
    "difficulty": 3,
    "scenario": "Week 3 of hypercare. The client's operations director tells you in confidence that the CEO is considering rolling back to the old system. The reasons: 3 bugs in the first 2 weeks, the system is slower than expected for certain reports, and user adoption is at 55%. Your team has fixed 2 of the 3 bugs.",
    "quote": "\"If they want to roll back, let them. We delivered what was contracted.\"",
    "options": [
      "Send a written status update to the CEO summarizing bugs fixed and progress to date, and ask if they have remaining concerns.",
      "Escalate internally to your own CEO to handle the client relationship.",
      "Offer a full refund to end the relationship cleanly.",
      "Request an emergency steering committee meeting with the CEO, present the fixes made, the adoption plan, and a specific 2-week recovery commitment."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "A rollback threat in Week 3 is a recoverable situation. The CEO has concerns — some legitimate, some perception-based. A direct meeting where you present what has been fixed, what is being fixed, and a concrete 2-week recovery plan with measurable outcomes gives them a reason to wait. Most rollback decisions are reversed when the vendor shows up with accountability and specifics.",
    "framework": "Client Recovery Meeting — when a client is considering rollback, the fastest path to reversal is a direct meeting with specific commitments and a measurable timeline.",
    "principle": "A rollback decision made without a response from you is a decision made with incomplete information.",
    "traps": [
      "A written status update is too passive for a rollback threat — it allows the CEO to read it at their convenience, form a final opinion alone, and respond with a decision rather than a conversation.",
      "A full refund offer signals you believe the project failed — it accelerates the rollback decision.",
      "Escalating to your own CEO without first attempting a direct response is premature."
    ]
  },
  {
    "id": "HC05",
    "category": "Hypercare",
    "difficulty": 1,
    "scenario": "It is Week 2 of hypercare. Your support inbox has 47 open tickets. Your hypercare team of 2 is resolving about 8 tickets per day, but new ones are arriving at 15 per day. The backlog is growing and client satisfaction scores are dropping.",
    "quote": "\"We just need to work faster. The team should skip lunch breaks to clear the backlog.\"",
    "options": [
      "Triage tickets by severity. P1 and P2 issues get resolved in SLA. P3 and P4 tickets get batched into a weekly resolution.",
      "Push the team harder. Clear the backlog through overtime.",
      "Add a third hypercare team member immediately.",
      "Tell the client to slow down their ticket submissions until the backlog is under control."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Not all 47 tickets carry the same urgency. Triage by severity is the correct operational response. High-severity issues get immediate attention. Low-severity issues get batched and communicated with a clear timeline. This gives clients predictable resolution while protecting your team from burnout and preventing the backlog from destroying morale.",
    "framework": "Support Triage by Severity — P1 (system down) → immediate. P2 (major function broken) → same day. P3 (minor issue) → weekly batch. Never apply equal urgency to unequal problems.",
    "principle": "Treating all tickets the same is how your best tickets get buried under noise.",
    "traps": [
      "Overtime on a growing backlog is not a system fix. You cannot hire your way out of a process problem.",
      "Adding a third person helps capacity but does not fix the root issue: no triage prioritization.",
      "Telling clients to slow ticket submissions is commercially indefensible during hypercare."
    ]
  },
  {
    "id": "HC06",
    "category": "Hypercare",
    "difficulty": 2,
    "scenario": "It is 2:15am. You receive a Slack message from the client's warehouse manager: the inventory system is down and they cannot process any goods receipt. Their morning shift starts at 6am. The on-call developer is unreachable. You have one developer who is not on-call but knows the system.",
    "quote": "\"This is not my shift. The on-call developer should handle it.\"",
    "options": [
      "Keep trying to reach the on-call developer. It is their responsibility.",
      "Contact the off-call developer and explain the business impact. Ask if they can help.",
      "Send the client a message saying you are working on it and will update them by 5am.",
      "Escalate to your CTO and wait for their direction."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A system-down incident 4 hours before shift start is a business emergency. Rigid on-call protocol adherence when the on-call developer is unreachable is a process failure that the client will experience as abandonment. Contact the off-call developer, explain the situation, and let them choose. Most will help when they understand the impact. Compensate them afterward.",
    "framework": "Incident Escalation Beyond Protocol — when protocol fails (on-call unreachable), escalate to available capability. Document, compensate, and fix the on-call process post-incident.",
    "principle": "Process exists to serve outcomes. When it fails, use judgment.",
    "traps": [
      "Keep trying the on-call developer while a warehouse sits idle for 4 hours produces a crisis at 6am.",
      "\"Update by 5am\" with no resolution path is a holding message, not incident management.",
      "Waiting for CTO direction at 2am for a known technical problem adds 30-60 minutes of delay unnecessarily."
    ]
  },
  {
    "id": "HC07",
    "category": "Hypercare",
    "difficulty": 3,
    "scenario": "Week 4 of hypercare. A bug report comes in from one client, then a second, then a third — all describing the same issue: the month-end closing report is generating incorrect totals for clients with multi-currency transactions. You have 6 clients with multi-currency enabled. Month-end is in 3 days.",
    "quote": "\"Let us fix it for the clients who reported it and see if others notice.\"",
    "options": [
      "Fix it for the 3 clients who reported it and monitor for more reports.",
      "Disable multi-currency for all clients until the fix is deployed.",
      "Proactively notify all 6 multi-currency clients immediately, pause month-end reporting for them, and push a hotfix.",
      "Tell clients to delay month-end close by 1 week while you fix the bug."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "When the same bug appears across 3 clients with the same configuration, it is systemic. All 6 multi-currency clients are affected — they just have not discovered it yet. Proactive notification prevents 3 more urgent escalations in 3 days and demonstrates that you caught a systemic issue before all clients did. This is the difference between reactive and proactive incident management.",
    "framework": "Systemic Bug Response — when a bug pattern is detected across multiple clients with the same configuration, treat all affected clients as impacted immediately. Do not wait for them to report it.",
    "principle": "If 3 clients hit the same bug, the other 3 already have it. Tell them before they find out.",
    "traps": [
      "Fixing only the reporters and waiting guarantees 3 more escalation calls during month-end — the worst possible time.",
      "Disabling multi-currency for all clients breaks a paid feature they depend on.",
      "Telling clients to delay month-end close is not within your authority to ask. Month-end is a regulatory and business obligation."
    ]
  },
  {
    "id": "HC08",
    "category": "Hypercare",
    "difficulty": 1,
    "scenario": "Week 3 of hypercare. The client is logging every deviation from their expected behavior as a \"defect\" — including features that work exactly as designed but differently from how their old system worked. Of the 31 open tickets, your QA lead estimates 18 are behavioral differences, not bugs. The client is tracking \"defect count\" and comparing it unfavorably to their old system.",
    "quote": "\"Let us just fix whatever they raise. They are the client and they are unhappy.\"",
    "options": [
      "Fix everything the client labels as a defect regardless of classification.",
      "Batch the 18 behavioral-difference tickets into a separate list, mark them as low-priority, and commit to reviewing them after the genuine bugs are resolved.",
      "Tell the client that 18 of their tickets are not defects and close them unilaterally.",
      "Classify each ticket formally: defect, behavioral difference, or enhancement request — and walk the client through the classification with evidence."
    ],
    "correct": 3,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Ticket classification is a professional responsibility, not a negotiation. Walking the client through the classification — showing which tickets are genuine bugs (to be fixed at no cost), which are behavioral differences (by design, documented), and which are enhancement requests (change request or AMS scope) — resets the conversation from \"you have 31 defects\" to an accurate picture.",
    "framework": "Defect vs Enhancement Classification — every support ticket must be classified before action. Unclassified tickets create scope creep and distort quality perception.",
    "principle": "Fixing everything called a defect is not quality. It is avoidance of a necessary conversation.",
    "traps": [
      "Fixing behavioral differences as bugs sets a precedent that any deviation from the old system is a free fix — unlimited scope.",
      "Batching without a transparent classification conversation leaves the client unaware that 18 of their tickets are working as designed — the defect count dispute continues unresolved.",
      "Unilaterally closing tickets without explanation is confrontational and guarantees an escalation."
    ]
  },
  {
    "id": "HC09",
    "category": "Hypercare",
    "difficulty": 2,
    "scenario": "Three weeks post go-live, the client's finance team discovers that 6 months of historical data imported during migration shows incorrect foreign exchange rates for 2 specific currency pairs. The data was signed off during UAT. The error affects historical reports but not current transactions.",
    "quote": "\"They signed off on the migration. This is their data problem.\"",
    "options": [
      "Investigate the root cause, correct the data, and propose a post-correction validation plan.",
      "Inform the client it was UAT-signed data and the responsibility is theirs.",
      "Correct the data and say nothing. The client only checks reports quarterly.",
      "Advise the client to run manual reconciliation and not rely on the historical reports."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "UAT sign-off reduces your liability but does not eliminate your professional obligation when you discover a data error. The right response is to investigate, fix the data, and validate — regardless of who signed off. Historical data integrity in a finance system affects audit trails and reporting accuracy. Taking ownership here is what separates a trusted partner from a vendor.",
    "framework": "Post-Migration Data Integrity — data errors discovered post go-live should be investigated and corrected, even if UAT was completed. Data integrity is a shared responsibility.",
    "principle": "UAT sign-off is a liability shield, not an excuse to ignore known data errors.",
    "traps": [
      "Pointing to the UAT sign-off is technically correct but destroys the trusted partner relationship.",
      "Correcting silently without disclosure means the client makes decisions on data you know is wrong.",
      "Telling the client not to trust their own historical reports is not a solution."
    ]
  },
  {
    "id": "HC10",
    "category": "Hypercare",
    "difficulty": 3,
    "scenario": "Day 8 post go-live. A production bug is causing 3-5 second delays on a key transaction screen. The client's operations manager — under pressure from their team — demands you deploy a workaround directly to production without going through your standard change management process (which requires 48-hour testing).",
    "quote": "\"Just push the fix. We cannot wait 48 hours. The team is screaming.\"",
    "options": [
      "Deploy the workaround directly to production as requested.",
      "Deploy to a staging environment, run a targeted 2-hour smoke test, then deploy to production with the client's sign-off.",
      "Refuse. Standard change management exists for exactly these situations.",
      "Give the client read-only access to staging so their team can validate the fix themselves before you deploy."
    ],
    "correct": 1,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "An untested production push under client pressure is how you turn a 3-second delay into a system outage. A 2-hour targeted smoke test on staging is a reasonable compression of the 48-hour standard — it preserves the spirit of change control while meeting the urgency. Getting client sign-off after staging validation means they own the go-decision.",
    "framework": "Compressed Change Management — never skip change management; compress it. A 2-hour smoke test is not the same as no test.",
    "principle": "Pressure to skip testing is pressure to create a worse problem.",
    "traps": [
      "An untested production fix from a developer under pressure has a high probability of causing a new and worse issue.",
      "Refusing to adapt the process at all ignores a legitimate urgency. 48 hours for a 3-second delay bug is disproportionate.",
      "Client validation on staging is an interesting idea but adds time and puts the validation burden on people who are not QA professionals."
    ]
  },
  {
    "id": "AMS01",
    "category": "AMS",
    "difficulty": 1,
    "scenario": "Your AMS contract covers corrective maintenance (bug fixes) and minor enhancements up to 8 hours each. A client submits a ticket: \"Add a new column to the inventory report showing the supplier's payment terms.\" Your developer estimates it at 6 hours. The client says \"it is just a small column.\"",
    "quote": "\"Six hours fits the contract. Just do it.\"",
    "options": [
      "Do it immediately. It is within the 8-hour enhancement threshold.",
      "Decline. Report changes are a new feature, not a minor enhancement.",
      "Do it but inform the client it is consuming 6 of their monthly enhancement hours.",
      "Assess whether \"minor enhancement\" is defined in the contract and confirm scope with the client before starting."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "The right AMS behavior is transparent consumption tracking. If your contract includes monthly enhancement hours, the client should always know how many they are using and how many remain. This prevents end-of-month surprises when the client asks for something else and discovers the hours are gone. Informed clients make better prioritization decisions.",
    "framework": "AMS Hour Transparency — track and communicate enhancement hour consumption in real time. Clients who know their balance make better requests.",
    "principle": "Hourly AMS work should always be visible. No hidden consumption.",
    "traps": [
      "Doing it without communicating hour consumption means clients are surprised when hours run out.",
      "A report column is a reasonable minor enhancement. Declining is over-restrictive.",
      "Checking the contract definition is good practice but should not delay a clearly in-scope request."
    ]
  },
  {
    "id": "AMS02",
    "category": "AMS",
    "difficulty": 2,
    "scenario": "Your AMS contract specifies P1 response within 1 hour and resolution within 4 hours. It is Tuesday afternoon. A P1 ticket was logged at 2pm — system is down for one department. It is now 6:15pm. The issue is still unresolved. The client is escalating.",
    "quote": "\"We were working on it all afternoon. We just need a little more time.\"",
    "options": [
      "Send the client a brief update confirming the team is still active on the issue and provide a revised estimated resolution time.",
      "Offer a service credit proactively and continue working.",
      "Reclassify the ticket as P2 to reset the SLA clock.",
      "Acknowledge the SLA breach immediately, give the client a new expected resolution time, and escalate internally to add more resources."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "An SLA breach in progress requires immediate acknowledgment, not silence. The client knows the SLA was missed — your job now is to restore confidence through transparent communication: \"We have breached the SLA, here is what has happened, here is the new target, here is what we are doing.\" Adding resources and giving a realistic new target is more valuable than pretending the breach is not happening.",
    "framework": "SLA Breach Response — acknowledge immediately, give a realistic new timeline, add resources. Never ignore an active breach.",
    "principle": "An SLA breach not acknowledged is an SLA breach compounded by silence.",
    "traps": [
      "A brief update without acknowledging the SLA breach treats a governance failure like a routine status ping — the client is escalating because the SLA was missed, and that must be named and owned before a new ETA has any credibility.",
      "Reclassifying a ticket to reset the SLA clock is fraudulent and will destroy trust permanently if discovered.",
      "Offering a service credit without also communicating a new resolution time does not solve the active outage."
    ]
  },
  {
    "id": "AMS03",
    "category": "AMS",
    "difficulty": 2,
    "scenario": "Your AMS contract covers up to 50 named users at a fixed monthly fee. The client has just onboarded 12 new employees and wants to add them to the system immediately. Adding them would bring the total to 62 users — 12 over the contracted limit. The client says \"it is just users, it should not cost extra.\"",
    "quote": "\"Adding users is easy. Let us just add them and sort the pricing out later.\"",
    "options": [
      "Add the users and immediately send a contract amendment for the additional users, noting the overage.",
      "Refuse to add users until a contract amendment is signed.",
      "Add the users immediately. Worry about the contract later.",
      "Add the users for a 30-day grace period while the client processes the contract change."
    ],
    "correct": 0,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "Adding users and immediately sending a contract amendment is the commercial best practice. It does not block the client's onboarding (which is a legitimate business need) but it also does not let the overage become a permanent undocumented free addition. The amendment process is triggered the moment the overage occurs.",
    "framework": "Contract Amendment Trigger — any usage that exceeds contracted scope should trigger an immediate amendment process. Do not wait for renewal.",
    "principle": "Goodwill does not mean undocumented scope creep. Help the client and fix the contract.",
    "traps": [
      "Adding users and worrying about it later often means you never get paid for the overage.",
      "Refusing to add users blocks legitimate business operations and damages the relationship over a commercial formality.",
      "A 30-day grace period is commercially soft — the amendment should be triggered immediately, even if the payment follows."
    ]
  },
  {
    "id": "AMS04",
    "category": "AMS",
    "difficulty": 3,
    "scenario": "Your AMS client says the system is \"too slow\" and threatens to invoke the performance clause in the contract. However, when you check server metrics, CPU is at 35%, memory at 50%, and database response times are under 100ms. Your monitoring shows no performance issues. The client cannot provide specific examples.",
    "quote": "\"The client says it is slow. Let us just upgrade the server to be safe.\"",
    "options": [
      "Upgrade the server. It is the easiest way to resolve the dispute.",
      "Arrange a joint troubleshooting session where you observe the client's team using the system in real time.",
      "Share the monitoring data with the client and ask for specific examples: which screens, what times, how often.",
      "Dispute the performance clause invocation in writing and reference your monitoring data."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 10
    },
    "explanation": "When your monitoring shows no issue, the slowness is either client-side (their network, their devices), intermittent (not captured in monitoring), or perception-based (compared to a previous system). A joint session where you observe real usage in real time is the fastest way to either find a real issue or demonstrate the system is performing correctly.",
    "framework": "Collaborative Performance Diagnosis — when client perception and monitoring data conflict, observe together. Real-time observation resolves perception gaps faster than data arguments.",
    "principle": "You cannot fix a performance problem your monitoring cannot see without watching it happen.",
    "traps": [
      "Upgrading a server that is 35% utilized wastes money and does not fix the actual (unknown) problem.",
      "Sharing data alone in a dispute often triggers the client to \"find their own evidence\" rather than resolving.",
      "Disputing in writing turns a support issue into a legal one before collaborative diagnosis has been attempted."
    ]
  },
  {
    "id": "AMS05",
    "category": "AMS",
    "difficulty": 1,
    "scenario": "An AMS client submits an urgent enhancement request: they need a new government compliance report by the end of the month — 10 days away. The work is estimated at 35 hours. Your AMS team is at full capacity for the next 3 weeks with existing tickets.",
    "quote": "\"Compliance is always top priority. We have to fit it in.\"",
    "options": [
      "Fit it in. Compliance requirements always take priority.",
      "Tell the client you cannot accommodate the request given current capacity.",
      "Offer to fast-track the request at a premium rate by temporarily adding a resource.",
      "Deprioritize existing AMS tickets to fit the compliance work within the current team."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "A legitimate compliance deadline is a fast-track trigger. You cannot absorb 35 hours on a full team without deprioritizing something — which affects other clients. Offering a premium-rate expedited resource is the commercial and operational correct answer: you deliver the compliance report, the client pays for the urgency, and your other clients are not deprioritized.",
    "framework": "Urgent Request Commercial Response — when capacity is full and urgency is genuine, offer a fast-track option at a premium rather than either refusing or absorbing invisibly.",
    "principle": "Urgency has a cost. Pricing it correctly is fair to all parties.",
    "traps": [
      "\"Compliance always takes priority\" is true for the client, but someone else's ticket gets deprioritized to make room — at no extra cost to you.",
      "Refusing a compliance request without offering an alternative damages the relationship at a critical moment.",
      "Deprioritizing other clients' work without their knowledge violates your obligation to those clients."
    ]
  },
  {
    "id": "AMS06",
    "category": "AMS",
    "difficulty": 2,
    "scenario": "Your AMS contract is up for renewal in 60 days. The client has been happy but now says they want to renew at the same monthly fee while increasing scope by 50%: more users, a new integrated module, and expanded support hours from 8 to 12 hours/day.",
    "quote": "\"They are a good client. Let us renew at the same rate to keep them.\"",
    "options": [
      "Renew at the same rate. Long-term relationship value outweighs short-term margin.",
      "Decline to renew unless scope is reset to the original contract.",
      "Offer a 10% rate increase for the expanded scope as a compromise.",
      "Present a revised pricing proposal that reflects the expanded scope — show the cost breakdown transparently."
    ],
    "correct": 3,
    "consequences": {
      "cash": 10,
      "growth": 5,
      "profitability": 15,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "A 50% scope increase at 0% price increase means your AMS profitability drops significantly. The right move is a transparent, line-by-line cost breakdown showing what the expanded scope costs to deliver. Clients who understand the cost structure almost always negotiate to a fair middle ground. Clients who refuse a fair price for expanded scope after seeing the breakdown reveal a relationship problem, not a pricing problem.",
    "framework": "AMS Renewal Pricing — scope expansions at renewal require repricing. Present a transparent cost breakdown before negotiating. Opacity invites refusal; transparency invites conversation.",
    "principle": "Same price for 50% more work is not a renewal — it is a subsidy.",
    "traps": [
      "Renewing at same rate for 50% more scope sets a precedent and starts the next renewal from an even worse position.",
      "Declining to renew before negotiating is commercially aggressive when the relationship is strong.",
      "A flat 10% increase for 50% more scope is under-priced without seeing the actual cost breakdown."
    ]
  },
  {
    "id": "AMS07",
    "category": "AMS",
    "difficulty": 3,
    "scenario": "Your sole AMS engineer for a critical client has just resigned with 2 weeks' notice. This engineer is the only person who fully understands the client's custom integrations — built 18 months ago with minimal documentation. The client's system requires active maintenance weekly.",
    "quote": "\"Two weeks is enough time to document everything. We will figure it out.\"",
    "options": [
      "Inform the client immediately, begin emergency knowledge transfer, and bring in a second engineer this week to shadow.",
      "Have the resigning engineer document everything in 2 weeks and hand over to a new hire.",
      "Delay the resignation by offering the engineer a stay bonus for 60 days.",
      "Tell the client only after you have a replacement in place."
    ],
    "correct": 0,
    "consequences": {
      "cash": -10,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -25,
      "strategicPosition": 5
    },
    "explanation": "Two weeks of documentation cannot replace 18 months of tacit knowledge. Emergency knowledge transfer requires a second engineer shadowing in real time, not reading docs. The client must know immediately — they need to prepare for potential service disruption and may have their own IT resources to contribute to the transition. Hiding the situation until a replacement is found leaves the client exposed without warning.",
    "framework": "Key Person Risk Response — when a sole knowledge holder leaves, activate emergency knowledge transfer immediately: shadowing, not documentation, is the primary mechanism.",
    "principle": "Documentation written under 2-week pressure captures 30% of what the engineer knows. Shadowing captures 70%.",
    "traps": [
      "2 weeks of documentation by a disengaged engineer about to leave produces incomplete, rushed artifacts.",
      "A stay bonus may buy time but the engineer is already mentally gone. Use the 60 days for proper knowledge transfer, not false security.",
      "Hiding the situation until a replacement is ready leaves the client unprotected. If something breaks in the gap, trust is destroyed."
    ]
  },
  {
    "id": "AMS08",
    "category": "AMS",
    "difficulty": 1,
    "scenario": "An AMS client requests a new API integration between your system and a third-party logistics platform they just signed up with. The integration would take an estimated 40 hours. Your AMS contract covers corrective maintenance and minor enhancements up to 8 hours. The client says \"the system should already have this.\"",
    "quote": "\"They are a good client. Build it as goodwill under the AMS.\"",
    "options": [
      "Build it as goodwill. Maintaining the relationship is worth the investment.",
      "Classify it as a project — outside AMS scope — and provide a formal proposal with pricing.",
      "Decline. The contract does not cover this and you should not set the precedent.",
      "Build it as a bundled enhancement in the next contract renewal."
    ],
    "correct": 1,
    "consequences": {
      "cash": 10,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "A 40-hour API integration is a project, not an AMS enhancement. Doing it as goodwill sets a precedent that any new integration is included in the AMS — an open-ended commitment worth tens of thousands over a contract term. A formal proposal is professional, not punitive. Well-structured clients expect it and respect the clarity.",
    "framework": "AMS vs Project Scope Boundary — AMS covers maintaining what exists. New integrations are projects. Blurring this boundary creates unlimited scope exposure.",
    "principle": "Goodwill that sets a commercial precedent is not goodwill. It is an undisclosed discount.",
    "traps": [
      "40 hours of work as \"goodwill\" is ₱X in lost revenue and the start of the client expecting all integrations free.",
      "Declining without proposing an alternative damages the relationship unnecessarily.",
      "Bundling in renewal kicks the problem 12 months down the road and buries the real cost."
    ]
  },
  {
    "id": "AMS09",
    "category": "AMS",
    "difficulty": 2,
    "scenario": "Six months post go-live, the client claims a specific workflow \"does not work correctly.\" When you investigate, you find the workflow was tested and accepted during UAT, matches the functional specification, and has been working as designed since day one. However, the client says it \"does not make sense the way it works.\"",
    "quote": "\"They accepted it in UAT. We are not touching it.\"",
    "options": [
      "Close the ticket. The workflow was accepted in UAT.",
      "Fix the workflow at no cost. The client should not have to live with something that does not make sense.",
      "Formally document: this is working as designed (WAD), per UAT sign-off. Offer to redesign it as a paid enhancement.",
      "Investigate whether the workflow actually has a bug that was missed during UAT."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "Working-as-designed is a legitimate ticket classification. However, \"does not make sense\" is sometimes a signal of a genuine design flaw that the client only discovered through real use. The WAD classification plus a paid enhancement offer handles both scenarios: it protects you commercially while giving the client a path to improve the workflow if the issue is real.",
    "framework": "WAD Classification with Enhancement Path — always accompany a \"Working as Designed\" response with a formal enhancement option. It validates the client's frustration while maintaining commercial integrity.",
    "principle": "WAD without a path forward is a dead end for the client relationship.",
    "traps": [
      "Closing without explanation leaves the client feeling dismissed.",
      "Fixing WAD workflows at no cost signals that UAT sign-off means nothing.",
      "Investigation before classification is correct practice — but if the investigation confirms WAD, the answer is still Option C."
    ]
  },
  {
    "id": "AMS10",
    "category": "AMS",
    "difficulty": 3,
    "scenario": "You are reviewing your AMS profitability quarterly. One client — your longest-running AMS account — is generating ₱18K/month in fees but your team is spending an average of 90 hours/month on their account. At your blended rate, that is ₱36K worth of effort for ₱18K of revenue. The client is demanding and has rejected two previous enhancement proposals.",
    "quote": "\"They have been with us for 3 years. We cannot raise the price.\"",
    "options": [
      "Schedule the repricing conversation for the next annual renewal rather than raising it mid-contract, to avoid disrupting the relationship.",
      "Terminate the contract at the next renewal cycle.",
      "Reduce service levels to match what ₱18K actually buys at your rates.",
      "Present the client with a revised pricing proposal based on actual usage, with a 90-day notice if they decline."
    ],
    "correct": 3,
    "consequences": {
      "cash": 10,
      "growth": 5,
      "profitability": 15,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -5,
      "strategicPosition": 10
    },
    "explanation": "A contract running at 50% of cost is not a client relationship — it is a subsidy. Presenting the actual usage data transparently gives the client two options: pay a fair price or exit the contract. Most rational clients, shown the data, will negotiate. Those who refuse a fair price after seeing the cost breakdown confirm the relationship is not commercially viable.",
    "framework": "AMS Profitability Review — review account economics quarterly. When an account is structurally unprofitable, reprice it or exit it. Long tenure does not justify subsidization.",
    "principle": "A client you cannot profitably serve is a client you cannot serve well.",
    "traps": [
      "Waiting for renewal allows several more months of 50% loss — and signals to the team that known unprofitable accounts are tolerated without intervention.",
      "Terminating without first attempting repricing is a missed commercial opportunity and a relationship burned unnecessarily.",
      "Quietly reducing service levels without telling the client is a contract breach that invites a legal dispute."
    ]
  },
  {
    "id": "RQ01",
    "category": "Risk & Quality",
    "difficulty": 1,
    "scenario": "UAT has been running for 1 week of the planned 2 weeks. The bug count is 47: 3 P1s, 12 P2s, and 32 P3/P4s. Your QA lead says this is double the acceptable threshold for a go-live in 1 week. The client's project manager says \"the team will work through the weekend to clear them.\"",
    "quote": "\"We have a week left. The team will fix everything by Friday.\"",
    "options": [
      "Re-evaluate go-live readiness honestly. Propose a 1-week delay to clear all P1s and P2s properly.",
      "Commit to clearing all 47 bugs by go-live. Push the team over the weekend.",
      "Go live with P1s resolved. Create a post-go-live bug fix plan for P2s and P3s.",
      "Reclassify some P2 bugs as P3s to reduce the apparent severity count."
    ],
    "correct": 0,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A 1-week delay to resolve P1s and P2s properly is the right call when the bug count is double the acceptable threshold. Going live with 15 high-severity bugs means a brutal hypercare phase. Weekend overtime to fix 47 bugs in parallel introduces regression risk — rushed fixes create new bugs. A short delay is always cheaper than a failed go-live.",
    "framework": "Go-Live Readiness Gate — define acceptable bug thresholds before UAT starts. When those thresholds are breached, delay is the professional response.",
    "principle": "The cost of a 1-week delay is always less than the cost of a bad go-live.",
    "traps": [
      "Committing to 47 bugs in 1 week under pressure produces rushed fixes and regression issues.",
      "Going live with open P2 bugs means known functional issues enter production on Day 1.",
      "Reclassifying bugs to improve metrics is the most dangerous option — it hides real risk."
    ]
  },
  {
    "id": "RQ02",
    "category": "Risk & Quality",
    "difficulty": 2,
    "scenario": "Your QA engineer discovers a SQL injection vulnerability in the client-facing search module during routine security testing. The system is live in production with 800 active users. Exploiting the vulnerability could expose client data. Your lead developer estimates a fix takes 3-4 hours.",
    "quote": "\"Three hours to fix — let us schedule it for next week's deployment window.\"",
    "options": [
      "Schedule the fix in the next planned deployment window.",
      "Take the affected module offline immediately and deploy the fix within the day.",
      "Deploy the fix immediately without going through the change management process.",
      "Notify the client of the vulnerability and let them decide when to fix it."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": -5,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -25,
      "strategicPosition": 5
    },
    "explanation": "A SQL injection vulnerability in production is a P0 security incident. Taking the module offline immediately removes the attack surface while the fix is prepared. A same-day fix with compressed change management (expedited review, not skipped) is the correct response. Scheduling security vulnerabilities in normal deployment windows is a governance failure.",
    "framework": "Security Incident Severity Classification — SQL injection vulnerabilities are critical. Immediate offline of the affected component, same-day fix, and formal post-incident review are mandatory.",
    "principle": "Live security vulnerabilities have no scheduled fix window. They have an immediate response.",
    "traps": [
      "Scheduling a known SQL injection fix for next week leaves production exposed for 7+ days.",
      "Deploying without any change management for a security fix risks introducing a regression in a different module.",
      "Notifying the client and letting them decide is abdication of your security responsibility as the system provider."
    ]
  },
  {
    "id": "RQ03",
    "category": "Risk & Quality",
    "difficulty": 2,
    "scenario": "UAT is in Week 2. The client's UAT team has started testing functionality that was explicitly marked as out of scope in the project charter. They are logging bugs against out-of-scope features and counting them in the overall UAT metrics. This is inflating the defect count and delaying acceptance.",
    "quote": "\"We should just fix whatever they find. Better to exceed expectations.\"",
    "options": [
      "Fix everything they find regardless of scope. It builds goodwill.",
      "Stop the UAT. Refuse to accept any out-of-scope bug reports.",
      "Document which items are out of scope, decline to fix them in this project, and propose them as a post-launch enhancement backlog.",
      "Accept the out-of-scope bugs as enhancement requests and submit change requests for pricing."
    ],
    "correct": 2,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 5
    },
    "explanation": "Scope control during UAT is critical. Out-of-scope bugs fixed for free become permanent scope additions with no commercial recognition. Documenting them as post-launch enhancements is respectful — you acknowledge the feedback without fixing it at no cost. The client gets a clear picture of what comes next.",
    "framework": "UAT Scope Control — UAT tests what was built against what was contracted. Out-of-scope items discovered during UAT are enhancement inputs, not defect reports.",
    "principle": "Fixing out-of-scope items during UAT without change orders sets a precedent that scope is unlimited.",
    "traps": [
      "\"Exceeding expectations\" by fixing anything raised means your UAT has no boundary and your team works on undefined scope.",
      "Stopping UAT is too aggressive and will cause escalation before a conversation has been attempted.",
      "Change requests for out-of-scope items during UAT is commercially correct but shifts the focus from closing UAT to commercial negotiation."
    ]
  },
  {
    "id": "RQ04",
    "category": "Risk & Quality",
    "difficulty": 3,
    "scenario": "Performance testing at 80% of expected peak load shows the system handles it well. But when load reaches 100%, response times exceed the agreed SLA. The go-live is in 3 weeks. Your architect presents two options: vertical scaling (faster, more expensive, temporary) or query optimization and caching (slower to implement, 5 weeks, permanent).",
    "quote": "\"Vertical scaling is 3 weeks. Ship it. We can optimize later.\"",
    "options": [
      "Go with vertical scaling. Hit the deadline and optimize later.",
      "Delay go-live by 2 weeks and do the permanent optimization.",
      "Go live at 80% of planned capacity, restrict user access to stay below the performance threshold.",
      "Go live with vertical scaling and immediately begin the optimization work post-launch."
    ],
    "correct": 3,
    "consequences": {
      "cash": -10,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "Vertical scaling is a band-aid that masks the real problem and adds ongoing infrastructure cost. Going live with a known performance issue at 100% load — even if vertical scaling hides it — means the system is not truly performance-compliant. The pragmatic answer is to use vertical scaling to hit the go-live while committing to and immediately beginning the permanent optimization. \"Optimize later\" without a commitment becomes \"optimize never.\"",
    "framework": "Performance Risk Management — when permanent and temporary fixes are both available, use the temporary fix to meet the deadline while actively executing the permanent fix. Never defer without a commitment.",
    "principle": "\"Fix it later\" is only valid with a signed-off timeline and resourced plan.",
    "traps": [
      "Vertical scaling and \"optimize later\" without a committed plan means optimization never happens and infrastructure cost compounds.",
      "A 2-week delay for a 5-week optimization is a mismatch — you cannot complete 5 weeks of work in 2 weeks.",
      "Restricting user access at go-live is operationally untenable and contractually non-compliant."
    ]
  },
  {
    "id": "RQ05",
    "category": "Risk & Quality",
    "difficulty": 1,
    "scenario": "Sprint 9 of 16. Your team lead reports that developers have been skipping unit tests to meet sprint velocity targets. Test coverage has dropped from 78% to 41% over the last 4 sprints. The delivery manager says \"the sprints are on time, so the approach is working.\"",
    "quote": "\"Coverage will recover after the deadline. We just need to get through this crunch.\"",
    "options": [
      "Set a minimum 60% coverage target per sprint and re-plan velocity accordingly.",
      "Mandate unit test coverage as a definition of done immediately. Accept the velocity reduction.",
      "Log all under-tested stories in a tech-debt backlog and schedule a dedicated remediation sprint after go-live.",
      "Add a dedicated QA sprint at the end of the project to recover coverage."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A 60% minimum as a transitional floor stops the coverage freefall while giving the team a realistic target during crunch. Jumping immediately to 78% full mandate on sprint 9 of 16 may be too disruptive. A dedicated QA sprint is expensive and does not catch bugs in unit-test logic — it catches integration bugs that unit tests would have prevented.",
    "framework": "Definition of Done Evolution — quality standards in the Definition of Done should be minimum floors, not aspirations. When they erode, reset them explicitly with team alignment.",
    "principle": "Code shipped without tests is borrowed quality. The debt always comes due.",
    "traps": [
      "Continuing to let coverage drop compounds the future bug count. Each sprint with no tests is a sprint of technical debt.",
      "A tech-debt backlog and post-go-live remediation sprint sounds structured, but unit tests written after the fact cannot catch the integration bugs that were already introduced — and a remediation sprint is rarely prioritized once live clients start submitting tickets.",
      "A catch-up QA sprint is reactive and cannot retroactively write unit tests that should have been written during development."
    ]
  },
  {
    "id": "RQ06",
    "category": "Risk & Quality",
    "difficulty": 2,
    "scenario": "You deployed a release to production at 6pm on a Friday. By 7pm, your monitoring shows a 15% error rate on transaction processing — up from under 0.1% baseline. The release included 4 changes. You cannot immediately identify which change caused the issue.",
    "quote": "\"Let us keep investigating. Rolling back will mean doing everything again next week.\"",
    "options": [
      "Keep investigating. Identify the root cause before rolling back.",
      "Notify the client, roll back the release, and investigate the root cause against the rolled-back baseline.",
      "Roll back the entire release immediately.",
      "Disable only the new transaction processing features and leave everything else live."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A 15% error rate in production is a P1 incident. Rollback is not failure — it is the correct incident response. You restore stability first, then investigate against a stable baseline. Investigating in a broken production environment is slower and riskier. The client needs to know within minutes. \"Doing it again next week\" is a minor inconvenience compared to hours of production errors.",
    "framework": "Rollback Decision Criteria — when a production release causes a significant error rate spike and root cause is unclear, roll back immediately. Investigate after restoring stability.",
    "principle": "Rollback is a sign of discipline, not failure. Staying live in a broken state is the failure.",
    "traps": [
      "Investigating in a broken production environment while users experience errors extends the customer impact unnecessarily.",
      "Rolling back without notifying the client leaves them in the dark during the incident.",
      "Disabling features selectively without knowing which feature caused the issue is guesswork that may leave the root cause active."
    ]
  },
  {
    "id": "RQ07",
    "category": "Risk & Quality",
    "difficulty": 3,
    "scenario": "Post-migration verification reveals that 2,200 of 110,000 inventory records (2%) were lost during a data migration — overwritten by a mapping script error. The client's operations team has been working on the system for 6 days and may have created new transactions referencing some of the lost records. Go-live was last Monday.",
    "quote": "\"Two percent is within acceptable error tolerance. Let us move on.\"",
    "options": [
      "Consider 2% acceptable. Notify the client and move on.",
      "Restore the entire database from the pre-migration backup and redo 6 days of client work.",
      "Recover the 2,200 records from the pre-migration backup, validate against 6 days of new transactions, and reconcile discrepancies.",
      "Identify which of the 2,200 records have been referenced in new transactions. Fix those only."
    ],
    "correct": 2,
    "consequences": {
      "cash": -10,
      "growth": 0,
      "profitability": -10,
      "customerTrust": 15,
      "teamMorale": 0,
      "executionRisk": -25,
      "strategicPosition": 5
    },
    "explanation": "Data loss in an operations system is never \"within acceptable tolerance\" — 2,200 missing inventory records will propagate into purchase orders, stock counts, and financial reporting. The correct response is a careful recovery: restore the missing records from backup, cross-reference with 6 days of new transactions, and reconcile discrepancies manually. Full rollback is too destructive; doing nothing is professionally unacceptable.",
    "framework": "Data Loss Recovery Protocol — partial data loss requires selective recovery with transaction reconciliation, not full rollback or acceptance.",
    "principle": "In operations data, 2% missing is 100% of whatever those 2% touch.",
    "traps": [
      "2% data loss in an inventory system triggers cascading errors in all stock-dependent processes.",
      "A full database rollback destroys 6 days of valid client work — far more damaging than the original 2% loss.",
      "Fixing only records referenced in new transactions leaves 2,200 ghost records that will surface in stocktakes and audits."
    ]
  },
  {
    "id": "RQ08",
    "category": "Risk & Quality",
    "difficulty": 1,
    "scenario": "A client reports a bug in production. During your investigation, your developer finds that the bug was actually logged internally 3 weeks ago — classified as low priority — and was never fixed or communicated to the client.",
    "quote": "\"We did not tell them about it before. Let us just fix it and not mention the history.\"",
    "options": [
      "Fix it quietly. The client does not need to know it was already known.",
      "Fix it and disclose to the client that the issue was known internally for 3 weeks.",
      "Do not fix it yet. First understand why internal communication failed before committing to the client.",
      "Fix it, disclose, and explain why it was classified as low priority and not communicated."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 15,
      "teamMorale": 5,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Fixing quietly is dishonest — the client has the right to know a known bug went unresolved and unreported. A disclosure with context (classification, reasoning, and what changed) is professional and builds trust. \"We knew, classified it as low priority, and your experience of it in production changed that classification\" is a reasonable explanation that most clients accept.",
    "framework": "Known Bug Disclosure — bugs known to the vendor and not communicated to the client should be disclosed when they surface. Context on the classification decision reduces the damage.",
    "principle": "Transparency about a known issue builds more trust than a clean history that was manufactured.",
    "traps": [
      "If the client discovers through other means that the bug was known internally, the silence becomes a trust-destroying event.",
      "Delaying the fix to investigate internal process failures prolongs the client's bug exposure unnecessarily.",
      "Disclosing without explanation — just saying 'we knew for 3 weeks' — invites anger without understanding. The disclosure must include the classification rationale so the client can evaluate the judgment call, not just the outcome."
    ]
  },
  {
    "id": "RQ09",
    "category": "Risk & Quality",
    "difficulty": 2,
    "scenario": "A third-party identity verification tool you integrate with has failed a security compliance audit — it is no longer certified for handling PII under the client's data governance policy. You discovered this during your quarterly vendor review, 3 weeks before the client's own annual compliance audit.",
    "quote": "\"The vendor will get re-certified eventually. Let us wait before raising it.\"",
    "options": [
      "Notify the client immediately and present 2-3 alternative certified vendors with a transition timeline.",
      "Contact the vendor directly for a written commitment on their re-certification timeline, and use that to assess whether the gap can be closed before the client's audit.",
      "Disable the integration and notify the client, accepting the operational impact.",
      "Get a legal opinion on whether your contract requires disclosure before doing anything."
    ],
    "correct": 0,
    "consequences": {
      "cash": -10,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 20,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 10
    },
    "explanation": "The client's compliance audit is 3 weeks away. A non-certified PII vendor in their system is a compliance finding that could result in fines or audit failure. Immediate disclosure with a proposed resolution (alternative vendors + transition plan) positions you as a trusted partner who surfaced a risk proactively. Waiting for the vendor to self-resolve is gambling with the client's compliance posture.",
    "framework": "Vendor Compliance Risk Disclosure — when a vendor dependency creates client compliance exposure, disclose immediately with a resolution plan. The window before an audit is especially critical.",
    "principle": "Your vendor's compliance problem is your client's risk. Manage it like it is yours.",
    "traps": [
      "Waiting on the vendor's re-certification timeline is still waiting — the client's audit is in 3 weeks, and a vendor commitment letter does not make the tool certified again. The client is exposed in the interim regardless.",
      "Disabling the integration without a replacement plan creates an operational hole that may be worse than the compliance risk.",
      "Legal review before disclosure burns the time your client needs to prepare for their own audit."
    ]
  },
  {
    "id": "RQ10",
    "category": "Risk & Quality",
    "difficulty": 3,
    "scenario": "A junior developer owns the critical path task for a module due in 10 days. They have completed 30% of the work but the quality has required significant rework from your senior developer. At current pace, the module will not be done in time and may not meet quality standards even if rushed.",
    "quote": "\"Give them more time. They are learning and we should not take the task away.\"",
    "options": [
      "Keep the junior developer on the task. Support their growth and give more time.",
      "Pair the junior developer with the senior developer: senior leads the critical path task, junior contributes under direct supervision.",
      "Replace the junior developer with the senior developer on the critical path task immediately.",
      "Split the module: junior developer handles the simpler sub-components, senior handles the critical path pieces."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "Pairing is the optimal solution here: the critical path gets the senior's quality while the junior still learns on a real delivery task under supervision. Full replacement removes the learning opportunity and can damage the junior's confidence. Keeping the junior unassisted is the wrong choice when the critical path is at risk.",
    "framework": "Critical Path Resource Management — critical path tasks require your best available resources. Pairing protects delivery while preserving the development benefit.",
    "principle": "The project's success enables the junior's future growth. Protect the project first.",
    "traps": [
      "Keeping an underperforming junior unassisted on a critical path task when 30% is done with rework is optimistic to the point of negligence.",
      "Full replacement is blunt and wastes the partially completed work. Pairing preserves and accelerates it.",
      "Splitting the module requires clear boundaries between complex and simple components — often not clean in practice."
    ]
  },
  {
    "id": "TR01",
    "category": "Team & Resources",
    "difficulty": 1,
    "scenario": "A developer on your team consistently delivers stories at 60% of their sprint commitment over 3 consecutive sprints. The team has had to absorb their uncompleted work each sprint. They are well-liked, punctual, and always appear busy. When asked, they say they are doing their best.",
    "quote": "\"They are trying hard. We should not push too much or we will lose them.\"",
    "options": [
      "Reduce their sprint allocation to 60% of standard so the team stops absorbing overflow, and revisit expectations at the next quarter.",
      "Replace them immediately. Consistent underperformance cannot be tolerated.",
      "Have a direct, private conversation: share the data, understand the cause, and create a 30-day improvement plan.",
      "Reassign them to lower-complexity tasks where their output is sufficient."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 0,
      "teamMorale": 10,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "\"Doing their best\" at 60% for 3 sprints means either the root cause has not been identified or the capacity target is wrong. A direct conversation with data (not impressions) is both fair and necessary. The developer deserves to know the gap clearly. The improvement plan makes expectations explicit and gives them a fair chance to address whatever is causing the gap.",
    "framework": "Performance Clarity Framework — visible data + direct conversation + defined improvement plan. This sequence is both professionally fair and managerially sound.",
    "principle": "Absorbing underperformance without conversation is unfair to both the team and the individual.",
    "traps": [
      "Reducing allocation to match current output normalizes the underperformance without investigating its cause — the developer never learns there is a problem, and the root cause (whether skill gap, personal issue, or wrong role fit) goes unaddressed.",
      "Immediate replacement after 3 sprints without a performance conversation creates legal exposure and cultural damage.",
      "Reassigning without addressing the performance issue is a demotion disguised as support."
    ]
  },
  {
    "id": "TR02",
    "category": "Team & Resources",
    "difficulty": 2,
    "scenario": "Your delivery team has been on mandatory overtime — averaging 55 hours/week — for 11 consecutive weeks to hit a critical client deadline. Three developers have mentioned burnout. One has taken 2 unscheduled sick days. The deadline is 4 weeks away and the pace cannot change without missing it.",
    "quote": "\"We are almost there. Four more weeks and then everyone can rest.\"",
    "options": [
      "Add 2 sprint buffers to the plan and reallocate the lowest-priority backlog items to a post-launch release, giving the team a defined scope reduction without changing the deadline.",
      "Immediately reduce hours to 45/week. Accept whatever scope reduction is necessary.",
      "Add contract developers to absorb hours and reduce the burden on the core team.",
      "Meet with the team: acknowledge the situation, implement 1 mandatory rest day per 2 weeks, and explore scope reduction options with the client."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 5,
      "teamMorale": 20,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Acknowledging the situation publicly and implementing a concrete relief measure (rest days) sustains performance better than silence and false promises. \"4 more weeks\" is what every burned-out team hears before the 4 weeks becomes 8. Mandatory rest days paradoxically improve output because burnout-degraded productivity costs more than the rest day.",
    "framework": "Sustainable Crunch Management — brief crunches are survivable. Eleven-week crunches require active intervention. Recognition + relief + scope conversation is the correct playbook.",
    "principle": "Burnout does not stay contained. One sick day becomes three. Three become a resignation.",
    "traps": [
      "Reallocation and scope-trimming without telling the team gives the appearance of control while the burnout continues — the team still experiences 55-hour weeks and receives no acknowledgment of the sustained cost they are absorbing.",
      "Reducing to 45 hours without exploring scope reduction with the client may still miss the deadline.",
      "Adding contractors at week 11 of a project introduces new team members who need ramp-up time, often adding more coordination overhead than capacity."
    ]
  },
  {
    "id": "TR03",
    "category": "Team & Resources",
    "difficulty": 2,
    "scenario": "Two of your senior developers — your lead frontend and lead backend — have had an escalating conflict. What started as a disagreement about a technical approach has become personal. They avoid each other in standups, communicate only in writing, and other team members are starting to take sides.",
    "quote": "\"They are professionals. They will work it out.\"",
    "options": [
      "Meet with each of them separately, then together, and set explicit expectations for professional behavior.",
      "Separate them: assign each to different client projects going forward.",
      "Address the technical disagreement directly in a team architecture review — if the root cause is resolved, the personal conflict may follow.",
      "Issue a formal written warning to both for unprofessional conduct."
    ],
    "correct": 0,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 0,
      "teamMorale": 15,
      "executionRisk": -10,
      "strategicPosition": 5
    },
    "explanation": "Senior developer conflicts that have become visible to the team will not self-resolve — they have already escalated beyond technical disagreement. Structured mediation (separate conversations, then joint) is the management intervention. The key is: understand each perspective privately, then create a joint conversation with explicit professional expectations. Separation avoids the issue; formal warnings are disproportionate before mediation.",
    "framework": "Conflict Mediation Protocol — separate conversations → understand root cause → joint conversation with explicit outcome expectations. Skip none of the steps.",
    "principle": "Unresolved team conflict spreads. It does not stay between the two people.",
    "traps": [
      "Conflicts that have already split the team will not self-resolve. Passive management makes you complicit in the damage.",
      "Resolving the technical disagreement in a formal review treats the symptom but not the personal breakdown — the conflict has already moved past its technical origin and requires direct management intervention on the relationship itself.",
      "A formal written warning before mediation is disproportionate and may trigger a defensive reaction."
    ]
  },
  {
    "id": "TR04",
    "category": "Team & Resources",
    "difficulty": 3,
    "scenario": "Your best developer — the one who designed the core system architecture and owns the most complex modules — has told you they want to transfer to an internal product team. They are your highest performer and their departure mid-project would create a 6-8 week knowledge gap. The product team lead is actively recruiting them.",
    "quote": "\"They are essential. Block the transfer until the project is done.\"",
    "options": [
      "Block the transfer. The project's success requires them for the next 3 months.",
      "Negotiate a 6-week structured transition: knowledge transfer sessions, documentation, and a shadowing plan before the transfer takes effect.",
      "Let them go immediately. Their career development takes priority.",
      "Counter with a role enhancement on your team that matches what the product team is offering."
    ],
    "correct": 1,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 0,
      "customerTrust": 5,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "Blocking a transfer of a high performer who wants to move creates resentment and usually results in a resignation anyway — with no transition at all. A negotiated transition period with structured knowledge transfer protects the project while respecting their development path. This also preserves a future relationship with someone who will become a valued internal stakeholder.",
    "framework": "Structured Departure Negotiation — when a key person wants to leave, negotiate a transition that serves both the project and their development. Blocking rarely works and always damages the relationship.",
    "principle": "A developer who leaves on a good transition stays an asset. One who is blocked leaves as an adversary.",
    "traps": [
      "Blocking transfers of high performers who want to grow is a short-term fix that produces a medium-term resignation.",
      "Immediate release of your only architect mid-project is the most disruptive option for delivery.",
      "A counter-offer when their desire is specifically to move to a different kind of work is likely to fail and still results in departure."
    ]
  },
  {
    "id": "TR05",
    "category": "Team & Resources",
    "difficulty": 1,
    "scenario": "A junior developer deployed a hotfix directly to the production database without going through the pull request process, peer review, or the change management system. The fix worked and caused no issues. When you ask why, they say: \"It was urgent and the process is too slow.\"",
    "quote": "\"Nothing went wrong this time. Let us just remind them not to do it again.\"",
    "options": [
      "Give them a verbal reminder. It worked out this time.",
      "Formally document the policy violation and add it to their performance file.",
      "Use this as a team learning moment: explain why the process exists and what could have gone wrong.",
      "Revoke their production database access immediately."
    ],
    "correct": 2,
    "consequences": {
      "cash": 0,
      "growth": 0,
      "profitability": 0,
      "customerTrust": 0,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 0
    },
    "explanation": "A direct production database change without review is a serious process violation — not because the outcome was bad this time, but because it could easily have been catastrophic. The team-wide conversation (not just a private reminder) reinforces why the process exists: peer review catches errors that individuals miss under pressure. A formal performance note for a first offense is disproportionate; revoking access without conversation is punitive.",
    "framework": "Process Violation Response — use governance violations as teaching moments, not just enforcement moments. The process explanation is more valuable than the sanction for a first offense.",
    "principle": "\"It worked\" does not validate bypassing safety processes. It just means you were lucky.",
    "traps": [
      "A private verbal reminder does not address the team-wide culture risk of normalized process bypassing.",
      "A formal performance note for a first-time process breach is disproportionate for a junior who acted with good intentions.",
      "Revoking production access is the right response for a repeated or malicious violation, not a first-time one."
    ]
  },
  {
    "id": "TR06",
    "category": "Team & Resources",
    "difficulty": 2,
    "scenario": "You discover that your client's team lead has been messaging your developers directly on WhatsApp — outside of the project management tools — to request small fixes and feature changes. The developers are implementing these changes without logging them in the project system. Three undocumented changes have already been deployed.",
    "quote": "\"The client just wants quick wins. Let us not over-complicate it.\"",
    "options": [
      "Allow it to continue. Quick responsiveness is good client service.",
      "Immediately stop all direct client-developer contact and enforce ticket-only communication.",
      "Remove the client's team lead from the developer WhatsApp group.",
      "Meet with both the client team lead and your developers: establish a protocol where direct contact is allowed for clarification only, all work goes through the system."
    ],
    "correct": 3,
    "consequences": {
      "cash": 0,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "Direct client-developer communication without logging is a governance and quality control failure. Undocumented changes in production are invisible to QA, untestable in retrospect, and cannot be rolled back cleanly. The protocol fix — clarification is fine, work goes through the system — keeps the responsiveness benefit while restoring visibility.",
    "framework": "Communication Protocol Governance — all work must be traceable. Clarification conversations are fine; undocumented implementation is not.",
    "principle": "Unlogged changes in production are technical debt you cannot even see.",
    "traps": [
      "Three undocumented production changes is already too many. Allowing it to continue compounds the traceability problem.",
      "Hard cutoff on all direct communication damages the relationship and is too rigid for normal clarifications.",
      "Removing the client from the WhatsApp group is confrontational before a conversation about the protocol."
    ]
  },
  {
    "id": "TR07",
    "category": "Team & Resources",
    "difficulty": 3,
    "scenario": "You have confirmed 3 new projects starting next quarter that require 6 additional developers. Your current team is fully utilized. You have 10 weeks before the projects start. Your options: hire full-time employees, contract experienced freelancers, or staff the gap with junior developers from your existing bench.",
    "quote": "\"Junior developers are cheaper and we can train them up on the project.\"",
    "options": [
      "Hire a mix: 2 senior hires who join full-time, 4 experienced contractors for the immediate ramp.",
      "Contract experienced freelancers for the projects at a higher day rate.",
      "Hire 6 junior developers and train them on the projects.",
      "Decline one of the 3 projects. You cannot staff 3 new projects simultaneously without quality risk."
    ],
    "correct": 0,
    "consequences": {
      "cash": -10,
      "growth": 15,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 10,
      "executionRisk": -15,
      "strategicPosition": 15
    },
    "explanation": "A mixed model solves the immediate capacity problem (contractors) while building long-term team strength (senior hires). Six juniors on three new client projects simultaneously produces delivery risk that clients bear. Senior hires take 4-6 weeks to onboard even if they join in 10 weeks. The hybrid approach is the most operationally sound.",
    "framework": "Resource Scaling Strategy — immediate needs need contractors; strategic growth needs permanent hires. The right answer uses both.",
    "principle": "Staffing new client projects with juniors is borrowing against client satisfaction.",
    "traps": [
      "Six junior developers across three new client projects — with 10 weeks of ramp time — is a delivery risk that will produce hypercare nightmares.",
      "Pure contractor staffing builds no institutional capacity and creates dependency on the external market for every future project.",
      "Declining a project due to a solvable resourcing problem is leaving revenue on the table."
    ]
  },
  {
    "id": "TR08",
    "category": "Team & Resources",
    "difficulty": 1,
    "scenario": "A contractor who has been embedded in your client's team for 7 months has become a key part of the client's operations team. The client's HR lead calls you to say they want to directly hire this contractor permanently and asks what your policy is. Your contract has a hiring restriction clause requiring a placement fee.",
    "quote": "\"We should waive the fee. It is good for the client and the contractor.\"",
    "options": [
      "Waive the fee. Goodwill with the client outweighs the placement fee.",
      "Negotiate: offer a reduced fee in exchange for a contract extension or a referral to a new client.",
      "Enforce the full placement fee as stated in the contract.",
      "Inform the client of the clause and ask them how they would like to proceed."
    ],
    "correct": 1,
    "consequences": {
      "cash": 5,
      "growth": 5,
      "profitability": 10,
      "customerTrust": 10,
      "teamMorale": 5,
      "executionRisk": -5,
      "strategicPosition": 5
    },
    "explanation": "The hiring restriction exists and should be enforced — but commercial relationships allow for negotiated outcomes. A reduced fee in exchange for something of value (extension, referral, new project introduction) is standard practice. Waiving entirely means the placement fee clause has no enforcement value in future contracts. Enforcing the full fee without flexibility is commercially rigid when a negotiated outcome is available.",
    "framework": "Contract Enforcement with Negotiation — contractual rights should be exercised with commercial judgment. Full enforcement or full waiver are both suboptimal when a negotiated middle exists.",
    "principle": "Enforce your contracts. Negotiate their terms.",
    "traps": [
      "Waiving the fee sets a precedent that your contractor placement terms are not enforced.",
      "Full enforcement without conversation is commercially rigid and may damage a valuable client relationship.",
      "Informing the client and asking \"how they would like to proceed\" cedes the negotiating position before it starts."
    ]
  },
  {
    "id": "TR09",
    "category": "Team & Resources",
    "difficulty": 2,
    "scenario": "One developer — your only person who fully understands a legacy payment integration used by 4 of your AMS clients — is planning an overseas trip for 3 weeks. When asked, they say all the knowledge \"is in their head\" and they have no documentation because \"it just works.\" The integration has not had issues in 8 months.",
    "quote": "\"Eight months without issues. It will be fine for 3 weeks.\"",
    "options": [
      "Let them go. Eight months without issues is a strong reliability signal.",
      "Require them to cancel the trip. The risk is too high.",
      "Before they leave: require a minimum 5-hour knowledge transfer session and a documented runbook for the integration.",
      "Assign a second developer to shadow the integration owner for 2 weeks before the trip."
    ],
    "correct": 2,
    "consequences": {
      "cash": -5,
      "growth": 0,
      "profitability": 5,
      "customerTrust": 5,
      "teamMorale": 10,
      "executionRisk": -20,
      "strategicPosition": 5
    },
    "explanation": "A bus-factor-1 dependency on a payment integration used by 4 AMS clients is an unacceptable operational risk regardless of recent reliability. A 5-hour knowledge transfer and runbook creation before departure is the minimum viable risk mitigation. Canceling the trip is disproportionate; doing nothing is reckless.",
    "framework": "Bus Factor Risk Mitigation — any system with a single knowledge holder requires documentation and backup knowledge before that person becomes unavailable.",
    "principle": "The integration that has not broken in 8 months will break the day its only expert is unreachable.",
    "traps": [
      "\"It works\" is not the same as \"someone else can fix it when it does not.\" Eight months of reliability is not documentation.",
      "Canceling a personal trip for a non-critical-path risk is a morale-destroying overreaction.",
      "Shadowing for 2 weeks produces familiarity but not a runbook. Documentation is the deliverable."
    ]
  },
  {
    "id": "TR10",
    "category": "Team & Resources",
    "difficulty": 3,
    "scenario": "Half of your delivery team (4 developers) is offshore — 3 hours behind your onshore team and client. Critical decisions made in afternoon client calls are reaching the offshore team the next morning. By the time they respond, another half-day is lost. The team is losing 2-4 hours of collaborative time daily.",
    "quote": "\"They just need to be more responsive. Check messages at night if needed.\"",
    "options": [
      "Require offshore developers to check and respond to messages during client evening hours.",
      "Replace the offshore team with local contractors to eliminate the timezone gap.",
      "Shift all architecture and design decisions to the onshore team. Use offshore only for execution tasks.",
      "Restructure the workday: move core collaboration hours to 10am-2pm local (covering the overlap window), and protect async work outside that window."
    ],
    "correct": 3,
    "consequences": {
      "cash": -5,
      "growth": 5,
      "profitability": 5,
      "customerTrust": 10,
      "teamMorale": 15,
      "executionRisk": -15,
      "strategicPosition": 10
    },
    "explanation": "The timezone gap is a structural problem — not a behavior problem. Requiring offshore developers to work evenings burns out the team and creates unsustainable expectations. A structured overlap window (10am-2pm) where all critical communication happens gives the team a predictable collaboration rhythm. Outside the window, async work proceeds without expectation of immediate response.",
    "framework": "Distributed Team Collaboration Design — define explicit overlap hours for synchronous communication. Protect async time outside those hours. Never compensate for structural gaps with behavioral demands.",
    "principle": "Timezone gaps are an architecture problem. Solve them architecturally, not by burning out your team.",
    "traps": [
      "Requiring evening availability from offshore developers is unsustainable and will accelerate turnover.",
      "Limiting offshore to execution tasks removes them from design conversations that benefit from their expertise.",
      "Replacing offshore with local contractors is an expensive solution to a problem that process restructuring can solve."
    ]
  }
]
