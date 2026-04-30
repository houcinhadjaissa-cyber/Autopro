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
---

# Confirmed Shipping Company Settlement Detailed Rules - Part 2

This section records confirmed rules for failed delivery attempts, failed delivery reasons, rescheduling, storage fees, return shipping fees, shipping company disputes, shipping company trust scores, rewards, penalties, plans, warehouse handoffs, customs/import handling, insurance, shipping integrations, partner portals, admin controls, reconciliation, shipping company access to client data, and shipping company support flow.

Autopro must make shipping operations legal, flexible, proof-based, automated where possible, secure, and understandable for clients, suppliers, service providers, shipping companies, staff, and admin.

Autopro must reduce platform-side errors as much as possible through structured data, confirmations, audit logs, automation, alerts, and human review when needed.

---

## 1. Failed Delivery Attempts

If a shipping company, driver, desk worker, or pickup office tries to deliver or hand over a package but the delivery fails, Autopro must record the failed delivery attempt.

A failed delivery attempt must include:

- Order ID
- Package/tracking ID
- Shipping company ID
- Driver/employee/desk ID if applicable
- Date and time
- Location if legal and available
- Failed delivery reason
- Optional written explanation
- Proof if needed
- Next action
- Reschedule status
- Fee status if applicable
- Responsible party if clear
- Staff/admin review status if needed

When a delivery attempt fails:

- Delivery attempt is recorded.
- Reason is required.
- A list of standard failed-delivery reasons must appear.
- A text box must allow the driver/desk/employee to explain what happened.
- Client is notified.
- Supplier is notified if needed or if supplier enabled those notifications.
- Admin dashboard updates.
- Driver/desk can add proof if needed.
- Second attempt can be scheduled if allowed.
- Extra delivery fee can apply if legal and admin settings allow.
- Client trust score can be affected if client caused repeated failures.
- Shipping company trust score can be affected if shipping company caused repeated failures.

Client trust score should not be harshly affected after only one failed attempt unless fraud or serious abuse is clear.

For client-caused failures, score impact should normally start after the second failed attempt or after repeated behavior.

Repeated no-show or refusal behavior by the same client can lead to warnings, cash restriction, order restriction, suspension, or account block according to platform rules.

Shipping company score impact must depend on:

- Number of failures compared to successful deliveries
- Repetition of failures in a short period
- Last 7 days performance
- Monthly performance
- Proof quality
- Reason for failure
- Weather, disaster, war, fire, road closure, or other force majeure
- Whether the company is new, trusted, or VIP

Trusted/VIP shipping companies should receive staff contact and support when unusual repeated failures happen, because the goal is to help strong partners recover and continue performing well.

---

## 2. Failed Delivery Reasons

Autopro must support a structured list of failed delivery reasons.

The list must be easy for delivery staff, desk staff, and shipping company employees to select.

Autopro must also allow an additional written note.

Failed delivery reasons can include:

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

For unclear addresses, building access, or location problems, the delivery employee should attempt to contact the client by phone, WhatsApp, app message, or approved contact method before marking the attempt as failed, where practical and legal.

Autopro must structure address saving carefully to reduce address errors.

---

## 3. Delivery Reschedule Rules

If delivery fails and needs rescheduling, Autopro must support flexible rescheduling.

The following parties can reschedule depending on reason and permissions:

- Client
- Shipping company
- Supplier
- Admin/support staff
- Automated system

New clients can normally receive up to 2 delivery attempts if allowed by country, partner, and admin settings.

Trusted/VIP clients can receive up to 3 delivery attempts and a longer reschedule window, such as 4 days, if admin rules allow.

Elderly clients or clients with support needs can receive softer handling and human support before harsh consequences.

Shipping company can reschedule only after contacting the client or after the system confirms the client received the reschedule information.

Supplier can request reschedule only when supplier is involved in the delay or delivery coordination, and the client must be informed clearly.

Automation must be available as an option, but it must not be the only method. Authorized roles must be able to modify reschedule actions according to permission.

The goal is to get the package to the client legally and efficiently.

---

## 4. Delivery Reschedule Fees

Autopro must support delivery reschedule fees where legal and enabled by admin settings.

General direction:

- No fee for the first reschedule.
- Fee can apply after repeated client-caused failures.
- Fee can apply if client repeatedly gives wrong address.
- Fee can apply if client repeatedly misses delivery or pickup.
- Fee can apply if client requests extra attempts beyond allowed free attempts.
- Shipping company should not pay a fee if the failure was not caused by shipping company fault.
- Supplier can be responsible if supplier repeatedly gave wrong information or shipped late.
- Autopro pays or absorbs cost if platform/system error caused the problem.
- Country law and admin settings decide final rules.

Client-caused fee rules:

- If new or risky client has more than 2 warnings, extra delivery/reschedule may be blocked or require fee.
- If client gives wrong address after repeated attempts, fee can apply.
- Trusted/VIP/elderly clients should receive support review before fees when appropriate.
- If a client with good history misses delivery, a third attempt can be allowed with or without fee depending on rules.
- If a client has a valid reason, staff/admin can waive or reduce the fee.

Supplier-caused fee rules:

- Supplier pays if supplier gave wrong information or caused shipping delay repeatedly.
- Supplier can appeal by submitting structured reasons and proof.
- Staff/admin can review repeated supplier errors.

Autopro-caused fee rules:

- Autopro absorbs cost if platform system/address/payment/shipping assignment error caused the failed delivery.

All fees must be shown clearly before the client confirms an action that creates a fee, where legally required.

---

## 5. Storage Fee At Pickup Desk Or Warehouse

Autopro must support storage fees where legal.

Storage fee rules can include:

- No fee during the first grace period.
- Fee after pickup deadline.
- Different fees by country.
- Different fees by partner.
- Different fees by warehouse/pickup desk.
- VIP/elderly clients receive staff contact before fee when appropriate.
- Admin controls storage fee rules.
- Partner desk/warehouse can receive part of the storage fee if contract allows.

Confirmed direction:

After repeated failed pickup/delivery attempts, the client can be offered choices such as:

1. Reschedule another attempt if allowed.
2. Keep the package at warehouse/pickup desk for a fixed storage fee.
3. Return the package to supplier/warehouse after deadline.

For trusted/VIP/elderly clients, Autopro can allow storage for a specific period, such as 15 days, with a clear fixed fee if legal and enabled.

This must be configurable by admin and assigned staff.

---

## 6. Return To Supplier After Failed Delivery Or No-Show

Autopro must support automatic and manual return-to-supplier or return-to-warehouse rules.

A package can be returned after:

- Pickup deadline expires
- Repeated delivery failures
- Client refuses package
- Client refuses cash payment
- Staff/admin review
- Country/partner rule triggers automatic return
- Supplier chooses return/hold/dispose option if legal
- Warehouse holding period ends

VIP/elderly clients should receive extra contact attempts before return when appropriate.

Supplier can choose between return, hold, dispose, or other legal action only if country law, contract, and platform rules allow it.

The system must clearly record who requested or triggered the return.

---

## 7. Return Shipping Fee Responsibility After Failed Delivery

Return shipping fee responsibility must be decided by proof, country law, contract, and platform rules.

Possible responsibility:

- Client pays if client caused failure or refused package without valid reason.
- Supplier pays if supplier caused wrong information, wrong item, bad packaging, or late shipping.
- Shipping company pays if shipping company caused failure.
- Autopro pays if platform/system error caused failure.
- Fee can be split if responsibility is shared.
- Staff/admin decides by proof when automation cannot decide.
- Country law/contract applies first.

Client refusal rule:

If the client refuses a package for no valid reason, and the package is not broken, wrong, damaged, illegal, unsafe, or materially different from what was ordered, the client can be responsible for return shipping fee where legal.

If the client paid online:

- Client can receive eligible refund according to return/cancellation rules.
- Return shipping fee can be deducted if legal or added to client account bill/next order.
- Client must be informed clearly.

If the client chose cash on delivery and refuses payment without valid reason:

- Return fee can be added to client account/next order if legal.
- Client trust score can be affected.
- Repeated behavior can cause warning, restriction, suspension, or account block.

Before confirming refusal while the delivery worker is present, the client should see or receive clear instructions explaining:

- What refusal means
- Possible return fee
- Possible trust score effect
- Possible restriction after repeated behavior
- Confirmation checkbox or equivalent digital proof where possible

Trusted/VIP/elderly clients should receive staff review and clarification before return fees when appropriate.

If a user falsely claims elderly/support status to avoid fees or penalties, the case must be flagged for staff review. Any age/support-related handling must follow privacy law and anti-discrimination rules.

---

## 8. Shipping Company Disputes

Shipping companies must be able to open disputes.

Shipping company dispute examples include:

