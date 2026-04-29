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
---

# Confirmed Supplier Payout, Business Debt, and Autopro Fee Collection Rules

This section records confirmed rules for supplier payouts, service provider payouts, shipping company payouts, Autopro fee collection, unpaid business debt, negative balances, chargebacks, payout holds, statements, and staff permissions.

Autopro must make fee collection and payout handling:

- Legal by country
- Automated where possible
- Clear to business users
- Protected for Autopro
- Fair to suppliers
- Fair to service providers
- Fair to shipping companies
- Seamless for trusted/VIP partners
- Strict against fraud and repeated abuse
- Fully visible to admin/full owner

---

## 1. Autopro Fee Visibility

Confirmed rule:

- Client sees the final price only.
- Client does not see Autopro internal profit, commission, or fee breakdown unless legally required.
- Supplier can see Autopro fee per part, per order, and per applicable product transaction.
- Service provider can see Autopro fee per service, booking, examination, diagnosis, or completed job.
- Shipping company can see its own logistics, collection, or platform fee obligations.
- Admin/full owner sees the full internal breakdown.

For VIP deals, bulk orders, fleet services, and special contracts, business users can see:

- Original Autopro fee
- VIP reduction
- Plan-based reduction
- Bulk/order reduction
- Fleet/contract reduction
- Savings created by VIP status, plan level, or contract

The client experience must remain simple and should not expose internal business fee logic unless the law requires disclosure.

---

## 2. Autopro Fee Maximum

Autopro commission-style platform fees must not surpass 20% as the standard maximum.

This 20% maximum applies to:

- Product sales
- Service bookings
- Examination/diagnosis fees
- Shipping/logistics platform fees
- B2B/fleet order commissions

Separate paid services are not treated as normal commission fees. These include:

- Ads
- Promotions
- Featured listings
- Subscription plans
- Fixed plan prices
- Optional analytics packages
- Optional premium business tools

Country/category exceptions require admin/full owner approval and must follow applicable law.

Autopro must keep fee rules flexible so the platform can protect Autopro profit while also supporting:

- Good client experience
- Repeat purchases
- Supplier profitability
- Service provider profitability
- Shipping partner cooperation
- VIP and fleet discounts
- Country-specific pricing rules

---

## 3. Online Product Order Fee Timing

For online product orders:

1. Autopro fee is calculated when the order is created.
2. Autopro fee is secured when client payment is captured.
3. Autopro fee is separated before supplier payout.
4. Supplier sees the fee in their dashboard.
5. Client sees only the final price unless law requires otherwise.

Confirmed rule:

If the order is cancelled before the supplier ships or starts the confirmed fulfillment process, the normal Autopro fee can be cancelled or reduced according to cancellation rules.

Once the order is shipped or fulfillment has started, Autopro fee is automatically secured according to the platform rules, even if the order later has a delivery, return, or dispute issue.

Responsibility rules decide later if the fee remains, is reduced, is transferred, or is charged to the responsible party.

---

## 4. Cash Product Order Fee Timing

For cash product orders, Autopro fee is not collected from online client payment.

Instead, Autopro fee is automatically added to the supplier, service provider, shipping company, or responsible business bill.

Cash order fees can be billed:

- Per order
- Weekly
- Monthly
- With plan billing
- According to contract
- According to country/payment rules
- According to admin settings

The business dashboard must clearly show:

- Order amount
- Cash collected
- Autopro fee owed
- Due date
- Payment method options
- Paid/unpaid status
- Linked invoice or bill
- Any penalties or restrictions if unpaid

---

## 5. Who Pays Autopro Fee By Default

Confirmed standard rule:

Supplier/service provider pays Autopro fees as the standard rule.

Autopro must support exceptions where legally and commercially appropriate:

- Client can pay a visible service/convenience/operational fee if admin enables it and the law allows it.
- Shipping company can pay logistics or collection fee if contract says so.
- Supplier pays product commission.
- Service provider pays booking/service commission.
- Hybrid business pays based on the product and service portions of the order.
- Autopro can discount or absorb fees during promotions if admin decides.
- Country law decides if a fee must be shown, hidden inside final price, taxed, invoiced, or handled differently.

Any client-facing fee must be handled honestly and legally. If the law requires the fee to be shown, Autopro must show it.

Suggested future configuration:

- Small operational/convenience fee can be configurable by country.
- Example range can be 0.5% to 3% or a small fixed local amount, depending on country law, payment method, partner desk cost, and platform strategy.
- The fee should be capped so the client experience stays positive.
- Admin/full owner must control whether this fee is included in final price or shown separately where legally required.

---

## 6. Shipping Company Fees

Shipping companies can have Autopro platform, logistics, collection, or settlement fees depending on contract.

Special discounted shipping company fees can apply when a shipping/logistics company provides extra value or extra risk coverage.

Example:

A shipping/logistics company pays the supplier abroad, such as in China, and receives equivalent cash settlement locally, such as in Algeria.

In that case, Autopro can give discounted fees because the shipping company is helping solve international supplier payment and cash collection problems.

Shipping company fee rules must be configurable by:

- Country
- Shipping company
- Route
- Service type
- Cash collection role
- International settlement role
- Risk level
- Contract
- Admin decision

---

## 7. Trusted Supplier Payout

Trusted suppliers can receive faster payouts after shipping company package handoff or received scan.

Trusted/VIP suppliers can receive payout before package handoff only under controlled conditions.

Allowed cases can include:

- Very trusted/VIP supplier
- Low-risk product
- Low-value product
- Admin approval
- Supplier has guarantee/security deposit/credit arrangement with Autopro
- Country/payment provider supports the structure
- Supplier has excellent history and low dispute rate

Autopro must protect itself from loss, fraud, and refunds when early payout is allowed.

