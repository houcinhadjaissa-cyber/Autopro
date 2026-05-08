# Autopro AI Context

**Last Updated:** 2026-05-07

If the conversation is lost, paste this file and say: "Continue Autopro from this context."

---

# Quick Summary

Autopro is an automotive marketplace platform for Algeria & Nigeria.
Current Phase: UX Polish
Preview: https://019e034c-94e8-7734-82a8-06ffeef42197.arena.site/

---

# Tech Stack

| Tool | Purpose | Status |
|------|---------|--------|
| React 18 + Vite 7 | Framework | Working |
| Tailwind CSS 4 | Styling | Configured |
| React Router 6 | Routing | Working |
| Lucide React | Icons | Installed |
| @supabase/supabase-js | Database + Auth | Connected |

---

# Supabase

- URL: https://ornbjhcsgxjvloeepojj.supabase.co
- Key: sb_publishable_9ywgVcJYXgBPhssA_9fY0g_Nut4yqzW
- Tables: profiles, products(8), services(6), reviews(9), vehicles, orders, order_items, bookings, addresses
- Auth: Email/password, auto-creates profile on signup

---

# Design System

- Primary: #00D084 (mint green gradient to #00B894)
- Background: #FAFAFA light, #FFFFFF cards
- Font: System fonts (-apple-system, SF Pro)
- Style: Light theme, Apple + Alipay + Binance UX
- Cards: White, rounded-16px, subtle shadow
- Buttons: Gradient green with glow shadow

---

# Completed Pages (10)

Homepage /, Search /search, Services /services, Garage /garage, Cart /cart, Login /login, Part Detail /part/:id, Service Detail /service/:id, Checkout /checkout, Dashboard /dashboard

---

# File Structure

src/lib/ — supabase.ts, database.ts (queries with fallback)
src/contexts/ — AuthContext.tsx, CartContext.tsx
src/components/ — Header, Footer, FloatingCart, Toast, StoriesBar, CategoryBar
src/pages/ — All 10 pages + SetupPage + DocsPage

---

# What Works

Real: Auth (signup/login/logout), Products from DB, Services from DB, Reviews from DB, Cart (global state), Floating cart island, Toast notifications
UI Only: Checkout, Bookings, Garage vehicles

---

# Next Steps

1. Continue UX polish
2. Admin Dashboard
3. Cart persistence to DB
4. Real checkout/orders
5. Real booking system

---

# Recovery

Paste this file into new AI chat and say:
"Continue Autopro. Last completed: UX polish with new #00D084 green design system. Next: continue fixing remaining pages."
