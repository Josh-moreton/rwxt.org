# 🧠 Pillar 1: System Intelligence - Risk Map

## Overview

Map all your tech dependencies, identify single points of failure, and create a risk-ranked inventory of what keeps your product alive.

**Timeline:** Weeks 1-2 | **Focus:** Risk Reduction & Visibility

---

## 📋 Action Checklist

*[Insert Linked Database: Master Task Database, Filtered by Pillar = "System Intelligence"]*

---

## Risk Map Table

| Task | Done? | Notes |
|------|-------|-------|
| Map all core dependencies (hosting, APIs, frameworks) | ☐ | _Example: AWS, Stripe, Firebase, React_ |
| Identify bottlenecks (tech, process, people) | ☐ | _Example: Only one dev knows deployment; manual testing_ |
| Identify tech debt silently increasing spend | ☐ | _Example: Old Firebase functions still running, unused AWS instances_ |
| Ask: "If this fails tomorrow, what breaks?" | ☐ | _Example: Checkout fails → revenue stops; notifications fail → UX drops_ |
| Highlight single points of failure | ☐ | _Example: Dev laptop is the only source of truth for code_ |
| List all systems keeping product alive | ☐ | _Example: app, database, hosting, billing, monitoring_ |
| Assign ownership for each system | ☐ | _Example: [Name] owns AWS infrastructure_ |
| Estimate recovery time for each system | ☐ | _Example: Database restore = 2 hours_ |
| Check cloud accounts for ghost resources | ☐ | _Example: Found 3 unused EC2 instances_ |
| Document bus factor = 1 knowledge areas | ☐ | _Example: Only Sarah knows deployment process_ |
| Draw customer journey flow diagram | ☐ | |
| Mark external dependencies on diagram | ☐ | |
| Assign risk colors to top 3 dependencies | ☐ | _Example: 🟥 Payment API, 🟨 Email service, 🟩 Analytics_ |

---

## 📋 How to Do It

### 1. Inventory everything
List every app, service, database, API, library, and third-party service that your product relies on. Include infrastructure (like your cloud hosting on AWS/Azure, servers, Firebase), external APIs (payments, analytics, messaging), and major frameworks or libraries in your code. This comprehensive inventory is the foundation of your risk map.

**Action Items:**
- Create a spreadsheet with columns: Component | Type | Provider | Purpose
- Check package.json / requirements.txt for dependencies
- Review AWS/GCP/Azure console for all running services
- Ask developers "what do we depend on?"

---

### 2. Assess failure impact
For each dependency on your list, note who is responsible for it (internal team or third-party), what happens to the user experience if it fails, and how long it would take to restore service. Essentially, answer "if this goes down, what breaks and how bad is it?" for every item. This exercise highlights your most fragile points and where you need contingency plans.

**Action Items:**
- Add columns: Owner | Failure Impact | Recovery Time
- Rate impact: Critical | High | Medium | Low
- Document what breaks for each component
- Estimate realistic recovery times

---

### 3. Find single points of failure
Talk with your development team to identify any critical knowledge or access that only one person holds (a "bus factor" of 1). Ask them directly: _"What do you think is the riskiest part of our stack?"_ Write down their answer. Also pinpoint any processes or pieces of code that only one developer knows well. If only one dev knows how to deploy or if the **source of truth** for code lives on a single laptop, mark that as a serious risk.

**Action Items:**
- Interview each team member about their unique knowledge
- Document deployment processes only one person knows
- Identify credentials/access only one person has
- Note any code modules with single owner

---

### 4. Uncover hidden tech debt
Audit your cloud and service accounts for things running that shouldn't be. Look for old functions, servers, or environments that are still live (and perhaps incurring costs) but no longer used. These "ghost" resources not only waste money but also add hidden risk (an outdated service could break unexpectedly or become a security vulnerability). Clean up what you can, and note down anything suspicious to address later.

**Action Items:**
- Review AWS billing by service
- Check for unused databases, servers, storage
- Look for old staging/test environments
- Identify services with $0 usage in past 30 days

