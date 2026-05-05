# Autopro Vehicle ID and History System

This file defines the planned vehicle ID, vehicle history, maintenance records, and media storage system for Autopro.

This system is important for:

- Client garage
- Vehicle maintenance tracking
- Mechanic/service provider records
- Parts replacement history
- Service history
- Vehicle valuation
- Future used-car selling features
- Fleet/B2B reports
- Parts recommendations
- Predictive maintenance
- Platform data intelligence

---

# Core Idea

Each vehicle added to Autopro should receive an internal Autopro Vehicle ID.

This Vehicle ID connects all important vehicle information, including:

- Vehicle owner/client
- VIN if available
- Vehicle type
- Brand/make
- Model
- Year
- Engine
- Trim
- Maintenance history
- Service history
- Parts replaced
- Diagnostics
- Problems found
- Pictures/videos
- Bills/invoices
- Modifications
- Vehicle value-related information

---

# Vehicle ID

Every vehicle should have a unique internal ID.

Example:

```txt
AUTOPRO-VEHICLE-000001
---

# Update: Part Arrival and Installation History

Autopro must track parts ordered for a vehicle and connect them to the vehicle ID.

When a part is ordered for a service, the vehicle history must store:

- Product ID
- Supplier ID
- Service provider ID
- Client ID
- Vehicle ID
- Order ID
- Invoice ID
- Shipping ID if available
- Part ordered date/time
- Part arrival date/time
- Part received by
- Part checked by
- Part condition
- Part accepted or rejected
- Part installed date/time
- Related service record
- Related final invoice

If the part is ordered through Autopro, this tracking must happen automatically.

The part arrival and check status must appear in:

- Autopro database
- Client vehicle garage
- Vehicle history timeline
- Service provider dashboard
- Final invoice/report

This creates a complete record of:

```txt
Part ordered
Part shipped
Part arrived
Part checked
Part installed
Final invoice created
Vehicle history updated
---
## ✅ OWNER-APPROVED DECISIONS (2026-05-05)

### Vehicle ID Format
- Format: `VEH_{country_code}_{vin_hash}_{ulid}`
- Example: `VEH_DZ_8a7f3e2d1c_01JZ8X9Y2K3M4N5P6Q7R8S9T0`
- country_code: DZ (Algeria), NG (Nigeria), etc.
- vin_hash: First 8 chars of SHA-256 hash of VIN (privacy-preserving)
- ulid: Unique, sortable identifier
- Why: Country-specific routing, VIN privacy, fast queries, works across future projects

### Automatic Updates (All Systems)
- Systems that auto-update vehicle history:
  ✓ Product purchase → part installed + timestamp + supplier
  ✓ Service booking → work performed + provider + diagnostics
  ✓ Compatibility check → parts viewed + saved to garage
  ✓ B2B fleet maintenance → scheduled services + compliance records
  ✓ Diagnostics scan → error codes + AI analysis + mechanic notes
  ✓ Part arrival/installation → QR confirmation + photo proof
- Update mechanism: Event-driven architecture (Supabase Realtime/webhooks), failed updates queued + retried 3x, manual sync button in admin dashboard

### Media Storage (Cost-Effective + Fast)
- Recommended: Cloudflare R2 (Primary) + Supabase Storage (Fallback)
- Cloudflare R2: $0.015/GB stored, $0 egress fees, global CDN <100ms latency
- Supabase Storage fallback: Free tier 1GB, then $0.025/GB
- Implementation: Large files (photos/videos/reports) → stored in R2; Metadata (URL, uploader, vehicle_id, timestamp) → stored in PostgreSQL; Access control: R2 signed URLs + PostgreSQL RLS policies
- Cost optimization: Auto-compress images (3 sizes), delete unused files after 30 days, archive old media to cold storage after 2 years

### Privacy Rules (Who Sees What)
- Access Levels:
  1. Owner: Full access to their vehicle history
  2. Authorized Providers: Read-only access to vehicles they serviced (with owner consent)
  3. You + Selected Employees: Full access for support/fraud review (audit logged)
  4. B2B Fleet Managers: Access to vehicles assigned to their company
  5. Public: NEVER sees raw vehicle history (only aggregated, anonymized stats)
- Consent Flow: When booking service → "Allow [Provider] to view vehicle history for this appointment?" [Yes/No]; Consent expires after service completion (unless user sets "Always allow this provider"); All consent decisions logged in audit_logs

### Future Valuation Engine (Research-Based)
- Data Points for Used-Car Value:
  1. Mileage (verified via service records)
  2. Repair history (major vs minor, parts quality)
  3. Accident reports (insurance claims, body shop records)
  4. Number of previous owners (from registration history)
  5. Paint work (detected via service photos + AI analysis)
- Algorithm Sources: carwow.com (market comparison), mobile.de (regional pricing), Chinese platforms Che168/Guazi (AI valuation + fraud detection)
- Implementation: Phase 1 (Soft Launch): Basic formula (mileage + age + service count); Phase 2 (Public Launch): ML model trained on Autopro transaction data; Always show "Estimated Range" not fixed price + disclaimer
