export const CASES_CMO6 = [
  {
    "id": "CMO-PR01",
    "category": "PR & Communications",
    "difficulty": 1,
    "scenario": "A local tech journalist has emailed asking for a comment about your recent Series A funding announcement. They have a one-hour response window before their story goes to press. You have a draft press release but it has not been officially approved. Your CEO is traveling internationally and is unreachable. Your VP of Marketing has authority over routine communications but has never handled a media inquiry at this level. What do you do?",
    "options": [
      "Reply immediately with a brief holding statement: confirm the funding is real and that you will provide a full comment within 24 hours, then escalate immediately to the CEO.",
      "Ask the journalist to hold their story until the CEO is reachable — no comment should be made without CEO approval.",
      "Send the draft press release as a background document marked \"not for attribution\" and ask the journalist to quote the key facts without attribution.",
      "Authorize the VP of Marketing to provide a short prepared quote using approved language from the draft press release and confirm the key facts."
    ],
    "correct": 3,
    "consequences": {
      "customerTrust": 8,
      "strategicPosition": 9,
      "growth": 5
    },
    "explanation": "A funding announcement is positive news with a known fact set — the amount raised and the basic facts are presumably already in the draft press release. The VP of Marketing can provide a short prepared quote using approved language from the existing draft, ensuring accuracy while meeting the journalist's deadline. This is a standard delegation scenario: the CEO does not need to be reachable for routine positive media inquiries if a prepared quote exists. A holding statement buys time but risks the journalist publishing without your comment, which is a missed opportunity to control the narrative of positive news. Asking the journalist to hold their story is ineffective — journalists on deadline do not postpone for source convenience. Sending an unapproved draft as \"background\" is a documentation risk.",
    "framework": "Media Inquiry Response Protocol — every company should have a tiered media response framework: (1) approved boilerplate for positive announcements, (2) holding statements for sensitive or unconfirmed news, (3) escalation paths when the CEO is unavailable. Positive funding news with an existing draft is a Tier 1 scenario.",
    "principle": "A CMO without a media response escalation protocol will always be caught unprepared when the CEO is unavailable.",
    "traps": [
      "A holding statement is appropriate for sensitive or unconfirmed news, not for a positive funding announcement where the facts are known and approved language exists.",
      "Asking a journalist on deadline to hold their story is rarely effective and can create friction with the journalist that damages the relationship for future coverage.",
      "Sending an unapproved draft as background creates a paper trail showing the company provided material that was not officially approved, which is a liability if the story diverges from the final press release."
    ]
  },
  {
    "id": "CMO-PR02",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "A competitor has published a product comparison page on their website claiming your platform is \"2× more expensive\" than theirs. The comparison uses a pricing tier from 18 months ago that you have since restructured. The page has already been shared 200 times on LinkedIn and is appearing in Google results for \"[your brand] pricing.\" Your legal team says a defamation or false advertising claim would require a lengthy process with no guarantee of outcome. You have one week before a major industry conference where both companies will have booths.",
    "options": [
      "Send a cease-and-desist letter through legal counsel immediately — even if the legal process is slow, the letter may prompt the competitor to update the page voluntarily.",
      "Publish your own comparison page with current, accurate pricing data and a direct response to the competitor's claims. Optimize it for the same search terms and share it proactively with your audience.",
      "Contact LinkedIn directly to have the shares removed as misleading content, and file a complaint with Google about the search result.",
      "Do not respond publicly — responding to a competitor comparison page elevates their content and directs attention to a pricing comparison that you would rather avoid."
    ],
    "correct": 1,
    "consequences": {
      "customerTrust": 9,
      "strategicPosition": 8,
      "growth": 6
    },
    "explanation": "The most effective response to a false competitor comparison is accurate, public counter-content that outranks the original claim. Publishing your own comparison page with current pricing, documented accurately, achieves three things: (1) it appears in the same search results, (2) it gives your sales team a shareable asset for prospects who have seen the competitor's page, and (3) it demonstrates confidence in your current pricing position. A cease-and-desist letter may prompt a voluntary update, but it takes time and is not guaranteed — and it does nothing to counter the 200 already-shared posts. Contacting LinkedIn and Google to remove content that is technically a competitor's public marketing page is unlikely to succeed. Not responding allows the false pricing claim to go unchallenged with 200 shares already in circulation — with an industry conference in one week, this is a material sales risk.",
    "framework": "Competitive Narrative Counter-Strategy — when a competitor publishes misleading comparison content, the fastest and most durable solution is accurate counter-content that ranks in the same context. Legal remedies are slow and uncertain; editorial remedies are fast and controlled.",
    "principle": "You cannot control what a competitor publishes, but you can ensure that accurate information is more visible than inaccurate information.",
    "traps": [
      "A cease-and-desist letter may be useful in parallel but should not be the primary response — it takes weeks to have effect while the comparison page continues circulating.",
      "Attempting to have LinkedIn shares removed treats the symptom (distribution) while the source content remains live and ranking — removing 200 shares does not remove the comparison page.",
      "Not responding to an actively spreading piece of misinformation during the week before a major industry conference is a sales risk — prospects researching your pricing will encounter the competitor's claim with no counter-narrative available."
    ]
  },
  {
    "id": "CMO-PR03",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "A 3-star G2 review by an anonymous reviewer says your implementation \"took 3× longer than promised and we lost data during migration.\" You are highly confident based on the project timeline and description that you know which client this is. The delays were caused by that client's own IT team being unavailable during a critical integration window, and the data loss occurred in a legacy migration involving pre-existing corruption in their original data file. You cannot verify the reviewer's identity publicly without breaching confidentiality. How do you respond?",
    "options": [
      "Flag the review to G2 as potentially fraudulent or inaccurate and request its removal — you believe the factual claims are demonstrably incorrect.",
      "Respond publicly on G2 with a factual rebuttal: note that implementation timelines depend on client-side IT availability and that the data issue was a pre-existing legacy problem, without identifying the client.",
      "Respond publicly on G2 acknowledging the experience, expressing genuine concern, and inviting the reviewer to contact your customer success team directly — without disputing the specifics of the claim.",
      "Do not respond to the review — responding to a negative review draws more attention to it, and anonymous reviews are given less weight by sophisticated buyers."
    ],
    "correct": 2,
    "consequences": {
      "customerTrust": 10,
      "strategicPosition": 7,
      "executionRisk": -3
    },
    "explanation": "The correct response to a negative G2 review is a measured public acknowledgment that demonstrates customer care without escalating the conflict or revealing confidential details. Acknowledging the experience, expressing concern, and directing the reviewer to your CS team signals to other readers that you take feedback seriously — which is more persuasive to prospects than no response or a defensive rebuttal. A public factual rebuttal is a credibility risk: even if you are correct about the client's IT availability and the legacy data, a rebuttal that reads as defensive will harm your brand more than the original 3-star review. Flagging the review for removal is only appropriate if the reviewer is demonstrably not a real customer — in this case, you believe you know the client, which makes removal inappropriate. Not responding leaves a negative review unaddressed, which is particularly harmful on G2 where responses are permanently visible to prospects researching your product.",
    "framework": "Review Response Framework — public review responses are marketing content read by future prospects, not private conversations with the reviewer. Every response should signal: (1) you take feedback seriously, (2) you have a real CS team, and (3) you are willing to resolve issues. Accuracy matters less than tone.",
    "principle": "A measured, empathetic response to a negative review is more persuasive to a neutral prospect than the review itself.",
    "traps": [
      "A factual rebuttal, even if accurate, reads as defensive to a neutral reader and signals that you prioritize being right over the customer experience — which is the exact impression you want to avoid on a public review platform.",
      "Requesting removal is only appropriate for clearly fraudulent reviews from non-customers — using it to remove legitimate (if contextually incomplete) negative reviews from real clients is a terms-of-service violation and reputational risk.",
      "Not responding allows the review to sit unaddressed indefinitely — on G2, no response is read as either indifference or tacit admission, both of which are worse for conversion than a neutral acknowledgment."
    ]
  },
  {
    "id": "CMO-PR04",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "Your product team has built a significant workflow automation feature that reduces manual data entry for dealership service advisors by an estimated 60%. It is a genuinely strong capability. Your PR agency advises that the feature alone is not \"newsworthy enough\" for a standalone press release and recommends bundling it with two smaller features into a quarterly product update release. Your VP of Product wants maximum individual visibility for the feature and is pushing for a dedicated press release. How do you decide?",
    "options": [
      "Follow the PR agency's recommendation: bundle the feature into a quarterly product update press release to maximize the likelihood of editorial pickup.",
      "Issue a standalone press release for the automation feature, regardless of the agency's newsworthiness assessment — the product team deserves the recognition and customers need to know.",
      "Skip the press release entirely for this feature and invest the PR bandwidth in a customer success story using an early adopter of the automation feature instead.",
      "Test the newsworthiness: pitch one or two target journalists with a brief story angle before committing to a press release format — use their response to inform the final decision."
    ],
    "correct": 3,
    "consequences": {
      "growth": 7,
      "strategicPosition": 8,
      "customerTrust": 6
    },
    "explanation": "The PR agency's \"not newsworthy enough\" judgment is an opinion, not a fact — and it can be tested before committing to a release format. Pitching one or two journalists with a story angle (e.g., \"dealership service advisor automation: 60% reduction in manual entry\") takes less than a day and tells you definitively whether the story gets traction. If journalists respond with interest, a standalone release is warranted. If they pass, the agency is right and the quarterly bundle is the right vehicle. This approach is faster than the quarterly bundle timeline, more responsive to the product team's visibility concern, and more data-driven than either defaulting to the agency recommendation or overriding it on instinct. A standalone press release on a feature the agency has flagged as non-newsworthy is likely to generate limited pickup and may be a wasted PR cycle. A customer success story is valuable but serves a different content purpose — it does not replace a product announcement.",
    "framework": "Press Release Newsworthiness Testing — the fastest way to test whether a product feature story is newsworthy is to pitch it informally before producing the release. Journalist response rate and quality are better signal than agency opinion alone.",
    "principle": "PR is fundamentally a pitching discipline. Test the pitch before committing to the release format.",
    "traps": [
      "Defaulting to the quarterly bundle without testing the standalone angle means the product team waits weeks or months for coverage that might have been available immediately — it is the agency's safe default, not necessarily the best strategic choice.",
      "A standalone press release over the agency's objection risks a low-pickup cycle that wastes PR budget and editorial goodwill without demonstrating the feature's value to any meaningful audience.",
      "A customer success story is a strong long-term asset but is the wrong instrument for a product launch moment — it serves sales enablement, not news distribution."
    ]
  },
  {
    "id": "CMO-PR05",
    "category": "PR & Communications",
    "difficulty": 3,
    "scenario": "A permissions bug in your platform temporarily made 40 customer records visible to the wrong account administrator for a window of approximately 90 minutes. No financial data, passwords, or payment information were exposed — only contact names, titles, and company names. The bug was identified and patched within 2 hours of discovery. A post-mortem confirms no data was downloaded or misused. Your legal team says there is no statutory disclosure obligation under applicable privacy regulations. The CEO is asking whether to proactively notify the affected customers.",
    "options": [
      "Notify the 40 affected customers directly and proactively within 24 hours — even without legal obligation, the trust cost of customers discovering this independently is higher than the cost of proactive disclosure.",
      "Do not notify affected customers — there is no legal obligation, no evidence of misuse, and the bug was patched within 2 hours. Notification would create disproportionate alarm about a low-impact event.",
      "Notify customers only if they ask — create an internal log of the incident and prepare a response statement, but do not proactively reach out.",
      "Notify all customers (not just the 40 affected) via a security bulletin — transparency at scale demonstrates platform maturity and prevents a story from breaking through a single affected customer."
    ],
    "correct": 0,
    "consequences": {
      "customerTrust": 12,
      "strategicPosition": 8,
      "executionRisk": -5
    },
    "explanation": "Proactive notification of the 40 affected customers is the right decision even without legal obligation. In B2B SaaS, customer trust is a long-term competitive asset. If any of the 40 affected account administrators later discovers the incident through another channel — a competitor, a security researcher, or a former employee — the reputational and customer relationship damage of non-disclosure vastly exceeds the cost of a proactive, transparent notification. The notification should be factual and measured: describe what happened, confirm what data was visible, confirm the patch timeline, and confirm no evidence of misuse. A non-disclosure posture (\"we are only required to tell you if we are legally required\") is incompatible with a trust-based B2B relationship in the enterprise market. Notifying all customers is disproportionate and creates unnecessary alarm among unaffected accounts. A \"respond only if asked\" posture is a deliberate withholding of material information.",
    "framework": "Proactive Incident Disclosure — in B2B SaaS, the legal obligation is a floor, not a ceiling. Customer trust requires proactive disclosure of any incident that affected their data, regardless of severity, if the CMO intends to build long-term enterprise relationships. The only question is tone and timing.",
    "principle": "Your customers should hear about any incident involving their data from you first, not from anyone else.",
    "traps": [
      "Not notifying because there is no legal obligation treats customer trust as a compliance exercise — enterprise customers who discover an unreported incident will always ask why they were not told, and \"we weren't legally required to\" is not an acceptable answer.",
      "Notifying only if asked requires affected customers to know to ask, which means they must discover the incident through a channel other than you — the worst possible disclosure scenario.",
      "Notifying all customers creates unnecessary concern among unaffected accounts and signals poor incident scoping — a data incident notification should be precisely targeted to affected parties."
    ]
  },
  {
    "id": "CMO-PR06",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "You are launching into the independent auto dealer vertical, a new market segment for your DMS platform. A major trade publication in that vertical, with 12,000 email subscribers matching your ICP exactly, offers a sponsored content placement for $8,000. The placement would include a bylined article under your CEO's name, promoted in the weekly newsletter and on the publication's website for 30 days. Your PR agency advises against it, saying sponsored content \"doesn't count as earned media\" and recommends a longer editorial pitch strategy that could take 3-6 months. You have a 10-day decision window.",
    "options": [
      "Decline the sponsored content and commit to the PR agency's earned media strategy — editorial credibility is worth the 3-6 month wait when entering a new market.",
      "Take the sponsored content placement — reaching 12,000 exact-ICP subscribers at $8,000 is a $0.67 CPM that would be difficult to match with any other channel in this specific vertical.",
      "Negotiate the sponsored content into an editorial contribution: offer the publication a guest column (unpaid) as a first step, using the paid offer as leverage for the editorial relationship.",
      "Use the $8,000 on LinkedIn Sponsored Content targeting the same ICP profile — more control over the message and measurable performance data."
    ],
    "correct": 1,
    "consequences": {
      "growth": 8,
      "customerTrust": 6,
      "strategicPosition": 7
    },
    "explanation": "The PR agency's distinction between earned and sponsored content is a media-industry framing that does not map directly to B2B buyer behavior. The relevant question for a market entry is: where are your ICP buyers getting their information, and can you reach them there efficiently? A trade publication newsletter with 12,000 exact-ICP subscribers at $8,000 total spend is a $0.67 effective CPM — an exceptionally efficient channel for a new market entry, particularly when you have no brand recognition in the vertical yet. Buyers in specialized trade verticals trust their industry publication implicitly, including sponsored content in its pages. Waiting 3-6 months for earned media during a new market entry delays market education at a critical window. LinkedIn targeting can approximate the same ICP but will not have the implicit trust of a known industry publication and will generate far fewer impressions at $8,000 in a narrow B2B vertical.",
    "framework": "Earned vs. Paid Media Tradeoffs in Market Entry — earned media credibility compounds over time but is too slow for a market entry window. Sponsored content in high-trust trade publications is frequently more effective than earned media for B2B companies entering specialized verticals where the publication is the primary information source.",
    "principle": "The goal of market entry PR is awareness and credibility, not earning a media industry badge. Use the channel your buyers trust, regardless of how the PR industry classifies it.",
    "traps": [
      "Waiting 3-6 months for earned media during a new market entry means your ICP discovers competitors before they discover you — first-mover awareness matters in a new vertical.",
      "Using LinkedIn Sponsored Content sacrifices the publication's implicit endorsement and will produce a fraction of the impressions among trade-vertical subscribers at equivalent cost.",
      "Attempting to negotiate unpaid editorial as a counter to a paid offer is a common approach but risky — trade publications operate on revenue, and the negotiating leverage only works if the publication views you as an editorial asset, which you are not yet in a new market."
    ]
  },
  {
    "id": "CMO-PR07",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "Your CEO posted a LinkedIn article taking a strong position on AI replacing jobs in the automotive industry. The post has 3,400 likes and significant engagement. Among the 80 critical comments are two verified enterprise prospects — one an operations director at a 200-location dealership group, one a VP of IT at a regional dealer association — both pushing back on the CEO's position with substantive criticism. The CEO wants to respond directly in the comments to defend the stance. How do you advise?",
    "options": [
      "Advise the CEO to respond to the critical comments publicly — defending a well-reasoned position demonstrates conviction and thought leadership.",
      "Advise the CEO not to respond to any comments publicly. Route the two enterprise prospect comments to the sales team for private outreach instead.",
      "Advise the CEO to post a single follow-up comment acknowledging the breadth of perspectives and inviting continued discussion, without directly responding to or naming any individual commenter.",
      "Advise the CEO to delete the post — the enterprise prospect criticism creates sales risk that outweighs the thought leadership benefit."
    ],
    "correct": 2,
    "consequences": {
      "customerTrust": 8,
      "strategicPosition": 7,
      "growth": 5
    },
    "explanation": "A single follow-up comment acknowledging the range of perspectives threads the needle: it demonstrates that the CEO has read the critical responses, shows intellectual humility without abandoning the original position, and does not single out the two enterprise prospects in a way that would draw public attention to their criticism. Routing the enterprise prospects to the sales team for private outreach in parallel is a good tactical move but is insufficient as the only response — leaving 80 public critical comments entirely unaddressed signals defensiveness or indifference. Responding directly to individual critical comments, especially enterprise prospects, creates a public debate dynamic that never plays well for the selling party, regardless of the merits of the argument. Deleting the post is the worst option — it signals either cowardice or that the company cannot stand behind its positions, and the post's existing engagement will remain visible through reshares.",
    "framework": "Executive Social Media Response Framework — a high-engagement post with critical comments from enterprise prospects requires a response that: (1) acknowledges the engagement without escalating the debate, (2) does not publicly single out prospects who criticized the position, and (3) routes high-value relationship-building to private channels where the conversation can be more nuanced.",
    "principle": "Public debates on LinkedIn do not close enterprise deals. Private conversations do.",
    "traps": [
      "Responding directly to enterprise prospect criticism in a public comment thread creates a public negotiation of professional opinion where the selling party always loses social points, regardless of the factual merits.",
      "Not responding at all to 80 critical comments on a post with 3,400 likes is a missed opportunity to demonstrate that the CEO engages seriously with the conversation they started.",
      "Deleting the post will be noticed by the many people who already liked and shared it, and will generate its own negative narrative — particularly among the people who agreed with the critics."
    ]
  },
  {
    "id": "CMO-PR08",
    "category": "PR & Communications",
    "difficulty": 3,
    "scenario": "A major industry analyst firm is publishing a landscape report on automotive dealer management software. Their analyst has emailed requesting a briefing to inform their coverage. Based on their research methodology, participating companies that provide thorough briefings are more likely to receive favorable placement. The briefing requires 4 hours of executive time (CEO + product lead) and sharing 12 months of product roadmap detail. The report will be referenced by procurement teams at enterprise dealerships. You must advise whether to participate.",
    "options": [
      "Participate in a limited briefing (2 hours, current product capabilities only) and decline to share forward roadmap detail — protect competitive intelligence while still engaging with the analyst.",
      "Participate fully: provide the 4-hour briefing and share the roadmap detail. Analyst placement in a procurement-referenced report is a high-value sales enablement asset that justifies the executive time and roadmap disclosure.",
      "Decline to participate — analyst reports carry heavy vendor bias toward clients who pay for advisory services, and the roadmap disclosure creates competitive risk.",
      "Participate fully but negotiate a review-and-approval right for any section that references your company before the report is published."
    ],
    "correct": 1,
    "consequences": {
      "strategicPosition": 11,
      "growth": 9,
      "customerTrust": 7,
      "executionRisk": -4
    },
    "explanation": "For a procurement-referenced analyst report in your target vertical, favorable placement is worth the 4-hour investment and roadmap disclosure. Enterprise buying committees use these reports as shortlisting tools — being absent from or weakly positioned in a major landscape report is a material sales disadvantage. The roadmap disclosure is a calculated risk: most reputable analyst firms handle this under NDA, and sharing directional product strategy is standard practice in enterprise software markets. Analysts who receive thorough briefings produce more accurate coverage, which reduces the risk of being misrepresented. A limited briefing (option B) signals either that you have something to hide or that you do not take the analyst relationship seriously — both of which produce worse placement than no briefing. Declining entirely is particularly damaging in a procurement context where absence implies either market immaturity or reluctance to be scrutinized. Review-and-approval rights are not standard in analyst reports and requesting them will be declined outright.",
    "framework": "Analyst Relations Strategy — enterprise analyst firms that produce procurement-referenced reports should be treated as a sales channel, not a media risk. A thorough briefing is an investment in the accuracy of coverage, not a concession to an external party.",
    "principle": "Not participating in an analyst report that your prospects will use to make buying decisions is not a neutral position — it is a competitive disadvantage.",
    "traps": [
      "A limited briefing that withholds roadmap detail results in coverage that describes only your current product, which in a competitive landscape report positions you as behind competitors who shared their future development plans.",
      "Declining entirely based on advisory relationship bias concerns ignores that reputable analyst firms are read and cited by enterprise procurement teams regardless of vendor relationships — absence from the report is worse than unfavorable placement.",
      "Requesting review-and-approval rights before publication will be declined by any reputable analyst firm as incompatible with editorial independence, and the request itself signals that you do not understand how analyst relations work."
    ]
  },
  {
    "id": "CMO-PR09",
    "category": "PR & Communications",
    "difficulty": 2,
    "scenario": "Your company has never invested in thought leadership PR. A B2B PR agency proposes a 6-month retainer at $4,500/month ($27,000 total) to build executive profiles, pitch industry publications, and target 3-4 feature articles. They say results take 90 days to materialize and success is measured by article placements and share of voice, not pipeline attribution. Your VP of Marketing supports the investment. You have no historical PR ROI benchmarks for your category. How do you evaluate the proposal?",
    "options": [
      "Ask the agency to work on a placement-fee basis (pay per article placed) rather than a retainer — this aligns incentives and removes the risk of paying for effort without results.",
      "Decline the proposal — PR ROI is not measurable, the results timeline is 90+ days, and $27,000 is better allocated to performance marketing with measurable attribution.",
      "Approve a shorter 3-month pilot at $4,500/month and evaluate based on placement results before committing to 6 months.",
      "Approve the 6-month retainer at $4,500/month with a clear success framework: minimum 3 placements in named target publications within 6 months, monthly reporting on pitches sent and journalist engagement, and a 30-day exit clause if milestones are missed at the 90-day review."
    ],
    "correct": 3,
    "consequences": {
      "growth": 7,
      "strategicPosition": 9,
      "customerTrust": 6
    },
    "explanation": "The 6-month retainer with a clear accountability framework is the right structure. Thought leadership PR is a medium-term investment with compounding returns — the first 90 days build the pitching infrastructure (editorial contacts, story angles, executive bios) that the subsequent months leverage for actual placements. A 3-month pilot is insufficient because the agency's own timeline says results materialize at 90 days — a 3-month contract gives you one data point right at the threshold, which is not enough to evaluate the program. A placement-fee model creates the wrong incentives: agencies pursuing per-placement fees will pitch easier, lower-tier publications rather than building the target editorial relationships that create long-term brand equity. Declining entirely because PR is hard to attribute ignores the evidence that B2B buyers (particularly enterprise) use thought leadership content in vendor evaluation — it is a part of the buying journey that performance marketing cannot reach.",
    "framework": "PR Agency Evaluation Framework — the right accountability structure for a PR retainer is: (1) defined target publication list, (2) minimum placement benchmarks by month, (3) a mid-program review at 90 days with a clear exit clause, and (4) monthly pitch activity reporting so you can distinguish lack of results from lack of effort.",
    "principle": "PR investment without an accountability framework is a donation. PR investment with clear placement benchmarks and an exit clause is a measured bet.",
    "traps": [
      "A 3-month pilot that terminates exactly when results are supposed to materialize gives you one data point at the edge of the result window — not enough information to make a continuation decision.",
      "Declining because PR attribution is difficult treats attribution difficulty as a disqualifying factor for all marketing investment — by the same logic, you would never invest in SEO, events, or brand advertising.",
      "A placement-fee model sounds like aligned incentives but produces misaligned behavior: agencies will pursue volume over quality and optimize for easy placements in weak publications rather than hard-won positions in target editorial outlets."
    ]
  },
  {
    "id": "CMO-PR10",
    "category": "PR & Communications",
    "difficulty": 3,
    "scenario": "During sensitive and confidential acquisition negotiations with a strategic buyer, a journalist from a well-read industry trade publication contacts your VP of Marketing via LinkedIn: \"We have heard from two sources that InnoFac is in acquisition talks. Can you comment for a story we are publishing tomorrow?\" Your legal team has not issued internal media guidance. The acquisition talks are under NDA. You have approximately 30 minutes before the journalist's deadline. What do you do?",
    "options": [
      "Call the journalist off the record to confirm the story is not quite right and encourage them to hold it — use an informal relationship to manage the timing.",
      "Respond directly to the journalist to explore what they know before deciding how to comment — understanding their sourcing helps you gauge the risk of the story.",
      "Respond with a standard no-comment: \"InnoFac does not comment on market rumors or speculation.\" Do not confirm, deny, or elaborate. Notify legal and the CEO immediately after sending.",
      "Do not respond to the journalist at all within the window — let the deadline pass without a comment, as no comment is not the same as confirmation."
    ],
    "correct": 2,
    "consequences": {
      "customerTrust": 9,
      "strategicPosition": 10,
      "executionRisk": -6
    },
    "explanation": "A standard \"no comment on market rumors\" response is the only legally safe and strategically sound option in this scenario. It is non-confirmatory, non-deniatory, and protects the NDA while still providing the journalist a quoted response — which is better for the relationship than silence. Immediately notifying legal and the CEO is the required follow-up: the fact that a journalist has two sources on a confidential acquisition is a material leak event that the deal team and acquirer must know about. Probing the journalist's sourcing is a tactic that experienced journalists use to get confirmations by inference — any engagement beyond the standard no-comment is a risk. An informal off-the-record conversation to \"encourage a hold\" is a strategy that requires a pre-existing trusted relationship with the journalist and almost always backfires in deal contexts — it can cause a journalist to accelerate rather than delay. Not responding at all leaves the journalist to publish \"company did not respond\" which in a deal context is often read as tacit confirmation.",
    "framework": "Media Inquiry Protocol in M&A — during acquisition negotiations, media inquiries about deal activity are legal events, not communications events. The CMO's role is to execute the standard no-comment immediately and escalate to legal and the deal team. Any other response, however well-intentioned, carries NDA and deal risk.",
    "principle": "A \"no comment on market speculation\" is not evasion — it is the legally correct answer that every media-trained executive should deliver instinctively in a deal context.",
    "traps": [
      "Probing the journalist's sources to gauge risk is a tactic used by people who do not understand that any non-standard engagement can be construed as confirming the premise of the question.",
      "An off-the-record conversation to encourage a hold requires a trust level with the journalist that almost certainly does not exist in this scenario and can accelerate rather than delay publication if the journalist interprets the call as an admission.",
      "Not responding within the deadline window results in \"InnoFac declined to comment\" or \"did not respond\" — in a deal story, either formulation is read by the market as weaker than a clean no-comment on speculation."
    ]
  }
]
