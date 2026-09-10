/**
 * F.R.E. CONTRACTOR L.L.C. — Core Application Engine
 * Handles:
 * - EN/ES bilingual toggle
 * - Nav scroll behavior
 * - Modal system (Estimate Unlock, Contact, Booking, Commercial RFQ)
 * - Toast notifications
 * - FAQ Accordion
 * - Mobile nav toggle
 * - Form submissions via FRE_DB bridge
 */

/* ─── TRANSLATION DICTIONARY ─────────────────────────────────── */
const TRANSLATIONS = {
    en: {
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_reviews: "Reviews",
        nav_estimate: "Get Free Estimate",
        hero_badge: "Bronx-Based · 5.0 ★ Rated · Background Checked",
        hero_title_1: "The Bronx's Most",
        hero_title_2: "Trusted Painting",
        hero_title_3: "Contractor",
        hero_subtitle: "From NYCHA housing renovations to T-Mobile and Chuck E. Cheese commercial buildouts — F.R.E. Contractor delivers premium results. Fast. Reliable. Efficient.",
        cta_estimate: "Calculate My Estimate",
        cta_commercial: "Commercial / GC Bidding",
        stat_years: "Years in Business",
        stat_crew: "Person Crew",
        stat_rating: "Star Rated",
        trust_insured: "Fully Insured",
        trust_insured_sub: "$2M COI Available",
        trust_nycha: "NYCHA Certified",
        trust_nycha_sub: "Housing Authority Partner",
        trust_licensed: "NYC Licensed",
        trust_licensed_sub: "DCWP Compliant",
        trust_boroughs: "All 5 Boroughs",
        trust_boroughs_sub: "& Northern NJ",
        residential_tag: "Residential Services",
        residential_title: "Transform Your Home",
        residential_desc: "Expert interior and exterior painting, kitchen cabinet refinishing, popcorn ceiling removal, and decorative finishes for Bronx homeowners.",
        commercial_tag: "Commercial & Institutional",
        commercial_title: "Commercial Ready",
        commercial_desc: "Full-service painting contractor for retail rollouts, NYCHA housing, office spaces, and multi-family properties. GC bid packages available.",
        estimator_title: "Instant Cost Estimator",
        estimator_type_interior: "Interior Paint",
        estimator_type_cabinets: "Cabinet Refinish",
        estimator_type_popcorn: "Popcorn Removal",
        estimator_type_commercial: "Commercial",
        label_rooms: "Number of Rooms",
        label_sqft: "Square Footage",
        label_cabinets: "Cabinet Doors & Drawers",
        label_prep: "Surface Preparation Level",
        prep_standard: "Standard (Ready to Paint)",
        prep_moderate: "Moderate (Minor Repairs Needed)",
        prep_heavy: "Heavy (Significant Prep Required)",
        unlock_btn: "Unlock Full Breakdown & Book Estimate",
        disclaimer: "* Estimates are for budgeting purposes. Final pricing confirmed after on-site visual inspection.",
        modal_title: "Unlock Your Estimate",
        modal_subtitle: "Enter your info to receive your full itemized breakdown and schedule your free on-site estimate.",
        label_name: "Full Name",
        label_phone: "Phone Number",
        label_email: "Email Address",
        label_borough: "Borough / Area",
        submit_btn: "Send My Estimate →",
        toast_success: "✅ Received! We'll call you within 2 hours.",
        faq_title: "Frequently Asked Questions",
        footer_desc: "Fast · Reliable · Efficient. Serving the Bronx and all five NYC boroughs since 2022.",
    },
    es: {
        nav_services: "Servicios",
        nav_portfolio: "Portafolio",
        nav_about: "Nosotros",
        nav_reviews: "Reseñas",
        nav_estimate: "Cotización Gratis",
        hero_badge: "Basado en el Bronx · Calificación 5.0 ★ · Verificado",
        hero_title_1: "El Contratista de",
        hero_title_2: "Pintura Más",
        hero_title_3: "Confiable del Bronx",
        hero_subtitle: "Desde renovaciones de viviendas NYCHA hasta locales comerciales como T-Mobile y Chuck E. Cheese — F.R.E. Contractor entrega resultados premium. Rápido. Confiable. Eficiente.",
        cta_estimate: "Calcular Mi Presupuesto",
        cta_commercial: "Contratistas / Subcontratistas",
        stat_years: "Años de Experiencia",
        stat_crew: "Persona de Equipo",
        stat_rating: "Calificación de Estrellas",
        trust_insured: "Totalmente Asegurado",
        trust_insured_sub: "COI de $2M Disponible",
        trust_nycha: "Certificado NYCHA",
        trust_nycha_sub: "Socio de Autoridad de Vivienda",
        trust_licensed: "Licenciado en NYC",
        trust_licensed_sub: "Cumplimiento DCWP",
        trust_boroughs: "Los 5 Distritos",
        trust_boroughs_sub: "& Norte de NJ",
        residential_tag: "Servicios Residenciales",
        residential_title: "Transforma Tu Hogar",
        residential_desc: "Pintura interior y exterior experta, remodelación de gabinetes de cocina, eliminación de techos de palomitas de maíz y acabados decorativos.",
        commercial_tag: "Comercial e Institucional",
        commercial_title: "Listo para Comerciales",
        commercial_desc: "Contratista de pintura de servicio completo para locales comerciales, viviendas NYCHA, oficinas y propiedades multifamiliares.",
        estimator_title: "Estimador de Costos Instantáneo",
        estimator_type_interior: "Pintura Interior",
        estimator_type_cabinets: "Refinish Gabinetes",
        estimator_type_popcorn: "Remoción Techo",
        estimator_type_commercial: "Comercial",
        label_rooms: "Número de Habitaciones",
        label_sqft: "Pies Cuadrados",
        label_cabinets: "Puertas y Cajones de Gabinete",
        label_prep: "Nivel de Preparación de Superficie",
        prep_standard: "Estándar (Listo para Pintar)",
        prep_moderate: "Moderado (Reparaciones Menores)",
        prep_heavy: "Pesado (Preparación Significativa)",
        unlock_btn: "Desbloquear Desglose Completo y Reservar",
        disclaimer: "* Las estimaciones son para presupuestación. El precio final se confirma después de la inspección en persona.",
        modal_title: "Desbloquear Tu Estimado",
        modal_subtitle: "Ingresa tu información para recibir el desglose detallado y agendar tu estimado gratuito.",
        label_name: "Nombre Completo",
        label_phone: "Número de Teléfono",
        label_email: "Correo Electrónico",
        label_borough: "Distrito / Área",
        submit_btn: "Enviar Mi Estimado →",
        toast_success: "✅ ¡Recibido! Te llamaremos en 2 horas.",
        faq_title: "Preguntas Frecuentes",
        footer_desc: "Rápido · Confiable · Eficiente. Sirviendo el Bronx y los cinco distritos de NYC desde 2022.",
    }
};

