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
---

## 37. Matching Logic & Search Experience (Researched Implementation)

### 37.1 Matching Priority System
The Compatibility Engine follows this strict priority order, based on how professional platforms like TecDoc and 7zap operate:

1. **VIN Match** (Highest priority – 100% certainty)
2. **OEM Number Match** (Direct manufacturer part number)
3. **Technical Attribute Match** (Engine code, fuel type, transmission, body style, drive type)
4. **Manual / Bulk Mapping** (Supplier-uploaded compatibility)
5. **Fuzzy / Near Match** (Lowest priority)

### 37.2 Near Match & Percentage Ranking
When a part does not have a 100% match, the system must clearly display the match percentage. Results are ranked from highest to lowest:

- 100% Match → “Guaranteed Fit”
- 95–99% Match → “Highly Recommended – Minor verification needed”
- 90–94% Match → “Good Match – Please verify specifications”
- Below 90% → Shown only if user enables “Show near matches”

Each result must clearly show the matching attributes in green and non-matching attributes in red, ranked from most important to least important.

### 37.3 OEM vs Aftermarket Distinction
Following best practices from Alibaba, Amazon, and eBay:

- **OEM (Original Equipment Manufacturer)**: Marked with the car brand logo and labeled “Genuine”.
- **Aftermarket Premium**: Labeled “Premium” (e.g., Bosch, Brembo, Mann-Filter).
- **Aftermarket Standard**: Labeled “Standard”.

The system must allow filtering by these three categories.

### 37.4 “Cars that fit” Feature
When a user clicks on a part, the system must show a section labeled **“Cars that fit”**. This section displays:

- Brand, Model, Year, Engine, and Version (European, Chinese, Middle East, etc.)
- Ranked by number of successful installations (most installed vehicles appear first)
- Each vehicle entry shows the match percentage

This feature is inspired by 7zap and TecDoc’s vehicle compatibility view.

### 37.5 Search Flexibility
The search engine must support multiple search methods:

- Visual browsing (Brand → Model → Generation → Year)
- VIN search
- Part number search (OEM, Aftermarket, Barcode)
- Category browsing
- Keyword search with fuzzy matching

The system must return relevant results regardless of how the user searches, following the flexible search experience of Alibaba and Amazon.

### 37.6 Real-time TecDoc Integration
The engine connects to TecDoc only when needed (for example, when a client selects a vehicle and searches for parts). When connected, the system displays:

- Official TecDoc images and specifications
- All matching parts from Autopro suppliers underneath
- Clear separation between TecDoc reference data and supplier listings

This approach ensures legal compliance while giving users a full TecDoc-like experience.
---

## 38. Data Model & Storage Structure (Researched Implementation)

### 38.1 Core Data Entities
Based on industry standards used by TecDoc, 7zap, and major automotive databases, the Compatibility Engine must include the following core entities:

- **Vehicle Master Data**: Make, Model, Generation, Phase/Facelift, Year, Body Type, Engine Code, Fuel Type, Transmission, Drive Type, Market/Region.
- **Part Master Data**: Part ID, Manufacturer Part Number (OEM), Aftermarket Number, Brand, Category, Sub-category, Dimensions, Weight, GTIN/Barcode.
- **Compatibility Relationship**: Links between Vehicle and Part, including Match Type (Exact, Near, Universal), Match Percentage, and Source (TecDoc, Manual, Supplier).
- **Regional Variant**: Handles differences between European, Chinese, Middle East, North American, and other market versions of the same vehicle.
- **OEM & Cross-Reference Table**: Stores multiple OEM numbers and their relationships.
- **Media & Documentation**: Links to images, PDFs, installation guides, and 3D models.

### 38.2 Database Architecture Recommendation
After analyzing TecDoc’s structure and how large platforms (Alibaba, Amazon Automotive, eBay Motors) handle millions of compatibility records, the recommended approach is a **hybrid model**:

- **Relational Database** (PostgreSQL or MySQL) for core entities (Vehicles, Parts, Suppliers, Orders).
- **Graph Database** (Neo4j or similar) for compatibility relationships. This allows fast traversal when finding all vehicles that fit a specific part or all parts that fit a specific vehicle.
- **Search Engine** (Elasticsearch or similar) for fast, flexible searching across part numbers, vehicle attributes, and keywords.

This hybrid structure is currently used by several high-performance automotive platforms to balance speed, flexibility, and data integrity.

### 38.3 How to Store Compatibility Data
For parts that fit hundreds or thousands of vehicles, the system should **not** create one record per vehicle. Instead:

- Each Part has a **Compatibility Array** stored as a reference to Vehicle IDs or grouped by Vehicle Family.
- Vehicles are grouped logically (e.g., BMW 3 Series E90/E91/E92/E93 share many parts).
- Regional variants and facelifts are stored as separate but linked records.

This structure follows TecDoc’s KType and Article Number system while remaining flexible for manual updates.

### 38.4 Data Normalization vs Performance
- Core data (Vehicles, Parts, Brands) should be normalized to avoid duplication.
- Compatibility relationships can be partially denormalized (storing key attributes like Engine Code directly in the relationship table) to improve read performance during searches.
- This approach is commonly used in large automotive databases to handle both high accuracy and fast response times.

### 38.5 Versioning & History
Every compatibility record must include:
- Creation date
- Last modified date
- Source of the data (TecDoc, Supplier Upload, Manual Entry, Admin Override)
- Version history for audit and rollback purposes

This is essential for platforms that need to track changes over time, especially when dealing with manufacturers and large suppliers.

### 38.6 Scalability Considerations
The data model must support:
- Millions of parts
- Hundreds of thousands of vehicles
- Multiple countries and regional variants
- Real-time and batch updates from suppliers

The recommended structure allows the system to scale while remaining maintainable by a small team.

### 38.7 Future-Proofing
The data model is designed to eventually support advanced use cases such as:
- Full vehicle development and testing data
- Integration with OBD/diagnostic tools
- AI-based predictive maintenance
- Manufacturer and supplier collaboration portals

This ensures the system can grow from a simple parts marketplace into a full automotive ecosystem platform.
---

## 39. OBD / Diagnostic Integration & Vehicle Development Tools (Researched Implementation)

### 39.1 OBD & Diagnostic Device Support
The Compatibility Engine must support integration with major OBD (On-Board Diagnostics) devices and diagnostic tools used across different regions. This includes, but is not limited to:

- **Europe**: Bosch, Delphi, Autel, Launch, Texa, and manufacturer-specific tools (e.g., BMW ISTA, Mercedes Xentry, VAG ODIS).
- **China**: Launch, Autel, Thinkcar, and various local diagnostic tools widely used in the Chinese market.
- **United States**: Snap-on, Autel, Launch, and J2534-compliant devices.
- **Africa & Emerging Markets**: Support for affordable and commonly used devices such as ELM327-based tools and mid-range professional scanners.

The system must be fully flexible and automated to integrate new diagnostic devices and protocols as they become available.

### 39.2 Real-Time Diagnostic Data Usage
When a compatible OBD device is connected, the system should be able to:

- Read vehicle identification data (VIN, ECU information, engine code).
- Automatically suggest the correct vehicle profile in the Compatibility Engine.
- Pull live diagnostic trouble codes (DTCs) and translate them into human-readable explanations.
- Recommend compatible parts based on the detected issues.

This feature bridges the gap between diagnostics and parts ordering.

### 39.3 Vehicle Development & Testing Support
The Compatibility Engine is designed to eventually support the full vehicle development lifecycle. This includes features used by car manufacturers, parts suppliers, and engineering teams during:

- Vehicle research and development
- Prototype testing
- Homologation and certification
- Production line quality control
- Aftersales and warranty analysis

The system must be capable of storing and managing advanced technical data such as:
- ECU software versions and calibration data
- Wiring diagrams and pinouts
- Component specifications and tolerances
- Test results and validation reports

### 39.4 Security & Data Protection Standards
To support professional automotive development use, the system must implement security standards currently used by major manufacturers, including:

- Role-based access control with granular permissions
- End-to-end encryption for sensitive development data
- Audit logging of all data access and modifications
- Secure data sharing between manufacturers, suppliers, and engineering teams
- Compliance with automotive cybersecurity standards (ISO/SAE 21434 where applicable)

