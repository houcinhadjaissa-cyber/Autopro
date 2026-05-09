# 🗺️ AUTOPRO MASTER PLAN
# Single Source of Truth — Never Get Lost Again
# Last Updated: Conv #38 — Phase 2 Implementation
# Version: 2.0

---

## 🔖 HOW TO USE THIS FILE
- **AI reads this file** at the start of every conversation
- **Human updates** the "CURRENT STATUS" and "NEXT STEP" sections after each session
- **AI updates** the "COMPLETED LOG" and feature statuses after each build
- **Never delete history** — only append to the COMPLETED LOG
- This file contains EVERYTHING from the 4 master lists + 38-file audit — no need to re-paste them

---

## ═══════════════════════════════════════════
## A — WHAT THE PROJECT IS
## ═══════════════════════════════════════════

### Vision
Autopro is a mobile-first automotive ecosystem: parts marketplace + service
booking + vehicle garage + fleet management (Phase 2) + admin panel.
Cross-border launch in Algeria 🇩🇿 + Nigeria 🇳🇬.
Goal: Amazon + Uber + TikTok + TecDoc unified into one platform.

### Ecosystem Scope
Autopro is Pillar 1 of a larger universal ecosystem. One user ID works across
ALL future projects (grocery, medical, school, car sales, real estate).
Architecture: "Federated Identity + Universal User Graph + Event-Driven Sync"
Pattern sources: Alipay + Alibaba + Binance + WeChat + Amazon + Google + Apple

### Founder Constraints (LOCKED — Never Violate)
- No laptop — phone-only development via GitHub mobile
- Limited budget — free tier only, no paid APIs
- No coding skills — plain English instructions, copy-paste code blocks
- Day mode DEFAULT + Night mode USER TOGGLE — Green #6FB81A primary in both
- Reusable code — clone-ready for future projects (universal core)
- Save every second — Zustand persist mandatory on all stores
- No backend connection without explicit permission
- Read all 5 memory files before writing any code
- Don't rebuild what exists — extend it
- Update ARCHITECTURE.md + PROGRESS.md after every change

### Tech Stack (Current)
- Next.js 14.2 + React 18 + Tailwind CSS 3.4
- Zustand 4.5 (state management, all stores persisted to localStorage)
- lucide-react 0.400 (icons)
- TypeScript
- Supabase project EXISTS at ornbjhcsgxjvloeepojj.supabase.co
  - 8 products + 6 services + 9 reviews in real tables
  - Supabase client connected (lib/supabase.ts)
- Hosting: GitHub (repo) + Vercel (deploy target)

### Demo Login
- Email: alex@autopro.demo
- Password: demo1234

---

## ═══════════════════════════════════════════
## B — WHAT WE DID SO FAR
## ═══════════════════════════════════════════

### 38-File Audit (Conv #38) — COMPLETE ✅
- 750+ items extracted across 38 legacy docs
- 60+ architecture decisions locked
- 15 conflicts resolved (colors, tech stack, theme, grid)
- 8 obsolete files archived
- 3 skeleton files identified for future writing
- 25+ owner-approved decisions confirmed and logged

### State Management — 8 Stores (All Persisted)
1. cartStore — cart items with add/remove/quantity/total
2. authStore — login with globalUserId, riskScore, roles
3. garageStore — saved vehicles with VEH_{country}_{hash}_{ulid} ID
4. ordersStore — orders + bookings with 7 statuses
5. settingsStore — country, currency, language, theme toggle
6. paymentStore — 5 payment types + saved addresses
7. toastStore — ephemeral notifications (3s auto-dismiss)
8. lib/supabase.ts — Supabase client connected

### Pages Built (In Progress)
1. Homepage (rebuilding now with audit quick wins)
2. Cart (planned)
3. Search/Explore (planned)
4. Services (planned)
5. Garage (planned)
6. Login (planned)

### Design System (Implemented)
- Light theme: DEFAULT (white backgrounds, dark text)
- Night mode: toggle via settingsStore (.dark class)
- Primary: #6FB81A consistent across both modes
- Secondary: #FF9900 (Amazon Orange)
- CSS variables: colors, shadows, spacing, typography, radius
- Reusable classes: .card, .btn-primary, .btn-secondary

