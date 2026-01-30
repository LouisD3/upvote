-- Create waitlist table to store signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  company_name TEXT,
  phone TEXT,
  twitter_handle TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the waitlist form)
CREATE POLICY "Anyone can submit to waitlist"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading/updating/deleting for authenticated admins (future use)
CREATE POLICY "Authenticated users can view waitlist"
  ON public.waitlist
  FOR SELECT
  TO authenticated
  USING (true);