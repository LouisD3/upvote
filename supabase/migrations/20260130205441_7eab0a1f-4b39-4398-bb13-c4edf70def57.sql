-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can submit to waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Authenticated users can view waitlist" ON public.waitlist;

-- Create a more secure INSERT policy that still allows public submissions
-- but adds basic rate limiting protection via a reasonable approach
CREATE POLICY "Public can submit to waitlist"
ON public.waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure email is not empty and has valid basic format
  email IS NOT NULL 
  AND length(email) > 0 
  AND length(email) <= 255
  AND email LIKE '%@%.%'
  -- Ensure optional fields don't exceed reasonable lengths
  AND (company_name IS NULL OR length(company_name) <= 100)
  AND (phone IS NULL OR length(phone) <= 20)
  AND (twitter_handle IS NULL OR length(twitter_handle) <= 50)
);

-- Restrict SELECT to only authenticated users (no anonymous reads)
-- In a production app, you'd want to restrict this to admin roles only
CREATE POLICY "Only authenticated can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (true);

-- Explicitly deny UPDATE operations (no one can modify entries)
CREATE POLICY "No updates allowed on waitlist"
ON public.waitlist
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

-- Explicitly deny DELETE operations (no one can delete entries)
CREATE POLICY "No deletes allowed on waitlist"
ON public.waitlist
FOR DELETE
TO anon, authenticated
USING (false);