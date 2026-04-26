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
---

# 6. Hybrid Business

A hybrid business is a business account that sells vehicle-related products and also provides vehicle-related services.

This is important for the automotive industry because many businesses do both.

Examples:

- Mechanic shop that sells parts and provides repairs
- Tire shop that sells tires and provides tire fitting
- Car wash that sells cleaning products and provides washing/detailing
- Wrapping shop that sells wrapping materials and provides wrapping service
- Parts shop that also offers diagnostics or installation
- Garage that sells maintenance packages and provides service appointments

---

## Hybrid Business Profile

A hybrid business should have one public profile that combines both products and services.

The profile should show shared business details at the top, including:

- Business name
- Logo/profile picture
- Cover/background picture
- Certifications
- Verification badges
- Years of experience
- Location if shop-based
- Contact information
- Business description
- Ratings/reviews
- Follow button
- Message/contact button if allowed
- Active plan/badge if public
- Trust indicators

Under the shared top section, the profile should display everything the business offers.

---

## Profile Tabs

A hybrid business profile may include tabs such as:

- Overview
- Products
- Services
- Packages
- Deals
- Bookings
- Posts
- Videos
- Reviews
- Certifications
- About
- Location
- Contact

This allows the client to understand the full business offer from one profile.

---

## One-Stop Shop Advantage

Hybrid businesses should be presented as a one-stop shop for clients.

This is useful because a client may want to:

- Buy a part
- Book installation
- Buy a product bundle
- Book a maintenance service
- Contact one trusted business instead of many
- Repeat previous purchases and services

Example:

A client buying brake pads may also see:

```txt
This business also offers brake pad installation.
---

# 7. Staff Members

Staff members are internal users who help operate, support, manage, and grow the Autopro platform.

Staff accounts should be flexible and controlled by permissions.

Autopro should allow the platform owner to create staff roles, edit permissions, remove permissions, suspend staff access, and assign different access levels at any time.

---

## Main Staff Role Direction

The staff system should support fixed roles at the beginning, but it must be flexible enough to add new roles later.

Possible staff roles include:

- Developer
- Head of developers
- Manager
- Senior manager
- CEO
- CFO
- Full owner
- Account manager
- Accountant
- Communications/call center employee
- Head of communications
- Supplier support
- Service provider support
- Product approval team
- Certification/verification approval team
- Payments support
- Shipping/logistics support
- Customer support
- Trust and safety team
- Dispute resolution team
- Content moderation team
- Ads/promotions manager
- Marketplace operations manager

More roles can be added later.

---

## Full Owner Role

The full owner should have the highest control level.

The full owner should be able to:

- Access all platform data
- Manage all staff roles
- Create new roles
- Edit role permissions
- Remove role permissions
- Add staff members
- Suspend staff members
- Delete staff members if needed
- Control who can hire other staff
- Control who can approve products
- Control who can approve certifications
- Control who can access money/financial data
- Control who can block/suspend users
- Control who can manage suppliers
- Control who can manage service providers
- Control who can manage ads/plans/packages

Only the full owner should have complete unrestricted access.

---

## Flexible Role-Based Access Control

Autopro should use a flexible permission system.

This means each staff role can have specific permissions.

Examples of permissions:

- View users
- Edit users
- Suspend users
- Delete users
- View suppliers
- Approve suppliers
- Suspend suppliers
- View products
- Approve products
- Reject products
- Edit products
- View certifications
- Approve certifications
- Reject certifications
- View orders
- Manage orders
- View payments
- Manage refunds
- View shipping issues
- Manage shipping companies
- View analytics
- View financial reports
- Manage ads
- Manage subscription plans
- Hire staff
- Assign roles
- Manage customer support tickets
- Manage disputes

Permissions should be editable by the full owner.

---

## Hiring and Staff Creation Permissions

The full owner should be able to give limited hiring abilities to selected roles.

Possible roles that may receive hiring permissions:

- CEO
- CFO
- Senior managers
- Head of developers
- Managers
- Head of communications

Hiring permissions should be limited.

Example:

A head of developers may be allowed to hire:

- Developers
- Junior developers
- Technical support staff

But they should not automatically be allowed to hire:

- CFO
- CEO
- Full owner
- Financial managers

Another example:

A head of communications may be allowed to hire:

- Call center employees
- Messaging support employees
- Customer support agents

The full owner should decide exactly what each role can hire and what access new staff receive.

---

## Call Center / Messaging Center

At the beginning, Autopro may not have a call center.

In the first stage:

- Suppliers deal directly with their clients.
- Service providers deal directly with their clients.
- Autopro support may be limited.

Later, Autopro should support a full call/messaging center.

The system should leave room for:

- Head of communications
- Call center managers
- Call center employees
- Messaging support employees
- Customer support agents
- Supplier support agents
- Service provider support agents
- Dispute support agents

Call center staff may help with:

- Account problems
- Order problems
- Service booking problems
- Supplier communication issues
- Service provider communication issues
- Plan/subscription problems
- Ads/promotions support
- General customer support

Call center access must be limited based on role.

---

## Accountants and Finance Roles

Autopro should support accounting and finance roles.

Possible finance roles include:

- CFO
- Account manager
- Accountant
- Payments support
- Refund manager
- Payout manager

Finance staff may need access to:

- Sales data
- Platform income
- Supplier payouts
- Service provider payouts
- Shipping costs
- Refunds
- Commissions
- Subscription payments
- Ads payments
- Financial reports

Financial access must be carefully controlled.

Not every accountant should automatically see all private business data.

The full owner should be able to add or remove finance permissions at any time.

---

## Managers and Senior Managers

Autopro should support management roles.

Possible manager roles:

- General manager
- Senior manager
- Marketplace manager
- Supplier manager
- Service provider manager
- Operations manager
- Customer support manager
- Product approval manager
- Shipping/logistics manager
- Ads manager
- Regional manager later

Managers should only access the areas related to their job.

Example:

A supplier manager may access supplier accounts, supplier approvals, and supplier violations, but not full financial owner data unless allowed.

---

## Product Approval Team

Autopro should support product approval roles.

Product approval staff may:

- Review new products
- Approve products
- Reject products
- Request corrections
- Check product images
- Check product descriptions
- Check part numbers
- Check OEM numbers
- Check catalog quality
- Check category placement
- Check if product data is suitable for compatibility matching

Product approval is important for keeping the marketplace clean and trustworthy.

---

## Certification and Verification Approval

Autopro should support certification and verification approval.

Verification staff may review:

- Business licenses
- Official distributor documents
- Brand certificates
- Manufacturer certificates
- Service provider licenses
- Mechanic certifications
- Insurance documents if relevant
- Other trust documents

When a certification is approved, it should automatically appear on the business profile as a badge/logo near the profile picture or in the certification section.

Approved certification badges help customers trust suppliers and service providers.

---

## Supplier Support

Supplier support staff may help suppliers with:

- Account setup
- Profile completion
- Product upload
- Bulk catalog upload
- Product approval
- Certifications
- Inventory problems
- Payments
- Shipping problems
- Ads/promotions
- Subscription plans
- Violations
- Suspensions
- Return-to-business process after suspension

Supplier support may also help manage supplier quality.

---

## Service Provider Support

Service provider support staff may help service providers with:

- Account setup
- Profile completion
- Service listings
- Booking calendar
- Pricing/add-ons
- Appointment problems
- Certifications
- Reviews/disputes
- Payments
- Ads/promotions
- Subscription plans
- Violations
- Suspensions
- Return-to-business process after suspension

---

## Violations, Suspensions, and Return-To-Business

Autopro should have a system for violations and suspensions.

Suppliers or service providers may be warned, suspended, or blocked for:

- Multiple violations
- Fake products
- Fake certifications
- Fraud
- Repeated order failures
- Repeated service failures
- Poor customer behavior
- Breach of contract
- Payment issues
- Shipping abuse
- Marketplace rule violations

Staff with permission may be able to:

- Issue warnings
- Suspend accounts
- Block accounts
- Delete accounts if allowed
- Review appeals
- Restore accounts
- Require new documents before return
- Add notes to the account

Return-to-business should be controlled and documented.

---

## Audit Logs and Action History

Every important staff action should be recorded.

Audit logs should track:

- Staff member name
- Role
- Action performed
- Date/time
- Affected user/business/product/order
- Reason if provided
- Old value and new value if applicable

Examples:

- Product approved
- Certification approved
- Supplier suspended
- User refunded
- Staff permission changed
- Shipping company added
- Plan changed

Audit logs protect the platform and help prevent abuse.

---

## Suggested Additional Staff Roles

Based on marketplace and e-commerce best practices, Autopro may later add:

### Trust and Safety Team

Handles fraud, violations, fake products, fake reviews, and dangerous sellers/services.

### Dispute Resolution Team

Handles problems between clients, suppliers, service providers, and shipping companies.

### Content Moderation Team

Reviews posts, pictures, videos, comments, reviews, and public profile content.

### Ads and Promotions Manager

Manages sponsored listings, paid ads, featured products, featured services, and campaigns.

### Data/Analytics Manager

Studies platform performance, user behavior, searches, sales, profit, and supplier/service provider performance.

### Shipping/Logistics Support

Handles shipping companies, delivery issues, country coverage, and shipment complaints.

### Regional Managers

If Autopro expands to multiple countries, regional managers can manage specific markets.

---

## Staff Dashboard

Staff dashboards should be role-based.

Each staff member should only see tools related to their job.

Possible dashboard sections:

- Assigned tasks
- Support tickets
- Pending approvals
- Supplier issues
- Service provider issues
- User issues
- Product approvals
- Certification approvals
- Financial reports if allowed
- Shipping issues if allowed
- Staff management if allowed
- Analytics if allowed
- Audit logs if allowed

---

## Staff System Goal

The goal of the staff system is to allow Autopro to grow from a small platform into a full company structure.

The staff system should be:

- Flexible
- Secure
- Permission-based
- Owner-controlled
- Expandable
- Audited
- Safe for financial and private data

The platform should start simple but be designed so new staff roles and permissions can be added later.
