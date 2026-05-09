import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ornbjhcsgxjvloeepojj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybmJqaGNzZ3hqdmxvZWVwb2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NzI4MDAsImV4cCI6MjAzMTQ0ODgwMH0.placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