/* ─── STATE ──────────────────────────────────────────────────── */
let currentLang = localStorage.getItem("fre_lang") || "en";

/* ─── LANGUAGE ENGINE ────────────────────────────────────────── */
function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("fre_lang", lang);
    const t = TRANSLATIONS[lang];
    document.querySelectorAll("[data-t]").forEach(el => {
        const key = el.getAttribute("data-t");
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll("[data-t-placeholder]").forEach(el => {
        const key = el.getAttribute("data-t-placeholder");
        if (t[key]) el.placeholder = t[key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

/* ─── NAVBAR SCROLL BEHAVIOR ─────────────────────────────────── */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".site-nav");
    if (nav) {
        nav.style.boxShadow = window.scrollY > 48 ? "0 4px 24px rgba(0,0,0,0.55)" : "none";
    }
}, { passive: true });



/* ─── TOAST SYSTEM ───────────────────────────────────────────── */
function showToast(msg, isError = false) {
    let toast = document.getElementById("fre-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "fre-toast";
        toast.className = "toast-msg";
        document.body.appendChild(toast);
    }
    toast.style.borderLeftColor = isError ? "#EF4444" : "var(--green-patina)";
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4200);
}

/* ─── MODAL ENGINE ───────────────────────────────────────────── */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("open");
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("open");
}

