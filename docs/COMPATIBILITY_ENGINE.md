# Compatibility Engine Specification

## 1. Search & Discovery Architecture (The "Funnel")
The system must support a multi-layered "Discovery Funnel" to ensure the user reaches the correct part with maximum precision.

### 1.1 Search Pathways
* **Pathway A: Visual Brand Browsing:** User selects via a visual hierarchy: `Brand Logo` → `Model Range` → `Generation/Phase` → `Year/Engine/Specs`.
* **Pathway B: The VIN Bypass:** A high-speed entry point where a user enters a VIN to instantly "lock" the vehicle profile and show all compatible parts/packages.
* **Pathway C: The "Package" Discovery:** Users can search for "Maintenance Routines" or "Mechanic Bundles" (Parts + Professional Installation).

### 1.2 Visual Experience (7zap/TecDoc Standard)
* **Image-Driven Selection:** Every selection step must be accompanied by high-quality technical imagery.
* **Regional Flagging:** The system displays regional flags (e.g., 🇪🇺 European, 🇨🇳 Chinese, 🇦🇪 Middle East) to show the correct regional version of the vehicle.

## 2. The Vehicle "DNA" (Identification Data)
To achieve zero-error matching, the system identifies a vehicle through a mandatory "DNA Profile":
* **Core Identifiers:** Make, Model, Generation/Phase, Year.
* **Technical Specs:** Engine Code & Displacement, Fuel Type, Transmission Type, Drive Configuration, Body Style.
* **Regional/Market Spec:** Country or Region of manufacture.

## 3. The Matching Engine (Logic & Certainty)
### 3.1 Tiered Matching Logic
1. **Tier 1: VIN-Match (100% Certainty)**
2. **Tier 2: OEM/Part Number Match**
3. **Tier 3: Attribute/TecDoc Match**

### 3.2 Certainty Scoring & Warning System
The system uses a **Certainty Percentage**:
* **100% Certainty:** "Guaranteed Fit"
* **90-99% Certainty:** "Highly Recommended – Please Verify"
* **Strict Filtering:** By default, the system hides all non-compatible parts.

### 3.3 Aftermarket vs. OEM Distinction
Parts are clearly labeled as:
* **OEM (Original Equipment Manufacturer)**
* **Aftermarket (Premium)**
* **Aftermarket (Standard)**

## 4. Supplier Data & Integration (TecDoc-Ready Bridge)
### 4.1 Data Ingestion
* Bulk import support for CSV, XML, and Excel.
* Required fields: Manufacturer Part Number, OEM Number, GTIN/Barcode, Brand, Compatibility Array.
* Suppliers can mark parts as "Universal."

### 4.2 The "Warning" Protocol
If an OEM number is a near-match, the system shows the part with this message:  
**"Potential Match: Please confirm with supplier via message before ordering."**

## 5. The Social-Commerce Feedback Loop (Success Tracker)
### 5.1 The Installation Counter
Every part shows a **"Verified Fitment Counter"**: *"This part has been successfully installed in [X] vehicles."*

### 5.2 The Fitment Proof List
Clicking the counter expands a ranked list showing:
* Make, Model, Year, Engine Type, and Version (European, Chinese, Middle East, etc.).
* Data is automatically generated when a part installation is confirmed in the Vehicle History.

## 6. Responsibility & Liability Matrix
* **Supplier Error** → Supplier Responsibility
* **User Error** (wrong car selected) → User Responsibility
* **System Error** (false 100% guarantee) → Autopro Responsibility

## 7. Part Profile Requirements
Every part must contain the following data fields:
* Weight, Dimensions, Brand, OEM Number, Aftermarket Number, Condition (New/Used/Reconditioned).
* Shipping eligibility (shows whether the part can be shipped to the user’s location).
* When the shipping icon is clicked, it expands to show: available shipping companies, methods, price, and estimated duration (example: 7–15 business days).
* Additional best-practice fields: Stock level, Warranty duration, Supplier rating, Return policy, Multiple images, Product video, and 3D view (when available).

## 8. Compatibility List Display
When a part fits multiple vehicles:
* A selectable section labeled **"Cars that fit"** is shown.
* When clicked, it expands into a full list of compatible vehicles including: Brand, Model, Year, Engine Type, and Version (European, Chinese, Middle East, etc.).
* The list is ranked by popularity (most installed vehicles first).

