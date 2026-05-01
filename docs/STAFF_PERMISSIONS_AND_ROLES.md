# Autopro Staff Permissions and Roles

This file defines how Autopro handles staff accounts, employee accounts, permissions, branches, task routing, security, audit logs, cash handling, payroll direction, and employee responsibility.

Autopro must be designed with a correct staff and permission backbone from day one, even if the first public launch starts simple.

No coding has started yet.

---

# 1. Staff System Purpose

Autopro must support a complete, flexible, secure, and automated staff permission system.

The staff system must support:

- Autopro internal staff
- Supplier employees
- Service provider and garage employees
- Hybrid business employees
- Shipping and logistics company employees
- Partner desk employees
- Warehouse and pickup desk employees
- B2B and fleet account employees
- Car dealer employees
- Car collector or museum account employees
- Influencer and media account teams later
- Client helper accounts where useful
- Temporary employees
- Multi-branch employee structures
- Multi-country employee structures

The system must start simple for users, but the backbone must support future expansion.

Autopro must use proven permission principles:

- Role-based access control
- Least privilege access
- Deny by default
- Owner-controlled permissions
- Approval workflows
- Separation of duties for money and sensitive actions
- Audit logs for important actions
- Secure account recovery
- Two-step verification for important roles
- Device/session controls
- Automatic alerts for suspicious behavior
- Flexible role templates
- Custom roles
- Branch-based permissions
- Department-based permissions
- Country and legal rule flexibility

---

# 2. Main Staff System Rules

Autopro must support employee accounts from the day-one structure.

Every employee must have their own login.

Employees must not share the business owner login.

Each employee account must be secure, controlled, flexible, and traceable.

The system must allow forgotten password recovery, secure password reset, device verification, and account suspension.

Employee accounts must work for both:

- Autopro internal staff
- Business employees

Business employee accounts must be optional. A small supplier, garage, or creator can run the account alone if they do not need employees.

A larger business must be able to add employees, branches, departments, managers, and directors as it grows.

The full owner must have complete unrestricted access.

Every other staff member must have limited access based on permissions.

Permissions must be controlled by the owner by default.

The owner must be able to give selected employees limited permission to manage other employees, roles, tasks, departments, branches, or reports.

Staff permissions must be changeable later without rebuilding the platform.

Autopro must support both ready-made staff role templates and custom roles from the beginning.

---

# 3. Reusable Staff Core

The staff and permission system must be built as a reusable core system.

The same logic should be usable later for other owner projects where legally and technically suitable.

The reusable staff core should support:

- Users
- Roles
- Permissions
- Departments
- Branches
- Task routing
- Approvals
- Audit logs
- Activity reports
- Login security
- Device tracking
- Employee status
- Payroll direction
- Performance tracking
- Risk controls
- Staff notes
- Legal export
- Plan-based feature limits

The system must be flexible enough to add, edit, duplicate, disable, or remove roles without rebuilding the platform.

---

# 4. Account Types That Can Have Employees

Autopro must allow employee accounts for all business account types where useful.

Employee accounts must be supported for:

- Supplier/seller accounts
- Service provider/garage accounts
- Hybrid business accounts
- Shipping/logistics company accounts
- B2B/fleet business accounts
- Partner desk accounts
- Warehouse accounts
- Pickup desk accounts
- Influencer/media accounts later
- Car dealer accounts
- Car collector or museum accounts
- Professional client accounts
- Client helper accounts where useful

Each account type must receive only the roles and tools that make sense for that account type.

The system must avoid confusing small businesses with too many employee options.

The free plan should include core employee roles only.

Paid plans should unlock more employee roles, branches, permissions, reports, automation, analytics, payroll features, and enterprise controls.

All locked roles and features can be visible to the account owner so the owner understands how Autopro can help the business grow.

---

# 5. Client, Collector, Museum, Dealer, And Fleet Staff

Autopro must support special staff structures for advanced non-supplier accounts where useful.

