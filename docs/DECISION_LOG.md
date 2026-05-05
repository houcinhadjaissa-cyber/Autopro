# 🧭 AUTOPRO - DECISION LOG
*Timestamped record of every key decision + commit hash for perfect continuity*

---

## 📋 HOW TO USE THIS FILE
- Every major decision gets an entry here
- Include: Decision, Reason, Owner Approval Date, Commit Hash, Reference File
- If chat crashes: This file + MASTER_WORKFLOW.md = instant recovery

---

## ✅ DECISIONS LOG (2026-05-05 Session)

### Decision: Global ID Format
- **What**: `auto_{project}_{type}_{ulid}` format for all IDs
- **Why**: Sortable, shorter than UUID, URL-safe, works across future projects
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after committing REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md update]
- **Reference File**: `docs/REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md`

### Decision: Multi-Project Isolation (Hybrid Model)
- **What**: Shared core tables + project-specific tables with `project_id`
- **Why**: Reusable brain for future projects while keeping data isolated
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after committing]
- **Reference File**: `docs/REUSABLE_PLATFORM_CORE_AND_ID_SYSTEM.md`

### Decision: Algeria/Nigeria Dual Exchange Rates
- **What**: Bank rate (auto-fetch) + market rate (manual override) per country
- **Why**: Algeria has official + parallel markets; need flexibility for real-world pricing
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after committing PAYMENTS_REFUNDS_RETURNS_CLEAN.md update]
- **Reference File**: `docs/PAYMENTS_REFUNDS_RETURNS_CLEAN.md`

### Decision: 7zap.com-Style Vehicle Garage UI
- **What**: Exploded diagrams, facelift-aware images, category icons, compatibility-filtered results
- **Why**: Owner's vision for intuitive, TecDoc-like user experience
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after committing COMPATIBILITY_ENGINE.md update]
- **Reference File**: `docs/COMPATIBILITY_ENGINE.md`

### Decision: Tech Stack (Mobile-First, Zero-Budget)
- **What**: Next.js + Supabase + Vercel + GitHub Codespaces (all free tier)
- **Why**: Owner has no laptop, zero budget, no coding experience
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after technical setup begins]
- **Reference File**: `docs/ECOSYSTEM_INTEGRATION_PLAN.md`

### Decision: Soft Launch Strategy
- **What**: Invite-only beta, Algeria+Nigeria simultaneous, 5-10 trusted partners who are BOTH suppliers AND service providers
- **Why**: Test core flows with real users before public launch
- **Owner Approved**: 2026-05-05
- **Commit Hash**: [Fill after MVP_SCOPE.md update]
- **Reference File**: `docs/MVP_SCOPE.md`

---

## 🔄 TEMPLATE FOR FUTURE DECISIONS
```markdown
### Decision: [Short title]
- **What**: [What was decided]
- **Why**: [Reason/owner requirement]
- **Owner Approved**: [YYYY-MM-DD]
- **Commit Hash**: [GitHub short hash]
- **Reference File**: `docs/[filename].md`
