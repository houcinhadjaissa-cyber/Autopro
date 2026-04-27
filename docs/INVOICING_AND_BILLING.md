# Autopro Invoicing and Billing

This file will define the invoicing and billing system.

Topics to detail:

- Customer invoices
- Supplier invoices
- Service provider invoices
- Hybrid business invoices
- B2B invoices
- Bulk deal invoices
- Service appointment bills
- Platform fees
- Commissions
- Payment records
- Receipts
- Refunds
- Payouts
- Tax/VAT support later
- Billing history
---

# 1. Product Purchase Billing

Product purchase billing defines what happens when a client buys one or more products through Autopro.

The billing system must protect:

- The client
- The supplier
- Autopro
- Shipping partners
- Future tax/accounting records

It must be digital, detailed, legally usable where possible, and saved permanently in the correct dashboards.

---

## Product Invoice Details

When a client buys a product, the invoice/bill should show a structured breakdown.

The invoice should include:

- Product name
- Product image if needed
- Product price
- Quantity
- Supplier name
- Supplier profile link
- Shipping price
- Shipping company if selected
- Autopro platform fee
- Discount if used
- Discount code if generated
- Total price
- Payment method
- Payment status
- Delivery estimate
- Order status
- Customer information
- Delivery information
- Legal invoice details
- QR code
- Invoice number
- Order number
- Date/time

---

## Digital Invoice Storage

Invoices should be digital.

After every purchase, the invoice should be saved in:

- Client dashboard
- Supplier dashboard
- Order details page
- Conversation/messaging thread between client and supplier if applicable

This allows both sides to return later and see the last confirmed details.

The invoice should be printable manually by the client or supplier.

---

## Repeat Purchase Discount Code

The invoice can include a discount code for the client’s next purchase.

The discount code may be linked to:

- Same supplier
- Same brand
- Same product category
- Same service provider if service-related
- Repeat purchase
- VIP/loyal customer status

The discount code can be automatically suggested or applied on the next repeat purchase when allowed.

Example:

```txt
Use code NEXT10 for your next order from this supplier.
---

# 2. Service Booking Billing

Service booking billing defines how invoices, bills, estimates, payments, confirmations, and service records work for service providers.

This applies to:

- Mechanics
- Mobile mechanics
- Diagnostic/scanner services
- Software update services
- Car washes
- Mobile car washes
- Tire services
- Car wrapping
- Paint/body shops
- Detailing services
- Other vehicle-related services

Autopro must support both fixed-price services and inspection-based services.

---

## Fixed-Price Services

Some services have fixed prices.

Examples:

- Car wash
- Basic scanner/diagnostic check
- Tire change
- Wax add-on
- Detailing package
- Basic software check
- Mobile wash package

The fixed price must depend on vehicle type when needed.

Example:

```txt
Bike wash price is not the same as car wash.
Car wash price is not the same as van wash.
Van wash price is not the same as truck wash.
---

# Update: Part Arrival Tracking for Service Billing

Autopro must track the arrival date and time of parts ordered for a service.

When parts are ordered for a client vehicle, the part arrival information must be added to:

- Autopro owner/admin database
- Client dashboard
- Vehicle ID/history system
- Service provider dashboard
- Final service invoice
- Final service report

If the parts are ordered through Autopro, the system must automatically connect the part order to:

- Client
- Vehicle ID
- Service provider
- Service appointment
- Supplier
- Product ID
- Product invoice
- Service invoice
- Vehicle history record

When the part arrives, the system must record:

- Part arrival date
- Part arrival time
- Who received the part
- Where the part was received
- Supplier name
- Shipping company if used
- Product condition
- Quantity received
- Whether the part was checked
- Whether the part was accepted or rejected
- Notes if there is a problem

If the part is ordered from Autopro, the receiving and checking step must be automatically added to the service workflow once the part is received.

Example workflow:

```txt
Part ordered through Autopro
Part shipped
Part arrived
Part received
Part checked
Part accepted
Part installed
Vehicle history updated
Final invoice updated
---

# 3. Platform Fees and Commissions

This section defines how Autopro earns from product sales, services, shipping, B2B deals, bulk orders, and platform activity.

Autopro fees and commissions must be automated from day one.

The system must protect:

- Autopro profit
- Client experience
- Supplier profit
- Service provider profit
- Shipping company repeat usage
- Platform trust and fairness

---

## Main Fee Rule

The standard rule is:

```txt
Supplier/service provider pays Autopro fees.
Client does not see Autopro fee separately.
Client sees the final combined product/service price.
---

# 4. Cancellation, Responsibility, Fee Transfer, and Dispute Rules

Autopro must define exact rules for cancellations, no-shows, service disputes, damaged parts, wrong parts, shipping delays, rescheduling, and emergency cases.

These rules are required to protect:

- Autopro
- Clients
- Suppliers
- Service providers
- Shipping companies
- Future legal/accounting records

All important events must be tracked with timestamps, confirmations, messages, invoices, receipts, order status, service status, shipping status, and proof files.

---

## Client No-Show

If the client does not show up for a service appointment, Autopro fee is cancelled.

The service provider can still record the no-show in the client/service history if platform rules allow it.

Repeated client no-shows can affect the client’s trust score, VIP status, booking privileges, and service provider willingness to accept future bookings.

---

## Provider No-Show

If the service provider does not show up for the appointment, Autopro fee is cancelled.

The client can report the provider.

Repeated provider no-shows can affect:

- Provider ranking
- Provider reach
- Provider trust score
- Plan privileges
- Booking availability
- Suspension risk

---

## Client Cancels Too Late

If the client cancels too late before the service is completed, Autopro fee is cancelled.

The cancellation must still be recorded.

The service provider can define late-cancellation rules in their service policy, but Autopro fee is cancelled unless another confirmed platform rule applies.

Repeated late cancellations can affect the client’s trust score and booking privileges.

---

## Provider Cancels Too Late

If the service provider cancels too late, Autopro fee must be paid by the service provider.

This rule protects the platform and the client from providers wasting time after receiving bookings.

Late provider cancellation must be recorded and can affect:

- Provider ranking
- Provider reach
- Trust score
- Plan privileges
- Future booking visibility

---

## Client Refuses Cash Payment After Service

If the booking agreement says the client will pay cash and the client refuses to pay after the service is completed, the responsibility transfers to the client.

This rule must be written clearly in the first booking agreement before confirmation.

Autopro must track:

- Service agreement
- Payment method selected
- Client confirmation
- Provider confirmation
- Service completion proof
- Messages
- Photos/videos if available
- Final invoice
- Refusal report

If proof shows the client refused cash payment after confirmed service completion, the unpaid amount and related fee responsibility can be transferred to the client.

This protects service providers from dishonest clients.

---

## Provider Claims Service Completed But Client Disagrees

If the provider claims the service was completed but the client disagrees, Autopro must use proof and recorded data to decide responsibility.

Autopro must check:

- Appointment confirmation
- Service status updates
- Client messages
- Provider messages
- Photos/videos
- Location/time if available
- Payment confirmation
- Invoice
- Receipt
- Vehicle history update
- Provider proof
- Client proof

If the client already paid and the provider did not deny receiving payment, or the provider confirmed receiving payment, Autopro fee must be paid by the provider.

If the provider proves they were not paid, the case must enter dispute review.

Autopro must register everything to protect both sides.

---

## Shipping Delay Causes Cancellation

Shipping time must be agreed before purchase.

Example:

```txt
Estimated delivery: 7 to 15 business days
