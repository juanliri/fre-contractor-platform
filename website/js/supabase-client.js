/**
 * F.R.E. CONTRACTOR L.L.C. — Supabase Client Bridge
 * Handles lead capture, instant estimates, bookings, and commercial RFQs.
 * Features graceful offline localStorage fallback when API keys are not yet configured.
 */

const SUPABASE_CONFIG = {
    // Fill these with your live Supabase project credentials in production
    url: window.__SUPABASE_URL__ || "https://your-project.supabase.co",
    anonKey: window.__SUPABASE_KEY__ || "your-anon-key",
    isConfigured: function() {
        return this.url !== "https://your-project.supabase.co" && this.anonKey !== "your-anon-key";
    }
};

const FRE_DB = {
    /**
     * Submit a General Contact Lead
     */
    async submitLead(leadData) {
        console.log("[FRE DB] Submitting Lead:", leadData);
        if (SUPABASE_CONFIG.isConfigured()) {
            try {
                const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/leads`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": SUPABASE_CONFIG.anonKey,
                        "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`,
                        "Prefer": "return=minimal"
                    },
                    body: JSON.stringify(leadData)
                });
                if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
                return { success: true, mode: "supabase" };
            } catch (err) {
                console.warn("[FRE DB] Live submission failed, falling back to local vault:", err);
            }
        }

        // Local storage fallback for instant offline preview & zero-setup demos
        const localVault = JSON.parse(localStorage.getItem("fre_leads_vault") || "[]");
        localVault.push({ ...leadData, id: "loc_" + Date.now(), created_at: new Date().toISOString() });
        localStorage.setItem("fre_leads_vault", JSON.stringify(localVault));
        return { success: true, mode: "local_vault" };
    },

    /**
     * Submit an Instant Estimate record
     */
    async submitEstimate(estimateData) {
        console.log("[FRE DB] Submitting Estimate:", estimateData);
        if (SUPABASE_CONFIG.isConfigured()) {
            try {
                const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/estimates`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": SUPABASE_CONFIG.anonKey,
                        "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`
                    },
                    body: JSON.stringify(estimateData)
                });
                if (res.ok) return { success: true, mode: "supabase" };
            } catch (err) {
                console.warn("[FRE DB] Live estimate submit failed, falling back:", err);
            }
        }

        const localVault = JSON.parse(localStorage.getItem("fre_estimates_vault") || "[]");
        localVault.push({ ...estimateData, id: "est_" + Date.now(), created_at: new Date().toISOString() });
        localStorage.setItem("fre_estimates_vault", JSON.stringify(localVault));
        return { success: true, mode: "local_vault" };
    },

    /**
     * Submit an On-Site Booking Appointment
     */
    async submitBooking(bookingData) {
        console.log("[FRE DB] Submitting Booking:", bookingData);
        if (SUPABASE_CONFIG.isConfigured()) {
            try {
                const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/bookings`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": SUPABASE_CONFIG.anonKey,
                        "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`
                    },
                    body: JSON.stringify(bookingData)
                });
                if (res.ok) return { success: true, mode: "supabase" };
            } catch (err) {
                console.warn("[FRE DB] Live booking failed:", err);
            }
        }

        const localVault = JSON.parse(localStorage.getItem("fre_bookings_vault") || "[]");
        localVault.push({ ...bookingData, id: "book_" + Date.now(), created_at: new Date().toISOString() });
        localStorage.setItem("fre_bookings_vault", JSON.stringify(localVault));
        return { success: true, mode: "local_vault" };
    },

    /**
     * Submit a Commercial RFQ Bid Package
     */
    async submitCommercialRFQ(rfqData) {
        console.log("[FRE DB] Submitting Commercial RFQ:", rfqData);
        if (SUPABASE_CONFIG.isConfigured()) {
            try {
                const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/commercial_rfqs`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": SUPABASE_CONFIG.anonKey,
                        "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`
                    },
                    body: JSON.stringify(rfqData)
                });
                if (res.ok) return { success: true, mode: "supabase" };
            } catch (err) {
                console.warn("[FRE DB] Live RFQ failed:", err);
            }
        }

        const localVault = JSON.parse(localStorage.getItem("fre_rfq_vault") || "[]");
        localVault.push({ ...rfqData, id: "rfq_" + Date.now(), created_at: new Date().toISOString() });
        localStorage.setItem("fre_rfq_vault", JSON.stringify(localVault));
        return { success: true, mode: "local_vault" };
    }
};

window.FRE_DB = FRE_DB;
