# Notion Import Instructions

This guide will walk you through importing the 90-Day Technical Checklist template into your Notion workspace.

---

## 📦 What's Included

**Markdown Files (Content Pages):**
- `dashboard-template.md` - Main overview page
- `01-system-intelligence.md` - Pillar 1: Risk & Dependency Mapping
- `02-revenue-map.md` - Pillar 2: Revenue Attribution
- `03-delivery-review.md` - Pillar 3: Delivery Pipeline
- `04-security.md` - Pillar 4: Security Foundations
- `05-tech-strategy.md` - Pillar 5: Strategic Roadmap

**CSV Files (Databases):**
- `master-task-database.csv` - All 36 tasks across pillars (main database)
- `scoring-database.csv` - Pillar scoring tracker (Week 0 vs Week 13)
- `risk-register.csv` - Security & infrastructure risk assessment (18 components)
- `weekly-breakdown.csv` - 13-week timeline with pillar focus areas

---

## 🚀 Step-by-Step Import

### Step 1: Create Workspace Structure

1. Open Notion and create a new page called **"90-Day Tech Checklist"**
2. Inside this page, create a folder structure or just keep everything flat (your choice)

### Step 2: Import Content Pages

**Import each markdown file:**
1. In Notion, click **"Import"** at the bottom of the left sidebar
2. Select **"Markdown & CSV"**
3. Upload `dashboard-template.md`
4. Repeat for all 5 pillar markdown files (`01-system-intelligence.md` through `05-tech-strategy.md`)

**Result:** You'll have 6 pages in your workspace. The markdown formatting (headers, tables, checkboxes, bold/italic) will be preserved.

### Step 3: Import Databases

**For each CSV file, create a database:**

#### Master Task Database
1. Create a new page called **"Master Task Database"**
2. Type `/table` and select **"Table - Full page"**
3. In the table, click the `•••` menu → **Import** → **CSV**
4. Upload `master-task-database.csv`
5. Verify columns: Task Name, Pillar, Week, Status, Priority, Owner, Due Date, Notes, Example Answer
6. **Convert Status to Select property:** Click column header → Property type → Select
7. Add status options: `Not Started`, `In Progress`, `Done`
8. **Convert Priority to Select:** Add options `Critical`, `High`, `Medium`, `Low`

#### Scoring Database
1. Create a new page called **"Scoring Database"**
2. Type `/table` and select **"Table - Full page"**
3. Import `scoring-database.csv`
4. Verify columns: Pillar, Week 0 Score, Week 13 Score, Key Wins, Status
5. Convert Status to Select: `Not Started`, `In Progress`, `Done`

#### Risk Register
1. Create a new page called **"Risk Register"**
2. Type `/table` and select **"Table - Full page"**
3. Import `risk-register.csv`
4. Verify columns: Component, Risk Level, Risk if Fails, Access Control, Backup Status, Monitoring, Related Pillar, Action Required, Owner
5. Convert Risk Level to Select: `Critical`, `High`, `Medium`, `Low`

#### Weekly Breakdown
1. Create a new page called **"Weekly Breakdown"**
2. Type `/table` and select **"Table - Full page"**
3. Import `weekly-breakdown.csv`
4. Verify columns: Week, Pillar, Focus, Completed, Total, Progress
5. **Add Formula for Progress:** Click `+` to add new property → Formula
   - Name it "Progress %"
   - Formula: `if(prop("Total") > 0, format(round(prop("Completed") / prop("Total") * 100)) + "%", "0%")`

### Step 4: Link Databases to Content Pages

Now you'll add filtered views of the Master Task Database to each pillar page.

**For each pillar page (01-05):**
1. Open the pillar page (e.g., `01-system-intelligence`)
2. Find the placeholder text: `*[Insert Linked Database: Master Task Database, Filtered by Pillar = "X"]*`
3. Delete this placeholder
4. Type `/linked` and select **"Create linked database"**
5. Choose **"Master Task Database"**
6. Click **Filter** → Add filter: **Pillar** contains **"System Intelligence"** (adjust for each pillar)
7. Set view to **Table** or **Board** (Status column)
8. Hide columns you don't need (e.g., hide Example Answer once you've filled in real data)

