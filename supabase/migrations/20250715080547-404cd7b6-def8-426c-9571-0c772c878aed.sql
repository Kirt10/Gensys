
-- Add new columns to the profiles table for additional profile information
ALTER TABLE public.profiles 
ADD COLUMN phone TEXT,
ADD COLUMN company TEXT,
ADD COLUMN position TEXT,
ADD COLUMN address TEXT,
ADD COLUMN bio TEXT;