Client accounts can add helper users if the account owner allows it.

Examples include:

- Family member helping manage orders
- Assistant managing vehicle garage
- Car collector employee
- Museum employee
- Private fleet assistant
- Vehicle manager
- Maintenance coordinator

Car collectors and museums can have staff for:

- Vehicle records
- Service history
- Parts orders
- Supplier communication
- Transport coordination
- Event/media coordination
- Budget tracking
- Vehicle documentation

Fleet buyers can have professional staff structures.

Fleet account types may include:

- Taxi fleets
- Bus companies
- Truck fleets
- Construction fleets
- Hospital fleets
- Emergency fleets
- Airport fleets
- Delivery fleets
- Rental fleets
- Government fleets
- Private company fleets
- Garbage truck fleets
- Utility fleets
- School transport fleets
- Logistics fleets

Fleet dashboards must support:

- Multiple vehicles
- Multiple branches or depots
- Assigned staff
- Maintenance schedules
- Parts procurement
- Supplier connections
- Service provider connections
- Fleet cost tracking
- Approval workflows
- Budget tracking
- Paid plan upgrades

Car dealer accounts must support:

- Dealer staff
- Vehicle inventory
- Parts procurement
- Service provider connections
- Vehicle preparation
- Warranty support
- Customer handover tracking
- Dealer analytics
- Paid plan upgrades

---

# 6. Multiple Roles For One User

A user can have more than one role on Autopro.

One person can be:

- A client
- A garage employee
- An independent service provider
- An influencer
- A supplier employee
- A shipping employee
- A fleet employee

Each role must have separate permissions and a separate dashboard context.

After login, a user with multiple roles must choose which dashboard or business context they are using.

The system should remember the user routine and make frequent dashboards easier to access.

A person can work for more than one business only if each business officially approves that person as an employee.

If a person works independently with multiple garages, that person should register as an independent service provider and link to garages after both sides agree.

---

# 7. Branches And Locations

Autopro must allow one business to have multiple branches or locations.

A brand can have:

- One main profile
- Multiple branches
- Multiple dashboards
- Multiple managers
- Multiple service locations
- Multiple inventory locations
- Multiple countries
- Hybrid branches with both products and services

The business owner must be able to see all branches and all employees.

The owner must be able to assign employees to:

- One branch
- Multiple branches
- All branches

Branch managers should see only their branch by default.

The owner can allow one manager to manage multiple branches.

Each branch should have its own details where useful:

- Address
- Phone number
- Opening hours
- Staff list
- Inventory
- Service calendar
- Pickup options
- Delivery options
- Performance reports

The owner can share details across branches if needed.

Examples:

- One phone number for multiple branches
- One staff group serving multiple branches
- One service calendar shared by several branches
- One inventory shared across several branches

Branch performance should be visible to the owner in summary first, then detailed reports after selection.

Client search results should show the nearest useful branch where relevant.

This must apply to product orders, services, pickup desks, garages, and other location-based features.

---

# 8. Adding Employees

Business owners must be able to add employees using secure methods.

Supported employee invitation methods must include:

- Email invitation link
- WhatsApp invitation link
- Owner creates employee profile and employee sets password
- Autopro admin manually adds employee if needed

Phone/SMS invitation is not required as a standard method at this stage, but the system can support it later if useful.

Employee invitation links must expire after a time limit for security.

The employee onboarding flow should be:

- Owner selects a role template or custom role
- Owner reviews default permissions
- Owner edits permissions if needed
- Owner selects branch, department, manager, and tasks
- Owner sends invitation or creates employee profile
- Employee opens invitation
- Employee fills required legal and contact information
- Employee verifies required contact method
- Employee creates password
- Employee accepts Autopro staff/user rules
- Employee accesses their dashboard
- Owner and selected managers are notified

The owner must be able to approve employee access for sensitive jobs before the employee can use the dashboard.

---

