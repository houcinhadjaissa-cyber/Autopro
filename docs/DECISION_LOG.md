# 🧭 AUTOPRO - DECISION LOG
# Timestamped record of every key decision
# Last Updated: Conv #38 (2025-01-XX)

---

## 📋 HOW TO USE THIS FILE
- Every major decision gets an entry here
- Updated after each conversation
- Reference: MASTER_PLAN.md for full context

---

## ✅ DECISIONS — Foundation (2026-05-05, Confirmed Conv #38)

### Decision: Global ID Format
- What: `auto_{project}_{type}_{ulid}` format for all IDs
- Why: Sortable, shorter than UUID, URL-safe, works across future projects
- Owner Approved: 2026-05-05
- Reference: REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md

### Decision: Multi-Project Isolation (Hybrid Model)
- What: Shared core tables + project-specific tables with `project_id`
- Why: Reusable brain for future projects while keeping data isolated
- Owner Approved: 2026-05-05
- Reference: REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md

### Decision: Algeria/Nigeria Dual Exchange Rates
- What: Bank rate (auto-fetch) + market rate (manual override) per country
- Why: Algeria has official + parallel markets; need flexibility
- Owner Approved: 2026-05-05
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md

### Decision: 7zap-Style Vehicle Garage UI
- What: Exploded diagrams, facelift-aware, category icons, compatibility filtering
- Why: Owner vision for TecDoc-like UX
- Owner Approved: 2026-05-05
- Reference: COMPATIBILITY_ENGINE.md

### Decision: Soft Launch Strategy
- What: Invite-only beta, Algeria+Nigeria, 5-10 trusted partners
- Why: Test core flows with real users before public launch
- Owner Approved: 2026-05-05
- Reference: MVP_SCOPE.md

### Decision: Tech Stack
- What: React + Vite + Tailwind CSS v4 + Zustand + Arena hosting
- Why: Mobile-only development, free tier, phone browser compatible
- Owner Approved: Conv #38
- ⚠️ CORRECTED: Previous log incorrectly said Next.js
- Reference: START_HERE.md

---

## ✅ DECISIONS — Conv #38 Audit (Design System)

### Decision: Primary Color
- What: #6FB81A (Autopro Green) — legally distinct from NVIDIA
- Why: Owner approved, keeps technical power feel
- Owner Approved: Conv #38
- Reference: DESIGN_SYSTEM.md audit

### Decision: Day/Night Mode
- What: Day mode DEFAULT + Night mode USER TOGGLE
- Why: Owner wants both options, green primary in both modes
- Owner Approved: Conv #38
- ⚠️ REPLACES: Previous "light only" rule
- Reference: HOMEPAGE_REQUIREMENTS.md audit

### Decision: 8px Grid System
- What: 8px base grid (not 4px from DESIGN_SYSTEM.md)
- Why: Apple/Google industry standard
- Owner Approved: Conv #38
- Reference: DESIGN_SYSTEM.md audit

### Decision: Typography Fonts
- What: Inter (body) + JetBrains Mono (numbers) + Noto Sans Arabic (RTL)
- Why: Free, open-source, covers all language needs
- Owner Approved: Conv #38
- Reference: DESIGN_SYSTEM.md audit

---

## ✅ DECISIONS — Conv #38 Audit (Compatibility Engine)

### Decision: Match Priority Order
- What: VIN → OEM Number → Technical Attributes → Manual Mapping → Fuzzy
- Why: Follows TecDoc professional matching hierarchy
- Owner Approved: Conv #38
- Reference: COMPATIBILITY_ENGINE.md audit

### Decision: Match Visibility Rules
- What: Below 90% match hidden unless user enables "Show near matches"
- Why: Prevent wrong parts, protect user trust
- Owner Approved: Conv #38
- Reference: COMPATIBILITY_ENGINE.md audit

### Decision: TecDoc Integration Strategy
- What: Data structure TecDoc-compatible, API disabled until licensed
- Why: Zero cost at launch, ready when license acquired
- Owner Approved: Conv #38
- Reference: COMPATIBILITY_ENGINE.md audit

### Decision: Responsibility Matrix
- What: Wrong data=Supplier, wrong vehicle=User, false 100%=Autopro
- Why: Clear liability assignment
- Owner Approved: Conv #38
- Reference: COMPATIBILITY_ENGINE.md audit

### Decision: Same OEM = Single Listing
- What: Multiple suppliers offering same OEM → one listing with Best Choice
- Why: Clean catalog, Best Choice by Trust→Price→Delivery
- Owner Approved: Conv #38
- Reference: TECHNICAL_CATALOG_STRUCTURE.md audit

### Decision: Translation Master Table
- What: Internal product name translation (Arabic/French/English)
- Why: "Filtre à huile" = "Oil Filter" = same DB ID
- Owner Approved: Conv #38
- Reference: TECHNICAL_CATALOG_STRUCTURE.md audit

### Decision: Supplier Mapping Memory
- What: First upload = manual column mapping, saved per supplier_id forever
- Why: All future uploads 100% automated
- Owner Approved: Conv #38
- Reference: TECHNICAL_CATALOG_STRUCTURE.md audit

