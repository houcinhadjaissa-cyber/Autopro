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