**Repeat for all 5 pillars** with appropriate filters:
- Pillar 1: Filter by `Pillar = "System Intelligence"`
- Pillar 2: Filter by `Pillar = "Revenue Map"`
- Pillar 3: Filter by `Pillar = "Delivery Review"`
- Pillar 4: Filter by `Pillar = "Security"`
- Pillar 5: Filter by `Pillar = "Tech Strategy"`

### Step 5: Link Progress Tracking to Dashboard

**On the Dashboard page:**
1. Find the placeholder: `*[Insert Progress Summary - linked to Scoring Database]*`
2. Delete this text
3. Type `/linked` → Select **"Scoring Database"**
4. Set view to **Table**
5. Find the placeholder: `*[Insert Weekly Breakdown - linked to Weekly Breakdown Database]*`
6. Delete this text
7. Type `/linked` → Select **"Weekly Breakdown"**
8. Set view to **Table**

---

## 🔗 Linking & Relations (Optional Advanced Setup)

To create relations between databases:

**Link Risk Register to Master Tasks:**
1. Open **Risk Register**
2. Add new property → **Relation** → Link to **Master Task Database**
3. Name it "Related Tasks"
4. Now you can link specific risks to action items

**Link Scoring Database to Master Tasks:**
1. Open **Scoring Database**
2. Add property → **Rollup**
3. Select relation to Master Task Database (you'll need to create the relation first)
4. Choose property: Status
5. Calculate: Count where Status = Done
6. This shows how many tasks per pillar are complete

---

## ✏️ Customization Tips

**Remove Example Data:**
- The CSV files contain example/placeholder data (marked with `_italics_`)
- Once you've filled in your real data, delete the example rows

**Add Team Members:**
- In Master Task Database, add team members to the Owner column
- Notion will suggest converting to a Person property - do this for avatars

**Create Dashboard Views:**
- Add a **Board view** of Master Task Database grouped by Status
- Add a **Calendar view** grouped by Due Date
- Create **Filtered views** like "This Week" or "My Tasks"

**Color Code:**
- Use Notion's color options to highlight critical items
- Apply colors to database rows or add an Icon to each pillar page

**Templates:**
- Create a **Task Template** in Master Task Database with default properties
- Create a **Risk Template** in Risk Register

---

## 🎯 Using the Template

### Week 0: Setup
1. Import all files following steps above
2. Review dashboard and understand structure
3. Set your Week 0 scores in Scoring Database
4. Assign owners to tasks

### Weeks 1-13: Execute
1. Check dashboard weekly to see progress
2. Update task statuses as you complete items
3. Fill in assessment tables in each pillar page
4. Add notes and learnings
5. Adjust weekly breakdown as needed

### Week 4, 8, 13: Reviews
1. Run progress review meeting
2. Update Scoring Database with new scores
3. Update Key Wins column
4. Adjust priorities based on learnings

---

## 🆘 Troubleshooting

**CSV won't import?**
- Make sure you're importing into a **Table database**, not a page
- Check that CSV has proper headers in first row
- Try opening CSV in a text editor to verify format

**Linked database not filtering?**
- Verify filter is set: click `Filter` button → ensure condition matches
- Check that source database has data in the Pillar column
- Make sure Pillar names match exactly (case-sensitive)

**Progress formula not working?**
- Ensure Completed and Total columns are **Number** properties
- Double-check formula syntax in Progress % property
- Try: `format(round(prop("Completed") / prop("Total") * 100)) + "%"`

**Lost the placeholder text?**
- Don't worry! Just add linked databases wherever makes sense
- The key is linking Master Task Database to each pillar with filters

---

## 📚 Next Steps

Once import is complete:
1. Read `README.md` for usage guidance
2. Schedule your Week 0 kickoff
3. Customize to your startup's needs
4. Share with your team
5. Start checking off tasks!

**Questions?** Contact: hello@rwxt.org
