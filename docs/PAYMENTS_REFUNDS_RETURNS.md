# Autopro Payments, Refunds, and Returns

This file defines the payment flow, refund logic, return handling, payout timing, cash payment handling, dispute holds, and settlement structure for Autopro.

Autopro must support both modern online payment countries and cash-heavy countries.

This system is required for:

- Product orders
- Service bookings
- Examination/diagnosis fees
- Supplier payouts
- Service provider payouts
- Shipping company payouts
- Autopro platform fees
- Refunds
- Returns
- Disputes
- Cash on delivery
- International supplier payments
- Local delivery/payment collection
- Country-specific payment rules

---

# Core Rule

Autopro must know where every amount of money is at every moment.

Every transaction must have a clear status.

Examples:

- Pending
- Paid
- Cash expected
- Cash collected
- Awaiting supplier confirmation
- Awaiting shipping confirmation
- In transit
- Delivered
- Completed
- On hold
- Disputed
- Refunded
- Partially refunded
- Released to supplier
- Released to service provider
- Released to shipping company
- Autopro fee collected

---

# Main Money Flow Concepts

Autopro must support these money flow concepts:

## 1. Pending Balance

Money that has been paid or promised but is not yet released.

Used for:

- Orders not delivered yet
- Services not completed yet
- Disputed transactions
- Refundable periods
- Cash payments waiting confirmation

## 2. Available Balance

Money that is confirmed and ready to be paid out.

Used for:

- Supplier payouts
- Service provider payouts
- Shipping company payouts

## 3. Held Balance

Money temporarily frozen because of:

- Dispute
- Return request
- Damaged part
- Wrong part
- Shipping delay
- Suspicious activity
- Client complaint
- Admin review

## 4. Autopro Fee Balance

Autopro platform fees must be calculated and tracked separately.

This includes:

- Product fees
- Service fees
- Examination fees
- Shipping/logistics fees
- B2B fees
- Plan fees
- Ads fees
- Other platform fees

---

# Required Transaction Records

Every transaction must record:

- Transaction ID
- Order ID
- Invoice ID
- Client ID
- Supplier ID if applicable
- Service provider ID if applicable
- Shipping company ID if applicable
- Vehicle ID if applicable
- Product IDs if applicable
- Service IDs if applicable
- Country
- Currency
- Payment method
- Payment status
- Total amount
- Supplier/service provider amount
- Autopro fee
- Shipping fee
- Discount
- Refund status
- Dispute status
- Date/time
- Confirmation history

---

# Payment Methods

Autopro must support multiple payment methods depending on country and provider settings.

Payment methods include:

- Online card payment
- Cash on delivery
- Cash after service
- Bank transfer
- Local payment methods
- Postal payment methods
- Pay later if approved later
- Wallet/payment provider integrations later

Each country can have different active payment methods.

---

# Country-Specific Payment Rules

Autopro must support country-specific payment behavior.

Examples:

## Algeria

Algeria may require strong cash-on-delivery and local delivery/payment collection support.

Possible methods:

- Cash on delivery
- Payment at delivery office
- Local shipping company cash collection
- Algeria Post or local methods if available
- Manual/automated settlement with suppliers and shipping companies

## Nigeria

Nigeria may require local payment and cash-friendly methods depending on region and partner availability.

## Europe / USA / Canada

These markets may support easier online card payment, bank payment, and automated payouts.

---

# Online Payment Flow

When client pays online:

1. Client places order or books service.
2. Payment is captured or authorized.
3. Money enters pending/held balance.
4. Supplier/service provider confirms order/service.
5. Shipping/service progress is tracked.
6. Transaction completes after delivery/service confirmation.
7. Autopro fee is collected.
8. Supplier/service provider payout becomes available.
9. Shipping payout becomes available if applicable.
10. Documents are generated and saved.

---

# Cash Payment Flow

When client chooses cash:

1. Client confirms order/service with cash payment method.
2. Autopro records expected cash amount.
3. Supplier/service provider/shipping company completes the order/service.
4. Cash collection is confirmed.
5. Autopro fee becomes payable by the responsible business.
6. The business fee balance updates automatically.
7. If the business does not pay owed Autopro fees, restrictions can apply.

Cash payment must be tracked carefully to prevent abuse.

---

# Supplier Payout Direction

Supplier payout depends on payment method and order status.

For online payments:

- Supplier payout should not be released immediately.
- Money should remain pending until order is confirmed delivered or return/dispute period rules are satisfied.
- Autopro fee is separated before payout.

For cash/local collection:

- Supplier payout depends on who collected the cash.
- If shipping company collected cash, settlement must track shipping company responsibility.
- If supplier collected cash, supplier fee debt must update automatically.

---

# Service Provider Payout Direction

Service provider payout depends on service status.

For online payments:

- Payment can be held until service is completed and confirmed.
- Autopro fee is collected.
- Provider payout becomes available after completion/dispute rules.

For cash payments:

- Provider collects cash directly.
- Provider must confirm completion.
- Autopro fee is added to provider fee balance.
- Client confirmation or proof can be used for dispute protection.

---

# Shipping Company Settlement Direction

Shipping companies can have their own settlement rules.

Autopro must track:

- Shipping fee
- Cash collected
- Product/order amount collected if applicable
- Delivery status
- Shipping company fee
- Autopro logistics fee
- Amount owed to supplier
- Amount owed to Autopro
- Amount owed to shipping company

Shipping companies that solve international cash/payment problems can receive special reduced platform fees.

---

# Refunds

Refunds must depend on reason and stage.

Refund reasons may include:

- Wrong part
- Damaged part
- Supplier cancellation
- Shipping failure
- Client cancellation
- Service provider cancellation
- Service not completed
- Duplicate payment
- Dispute decision
- Legal requirement

Refund types:

- Full refund
- Partial refund
- Store credit
- Replacement
- Reschedule
- No refund

Refund rules must connect to:

- Product order status
- Service status
- Shipping status
- Payment method
- Country rules
- Responsibility decision

---

# Returns

Returns must support:

- Return request
- Return approval
- Return shipping method
- Return tracking
- Return received
- Return checked
- Refund/replacement decision
- Supplier responsibility
- Shipping responsibility
- Client responsibility

Return records must include photos/videos if needed.

---

# Disputes

Disputes must freeze or hold money when needed.

Dispute examples:

- Client says product not received
- Supplier says product was shipped
- Client says part is wrong
- Supplier says client selected wrong vehicle
- Service provider says work was completed
- Client says service was not completed
- Shipping company says delay was caused by supplier
- Supplier says delay was caused by shipping company

Autopro must use proof and timestamps to decide responsibility.

---

# Automation Requirement

Payments, refunds, returns, fee tracking, and settlements must be automated as much as possible.

The system must automatically update:

- Client dashboard
- Supplier dashboard
- Service provider dashboard
- Shipping company dashboard
- Admin dashboard
- Invoice records
- Vehicle history when applicable
- Fee balances
- Payout balances
- Dispute status
- Refund status

---

# Next Sections To Detail

The next sections to detail are:

1. Product payment flow
2. Service payment flow
3. Cash payment countries
4. Supplier payout timing
5. Service provider payout timing
6. Shipping company settlement
7. Refund rules
8. Return rules
9. Dispute rules
10. Admin money dashboard
---

# Payment and Dropshipping Models

Autopro must support multiple payment and dropshipping models.

Each country or region can have different active methods.

One country can support multiple methods at the same time.

The system must be flexible from day one so the admin/full owner can add, remove, activate, deactivate, or modify payment and logistics methods before or after launch.

---

## 1. Local Stock / Local Warehouse

Status:

