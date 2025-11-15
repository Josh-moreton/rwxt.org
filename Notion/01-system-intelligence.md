# Pillar 1: System Intelligence - Risk Map

## Overview

Figure out what keeps your product alive, what's about to kill it, and who actually knows how anything works. Takes two weeks if you're honest, six if you're not.

---

## Action Checklist

_[Insert Linked Database: Master Task Database, Filtered by Pillar = "System Intelligence"]_

---

## Risk Map Table

| Task                                                  | Done? | Notes                                                                    |
| ----------------------------------------------------- | ----- | ------------------------------------------------------------------------ |
| Map all core dependencies (hosting, APIs, frameworks) | ☐     | _Example: AWS, Stripe, Firebase, React_                                  |
| Identify bottlenecks (tech, process, people)          | ☐     | _Example: Only one dev knows deployment; manual testing_                 |
| Identify tech debt silently increasing spend          | ☐     | _Example: Old Firebase functions still running, unused AWS instances_    |
| Ask: "If this fails tomorrow, what breaks?"           | ☐     | _Example: Checkout fails → revenue stops; notifications fail → UX drops_ |
| Highlight single points of failure                    | ☐     | _Example: Dev laptop is the only source of truth for code_               |
| List all systems keeping product alive                | ☐     | _Example: app, database, hosting, billing, monitoring_                   |
| Assign ownership for each system                      | ☐     | _Example: [Name] owns AWS infrastructure_                                |
| Estimate recovery time for each system                | ☐     | _Example: Database restore = 2 hours_                                    |
| Check cloud accounts for ghost resources              | ☐     | _Example: Found 3 unused EC2 instances_                                  |
| Document bus factor = 1 knowledge areas               | ☐     | _Example: Only Sarah knows deployment process_                           |
| Draw customer journey flow diagram                    | ☐     |                                                                          |
| Mark external dependencies on diagram                 | ☐     |                                                                          |
| Assign risk colors to top 3 dependencies              | ☐     | _Example: 🟥 Payment API, 🟨 Email service, 🟩 Analytics_                |

---

## How to Do It

### 1. Inventory everything

Write down every service, API, and library your product needs to function. Yes, all of them. Include the obvious stuff (AWS, Stripe) and the things you forgot about (that random geocoding API Dave added two years ago). If you can't list it, you don't actually know what your product depends on—and that's terrifying.

**Action Items:**

- Create spreadsheet: Component | Type | Provider | Purpose
- Check package.json/requirements.txt for the 400 dependencies you've accumulated
- Review AWS/GCP/Azure console—look at what's actually running, not what you think is running
- Ask developers "what do we depend on?" Their list will be longer and scarier than yours

---

### 2. Assess failure impact

For each dependency, work out what breaks when it dies and how long recovery takes. Not "might be affected"—what actually stops working. If you can't answer this for your payment processor, you're not ready for scale.

**Action Items:**

- Add columns: Owner | Failure Impact | Recovery Time
- Rate impact honestly: Critical | High | Medium | Low
- Document what breaks—be specific ("checkout fails" not "some issues")
- Estimate realistic recovery times (not optimistic ones)

---

### 3. Find single points of failure

Ask your dev team who knows how to deploy. If only one person raises their hand, you've found your first disaster waiting to happen. Same for any critical code or process. The "only Dave knows" problem kills startups.

**Action Items:**

- Interview each team member about what only they know
- Document deployment processes with single owners
- Identify credentials/access locked to one person
- Note code modules where only one person can make changes

---

### 4. Uncover hidden tech debt

Log into your cloud accounts and look for things you forgot were running. Old staging environments, abandoned databases, test servers from 2023—all costing money and adding risk. Most founders find £500+/month of waste here.

**Action Items:**

- Review AWS billing by service—sort by cost descending
- Check for unused databases, servers, storage buckets
- Look for old staging/test environments ("staging-2023" is a red flag)
- Find services with zero usage in past 30 days

---