### Data Model (Current)
- 44 countries with flags, dial codes, currency
- 30 currencies with USD exchange rates
- User: id, globalUserId, riskScore, roles[], country, currency, language, vehiclePrivacyDefault, twoFactorEnabled
- Vehicle: full spec (VIN, color, mileage, fuel, transmission, last service)
- PaymentMethod: card | cod | bank_transfer | mobile_money | wallet
- Address: full international with country selector

### Audit Results Summary
- 8 ACTIVE files (START_HERE, PROJECT, ARCHITECTURE, PROGRESS, MASTER_PLAN, DECISION_RULES, CONCERNS_AND_SOLUTIONS, DECISION_LOG)
- 15 GOLD REFERENCE files (definitive specs)
- 8 ARCHIVED files (pointed to MASTER_PLAN)
- 3 SKELETON files (need writing in Phase 3)

---

## ═══════════════════════════════════════════
## C — THE FULL PLAN (All 4 Lists + 38-File Audit Unified)
## ═══════════════════════════════════════════

### ─── THE 6 PILLARS (Build in This Order) ───

#### 🥇 PILLAR 1: Universal Identity & Data Graph Core
"The Brain & Memory" — Non-Negotiable Foundation

Purpose: Single source of truth for WHO users are and WHAT data they own
across all projects.

Core Tables:
- core_users_global (user_id UUID, email_hash, phone_hash, region_tag, passkey_enabled, status, created_at, last_login, metadata JSONB)
- users_{region}_vault (encrypted regional storage per GDPR/PIPL)
- user_profiles_modular (profile_id, user_id, project_scope, profile_type, region_origin, profile_data JSONB, sensitivity_level, consent_required)
- consent_cross_border (consent_id, user_id, source_region, target_region, data_category, transfer_basis, consent_granted, expires_at, audit_hash)
- user_events_stream (event_id, user_id, event_type, aggregate_id, payload JSONB, region_origin, schema_version, timestamp — APPEND ONLY)
- consent_audit_log (log_id, user_id, requesting_project, data_requested, consent_status, ip_address, device_fingerprint, timestamp)

Key Features: Passkey-first auth (FIDO2), Row-Level Security (RLS) per region/project, Tokenization for sensitive fields, Auto-expiring consents per regional law, Immutable audit_hash on all mutable records

Tools: Supabase Auth + DB + RLS, Upstash Redis (event bus)
Success Metric: One user registers ONCE, logs in EVERYWHERE
Status: 🟡 PARTIAL — globalUserId exists, Supabase connected, missing consent engine/event stream/tokenization

#### 🥈 PILLAR 2: Reusable Project Template Engine
"The Blueprint Factory" — Build Once, Deploy Everywhere

Core Components: _project_template JSON schema, project_registry, clone_workflow, feature_flags table

Key Features: API-first design, Mobile-optimized UI, Built-in consent prompts, Zero-config Vercel deployment

Tools: GitHub Mobile, Vercel
Success Metric: New project live in <1 hour, fully integrated
Status: 🟡 PARTIAL — Next.js structure built, stores created, 1 page built

#### 🥉 PILLAR 3: Unified Payment & Wallet Orchestrator
"The Money Layer" — Secure, Global, Compliant

Core Tables: payment_requests_unified, wallet_ledger_entries, universal_wallet_ledger, payment_method_registry, fee_rules, revenue_ledger

Key Features: Payment abstraction, Double-entry ledger (Binance-grade), Cold/hot wallet split, Multi-currency FX spread, Tokenization, Idempotency keys, Trust UI

Tools: Stripe Connect, Activepieces/Make.com, Cloudflare Workers
Success Metric: User pays with ANY method, ANY region, ONE flow
Status: 🟡 PARTIAL — 5 payment types in store, COD trust tiers defined

#### 🏅 PILLAR 4: Event-Driven Automation & Sync Layer
"The Nervous System" — Data Flows Automatically

