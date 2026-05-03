# Compatibility Engine Admin Rules

This file contains detailed rules and workflows for managing the Compatibility Engine from the admin and staff side.

It covers roles, permissions, manual overrides, quality scoring, penalties, rewards, and audit processes.
---

## 1. Roles & Permissions

### 1.1 Authorized Roles
Only the following roles have access to the admin side of the Compatibility Engine:

- **Admin / Owner**: Full access with no restrictions.
- **Selected Employees**: Access with defined limits set by the Admin or Senior Employees.

Trusted Suppliers and other user types do **not** have direct access to the admin panel.

### 1.2 Permission Levels
- **Admin**: Can override any compatibility data, approve or reject changes, manage quality scores, apply penalties, and modify system rules.
- **Selected Employees**: Can review reports, request changes, and manage tasks assigned to them. Their specific permissions are set and adjustable by the Admin.
- **Trusted Suppliers**: Can only submit correction requests. They cannot make direct changes.

### 1.3 Internal Employee Hierarchy
Different permission levels exist inside the “Selected Employees” group:

- **Junior Staff**: Can only view reports and compatibility data. They cannot make or approve changes.
- **Senior Staff**: Can review reports, request changes, and approve standard overrides.
- **Department Manager / Director**: Can approve high-risk or complex changes and manage the department’s workflow.

All permission levels are fully flexible and can be modified by the Admin at any time.

## 2. Manual Override Process

### 2.1 Supplier Correction Requests
When a supplier requests help to correct compatibility data:

- The request is automatically converted into a task.
- For normal suppliers, the task is assigned to available staff.
- For Trusted or VIP suppliers, the task is automatically routed to Senior Staff or the relevant department.
- A dedicated department for compatibility issues can be created. The Senior Staff or Department Director has final approval authority.

### 2.2 Information Required for Manual Changes
Before any manual override is saved, the person making the change must provide:

- Clear reason for the change
- Supporting proof (documents, photos, supplier confirmation, etc.)
- Internal notes for audit purposes

### 2.3 Double-Check System
Manual overrides on high-risk changes (such as mass updates or changes affecting many vehicles) require approval from a second person before the change takes effect.

## 3. Compatibility Quality Score

### 3.1 Score Calculation Factors
The hidden Compatibility Quality Score is calculated based on the following weighted factors:

- Accuracy of TecDoc information
- Correctness of OEM numbers
- Physical data accuracy (shape, size, weight, chemical composition when available)
- Number of previous successful installations
- Quality of tags and influencer promotions
- Packaging quality
- Quality and quantity of product images and installation videos
- Warranty terms offered
- Trusted supplier status
- Response time to correction requests and user reports

### 3.2 Visibility of the Score
The Quality Score is visible only to Admin and Selected Employees by default.  
It can later be made visible to suppliers themselves through a flexible and automated setting controlled by the Admin.

### 3.3 Actions That Affect the Score
The following actions automatically influence the Quality Score:

- Positive impact: High-quality packaging, professional images, installation videos, accurate information, strong warranty, trusted status, and positive tags from service providers.
- Negative impact: Repeated wrong compatibility data, high return rates, slow response to issues, and poor product presentation.

## 4. Penalties & Rewards System

### 4.1 Penalty System
Suppliers who repeatedly upload low-quality or incorrect compatibility data will face the following progressive penalties:

1. First warning
2. Second warning
3. Temporary suspension from compatibility search results
4. Permanent restriction from compatibility features
5. Full account review

The system is fully automated but allows manual override by Admin when needed.

### 4.2 Reward System
Suppliers with consistently high Quality Scores receive the following automatic rewards:

- Higher ranking in search results
- Faster payout processing
- Special trust badges
- Priority support
- Access to advanced features (such as bulk editing tools or promotional placements)

Additional rewards can be added by the Admin at any time.

### 4.3 VIP & Elderly Supplier Treatment
VIP and elderly suppliers receive softer handling when mistakes occur. The system automatically applies a more lenient penalty path for them, while still maintaining data quality standards.

## 5. Audit & Logging
Every manual change, penalty, reward, or override must be recorded in a detailed audit log that includes:

- Who made the change
- When the change was made
- Reason and proof provided
- Before and after values

This log is visible to Admin and authorized Senior Staff only.
---

## 6. Task Management & Workflow

### 6.1 Task Assignment Logic
When a compatibility issue is reported or a supplier requests a correction, the task is automatically assigned using a combination of the following rules:

- Tasks enter a general “Compatibility Issues” queue.
- They are then distributed based on:
  - **Priority ranking** (VIP and Trusted suppliers receive higher priority).
  - **Employee expertise** (specific employees handle European cars, Asian cars, American cars, etc.).
  - **Workload balance** (tasks are also assigned to the employee with the least open tasks).

### 6.2 Task Priority Levels
Tasks must have different priority levels:
- **High Priority**: VIP suppliers, elderly suppliers, and high-value orders.
- **Medium Priority**: Normal suppliers and standard user reports.
- **Low Priority**: General reports with low impact.

### 6.3 Task Escalation
If a task is not resolved within the defined time limit, it is automatically escalated to the responsible Senior Staff, Team Lead, or Department Manager.

## 7. Report Handling & Investigation

### 7.1 Automatic Data Collection
When a user reports that “a part does not fit,” the system must automatically collect and attach the following information to the task:

- Order number and date of purchase
- Vehicle details used at the time of purchase
- Supplier name and part details
- Whether the system marked the part as compatible by default
- Whether the client proceeded despite a warning
- Whether the return/change window has expired
- Any photos or evidence uploaded by the user

### 7.2 Internal Communication
Staff must be able to send and receive messages directly inside the task. This includes contacting both the client and the supplier. VIP, Trusted, and elderly suppliers should have priority access to direct staff communication.

### 7.3 Task Closing Options
When closing a task, staff must have the following flexible options (which can be modified by Admin):

- Approve compatibility change
- Reject change
- Apply penalty or warning to supplier
- Close as “User Error”
- Request more information
- Escalate to higher management
- Mark as resolved with no action

All closing options are fully automated where possible and can be adjusted by Admin and Selected Employees.

## 8. Bulk Actions & Emergency Controls

### 8.1 Bulk Action Capabilities
Admin and Selected Employees must be able to perform the following bulk actions:

- Remove or update compatibility data from hundreds of parts at once
- Pause all parts from one supplier in search results
- Update specific fields across multiple parts

### 8.2 Experimental / Trial Mode
Bulk actions must support an **Experimental Trial Mode** with the following rules:

- The trial can be run in a hidden environment visible only to Admin and Selected Employees.
- Real results are generated during the trial period.
- If the results are satisfactory, the Admin or Selected Employees can approve and push the changes live.
- If not satisfactory, the changes can be discarded without affecting users.

### 8.3 Supplier Upload Preview System
Before parts go live, suppliers must see a **Demo / Preview** of their uploaded parts. In this preview they can:

- Review each part individually or in groups
- Approve good parts and launch them
- Modify or remove incorrect parts
- Group-select correct parts and launch them together
- Keep incorrect parts in a separate demo area for up to 4 hours to correct them

## 9. Rollback Feature
The system must include a fully flexible and automated **Rollback** feature. Admin and Selected Employees must be able to revert compatibility data to any previous state (e.g., 24 hours ago, 7 days ago, or 30 days ago) with one click.

## 10. Supplier Communication & Transparency

### 10.1 Automatic Notifications
When a supplier’s parts are temporarily suspended from compatibility results, the supplier must receive an automatic notification explaining:

- Why the suspension happened
- Which parts are affected
- What actions they need to take to fix it

### 10.2 Quality Score History
Suppliers must be able to view the history of their Quality Score changes. The system must clearly show:

- What caused the score to drop or rise
- If the issue came from a single part, removing that part should immediately improve the score
- If the issue came from an entire category, the supplier must contact staff for review before the score can be restored

### 10.3 Internal Staff-Supplier Messaging
Admin and Selected Employees must have access to a dedicated internal messaging channel (separate from normal user chat) to communicate directly with suppliers about compatibility issues.

## 11. Monitoring & Reporting

### 11.1 Admin Dashboard
Admin and Senior Staff must have access to a dedicated Compatibility Engine dashboard showing:

- Number of open tasks
- Average resolution time
- Suppliers with the lowest and highest quality scores
- Number of successful fixes per week
- Tasks by priority level
- Escalated tasks

### 11.2 Automatic Reports
The system must automatically generate weekly and monthly reports about compatibility data quality. These reports are sent to the Admin and Selected Employees.

### 11.3 Audit Log Depth
The audit log must track both:
- Every change made to compatibility data
- Every view of a compatibility record (for security and accountability)