### 5. Visualise the system

Draw how a user request flows through your product, from click to response. Mark each external service. Even a rough sketch on paper will reveal bottlenecks you didn't know existed. Components that everything depends on? Those are your critical risks.

**Action Items:**

- Use draw.io, Lucidchart, or literally paper and a pen
- Start with a user action: "User signs up"
- Draw each system the request touches—frontend, API, database, external services
- Highlight external dependencies vs your own code

---

### 6. Prioritise and label risks

Pick your top 3 scariest dependencies. The ones that, if they died, would properly ruin your week. Label them honestly (critical/medium/low). These are what you fix first. Goal: turn critical risks into manageable ones by adding redundancies or alternatives.

**Action Items:**

- Rank all dependencies by "what happens if this dies"
- Select top 3 highest risk items
- Assign risk levels: Critical | Medium | Low (no need for emoji spam)
- Create actual action plan to reduce each risk (not "monitor the situation")

---

## Questions to Ask

**What happens when X dies tomorrow?**
Not "if"—when. Pick your database. Imagine it's gone. Do you have backups? Do you know how to restore them? Or would you just stare at Slack hoping someone else figures it out?

**Could you survive without Dave?**
If your lead dev got hit by a bus (or more realistically, quit for a better offer), could anyone else deploy? If the answer is no, you don't have a tech stack—you have a Dave dependency.

**What are we paying for that does nothing?**
Check your AWS bill. Find the servers you forgot about. Cancel the SaaS tools no one uses. Most startups waste 20-30% of their infrastructure spend on ghosts.

**What keeps you awake at night?**
Your gut knows the riskiest part of your stack. Name it. Then plan to fix it before it actually breaks at 3am.

**What's the disaster recovery plan?**
If your database vanished right now, what would you do? If the answer involves phrases like "probably" or "I think," you don't have backups—you have hope.

---

## Where to Look

### Cloud provider console

Log into AWS/GCP/Azure and look at what's actually running. Check the billing page for surprises. That £300/month charge for an unused load balancer? Found it. Review services, servers, databases. If you don't recognise something, find out what it is before assuming it's fine.

### Hosting platforms

If you're on Heroku, Vercel, or Netlify, list every app and environment. Test apps from six months ago are probably still running and costing money. Old preview environments. Forgotten staging sites. Delete them.

### Code repository

Open your package.json or requirements.txt. Count the dependencies. If it's more than 50, you probably don't know what half of them do. Check README files for mentions of external APIs and services. Your docs are often more honest than your memory.

### Third-party dashboards

Visit Stripe, Auth0, SendGrid—wherever you've got integrations. Note what would break if each service went down. This usually reveals dependencies you'd forgotten. Check for webhooks and API keys you didn't know existed.

### Ask the team properly

Interview your devs: "What would break if you went on holiday?" This surfaces the scary stuff—certificates on someone's laptop, deployment processes only one person knows, credentials that aren't documented. The "oh, we also use..." responses are gold.

---

## Week 1-2 Success Criteria

By the end of Week 2, you should have:

- [ ] Complete inventory of all dependencies (if it's less than 30 items, you missed some)
- [ ] Risk assessment for your 20 most critical components
- [ ] Visual diagram showing how requests flow through your system
- [ ] Top 3 risks identified and labelled honestly
- [ ] Actual action plan to reduce at least 1 critical risk (not "we'll monitor it")
- [ ] Bus factor documented—who's your single point of failure?

---

## Score This Pillar

**Week 0 Baseline:** [1-5] Rate your current understanding honestly
**Week 13 Target:** [1-5] Where you want to be

**Scoring Guide:**

- 1 = No idea what we depend on or what would break
- 2 = Vaguely aware dependencies exist, nothing documented
- 3 = Basic inventory exists, some obvious risks identified
- 4 = Comprehensive risk map, actual plans to fix top risks
- 5 = Full visibility, redundancies in place, disaster recovery tested (not just "we have backups")
