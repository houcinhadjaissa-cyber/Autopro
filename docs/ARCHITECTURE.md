# 🏗️ AUTOPRO ARCHITECTURE
# Code Structure & Implementation Details
# Last Updated: Conv #38

---

## Current Tech Stack
- Framework: Next.js 14.2.5 + React 18
- Styling: Tailwind CSS 3.4 + CSS Variables
- State: Zustand 4.5 (all persisted to localStorage)
- Icons: lucide-react 0.400
- Database: Supabase (connected, tables exist)
- Language: TypeScript
- Hosting: GitHub (repo) + Vercel (deploy target)

---

## Project Structure

---

## Design System
- **Primary:** #6FB81A (Autopro Green)
- **Secondary:** #FF9900 (Amazon Orange)
- **Success:** #52C41A | **Error:** #FF4D4F | **Warning:** #FAAD14 | **Info:** #3B82F6
- **Day mode:** White backgrounds (#FFFFFF, #F5F5F5, #FAFAFA)
- **Night mode:** Dark backgrounds (#0B0E11, #1E293B, #334155) — toggle via settingsStore
- **Grid:** 8px base
- **Typography:** Inter (body), system fonts
- **Shadows:** 4 levels (Level 0-3)

---

## Zustand Stores Detail

### cartStore
- items[], addItem(), removeItem(), updateQuantity(), clearCart(), itemCount(), totalPrice()
- Persisted to localStorage as `autopro-cart`

### authStore
- user object with: id, globalUserId, email, name, roles[], country, currency, language, riskScore
- login(email, password), logout(), mockLogin()
- Demo: alex@autopro.demo / demo1234
- Persisted to localStorage as `autopro-auth`

### garageStore
- vehicles[] with: id, autoproVehicleId, vin, make, model, year, engine, fuelType, transmission, mileage
- Vehicle ID format: VEH_{country}_{vin_hash}_{ulid}
- addVehicle(), updateVehicle(), removeVehicle(), getVehicle(), vehicleCount(), primaryVehicle()
- Persisted to localStorage as `autopro-garage`

### ordersStore
- orders[] with: id, orderNumber, items[], totalAmount, status, paymentMethod, createdAt
- 7 statuses: pending/paid/processing/shipped/delivered/cancelled/refunded
- addOrder(), updateOrderStatus(), getOrder(), recentOrders()
- Persisted to localStorage as `autopro-orders`

### settingsStore
- country (default: DZ), currency (DZD), language (ar), theme (day/night)
- setCountry(), setCurrency(), setLanguage(), toggleTheme(), setTheme()
- Persisted to localStorage as `autopro-settings`

### paymentStore
- paymentMethods[] (card/cod/bank_transfer/mobile_money/wallet)
- addresses[] with full intl fields (wilaya, commune, state, lga)
- add/remove/setDefault for both, auto-fill support
- Persisted to localStorage as `autopro-payment`

### toastStore
- toasts[] with: id, message, type
- addToast(message, type), removeToast(id)
- Auto-dismiss after 3 seconds

---

## Pages Built
| # | Page | Route | Status |
|---|------|-------|--------|
| 1 | Homepage | / | ✅ Building now |
| 2 | Cart | /cart | 🔄 Planned |
| 3 | Search/Explore | /search | 🔄 Planned |
| 4 | Services | /services | 🔄 Planned |
| 5 | Garage | /garage | 🔄 Planned |
| 6 | Login | /login | 🔄 Planned |

---

## Current Phase
- **Phase 2:** Frontend Foundation
- **Step:** Rebuilding Homepage with audit quick wins
- **Next:** Trust badge bar + search bar + garage CTA

---

## Rules
- Use Zustand persist for any new store
- Light theme default, night mode available via toggle
- Use CSS variables (not hardcoded colors)
- Don't rebuild existing components — extend them
- Always read all 5 memory files before new code
