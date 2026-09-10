-- ==============================================================================
-- F.R.E. CONTRACTOR L.L.C. — SUPABASE POSTGRESQL DATABASE SCHEMA
-- Entity: F.R.E. CONTRACTOR L.L.C. (DOS ID: 6658255 | Bronx, NY)
-- ==============================================================================

-- Enable UUID generation extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. LEADS TABLE (Contact & Consultation requests)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    borough TEXT DEFAULT 'Bronx',
    address TEXT,
    service_type TEXT NOT NULL,
    corridor TEXT DEFAULT 'residential', -- 'residential' or 'commercial'
    message TEXT,
    preferred_language TEXT DEFAULT 'en', -- 'en' or 'es'
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'estimating', 'won', 'lost'
    source TEXT DEFAULT 'website_contact_form'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_service_type ON public.leads(service_type);

-- 2. ESTIMATES TABLE (Instant Calculator Submissions)
CREATE TABLE IF NOT EXISTS public.estimates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    project_type TEXT NOT NULL, -- 'interior_paint', 'exterior_paint', 'cabinets', 'popcorn_removal', 'commercial_turnover'
    scope_details JSONB DEFAULT '{}'::jsonb,
    estimated_min_price NUMERIC(10, 2) NOT NULL,
    estimated_max_price NUMERIC(10, 2) NOT NULL,
    status TEXT DEFAULT 'pending_review'
);

CREATE INDEX IF NOT EXISTS idx_estimates_created_at ON public.estimates(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_estimates_project_type ON public.estimates(project_type);

-- 3. BOOKINGS TABLE (On-site Estimate Appointments)
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    service_requested TEXT NOT NULL,
    project_address TEXT NOT NULL,
    borough TEXT DEFAULT 'Bronx',
    appointment_date DATE NOT NULL,
    appointment_time_slot TEXT NOT NULL,
    notes TEXT,
    status TEXT DEFAULT 'pending'
);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON public.bookings(appointment_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);

-- 4. COMMERCIAL RFQS TABLE (General Contractors, NYCHA, Retail)
CREATE TABLE IF NOT EXISTS public.commercial_rfqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    project_name TEXT NOT NULL,
    project_location TEXT NOT NULL,
    facility_type TEXT,
    scope_summary TEXT NOT NULL,
    estimated_sqft INTEGER,
    target_start_date DATE,
    target_completion_date DATE,
    coi_limit_required TEXT DEFAULT '$2,000,000',
    prevailing_wage_required BOOLEAN DEFAULT FALSE,
    bid_deadline DATE,
    status TEXT DEFAULT 'rfq_received'
);

CREATE INDEX IF NOT EXISTS idx_rfqs_created_at ON public.commercial_rfqs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_rfqs_company ON public.commercial_rfqs(company_name);

-- 5. PRODUCTS TABLE (Contractor Materials Catalog)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'flooring', 'paint', 'sundries'
    price NUMERIC(10, 2) NOT NULL,
    unit TEXT NOT NULL, -- 'sqft', 'gallon', 'box', 'kit'
    coverage_sqft NUMERIC(10, 2) DEFAULT 1,
    description TEXT,
    in_stock BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. MATERIAL ORDERS TABLE (E-Commerce Store & Turnkey Bundles)
CREATE TABLE IF NOT EXISTS public.material_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT,
    delivery_address TEXT NOT NULL,
    fulfillment_type TEXT DEFAULT 'delivery', -- 'delivery', 'bundle', 'pickup'
    items JSONB NOT NULL DEFAULT '[]'::jsonb,
    subtotal NUMERIC(10, 2) NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    status TEXT DEFAULT 'order_received', -- 'order_received', 'confirmed', 'dispatched', 'installed'
    notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.material_orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.material_orders(status);

