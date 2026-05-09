# 🗺️ AUTOPRO MASTER PLAN
# Single Source of Truth — Never Get Lost Again
# Last Updated: 2025-01-XX (update date each time)
# Version: 1.0

---

## 🔖 HOW TO USE THIS FILE
- **AI reads this file** at the start of every conversation
- **Human updates** the "CURRENT STATUS" and "NEXT STEP" sections after each session
- **AI updates** the "COMPLETED LOG" and feature statuses after each build
- **Never delete history** — only append to the COMPLETED LOG
- This file contains EVERYTHING from the 4 master lists — no need to re-paste them

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
- No laptop — phone-only development via Arena
- Limited budget — free tier only, no paid APIs
- No coding skills — plain English instructions only
- 30+ legacy .md files being audited file-by-file
- Reusable code — clone-ready for future projects
- Save every second — Zustand persist mandatory
- Light theme ONLY — NEVER dark mode in Autopro
- No backend connection without explicit permission
- Read all memory files before writing any code
- Don't rebuild what exists — extend it
- Update ARCHITECTURE.md + PROGRESS.md after every change
- Always run build_project at the end

### Tech Stack
- React + Vite + Tailwind CSS v4
- Zustand (state management, all stores persisted to localStorage)
- react-router-dom (routing)
- lucide-react (icons)
- NO backend wired yet
- Supabase project EXISTS at ornbjhcsgxjvloeepojj.supabase.co
  - 8 products + 6 services + 9 reviews in real tables
  - Vite app uses mock data for now

### Demo Login
- Email: alex@autopro.demo
- Password: demo1234

### Website
- https://019e0a42-c9fa-7719-8602-037f5abb90c0.arena.site/

---

## ═══════════════════════════════════════════
## B — WHAT WE DID SO FAR
## ═══════════════════════════════════════════

### 7 Zustand Stores (All Persisted)
1. cartStore — cart items
2. authStore — login (mock + mock Google)
3. garageStore — saved vehicles (VIN, fuel, transmission, mileage)
4. ordersStore — orders + bookings
5. settingsStore — currency, country, language
6. paymentStore — saved cards/COD/bank/mobile-money + addresses
7. toastStore — ephemeral notifications

### 16 Working Pages
1. Home
2. Explore (search + filter)
3. Product Detail
4. Cart
5. Checkout (auto-fill from saved payment + address)
6. Services
7. Booking (date/time picker)
8. Messages List
9. Chat
10. Profile
11. Garage (full CRUD)
12. Orders
13. Account Settings (5 sections)
14. Login (Google + email)
15. Signup
16. PlaceholderPage

### Data Model (Current)
- 44 countries with flags, dial codes, currency
- 30 currencies with USD exchange rates
- User: id, globalUserId, riskScore, roles[], country, currency, language,
  vehiclePrivacyDefault, twoFactorEnabled
- Vehicle: full spec (VIN, color, mileage, fuel, transmission, last service)
- PaymentMethod: card | cod | bank_transfer | mobile_money | wallet
- Address: full international with country selector

### Recently Fixed (Conv #37)
- Toast: small solid green "Added 🛒" pill, no product details
- Checkout: auto-fills saved payment method + address (one-tap)
- Floating cart bar separate from toast (persistent island)

### Audit Progress
- 4 / 38 legacy docs audited
- ✅ MASTER_PROJECT_CONTEXT.md — confirmed ecosystem scope
- ✅ MVP_SCOPE.md — locked Algeria+Nigeria, 5 roles, COD, video Day 1
- ✅ CURRENT_STATUS.md — discovered live Supabase backend with real data
- ✅ DATA_MODEL_NOTES.md — expanded User model + privacy + risk score
- Next batch: AI_CONTEXT.md, SYSTEMS_INDEX.md, PLATFORM_BLUEPRINT.md,
  PROJECT_PLAN.md, USER_ROLES_AND_FLOWS.md

---

## ═══════════════════════════════════════════
## C — THE FULL PLAN (All 4 Lists Unified)
## ═══════════════════════════════════════════

### ─── THE 6 PILLARS (Build in This Order) ───

#### 🥇 PILLAR 1: Universal Identity & Data Graph Core
"The Brain & Memory" — Non-Negotiable Foundation

