import { createRecoveryAuthClient } from "./recoveryAuthClient";
import { createConfirmationAttempt } from "./emailConfirmationOperations";

export function createEmailConfirmationService() {
  // Reuse the isolated, non-persistent Auth client configuration used for recovery.
  const client = createRecoveryAuthClient(
    import.meta.env.VITE_HORUS_SUPABASE_URL,
    import.meta.env.VITE_HORUS_SUPABASE_ANON_KEY,
  );
  return createConfirmationAttempt(
    client
      ? {
          verify: (token) => client.auth.verifyOtp({ token_hash: token, type: "signup" }),
          signOut: () => client.auth.signOut({ scope: "local" }),
        }
      : null,
  );
}