# 9. Removing, Pausing, And Resigning Employees

Business owners must be able to deactivate, remove, pause, or suspend employees instantly.

Selected managers can receive limited ability to remove, pause, or suspend employees if the owner gives permission.

Removed employees must lose access immediately.

Removed employee history must stay saved in audit logs.

Old actions must remain linked to the removed employee account.

Deleted or deactivated staff accounts must remain in history for legal, accounting, dispute, and audit purposes.

Old staff accounts must not be reused as a new person.

Employees should be able to resign or leave a business account themselves.

If an employee resigns, access to the business dashboard must be removed.

If an employee does not show up or disappears, the owner or selected manager can pause the account until the situation is resolved.

---

# 10. Login, Devices, And Security

Important staff accounts must require two-step verification.

This includes:

- Owner
- CEO
- Manager
- Finance
- Cash
- Refund
- Payout
- Admin
- Bank/payment settings roles
- High-risk permissions

Employees should have limited sessions and devices based on role.

One employee normally has one dashboard access context.

Some selected employees can access from multiple devices if their job requires it.

Support staff and lower-risk roles can be restricted to approved devices.

If an employee logs in from a new device, the owner or selected managers should receive a notification when required by role and risk.

Suspicious login activity must create alerts.

Autopro must record safe security metadata for investigations.

Security logs may include:

- Employee account
- Role
- Login time
- Device type
- Browser/app
- IP address where legal
- Approximate location where legal
- Session ID
- Failed login attempts
- Password reset event
- Two-step verification event

Autopro must never store or display real passwords in audit logs.

Password reset must be secure and logged.

Autopro must force password change after suspicious activity when needed.

Staff access should not be deleted only because the employee was inactive.

Inactive staff accounts should be placed on hold until the owner or selected manager unlocks or suspends them.

Temporary employee access must be supported.

Temporary employee access can expire after a set time, such as 7 days.

Temporary access must be created only by the owner or selected managers.

Temporary employee records must remain saved unless legal rules allow deletion and the owner chooses deletion where permitted.

Mobile app and desktop permission levels must be separable later.

---

# 11. Role Templates And Custom Roles

Autopro must provide ready-made role templates.

Role templates must be based on standard job structures and can be edited by the owner.

The employee can customize personal preferences where allowed, but cannot change their role permissions.

Business owners must be able to create custom roles with custom permissions.

The owner can create roles above, below, or between existing roles.

Example:

```txt
Owner
Executive Director
CEO
General Manager
Branch Manager
Team Lead
Employee
```

Only the owner and selected employees can create or edit employee roles.

Managers can create or edit roles only if the owner gives permission.

Role changes must be saved in audit logs.

Role changes must notify the owner and selected employees.

Money-related permissions require extra confirmation.

Some permission changes can require Autopro admin review.

Roles must be reusable across branches.

A role can be duplicated and assigned to different branches while staying linked to the same business owner or brand.

---

# 12. Permission Design

Autopro must use role-based access control.

Access must be denied by default unless the role has permission.

Employees must only see dashboard sections related to their job.

Employees must not see pages, tools, reports, or private information outside their permission level.

The system must support permission levels such as:

- View only
- Create
- Edit
- Approve
- Reject
- Delete
- Export
- Assign
- Override
- Manage settings
- Manage users
- Manage money
- View audit logs

Permissions must be flexible by:

- Account type
- Role
- Employee
- Department
- Branch
- Country
- Plan
- Risk level
- Trust level
- Task type
- Approval level
- Data sensitivity

---

# 13. Autopro Internal Staff Roles

Autopro must support internal company staff roles.

Internal staff roles must be separate from business employee roles.

Autopro staff manage the platform.

Business employees manage their own business account.

A person can have both types of access only if each role is separately assigned and controlled.

Autopro internal staff roles should include:

