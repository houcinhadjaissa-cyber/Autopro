# Autopro Reusable Platform Core and ID System

This file defines the reusable platform core, shared ID system, database direction, cross-project account linking, vehicle ID structure, live update direction, privacy rules, and future project reuse rules for Autopro and future owner platforms.

Autopro must be built as the first project using a reusable platform backbone that can later support other owner projects.

No coding has started yet.

---

# 1. Main Purpose

Autopro must be built with a reusable platform core from day one.

The first launch can focus on Autopro, but the structure must not be limited to only Autopro.

The reusable core must help the owner build future platforms faster without starting from zero.

Future platforms can include:

- Car-selling platform
- Shipping/logistics platform
- Service marketplace
- General marketplace
- Influencer/media marketplace
- Automotive business tools
- Medical products marketplace where legal
- School-related platforms where legal
- Food/grocery marketplace
- Other owner projects

The reusable core must support the shared logic that many platforms need.

Shared logic can include:

- Accounts
- Global IDs
- Client IDs
- Business IDs
- Staff/employee IDs
- Profiles
- Dashboards
- Permissions
- Notifications
- Messages
- Payments
- Wallet/credit direction
- Audit logs
- Documents
- Media/files
- Privacy rules
- Project connections
- Admin controls

Autopro-specific features must plug into the reusable core.

Autopro-specific features include:

- Vehicle parts marketplace
- Vehicle compatibility
- Client garage
- Vehicle ID and history
- Supplier product catalog
- Service booking
- Towing and recovery
- Part replacement history
- Automotive social commerce

Future platform-specific features must also be able to plug into the same core.

Example:

```txt
A future car-selling platform can reuse the same global user ID and vehicle ID system, but it can have its own car listing, sale, valuation, and transfer modules.
```

---

# 2. Reusable Core Versus Project Modules

The reusable core must be separated from Autopro-specific modules.

Reusable core means the shared foundation.

Project modules mean features that belong to one project or industry.

Reusable core examples:

- Global user account
- Login/security
- Global user ID
- Client ID
- Business ID
- Staff ID
- Role and permission system
- Profile system
- Dashboard structure
- Notification system
- Message system
- Payment record structure
- Audit log system
- File/document system
- Project connection system
- Privacy and consent system
- Admin module system

Autopro module examples:

- Vehicle garage
- Vehicle compatibility
- Car parts catalog
- Supplier product data
- Service booking
- Vehicle ID/history
- Part replacement history
- Shipping for car parts
- Automotive business profiles

Future car-selling module examples:

- Vehicle listing
- Vehicle sale status
- Vehicle ownership transfer
- Dealer inventory
- Vehicle valuation
- Sale history
- Buyer/seller negotiation
- Vehicle inspection before sale

Future grocery module examples:

- Grocery preferences
- Grocery product categories
- Repeat grocery purchases
- Food delivery options

Future medical marketplace module examples:

- Medical product categories
- Legal restrictions
- Prescription or approval rules where required
- Country-specific medical compliance

The reusable core must not force automotive data into non-automotive platforms.

Example:

```txt
A user's vehicle data must not appear inside a school platform unless that platform has a legal and useful reason to access it.
```

---

# 3. Copyable Backbone Direction

The reusable core must be documented clearly so the owner, future AI conversations, and future developers can understand it.

The owner must be able to copy the documented structure for future projects.

Developers must be able to build future projects using the structure without guessing.

The reusable backbone must be:

- Easy to read
- Easy to reuse
- Flexible
- Modular
- Secure
- Automated where possible
- Clear about what is shared
- Clear about what stays project-specific
- Clear about privacy and legal limits
- Clear about IDs and relationships

The owner should be able to create a future project by choosing reusable modules.

Example:

```txt
New Project: Car Selling Platform

Use shared modules:
- Users
- Vehicle IDs
- Businesses
- Staff permissions
- Messages
- Payments
- Documents
- Audit logs

Add project-specific modules:
- Car listings
- Dealer inventory
- Vehicle sale transfer
- Vehicle valuation
```

---

# 4. Global ID Structure

