# Compatibility Engine Requirements

## 1. Filter & Ranking Logic
*   **Strict Filtering:** When a vehicle is selected, the system must HIDE all non-compatible parts. Users only see what fits.
*   **Smart Ranking:** Results must be ranked by:
    1.  Price (Lowest to Highest).
    2.  Proximity (Closest supplier location first).
*   **User Control:** Clients must have a filter to toggle how these results are ranked.

## 2. Part-to-Vehicle Mapping
*   **Dual Matching:** The system matches parts using:
    1.  **OEM Number:** (Primary) The Original Equipment Manufacturer number.
    2.  **Compatibility Mapping:** (Secondary) Manual or bulk-imported links (Part A fits Vehicle X).
*   **Universal Parts:** Items marked as "Universal" (bulbs, fluids, tools) appear for all vehicles. Suppliers must check a "Universal" box during product upload.

## 3. High-Precision Matching (The Facelift Rule)
*   **Mandatory Facelift Detection:** The engine must distinguish between Standard and Facelift models (e.g., W211 vs W211 Facelift). 
*   **Regional Variants:** The system must account for regional differences (e.g., European E-Class vs. Chinese Extended E-Class) for body, interior, and engine parts.
*   **Validation:** If the system is not 100% sure, it must prompt the user: "Check with VIN" to ensure a 100% fitment guarantee.

## 4. Automation & Maintenance
*   **Project Reusability:** This logic must be flexible for the owner to update or for selected employees to manage fitment data manually when needed.
