-- ==============================================================================
-- F.R.E. CONTRACTOR L.L.C. — SUPABASE ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commercial_rfqs ENABLE ROW LEVEL SECURITY;

-- 1. LEADS POLICIES
-- Anyone can submit a lead form
CREATE POLICY "Allow public insert to leads"
    ON public.leads FOR INSERT
    WITH CHECK (true);

-- Only authenticated staff can view leads
CREATE POLICY "Allow authenticated read on leads"
    ON public.leads FOR SELECT
    USING (auth.role() = 'authenticated');

-- Only authenticated staff can update lead status
CREATE POLICY "Allow authenticated update on leads"
    ON public.leads FOR UPDATE
    USING (auth.role() = 'authenticated');

-- 2. ESTIMATES POLICIES
CREATE POLICY "Allow public insert to estimates"
    ON public.estimates FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on estimates"
    ON public.estimates FOR SELECT
    USING (auth.role() = 'authenticated');

-- 3. BOOKINGS POLICIES
CREATE POLICY "Allow public insert to bookings"
    ON public.bookings FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on bookings"
    ON public.bookings FOR SELECT
    USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on bookings"
    ON public.bookings FOR UPDATE
    USING (auth.role() = 'authenticated');

-- 4. COMMERCIAL RFQS POLICIES
CREATE POLICY "Allow public insert to commercial_rfqs"
    ON public.commercial_rfqs FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow authenticated read on commercial_rfqs"
    ON public.commercial_rfqs FOR SELECT
    USING (auth.role() = 'authenticated');