Every important object in the system must have a permanent unique ID.

IDs must be structured, readable, searchable, and safe.

IDs should identify what type of record they belong to.

Example prefixes:

```txt
USR = Global User
CLI = Client
BUS = Business
STF = Staff/Employee
VEH = Vehicle
PRD = Product
SVC = Service
ORD = Order
BKG = Booking
PAY = Payment
INV = Invoice
REF = Refund
RET = Return
DSP = Dispute
SHP = Shipping
PKG = Package
WRH = Warehouse
PDK = Partner Desk
BRN = Branch
DOC = Document
MED = Media/File
REV = Review
PST = Post
NTF = Notification
AUD = Audit Log
```

IDs can include project and country information where useful.

Example:

```txt
AUTOPRO-DZA-VEH-000000001
AUTOPRO-DZA-BUS-000000001
CARSALES-DZA-VEH-000000001
```

The system must support both public IDs and private internal IDs.

Public IDs are safe to show to users.

Private internal IDs are hidden from normal users and used inside the database.

Example:

```txt
Client sees: ORD-2026-000582
Database uses: private internal record ID
```

Public IDs must not expose private data.

Internal IDs must stay hidden from normal users.

IDs must be searchable in admin dashboards.

Admin dashboards should support filters and rankings by ID type, project, country, status, risk, date, owner, and related records.

---

# 5. IDs Required From Day One

Autopro must plan the following IDs from day one:

- Global User ID
- Client ID
- Business ID
- Staff/Employee ID
- Vehicle ID
- Product ID
- Service ID
- Order ID
- Booking ID
- Payment ID
- Invoice ID
- Refund ID
- Return ID
- Dispute ID
- Shipping ID
- Package ID
- Warehouse ID
- Partner Desk ID
- Branch ID
- Document ID
- Media/File ID
- Review ID
- Post ID
- Notification ID
- Audit Log ID
- Project ID

Main structural IDs must be permanent and never reused.

Main structural IDs include:

- Global User ID
- Client ID
- Business ID
- Staff ID
- Vehicle ID
- Product ID where needed
- Service ID where needed
- Project ID

Temporary or case-based IDs can have retention rules.

Case-based IDs include:

- Package ID
- Return ID
- Refund ID
- Dispute ID
- Notification ID
- Temporary event ID

Case-based records must not be deleted too early if they are needed for:

- Legal records
- Accounting
- Tax
- Fraud protection
- Audit logs
- Trust/risk scoring
- Disputes
- Warranty
- Payment provider records
- Country law

Unnecessary temporary data can expire, archive, or be summarized to reduce database size and hosting costs.

Important behavior summaries can remain permanent even if detailed temporary records expire.

Example:

```txt
A detailed old return case can be archived after the legal retention period.

But the client trust summary can keep a safe signal such as:
- Low return abuse
- Repeated confirmed fraud
- VIP trusted buyer
```

The system must keep useful long-term signals without storing unnecessary heavy data forever.

---

# 6. Project ID

Every owner project must have a Project ID.

Examples:

```txt
AUTOPRO
CARSALES
SHIPPINGCORE
SERVICECORE
GROCERYCORE
MEDICALCORE
```

Every record should know:

- Which project created it
- Which project owns it
- Which projects can use it
- Which projects can only view it
- Which projects cannot access it
- Which project-specific module created it
- Which shared core module it belongs to

This allows one reusable core while keeping each project clean and separated.

Example:

```txt
A vehicle ID is created in AUTOPRO.

Later, CARSALES can use the same vehicle ID if the user links the account and the rules allow it.

A grocery platform should not access the vehicle details unless there is a clear allowed reason.
```

---

# 7. Global User ID

One person should have one Global User ID across all owner platforms where possible.

The Global User ID is the master identity record.

A person can have multiple login methods under one Global User ID.

Examples:

- Email
- Phone number
- Username
- Social login later
- Passkey later
- Device login later

A person can have different platform accounts but still be linked to one Global User ID.

The system should prevent duplicate accounts where possible.

Duplicate prevention can use safe signals such as:

- Verified phone
- Verified email
- Device signals where legal
- Payment method signals where legal
- Identity document where required
- Matching user details
- Fraud/risk patterns

The system must protect against fraud, fake accounts, bot accounts, and mining/abuse machines.

Users can merge duplicate accounts after proof.

Account merging must require:

- Verification
- Proof
- Security review if risky
- Audit log
- User confirmation
- Admin review for sensitive accounts

A user can use the same login across future owner platforms if they choose.

The experience should be simple, similar in convenience to large account ecosystems such as Google-style or WeChat-style login, while respecting privacy and country laws.

---

# 8. Client ID

Client ID must connect to Global User ID.

A Global User ID can feed useful information into the Client ID.

Client ID can connect to:

- Autopro client profile
- Vehicle garage
- Orders
- Bookings
- Reviews
- Wallet/credit direction
- Favorite products
- Favorite services
- Favorite suppliers
- Favorite garages
- Future car-selling platform
- Future owner marketplaces where allowed

Client ID must support multiple project-specific client profiles.

Example:

```txt
Global User ID: USR-00001

Autopro Client ID: CLI-AUTOPRO-00001
Future Car Sales Client ID: CLI-CARSALES-00001
Future Grocery Client ID: CLI-GROCERY-00001
```

The Global User ID connects them, but each platform only uses what it needs.

A grocery project should not automatically use vehicle data.

A car-selling project can use vehicle data if the client agrees or platform rules and law allow it.

Client private data must stay private unless the client gives permission, platform rules allow it, or law requires access.

Sensitive data must have strict access rules.

Sensitive data can include:

- Wallet
- Payment methods
- Identity documents
- Private address
- Phone number
- Vehicle plate number
- Private notes
- Support conversations
- Disputes
- Legal documents

---

# 9. Multiple Roles Under One Global User ID

A person can have multiple roles under one Global User ID.

Examples:

- Client
- Supplier owner
- Garage employee
- Independent service provider
- Influencer
- Shipping employee
- Fleet manager
- Collector/museum owner
- Admin staff

Each role must have its own profile or dashboard where needed.

Each role must remain linked to the same Global User ID internally.

Role access must be separated by permissions.

Example:

```txt
A user can be a client and also work for a garage.

The user should not see garage staff tools while using the client dashboard.

The user should choose which dashboard context they are using after login.
```

A user can create separate public profiles for different roles only if the platform allows it.

Autopro’s current direction is that role-based public profiles should be controlled and not automatically allowed for every user.

---

# 10. Cross-Platform Account Linking

Users should be able to link accounts from different owner platforms later.

Account linking should be simple and automated where possible.

Account linking should require confirmation.

For sensitive data, account linking must require stronger proof or consent.

Account linking rules must support:

- Same owner platforms
- Future platforms using the shared core
- Optional external partner platforms if approved by the owner
- User consent where required
- Country law
- Audit logs
- Security alerts for risky linking

The same client ID or linked client identity can be usable in a future car-selling platform if the client agrees or platform rules allow it.

Users should be able to see which owner projects are connected to their shared account.

Example:

```txt
Connected projects:
- Autopro
- Future car-selling platform
- Future shipping platform
```

Disconnection from shared account connections should follow country law and platform rules.

If country law requires revocation or disconnection, Autopro must support it.

If the project requires continued connection for legal, accounting, fraud, or active transaction reasons, the system can restrict disconnection until obligations are resolved.

---

# 11. External Databases And Partner Data

The reusable core can support approved external databases or partner data later.

External data must never mix directly with the owner core database as if it were native trusted data.

External databases must be labeled separately.

Example labels:

```txt
CORE_DATA
OWNER_PROJECT_DATA
PARTNER_IMPORTED_DATA
THIRD_PARTY_REFERENCE_DATA
```

If another car-selling platform shares information with the owner core, that data must remain labeled as external or partner data.

External data must use controlled access.

External data must be isolated for safety.

If a virus, breach, corruption, or suspicious behavior affects an external data source, that source must be disconnected from the core automatically or manually by authorized staff.

