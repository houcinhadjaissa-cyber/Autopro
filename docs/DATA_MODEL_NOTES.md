# Autopro Data Model & Database Architecture

## 1. Vision & Strategic Goals

### 1.1 Primary Purpose
This file defines the complete database architecture and data model for Autopro. It serves as the **core reusable structure** that can be adapted for future projects (e.g., grocery, medical, real estate, or other marketplaces).

### 1.2 Key Principles
- **Backbone First**: Build a strong, scalable foundation before adding features.
- **Multi-Project Reusability**: One global identity system that works across all future platforms.
- **Performance & Cost Efficiency**: Designed to run affordably while remaining fast.
- **Future-Proof**: Supports advanced use cases such as AI, diagnostics, vehicle development, and manufacturer integration.
- **Security by Design**: Strong separation between sensitive and public data.

## 2. Database Architecture

### 2.1 Recommended Technology Stack
- **Primary Database**: PostgreSQL (or Supabase/Postgres-compatible)
- **Search Layer**: Elasticsearch (or Meilisearch for lower cost)
- **Relationship Layer**: Graph database (Neo4j or similar) for complex compatibility and relationship queries
- **Media Storage**: Object storage (S3, Supabase Storage, or Cloudflare R2)
- **Caching**: Redis (or built-in caching in Supabase)

### 2.2 Hybrid Architecture Approach
The system uses a hybrid model to balance performance, flexibility, and cost:
- Relational database for core structured data (users, orders, vehicles, parts).
- Graph database for complex relationships (compatibility, vehicle history, social connections).
- Search engine for fast, flexible querying.
- Object storage for media files.

This approach is used successfully by large-scale platforms that handle millions of records and complex relationships.

## 3. Core Entities & Tables

### 3.1 Global Identity System
- `users` – Core user accounts (global across all projects)
- `user_profiles` – Public profile information
- `user_auth` – Separate secure table for emails and passwords
- `user_roles` – Role assignments (client, supplier, service provider, staff, admin, etc.)

### 3.2 Vehicle System
- `vehicles` – Master vehicle records
- `vehicle_history` – Permanent service, parts, and maintenance records
- `vehicle_garage` – Links users to their vehicles (with privacy controls)
- `vehicle_specifications` – Detailed technical data (engine, transmission, etc.)

### 3.3 Product & Compatibility System
- `products` – Master product table
- `product_compatibility` – Links products to vehicles (with match percentage and source)
- `product_categories` – Hierarchical categories
- `product_media` – Images, videos, and documents (stored in object storage)

### 3.4 Business & Operations
- `business_profiles` – Supplier, service provider, and fleet accounts
- `staff_members` – Platform and business staff
- `orders` – All order types (products, services, packages)
- `invoices` – Billing and invoicing records
- `payments` – Payment transactions and history

### 3.5 Supporting Tables
- `reviews` – Product and service reviews with proof linking
- `loyalty_points` – User loyalty and rewards
- `notifications` – System and user notifications
- `audit_logs` – All important system actions
- `system_health` – Monitoring of automated tasks and background jobs

## 4. Automotive-Specific Logic

### 4.1 Compatibility Engine Support
- Supports TecDoc-style matching with additional flexibility for local suppliers.
- Stores match percentage, match type, and data source.
- Supports regional variants and facelift differences.

### 4.2 Vehicle History & Diagnostics
- Permanent, immutable service and part installation records.
- Support for future OBD/diagnostic data integration.
- Links between parts, services, and vehicle history.

### 4.3 Garage & Multi-Vehicle Management
- Users can have multiple vehicles.
- Privacy controls for sharing vehicle history with service providers.
- Support for fleet and business vehicle groups.

## 5. Security & Compliance

### 5.1 Data Separation
- Sensitive authentication data is stored separately from public profiles.
- Financial and personal data has restricted access.

### 5.2 Fraud Prevention
- Risk scoring for users and businesses.
- IP blocking and suspicious activity detection.
- Permanent audit logs for high-risk actions.

### 5.3 Data Retention
- 30-day cleanup for detailed search logs.
- Automated archiving of old or inactive records.
- Clear rules for data deletion upon user request.

## 6. Performance & Scalability

### 6.1 Cost Optimization
- Media stored outside the database.
- Aggressive caching strategy.
- Automated data cleanup and archiving.

### 6.2 Scalability
- Designed to handle millions of products and compatibility records.
- Supports sharding and read replicas when needed.
- Background job processing for heavy operations.

## 7. Multi-Project Reusability

### 7.1 Global User Identity
One user account works across all future projects owned by the same creator.

