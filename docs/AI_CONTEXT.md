# Autopro AI Context

This file is used to help the AI assistant continue the Autopro project if the chat history is lost.

If the conversation is deleted or reset, copy this file and paste it into the AI chat, then ask:

```txt
Continue the Autopro project from this context.
```

---

# Project Name

Autopro

---

# Project Owner Experience Level

The project owner is a complete beginner with coding, GitHub, web development, databases, backend systems, and deployment.

Important workflow rules:

- Explain every step simply.
- Avoid advanced command line commands at the beginning.
- Use GitHub web interface when possible.
- Use small safe steps.
- Commit changes often.
- Keep documentation updated so the project does not get lost.
- Confirm file paths carefully before creating or deleting files.
- Treat confirmed owner requirements as fixed project rules.
- Ask before changing major structure.

---

# Current GitHub Repository

Repository name:

```txt
Autopro
```

GitHub owner:

```txt
houcinhadjaissa-cyber
```

Repository status:

```txt
Private repository
```

---

# Main Platform Vision

Autopro is planned as:

```txt
Automotive social-commerce marketplace
+ dropshipping vehicle parts
+ vehicle-related services marketplace
+ customer profiles
+ business profiles
+ supplier/service provider modules
+ staff permissions
+ vehicle compatibility engine
+ vehicle ID/history system
+ admin monetization dashboard
+ payments/refunds/returns system
```

Autopro is not only a simple e-commerce website.

It is planned as a full automotive platform for:

- Vehicle parts
- Vehicle accessories
- Vehicle-related services
- Service booking
- Supplier profiles
- Service provider profiles
- Hybrid business profiles
- Client garages
- Vehicle history
- B2B/fleet deals
- Shipping/logistics partners
- Payments/refunds/returns
- Admin analytics and monetization

---

# Main User Types

Autopro is planned to support:

1. Guest visitor
2. Client/customer
3. Business account
4. Supplier/seller
5. Service provider
6. Hybrid business
7. Staff member
8. Admin/owner
9. Mechanic/garage/B2B buyer
10. Shipping/logistics company
11. Influencer/media page later

---

# Current Correct Project Structure

The root structure includes:

```txt
Autopro/
  README.md
  apps/
    storefront/
      README.md
    admin/
      README.md
    api/
      README.md
  packages/
    shared/
      README.md
  docs/
    AI_CONTEXT.md
    CURRENT_STATUS.md
    DECISION_RULES.md
    DESIGN_DISCOVERY.md
    INVOICING_AND_BILLING.md
    MONETIZATION_STRATEGY.md
    PAYMENTS_REFUNDS_RETURNS.md
    PLATFORM_BLUEPRINT.md
    PROJECT_LOG.md
    PROJECT_PLAN.md
    SHIPPING_AND_LOGISTICS.md
    SUPPLIER_PRODUCT_DATA.md
    SYSTEMS_INDEX.md
    USER_ROLES_AND_FLOWS.md
    VEHICLE_ID_AND_HISTORY.md
    WEBSITE_REQUIREMENTS.md
```

---

# Completed Documentation Steps

Completed so far:

- Created GitHub repository named `Autopro`
- Created initial `README.md`
- Created `docs/PROJECT_LOG.md`
- Created `docs/PROJECT_PLAN.md`
- Created `docs/AI_CONTEXT.md`
- Created `docs/CURRENT_STATUS.md`
- Created `docs/WEBSITE_REQUIREMENTS.md`
- Created `docs/DESIGN_DISCOVERY.md`
- Created `docs/PLATFORM_BLUEPRINT.md`
- Created `docs/USER_ROLES_AND_FLOWS.md`
- Created `docs/VEHICLE_ID_AND_HISTORY.md`
- Created `docs/SYSTEMS_INDEX.md`
- Created `docs/DECISION_RULES.md`
- Created `docs/SHIPPING_AND_LOGISTICS.md`
- Created `docs/MONETIZATION_STRATEGY.md`
- Created `docs/SUPPLIER_PRODUCT_DATA.md`
- Created `docs/INVOICING_AND_BILLING.md`
- Created `docs/PAYMENTS_REFUNDS_RETURNS.md`

Also completed:

- Removed accidental nested folders previously created inside `docs/apps/storefront`
- Fixed `docs/SYSTEMS_INDEX.md` structure
- Documented user roles first pass
- Documented product purchase billing
- Documented service booking billing
- Documented platform fees and commissions
- Documented cancellation/dispute fee rules
- Documented part arrival tracking
- Documented vehicle ID/history direction

---

# Decision Rules

The project uses:

```txt
docs/DECISION_RULES.md
```

Important confirmed rule:

When the owner gives a clear answer or requirement, it should be treated as a fixed Autopro requirement.

Use strong wording:

- Autopro must
- Autopro will
- The system requires

Avoid weak wording like:

- may eventually
- maybe
- could
- might

Unless the feature is truly optional, legally dependent, API-dependent, third-party dependent, or intentionally planned for a later launch phase.

---

# Day-One Structure Rule

Autopro must be designed with the correct backbone from day one.

This means:

- Architecture must support future expansion.
- Database planning must support future expansion.
- Roles and permissions must support future expansion.
- Billing logic must support future expansion.
- Shipping logic must support future expansion.
- Product data logic must support future expansion.
- Payments/refunds/returns must support future expansion.

Important distinction:

```txt
Day-one structure = full backbone designed correctly from the start.
Day-one launch = features can be released in phases.
```

The first public launch does not need every advanced feature fully built, but the structure must not block the full platform later.