```txt
Keep
---

# Algeria Realistic DZD Pricing and Admin Shop Markup

Autopro must support realistic, legal, and transparent local pricing for countries where official bank exchange rates do not reflect real procurement cost.

This is especially important for Algeria.

---

## Algeria DZD Pricing Rule

For Algeria, Autopro must show client-facing prices in DZD.

The client should see simple, clear prices such as:

- Product price in DZD
- Shipping price in DZD
- Discounts in DZD
- Final total in DZD

The client should not need to calculate foreign currency conversion.

---

## Real Market Pricing Direction

Autopro must not blindly price Algerian orders using the official bank conversion rate if that rate does not reflect real procurement cost.

Example:

```txt
Official bank rate: 1€ = 150 DZD
Real market/procurement cost may be closer to 1€ = 280 DZD or more
---

# Product Payment Flow

This section defines how product payments work in Autopro.

Autopro must support online payments, cash payments, cash-on-delivery countries, international suppliers, shipping company settlements, supplier payouts, Autopro fees, failed payments, fraud protection, and flexible country rules.

The system must be flexible from day one.

Admin must be able to configure payment rules by:

- Country
- Region
- Supplier
- Shipping company
- Payment method
- Supplier trust level
- Product category
- Product value
- Bulk order
- B2B contract
- Order risk level

---

# 1. Online Payment Flow

When the client pays online by card, wallet, bank method, or payment provider, Autopro must support a held/pending money flow.

Recommended structure:

```txt
Client pays online
Money enters pending/held balance
Supplier confirms order
Shipping progress is tracked
Delivery is confirmed
Return/dispute rules are checked
Autopro fee is secured
Supplier payout becomes available
Shipping company settlement is calculated
---

# Payment Infrastructure, Currency Rates, and Support Automation

This section defines important infrastructure rules for currencies, payment holding, staff support, and automated proof systems.

---

## Currency Rate Sources

Autopro must support multiple currency and pricing rate sources.

The system must not depend on only one exchange rate source.

Possible rate sources:

- Official bank rate
- Central bank rate
- Payment provider rate
- Supplier settlement rate
- Logistics partner settlement rate
- Admin-approved country pricing rate
- Market reference rate for pricing awareness
- Manual admin override
- Route-specific pricing rate

---

## Algeria Real Market Pricing

For Algeria and similar countries, official bank conversion may not reflect real procurement cost.

Example:

```txt
Official bank rate: 1€ = 150 DZD
Real procurement/market cost may be closer to 1€ = 280 DZD or more
---

# Service Payment Flow

This section defines how payments work for service providers on Autopro.

This applies to:

- Car wash
- Mobile car wash
- Tire change
- Tire repair
- Scanner/diagnostic check
- Software update services
- Mechanics
- Mobile mechanics
- Detailing
- Car wrapping
- Paint/body shops
- Other vehicle-related services

Autopro must make the service payment flow:

- Legal
- Clear
- Honest
- Secure
- Automated
- Easy to use
- Fraud-resistant
- Fair for clients
- Fair for service providers
- Protective of Autopro fees

---

# 1. Fixed-Price Service Payment

For fixed-price services such as car wash, tire change, scanner check, and detailing, the standard payment rule is:

```txt
Payment happens after the job is completed.
---

# Refund and Return Flow

This section defines how refunds, returns, replacements, damaged parts, wrong parts, service refunds, partial refunds, store credit, fraud prevention, and responsibility decisions work in Autopro.

Autopro must make refund and return handling:

- Legal by country
- Fair
- Secure
- Automated
- Proof-based
- Clear to clients
- Clear to suppliers
- Clear to service providers
- Clear to shipping companies
- Protective of Autopro
- Protective against fraud

---

# 1. Product Return Window

The product return window must follow country law as the highest rule.

Confirmed rule:

```txt
Country law is the standard.
## Product Payment Flow

Autopro's product payment flow manages how customers pay for parts and accessories, how suppliers are compensated, and how Autopro collects its fees. This section details both online and cash payment mechanisms, the flow of funds, and how disputes, refunds, and returns are integrated into the financial process.