---

## ✅ DECISIONS — Conv #38 Audit (Vehicle System)

### Decision: Vehicle ID Format
- What: VEH_{country}_{vin_hash_8chars}_{ulid}
- Why: Country routing, VIN privacy, fast queries
- Owner Approved: Conv #38
- Reference: VEHICLE_ID_AND_HISTORY.md audit

### Decision: Vehicle History Immutability
- What: Append-only, original records never deleted, corrections as notes
- Why: Legal, warranty, vehicle value protection
- Owner Approved: Conv #38
- Reference: VEHICLE_ID_AND_HISTORY.md audit

### Decision: Media Storage
- What: Cloudflare R2 primary ($0.015/GB, $0 egress) + Supabase Storage fallback
- Why: Cost-effective, global CDN
- Owner Approved: Conv #38
- Reference: VEHICLE_ID_AND_HISTORY.md audit

### Decision: Vehicle History Privacy (5 Levels)
- What: Owner(full), Provider(read-only+consent), Admin(audited), Fleet(assigned), Public(never raw)
- Why: Privacy protection, consent-based access
- Owner Approved: Conv #38
- Reference: VEHICLE_ID_AND_HISTORY.md audit

---

## ✅ DECISIONS — Conv #38 Audit (Financial System)

### Decision: 6 Balance Types
- What: Pending, Available, Held, Fee, Debt, Negative
- Why: Know where every amount is at every moment
- Owner Approved: Conv #38
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md audit

### Decision: Fee Maximum
- What: 20% standard cap on commission fees
- Why: Fair to businesses, competitive
- Owner Approved: Conv #38
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md audit

### Decision: Online Payment Flow
- What: Authorize → 48h supplier confirmation → Capture
- Why: Prevent capturing before supplier confirms availability
- Owner Approved: Conv #38
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md audit

### Decision: COD Trust Score Tiers
- What: Base 50 + phone(+10) + email(+10) + orders(+5x4) + VIP(+15)
- Why: Risk-based COD access
- Tiers: 0-49(blocked), 50-69(limited+30%deposit), 70-89(medium+10%), 90+(unlimited)
- Owner Approved: Conv #38
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md audit

### Decision: Supplier Payout Tiers
- What: New(delivery+7d, 20% reserve), Trusted(handoff, 5%), VIP(order, 0%), Risky(manual, 50%)
- Why: Risk-based payout timing
- Owner Approved: Conv #38
- Reference: PAYMENTS_REFUNDS_RETURNS_CLEAN.md audit

### Decision: Store Credit
- What: Non-withdrawable digital balance initially
- Why: Safe starting point, e-wallet requires legal review
- Owner Approved: Conv #38
- Reference: CREDIT_WALLET_AND_CLIENT_TRUST.md audit

### Decision: Provider Late Cancellation
- What: Provider pays Autopro fee if they cancel late
- Why: Protects platform revenue from unreliable providers
- Owner Approved: Conv #38
- Reference: INVOICING_AND_BILLING.md audit

---

## ✅ DECISIONS — Conv #38 Audit (Staff & Operations)

### Decision: RBAC + Deny-by-Default
- What: All staff start with zero access, permissions added explicitly
- Why: Security best practice
- Owner Approved: Conv #38
- Reference: STAFF_PERMISSIONS_AND_ROLES.md audit

### Decision: Recall System
- What: Supplier-initiated, covers full cost, formal apology, 50% trust boost
- Why: Protect clients, reward responsible suppliers
- Owner Approved: Conv #38
- Reference: COMPATIBILITY_ENGINE_ADMIN_RULES.md audit

### Decision: Quote Acceptance Rule
- What: Work CANNOT begin without client clicking "Accept" on quote
- Why: Client protection, clear consent
- Owner Approved: Conv #38
- Reference: SERVICE_BOOKING_SYSTEM.md audit

### Decision: Dual Confirmation for Payment Release
- What: Both client + provider confirm before payment released (exceptions for VIP+VIP)
- Why: Prevent disputes, ensure satisfaction
- Owner Approved: Conv #38
- Reference: SERVICE_BOOKING_SYSTEM.md audit

---

## ✅ DECISIONS — Conv #38 Audit (Admin & Platform)

### Decision: Maintenance Mode
- What: One-click, per-country or global
- Why: Handle emergencies without taking entire platform down
- Owner Approved: Conv #38
- Reference: ADMIN_DASHBOARD_REQUIREMENTS.md audit

### Decision: Multi-Project Admin Switcher
- What: Switch between Autopro + future projects from same admin interface
- Why: Single control center for all owner projects
- Owner Approved: Conv #38
- Reference: ADMIN_DASHBOARD_REQUIREMENTS.md audit

### Decision: Israel/Hebrew Exclusion
- What: Removed from all UI elements (country selector, language, phone prefix)
- Why: Owner requirement
- Owner Approved: Conv #38
- Reference: DESIGN_SYSTEM.md audit

---

## 🔄 TEMPLATE FOR FUTURE DECISIONS
### Decision: [Short title]
- What: [What was decided]
- Why: [Reason]
- Owner Approved: [Date/Conv]
- Reference: [File]