### 7.2 Modular Design
Tables are designed to be reusable with minimal changes for new verticals (grocery, medical, etc.).

### 7.3 Configuration Layer
Project-specific settings (currency, language, tax rules, etc.) are stored in a flexible configuration system.

## 8. Future Expansion

### 8.1 Advanced Features
- AI-based recommendations and predictive maintenance.
- Augmented Reality (AR) support.
- Integration with diagnostic tools and vehicle development systems.
- Manufacturer and engineering collaboration portals.

### 8.2 Data Insights
- Anonymized analytics for internal decision-making.
- Potential future offering of aggregated insights to manufacturers and suppliers.

## 9. Summary
This data model is designed to be the strong, flexible, and future-proof foundation for Autopro and all future projects. It balances performance, security, cost efficiency, and advanced functionality while remaining maintainable by a small team.
---

## 10. Detailed Table Structures & Relationships

### 10.1 Core Identity Tables

#### `users`
- `id` (UUID, Primary Key)
- `global_user_id` (Unique across all projects)
- `email` (Unique)
- `phone_number`
- `created_at`
- `last_login_at`
- `status` (Active, Suspended, Deleted)
- `risk_score`

**Relationships:**
- One-to-Many with `user_profiles`
- One-to-Many with `vehicles` (via `vehicle_garage`)
- One-to-Many with `orders`

#### `user_profiles`
- `id`
- `user_id` (Foreign Key → users)
- `display_name`
- `avatar_url`
- `bio`
- `location`
- `preferred_language`
- `created_at`

#### `user_auth`
- `id`
- `user_id` (Foreign Key → users)
- `password_hash`
- `last_password_change`
- `two_factor_enabled`
- `recovery_codes`

### 10.2 Vehicle System

#### `vehicles`
- `id`
- `vin` (Unique)
- `make`
- `model`
- `generation`
- `year`
- `engine_code`
- `fuel_type`
- `transmission`
- `drive_type`
- `body_style`
- `market_region`
- `status` (Active, Archived)

**Relationships:**
- One-to-Many with `vehicle_history`
- Many-to-Many with `users` (via `vehicle_garage`)

#### `vehicle_history`
- `id`
- `vehicle_id`
- `event_type` (Service, Part Installation, Inspection, etc.)
- `description`
- `date`
- `mileage`
- `provider_id`
- `order_id`
- `notes`

#### `vehicle_garage`
- `id`
- `user_id`
- `vehicle_id`
- `nickname`
- `is_primary`
- `privacy_level` (Private, Share with Providers, Public)

### 10.3 Product & Compatibility System

#### `products`
- `id`
- `supplier_id`
- `name`
- `brand`
- `oem_number`
- `aftermarket_number`
- `category_id`
- `price`
- `stock_quantity`
- `condition` (New, Used, Reconditioned)
- `status`

#### `product_compatibility`
- `id`
- `product_id`
- `vehicle_id`
- `match_percentage`
- `match_type` (Exact, Near, Universal)
- `source` (TecDoc, Manual, Supplier)
- `verified_installations_count`

### 10.4 Business & Operations Tables

#### `business_profiles`
- `id`
- `owner_user_id`
- `business_type` (Supplier, Service Provider, Fleet, Hybrid)
- `business_name`
- `verification_level`
- `trust_score`
- `status`

#### `orders`
- `id`
- `user_id`
- `business_id`
- `order_type` (Product, Service, Package, Bundle)
- `status`
- `total_amount`
- `created_at`
- `completed_at`

#### `reviews`
- `id`
- `order_id`
- `user_id`
- `rating`
- `comment`
- `has_proof` (Boolean)
- `created_at`

### 10.5 Key Relationships Summary

- `users` → `vehicle_garage` → `vehicles`
- `products` → `product_compatibility` → `vehicles`
- `orders` → `reviews`
- `business_profiles` → `products` / `orders`
- `vehicle_history` → `orders` (optional link)

### 10.6 Recommended Indexes
For performance, the following indexes are strongly recommended:

- `products`: Index on `oem_number`, `brand`, `category_id`
- `product_compatibility`: Index on `vehicle_id` and `product_id`
- `vehicle_history`: Index on `vehicle_id` and `date`
- `orders`: Index on `user_id` and `status`

### 10.7 Security Notes per Table
- `user_auth`: Highest security (encryption + limited access)
- `vehicles` and `vehicle_history`: Medium security with privacy controls
- `products` and `reviews`: Public read access with moderation
- `audit_logs` and `system_health`: Admin-only access