Purpose: Single source of truth for WHO users are and WHAT data they own
across all projects.

Core Tables:
- core_users_global (user_id UUID, email_hash, phone_hash, region_tag,
  passkey_enabled, status, created_at, last_login, metadata JSONB)
- users_{region}_vault (encrypted regional storage per GDPR/PIPL)
- user_profiles_modular (profile_id, user_id, project_scope, profile_type,
  region_origin, profile_data JSONB, sensitivity_level, consent_required)
- consent_cross_border (consent_id, user_id, source_region, target_region,
  data_category, transfer_basis, consent_granted, expires_at, audit_hash)
- user_events_stream (event_id, user_id, event_type, aggregate_id,
  payload JSONB, region_origin, schema_version, timestamp — APPEND ONLY)
- consent_audit_log (log_id, user_id, requesting_project, data_requested,
  consent_status, ip_address, device_fingerprint, timestamp)

Key Features:
- Passkey-first auth (FIDO2)
- Row-Level Security (RLS) per region/project
- Tokenization for sensitive fields (cards, VINs, IDs)
- Auto-expiring consents per regional law
- Immutable audit_hash on all mutable records

Tools: Supabase Auth + DB + RLS, Upstash Redis (event bus)
Success Metric: One user registers ONCE, logs in EVERYWHERE

Status: 🟡 PARTIAL
- globalUserId exists in authStore ✅
- riskScore exists ✅
- 44 countries + 30 currencies ✅
- Missing: consent engine, event stream, tokenization, regional vaults,
  passkeys, RLS policies

#### 🥈 PILLAR 2: Reusable Project Template Engine
"The Blueprint Factory" — Build Once, Deploy Everywhere

Purpose: Standardized structure for every new project so they plug into
Pillar 1 seamlessly.

Core Components:
- _project_template JSON schema (required fields, optional modules, UI library)
- project_registry (live list of all deployed projects + status)
- clone_workflow (one-click duplicate project automation)
- feature_flags table (enable/disable features without redeploy)

Key Features:
- API-first design: every template auto-generates REST/GraphQL
- Mobile-optimized UI specs (thumb-friendly, PWA-ready)
- Built-in consent prompts per data type requested
- Zero-config deployment to Vercel/Netlify

Tools: WeWeb/FlutterFlow, GitHub Mobile, Vercel/Netlify
Success Metric: New project live in <1 hour, fully integrated

Status: 🟡 PARTIAL
- Project is clone-ready by design ✅
- 16 pages built ✅
- Missing: template JSON, project registry, clone workflow, feature flags

#### 🥉 PILLAR 3: Unified Payment & Wallet Orchestrator
"The Money Layer" — Secure, Global, Compliant

Purpose: Single interface for ALL payment methods across ALL regions.

Core Tables:
- payment_requests_unified (request_id, user_id, amount, currency ISO 4217,
  region_target, preferred_methods JSONB, iso20022_payload JSONB,
  routed_to, status, error_code, audit_hash)
- wallet_ledger_entries (entry_id, transaction_id, account_id,
  direction [debit/credit], amount, currency, timestamp, audit_hash)
- universal_wallet_ledger (transaction_id, user_id, project_source, type,
  amount, currency, status, meta JSONB, audit_hash, timestamp)
- payment_method_registry (supported methods per region)
- fee_rules (configurable per region/project)
- revenue_ledger (FX spread, platform fees, affiliate commissions)

Key Features:
- Payment abstraction: client sends {amount, currency, methods} → router
  selects optimal processor
- Double-entry ledger (Binance-grade)
- Cold/hot wallet split with auto-rebalance
- Multi-currency FX spread engine (revenue lever)
- Tokenization: raw card/VIN data never touches servers
- Cross-border compliance: auto-applies SCC/PIPL rules
- Idempotency keys prevent duplicate charges
- Trust UI: biometric confirmation, animated success, reversible window

Tools: Apideck/Stripe Connect, Activepieces/Make.com, Cloudflare Workers
Success Metric: User pays with ANY method, ANY region, ONE flow

Status: 🟡 PARTIAL
- 5 payment methods in paymentStore ✅ (card, COD, bank, mobile-money, wallet)
- Checkout with auto-fill ✅
- Missing: ISO 20022 routing, double-entry ledger, FX engine, tokenization,
  cold/hot split, fee rules, revenue ledger

