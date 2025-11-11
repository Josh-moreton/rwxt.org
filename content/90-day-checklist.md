---
title: "Advanced 90-Day Tech Checklist for Startup Founders"
description: "Deep, actionable, non-technical tech checklist with example data to derisk your startup, stabilise your MVP, and get investor-ready in 90 days."
layout: "checklist"
date: 2025-11-11
draft: false
---

# Advanced 90-Day Tech Checklist for Startup Founders

<div class="cl-intro">
<p class="cl-purpose"><strong>Purpose:</strong> This checklist helps non-technical founders understand, stabilise, and scale their tech. It's structured to derisk your MVP, reveal hidden leverage points, and make your startup investor-ready.</p>
<div class="cl-status-legend" aria-label="Status legend">
<span>Done</span>
<span>In Progress</span>
<span>Not Started</span>
</div>
</div>

## How to Use This Checklist

- **Weekly Focus:** Each week focuses on one pillar or sub-pillar.
- **Fill Out Tables:** Score risks, identify opportunities, and note actions.
- **Review Progress:** Revisit initial snapshots to see improvements and remaining risks.
- **Iterate:** Adjust the plan as you uncover new insights about your tech stack and delivery.
- **Learn from Examples:** Throughout the checklist, sample answers are provided in _italic light-grey_ text (e.g. _AWS, Stripe, Firebase, React_) to illustrate what "good" looks like. Use these as a guide and replace them with your own details.

---

## Pillar 1: System Intelligence - Risk Map

| Task | Done? | Notes |
| --- | --- | --- |
| Map all core dependencies (hosting, APIs, frameworks) |  | _AWS, Stripe, Firebase, React_ |
| Identify bottlenecks (tech, process, people) |  | _Only one dev knows deployment; manual testing_ |
| Identify tech debt silently increasing spend |  | _Old Firebase functions still running, unused AWS instances_ |
| Ask: "If this fails tomorrow, what breaks?" |  | _Checkout fails → revenue stops; notifications fail → UX drops_ |
| Highlight single points of failure |  | _Dev laptop is the only source of truth for code_ |

### 📋 Action Checklist

- List all systems that keep your product alive: app, database, hosting, billing, monitoring.
- For each, write down: who owns it, what happens if it fails, and how long it would take to recover.
- Ask your dev: "What's the single riskiest thing in our stack?" - write that down.
- Check every cloud account for forgotten services or old environments still charging money.
- Identify where **knowledge is trapped in one person's head** (bus factor = 1).
- Draw a simple flow diagram showing the customer journey and mark every external dependency.
- Highlight your top 3 technical dependencies and assign a risk colour (🟥, 🟨, 🟩).

### 📋 How to Do It

- **Inventory everything:** List every app, service, database, API, library, and third-party service that your product relies on. Include infrastructure (like your cloud hosting on AWS/Azure, servers, Firebase), external APIs (payments, analytics, messaging), and major frameworks or libraries in your code. This comprehensive inventory is the foundation of your risk map.
- **Assess failure impact:** For each dependency on your list, note who is responsible for it (internal team or third-party), what happens to the user experience if it fails, and how long it would take to restore service. Essentially, answer "if this goes down, what breaks and how bad is it?" for every item. This exercise highlights your most fragile points and where you need contingency plans.
- **Find single points of failure:** Talk with your development team to identify any critical knowledge or access that only one person holds (a "bus factor" of 1). Ask them directly: _"What do you think is the riskiest part of our stack?"_ Write down their answer. Also pinpoint any processes or pieces of code that only one developer knows well. If only one dev knows how to deploy or if the **source of truth** for code lives on a single laptop, mark that as a serious risk.
- **Uncover hidden tech debt:** Audit your cloud and service accounts for things running that shouldn't be. Look for old functions, servers, or environments that are still live (and perhaps incurring costs) but no longer used. These "ghost" resources not only waste money but also add hidden risk (an outdated service could break unexpectedly or become a security vulnerability). Clean up what you can, and note down anything suspicious to address later.
- **Visualize the system:** Draw a simple diagram of how data and requests flow through your product, from a user action to your backend systems. Mark each external service or module along that journey. This visual map makes it easier to spot dependencies and chokepoints. Pay attention to any component that multiple things rely on-those can be bottlenecks or single points of failure. Even a basic boxes-and-arrows sketch on paper can clarify a lot.
- **Prioritize and label risks:** From your findings, pick the top 3 most critical dependencies or failure points in your stack. Maybe it's a third-party API that, if down, would cripple your product, or a part of the codebase only one person understands. Assign a risk level to each (for example, 🟥 high risk, 🟨 medium, 🟩 low). These are the areas you'll want to address first. By the end of 90 days, you should aim to turn those reds to yellows or greens by adding redundancies or mitigations.

