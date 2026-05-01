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
```

---

# Latest Recovery Override - Financial Planning Status

This recovery section confirms the latest accurate project status if older sections above still mention an outdated next step.

Autopro has now completed major documentation for:

- Online product payment rules
- Cash product payment rules
- Cash-on-delivery rules
- Supplier payout timing
- Risk reserves
- Shipping company cash collection
- ZR Express-style partner desk/payment confirmation engine
- Business debt system
- Negative balances
- Autopro fee collection rules
- Chargeback responsibility
- Staff financial permissions
- Client credit/wallet direction
- QR confirmation direction

Important files now active:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
docs/CREDIT_WALLET_AND_CLIENT_TRUST.md
docs/QR_CONFIRMATION_AND_REUSABLE_CORE.md
```

## Do Not Repeat These Questions

Do not repeat already answered questions about:

- Authorization before capture
- 48-hour supplier/service provider confirmation
- Supplier cancellation after confirmation
- Supplier payout after shipping handoff
- New supplier payout after delivery confirmation
- Risky supplier payout holds
- Partial payout and reserves
- Cash Expected order status
- Cash collector roles
- Cash order trust checks
- Cash order limits/deposits
- Client refusal to pay cash
- Shipping company cash collection
- Partner desk/ZR Express-style engine
- Cash refunds
- International supplier cash collection
- Business debt
- Business debt deadlines
- Business debt payment plans
- Negative balances
- Deducting debt from future payouts
- Chargebacks
- Payout holds during dispute
- Business invoices/statements
- Staff permissions for money/debt/payout changes

## Current Next Planning Step

The next planning step should continue from:

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

Ask the owner which one to continue with if unclear.
```

---

# Latest Recovery Override - Shipping Settlement Completed

This section confirms the latest accurate continuation status.

Shipping company settlement detailed rules have now been documented in:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Completed shipping settlement sections:

- Shipping company account types
- Shipping company employee roles
- Shipping company employee permissions
- Package handoff confirmation
- Package handoff effects
- Shipping company dashboard growth/profit features
- Delivery confirmation methods
- Delivery confirmation effects
- Shipping company cash collection
- Shipping company payout timing
- Shipping company settlement statements
- Shipping company fees to Autopro
- Shipping company pays supplier abroad and collects local cash
- Route-specific exchange-rate rules
- Shipping company ID reuse for future owner platforms
- Lost package responsibility
- Damaged package responsibility
- Late delivery responsibility
- Pickup desk no-show rules
- Return package handled by shipping company
- Failed delivery attempts
- Failed delivery reasons
- Delivery rescheduling
- Reschedule fees
- Storage fees
- Return to supplier after failed delivery/no-show
- Return shipping fee responsibility
- Shipping company disputes
- Shipping company trust/performance score
- Shipping company penalties and rewards
- Shipping company plans and premium features
- Warehouse handoff rules
- Warehouse loss/damage responsibility
- Customs/import tracking
- Customs/import fees
- Shipping insurance
- Insurance claim flow
- Shipping company API/integration direction
- Private partner portal for companies without API
- Staff/admin controls for shipping settlement
- Statement/payment reconciliation
- Shipping company access to client data
- Shipping company VIP/trusted client lists
- Shipping company support/contact flow

Important confirmed rule:

```txt
Route-specific exchange rate = Yes
```

Route-specific rate means pricing/exchange/settlement rates can differ by route, such as:

- China to Algeria
- Turkey to Algeria
- Europe to Algeria
- UAE to Algeria
- Algeria local delivery

## Do Not Repeat Shipping Settlement Questions

Do not repeat already answered questions about:

- Shipping company account types
- Shipping company dashboards
- Shipping company employee roles
- Shipping permissions
- Package handoff
- Delivery confirmation
- Cash collection by shipping company
- Shipping company settlements
- Shipping company fees
- International supplier payment by shipping company
- Route-specific rates
- Package loss
- Package damage
- Late delivery
- Pickup desk no-show
- Failed delivery attempts
- Rescheduling
- Storage fees
- Return shipping fees
- Shipping company disputes
- Shipping company trust scores
- Shipping company plans
- Warehouse handoffs
- Customs/import
- Insurance
- API/integration
- Partner portal
- Shipping reconciliation
- Shipping access to client data
- Shipping support flow

## Correct Current Next Planning Step

Continue with:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next recommended topic:

```txt
Refund and return decision matrix
```

The next questions should define refund/return outcomes by reason, responsibility, payment method, product/service status, shipping status, country law, proof, and Autopro fee handling.
```

