---
title: 'Advanced 90-Day Tech Checklist for Startup Founders | rwxt'
description: 'Deep, actionable, non-technical tech checklist with example data to derisk your startup, stabilise your MVP, and get investor-ready in 90 days. Free Notion template included.'
layout: 'checklist'
date: 2025-11-11
draft: false
author: 'rwxt'
keywords:
  - 90-day technical review
  - startup tech audit
  - technical due diligence
  - MVP stability checklist
  - startup CTO checklist
  - technical debt assessment
  - security audit for startups
  - delivery pipeline optimization
  - revenue mapping
  - tech strategy for founders
ogImage: '/img/og-checklist.jpg'
ogType: 'article'
---

# Advanced 90-Day Tech Checklist for Startup Founders

<div class="cl-intro">
<p class="cl-purpose">Your tech is probably a mess. Not your fault—most early-stage startups are held together with hope and duct tape. This checklist helps you figure out what's actually broken, what's costing you money, and what investors will laugh at during due diligence.</p>
<div class="cl-status-legend" aria-label="Status legend">
<span>Done</span>
<span>In Progress</span>
<span>Not Started</span>
</div>
</div>

## How This Works

Pick one pillar per week. Fill in the tables honestly (no one's grading you). The italic examples show what "good" looks like—steal them if they fit, ignore them if they don't. Revisit your answers in 90 days and feel smug about the progress.

---

## Pillar 1: System Intelligence - Risk Map

| Task                                                  | Done? | Notes                                                           |
| ----------------------------------------------------- | ----- | --------------------------------------------------------------- |
| Map all core dependencies (hosting, APIs, frameworks) |       | _AWS, Stripe, Firebase, React_                                  |
| Identify bottlenecks (tech, process, people)          |       | _Only one dev knows deployment; manual testing_                 |
| Identify tech debt silently increasing spend          |       | _Old Firebase functions still running, unused AWS instances_    |
| Ask: "If this fails tomorrow, what breaks?"           |       | _Checkout fails → revenue stops; notifications fail → UX drops_ |
| Highlight single points of failure                    |       | _Dev laptop is the only source of truth for code_               |

### What to Actually Do

List everything that would make your product fall over if it died tomorrow. For each one, note who knows how it works (if the answer is "only Dave," you're in trouble). Ask your dev what scares them most about the stack—their answer matters more than yours. Then audit your AWS account for zombie servers you forgot about that are costing £200/month. Identify where critical knowledge lives in one person's head. Draw the customer journey and mark every external dependency. Pick your top 3 risks and label them honestly.

{{< accordion title="How to Do It" open="true" >}}

**Inventory everything:** Write down every service, API, and library your product needs to function. Yes, all of them. Include the obvious stuff (AWS, Stripe) and the things you forgot about (that random geocoding API Dave added two years ago). If you can't list it, you don't actually know what your product depends on—and that's terrifying.

**Assess failure impact:** For each dependency, work out what breaks when it dies and how long recovery takes. Not "might be affected"—what actually stops working. If you can't answer this for your payment processor, you're not ready for scale.

**Find single points of failure:** Ask your dev team who knows how to deploy. If only one person raises their hand, you've found your first disaster waiting to happen. Same for any critical code or process. The "only Dave knows" problem kills startups.

**Uncover hidden tech debt:** Log into your cloud accounts and look for things you forgot were running. Old staging environments, abandoned databases, test servers from 2023—all costing money and adding risk. Most founders find £500+/month of waste here.

**Visualise the system:** Draw how a user request flows through your product, from click to response. Mark each external service. Even a rough sketch on paper will reveal bottlenecks you didn't know existed.

**Prioritise and label risks:** Pick your top 3 scariest dependencies. The ones that, if they died, would properly ruin your week. Label them honestly (critical/medium/low). These are what you fix first.

{{< /accordion >}}

{{< accordion title="Questions to Ask" >}}

**What happens when X dies tomorrow?** Pick your payment processor. Now imagine it's down for six hours. Do you know how much revenue you'd lose, or would you just panic and refresh the dashboard repeatedly?

**Could you survive without Dave?** If your lead dev got hit by a bus (or more realistically, quit for a better offer), could anyone else deploy? If the answer is no, you don't have a tech stack—you have a Dave dependency.

**What are we paying for that does nothing?** Check your AWS bill. Find the servers you forgot about. Cancel the SaaS tools no one uses. Most startups waste 20-30% of their infrastructure spend on ghosts.

**What keeps you awake at night?** Your gut knows the riskiest part of your stack. Name it. Then plan to fix it before it actually breaks at 3am.

**What's the disaster recovery plan?** If your database vanished right now, what would you do? If the answer involves phrases like "probably" or "I think," you don't have backups—you have hope.

{{< /accordion >}}

{{< accordion title="Where to Look" >}}

**Cloud provider console:** Log into AWS/GCP/Azure and look at what's actually running. Check the billing page for surprises. That £300/month charge for an unused load balancer? Found it.

**Hosting platforms:** If you're on Heroku, Vercel, or Netlify, list every app and environment. Test apps from six months ago are probably still running and costing money.

**Code repository:** Open your package.json or requirements.txt. Count the dependencies. If it's more than 50, you probably don't know what half of them do. Check README files for API mentions.

**Third-party dashboards:** Visit Stripe, Auth0, SendGrid—wherever you've got integrations. Note what would break if each service went down. This usually reveals dependencies you'd forgotten.

**Ask the team:** Interview your devs properly. "What would break if you went on holiday?" surfaces the scary stuff: certificates on someone's laptop, deployment processes only one person knows, credentials that aren't documented.

{{< /accordion >}}

---

## Pillar 2: Revenue Map

| Feature / System     | Revenue Impact | Cost Centre   | Hidden Leverage              | Done? | Action                                                   |
| -------------------- | -------------- | ------------- | ---------------------------- | ----- | -------------------------------------------------------- |
| _Signup flow_        | _High_         | _Engineering_ | _Optimisation potential_     |       | _Improve form UX → +10% conversion_                      |
| _Checkout/payment_   | _Critical_     | _Finance_     | _Retry/failover hidden risk_ |       | _Add Stripe retry → fewer failed payments_               |
| _Key growth feature_ | _Medium_       | _Product_     | _Could double conversion_    |       | _Referral system not fully tracked, could drive signups_ |

### What to Actually Do

Map the path from "someone clicks your ad" to "money hits your bank account." Note which systems support that journey and which ones just cost money. Find where users are dropping off in embarrassing numbers. Identify at least one quick win that could boost conversion. List everything you're paying for that customers wouldn't miss. Tag each feature honestly: makes money, protects money, or wastes money.

{{< accordion title="How to Do It" open="true" >}}

**Trace the money path:** Draw the journey from "someone discovers you" to "payment complete." Landing page → signup → onboarding → use feature → upgrade → checkout → payment success. Write down which systems enable each step. Any hiccup in this chain directly costs you revenue.

**Link tech to each revenue step:** For each step, note what it depends on. Checkout needs Stripe and your database. Onboarding needs your email service. Work out which technical failures would kill revenue, then obsess about keeping those systems alive.

**Spot the money pits:** Find the expensive bits that don't make money. The oversized database that's 90% idle. The premium analytics tool no one checks. Features you spent three months building that users ignore. List them. Then kill them or downgrade them.

**Find hidden growth levers:** Look for the obvious wins you're ignoring. Maybe 1,000 people sign up monthly but only 100 activate—that's not a "conversion challenge," that's a massive leak. Fix the biggest drop-off point and revenue jumps.

**Include a revenue protector:** Security and reliability don't make new sales, but losing customer trust kills existing revenue. Include at least one thing that prevents disaster: fraud detection, failover systems, proper backups.

**Run what-if scenarios:** For each feature, ask "What if we turned this off tomorrow?" If the answer is "no one would notice," consider why you're maintaining it. If the answer is "the company would collapse," make sure it's properly monitored.

**Categorise everything:** Tag each feature as makes money (revenue generator), protects money (revenue protector), or wastes money (cost centre). Then reallocate your time accordingly. Most founders spend too long on cost centres and not enough on generators.

{{< /accordion >}}

{{< accordion title="Questions to Ask" >}}

**Where's the biggest leak?** Check your funnel. If 1,000 people sign up but only 100 convert, that's not "standard conversion"—that's a disaster you're ignoring. Find the biggest drop-off and fix it first.

**What could make money this month?** Pick one thing that, if you improved it slightly (faster checkout, clearer pricing, better onboarding), would measurably boost revenue. Then actually do it instead of planning it.

**What happens when payments die?** Imagine Stripe goes down for 12 hours. How much revenue do you lose? Do you have retry logic? Or would you just refresh the dashboard and hope?

**What are we paying for that no one would miss?** Look at your expenses. That premium monitoring tool no one checks. The database instance that's 80% idle. Cancel it. If no one complains in a week, you just found free money.

**What would investors mock us for?** If you pitched tomorrow, what would make a technical investor raise an eyebrow? "You don't track conversion?" "Your entire funnel is manual?" Fix those bits before they ask.

{{< /accordion >}}

{{< accordion title="Where to Look" >}}

**Analytics dashboards:** Open Google Analytics or Mixpanel. Look at your conversion funnel. The step where 60% of users bail? That's your problem. If you can't see this data, set it up before doing anything else.

**Payment gateway:** Log into Stripe. Check your failure rate. If more than 2-3% of payments are failing, you're leaving money on the table. Look for patterns—specific cards, regions, or times when failures spike.

**Database usage stats:** Query which features users actually touch. If you spent three months building something that <5% of users open, that's a cost centre masquerading as a feature. Kill it or fix it.

**Cloud billing:** Open AWS Cost Explorer. Sort by spend. The top three charges should map to your most important features. If you're spending £500/month on infrastructure for a feature nobody uses, you've found waste.

**Support tickets:** Search your support history for "payment" and "slow." Every "I tried to pay but it failed" ticket is lost revenue. Every "too slow, gave up" complaint is a conversion killer. These are your priorities.

{{< /accordion >}}

---

## Pillar 3: Delivery Review

| Aspect                     | Current            | Desired                    | Done? | Notes                                          |
| -------------------------- | ------------------ | -------------------------- | ----- | ---------------------------------------------- |
| Feature shipping frequency | _Weekly / Ad hoc_  | _Predictable cadence_      |       | _Currently 1-2 features per month, aim weekly_ |
| Testing before production  | _Manual / Limited_ | _Staging / Feature flags_  |       | _Use staging environment & feature toggles_    |
| Firefighting vs proactive  | _High urgent_      | _Low urgent, high planned_ |       | \_60% urgent fixes, aim <20%</em>              |

### What to Actually Do

Count how often you ship code. If it's less than weekly, your process is broken. Map every manual step from "idea" to "live"—each one is a future disaster. Check if you have a staging environment (if not, build one this week). Document how to roll back a bad deploy. Ask your devs how they test things—if the answer is "manually on my machine," that's not testing. Set up deployment notifications so the team knows what's shipping. Track one week of dev time to see how much is firefighting vs building. If it's over 30% firefighting, your tech debt is eating you alive.

{{< accordion title="How to Do It" open="true" >}}

**Gauge your release pace:** Check how often you actually ship code. Look at your git history. If you're deploying less than weekly, something's broken in your process. Erratic shipping means unstable releases—fix the cadence first.

**Map the delivery process:** Write down every step from "idea" to "live." Code → review → test → deploy → verify. If any step involves "run this command from my laptop" or "remember to check," you've found your bottleneck. Automate it.

**Set up a staging environment:** If you don't have somewhere to test before production, build one this week. Vercel and Heroku make this trivially easy. Testing in production is how you discover bugs when customers are screaming—not ideal.

**Establish a rollback plan:** Document how to undo a bad deploy in under 5 minutes. Feature flags to disable features. Git revert to previous version. Database snapshot to restore. Write it down. Test it. Don't wait until 3am when everything's on fire.

**Improve testing:** Ask your devs how they test changes. If the answer is "I click around a bit," you need proper tests. Start with the critical paths: login, signup, payment. Even basic automated tests catch 80% of disasters.

**Increase deployment visibility:** Set up a Slack notification for every deploy. Include what changed and who shipped it. When a bug appears, you'll immediately know which deploy caused it instead of guessing.

**Track firefighting vs building:** For one week, log how much dev time goes to unplanned emergencies vs planned work. Tag tickets as "bug" or "feature." If more than 30% is firefighting, your technical debt is killing productivity. Fix the root causes, not the symptoms.

{{< /accordion >}}

{{< accordion title="Questions to Ask" >}}

**Could we deploy on a Friday at 5pm?** If this question makes you nervous, your deployment process is pants. You should be able to ship at 4:59pm on a Friday and go to the pub without checking your phone every five minutes.

**What's the single biggest bottleneck?** Where does code get stuck? Waiting for manual testing? Code review backlog? Deployment taking three hours? Name it. Then fix it. Every bottleneck costs you weeks per year.

**How do we know if a release breaks something?** Do you have monitoring that would catch a major issue, or do you find out when customers start complaining? If it's the latter, you're flying blind.

**Are we fixing the same bugs over and over?** If you've said "didn't we fix this already?" more than once, you're treating symptoms instead of causes. Stop patching and fix the root problem.

**Why are we always firefighting?** If your team spends more time on emergencies than planned work, something's fundamentally broken. Either your tech is unstable or your priorities are chaos. Figure out which.

{{< /accordion >}}

{{< accordion title="Where to Look" >}}

**Git history:** Check your commit and deployment frequency. Daily commits? Good. Weekly massive merges? Risky. Look at release tags to see how often you actually deploy. If it's less than weekly, that's your first problem.

**CI/CD pipeline:** If you have GitHub Actions or Jenkins, review the build logs. Are tests passing? How often do builds fail? If you don't have CI/CD at all, stop reading and set it up—it's 2025.

**Issue tracker:** Open Jira/Trello. Count bug tickets vs feature tickets from the last month. If bugs outnumber features 2:1, you're in firefighting mode. That's unsustainable.

**Error monitoring:** Check Sentry or Rollbar. How many errors are happening in production? If it's "a lot" and you can't quantify it, you need better monitoring. Every error that reaches production is a test you didn't write.

**Staging environment:** Do you have one? Do you actually use it? If you're testing in production because "staging is out of date," fix staging first—testing in prod is how you discover bugs when customers are screaming.

**Slack history:** Search for "hotfix" and "production issue." If you see these weekly, you've got systemic problems. Look for patterns—same component breaking? Same time of day? Those are your priorities.

{{< /accordion >}}

---

## Pillar 4: Security

| Component         | Risk if fails          | Access Control  | Backup Status         | Monitoring         | Done? |
| ----------------- | ---------------------- | --------------- | --------------------- | ------------------ | ----- |
| _AWS / Cloud_     | _Service downtime_     | _MFA enabled_   | _Daily backup tested_ | _Alerts active_    |       |
| _Payment Gateway_ | _Revenue loss / fraud_ | _Limited admin_ | _N/A_                 | _Transaction logs_ |       |

### What to Actually Do

Enable two-factor auth everywhere that touches production. Test that your backups actually restore (not just that they run). Run vulnerability scans on your dependencies. Search your code for hardcoded secrets—if you find any, assume they're compromised and rotate them immediately. List everyone who can delete production data—that list should be terrifyingly short. Set up basic monitoring so you know when things break before customers do. Write down what happens when there's a security incident, because figuring it out at 3am while panicking doesn't work.

{{< accordion title="How to Do It" open="true" >}}

**Enable two-factor auth everywhere:** AWS, GitHub, Stripe, your domain registrar—all of it. Yes, it's annoying. Do it anyway. Takes 10 minutes per account and prevents the "someone guessed our password" disaster that kills startups.

**Test your backups:** Your backups probably don't work. Find out now, not when your database dies. List everything you'd be screwed without (customer data, uploads, configs), check it's being backed up, then actually restore a backup to prove it works. Most startups skip this step and regret it.

**Run vulnerability scans:** Enable GitHub Dependabot. Run `npm audit` or equivalent. If you're using libraries with known security holes, fix them before someone exploits them. Also scan for secrets in your code—API keys, passwords, tokens. If you find any, assume they're compromised and rotate them immediately.

**Lock down permissions:** List who can delete production data or rack up a £50k AWS bill. That list should be two people maximum. Check IAM roles—no one should use the root account for daily work. Remove access for anyone who's left the company. Yes, even Dave who left six months ago.

**Set up monitoring:** Enable login alerts so you know when someone accesses AWS from an unusual location. Set up alerts for CPU spikes (could be an attack) and failed login attempts (could be brute force). The goal is finding out about breaches from alerts, not from customers.

**Plan incident response:** Write down what happens when there's a security incident. Who's in charge? How do you contact the team if email is compromised? What's the first thing you do? Draft a customer communication template now, because writing it while panicking at 3am doesn't work.

{{< /accordion >}}

{{< accordion title="Questions to Ask" >}}

**Is everything MFA-protected?** Check every admin account. AWS, GitHub, Stripe, your domain registrar. If any of them don't have two-factor auth, fix it today. This is the easiest security win that most startups skip.

**When did we last test our backups?** Having backups is not the same as having working backups. If you've never actually restored one, you don't have backups—you have hope. Test one this week.

**What sensitive data are we sitting on?** List everything that would be disastrous if leaked. Customer data, API keys, personal info. Is it encrypted? Do you actually need to store all of it? Most startups store more than necessary and encrypt less than required.

**Who could accidentally destroy everything?** List everyone who could drop the production database or charge £50k to AWS in an afternoon. If that list is longer than two people, your permissions are too loose.

**How fast would we notice a breach?** If someone was inside your system right now, siphoning data or planting backdoors, how long until you'd notice? If the answer is "probably never," you need monitoring.

{{< /accordion >}}

{{< accordion title="Where to Look" >}}

**AWS IAM dashboard:** Check for users without MFA, unused credentials that should be deleted, and overly broad permissions. AWS Security Hub will flag obvious problems like open ports and old access keys. Same for GCP Security Command Center or Azure Security Center.

**Backup storage:** Log into wherever your backups live (S3, managed database console, etc.). Check timestamps—are they recent? Check file sizes—do they look complete? Look for backup job errors. Then actually restore one to prove it works.

**GitHub Security tab:** Review Dependabot alerts for vulnerable dependencies. Enable it if you haven't. Check code scanning results. These automated tools catch the obvious stuff developers miss when rushing.

**Your codebase:** Search for hardcoded secrets. `git grep -i "api_key"` or similar. Check config files, old scripts, test code. If you find any credentials in code, assume they're compromised and rotate them immediately.

**Audit logs:** Check AWS CloudTrail and your application logs for weird activity. Failed login spikes. Permission changes. Unusual access patterns. Set up alerts for critical events so you're notified automatically instead of checking manually.

{{< /accordion >}}

---

## Pillar 5: Tech Strategy

| Timeframe            | Focus                     | 3 Key Items                                                                 | Notes                                            | Done? |
| -------------------- | ------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------ | ----- |
| Short-term (0-30d)   | Leverage / Risk Reduction | _1. Backup automation; 2. Fix critical bugs; 3. Improve feature flag setup_ | Quick wins that reduce risk or speed up delivery |       |
| Medium-term (30-60d) | Scale & Stability         | _1. Staging environment; 2. CI/CD pipeline; 3. Logging & alerting_          | Improvements for investor confidence & growth    |       |
| Long-term (60-90d+)  | Visionary Play            | _1. Modular architecture refactor_                                          | Big-picture bet to position the startup          |       |

### What to Actually Do

Pick three things you can fix in the next 30 days that will meaningfully reduce risk or speed up delivery. Choose three bigger projects for the next 60 days that improve scalability or impress investors. Select one ambitious long-term bet (90+ days) that positions you for serious growth. For each one, write down why it matters to the business—not "improves code quality" but "lets us ship twice as fast" or "prevents the database meltdown we're headed for." Assign owners and deadlines. Review monthly because priorities change.

{{< accordion title="How to Do It" open="true" >}}

**Short-term wins (next 30 days):** Pick three things you can knock out quickly that make a real difference. Automate something you do manually every day. Fix the critical bug everyone complains about. Add monitoring so you stop finding out about outages from customers. The key is achievable fast + high impact.

**Medium-term projects (30-60 days):** Choose three initiatives that make your tech more robust and scalable. Set up proper CI/CD if you're still deploying from laptops. Add comprehensive logging. Build a staging environment. Rework the bottleneck in your architecture. These take more effort but impress technical investors during due diligence.

**Long-term strategic play (60-90+ days):** Pick one ambitious thing that positions you for the next phase. Migrate to microservices. Build proper data infrastructure. Add ML capabilities. Whatever it is, it should be a bet on the future that sets you apart. Start the groundwork now even if completion is months away.

**Connect to business outcomes:** For each item, write why it matters commercially. Not "improves maintainability" (no one cares) but "lets us ship features twice as fast" or "prevents the £10k/month in failed payments" or "required for enterprise sales." If you can't connect it to revenue, cost, or risk, don't build it.

**Assign owners and deadlines:** Every initiative needs a name and a date. Even rough estimates create accountability. Track progress like you would product features. Check in on blockers. Actually finish things instead of letting them drift.

**Review monthly:** Priorities change. What seemed urgent in week 1 might be irrelevant by week 8. Review your roadmap at weeks 4, 8, and 12. Mark things complete. Re-prioritise based on what you've learned. Kill things that no longer make sense.

{{< /accordion >}}

{{< accordion title="Questions to Ask" >}}

**What's about to bite us in three months?** Think ahead. Are there scaling bottlenecks you're ignoring? "We're fine with 100 users but at 1,000 the database dies" means you need to fix the database now, not when you hit 1,000 users.

**What breaks first if we 10x overnight?** This surfaces your real scalability problems. Database? Payment processing? Support capacity? Whatever the answer is becomes your medium-term priority.

**What would make a technical investor cringe?** Imagine a proper CTO looking at your stack. No tests? Manual deployments? Security holes? Those are table stakes. Fix the embarrassing bits before pitching. Also think about what would impress them—infrastructure-as-code? Full CI/CD? Proper monitoring? Build at least one "wow" factor.

**Are we balanced or just firefighting?** If your entire roadmap is quick fixes, you're ignoring strategic problems. If it's all visionary projects, you're ignoring the urgent stuff that's killing productivity. You need both.

**Do we have the skills for what's next?** If your long-term play is ML but no one's touched it, that's a problem. Either hire, consult an expert, or adjust the roadmap. Ambitious plans need capable people.

**What are competitors doing that we're not?** Not to copy blindly, but to avoid being obviously behind. If everyone else has mobile apps or automated onboarding or five-nines uptime, consider whether that's table stakes in your market.

{{< /accordion >}}

{{< accordion title="Where to Look" >}}

**Product roadmap:** Check what the business is planning. If you're launching in a new region in six months, your tech strategy needs internationalisation work now. If a major feature is coming, the tech foundation needs to be ready. Align your roadmap with theirs.

**Engineering backlog:** Ask your devs "What's one thing you wish we could fix?" Their answers reveal morale killers and efficiency drains. Upgrading an ancient framework or paying down specific tech debt often belongs in your strategy.

**Past incidents:** Review your outage history. Every incident points to a strategic investment. Single server got overwhelmed? Add auto-scaling. Specific module keeps breaking? Rearchitect it. Learn from disasters before they repeat.

**Investor feedback:** If advisors or investors have raised tech concerns, address them strategically. "You'll need SOC2 for enterprise sales" becomes a security roadmap item. "No mobile presence" becomes a platform strategy discussion. External perspective matters.

**Industry trends:** Watch what competitors are doing. Not to copy, but to avoid being obviously behind. If your entire industry is adding AI features or migrating to certain architectures, consider whether you're positioning yourself correctly for where the market's going.

{{< /accordion >}}

---

## Weekly Breakdown Example

| Week  | Pillar              | Focus / Checklist                                                      | Done? |
| ----- | ------------------- | ---------------------------------------------------------------------- | ----- |
| 1-2   | System Intelligence | _Map dependencies, identify bottlenecks, sketch risk map_              |       |
| 3-4   | Revenue Map         | _Map revenue/cost, find leverage points, highlight risks_              |       |
| 5-6   | Delivery Review     | _Audit CI/CD, rollback, testing, metrics tracking_                     |       |
| 7-8   | Security            | _MFA, backups, dependency scan, monitoring review_                     |       |
| 9-10  | Tech Strategy       | _Short- and medium-term bets defined & prioritised_                    |       |
| 11-12 | Implementation      | _Execute high-leverage changes, reduce firefighting_                   |       |
| 13    | Final Review        | _Tech Health Snapshot, ready-for-investors review, long-term strategy_ |       |

## Scoring / Output Template

| Pillar              | Week 0 Score | Week 13 Score | Change | Notes                               | Done? |
| ------------------- | ------------ | ------------- | ------ | ----------------------------------- | ----- |
| System Intelligence | _2_          | _4_           | _+2_   | _Critical bottlenecks resolved_     |       |
| Revenue Map         | _3_          | _5_           | _+2_   | _Leverage points optimised_         |       |
| Delivery Review     | _2_          | _4_           | _+2_   | _CI/CD & rollback improved_         |       |
| Security            | _3_          | _5_           | _+2_   | _MFA & monitoring enforced_         |       |
| Tech Strategy       | _1_          | _4_           | _+3_   | _Short & medium-term bets executed_ |       |

## Want help running through it?

If you'd like **20 minutes of free guidance**, I'll walk you through your Tech Health Snapshot and help prioritise the next moves for stability, revenue, and investor readiness.

👉 [Book a free 20-minute review call](/book-call)

<div class="cl-footer-cta">
<p><strong>Download:</strong> <a href="https://stone-editorial-03b.notion.site/90-day-tech-review-2a8929e05e538063891bedb49dd574ba" class="download-cta">Get the Notion template →</a></p>
<p class="cl-author"><strong>Author:</strong> Josh - Fractional CTO helping early-stage founders derisk tech, stabilise MVPs, and scale with confidence.</p>
</div>
