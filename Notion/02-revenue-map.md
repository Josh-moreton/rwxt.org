# Pillar 2: Revenue Map

## Overview

Work out which bits of your tech actually make money, which bits protect money, and which bits just drain your bank account while providing "strategic value." Takes two weeks.

---

## Action Checklist

_[Insert Linked Database: Master Task Database, Filtered by Pillar = "Revenue Map"]_

---

## Revenue Map Table

| Feature / System     | Revenue Impact | Cost Centre   | Hidden Leverage              | Done? | Action                                                   |
| -------------------- | -------------- | ------------- | ---------------------------- | ----- | -------------------------------------------------------- |
| _Signup flow_        | _High_         | _Engineering_ | _Optimisation potential_     | ☐     | _Improve form UX → +10% conversion_                      |
| _Checkout/payment_   | _Critical_     | _Finance_     | _Retry/failover hidden risk_ | ☐     | _Add Stripe retry → fewer failed payments_               |
| _Key growth feature_ | _Medium_       | _Product_     | _Could double conversion_    | ☐     | _Referral system not fully tracked, could drive signups_ |
|                      |                |               |                              | ☐     |                                                          |
|                      |                |               |                              | ☐     |                                                          |
|                      |                |               |                              | ☐     |                                                          |
|                      |                |               |                              | ☐     |                                                          |
|                      |                |               |                              | ☐     |                                                          |

---

## 📋 How to Do It

### 1. Trace the money path

Outline the journey a user takes from discovering your product to completing a payment. This is your core **funnel** for revenue. For example, it might be _Landing Page → Sign Up → Onboard → Use Feature → Upgrade to Paid → Enter Payment_. Write down each step and which part of your system enables it (e.g. signup form, onboarding emails, checkout page, Stripe API). These are your revenue-critical moments; any hiccup here directly costs you money.

**Action Items:**

- Map the complete user journey from discovery to payment
- Identify every technical component in the funnel
- Note which systems must be 100% reliable
- Calculate potential revenue loss if each step fails for 1 hour

---

### 2. Link tech to each revenue step

For every step identified, list the supporting systems or services. If your checkout page is crucial, note the payment gateway (e.g. Stripe) and database that it depends on. If user onboarding affects conversion, note the email service or frontend code for that flow. The goal is to map **which tech components are tied to making or saving money**. This shows you where to focus reliability and performance efforts.

**Action Items:**

- Create table: Funnel Step | Tech Components | Reliability | Performance
- Mark critical path items that directly impact revenue
- Identify dependencies between revenue components
- Document fallback options for critical systems

---

### 3. Spot the money pits

Identify parts of your tech that cost a lot but aren't obviously driving revenue. Maybe you're running an oversized database instance that's mostly idle, or paying for a premium SaaS tool your team barely uses. Also list features that took a lot of effort to build but users don't really use (low adoption features can be a form of "cost" too). These are your _cost centres_. You might decide to downgrade, refactor, or eliminate these to improve margins.

**Action Items:**

- Review all recurring monthly costs
- Check feature usage analytics (last 30 days)
- Identify features with <5% user adoption
- Calculate cost per active user for each feature
- List quick wins for cost reduction

---

### 4. Find hidden growth levers

Look for one or two opportunities in your product that, if optimised, could significantly boost revenue or user growth. Perhaps a large number of users sign up but never make it to activation - improving that step could increase conversion. Or you have a referral feature that isn't highlighted - promoting it could drive new signups. Identify at least one such lever where a small tech or product tweak might yield a big uptick in revenue or engagement.

**Action Items:**

- Analyse funnel drop-off points (biggest losses)
- Identify underutilized features with revenue potential
- Look for manual processes that could be automated
- Find successful users and reverse engineer their path
- Brainstorm quick wins for conversion optimization

---

### 5. Include a "revenue protector"

Think about trust, security, and reliability features that indirectly protect revenue. For instance, if you handle sensitive data, a privacy or security feature (like encryption or uptime redundancy) keeps customer trust - losing that trust would hurt revenue. Make sure your map includes at least one item that, while not a new sale, prevents revenue loss (e.g. fraud detection, failover systems, regular security audits). These are often under-appreciated but critical.

**Action Items:**

