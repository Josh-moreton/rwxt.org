# Pillar 4: Security

## Overview

Stop leaving the front door unlocked. Enable MFA everywhere, check your backups actually work, and figure out what you'd do if someone hacked you tomorrow. Most of this is boring but not doing it is stupid. Takes two weeks.

---

## Action Checklist

_[Insert Linked Database: Master Task Database, Filtered by Pillar = "Security"]_

---

## Security Assessment Table

| Component               | Risk if fails          | Access Control  | Backup Status         | Monitoring         | Done? |
| ----------------------- | ---------------------- | --------------- | --------------------- | ------------------ | ----- |
| _AWS / Cloud_           | _Service downtime_     | _MFA enabled_   | _Daily backup tested_ | _Alerts active_    | ☐     |
| _Payment Gateway_       | _Revenue loss / fraud_ | _Limited admin_ | _N/A_                 | _Transaction logs_ | ☐     |
| _Database_              |                        |                 |                       |                    | ☐     |
| _Authentication System_ |                        |                 |                       |                    | ☐     |
| _API Keys / Secrets_    |                        |                 |                       |                    | ☐     |
| _Customer Data Storage_ |                        |                 |                       |                    | ☐     |
| _Admin Panel_           |                        |                 |                       |                    | ☐     |
| _CI/CD Pipeline_        |                        |                 |                       |                    | ☐     |

---

## How to Do It

### 1. Mandate multi-factor authentication

Turn on MFA for every single account that touches production or sensitive data. AWS, Azure, GCP, GitHub, Stripe, your domain registrar, email - everything. If someone can log into it and cause damage, it needs two-factor auth. This takes about five minutes per account with Google Authenticator or SMS codes, and it stops 99% of account takeover attempts dead. Not optional.

Make a list of every account with production access. Enable MFA on your cloud console, version control, payment gateways, domain registrar, and email. Document the recovery process so you're not locked out when someone loses their phone. Check that every team member has actually enabled it, not just nodded and ignored you.

---

### 2. Verify backups (and test restores)

Don't trust that backups are working - verify it. List all critical data: databases, user files, config data. Confirm each is being backed up on schedule. Then actually restore a recent backup to prove it works. Import a database dump, retrieve files from storage, whatever it takes. Too many companies discover their backups were corrupted or incomplete right when they desperately need them. Don't be that company.

Identify every critical data source. Document the backup schedule. Actually test restoring your database and file storage - not theoretically, properly do it. Check your retention policy and make sure backups are encrypted. Set up alerts for backup failures so you know immediately when something breaks. Write down the full restore procedure so it's not a panicked scramble during an emergency.

---

### 3. Run automated security scans

Use tools to find vulnerabilities before attackers do. Enable Dependabot alerts on GitHub to catch dodgy dependencies. Run `npm audit` or your stack's equivalent to see what packages have known security holes. Scan your repos for secrets with GitHub's built-in scanning or TruffleHog. If you find API keys or passwords in the code, assume they're already compromised - rotate them immediately and get them out of version control.

Turn on Dependabot and secret scanning in GitHub. Run security audits on your dependencies. Review every high or critical vulnerability and fix them - don't just acknowledge and ignore. Wire automated scanning into your CI/CD pipeline so new vulnerabilities get caught automatically. Schedule monthly security reviews so this doesn't become "that thing we did once."

---

### 4. Lock down permissions

Audit who can access what. Every person and service should have the bare minimum permissions needed - nothing more. Check your IAM roles in AWS or GCP and narrow them down. Nobody should be using the root account for day-to-day work. Lock down database access to just the app and maybe one admin. Ask yourself: who can permanently delete data or shut down production? That list should be terrifyingly short. Delete every old account from ex-employees and contractors.

Review all IAM users and roles. Disable the root account for routine tasks. Audit database permissions and GitHub access. Hunt down and remove old accounts everywhere - nothing says "security disaster waiting to happen" like accounts for people who left two years ago. Document who has admin access where. Create a proper offboarding checklist so this doesn't keep happening.

---

### 5. Set up monitoring & alerts

Monitor security-relevant events and alert on anything suspicious. Turn on login alerts so you know when someone accesses your AWS console from a new device. Use CloudWatch to catch CPU spikes that could signal an attack. Set CloudTrail alerts for sensitive actions like changing security groups or accessing user data. Watch for repeated failed logins - that's someone trying to brute-force their way in. The goal is automatic notification when something looks dodgy, not finding out three weeks later.

