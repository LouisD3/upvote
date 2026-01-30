-- Remove the overly permissive SELECT policy
-- Waitlist data should only be accessed via backend/admin tools, not client-side
DROP POLICY IF EXISTS "Only authenticated can view waitlist" ON public.waitlist;

-- No SELECT policy means no one can read waitlist data via client-side Supabase queries
-- Access should be done via Edge Functions with service role key for admin purposes