# Pillar 3: Delivery Review

## Overview

Work out why shipping code feels like defusing a bomb. Audit your deployment process, count how much time you waste firefighting, and fix the obvious bottlenecks. Takes two weeks.

---

## Action Checklist

_[Insert Linked Database: Master Task Database, Filtered by Pillar = "Delivery Review"]_

---

## Delivery Assessment Table

| Aspect                     | Current            | Desired                    | Done? | Notes                                          |
| -------------------------- | ------------------ | -------------------------- | ----- | ---------------------------------------------- |
| Feature shipping frequency | _Weekly / Ad hoc_  | _Predictable cadence_      | ☐     | _Currently 1-2 features per month, aim weekly_ |
| Testing before production  | _Manual / Limited_ | _Staging / Feature flags_  | ☐     | _Use staging environment & feature toggles_    |
| Firefighting vs proactive  | _High urgent_      | _Low urgent, high planned_ | ☐     | _60% urgent fixes, aim <20%_                   |
| Code review process        |                    |                            | ☐     |                                                |
| Deployment process         |                    |                            | ☐     |                                                |
| Rollback capability        |                    |                            | ☐     |                                                |
| Error monitoring           |                    |                            | ☐     |                                                |
| Post-deploy verification   |                    |                            | ☐     |                                                |

---

## How to Do It

### 1. Count how often you ship

Check how often you actually ship code. Look at your git history. If you're deploying less than weekly, something's broken in your process. Erratic shipping means unstable releases—fix the cadence first. Daily deployments should feel boring, not terrifying.

**What to do:** Review git history for last 3 months. Count deploys per week. Find the longest gaps. Calculate average time from "code done" to "code live." If it's more than a few days, you've got a bottleneck. Set a target: weekly minimum.

---

### 2. Map every manual step

Write down every step from "idea" to "live." Code → review → test → deploy → verify. If any step involves "run this command from my laptop" or "remember to check," you've found your bottleneck. Manual steps break. Automate them.

**What to do:** Document your release process. List manual steps. Note who's required for each (single points of failure). Measure how long each stage takes. The bits that take hours or need specific people? Those are your priorities.

---

### 3. Build a staging environment

If you don't have somewhere to test before production, build one this week. Vercel and Heroku make this trivially easy. Testing in production is how you discover bugs when customers are screaming—not ideal. Staging catches disasters before they reach users.

**What to do:** Audit current testing setups. If you don't have staging, create it now. Document how to use it. Make it easy for the team to access. Create a testing checklist. Actually use it before every deploy.

---

### 4. Document the rollback plan

Write down how to undo a bad deploy in under 5 minutes. Feature flags to disable features. Git revert to previous version. Database snapshot to restore. Write it down. Test it. Don't wait until 3am when everything's on fire.

**What to do:** Document rollback steps. Test them on staging (actually run through it). Add feature flags to risky new features. Set up pre-deploy database backups. Assign who can execute rollbacks. Make sure it's not just one person.

---

### 5. Add proper testing

Ask your devs how they test changes. If the answer is "I click around a bit," you need proper tests. Start with the critical paths: login, signup, payment. Even basic automated tests catch 80% of disasters before users see them.

**What to do:** Count existing tests. Find the gaps in critical paths. Create a manual testing checklist at minimum. Implement code review if you're not doing it. Set up tests to run automatically in CI/CD. Don't ship code that hasn't been reviewed.

---

### 6. Make deployments visible

Set up a Slack notification for every deploy. Include what changed and who shipped it. When a bug appears, you'll immediately know which deploy caused it instead of guessing. Bonus: team accountability.

**What to do:** Configure deployment notifications in Slack. Include a changelog. Log deployments somewhere visible. Tag with version numbers. When deploys go well, acknowledge it. When they go badly, you'll know exactly when things broke.

---

### 7. Measure the firefighting

For one week, log how much dev time goes to unplanned emergencies vs planned work. Tag tickets as "bug" or "feature." If more than 30% is firefighting, your technical debt is killing productivity. Fix the root causes, not the symptoms.

**What to do:** Track one week of work. Categorise each ticket. Calculate the ratio. If it's over 30% firefighting, you're in trouble. Identify the repeat offenders—the bugs that keep coming back. Fix those properly instead of patching them.

---

### 5. Improve testing and validation

How are you verifying new code right now? If it's "dev tests it on their laptop and we hope for the best," that's not good enough. Add some automated tests - even just a handful covering the critical stuff like login, signup, and payments. The things that absolutely cannot break. Or at minimum, create a proper checklist that has to be ticked before anything ships. And for God's sake, implement code reviews if you're not already doing them. A second pair of eyes catches half the stupid mistakes.

Count your current automated tests. If the answer is "none" or "not sure," that's embarrassing. Identify the critical user paths that need coverage. Write a manual testing checklist for everything else. Make code review mandatory - no solo cowboy commits to production. Get tests running automatically in your CI/CD pipeline.

---

### 6. Increase visibility of deployments