Enable CloudTrail logging and console login alerts. Monitor failed authentication attempts. Alert on IAM changes - if someone's messing with permissions, you want to know immediately. Watch for unusual traffic patterns and error rate spikes. Build a security dashboard so you can see what's happening at a glance. Define who gets alerted about what, and how quickly they need to respond.

---

### 6. Plan your incident response

Write down what happens when everything goes wrong. Who's in charge of coordinating the response? How do you contact everyone if email's compromised - phone numbers, Signal, whatever? What are the immediate steps: kill public access, post a status update, assess the damage? Even small teams need this sorted before the crisis hits. Draft a customer communication template now - "We're investigating an issue" written in advance beats panicked word salad at 3am.

Assign an incident response coordinator. Document everyone's phone numbers and backup contact methods. Create a proper incident response playbook with step-by-step actions. Write customer communication templates for different scenarios. Define severity levels and escalation thresholds. Set up a dedicated incident channel in Slack or Discord. Schedule an annual drill to test whether this plan actually works or if it's just comforting fiction.

---

## Questions to Ask

**Are all our admin accounts MFA-protected?**
If you've got any account without two-factor auth - cloud provider, code repo, SaaS tools - that's an open door for attackers. Find every single one and fix it today.

**When did we last test our backups?**
Having backups doesn't count for shit if they don't work. When did you last restore one end-to-end? If the answer is "never" or "can't remember," schedule a test immediately. Untested backups are just expensive placebos.

**What sensitive data do we hold, and how is it secured?**
List everything that would be catastrophic if leaked: passwords, personal data, API keys. Is it encrypted at rest and in transit? Do you actually need to store all of it, or are you hoarding data you don't need? This often reveals embarrassing gaps like unencrypted databases or passwords accidentally logged.

**Who could wreak havoc with a single mistake?**
Find out who has the power to drop the production database, rack up a £50k AWS bill, or push a rogue app update. If that list is longer than two names or includes anyone who shouldn't be there, add safeguards: restricted permissions, required approvals, confirmation dialogs for dangerous actions.

**How quickly would we know we were hacked?**
If someone was inside your system right now, stealing data or installing backdoors, would you notice? What monitoring and intrusion detection do you have? If the honest answer is "basically none," start with audit logs and basic alerts. Breaches you don't detect are often worse than the initial intrusion.

---

## Where to Look

### Cloud IAM and security center

Check your AWS IAM dashboard for users without MFA, unused credentials, and overly permissive policies. AWS Trusted Advisor and Security Hub will highlight glaring problems like exposed ports or ancient access keys. GCP's Security Command Center and Azure Security Center do the same - use them to find the obvious security holes.

### Backup logs and storage

Look at where backups actually live - S3 buckets, database backup files, wherever. Check timestamps and file sizes. Are they recent? Do the sizes make sense for your data? Review backup job logs for errors. If you're using a managed database service, check its console to see when the last snapshot succeeded. "Backup configured" doesn't mean "backup working."

### GitHub Security tab (or equivalent)

Review Dependabot alerts for each repository. Check code scanning results if you've got CodeQL or similar running. These automated checks catch vulnerabilities that developers miss - use them.

### Codebase and config files

Grep through your code for hardcoded credentials. Check config files, old scripts, test code - anywhere secrets might be hiding. Everything should be in environment variables or a proper secrets vault. If you find any hardcoded keys or passwords, assume they're compromised and rotate them immediately.

### Audit logs and alerts

Dig through CloudTrail or your product's admin logs. Look for suspicious patterns: repeated failed logins, unexpected permission changes, unusual access times. Set up alerts for key events - new IAM users, security group modifications, mass data exports. Check your error tracking tool for security-relevant errors like authentication failures or database connection issues. These logs tell you what's actually happening, not what you hope is happening.

---

## Week 7-8 Success Criteria

By the end of Week 8, you should have:

- [ ] MFA enabled on all critical accounts (100% coverage)
- [ ] Backup restore successfully tested for all critical data
- [ ] All high/critical vulnerabilities patched
- [ ] No secrets found in codebase
- [ ] IAM permissions audited and narrowed
- [ ] Security monitoring and alerts operational
- [ ] Incident response plan documented and shared
- [ ] Security baseline score improved from Week 0

---

## Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your current security posture_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**

- 1 = No MFA, untested backups, no monitoring, passwords in code
- 2 = Some MFA, backups running but untested, minimal monitoring
- 3 = MFA on most accounts, tested backups, basic monitoring
- 4 = Comprehensive MFA, regular backup tests, good monitoring, incident plan
- 5 = Full security program, automated scanning, tested incident response, compliance ready