// Close on backdrop click
document.querySelectorAll(".modal-backdrop").forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
    });
});

document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal-backdrop").classList.remove("open");
    });
});

// Expose to estimator.js
window.openEstimateModal = function(estimateData) {
    const minEl = document.getElementById("modal-est-min");
    const maxEl = document.getElementById("modal-est-max");
    if (minEl && estimateData) minEl.textContent = estimateData.min_price ? `$${estimateData.min_price.toLocaleString()}` : "";
    if (maxEl && estimateData) maxEl.textContent = estimateData.max_price ? `$${estimateData.max_price.toLocaleString()}` : "";
    openModal("modal-estimate-unlock");
};

/* ─── ESTIMATE UNLOCK FORM ───────────────────────────────────── */
const estForm = document.getElementById("form-estimate-unlock");
if (estForm) {
    estForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = estForm.querySelector("button[type=submit]");
        const orig = btn.textContent;
        btn.textContent = "Sending…";
        btn.disabled = true;

        const est = window.__CURRENT_ESTIMATE__ || {};
        const result = await FRE_DB.submitEstimate({
            full_name: estForm.full_name.value,
            phone: estForm.phone.value,
            email: estForm.email.value,
            project_type: est.project_type || "interior_paint",
            scope_details: est,
            estimated_min_price: est.min_price || 0,
            estimated_max_price: est.max_price || 0
        });

        closeModal("modal-estimate-unlock");
        showToast(TRANSLATIONS[currentLang].toast_success);
        btn.textContent = orig;
        btn.disabled = false;
        estForm.reset();
    });
}

/* ─── CONTACT FORM ───────────────────────────────────────────── */
const contactForm = document.getElementById("form-contact");
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector("button[type=submit]");
        btn.textContent = "Sending…";
        btn.disabled = true;

        await FRE_DB.submitLead({
            full_name: contactForm.full_name.value,
            phone: contactForm.phone.value,
            email: contactForm.email.value,
            borough: contactForm.borough?.value || "Bronx",
            service_type: contactForm.service_type?.value || "Interior Painting",
            message: contactForm.message?.value || "",
            corridor: "residential"
        });

        showToast(TRANSLATIONS[currentLang].toast_success);
        btn.textContent = "Message Sent ✓";
        setTimeout(() => { btn.textContent = "Send Message →"; btn.disabled = false; contactForm.reset(); }, 3000);
    });
}

/* ─── COMMERCIAL RFQ FORM ────────────────────────────────────── */
const rfqForm = document.getElementById("form-commercial-rfq");
if (rfqForm) {
    rfqForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const btn = rfqForm.querySelector("button[type=submit]");
        btn.textContent = "Submitting RFQ…";
        btn.disabled = true;

        await FRE_DB.submitCommercialRFQ({
            company_name: rfqForm.company_name.value,
            contact_name: rfqForm.contact_name.value,
            email: rfqForm.email.value,
            phone: rfqForm.phone.value,
            project_name: rfqForm.project_name.value,
            project_location: rfqForm.project_location.value,
            facility_type: rfqForm.facility_type?.value || "",
            scope_summary: rfqForm.scope_summary.value,
            estimated_sqft: parseInt(rfqForm.estimated_sqft?.value) || null,
            coi_limit_required: rfqForm.coi_limit?.value || "$2,000,000"
        });

        showToast("✅ RFQ Received! We'll respond with a formal bid package within 24 hours.");
        btn.textContent = "RFQ Submitted ✓";
        setTimeout(() => { btn.textContent = "Submit Bid Request →"; btn.disabled = false; rfqForm.reset(); }, 3500);
    });
}

/* ─── FAQ ACCORDION ──────────────────────────────────────────── */
function initFAQ() {
    document.querySelectorAll(".faq-trigger, .faq-btn, .faq-q").forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const item = trigger.closest(".faq-item");
            if (!item) return;
            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
            if (!isOpen) item.classList.add("open");
        });
    });
}

/* ─── INIT ───────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    initFAQ();
});
