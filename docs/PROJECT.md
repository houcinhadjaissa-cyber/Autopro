# 📦 AUTOPRO PROJECT
# Single source of truth for WHAT Autopro is and HOW it's built
# Last Updated: Conv #38 — Phase 2 Implementation
# Version: 1.0

---

## WHAT IS AUTOPRO?

Autopro is a mobile-first automotive ecosystem combining:
- **Parts Marketplace** — Buy auto parts with compatibility matching
- **Service Booking** — Book mechanics, towing, inspections
- **Vehicle Garage** — Save vehicles, track history, manage fleet
- **Fleet Management** — (Phase 2+) Multi-vehicle business tools
- **Admin Panel** — (Phase 3+) Manage everything behind the scenes

**Tagline:** "Amazon + Uber + TecDoc unified into one platform"

**Launch Markets:** Algeria 🇩🇿 + Nigeria 🇳🇬 (cross-border from Day 1)

**Differentiator:** "Find parts for my car" — compatibility engine that matches
parts to your exact vehicle (VIN → OEM → Attributes → Manual → Fuzzy)

---

## ECOSYSTEM CONTEXT

Autopro is **Pillar 1 of a larger universal ecosystem.** One user ID works
across all future projects:
- Grocery delivery
- Medical/pharmacy
- School/education
- Car sales
- Real estate

Architecture pattern: "Federated Identity + Universal User Graph + Event-Driven Sync"
Pattern sources: Alipay + Alibaba + Binance + WeChat + Amazon + Google + Apple

---

## TECH STACK

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 14.2.5 |
| UI Library | React | 18 |
| Styling | Tailwind CSS | 3.4 |
| State | Zustand | 4.5 (all persisted) |
| Icons | lucide-react | 0.400 |
| Language | TypeScript | latest |
| Database | Supabase | connected |
| Hosting | GitHub + Vercel | — |

**Supabase Project:** ornbjhcsgxjvloeepojj.supabase.co
**Live Data:** 8 products + 6 services + 9 reviews in real tables

---

## FOUNDER CONSTRAINTS (NEVER VIOLATE)

1. **No laptop** — phone-only development via GitHub Mobile
2. **Free tier only** — no paid APIs or services
3. **No coding skills** — plain English instructions, copy-paste code blocks
4. **Day mode DEFAULT + Night mode TOGGLE** — Green #6FB81A primary in both
5. **Zustand persist mandatory** — all stores save to localStorage
6. **Clone-ready** — reusable code for future projects
7. **No backend connection** without explicit permission
8. **Don't rebuild** what already exists — extend it
9. **Always update** ARCHITECTURE.md + PROGRESS.md after every change
10. **Read all 5 memory files** before writing any code

---

## DESIGN SYSTEM (SUMMARY)

| Token | Value |
|-------|-------|
| Primary | #6FB81A (Autopro Green) |
| Secondary | #FF9900 (Amazon Orange) |
| Grid | 8px base |
| Font | Inter (body), system fonts |
| Day BG | #FFFFFF / #F5F5F5 / #FAFAFA |
| Night BG | #0B0E11 / #1E293B / #334155 |
| Shadows | 4 levels (Material Design) |
| Radius | 4 / 8 / 12 / 16 / 9999px |

Full design system: see MASTER_PLAN.md Section C

---

## DATA MODEL (CURRENT)

| Entity | Details |
|--------|---------|
| User | id, globalUserId, email, name, roles[], country, currency, language, riskScore |
| Vehicle | VIN, make, model, year, engine, fuelType, transmission, mileage |
| Vehicle ID | VEH_{country}_{vin_hash}_{ulid} |
| Product | id, name, price, category, images[], compatibility[] |
| Service | id, name, price, duration, category |
| Order | id, orderNumber, items[], totalAmount, status (7 states) |
| Payment | card / cod / bank_transfer / mobile_money / wallet |
| Address | full international with country selector |

Full data model: see MASTER_PLAN.md Section C

---

## ZUSTAND STORES (7 — ALL PERSISTED)

| Store | Purpose | localStorage Key |
|-------|---------|-----------------|
| cartStore | Cart items, add/remove/quantity/total | autopro-cart |
| authStore | Login, user object, globalUserId, riskScore | autopro-auth |
| garageStore | Saved vehicles with full spec | autopro-garage |
| ordersStore | Orders + bookings with 7 statuses | autopro-orders |
| settingsStore | country/currency/language/theme toggle | autopro-settings |
| paymentStore | Payment methods + saved addresses | autopro-payment |
| toastStore | Ephemeral notifications (3s auto-dismiss) | autopro-toast |

---

## PAGES

| # | Page | Route | Status |
|---|------|-------|--------|
| 1 | Homepage | / | 🔨 Rebuilding |
| 2 | Cart | /cart | 🔄 Planned |
| 3 | Search/Explore | /search | 🔄 Planned |
| 4 | Services | /services | 🔄 Planned |
| 5 | Garage | /garage | 🔄 Planned |
| 6 | Login | /login | 🔄 Planned |

---

## DEMO LOGIN

- **Email:** alex@autopro.demo
- **Password:** demo1234

---

## REPOSITORY

- **GitHub:** https://github.com/houcinhadjaissa-cyber/Autopro
- **Supabase:** ornbjhcsgxjvloeepojj.supabase.co
- **Deploy Target:** Vercel

---

## HOW TO RESUME

Paste this at the start of any new conversation:
