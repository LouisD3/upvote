-- Add a restrictive SELECT policy to prevent public read access to sensitive waitlist data
-- Only service role (backend/admin) will be able to read this data
CREATE POLICY "No public read access on waitlist"
ON public.waitlist
FOR SELECT
USING (false);