Core Components: event_bus (Upstash Redis/Supabase Realtime), webhook_registry, sync_rules, dead_letter_queue

Key Features: Visual workflow builder (no-code), Exponential backoff + retry, Idempotent handlers, Audit trail, Pause/resume syncs

Tools: Activepieces, Make.com, Supabase Realtime
Success Metric: Car added in Garage → auto-appears in Car Sales (if consent)
Status: 🔴 MISSING — no webhook registry, no event bus, no cross-project sync

#### 🎖️ PILLAR 5: Compliance & Security Orchestration
"The Guardian" — Legal, Ethical, Trustworthy

Core Components: consent_engine, data_retention_scheduler, audit_log_aggregator, breach_detection

Key Features: Region-aware consent prompts, One-click data export/delete, Encryption key rotation, Immutable audit logs, Breach response playbook

Data Retention: Search logs 30 days, Orders 5 years, Vehicle history permanent, Reviews permanent, Temp media 7 days
Tools: Ory Keto, OneTrust, HashiCorp Vault
Success Metric: Pass GDPR/PIPL audit with zero manual evidence
Status: 🟡 PARTIAL — riskScore exists, missing consent engine/encryption/anomaly detection

#### ✨ PILLAR 6: Developer Handoff & Extensibility Layer
"The Bridge" — No-Code Today, Code-Ready Tomorrow

Core Components: Infrastructure-as-code (Terraform), API specs (OpenAPI 3.1), Migration guides, Testing suite, Monitoring templates

Key Features: Clear "NO-CODE CONFIG" vs "CODE-EXTENSIBLE" labeling, Versioned schemas, Example code snippets
Tools: GitHub Mobile, Stoplight Studio, Postman Mobile
Success Metric: Developer onboarded in 1 day
Status: 🟡 PARTIAL — MASTER_PLAN/ARCHITECTURE/PROGRESS exist, missing OpenAPI/Terraform

---

### ─── INTELLIGENCE LAYERS ───

| Layer | Table | Status |
|-------|-------|--------|
| Behavioral Scoring | user_scores | 🔴 Missing |
| Relationship Graph | user_connections | 🔴 Missing |
| Preference Engine | user_preferences | 🔴 Missing |
| Fraud Risk Scoring | fraud_signals | 🔴 Missing |
| Recommendation Index | recommendation_cache | 🔴 Missing |

---

### ─── MONETIZATION LEVERS ───

| Lever | Impact | Status |
|-------|--------|--------|
| FX Spread | 0.5-2% per cross-border tx | 🔴 Missing |
| Tiered Platform Fees | Scalable revenue | 🔴 Missing |
| Premium Features | Recurring MRR | 🔴 Missing |
| Data Insights | High-margin B2B | 🔴 Missing |
| Affiliate Network | Performance marketing | 🔴 Missing |
| White-Label SaaS | Enterprise contracts | 🔴 Missing |

---

### ─── DESIGN SYSTEM (LOCKED — Conv #38) ───

#### Colors
- Primary: #6FB81A (Autopro Green — Brand Identity)
- Primary Dark: #5A9415
- Primary Light: rgba(111,184,26,0.15)
- Secondary: #FF9900 (Amazon Orange — Urgency)
- Success: #52C41A
- Error: #FF4D4F
- Warning: #FAAD14
- Info: #3B82F6

#### Day Mode (Default)
- BG Primary: #FFFFFF
- BG Secondary: #F5F5F5
- BG Tertiary: #FAFAFA
- Text Primary: #1A1A1A
- Text Secondary: #666666
- Text Tertiary: #999999
- Border Light: #E8E8E8

#### Night Mode (.dark class)
- BG Primary: #0B0E11
- BG Secondary: #1E293B
- Text Primary: #F1F5F9

#### Shadows (4 Material Design Levels)
- Level 0: none
- Level 1: 0 2px 4px rgba(0,0,0,0.08)
- Level 2: 0 4px 8px rgba(0,0,0,0.12)
- Level 3: 0 8px 16px rgba(0,0,0,0.14)

