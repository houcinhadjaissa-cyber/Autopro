# Autopro Systems Index

**Last Updated:** 2026-05-06

This file lists all systems, pages, and documentation for the Autopro project.

---

# Live Website

URL: https://autopro-i38e.vercel.app/

---

# Live Pages

| Page | URL | File Path | Status |
|------|-----|-----------|--------|
| Homepage | / | apps/storefront/src/app/page.tsx | LIVE |
| Search/Parts | /search | apps/storefront/src/app/search/page.tsx | LIVE |
| Services | /services | apps/storefront/src/app/services/page.tsx | LIVE |
| My Garage | /garage | apps/storefront/src/app/garage/page.tsx | LIVE |
| Cart | /cart | apps/storefront/src/app/cart/page.tsx | LIVE |
| Login | /login | apps/storefront/src/app/login/page.tsx | LIVE |

---

# Components

| Component | File Path | Used In |
|-----------|-----------|---------|
| Header | apps/storefront/src/app/components/Header.tsx | All pages |

---

# Configuration Files

| File | Path | Purpose |
|------|------|---------|
| package.json | apps/storefront/package.json | Dependencies |
| tailwind.config.ts | apps/storefront/tailwind.config.ts | Styling/Colors |
| tsconfig.json | apps/storefront/tsconfig.json | TypeScript |
| next.config.mjs | apps/storefront/next.config.mjs | Next.js settings |
| postcss.config.mjs | apps/storefront/postcss.config.mjs | PostCSS |
| globals.css | apps/storefront/src/app/globals.css | Global styles |
| layout.tsx | apps/storefront/src/app/layout.tsx | Page wrapper |

---

# Pages To Build Next

| Page | URL | Priority |
|------|-----|----------|
| Product Detail | /part/[id] | HIGH |
| Service Detail | /service/[id] | HIGH |
| Checkout | /checkout | HIGH |
| User Dashboard | /dashboard | MEDIUM |
| Order History | /orders | MEDIUM |
| Order Detail | /order/[id] | MEDIUM |
| Settings | /settings | LOW |
| Help/Support | /help | LOW |

---

# Project Memory Files

These 4 files must be updated after major progress:

| File | Purpose |
|------|---------|
| docs/AI_CONTEXT.md | AI recovery and continuation |
| docs/CURRENT_STATUS.md | Current project state |
| docs/PROJECT_LOG.md | History of all work done |
| docs/SYSTEMS_INDEX.md | Index of all systems and files |

---

# Specification Documents (Completed)

All planning documents in docs/ folder:

## Core Architecture
| File | Status |
|------|--------|
| PLATFORM_BLUEPRINT.md | DONE |
| REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md | DONE |
| DATA_MODEL_NOTES.md | DONE |
| ECOSYSTEM_INTEGRATION_PLAN.md | DONE |

## User Systems
| File | Status |
|------|--------|
| USER_ROLES_AND_FLOWS.md | DONE |
| STAFF_PERMISSIONS_AND_ROLES.md | DONE |
| BUSINESS_PROFILES.md | DONE |

## Commerce Systems
| File | Status |
|------|--------|
| SUPPLIER_PRODUCT_DATA.md | DONE |
| SHIPPING_AND_LOGISTICS.md | DONE |
| PAYMENTS_REFUNDS_RETURNS_CLEAN.md | DONE |
| INVOICING_AND_BILLING.md | DONE |
| MONETIZATION_STRATEGY.md | DONE |
| CREDIT_WALLET_AND_CLIENT_TRUST.md | DONE |

## Technical Systems
| File | Status |
|------|--------|
| COMPATIBILITY_ENGINE.md | DONE |
| COMPATIBILITY_ENGINE_ADMIN_RULES.md | DONE |
| SERVICE_BOOKING_SYSTEM.md | DONE |
| VEHICLE_ID_AND_HISTORY.md | DONE |
| QR_CONFIRMATION_AND_REUSABLE_CORE.md | DONE |
| TECHNICAL_CATALOG_STRUCTURE.md | DONE |

## Business Systems
| File | Status |
|------|--------|
| B2B_FLEET_COMPATIBILITY.md | DONE |

## Launch Planning
| File | Status |
|------|--------|
| MVP_SCOPE.md | DONE |
| ADMIN_DASHBOARD_REQUIREMENTS.md | DONE |
| HOMEPAGE_REQUIREMENTS.md | DONE |
| DESIGN_SYSTEM.md | DONE |
| DESIGN_DISCOVERY.md | DONE |
| WEBSITE_REQUIREMENTS.md | DONE |

## Rules and Decisions
| File | Status |
|------|--------|
| DECISION_RULES.md | DONE |
| DECISION_LOG.md | DONE |
| CONCERNS_AND_SOLUTIONS.md | DONE |
| MASTER_WORKFLOW.md | DONE |

---

# Folder Structure
