# Autopro Payments, Refunds, Returns, Payouts, Cash, Shipping Settlement, and Financial Controls - Clean Consolidated Draft

This file is the clean consolidated version of the Autopro payment system documentation.

Source file being cleaned:

- docs/PAYMENTS_REFUNDS_RETURNS.md

Important rule:

Do not delete the original payments file until this clean version is fully reviewed and confirmed.

---

# Cleanup Status

Status:

- Part 1 added: core rules, product payments, cash payments, supplier payout, business debt, fee collection.
- Part 2 pending: shipping company settlement.
- Part 3 pending: refund and return decision matrix.
- Part 4 pending: service payment and service provider payout.
- Part 5 pending: admin money dashboard and financial controls.
- Final review pending.

---

# 1. Purpose

This file defines Autopro rules for:

- Online product payments
- Cash product payments
- Cash on delivery
- Service payments
- Examination and diagnosis fees
- Supplier payouts
- Service provider payouts
- Shipping company payouts
- Partner desk settlement
- Autopro platform fees
- Refunds
- Returns
- Store credit
- Chargebacks
- Business debt
- Negative balances
- Disputes
- Shipping company settlement
- Admin money dashboard
- Financial controls
- Staff financial permissions

Autopro must support both:

- Modern online payment countries
- Cash-heavy countries

Autopro must be designed from day one with a flexible financial backbone.

---

# 2. Core Money Rule

Autopro must know where every amount of money is at every moment.

Every transaction must have a clear status.

Statuses can include:

- Pending
- Payment authorized
- Payment captured
- Paid
- Cash expected
- Cash collected
- Cash not remitted
- Awaiting supplier confirmation
- Awaiting service provider confirmation
- Awaiting shipping confirmation
- In transit
- Delivered
- Completed
- On hold
- Disputed
- Refunded
- Partially refunded
- Store credit issued
- Replacement pending
- Released to supplier
- Released to service provider
- Released to shipping company
- Autopro fee collected
- Business debt created
- Negative balance created
- Chargeback opened
- Chargeback resolved

---

# 3. Main Balance Types

Autopro must separate money into clear balance types.

## 3.1 Pending Balance

Money paid, authorized, promised, or expected but not yet released.

Used for:

- Orders not delivered
- Services not completed
- Cash expected
- Payments waiting confirmation
- Transactions waiting supplier/provider confirmation

## 3.2 Available Balance

Money confirmed and ready to be paid out.

Used for:

- Supplier payouts
- Service provider payouts
- Shipping company payouts
- Partner settlement

## 3.3 Held Balance

Money temporarily frozen.

Used for:

- Disputes
- Return requests
- Wrong part cases
- Damaged part cases
- Shipping delays
- Suspicious activity
- Chargebacks
- Admin review

## 3.4 Autopro Fee Balance

Autopro platform fees tracked separately.

Includes:

- Product commission
- Service commission
- Examination/diagnosis fee commission
- Shipping/logistics fee
- B2B/fleet fee
- Plan fees
- Ads/promotions fees
- Featured listing fees
- Other monetization fees

## 3.5 Business Debt Balance

Money owed to Autopro by a business.

Can include:

- Unpaid Autopro fees
- Plan/subscription fee
- Refund reimbursement
- Store credit reimbursement
- Chargeback responsibility
- Cash collected but not remitted
- Partner desk settlement difference
- Penalty fee if legal
- Manual admin adjustment

## 3.6 Negative Balance

A business negative balance means the business owes Autopro.

Allowed mainly for trusted/VIP businesses under limits.

Not normally allowed for new or risky businesses unless admin approves.

---

# 4. Required Transaction Records

Every financial transaction must record:

- Transaction ID
- Order ID if applicable
- Service ID if applicable
- Invoice ID
- Payment ID
- Refund ID if applicable
- Return ID if applicable
- Dispute ID if applicable
- Client ID
- Supplier ID if applicable
- Service provider ID if applicable
- Shipping company ID if applicable
- Partner desk ID if applicable
- Vehicle ID if applicable
- Product IDs if applicable
- Service IDs if applicable
- Country
- Currency
- Payment method
- Payment status
- Total amount
- Supplier amount
- Service provider amount
- Shipping amount
- Autopro fee
- Discount
- Refund status
- Dispute status
- Date/time
- Confirmation history
- Proof links
- Audit log links

---

# 5. Payment Methods

Autopro must support multiple payment methods depending on country, provider settings, and business rules.

Payment methods include:

- Online card payment
- Payment provider wallet
- Bank transfer
- Local payment methods
- Postal payment methods
- Cash on delivery
- Cash after service
- Cash at pickup desk
- Partner desk payment
- Store credit
- Future wallet balance where legally allowed
- Pay later only if approved later

Each country can have different active payment methods.

Admin/full owner must be able to activate, deactivate, modify, or restrict payment methods by:

- Country
- Region
- Supplier
- Service provider
- Shipping company
- Partner desk
- Client trust level
- Product category
- Service type
- Order value
- Risk level
- Legal requirement

---

# 6. Country-Specific Payment Rules

Autopro must support country-specific payment behavior.

## 6.1 Algeria

Algeria may require strong support for:

- Cash on delivery
- Payment at delivery office
- Local shipping company cash collection
- Partner desk payment
- Local cash settlement
- Realistic DZD pricing
- Route-specific exchange/pricing rates
- International supplier settlement through logistics partners

Autopro must not blindly use official bank conversion if it does not reflect real procurement cost.

Algeria pricing must support:

- Client-facing DZD prices
- Supplier settlement rules
- Logistics partner settlement rules
- Admin-approved pricing rate
- Route-specific rate
- Market/procurement reference rate where legally usable
- Manual finance/admin override

## 6.2 Nigeria

Nigeria may require support for:

- Local payment methods
- Cash-friendly flows
- Regional payment differences
- Country-specific rules
- Local partner settlement

## 6.3 Europe, USA, Canada, and Similar Markets

These markets may support easier use of:

- Online card payments
- Bank payments
- Automated payouts
- Payment provider marketplace flows
- Stronger digital refund flows

Country law and payment provider requirements apply first.

---

# 7. Online Product Payment Flow

Autopro must support authorization before capture where country law and payment provider rules allow.

## 7.1 Confirmed Flow

1. Client clicks Pay Now or Place Order.
2. Autopro checks or authorizes that the client has enough available money.
3. No money is captured from the client yet.
4. Order status becomes Pending Supplier Confirmation or Pending Required Confirmations.
5. Supplier and/or service provider is notified only after authorization succeeds.
6. Supplier and/or service provider has 48 hours to confirm availability, shipping possibility, and/or booking slot.
7. If required confirmation does not happen within 48 hours, the authorization is cancelled.
8. If all required parties confirm within 48 hours, Autopro captures payment.
9. Captured money goes first to Autopro, payment provider holding balance, approved merchant balance, or legally required holding structure depending on country and provider.

Autopro must not capture online payment before required supplier/service provider confirmation unless country-specific, provider-specific, or admin-approved rules require another process.

---

# 8. Pending Confirmation Statuses

Online product orders must support pending states.

Statuses can include:

- Pending payment authorization
- Payment authorized
- Pending supplier confirmation
- Pending service provider confirmation
- Pending required confirmations
- Authorization expiring soon
- Authorization cancelled
- Payment captured
- Order confirmed

Client must see a clear message explaining that the request was submitted but still needs business confirmation.

Supplier/service provider must see the 48-hour confirmation deadline.

---

# 9. Supplier Cancellation After Confirmation

If supplier confirms an order and Autopro captures payment, then supplier later says product is unavailable or cannot be shipped, responsibility depends on supplier trust status and history.

## 9.1 New Supplier Rule

For a new supplier, cancellation after confirmation creates supplier responsibility.

Autopro must support:

- Full client refund
- Store credit if client chooses
- Supplier warning
- Supplier trust score reduction
- Possible restriction if repeated
- Autopro fee or processing fee charged according to platform rules

## 9.2 Trusted Supplier Rule

For trusted supplier with good history, one honest cancellation after confirmation should be handled smoothly.

Autopro must support:

- Full client refund or store credit based on client choice
- Apology message from supplier/platform
- No automatic warning if reasonable
- No automatic trust score reduction if supplier has good history
- Autopro fee reduced to real transaction/refund processing cost, not full normal platform fee

Trusted protection must not hide repeated problems.

Repeated trusted supplier cancellations can trigger:

- Warning
- Trust score reduction
- Payout hold
- Restriction
- Loss of trusted protection
- Suspension if severe

---

# 10. Autopro Fee Visibility

Confirmed rule:

- Client sees final price only.
- Client does not see Autopro internal fee/profit breakdown unless legally required.
- Supplier sees Autopro fee per part/order where applicable.
- Service provider sees Autopro fee per service/booking/examination/job.
- Shipping company sees its own logistics/collection/platform fee obligations.
- Admin/full owner sees full breakdown.

For VIP deals, bulk orders, fleet services, and contracts, business users can see:

- Original Autopro fee
- VIP reduction
- Plan reduction
- Bulk reduction
- Fleet/contract reduction
- Savings from VIP/plan/contract

---

# 11. Autopro Fee Maximum

Autopro commission-style platform fees must not surpass 20% as the standard maximum.

This applies to:

- Product sales
- Service bookings
- Examination/diagnosis fees
- Shipping/logistics platform fees
- B2B/fleet order commissions

Separate paid services are not normal commission fees:

- Ads
- Promotions
- Featured listings
- Subscription plans
- Fixed plan prices
- Optional analytics packages
- Optional premium tools

Country/category exceptions require owner/admin approval and must follow law.

---

# 12. Online Product Autopro Fee Timing

For online product orders:

1. Autopro fee is calculated when order is created.
2. Autopro fee is secured when client payment is captured.
3. Autopro fee is separated before supplier payout.
4. Supplier sees fee in their dashboard.
5. Client sees final price only unless law requires otherwise.

If order is cancelled before supplier ships or starts confirmed fulfillment, normal Autopro fee can be cancelled or reduced.

Once order ships or fulfillment starts, Autopro fee is secured according to platform rules.

Responsibility rules later decide if fee remains, is reduced, is transferred, or charged to responsible party.

---

# 13. Supplier Payout Trigger

Standard online supplier payout trigger:

Supplier payout becomes available after the shipping company confirms it received the package from the supplier.

Confirmation can happen through:

- Shipping company scan
- QR scan
- Delivery handoff confirmation
- Supplier dashboard confirmation plus shipping confirmation
- Staff/admin confirmation if needed

---

# 14. Direct Supplier Shipping

If supplier ships directly without separate shipping company, supplier payout can become available after supplier confirms shipment.

Autopro can delay or reserve payout for:

- New suppliers
- Risky suppliers
- Suppliers with warnings
- Repeated disputes
- Expensive products
- High-risk categories
- Suspicious orders
- Higher-risk countries

Trusted suppliers should receive faster automated payout.

---

# 15. New Supplier Payout

New suppliers receive payout after package delivery is confirmed, not only package handoff, until trust is built.

Trust can improve through:

- Successful deliveries
- Low dispute rate
- Low return rate
- Good communication
- Fast confirmations
- Good client feedback
- Accurate listings
- Reliable shipping
- Timely Autopro fee payment

---

# 16. Risky Supplier Payout

Risky suppliers or suppliers with previous warnings can have payout delayed until:

- Delivery is confirmed
- Return window rules are satisfied
- Dispute window rules are satisfied
- Staff/admin review is completed if needed

Risky behavior includes:

- Repeated cancellations
- Wrong parts
- Damaged items
- Delayed shipping
- Missing proof
- Client complaints
- Cash not reported
- Fee debt unpaid
- Fraud reports
- Repeated disputes

---

# 17. Partial Payout and Reserve

Autopro must support partial payout and reserve.

Example:

Supplier receives 80% after package handoff. Autopro holds 20% reserve until delivery/dispute window ends.

Partial payout can apply to:

- Trusted suppliers
- Normal suppliers with good history
- New suppliers after trust-building period if admin allows
- Risky suppliers only with higher reserve and enough history
- Specific countries
- Specific categories
- Specific product values
- Specific contracts

Admin/full owner controls partial payout and reserve rules.

---

# 18. Cash Product Payment Flow

Autopro must support cash product payments and cash on delivery where legally possible.

Cash payment availability depends on:

- Country law
- Region
- Supplier settings
- Service provider settings
- Shipping company settings
- Product value
- Product category
- Client trust level
- VIP status
- Risk level
- Admin settings

Cash payment can be available in any country where legally possible, but only if the involved supplier, service provider, shipping company, or collector accepts cash.

---

# 19. Cash Collectors

Cash can be collected by:

- Shipping company
- Supplier if supplier delivers directly
- Service provider
- Autopro staff/partner
- Pickup office
- Warehouse
- Stop desk/pickup desk partner
- Local payment collection partner

All collector types must be controlled by admin settings and country rules.

---

# 20. Cash Expected Order Status

When client chooses cash:

1. Client selects cash payment.
2. Autopro creates Cash Expected order.
3. Supplier and/or service provider must still confirm within 48 hours.
4. No online money is captured.
5. Order proceeds only after required confirmations.
6. Order timeline shows expected cash amount and expected collector.
7. Final cash amount is visible to client before confirmation.

Cash order statuses include:

- Cash Expected
- Awaiting Supplier Confirmation
- Awaiting Service Provider Confirmation
- Awaiting Cash Collection
- Cash Collected
- Cash Collection Disputed
- Client Refused Payment
- Cash Settled
- Cash Refund Pending
- Cash Refund Completed

---

# 21. Cash Order Risk Check

Autopro must check client trust before allowing cash orders.

Risk check can include:

- Cash payment history
- Previous refused deliveries
- No-show history
- Fake order history
- Return abuse
- Refund abuse
- Fraud reports
- Dispute history
- Client ID verification
- Phone verification
- WhatsApp verification if used
- Email verification
- Device/session checks where legal
- IP checks where legal

If client identity and phone are not verified, client cannot place cash order unless admin manually allows it.

Autopro must prevent blocked users from easily creating second accounts using the same phone, WhatsApp, email, device/session, or IP where legally allowed.

---

# 22. Cash Order Limits and Deposits

Autopro should recommend cash limits to suppliers and service providers but allow flexibility.

Supplier/service provider can set rules such as:

- Accept cash for all orders
- Refuse cash for all orders
- Accept cash only below value limit
- Require partial advance payment above value limit
- Accept cash only from trusted/VIP clients
- Accept cash only in certain regions
- Accept cash only for certain products/services
- Accept cash for repeat clients
- Accept cash for bulk orders with extra confirmation
- Remove cash limits for specific trusted clients

No universal maximum cash order value is required unless country law requires it.

Country legal limits must be respected.

Admin must have manual override.

---

# 23. Client Refuses Cash Payment