#### Spacing (8px Grid): 8 / 16 / 24 / 32 / 48 / 64px
#### Typography: 12 / 14 / 16 / 20 / 24 / 32 / 40px — Weights: 400/500/600/700
#### Border Radius: 4 / 8 / 12 / 16 / 9999px
#### Transitions: 150ms / 300ms / 500ms ease-out
#### Z-Index: Dropdown 100 / Sticky 200 / Modal 300 / Tooltip 400 / Toast 500

#### NOTE: Day mode DEFAULT. Night mode available via settingsStore toggle. Green #6FB81A primary in BOTH modes.

---

### ─── UX COMPONENTS TO BUILD ───

#### Trust & Security UI
| Component | Status | Priority |
|-----------|--------|----------|
| Trust Badge Bar (🔒 ✓ 🛡️ ⚡) | 🔴 Missing | HIGH — next |
| Biometric Auth Modal | 🔴 Missing | MEDIUM |
| Payment Success Celebration | 🔴 Missing | MEDIUM |
| Encryption Indicators on checkout | 🔴 Missing | HIGH |
| Verified Seller badges | 🔴 Missing | MEDIUM |
| Money-back guarantee badge | 🔴 Missing | MEDIUM |

#### Loading & Feedback
| Component | Status | Priority |
|-----------|--------|----------|
| Skeleton loading screens | 🔴 Missing | HIGH |
| Infinite scroll | 🔴 Missing | MEDIUM |
| Pull-to-refresh | 🔴 Missing | MEDIUM |
| Error boundaries | 🔴 Missing | HIGH |
| Ripple effect on buttons | 🔴 Missing | LOW |

#### Mobile-Specific
| Component | Status | Priority |
|-----------|--------|----------|
| Bottom sheet modal | 🔴 Missing | MEDIUM |
| Swipe actions on cards | 🔴 Missing | MEDIUM |
| PWA install prompt | 🔴 Missing | HIGH |
| Thumb-friendly bottom nav | 🟢 Exists | — |
| Sticky CTA bar on detail pages | 🔴 Missing | HIGH |

---

### ─── WEBSITE SKELETON ───

| Section | Status |
|---------|--------|
| Header (sticky, logo, search, cart, login) | 🟢 Exists |
| Hero + Search | 🟡 Rebuilding now |
| Trust Bar | 🔴 Next quick win |
| Content Grid | 🟡 Planned |
| Product Detail (tabbed) | 🟡 Planned |
| Checkout (4-step + trust) | 🟡 Planned |
| Footer | 🟡 Planned |

---

### ─── CRITICAL CROSS-CUTTING REQUIREMENTS ───

| # | Requirement | Status | Phase |
|---|-------------|--------|-------|
| 1 | Core Web Vitals (LCP <2.5s) | 🟡 Not measured | 2 |
| 2 | WCAG 2.2 AA | 🟡 Partial | 2 |
| 3 | i18n/l10n (Arabic/French/English) | 🟡 Partial | 3 |
| 4 | Error Boundaries | 🔴 Missing | 2 |
| 5 | Privacy Analytics (Plausible) | 🔴 Missing | 3 |
| 6 | SEO & Structured Data | 🔴 Missing | 3 |
| 7 | Security Headers (CSP/HSTS) | 🔴 Missing | 4 |
| 8 | State Management | 🟢 8 Zustand stores | ✅ Done |
| 9 | API Rate Limiting | 🔴 Missing | 4 |
| 10 | Feature Flags table | 🔴 Missing | 2 |
| 11 | Webhook Signing (HMAC) | 🔴 Missing | 4 |
| 12 | Idempotency Keys on payments | 🔴 Missing | 3 |
| 13 | Data Export API (GDPR) | 🔴 Missing | 5 |

---

### ─── DATABASE ARCHITECTURE ───

