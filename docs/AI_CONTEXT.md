# Autopro AI Context

**Last Updated:** 2026-05-06

If the conversation is lost, paste this file and say: "Continue Autopro from this context."

---

# Quick Summary

Autopro is an automotive marketplace platform for Algeria & Nigeria.

Current Phase: Building storefront pages (mobile-only workflow)

Live Site: https://autopro-i38e.vercel.app/

---

# Owner Constraints (CRITICAL)

| Constraint | Solution |
|------------|----------|
| No laptop | Use phone browser only |
| No coding skills | Copy-paste code snippets |
| No terminal/commands | Use GitHub web interface |
| Limited budget | Free tools only (GitHub, Vercel, Supabase) |

DO NOT suggest: Codespaces, Terminal commands, npm/yarn commands, Complex workflows

ALWAYS provide: Exact file paths, Complete copy-paste code, Step-by-step GitHub web instructions, One file at a time

---

# Tech Stack

| Tool | Purpose | Status |
|------|---------|--------|
| GitHub | Code storage | Active |
| Vercel | Hosting | Connected |
| Next.js 14 | Framework | Working |
| Tailwind CSS | Styling | Configured |
| Supabase | Database | Next phase |

---

# Project Structure

Autopro/
  apps/
    storefront/
      src/
        app/
          components/
            Header.tsx (DONE)
          search/
            page.tsx (DONE)
          services/
            page.tsx (DONE)
          garage/
            page.tsx (DONE)
          cart/
            page.tsx (DONE)
          login/
            page.tsx (DONE)
          globals.css (DONE)
          layout.tsx (DONE)
          page.tsx (DONE)
  docs/
    AI_CONTEXT.md (this file)
    CURRENT_STATUS.md
    PROJECT_LOG.md
    SYSTEMS_INDEX.md
    Plus 30+ specification files (DONE)
  packages/
    shared/

---

# Completed Pages

| Page | URL | Status |
|------|-----|--------|
| Homepage | / | LIVE |
| Search/Parts | /search | LIVE |
| Services | /services | LIVE |
| My Garage | /garage | LIVE |
| Cart | /cart | LIVE |
| Login | /login | LIVE |
| Header | All pages | LIVE |

---

# Design System

| Element | Value |
|---------|-------|
| Primary Color | #6FB81A (Autopro Green) |
| Background | #0B0E11 (Canvas) |
| Surface 1 | #1E293B |
| Surface 2 | #334155 |
| Font | Inter |
| Style | NVIDIA + Binance + Alipay hybrid |

---

# Current Phase: STOREFRONT BUILD

## Completed
1. Documentation phase (30+ spec files)
2. Folder structure on GitHub
3. Vercel deployment connected
4. Core storefront pages (6 pages)
5. Header navigation with links

## Next Steps (In Order)
6. Connect Supabase database
7. Product detail page (/part/[id])
8. Service detail page (/service/[id])
9. Checkout page
10. User authentication (real login)
11. User dashboard
12. Design polish (icons, animations, 3D hero)
13. Admin dashboard (separate app)

---

# How To Create A New Page

Step 1: Go to GitHub then apps/storefront/src/app/
Step 2: Tap Add file then Create new file
Step 3: Type folder/filename like: pagename/page.tsx
Step 4: Paste code provided by AI
Step 5: Tap Commit changes
Step 6: Wait 1-2 minutes for Vercel to deploy
Step 7: Test at live URL

---

# How To Edit A File

Step 1: Go to GitHub and navigate to the file
Step 2: Click pencil icon to edit
Step 3: Delete all old content
Step 4: Paste new code
Step 5: Tap Commit changes

---

# If Build Fails

Step 1: Check Vercel then Deployments
Step 2: Look for red X
Step 3: Tell AI the error message
Step 4: AI provides fix

---

# Vercel Settings

Root Directory: apps/storefront
Framework: Next.js (auto-detected)
Build Command: npm run build

---

# Important File Locations

| What | Path |
|------|------|
| Homepage | apps/storefront/src/app/page.tsx |
| Layout | apps/storefront/src/app/layout.tsx |
| Header | apps/storefront/src/app/components/Header.tsx |
| Styles | apps/storefront/src/app/globals.css |
| Tailwind Config | apps/storefront/tailwind.config.ts |
| Package.json | apps/storefront/package.json |

---

# Recovery Instructions

If conversation crashes:
1. Open docs/AI_CONTEXT.md
2. Copy entire content
3. Paste into new AI chat
4. Add: Continue Autopro. Last completed: [page name]
5. AI will resume from exact point

---

# Already Completed (Do Not Repeat)

- Folder structure setup
- Vercel connection
- Root directory configuration (apps/storefront)
- Package.json setup
- Tailwind configuration with Autopro colors
- Design system colors
- Homepage page
- Search/Parts page
- Services page
- My Garage page
- Cart page
- Login page
- Header component

---

# Platform Vision (Full Reference)

Autopro will include:
- Vehicle parts marketplace (dropshipping)
- Service booking system
- Vehicle compatibility engine (TecDoc-ready)
- Vehicle history tracking
- Supplier dashboards
- Service provider dashboards
- Customer profiles and garage
- B2B/Fleet management
- Multi-country support (Algeria, Nigeria)
- Cash and online payments
- Admin monetization dashboard

Full specifications are in the docs/ folder.
