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
