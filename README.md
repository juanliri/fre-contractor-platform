# F.R.E. Contractor LLC — Enterprise Multi-Sector Platform & Materials Store
### Engineered by TodoBuild Technologies Inc. | Built on Titan Engine

**Client:** F.R.E. CONTRACTOR L.L.C.  
**Entity Standing:** Domestic Limited Liability Company (Active Since 2022)  
**DOS ID:** 6658255 | Bronx, NY  
**HQ:** 2760 Holland Ave, Bronx, NY 10467  
**Phone:** (929) 412-7546  
**Instagram:** [@f.r.e.contractornyc](https://www.instagram.com/f.r.e.contractornyc/)  
**GitHub Repository:** [https://github.com/juanliri/fre-contractor-platform](https://github.com/juanliri/fre-contractor-platform)  

---

## 🏛️ Architecture Overview

An enterprise-grade multi-sector platform engineered to route visitors into dedicated corridors (Residential Homeowners, Commercial Retail Rollouts, Government & NYCHA Housing, and General Contractor Subcontract Bidding).

### 🚀 Key Capabilities Included

1. **Cross-Platform PWA Installation Engine (`website/manifest.json`, `website/sw.js`)**:
   - Installable on **Desktop Windows (PC)**, **Mac (macOS Dock)**, **iPhone & iPad (iOS Home Screen)**, and **Android**.
   - Offline caching, instant reload speed, and zero app store commissions.
2. **Multi-Sector Enterprise Gateway (`portal.html` & automated first-time entrance modal)**:
   - Automated profile selector directing visitors to their tailored corridor.
   - Top-banner corridor quick-switcher accessible from every page.
3. **7 Dedicated Specialized Subpages**:
   - Interior Painting (`service-interior-painting.html`)
   - Spray Cabinet Refinishing (`service-cabinet-refinishing.html`)
   - Popcorn Ceiling Removal & Level 5 Skim-Coat (`service-popcorn-ceiling.html`)
   - Brownstone, Brick & Townhouse Exterior Facades (`service-exterior-painting.html`)
   - Commercial Retail Rollouts (`service-commercial-retail.html`)
   - NYCHA Public Housing Turnovers (`service-nycha-housing.html`)
   - Government & Agency Verification Portal (`government-verification.html`)
4. **Wholesale Materials Store & Quoter (`store.html`)**:
   - Luxury Vinyl Plank (LVP), engineered hardwood, Benjamin Moore Regal Select, and Scuff-X.
   - Interactive SqFt + 10% waste contingency calculator.
   - Dual-mode quoting ("Materials Only" vs. "Turnkey Furnish & Install").
5. **Top-Banner Booking Engine (`booking.html`)**:
   - Live pulse indicator + interactive date/time calendar selector.
6. **Commercial GC Bid Desk (`bid-portal.html`)**:
   - CSI MasterFormat Div 09 blueprint takeoff intake with 24-hr binding turnaround pledge.
7. **Commercial Proposal Flyer & 3-Tier Comparison Matrix (`proposal-flyer.html`)**:
   - Printable 8.5x11 PDF ready flyer comparing Foundation ($2,450), VIP Suite ($4,950), and Dominance ($9,500).

---

## 📂 Project Structure

```
├── website/                         # Web root (Vercel outputDirectory)
│   ├── index.html                   # Master homepage
│   ├── portal.html                  # Multi-Sector Gateway
│   ├── residential.html             # Residential corridor hub
│   ├── commercial.html              # Commercial corridor hub
│   ├── government-verification.html # Gov & NYCHA credential hub
│   ├── bid-portal.html              # General contractor plan room
│   ├── store.html                   # Wholesale flooring & paint store
│   ├── booking.html                 # Appointment calendar
│   ├── estimate.html                # Instant room cost estimator
│   ├── about.html                   # 2022-2026 Interactive timeline
│   ├── portfolio.html               # Project photography showcase
│   ├── reviews.html                 # 5.0 Star verified client reviews
│   ├── contact.html                 # Bronx HQ contact & hours
│   ├── proposal-flyer.html          # Commercial proposal & 3-tier flyer
│   ├── service-*.html               # 6 dedicated specialized subpages
│   ├── manifest.json                # PWA manifest
│   ├── sw.js                        # PWA service worker
│   ├── css/                         # Design system stylesheets
│   ├── js/                          # Modular frontend engine
│   └── assets/                      # Brand logos and high-res photography
├── backend/
│   ├── schema.sql                   # Supabase database schema
│   └── rls_policies.sql             # Row-Level Security policies
├── vercel.json                      # Vercel production routing & clean URLs
└── DEPLOYMENT_GUIDE.md              # Vercel + Supabase deployment instructions
```

---

## 🌐 Live Deployment Instructions

### 1. Deploying to Vercel (1-Click)
1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Select and import repository `juanliri/fre-contractor-platform`.
3. Root Directory: Keep as `./` (the repository root). `vercel.json` will automatically direct output to `website/`.
4. Click **Deploy**. Vercel will deploy your live HTTPS site in ~20 seconds.

### 2. Connecting Supabase Database
1. Go to [https://supabase.com](https://supabase.com) and create or open your project.
2. Open the **SQL Editor** tab.
3. Copy and paste the contents of [`backend/schema.sql`](backend/schema.sql) and [`backend/rls_policies.sql`](backend/rls_policies.sql), then click **Run**.
4. In your Supabase Project Settings ➔ **API**, copy your `Project URL` and `anon public key`.
5. Add them as environment variables in Vercel or in `website/js/supabase-client.js`.