The log must include who viewed or changed the record, when, and what was viewed or changed.
---

## 12. System Integration

### 12.1 Connection with Staff Permissions
The Compatibility Engine Admin panel must be directly connected to the main Staff Permissions system. When a new employee role is created in the staff panel, it must automatically appear as an available option in the Compatibility Engine permission settings.

### 12.2 Cross-Platform Impact of Penalties
Changes made in the Compatibility Engine (such as penalties or quality score drops) must automatically affect other areas of the platform under the following rules:

- If the issue is repeated more than 4 times → The penalty automatically affects the supplier’s ranking, payout speed, and marketplace visibility.
- If the supplier is new → The effect starts after 4 incidents.
- If the supplier is trusted or VIP → Staff must contact them first, and the effect starts after 5 incidents.
- If the supplier is marked as risky → The effect starts automatically after 3 incidents.

### 12.3 Connection with Vehicle History & Recall System
The Compatibility Engine must be connected to the Vehicle History system. When staff approve a compatibility correction, the system must check if the part was previously installed in any vehicle.

If a part was installed incorrectly, the system must automatically activate a **Recall Process** with the following rules:

- The supplier is required to initiate the recall.
- The supplier must cover the full cost of replacement.
- The supplier must send a formal apology to the affected clients.
- The recall process starts with VIP and trusted suppliers first, then extends to normal clients.
- If the mistake originated from the brand (and the supplier was only the middleman), the supplier can generate a full legal reimbursement letter with all costs and details to claim compensation from the brand.

**Recall Score Benefit**:  
Suppliers who complete recalls receive a **50% boost** in their trust records. Their recall performance is displayed as a visible score on their profile, which improves their reach, plan discounts, and overall ranking.

## 13. Automation & Smart Rules

### 13.1 Smart Automation Rules
The system must support “Smart Rules” that can take automatic action, including:

- Automatically pause a supplier’s parts if their Quality Score drops below a defined threshold.
- Automatically approve minor corrections from Trusted or VIP suppliers.

All smart rules must be visible to the Admin and Selected Employees and fully flexible for modification.

### 13.2 Custom Rule Creation
Admin and Selected Employees must be able to create fully custom automation rules. Examples include:
- “If a supplier receives 5 complaints in 7 days, automatically reduce their ranking by 20%.”
- “If a supplier’s Quality Score drops below 60, automatically send them a warning and pause new uploads for 48 hours.”

The system must follow the best proven automation practices used by major platforms and allow easy modification by the Admin.

### 13.3 Pattern Detection & AI Flagging
The system must use pattern detection and basic AI to flag suspicious activity, such as:

- A supplier uploading 1000 parts with almost identical compatibility data.
- Sudden unusual changes in upload behavior.

All flagged activities must be recorded and made visible to the Admin and Selected Employees for review and decision.

## 14. Data Management

### 14.1 Data Export
Admin and Senior Staff must be able to export compatibility data, including:

- All parts from one supplier
- All compatibility records for a specific vehicle
- The full audit log

### 14.2 Automatic Backup
The system must automatically back up all compatibility data every 24 hours (daily). Manual backup must also be available at any time.

### 14.3 Data Import
Staff must be able to import compatibility data from external files (CSV/Excel) directly through the admin panel, in addition to the normal supplier upload system.

## 15. Legal, Compliance & Security

### 15.1 Digital Confirmation for Changes
Some employee roles must require a digital signature or confirmation step before saving manual changes, for legal protection. The Admin can decide which roles require this step.

### 15.2 Legal Dispute Reports
In case of a legal dispute, the system must be able to automatically generate a full report containing:

- All compatibility data related to the part
- History of all changes made
- Staff actions and decisions
- Relevant legal information based on the client’s country

### 15.3 Access Security
- The Admin must have unrestricted access to the Compatibility Engine admin panel from any location.
- Selected Employees must use two-factor authentication (2FA) to access the panel.

## 16. Staff Training & Onboarding

### 16.1 Training & Exhibition Mode
The system must include a full **Training / Exhibition Mode** with the following features:

- New employees can practice all functionalities in a safe test environment disconnected from real private data.
- The mode can be used for training, education, and public exhibitions.
- Admin can create custom logins for trainers, teachers, or exhibition staff.
- Logins can be set with time expiration (e.g., 15-day training program that automatically deactivates).
- Logins can also be restricted to specific hours (e.g., exhibition mode active from 7 AM to 10 PM for 7 days).

