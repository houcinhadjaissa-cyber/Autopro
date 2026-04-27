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