---

# Latest Recovery Override - Refund and Return Decision Matrix Completed

This section confirms the latest accurate continuation status.

The refund and return decision matrix has now been documented in:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Completed Refund and Return Topics

Autopro now has confirmed rules for:

- Main refund outcomes
- Full refund
- Partial refund
- Store credit
- Replacement
- Repair/service correction
- Reschedule
- No refund
- Refund minus return shipping fee if legal
- Refund minus damage/restocking fee if legal
- Admin custom decision
- Client choice between money refund and store credit
- Staff task automation for refund/return/dispute cases
- Product not received
- Wrong part received
- Damaged part received
- Changed-mind product returns
- Used or installed parts
- Electrical/electronic/sensitive parts
- Service already completed
- Service quality problems
- Return windows
- Return approval
- Return shipping methods
- Return shipping cost responsibility
- Refund timing
- Replacement timing
- Refund method by original payment
- Partial refund rules
- Restocking/damage fees
- Refund/return fraud protection
- Supplier refuses valid refund
- Client returns wrong/different item
- Refund and vehicle history connection

## Important Confirmed Refund/Return Rules

Autopro must support multiple refund outcomes:

- Full refund
- Partial refund
- Store credit
- Replacement
- Repair/service correction
- Reschedule
- No refund
- Refund minus allowed fees
- Admin custom decision

Client should be able to choose money refund or store credit when both are legally and operationally available.

Store credit can be offered but should not replace a legally required money refund.

Country law is the standard for return windows and refund rights.

Supplier can offer better/longer terms but cannot remove legal minimum client rights.

Changed-mind returns are not automatic unless country law requires them or supplier policy allows them.

Sensitive, electrical, electronic, software-related, used, or installed parts can have stricter return rules where legal.

Wrong part responsibility is assigned by proof:

- Supplier if supplier listed/shipped wrong part
- Client if client selected wrong vehicle/part despite warnings
- Service provider if provider ordered wrong part
- Autopro if compatibility/platform error caused it
- Shared if multiple parties caused it

Damaged part responsibility is assigned by proof:

- Supplier if damaged before shipping or bad packaging
- Shipping company if damaged during transport
- Warehouse/partner if damaged there
- Client if damaged after delivery
- Insurance/contract/country law applies

Service refunds depend on proof:

- No refund if service completed correctly
- Partial refund if service partially failed
- Free correction/rework if provider fault
- Full refund if paid online and service not delivered
- Supplier responsible if faulty part caused issue
- Vehicle history/service report can be proof

Refund/return fraud protection includes:

- Return abuse score
- Refund abuse score
- Serial/part number checks
- QR/scan proof
- Photos/videos
- Vehicle ID/history checks
- Device/IP checks where legal
- Staff review for repeat cases
- Suspension/ban for fraud
- VIP/elderly support review before harsh action

## Do Not Repeat Refund/Return Questions

Do not repeat already answered questions about:

- Main refund outcomes
- Client refund method choice
- Product not received
- Wrong part received
- Damaged part received
- Changed-mind returns
- Used/installed parts
- Sensitive/electrical/electronic parts
- Service already completed
- Service quality proof
- Return windows
- Return approval
- Return shipping methods
- Return shipping cost responsibility
- Refund timing
- Replacement timing
- Refund method by payment type
- Partial refunds
- Restocking/damage fees
- Refund/return fraud controls
- Supplier refusing valid refund
- Client returning wrong/different item
- Refund and vehicle history

## Correct Current Next Planning Step

Continue with:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next recommended topic:

```txt
Service payment, service refund, and service provider payout final details
```