---

## 8. New Supplier Payout

New suppliers receive payout after package delivery is confirmed, not just package handoff, until they build trust.

This protects Autopro and clients while the supplier is still proving reliability.

New supplier payout rules can loosen over time if the supplier shows:

- Successful deliveries
- Low dispute rate
- Low return rate
- Good communication
- Fast confirmations
- Good client feedback
- Accurate product listings
- Reliable shipping behavior
- Timely payment of Autopro fees

---

## 9. Risky Supplier Payout

Risky suppliers or suppliers with previous warnings can have payout delayed until:

- Delivery is confirmed
- Return window rules are satisfied
- Dispute window rules are satisfied
- Staff/admin review is completed if needed

Risky supplier behavior can include:

- Repeated cancellations
- Wrong parts
- Damaged items
- Delayed shipping
- Missing proof
- Client complaints
- Cash not reported
- Fee debt not paid
- Fraud reports
- Repeated disputes

Autopro can apply payout holds, reserves, restrictions, reduced visibility, or suspension depending on severity.

---

## 10. Partial Payout and Reserve

Autopro must support partial payout and payout reserve.

Example:

```txt
Supplier receives 80% after package handoff.
Autopro holds 20% reserve until delivery/dispute window ends.
---

# Confirmed Shipping Company Settlement Detailed Rules - Part 1

This section records confirmed rules for shipping company accounts, shipping employee roles, package handoff confirmation, delivery confirmation, cash collection, settlement statements, shipping company fees, international supplier payment support, exchange-rate handling, package loss, package damage, late delivery, pickup desk no-show, and return package handling.

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
- Connected to future owner platforms where allowed

---

## 1. Shipping Company Account Type

Shipping companies must have their own business account type inside Autopro.

Shipping companies do not need a public marketplace profile like a supplier or service provider, unless admin enables it later.

Shipping companies can have a private or limited public information area showing contact methods such as:

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

The structure must be flexible and never fixed, so if a shipping company grows or expands its services, Autopro can support the expansion without rebuilding the system.

---

## 2. Shipping Company Roles and Employees

Shipping companies must be able to create employee accounts for workers, offices, and internal teams.

Possible shipping company employee roles include:

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

The number of employees and unlocked features can depend on shipping company plan level, contract, country, and admin settings.

Autopro must support flexible employee expansion so a shipping company can start small and grow inside the platform.

---

## 3. Shipping Company Employee Permissions

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

Shipping company admin/owner can add, modify, or remove roles and permissions according to their company needs, within limits allowed by Autopro.

Autopro admin/full owner must still have final control over platform-level permissions and restrictions.

Permissions must remain editable after setup.

Every permission change must be audit logged.

Autopro should study proven shipping/logistics software patterns and include useful features such as:

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

## 4. Package Handoff From Supplier To Shipping Company

When a supplier hands a package to a shipping company, the handoff must be confirmed from both sides because supplier payout and Autopro fee handling can depend on this confirmation.

Accepted confirmation methods can include:

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

Package handoff should require both supplier confirmation and shipping company confirmation unless admin/country/partner rules allow a simpler method.

This protects:

- Client
- Supplier
- Shipping company
- Autopro
- Payment flow
- Payout timing
- Dispute proof

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

## 5. Shipping Company Package Handoff Effect

When the shipping company confirms that it received the package from the supplier:

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
- The database records the exact confirmation time and proof.

This confirmation must be stored as a digital step for accuracy, automation, and future dispute proof.

---

## 6. Shipping Company Dashboard Growth And Profit Features

Shipping company dashboards should not only show tasks.

Autopro should help shipping companies understand their business growth inside the platform.

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

Some advanced analytics can be plan-based premium features.

The goal is to make Autopro valuable for shipping companies so they prefer using Autopro tools instead of buying expensive separate software.

---

## 7. Successful Delivery Confirmation

Successful delivery must support flexible confirmation methods depending on country, shipping method, and partner setup.

Accepted delivery confirmation methods can include:

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

The final result is one clear delivery confirmation record, even if different countries or shipping companies use different confirmation methods.

---

## 8. Delivery Confirmation Effect

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

## 9. Cash Collected By Shipping Company

If a shipping company collects cash from the client, the shipping company owes the relevant amount to Autopro, supplier, or settlement system according to contract.

The settlement timing can be:

- Immediately after cash collection confirmation
- End of day
- Weekly
- Monthly
- Based on contract
- Based on country law
- Based on shipping company service model
- Controlled by admin

Autopro must support flexible settlement schedules because shipping companies may have different ways of delivering money back.

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

## 10. Shipping Company Payout Timing

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

If a shipping company does not collect or receive its due settlement at the exact time, the amount can automatically roll into the next settlement bill until collected or paid.

If Autopro has an issue paying a shipping company on time, automatic notices must be sent to the shipping company with a clear expected payment date.

Autopro must support seamless and automated settlement tracking.

---

## 11. Shipping Company Settlement Statement

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

Statements must be automated, detailed, saved in the database, and accessible from the shipping company dashboard and admin dashboard.

Autopro must research country-specific legal/tax/receipt requirements and use them as default settings where applicable.

Admin/full owner and assigned finance staff must be able to adjust templates and settlement rules when needed.

---

## 12. Shipping Company Fee To Autopro

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

Shipping company fees and discounts must be configurable by:

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

## 13. Shipping Company Pays Supplier Abroad And Collects Local Cash

Autopro must support a model where a trusted shipping/logistics company pays a supplier abroad and collects equivalent local cash in the destination country.

Example:

```txt
Shipping/logistics company pays supplier in China.
Client pays cash locally in Algeria.
Shipping/logistics company receives local settlement/cash.
Autopro tracks the full settlement ledger.
