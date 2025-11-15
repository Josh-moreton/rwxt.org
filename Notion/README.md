# 90-Day Technical Checklist - Notion Template

An interactive, database-driven Notion template for startup founders to audit and improve their tech stack in 90 days.

---

## 📖 Overview

This template provides a structured framework for technical leaders (CTOs, tech founders, solo technical founders) to:

- **Audit** critical tech systems and dependencies
- **Connect** technology to revenue and business outcomes
- **Improve** delivery pipelines and deployment practices
- **Secure** infrastructure and implement security best practices
- **Plan** strategic tech roadmap aligned with business goals

The checklist is broken into **5 pillars** across **13 weeks**, with ~36 actionable tasks.

---

## 📂 What's Included

### Content Pages (6 Markdown Files)

| File                        | Purpose                                                     |
| --------------------------- | ----------------------------------------------------------- |
| `dashboard-template.md`     | Main overview page with progress tracking and navigation    |
| `01-system-intelligence.md` | Pillar 1: Map dependencies, identify risks, audit tech debt |
| `02-revenue-map.md`         | Pillar 2: Link tech to revenue, find leverage points        |
| `03-delivery-review.md`     | Pillar 3: Assess delivery pipeline, improve shipping speed  |
| `04-security.md`            | Pillar 4: Implement MFA, test backups, scan vulnerabilities |
| `05-tech-strategy.md`       | Pillar 5: Define short/medium/long-term tech roadmap        |

### Databases (4 CSV Files)

| File                       | Rows | Purpose                                                           |
| -------------------------- | ---- | ----------------------------------------------------------------- |
| `master-task-database.csv` | 36   | All tasks across 5 pillars with status, priority, owner, due date |
| `scoring-database.csv`     | 5    | Pillar-level scoring (Week 0 vs Week 13) with Key Wins tracking   |
| `risk-register.csv`        | 18   | Security & infrastructure risk assessment with actionable steps   |
| `weekly-breakdown.csv`     | 13   | Week-by-week breakdown showing pillar focus and progress          |

### Documentation

- `instructions.md` - Step-by-step import guide for Notion
- `README.md` - This file (overview and usage guidance)

---

## 🚀 Quick Start

### 1. Import into Notion

Follow the detailed instructions in `instructions.md`:

1. Import all 6 markdown files as pages
2. Create 4 databases from CSV files
3. Link databases to pillar pages with filtered views
4. Link progress tracking to dashboard

**Estimated setup time:** 15-20 minutes

### 2. Set Week 0 Baseline

- Open `Scoring Database`
- Rate each pillar 1-5 based on current state
- This establishes your starting point

### 3. Assign Ownership

- Open `Master Task Database`
- Assign owners to tasks (yourself or team members)
- Set due dates for first 2-4 weeks

### 4. Start Week 1

- Open `01-system-intelligence.md`
- Review the "How to Do It" sections
- Begin inventory of tech systems
- Update task statuses as you progress

---

## 📅 13-Week Structure

### Weeks 1-2: System Intelligence

**Focus:** Inventory dependencies, map risks, audit tech debt

- Identify single points of failure
- Document "bus factor" knowledge gaps
- Create system architecture diagram
- Calculate risk scores for critical components

### Weeks 3-4: Revenue Map

**Focus:** Connect tech to revenue, find growth levers

- Trace user journey from signup to payment
- Calculate feature-level revenue attribution
- Identify cost centers vs revenue generators
- Find small improvements with big revenue impact

### Weeks 5-6: Delivery Review

**Focus:** Assess and improve delivery pipeline

- Measure current release frequency
- Map deployment process
- Set up staging environment
- Implement automated testing
- Create rollback procedures

### Weeks 7-8: Security

**Focus:** Lock down access, verify backups, scan vulnerabilities

- Enable MFA on all critical accounts
- Test backup restoration (actually restore!)
- Run vulnerability scans (Snyk/Dependabot)
- Audit IAM permissions
- Set up security monitoring

### Weeks 9-10: Tech Strategy

**Focus:** Define strategic roadmap

- List 3 short-term wins (0-30 days)
- Plan 3 medium-term upgrades (30-60 days)
- Select 1 long-term strategic play (60-90+ days)
- Connect initiatives to business goals
- Schedule monthly reviews

### Weeks 11-13: Execute & Adjust

**Focus:** Complete initiatives, track progress, final review

- Weekly check-ins on task completion
- Adjust priorities based on learnings
- Celebrate wins
- Final scoring and retrospective

---

## 🎯 How to Use This Template

### Daily/Weekly Workflow

**As a Solo Founder:**

1. Check dashboard each Monday
2. Review tasks due this week
3. Work through 2-3 tasks per week (aim for 5-10 hours/week)
4. Update statuses as you complete items
5. Add notes and learnings to task entries