## 9. Maintenance Package Logic
* A package is a group of existing parts linked together under a new **Package ID**.
* The supplier or service provider sets the package price.
* The system must clearly show: Original total price, Discounted package price, and whether installation is included or free.
* The creator has full flexibility to configure discounts and add-ons.
* In the creator’s dashboard, sales must be tracked separately: Package sales vs. individual part sales.

## 10. Search Algorithm Rules
### 10.1 Initial Results Without Vehicle Selection
* The system shows a maximum of **3 results per vehicle type** before prompting the user to select a specific vehicle.
* Once a vehicle is selected, results become clear, sophisticated, and easy to navigate with direct "Add to Cart" functionality.

### 10.2 Wildcard / Brand Search
* When a user types a partial name (e.g., "Bosch Brake"), the system shows all matching parts in the brake category.
* Under the results, a dedicated **"Bosch Catalog"** section appears (limited to 4–5 parts) with the brand logo. Clicking the logo opens the full brand profile.
* Below that, 2–3 additional sections for competitive brands offering similar parts are displayed.

### 10.3 Compatibility Groups
* The system uses **Engine Family** grouping (TecDoc-compatible) to speed up matching.

## 11. Match Score Display
When showing a part with less than 100% certainty:
* The system displays a ranked list of attributes in this order:
  * Green (Matching): Brand, Model, Engine Type, Year, etc.
  * Red (Not Matching): Any mismatched attributes.
* The percentage directly controls result ranking — higher certainty parts appear first.

## 12. Compare Feature
* Users can select 2–3 parts and compare them side-by-side.
* The comparison table includes: Price, Location, Shipping cost, Total cost (Part + Shipping), and Compatibility with the user’s specific car.
* Advanced comparison options:
  * Full engine build comparison (effect and performance results).
  * ECU and ECM tuning comparisons (including software updates, modifications, and retractions).
  * Tuning parts by company.
* This feature is available to all users: Clients, Influencers, Suppliers, and Service Providers.

## 13. "Add to Garage" & Saved Items System
* A **"Save to Garage"** button exists on every part, service, post, and package.
* Saved items open a dedicated full page similar to Facebook/Instagram/TikTok/Amazon saved sections.
* Organization features:
  * Save per category.
  * Save per specific vehicle in the user’s garage.
  * Save entire engine builds.
  * Save packages and projects.
* Mechanic shop integration: When an employee adds a booking, a project automatically opens or logs into an existing one. The algorithm detects the vehicle and shows only compatible parts in that project tab.
* Saved items are ranked newest to oldest, with filters and a search bar.
* Additional best-practice features: Price drop alerts, "Restock when available" notifications, folders/tags, and sharing options.

## 14. Zero Results Error Handling
When no matches are found:
* The system displays a helpful message.
* It automatically shows the vehicle selection/search bar again so the user can adjust their filters immediately.
---

## 15. Edge Cases & Advanced Rules

### 15.1 Rare & Special Vehicles
* The system must support rare vehicles (limited edition, old models, commercial vehicles, heavy-duty trucks).
* When a vehicle has very few or no parts listed, the system should automatically suggest similar compatible models with a clear message: “No exact matches found. Here are similar vehicles that use the same parts.”

### 15.2 Conflicting or Missing Data
* If two suppliers list different compatibility for the same part, the system flags it for staff review.
* If a part has no compatibility data at all, it is hidden from vehicle-specific searches but remains visible in the supplier’s catalog with a warning label: “Compatibility data missing – Contact supplier.”

### 15.3 Performance Requirements
* Search results must load in under 2 seconds even with 50,000+ parts.
* The system must support caching of popular vehicle searches.
* Heavy filtering (by price, brand, shipping speed) must not slow down the page.

### 15.4 Admin & Staff Controls
* Authorized staff must be able to manually correct compatibility data.
* Staff can override supplier data when proof is provided.
* All manual changes must be logged with date, staff name, and reason.

### 15.5 Integration with Other Systems
* When a part is successfully installed, it must automatically update:
  - The vehicle’s history
  - The part’s “Verified Fitment Counter”
  - The supplier’s performance score
* The engine must work with the Saved Items / Garage system and the Compare feature.

### 15.6 Future TecDoc Integration
* The current structure is built to accept TecDoc data without major changes.
* When the TecDoc API is connected, the system should automatically enrich existing parts with official data while keeping manual entries as fallback.
