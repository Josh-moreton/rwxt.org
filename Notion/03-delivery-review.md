# 🚀 Pillar 3: Delivery Review

## Overview

Audit your entire software delivery pipeline. Move from reactive firefighting to proactive building. Ship faster, safer, and with confidence.

**Timeline:** Weeks 5-6 | **Focus:** Delivery Speed & Stability

---

## 📋 Action Checklist

*[Insert Linked Database: Master Task Database, Filtered by Pillar = "Delivery Review"]*

---

## Delivery Assessment Table

| Aspect | Current | Desired | Done? | Notes |
|--------|---------|---------|-------|-------|
| Feature shipping frequency | _Weekly / Ad hoc_ | _Predictable cadence_ | ☐ | _Currently 1-2 features per month, aim weekly_ |
| Testing before production | _Manual / Limited_ | _Staging / Feature flags_ | ☐ | _Use staging environment & feature toggles_ |
| Firefighting vs proactive | _High urgent_ | _Low urgent, high planned_ | ☐ | _60% urgent fixes, aim <20%_ |
| Code review process | | | ☐ | |
| Deployment process | | | ☐ | |
| Rollback capability | | | ☐ | |
| Error monitoring | | | ☐ | |
| Post-deploy verification | | | ☐ | |

---

## 📋 How to Do It

### 1. Gauge your release pace
Determine how often you actually deploy new code to production. Is it daily, weekly, bi-weekly, or just whenever things accumulate? Look at your commit history or ask your dev team for an average. This gives you a baseline. If it's "not often" or erratic, set a goal (e.g. "ship at least one small improvement or fix every week") to create a more predictable cadence.

**Action Items:**
- Review git commit history for last 3 months
- Count production deployments per week
- Identify longest gaps between deploys
- Calculate average time from code complete to production
- Set target deployment frequency

---

### 2. Map the delivery process
Write down every step between having a new idea and seeing it live for users. Include things like coding, code review, testing (QA), approval steps, deployment, and verification. Any step that is manual or overly ad-hoc is a potential delay or failure point. For example, if deploying involves a developer running commands from their laptop, that's a risk. By mapping this out, you can spot which parts of your pipeline need automation or clearer process.

**Action Items:**
- Document every step in your release process
- Identify manual steps that could be automated
- Note who is required for each step (bus factors)
- Measure time spent at each stage
- Highlight bottlenecks and pain points

---

### 3. Set up a proper staging environment
If you don't have a staging environment (a clone of production for testing), make this a priority to create. Being able to test in a production-like setting catches bugs _before_ they reach customers. Work with your dev to spin up a staging site or app - it could be as simple as a separate branch deployment (services like Vercel or Heroku make this easy) or a small clone of your infrastructure. This will immediately give you more confidence in each release.

**Action Items:**
- Audit current testing environments
- Create staging environment if missing
- Document staging environment setup
- Establish testing checklist for staging
- Make staging environment easily accessible to team

---

### 4. Establish a rollback plan
Ensure there is a quick way to undo or mitigate a bad deployment. Options include the ability to instantly revert to an older version of the code, using feature flags to turn off a new feature, or maintaining backups/snapshots of databases before releases. Document this plan. The next time a deployment causes a serious bug, you don't want to be scrambling; you should know "Alright, if it all goes wrong, we flip off Feature X or redeploy version Y and we're back to stable."

**Action Items:**
- Document rollback procedure (step-by-step)
- Test rollback process on staging
- Implement feature flags for major features
- Set up database backup before deployments
- Assign rollback responsibility (who can execute)

---

### 5. Improve testing and validation
Take stock of how new code is verified. If currently a developer just tests things manually on their machine, introduce more rigor. This could mean adding some automated tests (even a few critical ones for login, signup, payments - the things that _must_ work), or at least a standard checklist for manual testing that every release must pass. Also consider peer code reviews if you're not doing them - a second pair of eyes often catches issues early.

**Action Items:**
- Count existing automated tests (unit, integration, e2e)
- Identify critical paths that need test coverage
- Create manual testing checklist
- Implement code review requirement
- Set up automated test running in CI/CD

---

### 6. Increase visibility of deployments
Set up notifications (via Slack, email, etc.) to announce when code is deployed and what changes were included. This way, everyone on the team knows what's going out and can quickly connect the dots if a user reports a new bug ("Oh, we just changed the upload function, that might be why…"). It also helps create a culture of accountability and celebration around shipping. If you use a tool like GitHub, you can tie this into push or CI notifications easily.

**Action Items:**
- Set up deployment notifications in Slack/email
- Include changelog in each notification
- Create deployment dashboard or log
- Tag deployments with version numbers
- Celebrate successful releases

---