---

# Confirmed Major Systems

Autopro documentation now includes these major systems:

## User Roles and Flows

File:

```txt
docs/USER_ROLES_AND_FLOWS.md
```

Covers:

- Guest visitor
- Client/customer
- Business account
- Supplier/seller
- Service provider
- Hybrid business
- Staff
- Admin/owner
- Mechanic/garage/B2B buyer

## Vehicle ID and History

File:

```txt
docs/VEHICLE_ID_AND_HISTORY.md
```

Covers:

- Internal vehicle ID
- Vehicle garage
- Vehicle maintenance history
- Service history
- Parts replaced
- Diagnostics
- Part arrival tracking
- Installation history
- Future vehicle value/used-car projects
- Media storage direction

## Invoicing and Billing

File:

```txt
docs/INVOICING_AND_BILLING.md
```

Covers:

- Product purchase billing
- Digital invoices
- Receipts
- Order confirmations
- Warranty documents
- Service booking billing
- Examination fees
- Maintenance vs major jobs
- Client confirmations
- Part arrival tracking
- Platform fees and commissions
- Cancellation and dispute fee rules

## Payments, Refunds, and Returns

File:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Covers:

- Online payments
- Cash payments
- Supplier payouts
- Service provider payouts
- Shipping company settlements
- Refunds
- Returns
- Disputes
- Held balances
- Pending balances
- Available balances
- Country-specific payment rules
- Algeria/Nigeria-style cash-heavy payment flows
- International supplier payment flows
- Local delivery/payment collection

## Shipping and Logistics

File:

```txt
docs/SHIPPING_AND_LOGISTICS.md
```

Covers:

- Supplier-controlled shipping
- Platform-controlled shipping
- Shipping company private accounts
- Country-based shipping rules
- Delivery pricing
- Delivery duration
- Pickup/warehouse options
- Tracking
- Shipping dashboards

## Monetization Strategy

File:

```txt
docs/MONETIZATION_STRATEGY.md
```

Covers:

- Free/Silver/Pro plans
- Supplier plans
- Service provider plans
- Hybrid business plans
- Ads
- Sponsored listings
- Featured profiles
- Commissions
- Booking fees
- B2B fees
- Influencer/media deals
- Verification badges
- Analytics packages

## Supplier Product Data

File:

```txt
docs/SUPPLIER_PRODUCT_DATA.md
```

Covers:

- Manual product entry
- Bulk product upload
- CSV/XML/Excel imports
- Field mapping
- Manufacturer part numbers
- OEM numbers
- Barcodes/GTIN
- SKU
- TecDoc-style matching
- Stock synchronization
- Supplier catalog updates

---

# Current Confirmed Billing Rules

Important confirmed rules:

- Client sees final product/service price.
- Client does not see Autopro internal profit/fee breakdown.
- Supplier/service provider pays Autopro fees as the standard rule.
- Admin sees full internal breakdown.
- Supplier/service provider sees their fee obligations in their dashboard.
- Autopro fees must be automated.
- Autopro fees must not surpass 20%.
- Fees can vary by country, category, supplier, service provider, campaign, B2B contract, plan level, vehicle type, payment method, and shipping partner.
- Product order Autopro fees are non-refundable once order is created/processed according to platform rules.
- Service fees depend on appointment stage.
- Completed examination means Autopro fee must be paid.
- Wrong part responsibility is assigned by proof.
- Damaged part still requires Autopro fee to be paid, with responsibility assigned by proof.
- Shipping delay responsibility is assigned by tracking evidence.
- Rescheduled appointment transfers fee to new date.
- Weather/emergency/force majeure cancellation cancels or holds fee depending on review.

---

# Current Next Step

The current next planning step is to detail:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next section to define:

```txt
Product payment flow
```

This section must define:

- Online product payment
- Cash product payment
- Where money goes
- When money is held
- When supplier gets paid
- When shipping company gets paid
- When Autopro fee is collected
- How COD countries work
- How international supplier payments work
- How refunds and returns connect to payment flow

---

# Future Systems To Detail Later

Planned future files/systems:

- `ADMIN_DASHBOARD_REQUIREMENTS.md`
- `HOMEPAGE_REQUIREMENTS.md`
- `COMPATIBILITY_ENGINE.md`
- `SEARCH_AND_RECOMMENDATION_SYSTEM.md`
- `ADS_AND_PROMOTIONS.md`
- `STAFF_PERMISSIONS_AND_ROLES.md`
- `BUSINESS_PROFILES.md`
- `SERVICE_BOOKING_SYSTEM.md`
- `CUSTOMER_GARAGE_SYSTEM.md`
- `B2B_AND_FLEET_SYSTEM.md`
- `INFLUENCER_AND_MEDIA_SYSTEM.md`
- `DATA_MODEL_NOTES.md`
- `MVP_SCOPE.md`

---

# Important Instruction For Future AI

If this file is pasted into a new conversation:

- Do not restart from zero.
- Continue from the current next step.
- The owner is a beginner and needs guided step-by-step instructions.
- Use GitHub documentation as the project memory.
- Ask before moving to coding.
- Continue documenting the platform before building.
- Treat confirmed owner requirements as fixed unless owner changes them.
---

# Latest Continuation Update - Payments, Refunds, Returns, Cash Flow, Payouts, and Business Debt

The Autopro payments documentation has been expanded significantly.

Important new or expanded files now include:

```txt
docs/CREDIT_WALLET_AND_CLIENT_TRUST.md
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
docs/PAYMENTS_REFUNDS_RETURNS.md
