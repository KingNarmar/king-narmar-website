import { createClient } from "@supabase/supabase-js";

/**
 * Recovery tokens create a temporary Auth session after verification.
 * Keep that session in memory, never in the website's persistent Auth store.
 * Closing/navigating away from this document must not leave a saved session.
 */
export const recoveryAuthClientOptions = {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
} as const;

/** Dedicated H.O.R.U.S recovery client; other Auth pages keep their own client. */
export function createRecoveryAuthClient(
  url: string | undefined,
  publishableKey: string | undefined,
  factory: typeof createClient = createClient,
) {
  if (!url || !publishableKey) return null;

  return factory(url, publishableKey, recoveryAuthClientOptions);
}
