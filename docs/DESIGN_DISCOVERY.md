# Autopro Design Discovery

This file stores raw ideas, references, design inspiration, user flows, and business structure notes before they become final requirements.

This is part of the project continuity system. If the AI conversation is lost, this file helps explain what the website should become.

---

# Current Phase

The project is in the planning, explanation, and facade design phase.

No coding has started yet.

The owner will explain how the website should look, behave, and function for each user type.

---

# Main Platform Direction

Autopro is planned as:

```txt
Car parts e-commerce + supplier marketplace + compatibility engine
---

# Discovery Note 001: Core Platform Structure

## Date

Initial planning phase.

## Raw Direction From Owner

Autopro is not only a simple e-commerce website.

Autopro should become a full automotive platform that combines:

- E-commerce dropshipping for vehicle parts
- Automotive marketplace
- Vehicle-related services
- User profiles
- Supplier/business profiles
- Service provider profiles
- Staff/admin control
- Vehicle compatibility/search system
- Social-style content such as posts, pictures, and videos
- Monetization systems such as ads, packages, plans, commissions, and promoted listings

---

# Product and Service Scope

Autopro should support parts and services for many types of vehicles, including:

- Cars
- Vans
- Trucks
- Motorcycles/bikes
- Bicycles
- Trailers
- Other vehicle types later

Autopro may include:

- Vehicle parts
- Vehicle accessories
- Mechanics
- Diagnostic/scanner services
- Towing services
- Car wash services
- Mobile car wash services
- Car wrapping services
- Paint services
- Wheel services
- Inspection services
- Other vehicle-related services

---

# Platform Identity

Autopro should be a profile-based platform.

This means each user should have a private dashboard and possibly a public profile.

The platform should work partly like a social platform, where users and businesses can have:

- Profile picture
- Cover/background picture
- Public selected details
- Private account details
- Posts
- Pictures
- Videos
- Products
- Services
- Reviews
- Followers/following
- Messaging

---

# Main User Types

## 1. Admin / Owner

The admin should have full control over the platform.

Admin dashboard should include:

- Total users
- User breakdown by type
  - Clients/customers
  - Suppliers/businesses
  - Service providers
  - Staff
  - B2B/garage users
- Income tracking
  - Per minute
  - Per hour
  - Per day
  - Per week
  - Per month
- Spending tracking
- Profit tracking
- Ads management
- Subscription plans management
- Package management
- User plan management
- Supplier/service provider plan management
- Monetization recommendations
- Suggested plans to maximize income
- Platform analytics
- Product analytics
- Service analytics
- Search analytics
- Customer behavior analytics
- Supplier performance analytics
- Service provider performance analytics

The admin should be able to create strategies for:

- More income
- Better monetization
- Better customer retention
- Better supplier/service provider profits
- Better platform growth

---

## 2. Client / Customer

A client should be able to create a personal profile.

Client profile should include:

- Private personal details
- Public selected details
- Profile picture
- Garage section
- Saved vehicles
- Purchase history
- Service booking history
- Followed brands
- Followed suppliers
- Followed service providers
- Repeat purchases
- Recommendations based on their vehicles and behavior

The client should have a garage where they can add vehicles.

The garage should affect what the client sees on the homepage.

Example:

If a client saves a BMW 3 Series, the homepage should prioritize:

- Compatible BMW parts
- BMW services
- BMW specialists
- Related brands
- Maintenance products
- Deals related to that vehicle

Clients should be able to:

- Search for parts
- Search for services
- Search by vehicle
- Search by VIN
- Search by QR code of a specific part
- Search by part number
- Follow suppliers/brands/service providers
- Repeat purchases
- Track orders
- Track service appointments

---

## 3. Supplier / Seller / Brand / Distributor

A supplier account may represent:

- Supplier
- Reseller
- Wholesaler
- Brand
- Manufacturer
- Official distributor

A supplier should have a public business profile that may include:

- Logo/profile picture
- Cover/background picture
- Certifications
- Licenses
- Verification badges
- Business details
- Product categories
- Best products
- Product listings
- Posts
- Pictures
- Videos
- Customer messages
- Reviews
- Dashboard with performance data

Supplier dashboard should include:

- Product management
- Stock management
- Order management
- Pricing
- Sales analytics
- Customer messages
- Product performance
- Ads/promotions
- Plan/subscription status

---

## 4. Service Provider

A service provider may include:

- Mechanics
- Mechanic shops
- Diagnostic/scanner services
- Inspectors
- Car washes
- Mobile car wash services
- Car wrapping services
- Paint services
- Wheel services
- Towing services
- Other automotive services

A service provider should have a profile similar to a supplier, with extra service features:

- Services offered
- Booking calendar
- Appointment scheduling
- Location
- Mobile service option
- Service packages
- Price ranges
- Reviews
- Customer messages
- Portfolio pictures/videos
- Dashboard with bookings and performance data

---

## 5. Staff Members

Staff members may include:

- Developers
- Call center agents
- Accountants
- Managers
- Customer support
- Product approval team
- Supplier support
- Service provider support

Staff should have a shared internal platform with limited access based on their role.

Staff permissions should be carefully controlled.

Examples:

- Call center can help users with account problems
- Call center can help with plans or ads
- Accountants can access financial data
- Managers can access broader reports
- Developers can manage technical issues
- Product approval team can approve supplier products

Staff should have:

- Login
- Passwords
- Permission levels
- Limited data access
- Action history/audit logs
- Role-based dashboard

---

# Homepage Structure Idea

When a visitor opens the website, the homepage should include:

## Top section before registration

A section where the user can choose to be:

- Client/customer
- Supplier/business/service provider

This is mainly for first registration.

After account creation, this section should transform into a simple logged-in profile/account area.

## Main search/selector section

The homepage should include a dedicated vehicle/service/part selector.

Users should be able to look up a part, service, or anything vehicle-related based on:

- Vehicle type
- Brand/make
- Model
- Year
- Engine
- VIN number
- QR code of a specific part
- Part number
- OEM number
- Service type

## Marketplace/feed section

Under the selector, the homepage should show a market/feed area with:

- Structured ads
- Parts
- Hot deals
- Latest posts
- Services
- Pictures
- Videos
- Supplier/service provider content

Each item should show the owner/brand profile picture.

Clicking the profile picture should lead to the full public profile of that supplier, brand, or service provider.

The feed should eventually be personalized based on:

- Client saved vehicles
- User preferences
- Followed brands
- Followed suppliers
- Followed service providers
- Search history
- Purchase history
- Location
- Trending products/services
- Paid promotions/ads

---

# Supplier vs Service Provider Structure Question

The owner is considering whether suppliers and service providers should be separated or merged.

Important automotive industry reality:

Some mechanic shops and garages also sell parts, represent brands, or provide both products and services.

Creating separate pages for supplier and service provider may create problems for hybrid businesses.

## Recommended Direction

Use one flexible account type:

```txt
Business Account
