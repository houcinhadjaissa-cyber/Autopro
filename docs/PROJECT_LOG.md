# Autopro Project Log

This file keeps track of the Autopro project progress.

## Project name

Autopro

## Project goal

Build a complete multi-layer e-commerce website for selling car parts online.

The website will eventually include:

- Customer storefront
- Product catalog
- Vehicle-based part search
- Shopping cart
- Checkout
- User accounts
- Admin dashboard
- Inventory management
- Order management
- Backend API
- Database

## Current development stage

We are at the beginning of the project.

We are setting up the GitHub repository first so progress is saved safely.

## Completed steps

- Created GitHub repository named `Autopro`
- Created initial `README.md`
- Started project documentation

## Current step

Create project documentation and basic folder structure before writing code.

## Important rule

We will work step by step.

Every important change should be saved with a GitHub commit so the project is not lost.

## Beginner workflow

Because the project owner is new to coding, we will:

- Use simple steps
- Avoid unnecessary command line commands at the beginning
- Explain what every file is for
- Commit changes often
- Keep documentation updated

## Planned project structure

The project will likely use this structure:

```txt
Autopro/
  README.md
  docs/
    PROJECT_LOG.md
    PROJECT_PLAN.md
  apps/
    storefront/
    admin/
    api/
  packages/
    shared/
---

## Update: Repository structure corrected

The initial folder structure was created.

A mistake happened where some folders were accidentally nested inside:

```txt
docs/apps/storefront
---

## Update: First design discovery note saved

The first major design discovery note was saved in:

```txt
docs/DESIGN_DISCOVERY.md
---

## Update: Core system files created

Created the main system documentation files:

```txt
docs/SYSTEMS_INDEX.md
docs/SHIPPING_AND_LOGISTICS.md
docs/MONETIZATION_STRATEGY.md
docs/SUPPLIER_PRODUCT_DATA.md
docs/INVOICING_AND_BILLING.md
docs/VEHICLE_ID_AND_HISTORY.md
docs/USER_ROLES_AND_FLOWS.md
---

## Update: Product and service billing requirements added

Added detailed billing requirements to:

```txt
docs/INVOICING_AND_BILLING.md
---

## Update: Context and systems index fixed

Fixed and updated project continuity files:

```txt
docs/SYSTEMS_INDEX.md
docs/AI_CONTEXT.md
docs/CURRENT_STATUS.md
---

## Update: QR confirmation and reusable core system added

Created:

```txt
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
---

## Update: Product and service payment flows added

Added detailed payment flow requirements to:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
---

# Project Log - Payments, Cash Flow, Payouts, and Business Debt Expansion

## Summary

Expanded Autopro financial documentation with detailed rules for online payments, cash payments, partner desk collection, supplier payouts, business debt, negative balances, chargebacks, and staff financial permissions.

## Files Updated

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
docs/AI_CONTEXT.md
docs/CURRENT_STATUS.md
docs/PROJECT_LOG.md
```

---

# Project Log Recovery Entry - Financial Planning Progress Confirmed

## Summary

Confirmed and documented major Autopro financial planning decisions.

This includes online payments, cash payments, partner desk collection, supplier payouts, business debt, negative balances, chargebacks, and staff financial permissions.

## Main File Updated

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Related Context Files

```txt
docs/CREDIT_WALLET_AND_CLIENT_TRUST.md
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
docs/AI_CONTEXT.md
docs/CURRENT_STATUS.md
docs/PROJECT_LOG.md
```

## Confirmed Decisions

