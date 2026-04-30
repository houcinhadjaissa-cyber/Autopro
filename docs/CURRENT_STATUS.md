# Autopro Current Status

This file explains the current state of the Autopro project.

If the AI conversation is lost, open this file together with:

```txt
docs/AI_CONTEXT.md
```

Then paste both into the AI chat and ask:

```txt
Continue the Autopro project from this context.
```

---

# Current Phase

Autopro is currently in the planning, documentation, platform structure, and system design phase.

No coding has started yet.

The current goal is to fully define the website/platform backbone before building code.

---

# Project Owner Situation

The project owner currently has:

- No laptop
- Limited budget
- 0% coding experience
- Mobile-only workflow at the beginning

Because of this, the project must be handled with:

- Simple explanations
- Small steps
- GitHub web interface
- Frequent commits
- Clear documentation
- Careful file path checking
- No rushed coding

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
+ invoicing and billing system
+ payments/refunds/returns system
+ admin monetization dashboard
```

Autopro is not just a simple e-commerce store.

It is planned to support:

- Vehicle parts
- Vehicle accessories
- Vehicle-related services
- Service bookings
- Supplier profiles
- Service provider profiles
- Hybrid business profiles
- Client garages
- Vehicle history
- Shipping/logistics companies
- B2B/fleet deals
- Influencer/media deals later
- Admin analytics and monetization

---

# Current GitHub Documentation Files

Current important documentation files include:

```txt
AI_CONTEXT.md
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
CURRENT_STATUS.md
```

Important note:

A wrong accidental file appears to exist in `docs` with a name similar to:

```txt
Update current status with paym...
```

This appears to be a mistaken file created from a commit message. It should be reviewed and removed later after confirming `CURRENT_STATUS.md` is correctly created.

---

# Completed Major Planning Work

Completed so far:

- Created GitHub repository named `Autopro`
- Created initial project documentation
- Created basic project folder structure
- Created project memory files
- Created user roles and flows
- Created platform blueprint
- Created design discovery notes
- Created decision rules
- Created systems index
- Created vehicle ID/history system documentation
- Created invoicing and billing documentation
- Created payments/refunds/returns starter file
- Created shipping/logistics starter file
- Created monetization strategy starter file
- Created supplier product data starter file

---

# Completed User Roles First Pass

The first pass of user roles was documented in:

```txt
docs/USER_ROLES_AND_FLOWS.md
```

Covered roles:

1. Guest visitor
2. Client/customer
3. Business account
4. Supplier/seller
5. Service provider
6. Hybrid business
7. Staff member
8. Admin/owner
9. Mechanic/garage/B2B buyer

---

# Completed Billing Work

Detailed billing sections were added to:

```txt
docs/INVOICING_AND_BILLING.md
```

Completed billing topics:

- Product purchase billing
- Digital invoices
- Receipts
- Order confirmations
- Warranty documents
- Service booking billing
- Fixed-price service billing
- Inspection/examination-based billing
- Examination fee rules
- Maintenance job vs major job
- Client confirmation for changes
- Part arrival tracking
- Platform fees and commissions
- Cancellation, responsibility, fee transfer, and dispute rules

---

# Confirmed Billing Rules

Important confirmed rules:

- Client sees the final combined price.
- Client does not see Autopro internal fee/profit separately.
- Supplier/service provider pays Autopro fees as the standard rule.
- Admin sees the full internal breakdown.
- Supplier/service provider sees their own fee obligations privately in their dashboard.
- Autopro fees must be automated.
- Autopro fees must not surpass 20%.
- Fees can vary by country, category, supplier, service provider, campaign, B2B contract, plan level, vehicle type, payment method, and shipping partner.
- Product order Autopro fees are non-refundable once the order is created/processed according to platform rules.
- Service fees depend on appointment stage.
- Completed examination means Autopro fee must be paid.
- Wrong part responsibility is assigned by proof.
- Damaged part still requires Autopro fee to be paid, with responsibility assigned by proof.
- Shipping delay responsibility is assigned by tracking evidence.
- Rescheduled appointment transfers fee to new date.
- Weather/emergency/force majeure cancellation cancels or holds fee depending on review.

---

# Vehicle ID and History Work

Detailed vehicle history direction was added to:

```txt
docs/VEHICLE_ID_AND_HISTORY.md
```

Confirmed vehicle history direction:

- Each vehicle gets an internal Autopro Vehicle ID.
- Client garage links to vehicle ID.
- Service records link to vehicle ID.
- Parts replaced link to vehicle ID.
- Diagnostics link to vehicle ID.
- Part arrival date/time links to vehicle ID.
- Part checking and installation link to vehicle ID.
- Vehicle history supports future used-car valuation projects.
- Large media files should be stored outside the main database, with metadata and file links stored in the main database.

---

# Payments / Refunds / Returns Status

Created:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

This file currently exists as the starter system file.

It must now be detailed section by section.

---

# Current Next Step

The next detailed planning section is:

```txt
Product payment flow
```

This should be added to:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

The next discussion must define:

- Online product payment
- Cash product payment
- Where money goes after client pays
- When money is held
- When supplier gets paid
- When shipping company gets paid
- When Autopro fee is collected
- What happens in cash-heavy countries like Algeria and Nigeria
- What happens when supplier is international and client is local
- How refunds and returns connect to payment flow
- How Autopro protects itself automatically

---

# Immediate Maintenance To Do

After this file is created, check the accidental file named similar to:

```txt
Update current status with paym...
```

If it is a wrong file, remove it later.

Do not delete it until `CURRENT_STATUS.md` is confirmed visible in the `docs` folder.

---

# Rule Before Coding

Do not start coding yet.

The current priority is:

1. Finish payment/refund/return system planning.
2. Finish shipping/logistics planning.
3. Finish monetization planning.
4. Finish supplier product data planning.
5. Plan homepage and user experience.
6. Plan compatibility engine.
7. Plan data model.
8. Define MVP scope.
9. Then start coding/prototype.
---

# Latest Completed Step

Created and updated:

```txt
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
---