### 16.2 Knowledge Base & Training Materials
The admin panel must include a **Knowledge Base** with common compatibility issues and solutions. 

Training materials must be:
- Automatically generated as PDF documents in multiple languages.
- Fully flexible — when the Admin or Selected Employees add new rules or systems, they are automatically added to the training materials with dates.
- Allow the Admin to select specific tasks and rules for a new employee and generate a personalized training manual.

The system should follow the best training structures used by major platforms (Amazon, Alibaba, Facebook, TikTok), including video tutorials, picture-based manuals, and live-updating documentation.

### 16.3 Staff Performance Tracking
The system must fully track staff performance in a flexible and automated way, visible only to the Admin and Selected Employees. This includes:

- Number of tasks resolved
- Average resolution time
- Number of correct vs. incorrect decisions
- Quality of decisions made

Performance data can be used for evaluations, promotions, and training improvements.
---

## 17. Advanced Analytics & Insights

### 17.1 Analytics Dashboard
The Admin dashboard must include advanced analytics for the Compatibility Engine, including:

- Vehicle models with the highest number of compatibility issues
- Suppliers causing the most problems over time
- Trends in Quality Score changes across the platform
- Full filtering and ranking systems
- Live comparison tools to benchmark any part or supplier against other platforms

### 17.2 Predictive System
The system must be able to predict future problems by analyzing Quality Score trends. When a supplier’s score is trending downward, the system must automatically flag it and create a task for a specific employee to review before the issue becomes critical.

### 17.3 Custom Reports
Admin and Selected Employees must be able to create custom reports and save them for regular use. These reports must include:

- Professional and legally standardized templates
- Automatic data population with each update
- Ability to assign reports to specific employees for review
- Automatic implementation of country-specific legal terms and tax information
- Options to send, print, or link reports directly

## 18. Supplier Appeal & Dispute Resolution

### 18.1 Appeal Rights by Supplier Type
Suppliers must have the right to appeal penalties or Quality Score reductions under the following rules:

- **New suppliers**: Allowed to appeal but receive lower priority. Staff must contact them up to 3 times.
- **VIP and Trusted suppliers**: Appeal is mandatory before any serious action that could affect their operations.
- **Risky suppliers**: Appeal is disabled until their performance numbers improve, after which the appeal option is reactivated.

### 18.2 Formal Dispute Resolution
A formal dispute resolution workflow must exist between suppliers and the platform when there is disagreement about compatibility data. This workflow must be visible and trackable.

### 18.3 Penalty Pause During Appeal
When a supplier submits an appeal, the system must automatically pause any further penalties until the appeal is reviewed and resolved.

## 19. API & External Access

### 19.1 Limited API Access
The system must offer a limited API for the Compatibility Engine so that selected partners and large suppliers can connect their own systems directly.

### 19.2 Temporary API Access
The Admin must be able to grant temporary API access to specific employees or external consultants for data analysis purposes.

### 19.3 API Permission Levels
Different levels of API access must be available:

- Read-only
- Read + Write
- Full Admin access

Access levels can be assigned and revoked by the Admin at any time.

## 20. Data Retention & Deletion

### 20.1 Retention Period
Compatibility history and audit logs must be kept for **1 year** by default. The Admin and Selected Employees must be able to modify this period at any time.

### 20.2 Automatic Data Deletion
Old compatibility data must be deleted automatically under the following rules:

- Standard deletion occurs after 4 months.
- If a supplier’s performance improves within 20 days of a score reduction, their data is gradually deleted (40% → 60% → 100%).
- VIP and Trusted suppliers can have their data deleted on the same day without affecting their operations.

The goal of this system is to give suppliers space to grow and recover from mistakes rather than permanently punishing them.

### 20.3 Account Closure
If a supplier account is permanently closed, all their compatibility data and history must be automatically deleted after 1 month.

## 21. Multi-Country & Governance

### 21.1 Country-Specific Rules
The Compatibility Engine must support country-specific rules. This includes different Quality Score thresholds, penalty structures, and appeal processes depending on the country of operation.

### 21.2 Governance Policies
The Admin must be able to create “Governance Policies” that apply differently depending on the country or region. These policies must be fully flexible and automated.

### 21.3 Global Override
A “Global Override” option must exist, allowing the Admin to apply one rule or change across all countries at once when needed.

## 22. Completion of Admin Rules File
The 
