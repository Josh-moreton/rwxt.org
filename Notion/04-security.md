# 🔒 Pillar 4: Security

## Overview

Establish foundational security practices. Enable MFA, verify backups, scan for vulnerabilities, and create an incident response plan. Protect your business from avoidable disasters.

**Timeline:** Weeks 7-8 | **Focus:** Security Foundations & Risk Mitigation

---

## 📋 Action Checklist

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

## 📋 How to Do It

### 1. Mandate multi-factor authentication

Enable MFA on every account that has access to production systems or sensitive data. This includes your cloud provider console (AWS/Azure/GCP), GitHub or version control, third-party services, admin dashboards - basically anywhere a login could alter your product or data. It might take a few minutes per account to set up (using an app like Google Authenticator or SMS codes), but it dramatically lowers the risk of an account takeover. Make sure your team is on board and understands how crucial this is.

**Action Items:**

- List all accounts with production access
- Enable MFA on AWS/GCP/Azure console
- Enable MFA on GitHub/GitLab
- Enable MFA on payment gateways (Stripe, etc.)
- Enable MFA on domain registrar
- Enable MFA on email accounts
- Document MFA recovery process
- Ensure all team members have MFA enabled

---

### 2. Verify backups (and test restores)

Don't just assume backups are happening - double-check. Identify all critical data (database contents, user-uploaded files, configuration data) and confirm they are being backed up on a schedule. Next, perform a test restore of a recent backup. This could mean importing a database dump into a test database, or retrieving files from backup storage and loading them somewhere. Many startups learn too late that their backups were incomplete or corrupted. Prove now that you can recover your data quickly if the worst happens.

**Action Items:**

- Identify all critical data sources
- Document backup schedule for each
- Test database backup restore
- Test file storage backup restore
- Verify backup retention policy (how long kept)
- Check backup encryption status
- Set up backup failure alerts
- Document restore procedure step-by-step

---

### 3. Run automated security scans

Leverage tools to catch vulnerabilities in your code and dependencies. For example, if your project is on GitHub, enable **Dependabot alerts** to notify you of known vulnerabilities in libraries you use. Run npm audit (for Node.js projects) or equivalent commands for your stack to see if you're using any packages with security holes. Also, scan your repository for secrets - GitHub has built-in secret scanning, and there are tools like TruffleHog for this. If any API keys or passwords are found in code, assume they're compromised: remove them from code and roll those credentials (generate new keys/passwords).

**Action Items:**

- Enable GitHub Dependabot alerts
- Run `npm audit` or equivalent for your stack
- Enable GitHub secret scanning
- Scan repos with TruffleHog or similar
- Review and fix all high/critical vulnerabilities
- Set up automated vulnerability scanning in CI/CD
- Create process for monthly security reviews

---

### 4. Lock down permissions

Audit who has access to what in your systems. Follow the rule of least privilege: each team member or service should have the minimum access necessary. For cloud infrastructure, check IAM roles and narrow them down (for instance, no one should use the all-powerful root account for daily work). For databases, ensure only the app and perhaps one admin account can modify production data. Especially ask "Who can delete things permanently or shut down our production systems?" That list must be tiny and well-known. Remove any old user accounts (ex-employees, contractors who no longer need access).

**Action Items:**

- Review all AWS/GCP IAM users and roles
- Disable root account for daily use
- Review database user permissions
- Audit GitHub repository access
- Remove ex-employee accounts everywhere
- Document who has admin access to what
- Implement principle of least privilege
- Create offboarding security checklist

---

### 5. Set up monitoring & alerts

Establish basic monitoring for security-relevant events. For example, turn on login alerts for important accounts (so you get an email if an unrecognized device signs in to the AWS console). Use any built-in cloud alerts: AWS CloudWatch can alert on unusual spikes in CPU (could indicate an attack or runaway process) and CloudTrail can alert on certain sensitive actions (like someone changing security groups or downloading user data). Also monitor your application for common security signals - e.g., many failed logins could mean a brute-force attempt, so have your app or an auth service watch for that. The key is to get notified automatically about anything that looks like a breach or critical failure, so you're not reliant on manual checks.

**Action Items:**

- Enable AWS CloudTrail logging
- Set up alerts for AWS console logins
- Monitor failed login attempts
- Alert on IAM role changes
- Monitor unusual traffic patterns
- Set up error rate alerts
- Create security dashboard
- Define alert escalation process