#### 🏅 PILLAR 4: Event-Driven Automation & Sync Layer
"The Nervous System" — Data Flows Automatically

Purpose: When data changes in one project, relevant updates propagate
to others WITHOUT manual intervention.

Core Components:
- event_bus (Upstash Redis or Supabase Realtime for pub/sub)
- webhook_registry (catalog of all endpoints + retry policy + HMAC signing)
- sync_rules (which events trigger which actions where)
- dead_letter_queue (failed syncs for manual review)

Key Features:
- Visual workflow builder (no-code) for non-devs
- Exponential backoff + retry logic
- Idempotent handlers: same event processed once ever
- Audit trail: before/after snapshots for every sync
- Pause/resume: temporarily halt syncs for maintenance

Tools: Activepieces, Make.com/Zapier, Supabase Realtime, Upstash Redis
Success Metric: Car added in Garage → auto-appears in Car Sales (if consent)

Status: 🔴 MISSING
- No webhook registry
- No dead letter queue
- No event bus
- No cross-project sync

#### 🎖️ PILLAR 5: Compliance & Security Orchestration
"The Guardian" — Legal, Ethical, Trustworthy

Purpose: Automate GDPR/PIPL/CCPA compliance so you scale globally safely.

Core Components:
- consent_engine (dynamic rules per region/data-type)
- data_retention_scheduler (auto-delete per legal requirements)
- audit_log_aggregator (unified view of all user actions)
- breach_detection (anomaly alerts for suspicious access)

Key Features:
- Region-aware consent prompts (PIPL wording for CN, etc.)
- One-click data export/delete per GDPR right to be forgotten
- Automated DPIA workflow
- Encryption key rotation scheduler (quarterly)
- Third-party vendor compliance tracker

Security Layers:
- Zero-trust: every API call validates JWT + region_tag + consent
- Field-level encryption via pgcrypto
- Short-lived tokens (15 min) + refresh rotation
- Anomaly detection: unusual patterns trigger re-auth
- Secret management: never store API keys in frontend
- Immutable audit logs with SHA-256 audit_hash
- Breach response playbook: revoke sessions, force reset, notify users

Data Retention Rules:
| Data Type | Retention | Action |
|-----------|-----------|--------|
| Search logs | 30 days | Auto-delete |
| Activity logs | 90 days | Archive |
| Orders/transactions | 5 years | Archive |
| Vehicle history | Permanent | Never delete |
| Reviews | Permanent | Never delete |
| Audit logs | Permanent | Never delete |
| Temp media | 7 days | Delete |

Tools: Ory Keto, OneTrust, HashiCorp Vault, custom Glide admin
Success Metric: Pass GDPR/PIPL audit with zero manual evidence gathering

Status: 🟡 PARTIAL
- riskScore exists ✅
- Missing: consent engine, retention scheduler, breach detection,
  encryption, anomaly detection, audit immutability

#### ✨ PILLAR 6: Developer Handoff & Extensibility Layer
"The Bridge" — No-Code Today, Code-Ready Tomorrow

Purpose: When you hire developers, they extend without rewriting.

Core Components:
- Infrastructure-as-code (Terraform/Pulumi scripts)
- API specifications (OpenAPI 3.1 for every endpoint)
- Migration guides (step-by-step no-code → code transition)
- Testing suite (Postman collection + region-specific test data)
- Monitoring templates (Prometheus/Grafana dashboards)

Key Features:
- Clear labeling: "NO-CODE CONFIG" vs "CODE-EXTENSIBLE" folders
- Versioned schemas: every change tagged (v1.0, v1.1)
- Example code snippets alongside no-code workflows
- Developer onboarded in 1 day

Tools: GitHub Mobile, Stoplight Studio, Postman Mobile
Success Metric: Developer extends system without breaking no-code workflows

Status: 🟡 PARTIAL
- ARCHITECTURE.md exists ✅
- PROGRESS.md exists ✅
- START_HERE.md exists ✅
- Missing: OpenAPI specs, Terraform, Postman collection, migration guides

---

### ─── INTELLIGENCE LAYERS (Add to Pillar 1) ───

These make the database "smart" — not just storage:

| Layer | Table | Purpose |
|-------|-------|---------|
| Behavioral Scoring | user_scores | Predict user value/churn |
| Relationship Graph | user_connections | Map user connections across projects |
| Preference Engine | user_preferences | Auto-personalize UX per user |
| Fraud Risk Scoring | fraud_signals | Real-time threat detection |
| Recommendation Index | recommendation_cache | "Users like you also..." |

Status: 🔴 ALL MISSING

---

### ─── MONETIZATION LEVERS (Built Into Architecture) ───

| Lever | How | Impact |
|-------|-----|--------|
| FX Spread | Auto-convert currencies, log spread as revenue | 0.5-2% per cross-border tx |
| Tiered Platform Fees | Configurable per project/region | Scalable revenue |
| Premium Features | Gate behind subscription (instant settlement, analytics) | Recurring MRR |
| Data Insights | Anonymized aggregate trends (with consent) | High-margin B2B |
| Affiliate Network | Built-in tracking + auto-commission via wallet | Performance marketing |
| White-Label SaaS | Third parties launch on your infra | Enterprise contracts |

Status: 🔴 ALL MISSING — These get built into Phase 3-5

---

### ─── DESIGN SYSTEM (Locked) ───

#### Colors
- Primary: #1677FF (Alipay Blue — Trust)
- Primary Dark: #0958D9
- Primary Light: #4096FF
- Secondary: #FF9900 (Amazon Orange — Urgency)
- Success: #52C41A
- Error: #FF4D4F
- Warning: #FAAD14
- BG Primary: #FFFFFF
- BG Secondary: #F5F5F5
- BG Tertiary: #FAFAFA
- Text Primary: #1A1A1A
- Text Secondary: #666666
- Text Tertiary: #999999
- Border Light: #E8E8E8
- Border Medium: #D9D9D9

#### Shadows (5 Material Design Levels)
- Level 0: none
- Level 1: 0 2px 4px rgba(0,0,0,0.08)
- Level 2: 0 4px 8px rgba(0,0,0,0.12)
- Level 3: 0 8px 16px rgba(0,0,0,0.14)
- Level 4: 0 12px 24px rgba(0,0,0,0.16)

#### Spacing (8px Grid)
- 8px / 16px / 24px / 32px / 48px / 64px

#### Typography Scale
- XS: 12px / SM: 14px / Base: 16px / LG: 20px / XL: 24px
- 2XL: 32px / 3XL: 40px
- Weights: 400 (regular) / 500 (medium) / 600 (semibold) / 700 (bold)
- Line height: 1.5 body, 1.2 headings

#### Border Radius
- SM: 4px / MD: 8px / LG: 12px / XL: 16px / Full: 9999px

#### Transitions
- Fast: 150ms ease-out
- Base: 300ms ease-out
- Slow: 500ms ease-out

#### Z-Index Scale
- Dropdown: 100 / Sticky: 200 / Modal: 300 / Tooltip: 400 / Toast: 500

#### NOTE: NO DARK MODE in Autopro. Design tokens saved for future projects.

---

### ─── UX COMPONENTS TO BUILD ───

#### Trust & Security UI
| Component | Status | Priority |
|-----------|--------|----------|
| Trust Badge Bar (🔒 ✓ 🛡️ ⚡) | 🔴 Missing | HIGH |
| Biometric Auth Modal (pulse animation) | 🔴 Missing | MEDIUM |
| Payment Success Celebration (checkmark + confetti) | 🔴 Missing | HIGH |
| Encryption Indicators on checkout | 🔴 Missing | HIGH |
| Verified Seller badges | 🔴 Missing | MEDIUM |
| Money-back guarantee badge | 🔴 Missing | MEDIUM |
| Secure checkout step indicator | 🔴 Missing | HIGH |

#### Loading & Feedback
| Component | Status | Priority |
|-----------|--------|----------|
| Skeleton loading screens | 🔴 Missing | HIGH |
| Infinite scroll with auto-load | 🔴 Missing | MEDIUM |
| Pull-to-refresh | 🔴 Missing | MEDIUM |
| Error boundaries (friendly UI + retry) | 🔴 Missing | HIGH |
| Empty states (illustrated) | 🔴 Missing | MEDIUM |
| Ripple effect on buttons | 🔴 Missing | LOW |