- Full Owner
- CEO/General Manager
- CFO/Finance Manager
- Accountant
- Payments/Payout Staff
- Refund/Return Staff
- Customer Support
- Supplier Support
- Service Provider Support
- Shipping/Logistics Support
- Product Approval Staff
- Certification/Verification Staff
- Trust and Safety
- Dispute Resolution Staff
- Content Moderator
- Ads/Promotions Manager
- Data/Analytics Staff
- Developer/Technical Staff
- Head of Developers
- Regional Manager
- Call Center/Messaging Staff

The owner can add, modify, duplicate, disable, or remove internal staff roles.

If a top position is not filled, the owner automatically carries that responsibility until someone is hired.

Only the full owner can create top-level admin roles by default.

Internal Autopro staff access must be limited by department.

One employee can work in multiple departments if approved.

One employee can manage multiple departments if approved.

One project can be shared by multiple departments.

Internal staff must access client private data only when needed for their job and only with permission.

Financial staff should see only the money data assigned to them, not full owner financial data unless approved.

Support staff should see only assigned tickets/orders unless a manager allows more.

Developers should have access to technical tools but not automatically full financial or private data.

Senior technical roles can receive extra access only if approved.

---

# 14. Internal Staff Task Flow

Autopro must support automated staff task routing.

Tasks should be routed by:

- Role
- Department
- Country
- Language
- Branch
- Risk level
- Workload
- Staff experience
- Staff performance
- Case value
- Client type
- Business trust level
- Legal complexity

If a staff member cannot solve a task, they can escalate it to their supervisor, manager, senior staff, or another department.

A task can include:

- Client conversation
- Order details
- Service booking
- Refund request
- Return request
- Dispute file
- Proof files
- Photos/videos
- Payment records
- Staff notes
- Vehicle history
- Shipping history
- Risk score
- Previous similar cases

VIP clients requesting a manager should be routed to manager-level staff where required.

High-value deals, bulk orders, fleet management issues, legal issues, and serious disputes should be routed to senior staff or managers.

---

# 15. Internal Staff Performance

Autopro must track internal staff performance.

Performance tracking may include:

- Resolved tickets
- Response time
- Refund handling speed
- Dispute quality
- Mistakes
- Escalations
- Customer satisfaction
- Fraud cases handled
- Overdue tasks
- Repeated errors
- Good performance records

Performance reports should be visible to the owner and selected managers.

Bad internal staff behavior must trigger alerts.

Serious behavior can trigger suspension until reviewed.

Good performance can support rewards, promotion suggestions, salary suggestions, and task-level upgrades.

---

# 16. Supplier Employee Roles

Supplier accounts must support ready-made employee roles.

Supplier roles should include:

- Supplier Owner
- Supplier Manager
- Product Listing Staff
- Catalog Import Staff
- Inventory/Stock Staff
- Price Manager
- Order Processing Staff
- Packaging Staff
- Customer Support Staff
- Finance/Cash Staff
- Returns/Warranty Staff
- Driver/Delivery Staff
- Branch Manager

One employee can hold multiple roles.

Multiple roles can be grouped under one job title.

One job title can be assigned to multiple employees.

Supplier employees can add, edit, delete, upload, import, price, package, confirm, and respond only if the supplier owner gives the needed permissions.

Product deletion should require manager or owner approval by default.

Price changes should require manager or owner approval by default.

High-value or suspicious price changes must create an Autopro review task.

Supplier employees can upload or import product catalogs if permitted.

Catalog imports should require supplier owner or supplier manager approval before going live by default.

Autopro admin review is required only for suspicious, high-risk, restricted, poor-quality, or marketplace-sensitive catalog imports.

Supplier employees can confirm stock availability if permitted.

Supplier employees can confirm order packaging if permitted.

Supplier employees can confirm handoff to a shipping company if permitted.

Supplier employees can respond to returns and warranty cases if permitted.

Supplier finance employees must see only supplier financial data.

Supplier employees must never access full Autopro financial data.

---

# 17. Service Provider And Garage Employee Roles

