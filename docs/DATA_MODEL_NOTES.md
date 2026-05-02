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

## 6. Search & Discovery (Optimized)
*   **Anonymized Search Logs:** Autopro will track what users search for to improve results, but logs are anonymized for privacy.
*   **30-Day Cleanup:** Detailed search history is automatically deleted after 30 days to keep server costs low.
*   **Trending & Recommendations:** The system will use "Trending Searches" by country and "Product Recommendations" (e.g., matching filters to oil) to increase sales.

## 7. Analytics & System Health
*   **Automated Summaries:** Detailed daily stats are converted into summaries; old raw data is deleted automatically to save space.
*   **Business Dashboards:** Every business gets its own analytics table to track growth and performance.
*   **System Health Monitoring:** A dedicated table monitors automated tasks (like payments or imports) and alerts the owner immediately if anything fails.

## 8. Security & Fraud Prevention
*   **IP Blocking:** A "Blocked IPs" system will automatically stop known hackers or aggressive bots.
*   **Sensitive Logs:** Any high-risk action (changing bank details or deleting users) is logged permanently for audit.
*   **Risk Scores:** Both users and businesses are assigned a risk score based on return behavior, payment disputes, and trust history.

## 9. Social Commerce (TikTok-Style)
*   **Short Videos:** A dedicated table stores short video demonstrations linked directly to Product IDs.
*   **One-Click Buy:** Video records must support direct checkout triggers.
*   **Influencer Tracking:** Influencer campaigns are tracked in the database to automate commission and sales reporting.