### 💭 Questions to Ask

- **What happens if X goes down tomorrow?** - Pick each major dependency and imagine it failing. Do you know the user impact and how to recover?
- **Is any one person a single point of knowledge?** - If our lead dev disappeared for a week, could we still deploy and fix things? Where is institutional knowledge lacking backup?
- **Are we paying for stuff we don't use?** - Scan for servers, services, or subscriptions that are running idle. Those could be eliminated to save cost and reduce complexity.
- **Which part of our system keeps me up at night?** - Your gut often knows the riskiest component. Identify it explicitly and plan to shore it up.
- **What's our plan for disaster recovery?** - If our database got wiped or our main server died, do we have backups and a process to get back online? Who would do what?

### 🔍 Where to Look

- **Cloud provider console (AWS, GCP, Azure):** Review all running services, servers, databases, and their configurations. The AWS dashboard, for example, can show you every resource - check for any you don't recognize or no longer need. Also look at your cloud billing summary to catch unused resources (e.g. an idle EC2 instance or old storage bucket).
- **Hosting platforms (Heroku, Vercel, Netlify):** If you use any platform-as-a-service, log in and list all your apps, environments, and add-ons. Ensure each one is known and necessary. Sometimes test apps or old versions linger online unknowingly.
- **Code repository (GitHub, GitLab):** Scan your repositories (and their README or docs) for mentions of external services, APIs, or keys. Your package.json/requirements.txt can reveal third-party libraries or SDKs in use (e.g. Stripe, SendGrid). This helps map dependencies that aren't immediately obvious.
- **Third-party service dashboards:** Consider services like Stripe (payments), Auth0 (authentication), Firebase, etc. Visit their dashboards to remind yourself what parts of your product rely on them. Note any webhooks, API keys, or integrations set up - these are all dependencies.
- **Ask the team:** A quick Q&A with your developers can surface hidden dependencies ("Oh, we also use an IP geolocation API for that feature") and unwritten knowledge ("Only John's laptop has the push notification certs"). Encourage them to think of "what would break if you went on vacation" to identify obscure single points of failure.

---

## Pillar 2: Revenue Map

| Feature / System | Revenue Impact | Cost Centre | Hidden Leverage | Done? | Action |
| --- | --- | --- | --- | --- | --- |
| _Signup flow_ | _High_ | _Engineering_ | _Optimisation potential_ |  | _Improve form UX → +10% conversion_ |
| _Checkout/payment_ | _Critical_ | _Finance_ | _Retry/failover hidden risk_ |  | _Add Stripe retry → fewer failed payments_ |
| _Key growth feature_ | _Medium_ | _Product_ | _Could double conversion_ |  | _Referral system not fully tracked, could drive signups_ |

### 📋 Action Checklist

