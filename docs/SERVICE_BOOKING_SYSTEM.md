# Service Booking System Requirements

## 1. Booking Workflow
*   **New/Standard Clients:** Send a "Service Request." Users select categories (Maintenance, Gearbox, Body Work, etc.), add notes, and can attach photos or videos of the problem.
*   **Trusted/VIP Clients:** Can book "Direct Appointments" by choosing available time slots from the provider's live calendar.
*   **Multi-Selection:** Users can check multiple service boxes in one request.

## 2. Vehicle & History Integration
*   **Auto-Sync:** The specific vehicle (Model, Year, Engine, Version) is automatically attached to the booking. 
*   **History Privacy:** The car's service history is only shared with the provider if the client manually checks a box to allow it.

## 3. Financial & Legal Logic
*   **Digital Quotes:** For complex repairs, providers must send a Digital Quote (Parts + Labor). Work cannot begin until the client clicks "Accept."
*   **Examination Fees:** Rules for diagnosis fees follow the `PAYMENTS_REFUNDS_RETURNS.md` standards (Online or Cash depending on provider settings).
*   **Proof of Work:** Providers can upload photos/videos of completed work to the conversation for client confirmation.

## 4. Emergency & Mobile Services
*   **One-Click Emergency:** Dedicated "Emergency/Roadside" button for Towing or Battery Jumps.
*   **GPS Sharing:** Once the client confirms the towing service, their live GPS location is shared with the provider.
---

## 1. Booking Types & Access

### 1.1 Supported Booking Types
The system must support the following types of service bookings:

- Standard Booking (Request & Confirm)
- Direct Appointment (Live calendar booking)
- Emergency / Roadside Assistance
- Recurring Maintenance
- Multi-Vehicle Booking

All features and options should follow the best proven practices from leading service booking platforms.

### 1.2 Client-Type Based Flows
The system must support different booking flows based on client type:

- Normal clients send service requests that require provider confirmation.
- Trusted and VIP clients can book directly from the provider’s live calendar.

### 1.3 Provider Availability Rules
Service providers must be able to set different availability rules depending on client type. For example, VIP clients can see more time slots or have priority access compared to normal clients.

## 2. Service Request Process

### 2.1 Required Information
When creating a service request, clients must provide:

- Service category
- Problem description
- Photos or videos of the issue
- Preferred date and time
- Vehicle selection

The system must follow the best features and methods used by leading platforms.

### 2.2 Multi-Service Selection
Clients must be able to select multiple services in a single booking request. This is mandatory.

### 2.3 Related Service Suggestions
The system must automatically suggest related or complementary services when a client selects a main service. The suggestions should follow the best proven features from leading platforms.

## 3. Vehicle & History Integration

### 3.1 Vehicle Selection
- If the client has only one vehicle, it should be automatically attached to the booking.
- If the client has multiple vehicles, they must select the vehicle manually.
- Clients must be able to access a service provider or shop directly from their vehicle’s page in the garage.

### 3.2 Vehicle History Sharing
The client’s vehicle history must **not** be shared automatically. The client must manually approve sharing their service history with the provider.

### 3.3 Additional Vehicle Information
Service providers must be able to request specific vehicle information (such as current mileage or last service date) before confirming the booking when needed.

## 4. Provider Side Workflow

### 4.1 Request Handling
After a client sends a service request, the provider must receive a notification and be able to accept or reject the request.

### 4.2 Digital Quote Process
The quoting process depends on two scenarios:

**Scenario A – Unknown Problem (Examination Required)**
- The examination fee is presented first.
- The final repair bill is built after the examination results.
- The quote must include parts, labor, estimated time, warranty, and terms.

**Scenario B – Regular Maintenance**
- The provider sends a complete bill including parts and labor.
- The client must approve the bill before the appointment can be scheduled.
- If extra repairs are discovered during service, the provider can send an updated invoice for the client to accept or reject.

### 4.3 Quote Acceptance
- If an examination is required, the client does **not** need to accept a quote before scheduling.
- If the service is regular maintenance, the client must approve the bill before the appointment can be scheduled.

## 5. Emergency & Special Services

### 5.1 Emergency Service Flow
The Emergency/Roadside service must follow these rules:

- VIP and Trusted clients can request with one click if they have used the service before.
- New clients see a map view showing the nearest available trucks with profile pictures.
- The client selects the destination (home, shop, etc.).
- Selecting a truck shows details: name, experience, verified status, distance, and approximate price range (calculated per kilometer).
- The client can send a request to multiple trucks.
- The driver must accept the request.
- After driver acceptance, the client approves the arrival, which automatically shares their phone number.
- The driver can then contact the client directly.
- Payment method (cash or card) must be confirmed by both parties at the time of the initial request.

The system must include the best proven features from leading roadside assistance platforms.

### 5.2 Location Sharing
Once an emergency service is confirmed, the provider must receive the client’s live GPS location, pickup address, and drop-off address (as selected by the client).

### 5.3 Emergency Service Rules
Emergency services must follow different rules compared to normal bookings, including:

- Faster response time expectations
- Different cancellation policy
- Priority matching in the system
---

## 6. Appointment Confirmation & Scheduling

### 6.1 Scheduling Process
Once a client accepts a quote or the examination is completed, the scheduling process works as follows:

- The system first automatically suggests available time slots to the provider.
- The provider can adjust or modify the suggested slots.
- The final available slots are then sent to the client to choose from.

### 6.2 Specific Time Requests
Only VIP, Trusted, and elderly clients can request a specific time. The provider can accept, reject, or propose an alternative time.

### 6.3 Buffer Time
The system must support buffer time between appointments (e.g., 30 minutes) for cleaning, preparation, or rest.

## 7. Cancellation, Rescheduling & No-Show Rules

### 7.1 Cancellation Policy
- If the client cancels before the appointment, no penalty applies. The provider can choose to accept or reject an instant reschedule.
- If the provider cancels before the due date, the client can reschedule (except for risky providers).
- Emergency services follow stricter cancellation rules than normal services.

### 7.2 No-Show Rules
- **Client No-Show**: New clients receive a warning. VIP, Trusted, and elderly clients are contacted by staff if repeated. Repeated no-shows by new clients limit their access to VIP and Trusted providers.
- **Provider No-Show**: The client can choose another provider or reschedule. New providers receive warnings and reduced reach. VIP and Trusted providers are contacted by staff before any penalty.

### 7.3 Rescheduling Limits
- If the provider is at fault: New clients get 2 reschedules, VIP/Trusted get 5 reschedules.
- If the client is at fault: New clients can only reschedule if the provider accepts. VIP/Trusted clients get 5 reschedule chances.

## 8. Service Execution & Proof of Work

### 8.1 Required Proof
During service, providers must upload:
- Diagnostic reports
- Updated results of the work performed

Photos and videos are optional unless specifically requested. The system must track the full parts journey (from ordering to installation) and send automatic updates to the client at each stage.

### 8.2 Live Updates
Clients must be able to request live updates or photos during the service.

### 8.3 Service Status Updates
The system must require providers to mark services as “In Progress” and “Completed” with timestamps. These updates are automatically sent to the client.

## 9. Client Confirmation & Quality Control

### 9.1 Service Completion Confirmation
After the service is marked complete, confirmation is required from both sides before payment is released, except in the following cases:

- When both the client and provider are VIP/Trusted, only the provider’s confirmation is needed.
- New or risky clients and providers require confirmation from both sides.
- Examination fees must be paid after the examination is completed. The client can either add it to the final bill or pay it separately.
- If the client rejects the repair offer after examination, they must still pay the examination fee before taking the car.
- Providers can offer discounts or free examinations to selected clients (VIP, Trusted, or custom groups).

### 9.2 Service Rejection
Clients can reject the service if they are not satisfied. Rejection can happen:

- Before the service begins (after seeing the quote or examination results)
- After the service is completed (if the work is unsatisfactory)

In both cases, a clear dispute or resolution process must be followed.

### 9.3 Rating & Review System
There must be a dedicated rating and review system for services. Reviews and ratings must directly affect the service provider’s overall rating and visibility on the platform.

## 10. Payment During Service

### 10.1 Payment Timing
Payment for services is collected after the service is completed as the standard rule. However, the exact timing can vary based on the service provider’s settings and the laws of the country.

### 10.2 Split Payment
The system must support splitting payment between parts and labor. For example, clients can pay for parts upfront and labor after the service is completed.