---

### 5. Visualize the system
Draw a simple diagram of how data and requests flow through your product, from a user action to your backend systems. Mark each external service or module along that journey. This visual map makes it easier to spot dependencies and chokepoints. Pay attention to any component that multiple things rely on-those can be bottlenecks or single points of failure. Even a basic boxes-and-arrows sketch on paper can clarify a lot.

**Action Items:**
- Use draw.io, Lucidchart, or paper to sketch
- Start with user action (e.g., "User signs up")
- Draw each system the request touches
- Mark external vs internal components differently

---

### 6. Prioritize and label risks
From your findings, pick the top 3 most critical dependencies or failure points in your stack. Maybe it's a third-party API that, if down, would cripple your product, or a part of the codebase only one person understands. Assign a risk level to each (for example, 🟥 high risk, 🟨 medium, 🟩 low). These are the areas you'll want to address first. By the end of 90 days, you should aim to turn those reds to yellows or greens by adding redundancies or mitigations.

**Action Items:**
- Rank all dependencies by failure impact
- Select top 3 highest risk items
- Assign risk colors: 🟥 Critical | 🟨 Medium | 🟩 Low
- Create action plan to reduce each risk

---

## 💭 Questions to Ask

**What happens if X goes down tomorrow?**
Pick each major dependency and imagine it failing. Do you know the user impact and how to recover?

**Is any one person a single point of knowledge?**
If our lead dev disappeared for a week, could we still deploy and fix things? Where is institutional knowledge lacking backup?

**Are we paying for stuff we don't use?**
Scan for servers, services, or subscriptions that are running idle. Those could be eliminated to save cost and reduce complexity.

**Which part of our system keeps me up at night?**
Your gut often knows the riskiest component. Identify it explicitly and plan to shore it up.

**What's our plan for disaster recovery?**
If our database got wiped or our main server died, do we have backups and a process to get back online? Who would do what?

---

## 🔍 Where to Look

### Cloud provider console (AWS, GCP, Azure)
Review all running services, servers, databases, and their configurations. The AWS dashboard, for example, can show you every resource - check for any you don't recognize or no longer need. Also look at your cloud billing summary to catch unused resources (e.g. an idle EC2 instance or old storage bucket).

### Hosting platforms (Heroku, Vercel, Netlify)
If you use any platform-as-a-service, log in and list all your apps, environments, and add-ons. Ensure each one is known and necessary. Sometimes test apps or old versions linger online unknowingly.

### Code repository (GitHub, GitLab)
Scan your repositories (and their README or docs) for mentions of external services, APIs, or keys. Your package.json/requirements.txt can reveal third-party libraries or SDKs in use (e.g. Stripe, SendGrid). This helps map dependencies that aren't immediately obvious.

### Third-party service dashboards
Consider services like Stripe (payments), Auth0 (authentication), Firebase, etc. Visit their dashboards to remind yourself what parts of your product rely on them. Note any webhooks, API keys, or integrations set up - these are all dependencies.

### Ask the team
A quick Q&A with your developers can surface hidden dependencies ("Oh, we also use an IP geolocation API for that feature") and unwritten knowledge ("Only John's laptop has the push notification certs"). Encourage them to think of "what would break if you went on vacation" to identify obscure single points of failure.

---

## ✅ Week 1-2 Success Criteria

By the end of Week 2, you should have:
- [ ] Complete inventory of all dependencies (50+ items typical)
- [ ] Risk assessment for top 20 critical components
- [ ] Visual diagram of system architecture
- [ ] Identified and documented top 3 risks with 🟥🟨🟩 colors
- [ ] Action plan to reduce at least 1 critical risk
- [ ] Bus factor documented for key knowledge areas

---

## 📊 Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your current understanding of your tech stack_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**
- 1 = No visibility into dependencies or risks
- 2 = Aware some dependencies exist, no documentation
- 3 = Basic inventory exists, some risks identified
- 4 = Comprehensive risk map, action plans for top risks
- 5 = Full visibility, redundancies in place, disaster recovery tested
