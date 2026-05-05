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