### Dispute Resolution Flow for Product Payments

Autopro will implement a comprehensive, fair, seamless, and largely automated dispute resolution system. This system is designed to provide clear processes for all parties involved, with a strong emphasis on evidence, legal compliance, and efficient resolution.

**1. Who Can Open a Dispute:**

*   Any authenticated user with an 
---

# Confirmed Online Product Payment Rules

This section records confirmed rules for online product payments, supplier confirmation, payout timing, risk reserves, shipping company settlement, failed payments, client cancellation, and linked product/service orders.

---

## 1. Online Payment Authorization Before Capture

Autopro must use an authorization-first structure where supported by the payment provider and country law.

Confirmed flow:

1. Client clicks Pay Now or Place Order.
2. Autopro checks/authorizes that the client has enough available money.
3. No money is captured from the client yet.
4. Order status becomes Pending Supplier Confirmation or Pending Required Confirmations.
5. Supplier and/or service provider receives automatic notification only after payment authorization is successful.
6. Supplier and/or service provider has 48 hours to confirm availability, shipping possibility, and/or booking slot.
7. If the supplier and/or service provider does not confirm within 48 hours, the authorization is cancelled.
8. If all required parties confirm within 48 hours, Autopro captures the payment.
9. Captured money goes first to Autopro, the payment provider holding balance, approved merchant balance, or legally required holding structure depending on the country and payment provider.

Autopro must not capture online payment before required supplier/service provider confirmation unless a country-specific, provider-specific, or admin-approved rule requires a different process.

---

## 2. Pending Confirmation Status

Online product orders must support a pending state.

Possible pending statuses include:

- Pending payment authorization
- Payment authorized
- Pending supplier confirmation
- Pending service provider confirmation
- Pending required confirmations
- Authorization expiring soon
- Authorization cancelled
- Payment captured
- Order confirmed

The client must see a clear message explaining that the order request was submitted but is waiting for business confirmation.

The supplier/service provider must see a clear 48-hour confirmation deadline.

---

## 3. Supplier Cancellation After Confirmation

If a supplier confirms an order and Autopro captures the client payment, then the supplier later says the product is unavailable or cannot be shipped, responsibility depends on supplier trust status and history.

### New Supplier Rule

For a new supplier, cancellation after confirmation creates supplier responsibility.

Autopro must support:

- Full client refund
- Store credit if the client chooses it
- Supplier warning
- Supplier trust score reduction
- Possible restriction if repeated
- Autopro fee or processing fee charged according to platform rules

### Trusted Supplier Rule

For a trusted supplier with good history, one honest cancellation after confirmation should be handled smoothly.

Autopro must support:

- Full client refund or store credit, based on client choice
- Apology message from supplier/platform
- No automatic warning if the case is reasonable
- No automatic trust score reduction if the supplier has good history
- Autopro fee reduced to only the real transaction/refund processing cost, not the full normal platform fee

Trusted supplier protection must not be used to hide repeated problems. If a trusted supplier repeatedly confirms orders and then cancels them, Autopro can apply warnings, score reductions, payout holds, restrictions, or suspension.

---

## 4. Supplier Payout Trigger

The standard supplier payout trigger for online product orders is package handoff confirmation.

Confirmed standard rule:

```txt
Supplier payout becomes available after the shipping company confirms that it received the package from the supplier.
---

# Confirmed Cash Product Payment Flow Rules

This section records confirmed rules for cash product payments, cash on delivery, local cash collection, supplier/service provider cash handling, shipping company cash collection, pickup desk payment confirmation, refunds, cash trust scores, and fraud protection.

Autopro must support cash-heavy countries while also supporting countries where online payments are preferred.

The cash payment system must be:

- Legal by country
- Flexible by admin settings
- Secure
- Proof-based
- Automated where possible
- Easy to use
- Fair to clients
- Fair to suppliers
- Fair to service providers
- Fair to shipping companies
- Protective of Autopro fees
- Connected to trust scores and dispute records

---

## 1. Cash On Delivery Availability

Autopro must support cash on delivery and cash payment where legally possible.

Cash payment availability must depend on:

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

Confirmed rule:

Cash payment can be available in any country where legally possible, but only if the involved supplier, service provider, shipping company, or collector accepts cash for that order/service.

Some suppliers and service providers may rely fully on cash.

Other suppliers and service providers may refuse cash for normal clients.

If a supplier refuses cash generally, Autopro can still allow cash for trusted/VIP clients if the supplier enables that option.

Admin/full owner and assigned staff must be able to add, modify, disable, or delete cash payment methods by country, region, supplier, service provider, shipping company, product value, service value, or legal requirement.

Autopro should research each country and provide recommended standard payment methods, but the owner and assigned staff must keep full control.

---

## 2. Who Can Collect Cash

Autopro must support multiple possible cash collectors depending on country and agreement.

Cash can be collected by:

- Shipping company
- Supplier, if supplier ships or delivers directly
- Service provider
- Autopro staff or Autopro partner
- Pickup office
- Warehouse
- Stop desk / pickup desk partner
- Local payment collection partner

Examples:

- If supplier and client are in the same city, supplier can deliver directly and collect cash if allowed.
- If supplier offers free local delivery, supplier can collect cash directly if allowed.
- If the package is delivered by a shipping company, the shipping company can collect cash.
- If the client picks up from a desk/office, the desk/office employee can confirm payment and pickup.
- If the service provider orders parts and completes the job, the service provider can collect cash if allowed.

All collector types must be controlled by admin settings and country rules.

---

## 3. Cash Expected Order Status

When client chooses cash payment:

1. Client selects cash payment.
2. Autopro creates a Cash Expected order.
3. Supplier and/or service provider must still confirm within 48 hours.
4. No online money is captured.
5. Order proceeds only after required confirmations are completed.
6. The order timeline must show the expected cash amount and who is expected to collect it.
7. The final cash amount must be visible to the client before confirmation.

Cash orders must have clear statuses, including:

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

## 4. Cash Order Risk Check

Autopro must check client trust before allowing cash orders.

The cash order risk check can include:

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
- Device/session checks where legally allowed
- IP checks where legally allowed

Confirmed rule:

If client identity and phone are not verified, the client cannot place a cash order unless admin manually allows it.

If the client has serious fraud history, repeated fake orders, or repeated refused payments, Autopro can restrict, suspend, or block the account.

Autopro must prevent blocked users from easily creating a second account using the same phone number, WhatsApp number, email, device/session data, or IP address where legally allowed.

---

## 5. Cash Order Limits

Autopro should recommend cash order limits to suppliers and service providers, but must allow flexibility.

Supplier/service provider can set cash rules such as:

- Accept cash for all orders
- Refuse cash for all orders
- Accept cash only below a certain value
- Require partial advance payment above a certain value
- Accept cash only from trusted/VIP clients
- Accept cash only in certain regions
- Accept cash only for certain products/services
- Accept cash for repeat clients
- Accept cash for bulk orders only with extra confirmation
- Remove cash limits for specific trusted clients

Confirmed rule:

Autopro does not need a universal maximum cash order value unless required by country law.

Country-specific legal limits must be respected.

Admin must have manual override.

For high-value orders, bulk orders, risky clients, new clients, or expensive parts/services, the supplier or service provider can request a deposit or percentage before shipping, ordering parts, or starting service.

The system must support a checkbox or setting where suppliers/service providers can enable or disable this requirement for trusted/VIP clients.

---

## 6. Client Refuses To Pay Cash At Delivery

Before an order or service is confirmed, the client must clearly choose the payment method.

If the client chooses cash and then refuses to pay when the package arrives or when the service is completed, Autopro must handle it as a serious trust issue unless the client provides a valid reason.

Autopro must support:

- Order marked as Client Refused Payment
- Client asked for clarification
- Client trust score reduction if the refusal is not valid
- Warning sent to client
- Return shipping/cancellation fee charged to client if legal
- Supplier protected if proof exists
- Shipping company protected if proof exists
- Service provider protected if proof exists
- Repeated refusal restricts cash payment option
- Repeated refusal can lead to suspension or account block
- Staff review if client gives a valid reason
- VIP client support review before harsh action when appropriate

If refusal repeats and there is no valid reason, Autopro can automatically restrict cash payment, suspend the account, and later block the account according to platform rules.

---

## 7. Shipping Company Cash Collection Flow

If the shipping company collects cash:

1. Shipping company delivers package or makes it available for pickup.
2. Client pays cash.
3. Shipping company confirms cash collected.
4. QR confirmation or manual digital confirmation is recorded.
5. Client confirmation can also be recorded.
6. Shipping company balance shows money owed to Autopro, supplier, or other parties.
7. Autopro reconciles supplier amount, shipping amount, and Autopro fee.
8. Shipping company settlement happens according to contract schedule.

Shipping company settlement can be:

- Per order
- Daily
- Weekly
- Monthly
- Custom contract period

Autopro must store proof of delivery, cash collection, receipt, collector identity, and timestamp.

---

## 8. Local Shipping / Pickup Desk Partner Engine

Autopro must support a limited-access partner engine for shipping companies, pickup offices, stop desks, warehouses, and local cash collection partners.

Example partner:

- ZR Express in Algeria

This engine can be used when a local shipping company or pickup desk is the second shipping layer after an international shipment, or when the supplier is local.

The partner engine must allow authorized partner employees to confirm:

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

The partner employee must have limited access only to the tasks assigned to that office, desk, shipment, or role.

The partner employee must not be able to modify the client’s final bill unless explicitly allowed by admin for a specific controlled case.

---

## 9. Partner Desk Final Bill Payment

Autopro must support the possibility for a supplier, service provider, shipping company, or other business account to pay their Autopro bill through an approved partner desk such as ZR Express, if legally and contractually allowed.

The partner desk employee can view the final bill for payment confirmation only.

The final bill can include:

- Autopro fees
- Plan fees
- Service fees
- Shipping-related fees
- Reimbursement amounts
- Refund/credit reimbursement debt
- Other approved platform bills

When the partner desk confirms payment:

- Payment status updates automatically in Autopro
- Business dashboard updates
- Admin dashboard updates
- Finance records update
- Proof is saved
- Receipt is generated
- Bill status becomes paid or partially paid
- Linked ledger records update

Autopro must record:

- Partner desk ID
- Employee ID
- Business account ID
- Bill ID
- Amount paid
- Currency
- Date/time
- Payment method
- Receipt/proof
- Confirmation method
- Staff/admin override if any

The partner desk fee can be handled in two ways:

1. Partner fee is deducted automatically from Autopro fee or settlement.
2. Partner fee is added to a weekly, monthly, or custom settlement bill paid by Autopro or assigned finance staff.

Admin must be able to configure partner desk fees by country, partner, office, service type, and contract.

---

## 10. Partner Engine Security And Fraud Protection

The partner engine must be designed with strong security and fraud protection.

Autopro must use a security-focused structure with:

- Limited access roles
- Private partner login or private access link
- Office-specific permissions
- Employee-specific permissions where possible
- Task-specific access
- Audit logs
- IP/device/session checks where legally allowed
- QR/manual confirmation records
- Fraud alerts
- Automatic blocking of suspicious partner access
- Staff/admin review for blocked access
- Ability to generate a new secure link after investigation
- Ability to revoke old links immediately
- No access to unrelated Autopro data
- No ability to modify bills unless permission is explicitly granted

If fraud detection triggers, Autopro can automatically block the partner account, office account, employee account, or private link.

If fraud 