- Client says package was not delivered but driver has proof.
- Supplier says package was not picked up but shipping company has proof.
- Supplier gave damaged or badly packaged item.
- Supplier gave wrong shipment information.
- Client refused cash on delivery payment.
- Client no-show after allowed attempts.
- Autopro settlement not paid.
- Wrong fee charged.
- Package loss responsibility disagreement.
- Package damage responsibility disagreement.
- Return package disagreement.
- Warehouse handoff disagreement.
- Cash collected/remitted disagreement.
- Customs/import responsibility disagreement.

If supplier gives bad or damaged packaging, shipping company can be allowed to:

- Refuse to ship it.
- Return it to supplier.
- Ask supplier to pick it back up.
- Flag it as Packaging Problem.
- Request supplier correction.
- Request supplier responsibility acceptance.

Dispute handling must be proof-based, automated where possible, and escalated to staff/admin where needed.

---

## 9. Shipping Company Trust And Performance Score

Shipping companies must have trust and performance scores.

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

Score must account for events outside the shipping company’s control, including:

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

Those uncontrollable events should not unfairly damage shipping company score.

New shipping companies should be reviewed by admin/staff after repeated failures, such as 4 failed deliveries, depending on country and volume.

Trusted/VIP shipping companies should receive more understanding and staff support if unusual problems appear.

---

## 10. Shipping Company Penalties And Rewards

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
- Access to VIP client service tools
- Access to advanced analytics
- Better support priority
- Growth recommendations

Rewards and penalties must be flexible, automated where possible, and controlled by admin settings.

---

## 11. Shipping Company Plans And Premium Features

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

Plans must be structured from day one so the same shipping partner system can support future owner platforms, not only car parts.

The goal is to help shipping companies work better, expand faster, and use Autopro as a powerful operations tool.

---

## 12. Warehouse Handoff Rules

If a package passes through an Autopro warehouse or partner warehouse, Autopro must support structured confirmations.

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

The warehouse flow must be automated and easy to access.

Autopro must avoid forcing unnecessary manual confirmation 10+ times if the route does not require it.

The system should support route templates where only necessary confirmations are required.

If one previous step is missing but the package already continues toward the client, the package should not be blocked automatically if blocking would harm delivery.

The priority order is:

1. Get the package to the client legally and safely.
2. Keep all parties informed.
3. Collect as much accurate proof as possible.
4. Investigate repeated missing steps.
5. Allow exceptions for direct routes or simplified shipping partners.

Repeated missing warehouse/shipping steps should trigger staff investigation unless an approved route exception exists.

---

## 13. Warehouse Damage Or Loss Responsibility

If a package is lost or damaged in a warehouse, responsibility depends on proof.

Possible responsibility:

- Warehouse/partner responsible if loss/damage happened after warehouse received and accepted package.
- Autopro responsible if warehouse is Autopro-controlled and Autopro/warehouse fault caused the issue.
- Shipping company responsible if damage happened before warehouse receiving confirmation.
- Supplier responsible if bad packaging caused damage.
- Staff/admin decides by proof when automation cannot decide.
- Insurance/contract applies.
- Country law applies.

The system must record condition at warehouse receiving so responsibility can be assigned fairly.

---

## 14. Customs And Import Tracking

Autopro must support customs/import tracking for international orders.

Customs/import tracking can include:

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

Shipping company can select customs/import issue as a reason for delayed delivery.

Autopro must support flexible customs options that can be modified by country, route, supplier, shipping company, product category, and legal requirement.

---

## 15. Customs And Import Fees

Customs/import fees must be agreed and clear before purchase whenever possible.

Possible responsibility:

- Client pays if shown before purchase.
- Supplier pays if included in product/shipping agreement.
- Shipping/logistics partner pays first and bills later if contract says so.
- Autopro pays only if platform promise/error caused the issue.
- Country law decides where applicable.
- Incoterms/shipping agreement decides where applicable.
- Admin controls rules by country, supplier, shipping route, product category, and contract.

Autopro must be flexible enough to support different international trade models.

Autopro’s job is to make the agreement clear, legal, and automated.

---

## 16. Shipping Insurance

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

Insurance must not block the normal shipping result unless required by rules.

Insurance options must be clear before purchase where applicable.

---

## 17. Insurance Claim Flow

If an insured package is lost or damaged, Autopro must support an insurance claim flow.

Confirmed flow:

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

