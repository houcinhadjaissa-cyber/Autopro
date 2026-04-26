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