**With a Team:**

1. Hold weekly 30-min check-in
2. Review progress on Master Task Database
3. Discuss blockers and adjust priorities
4. Assign new tasks for upcoming week
5. Update Weekly Breakdown with completion %

### Progress Tracking

**Use the Dashboard to monitor:**

- Overall progress: tasks Done vs Total
- Current week's pillar focus
- Upcoming deadlines
- Key wins accumulating

**Use the Scoring Database to track:**

- Week 0 baseline scores (1-5 per pillar)
- Week 13 target scores
- Actual improvements made
- Notable achievements

### Customization

**This template is a starting point. Adapt it:**

- Add/remove tasks based on your context
- Adjust timelines (compress to 60 days or extend to 180 days)
- Create custom views (e.g., "Urgent", "Quick Wins", "Needs Research")
- Add properties like "Effort Estimate" or "Impact Score"
- Link to external docs (architecture diagrams, runbooks)

---

## 🧩 Template Philosophy

### Database-First Design

The template uses **one master task database** with multiple **filtered views** per pillar. This ensures:

- Single source of truth
- No duplicate tasks
- Easy cross-pillar views (e.g., "Show all High priority tasks")
- Rollup capabilities (e.g., count Done tasks per pillar)

### Actionable Over Academic

Every pillar includes:

- ✅ **Action checklists** - concrete tasks to complete
- 📊 **Assessment tables** - fillable tracking grids
- 📋 **How-to guides** - step-by-step instructions
- 💭 **Strategic questions** - prompts for deeper thinking
- 🔍 **Where to look** - specific places to find information
- 📊 **Scoring rubrics** - clear 1-5 rating criteria

### Business Outcome Focused

The template constantly connects tech to business impact:

- Revenue attribution (Pillar 2)
- Risk mitigation (Pillars 1, 4)
- Speed to market (Pillar 3)
- Strategic positioning (Pillar 5)

---

## 📊 Example Use Cases

### Pre-Funding Preparation

- Complete full audit (all 5 pillars) before pitch meetings
- Use findings to demonstrate technical competence to investors
- Have clear roadmap to address technical due diligence concerns

### Post-Incident Recovery

- Run Pillars 1, 3, 4 after an outage or security scare
- Identify root causes and implement preventive measures
- Build confidence that "it won't happen again"

### New CTO Onboarding

- Use Pillar 1 (System Intelligence) to learn the tech stack
- Complete Pillar 4 (Security) to identify immediate risks
- Build Pillar 5 (Tech Strategy) as 90-day plan for stakeholders

### Preparing for Scale

- Focus on Pillars 2, 3, 5
- Identify bottlenecks before growth hits
- Plan infrastructure upgrades proactively

### Solo Founder Sanity Check

- Validate you're not missing critical risks
- Prioritise what matters most for growth
- Build confidence you're on the right track

---

## ✅ Success Metrics

**By Week 13, you should have:**

- [ ] Documented all critical dependencies
- [ ] Identified and mitigated top 3-5 risks
- [ ] Connected major features to revenue contribution
- [ ] Improved deployment frequency or reduced deploy risk
- [ ] Enabled MFA, tested backups, ran security scan
- [ ] Created strategic tech roadmap with business alignment
- [ ] Increased pillar scores by average of +2 points
- [ ] Built confidence in your tech foundation

---

## 🔄 After 90 Days

**This isn't one-and-done. Make it ongoing:**

1. **Quarterly Reviews:** Re-run scoring every 3 months
2. **New Hires:** Use as onboarding checklist for tech team members
3. **Pre-Mortems:** Reference risk register before major launches
4. **Investor Updates:** Share progress and roadmap from Pillar 5
5. **Team Rituals:** Weekly task review, monthly strategy review

**Export what you've learned:**

- Turn risk register into living runbook
- Convert delivery assessment into team processes
- Share revenue map with product/business teams
- Present tech strategy to board or advisors

---

## 🆘 Support & Resources

**Need help?**

- 📧 Email: hello@rwxt.org
- 🌐 Web: https://rwxt.org
- 📄 See full checklist: https://rwxt.org/90-day-checklist

**Community:**
Share your progress and learnings! Tag us when you:

- Complete a pillar
- Discover a major risk or win
- Create custom views or improvements

---

## 📜 License & Attribution

This template is provided as-is for startup founders and technical leaders. Feel free to:

- Use it for your own startup
- Share with your team or advisors
- Customize extensively

**Please attribute if sharing publicly:**

> "Based on the 90-Day Technical Checklist by RWXT.org"

---

## 🙏 Credits

Created by **RWXT.org** - helping technical founders build sustainable, scalable startups.

**Version:** 1.0 (2024)

---

**Ready to get started?** Open `instructions.md` and begin importing!
