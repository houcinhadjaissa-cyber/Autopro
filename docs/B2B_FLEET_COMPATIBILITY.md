# B2B & Fleet Compatibility System

This file documents the rules, features, and workflows for B2B customers and Fleet management within the Compatibility Engine.

It covers how large businesses, garages, companies, and fleet operators can manage multiple vehicles, receive custom compatibility results, and benefit from specialized tools.
---

## 1. Account Structure & Types

### 1.1 Supported B2B Account Types
The system must support the following types of B2B accounts:

- Small independent garages
- Multi-branch mechanic shops and service centers (including paint shops, body shops, and spare parts stores)
- Large fleet companies (bus fleets, hospital fleets, taxi fleets, delivery fleets, logistics companies)
- Rental companies (cars, trucks, buses, vans, motorcycles, bicycles, trailers, and RVs)
- Dealerships and multi-branch dealerships (including those with integrated workshops and parts stores)
- Emergency and public service fleets (ambulances, fire departments, police)
- Construction and heavy equipment fleets
- Government and municipal fleets
- Educational institutions (school bus fleets, university vehicle fleets)
- Corporate and private company fleets

### 1.2 B2B Account Levels
The system must support different levels of B2B accounts based on the following criteria:

- Size of the business
- Total number of vehicles managed
- Volume of sales and repeat purchases
- Number of bookings and service history
- Private vs non-private / commercial status

Recommended account levels include:
- **Basic B2B**
- **Professional Fleet**
- **Enterprise Fleet**
- **Government / Public Sector**

Each level can have different features, pricing, and limits. The Admin must be able to adjust these levels flexibly.

### 1.3 Sub-Accounts & Branch Management
B2B accounts must be able to create multiple sub-accounts. This allows one main company to manage different branches, departments, or locations under a single main account while maintaining separate permissions and visibility where needed.

## 2. Vehicle Management

### 2.1 Adding & Managing Vehicles
Fleet customers must be able to add and manage vehicles using multiple methods:

- Adding vehicles one by one manually
- Uploading a list of vehicles using CSV or Excel files
- Connecting directly to their own vehicle management system through an approved API

Any API integration must first go through approval and testing by Autopro staff before activation.

### 2.2 Vehicle Profiles
Each vehicle in a fleet must have its own separate profile with full individual history. The system must **not** group all fleet vehicles under one shared history. Every vehicle is treated independently.

### 2.3 Vehicle Grouping
Fleet managers must be able to create flexible groups of vehicles (e.g., “Delivery Vans”, “Executive Cars”, “Heavy Trucks”, “Ambulances”). Grouping must be fully automated and customizable by the fleet account.

## 3. Compatibility & Ordering Features

### 3.1 B2B-Specific Compatibility Experience
The Compatibility Engine must behave differently for B2B and Fleet users by showing:

- Bulk pricing and volume discounts
- Installation options and service packages
- Delivery to multiple locations or warehouses
- Clear comparison between normal pricing per vehicle and fleet program savings

### 3.2 Standard Part Lists
Fleet customers must be able to create “Standard Part Lists” — pre-approved lists of parts that are compatible with specific vehicle groups (e.g., all Toyota Corollas in the fleet). These lists must be fully flexible and automated.

### 3.3 Order Approval Workflow
The system must allow fleet managers to approve or reject orders placed by their employees. This approval process must be simple, fully automated, and flexible according to the company’s internal structure.

## 4. Permissions & Access

### 4.1 Internal Permission Levels
B2B/Fleet accounts must support customizable permission levels such as:

- Fleet Manager
- Procurement Officer
- Mechanic / Technician
- Accountant
- Viewer / Read-only

The system must offer two options:
- Use Autopro’s standard permission templates
- Create fully custom roles based on the company’s own structure

Permissions must be fully flexible — the account owner can add, remove, or modify roles at any time.

### 4.2 Role-Based Information Visibility
Different employees within the same fleet company must see different information based on their role. For example:

- Mechanics see technical specifications and compatibility details
- Accountants see pricing, invoices, and payment history
- Managers see full overview and approval tools

This visibility must be fully automated and based on the roles the user defines.

### 4.3 Internal Staff Permissions System
Fleet accounts must have their own internal “Staff Permissions” system similar to Autopro’s main platform. This allows fleet companies to manage access and responsibilities for their own team members independently.
---

## 5. Pricing & Billing

### 5.1 Special Pricing Models
B2B and Fleet accounts must have access to special pricing models, including:

- Volume-based discounts
- Tiered pricing based on number of vehicles
- Fixed monthly or annual pricing
- Contract-based pricing

### 5.2 Custom Pricing Agreements
Fleet accounts must be able to negotiate and set custom prices with specific suppliers or service providers. However, any custom pricing agreement must be confirmed and accepted by both parties before it becomes active.

### 5.3 Payment Terms
The system must support different payment terms for B2B accounts, such as:

- Pay on delivery
- 15-day credit
- 30-day credit
- Monthly invoicing

These terms must only be activated after confirmation from both sides and after evaluating known risks.

## 6. Bulk Ordering & Procurement

### 6.1 Bulk Ordering Capabilities
Fleet customers must be able to:

- Create bulk orders for multiple vehicles at once
- Use their “Standard Part Lists” to generate automatic orders
- Set recurring orders (e.g., monthly oil change kits for all vehicles)

All bulk ordering features must be fully flexible and automated from day one.

### 6.2 Price Comparison
Fleet managers and authorized employees must be able to compare prices from multiple suppliers for the same bulk order before confirming the purchase.

### 6.3 Internal Budget Controls
Fleet accounts must be able to set internal budgets and spending limits per department, per vehicle group, or per employee. This feature is mandatory and must be fully flexible and automated.

## 7. Service Booking & Maintenance

### 7.1 Fleet Service Management Tools
Fleet accounts must have access to specialized tools for managing service bookings across many vehicles. This includes scheduling maintenance for dozens or hundreds of vehicles at different times. All tools must be fully flexible and automated.

### 7.2 Service Provider Assignment
Fleet managers must be able to assign specific service providers or mechanics to certain vehicles or groups. However, the assignment only becomes active after the service provider or mechanic confirms and accepts the assignment.

### 7.3 Maintenance Calendar
Fleet accounts must have access to a private **Maintenance Calendar** or **Service Planner** that is visible only to authorized users within the fleet account.

## 8. Reporting & Analytics

### 8.1 Fleet Reporting Tools
Fleet managers must be able to generate comprehensive reports, including:

- Cost per vehicle
- Parts usage and consumption
- Maintenance history
- Supplier performance
- Total spending per month, quarter, or year

The system must include the best proven report formats used by professional fleet companies. All reports must be:

- Highly informative
- Tax-friendly
- Legally compliant (automatically adjusted per country)
- Easy to read, send, and print

### 8.2 Report Export
Fleet accounts must be able to automatically export detailed reports for their own accounting, tax, and internal purposes.

### 8.3 Supplier & Service Provider Analytics
The system must provide performance analytics that allow fleet managers to compare different suppliers and service providers. This includes metrics such as pricing, delivery speed, quality, response time, and reliability. The analytics must follow the best proven methods used in the fleet management industry.

## 9. Contracts & Agreements

### 9.1 Contract Management
B2B and Fleet accounts must be able to create, manage, and store contracts directly on the platform with both Autopro and with suppliers/service providers.

### 9.2 Digital Signing
The system must support digital signing of agreements. This feature must be fully flexible, automated, and legally valid in each country where Autopro operates.

### 9.3 Contract Types
The system must support different types of contracts, including but not limited to:

- Annual supply agreements
- Maintenance service contracts
- Preferred supplier agreements
- Volume commitment contracts
- Service level agreements (SLA)
