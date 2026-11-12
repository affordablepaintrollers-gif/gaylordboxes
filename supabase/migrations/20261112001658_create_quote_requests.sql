/*
# Create quote_requests table (single-tenant, no auth)

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `company` (text, not null) - company name of the seller
  - `contact_name` (text, not null)
  - `email` (text, not null)
  - `phone` (text, nullable)
  - `location` (text, not null) - city/state of the facility
  - `quantity` (text, not null) - approximate number of gaylord boxes (free text, e.g. "2 truckloads (~1,500 boxes)")
  - `condition` (text, nullable) - condition of the boxes (new, like-new, used, mixed)
  - `details` (text, nullable) - additional notes
  - `status` (text, default 'new') - lead pipeline status for the buyer
  - `created_at` (timestamp)

2. Security
- Enable RLS on `quote_requests`.
- Grant INSERT to `anon` + `authenticated` only (public quote form).
- No SELECT grant: submitted quotes are private; only service_role can read.
- INSERT policy scoped to anon + authenticated.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  location text NOT NULL,
  quantity text NOT NULL,
  condition text,
  details text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON quote_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