Set up notifications - Slack, email, carrier pigeon - to announce when code goes live and what changed. When a user reports a bug five minutes after deployment, you'll immediately know "oh right, we just touched that bit." It also creates accountability: everyone sees what shipped, who shipped it, and whether it's working. GitHub Actions makes this trivial to wire up.

Configure deployment notifications in your team chat. Include a proper changelog in each announcement, not just "deployed stuff." Create a deployment log or dashboard where you can see what went out and when. Tag everything with version numbers. When a release goes well, acknowledge it - shipping should feel like an achievement, not a nerve-wracking gamble.

---

### 7. Track firefighting vs planned work

For one week, track how much time goes to firefighting versus actual planned work. Tag every ticket as "Bug," "Feature," "Tech Debt," or "Urgent" - be honest about it. At the end of the week, do the maths. If 50% of your time is spent on emergencies, you've got a serious problem with tech debt or quality. That's half your capacity pissed away on reactive nonsense.

Log a full week of work, categorising everything. Calculate the percentages. If firefighting is eating more than 20% of your time, you need to fix the underlying issues causing all these fires. Identify the top three sources of chaos - maybe it's a dodgy database query, maybe it's lack of proper error handling, maybe it's technical debt from three years ago finally catching up. Make a plan to eliminate them.

---

## Questions to Ask

**Could we deploy on a Friday afternoon?**
If the answer is "absolutely not" or triggers visible panic, you've identified your problem. Friday deployments should be boring, not terrifying. The fear comes from missing safety nets - no tests, no monitoring, no rollback plan. Fix those, and Fridays stop being deployment danger zone.

**What's our single biggest bottleneck to shipping faster?**
There's always one step that murders your velocity. Manual QA holding everything up? Code review backlog? Deployment process that requires blood sacrifice? Name it, then kill it. If QA is the problem, automate the tests. If code review is backed up, fix your team process or hire another senior dev.

**How do we know if a release breaks something?**
If your honest answer is "we wait for users to complain," that's embarrassing. You need monitoring and alerts that scream at you the moment something's wrong. Dashboards, error tracking, health checks - basic stuff that tells you there's a problem before your customers do.

**Are we fixing the same bugs repeatedly?**
If you're seeing déjà vu with bug reports, you're slapping band-aids on broken bones. Recurring issues mean you've never properly fixed the underlying cause. Stop patching and start rewriting or testing the hell out of those problem areas.

**What keeps the team from planning ahead?**
If you're perpetually in firefighting mode, figure out why. Is it constant outages? Customer emergencies? Or just chaotic priorities that change every five minutes? You need to either stabilise your tech or fix your planning process. Being reactive all the time is exhausting and expensive.

---

## Where to Look

### Git repository (commit history)

Check your commit frequency and patterns. Daily commits? Weekly mega-drops? The pattern tells you whether work is happening continuously or in terrifying big-bang releases. Look at release tags and deployment notes to see how often code actually hits production, not just how often it gets committed.

### CI/CD pipeline

If you've got CI set up (Jenkins, GitHub Actions, whatever), check the build logs and test results. Constantly failing pipelines signal unstable code or rubbish test coverage. If you don't have CI at all, that's your first problem - even a basic build-and-lint pipeline is better than nothing.

### Issue tracker or Kanban board

Dig through JIRA, Trello, or whatever system you're pretending to use. Count bug fixes versus features over the last few weeks. Check how many tasks get dragged across multiple sprints because firefighting keeps interrupting. This gives you the hard numbers on reactive versus proactive work.

### Error monitoring and logs

Sentry, Rollbar, server logs - check what's actually happening in production. Lots of errors, even minor ones, means your testing is letting things through. If you've set up alerts for error spikes or slow response times, look at how often they fire. Frequent alerts mean deployments are destabilising your system.

### Staging site or testing workflow

If you've got a staging environment, check whether anyone's actually using it or if it's just digital decoration. If staging doesn't exist, audit whatever substitute you're using - local testing, a "dev" environment - and note what's missing. Fixing your staging setup directly improves deployment confidence.

### Team communications

Scroll back through Slack or email. Count how many "hotfix deployed" or "production issue" messages appear. Frequent fire alarms indicate recurring problem areas - maybe it's always the database, maybe it's always the mobile app. Whatever keeps catching fire is where you need to focus your stabilisation efforts.

---

## Week 5-6 Success Criteria

By the end of Week 6, you should have:

- [ ] Documented current deployment frequency and target frequency
- [ ] Complete delivery pipeline map with all manual steps identified
- [ ] Staging environment operational (or planned with timeline)
- [ ] Rollback plan documented and tested
- [ ] Baseline measurement of firefighting vs planned work ratio
- [ ] Top 3 delivery bottlenecks identified with improvement plans
- [ ] At least one automation implemented

---

## Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your delivery process maturity_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**

- 1 = Chaotic deployments, mostly firefighting, no tests
- 2 = Occasional deploys, manual processes, frequent issues
- 3 = Regular deploys, some automation, staging exists
- 4 = Predictable cadence, good CI/CD, low firefighting
- 5 = Daily deploys, full automation, confident releases, <10% firefighting
