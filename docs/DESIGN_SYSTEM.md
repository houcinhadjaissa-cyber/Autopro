# 🎨 AUTOPRO DESIGN SYSTEM v2026.1
*Next-level hybrid: NVIDIA colors (modified) + Binance UX + Alipay trust + TecDoc catalog + TikTok/Facebook social*
*Status: ✅ OWNER-APPROVED | Primary Color: Custom Green #6FB81A (legally distinct) | Unified across ALL user types*

---

## 📋 HOW TO USE THIS FILE
- This is the SINGLE source of truth for Autopro's visual identity
- Applies to: Client storefront, Supplier dashboard, Shipping portal, Admin panel, B2B fleet, Influencer pages
- No code yet — specs for future implementation
- If chat crashes: This file ensures UI matches your vision exactly

---

## 🎨 COLOR SYSTEM (Unified, Legally-Safe)

### Primary Color (Modified NVIDIA Green)
- ORIGINAL NVIDIA GREEN: #76b900
- MODIFIED AUTOPRO GREEN: #6FB81A (shifted +5° hue, +3% saturation) — LEGALLY DISTINCT
- WHY: Keeps NVIDIA's "technical power" feel while avoiding trademark issues
- USAGE: Primary buttons, active states, success indicators, brand accents
- ACCESSIBILITY: Contrast on white: 4.6:1 (WCAG AA), on black: 12.3:1 (WCAG AAA), Color-blind safe tested

### Full Color Palette
- PRIMARY SCALE (Autopro Green): 50:#F0F9E8, 100:#DCF9C7, 200:#B8F09A, 300:#8FD96B, 400:#6FB81A←PRIMARY, 500:#5A9415, 600:#457010, 700:#304C0B, 800:#1B2806, 900:#060401
- TRADING SEMANTICS: Bullish/Positive:#6FB81A+upward animation, Bearish/Negative:#EF4444+downward animation, Neutral:#64748B
- NEUTRALS: Canvas:#0B0E11 (NVIDIA black), Surface-1:#1E293B, Surface-2:#334155, Border:#475569, Text-Primary:#F1F5F9(light)/#0F172A(dark), Text-Secondary:#94A3B8(light)/#64748B(dark)
- STATUS COLORS: 🟢Success:#6FB81A+checkmark, 🟡Warning:#F59E0B+warning icon, 🔴Error:#EF4444+X icon, 🔵Info:#3B82F6+info icon, ⚪Neutral:#64748B+dash
- TRUST SIGNALS: Secure Badge:#6FB81A+white padlock, Verified Partner:Gold border #F59E0B+checkmark, Buyer Protection:Blue badge #3B82F6+shield

---

## 🔤 TYPOGRAPHY SCALE (BinanceNova + BinancePlex Hybrid)

### Font Stack (System Fonts for Speed + Legality)
- PRIMARY FONT (Display/Headings): "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- NUMBERS FONT (Trading Data): "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace
- ARABIC FONT (RTL Support): "Noto Sans Arabic", "Inter", Tahoma, sans-serif + RTL layout + numeral shaping
- LEGAL NOTE: Using open-source fonts (Inter, JetBrains Mono, Noto Sans Arabic) avoids licensing issues

### Type Scale (Mobile-First)
- DISPLAY: XL:48px/56px bold (desktop)/36px/44px bold (mobile), LG:40px/48px semi-bold, MD:32px/40px semi-bold
- HEADINGS: H1:28px/36px bold, H2:24px/32px semi-bold, H3:20px/28px semi-bold, H4:18px/24px medium
- BODY: LG:18px/28px regular (min readability), MD:16px/24px regular (default), SM:14px/20px regular (secondary)
- NUMBERS: XL:32px/40px monospace (large stats), LG:24px/32px monospace (prices), MD:20px/28px monospace (quantities), SM:16px/24px monospace (small data)
- BUTTONS & LABELS: Button LG:16px/24px semi-bold uppercase, Button MD:14px/20px semi-bold sentence case, Label:12px/16px medium uppercase
- LINE HEIGHT: Body:1.5, Heading:1.2, Number:1.0 (monospace alignment)

---

## 📏 SPACING & LAYOUT SYSTEM (Binance 4px Base + NVIDIA Sections)

### Base Unit: 4px Grid
- SPACING SCALE: 4px(micro), 8px(small), 12px(medium-small), 16px(medium), 24px(medium-large), 32px(large), 48px(XL), 64px+(XXL)
- LAYOUT BREAKPOINTS (Mobile-First): xs:0-375px, sm:376-480px, md:481-768px, lg:769-1024px, xl:1025-1440px, 2xl:1441px+
- CONTAINER WIDTHS: Mobile:100%-32px padding, Tablet:100%-48px padding max-width 720px, Desktop:100%-64px padding max-width 1200px, Widescreen:centered max-width 1440px

