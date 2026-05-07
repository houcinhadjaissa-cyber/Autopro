# Autopro Systems Index

**Last Updated:** 2026-05-07

---

# Project Overview

Autopro is an automotive marketplace platform serving:
- Algeria
- Nigeria

This index tracks the most important current systems, files, and next-priority modules.

---

# Current Major Systems

## 1. Storefront Foundation
Previously completed in project memory:
- Homepage
- Search / Parts
- Services
- Garage
- Cart
- Login
- Header/navigation

## 2. Dashboard / Account Direction
- Dashboard phase reviewed and advanced
- Used as part of user context and logged-in product planning

## 3. Supabase Backend Foundation
Current active system:
- Supabase project connected
- publishable key confirmed
- frontend client helper created
- starter schema created and executed
- verification workflow added

---

# Core Database Tables

These tables are now part of the active backend foundation:

| Table | Purpose |
|---|---|
| `profiles` | User profile and role information |
| `vehicles` | User garage / saved vehicle data |
| `products` | Parts marketplace data |
| `services` | Service provider listings |
| `orders` | Customer order records |
| `order_items` | Items inside each order |

---

# Important Current Files

## Supabase / Backend Files
| File | Purpose |
|---|---|
| `src/lib/supabase.ts` | Frontend Supabase client helper |
| `supabase/schema.sql` | Starter schema file |
| `public/sql-full.txt` | Full SQL for browser access |
| `public/sql-part1.txt` | SQL split part 1 |
| `public/sql-part2.txt` | SQL split part 2 |
| `public/sql-part3.txt` | SQL split part 3 |
| `public/setup.html` | Mobile setup guide |

## App Entry
| File | Purpose |
|---|---|
| `src/App.tsx` | Current setup/verification app screen |
| `src/main.tsx` | App bootstrap |
| `src/index.css` | Global styling |
| `index.html` | Main page shell |

## Project Memory Files
| File | Purpose |
|---|---|
| `docs/AI_CONTEXT.MD` | Recovery context |
| `docs/PROJECT_LOG.MD` | Progress history |
| `docs/CURRENT_STATUS.MD` | Current state summary |
| `docs/SYSTEMS_INDEX.MD` | This index |

---

# Active Workflow Helpers

## Phone-Friendly Setup Helpers
Use these when working from mobile:
- `/setup.html`
- `/sql-full.txt`
- `/sql-part1.txt`
- `/sql-part2.txt`
- `/sql-part3.txt`

Purpose:
- easier copy-paste SQL access
- easier Supabase SQL Editor execution
- simpler onboarding without needing file-tree navigation

---

# Next Priority Systems

## Immediate
1. Supabase Authentication
2. Test user creation
3. Sample product data
4. Sample service data
5. Frontend live data queries

## Next Product Pages
6. Product Detail page `/part/[id]`
7. Service Detail page `/service/[id]`
8. Checkout page `/checkout`

---

# Deferred But Confirmed Direction

## UX / Design
- Option B is the preferred future UX direction
- Major layout polish is deferred until backend/data milestones are stable

This means the project direction is:
- real functionality first
- full UI refinement after data foundation is secure

---

# Short Index Summary

**Autopro now has a storefront base, dashboard direction, Supabase connection, starter schema, and phone-friendly setup helpers. The next active system is Authentication + sample data + live queries.**