If client chooses cash then refuses to pay at delivery or after service, Autopro treats it as serious trust issue unless valid reason exists.

Autopro must support:

- Order marked Client Refused Payment
- Client asked for clarification
- Client trust score reduction if refusal not valid
- Warning
- Return shipping/cancellation fee if legal
- Supplier protected if proof exists
- Shipping company protected if proof exists
- Service provider protected if proof exists
- Cash payment restriction after repeated refusal
- Suspension or account block after repeated abuse
- Staff review if valid reason exists
- VIP/elderly support review before harsh action where appropriate

---

# 24. Shipping Company Cash Collection

If shipping company collects cash:

1. Shipping company delivers package or makes it available for pickup.
2. Client pays cash.
3. Shipping company confirms cash collected.
4. QR/manual confirmation is recorded.
5. Client confirmation can be recorded.
6. Shipping company balance shows money owed to Autopro, supplier, or other parties.
7. Autopro reconciles supplier amount, shipping amount, and Autopro fee.
8. Shipping settlement happens by contract schedule.

Settlement can be:

- Per order
- Daily
- Weekly
- Monthly
- Custom contract period

---

# 25. Partner Desk Engine

Autopro must support a limited-access partner engine for shipping companies, pickup offices, stop desks, warehouses, and local cash collection partners.

Example partner:

- ZR Express in Algeria

Partner employees can confirm:

- Client picked up package
- Payment received
- Client no-show
- Client took replacement after returning old part
- Client returned package
- Package delivered
- Cash collected
- Refund cash paid if applicable
- Return package received
- Desk payment received for business bills if enabled

Partner employee access must be limited to assigned office, desk, shipment, or role.

Partner employees must not modify final bills unless admin explicitly allows.

---

# 26. Partner Desk Final Bill Payment

Autopro can allow business accounts to pay Autopro bills through approved partner desks if legally and contractually allowed.

Business bill can include:

- Autopro fees
- Plan fees
- Service fees
- Shipping fees
- Refund reimbursement
- Store credit reimbursement
- Other platform bills

When partner desk confirms payment:

- Payment status updates
- Business dashboard updates
- Admin dashboard updates
- Finance records update
- Proof is saved
- Receipt is generated
- Bill status updates
- Ledger records update

Partner desk fees can be:

1. Deducted from Autopro fee/settlement.
2. Added to weekly/monthly/custom settlement paid by Autopro or finance staff.

---

# 27. Business Debt System

Autopro must have a live business debt system.

Business debt can include:

- Autopro commission
- Plan/subscription fee
- Refund reimbursement
- Store credit reimbursement
- Penalty fee if legal
- Shipping settlement difference
- Cash collected but not remitted
- Partner desk fee
- Chargeback loss if responsible
- Manual admin adjustment
- Other approved business obligations

Business debt must be visible and updated continuously in the business dashboard.

---

# 28. Business Debt Payment Plans

Trusted suppliers and service providers can divide large Autopro debt into installments.

Rules:

- Available mainly for trusted businesses.
- Usually requires more than 6 months on platform unless admin approves.
- Can require paid plan or eligible plan level.
- Debt can be divided over 4 to 6 months.
- No interest or extra profit unless legally/business approved later.
- Admin/full owner can approve, reject, modify, or cancel.
- Missed installments trigger reminders, restrictions, or payout deductions.

---

# 29. Business Debt Deadlines

Autopro must support flexible debt deadlines:

- Weekly, such as every 7 business days
- Monthly
- Monthly plus plan billing
- Contract-based
- Country-based
- Trust-level based
- Manually set by admin

Trusted businesses with paid plans can be allowed 4 to 6 month payment plans.

---

# 30. Business Debt Non-Payment Escalation

If business does not pay Autopro debt, Autopro supports escalation:

1. Dashboard alert after deadline.
2. Reminder after 24 hours.
3. Warning after 48 hours.
4. New orders/bookings limited after 72 hours for non-trusted/risky businesses.
5. Payout held after 72 hours where appropriate.
6. Visibility reduced after 7 days for eligible non-paying businesses.
7. Account restricted after 7 days for eligible non-paying businesses.
8. Suspension after 15 days for serious/repeated non-payment.
9. Staff/admin/legal review for serious debt or fraud.
10. Permanent ban for repeated fraud.

VIP/trusted businesses receive softer handling:

- More reminders
- Staff messages/calls
- Payment plan option
- Temporary grace period
- Internal warning first
- Existing VIP bookings should not be cancelled automatically
- Amount can roll into next bill if admin allows

Repeated abuse removes trusted protection.

---

# 31. Business Payment Methods for Paying Autopro

Businesses can pay Autopro fees/debt through:

- Online card/payment provider
- Bank transfer
- Local cash payment at partner desk
- Deduction from future payouts
- Wallet/credit balance if legally allowed
- Country-specific payment methods
- Automated partner settlement
- Manual admin-recorded payment only as exception

Manual payments must be permission-controlled and audit logged.

---

# 32. Deducting Debt From Future Payouts

Autopro must support automatic deduction of unpaid business debt from future payouts.

Rules can depend on:

- Business trust level
- VIP status
- Plan level
- Payment history
- Debt age
- Debt type
- Country law
- Contract
- Admin setting

For trusted/VIP businesses, unpaid amount can be added to next bill instead of immediate deduction if history is strong.

---

# 33. Negative Business Balance

Autopro must support negative business balances where appropriate.

Rules:

- Allowed under limits.
- Allowed mainly for trusted/VIP businesses.
- Not normally allowed for new/risky businesses unless admin approves.
- Limits depend on country, currency, history, return history, refund history, and payment reliability.
- Admin/full owner and finance roles can control limits.
- Negative balance triggers alerts.
- Long unpaid negative balance can trigger restrictions.
- Trusted/VIP businesses can have longer grace periods, such as up to 4 months if admin allows.
- Growing businesses with good behavior can receive installment handling up to 6 months if admin approves.

---

# 34. Supplier Refund Reimbursement

If Autopro gives client store credit or refund first, the responsible party must reimburse Autopro.

Responsible parties can include:

- Supplier
- Service provider
- Shipping company
- Warehouse
- Partner desk
- Client if responsible and law allows
- Autopro if platform fault

Reimbursement connects to:

- Refund case
- Return case
- Store credit ledger
- Responsibility decision
- Business debt balance
- Invoice/bill
- Payment deadline
- Dispute record

---

# 35. Chargebacks

Chargeback responsibility is decided by proof, country law, and payment provider rules.

Possible responsibility:

- Autopro if platform/payment error caused issue
- Supplier if wrong, damaged, unavailable, or unshipped product caused it
- Service provider if service failure caused it
- Shipping company if lost, delayed, or damaged delivery caused it
- Client penalized if chargeback is fraudulent or abusive
- Staff/admin decides by proof where automation cannot decide
- Country/payment provider rules apply first

Fraudulent chargebacks can lead to:

- Client trust score reduction
- Restriction
- Suspension
- Account block for repeated fraud

VIP/long-term clients require investigation before harsh action where appropriate.

---

# 36. Payout Hold During Dispute

When a dispute opens, related payout, refund, reimbursement, and business debt movement must be held when needed.

Held items can include:

- Supplier payout
- Service provider payout
- Shipping company payout
- Refund release
- Store credit reimbursement
- Business debt update
- Chargeback responsibility
- Partner settlement

Hold remains until:

- Automated dispute decision
- Staff/admin release
- Legal/payment provider decision
- Dispute settlement
- Appeal decision if applicable

---

# 37. Business Statements

Every supplier, service provider, shipping company, and partner business must have statements.

Statements can be monthly and custom date range.

Statements must show:

- Sales
- Orders
- Bookings
- Deliveries
- Payouts
- Autopro fees
- Plan fees
- Refunds
- Store credit reimbursement
- Debt
- Payments made to Autopro
- Pending balance
- Available balance
- Held balance
- Negative balance
- Disputes
- Adjustments
- Taxes if applicable
- Partner desk payments
- Chargebacks if applicable

Statements must be saved and accessible from business dashboard and admin dashboard.

---

# 38. Staff Financial Permissions

Money-related tools require role-based permissions.

Rules:

- Full owner controls major changes.
- Full owner grants limited permissions to employees.
- Finance staff can modify within assigned limits.
- Senior support can request adjustment only.
- Support can view only where allowed.
- Manager can approve larger adjustments if allowed.
- High-value changes require two-person approval.
- Every change must be audit logged.
- Owner controls who approves high-value changes.

Adjustment requests must include:

- Reason
- Linked user/business profile
- User/business ID
- Linked order/service/payment/invoice
- Amount
- Proof
- Staff notes
- Approval path
- Date/time
- Final decision

---

# 39. Part 1 Completion Note

This clean file currently includes Part 1 of the payments cleanup:

- Core rules
- Balance types
- Transaction records
- Payment methods
- Country payment rules
- Online product payments
- Supplier confirmation
- Supplier payout
- Cash product payments
- Partner desk engine
- Business debt
- Negative balances
- Chargebacks
- Staff financial permissions

Next cleanup part to add:

- Shipping company settlement detailed rules
---

# 40. Shipping Company Settlement Rules

This section consolidates the confirmed shipping company settlement, delivery, cash collection, warehouse, customs, insurance, and logistics partner rules.

Autopro must support shipping/logistics companies as serious business partners, not only simple delivery labels.

The shipping company system must be:

- Flexible
- Legal by country
- Automated where possible
- Proof-based
- Secure
- Expandable
- Role-based
- Connected to payments
- Connected to cash collection
- Connected to supplier payout
- Connected to client trust
- Connected to disputes
- Connected to future owner platforms where legally and contractually allowed

---

# 41. Shipping Company Account Type

Shipping companies must have their own business account type inside Autopro.

Shipping companies do not need a full public marketplace profile like suppliers or service providers by default.

Shipping companies can have private or limited public information such as:

- WhatsApp number
- Phone number
- Facebook page
- Website link
- Office/location information if allowed
- Support contact details

Autopro must support different shipping company account levels, including:

- Full shipping partner
- Limited delivery partner
- Cash collection partner
- Pickup desk
- Warehouse
- Stop desk
- Local delivery office
- International logistics partner
- Route-specific partner
- Strategic partner

Admin/full owner must control exactly what each shipping company can access.

The structure must be flexible so if a shipping company grows or expands services, Autopro can support that expansion without rebuilding the system.

---

# 42. Shipping Company Roles and Employees

Shipping companies must be able to create employee accounts for workers, offices, and internal teams.

Possible employee roles include:

- Company owner/admin
- Regional manager
- Office/desk worker
- Delivery driver
- Warehouse worker
- Finance employee
- Support employee
- Cash collection employee
- Returns employee
- Pickup desk employee

The number of employees and unlocked features can depend on:

- Shipping company plan level
- Contract
- Country
- Admin settings

Autopro must support flexible employee expansion so a shipping company can start small and grow inside the platform.

---

# 43. Shipping Company Employee Permissions

Every shipping company employee must have limited permissions based on their job.

Standard permission examples:

- Driver can confirm delivery only.
- Desk worker can confirm pickup, payment, return, and no-show only.
- Finance employee can view settlements, bills, and cash collection records only.
- Manager can view region reports and assigned office performance.
- Company admin can manage employees and permissions.
- Warehouse worker can confirm package received, stored, handed off, damaged, or returned.
- Support employee can view assigned shipment support cases.
- No employee can see unrelated client/private data.

Autopro must provide standard role templates and default permission groups to make setup easy.

Shipping company admin/owner can add, modify, or remove roles and permissions according to company needs, within limits allowed by Autopro.

Autopro admin/full owner keeps final control over platform-level permissions and restrictions.

Every permission change must be audit logged.

Autopro should include useful shipping/logistics software patterns such as:

- Office-level access
- Region-level access
- Driver route assignment
- Delivery proof upload
- Cash collection summary
- Return package tracking
- Settlement reports
- Failed delivery reason tracking
- Employee activity logs
- Performance dashboards
- Fraud alerts
- Route performance analytics
- Plan-based premium tools

---

# 44. Package Handoff From Supplier to Shipping Company

When a supplier hands a package to a shipping company, the handoff must be confirmed from both sides where possible.

This confirmation matters because supplier payout and Autopro fee handling can depend on it.

Accepted confirmation methods include:

- QR scan
- Manual digital confirmation
- Supplier confirmation
- Shipping company confirmation
- Photo/video proof if needed
- Staff/admin confirmation if disputed
- Shipping scan
- Pickup receipt
- Package label scan
- Warehouse receiving scan
- Timestamped handoff record

Confirmed rule:

Package handoff should require both supplier confirmation and shipping company confirmation unless admin, country, route, or partner rules allow a simpler method.

The package handoff record must connect to:

- Order ID
- Supplier ID
- Shipping company ID
- Driver/employee ID if applicable
- Package ID/tracking ID
- Date/time
- Location if legal and available
- Confirmation method
- Photos/videos if needed
- QR/scan record if used

---

# 45. Package Handoff Effect

When the shipping company confirms package received from supplier:

- Order timeline updates.
- Supplier dashboard updates.
- Shipping company dashboard updates.
- Client dashboard updates.
- Admin dashboard updates.
- Messaging/timeline proof updates.
- Shipping tracking starts or updates.
- Client is notified.
- Supplier payout can become available depending on supplier trust/risk rules.
- Shipping company responsibility begins from that point.
- Database records exact confirmation time and proof.

This confirmation must be stored as a digital step for accuracy, automation, and dispute proof.

---

# 46. Shipping Company Dashboard Growth and Profit Features

Shipping company dashboards should show operations and business growth.

The dashboard can show:

- Deliveries completed
- Deliveries failed
- Cash collected
- Revenue earned
- Fees owed
- Settlement status
- Average delivery time
- Late delivery rate
- Return rate
- Dispute rate
- Damage/loss rate
- Office performance
- Driver performance
- Route performance
- Growth compared to first month
- Profit trend
- Recommended upgrades
- Plan benefits
- Missed opportunities
- Suggested expansion areas

Advanced analytics can be plan-based premium features.

The goal is to make Autopro valuable for shipping companies so they prefer using Autopro tools instead of buying separate expensive software.

---

# 47. Successful Delivery Confirmation

Successful delivery must support flexible confirmation methods depending on country, shipping method, and partner setup.

Accepted delivery confirmation methods include:

- Client QR scan
- Driver QR scan
- Client manual confirmation
- Shipping company confirmation
- Delivery photo where legal
- GPS/location where legal
- Signature where required by law or contract
- Pickup desk confirmation
- Office confirmation
- Delivery scan
- Staff/admin confirmation if disputed

Autopro must make delivery confirmation legal, easy, automated where possible, and flexible.

The result must be one clear delivery confirmation record even if different countries or shipping companies use different confirmation methods.

---

# 48. Delivery Confirmation Effect