Insurance claim handling must be seamless, easy to follow, proof-based, and flexible for all involved roles.

---

## 18. Shipping Company API And Integration Direction

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

The integration structure must be reusable for future owner platforms.

Autopro must protect its main database and platform when connecting external systems.

Security direction:

- External systems receive limited scoped access only.
- External systems can only access assigned shipments/tasks.
- API keys/tokens must be revocable.
- Sensitive client/profile/vehicle data is not exposed unless necessary and legal.
- All external changes are audit logged.
- Suspicious integration behavior can be automatically blocked.
- Manual staff review is required before restoring suspicious access.
- Data validation must prevent external systems from corrupting Autopro records.
- Integration permissions must be adjustable by admin.

---

## 19. If Shipping Company Has No Software Or API

If a local shipping company has no modern software/API, Autopro must provide tools so they can still work inside the platform.

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

These tools must be easy to use, flexible, secure, and automated as much as possible from day one.

---

## 20. Staff/Admin Controls For Shipping Settlement

Admin/full owner and assigned staff must be able to control shipping settlement settings.

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

Autopro can use an algorithm to suggest discounts, route improvements, or partner upgrades.

Each role must be able to accept, reject, or modify suggested changes depending on permissions.

Admin/full owner must be able to control which staff roles have access to each setting.

Every important action must be audit logged.

---

## 21. Shipping Company Statement And Payment Reconciliation

Autopro must reconcile shipping company statements automatically.

Reconciliation means Autopro compares expected money, expected deliveries, expected fees, and expected settlements against actual confirmed records.

Autopro must be able to match:

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

If Autopro detects a mismatch, it must create:

- Alert
- Reconciliation issue record
- Suggested adjustment
- Staff/admin review task if needed
- Updated statement status
- Proof request if needed

This protects Autopro, shipping company, supplier, service provider, and client.

---

## 22. Shipping Company Access To Client Data

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

Autopro must support flexible name/contact structures.

Users can have different names for different purposes where legal:

- Public profile name
- Shipping name
- Legal billing name
- Company name
- Employee pickup/contact name
- Order contact name
- Influencer/media name later if applicable

Business accounts can assign employees for specific tasks such as ordering, pickup, payment, warehouse receipt, or billing.

The system must link all task-specific names and contacts back to the correct internal user/business ID.

The more verified legal/contact information a user provides, the better Autopro can protect delivery, trust score, and dispute proof.

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

## 23. Shipping Company VIP/Trusted Client Lists

Autopro can support shipping-company-specific VIP/trusted client lists as a paid-plan or premium feature where legal and privacy rules allow.

Shipping company can create its own preferred/trusted client list.

Autopro can suggest clients to add based on:

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
- Remove clients from its list

Access to VIP/trusted client list tools should require eligibility, such as:

- At least 1 month on Autopro
- No serious warnings
- No repeated reports
- Excellent track record
- Repeated successful delivery use
- No more than allowed failed deliveries in a month, such as no more than 2 if admin sets that rule
- Approved plan level
- Admin approval if needed

Admin and selected employees can give direct access to selected shipping companies from day one if needed.

Admin and selected employees can modify rules at any time.

Autopro must protect VIP and trusted clients at all times and must not expose unnecessary private data.

---

## 24. Shipping Company Support And Contact Flow

Shipping company support must be structured and saved.

Support options can include:

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

A ticket system means a support case with a unique ID.

Example:

A shipping company opens a support ticket for a delivery issue. The ticket is linked to the order, shipment, proof, conversation, staff notes, and final decision.

This makes support easier to track and prevents repeated explanations.

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

Trusted/VIP shipping partners can receive direct contact and account manager support depending on plan, contract, and staff availability.

---

## 25. Shipping Settlement Part 2 Goal

The goal of these shipping settlement rules is to make shipping operations:

- Legal
- Flexible
- Secure
- Automated where possible
- Easy to use
- Proof-based
- Fair to all parties
- Helpful for shipping companies
- Protective of Autopro
- Reusable in future owner platforms

Autopro must focus on getting packages to clients while keeping every important step recorded, connected, and reviewable.
---

# Confirmed Refund and Return Decision Matrix

This section records confirmed rules for refunds, returns, replacements, store credit, service correction, wrong parts, damaged parts, changed-mind returns, sensitive parts, used/installed parts, service refunds, return windows, return approvals, refund timing, replacement timing, refund methods, partial refunds, fraud protection, supplier refusal, wrong returned items, and vehicle history updates.

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
- Connected to invoices, proof, disputes, vehicle history, and dashboards