### 7. Track firefighting vs planned work
For one week (or sprint), log how much time the team spends on unplanned "firefighting" tasks (bug fixes, urgent issues) versus planned project work. You can do this by having a daily standup where each dev says if they worked on any surprise issues, or by tagging tickets as "bug" vs "feature" in your tracker. After the week, calculate the rough ratio. If you discover, say, 50% of time is going to emergencies, that's a sign your tech debt or quality issues are forcing too much reactive work. Over the 90 days, aim to drive that down (e.g. to 20% or less), by fixing root causes of frequent bugs or automating repetitive fixes.

**Action Items:**
- Track time spent on planned vs unplanned work for 1 week
- Tag all tickets as "Bug", "Feature", "Tech Debt", "Urgent"
- Calculate percentage in each category
- Identify top 3 sources of firefighting
- Create plan to reduce urgent interruptions

---

## 💭 Questions to Ask

**Could we deploy on a Friday afternoon?**
This question probes confidence. If deploying right before the weekend sounds terrifying, you likely lack safety nets (tests, monitoring, rollback). Why are you afraid, and which parts of the process need improvement so that deployments aren't scary?

**What's our single biggest bottleneck to shipping faster?**
Identify the step in your development pipeline that consistently slows things down. Is it waiting for manual QA? Code review backlogs? Deployment pain? Once you name it, you can target it for improvement (e.g. invest in automated tests to ease the QA bottleneck).

**How do we know if a release breaks something?**
Do you have any alarms or dashboards that would catch a major issue post-deploy (in case users don't report it immediately)? If the answer is essentially "we wouldn't know until users email us," that's a problem - it suggests you need better monitoring or testing in place.

**Are we fixing the same bugs repeatedly?**
Think about whether you've encountered the _"didn't we patch this before?"_ situation. Recurring bugs or firefights indicate underlying issues not fully resolved. Those areas likely need a strategic fix (maybe a rewrite or more tests) rather than band-aids.

**What keeps the team from planning ahead?**
If you're always in reactive mode, ask why. Are outages or urgent customer issues eating all your time? Or are priorities shifting too often? Understanding this will help you either stabilize the tech or adjust workflow so you can be proactive, not just reactive.

---

## 🔍 Where to Look

### Git repository (commit history)
Check how frequently code is being committed and merged. Do you see daily commits? Weekly big drops? This can hint at whether work is happening continuously or in big risky batches. Also look at release tags or deployment notes to see actual production deploy frequency.

### CI/CD pipeline
If you have continuous integration set up (Jenkins, GitHub Actions, etc.), review the build logs and test results. Frequent failing tests or pipelines can indicate unstable code or poor test coverage. If you don't have CI, that's a sign to implement at least a basic one (even just running the app's build process and some linters).

### Issue tracker or Kanban board
Look at your JIRA, Trello, or whatever you use for tasks. Count how many bug fix cards vs. feature cards were done in the last few weeks. Also, check how many tasks get carried over multiple sprints due to firefighting interruptions. This will quantify the proactive vs reactive work ratio.

### Error monitoring and logs
Use tools like Sentry, Rollbar, or even your server logs to see how many errors are happening in production. If there's a lot of noise (many errors, even if minor), it means things are slipping through testing. Also, if you set up alerts (e.g. when the error rate jumps or when response time slows), check how often those alerts fire - that's a measure of system stability after deployments.

### Staging site or testing workflow
If a staging environment exists, observe how it's being used. Are new features actually tested there, or is it neglected? If it doesn't exist, look at whatever process substitutes for it (maybe a "dev" environment or just local testing) and note its shortcomings. Improving this will directly improve delivery confidence.

### Team communications
Scroll through Slack or team emails for the past incidents. Do you see a pattern like "Hotfix deployed" or "Production issue - investigating now" happening often? That record will highlight common trouble spots (e.g. always the database, or always after deploying the mobile app) that you should focus on stabilizing in the 90-day plan.

---

## ✅ Week 5-6 Success Criteria

By the end of Week 6, you should have:
- [ ] Documented current deployment frequency and target frequency
- [ ] Complete delivery pipeline map with all manual steps identified
- [ ] Staging environment operational (or planned with timeline)
- [ ] Rollback plan documented and tested
- [ ] Baseline measurement of firefighting vs planned work ratio
- [ ] Top 3 delivery bottlenecks identified with improvement plans
- [ ] At least one automation implemented

---

## 📊 Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your delivery process maturity_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**
- 1 = Chaotic deployments, mostly firefighting, no tests
- 2 = Occasional deploys, manual processes, frequent issues
- 3 = Regular deploys, some automation, staging exists
- 4 = Predictable cadence, good CI/CD, low firefighting
- 5 = Daily deploys, full automation, confident releases, <10% firefighting