Service provider and garage accounts must support ready-made employee roles.

Service provider and garage roles should include:

- Garage Owner
- Garage Manager
- Reception/Booking Staff
- Mechanic/Technician
- Diagnosis/Inspection Staff
- Parts Ordering Staff
- Cashier
- Warranty/Service Follow-Up Staff
- Mobile Service Driver
- Branch Manager
- Service Quality Inspector

Garage owners must have full flexibility to add, modify, duplicate, delete, or combine roles.

Reception staff can manage bookings and appointments if permitted.

Mechanics should see only assigned jobs by default.

Senior mechanics can see team jobs if permitted.

Managers can see full garage work if permitted.

Mechanics can update vehicle service history if permitted.

Vehicle service history updates should automatically connect to the vehicle ID.

Original vehicle service history records should not be deleted.

If a service record has a mistake, a mechanic, senior mechanic, manager, or approved staff member can add a correction note.

Diagnosis staff can upload inspection reports, photos, videos, and notes if permitted.

Service provider employees can order parts for clients only if the service provider owner gives that permission.

Ordering parts for a client must always require digital client approval first.

The client should see part options inside the quote or invoice where possible.

Part options may include:

- Brand
- Supplier profile
- Product price
- Shipping price
- Availability
- Warranty
- Alternative options

The client can save parts to lists.

Extra work discovered during service must require updated quote approval before work starts.

After examination, the provider can send a repair quote that separates:

- Required work
- Optional work
- Non-urgent work
- Labor
- Parts
- Shipping
- Warranty terms
- Estimated time

The client can approve, decline, remove optional items, reschedule non-urgent work, or bring their own part if the service provider accepts.

Garage cashiers can confirm cash payments if permitted.

Warranty staff can respond to service warranty cases if permitted.

Service completion must require provider confirmation and client confirmation.

Autopro must allow QR and manual confirmation for service completion.

Bad mechanic or service behavior should not automatically damage the business trust score for a first unclear case.

Repeated, risky, unresolved, unsafe, fraudulent, or proven serious behavior can affect trust score after review.

Trusted/VIP providers should receive fair review before harsh action.

Good mechanic or service performance should help business trust score and appear in the dashboard.

---

# 18. Shipping Company Employee Roles

Shipping and logistics companies must support ready-made employee roles.

Shipping roles should include:

- Shipping Company Owner
- Shipping Company Admin
- Regional Manager
- Branch Manager
- Pickup Desk Staff
- Warehouse Staff
- Driver
- Cash Collection Staff
- Route Manager
- Claims/Damage Staff
- Finance/Settlement Staff
- Customer Support Staff
- Returns Staff

All roles must be flexible and adjustable by the shipping company owner.

Drivers can confirm delivery using:

- QR code
- Scan proof
- Client code
- Manual confirmation where allowed
- Delivery proof where required

Pickup desk staff can confirm package pickup using QR code or client code.

Warehouse staff can scan package handoff and storage movement if permitted.

Warehouse staff can mark packages damaged or lost if permitted.

Damaged or lost package reports should require photo/video proof when needed.

Cash collection staff should be separate from drivers when possible.

One employee can perform both delivery and cash collection if the owner allows it.

Route managers should see delivery performance by route.

Shipping finance staff can manage settlement statements if permitted.

Shipping employee mistakes should appear to higher-ranking employees.

Employee mistakes should not automatically affect public shipping company trust score unless repeated, unresolved, fraudulent, unsafe, or legally serious.

---

# 19. Hybrid Business Employee Rules

Hybrid businesses must be able to use both supplier roles and service provider roles.

The hybrid business owner must decide which employees can access:

- Product tools
- Service tools
- Both product and service tools
- Finance tools
- Branch tools
- Customer communication tools

Hybrid employees should be restricted by module by default.

Product staff should not edit service bookings unless allowed.

Service staff should not edit product inventory unless allowed.

Hybrid businesses should have combined branch management for products and services.

