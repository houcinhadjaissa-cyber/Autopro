# Compatibility Engine Specification

## 1. Search & Discovery Architecture (The "Funnel")
The system must support a multi-layered "Discovery Funnel" to ensure the user reaches the correct part with maximum precision.

### 1.1 Search Pathways
* **Pathway A: Visual Brand Browsing:** User selects via a visual hierarchy: `Brand Logo` $\rightarrow$ `Model Range` $\rightarrow$ `Generation/Phase` $\rightarrow$ `Year/Engine/Specs`.
* **Pathway B: The VIN Bypass:** A high-speed entry point where a user enters a VIN to instantly "lock" the vehicle profile and show all compatible parts/packages.
* **Pathway C: The "Package" Discovery:** Users can search for "Maintenance Routines" (e.g., "Full Service Kit for BMW E46") or "Mechanic Bundles" (Parts + Professional Installation).

### 1.2 Visual Experience (7zap/TecDoc Standard)
* **Image-Driven Selection:** Every selection step (Generation, Body Style, etc.) must be accompanied by high-quality, accurate technical imagery to prevent user error.
* **Regional Flagging:** To handle global variations, the system will display a regional flag (e.g., 🇪🇺 for European spec, 🇨🇳 for Chinese spec) to ensure the user knows they are looking at the correct regional version of a vehicle.

## 2. The Vehicle "DNA" (Identification Data)
To achieve "Zero-Error" matching, the system identifies a vehicle through a mandatory "DNA Profile":
* **Core Identifiers:** Make, Model, Generation/Phase, Year.
* **Technical Specs (The Precision Layer):** 
    * Engine Code & Displacement (e.g., 2.0L, N47).
    * Fuel Type (Petrol, Diesel, Electric, Hybrid).
    * Transmission Type (Manual, Automatic, DSG, etc.).
    * Drive Configuration (FWD, RWD, AWD/4x4).
    * Body Style (Sedan, SUV, Coupe, etc.).
* **Regional/Market Spec:** Country/Region of manufacture.

## 3. The Matching Engine (Logic & Certainty)
The engine uses a tiered logic to link a Part to a Vehicle.

### 3.1 Tiered Matching Logic
1. **Tier 1: VIN-Match (100% Certainty):** If a VIN is provided, the system uses the "VIN Guarantee" badge.
2. **Tier 2: OEM/Part Number Match:** Direct match of the Manufacturer Part Number.
3. **Tier 3: Attribute/Tecdoc Match:** Matching via technical attributes (e.g., "Brake Pad for BMW 3-Series 2015-2018").

### 3.2 Certainty Scoring & Warning System
The system must never "guess" silently. It must use a **Certainty Percentage**:
* **100% Certainty:** "Guaranteed Fit" (Only via VIN or perfect OEM match).
* **90-99% Certainty:** "Highly Recommended - Please Verify" (Requires user to check a specific detail, like engine code).
* **Strict Filtering Mode:** By default, the system **Hides** all non-compatible parts. It does **not** show "Does Not Fit" items unless the user specifically requests "Show all parts."

### 3.3 Aftermarket vs. OEM Distinction
The system must clearly label parts in search results:
* **OEM (Original Equipment Manufacturer):** The genuine part from the car brand.
* **Aftermarket (Premium):** High-quality third-party parts (e.g., Bosch, Brembo).
* **Aftermarket (Standard):** General third-party parts.

## 4. Supplier Data & Integration (The "TecDoc-Ready" Bridge)
To allow for massive scale and future automation, the supplier upload system must follow a strict schema.

### 4.1 Data Ingestion
* **Bulk Import:** Support for CSV, XML, and Excel.
* **Critical Mapping Fields:** Every upload must map to: `Manufacturer Part Number`, `OEM Number`, `GTIN/Barcode`, `Brand`, and `Compatibility Array` (The list of vehicles the part fits).
* **Universal Flag:** Suppliers can mark a part as "Universal," making it available across all vehicle searches.

### 4.2 The "Warning" Protocol
If a supplier enters an OEM number that is a "near-match" but not perfect, the system will:
1. Show the part.
2. Display a: **"Potential Match: Please confirm with supplier via message before ordering."**

## 5. The Social-Commerce Feedback Loop (The "Success Tracker")
This is a unique Autopro feature to build massive marketplace trust.

### 5.1 The Installation Counter
Every part profile will feature a **"Verified Fitment Counter"**: *"This part has been successfully installed in [X] vehicles."*

### 5.2 The Fitment Proof List
When a user clicks the counter, they see a transparent, ranked list of successful installations:
* **Ranked List:** Organized by most recent or most frequent.
* **Details:** Shows the specific Make, Model, Year, and Engine of the cars that used that part successfully.
* **Data Source:** This data is automatically generated when a "Part Installation" is confirmed in the Vehicle History.

## 6. Responsibility & Liability Matrix
* **Supplier Error:** If the part doesn't fit due to incorrect supplier data $\rightarrow$ **Supplier Responsibility.**
* **User Error:** If the part doesn't fit because the user selected the wrong car $\rightarrow$ **User Responsibility.**
* **System Error:** If the Compatibility Engine provides a false "100% Guarantee" $\rightarrow$ **Autopro Responsibility.**