#### Mobile-Specific
| Component | Status | Priority |
|-----------|--------|----------|
| Bottom sheet modal (slide-up, drag dismiss) | 🔴 Missing | HIGH |
| Swipe actions on cards | 🔴 Missing | MEDIUM |
| PWA install prompt | 🔴 Missing | HIGH |
| Safe area padding (notch support) | 🔴 Missing | MEDIUM |
| Thumb-friendly bottom nav | 🟢 Exists | — |
| Sticky CTA bar on detail pages | 🔴 Missing | HIGH |

#### Social & Engagement
| Component | Status | Priority |
|-----------|--------|----------|
| Social proof counters ("X viewing") | 🔴 Missing | MEDIUM |
| Rating stars with half-stars | 🔴 Missing | MEDIUM |
| Like/heart animation | 🔴 Missing | LOW |
| Stories/status rings | 🔴 Missing | LOW |

---

### ─── WEBSITE SKELETON STRUCTURE ───

| Section | Component | Status |
|---------|-----------|--------|
| Header | Sticky 56px, logo, search, wallet, avatar | 🟢 Exists |
| Hero | Auto-rotating promo + quick action tiles | 🟡 Partial |
| Trust Bar | 🔒 Encrypted ✓ Verified 🛡️ Protected ⚡ Instant | 🔴 Missing |
| Search | Collapsible slide-up modal with filters | 🟡 Partial |
| Content Grid | Infinite scroll + skeleton loading | 🟡 Partial |
| Product Detail | Tabbed: overview, specs, history, seller, reviews | 🟡 Partial |
| Checkout | 4-step progress + escrow notice + trust bar | 🟡 Partial |
| Footer | Collapsible, trust logos, PWA prompt | 🟡 Partial |

---

### ─── CRITICAL CROSS-CUTTING REQUIREMENTS ───

| # | Requirement | Status | Phase |
|---|-------------|--------|-------|
| 1 | Core Web Vitals (LCP <2.5s, CLS <0.1, INP <200ms) | 🟡 Not measured | 2 |
| 2 | WCAG 2.2 AA (contrast ≥4.5:1, keyboard, aria) | 🟡 Partial | 2 |
| 3 | i18n/l10n (language switching, RTL, localized dates) | 🟡 Partial | 3 |
| 4 | Error Boundaries (friendly UI, retry, offline banner) | 🔴 Missing | 2 |
| 5 | Privacy Analytics (Plausible/Umami, no cookies) | 🔴 Missing | 3 |
| 6 | SEO & Structured Data (JSON-LD, Open Graph, sitemap) | 🔴 Missing | 3 |
| 7 | Security Headers (CSP, HSTS, X-Frame-Options) | 🔴 Missing | 4 |
| 8 | State Management | 🟢 7 Zustand stores | Done |
| 9 | API Rate Limiting & Caching | 🔴 Missing | 4 |
| 10 | Schema Versioning (version field on all tables) | 🔴 Missing | 1 |
| 11 | Health Checks (/health endpoint) | 🔴 Missing | 4 |
| 12 | Feature Flags table | 🔴 Missing | 2 |
| 13 | Webhook Signing (HMAC on all outgoing) | 🔴 Missing | 4 |
| 14 | Idempotency Keys on all payments | 🔴 Missing | 3 |
| 15 | Data Export API (GDPR right to export) | 🔴 Missing | 5 |

---

### ─── DATABASE ARCHITECTURE (Full Schema Map) ───

#### Core Identity
| Table | Purpose | Status |
|-------|---------|--------|
| core_users_global | Lightweight global index | 🔴 Missing |
| users_{region}_vault | Encrypted regional storage | 🔴 Missing |
| user_profiles_modular | JSONB flex per project scope | 🔴 Missing |
| user_auth | Passwords, 2FA, recovery codes | 🔴 Missing |
| user_credentials | FIDO2/passkey public keys | 🔴 Missing |
| token_registry | Vaultless tokenization | 🔴 Missing |

#### Vehicle System
| Table | Purpose | Status |
|-------|---------|--------|
| vehicles | Master vehicle records | 🟡 Mock data |
| vehicle_history | Immutable service/parts log | 🔴 Missing |
| vehicle_garage | User ↔ vehicle links + privacy | 🟡 Zustand only |
| vehicle_specifications | Detailed tech data | 🔴 Missing |