Autopro must reduce platform-side errors as much as possible through structured confirmations, proof, automation, audit logs, staff review, and clear country-specific legal rules.

---

## 1. Main Refund Outcomes

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

Partial refunds are required because a large order may include many parts, and only one part or selected parts may need refund.

Autopro must use detailed bills, invoices, line items, product IDs, service IDs, and payment records so the system can refund only the affected part of an order instead of the entire order.

---

## 2. Client Choice Between Money Refund and Store Credit

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

## 3. Refund Staff Task Automation

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

Senior staff can access manager escalation according to permission rules.

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

## 4. Product Not Received

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

## 5. Wrong Part Received

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

Autopro must make this flexible and automated while keeping responsibility fair.

---

## 6. Damaged Part Received

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

## 7. Product Works But Client Changed Mind

The standard Autopro direction is:

```txt
No automatic return/refund only because the client changed mind, unless country law requires it or supplier policy allows it.
---

# Confirmed Service Payment, Service Refund, and Service Provider Payout Final Details

This section records confirmed rules for service payments, service provider payouts, service refunds, examination/diagnosis fees, service quotes, provider-ordered parts, cancellations, no-shows, service completion confirmation, service disputes, service warranty, rework, extra work, overcharging protection, provider protection, provider trust score, rewards, penalties, and provider statements.

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
- Connected to invoices, quotes, vehicle history, trust scores, disputes, and dashboards

---

## 1. Service Payment Types

Autopro must support multiple service payment types.

Supported service payment types can include:

- Fixed-price service paid after completion
- Fixed-price service paid before appointment if provider/admin/country rules allow
- Examination/diagnosis fee paid after appointment as the standard direction
- Examination/diagnosis fee paid before appointment if provider requires it and law allows
- Deposit before appointment if provider requires it and law allows
- Cash after service
- Online payment after service
- Online authorization before appointment with capture after completion
- Provider-selected payment methods
- Admin-controlled payment rules by country, category, provider, and service type

For fixed-price services, price can depend on factors such as:

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

Autopro must allow service providers to set flexible service prices while keeping prices clear to the client before booking.

---

## 2. Standard Fixed-Price Service Payment Timing

For simple fixed-price services such as car wash, tire change, tire repair, scan check, detailing, and similar services, the standard payment rule is:

1. Client books service.
2. Provider confirms appointment.
3. Service is completed.
4. Provider marks service as completed.
5. Client confirms completion.
6. Client pays after completion, either cash or online depending on agreed method.
7. Autopro fee becomes owed after completion/payment confirmation.

This is the standard rule unless provider, country, admin, payment provider, or service type requires a different flow.

---

## 3. Examination and Diagnosis Fee Timing

For diagnosis or examination before a major repair, the standard direction is:

```txt
Client pays examination/diagnosis fee after the examination is completed.
---

# Confirmed Admin Money Dashboard and Financial Controls

This section records confirmed rules for the Autopro admin money dashboard, owner profit dashboard, financial controls, ledgers, balances, staff permissions, audit logs, reports, tax/accounting direction, fraud monitoring, payment provider monitoring, and role-based dashboard access.

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

## 1. Admin Money Dashboard Purpose

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

## 2. Owner and Admin Visibility

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

## 3. Supplier Import, Export, Demand, and Growth Intelligence

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

## 4. Dashboard Money Balances

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

## 5. Complete Transaction Ledger

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

## 6. Admin Filters and Search

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

## 7. Business Financial Profile View

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

## 8. Autopro Fee Automation

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

## 9. Manual Financial Adjustment Controls

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

## 10. Payout Approval Controls

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

## 11. Refund Approval Controls

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

## 12. Business Debt Dashboard

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

## 13. Cash Control Dashboard

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

## 14. Country and Currency Dashboard

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

## 15. Alerts and Risk Warnings

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

## 16. Staff Financial Task Assignment

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

## 17. Staff Performance for Financial Tasks

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

## 18. Audit Logs

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

## 19. Export and Download Reports

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

## 20. Tax and Accounting Direction

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

## 21. Payment Provider Monitoring

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

## 22. Fraud and Risk Dashboard

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

## 23. Owner Profit Dashboard

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

## 24. Dashboard Permissions

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

## 25. Dashboard Section Structure

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

## 26. Admin Money Dashboard Goal

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
