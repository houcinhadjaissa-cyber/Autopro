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
