# Autopro User Roles and Flows

This file defines the different user types on the Autopro platform and explains what each user can see, do, and access.

Autopro is planned as:

```txt
Automotive social-commerce marketplace
+ dropshipping vehicle parts
+ services marketplace
+ customer/business profiles
+ compatibility engine
+ admin monetization system
---

# 2. Client / Customer

A client/customer is a verified user who can buy products, book services, save vehicles, follow profiles, and use personalized platform features.

A client account should be verified by:

- Email verification
- Phone number verification
- Or both, depending on platform rules

---

## What Clients Can Do After Creating an Account

After creating and verifying an account, clients can:

- Add vehicles to their personal garage
- Browse compatible parts for their vehicles
- Search for products
- Search for services
- Add products to cart
- Save products
- Buy products
- Book services
- Contact suppliers
- Contact service providers
- Follow suppliers, brands, and service providers
- Track orders
- Track service bookings
- Access customer support
- Post pictures, experiences, and reviews
- Tag products, brands, suppliers, and services
- Repeat previous purchases easily

---

## Client Profile

A client profile should include:

- Profile picture
- Background/cover picture
- Public selected details
- Private personal details
- Garage section
- Posts
- Pictures
- Videos
- Tagged products
- Tagged brands
- Tagged services
- Followed suppliers
- Followed service providers
- Followed brands

Clients should be able to choose what parts of their profile are:

- Private
- Visible to followers/friends
- Public

---

## Client Garage

Each client should have a personal garage.

The garage allows the client to add their vehicles using a selector similar to the homepage vehicle selector.

Vehicle selection may include:

- Vehicle type
- Brand/make
- Model
- Year
- Engine
- Trim if available
- VIN if available

The free/default garage limit should start with:

```txt
5 vehicles
---

# 3. Business Account

A business account is the main account type for any company, shop, brand, supplier, reseller, wholesaler, dropshipping seller, e-commerce seller, service provider, or hybrid automotive business.

Businesses should first register as a general business account.

After that, they can choose what modules they want to activate:

- Supplier/seller module
- Service provider module
- Both supplier and service provider modules

This structure allows one business to sell products, provide services, or do both under one profile.

---

## Business Profile Completion

Each business should have a profile similar to major platforms and social networks.

The business profile should include a profile completion area where the business is encouraged to add full information.

A more complete profile should make the business:

- More trusted
- More professional
- More visible to customers
- More likely to appear in search and recommendations
- More accessible to the platform algorithm

Profile completion can later be used as part of the ranking system.

Example:

```txt
Business Profile Completion: 85%
---

# 4. Supplier / Seller

A supplier/seller is a business account that sells vehicle-related products through Autopro.

A supplier may be:

- Manufacturer
- Brand
- Official distributor
- Wholesaler
- Reseller
- Dropshipping seller
- E-commerce seller
- Physical parts shop
- Hybrid business that sells products and provides services

---

## Product Scope

Suppliers can sell vehicle-related products.

Product scope may include:

- Car parts
- Van parts
- Truck parts
- Motorcycle/bike parts
- Bicycle parts
- Trailer parts
- Accessories
- Maintenance items
- Tools
- Other vehicle-related products added later

Products should eventually connect to vehicle compatibility data.

Compatibility data may come from:

- Internal Autopro database
- TecDoc-style data
- Supplier catalogs
- Manufacturer part numbers
- OEM numbers
- Barcodes/GTIN
- Other licensed vehicle/product databases later

Important note:

Autopro should be designed for TecDoc-style matching, but real TecDoc data may require official licensed access.

---

## Product Matching Direction

Supplier products should be matched to detailed vehicle/part data when possible.

Matching identifiers may include:

- Manufacturer part number
- OEM number
- Barcode/GTIN
- SKU
- Brand
- Product category
- Vehicle make/model/year
- Engine
- Trim
- Compatibility rules

The goal is to allow customers to find the exact matching part for their vehicle and compare suppliers offering that part.

---

## Product Adding Methods

Suppliers should be able to add products in multiple ways.

### 1. Manual product entry

The supplier can add products one by one.

Manual product fields may include:

- Product name
- Product category
- Brand
- Manufacturer part number
- OEM numbers
- SKU
- Barcode/GTIN
- Quantity
- Price
- Sale price
- Product images
- Description
- Specifications
- Compatible vehicles if known
- Shipping details
- Stock status

### 2. Bulk catalog upload

Suppliers should be able to upload product catalogs using formats such as:

- CSV
- XML
- Excel

Bulk upload should support:

- Field mapping
- Product identifiers
- Manufacturer part numbers
- OEM numbers
- Barcodes/GTIN
- Prices
- Stock quantities
- Categories
- Brand names
- Update frequency
- Automated imports later

This is critical for TecDoc-style matching and supplier catalog synchronization.

### 3. Future product import methods

Later, Autopro may support:

- Supplier API connection
- ERP/inventory system integration
- Marketplace feed imports
- Automated stock and price sync

---

## Inventory / Stock Management

Suppliers should have two main stock management options.

### Option A: Supplier-managed stock

The supplier manually manages their stock.

When a product sells through Autopro, Autopro automatically reduces the stock quantity inside the platform.

Example:

```txt
Before sale: 10 pieces
Customer buys: 1 piece
After sale: 9 pieces
---

# 5. Service Provider

A service provider is a business account that offers vehicle-related services through Autopro.

A service provider may be:

- Mobile mechanic
- Mechanic shop
- Diagnostic/scanner service
- Software update service
- Mobile car wash
- Full shop car wash
- Car wrapping shop
- Paint/body shop
- Mobile tire repair service
- Full shop tire repair service
- Towing service
- Vehicle inspection service
- Other vehicle-related service provider

Service providers may operate from a physical shop, as a mobile service, or both.

---

## Service Categories

Autopro should allow service providers to choose one or multiple service categories.

Possible service categories include:

### Mechanics

- Mobile mechanic
- Shop mechanic
- Engine repair
- Brake repair
- Suspension repair
- Electrical repair
- Oil change
- Maintenance service
- Emergency repair
- Other mechanic specializations

### Diagnostic / Scanner / Software

- Vehicle scanner/diagnostics
- Fault code reading
- ECU software update
- Key programming if applicable
- Sensor calibration
- Electrical diagnostics
- Other diagnostic specializations

### Car Wash / Detailing

- Mobile car wash
- Full shop car wash
- Exterior wash
- Interior cleaning
- Wax coating
- Polishing
- Deep cleaning
- Detailing packages
- Other cleaning services

### Wrapping / Paint / Body

- Full car wrapping
- Partial wrapping
- Paint services
- Body panel painting
- Paint correction
- Body part repair
- Custom styling
- Some shops may paint/wrap a specific part and ship it to the client

### Tires / Wheels

- Mobile tire repair
- Shop tire repair
- Tire changing
- Wheel balancing
- Wheel alignment
- Rim repair
- Emergency tire service

### Other Services

More service categories can be added later.

---

## Service Listings

A service provider should be able to create service listings.

Each service listing may include:

- Service name
- Service category
- Description
- Price or price range
- Fixed price if available
- Add-on services
- Estimated duration
- Mobile availability
- Shop availability
- Required vehicle type
- Required vehicle details if needed
- Pictures/videos
- Terms and conditions
- Cancellation rules

---

## Fixed Pricing and Variable Pricing

Service pricing can work in different ways.

### Fixed price services

Some services can have fixed prices.

Examples:

- Basic car wash
- Standard scanner check
- Tire change
- Wax add-on
- Interior cleaning package

The service provider can set non-negotiable fixed prices.

### Add-on pricing

Clients can add extra services.

Example:

```txt
Body wash: $10
Wax cover: +$5
Interior cleaning: +$8
Total: $23