# Latest Completed Step

Added detailed product and service payment flow requirements to:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
---

# Latest Current Status - Payments and Financial Rules Expanded

The Autopro payments, refunds, returns, wallet, QR confirmation, cash collection, payout, and business debt documentation has been expanded.

## Recently Updated / Added Documentation

Important updated or newly referenced files:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
docs/CREDIT_WALLET_AND_CLIENT_TRUST.md
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
```

---

# Current Status Recovery Override - Payments Expanded

This section confirms the latest correct project status if older sections above still show outdated payment planning status.

## Latest Completed Work

The following payment and financial planning topics have been documented:

- Online payment authorization before capture
- 48-hour supplier/service provider confirmation window
- Supplier cancellation after confirmation
- Trusted supplier cancellation handling
- Supplier payout timing
- New supplier payout holds
- Risky supplier payout holds
- Partial payouts and reserves
- Cash product payment flow
- Cash-on-delivery availability
- Cash collector roles
- Client trust checks for cash orders
- Cash order deposits/limits
- Client refusal to pay cash
- Shipping company cash collection
- Partner desk / ZR Express-style confirmation and payment engine
- Cash receipt proof
- Cash refunds
- International supplier cash-on-delivery handling
- Autopro fee visibility and maximum rules
- Business debt system
- Debt deadlines and escalation
- VIP/trusted business debt handling
- Business payment methods
- Automatic debt deduction from payouts
- Negative balances
- Refund reimbursement
- Chargeback responsibility
- Payout holds during disputes
- Business invoices and statements
- Staff permissions for money/debt/payout/settlement changes

## Active Financial Documentation Files

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
docs/CREDIT_WALLET_AND_CLIENT_TRUST.md
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
```

## Correct Current Next Step

Continue detailing:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Recommended next topic:

```txt
Shipping company settlement detailed rules
```

Alternative next topic:

```txt
Refund and return decision matrix
```

No coding should start yet.
```

---

# Current Status Recovery Override - Shipping Settlement Completed

Shipping company settlement planning has been expanded and documented inside:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Latest Completed Work

Completed shipping/payment topics now include:

- Online product payment flow
- Cash product payment flow
- Supplier payout rules
- Business debt rules
- Autopro fee collection rules
- Shipping company settlement detailed rules part 1
- Shipping company settlement detailed rules part 2

## Shipping Settlement Topics Completed

Autopro now has confirmed rules for:

- Shipping company accounts
- Shipping dashboards
- Shipping company employees
- Shipping permissions
- Package handoff confirmations
- Delivery confirmations
- Cash collection by shipping company
- Shipping payouts
- Shipping settlement statements
- Shipping company fees
- International supplier payment handled by shipping/logistics partners
- Route-specific exchange/pricing rates
- Package loss responsibility
- Package damage responsibility
- Late delivery responsibility
- Pickup desk no-show
- Failed delivery attempts
- Rescheduling rules
- Reschedule fees
- Storage fees
- Return shipping fee responsibility
- Shipping company disputes
- Shipping trust/performance scores
- Shipping penalties and rewards
- Shipping company plans
- Warehouse handoff rules
- Warehouse damage/loss responsibility
- Customs/import tracking
- Customs/import fee responsibility
- Shipping insurance
- Insurance claim flow
- Shipping API/integration direction
- Partner portal for shipping companies without software/API
- Staff/admin controls for shipping settlements
- Statement/payment reconciliation
- Shipping company access to client data
- Shipping company VIP/trusted client lists
- Shipping company support/contact flow

## Correct Current Next Step

Continue detailing:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next topic:

```txt
Refund and return decision matrix
```

No coding should start yet.
```

