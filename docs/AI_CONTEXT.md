# Autopro AI Context

**Last Updated:** 2026-05-07

If the conversation is lost, paste this file and say:
**"Continue Autopro from this context."**

---

# Quick Summary

Autopro is an automotive marketplace platform for **Algeria** and **Nigeria**.

Current Phase:
**Supabase foundation + live data preparation**

Design Direction:
**Option B is the preferred future UX direction** for spacing, hierarchy, and premium layout feel, but the full UX refactor is intentionally deferred until after the current backend/data steps.

---

# Owner Constraints (CRITICAL)

| Constraint | Rule |
|---|---|
| No laptop | Must support phone-only workflow |
| No terminal comfort | Avoid requiring terminal commands |
| No coding experience | Give exact paths and copy-paste content |
| Limited budget | Use free tools only |

Always prefer:
- exact file paths
- one clear step at a time
- GitHub web interface workflow
- Supabase dashboard workflow
- Vercel-compatible changes

Do not rely on:
- complex CLI-only steps
- Codespaces
- multi-step local setup

---

# Tech Stack

| Tool | Purpose | Status |
|---|---|---|
| GitHub | Code storage | Active |
| Vercel | Deployment | Active |
| Next.js 14 storefront | Main customer app | Existing project context |
| Tailwind CSS | Styling | Active |
| Supabase | Database + Auth | Connected |

---

# What Was Already Done Before This Session

- Storefront pages already existed in project memory:
  - Homepage
  - Search / Parts
  - Services
  - Garage
  - Cart
  - Login
- Header/navigation already existed
- Documentation system already existed
- Admin and API folders were already planned

---

# What Was Done In This Session

## Product / Planning Decisions
- Dashboard work was discussed and considered functional enough for current phase
- Option B was confirmed as the preferred long-term UX direction
- UX refactor was postponed so backend/data setup could continue first
- The correct next backend step was identified as:
  1. connect Supabase
  2. run schema
  3. enable auth
  4. seed sample data
  5. connect UI to live queries

## Supabase Setup Progress
- Supabase project URL was confirmed
- Publishable key was confirmed as the correct frontend key
- A reusable Supabase client helper was created
- A starter SQL schema was created at:
  - `supabase/schema.sql`
- Phone-friendly browser-accessible SQL helper files were created:
  - `public/sql-full.txt`
  - `public/sql-part1.txt`
  - `public/sql-part2.txt`
  - `public/sql-part3.txt`
- A simple setup helper page was created:
  - `public/setup.html`
- SQL syntax issues in the policy section were fixed
- The schema was split into easier parts for phone-based execution
- The user successfully ran the SQL in Supabase SQL Editor
- Supabase returned success for the final corrected queries

## Verification Work
- A live verification screen was created in the app to test:
  - Supabase connection
  - table reachability from the frontend

---

# Current Confirmed Backend Foundation

These starter tables are now part of the Autopro schema plan:
- `profiles`
- `vehicles`
- `products`
- `services`
- `orders`
- `order_items`

The schema also includes:
- starter indexes
- updated_at triggers
- starter Row Level Security policies

---

# Immediate Next Steps (In Order)

1. **Open Supabase Authentication**
2. **Enable Email provider**
3. **Create one test user account**
4. **Insert sample rows into `products`**
5. **Insert sample rows into `services`**
6. **Connect the website UI to live Supabase queries**
7. **Then continue storefront milestones**:
   - Product detail page `/part/[id]`
   - Service detail page `/service/[id]`
   - Checkout page `/checkout`

---

# Important File Locations

| What | Path |
|---|---|
| Supabase client helper | `src/lib/supabase.ts` |
| Starter schema | `supabase/schema.sql` |
| Full browser SQL file | `public/sql-full.txt` |
| SQL part 1 | `public/sql-part1.txt` |
| SQL part 2 | `public/sql-part2.txt` |
| SQL part 3 | `public/sql-part3.txt` |
| Mobile setup helper | `public/setup.html` |
| Current app entry | `src/App.tsx` |

---

# Current Phase Summary

Autopro is no longer only in static UI planning.
It now has:
- Supabase connection values in place
- starter backend schema prepared
- schema execution completed in SQL Editor
- verification utilities prepared

The project is now at the point where it should move from demo content to **real auth + sample data + live queries**.

---

# Recovery Instructions

If the chat is lost:
1. Open this file
2. Copy the full content
3. Paste into a new AI chat
4. Add:
   - **"Continue Autopro from this context."**
   - **"Last completed: Supabase schema executed successfully."**
   - **"Next step: Authentication + test user + sample products/services."**

---

# Short Recovery Prompt

**Continue Autopro. Supabase schema is done. Next step is Authentication, test user creation, sample products/services, then connect live data to UI.**