Only the Admin and Selected Employees should have full access to development and testing databases. All other users (suppliers, service providers, clients) should have restricted access based on their role.

### 39.5 Future Integration Roadmap
The OBD and development tools module should be built with future expansion in mind, including:

- AI-based fault prediction using diagnostic data
- Augmented Reality (AR) repair guides connected to live diagnostic results
- Integration with manufacturer diagnostic portals
- Support for electric vehicle (EV) and battery management system diagnostics
- Predictive maintenance recommendations based on real vehicle data

### 39.6 Implementation Priority
For day one, the system should support basic OBD reading and automatic vehicle identification. Advanced development and testing features can be rolled out in phases as the platform matures and partnerships with manufacturers or diagnostic tool companies are established.
---

## 40. Advanced Search & User Experience Features (Researched Implementation)

### 40.1 Multi-Mode Search Experience
The Compatibility Engine must support multiple search methods to match how different users interact with automotive platforms. These methods are inspired by the best features from TecDoc, 7zap, Alibaba, Amazon, and eBay:

- **Visual Hierarchical Browsing**: Brand logo → Model range → Generation/Phase → Year → Engine/Specifications (similar to 7zap).
- **VIN-Based Search**: Direct input of VIN for instant vehicle locking and 100% fitment results.
- **Part Number Search**: Supports OEM numbers, Aftermarket numbers, Barcodes (GTIN), and internal SKUs with fuzzy matching.
- **Category & Keyword Search**: Flexible search across part names, categories, and descriptions.
- **Image-Based Search** (Future): Upload a photo of a part or vehicle component for AI-assisted identification.

### 40.2 Smart Search Suggestions
The system must provide intelligent suggestions while the user types, including:

- Popular searches for the selected vehicle
- Frequently bought together parts
- Related services (e.g., “Brake pads” suggests “Brake discs” and “Brake fluid”)
- Previously searched items by the user

This approach follows the smart search experience used by Amazon and Alibaba.

### 40.3 Result Organization & Filtering
Search results must be clearly organized and easy to navigate. Recommended structure:

- **Sections by Quality Tier**: Budget Parts, Quality Parts, Premium Parts, Performance Parts.
- **Sorting Options**: Price (low to high), Match Percentage, Distance (for local suppliers), Rating, Delivery Speed.
- **Advanced Filters**: Brand, Price range, Shipping availability, Warranty length, Condition (New/Used/Reconditioned), Certification.

### 40.4 Part Comparison Tool
Users must be able to select 2–3 parts and compare them side-by-side. The comparison table should include:

- Price (including shipping)
- Match percentage with the selected vehicle
- Brand and quality tier
- Warranty and return policy
- Supplier rating and delivery time
- Key specifications (dimensions, weight, material)

This feature is especially useful for mechanics, fleet managers, and technically knowledgeable users.

### 40.5 Saved Searches & Alerts
Users should be able to save specific searches and receive notifications when:

- New compatible parts become available
- Prices drop on saved items
- A previously out-of-stock part is back in inventory

This follows the “Save Search” and alert systems used effectively on platforms like eBay and Alibaba.

### 40.6 Error Handling & User Guidance
When no results are found, the system must not show a blank page. Instead, it should:

- Suggest similar vehicles or alternative part numbers
- Offer to broaden the search (e.g., show near matches)
- Provide guidance on how to improve the search (e.g., “Try selecting the engine code”)

### 40.7 Mobile & Accessibility Optimization
The search and browsing experience must be fully optimized for mobile devices, as many users (especially in emerging markets) access the platform primarily via smartphones. This includes:

- Fast loading times
- Touch-friendly filters and selection
- Clear visual hierarchy with large images
- Offline caching of recently viewed vehicles and parts

### 40.8 Accessibility Features
The system should follow modern accessibility standards, including:

- High contrast mode
- Screen reader compatibility
- Keyboard navigation support
- Multi-language interface with right-to-left (RTL) support where needed

This ensures the platform is usable by the widest possible audience.