- Document all security measures protecting customer data
- Identify features that prevent churn
- Review fraud prevention mechanisms
- Check SLA compliance and uptime guarantees
- Ensure payment processing has retry logic

---

### 6. Run "what-if" scenarios

For each major feature or system in your revenue map, ask "What if we turned this off for a day?" If removing a feature doesn't meaningfully drop revenue or engagement, perhaps it's not as critical as you thought (and might be a cost centre). If shutting something down would be catastrophic, ensure you have safeguards around it. This exercise forces you to prioritise the truly important parts of your product.

**Action Items:**

- List all features/systems in order of revenue impact
- Estimate daily revenue loss if each went down
- Identify features that could be sunset
- Create priority matrix: Revenue Impact vs Development Cost
- Document redundancy plans for critical systems

---

### 7. Categorize and act

Tag everything in your list as either a **revenue generator** (directly brings in money, like core features or conversion steps), a **revenue protector** (keeps revenue safe, like security/stability measures), or a **cost centre** (consumes resources without directly contributing to revenue). Once tagged, step back and review: Are you investing enough in the generators and protectors? Can you reduce or optimise the cost centres? Use these tags to guide where you spend your development time and budget in the coming weeks.

**Action Items:**

- Tag every feature and system with one of three labels
- Calculate % of dev time spent on each category
- Target: 60% generators, 30% protectors, 10% cost centres
- Identify cost centres to eliminate or optimise
- Plan investments in under-resourced generators

---

## Questions to Ask

**Where's the biggest leak?**
Check your funnel. If 1,000 people sign up but only 100 convert, that's not "standard conversion"—that's a disaster you're ignoring. Find the biggest drop-off and fix it first.

**What could make money this month?**
Pick one thing that, if you improved it slightly (faster checkout, clearer pricing, better onboarding), would measurably boost revenue. Then actually do it instead of planning it.

**What happens when payments die?**
Imagine Stripe goes down for 12 hours. How much revenue do you lose? Do you have retry logic? Or would you just refresh the dashboard and hope?

**What are we paying for that no one would miss?**
Look at your expenses. That premium monitoring tool no one checks. The database instance that's 80% idle. Cancel it. If no one complains in a week, you just found free money.

**What would investors mock us for?**
If you pitched tomorrow, what would make a technical investor raise an eyebrow? "You don't track conversion?" "Your entire funnel is manual?" Fix those bits before they ask.

---

## Where to Look

### Analytics dashboards

Open Google Analytics or Mixpanel. Look at your conversion funnel. The step where 60% of users bail? That's your problem. If you can't see this data, set it up before doing anything else.

### Payment gateway

Log into Stripe. Check your failure rate. If more than 2-3% of payments are failing, you're leaving money on the table. Look for patterns—specific cards, regions, or times when failures spike.

### Database usage stats

Query which features users actually touch. If you spent three months building something that <5% of users open, that's a cost centre masquerading as a feature. Kill it or fix it.

### Cloud billing

Open AWS Cost Explorer. Sort by spend. The top three charges should map to your most important features. If you're spending £500/month on infrastructure for a feature nobody uses, you've found waste.

### Support tickets

Search your support history for "payment" and "slow." Every "I tried to pay but it failed" ticket is lost revenue. Every "too slow, gave up" complaint is a conversion killer. These are your priorities.

---

---

## Week 3-4 Success Criteria

---

## Week 3-4 Success Criteria

By the end of Week 4, you should have:

- [ ] Complete revenue funnel mapped with every technical dependency noted
- [ ] Every feature honestly tagged as generator/protector/cost centre
- [ ] Top 3 cost centres identified with actual plans to fix them (not "investigate")
- [ ] At least 2 obvious growth opportunities spotted and prioritised
- [ ] Revenue impact calculated for fixing your biggest funnel leaks
- [ ] One revenue generator being actively optimised this month

---

## Score This Pillar

**Week 0 Baseline:** [1-5] Rate your current understanding
**Week 13 Target:** [1-5] Where you want to be

**Scoring Guide:**

- 1 = No idea how tech affects revenue
- 2 = Vaguely aware some systems are "important"
- 3 = Basic funnel mapped, some obvious cost centres spotted
- 4 = Clear revenue attribution, actual optimisation plan in progress
- 5 = Full visibility, active optimisation, measuring ROI on tech investments