Hybrid businesses can create sub-manager roles and link them under general managers.

Hybrid businesses can have separate financial views for product sales and service bookings by default.

The owner can combine or separate financial views depending on business needs.

---

# 20. Cash Handling And Money Permissions

Only approved employees can handle cash.

Cash handling must be controlled by role, employee, branch, amount, country, trust level, risk level, and business rules.

Cash proof can include:

- QR confirmation
- Client confirmation code
- Photo of receipt when needed
- GPS/location proof where legal and needed
- Manager approval for high amount
- Driver delivery confirmation
- Pickup desk confirmation
- Shipping confirmation
- Manual staff confirmation where allowed

No-proof cash handling should not be the standard.

If an employee collects cash and does not remit it, the business owner is responsible to Autopro as the standard rule.

The employee can be responsible internally through the business owner depending on contract and country law.

Country law and contract terms can override internal responsibility details.

Missing cash or late remittance must increase risk score, especially for risky accounts.

High-value cash transactions must require extra approval.

High-value cash approval should require at least two approved employees or roles where configured.

Autopro should set cash limits by employee role as a standard.

New employees should have lower cash limits by default.

Trusted employees can receive higher cash limits.

Cash collectors must have daily and weekly cash reports.

Cash reports should compare:

- Assigned cash tasks
- Confirmed cash collected
- Cash remitted
- Cash not remitted
- Late remittance
- Disputes
- Proof quality
- Employee performance

Cash reports should be summarized first, then expandable by employee, branch, location, route, date, and transaction.

Cash not remitted by deadline must automatically create business debt.

Businesses must be able to restrict which employees can see cash and debt balances.

Cash-related actions must always be audit logged.

Suspicious cash behavior must create automatic alerts.

---

# 21. Sensitive Actions And Approvals

Sensitive actions must require approval based on owner rules, plan, country, value, risk, trust level, and legal requirements.

Actions that should require business owner, manager, or selected employee approval include:

- Refund approval
- Return approval
- Price change
- Product deletion
- Bank/payment details change
- Employee role change
- Cash confirmation
- Order cancellation
- Service cancellation
- Dispute response
- Warranty decision
- Catalog import approval
- Branch setting change
- Large discount
- Payout method change

Actions that should require Autopro admin or selected Autopro staff review include:

- Large refund
- Fraud suspicion
- High-value cash issue
- Bank/payment details change
- Repeated complaints
- Business owner dispute
- Staff abuse report
- Legal/country issue
- Suspicious price manipulation
- Suspicious catalog upload
- Repeated no-shows
- Large payout request

Autopro must support multi-step approvals.

Example:

```txt
Employee requests refund.
Manager reviews.
Autopro reviews if high value or high risk.
Finance confirms if money movement is required.
Final action is logged.
```

Approvals must have deadlines.

Overdue approvals must create alerts.

Emergency admin override can exist only if enabled by the owner.

Every override must require reason, proof, and audit log.

---

# 22. Client Data, Privacy, And Communication

Employees can see client phone numbers and addresses only when their job requires it and permissions allow it.

Client private data should be limited or masked where possible.

Full phone/address access should usually happen only after an order or service is confirmed.

Drivers should see only delivery-needed information.

Mechanics should see required vehicle details and service history, not unnecessary client private data.

Support staff should access private data only when handling an assigned case and only with permission.

Employees can chat with clients inside Autopro if the client opens the conversation or if the owner gives specific permission for allowed cases.

Client chats must be recorded for safety, proof, confirmations, bills, invoices, and disputes.

Businesses should be prevented from moving clients outside Autopro when it breaks platform rules.

Phone/address access should be hidden again after order or service completion where possible.

Trusted/VIP client-business relationships can allow continued easier access for repeat purchases, bookings, rescheduling, deals, and discounts where legal and permitted.

Data access must be logged.

A data access log records when private information is viewed, by whom, for what case, when, and from which role/device/session where legal.

