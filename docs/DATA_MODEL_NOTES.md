# Autopro Data Model & Database Architecture

## 1. Vision & Strategy
*   **Backbone First:** This is the primary database planning file.
*   **Cross-Project Core:** Supports Autopro first, but allows future projects (grocery, medical, etc.) to use the same user/ID system.
*   **Flexibility:** Logic is designed to work with any database (like Supabase) but remains flexible.
*   **Beginner Friendly:** Tables use simple names like `users`, `vehicles`, and `orders`.

## 2. Infrastructure & Optimization (Low Cost/High Speed)
*   **Media Storage:** Photos/Videos/PDFs are stored in light object storage, NOT the database.
*   **Caching:** Uses device-level caching to save server costs and increase speed.
*   **Auto-Cleaning:** An automated algorithm decides what data stays "live" and what is archived to keep the server light and cheap.
*   **Live Vehicles:** Only "live" registered vehicles are saved; unregistered/crashed vehicles are archived/deleted to save space.

## 3. Global Identity & Localization
*   **Global User ID:** One account works across all future owner projects.
*   **Security Separation:** Login emails and passwords are stored separately from public profiles for maximum security.
*   **Algeria-Specific Rates:** Supports manual overrides for realistic currency exchange rates (e.g., Square rate vs. Bank rate).
*   **Route Rates:** Shipping prices are calculated by specific routes (China-to-Algeria, etc.).
*   **No Hebrew:** Hebrew is removed from all language and data options entirely.

## 4. Automotive & TecDoc Logic
*   **Garage System:** Supports multiple vehicles per user with privacy controls.
*   **Vehicle History:** Permanent records for service, parts, and mileage.
*   **TecDoc Copy+:** Product catalog mimics TecDoc compatibility but adds easier bulk-upload tools for local suppliers.
*   **Snapshot Pricing:** The system "freezes" the price at checkout so it cannot change during the order process.

## 5. Staff & Operations
*   **Automation:** Tasks (disputes, fraud alerts) are created automatically for staff.
*   **Performance Tracking:** System automatically ranks staff based on "Excellent Work" vs "Mistakes."
*   **Debt Ledger:** A dedicated system tracks money owed to Autopro by businesses (COD orders).