When delivery is confirmed:

- Order status becomes Delivered.
- Database updates first.
- Client dashboard updates.
- Supplier dashboard updates.
- Shipping company dashboard updates.
- Admin dashboard updates.
- Messaging/order timeline updates.
- Shipping company payout becomes available according to contract/rules.
- COD cash collection is checked if applicable.
- Supplier payout rules continue or complete.
- Return/dispute window starts if applicable.
- Client receives receipt/invoice update.
- Proof is saved.
- Trust score signals can update.

If COD applies, delivery confirmation alone is not enough to close the payment flow unless cash collection is also confirmed.

Autopro must support country-specific rules for delivery confirmation, return windows, dispute windows, tax documents, and receipt requirements.

---

# 49. Cash Collected by Shipping Company

If a shipping company collects cash from the client, the shipping company owes the relevant amount to Autopro, supplier, or settlement system according to contract.

Settlement timing can be:

- Immediately after cash collection confirmation
- End of day
- Weekly
- Monthly
- Based on contract
- Based on country law
- Based on shipping company service model
- Controlled by admin

Cash collection must be:

- Confirmed
- Timestamped
- Linked to order
- Linked to invoice/payment record
- Linked to collector/employee
- Linked to shipping company account
- Reconciled automatically
- Visible in settlement records

---

# 50. Shipping Company Payout Timing

Autopro can pay shipping companies their delivery fee according to contract and country rules.

Shipping company payout can happen:

- After successful delivery
- After COD cash is collected and confirmed
- After return/dispute window ends
- In weekly batch settlement
- In monthly batch settlement
- Immediately for trusted shipping companies if admin enables it
- Based on country rules
- Based on contract
- Based on admin settings

Settlement timing should be agreed from day one, such as weekly or monthly.

If a shipping company does not collect or receive due settlement at the exact time, the amount can automatically roll into the next settlement bill until collected or paid.

If Autopro has an issue paying a shipping company on time, automatic notices must be sent with a clear expected payment date.

---

# 51. Shipping Company Settlement Statement

Shipping companies must receive settlement statements.

Statements can include:

- Deliveries completed
- Deliveries failed
- Cash collected
- Cash owed to Autopro
- Cash owed to supplier
- Cash owed to shipping company
- Shipping fees earned
- Autopro logistics/platform fees
- Refunds handled
- Returns handled
- Penalties if legal
- Adjustments
- Disputes
- Paid/unpaid settlement status
- Taxes if applicable
- Country-required documents if applicable
- Office/employee breakdown if available
- Route breakdown if available

Statements must be automated, detailed, saved in the database, and accessible from shipping company dashboard and admin dashboard.

Autopro must research country-specific legal/tax/receipt requirements and use them as default settings where applicable.

---

# 52. Shipping Company Fees to Autopro

Shipping companies can pay Autopro fees.

Fee types can include:

- Platform fee
- Logistics fee
- Cash collection fee
- Partner engine usage fee
- Settlement fee
- Route management fee
- Premium dashboard/tool fee
- Plan/subscription fee

The standard direction is that shipping companies can pay fees per order plus plan fees if they choose paid plan features.

Fees and discounts must be configurable by:

- Country
- Company
- Contract
- Route
- Service type
- Cash collection role
- International settlement role
- Risk level
- Plan level
- Volume
- Admin decision
- Assigned staff permissions

Discounted fees can apply when shipping companies provide extra service or take extra risk.

Example:

A shipping company pays the supplier in China first, then collects equivalent cash in Algeria.

This shipping company can receive discounted Autopro fees because it helps solve international supplier payment and local cash collection problems.

Admin can also set no-fee or reduced-fee arrangements for selected strategic partners.

---

# 53. Shipping Company Pays Supplier Abroad and Collects Local Cash

Autopro must support a model where a trusted shipping/logistics company pays a supplier abroad and collects equivalent local cash in the destination country.

Example:

```txt
Shipping/logistics company pays supplier in China.
Client pays cash locally in Algeria.
Shipping/logistics company receives local settlement/cash.
Autopro tracks the full settlement ledger.
```

This model is especially important for cash-heavy countries.

Confirmed rule:

This model must be supported only with:

- Approved trusted shipping/logistics partners
- Contract
- Proof
- Settlement ledger
- Exchange-rate rules
- Legal review

The model can be standard in cash-heavy countries where useful, but it must remain optional and configurable.

---

# 54. Shipping Company ID Reuse for Future Owner Platforms

Shipping company ID, trust score, reputation, route history, settlement history, and account data should be structured so they can be reused in future owner platforms where legally and contractually allowed.

Future platform reuse can include:

- Same trusted shipping company account structure
- Same company ID
- Same verified business data
- Same performance history
- Same route capability
- Same cash collection capability
- Same settlement reliability score
- Same employee/office structure if enabled
- Same plan/contract relationship if applicable

Admin controls can include:

- Enable for Autopro only
- Enable for a specific future project
- Disable for future projects
- Delete/anonymize if legally required
- Modify project access
- Restrict by country
- Restrict by service type

This must follow privacy law, contracts, and data retention rules.

---

# 55. Exchange Rate for International Shipping Settlement

If a shipping company pays a supplier abroad and collects local cash, Autopro must support controlled exchange-rate rules.

Exchange-rate control can include:

- Admin-approved rate
- Assigned employee-approved rate
- Shipping company contract rate
- Payment provider/bank rate where countries use banking-based payment flows
- Market/procurement reference rate where legally usable
- Route-specific rate
- Manual finance/admin override
- Country law requirement

Route-specific rate is confirmed as required.

Route-specific rate means the approved rate can be different for each shipping/payment route.

Examples:

- China to Algeria
- Turkey to Algeria
- Europe to Algeria
- UAE to Algeria
- Local Algeria to Algeria

Each route can have different shipping cost, currency risk, supplier settlement method, customs risk, cash collection method, and pricing reality.

Autopro must make exchange-rate calculations realistic, frequently updated where possible, secure, audit logged, legal, and flexible.

---

# 56. Shipping Company Loses Package

If shipping company confirms it received the package from supplier and the package is later lost, shipping company is responsible unless proof shows another party caused the loss.

Responsibility rules:

- Shipping company responsible if package was lost after confirmed handoff.
- Supplier responsible only if bad packaging or wrong handoff caused loss and proof confirms it.
- Autopro responsible only if package was received and checked into an Autopro-controlled warehouse, then lost due to Autopro/warehouse fault.
- Warehouse/partner responsible if loss happened after warehouse received and accepted package.
- Staff/admin decides by proof when automation cannot decide.
- Insurance/contract rules apply.
- Country law applies first.

Autopro must support automatic international-to-local route transition.

Example flow:

1. China to Algeria shipment arrives.
2. Autopro/partner warehouse confirms received.
3. System links package to original client order.
4. System prepares Algeria local delivery details.
5. System generates local carrier label/papers, such as ZR Express papers.
6. Employee can print local delivery label.
7. Client dashboard updates.
8. Supplier, shipping, local carrier, and admin dashboards update.

---

# 57. Shipping Company Damages Package

If package is damaged during shipping, responsibility depends on proof.

Responsibility rules:

- Shipping company responsible if transport caused damage.
- Supplier responsible if bad packaging caused damage.
- Warehouse/partner responsible if damage happened in warehouse/partner location.
- Staff/admin decides by proof when automation cannot decide.
- Insurance/contract rules apply.
- Country law applies first.

If shipping company notices bad packaging before shipping:

1. Shipping company flags package as Packaging Problem.
2. Supplier is notified.
3. Package should not continue until issue is resolved unless admin/contract rules allow.
4. Supplier can fix/change packaging.
5. If supplier refuses to fix packaging and accepts responsibility, package can continue under Supplier Packaging Responsibility.
6. Shipping company is protected from packaging-related damage responsibility after proper proof and notice.
7. Decision is saved in order timeline and dispute proof.

---

# 58. Late Delivery Responsibility

Shipping company is responsible for late delivery when proof shows delay was caused by shipping company.

Responsibility examples:

- Shipping company responsible if delivery exceeds promised timeline due to shipping company action/inaction.
- Shipping company responsible if tracking shows delay caused by shipping company.
- Supplier responsible if supplier handed package late.
- Client responsible if client was unavailable, did not answer, refused delivery, or missed pickup.
- Weather, disaster, war, emergency, strikes, customs block, or force majeure requires review.
- Staff/admin decides by proof when automation cannot decide.
- Country/contract rules apply.

Autopro must automate late delivery detection where possible by comparing:

- Promised timeline
- Supplier handoff date
- Shipping scan dates
- Route standard duration
- Delivery attempt records
- Client availability records
- Force majeure flags
- Country/region disruption alerts where available

---

# 59. Client No-Show at Pickup Desk

If client does not pick up a package at pickup desk:

- Client receives reminder.
- Client receives clear pickup deadline.
- No-show is recorded.
- Client dashboard updates.
- Shipping company/desk dashboard updates.
- Supplier dashboard updates if needed.
- Admin dashboard updates.
- Client trust score can be affected if no valid reason exists, especially for new clients.
- Storage fee can be added if legal.
- Transportation fee can be added if legal.
- Return to supplier/warehouse can start after deadline.
- Staff review applies for VIP/elderly clients where appropriate.
- Shipping company/desk is protected if proof exists.

Trusted/VIP clients and elderly clients should receive softer handling and human support review before harsh penalties where appropriate.

---

# 60. Return Package Handled by Shipping Company

When a client returns a package through a shipping company, Autopro must require clear confirmations.

Return confirmations can include:

- Client return request approved by supplier or Autopro rules
- Shipping company receives return package
- QR/manual return confirmation
- Photo/video proof if needed
- Package delivered back to supplier or warehouse
- Supplier confirms returned package received
- Supplier inspection result
- Refund/replacement decision
- Dispute link if any
- Return shipping cost responsibility
- Date/time records
- Employee/office/driver ID if applicable

The return package flow must update:

- Client dashboard
- Supplier dashboard
- Shipping company dashboard
- Admin dashboard
- Refund status
- Return status
- Dispute status if applicable
- Payment/payout hold status
- Credit/reimbursement ledger if applicable

---

# 61. Failed Delivery Attempts

If delivery or handover fails, Autopro must record the failed attempt.

A failed delivery attempt must include:

- Order ID
- Package/tracking ID
- Shipping company ID
- Driver/employee/desk ID if applicable
- Date/time
- Location if legal and available
- Failed delivery reason
- Optional written explanation
- Proof if needed
- Next action
- Reschedule status
- Fee status if applicable
- Responsible party if clear
- Staff/admin review status if needed

When delivery attempt fails:

- Attempt is recorded.
- Reason is required.
- Standard failed-delivery reason list appears.
- Text box allows explanation.
- Client is notified.
- Supplier is notified if needed or if supplier enabled notifications.
- Admin dashboard updates.
- Driver/desk can add proof if needed.
- Second attempt can be scheduled if allowed.
- Extra delivery fee can apply if legal/admin enabled.
- Client trust score can be affected if client caused repeated failures.
- Shipping company trust score can be affected if shipping company caused repeated failures.

Client trust score should not be harshly affected after one failed attempt unless fraud or serious abuse is clear.

---

# 62. Failed Delivery Reasons

Autopro must support structured failed delivery reasons.

Reasons can include:

- Client did not answer phone
- Client did not answer WhatsApp/contact method
- Client not at address
- Client changed address at last minute
- Wrong address from client
- Address unclear
- Driver could not understand location
- Client refused package
- Client refused cash payment
- Client asked to reschedule
- Driver did not attempt delivery
- Driver could not access location
- Security/building access issue
- Weather issue
- Disaster, war, fire, road issue, or emergency
- Package damaged before delivery
- Package missing or lost
- Office/pickup desk closed
- Customs/import issue
- Supplier gave wrong client information
- Supplier gave wrong phone number
- Autopro system/address error
- Local carrier issue
- Warehouse delay
- Pickup deadline missed
- Cash collection problem
- Other reason with required explanation

For unclear addresses or access problems, delivery employee should attempt to contact client before marking failed, where practical and legal.

---

# 63. Delivery Reschedule Rules

Autopro must support flexible delivery rescheduling.

Parties who can reschedule depending on reason and permission:

- Client
- Shipping company
- Supplier
- Admin/support staff
- Automated system

New clients can normally receive up to 2 delivery attempts if allowed.

Trusted/VIP clients can receive up to 3 delivery attempts and a longer reschedule window, such as 4 days, if admin rules allow.

Elderly clients or clients with support needs receive softer handling and human support before harsh consequences.

Automation must be available but not the only method.

---

# 64. Delivery Reschedule Fees

Autopro must support delivery reschedule fees where legal and enabled.

Rules:

- No fee for first reschedule.
- Fee can apply after repeated client-caused failures.
- Fee can apply if client repeatedly gives wrong address.
- Fee can apply if client repeatedly misses delivery or pickup.
- Fee can apply if client requests extra attempts beyond allowed free attempts.
- Supplier can be responsible if supplier repeatedly gave wrong information or shipped late.
- Autopro absorbs cost if platform/system error caused issue.
- Country law and admin settings decide final rules.

Trusted/VIP/elderly clients should receive support review before fees where appropriate.

All fees must be shown clearly before client confirms an action that creates a fee, where legally required.

---

# 65. Storage Fee at Pickup Desk or Warehouse

Autopro must support storage fees where legal.

Rules can include:

- No fee during first grace period.
- Fee after pickup deadline.
- Different fees by country.
- Different fees by partner.
- Different fees by warehouse/pickup desk.
- VIP/elderly clients receive staff contact before fee where appropriate.
- Admin controls storage fee rules.
- Partner desk/warehouse can receive part of storage fee if contract allows.

After repeated failed pickup/delivery attempts, client can be offered:

1. Reschedule if allowed.
2. Keep package at warehouse/pickup desk for fixed storage fee.
3. Return package to supplier/warehouse after deadline.

Trusted/VIP/elderly clients can be allowed storage for a specific period, such as 15 days, if legal and enabled.

---

# 66. Return to Supplier After Failed Delivery or No-Show

Autopro must support automatic and manual return-to-supplier or return-to-warehouse rules.

Package can be returned after:

- Pickup deadline expires
- Repeated delivery failures
- Client refuses package
- Client refuses cash payment
- Staff/admin review
- Country/partner rule triggers automatic return
- Supplier chooses return/hold/dispose option if legal
- Warehouse holding period ends

VIP/elderly clients receive extra contact attempts before return where appropriate.

Supplier can choose return, hold, dispose, or another legal action only if country law, contract, and platform rules allow.

---

# 67. Return Shipping Fee Responsibility After Failed Delivery

Return shipping fee responsibility is decided by proof, country law, contract, and platform rules.

Possible responsibility:

- Client pays if client caused failure or refused package without valid reason.
- Supplier pays if supplier caused wrong information, wrong item, bad packaging, or late shipping.
- Shipping company pays if shipping company caused failure.
- Autopro pays if platform/system error caused failure.
- Fee can be split if responsibility is shared.
- Staff/admin decides by proof.
- Country law/contract applies first.

If client refuses a valid package without valid reason, client can be responsible for return shipping fee where legal.

If client paid online, eligible refund can happen according to rules, but return fee can be deducted or added to account/next order where legal.

If client chose COD and refuses payment without valid reason, return fee can be added to account/next order where legal.

Trusted/VIP/elderly clients receive staff review before return fees where appropriate.

---

# 68. Shipping Company Disputes

Shipping companies must be able to open disputes.

Examples:

- Client says package was not delivered but driver has proof.
- Supplier says package was not picked up but shipping company has proof.
- Supplier gave damaged or badly packaged item.
- Supplier gave wrong shipment information.
- Client refused COD payment.
- Client no-show after allowed attempts.
- Autopro settlement not paid.
- Wrong fee charged.
- Package loss responsibility disagreement.
- Package damage responsibility disagreement.
- Return package disagreement.
- Warehouse handoff disagreement.
- Cash collected/remitted disagreement.
- Customs/import responsibility disagreement.

Shipping company can be allowed to refuse, return, or flag badly packaged items.

Dispute handling must be proof-based, automated where possible, and escalated to staff/admin when needed.

---

# 69. Shipping Company Trust and Performance Score

Shipping companies must have trust/performance scores.

Score factors can include:

- Delivery success rate
- Late delivery rate
- Lost package rate
- Damage rate
- Cash settlement reliability
- Proof quality
- Dispute rate
- Client complaints
- Supplier complaints
- Fraud/suspicious activity
- Staff review results
- Return handling quality
- Pickup desk performance
- Office performance
- Driver performance
- Settlement accuracy
- API/portal reporting reliability

Score must account for events outside shipping company control:

- Weather
- War
- Fire
- Disaster
- Road closure
- Customs delay
- Force majeure
- Client no-show
- Supplier late handoff
- Autopro/system issue

New shipping companies can be reviewed after repeated failures, such as 4 failed deliveries, depending on country and volume.

Trusted/VIP shipping companies receive more understanding and staff support if unusual problems appear.

---

# 70. Shipping Company Penalties and Rewards

Autopro must support penalties and rewards for shipping companies.

Penalties can include:

- Warning
- Reduced visibility
- Reduced route priority
- Payout hold
- Settlement hold
- Account restriction
- Lower trust score
- Plan downgrade
- Suspension
- Ban for fraud
- Loss of premium features
- Loss of international settlement access
- Staff/admin review

Rewards can include:

- Higher route priority
- Lower Autopro fee
- Faster settlement
- Featured/approved partner badge
- More delivery volume
- Better plan features
- Access to international settlement model
- VIP client service tools
- Advanced analytics
- Better support priority
- Growth recommendations

Rewards and penalties must be flexible, automated where possible, and admin-controlled.

---

# 71. Shipping Company Plans and Premium Features

Shipping companies must be able to have plans like suppliers and service providers.

Plan features can include:

- More employee accounts
- More office accounts
- Advanced dashboard
- Route analytics
- Finance reports
- Cash collection reports
- API/integration access
- Bulk label printing
- Warehouse module
- Pickup desk module
- Staff permission tools
- Faster support
- Lower Autopro fee
- Featured/approved partner status
- International settlement tools
- Multi-country shipping tools
- Route expansion tools
- VIP client handling tools
- Advanced reconciliation tools
- Fraud alerts
- Performance reports
- Growth recommendations

Autopro must support different plan types for:

- Local shipping companies
- National shipping companies
- Multi-country shipping companies
- International logistics companies
- Pickup desk networks
- Warehouse partners
- Cash collection partners
- ZR Express-style local partners

Plans must support future owner platforms, not only car parts.

---

# 72. Warehouse Handoff Rules

If package passes through an Autopro warehouse or partner warehouse, Autopro must support structured confirmations.

Warehouse confirmations can include:

- Warehouse receives package
- Package condition checked
- Package stored
- Package relabeled if needed
- Local carrier assigned
- Package handed to next carrier
- QR confirmation
- Scan confirmation
- Manual confirmation
- Photo/video if needed
- Employee ID recorded
- Date/time recorded
- Location recorded if legal
- Condition report
- Damage flag if applicable
- Missing item flag if applicable

Autopro must avoid forcing unnecessary manual confirmation steps if route does not require it.

The priority order is:

1. Get the package to the client legally and safely.
2. Keep all parties informed.
3. Collect accurate proof.
4. Investigate repeated missing steps.
5. Allow approved exceptions for direct routes or simplified partners.

Repeated missing warehouse/shipping steps should trigger staff investigation unless route exception exists.

---

# 73. Warehouse Damage or Loss Responsibility

If package is lost or damaged in warehouse, responsibility depends on proof.

Possible responsibility:

- Warehouse/partner responsible if loss/damage happened after warehouse received and accepted package.
- Autopro responsible if warehouse is Autopro-controlled and Autopro/warehouse fault caused issue.
- Shipping company responsible if damage happened before warehouse receiving confirmation.
- Supplier responsible if bad packaging caused damage.
- Staff/admin decides by proof when automation cannot decide.
- Insurance/contract applies.
- Country law applies.

Condition must be recorded at warehouse receiving so responsibility can be assigned fairly.

---

# 74. Customs and Import Tracking

Autopro must support customs/import tracking for international orders.

Tracking can include:

- Customs status
- Import fees
- Duties/taxes
- Documents required
- Package held by customs
- Customs delay
- Customs release
- Customs rejection
- Client responsibility
- Supplier responsibility
- Shipping company responsibility
- Autopro/platform responsibility
- Country-specific import rules
- Admin/staff review
- Shipping company proof upload
- Document upload
- Customs notes
- Estimated delay
- Updated delivery timeline

Shipping company can select customs/import issue as delayed delivery reason.

Autopro must support flexible customs options by country, route, supplier, shipping company, product category, and legal requirement.

---

# 75. Customs and Import Fees

Customs/import fees must be agreed and clear before purchase whenever possible.

Possible responsibility:

- Client pays if shown before purchase.
- Supplier pays if included in product/shipping agreement.
- Shipping/logistics partner pays first and bills later if contract says so.
- Autopro pays only if platform promise/error caused issue.
- Country law decides where applicable.
- Incoterms/shipping agreement decides where applicable.
- Admin controls rules by country, supplier, shipping route, product category, and contract.

Autopro must be flexible enough to support different international trade models.

---

# 76. Shipping Insurance

Autopro must support shipping insurance where legally and commercially available.

Insurance options can include:

- Optional insurance paid by client
- Required insurance for high-value products if selected by supplier/client/admin rules
- Supplier-purchased insurance
- Shipping company included insurance
- Autopro-offered insurance if legally/partner approved
- Insurance by category
- Insurance by product value
- Insurance by country
- Insurance by route
- Admin-controlled availability

Insurance options must be clear before purchase where applicable.

---

# 77. Insurance Claim Flow

If insured package is lost or damaged, Autopro must support an insurance claim flow.

Flow:

1. Claim opens automatically or manually.
2. Proof is collected.
3. Related payout/refund is held if needed.
4. Shipping company and/or insurer reviews.
5. Staff/admin reviews if needed.
6. Client receives refund, replacement, or store credit depending on decision.
7. Responsible party or insurer reimburses Autopro or supplier according to settlement rules.
8. Claim record is saved permanently.
9. Ledger and statements update.
10. Dashboards update.

---

# 78. Shipping Company API and Integration Direction

Autopro must be structured from day one to later integrate with shipping company systems.

Future integrations can include:

- Automatic label creation
- Tracking synchronization
- Delivery status synchronization
- Cash collection synchronization
- Settlement synchronization
- Webhooks/API
- Bulk upload if API is not available
- CSV/Excel import
- Private partner portal if no API exists
- Label printing
- Return label creation
- Pickup desk status sync
- Warehouse status sync

Example:

Autopro should be able to integrate with ZR Express for labels, tracking, pickup confirmation, delivery confirmation, and cash collection if ZR Express provides an API or compatible import method.

External systems must receive limited scoped access only.

Security direction:

- External systems access only assigned shipments/tasks.
- API keys/tokens are revocable.
- Sensitive client/profile/vehicle data is not exposed unless necessary and legal.
- All external changes are audit logged.
- Suspicious integration behavior can be blocked automatically.
- Manual staff review required before restoring suspicious access.
- Data validation prevents external systems from corrupting Autopro records.
- Integration permissions adjustable by admin.

---

# 79. If Shipping Company Has No Software or API

If local shipping company has no modern software/API, Autopro must provide tools so they can still work inside platform.

Autopro can provide:

- Private partner portal
- Mobile-friendly web page
- Office login
- Driver login
- QR scan tool
- Manual confirmation forms
- Bulk Excel/CSV upload
- Printable labels
- Settlement dashboard
- Cash collection dashboard
- Pickup desk dashboard
- Return handling forms
- Failed delivery forms
- Proof upload forms
- Basic finance reports

These tools must be easy to use, flexible, secure, and automated as much as possible.

---

# 80. Staff/Admin Controls for Shipping Settlement

Admin/full owner and assigned staff must control shipping settlement settings.

Controls can include:

- Shipping company approval
- Routes allowed
- Countries served
- Regions served
- Fees
- Discounts
- Suggested discounts
- Settlement schedule
- Cash collection limits
- Employee access limits
- Trust score overrides
- Dispute decisions
- Payout holds
- Manual adjustments with audit log
- Suspend shipping partner
- Ban shipping partner
- Generate partner access links
- Revoke partner access links
- Assign staff to shipping partners
- Approve API/integration access
- Disable API/integration access
- Set route-specific rates
- Set customs/import rules
- Set insurance rules
- Set storage fee rules
- Set return shipping fee rules

Autopro can use algorithmic suggestions for discounts, route improvements, or partner upgrades.

Each role can accept, reject, or modify suggested changes depending on permission.

---

# 81. Shipping Company Statement and Payment Reconciliation

Autopro must reconcile shipping company statements automatically.

Reconciliation means Autopro compares expected money, deliveries, fees, and settlements against actual confirmed records.

Autopro must match:

- Delivered orders
- Failed deliveries
- Cash collected
- Cash remitted
- Delivery fees
- Return fees
- Storage fees
- Refunds
- Returns
- Lost/damaged claims
- Autopro fees
- Partner desk fees
- Insurance claims
- Customs/import fees if applicable
- Adjustments
- Overpayments
- Underpayments
- Missing money
- Missing proof
- Duplicate records
- Late settlements

If mismatch is detected, Autopro creates:

- Alert
- Reconciliation issue record
- Suggested adjustment
- Staff/admin review task if needed
- Updated statement status
- Proof request if needed

---

# 82. Shipping Company Access to Client Data

Shipping companies must only see client data needed for assigned delivery, pickup, cash collection, return, or support task.

Possible visible data:

- Delivery name needed for shipment
- Phone number if needed
- WhatsApp/contact method if allowed
- Delivery address for assigned delivery
- Pickup location details
- Order total if COD/cash collection applies
- Product category if needed
- Package size/weight if needed
- Special delivery notes if client entered them
- Legal/tax delivery information if required by country

Shipping companies must not see:

- Unrelated order history
- Private client profile data
- Vehicle history unless needed and legally allowed
- Unrelated addresses
- Unrelated phone numbers
- Private payment details
- Full product details unless needed
- Internal Autopro profit/fee breakdown unless relevant to their own settlement

Users can have different names for different purposes where legal:

- Public profile name
- Shipping name
- Legal billing name
- Company name
- Employee pickup/contact name
- Order contact name
- Influencer/media name later if applicable

Data visibility must be controlled by:

- Country law
- Shipping company role
- Employee permission
- Delivery task
- Partner trust level
- Admin settings
- Client privacy settings where allowed

After delivery, client data should be hidden or minimized except for legal, accounting, audit, dispute, and proof records.

---

# 83. Shipping Company VIP/Trusted Client Lists

Autopro can support shipping-company-specific VIP/trusted client lists as paid-plan or premium feature where legal and privacy rules allow.

Shipping company can create its own preferred/trusted client list.

Autopro can suggest clients based on:

- Verified account
- Excellent delivery behavior
- Repeat successful deliveries
- No repeated no-show
- No repeated refusal
- Good cash behavior
- Low dispute history
- Trusted/VIP status
- Strong proof history

Shipping company can:

- Accept suggested client
- Reject suggested client
- Modify the list
- Add allowed clients manually
- Remove clients from list

Access eligibility can require:

- At least 1 month on Autopro
- No serious warnings
- No repeated reports
- Excellent track record
- Repeated successful delivery use
- No more than allowed failed deliveries in a month
- Approved plan level
- Admin approval if needed

Autopro must protect VIP and trusted clients and must not expose unnecessary private data.

---

# 84. Shipping Company Support and Contact Flow

Shipping company support must be structured and saved.

Support options include:

- AI support first for new/normal shipping partners
- Direct staff support for trusted/VIP shipping partners
- Ticket system
- Emergency phone/contact for urgent cases
- Shipping partner account manager for big partners
- Chat attached to shipment/order
- Support history saved
- Staff notes
- Proof upload
- Internal escalation
- Manager escalation
- Finance escalation for settlement issues

A ticket system means a support case with a unique ID linked to the order, shipment, proof, conversation, staff notes, and decision.

Urgent cases can include:

- High-value package issue
- Cash collection problem
- Lost package
- Customs hold
- Driver safety issue
- Fraud/suspicious activity
- Settlement dispute
- VIP client delivery problem
- Major route disruption

---

# 85. Part 2 Completion Note

This clean file now includes Part 2 of the payments cleanup:

- Shipping company accounts
- Shipping company roles and permissions
- Package handoff
- Delivery confirmation
- Cash collection
- Shipping company payout
- Shipping company statements
- Shipping company fees
- International supplier payment by shipping partner
- Route-specific exchange rates
- Package loss and damage
- Late delivery
- Pickup desk no-show
- Failed delivery attempts
- Rescheduling
- Storage fees
- Return shipping responsibility
- Shipping company disputes
- Shipping company trust scores
- Shipping plans and premium features
- Warehouse handoffs
- Customs/import
- Insurance
- API/integration direction
- Partner portals
- Reconciliation
- Client data access
- Shipping support flow

Next cleanup part to add:

- Refund and return decision matrix
---

# 86. Refund and Return Decision Matrix

This section consolidates confirmed rules for refunds, returns, replacements, store credit, service correction, wrong parts, damaged parts, changed-mind returns, sensitive parts, used/installed parts, return windows, approvals, refund timing, replacement timing, fraud protection, supplier refusal, wrong returned items, and vehicle history updates.

