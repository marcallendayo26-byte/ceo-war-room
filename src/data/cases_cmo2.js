export const CASES_CMO2 = [
  {
    "id": "CMO-DG01",
    "category": "Demand Generation",
    "difficulty": 1,
    "scenario": "Your demand gen program generates 200 MQLs/month. Sales converts 12% of MQLs to opportunities and closes 18% of those. Average deal size is $24K. That produces roughly $103K in monthly new ARR. You need to increase pipeline by 40% — from approximately $570K per quarter to $800K. Your demand gen team has capacity to double down on either volume or conversion rate improvement, but not both simultaneously. Where do you invest?",
    "options": [
      "Increase MQL volume — growing from 200 to 280 MQLs/month while holding conversion rates constant reaches the 40% pipeline target through proven, controllable channels.",
      "Improve MQL-to-opportunity conversion from 12% to 17% — better lead qualification and sales enablement is a higher-leverage intervention than raw volume.",
      "Improve opportunity-to-close rate from 18% to 25% — win rate improvement at the bottom of the funnel produces the highest dollar return per investment.",
      "Invest in increasing average deal size through packaging and upsell signals in the MQL nurture flow before the conversion metric work begins."
    ],
    "correct": 1,
    "consequences": {
      "growth": 10,
      "profitability": 6,
      "executionRisk": 2
    },
    "explanation": "A 12% MQL-to-opportunity conversion rate is below the 15–20% benchmark for a healthy B2B SaaS funnel, which signals that MQL quality, qualification criteria, or handoff process is the constraint — not raw volume. Improving conversion from 12% to 17% on the same 200 MQLs produces more pipeline than growing volume from 200 to 280 MQLs at the same 12% rate. Option A is tempting because volume growth feels controllable, but it papers over an inefficiency that will compound as you scale. Option C (win rate) is a sales execution variable, not a demand gen lever. Option D (deal size) is a product/packaging decision that operates on a longer cycle than the pipeline gap requires.",
    "framework": "Funnel efficiency analysis — before adding volume to a leaky funnel, diagnose the conversion rates at each stage. Improving a conversion rate is usually higher-leverage than increasing upstream volume because the benefit compounds through every subsequent stage.",
    "principle": "Volume amplifies a healthy funnel. It amplifies an inefficient one too — at greater cost.",
    "traps": [
      "Growing MQL volume without fixing a below-benchmark conversion rate scales the inefficiency and increases cost per opportunity without improving pipeline ROI.",
      "Win rate improvement is a sales execution variable — the CMO can support it but cannot drive it unilaterally, making it an unreliable answer to a demand gen problem.",
      "Deal size improvement through packaging is a 6-12 month motion — it does not address a near-term pipeline gap."
    ]
  },
  {
    "id": "CMO-DG02",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your LinkedIn ads generate a 2.3% CTR and 400 clicks/month at $8 CPC — 400 leads/month at $3,200 spend — but only 2% of those convert to SQL, producing 8 SQLs/month at an effective $400 cost per SQL. Your content marketing generates 90 leads/month at roughly $1,100 in content production cost, with 11% SQL conversion — producing 10 SQLs/month at $110 cost per SQL. Your CFO wants to double LinkedIn spend because it generates the highest top-of-funnel volume. You are preparing the budget defense.",
    "options": [
      "Double LinkedIn spend as the CFO proposes — volume-led growth compounds over time as remarketing and brand recall improve SQL conversion rates at scale.",
      "Frame the budget decision around cost per SQL, not lead volume — $110 vs. $400 per SQL is a 3.6× efficiency gap that favors content even at lower absolute volume.",
      "Increase content marketing investment to 3× its current budget before any LinkedIn scaling — the highest-ROI channel should be maximized first.",
      "Run a 60-day test doubling LinkedIn spend while holding content budget constant, using SQL volume as the primary success metric."
    ],
    "correct": 1,
    "consequences": {
      "growth": 9,
      "profitability": 8,
      "strategicPosition": 6
    },
    "explanation": "The CFO's instinct to maximize the highest-volume channel is a common demand gen trap. The correct framing is cost per SQL, not cost per lead, because leads that do not convert to SQLs represent wasted spend. Content marketing is generating SQLs at $110 each versus LinkedIn's $400 — a 3.6× efficiency advantage. The CMO's job in this budget review is to reframe the conversation from volume metrics to conversion-adjusted ROI metrics. Doubling LinkedIn spend without addressing the 2% SQL conversion rate scales the inefficiency. Tripling content budget before any LinkedIn investment is defensible directionally but overcorrects without data on content's scalability. A 60-day test with SQL as the metric is structurally sound but delays a decision the current data already supports.",
    "framework": "Cost per SQL framing — in demand gen budget reviews, volume metrics (leads, CTR, clicks) flatter high-spend channels. The decision should always be anchored to cost per SQL or cost per opportunity, which normalizes for conversion rate differences.",
    "principle": "Every lead that does not convert to an SQL is a cost without a return. Budget decisions made on lead volume silently reward the most inefficient channels.",
    "traps": [
      "Accepting the CFO's volume framing without recontextualizing around SQL conversion allows a marketing metric (lead volume) to drive a financial decision (budget allocation) — the CMO loses credibility and the company loses efficiency.",
      "Tripling content investment before touching LinkedIn assumes content scales linearly, which is not demonstrated — content has capacity and quality constraints that do not respond to spend in the same way paid channels do.",
      "A 60-day test is appropriate when you lack data — but $110 vs. $400 per SQL over several months of existing data is signal, not noise. Testing delays a clear decision."
    ]
  },
  {
    "id": "CMO-DG03",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your webinar series generates 400 attendees/month. Within 30 days post-webinar, 3% convert to sales conversations — 12 opportunities/month. Your CRO says this 3% rate is too low to justify the production cost ($4,500/month) and labels the audience \"low intent.\" Your demand gen team argues that the 30-day window is inappropriate for an enterprise buying cycle that averages 90-120 days. You have 6 months of webinar data. Your post-webinar email sequence is currently 3 emails over 14 days.",
    "options": [
      "Agree with the CRO — a 3% conversion rate on 400 attendees is empirically weak regardless of the buying cycle length, and the program should be restructured or cut.",
      "Defend the program — extend the attribution window to 90 days and build a longer nurture sequence before making a channel decision based on incomplete data.",
      "Extend the post-webinar nurture sequence from 14 days to 90 days, measure 90-day conversion, and bring updated data to the channel review in one quarter.",
      "Reframe the webinar as a brand and top-of-funnel program, remove the 30-day conversion expectation entirely, and move the budget accountability to awareness metrics."
    ],
    "correct": 2,
    "consequences": {
      "growth": 8,
      "strategicPosition": 7,
      "executionRisk": 2
    },
    "explanation": "Both the CRO and the demand gen team are partially right. A 3% conversion in 30 days on an enterprise product with a 90-120 day buying cycle is almost certainly undercounting total impact. But \"the window is wrong\" is a hypothesis, not a conclusion — you cannot defend a program by arguing that the data would look better with different measurement parameters. The correct move is to actually change the nurture sequence to match the buying cycle (14 days to 90 days), measure conversion at 90 days, and return with data. This converts a theoretical argument into an empirical one. Option B (just extend the window) without changing the nurture sequence assumes that doing nothing differently for 60 more days will improve conversion. Removing conversion accountability entirely (option D) avoids the question rather than answering it.",
    "framework": "Attribution window calibration — measuring a long-cycle channel against a short conversion window produces false negatives. But the fix is to change the program to actively nurture the longer cycle, not just to extend the measurement window without intervention.",
    "principle": "Measuring a 90-day enterprise buyer with a 30-day conversion window is like measuring a marathon runner at mile 10. Change the program and the measurement together.",
    "traps": [
      "Agreeing with the CRO based on the 30-day rate alone cuts a program without testing the hypothesis that a longer nurture sequence would materially change outcomes.",
      "Extending only the attribution window without changing the nurture program claims credit for conversions that happen despite the program, not because of it.",
      "Removing conversion accountability entirely is a retreat from ROI measurement — it may feel like a strategic reframe but it makes the program undefendable at the next budget review."
    ]
  },
  {
    "id": "CMO-DG04",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your site generates 8,000 organic visits/month with a 0.8% conversion to MQL — 64 MQLs/month from SEO. A competitor analysis shows you are losing ground on 12 high-intent transactional keywords (e.g., \"fleet management software pricing,\" \"dealer management system comparison\"). An SEO agency proposes a $6K/month retainer — $72K/year — to address technical SEO issues, build domain authority through backlinks, and produce 8 articles/month. They project 15,000 organic visits/month within 6 months. You are evaluating the investment.",
    "options": [
      "Approve the retainer — recovering lost keyword positions on high-intent terms is an asymmetric investment; the 6-month timeline and 15K visit projection are within industry norms.",
      "Approve the retainer but scope it down to technical SEO fixes only in the first 90 days, hold on content production until the technical baseline is established.",
      "Reject the retainer and allocate the $72K to paid search on the same high-intent keywords — paid search delivers traffic immediately and the performance is directly attributable.",
      "Request a pilot: pay for a 90-day technical SEO audit and 4 articles before committing to the full retainer, using organic rank movement as the go/no-go criterion."
    ],
    "correct": 0,
    "consequences": {
      "growth": 9,
      "profitability": 5,
      "strategicPosition": 7,
      "cash": -5
    },
    "explanation": "High-intent transactional keywords in a vertical SaaS category are high-value SEO real estate with durable returns — a prospect searching \"dealer management system comparison\" is in active evaluation. Organic ranking improvements compound over time and, unlike paid search, do not stop the moment the budget is cut. The $6K/month for a 15K visit projection (at maintained 0.8% conversion = 120 MQLs/month vs. 64 today) is a strong expected ROI if the agency projection is within reasonable range. The technical-only approach in option B delays results unnecessarily — technical SEO and content production are not strictly sequential for an established site. Replacing SEO with paid search on the same keywords solves a short-term problem but creates permanent channel dependency and ongoing spend with no compounding value. A 4-article pilot is insufficient to generate rank movement in a competitive keyword space and produces a false negative.",
    "framework": "SEO as compounding asset — unlike paid channels, organic ranking investments compound: content published in month 2 builds authority that benefits content published in month 8. The durable return justifies a longer payback window versus paid search.",
    "principle": "Paid search rents visibility. SEO builds it. Evaluate them on different ROI timeframes accordingly.",
    "traps": [
      "Scoping the retainer to technical-only in month 1 extends the timeline to results by 3+ months without materially reducing the risk of the investment — technical SEO alone rarely moves the needle on competitive keywords.",
      "Reallocating to paid search on the same high-intent keywords creates ongoing cost with no residual value and abandons the compounding advantage of organic rankings.",
      "A 4-article pilot generates insufficient signal in a 6+ month SEO timescale — organic rank movement is slow and a 90-day window produces data that looks like failure even when the strategy is sound."
    ]
  },
  {
    "id": "CMO-DG05",
    "category": "Demand Generation",
    "difficulty": 3,
    "scenario": "Your ABM program targets 200 named accounts with personalized multi-touch campaigns: direct mail, personalized email sequences, LinkedIn ads targeted to buying committee members, and custom landing pages. Engagement rate on ABM accounts is 3× higher than non-targeted outbound. Average engagement per account is 4.2 touchpoints before any sales response. But 6 months in, ABM accounts represent only 15% of total pipeline. Your VP Sales calls the program \"marketing theater\" because pipeline contribution is too low. How do you diagnose and respond?",
    "options": [
      "Defend the program — 3× engagement lift and 4.2 touchpoints per account are leading indicators of pipeline that lags behind engagement by 60-90 days in enterprise buying cycles.",
      "Concede the VP Sales framing and restructure ABM as a sales support tool rather than a pipeline generation program — reframe success metrics around deal acceleration and win rate in ABM accounts versus non-ABM.",
      "Expand the ABM target list from 200 to 400 accounts to increase total pipeline opportunity, and add SDR sequencing as a direct pipeline-generation layer on top of the marketing touchpoints.",
      "Diagnose before deciding — pull pipeline data on ABM accounts that have been in the program for 90+ days specifically, then compare conversion rates and pipeline velocity against equivalent non-ABM accounts."
    ],
    "correct": 3,
    "consequences": {
      "strategicPosition": 9,
      "growth": 7,
      "teamMorale": 6
    },
    "explanation": "Six months of ABM data with only 15% pipeline contribution could mean two different things: (1) the program is underperforming and the VP Sales is right, or (2) accounts are still in the engagement phase and pipeline conversion lags engagement by 60-90 days in this buyer segment. You cannot distinguish between these interpretations with aggregate data. The right diagnostic is to segment the pipeline view by account cohort tenure — specifically, what is the pipeline contribution of accounts that entered the ABM program 90+ days ago? If that cohort shows materially higher pipeline conversion, the \"theater\" critique is incorrect and the program needs time. If the 90-day cohort is also flat, the VP Sales critique has merit and the program needs restructuring. Pure defense without data (option A) is advocacy, not analysis. Conceding without diagnosis (option B) loses leverage. Expanding volume (option D) scales a program you have not validated.",
    "framework": "ABM effectiveness diagnosis — ABM is a long-cycle program; engagement metrics precede pipeline metrics by 60-90 days in enterprise buying. Attribution must be cohort-segmented by time-in-program to produce an accurate effectiveness signal.",
    "principle": "Six months of aggregate ABM data that includes accounts in week 2 and accounts in week 24 cannot answer the effectiveness question. Cohort by tenure before you conclude.",
    "traps": [
      "Defending the program on engagement metrics alone (3× lift, 4.2 touchpoints) without connecting those metrics to downstream pipeline is marketing self-advocacy, not analysis — and it will not persuade a revenue-focused VP Sales.",
      "Conceding the VP Sales framing without data analysis risks killing a program that is working on its proper timeline but has been measured against an inappropriate 6-month window.",
      "Expanding the account list before validating the program logic scales uncertainty — if the program is flawed, you are now running a flawed program at 2× the cost."
    ]
  },
  {
    "id": "CMO-DG06",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your current pipeline breakdown: outbound SDR sequences 60%, marketing-sourced (inbound, content, events) 20%, partner referrals 12%, customer referrals 8%. Your CEO says the over-reliance on outbound is a business risk — if SDR capacity drops or outbound response rates decline (industry average reply rate has dropped from 3.2% to 1.8% over 24 months), the pipeline collapses. You have 6 months before the next planning cycle and a $180K discretionary budget to begin shifting the mix.",
    "options": [
      "Invest in SEO and content marketing — organic is the highest-leverage long-term channel and $180K can fund 12 months of meaningful content production and distribution.",
      "Invest in a partner and referral program — customer referrals (8%) and partner referrals (12%) are already your most efficient channels, and structured investment will compound both.",
      "Invest in converting the outbound motion to a hybrid inbound-outbound model — use the $180K to build a content-led nurture engine that SDRs can reference and that also attracts inbound.",
      "Distribute the $180K proportionally across all inbound channels to build a balanced demand gen engine quickly without concentrating risk in any single new channel."
    ],
    "correct": 1,
    "consequences": {
      "growth": 9,
      "profitability": 7,
      "strategicPosition": 8,
      "executionRisk": 2
    },
    "explanation": "Customer and partner referrals are already your most efficient channels by implied cost per acquisition — they convert at higher rates, close faster, and arrive with built-in trust. At 8% and 12% respectively, these channels are underinvested relative to their demonstrated efficiency. Structured investment in referral incentives, partner enablement, and partner co-marketing is a 6-month timescale investment that can materially shift the pipeline mix. SEO and content marketing are valuable but require 9-12 months before they move pipeline meaningfully — too slow for a 6-month planning window. A content-led nurture engine (option C) helps the existing outbound motion but does not reduce outbound dependency, which is the stated goal. Proportional distribution across all channels (option D) dilutes the investment below the threshold required for any single channel to show meaningful impact.",
    "framework": "Channel diversification by efficiency signal — when reducing dependency on an over-weighted channel, invest first in existing high-efficiency channels that can scale with structured investment, before building new channels from zero.",
    "principle": "The fastest path to channel diversification is structured investment in channels that are already working at small scale, not building new channels from scratch.",
    "traps": [
      "Content and SEO are high-leverage on a 12-18 month horizon but are too slow to shift pipeline mix within a 6-month planning window — they are the right 18-month answer, not the right 6-month answer.",
      "A content-led nurture engine that SDRs use is an outbound efficiency play, not a channel diversification play — it makes the over-weighted channel slightly better without reducing the dependency.",
      "Distributing $180K across all channels at equal proportion (roughly $36K each) is below the meaningful investment threshold for any single channel and will produce negligible movement in any pipeline metric."
    ]
  },
  {
    "id": "CMO-DG07",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your marketing database has 4,000 contacts who opted in 12-18 months ago but have not engaged (opened, clicked, or responded) in the last 90 days. Your email deliverability score has dropped from 94 to 81 over 6 months due to bounces and spam complaints from this segment. A junior marketer suggests a full re-engagement campaign to all 4,000. Your email platform shows 600 hard bounces, 1,200 with no opens in 12 months, and 2,200 who have opened at least once in the last 12 months.",
    "options": [
      "Immediately suppress the 600 hard bounces and 1,200 12-month non-openers, run a targeted re-engagement campaign to the 2,200 who have shown some recent activity, and set suppression criteria for non-responders.",
      "Run the re-engagement campaign to all 4,000 contacts — a larger send base improves statistical confidence on which messages resonate, and the campaign will naturally surface who is truly unengaged.",
      "Pause all email marketing to this database segment until the deliverability score recovers above 90, then resume with a clean re-engagement sequence.",
      "Remove all 4,000 from the active send database, import them into a low-frequency nurture sequence capped at 2 emails/month, and focus primary demand gen resources on new contact acquisition."
    ],
    "correct": 0,
    "consequences": {
      "growth": 7,
      "customerTrust": 8,
      "executionRisk": -2
    },
    "explanation": "Email deliverability is a domain reputation asset that, once damaged, is costly to restore. The database has three distinct populations that require different treatment: hard bounces (remove immediately — continuing to send to these destroys deliverability), 12-month non-openers (suppress — any engagement signal has been exhausted), and 2,200 contacts with at least one recent open (re-engage with a targeted, high-quality campaign with clear opt-out options and suppression criteria for non-responders). Sending to all 4,000 compounds the deliverability problem by adding more spam complaints and soft bounces. A full email pause is overcorrection — the 2,200 with recent engagement represent live pipeline opportunities. Moving all 4,000 to a low-frequency sequence ignores the meaningful segmentation that already exists in the data.",
    "framework": "Database hygiene tiering — unengaged databases require segmentation by recency and engagement signal before any re-engagement campaign. Treating 600 hard bounces and 2,200 recent openers as the same audience is a data management failure.",
    "principle": "Deliverability is a domain-level asset that deteriorates faster than it recovers. Hard bounces and long-term non-openers should be removed proactively, not re-engaged.",
    "traps": [
      "Sending to all 4,000 to \"let the campaign surface who is truly unengaged\" is backwards — you already know who is unengaged from the data, and sending to them accelerates deliverability damage.",
      "A full email pause to recover deliverability abandons 2,200 contacts who have shown recent engagement — the pause punishes your best database segment.",
      "Moving all 4,000 to a low-frequency nurture ignores the segmentation signal in the data and treats the 2,200 recent openers the same as hard bounces, wasting your highest-quality re-engagement opportunity."
    ]
  },
  {
    "id": "CMO-DG08",
    "category": "Demand Generation",
    "difficulty": 3,
    "scenario": "Your demand gen head proposes building a free Fleet Cost Savings ROI Calculator — a web tool that lets fleet managers input vehicle count, average fuel cost, maintenance spend, and downtime hours to calculate their current cost and your platform's projected savings. Development cost: $15K. Competitor ROI calculators average 1,200 visits/month with 8% email capture — roughly 96 leads/month at an ongoing cost near zero after build. Your team projects similar results. The CFO pushes back: \"It's not a product, it's a marketing budget item dressed up as software.\"",
    "options": [
      "Build the calculator — a $15K investment projecting 96 leads/month at near-zero marginal cost is a highly favorable unit economics case; the CFO is confusing capital vs. operating classification with strategic value.",
      "Do not build the calculator — the CFO is partially right that competitor benchmarks cannot be directly applied to your traffic levels, and a 1,200 visit/month benchmark on your current 8,000 organic visits overstates the opportunity.",
      "Pilot the concept with a simpler spreadsheet-based calculator distributed in email campaigns before committing to the $15K web development build.",
      "Build the calculator but restructure it as a gated asset with a sales qualification question at capture to improve SQL conversion rate rather than optimizing for raw email volume."
    ],
    "correct": 3,
    "consequences": {
      "growth": 9,
      "customerTrust": 8,
      "strategicPosition": 7,
      "cash": -3
    },
    "explanation": "An ROI calculator is a high-intent tool — the person using it is self-qualifying by virtue of the inputs they are entering (fleet size, cost data). The strategic problem with a pure email capture approach is that it optimizes for lead volume rather than lead quality. Restructuring the calculator to include a qualification question at capture — fleet size, current DMS provider, timeline for evaluation — converts a volume-based content tool into a qualified lead generation asset that produces SQLs, not just email addresses. This directly addresses the CFO's implicit concern about marketing ROI. Building it raw (option A) is directionally correct but misses the conversion architecture improvement. Refusing because competitor benchmarks may not apply (option B) rejects a good investment based on uncertainty about the precision of a projection. A spreadsheet pilot (option D) cannot test SEO discoverability, the primary driver of calculator traffic.",
    "framework": "Intent-signal tools — ROI calculators and assessment tools capture a uniquely high-intent signal because the prospect is voluntarily entering business-specific data. The design should leverage that intent signal for qualification, not just email capture.",
    "principle": "A tool that asks the prospect to input their actual cost data is more valuable as a qualification engine than as an email capture mechanism. Build for SQL, not for MQL.",
    "traps": [
      "Building for raw email capture at 8% optimizes for a volume metric that the CFO will rightly challenge — anchoring to SQL conversion and pipeline impact is the stronger budget defense.",
      "Rejecting the build because your traffic may not match the competitor benchmark ignores the compounding SEO value of a tool asset, which accumulates backlinks and organic traffic independently of your current baseline.",
      "A spreadsheet pilot cannot simulate SEO discoverability or organic backlink generation, which are the primary long-term value drivers of a web tool asset — the pilot produces a false negative."
    ]
  },
  {
    "id": "CMO-DG09",
    "category": "Demand Generation",
    "difficulty": 2,
    "scenario": "Your paid search budget is $12K/month across 3 campaign types: generic category keywords ($6K, avg CPC $12, close rate 8%), your own brand keywords ($2K, avg CPC $4, close rate 22%), and competitor brand keywords ($4K, avg CPC $48, close rate 16%). The CFO wants to cut paid search by 30% — a $3,600/month reduction. Your marketing team says cut competitor brand keywords first because of the high CPC. Your instinct says the math requires a more surgical analysis.",
    "options": [
      "Cut competitor brand keywords entirely — $4K at $48 CPC with 16% close rate still has favorable pipeline math, but the 4× CPC premium over category keywords is the highest per-click cost in the portfolio.",
      "Cut $3,600 from generic category keywords — generic keywords have the lowest close rate (8%) and the savings preserve your two highest-converting campaigns.",
      "Defend the full $12K budget by presenting cost per closed deal across all three campaign types before accepting any cut.",
      "Cut generic category keywords by $2K and competitor brand keywords by $1,600 — a proportional reduction that preserves more of the high-intent competitor budget relative to its pipeline value."
    ],
    "correct": 2,
    "consequences": {
      "growth": 8,
      "profitability": 7,
      "strategicPosition": 6
    },
    "explanation": "Before accepting any budget cut, the CMO should translate all three campaigns into cost per closed deal — the metric the CFO actually cares about. Competitor brand: $48 CPC ÷ 16% close rate = $300 per closed deal (rough). Generic category: $12 CPC ÷ 8% close rate = $150 per closed deal. Brand: $4 CPC ÷ 22% close rate = $18 per closed deal. On cost per closed deal, generic category ($150) is less efficient than competitor brand ($300 per deal sounds expensive but is competitive brand defense), and the CFO's instinct to cut may be directed at the wrong line item. Presenting this analysis allows the CFO to make an informed cut — or reconsider. Accepting a $3,600 cut from any campaign before running the math is an avoidable mistake. Cutting competitor brand entirely hands competitors search share and removes a high-close-rate channel. Cutting generic by $3,600 reduces reach on a 8% close-rate channel but may actually be the right answer once the math is shown.",
    "framework": "Cost per closed deal analysis — paid search allocation decisions should be made on cost per closed deal (CPC ÷ close rate), not on CPC alone. High CPC does not equal low ROI when close rate is also elevated.",
    "principle": "Never accept a budget cut before presenting the unit economics in the metric that matters to finance. The conversation changes when you move from \"cost per click\" to \"cost per closed deal.\"",
    "traps": [
      "Cutting competitor brand keywords on the basis of high CPC alone ignores the 16% close rate; cost per click and cost per acquisition are different calculations that lead to different decisions.",
      "Cutting generic keywords without the full cost-per-closed-deal analysis may be correct but is reached for the wrong reasons — close rate alone does not capture the volume and awareness contribution of generic keywords.",
      "A proportional cut sounds balanced but is not analytically justified without the cost-per-closed-deal comparison — balance is not the same as efficiency."
    ]
  },
  {
    "id": "CMO-DG10",
    "category": "Demand Generation",
    "difficulty": 3,
    "scenario": "Your Q2 demand gen report shows pipeline generated increased 25% quarter-over-quarter — from $1.6M to $2.0M. Marketing is claiming success. But deal velocity has slowed 30% — average time to close has stretched from 45 to 62 days — and your CRO is attributing the slowdown to lead quality degradation. Your VP Sales says the new leads require more education, more demo cycles, and produce more no-decisions. Three hypotheses are circulating: (1) Marketing is sourcing higher volume but lower-intent leads, (2) the ICP definition has drifted, (3) a competitive change has lengthened evaluation cycles across the board.",
    "options": [
      "Accept the CRO's diagnosis — a 30% velocity decline concurrent with a demand gen push is most likely a quality signal and the CMO should own the lead quality problem.",
      "Reject the CRO's diagnosis — pipeline dollar growth of 25% is the primary metric, and velocity is a sales execution variable that marketing cannot control.",
      "Segment the pipeline data by lead source, cohort entry date, company size, and deal stage dropout rates before assigning cause — all three hypotheses could be true simultaneously and require different interventions.",
      "Immediately tighten MQL scoring criteria to reduce volume and improve quality, accepting a short-term pipeline decrease as the cost of correcting lead quality."
    ],
    "correct": 2,
    "consequences": {
      "strategicPosition": 10,
      "growth": 7,
      "teamMorale": 6,
      "executionRisk": 2
    },
    "explanation": "A 25% pipeline increase with a 30% velocity decline is a genuine diagnostic puzzle. The three hypotheses — quality drift, ICP drift, competitive lengthening — produce different symptoms and require different interventions. Before accepting or rejecting any diagnosis, segment the data: Are the velocity-slow deals concentrated in a specific lead source (hypothesis 1)? Are they concentrated in company sizes or verticals that were not historical ICP (hypothesis 2)? Are they concentrated in a time cohort that aligns with a competitor product launch (hypothesis 3)? Each answer points to a different fix. Accepting the CRO's framing without analysis cedes the diagnostic to a function with an interest in attributing the problem to marketing. Rejecting it with a pipeline dollar defense ignores a real operational signal. Immediately tightening MQL scoring assumes hypothesis 1 is correct without evidence — and if hypothesis 3 is true (competitive change), tightening scoring will reduce pipeline for a problem you do not own.",
    "framework": "Demand gen diagnostic sequencing — when pipeline volume and deal velocity diverge, segment the data by lead source, ICP fit, entry cohort, and stage dropout before accepting any single hypothesis. Concurrent symptoms can have concurrent causes.",
    "principle": "Pipeline quality and pipeline quantity are separate variables. The answer to their simultaneous divergence is diagnosis, not defense or capitulation.",
    "traps": [
      "Accepting the CRO's quality framing without data analysis is a CMO capitulation that may correctly or incorrectly assign blame to marketing — either way, you have surrendered the diagnostic to a function with a conflict of interest.",
      "Defending the pipeline number while dismissing velocity concerns ignores a real revenue risk — deals that take 38% longer to close are materially different from the model you used to forecast.",
      "Immediately tightening MQL scoring is a hypothesis-confirming intervention that forecloses the investigation — if the velocity problem is competitive or ICP-related, tighter scoring reduces volume without improving velocity."
    ]
  }
]
