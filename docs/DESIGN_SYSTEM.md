# 🎨 AUTOPRO DESIGN SYSTEM
*Owner-approved visual guidelines — documentation only, implementation later*

---

## 📋 HOW TO USE THIS FILE
- This file defines the look and feel of Autopro
- No code yet — just specs for future implementation
- If chat crashes: This file ensures UI matches your vision

---

## ✅ CORE DESIGN PRINCIPLES (Your Vision)

### Visual Style Reference
- Primary inspiration: 7zap.com (exploded diagrams, facelift-aware vehicle images)
- Secondary inspiration: TecDoc (technical catalog structure, category icons)
- Tertiary inspiration: Facebook/TikTok/Alibaba (profile layouts, activity feeds, mobile UX)

### Mobile-First Priority
- All screens designed for phone browser first, desktop second
- Thumb-friendly tap targets (min 44x44px)
- Collapsible sections to reduce scrolling
- Offline support for critical actions (queue sync when online)

### Algeria/Nigeria Localization
- RTL support for Arabic (CSS + layout adjustments)
- Language switcher in header (auto-detect + manual override)
- Country-specific date/currency formatting
- Address forms: Wilaya/Commune (Algeria), State/LGA (Nigeria)

---

## 🎨 COLOR PALETTE (Owner-Approved)

### Primary Colors
- Brand Blue: `#1E40AF` (trust, professionalism)
- Action Green: `#10B981` (confirm, success, go)
- Warning Yellow: `#F59E0B` (caution, verify manually)
- Error Red: `#EF4444` (incompatible, stop, alert)

### Neutral Colors
- Background: `#FFFFFF` (light mode), `#0F172A` (dark mode toggle)
- Text Primary: `#1E293B` (light), `#F1F5F9` (dark)
- Text Secondary: `#64748B` (light), `#94A3B8` (dark)
- Borders: `#E2E8F0` (light), `#334155` (dark)

### Status Colors
- 🟢 Confirmed Fit: `#10B981` + checkmark icon
- 🟡 Likely Fit: `#F59E0B` + warning icon + "Verify manually"
- 🔴 Not Compatible: `#EF4444` + X icon + alternatives

### Accessibility
- Minimum contrast ratio: 4.5:1 for text
- Color-blind friendly patterns (icons + text, not color-only)
- Focus states visible for keyboard navigation

---

## 🔤 TYPOGRAPHY

### Font Stack (System Fonts for Speed)
- Primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial`
- Arabic: `"Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif` (RTL support)
- Monospace (for codes): `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

### Type Scale (Mobile-Optimized)
- H1 (Page Title): 24px bold (mobile), 32px bold (desktop)
- H2 (Section): 20px semi-bold
- Body: 16px regular (minimum for readability)
- Small: 14px for secondary text, captions
- Button Text: 16px semi-bold, uppercase for primary actions

### Line Height & Spacing
- Body line height: 1.5 (comfortable reading)
- Section spacing: 24px vertical padding on mobile
- Component spacing: 16px between interactive elements

---

## 🧩 COMPONENT LIBRARY (Your Vision)

### Vehicle Garage Page (7zap.com Style)

---

## 📱 MOBILE-FIRST UX RULES

### Navigation
- Bottom tab bar for primary actions (Home, Search, Garage, Bookings, Profile)
- Hamburger menu for secondary actions (Settings, Help, Language)
- Back button always visible in header

### Forms
- One field per row on mobile
- Auto-focus next field on input
- Real-time validation (green check/red X)
- "Save as Default" checkbox for address/payment info

### Loading States
- Skeleton screens (gray placeholders) instead of spinners
- Progressive image loading (blur → sharp)
- Offline indicator: "You're offline — changes will sync when connected"

### Error Handling
- User-friendly messages: "We couldn't find parts for this vehicle. Try: [suggestions]"
- Actionable errors: "Payment failed. Try: [another method] or [contact support]"
- Recovery paths: Every error screen has "Go Back" + "Try Again" buttons

---

## 🌙 DARK MODE SUPPORT

### Implementation Plan
- System-preference detection (auto-switch)
- Manual toggle in user settings (sun/moon icon)
- All colors defined in CSS variables for easy switching
- Test both modes on mobile browser before launch

### Dark Mode Colors
- Background: `#0F172A` (instead of white)
- Cards: `#1E293B` with subtle border
- Text: `#F1F5F9` primary, `#94A3B8` secondary
- Maintain same contrast ratios as light mode

---

## 🔄 FLEXIBILITY RULES (Your Requirement)

### Config-Driven Design
- Colors, fonts, spacing defined in `design-config.json` (no hardcoding)
- Admin can update brand colors without code changes
- Country-specific UI tweaks via config (e.g., RTL for Algeria)

### Component Variants
- Every component has: Default, Compact, Expanded variants
- Admin can choose variant per page via config
- Example: Product grid can switch between "2-column mobile" / "3-column tablet" / "4-column desktop"

### A/B Testing Ready
- All UI elements tagged for analytics
- Admin can run A/B tests: "Button Color: Blue vs Green"
- Results dashboard shows conversion impact

---

## 🚫 EXCLUSIONS (Your Requirements)

### Israel/Hebrew Exclusion
- No Hebrew language option in language selector
- No Israel country code in address forms
- No +972 phone validation rule
- Audit log entry if any attempt detected

### No Clutter Rule
- Progressive disclosure: Advanced features hidden until needed
- No more than 3 primary actions per screen
- "Show More" buttons instead of endless scrolling

---

## 📋 IMPLEMENTATION CHECKLIST (For Future Coding Phase)

### Phase 1: Foundation (Technical Setup)
- [ ] Setup Tailwind CSS with custom config (colors, fonts, spacing)
- [ ] Create CSS variables for light/dark mode
- [ ] Build responsive layout container (mobile-first breakpoints)
- [ ] Implement RTL support for Arabic

### Phase 2: Core Components
- [ ] Vehicle Garage page (7zap.com style)
- [ ] Omni-search bar with auto-complete
- [ ] Product card component (with match score badges)
- [ ] Service booking card component

### Phase 3: Polish
- [ ] Dark mode toggle + system detection
- [ ] Offline support + skeleton screens
- [ ] A/B testing framework for UI elements
- [ ] Admin config panel for design tweaks

---

## ✅ OWNER APPROVAL

This design system reflects my vision:
- 7zap.com/TecDoc style vehicle garage ✅
- Mobile-first, thumb-friendly UX ✅
- Algeria/Nigeria localization (RTL, languages, address formats) ✅
- Config-driven flexibility for future projects ✅
- Israel/Hebrew exclusion ✅

Approved by: houcinhadjaissa-cyber
Date: 2026-05-05
