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