---

# Current Status Recovery Override - Refund and Return Decision Matrix Completed

The refund and return decision matrix has been documented inside:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Latest Completed Work

Completed payment/refund/return planning now includes:

- Online product payment flow
- Cash product payment flow
- Supplier payout rules
- Business debt rules
- Autopro fee collection rules
- Shipping company settlement detailed rules part 1
- Shipping company settlement detailed rules part 2
- Refund and return decision matrix

## Refund and Return Topics Completed

Autopro now has confirmed rules for:

- Full refunds
- Partial refunds
- Store credit
- Replacements
- Repair/service corrections
- Reschedules
- No-refund cases
- Refund minus return shipping fee if legal
- Refund minus damage/restocking fee if legal
- Admin custom decisions
- Client choice between refund and store credit
- Staff task automation for refund/return review
- Product not received
- Wrong part responsibility
- Damaged part responsibility
- Changed-mind return rules
- Used/installed part rules
- Electrical/electronic/sensitive part rules
- Completed service refund rules
- Service quality proof rules
- Return windows by country law
- Return approval rules
- Return shipping methods
- Return shipping cost responsibility
- Refund timing
- Replacement timing
- Refund method by payment method
- Partial refund rules
- Restocking/damage fee rules
- Fraud protection
- Supplier refusal of valid refund
- Client returning wrong/different item
- Refund/return connection to vehicle history

## Correct Current Next Step

Continue detailing:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next topic:

```txt
Service payment, service refund, and service provider payout final details
```

No coding should start yet.
```

---

# Current Status Recovery Override - Service Payment Details Completed

Service payment, service refund, and service provider payout final details have been documented inside:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Latest Completed Work

Completed payment/refund/return planning now includes:

- Online product payment flow
- Cash product payment flow
- Supplier payout rules
- Business debt rules
- Autopro fee collection rules
- Shipping company settlement detailed rules part 1
- Shipping company settlement detailed rules part 2
- Refund and return decision matrix
- Service payment, service refund, and service provider payout final details

## Service Payment Topics Completed

Autopro now has confirmed rules for:

- Fixed-price service payments
- Examination/diagnosis fee timing
- Deposits if legal/provider-required
- Cash after service
- Online payment after service
- Online authorization before appointment and capture after completion where supported
- Service provider payment method selection
- Admin/country/provider/service-type payment control
- Service quote after examination
- Provider ordering parts for client
- Client approval for required/optional/non-urgent items
- Client ability to reschedule remaining work
- Client cancellation rules
- Provider cancellation rules
- Client no-show rules
- Provider no-show rules
- Service completion confirmation
- Provider payout timing
- Provider cash collection
- Provider online payment
- Service disputes
- Service proof
- Service warranty
- Service correction/rework
- Extra work approval
- Overcharging protection
- Provider protection from unfair clients
- Provider trust/performance score
- Provider rewards and penalties
- Provider monthly statements and growth analytics

## Correct Current Next Step

Continue detailing:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next topic:

```txt
Admin money dashboard and financial controls
```

After that, perform:

```txt
Payments file cleanup and consolidation
```

No coding should start yet.
```

---

# Current Status Recovery Override - Admin Money Dashboard Completed

Admin money dashboard and financial controls have been documented inside:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Latest Completed Work

Completed payment/refund/return planning now includes:

- Online product payment flow
- Cash product payment flow
- Supplier payout rules
- Business debt rules
- Autopro fee collection rules
- Shipping company settlement detailed rules part 1
- Shipping company settlement detailed rules part 2
- Refund and return decision matrix
- Service payment, service refund, and service provider payout final details
- Admin money dashboard and financial controls

## Admin Money Dashboard Topics Completed

Autopro now has confirmed rules for:

- Full owner financial visibility
- Admin dashboard summary and drill-down structure
- Money balance categories
- Complete transaction ledger
- Filters and search
- Supplier/service provider/shipping company financial profile views
- Supplier import/export/demand/growth intelligence
- Fee automation rules
- Manual adjustment permissions
- Payout approval controls
- Refund approval controls
- Business debt dashboard
- Cash control dashboard
- Country and currency dashboard
- Alerts and risk warnings
- Staff financial task assignment
- Staff financial performance tracking
- Financial audit logs
- Export/download reports
- Tax/accounting reporting direction
- Payment provider monitoring
- Fraud/risk dashboard
- Owner profit dashboard
- Dashboard permissions
- Dashboard section structure

## Correct Current Next Step

Perform:

```txt
Payments file cleanup and consolidation
```

The cleanup should replace the messy current `docs/PAYMENTS_REFUNDS_RETURNS.md` with one clean consolidated version.

No coding should start yet.
