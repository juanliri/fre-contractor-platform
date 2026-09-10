# F.R.E. Contractor LLC — Deployment Guide

**Client:** F.R.E. CONTRACTOR L.L.C.  
**DOS ID:** 6658255 | Bronx, NY 10467  
**Prepared by:** TodoBuild Technologies Inc.  
**Domain:** frecontractor.com

---

## ⚡ Step 1: Deploy Website to Vercel (5 Minutes)

### Option A — GitHub + Vercel (Recommended)
1. Create a new GitHub repository (e.g., `fre-contractor-website`).
2. Upload the entire `FRE_CONTRACTOR_CLIENT_PACKAGE/` folder contents.
3. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import your GitHub repo.
4. Vercel auto-detects `vercel.json` — no build command needed.
5. Set **Output Directory** to `website`.
6. Click **Deploy**. Your site is live in ~60 seconds.

### Option B — Vercel CLI
```bash
npm install -g vercel
cd FRE_CONTRACTOR_CLIENT_PACKAGE
vercel --prod
```

### Custom Domain (frecontractor.com)
1. In Vercel Dashboard → Project Settings → Domains.
2. Add `frecontractor.com` and `www.frecontractor.com`.
3. Update your domain registrar DNS with the CNAME Vercel provides.

---

## ⚡ Step 2: Create Supabase Project (10 Minutes)

1. Go to [supabase.com](https://supabase.com) → **New Project**.
2. Name: `fre-contractor` | Region: `East US (Virginia)`.
3. Go to **SQL Editor** → paste the contents of `backend/schema.sql` → Run.
4. Then paste `backend/rls_policies.sql` → Run.
5. Go to **Project Settings → API**:
   - Copy your **Project URL**
   - Copy your **anon public** key.

---

## ⚡ Step 3: Connect Website to Supabase

Open `website/js/supabase-client.js` and replace:
```js
url: "https://your-project.supabase.co"
anonKey: "your-anon-key"
```
With your actual credentials from Step 2.

**Or** set them as Vercel Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Then inject them in a `<script>` tag before loading `supabase-client.js`:
```html
<script>
  window.__SUPABASE_URL__ = "https://yourproject.supabase.co";
  window.__SUPABASE_KEY__ = "your-anon-key";
</script>
```

---

## Step 4: View Your Leads & Store Orders (Supabase Dashboard)

1. Log into [supabase.com](https://supabase.com).
2. Open your project → **Table Editor**.
3. You will see 6 live operational tables:
   - `leads`: Contact and quote inquiries
   - `estimates`: 4-step instant price calculator submissions
   - `bookings`: On-site appointment requests (syncable with Google Calendar)
   - `commercial_rfqs`: GC, NYCHA, and retail RFQs with digital signatures
   - `products`: Flooring and paint supplies catalog
   - `material_orders`: Direct material orders and turnkey furnish & install quotes
4. All form submissions and store orders appear here in real time.

---

## ⚡ Step 5: Google Workspace Integration (Google Calendar & Gmail)

1. **Email Routing**: Set your custom domain MX records in your DNS registrar pointing to Google Workspace (`ASPMX.L.GOOGLE.COM`).
2. **Instant Lead Alerts**: Use Supabase Database Webhooks (under Project Settings → Webhooks) to dispatch new rows from `leads`, `bookings`, and `material_orders` to a simple Google Apps Script or Zapier/Make webhook.
3. **Google Calendar Booking Sync**: Any row inserted into `bookings` triggers automatic calendar invite dispatch to `info@frecontractor.com` with customer address and requested appointment slot.

---

## Offline Preview (No Internet Required)

Double-click **`ABRIR_SITIO_LOCAL.bat`** to open the website in your default browser — no server needed.

---

## Support

For technical issues with this package, contact:  
**TodoBuild Technologies Inc.**  
📞 (646) 580-3090  
✉ contracts@todobuild.us  
🌐 todobuild.us