External data can be used across owner platforms only through safe rules, APIs, permissions, and verification.

The system must protect the owner core database from:

- Bad data
- Duplicate data
- Malware/virus risks
- Corrupt imports
- Partner abuse
- Unauthorized access
- Privacy leaks
- Performance problems

The owner or selected employees must approve which external platforms can connect.

---

# 12. Vehicle ID Main Rules

Every vehicle added to Autopro must receive a permanent Vehicle ID.

Vehicle ID must be reusable across future owner platforms.

One vehicle should have one master Vehicle ID even if it appears in different owner projects.

The master Vehicle ID helps prevent fraud and duplicate vehicle records.

Vehicle ID must connect to:

- Owner/client ID
- VIN if available
- Plate number if legal and available
- Make/brand
- Model
- Year
- Engine
- Trim
- Body type
- Fuel/powertrain
- Mileage
- Service history
- Parts history
- Diagnostics
- Photos/videos
- Documents
- Sale history later
- Ownership transfer history
- Vehicle risk signals
- Vehicle recommendation engine

VIN must be optional because some countries or users may not provide it.

If VIN is provided, it should improve accuracy.

Plate number must be optional and private because of privacy and security.

Vehicle ID must still work without VIN or plate number.

The system must detect possible duplicate vehicles.

Duplicate detection can use:

- Same VIN
- Same plate where legal
- Same owner
- Same make/model/year
- Same engine/trim
- Same documents
- Same photos where safe
- Same service records
- Same sale records
- Suspicious duplicate patterns

Duplicate vehicle merge must require owner/admin confirmation.

Vehicle duplicate merge must be audit logged.
---

# 13. Vehicle Transfer And Sale Reuse

A vehicle must be transferable to another owner if sold.

Vehicle transfer must require both old owner and new owner confirmation where possible.

Vehicle transfer can also require admin, dealer, platform, or legal verification depending on country, transaction type, and risk.

When a vehicle transfers, the new owner should receive a clear confirmation and welcome message.

Example:

```txt
Congratulations. This vehicle has been added to your garage.
```

The vehicle should be automatically added to the new owner garage with the correct available vehicle information.

Vehicle history should transfer with the vehicle where legal and operationally allowed.

Vehicle history can include:

- Service records
- Part replacement history
- Diagnostics
- Mileage records
- Inspection records
- Warranty records
- Accident/damage records where legal and proven
- Sale history later
- Ownership transfer history
- Vehicle media where allowed
- Vehicle documents where allowed

Private owner notes must stay private and must not transfer unless the owner allows it.

Sensitive personal data must be removed or hidden during vehicle transfer.

Data that should not transfer includes:

- Private conversations
- Phone numbers
- Private addresses
- Payment information
- Disputes not related to the vehicle condition/history
- Private owner notes
- Staff-only notes
- Personal support cases

The new owner should automatically receive recommendations based on the Vehicle ID.

Recommendations can include:

- Compatible parts
- Nearby services
- Maintenance reminders
- Known vehicle needs
- Trusted suppliers
- Trusted garages
- Service packages
- Insurance or inspection reminders later
- Future sale value insights later

The vehicle transfer system should support future car-selling platforms.

If a vehicle is sold on a future owner car-selling platform, the same Vehicle ID can transfer to the new owner and connect back to Autopro where allowed.

---

# 14. Vehicle ID, Theft, Fraud, And Traceability

Vehicle ID can support theft, fraud, and traceability features where legal.

Vehicle ID can connect to:

- VIN
- Plate number where legal
- Parts numbers
- Service records
- Ownership transfer history
- Location events where legal and consented
- Sale history
- Damage history
- Inspection history
- Documents
- Police/legal reports where legally supported later

The system can help detect stolen or suspicious vehicles where legal and supported.

The system must be careful with privacy and false claims.

Stolen vehicle or fraud flags must require proof, review, legal rules, and proper permissions.

A vehicle should not be publicly marked as stolen without verified proof and legal process.

Vehicle traceability should help protect:

- Buyers
- Sellers
- Garages
- Suppliers
- Service providers
- Insurance partners later
- Future owner car-selling platforms

---

# 15. Vehicle History Detail Level

Vehicle history should be saved in strong detail because it can later affect vehicle value, trust, sale price, maintenance, and recommendations.

Vehicle history can include:

- Service visits
- Work done
- Parts installed
- Part numbers
- Supplier links
- Service provider links
- Mechanic notes
- Diagnostic reports
- Photos/videos
- Mileage at service time
- Date/time
- Warranty terms
- Inspection results
- Wash/detailing history where useful
- Towing events where useful
- Accident/damage notes where proven
- Correction notes
- Vehicle sale history later

Original history records should not be deleted.

If a mistake exists, an approved person can add a correction note.

Correction notes must show:

- Who corrected it
- When corrected
- Reason
- Proof if needed
- Old value
- New value
- Approval if needed

Vehicle history should be updated by the second or near real-time for important events.

The system should avoid storing unnecessary heavy data forever if it does not serve legal, vehicle value, fraud, warranty, or useful history needs.

Large media files should be stored outside the main database, with metadata and links stored in the database.

---

# 16. Vehicle-Based Automation

Vehicle ID must power automated recommendations.

Recommendations can appear for:

- Clients
- Service providers
- Garages
- Mechanics
- Suppliers
- Fleet managers
- Dealers
- Future car-selling platform users

When a mechanic or service provider works on a vehicle, the task dashboard should automatically show relevant information for that Vehicle ID.

Relevant information can include:

- Vehicle details
- Compatible parts
- Previous services
- Known issues
- Recommended parts
- Related service packages
- Supplier offers
- Maintenance reminders
- Warranty notes
- Client-approved work
- Safety warnings

If a mechanic shop works on many vehicles, the system should adjust recommendations per vehicle automatically.

The system should support large businesses while preventing abuse.

Example:

```txt
A fleet garage can work on 1,000 vehicles a day if its verified business size supports that volume.

A small unverified mechanic repeatedly searching hundreds of unrelated vehicles can trigger review, limits, or verification.
```

The system must support logical limits based on:

- Account type
- Verified business size
- Staff count
- Branch count
- Fleet size
- Trust level
- Plan
- Country
- Risk level
- Usage history

Unusual repetitive access can trigger:

- Warning
- Verification request
- Rate limit
- Temporary block
- Staff review
- Fraud investigation
- Account suspension in serious cases

---

# 17. Cross-Project Reuse Rules

Future owner platforms should connect to the same reusable core instead of creating disconnected databases.

A future car-selling platform must reuse the same Vehicle ID system.

A future shipping platform should reuse the same business, package, route, and shipping ID direction.

A future service marketplace should reuse the same user, business, staff, booking, payment, profile, and dashboard structures.

Each future project must have its own module settings while using shared core IDs where allowed.

Each future project must have a Project ID.

Every record must know which project created it and which projects can use it.

Some data can be shared across owner projects automatically only when the user gives permission or platform rules and law allow it.

Some data must never be shared across projects unless legally required or explicitly approved.

The owner must decide which future projects can connect to the reusable core.

The goal is one strong core for many projects, with flexible project modules on top.

---

# 18. Data Sharing Boundaries

The reusable core must prevent oversharing.

A Global User ID can contain many types of linked information, but each project should only use what it needs.

Example:

```txt
Vehicle data belongs to automotive projects.

Grocery preference data belongs to grocery projects.

School-related data belongs to school-related projects.

Medical data belongs only to legally allowed medical modules.
```

If a future general marketplace sells many categories, it can use multiple information categories only if the platform supports them and the user confirms or rules allow it.

A platform should not access unrelated private data only because it shares the same Global User ID.

The system must support category-based data access.

Access categories can include:

- Automotive data
- Vehicle garage data
- Grocery preference data
- Medical data
- School data
- Payment/wallet data
- Shipping data
- Business data
- Staff data
- Public profile data
- Private support data
- Legal/audit data

Each category must have its own access rules.

---

# 19. Live And Near Real-Time Updates

The database must be designed so important data updates live or near real-time.

