# Technical Catalog & Visual Mapping Logic

## 1. Supplier Upload & "Mapping Memory"
*   **The Smart Importer:** The first time a supplier uploads an Excel/CSV, they must manually map their columns to Autopro's system. 
*   **Memory Rule:** The system MUST save this "Mapping Template" for each specific Supplier ID. All future uploads from that supplier are 100% automated.
*   **Auto-Correction:** The system must automatically fix minor spelling errors in category names (e.g., "Filtre" to "Oil Filter") based on the Translation Master Table.
*   **Supplier Correction Space:** Suppliers have a private "Draft Area" to manually fix categories or add extra vehicle fitment data if the automation misses a row.

## 2. Competition & Ranking Algorithm
*   **Identical Parts:** If multiple suppliers offer the same OEM number, the system will not show multiple separate listings.
*   **The Winner's Algorithm:** By default, the system shows one "Best Choice" based on:
    1.  **Trust Score** (Business Verification + Reviews).
    2.  **Price.**
    3.  **Delivery Speed/Location.**
*   **Client Filter:** The client can toggle this to see "All Offers" ranked by Price or Location if they choose.

## 3. The "Master Library" & Error Handling
*   **Master Image Library:** Autopro owns a high-quality "Master Gallery" of parts with white backgrounds. 
*   **Image Priority:** If a supplier's photo is low quality, the system prompts the supplier for a better image to increase sales. The professional Master Image is used as the primary display until a high-quality supplier photo is verified.
*   **Unknown OEM Numbers:** If a supplier uploads an OEM number not in the Master Library, the row is moved to a **"Pending Review"** folder for staff to verify before it goes live.

## 4. 3D & 7zap Navigation Logic
*   **Hybrid Navigation:** Clicking a "Pin" on the 3D car diagram triggers two actions:
    1.  A "Category Slide" appears on top (e.g., Brakes).
    2.  All parts linked to that specific 3D location are listed immediately.
*   **Facelift & Regional Precision:** The catalog must distinguish between Standard and Facelift parts. It must also identify regional variants (e.g., Extended Chinese Mercedes models vs. European models) to ensure 100% fitment.

## 5. Translation Master Table
*   **Internal Ownership:** Autopro maintains its own Master Translation Table (Arabic/French/English). This ensures that a search for "Filtre à huile" in Algeria and "Oil Filter" in Nigeria connects to the same database ID.