- Online payments use authorization before capture where possible.
- Supplier/service provider has 48 hours to confirm before payment capture.
- If confirmation fails, authorization is cancelled.
- Supplier cancellation after confirmation is handled differently for new suppliers and trusted suppliers.
- Trusted suppliers get softer handling for honest rare problems.
- New suppliers get stricter payout and cancellation rules.
- Standard supplier payout trigger is shipping company package handoff confirmation.
- New suppliers can wait until delivery confirmation.
- Risky suppliers can wait until delivery and dispute/return windows are satisfied.
- Partial payout and reserve must be supported.
- Cash payment must support Cash Expected status.
- Cash orders require trust checks.
- Unverified clients cannot place cash orders unless admin allows.
- Shipping companies, suppliers, service providers, pickup desks, warehouses, and partners can collect cash depending on country/admin rules.
- ZR Express-style partner desk engine must support limited access confirmation/payment actions.
- Partner desk access must be limited, secure, logged, revocable, and fraud-resistant.
- Cash refunds can use store credit, cash refund, bank transfer, provider refund, or partner desk refund depending on country and rules.
- International supplier cash-on-delivery must support local cash collection and supplier settlement.
- Client does not see Autopro internal fee breakdown unless legally required.
- Business users see their own fee obligations.
- Admin sees full breakdown.
- Autopro commission-style fees must not surpass 20% as standard maximum.
- Business debt system must be live and visible.
- Trusted businesses can receive payment plans for large debt.
- Negative balances are allowed mainly for trusted/VIP businesses under limits.
- Debt can be deducted from future payouts depending on rules.
- Chargeback responsibility is decided by proof, country law, and payment provider rules.
- Payout/refund/debt movement can be held during disputes.
- Business invoices and statements must be available.
- Staff financial permissions must be role-based and audit logged.

## Next Recommended Work

Continue with:

```txt
Shipping company settlement detailed rules
```

or:

```txt
Refund and return decision matrix
```

Do not repeat already completed payment, cash, payout, debt, negative balance, chargeback, or staff financial permission questions unless the owner asks to revise them.
```

---

# Project Log Recovery Entry - Shipping Settlement Rules Completed

## Summary

Expanded Autopro payment/refund/return documentation with detailed shipping company settlement rules.

## Main File Updated

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Completed Shipping Settlement Decisions

Confirmed and documented:

- Shipping companies have their own business account type.
- Shipping companies do not need full public marketplace profiles by default.
- Shipping companies can have private dashboards.
- Shipping companies can have employees with role-based permissions.
- Shipping employee roles include company admin, regional manager, office/desk worker, driver, warehouse worker, finance employee, support employee, and returns employee.
- Package handoff from supplier to shipping company should be confirmed from both sides where possible.
- QR scan, manual confirmation, shipping scan, photo/video proof, and staff/admin confirmation can be used depending on situation.
- Supplier payout can depend on shipping company handoff confirmation.
- Shipping company responsibility begins after confirmed package handoff.
- Delivery confirmation can use QR, manual confirmation, delivery scan, photo, GPS if legal, signature if required, or pickup desk confirmation.
- COD delivery requires cash collection confirmation before payment flow is closed.
- Shipping company settlement can be immediate, daily, weekly, monthly, contract-based, country-based, or admin-controlled.
- Shipping companies can pay Autopro fees and can receive discounts for extra services or risk.
- Autopro supports the model where shipping/logistics company pays supplier abroad and collects equivalent cash locally.
- Route-specific exchange/pricing rates are confirmed.
- Shipping company IDs and reputation should be reusable in future owner platforms where legally allowed.
- Lost/damaged/late package responsibility is proof-based.
- Warehouse handoffs, relabeling, local carrier assignment, and label printing must be supported.
- Failed delivery attempts require reason selection and optional notes/proof.
- Delivery reschedule rules must be flexible.
- Storage fees can exist where legal.
- Return shipping fee responsibility depends on proof and cause.
- Shipping companies can open disputes.
- Shipping companies have trust/performance scores.
- Shipping companies can receive penalties and rewards.
- Shipping company plans and premium features must be supported.
- Customs/import tracking and fee responsibility must be supported.
- Shipping insurance and claim flow must be supported.
- Future API/integration with shipping systems must be planned from day one.
- Private partner portal must exist for companies without modern software/API.
- Admin/staff controls for shipping settlement must be role-based and audit logged.
- Shipping statement/payment reconciliation must be automated.
- Shipping company client-data access must be limited to delivery needs.
- Shipping company VIP/trusted client lists can exist as paid-plan/premium features where legal.
- Shipping company support must support AI, tickets, direct staff, urgent contact, account manager, and saved support history.

## Next Recommended Work

Continue with:

```txt
Refund and return decision matrix
```

Do not repeat shipping settlement questions unless the owner asks to revise them.