Clients must be able to report employee abuse or bad behavior.

Employees must also be able to report client abuse or bad behavior to their supervisor, owner, selected managers, or Autopro depending on the seriousness.

---

# 23. Audit Logs

Autopro must automatically create audit logs for every sensitive or important action.

An audit log is a permanent action history.

Audit logs should record:

- Person who performed the action
- Account type
- Employee role
- Business account
- Branch
- Date and time
- Device/session information where legal
- IP/location metadata where legal
- Action performed
- Old value
- New value
- Reason
- Proof
- Related order/service/product/client/business
- Approval chain
- Override details
- Result

Audit logs must never store real passwords.

Audit logs can store safe security references such as session ID, login method, verification method, or password reset event.

Staff must be prevented from deleting audit logs.

Only the full owner or selected legal/admin roles can access very sensitive audit logs.

Autopro must support legal export of staff activity if required.

Legal exports must be accessible only to the owner and selected authorized roles.

Audit logs must support accounting, legal, dispute, security, and fraud needs.

---

# 24. Employee Tracking And Performance

Autopro must track employee performance.

Performance tracking can include:

- Orders handled
- Delivery success
- Bookings handled
- Services completed
- Refunds handled
- Return cases handled
- Disputes handled
- Response time
- Late responses
- Mistakes
- Repeated mistakes
- Excellent performance
- Customer feedback
- Internal notes
- Cash handling quality
- Proof quality
- Task completion speed
- Escalation rate
- Fraud risk
- Warnings
- Violations
- Appeals

Business owners must see employee performance reports.

Reports should include rankings, repeated errors, repeated good performance, track record, and improvement suggestions.

Autopro admin can see business employee performance when needed for disputes, risk, fraud, support, legal cases, or platform safety.

Bad employee behavior should not automatically affect business trust score as a standard.

Good employee performance can help business trust score.

Employee performance can affect automation.

Trusted employees can receive more tasks or higher limits.

The system can suggest:

- Promotion
- Salary upgrade
- New role
- More employees
- A good employee becoming manager
- Training requirement
- Warning
- Suspension review

Employees must have warning and violation history.

Employee mistakes must be categorized.

Example categories:

- Minor mistake
- Repeated mistake
- Serious mistake
- Cash issue
- Customer abuse
- Policy violation
- Fraud risk
- Legal risk
- Safety issue

Employees can appeal violations internally.

Business owners can add private notes about employee performance.

---

# 25. Payroll, Salary, And Internal Business Costs

Autopro must support payroll direction from day one as a structure, even if full payroll features are released in phases.

Payroll support should include:

- Simple salary notes
- Basic salary tracking
- Employee cost tracking
- Bonus tracking
- Commission tracking
- Payroll reports
- Salary upgrade suggestions
- Budget comparison
- Revenue comparison
- Employee cost analytics
- Growth suggestions

Employee salary information must be private from Autopro unless legally required, explicitly allowed, or needed for permitted analytics.

The owner and selected employees can access salary information inside their business.

Autopro can support employee cost tracking in business analytics.

Payroll features can be paid-plan features.

Advanced payroll and salary automation can be released in later phases.

---

# 26. Automation Rules

Autopro must automate staff workflows where possible.

Autopro must automatically assign staff tasks based on role.

Examples:

- Refund task goes to refund staff
- Catalog task goes to product approval staff
- Service dispute goes to service support or dispute staff
- Cash issue goes to finance/cash review
- High-risk case goes to trust and safety
- Shipping issue goes to logistics support

Autopro must route tasks by:

- Country
- Language
- Branch
- Department
- Risk level
- Workload
- Employee role
- Employee performance
- Case value
- Client trust level
- Business trust level

Autopro must automatically block employees from actions above their permission level.

Autopro must automatically require approval when an action is risky or high value.

Autopro must automatically create alerts for suspicious employee behavior.