---

### 6. Plan your incident response

Create a simple document outlining what to do in a security incident or major outage. Include: who coordinates the response (assign a lead), how to contact team members outside of email (in case email is compromised - consider having phone numbers or an alternate channel), and a checklist of immediate steps (e.g., remove public access, post a status update, etc.). Even if you're a tiny team, decide now "who does what" if things go wrong. Also decide on how to communicate with customers - drafting a generic "We're investigating an issue" message in advance can save stress. Having this plan means that in a crisis, you won't waste precious time figuring out process; you'll just execute the steps.

**Action Items:**

- Assign incident response coordinator
- Document team contact info (phone numbers)
- Create incident response playbook
- Draft customer communication templates
- Define severity levels (P0, P1, P2, P3)
- Establish escalation thresholds
- Set up incident communication channel (Slack/Discord)
- Schedule annual incident response drill

---

## 💭 Questions to Ask

**Are all our admin accounts MFA-protected?**
If there's any account (cloud provider, code repo, SaaS tool) without two-factor authentication, that's a door an attacker can more easily open. Find it and fix it.

**When did we last test our backups?**
It's not enough to _have_ backups. Ask if you've tried restoring one end-to-end in the last few months. If the answer is "never," schedule a fire drill to do it.

**What sensitive data do we hold, and how is it secured?**
Make a list of data that would be disastrous if leaked (user passwords, personal info, secret keys). Are they encrypted in storage and transit? Do we absolutely need to store all of it? This question can reveal gaps like a user database without encryption or logs that accidentally record passwords.

**Who could wreak havoc with a single mistake?**
Identify if any one person (or account) has the power to, say, drop the production database or charge $50k to your AWS account or publish to your app store account. If so, consider safeguards (permissions, required reviews, or at least double-confirmation processes for dangerous actions).

**How quickly would we know we were hacked?**
If an attacker was inside your system, poking around or siphoning data, would we catch it? Think about what monitors are in place - if the answer is effectively none, consider setting up some intrusion detection or at least audit logs that you review periodically.

---

## 🔍 Where to Look

### Cloud IAM and security center

In AWS, check the IAM dashboard for users without MFA, unused credentials, or overly broad policies. AWS Trusted Advisor and Security Hub can highlight glaring issues (like open ports or old access keys). Similarly, GCP's Security Command Center or Azure Security Center will flag common security misconfigurations.

### Backup logs and storage

Verify your backups by looking at wherever they're stored (S3 buckets, database backup files, etc.). Check timestamps and file sizes - are they recent? Do they seem like complete data? Look at logs from backup jobs for any errors. If you use a managed database, use its console to see when the last successful snapshot occurred.

### GitHub Security tab (or equivalent)

For each repo, review reported vulnerabilities under "Dependabot alerts" if enabled. Also check the code scanning results if you have something like CodeQL set up. These automated checks often surface things developers might miss.

### Codebase and config files

Search your code for any hardcoded credentials (API keys, secrets). Common places to slip are config files, old scripts, or test code. Make sure all secrets are instead stored in environment variables or a secure vault. If you find any, rotate those secrets (generate new ones) because they may have been exposed.

### Audit logs and alerts

Look at your product's admin logs or your cloud's audit logs (e.g., AWS CloudTrail) for unusual activities - like repeated failed logins, or someone changing security settings. Make sure you have alerts set on key events: e.g., if a new user is created in your AWS account, you get notified. If you use an error tracking tool, see if it has flagged any security-relevant errors (like "database connection failed" could hint at a config issue or attack). Essentially, comb the places that record activity in your system to ensure you're watching the right things and nothing odd is currently happening.

---

## ✅ Week 7-8 Success Criteria

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

## 📊 Score This Pillar

**Week 0 Baseline:** [1-5] _Rate your current security posture_
**Week 13 Target:** [1-5] _Where do you want to be?_

**Scoring Guide:**

- 1 = No MFA, untested backups, no monitoring, passwords in code
- 2 = Some MFA, backups running but untested, minimal monitoring
- 3 = MFA on most accounts, tested backups, basic monitoring
- 4 = Comprehensive MFA, regular backup tests, good monitoring, incident plan
- 5 = Full security program, automated scanning, tested incident response, compliance ready
