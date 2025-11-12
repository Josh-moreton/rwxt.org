# 💰 Pillar 2: Revenue Map

## Overview

Connect every part of your tech stack to revenue. Identify what drives money in, what protects it, and what just costs money. Find hidden leverage points that could 10x your growth.

**Timeline:** Weeks 3-4 | **Focus:** Revenue Optimization & Cost Reduction

---

## 📋 Action Checklist

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

Look for one or two opportunities in your product that, if optimized, could significantly boost revenue or user growth. Perhaps a large number of users sign up but never make it to activation - improving that step could increase conversion. Or you have a referral feature that isn't highlighted - promoting it could drive new signups. Identify at least one such lever where a small tech or product tweak might yield a big uptick in revenue or engagement.

**Action Items:**

- Analyze funnel drop-off points (biggest losses)
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

For each major feature or system in your revenue map, ask "What if we turned this off for a day?" If removing a feature doesn't meaningfully drop revenue or engagement, perhaps it's not as critical as you thought (and might be a cost centre). If shutting something down would be catastrophic, ensure you have safeguards around it. This exercise forces you to prioritize the truly important parts of your product.

**Action Items:**

- List all features/systems in order of revenue impact
- Estimate daily revenue loss if each went down
- Identify features that could be sunset
- Create priority matrix: Revenue Impact vs Development Cost
- Document redundancy plans for critical systems

---

### 7. Categorize and act

Tag everything in your list as either a **revenue generator** (directly brings in money, like core features or conversion steps), a **revenue protector** (keeps revenue safe, like security/stability measures), or a **cost centre** (consumes resources without directly contributing to revenue). Once tagged, step back and review: Are you investing enough in the generators and protectors? Can you reduce or optimize the cost centres? Use these tags to guide where you spend your development time and budget in the coming weeks.

**Action Items:**

- Tag every feature and system with one of three labels
- Calculate % of dev time spent on each category
- Target: 60% generators, 30% protectors, 10% cost centres
- Identify cost centres to eliminate or optimize
- Plan investments in under-resourced generators

---

## 💭 Questions to Ask

**Where do users drop out before paying?**
Look at your user funnel. Are lots of users signing up but not converting to paid? Pinpoint the drop-off and ask what might fix that (speed, clarity, incentives?).

**What feature could increase revenue _this month_ if improved?**
Identify a part of the product that, with a quick optimization (better UX, faster load, clearer call-to-action), could yield a measurable bump in conversion or upsells.

**If our payment system failed, how would that hit us?**
Imagine Stripe or your payment processor went down for 24 hours. Do you know how much revenue you'd lose or how many customers would churn? This underscores the importance of payment reliability (and maybe having retry logic or a backup plan).

**Are we paying for tech that customers wouldn't miss?**
Challenge every expense. If you turned off a non-critical service or tool, would anyone (internally or externally) notice? If the answer is no, that cost may not be justified.

**What would an investor question about our revenue model?**
If you pitched an investor, what part of "how you make money" would they be most skeptical of? For example, reliance on a single customer or a very manual process in the funnel. Use that perspective to strengthen those weak points now.

---

## 🔍 Where to Look

### Analytics & funnel metrics (Google Analytics, Mixpanel)

Inspect your sign-up and conversion funnels. Look at where users drop off - for instance, if many add to cart but don't complete checkout, that's a high-leverage point to investigate (maybe a bug or UX issue).

### Payment gateway dashboards (Stripe, PayPal, etc.)

Review your revenue reports and failure rates. Check how many payments fail (and why), your churn rate on subscriptions, and if there are any patterns (e.g. higher failures on certain cards or regions). This can reveal technical issues to fix, like adding a retry mechanism for failed charges.

### CRM or database usage stats

Query your database or use your CRM to see which features customers use most and which hardly get touched. If a feature is rarely used but costs a lot to maintain (or uses expensive infrastructure), note that as a potential cut or rework. Conversely, if a feature is heavily used and tied to paid plans, ensure it's rock solid.

### AWS/Cloud cost explorer

Dive into your cloud billing details. Identify the top 3 costs - are they aligned with your busiest features? For example, if you're spending a lot on a server that supports an add-on feature few use, that's a flag. Cloud cost tools can show idle resources or over-provisioned systems that you can scale down to save money.

### Customer feedback & support tickets

Scan support inquiries or user feedback for revenue-related issues. Complaints like "I tried to pay but it didn't work" or "The site was slow so I gave up" directly point to lost revenue. Also look for requests that could be opportunities ("Do you have Feature X? I'd pay for that!"). This qualitative data can guide you to tech improvements that have clear business value.

---

## ✅ Week 3-4 Success Criteria

By the end of Week 4, you should have:

- [ ] Complete revenue funnel mapped with all tech dependencies
- [ ] Every feature tagged as generator/protector/cost centre
- [ ] Identified top 3 cost centres with elimination/optimization plans
- [ ] Found at least 2 high-leverage growth opportunities
- [ ] Calculated potential revenue impact of fixing top 3 drop-off points
- [ ] Action plan for optimizing one revenue generator this month

---

## 📊 Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your understanding of tech-to-revenue connections_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**

- 1 = No visibility into how tech affects revenue
- 2 = Vague awareness of revenue-critical systems
- 3 = Basic funnel mapped, some cost centres identified
- 4 = Clear revenue attribution, optimization plan in place
- 5 = Full visibility, active optimization, measurable ROI on tech investments