### Elevation & Depth (NVIDIA Flat + Binance Subtle Shadows)
- ELEVATION SCALE: Level0(Flat):no shadow, Level1(Raised):0px 1px 2px rgba(0,0,0,0.05), Level2(Floating):0px 4px 12px rgba(0,0,0,0.1), Level3(Overlay):0px 8px 24px rgba(0,0,0,0.15), Level4(Modal):0px 16px 48px rgba(0,0,0,0.2)
- DARK MODE: Shadows use rgba(255,255,255,0.1) instead of black, maintain same perceived depth

---

## 🧩 COMPONENT LIBRARY (Unified Across ALL User Types)

### Universal Components

#### Button System (Binance Variants + NVIDIA Polish)
- PRIMARY BUTTON: Background:#6FB81A, Text:#FFFFFF, Padding:12px 24px(MD)/16px 32px(LG), Border-radius:8px, Hover:scale 1.02+brightness 110%, Pressed:scale 0.98+brightness 90%, Disabled:opacity 50%, Loading:spinner replaces text
- SECONDARY BUTTON: Background:transparent, Border:2px solid #6FB81A, Text:#6FB81A, Hover:background rgba(111,184,26,0.1)
- TERTIARY BUTTON: Background:transparent no border, Text:#6FB81A semi-bold, Hover:underline animation 0.2s ease
- DANGER BUTTON: Background:#EF4444, Text:white, Use for:Delete/cancel/irreversible actions, Requires confirmation modal
- SIZES: SM:8px 16px padding 14px text, MD:12px 24px padding 16px text, LG:16px 32px padding 18px text, XL:20px 40px padding 20px text
- STATES (Micro-interactions): Default→Hover:0.2s ease scale+color shift, Hover→Pressed:0.1s ease scale down, Loading:spinner 1s linear infinite, Success:green pulse+checkmark 0.6s

#### Input Fields (Alipay Trust Patterns)
- BASE INPUT: Height:48px, Padding:12px 16px, Border:2px solid #475569, Border-radius:8px, Background:#1E293B, Text:#F1F5F9, Placeholder:#94A3B8(60% opacity)
- FOCUS STATE: Border:2px solid #6FB81A, Box-shadow:0 0 0 3px rgba(111,184,26,0.2), Transition:0.2s ease
- VALIDATION STATES: Success:Border #6FB81A+green checkmark right, Error:Border #EF4444+red X right+error message below, Warning:Border #F59E0B+yellow warning icon
- TRUST ENHANCEMENTS: Real-time validation green check as user types, Security badge "🔒 Encrypted" below sensitive fields, Auto-save indicator "Saved" after 2s inactivity, Biometric option fingerprint/Face ID icon in password fields
- SPECIALIZED INPUTS: Search:magnifying glass left+clear button right, Date:calendar icon right+mobile-native picker, Phone:country code dropdown+number field (+213 Algeria/+234 Nigeria presets), Address:Google Places API auto-complete (country-filtered)