#### Core Identity: core_users_global, users_{region}_vault, user_profiles_modular, user_auth, user_credentials, token_registry
#### Vehicle System: vehicles, vehicle_history, vehicle_garage, vehicle_specifications
#### Product & Compatibility: products, product_compatibility, product_categories, product_media
#### Business & Operations: business_profiles, staff_members, orders, invoices, payments, reviews
#### Consent & Compliance: consent_cross_border, consent_audit_log, consent_rules, user_consents, audit_logs, system_health
#### Wallet & Payments: universal_wallet_ledger, wallet_ledger_entries, payment_requests_unified, payment_method_registry, fee_rules, revenue_ledger
#### Intelligence: user_scores, user_connections, user_preferences, fraud_signals, recommendation_cache
#### Growth: affiliate_links, loyalty_points, notifications

Status: Supabase connected (8 products + 6 services + 9 reviews live). Most tables 🟡 planned, 🔴 not created yet.

---

### ─── TRUST UX RULES (Mandatory on All Payment Screens) ───

1. Always show wallet/account branding during checkout
2. Use biometric auth prompts where supported
3. Display clear transaction confirmations with timestamps + receipt IDs
4. Add microcopy: "Encrypted • Verified • Reversible within 24h"
5. Use consistent spacing, high-contrast buttons, loading skeletons

---

### ─── TOOLS REFERENCE ───

| Category | Tools |
|----------|-------|
| Auth | Supabase Auth, Clerk.dev |
| Database | Supabase (PostgreSQL) |
| Automation | Make.com, Activepieces |
| Payments | Stripe Connect |
| Events | Upstash Redis, Supabase Realtime |
| Analytics | Plausible, Umami |
| Icons | Lucide React |
| Monitoring | UptimeRobot |
| CDN | Cloudflare |

---

## ═══════════════════════════════════════════
## D — CURRENT STATUS & NEXT STEP
## ═══════════════════════════════════════════

### Current Phase: PHASE 2 — Frontend Foundation
### Current Task: Rebuild Homepage with audit quick wins
### Audit Progress: 38 / 38 files done ✅ COMPLETE
### Build Status: ✅ In progress

### Implementation Priority

#### ✅ DONE — Foundation
1. Design token system (globals.css)
2. 8 Zustand stores (all persisted)
3. Supabase client connection
4. ARCHITECTURE.md created

#### 🔨 BUILDING NOW — Quick Wins
5. "Find parts for my car" CTA on homepage
6. Trust badge bar component (🔒 ✓ 🛡️ ⚡)
7. Prominent search bar on homepage
8. Proper light theme styling on homepage

#### 🔜 NEXT — Core Components
9. Skeleton loading screens
10. Day/Night mode toggle UI
11. Product card component
12. Service card component
13. RTL layout system (Arabic)
14. Translation Master Table structure
15. Product data model expansion (SKU, part_number, oem_number)

#### 🔜 Phase 2 Extended
16. Cart page rebuild
17. Garage page rebuild
18. Search/Explore page
19. Services page
20. Login page

#### 🔜 Phase 3 — Payments + Automation
21. Real Supabase data fetching
22. Compatibility data model
23. Match scoring display
24. Order checkout flow

---

## ═══════════════════════════════════════════
## COMPLETED LOG (Append Only — Never Delete)
## ═══════════════════════════════════════════

### MASTER_PLAN.md v1.0 Created
- Analyzed 4 master lists (database, pillars, UX/security, AI commands)
- Unified into 6 pillars with full feature registry
- Mapped all ~160+ features with status tracking
- Locked design system, constraints, methodology
- Created single source of truth

### Conv #38 — 38-File Audit COMPLETE
- Audited all 38 legacy docs file-by-file
- Extracted 750+ items into 6 pillars
- Locked 60+ architecture decisions
- Resolved 15 conflicts (color, theme, tech stack, grid)
- Archived 8 obsolete files
- Confirmed 25+ owner-approved decisions
- Updated all 5 memory files
- Fixed AI_CONTEXT.md security (removed exposed key)

### Conv #38 — Phase 2 Frontend Foundation
- ✅ Design tokens implemented (globals.css)
- ✅ Light theme default (#6FB81A green)
- ✅ Night mode available via .dark class
- ✅ 8 Zustand stores created (all persisted)
- ✅ Supabase client connected
- ✅ ARCHITECTURE.md created
- ✅ Package.json updated (zustand + lucide-react)
- 🟡 Homepage rebuild in progress
