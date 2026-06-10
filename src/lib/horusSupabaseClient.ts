import { createClient } from "@supabase/supabase-js";

const horusSupabaseUrl = import.meta.env.VITE_HORUS_SUPABASE_URL;
const horusSupabaseAnonKey = import.meta.env.VITE_HORUS_SUPABASE_ANON_KEY;

export const isHorusSupabaseConfigured = Boolean(
  horusSupabaseUrl && horusSupabaseAnonKey,
);

export const horusSupabase = isHorusSupabaseConfigured
  ? createClient(horusSupabaseUrl, horusSupabaseAnonKey)
  : null;