Autopro must automatically create business debt when cash is not remitted on time.

Business debt can be removed or marked paid only after payment is proven and confirmed by authorized roles.

Autopro must automatically reduce trust score after repeated unresolved staff problems where justified.

Autopro must automatically increase trust score after consistent good performance where justified.

Autopro must automatically generate employee activity reports.

Autopro must automatically create audit logs for sensitive actions.

Autopro must automatically pause dangerous permissions during fraud review.

Autopro must automatically notify owner/admin when bank details change.

Autopro must automatically stop payouts if staff fraud is suspected.

Autopro can later suggest better staff permissions based on business growth.

Autopro can later use AI assistance to summarize staff actions, disputes, and risks if permitted by the owner or selected roles.

---

# 27. Plans And Monetization

Free business plans should have a limited number of employee accounts.

Paid business plans should allow more employees.

Advanced staff permissions can be part of paid plans.

Branch management can be limited on free plans and expanded on paid plans.

Large businesses with many employees or branches should have fair scaling.

Autopro should support:

- Per-employee pricing
- Plan-based employee limits
- Branch add-ons
- Enterprise/custom plans
- Volume discounts
- Unlimited or high-limit plans for large businesses
- Custom contracts for chains, large suppliers, fleets, and shipping companies

Employee performance analytics can be a paid feature.

Advanced audit log exports can be a paid feature.

Autopro must offer enterprise/custom plans for large suppliers, chains, fleets, shipping companies, hybrid businesses, and other large accounts.

Trusted/VIP businesses can receive more staff tools.

Suspicious/risky businesses can have staff tools limited.

---

# 28. Legal, Responsibility, And Proof

Country law must override Autopro rules where legally required.

Autopro must support country-specific standards for staff permissions, payroll, privacy, cash handling, legal records, data retention, and employment responsibility.

Businesses must manage employee access safely.

Misuse, false login, unsafe access, or failure to remove employees is the business owner's responsibility toward Autopro as the standard rule.

Employee responsibility inside the business is handled by business policy, contract, and country law.

Autopro should not automatically link one employee mistake to the business public ranking.

However, repeated, unresolved, fraudulent, unsafe, or legally serious employee behavior can affect business risk controls and trust score after review.

Employees must accept Autopro staff/user rules before using the dashboard.

Proof must be required for serious actions.

Serious proof cases include:

- Refund
- Cash collection
- Damage claim
- Lost package
- Package handoff
- Service completion
- Warranty decision
- Bank/payment change
- High-value approval
- Dispute response

Owners can choose extra proof requirements for their business where legally allowed.

Autopro must keep staff action records for legal, accounting, dispute, and audit needs.

Deleted or deactivated staff accounts must remain in history.

Staff must be prevented from deleting audit logs.

Only the full owner or selected legal/admin roles can access very sensitive audit logs.

Autopro must support legal export of staff activity if required.

---

# 29. What Autopro Must Avoid

Autopro must avoid giving employees too much permission by default.

Autopro must avoid blocking too many permissions in a way that makes simple work difficult.

Autopro must avoid complicated workflows that slow down basic tasks.

Autopro must avoid confusing small businesses with unnecessary employee features.

Autopro must avoid exposing private client, business, payroll, or financial data to employees who do not need it.

Autopro must avoid allowing staff to delete proof, audit logs, or sensitive records.

Autopro must avoid making employee mistakes automatically destroy a business reputation without review.

---

# 30. Staff System Goal

The most important goal of the staff permissions system is to be:

- Fully controlled by the owner from day one
- Fully flexible
- Fully automated
- Safe for money and private data
- Easy for small businesses
- Powerful for large businesses
- Expandable for future roles, departments, branches, and countries
- Reusable for future projects
- Connected to tasks, reports, permissions, approvals, audit logs, and business growth

Autopro must provide the standard professional structure first.

The owner, selected employees, and business owners can then modify roles, permissions, branches, reports, and workflows based on their needs.