Autopro must make refund and return decisions:

- Legal by country
- Flexible
- Automated where possible
- Proof-based
- Fair to clients
- Fair to suppliers
- Fair to service providers
- Fair to shipping companies
- Protective of Autopro
- Clear before purchase
- Clear during return/refund requests
- Connected to invoices
- Connected to proof
- Connected to disputes
- Connected to vehicle history
- Connected to dashboards

Country law is the standard and highest rule.

---

# 87. Main Refund Outcomes

Autopro must support multiple refund and return outcomes.

Possible outcomes include:

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

Partial refunds are required because a large order can include many parts, and only one part or selected parts may need refund.

Autopro must use detailed bills, invoices, line items, product IDs, service IDs, and payment records so the system can refund only the affected part of an order instead of refunding the entire order.

---

# 88. Client Choice Between Money Refund and Store Credit

If a refund is approved, the client must be offered clear refund options.

Autopro must support:

- Money refund
- Store credit
- Replacement
- Partial refund
- Other legally allowed method

The client should be able to choose money refund or store credit when both are legally and operationally available.

Money refund is required if country law requires it.

Store credit can be offered as an option, not forced unless legally allowed and clearly agreed.

Store credit bonus can be enabled later for selected clients, VIP clients, trusted clients, promotions, or admin-approved situations.

High-risk or fraud-risk cases require staff review before money refund or store credit is released.

---

# 89. Refund Staff Task Automation

Refund, return, fraud, and dispute cases must be automatically routed to staff when human review is required.

Autopro must support a staff task system where cases are assigned based on:

- Case type
- Risk level
- Value
- Country
- Client trust level
- Supplier trust level
- Service provider trust level
- Shipping company trust level
- Staff role
- Staff experience level
- Staff workload
- Staff working hours
- Staff rest hours
- Urgency
- Escalation level

Tasks should be ranked by importance so staff can handle daily work in the correct priority.

Task assignment should consider staff capacity per hour and pause during rest hours or unavailable periods.

More complex tasks should be assigned to more experienced staff.

High-ranked tasks can be escalated from support staff to senior support, then to manager, then to admin/full owner if needed.

Suppliers, service providers, shipping companies, and VIP/trusted clients can request escalation when allowed by role, plan, contract, or legal requirement.

Staff performance can be tracked by:

- Tasks solved
- Task difficulty
- Correct decision rate
- Time to resolution
- Client/business satisfaction
- Escalation quality
- Proof quality
- Manager review
- Reopened cases
- Fraud prevention success

Staff can receive internal credit, rewards, recognition, bonuses, or promotion eligibility based on successful task handling, controlled by admin/full owner and assigned managers.

All staff task actions must be audit logged.

---

# 90. Product Not Received

If a client says a product was not received, Autopro must automatically check available proof first.

Autopro must check:

- Shipping tracking
- Delivery confirmation
- QR confirmation
- Manual confirmation
- Pickup desk confirmation
- Shipping company proof
- Client proof if needed
- Supplier handoff proof
- Warehouse proof if applicable
- Staff/admin notes if any

During investigation:

- Supplier payout can be held.
- Shipping company payout can be held.
- Refund can be held until proof is reviewed.
- Client must receive regular updates.
- Dashboards must update.

Responsibility direction:

- If shipping tracking confirms the package was not delivered, refund/replacement can be approved according to proof and rules.
- Shipping company is responsible if the package was confirmed received by shipping company and then lost.
- Supplier is responsible if the package was never handed to shipping company.
- Warehouse/partner is responsible if package was received into warehouse and lost there.
- Staff/admin decides by proof when automation cannot decide.

The client must be clearly informed whether the issue is:

- Shipping company lost package
- Supplier never handed package to shipping
- Warehouse/partner issue
- Autopro/platform issue
- Still under investigation

---

# 91. Wrong Part Received

If the client receives the wrong part, responsibility must be assigned by proof.

Possible responsibility:

- Supplier responsible if supplier listed wrong part.
- Supplier responsible if supplier shipped wrong part.
- Client responsible if client selected wrong vehicle/part despite clear warnings.
- Service provider responsible if service provider ordered the wrong part for the client.
- Autopro responsible if compatibility engine/platform showed a wrong match.
- Shared responsibility if multiple parties caused the error.
- Staff/admin decides by proof when automation cannot decide.

Proof can include:

- Vehicle ID/history
- Selected vehicle
- VIN if used
- OEM number
- Manufacturer part number
- Supplier listing
- Client selection
- Service provider order request
- Compatibility engine result
- Chat messages
- Invoice
- Photos/videos
- QR/scan records
- Packaging label
- Staff notes

Autopro must make wrong-part responsibility flexible, automated where possible, and fair.

---

# 92. Damaged Part Received

If the client receives a damaged part, responsibility must be assigned by proof.

Possible responsibility:

- Supplier responsible if part was damaged before shipping.
- Supplier responsible if packaging was bad.
- Shipping company responsible if damage happened during transport.
- Warehouse/partner responsible if damage happened there.
- Client responsible if client damaged it after delivery.
- Insurance/contract/country law applies.
- Staff/admin decides by proof when automation cannot decide.

If shipping company notices damaged part or bad packaging before shipping:

1. Shipping company flags the package as damaged or packaging problem.
2. Supplier is notified.
3. Supplier can replace/fix the part or packaging.
4. If supplier refuses and chooses to continue shipping, supplier can accept responsibility.
5. Shipping company is protected from responsibility for that pre-existing issue if proof and notice exist.
6. The decision is saved in the order timeline and dispute proof.

Autopro must handle damaged-part cases legally, fairly, and automatically where possible.

---

# 93. Product Works But Client Changed Mind

The standard Autopro direction is:

```txt
No automatic return/refund only because the client changed mind, unless country law requires it or supplier policy allows it.
```

Changed-mind return can be allowed when:

- Country law requires it.
- Supplier return policy allows it.
- Supplier agrees manually.
- Client is trusted/VIP and supplier chooses softer handling.
- Admin/country rules allow it.

Changed-mind return can be refused when:

- Country law allows refusal.
- Supplier policy refuses it.
- Product is sensitive or non-returnable.
- Product was opened, used, or installed where return is not allowed.
- Product category has stricter legal/platform rules.

Supplier must be able to mark specific parts as non-returnable or sensitive where legal.

If a product is non-refundable or non-returnable, the client must see this clearly before order confirmation.

Supplier should reconfirm sensitive/non-returnable status before accepting the order when required by rules.

If country law forces returns even for changed-mind cases, Autopro must clearly show that rule to the supplier before supplier accepts orders in that country.

Supplier can see client return behavior where legally allowed and relevant, including repeated changed-mind returns, to help protect suppliers from abuse.

---

# 94. Used or Installed Parts

The standard rule is:

```txt
Used or installed parts are not returnable unless defective, warranty-covered, legally required, or supplier agrees.
```

Used/installed parts can be handled differently when:

- Part is defective.
- Warranty applies.
- Supplier agrees to accept return.
- Wrong part was installed because supplier, platform, or service provider caused the error.
- Country law requires a return/refund.
- Staff/admin decides by proof.

If a part was damaged during installation by the client or service provider, responsibility must be assigned by proof.

If a service provider installed a wrong part because of service provider error, the service provider can be responsible.

If the platform compatibility engine caused the wrong installation, Autopro/platform responsibility can apply.

If supplier supplied the wrong part, supplier responsibility can apply.

Autopro must keep these cases flexible, legal, and proof-based.

---

# 95. Electrical, Electronic, and Sensitive Parts

Electrical, electronic, software-related, and supplier-marked sensitive parts must have stricter return rules where legal.

Sensitive parts can include:

- Sensors
- ECUs
- Batteries
- Modules
- Software-related parts
- Programmed parts
- Sealed electronics
- Any part the supplier marks as sensitive within legal limits

Rules can include:

- Stricter return rules
- Return only if unopened/unused
- Return only with proof of defect
- Warranty/testing proof required
- No return after installation unless warranty applies or law requires it
- Supplier approval required where allowed
- Country law applies first

Sensitive item rules must be visible to the client before purchase.

Supplier must be able to mark sensitive parts, but admin/country law controls the final allowed policy.

---

# 96. Service Already Completed Refund Rule

If a service is completed and the client asks for a refund, Autopro must check whether the service was completed correctly.

General rules:

- No refund if service was completed correctly.
- Partial refund if service partially failed and both sides agree or proof supports it.
- Free correction/rework if provider fault is proven.
- Full refund if paid online and service was not delivered at all.
- Supplier responsible if the issue came from a faulty part and not provider work.
- Staff/admin decides by proof when automation cannot decide.
- Vehicle history and service report are used as proof.

If the issue is caused by a faulty part, the supplier or warranty process may be responsible instead of the service provider.

If the service provider caused the issue through bad work, service provider responsibility applies.

---

# 97. Service Quality Problem

If client says service quality is bad, Autopro must check proof.

Proof can include:

- Photos/videos
- Service report
- Client complaint details
- Provider notes
- Vehicle ID/history
- Diagnostic report
- Before/after proof
- Staff inspection if available later
- Third-party inspection if available later
- Warranty terms
- Chat messages
- Appointment record
- Parts used
- Client confirmation
- Provider confirmation

Autopro must consider:

- Service provider trust level
- Service provider history
- Client trust level
- Client VIP status
- Client complaint history
- Previous vehicle condition
- Vehicle history
- Before-service proof
- After-service proof
- Whether expected result was realistic

Example:

If the vehicle body or paint was already damaged before a car wash or detailing service, the service provider is not responsible for failing to fix pre-existing body/paint damage unless they promised that result.

Suggested automatic decision support:

- Compare before/after photos.
- Check service package description.
- Check provider notes.
- Check client complaint category.
- Check whether the vehicle had previous damage.
- Check whether a warranty was offered.
- Check repeated complaints against provider.
- Check repeated complaints from client.
- Use staff review for unclear or high-value cases.

---

# 98. Return Window

Return windows must depend on country law.

Confirmed rules:

- Country law is the standard.
- Supplier can offer a longer return window.
- Product category can have shorter/stricter rules if legal.
- Sensitive parts can have stricter return rules if legal.
- VIP clients can receive softer support.
- Admin controls default windows by country, category, supplier, and product type.
- Serious safety, fraud, warranty, or legal cases can be investigated even after normal return window.

Autopro must research each country’s return rules and use them as default standards.

Supplier can add more flexible terms but cannot remove legal minimum rights.

---

# 99. Return Approval

Return requests can be approved by different parties depending on case type.

Approvers can include:

- System automatically for simple eligible returns.
- Supplier for supplier-controlled returns.
- Service provider if service/installed part is involved.
- Shipping company if shipping damage/loss is involved.
- Staff/admin for high-value, risky, disputed, or unclear returns.
- Country law/platform rules when legally required.

For shipping damage/loss cases, shipping company can participate in review and submit proof.

Shipping company profile should not be unfairly affected before responsibility is settled.

Trusted/VIP shipping companies should receive fair review and support before score impact where appropriate.

---

# 100. Return Shipping Method

Autopro must support multiple return shipping methods.

Return methods can include:

- Client receives return label.
- Client drops package at pickup desk.
- Shipping company picks up package.
- Service provider handles return if part was installed there.
- Supplier arranges return.
- Autopro arranges return if needed by staff.
- Warehouse/partner receives return.
- Country/supplier/shipping partner/product value decides method.

If a service provider handles a return, the service provider must confirm that the part is returnable or that return handling is approved.

Return shipping must be flexible and automated where possible.

---

# 101. Return Shipping Cost Responsibility

Return shipping cost responsibility must be assigned by proof, law, and platform rules.

Possible responsibility:

- Supplier pays if wrong, damaged, or defective before shipping.
- Supplier pays if supplier insisted on shipping after damaged/bad packaging warning.
- Shipping company pays if damaged/lost during shipping.
- Client pays if changed mind or refused a valid package.
- Service provider pays if service provider ordered or installed wrong part.
- Autopro pays if platform error caused the return.
- Fee can be split if responsibility is shared.
- Country law applies first.
- Staff/admin decides by proof.

Autopro must make responsibility flexible and automated where possible.

---

# 102. Refund Timing

Refund timing must depend on client trust, supplier rules, risk level, payment method, country law, and proof.

Possible refund timing:

- Immediately after return approved for trusted/VIP clients, if legally and operationally allowed.
- After supplier confirmation for certain cases.
- After shipping company confirms return package received for new clients.
- After supplier receives return for risky clients.
- After supplier inspection for risky/new clients.
- After dispute decision.
- Store credit can be issued faster if client accepts.
- High-risk refunds require staff review.

Supplier-controlled timing:

- Autopro sets country-law minimum standards.
- Supplier can add stricter or more flexible requirements where legal.
- Legal minimum standards cannot be changed by supplier.
- Supplier must see mandatory legal rules clearly.
- Supplier can configure additional rules depending on client type, product category, trust level, and risk.

If the client has the right to be refunded and supplier refuses, Autopro must create a staff task to contact and investigate the supplier.

Refund handling must be fast, legal, and automated where possible.

---

# 103. Replacement Timing

Replacement timing must depend on trust, risk, product value, supplier settings, and country law.

Possible replacement timing:

- Immediately after return approved for trusted/VIP clients.
- After client ships return for risky clients.
- After shipping company confirms return received for new clients.
- After supplier receives/inspects return if supplier chooses this rule and it is legal.
- Faster replacement for VIP/trusted clients.
- Depends on supplier trust, client trust, product value, risk, and country.

Standard direction:

- Trusted/VIP clients can receive faster replacement.
- New clients can wait until shipping company confirms return.
- Risky clients can wait until supplier receives and inspects return.
- Supplier can configure replacement rules within legal limits.
- Admin controls default country/category rules.

---

# 104. Refund Method by Original Payment

The standard refund method should be the same method used by the client to pay, where possible and legal.

Refund methods can include:

- Online card refund to same card/provider
- Bank transfer if available
- Store credit if client chooses
- Cash refund through partner desk/shipping company if cash paid
- Wallet/credit balance if legally allowed in future
- Manual admin-approved method if required
- Country law/payment provider rules

Future e-wallet support must be planned, but full wallet/cash-out functionality requires legal review, payment provider approval, and country compliance.

Cash refunds through partner desk or shipping company are required for cash-heavy countries where supported.

---

# 105. Partial Refund Rules

Partial refund can apply when only part of an order or service is affected.

Examples:

- One item missing
- Multiple selected items missing
- Product has minor damage and client agrees to keep it
- Service partially completed
- Shipping delay compensation if legal/admin enabled
- Price adjustment
- Missing accessory
- Supplier/provider offers discount to solve issue
- Large order with only one affected item
- Bundle with one affected component

Shipping delay compensation should normally affect shipping fees only, not product price or service price, unless admin/country law/contract says otherwise.

