// Safe Placeholder Client for Phase 2 (Frontend Foundation)
// Completely bypasses Vercel build package errors while keeping stores happy.

export const supabase = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
  },
  from: (table: string) => ({
    select: async () => ({ data: [], error: null }),
  }),
};

export const supabaseUrl = "https://ornbjhcsgxjvloeepojj.supabase.co";
