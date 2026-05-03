# Compatibility Engine Specification

## 1. Overview & Purpose
The Compatibility Engine is the core intelligence of Autopro. It ensures that clients only see parts that actually fit their vehicle, while giving suppliers, service providers, and the platform full control over data quality, ranking, and monetization. The engine must be built with a TecDoc-compatible structure from day one so that future integration with external catalogs is seamless.

## 2. Search & Discovery Architecture

### 2.1 Search Pathways
- **Visual Brand Browsing**: Brand Logo → Model Range → Generation/Phase → Year/Engine/Specs.
- **VIN Bypass**: Users can enter a VIN for instant vehicle locking and 100% fitment results.
- **Package Discovery**: Users can search for maintenance routines or mechanic bundles (parts + installation).

### 2.2 Visual & Regional Experience
- Every selection step must include high-quality technical images.
- Regional flags (European, Chinese, Middle East, etc.) must be displayed to ensure users select the correct vehicle variant.

## 3. Vehicle Identification ("DNA Profile")
The system identifies vehicles through:
- Core identifiers: Make, Model, Generation/Phase, Year.
- Technical specifications: Engine code, displacement, fuel type, transmission, drive configuration, body style.
- Regional/market specification.

## 4. Matching Engine & Certainty System

### 4.1 Tiered Matching Logic
1. VIN Match (100% certainty)
2. OEM / Manufacturer Part Number Match
3. Attribute / TecDoc-style matching

### 4.2 Certainty Scoring
- 100% = Guaranteed Fit
- 90-99% = Highly Recommended – Please Verify
- The system uses strict filtering by default and hides non-compatible parts unless the user chooses to see all results.

### 4.3 Aftermarket vs OEM Labeling
Parts must be clearly labeled as:
- OEM (Original Equipment Manufacturer)
- Aftermarket (Premium)
- Aftermarket (Standard)

## 5. Part Profile Requirements
Every part must contain:
- Weight, dimensions, brand, OEM number, aftermarket number, condition.
- Shipping eligibility with expandable details (companies, price, duration).
- Stock level, warranty, supplier rating, return policy, multiple images, and video support.
- "Verified Fitment Counter" showing how many successful installations have occurred.

## 6. Compatibility List & Social Proof
- A selectable section labeled **"Cars that fit"** expands into a ranked list showing Make, Model, Year, Engine, and Version (European, Chinese, Middle East, etc.).
- The list is automatically updated when installations are confirmed in the Vehicle History.

## 7. Maintenance Packages & Bundles
- Packages are groups of parts with a new Package ID.
- Suppliers can set custom pricing, discounts, and free installation options.
- Sales tracking in the supplier dashboard must separate package sales from individual part sales.
- Suppliers can create bundles that are automatically suggested as complementary items.

## 8. Search Algorithm & Result Presentation

### 8.1 Initial Results Without Vehicle
- Maximum 3 results per vehicle type before forcing vehicle selection.
- Results must be sophisticated, easy to navigate, and include direct "Add to Cart" functionality.

### 8.2 Brand & Wildcard Search
- Partial searches (e.g., "Bosch Brake") show relevant parts.
- A dedicated "Bosch Catalog" section appears with the brand logo and 4–5 parts.
- 2–3 competitive brand sections are shown underneath.

### 8.3 Result Sections
Results are organized into clear sections:
- Budget Parts
- Quality Parts
- High-End Parts
- Performance Parts

## 9. Match Score Display
When certainty is below 100%, the system shows a ranked list of attributes:
- Green = Matching (Brand, Model, Engine, Year, etc.)
- Red = Not Matching
- Higher certainty parts are ranked first in results.

## 10. Compare Feature
- Users can compare 2–3 parts side-by-side including price, shipping, and total cost.
- Advanced comparison includes engine builds, ECU/ECM tuning, software updates, and tuning parts by company.
- This feature is available to all user types.

## 11. Saved Items & Garage System
- A "Save to Garage" button exists on all parts, services, packages, and posts.
- Saved items are organized by category, per vehicle, per project, and per engine build.
- Mechanic shops can create projects that automatically filter results to the specific vehicle.
- Features include price drop alerts, restock notifications, folders, tags, search, and sharing.

## 12. Supplier Data Upload & Validation

### 12.1 Bulk Upload Rules
- The system accepts CSV, XML, and Excel uploads.
- All required fields (OEM number, compatibility list, images, etc.) are validated.
- Missing data does not block the upload. Parts with missing information are filtered into a separate list for the supplier to complete later.

### 12.2 Duplicate Handling
- All suppliers can appear in results.
- Ranking is determined by: Supplier trust/VIP status, successful installations, client reviews, cost-effectiveness, shipping speed, and risk level.

## 13. TecDoc & External Database Integration
- The system is built to be fully TecDoc-compatible.
- TecDoc acts as a reference catalog. Autopro connects suppliers to it and displays TecDoc details + supplier options underneath.
- Data refresh occurs every 2 days, with manual refresh available to Admin and selected employees.
- In case of conflict, TecDoc data takes priority by default (Admin and selected employees can override).

## 14. User Type Personalization
The engine shows different results based on user type:
- Normal clients: Best price + fastest shipping
- Mechanics/Service Providers: Bulk pricing + installation-friendly parts
- Suppliers: Own parts ranked higher + competitor analysis
- Influencers: Visually appealing and trending parts

## 15. Discontinued & End-of-Life Parts
Discontinued parts are hidden by default but can be shown if the user enables the "Discontinued" filter.

## 16. Complementary Parts & Recommendations
- The system automatically suggests complementary parts (brake discs, fluid, sensors, etc.).
- Suggestions prioritize the same supplier/brand first, then show other suppliers for comparison.
- Service packages and installation options (including nearest mechanic shops) are also suggested.

## 17. Error Reporting & Quality Control

### 17.1 User Reports
Users can report "This part does not fit my car".  
Reports are filtered by user type to reduce fraud and converted into staff tasks.

### 17.2 Compatibility Quality Score
A hidden score (visible only to Admin and selected employees) tracks returns, complaints, successful installations, and reports.  
This score affects supplier ranking and visibility. Service providers can also benefit when linking parts to their posts or shops.

### 17.3 Consequences for Poor Data
Suppliers who repeatedly upload low-quality compatibility data receive:
- Automated warnings
- Temporary suspension from compatibility results
- Ranking penalties
- Possible account review

## 18. Staff & Admin Controls
- Only Admin and selected employees can manually override compatibility data.
- Trusted/VIP suppliers can request staff assistance.
- All manual changes are logged with who changed it, when, and why.

## 19. Future Scalability & Monetization

### 19.1 Sponsored Compatibility
The system supports sponsored placements where brands can pay to appear higher in compatibility results.

### 19.2 B2B & Fleet Support
Large customers can upload their entire vehicle list (50+ cars) and receive custom compatibility results and fleet pricing.

### 19.3 Compatibility-Based Promotions
The system supports automatic promotions such as “Buy this part and get 15% off all compatible parts for your vehicle.” Suppliers can enable or disable this when creating packages.

## 20. Performance Requirements
- Search results must load in under 2 seconds.
- The system must support caching of popular searches.
- Heavy filtering must not degrade performance.

## 21. Responsibility Matrix
- Supplier provides wrong data → Supplier responsibility
- User selects wrong vehicle → User responsibility
- System gives false 100% guarantee → Autopro responsibility

## 22. Zero Results Handling
When no matches are found, the system shows a helpful message and automatically displays the vehicle selection/search bar again.