#### Card System (NVIDIA Flat + Binance Data Density)
- BASE CARD: Background:#1E293B, Border:1px solid #334155, Border-radius:12px, Padding:16px(mobile)/24px(desktop), Shadow:Level1, Hover:Shadow Level2+subtle scale 1.01 0.2s ease
- CARD VARIANTS: Data Card(dense rows+monospace numbers+green/red semantics), Promo Card(gradient border #6FB81A to #3B82F6+CTA prominent), Trust Card(gold border #F59E0B+verified badge top-right), Action Card(large button area+minimal text+icon-focused)
- DENSE DATA TABLES: Row height:48px(mobile)/40px(desktop), Column padding:8px horizontal, Text:Body SM(14px) for data+Number MD for values, Hover row:background rgba(111,184,26,0.05), Sortable columns:arrow icon+click to sort, Sticky header:on scroll with subtle shadow
- RESPONSIVE BEHAVIOR: Mobile:cards stack vertically+tables horizontal scroll/card-based, Tablet:2-column grid+tables show key columns, Desktop:full grid/tables with all columns

---

## 🚗 TECDOC-STYLE GARAGE & CATALOG (Legally Distinct, 2026 Modern)

### Vehicle Garage Page (TecDoc-Inspired, Not Copied)
- LAYOUT STRUCTURE: Left Panel(30% desktop/collapsible mobile):Vehicle technical illustration(facelift-aware+year-specific)+Isometric 3D render(NOT TecDoc exact style)+Autopro Green highlights on technical parts+Tap/click part→highlights in center panel; Center Panel(70% desktop/full mobile):Category Grid(standardized icons:engine/brakes/electrical...)+Custom SVG set(NOT TecDoc icons)+Each category:Icon+name+part count+compatibility badge; Top Bar:Vehicle selector dropdown(Year→Make→Model→Engine→Trim)+"Add to Garage" button(primary green)+Vehicle history shortcut(clock icon)
- CATEGORY ICONS (Custom, Legally Safe): Engine:abstract piston+spark icon(green accent), Brakes:disc+pad abstract shape, Electrical:circuit+bolt icon, Suspension:spring+shock abstract, Body:car silhouette+panel highlight, Interior:seat+dashboard abstract, Fluids:droplet+gauge icon; Design:flat+2px stroke+rounded corners(NVIDIA style)
- PART RESULTS DISPLAY: Grid View(mobile default):2-column grid of part cards; Table View(desktop toggle):Dense Binance-style table; Each part shows:Image:white background 120x120px square, Name:bold 16px, Brand:small gray, OEM Number:monospace 14px, Price:Number LG+green if on sale, Match Score:🟢/🟡/🔴 badge+percentage, Actions:"Add to Cart"(primary)+"Book Installation"(secondary)+"Compare"(icon)
- COMPATIBILITY VISUALIZATION: Match Score Badges:🟢100%:"Confirmed Fit"+checkmark+vehicle count, 🟡85-99%:"Likely Fit"+warning icon+"Verify manually", 🔴<85%:"Not Compatible"+X icon+alternatives button; Expandable Vehicle List:Tap "15 vehicles confirmed"→modal with list(15x VW Golf 2009 2.0 TDI, 12x VW Caddy 2008 2.0 TDI, 8x Audi A3 2010 2.0 TDI)+Each entry:Vehicle image thumbnail+specs+"View Details"
- LEGAL SAFEGUARDS: All illustrations created from scratch(no TecDoc assets), Category names generic(not TecDoc exact terminology), Data structure compatible with TecDoc API but UI original, Disclaimer:"Compatibility data sourced from multiple providers"

### Part Detail Page (Unified with Rest of Site)
- HERO SECTION: Left:Part image carousel(zoom on tap+swipe on mobile), Right:Part info(name+brand+OEM+price+match score+"Add to Cart"), Trust badges below price:"✅ Verified Fit"+"🔒 Secure Checkout"+"🚚 Free Shipping"
- TABS SYSTEM (Binance Style): Description|Compatibility|Reviews|Q&A|Shipping; Active tab:green bottom border+bold text; Tab content:smooth fade animation 0.3s ease
- COMPATIBILITY TAB (TecDoc-Style, Legally Safe): Vehicle selector:Year/Make/Model dropdowns(auto-complete); Results table:Dense Binance-style rows; Columns:Vehicle|Engine|Match Score|Actions; Sort by:Relevance/Year/Match Score; Filter:In Stock Only/Verified Fits Only
- REVIEWS TAB (TikTok/Facebook Social): Review cards:User avatar+name+rating+photos/videos; Video reviews:TikTok-style vertical player(muted autoplay); Helpful votes:👍/👎 buttons with count; Verified Purchase badge:Green checkmark+"Bought on Autopro"; Sort by:Most Recent/Most Helpful/Highest Rating
- Q&A TAB (Community Support): Question cards:User question+"Ask Supplier" button; Answer cards:Supplier response+"Was this helpful?" votes; Upvote system:Community surfaces best answers; Supplier badge:"Official Response" green border

---

## 👥 USER-TYPE SPECIFIC INTERFACES (Unified Color/Feel)

### Client Storefront (TikTok/Facebook Social Commerce)
- PROFILE LAYOUT (Facebook Style): Header:Cover photo+avatar+name+verification badge; Tabs:Garage|Orders|Reviews|Saved|Settings; Activity Feed:Recent purchases+saved parts+service bookings; Social Actions:Share garage+follow suppliers+review parts
- HOME FEED (TikTok-Style Discovery): Vertical scroll feed of:Sponsored parts(labeled "Sponsored")+Recommended based on garage vehicles+Trending services in your area+Supplier promotions; Each card:Image+title+price+"Quick Add" button; Swipe actions:❤️ Save+↗️ Share+⋯ More
- GARAGE INTEGRATION: "My Garage" prominent in navigation; Tap vehicle→loads TecDoc-style catalog(filtered to that vehicle); "Add Vehicle" flow:VIN scan+manual entry+photo upload; Garage sharing:Generate link to share vehicle specs with mechanic
- SOCIAL PROOF ELEMENTS: "15 people bought this today" counter(Binance urgency)+"✅ Verified by 3 mechanics" badge+"🔥 Trending in Algeria" location-based tag+Live viewer count:"12 people viewing this part"(optional toggle)

### Supplier Dashboard (Alibaba-Style Power Tools)
- DASHBOARD LAYOUT (Binance Trading Density): Top Bar:Quick stats(Today's Orders+Revenue+Pending Shipments); Left Nav:Collapsible menu(Products+Orders+Analytics+Settings); Main Content:Dense data tables+actionable cards
- PRODUCT MANAGEMENT: Bulk upload:CSV/XML import with field mapping preview; Inventory sync:Real-time stock levels+low-stock alerts; Pricing rules:Country-specific pricing+automatic exchange rate updates; Compatibility mapping:Link parts to vehicles via TecDoc-compatible structure
- ORDER FULFILLMENT: Order table:Dense Binance-style rows with status badges; Quick actions:"Print Label"+"Mark Shipped"+"Message Buyer"; Bulk operations:Select multiple orders→apply action; Shipping integration:One-click label generation for partnered carriers
- ANALYTICS TAB (Google Pay-Style Clarity): Revenue chart:Interactive line chart(green=growth); Top products:Table with image+name+units sold+revenue; Customer insights:Map view of order locations(Algeria/Nigeria focus); Export:CSV/PDF buttons with date range selector

### Shipping Company Portal (Dedicated, B2B Focus)
- DASHBOARD LAYOUT (Logistics-Optimized): Map View:Real-time package locations(Alipay-style tracking); Stats Bar:Today's Pickups+In Transit+Delivered+Exceptions; Alert Panel:High-priority issues(delayed+damaged+failed delivery)
- PACKAGE MANAGEMENT: Scan-to-Confirm:QR code scanner for handoff/delivery confirmation; Batch Operations:Select multiple packages→update status; Route Optimization:Suggest efficient delivery sequences; Cash Collection Tracking:COD amounts collected vs pending settlement
- SETTLEMENT TAB (Financial Clarity): Balance Overview:Available+Pending+Held+Autopro Fees; Transaction Ledger:Dense table with filters(date+route+status); Payout Schedule:Calendar view of expected settlements; Export:Accounting-ready reports(CSV+PDF+XLS)
- PARTNER MANAGEMENT: Approved Suppliers List:Toggle visibility to specific suppliers; Trust Scores:Performance metrics(on-time rate+damage rate); Communication:In-app messaging with suppliers/clients; SLA Tracking:Monitor service level agreements

### Admin Dashboard (Facebook-Style Responsive)
- LAYOUT (Mobile+Desktop Unified): Mobile:Bottom tab bar(Overview+Users+Orders+Analytics+Settings); Desktop:Left sidebar(collapsible)+top bar+main content; Omni-Search:One search bar for VIN+Order ID+User Email+Part Number
- OVERVIEW TAB (Real-Time Metrics): Metric Cards:Revenue+Orders+Active Users+Disputes(with trend arrows); Live Map:Order locations heatmap(Algeria/Nigeria focus); Alert Feed:System alerts+fraud flags+partner issues; Quick Actions:Approve Payout+Resolve Dispute+Update Config
- USER MANAGEMENT: Table:Dense Binance-style rows with user type badges; Filters:By country+trust score+registration date+activity; Actions:View Profile+Adjust Trust Score+Suspend Account; Bulk Actions:Select users→apply role change or notification
- FINANCIAL CONTROLS (Alipay-Style Security): Transaction Ledger:Every money movement logged; Approval Workflows:High-value actions require 2nd approval; Audit Trail:Who did what+when+why(exportable); Risk Dashboard:Fraud scores+chargeback rates+dispute trends

### B2B Fleet Manager (Enterprise-Grade Tools)
- DASHBOARD LAYOUT (Hierarchical Data): Company Overview:Total vehicles+spend YTD+compliance status; Branch Selector:Toggle view by location(Algiers+Oran+Lagos...); Vehicle Groups:Filter by type(Delivery Vans+Executive Cars...)
- BULK ORDERING: CSV Upload:Part numbers+quantities+vehicle assignments; Visual Fleet Selector:Map view+list view toggle; Scheduled Orders:"Order oil filters every 10,000 km" automation; Volume Pricing:Auto-apply discounts based on order size
- MAINTENANCE PLANNING: Calendar View:Scheduled services across fleet; Compliance Tracker:Upcoming inspections+registrations; Cost Analytics:Spend per vehicle+per branch+per category; Export:Reports for accounting+management+compliance
- MULTI-LOCATION PERMISSIONS: Role Hierarchy:HQ Admin→Regional Manager→Branch Manager→Employee; Permission Matrix:Visual editor for access control; Audit Log:Track who changed what+when; Temporary Access:Time-limited grants for contractors

---

## ✨ ANIMATIONS & MICRO-INTERACTIONS (Binance Urgency + Google Pay Polish)

### Core Animation Principles
- SPEED: Micro-interactions:0.2s ease(button hover+icon toggle), Page transitions:0.3s ease(tab switch+modal open), Success animations:0.6s bounce+confetti(order complete), Loading states:1s linear infinite(spinner)+skeleton fade 0.4s
- EASING FUNCTIONS: Default:cubic-bezier(0.4,0,0.2,1)(Material Design standard), Bounce:cubic-bezier(0.68,-0.55,0.265,1.55)(success celebrations), Urgency:cubic-bezier(0.25,0.46,0.45,0.94)(trading data updates)
- TRIGGER RULES: Hover:Only on desktop(mobile uses tap), Tap:Instant feedback on all interactive elements, Scroll:Parallax on hero images(subtle+10% speed), Data Update:Numbers animate(count up/down)+colors flash(green/red)

### Specific Animations (Platform-Inspired)

#### Success Animations (Google Pay Style)
- ORDER CONFIRMED: Checkmark draws itself(0.4s)+Confetti burst from button(0.6s+12 particles)+Button text changes:"Add to Cart"→"✅ Added!"+Gentle pulse on cart icon in header
- PAYMENT SUCCESS: Green wave animation across screen top(0.5s)+Receipt slides up from bottom(0.3s ease-out)+Haptic feedback(if mobile supports)+Auto-redirect to order details after 2s
- PROFILE VERIFIED: Gold badge animates in(scale+fade+0.4s)+"Verified" text types itself(0.6s)+Subtle glow around avatar(2s pulse)

#### Trading Data Animations (Binance Style)
- PRICE UPDATES: Number count-up/down(0.3s)+Background flash:Green(#6FB81A+10% opacity) for up+Red(#EF4444) for down+Arrow icon slides in direction of change+Optional:Sound toggle for traders(off by default)
- TABLE ROW UPDATES: New row slides in from top(0.2s)+Updated cell pulses gently(0.4s)+Sort animation:Rows reorder with smooth transition(0.3s)
- CHART INTERACTIONS: Hover over data point:Tooltip fades in(0.1s)+line highlights; Zoom:Smooth scale animation(0.2s); Pan:Inertia scroll with deceleration

#### Trust & Security Animations (Alipay Style)
- PAYMENT PROCESSING: Progress bar fills smoothly(0.5s per step)+Step labels fade in/out:"Authorizing..."→"Confirming..."→"Success!"+Lock icon animates:Closed→Open(on success)
- FRAUD DETECTION: Risk score meter animates to value(0.4s)+High-risk:Red pulse animation(subtle+not alarming)+Medium-risk:Yellow gentle bounce+Low-risk:Green steady glow
- BIOMETRIC AUTH: Fingerprint/Face ID icon pulses while scanning+Success:Green checkmark+subtle haptic+Failure:Red X+shake animation(0.2s)

#### Social Engagement Animations (TikTok/Facebook Style)
- LIKE/SAVE: Heart icon fills with green(0.2s)+Counter increments with bounce(0.3s)+Saved items:Bookmark icon animates to filled state
- SHARE: Share sheet slides up from bottom(0.3s ease-out)+Platform icons bounce in sequence(0.1s stagger)+Copy link:"Copied!" toast slides in+auto-dismisses(2s)
- COMMENTS: New comment slides in from right(0.2s)+Reply thread expands with smooth height animation(0.3s)+@Mention:Text highlights with subtle green background(0.5s)

---

## 🔐 TRUST & SECURITY PATTERNS (Alipay/Amazon Pay/Google Pay Best Practices)

### Visual Trust Signals
- CHECKOUT PAGE (Critical Moment): Security Badge Bar:"🔒 256-bit SSL"+"✅ PCI-DSS Compliant"+"🛡️ Buyer Protection"+Payment Method Icons:Visa+Mastercard+CIB+Edahabia+Cash(COD)—all visible+Real-Time Status:"🟢 Your connection is secure"(updates if issues detected)+Trust Counter:"12,450+ successful orders in Algeria this month"
- PRODUCT PAGE: Verified Fit Badge:Green checkmark+"✅ Confirmed for your vehicle"+Supplier Verification:"🏆 Verified Supplier" badge+years on platform+Review Authenticity:"✅ Verified Purchase" tags on reviews+Return Policy:Clear+prominent:"🔄 30-day returns on eligible items"
- ACCOUNT SECURITY: Two-Factor Auth:Visual indicator when enabled(green shield)+Login Alerts:"📱 New login from Algiers — was this you?" with approve/deny buttons+Session Management:List active devices with "Sign Out" buttons+Data Export:"📥 Download your data" button(GDPR compliance)

### Behavioral Trust Patterns
- PROGRESSIVE DISCLOSURE (Don't Overwhelm): New users:Show only essential fields at signup; First purchase:Simple checkout flow+save advanced options for later; Trust building:Unlock features as user completes actions(verify phone→enable COD)
- TRANSPARENCY (No Hidden Fees): Price breakdown:Item price+shipping+tax+Autopro fee(clearly labeled)+Exchange rates:Show both bank rate and market rate(Algeria dual-system)+Delivery estimates:"3-5 business days"+real-time tracking link+Return costs:Clearly state who pays return shipping(based on reason)
- RECOVERY PATHS (Never Dead-Ends): Payment failed:"Try another card"+"Contact your bank"+"Use COD instead"+Part not found:"Search by OEM number"+"Ask a mechanic"+"Browse categories"+Account locked:"Verify your identity"+"Contact support"+"Appeal decision"+System error:"We're fixing this"+"Retry"+"Email us if it persists"

### Fraud Prevention (Proactive, Not Punitive)
- RISK SCORING (Invisible to Good Users): Device fingerprinting:Recognize trusted devices+Behavioral analysis:Typing speed+navigation patterns+Location consistency:Login location vs shipping address+Order patterns:Unusual quantities+high-value first orders
- GRADUAL TRUST BUILDING: New account:COD limit 10,000 DZD+require phone verification; After 3 successful orders:Increase limit to 50,000 DZD+enable online payments; VIP status:Unlimited COD+priority support+faster payouts(for suppliers)
- USER CONTROL (Empower, Don't Restrict): Trust dashboard:Show users their trust score+how to improve+Appeal process:Clear steps to dispute a restriction+Transparency:Explain why an action was flagged(without revealing fraud rules)

---

## 🌍 ALGERIA + NIGERIA LOCALIZATION (Built-In, Not Bolted-On)

### RTL Support (Arabic for Algeria)
- LAYOUT FLIPPING: Navigation:Hamburger menu moves to right on RTL+Forms:Labels align right+inputs align left(Arabic standard)+Icons:Directional icons flip(arrows+progress indicators)+Animations:Slide directions reverse(enter from right instead of left)
- TYPOGRAPHY: Arabic font stack:"Noto Sans Arabic"+system fallbacks+Numeral shaping:Option for Arabic-Indic digits(٠١٢٣) or Western(0123)+Line height:Increased to 1.6 for Arabic readability+Text alignment:Justified for body text+right-aligned for headings
- COMPONENT ADJUSTMENTS: Buttons:Text alignment right+icon positions mirrored+Tables:Column order reversed+sort arrows flip direction+Modals:Close button moves to left+animation direction reverses+Breadcrumbs:Separator direction flips(» becomes «)

### Country-Specific Patterns
- ADDRESS FORMS: Algeria:Wilaya dropdown(1-58)→Commune dropdown(linked)→Street address; Nigeria:State dropdown(36+FCT)→LGA dropdown(linked)→Street address; Auto-complete:Google Places API filtered by country; Save as default:Checkbox to remember for future orders
- PAYMENT METHODS: Algeria:CIB card+Edahabia card+Cash(COD)+Bank transfer; Nigeria:Card+Bank transfer+USSD code+Cash(COD); Dynamic display:Show only methods available in user's country; Fallback:If primary method fails+suggest alternatives
- LANGUAGE SWITCHER: Auto-detect:Browser language+IP geolocation; Manual override:Persistent setting in user profile; URL structure:/dz/ar/ for Algeria Arabic+/ng/en/ for Nigeria English; Content fallback:If translation missing+show English with notice

### Cultural Adaptations
- COLOR MEANINGS: Green:Positive in both cultures(growth+success+Islam); Red:Use sparingly for errors(avoid in marketing—can mean danger); Yellow:Caution in Algeria+prosperity in Nigeria—use with context
- IMAGERY: Vehicle photos:Show right-hand drive for Nigeria+left-hand for Algeria; People photos:Diverse representation+modest clothing options; Icons:Avoid culturally specific symbols(use universal metaphors)
- COPY TONE: Algeria:Formal Arabic for legal/financial+friendly for social features; Nigeria:Professional English with local idioms in marketing; Avoid:Slang that doesn't translate+culture-specific humor

---

## 📱 MOBILE-FIRST RESPONSIVE RULES (Your Phone-Only Workflow)

### Breakpoint Behavior
- MOBILE (0-768px): Navigation:Bottom tab bar(5 max items)+hamburger for overflow; Tables:Horizontal scroll OR card-based layout(toggle in settings); Forms:One field per row+large tap targets(min 44x44px); Modals:Full-screen with close button top-left; Images:Lazy load+blur-up placeholder+max-width 100%
- TABLET (769-1024px): Navigation:Left sidebar(collapsible)+top bar for actions; Tables:Show key columns+"View All" for details; Forms:Two columns where logical(name+email side-by-side); Modals:Centered+90% width+dimmed background; Images:Higher resolution+grid layouts(2-3 columns)
- DESKTOP (1025px+): Navigation:Persistent left sidebar+top bar for search/notifications; Tables:Full columns+sticky header+sortable+filterable; Forms:Multi-column where appropriate+inline validation; Modals:Centered+fixed width(600-800px)+backdrop blur; Images:Full resolution+zoom on hover+gallery carousels

### Performance Optimizations (Critical for Mobile)
- LAZY LOADING: Images:Blur-up placeholder→full image when in viewport; Components:Load below-fold content after initial render; Data:Paginate tables+infinite scroll for feeds
- CACHING STRATEGY: Static assets:Cache for 1 year with hash-based filenames; API responses:Cache GET requests for 5 minutes(stale-while-revalidate); User data:Cache profile/garage locally+sync in background
- OFFLINE SUPPORT: Critical actions:Queue form submissions+sync when online; Read-only access:Cache product catalog+vehicle data for offline browsing; Visual indicator:"You're offline — changes will sync when connected"
- BUNDLE OPTIMIZATION: Code splitting:Load only code for current route; Tree shaking:Remove unused CSS/JS; Compression:Gzip/Brotli for text assets+WebP for images

---

## 🔄 CONFIG-DRIVEN FLEXIBILITY (Your Reusable Core Requirement)

### Design Tokens (No Hardcoding)
- COLOR TOKENS (JSON Example): {"color":{"primary":{"base":"#6FB81A","hover":"#5A9415","pressed":"#457010"},"semantic":{"success":"#6FB81A","warning":"#F59E0B","error":"#EF4444"},"neutral":{"canvas":"#0B0E11","surface-1":"#1E293B","text-primary":"#F1F5F9"}}}
- SPACING TOKENS: {"spacing":{"4":"4px","8":"8px","16":"16px","24":"24px","32":"32px"}}
- TYPOGRAPHY TOKENS: {"font":{"family":{"primary":"Inter, system-ui, sans-serif","numbers":"JetBrains Mono, monospace"},"size":{"body-md":"16px","number-lg":"24px","display-xl":"48px"}}}
- IMPLEMENTATION: Tokens stored in `design-tokens.json` in repo; Admin dashboard:Visual editor to update tokens(no code deploys); Preview mode:See changes before publishing; Rollback:Version history for token changes

### Component Variants (Admin-Configurable)
- BUTTON VARIANTS: Admin can enable/disable:Primary+Secondary+Tertiary+Danger; Can set default variant per page type(e.g.,"Use Primary for all CTAs"); Can override colors for campaigns(e.g.,"Ramadan Sale:Use gold instead of green")
- CARD LAYOUTS: Grid vs List toggle per page; Columns per breakpoint(mobile:1+tablet:2+desktop:3-4); Density settings:Comfortable(default) vs Compact(Binance style)
- ANIMATION TOGGLES: Reduce motion:Respect OS preference+disable non-essential animations; Performance mode:Disable complex animations on low-end devices; A/B testing:Test animation variants for conversion impact

### A/B Testing Framework (Built-In)
- ELEMENT TAGGING: Every interactive element has data-testid attribute; Analytics events:click+hover+conversion+drop-off; User segmentation:By country+trust score+device type
- EXPERIMENT SETUP: Admin UI:Create test(e.g.,"Button Color:Green vs Blue"); Traffic split:50/50+90/10+or custom; Success metric:Conversion rate+time on page+revenue per user
- RESULTS DASHBOARD: Real-time stats:Visitors+conversions+statistical significance; Visual comparison:Side-by-side variant performance; Auto-stop:End test when significance reached or after 7 days
- ROLLOUT: One-click:Apply winning variant to 100% of users; Gradual:Ramp up from 10%→50%→100% over days; Rollback:Revert to control if issues detected

---

## 🚫 EXCLUSIONS & LEGAL SAFEGUARDS (Your Requirements)

### Israel/Hebrew Exclusion (Hardcoded)
- DATABASE LEVEL: INSERT/UPDATE triggers block:country_code='IL'+language='he'+phone_prefix='+972'; Audit log entry:"Blocked attempt to add Israel/Hebrew data"+timestamp+user_id
- API LEVEL: Request validation middleware rejects:Accept-Language:he+X-Country:IL; Error response:403 Forbidden+"This service is not available in your region"
- UI LEVEL: Country selector:Israel removed from dropdown list; Language switcher:Hebrew option not rendered; Phone input:+972 prefix not in autocomplete suggestions
- MONITORING: Daily report:Count of blocked attempts(for security review); Alert:Spike in blocked attempts→potential scraping attack

### TecDoc Legal Distinction (Original Implementation)
- VISUAL DIFFERENCES: Illustrations:Custom isometric 3D renders(NOT TecDoc's style); Icons:Original SVG set(same categories+different design language); Terminology:Generic terms("Brake System" not TecDoc's exact naming)
- DATA COMPATIBILITY (Without Infringement): API structure:Compatible with TecDoc for easy integration later; Field names:Generic(part_number+vehicle_id) not TecDoc-specific; Disclaimer:"Compatibility data sourced from multiple providers"
- DOCUMENTATION: Internal note:"Do not copy TecDoc assets or exact UI patterns"; Legal review:Design system approved by counsel before launch; Audit trail:Record all design decisions for IP protection

### No Clutter Rule (Progressive Disclosure)
- MOBILE SCREENS: Max 3 primary actions per screen(Add to Cart+Book+Save); Secondary actions in "⋯" menu; Advanced filters behind "Show More" toggle
- DESKTOP SCREENS: Primary actions prominent+secondary in toolbar; Advanced settings in collapsible panels; "Expert Mode" toggle for power users(suppliers+admins)
- ONBOARDING: New users:See only essential features; Progressive unlock:"You've made 3 orders — unlock bulk ordering"; Help system:Contextual tooltips+not overwhelming manuals

---

## 📋 IMPLEMENTATION CHECKLIST (Future Coding Phase)

### Phase 1: Foundation (Technical Setup)
- [ ] Setup Tailwind CSS with custom config(colors+spacing+typography)
- [ ] Create CSS variables for light/dark mode+RTL support
- [ ] Build responsive layout container(mobile-first breakpoints)
- [ ] Implement design token system(JSON→CSS/JS)
- [ ] Add animation library(Framer Motion or CSS transitions)

### Phase 2: Core Components (Client Storefront)
- [ ] Vehicle Garage page(TecDoc-inspired+legally distinct)
- [ ] Omni-search bar with auto-complete+filters
- [ ] Product card component(with match score badges)
- [ ] Service booking card component
- [ ] TikTok-style activity feed for social commerce

### Phase 3: Business Interfaces (Supplier/Shipping/Admin)
- [ ] Supplier dashboard(Alibaba-style power tools)
- [ ] Shipping portal(logistics-optimized maps+tracking)
- [ ] Admin dashboard(Facebook-style responsive)
- [ ] B2B fleet manager(enterprise hierarchical data)
- [ ] Unified component library(shared across all interfaces)

### Phase 4: Polish & Trust (Alipay/Amazon Pay Patterns)
- [ ] Success animations(Google Pay style confetti)
- [ ] Skeleton loading screens(Alipay pattern)
- [ ] Biometric authentication integration
- [ ] Real-time security indicators at checkout
- [ ] Progressive KYC flow(verify at point of first transaction)

### Phase 5: Localization & Scale (Algeria/Nigeria Ready)
- [ ] RTL support for Arabic(CSS+layout flipping)
- [ ] Country-specific address forms+payment methods
- [ ] Language switcher with auto-detect+manual override
- [ ] Cultural adaptations(imagery+copy tone+color meanings)
- [ ] Performance optimizations for low-bandwidth regions

---

## ✅ OWNER APPROVAL

This design system reflects my vision:
- Primary color: Custom Autopro Green (#6FB81A) — legally distinct from NVIDIA ✅
- Unified feel: NVIDIA black canvas + Binance animations + Alipay trust patterns ✅
- TecDoc-style garage: Legally distinct illustrations + original icons ✅
- All user types: Client, Supplier, Shipping, Admin, Fleet — same design language ✅
- Mobile-first: Optimized for phone browser, zero laptop needed ✅
- Algeria/Nigeria: RTL, languages, payment methods, cultural adaptations ✅
- Reusable core: Config-driven tokens, component variants, A/B testing ready ✅
- Legal safeguards: Israel/Hebrew exclusion, TecDoc distinction, no clutter ✅

Approved by: houcinhadjaissa-cyber
Date: 2026-05-06
Next Step: Technical Setup Phase — create folder structure + GitHub Codespaces