Missing accessory responsibility must be checked because it may be supplier fault, shipping fault, warehouse fault, or client fraud.

Partial refunds must connect to detailed invoice line items.

---

# 106. Restocking and Damage Fees

Autopro must support restocking or damage fees where legal.

Rules can include:

- Restocking/damage fee allowed if legal.
- Fee mainly applies to changed-mind returns.
- Fee applies if product is returned used/damaged by client.
- Fee does not apply when supplier, shipping company, service provider, warehouse, or platform caused the problem.
- Supplier can set policy within legal limits.
- Admin controls rules by country, category, and supplier.
- Client must see fee before return confirmation.

The fee must not become an unfair obstacle that prevents normal clients from ordering.

Restocking/damage policies must be clear before purchase and before return confirmation.

Autopro can facilitate and record this fee, but it must follow country law and the supplier/client agreement.

---

# 107. Refund and Return Fraud Protection

Autopro must protect the refund and return system from fraud.

Fraud controls can include:

- Return abuse score
- Refund abuse score
- Empty box claim investigation
- Serial number check
- Part number check
- Photos/videos required
- QR/scan proof
- Vehicle ID/history check
- Device/IP checks where legal
- Staff review for repeat cases
- Suspension/ban for fraud accounts
- VIP/elderly human review before harsh action
- Delivery proof
- Pickup desk proof
- Supplier inspection proof
- Shipping company return proof
- Warranty proof
- Chat/support history

Suggested fraud limits:

- More than 2 return/refund claims in 7 days can trigger review for normal/new clients.
- VIP/elderly clients can receive softer review, such as up to 4 cases in 7 days before harsh action, depending on context and staff review.
- Empty box claims require strong investigation.
- Not answering supplier/staff messages, delivery calls, or proof requests can increase fraud risk.
- Repeated no-show can increase fraud risk.
- Intentional fraud can cause immediate restriction, suspension, or block.

Fraud rules must be flexible and admin-controlled.

---

# 108. Supplier Refuses Valid Refund

If supplier refuses a valid refund or return, Autopro must act according to supplier trust level, proof, and law.

Autopro must support:

- Staff/admin review
- Forced refund/store credit where platform rules and law allow
- Supplier reimbursement owed to Autopro
- Supplier trust score reduction
- Payout hold
- Account restriction
- Suspension for repeated refusal
- Legal review if needed

New/risky supplier direction:

- If new or risky supplier refuses valid refund without valid reason, Autopro can force refund/store credit and add reimbursement to supplier bill.
- If supplier does not pay reimbursement, restrictions, suspension, or block can apply.
- Supplier can contact staff to appeal.

Trusted/VIP supplier direction:

- Trusted/VIP suppliers receive softer handling for reasonable disputes.
- Staff should investigate and solve the problem before harsh action.
- If staff cannot solve it, case escalates to senior staff, then manager.
- The goal is to protect trusted/VIP suppliers from fraud, false accusations, and simple conflicts while still protecting clients and legal rights.

Repeated abuse removes trusted protection.

---

# 109. Client Returns Wrong or Different Item

If client returns a different item than received, Autopro must treat it as a serious fraud-risk case.

Autopro must support:

- Refund blocked
- Client asked for explanation
- Proof checked
- Serial number checked
- Part number checked
- Photos/videos checked
- Shipping/pickup desk proof checked
- Supplier inspection checked
- Client trust score affected if no valid explanation
- Staff/admin review
- Fraud case if intentional
- VIP/elderly support review before harsh action

For new or risky clients, returned item can be checked by shipping company, pickup desk, stop desk, warehouse, or supplier before refund is released.

If intentional fraud is confirmed, Autopro can suspend or block the client according to platform rules.

---

# 110. Refund and Vehicle History

Refunds and returns must connect to vehicle history when relevant.

Vehicle history should update when:

- Part was installed then removed
- Service was completed and refunded
- Wrong part was installed
- Defective part was diagnosed
- Replacement part was installed
- Warranty claim happened
- Service correction/rework happened
- Part failed after installation
- Return/refund affected vehicle service record

Vehicle history visibility:

- Visible to client
- Visible to admin
- Visible to authorized service provider only where needed
- Not public unless client shares
- Controlled by privacy settings and country law

Autopro must make this secure, automated, and flexible.

---

# 111. Refund and Return Decision Matrix Goal

The goal is to make refund and return handling:

- Flexible
- Automated where possible
- Fully secured
- Legal by country
- Proof-based
- Fair to honest clients
- Fair to honest suppliers
- Fair to honest service providers
- Fair to honest shipping companies
- Strict against fraud
- Clear before purchase
- Clear before refund/return confirmation
- Connected to invoices
- Connected to ledgers
- Connected to proof
- Connected to disputes
- Connected to vehicle history

Autopro must keep the client experience simple while giving admin and business users the detailed proof and responsibility structure needed to protect everyone.

---

# 112. Part 3 Completion Note

This clean file now includes Part 3 of the payments cleanup:

- Refund outcomes
- Client refund method choice
- Refund staff task automation
- Product not received
- Wrong part received
- Damaged part received
- Changed-mind returns
- Used/installed parts
- Electrical/electronic/sensitive parts
- Service refund rules
- Service quality proof
- Return windows
- Return approvals
- Return shipping methods
- Return shipping cost responsibility
- Refund timing
- Replacement timing
- Refund method by original payment
- Partial refunds
- Restocking/damage fees
- Fraud protection
- Supplier refusal of valid refund
- Wrong returned item
- Vehicle history connection

Next cleanup part to add:

- Service payment, service refunds, and service provider payout details
---

# 113. Service Payment, Service Refund, and Service Provider Payout Details

This section consolidates confirmed rules for service payments, service provider payouts, service refunds, examination/diagnosis fees, service quotes, provider-ordered parts, cancellations, no-shows, service completion confirmation, service disputes, service warranty, rework, extra work, overcharging protection, provider protection, provider trust score, rewards, penalties, and provider statements.

Autopro must make service payment and service provider payout handling:

- Legal by country
- Flexible
- Automated where possible
- Easy for clients
- Easy for service providers
- Proof-based
- Secure
- Fair to honest clients
- Fair to honest service providers
- Protective of Autopro fees
- Connected to invoices
- Connected to quotes
- Connected to vehicle history
- Connected to trust scores
- Connected to disputes
- Connected to dashboards

---

# 114. Service Payment Types

Autopro must support multiple service payment types.

Supported service payment types can include:

- Fixed-price service paid after completion
- Fixed-price service paid before appointment if provider, admin, country, or payment rules allow
- Examination/diagnosis fee paid after appointment as the standard direction
- Examination/diagnosis fee paid before appointment if provider requires it and law allows
- Deposit before appointment if provider requires it and law allows
- Cash after service
- Online payment after service
- Online authorization before appointment with capture after completion where supported
- Provider-selected payment methods
- Admin-controlled payment rules by country, category, provider, and service type

For fixed-price services, price can depend on:

- Vehicle type
- Vehicle size
- Vehicle class
- Vehicle condition
- Service difficulty
- Service duration
- Location
- Mobile service vs shop service
- Materials used
- Number of workers needed
- Urgency
- Client location distance
- Provider pricing policy
- Country/city pricing standards
- VIP/fleet/bulk contract rules

Autopro must allow service providers to set flexible prices while keeping prices clear to the client before booking.

---

# 115. Standard Fixed-Price Service Payment Timing

For simple fixed-price services such as car wash, tire change, tire repair, scan check, detailing, and similar services, the standard payment rule is:

1. Client books service.
2. Provider confirms appointment.
3. Service is completed.
4. Provider marks service as completed.
5. Client confirms completion.
6. Client pays after completion by agreed method, either cash or online.
7. Autopro fee becomes owed after completion/payment confirmation.

This is the standard rule unless provider, country, admin, payment provider, or service type requires a different flow.

---

# 116. Examination and Diagnosis Fee Timing

For diagnosis or examination before a major repair, the standard direction is:

Client pays examination/diagnosis fee after the examination is completed.

The examination fee can also be:

- Added to the final repair bill
- Paid before appointment if provider requires it and law allows
- Paid after appointment as standard
- Controlled by provider settings
- Controlled by admin/country rules
- Different for new/risky clients if provider requires advance payment and law allows

No-show fee should not be the standard for examination appointments unless provider policy, country law, and admin rules allow it and the client saw the policy before booking.

---

# 117. Service Quote After Examination

After examination, the service provider can send a digital quote/bill for repair.

The quote must be clear and structured.

The quote can include:

- Required parts
- Optional parts
- Non-urgent parts
- Labor cost
- Examination fee
- Shipping cost if parts are needed
- Warranty terms
- Estimated completion time
- Client approval checkboxes
- Ability for client to remove optional/non-urgent items
- Ability for client to reschedule remaining work
- Possible discount on future labor if provider enables it

Required, optional, and non-urgent items must be clearly separated.

The client can approve only urgent/required work and reschedule optional/non-urgent work if they cannot afford everything at once.

This helps the client control cost and helps the provider order only approved parts.

---

# 118. Service Provider Orders Parts for Client

When a service provider orders parts for the client, Autopro must require clear confirmations.

Required confirmations can include:

- Client approves digital quote
- Client approves each required part
- Client approves or rejects each optional part
- Client approves or reschedules non-urgent parts
- Provider confirms vehicle details
- Provider confirms part compatibility
- Supplier confirms part availability
- Payment or authorization is confirmed
- Shipping to provider, client, or agreed location is confirmed
- Provider confirms part received
- Provider confirms part condition if needed
- Client confirms service completed

The quote should rank parts clearly, such as:

- Safety-critical
- Required for repair
- Recommended
- Optional
- Non-urgent

Autopro must update each role step by step:

- Client
- Service provider
- Supplier
- Shipping company if involved
- Admin/staff

The provider must not order parts on behalf of the client without clear digital approval.

---

# 119. Client Cancellation Before Appointment

If client cancels before a service appointment, Autopro must handle it based on timing, policy, client trust level, provider policy, and country law.

Rules can include:

- Free cancellation before allowed deadline
- Cancellation fee if late and legal
- Deposit can be kept if legal and shown before booking
- No-show/cancellation score affected if repeated
- VIP/elderly clients receive softer handling
- Provider protected if proof exists
- Country/provider policy decides where applicable
- Client must see cancellation policy before booking

For new or risky clients, late cancellation fees can be added to their next booking/order bill if legal and clearly shown.

For trusted/VIP clients, cancellation fees or deposit loss should be handled more softly, with refund or credit where appropriate.

---

# 120. Service Provider Cancellation Before Appointment

If a service provider cancels before appointment, Autopro must protect the client and handle provider trust fairly.

Autopro must support:

- Client refund/deposit return automatically where applicable
- Client reschedule option
- Client choice of another provider
- Provider trust score impact if cancellations repeat without valid reason
- No penalty for valid emergency
- Staff review for trusted/VIP providers
- Autopro fee reduced or cancelled depending on stage
- Client apology/notification automatically

New providers can receive a simple warning first if they cancel without proof.

Risky providers can receive stronger automatic consequences.

Trusted/VIP providers must receive staff review before harsh action because a trusted provider may have a valid emergency or serious operational issue.

---

# 121. Client No-Show for Service Appointment

If client does not show up for a service appointment:

- No-show is recorded.
- Provider can mark no-show.
- Proof/time record can be added if needed.
- Client receives warning depending on trust level.
- No-show fee can apply if legal, provider required it, and client saw it before booking.
- Deposit can be kept if legal.
- Repeated no-show restricts booking/cash options.
- VIP/elderly clients receive support review first.

If the client gives a valid reason, such as the car breaking down before reaching the provider, the provider can choose to:

- Wait for the client
- Reschedule
- Cancel with no penalty
- Apply another solution agreed by both sides

Autopro must keep this flexible and understandable because vehicle problems can happen unexpectedly.

---

# 122. Provider No-Show for Service Appointment

If provider does not show up, refuses a booked job, or does not honor an appointment:

- Provider no-show is recorded.
- Client gets refund, reschedule, or alternate provider option.
- Provider trust score can be affected depending on trust level and proof.
- Repeated cases reduce visibility.
- Staff review applies if provider gives valid reason.
- Emergency/force majeure exception applies when proven.
- Client receives apology/notification automatically.
- Compensation can be enabled by admin or offered by provider.

Provider fee penalties are not standard unless platform rules, country law, or contract later allow them.

If provider voluntarily compensates the client, this can positively affect provider trust score and reputation.

---

# 123. Service Completion Confirmation

Service completion must be confirmable in multiple ways depending on service type.

Completion confirmation methods can include:

- Provider marks completed
- Client confirms completed
- QR confirmation
- Manual digital confirmation
- Photos/videos if needed
- Service report if provider uses it
- Before/after proof if provider uses it
- Vehicle ID/history update
- Staff confirmation if disputed

Photos/videos, service reports, and before/after proof are not required for every service, but they must be available for services where proof is useful.

Influencer/media clients may be able to tag the provider with photos/videos later if social features are enabled.

Completion confirmation must update:

- Client dashboard
- Provider dashboard
- Admin dashboard
- Payment status
- Invoice/receipt
- Vehicle history where applicable
- Payout status
- Dispute window if applicable

---

# 124. Service Provider Payout Timing

Service provider payout timing must depend on confirmation, payment method, trust level, country, service value, and dispute risk.

Provider payout can become available after:

- Client confirms completion
- QR/manual completion confirmation
- Payment is confirmed
- Cash collection is confirmed
- Dispute window ends if needed
- Admin/staff release if disputed

Trusted/VIP providers can receive faster payouts.

Risky providers can have delayed payouts.

New providers should not automatically be treated harshly. If a new provider has a good early record and the service is legally completed, they should receive normal/fair payout timing so they can grow and succeed on Autopro.

Admin must control payout rules by:

- Country
- Service type
- Service value
- Provider trust level
- Provider history
- Payment method
- Dispute risk
- Legal/payment provider rules

---

# 125. Service Provider Cash Collection

If provider collects cash after service:

1. Provider confirms cash collected.
2. Client confirms cash paid if possible.
3. QR/manual proof is saved.
4. Cash receipt is generated.
5. Autopro fee becomes provider debt.
6. Provider dashboard updates.
7. Admin dashboard updates.
8. Provider bill updates automatically.
9. Unpaid fee triggers reminders/restrictions according to business debt rules.
10. Country tax rules apply.

Cash collection must be proof-based, simple, and connected to the provider’s fee balance.

---

# 126. Service Provider Online Payment

If client pays online for a service, Autopro must support a safe held/authorized flow where possible.

Payment flow can include:

1. Client books service.
2. Online payment is authorized before appointment if needed.
3. Money is not fully captured until the correct trigger if authorization-before-capture is supported.
4. Service provider confirms appointment.
5. Service is completed.
6. Client confirms completion.
7. Autopro captures payment after completion where supported.
8. Autopro/payment provider holds funds first.
9. Autopro fee is separated before payout.
10. Provider payout becomes available after completion confirmation.
11. If dispute opens, refund and payout are held.

If the payment provider or country does not support authorization-before-capture, Autopro must use the safest available legal alternative.

Trusted providers can receive faster payout after completion confirmation.

---

# 127. Service Dispute Examples

Autopro must support service disputes.

Service dispute examples include:

- Provider no-show
- Client no-show
- Service not completed
- Service quality problem
- Wrong part installed
- Faulty part supplied by supplier
- Client says provider damaged vehicle
- Provider says damage existed before
- Client refused payment
- Provider says client added extra work without paying
- Provider says client was abusive/unsafe
- Client says provider overcharged
- Provider says client cancelled late
- Provider says client did not approve extra work
- Client says provider performed unapproved extra work
- Warranty service disagreement
- Rework disagreement

The full conversation link/history must be connected to the dispute because it contains important details for staff evaluation.

---

# 128. Service Proof Requirements

Service disputes must be proof-based.

Accepted proof can include:

- Photos/videos
- Before/after proof if available
- Service report if available
- Diagnostic report
- Client confirmation
- Provider confirmation
- QR scan
- Vehicle ID/history
- Chat messages
- Invoice/quote
- Staff notes
- Third-party inspection if needed later
- Warranty terms
- Appointment record
- Payment confirmation
- Parts used
- Provider notes
- Client complaint details

The proof process must be easy to use, flexible, and automated where possible.

---

# 129. Service Warranty

Service providers can offer warranty.

Warranty is not required for every service unless country law, service type, or admin/provider rules require it.

Autopro must support:

- Provider-offered warranty
- Required warranty for certain services if law requires
- Warranty terms shown before booking
- Warranty saved to vehicle history
- Warranty claim creating correction, refund, or rework case
- Admin control by country/service/provider
- Supplier part warranty separated from service warranty

Supplier part warranty and service provider labor warranty must be separate records.

Example:

- Part warranty = supplier/manufacturer responsibility.
- Labor/service warranty = service provider responsibility.

---

# 130. Service Correction and Rework

If provider made a mistake, the provider should normally get a chance to correct it before refund.

Rules:

- Provider gets chance to correct.
- Free rework is standard if provider fault is proven.
- Client can refuse rework if there is a serious safety/trust issue.
- Refund can apply if provider cannot correct.
- Warranty terms apply where relevant.
- Staff/admin decides if disputed.

This must be flexible, secure, and fair.

---

# 131. Extra Work Discovered During Service

If provider finds extra needed work during service:

1. Provider must send updated digital quote.
2. Client must approve before extra work starts.
3. Client can approve or decline each item.
4. Client can reschedule extra work.
5. Emergency/safety exception can apply if legally needed.
6. Extra work without approval may not be payable.
7. All changes are saved to invoice and vehicle history where applicable.
8. Dashboards update step by step.

The final price must not change without client approval unless a legal emergency/safety exception applies and is documented.

---

# 132. Service Provider Overcharging Protection

Autopro must protect clients from overcharging.

Controls can include:

- Digital quote required
- Client approval required
- Price ranges by service/category
- Admin review of suspicious prices
- Client dispute option for overcharge
- Provider pricing history tracked
- Final price must match approved quote unless client approves changes
- Hidden Autopro fee not shown to client unless legally required
- Comparison to provider’s normal pricing
- Comparison to local category pricing where available
- Staff review for risky providers or repeated complaints

Autopro must keep service pricing flexible while protecting clients from surprise charges.

---

# 133. Service Provider Protection From Unfair Clients

Autopro must protect service providers from unfair clients.

Protection tools include:

- Client approval proof
- Before/after proof if available
- No-show records
- Abuse reports
- Payment confirmation
- Staff review
- Client trust score
- Ability to refuse unsafe/abusive client
- VIP/trusted provider support
- Conversation history
- Quote approval record
- Completion confirmation
- Vehicle condition notes
- Provider notes

When client or provider reports abuse, Autopro must show a structured list of abuse categories plus a note field.

Abuse categories can include:

- Verbal abuse
- Emotional abuse
- Physical abuse
- Threats
- Harassment
- Unsafe behavior
- Property damage
- Refusal to pay
- Fraud attempt
- Other with explanation

Staff must be able to access the full conversation and proof to evaluate what happened.

---

# 134. Service Provider Trust and Performance Score

Service providers must have trust/performance scores.

Score factors can include:

- Completion rate
- Repeat completion with same client
- Repeat completion with different clients
- Fleet/client company work history
- Trusted company relationships
- No-show rate
- Cancellation rate
- Service quality complaints
- Rework rate
- Refund rate
- Payment reliability
- Response time
- Client ratings
- Staff review results
- Fraud/suspicious activity
- Quote accuracy
- On-time appointment behavior
- Warranty claim behavior
- Dispute outcome history
- Client retention
- Plan payment reliability

Good performance can build the provider account.

Bad repeated performance can limit, restrict, suspend, or block the account.

Strong service providers can receive better reach, verified badge eligibility, plan discounts, admin dashboard ranking, and more bookings.

---

# 135. Service Provider Rewards and Penalties

Autopro must support service provider rewards and penalties.

Rewards can include:

- Higher visibility
- Lower Autopro fee
- Faster payout
- Featured profile
- More bookings
- VIP/trusted badge
- Access to better tools/plans
- Better dashboard analytics
- Plan discounts
- Fleet/B2B opportunity access
- Priority support
- Growth recommendations

Penalties can include:

- Warning
- Reduced visibility
- Payout hold
- Account restriction
- Suspension
- Ban for fraud/repeated abuse
- Plan downgrade
- Loss of premium features
- Higher payout reserve
- Staff/admin review

Rewards and penalties must be flexible, automated where possible, and safe for all roles.

---

# 136. Service Provider Statements

Service providers must receive statements.

Statements can be monthly and available by custom date range.

Statements must show:

- Bookings
- Completed jobs
- Cancelled jobs
- No-shows
- Cash collected
- Online payments
- Autopro fees
- Plan fees
- Refunds
- Rework cases
- Payouts
- Debt
- Disputes
- Taxes if applicable
- Client repeat rate
- Revenue since joining Autopro
- Profit/revenue trend since joining
- Projected growth
- Effect of paid plans on growth/profit
- Missed opportunities
- Recommended upgrades
- Best-performing services
- Low-performing services
- Fleet/B2B opportunities if available

Advanced analytics can be plan-based premium features.

The provider dashboard should help service providers understand their growth and how Autopro improves their business.

---

# 137. Service Payment and Provider Payout Goal

The goal of the service payment and provider payout system is to make service commerce:

- Flexible
- Automated where possible
- Legal by country
- Easy to understand
- Secure
- Proof-based
- Fair to clients
- Fair to service providers
- Supportive of new honest providers
- Protective of trusted/VIP providers
- Strict against fraud and repeated abuse
- Connected to vehicle history
- Connected to invoices and quotes
- Connected to payment, payout, debt, and dispute systems

Autopro must support providers so they can grow fast while protecting clients, platform trust, and Autopro revenue.

---

# 138. Part 4 Completion Note

This clean file now includes Part 4 of the payments cleanup:

- Service payment types
- Fixed-price service payment timing
- Examination/diagnosis fee timing
- Service quote after examination
- Service provider ordering parts for client
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
- Service provider statements

Next cleanup part to add:

- Admin money dashboard and financial controls
---

# 139. Admin Money Dashboard and Financial Controls

This section consolidates confirmed rules for the Autopro admin money dashboard, owner profit dashboard, financial controls, ledgers, balances, staff permissions, audit logs, reports, tax/accounting direction, fraud monitoring, payment provider monitoring, and role-based dashboard access.

Autopro must make the admin money dashboard:

- Clear
- Detailed
- Flexible
- Secure
- Live-updated where possible
- Easy to filter
- Easy to search
- Easy to assign to staff roles
- Connected to all financial systems
- Protective of Autopro revenue
- Useful for business growth decisions
- Useful for fraud prevention
- Useful for tax/accounting preparation
- Reusable for future owner platforms

Autopro must reduce platform-side errors as much as possible through structured ledgers, audit logs, permissions, automated alerts, reconciliations, approvals, and staff task routing.

---

# 140. Admin Money Dashboard Purpose

The admin money dashboard must show full financial visibility for Autopro.

The dashboard must include:

- Total Autopro revenue
- Total fees earned
- Product fees
- Service fees
- Shipping/logistics fees
- Plan/subscription revenue
- Ads/promotions revenue
- Refunds
- Returns
- Chargebacks
- Business debt owed to Autopro
- Pending balances
- Available balances
- Held balances
- Negative balances
- Cash expected
- Cash collected
- Cash missing/not remitted
- Country/currency breakdown
- Profit/loss estimates

The dashboard must also include platform growth and account data, such as:

- Number of client accounts
- Number of supplier accounts
- Number of service provider accounts
- Number of hybrid business accounts
- Number of shipping company accounts
- Number of staff accounts
- Number of vehicles added
- Vehicle count by type
- Vehicle count by brand
- Vehicle count by model
- Vehicle count by year/generation where available
- Number of orders
- Number of bookings
- Number of returns
- Number of disputes
- Number of active business partners
- Number of paid plan users

The dashboard should be instructive, well documented, and highly detailed.

Main dashboard sections should show summary totals first. When the owner/admin selects a section, it should open deeper details.

---

# 141. Owner and Admin Visibility

The full owner must be able to see everything.

Full owner visibility includes:

- Every transaction
- Every fee
- Every payout
- Every refund
- Every debt
- Every staff adjustment
- Every country/currency
- Every supplier balance
- Every service provider balance
- Every shipping company balance
- Every partner desk balance
- Every dispute hold
- Every manual override
- Every audit log
- Every financial report
- Every staff financial action

The owner dashboard should show total summaries first.

The owner must be able to select any summary and drill down by:

- Country
- City
- Region
- Currency
- Supplier ID
- Service provider ID
- Shipping company ID
- Client ID
- Vehicle type
- Vehicle brand/model
- Product category
- Service type
- Date range
- Payment method
- Trust level
- Risk level
- Staff member
- Dispute/refund/debt status

Detailed sections can be assigned one by one to selected employees and roles.

Employees should be able to rearrange the data they are allowed to see on their own dashboard based on their workflow, without accessing restricted data.

The dashboard must be flexible for all roles while keeping owner control and security.

---

# 142. Supplier Import, Export, Demand, and Growth Intelligence

The admin dashboard should help the owner understand supplier performance, market demand, imports, exports, and investment opportunities.

The dashboard can include:

- Total imports by supplier
- Total exports/sales by supplier
- Supplier imports ranked from highest to lowest
- Supplier exports/sales ranked from highest to lowest
- Supplier profit/growth trend
- Supplier imports compared to exports
- Supplier wholesale performance
- Supplier retail performance
- Supplier category performance
- Supplier country performance
- Supplier monthly performance
- Supplier best-selling parts
- Supplier slow-moving parts
- Supplier missed demand
- Supplier return rate
- Supplier dispute rate
- Supplier fee contribution to Autopro
- Supplier plan level
- Supplier paid/unpaid fees
- Supplier opportunities for growth

For wholesalers, the dashboard should show:

- Imported stock
- Exported/sold stock
- Bulk order performance
- Fleet/B2B order performance
- Profit estimates where available
- Best client segments
- Best countries/regions
- Slow categories
- Fast-growing categories

The dashboard should also help the owner identify:

- Most requested parts
- Most purchased parts
- Repeated purchase categories
- Trending categories
- High-demand vehicle brands/models
- Under-supplied categories
- Services with growing demand
- Parts the owner may want to invest in
- Countries/cities with unmet demand
- Best timing for investment
- Suggested supplier/category expansion

Autopro can later use analytics and AI suggestions to recommend where the owner should invest to increase profit.

Access to these intelligence sections must be controlled by role permissions.

---

# 143. Dashboard Money Balances

The admin dashboard must separate money into clear balance categories.

Required balances:

- Pending balance
- Available balance
- Held balance
- Autopro fee balance
- Business debt balance
- Negative balance
- Cash expected
- Cash collected
- Cash not remitted
- Refund reserve
- Chargeback reserve

Each balance should show an overall total first.

When selected, each balance should open detailed breakdowns by:

- Country
- Currency
- Payment method
- Product category
- Service category
- Supplier
- Service provider
- Shipping company
- Partner desk
- Client
- Order
- Invoice
- Date range
- Risk level
- Trust level
- Dispute status
- Refund status
- Debt age

Additional useful balance details can include:

- Aging balances
- High-risk balances
- Overdue balances
- Balances held by disputes
- Balances held by chargebacks
- Balances waiting provider/payment processor settlement
- Balances waiting cash remittance
- Balances waiting staff approval

---

# 144. Complete Transaction Ledger

Autopro must have one complete transaction ledger for every money movement.

Ledger records must include:

- Transaction ID
- Order ID
- Service ID
- Invoice ID
- Payment ID
- Refund ID
- Return ID
- Dispute ID
- Client ID
- Supplier ID
- Service provider ID
- Shipping company ID
- Partner desk ID if applicable
- Staff ID if actioned by staff
- Amount
- Currency
- Country
- Payment method
- Status
- Date/time
- Reason
- Proof link
- Audit log link

The transaction ledger should have a dedicated admin section.

The ledger section should show summary numbers first, then allow deeper investigation by selecting each record or category.

Every financial event must be traceable.

---

# 145. Admin Filters and Search

Every important admin money dashboard section must support filters and search.

Required filters include:

- Country
- Currency
- Date range
- Payment method
- Supplier
- Service provider
- Shipping company
- Partner desk
- Client
- Staff member
- Order ID
- Invoice ID
- Payment ID
- Dispute ID
- Refund status
- Return status
- Debt status
- Trust level
- Risk level
- Category
- Service type
- Vehicle type
- Vehicle brand/model where useful
- City/region
- Plan level
- Payout status
- Cash status

Employees with permission can add or rearrange filters in their own dashboard views for research and workflow efficiency.

Filters must respect role permissions.

---

# 146. Business Financial Profile View

Each supplier, service provider, shipping company, and partner business must have an admin financial profile view.

The admin financial profile should show:

- Total sales/bookings/deliveries
- Autopro fees generated
- Fees paid
- Fees unpaid
- Payouts sent
- Payouts pending
- Held payouts
- Refunds caused
- Returns caused
- Disputes caused
- Debt
- Negative balance
- Cash collected
- Cash not remitted
- Trust score
- Risk score
- Plan level
- Profit/growth trend
- Payment reliability
- Refund rate
- Dispute rate
- Chargeback impact
- Staff notes
- Audit history
- Suggested growth actions