- Identify your **revenue-critical flows** (e.g. signup → checkout → payment success).
- Mark which systems support or protect those flows (databases, payment gateways, CRMs).
- List **non-revenue but high-cost systems** (idle servers, over-provisioned cloud, tools you don't use).
- Find at least one **growth lever** - a feature or insight that increases conversion or reduces churn.
- Identify **one feature** that protects reputation (security, reliability, privacy).
- Run a "what if we lost this feature?" test - what's the revenue risk?
- Tag all features as: _revenue generator_, _revenue protector_, or _cost centre_.

### 📋 How to Do It

- **Trace the money path:** Outline the journey a user takes from discovering your product to completing a payment. This is your core **funnel** for revenue. For example, it might be _Landing Page → Sign Up → Onboard → Use Feature → Upgrade to Paid → Enter Payment_. Write down each step and which part of your system enables it (e.g. signup form, onboarding emails, checkout page, Stripe API). These are your revenue-critical moments; any hiccup here directly costs you money.
- **Link tech to each revenue step:** For every step identified, list the supporting systems or services. If your checkout page is crucial, note the payment gateway (e.g. Stripe) and database that it depends on. If user onboarding affects conversion, note the email service or frontend code for that flow. The goal is to map **which tech components are tied to making or saving money**. This shows you where to focus reliability and performance efforts.
- **Spot the money pits:** Identify parts of your tech that cost a lot but aren't obviously driving revenue. Maybe you're running an oversized database instance that's mostly idle, or paying for a premium SaaS tool your team barely uses. Also list features that took a lot of effort to build but users don't really use (low adoption features can be a form of "cost" too). These are your _cost centres_. You might decide to downgrade, refactor, or eliminate these to improve margins.
- **Find hidden growth levers:** Look for one or two opportunities in your product that, if optimized, could significantly boost revenue or user growth. Perhaps a large number of users sign up but never make it to activation - improving that step could increase conversion. Or you have a referral feature that isn't highlighted - promoting it could drive new signups. Identify at least one such lever where a small tech or product tweak might yield a big uptick in revenue or engagement.
- **Include a "revenue protector":** Think about trust, security, and reliability features that indirectly protect revenue. For instance, if you handle sensitive data, a privacy or security feature (like encryption or uptime redundancy) keeps customer trust - losing that trust would hurt revenue. Make sure your map includes at least one item that, while not a new sale, prevents revenue loss (e.g. fraud detection, failover systems, regular security audits). These are often under-appreciated but critical.
- **Run "what-if" scenarios:** For each major feature or system in your revenue map, ask "What if we turned this off for a day?" If removing a feature doesn't meaningfully drop revenue or engagement, perhaps it's not as critical as you thought (and might be a cost centre). If shutting something down would be catastrophic, ensure you have safeguards around it. This exercise forces you to prioritize the truly important parts of your product.
- **Categorize and act:** Tag everything in your list as either a **revenue generator** (directly brings in money, like core features or conversion steps), a **revenue protector** (keeps revenue safe, like security/stability measures), or a **cost centre** (consumes resources without directly contributing to revenue). Once tagged, step back and review: Are you investing enough in the generators and protectors? Can you reduce or optimize the cost centres? Use these tags to guide where you spend your development time and budget in the coming weeks.

### 💭 Questions to Ask

- **Where do users drop out before paying?** - Look at your user funnel. Are lots of users signing up but not converting to paid? Pinpoint the drop-off and ask what might fix that (speed, clarity, incentives?).
- **What feature could increase revenue _this month_ if improved?** - Identify a part of the product that, with a quick optimization (better UX, faster load, clearer call-to-action), could yield a measurable bump in conversion or upsells.
- **If our payment system failed, how would that hit us?** - Imagine Stripe or your payment processor went down for 24 hours. Do you know how much revenue you'd lose or how many customers would churn? This underscores the importance of payment reliability (and maybe having retry logic or a backup plan).
- **Are we paying for tech that customers wouldn't miss?** - Challenge every expense. If you turned off a non-critical service or tool, would anyone (internally or externally) notice? If the answer is no, that cost may not be justified.
- **What would an investor question about our revenue model?** - If you pitched an investor, what part of "how you make money" would they be most skeptical of? For example, reliance on a single customer or a very manual process in the funnel. Use that perspective to strengthen those weak points now.

### 🔍 Where to Look

- **Analytics & funnel metrics (e.g. Google Analytics, Mixpanel):** Inspect your sign-up and conversion funnels. Look at where users drop off - for instance, if many add to cart but don't complete checkout, that's a high-leverage point to investigate (maybe a bug or UX issue).
- **Payment gateway dashboards (Stripe, PayPal, etc.):** Review your revenue reports and failure rates. Check how many payments fail (and why), your churn rate on subscriptions, and if there are any patterns (e.g. higher failures on certain cards or regions). This can reveal technical issues to fix, like adding a retry mechanism for failed charges.
- **CRM or database usage stats:** Query your database or use your CRM to see which features customers use most and which hardly get touched. If a feature is rarely used but costs a lot to maintain (or uses expensive infrastructure), note that as a potential cut or rework. Conversely, if a feature is heavily used and tied to paid plans, ensure it's rock solid.
- **AWS/Cloud cost explorer:** Dive into your cloud billing details. Identify the top 3 costs - are they aligned with your busiest features? For example, if you're spending a lot on a server that supports an add-on feature few use, that's a flag. Cloud cost tools can show idle resources or over-provisioned systems that you can scale down to save money.
- **Customer feedback & support tickets:** Scan support inquiries or user feedback for revenue-related issues. Complaints like "I tried to pay but it didn't work" or "The site was slow so I gave up" directly point to lost revenue. Also look for requests that could be opportunities ("Do you have Feature X? I'd pay for that!"). This qualitative data can guide you to tech improvements that have clear business value.

---

## Pillar 3: Delivery Review

| Aspect | Current | Desired | Done? | Notes |
| --- | --- | --- | --- | --- |
| Feature shipping frequency | _Weekly / Ad hoc_ | _Predictable cadence_ |  | _Currently 1-2 features per month, aim weekly_ |
| Testing before production | _Manual / Limited_ | _Staging / Feature flags_ |  | _Use staging environment & feature toggles_ |
| Firefighting vs proactive | _High urgent_ | _Low urgent, high planned_ |  | _60% urgent fixes, aim <20%</em> |

### 📋 Action Checklist

- Count how often code is shipped to production - daily, weekly, or "when we have time"?
- Identify all manual steps between "idea" and "live". Anything manual = future pain.
- Check if there's a **staging environment** - if not, make that your first fix.
- Ensure at least one **rollback path** (e.g. revert commit, feature flag off).
- Review test coverage or at least ask your devs how they validate changes.
- Add post-deploy notifications (Slack, email) for visibility.
- Review the ratio of firefighting vs proactive work - track one week of dev time to prove it.

### 📋 How to Do It

- **Gauge your release pace:** Determine how often you actually deploy new code to production. Is it daily, weekly, bi-weekly, or just whenever things accumulate? Look at your commit history or ask your dev team for an average. This gives you a baseline. If it's "not often" or erratic, set a goal (e.g. "ship at least one small improvement or fix every week") to create a more predictable cadence.
- **Map the delivery process:** Write down every step between having a new idea and seeing it live for users. Include things like coding, code review, testing (QA), approval steps, deployment, and verification. Any step that is manual or overly ad-hoc is a potential delay or failure point. For example, if deploying involves a developer running commands from their laptop, that's a risk. By mapping this out, you can spot which parts of your pipeline need automation or clearer process.
- **Set up a proper staging environment:** If you don't have a staging environment (a clone of production for testing), make this a priority to create. Being able to test in a production-like setting catches bugs _before_ they reach customers. Work with your dev to spin up a staging site or app - it could be as simple as a separate branch deployment (services like Vercel or Heroku make this easy) or a small clone of your infrastructure. This will immediately give you more confidence in each release.
- **Establish a rollback plan:** Ensure there is a quick way to undo or mitigate a bad deployment. Options include the ability to instantly revert to an older version of the code, using feature flags to turn off a new feature, or maintaining backups/snapshots of databases before releases. Document this plan. The next time a deployment causes a serious bug, you don't want to be scrambling; you should know "Alright, if it all goes wrong, we flip off Feature X or redeploy version Y and we're back to stable."
- **Improve testing and validation:** Take stock of how new code is verified. If currently a developer just tests things manually on their machine, introduce more rigor. This could mean adding some automated tests (even a few critical ones for login, signup, payments - the things that _must_ work), or at least a standard checklist for manual testing that every release must pass. Also consider peer code reviews if you're not doing them - a second pair of eyes often catches issues early.
- **Increase visibility of deployments:** Set up notifications (via Slack, email, etc.) to announce when code is deployed and what changes were included. This way, everyone on the team knows what's going out and can quickly connect the dots if a user reports a new bug ("Oh, we just changed the upload function, that might be why…"). It also helps create a culture of accountability and celebration around shipping. If you use a tool like GitHub, you can tie this into push or CI notifications easily.
- **Track firefighting vs planned work:** For one week (or sprint), log how much time the team spends on unplanned "firefighting" tasks (bug fixes, urgent issues) versus planned project work. You can do this by having a daily standup where each dev says if they worked on any surprise issues, or by tagging tickets as "bug" vs "feature" in your tracker. After the week, calculate the rough ratio. If you discover, say, 50% of time is going to emergencies, that's a sign your tech debt or quality issues are forcing too much reactive work. Over the 90 days, aim to drive that down (e.g. to 20% or less), by fixing root causes of frequent bugs or automating repetitive fixes.

### 💭 Questions to Ask

- **Could we deploy on a Friday afternoon?** - This question probes confidence. If deploying right before the weekend sounds terrifying, you likely lack safety nets (tests, monitoring, rollback). Why are you afraid, and which parts of the process need improvement so that deployments aren't scary?
- **What's our single biggest bottleneck to shipping faster?** - Identify the step in your development pipeline that consistently slows things down. Is it waiting for manual QA? Code review backlogs? Deployment pain? Once you name it, you can target it for improvement (e.g. invest in automated tests to ease the QA bottleneck).
- **How do we know if a release breaks something?** - Do you have any alarms or dashboards that would catch a major issue post-deploy (in case users don't report it immediately)? If the answer is essentially "we wouldn't know until users email us," that's a problem - it suggests you need better monitoring or testing in place.
- **Are we fixing the same bugs repeatedly?** - Think about whether you've encountered the _"didn't we patch this before?"_ situation. Recurring bugs or firefights indicate underlying issues not fully resolved. Those areas likely need a strategic fix (maybe a rewrite or more tests) rather than band-aids.
- **What keeps the team from planning ahead?** - If you're always in reactive mode, ask why. Are outages or urgent customer issues eating all your time? Or are priorities shifting too often? Understanding this will help you either stabilize the tech or adjust workflow so you can be proactive, not just reactive.

### 🔍 Where to Look

- **Git repository (commit history):** Check how frequently code is being committed and merged. Do you see daily commits? Weekly big drops? This can hint at whether work is happening continuously or in big risky batches. Also look at release tags or deployment notes to see actual production deploy frequency.
- **CI/CD pipeline:** If you have continuous integration set up (Jenkins, GitHub Actions, etc.), review the build logs and test results. Frequent failing tests or pipelines can indicate unstable code or poor test coverage. If you don't have CI, that's a sign to implement at least a basic one (even just running the app's build process and some linters).
- **Issue tracker or Kanban board:** Look at your JIRA, Trello, or whatever you use for tasks. Count how many bug fix cards vs. feature cards were done in the last few weeks. Also, check how many tasks get carried over multiple sprints due to firefighting interruptions. This will quantify the proactive vs reactive work ratio.
- **Error monitoring and logs:** Use tools like Sentry, Rollbar, or even your server logs to see how many errors are happening in production. If there's a lot of noise (many errors, even if minor), it means things are slipping through testing. Also, if you set up alerts (e.g. when the error rate jumps or when response time slows), check how often those alerts fire - that's a measure of system stability after deployments.
- **Staging site or testing workflow:** If a staging environment exists, observe how it's being used. Are new features actually tested there, or is it neglected? If it doesn't exist, look at whatever process substitutes for it (maybe a "dev" environment or just local testing) and note its shortcomings. Improving this will directly improve delivery confidence.
- **Team communications:** Scroll through Slack or team emails for the past incidents. Do you see a pattern like "Hotfix deployed" or "Production issue - investigating now" happening often? That record will highlight common trouble spots (e.g. always the database, or always after deploying the mobile app) that you should focus on stabilizing in the 90-day plan.

---

## Pillar 4: Security

| Component | Risk if fails | Access Control | Backup Status | Monitoring | Done? |
| --- | --- | --- | --- | --- | --- |
| _AWS / Cloud_ | _Service downtime_ | _MFA enabled_ | _Daily backup tested_ | _Alerts active_ |  |
| _Payment Gateway_ | _Revenue loss / fraud_ | _Limited admin_ | _N/A_ | _Transaction logs_ |  |

### 📋 Action Checklist

- Enable **multi-factor authentication (MFA)** for all production systems, cloud accounts, and admin tools.
- Confirm **backups actually restore** - not just that they run.
- Run an automated **dependency vulnerability scan** (npm audit, GitHub Dependabot, Snyk).
- Check for **secrets in code** (API keys, passwords). If found, rotate them immediately.
- Review access levels: "who can delete production data?" should have a very short list.
- Add a **basic monitoring and alerting setup** for uptime, errors, and cost spikes.
- Define your **incident response process** - who's on call, how to communicate, when to escalate.

### 📋 How to Do It

- **Mandate multi-factor authentication:** Enable MFA on every account that has access to production systems or sensitive data. This includes your cloud provider console (AWS/Azure/GCP), GitHub or version control, third-party services, admin dashboards - basically anywhere a login could alter your product or data. It might take a few minutes per account to set up (using an app like Google Authenticator or SMS codes), but it dramatically lowers the risk of an account takeover. Make sure your team is on board and understands how crucial this is.
- **Verify backups (and test restores):** Don't just assume backups are happening - double-check. Identify all critical data (database contents, user-uploaded files, configuration data) and confirm they are being backed up on a schedule. Next, perform a test restore of a recent backup. This could mean importing a database dump into a test database, or retrieving files from backup storage and loading them somewhere. Many startups learn too late that their backups were incomplete or corrupted. Prove now that you can recover your data quickly if the worst happens.
- **Run automated security scans:** Leverage tools to catch vulnerabilities in your code and dependencies. For example, if your project is on GitHub, enable **Dependabot alerts** to notify you of known vulnerabilities in libraries you use. Run npm audit (for Node.js projects) or equivalent commands for your stack to see if you're using any packages with security holes. Also, scan your repository for secrets - GitHub has built-in secret scanning, and there are tools like TruffleHog for this. If any API keys or passwords are found in code, assume they're compromised: remove them from code and roll those credentials (generate new keys/passwords).
- **Lock down permissions:** Audit who has access to what in your systems. Follow the rule of least privilege: each team member or service should have the minimum access necessary. For cloud infrastructure, check IAM roles and narrow them down (for instance, no one should use the all-powerful root account for daily work). For databases, ensure only the app and perhaps one admin account can modify production data. Especially ask "Who can delete things permanently or shut down our production systems?" That list must be tiny and well-known. Remove any old user accounts (ex-employees, contractors who no longer need access).
- **Set up monitoring & alerts:** Establish basic monitoring for security-relevant events. For example, turn on login alerts for important accounts (so you get an email if an unrecognized device signs in to the AWS console). Use any built-in cloud alerts: AWS CloudWatch can alert on unusual spikes in CPU (could indicate an attack or runaway process) and CloudTrail can alert on certain sensitive actions (like someone changing security groups or downloading user data). Also monitor your application for common security signals - e.g., many failed logins could mean a brute-force attempt, so have your app or an auth service watch for that. The key is to get notified automatically about anything that looks like a breach or critical failure, so you're not reliant on manual checks.
- **Plan your incident response:** Create a simple document outlining what to do in a security incident or major outage. Include: who coordinates the response (assign a lead), how to contact team members outside of email (in case email is compromised - consider having phone numbers or an alternate channel), and a checklist of immediate steps (e.g., remove public access, post a status update, etc.). Even if you're a tiny team, decide now "who does what" if things go wrong. Also decide on how to communicate with customers - drafting a generic "We're investigating an issue" message in advance can save stress. Having this plan means that in a crisis, you won't waste precious time figuring out process; you'll just execute the steps.

### 💭 Questions to Ask

- **Are all our admin accounts MFA-protected?** - If there's any account (cloud provider, code repo, SaaS tool) without two-factor authentication, that's a door an attacker can more easily open. Find it and fix it.
- **When did we last test our backups?** - It's not enough to _have_ backups. Ask if you've tried restoring one end-to-end in the last few months. If the answer is "never," schedule a fire drill to do it.
- **What sensitive data do we hold, and how is it secured?** - Make a list of data that would be disastrous if leaked (user passwords, personal info, secret keys). Are they encrypted in storage and transit? Do we absolutely need to store all of it? This question can reveal gaps like an user database without encryption or logs that accidentally record passwords.
- **Who could wreak havoc with a single mistake?** - Identify if any one person (or account) has the power to, say, drop the production database or charge \$50k to your AWS account or publish to your app store account. If so, consider safeguards (permissions, required reviews, or at least double-confirmation processes for dangerous actions).
- **How quickly would we know we were hacked?** - If an attacker was inside your system, poking around or siphoning data, would we catch it? Think about what monitors are in place - if the answer is effectively none, consider setting up some intrusion detection or at least audit logs that you review periodically.

### 🔍 Where to Look

- **Cloud IAM and security center:** In AWS, check the IAM dashboard for users without MFA, unused credentials, or overly broad policies. AWS Trusted Advisor and Security Hub can highlight glaring issues (like open ports or old access keys). Similarly, GCP's Security Command Center or Azure Security Center will flag common security misconfigurations.
- **Backup logs and storage:** Verify your backups by looking at wherever they're stored (S3 buckets, database backup files, etc.). Check timestamps and file sizes - are they recent? Do they seem like complete data? Look at logs from backup jobs for any errors. If you use a managed database, use its console to see when the last successful snapshot occurred.
- **GitHub Security tab (or equivalent):** For each repo, review reported vulnerabilities under "Dependabot alerts" if enabled. Also check the code scanning results if you have something like CodeQL set up. These automated checks often surface things developers might miss.
- **Codebase and config files:** Search your code for any hardcoded credentials (API keys, secrets). Common places to slip are config files, old scripts, or test code. Make sure all secrets are instead stored in environment variables or a secure vault. If you find any, rotate those secrets (generate new ones) because they may have been exposed.
- **Audit logs and alerts:** Look at your product's admin logs or your cloud's audit logs (e.g., AWS CloudTrail) for unusual activities - like repeated failed logins, or someone changing security settings. Make sure you have alerts set on key events: e.g., if a new user is created in your AWS account, you get notified. If you use an error tracking tool, see if it has flagged any security-relevant errors (like "database connection failed" could hint at a config issue or attack). Essentially, comb the places that record activity in your system to ensure you're watching the right things and nothing odd is currently happening.

---

## Pillar 5: Tech Strategy

| Timeframe | Focus | 3 Key Items | Notes | Done? |
| --- | --- | --- | --- | --- |
| Short-term (0-30d) | Leverage / Risk Reduction | _1. Backup automation; 2. Fix critical bugs; 3. Improve feature flag setup_ | Quick wins that reduce risk or speed up delivery |  |
| Medium-term (30-60d) | Scale & Stability | _1. Staging environment; 2. CI/CD pipeline; 3. Logging & alerting_ | Improvements for investor confidence & growth |  |
| Long-term (60-90d+) | Visionary Play | _1. Modular architecture refactor_ | Big-picture bet to position the startup |  |

### 📋 Action Checklist

- Write down your **3 short-term leverage items** (things you can do in 30 days that reduce risk or speed delivery).
- Choose **3 medium-term bets** (next 60 days) that improve scalability, reliability, or investor confidence.
- Pick **1 long-term play** (next 90+ days) that positions you for growth (e.g. architecture shift, automation, data platform).
- Define how each strategic item connects to your business outcome (speed, cost, growth, resilience).
- Add owners and deadlines for each item.
- Revisit these every 30 days to confirm they still make sense.

### 📋 How to Do It

- **Identify short-term quick wins (0-30 days):** Look for up to three high-impact improvements you can make in the next month. These should be "low-hanging fruit" that either remove a major risk or significantly speed up development. Good examples: automate something manual (e.g. daily backup scripts instead of remembering to do it), tackle a couple of the most critical bug fixes that are causing customer pain, or refactor a tiny module that's causing lots of errors. The key is they are achievable quickly and give a lot of bang for the buck.
- **Plan medium-term upgrades (30-60 days):** Choose about three initiatives to undertake in the next one to two months that will improve your system's scalability and stability. These might require more effort or coordination, but will pay off by making your tech stack more robust (and impressing any technical due diligence). Examples: implement a continuous integration/continuous deployment (CI/CD) pipeline to streamline releases, set up comprehensive logging and monitoring, improve your testing framework, or rework part of the architecture to handle growth (maybe moving from a single server to a load-balanced setup).
- **Select a long-term strategic play (60-90 days+):** Pick one big-picture technology project that aligns with your vision for the product's future. This is something that might take a few months or more, and likely goes beyond the 90-day window, but you want to lay the groundwork now. It could be an architectural overhaul (e.g. migrating to microservices, or switching to a more scalable database), a major new capability (like starting to build a machine learning recommendation engine), or anything that would be a game-changer for your startup in the long run. It's your "bet" on the future - something that could set you apart or solve a major future scaling pain.
- **Connect each item to business goals:** For every item on your short, medium, and long-term lists, explicitly write down why it matters for the business. Does it reduce costs? Enable faster feature rollouts (thus capturing market faster)? Remove a risk that could otherwise tank an investment deal? Increase customer satisfaction (happier users = retention = revenue)? By articulating this, you ensure you're not doing tech for tech's sake. It also arms you with a clear narrative for investors and stakeholders: _"We implemented X which cut our load times by half, improving conversion,"_ etc.
- **Assign owners and deadlines:** Take each initiative and assign a responsible person (or yourself) and a target completion date. Even if dates are rough, it turns nebulous ideas into concrete goals. If you're a solo founder, this might feel odd - but even then, try to commit to a timeline (e.g. "Feature flag system automation - me - by Feb 15"). If you have a team, get their buy-in on these deadlines. This creates accountability. Treat these strategic items like you would important features - track progress, check in on blockers, and celebrate completions.
- **Review and adjust monthly:** Tech strategy isn't set in stone. Schedule a brief review every 30 days to evaluate progress on these items and whether they're still the right priorities. Maybe a new opportunity arose or a risk manifested that changes your plan - that's fine. The point is to keep the strategy alive and responsive. At week 4, 8, and 12 of your 90-day plan, revisit your lists: mark done items complete, update statuses, and possibly add new items or re-prioritize as you learn more. This ensures you remain agile and focused on what matters most over the quarter.

### 💭 Questions to Ask

- **What ugly tech issues are lurking on our horizon?** - Think a few months out: are there scaling bottlenecks or maintenance nightmares you're aware of but haven't addressed? (E.g., "We're fine with 100 users, but at 1,000 our current server would crash.") Identifying these now means you can plan to fix them before they bite.
- **If we got 10× more users overnight, what would break first?** - This question helps prioritize medium-term scalability tasks. It might reveal that your database would choke, or customer support can't handle volume (so maybe build better self-service tools). Use the answer to guide your 60-day projects.
- **What would impress a CTO investor?** - Imagine a seasoned CTO examined your tech. What would they frown at (e.g. lack of tests, no devops pipeline, outdated tech stack)? Those are areas to improve in your strategy. Also, what would make them nod approvingly? Aim to have at least one initiative that is a "wow" factor (for example, "We implemented infrastructure-as-code for one-click environment setup").
- **Are we balancing short-term fixes and long-term vision?** - It's easy to get caught in either firefighting mode or pie-in-the-sky projects. Ask if your plan has a healthy mix. If all your items are quick fixes, you might be ignoring big strategic moves (and vice versa). Adjust if needed so you're shoring up today _and_ building for tomorrow.
- **Do we have the right people for what's next?** - Look at your roadmap and ask if there's any skill set or knowledge gap. For instance, if one long-term goal is to leverage AI, do you have anyone who's dabbled in ML? If not, your strategy might include "consult with an expert" or plan a hire. This is less about coding and more about team readiness, but it's crucial for execution.
- **What's one thing our competitors are doing technologically that we aren't?** - Maybe others have mobile apps, or have automated the onboarding process, or boast about their uptime. Should we be doing that too? This can illuminate a possible strategic item - not to copy for its own sake, but to catch up where you're behind or differentiate where you can leap ahead.

### 🔍 Where to Look

- **Product & business roadmap:** Align your tech strategy with your product plans. If the business side expects to launch in a new market or add a major feature in six months, the tech strategy should include the foundational work for that (e.g. internationalization support, API refactoring, compliance prep). Examine your product roadmap and ensure your tech initiatives pave the road for it.
- **Engineering backlog & wishlists:** Developers often have a "wish list" of improvements or nagging issues they want to fix. Review your backlog or even ask your team, "What's one thing you wish we could take time to improve?" You might discover strategic items that improve morale and efficiency (like upgrading a framework or paying off a particular tech debt) that should be in your plan.
- **Past incidents and outages:** Look at any history of downtime, performance issues, or security scares. Those often point to strategic investments needed. For example, if you had an outage because a single server got overwhelmed, a strategic item might be implementing auto-scaling or better load balancing. If a bug in one module caused a lot of trouble, maybe a re-architecture of that module is a long-term play.
- **Advisor or investor feedback:** If you have access to advisors or previous investor comments, revisit what concerns or suggestions they've raised about your tech. They might have pointed out, for instance, that you will need SOC2 compliance to sell to enterprise - that could translate into a strategic item around security improvements or documentation. Or maybe they worried about your lack of mobile presence - strategic item: explore a mobile app or PWA. Use external perspectives to refine your tech priorities.
- **Industry trends:** Keep an eye on broader technology trends in your industry space. If all your competitors are moving to a certain technology (say, adopting AI features, or migrating to a new programming language that offers productivity), evaluate if it's something you should plan for long-term. Resources like tech blogs, competitor press releases, and industry reports can spark ideas for strategic tech opportunities that align with where the market is going.

---

## Weekly Breakdown Example

| Week | Pillar | Focus / Checklist | Done? |
| --- | --- | --- | --- |
| 1-2 | System Intelligence | _Map dependencies, identify bottlenecks, sketch risk map_ |  |
| 3-4 | Revenue Map | _Map revenue/cost, find leverage points, highlight risks_ |  |
| 5-6 | Delivery Review | _Audit CI/CD, rollback, testing, metrics tracking_ |  |
| 7-8 | Security | _MFA, backups, dependency scan, monitoring review_ |  |
| 9-10 | Tech Strategy | _Short- and medium-term bets defined & prioritised_ |  |
| 11-12 | Implementation | _Execute high-leverage changes, reduce firefighting_ |  |
| 13  | Final Review | _Tech Health Snapshot, ready-for-investors review, long-term strategy_ |  |

## Scoring / Output Template

| Pillar | Week 0 Score | Week 13 Score | Change | Notes | Done? |
| --- | --- | --- | --- | --- | --- |
| System Intelligence | _2_ | _4_ | _+2_ | _Critical bottlenecks resolved_ |  |
| Revenue Map | _3_ | _5_ | _+2_ | _Leverage points optimised_ |  |
| Delivery Review | _2_ | _4_ | _+2_ | _CI/CD & rollback improved_ |  |
| Security | _3_ | _5_ | _+2_ | _MFA & monitoring enforced_ |  |
| Tech Strategy | _1_ | _4_ | _+3_ | _Short & medium-term bets executed_ |  |

## Want help running through it?

If you'd like **20 minutes of free guidance**, I'll walk you through your Tech Health Snapshot and help prioritise the next moves for stability, revenue, and investor readiness.

👉 [Book a free 20-minute review call](/book-call)

<div class="cl-footer-cta">
<p><strong>Download:</strong> <a href="https://stone-editorial-03b.notion.site/90-day-tech-review-2a8929e05e538063891bedb49dd574ba" class="download-cta">Get the Notion template →</a></p>
<p class="cl-author"><strong>Author:</strong> Josh - Fractional CTO helping early-stage founders derisk tech, stabilise MVPs, and scale with confidence.</p>
</div>