Important live/near real-time data includes:

- Orders
- Payments
- Shipping/tracking
- Cash collection
- Staff tasks
- Messages
- Notifications
- Vehicle garage
- Product stock
- Product prices
- Service bookings
- Disputes
- Audit logs
- Admin dashboards

Clients must receive instant or near-instant notifications when important data changes.

Businesses must receive instant or near-instant notifications when orders, bookings, messages, tasks, payments, or important profile events change.

Admin dashboards should update live or near real-time for important data.

Live updates must be designed carefully because they can increase hosting and database costs.

Real-time systems cost money because every live update can use database, server, bandwidth, notification, and processing resources.

The first launch should use practical live updates first.

Critical updates should be live or near real-time.

Non-critical updates can be delayed, batched, summarized, archived, or updated on refresh to reduce cost.

---

# 20. Cost-Safe Live Update Strategy

Autopro must support live updates without wasting hosting resources.

Critical live data can include:

- Payment confirmation
- Order status
- Shipping tracking
- Cash collection
- Booking confirmation
- Staff task assignment
- Dispute alerts
- Fraud/security alerts
- Admin money alerts
- Vehicle ownership transfer

Non-critical data can be updated less aggressively.

Non-critical data can include:

- Old notifications
- View counts
- Long-term analytics
- Content impressions
- Low-priority dashboard summaries
- Recommendation refreshes
- Historical reports

The system can use:

- Real-time updates for critical events
- Near real-time updates for important but less urgent events
- Scheduled jobs for reports
- Event summaries for analytics
- Archiving for old records
- Expiration rules for temporary data
- Large file storage outside the main database
- Caching where useful
- Rate limits where needed

Temporary unnecessary data can have expiration rules.

A 24-hour expiration rule can be used for temporary data only when it is not needed for legal, audit, payment, fraud, safety, warranty, dispute, tax, accounting, or vehicle history reasons.

Important event summaries can remain even if temporary raw data expires.

---

# 21. Event Logs

Every important update must create an event log.

Event examples:

- User created
- Client profile updated
- Vehicle added
- Vehicle owner changed
- Vehicle service record added
- Product created
- Product price changed
- Order created
- Order status changed
- Payment authorized
- Payment captured
- Payment failed
- Cash collected
- Cash missing
- Booking requested
- Booking confirmed
- Service completed
- Package handed off
- Package delivered
- Refund requested
- Refund approved
- Dispute opened
- Staff task assigned
- Permission changed
- Project connection added
- Project connection removed
- External database connected
- External database disconnected

Event logs should feed:

- Dashboards
- Notifications
- Audit logs
- Analytics
- Trust scoring
- Risk scoring
- User timelines
- Vehicle history
- Business reports
- Admin reports

Event logs must be lightweight when possible.

Sensitive event logs must follow privacy rules.

Audit logs must be stronger and more protected than normal event logs.

---

# 22. Database Planning Before Coding

The reusable database structure must be documented before coding.

Database planning must include tables or collections for:

- Projects
- Users
- Client profiles
- Businesses
- Staff/employees
- Roles
- Permissions
- Vehicles
- Products
- Services
- Orders
- Bookings
- Payments
- Invoices
- Refunds
- Returns
- Disputes
- Shipping
- Packages
- Warehouses
- Partner desks
- Branches
- Messages
- Notifications
- Documents
- Media/files
- Reviews
- Posts
- Audit logs
- Event logs
- Wallet/credit direction
- Project connections
- External data sources

Every table or collection must have:

- Purpose
- Main fields
- Relationships
- Privacy rules
- Retention rules
- Access permissions
- Project ownership
- Cross-project sharing rules
- Audit/event requirements

The database must be designed so future developers and future AI conversations can build from it without guessing.

---

# 23. Production Data And Copyable Documentation

The owner can copy the documented structure for future projects.

The owner should not manually copy private production data between projects.

Production data must be shared only through secure rules, permissions, APIs, modules, and legal controls.

Future projects should use secure API/module access to shared core data.

The system must avoid duplicating the same client, vehicle, or business data in every future project.

