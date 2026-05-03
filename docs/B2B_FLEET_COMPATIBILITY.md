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
---

## 10. Multi-Location & Branch Management

### 10.1 Multi-Branch Support
B2B and Fleet accounts must be able to manage multiple branches or locations under one main account. This feature must be fully flexible and automated, allowing companies to operate across different cities or regions seamlessly.

### 10.2 Branch Independence
Each branch must have the ability to maintain its own separate inventory, vehicle list, and permission settings. However, the main account must retain full visibility and control over all branches when needed.

### 10.3 Transfer Between Branches
The system must allow transferring vehicles and parts between different branches of the same fleet company. This process must be simple and fully tracked.

## 11. Integration with Suppliers & Service Providers

### 11.1 Direct Connection
Fleet accounts must be able to connect directly with their preferred suppliers and service providers through the platform. This allows direct ordering and booking without going through the public marketplace. However, the system must still provide live price comparison with other suppliers for transparency.

### 11.2 Preferred Supplier Network
Fleet companies must be able to create their own private **Preferred Supplier Network** — a custom list of trusted suppliers and mechanics. This feature is mandatory.

### 11.3 Priority Notifications
Fleet managers must receive special notifications and priority access when their preferred suppliers have stock availability or open slots. This helps reduce downtime and improve efficiency.

## 12. Performance Tracking & KPIs

### 12.1 Key Performance Indicators
The system must track comprehensive KPIs for fleet accounts, including:

- Average cost per vehicle per month
- Vehicle downtime
- Parts failure rate
- Supplier reliability score
- Maintenance frequency and cost
- Fuel efficiency (where applicable)

All KPIs must be fully flexible and automated.

### 12.2 Custom KPIs & Alerts
Fleet managers must be able to create their own custom KPIs and receive automatic alerts when targets are not met or when performance drops below defined thresholds.

### 12.3 Anonymous Benchmarking
The system must provide benchmarking tools that allow fleet companies to compare their performance against similar fleets anonymously. This feature is mandatory and must follow the best industry practices.

## 13. Risk Management & Insurance

### 13.1 Insurance Integration
The system must automatically support linking insurance information to vehicles and parts. This includes showing which parts or repairs are covered by insurance in case of damage. The feature must be fully flexible and automated.

### 13.2 Risk Analysis Tools
Fleet accounts must have access to automated risk analysis tools that can predict potential issues, such as which vehicles are likely to need expensive repairs soon. These tools must be fully flexible and automated.

### 13.3 Claims Management
The system must allow fleet companies to manage claims and incidents related to parts and services directly on the platform. This includes logging incidents, tracking claims status, and storing related documents.

## 14. Onboarding & Data Migration

### 14.1 Guided Onboarding
B2B and Fleet customers must have access to a guided onboarding process specifically designed for their needs. This includes step-by-step setup for adding vehicles, creating groups, setting permissions, and configuring workflows. All onboarding materials must be easy to read, share, and study.

### 14.2 Data Import
Fleet accounts must be able to import their existing data from other systems (vehicle lists, maintenance history, supplier data, etc.). The import process must be easy, flexible, and fully automated. The platform must be capable of reading and processing data from any other fleet management software.

### 14.3 Migration Support
The system must offer migration tools and support for companies switching from other fleet management software. This includes data mapping, validation, and assistance during the transition period.
---

## 15. Advanced Automation & AI

### 15.1 Smart Automation Features
The system must use automation and basic AI to assist fleet managers, including:

- Automatically suggesting when to replace parts based on usage data
- Predicting maintenance needs before they become urgent
- Automatically reordering frequently used parts when stock is low

Fleet managers must also be able to create custom reminders for any features they need.

### 15.2 Custom Automation Rules
Fleet accounts must be able to create custom automation rules. For example:
- “If any vehicle in Group A reaches 80,000 km, automatically create a maintenance booking.”

The system should also suggest to service providers to offer specific discounts for these types of repeat maintenance bookings.

### 15.3 Smart Alerts
The system must send smart, fully automated alerts to fleet managers. Examples include:
- “3 vehicles in your fleet are due for service this week”
- “Supplier X has delayed 4 orders this month”

Alerts must be fully flexible. Fleet owners must be able to:
- Select all vehicles or only specific vehicles
- Assign alerts to specific employees or groups of vehicles

## 16. Security & Data Privacy

### 16.1 Enhanced Security Features
B2B and Fleet accounts must have enhanced security features compared to normal users. This is mandatory and includes:

- IP address restrictions
- Advanced login logs
- Detailed activity monitoring

### 16.2 Data Sharing Control
Fleet companies must have full control over what data is shared with suppliers or service providers. This feature must be available since day one. Examples include hiding vehicle owner details or location when sending orders.

### 16.3 Activity Logs
The system must keep detailed activity logs of everything that happens inside the fleet account, including who did what and when.

## 17. Support & Dedicated Tools

### 17.1 Dedicated Support
Large fleet accounts must have access to dedicated support, such as a personal account manager or priority support line.

### 17.2 Private Fleet Dashboard
The system must offer a private dashboard or portal visible only to fleet companies. This dashboard must include advanced tools not available to normal users.

### 17.3 Training & Onboarding
The system must offer training and onboarding sessions specifically designed for fleet managers and their teams. This is mandatory.

## 18. Monetization & Revenue Models

### 18.1 B2B Pricing Models
B2B and Fleet accounts must have access to different monetization models, including:

- Subscription plans
- Pay-per-use
- Revenue sharing with suppliers
- Custom enterprise pricing

### 18.2 Exclusive Promotions
The system must allow Autopro to offer special promotions and exclusive deals only to fleet customers. This feature must be available since day one.

### 18.3 Loyalty & Volume Rewards
Fleet accounts must be able to earn rewards and discounts based on their purchase volume and loyalty.

## 19. Future Scalability & Integration

### 19.1 Integration with Autopro Systems
The B2B/Fleet system must be designed to easily integrate with other Autopro features, including:

- Payments system
- Vehicle History
- Admin Dashboard
- Compatibility Engine

### 19.2 External System Integration
Fleet accounts must be able to connect their own internal systems (ERP, accounting software, HR systems) through APIs.

### 19.3 Multi-Country Operations
The system must support multi-country fleet operations. A single fleet account must be able to manage vehicles across different countries (e.g., Algeria, Nigeria, Europe) while applying different rules and requirements per country.
