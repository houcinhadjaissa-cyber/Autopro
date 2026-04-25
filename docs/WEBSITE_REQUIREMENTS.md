# Autopro Website Requirements

This file describes how the Autopro website should look, feel, and work.

The purpose of this file is to keep the full website idea saved so the project can continue even if the AI conversation is lost.

---

# 1. Project Vision

Autopro will be a professional e-commerce website for selling car parts online.

The website should help customers find the correct parts for their vehicle, buy them easily, and allow the business owner to manage products, inventory, orders, and customers.

---

# 2. Main Website Goals

The website should allow customers to:

- Search for car parts
- Browse product categories
- Search by vehicle make, model, year, engine, and trim
- Search by part number
- Check if a part fits their vehicle
- View product details
- Add products to cart
- Checkout
- Create an account
- View order history

The website should allow the admin/business owner to:

- Add products
- Edit products
- Delete products
- Manage stock/inventory
- Manage categories
- Manage brands
- Manage vehicle compatibility
- View orders
- Update order status
- Manage customers

---

# 3. Target Customers

Autopro customers may include:

- Regular car owners
- Mechanics
- Garages
- Auto parts resellers
- Fleet owners
- People searching for replacement parts by vehicle
- People searching for parts by part number

---

# 4. Storefront Look and Feel

The storefront should feel:

- Professional
- Clean
- Fast
- Trustworthy
- Easy to use on phone
- Easy to use on desktop
- Suitable for car parts and automotive products

Possible design style:

- Modern e-commerce style
- Dark/white/gray base colors
- Automotive accent colors such as red, blue, orange, or yellow
- Clear product cards
- Large search bar
- Strong vehicle search section

Final colors and branding are not decided yet.

---

# 5. Main Storefront Pages

## 5.1 Home Page

The home page should include:

- Header/navigation
- Logo
- Search bar
- Vehicle search box
- Hero banner
- Popular categories
- Featured products
- Best sellers
- New arrivals
- Trust badges
- Footer

Possible trust badges:

- Secure checkout
- Fast shipping
- Correct fitment support
- Quality parts
- Customer support

## 5.2 Product Catalog Page

The catalog page should show car parts with filters.

Filters may include:

- Category
- Brand
- Vehicle make
- Vehicle model
- Vehicle year
- Engine
- Price range
- Availability
- Rating
- Part type

Sorting may include:

- Newest
- Price low to high
- Price high to low
- Best sellers
- Recommended

## 5.3 Product Details Page

Each product page should include:

- Product name
- Product images
- Price
- Stock status
- Brand
- SKU
- Part number
- OEM number if available
- Compatible vehicles
- Description
- Specifications
- Shipping information
- Return information
- Add to cart button
- Quantity selector
- Related products

## 5.4 Search Results Page

Customers should be able to search by:

- Product name
- Part number
- OEM number
- Brand
- Vehicle
- Category

## 5.5 Vehicle Search Page

Customers should be able to select:

- Vehicle make
- Vehicle model
- Year
- Engine
- Trim if available

After selecting a vehicle, the website should show compatible parts.

## 5.6 Cart Page

The cart should include:

- Product image
- Product name
- Price
- Quantity
- Remove item button
- Subtotal
- Estimated shipping
- Total
- Checkout button

## 5.7 Checkout Page

Checkout should include:

- Customer contact information
- Shipping address
- Billing address
- Delivery method
- Payment method
- Order summary

## 5.8 Customer Account Pages

Customer account should include:

- Register
- Login
- My account
- Order history
- Saved addresses
- Wishlist if needed

---

# 6. Admin Dashboard Requirements

The admin dashboard should be private.

## 6.1 Admin Login

Admin should log in securely.

## 6.2 Admin Home Dashboard

Admin dashboard should show:

- Total sales
- New orders
- Pending orders
- Low stock products
- Recent customers
- Recent orders

## 6.3 Product Management

Admin should be able to add/edit products.

Product fields may include:

- Product name
- Description
- Category
- Brand
- Price
- Sale price
- Stock quantity
- SKU
- Part number
- OEM numbers
- Images
- Specifications
- Compatible vehicles
- Status: active/inactive

## 6.4 Category Management

Admin should manage categories such as:

- Engine parts
- Brake system
- Suspension
- Electrical
- Filters
- Tires
- Body parts
- Interior accessories
- Cooling system
- Transmission
- Lighting

## 6.5 Inventory Management

Inventory should include:

- Stock quantity
- Low stock warning
- Out of stock status
- Restock notes

## 6.6 Order Management

Admin should manage order statuses:

- Pending
- Paid
- Processing
- Shipped
- Delivered
- Cancelled
- Refunded

## 6.7 Customer Management

Admin should be able to view:

- Customer name
- Email
- Phone
- Addresses
- Orders
- Total spent

## 6.8 Vehicle Compatibility Management

Admin should be able to connect products to vehicles.

Vehicle information may include:

- Make
- Model
- Year
- Engine
- Trim
- Notes

---

# 7. Parts Matching Engine

Autopro should eventually include a parts matching engine.

The purpose is to help customers find parts that fit their vehicle.

## Matching methods

The system should support:

- Vehicle make/model/year matching
- Engine matching
- Trim matching
- Part number matching
- OEM number matching
- Brand cross-reference
- Aftermarket part matching
- TecDoc-style fitment data later

## Development approach

The matching engine should be built in stages.

### Stage 1: Mock matching data

Use sample vehicle and product data to build the first working prototype.

Example:

A customer selects:

```txt
Toyota Corolla 2015 1.8L