Project-specific data should stay separate when it does not need to be shared.

The reusable core should support export/import tools for allowed data.

Export/import tools must respect:

- Owner permissions
- User consent
- Legal rules
- Privacy
- Data category
- Project access
- Audit logs
- Security review

---

# 24. Privacy, Legal, And Permission Rules

Client consent must be required before sharing profile or vehicle data with another owner project where required.

Country law must override cross-project sharing rules.

The system must remain flexible so privacy and legal rules can be changed later by country, project, and data category.

Users should be able to see which projects are connected to their account.

Users can revoke or disconnect project connections only where law requires it or where platform rules allow it.

If active obligations exist, disconnection can be restricted until obligations are resolved.

Active obligations can include:

- Open orders
- Active bookings
- Unpaid balances
- Disputes
- Refunds
- Legal holds
- Vehicle transfer
- Warranty cases
- Fraud reviews

Vehicle data sharing must be separated into access levels.

Vehicle access levels can include:

- Public
- Private
- Service-only
- Sale-only
- Admin-only
- Owner-only
- Fleet-only
- Dealer-only

Business data sharing must be separated into access levels.

Business access levels can include:

- Public
- Private
- Staff-only
- Admin-only
- Partner-only
- Project-only
- Cross-project allowed

Every cross-project data access must be audit logged.

Cross-project audit logs should stay lightweight where possible, but must keep the needed security and legal information.

Sensitive documents must never be shared across projects unless explicitly approved or legally required.

Users should be notified when another connected project accesses important private data if the project is external or if law/rules require notification.

The system must protect against one future project accidentally exposing private data from another project.

---

# 25. Owner Access And Future Project Reuse

The full owner must be able to view the reusable structure and all project modules.

Selected employees can access reusable structure tools only if the owner gives permission.

The owner must be able to export allowed structure documentation for future projects.

Developers must be able to build new projects using the reusable core without seeing unnecessary private user data.

The owner must be able to create a new project using shared core modules.

Example:

```txt
Create new project:
- Users
- Vehicles
- Payments
- Messages
- Profiles
- Staff permissions
```

The owner must be able to turn modules on or off for each project.

The owner must be able to decide which IDs are shared with each future project.

The system should automate ID-sharing rules based on:

- Project type
- Module type
- Data category
- User consent
- Country law
- Owner settings
- Privacy settings
- Risk level

The owner can copy the documentation, but production data access must stay protected.

The system should support a master admin view across all owner projects later.

Each project must also have its own admin dashboard.

The master admin view should show cross-project structure, modules, IDs, health, risk, growth, and high-level analytics.

Project-specific admin dashboards should show only that project’s data unless the owner allows cross-project access.

---

# 26. Final Reusable Core Goals

The most important goals of the reusable core and ID system are:

- Easier future project building
- Shared core logic across owner platforms
- Strong ID structure
- Client ID continuity
- Vehicle ID continuity
- Business ID continuity
- Staff and permission reuse
- Secure cross-project linking
- Live or near real-time important updates
- Flexible modules for each project
- Clear documentation for owner, AI, and developers
- Strong privacy boundaries
- Legal compliance by country
- Low unnecessary hosting cost
- Protection against oversharing
- Protection against duplicate accounts
- Protection against fraud
- Future car-selling platform readiness

Each platform should add useful information to the Global User ID or related core record.

Each platform should only use the information it needs.

The first launch can stay simple.

The database backbone must still support future projects from day one.

This file must become a main reference before creating:

```txt
docs/DATA_MODEL_NOTES.md
```

Autopro must avoid:

- Oversharing information
- Mixing unrelated data categories
- Exposing vehicle data in non-vehicle platforms
- Exposing grocery/medical/school data in unrelated platforms
- Manually copying private production data
- Building disconnected future databases
- Storing unnecessary heavy temporary data forever
- Allowing external databases to mix directly with core data
- Letting one future project expose another project’s private data
- Making the ID system hard for developers to understand

The reusable core must stay fully flexible, readable, reusable, automated where possible, and safe.