The next questions should define service provider payment timing, service cancellation, no-show rules, service correction, provider payouts, service debt, examination/diagnosis fees, service warranty, cash service payments, and service provider disputes.
```

---

# Latest Recovery Override - Service Payment and Provider Payout Details Completed

This section confirms the latest accurate continuation status.

Service payment, service refund, and service provider payout final details have now been documented in:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Completed Service Payment Topics

Autopro now has confirmed rules for:

- Service payment types
- Fixed-price services
- Fixed-price payment after completion as standard
- Examination/diagnosis fee timing
- Deposits before appointment if provider requires and law allows
- Cash after service
- Online payment after service
- Online authorization before appointment with capture after completion where supported
- Service provider-selected payment methods
- Admin-controlled service payment rules
- Service quote after examination
- Required parts
- Optional parts
- Non-urgent parts
- Labor cost
- Examination fee
- Shipping cost if parts are needed
- Warranty terms
- Estimated completion time
- Client approval checkboxes
- Client ability to remove optional/non-urgent items
- Client ability to reschedule remaining work
- Service provider ordering parts for client
- Client digital quote approval
- Provider vehicle and compatibility confirmation
- Supplier part availability confirmation
- Shipping to provider/client confirmation
- Provider part received confirmation
- Client service completion confirmation
- Client cancellation before appointment
- Provider cancellation before appointment
- Client no-show
- Provider no-show
- Service completion confirmation
- Service provider payout timing
- Service provider cash collection
- Service provider online payment
- Service disputes
- Service proof requirements
- Service warranty
- Service correction/rework
- Extra work discovered during service
- Overcharging protection
- Provider protection from unfair clients
- Service provider trust score
- Service provider rewards and penalties
- Service provider statements and growth analytics

## Important Confirmed Service Rules

For simple fixed-price services, the standard flow is:

```txt
Client books service.
Provider confirms appointment.
Service is completed.
Provider marks completed.
Client confirms completion.
Client pays after completion by agreed method.
Autopro fee becomes owed after completion/payment confirmation.
```

For examination/diagnosis, the standard direction is:

```txt
Client pays examination/diagnosis fee after examination is completed.
```

Examination fee can also be added to the final repair bill.

Provider can require advance payment/deposit if legal and clearly shown before booking.

Service providers can order parts for clients only after clear digital client approval.

Extra work discovered during service requires updated digital quote and client approval before work starts, unless a documented legal/safety emergency exception applies.

Service provider payout can become available after completion confirmation and payment/cash confirmation.

Trusted/VIP providers can receive faster payouts.

Risky providers can have delayed payouts.

New providers should not automatically be treated harshly if they are honest and building their business.

Service provider cash collection creates provider debt for Autopro fees.

Online service payment can use authorization before appointment and capture after completion where payment provider/country supports it.

## Do Not Repeat Service Payment Questions

Do not repeat already answered questions about:

- Service payment types
- Standard fixed-price service payment timing
- Examination/diagnosis fee timing
- Service quote after examination
- Provider ordering parts for client
- Client cancellation before appointment
- Provider cancellation before appointment
- Client no-show
- Provider no-show
- Service completion confirmation
- Service provider payout timing
- Service provider cash collection
- Service provider online payment
- Service disputes
- Service proof requirements
- Service warranty
- Service correction/rework
- Extra work discovered during service
- Service provider overcharging protection
- Service provider protection from unfair clients
- Service provider trust score
- Service provider rewards and penalties
- Service provider statements

## Correct Current Next Planning Step

Continue with:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

Next recommended topic:

```txt
Admin money dashboard and financial controls
```

After Admin money dashboard and financial controls are documented, the next recommended maintenance step is:

```txt
Payments file cleanup and consolidation
```

Cleanup should be done safely by creating a clean consolidated file first, not by deleting the existing payment file immediately.
```

---

# Latest Recovery Override - Admin Money Dashboard Completed

This section confirms the latest accurate continuation status.

Admin money dashboard and financial controls have now been documented in:

```txt
docs/PAYMENTS_REFUNDS_RETURNS.md
```

## Completed Admin Money Dashboard Topics

Autopro now has confirmed rules for:

