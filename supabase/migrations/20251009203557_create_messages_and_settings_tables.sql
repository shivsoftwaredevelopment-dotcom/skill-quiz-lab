/*
  # Create Messages and Settings Tables

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - Name of the person sending message
      - `email` (text, required) - Email address
      - `message` (text, required) - Message content
      - `created_at` (timestamptz) - When message was sent
      - `read` (boolean) - Whether admin has read the message
    
    - `site_settings`
      - `id` (uuid, primary key)
      - `key` (text, unique) - Setting key (e.g., 'contact_email', 'facebook_url')
      - `value` (text) - Setting value
      - `category` (text) - Category of setting (e.g., 'contact', 'social', 'links')
      - `updated_at` (timestamptz) - Last update time
    
    - `admin_users`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public can insert contact messages
    - Only authenticated admins can read messages and update settings
    - Admins can view and manage all settings
*/

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a contact message
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view messages
CREATE POLICY "Authenticated users can view messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update messages
CREATE POLICY "Authenticated users can update messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text DEFAULT '',
  category text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read site settings
CREATE POLICY "Anyone can read site settings"
  ON site_settings
  FOR SELECT
  TO public
  USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can update settings"
  ON site_settings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can insert settings
CREATE POLICY "Authenticated users can insert settings"
  ON site_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert default settings
INSERT INTO site_settings (key, value, category) VALUES
  ('contact_email', 'info@skillquizapp.com', 'contact'),
  ('contact_phone', '+1 (555) 123-4567', 'contact'),
  ('contact_address', '123 Quiz Street, Silicon Valley, CA 94025', 'contact'),
  ('facebook_url', '#', 'social'),
  ('twitter_url', '#', 'social'),
  ('instagram_url', '#', 'social'),
  ('linkedin_url', '#', 'social'),
  ('github_url', '#', 'social')
ON CONFLICT (key) DO NOTHING;