Business accounts can have their own allowed financial views.

Business owners/admins can assign certain financial sections to their own employees depending on their plan, permissions, and admin rules.

Some advanced analytics can be unlocked by paid plans or direct admin approval.

---

# 147. Autopro Fee Automation

Admin must be able to create automated fee rules.

Fee automation can depend on:

- Country
- Region
- Product category
- Service category
- Supplier
- Service provider
- Shipping company
- Partner desk
- Trust level
- Risk level
- Plan level
- Campaign
- B2B/fleet contract
- Payment method
- Order value
- Service value
- Shipping route
- Route-specific rate
- Cash collection role
- Maximum fee cap

Autopro should research proven marketplace pricing and commission methods and use recommended defaults by country, category, and role.

Admin/full owner must keep full control to add, modify, disable, or override fee rules.

The goal is maximum Autopro profitability while keeping the best experience and profitability for honest suppliers, service providers, shipping companies, and clients.

---

# 148. Manual Financial Adjustment Controls

Manual financial adjustments must be controlled carefully.

Rules:

- Full owner can adjust anything.
- Finance staff can adjust within limits set by the owner.
- Finance director or selected high-ranking finance role can receive larger limits if owner approves.
- Manager approval rules can be added later.
- Support can request adjustments only.
- Senior support can request or escalate according to permission.
- Two-person approval is required for high-value changes.
- Reason is required.
- Proof is required.
- Every adjustment is audit logged.
- User/business is notified if relevant.

Each employee must have specific roles and limits selected by the owner or authorized high-ranking employee.

High-ranking employees can later receive limited authority to manage selected permissions, but the full owner remains the final authority.

---

# 149. Payout Approval Controls

Payouts must be automated where safe and manually controlled where risk is higher.

Payout approval rules:

- Fully automated for trusted/low-risk cases.
- Manual approval for high-value payouts.
- Manual approval for risky/new businesses where rules require it.
- Manual approval during disputes.
- Two-person approval for very high payouts.
- Admin controls payout thresholds.
- Selected employees can be given approval permissions.
- Country/payment provider rules apply.

Autopro must support secure, flexible, automated payout controls from day one.

---

# 150. Refund Approval Controls

Refunds must be automated for simple eligible cases and reviewed for risky cases.

Refund approval rules:

- Fully automated for simple eligible refunds.
- Staff review for high-value refunds.
- Senior staff approval for high-value refunds where admin requires it.
- Staff review for risky clients.
- Staff review for risky suppliers/providers.
- Staff review for fraud indicators.
- Staff can temporarily block suspicious refund release until senior review.
- Two-person approval for large refunds.
- Manager and senior staff approval can be required for large refunds.
- Admin controls thresholds.
- Selected employees can receive limited approval permissions.
- Country law/payment provider rules apply.

Autopro must keep refund controls flexible, secure, and automated where possible.

---

# 151. Business Debt Dashboard

The admin dashboard must show business debts clearly.

Debt categories include:

- Supplier debt
- Service provider debt
- Shipping company debt
- Partner desk debt
- Refund reimbursement debt
- Store credit reimbursement debt
- Unpaid plan/subscription fees
- Cash collected but not remitted
- Chargeback debt
- Penalty fee if legal
- Shipping settlement debt
- Manual adjustment debt
- Debt age
- Debt deadline
- Payment plan status
- Escalation status

Business debts should be ranked automatically.

Ranking/filtering can be by:

- Country
- City
- Business type
- Supplier only
- Service provider only
- Shipping company only
- Partner desk only
- Debt amount
- Debt age
- Risk level
- Trust level
- Payment plan status
- Escalation stage

---

# 152. Cash Control Dashboard

The admin dashboard must show cash flows clearly.

Cash control records include:

- Cash expected
- Cash collected
- Who collected cash
- Cash not remitted
- COD orders
- Cash refunds
- Partner desk payments
- Shipping company cash settlement
- Supplier direct cash collection
- Service provider cash collection
- Missing cash alerts
- Cash reconciliation
- Cash collection proof
- Cash collector ID
- Cash settlement deadline
- Cash settlement status

The cash dashboard must be clear, transparent, well organized, ranked, secure, and automated.

---

# 153. Country and Currency Dashboard

The admin dashboard must show money by country and currency.

The dashboard must support currencies such as:

- DZD
- EUR
- USD
- GBP
- NGN
- Other currencies added later

Country/currency dashboard must show:

- Country-specific payment methods
- Exchange rates used
- Route-specific rates
- Market/procurement rates
- Bank/payment provider rates
- Manual override rates
- Currency gain/loss estimate
- Currency conversion history
- Currency risk alerts
- Cash-heavy country rules
- Online-payment country rules
- Tax/accounting differences by country

The system must be flexible, secure, updated frequently where possible, easy to read, rearrangeable, and automated.

---

# 154. Alerts and Risk Warnings

The admin dashboard must show alerts and risk warnings.

Alerts can include:

- High refund rate
- High return rate
- High dispute rate
- High chargeback rate
- Cash not remitted
- Supplier debt overdue
- Provider debt overdue
- Shipping settlement mismatch
- Suspicious client behavior
- Suspicious supplier behavior
- Suspicious service provider behavior
- Suspicious shipping company behavior
- Suspicious staff adjustment
- Payment provider failure
- Exchange rate problem
- Repeated failed deliveries
- Repeated no-shows
- High-value payout pending approval
- Large refund pending approval
- Repeated client cancellations
- Repeated provider cancellations
- Partner desk issue
- API/integration error
- Tax/reporting issue
- Unusual cash collection behavior
- Unusual refund pattern
- Repeated duplicate account attempts

Alerts must be flexible, easy to read, secure, and automated.

---

# 155. Staff Financial Task Assignment

Money-related tasks must be automatically assignable to staff.

Task examples include:

- Refund review
- Return review
- Dispute review
- Chargeback review
- Debt follow-up
- Payout approval
- Manual adjustment request
- Shipping settlement mismatch
- Cash missing investigation
- Partner desk issue
- High-risk transaction review
- Tax/accounting review
- Payment provider issue
- Suspicious staff adjustment review
- Business payment plan review

Task assignment must be flexible so the owner/admin can assign each part to specific employees or roles.

Tasks must be easy to read, prioritized, secure, and tracked.

---

# 156. Staff Performance for Financial Tasks

Admin must be able to track staff performance on money-related tasks.

Performance metrics can include:

- Tasks solved
- Time to resolution
- Accuracy
- Escalations
- Mistakes reversed
- Fraud caught
- Customer satisfaction
- Business satisfaction
- Manager review
- Rewards/promotions
- Number of high-risk cases solved
- Number of reopened cases
- Number of incorrect decisions
- Average handling time
- Department/team performance

Staff performance can be tracked by:

- Employee
- Role
- Department
- Team
- Country
- Task type
- Complexity
- Time period
- Manager/senior reviewer

The employee structure must be flexible from day one.

The owner can later add roles such as:

- CEO
- CFO
- Finance director
- Senior manager
- Department director
- Regional manager
- Team lead

These roles can sit under the owner with limits set by the owner.

---

# 157. Audit Logs

Every financial action must have audit logs.

Audit logs must record:

- Who changed it
- Staff/user ID
- Role at time of action
- What changed
- Old value
- New value
- Reason
- Proof
- Date/time
- IP/device/session where legal
- Approval chain
- Related order
- Related service
- Related payment
- Related refund
- Related dispute
- Related business debt
- Related payout
- Related report/export

Audit logs are required for trust, fraud prevention, accounting, legal defense, and staff accountability.

Autopro should support strong identity, access, and security structures such as:

- Role-based permissions
- Strong passwords
- Multi-factor authentication where possible
- Passkeys where possible
- Device/session monitoring where legal
- Staff access logs
- Approval chains
- Limited access tokens
- Revoked access history

Future direction:

The same access/audit structure can later support office tools such as door access, company cards, company spending approvals, and other owner platforms, if legally and technically appropriate.

This reusable structure must remain private and owner-controlled.

---

# 158. Export and Download Reports

Admin must be able to export financial reports.

Export formats can include:

- CSV
- Excel
- PDF

Reports can include:

- Country tax report
- Supplier statement
- Service provider statement
- Shipping company statement
- Partner desk statement
- Debt report
- Refund report
- Return report
- Dispute report
- Cash report
- Chargeback report
- Payout report
- Revenue report
- Profit estimate report
- Staff performance report
- Audit log report
- Custom date range report

The owner can assign selected employees permission to download all reports or only selected reports.

All exports must be permission-controlled and audit logged.

---

# 159. Tax and Accounting Direction

Autopro must prepare tax/accounting reports.

Tax/accounting support can include:

- Country-specific tax reports
- VAT/sales tax if applicable
- Business invoices
- Client receipts
- Supplier/provider/shipping statements
- Cash settlement records
- Refund/return records
- Chargeback records
- Accountant export
- Admin manual tax settings
- Legal/accounting review before launch

For the owner/admin, tax/accounting reporting is a core business need.

For other roles such as suppliers, service providers, shipping companies, hybrid businesses, influencers, and partners, advanced tax/accounting reports can be a paid-plan feature if legally allowed.

Autopro should research each country’s tax/reporting requirements and use them as default templates where possible.

The tax/accounting engine should help users generate useful legal reports that can be:

- Downloaded
- Printed
- Shared with accountant
- Saved to profile/files
- Exported to accounting software if supported later
- Stored in document history

The tax/accounting engine must be flexible and allow assigned employees to manage settings within permissions.

Legal/accounting review is required before launch in each country.

---

# 160. Payment Provider Monitoring

The admin dashboard must monitor payment providers.

Monitoring can include:

- Provider status
- Failed payments
- Successful payments
- Refund failures
- Chargeback notices
- Payout failures
- Settlement delays
- Provider fees
- Country availability
- API errors
- Webhook failures
- Authorization failures
- Capture failures
- Refund processing time
- Provider balance
- Provider dispute notices
- Provider compliance alerts

Payment provider monitoring must be detailed, easy to access, assignable to specific employees, flexible, and automated where provider APIs allow.

---

# 161. Fraud and Risk Dashboard

The admin dashboard must include fraud/risk analytics.

Fraud/risk analytics can include:

- Risky clients
- Risky suppliers
- Risky service providers
- Risky shipping companies
- Risky partner desks
- Risky staff actions
- Return abuse
- Refund abuse
- Cash abuse
- No-show abuse
- Fake orders
- Duplicate accounts
- Device/IP risk where legal
- High-risk routes
- High-risk categories
- High-risk countries
- High-risk payment methods
- High-risk refund patterns
- High-risk shipping patterns
- Repeated refused COD
- Repeated overcharge complaints
- Repeated wrong part claims
- Repeated empty box claims
- Suspicious manual adjustments

The fraud/risk dashboard must be detailed, flexible, automated, easy to read, and assignable to specific employees.

---

# 162. Owner Profit Dashboard

The owner profit dashboard must show Autopro’s business performance.

Owner profit dashboard can include:

- Daily revenue
- Weekly revenue
- Monthly revenue
- Revenue by country
- Revenue by city/region
- Revenue by category
- Revenue by supplier
- Revenue by service provider
- Revenue by shipping company
- Revenue by partner desk
- Fees earned
- Fees unpaid
- Plan revenue
- Ads revenue
- Sponsored listing revenue
- Featured profile revenue
- Cash collected
- Cash missing
- Refund cost
- Chargeback cost
- Staff cost later
- Shipping partner cost
- Payment provider cost
- Tax estimate
- Profit/loss estimate
- Growth trends
- Best partners
- Worst risk areas
- Best categories
- Worst categories
- Best countries
- Best cities
- Fastest-growing services
- Fastest-growing parts
- Client repeat purchase rate
- Supplier growth
- Provider growth
- Shipping partner growth
- Suggestions to increase profit
- Suggested fee adjustments
- Suggested plan offers
- Suggested investment opportunities
- Suggested country/category expansion

The owner must be able to rearrange the dashboard and assign specific sections to selected employees.

The dashboard should be easy to read, ranked, filterable, and updated frequently where possible.

---

# 163. Dashboard Permissions

Financial dashboard access must be controlled by permissions.

Permission direction:

- Full owner has all access.
- Finance staff has limited access selected by owner.
- Support does not get broad money dashboard access by default.
- Senior support can have limited dispute/refund view selected by owner.
- Manager can have approval view if allowed.
- Shipping settlement staff can view shipping-related financial sections only.
- Tax/accounting staff can export or view tax/accounting sections only.
- Every role is controlled by permissions.
- Every access is audit logged.

The owner can give selected control permissions to specific employees.

Example:

The owner can give a CEO or finance director limited authority to add, modify, or assign permissions for selected roles, while the owner keeps final authority.

Permission delegation must be flexible, secure, and audit logged.

---

# 164. Dashboard Section Structure

Each financial dashboard section must be clearly separated.

Each section should be built for a specific type of information.

Related sections can be combined only when it improves clarity.

Each section must support:

- Summary total
- Detailed view
- Filtering
- Ranking
- Search
- Export where allowed
- Permission control
- Staff assignment
- Audit logs where relevant
- Alerts where relevant
- Drill-down from summary to details

Each selectable detail or entire section can be assigned to a specific role or employee.

This gives the owner and staff better research, better decisions, and better workflow.

---

# 165. Admin Money Dashboard Goal

The goal of the admin money dashboard is to give the owner full financial control of Autopro.

The dashboard must help the owner:

- Understand revenue
- Understand profit
- Track fees
- Track debt
- Track cash
- Track payouts
- Track refunds
- Track disputes
- Track risks
- Track staff actions
- Track supplier performance
- Track service provider performance
- Track shipping company performance
- Track client demand
- Track vehicle data growth
- Detect fraud
- Detect missing money
- Prepare tax/accounting reports
- Find investment opportunities
- Improve partner performance
- Increase Autopro profit

Autopro must make this dashboard flexible, secure, automated, role-based, and useful for future owner platforms.

---

# 166. Part 5 Completion Note

This clean file now includes Part 5 of the payments cleanup:

- Admin money dashboard purpose
- Owner/full admin visibility
- Supplier import/export/demand intelligence
- Dashboard money balances
- Transaction ledger
- Admin filters and search
- Business financial profile view
- Autopro fee automation
- Manual financial adjustment controls
- Payout approval controls
- Refund approval controls
- Business debt dashboard
- Cash control dashboard
- Country and currency dashboard
- Alerts and risk warnings
- Staff financial task assignment
- Staff financial task performance
- Audit logs
- Export/download reports
- Tax/accounting direction
- Payment provider monitoring
- Fraud and risk dashboard
- Owner profit dashboard
- Dashboard permissions
- Dashboard section structure

Next cleanup step:

- Final review of clean payments file
- Update cleanup status
- Decide whether to keep both payment files or later replace the old file
