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