- Admin money dashboard purpose
- Owner/full admin visibility
- Dashboard money balances
- Complete transaction ledger
- Admin filters and search
- Business financial profile views
- Supplier import/export/demand/growth intelligence
- Autopro fee automation
- Manual financial adjustment controls
- Payout approval controls
- Refund approval controls
- Business debt dashboard
- Cash control dashboard
- Country and currency dashboard
- Alerts and risk warnings
- Staff financial task assignment
- Staff performance for financial tasks
- Audit logs
- Export/download reports
- Tax/accounting direction
- Payment provider monitoring
- Fraud and risk dashboard
- Owner profit dashboard
- Dashboard permissions
- Dashboard section structure

## Important Confirmed Admin Dashboard Rules

The full owner must be able to see everything, including:

- Every transaction
- Every fee
- Every payout
- Every refund
- Every debt
- Every staff adjustment
- Every country/currency
- Every supplier/provider/shipping company balance
- Every dispute hold
- Every manual override
- Every audit log
- Every report/export

The dashboard must show summary totals first, then allow drill-down into detailed records.

Every major dashboard section must support:

- Filtering
- Search
- Ranking
- Detailed view
- Export where allowed
- Permission control
- Staff assignment
- Audit logs where relevant
- Alerts where relevant

Admin money dashboard must include:

- Revenue
- Fees
- Refunds
- Returns
- Chargebacks
- Business debt
- Pending balances
- Available balances
- Held balances
- Negative balances
- Cash expected
- Cash collected
- Cash missing/not remitted
- Country/currency breakdown
- Profit/loss estimates
- Account counts
- Vehicle counts
- Supplier/provider/shipping growth analytics
- Fraud/risk analytics
- Tax/accounting reports
- Payment provider monitoring

Autopro must support a complete transaction ledger for every money movement.

Manual financial adjustments require permissions, reason, proof, audit logs, and high-value approval controls.

Payouts and refunds must be automated for safe cases and manually reviewed for risky/high-value/disputed cases.

Tax/accounting reports must be prepared by country and require legal/accounting review before launch.

Advanced tax/accounting reports can become paid-plan features for suppliers, service providers, shipping companies, hybrid businesses, influencers, and partners where legally allowed.

## Do Not Repeat Admin Money Dashboard Questions

Do not repeat already answered questions about:

- Admin money dashboard purpose
- Owner visibility
- Money balances
- Transaction ledger
- Admin filters/search
- Business financial profile views
- Fee automation
- Manual adjustment controls
- Payout approval controls
- Refund approval controls
- Business debt dashboard
- Cash control dashboard
- Country/currency dashboard
- Alerts and risk warnings
- Staff financial task assignment
- Staff financial performance tracking
- Audit logs
- Export/download reports
- Tax/accounting direction
- Payment provider monitoring
- Fraud/risk dashboard
- Owner profit dashboard
- Dashboard permissions
- Dashboard section structure

## Correct Current Next Maintenance Step

The next recommended step is:

```txt
Payments file cleanup and consolidation
```

Cleanup must be done safely.

The owner prefers one simple replacement workflow:

```txt
Open docs/PAYMENTS_REFUNDS_RETURNS.md
Select all old text
Delete old text
Paste one clean consolidated replacement text
Commit
```

The AI must provide the replacement text in a beginner-friendly way and make sure no confirmed rules are intentionally lost.
---

# Latest Recovery Override - Clean Payments File Completed

The payments/refunds/returns cleanup has been completed safely.

A clean consolidated payments file now exists:

```txt
docs/PAYMENTS_REFUNDS_RETURNS_CLEAN.md
---

# Latest Recovery Override - Staff Permissions Planning Started

Autopro is still in the documentation and planning stage.

No coding has started yet.

The owner copied and verified these project memory files:

```txt
docs/CURRENT_STATUS.md
docs/SYSTEMS_INDEX.md
docs/PROJECT_LOG.md
docs/USER_ROLES_AND_FLOWS.md
---

# Latest Recovery Override - Staff Permissions Documentation Created

Autopro is still in the documentation and planning stage.

No coding has started yet.

The staff permissions and employee management documentation has been created.

Completed file:

```txt
docs/STAFF_PERMISSIONS_AND_ROLES.md