#### Product & Compatibility
| Table | Purpose | Status |
|-------|---------|--------|
| products | Master product table | 🟡 Mock + 8 in Supabase |
| product_compatibility | Product ↔ vehicle matching | 🔴 Missing |
| product_categories | Hierarchical categories | 🔴 Missing |
| product_media | Images, videos, documents | 🔴 Missing |

#### Business & Operations
| Table | Purpose | Status |
|-------|---------|--------|
| business_profiles | Supplier/service/fleet accounts | 🔴 Missing |
| staff_members | Platform and business staff | 🔴 Missing |
| orders | All order types | 🟡 Zustand only |
| invoices | Billing records | 🔴 Missing |
| payments | Payment transactions | 🔴 Missing |
| reviews | Reviews with proof linking | 🟡 Mock + 9 in Supabase |

#### Consent & Compliance
| Table | Purpose | Status |
|-------|---------|--------|
| consent_cross_border | Cross-region data sharing | 🔴 Missing |
| consent_audit_log | Who requested what data when | 🔴 Missing |
| consent_rules | Region-aware dynamic rules | 🔴 Missing |
| user_consents | User grants per rule | 🔴 Missing |
| audit_logs | All important system actions | 🔴 Missing |
| system_health | Background job monitoring | 🔴 Missing |

#### Wallet & Payments
| Table | Purpose | Status |
|-------|---------|--------|
| universal_wallet_ledger | Cross-project transactions | 🔴 Missing |
| wallet_ledger_entries | Double-entry debit/credit | 🔴 Missing |
| payment_requests_unified | ISO 20022 routing | 🔴 Missing |
| payment_method_registry | Methods per region | 🔴 Missing |
| fee_rules | Configurable fees | 🔴 Missing |
| revenue_ledger | FX spread, platform fees | 🔴 Missing |

#### Intelligence
| Table | Purpose | Status |
|-------|---------|--------|
| user_scores | Behavioral scoring | 🔴 Missing |
| user_connections | Relationship graph | 🔴 Missing |
| user_preferences | Per-project personalization | 🔴 Missing |
| fraud_signals | Real-time risk events | 🔴 Missing |
| recommendation_cache | Pre-computed suggestions | 🔴 Missing |

#### Growth & Revenue
| Table | Purpose | Status |
|-------|---------|--------|
| affiliate_links | Tracking + commissions | 🔴 Missing |
| loyalty_points | User rewards | 🔴 Missing |
| notifications | System + user notifications | 🔴 Missing |

---

### ─── TRUST UX RULES (Mandatory on All Payment Screens) ───

1. Always show wallet/account branding during checkout
2. Use biometric auth prompts (Face ID/fingerprint) where supported
3. Display clear transaction confirmations with timestamps + receipt IDs
4. Add microcopy: "Encrypted • Verified • Reversible within 24h"
5. Use consistent spacing, high-contrast buttons, and loading skeletons

---

### ─── AI COMMAND FORMULA ───

Always use this structure with AI:
[ROLE] + [CONTEXT] + [TASK] + [CONSTRAINTS] + [OUTPUT FORMAT] + [VALIDATION]

Constraints to always include:
- Mobile-only development (phone browser)
- Free tier tools only
- No paid APIs
- GDPR/PIPL compliant by design
- Light theme only
- Zustand persisted stores
- Clone-ready for future projects
- Dev-handoff compatible

---

### ─── PROFESSIONAL TERMINOLOGY (Use with AI) ───

| Category | Terms |
|----------|-------|
| Identity | Federated Identity, Universal User Graph, Passkey-First, OIDC/OAuth2, FIDO2 |
| Data | CQRS, Event Sourcing, JSONB Flex, Geo-Partitioned, Row-Level Security |
| Compliance | GDPR-by-Design, PIPL-Compliant, SCC Flows, Data Residency, Consent Orchestration |
| Payments | ISO 20022, Payment Abstraction, Tokenization Vault, Multi-Rail, Idempotency Keys |
| Automation | Event-Driven Sync, Webhook Registry, Dead Letter Queue, Idempotent Workflows |
| Scale | Micro-Service Ready, API-First, Stateless, Horizontal Scaling |

---

### ─── MOBILE-ONLY WORKFLOW PIPELINE ───
