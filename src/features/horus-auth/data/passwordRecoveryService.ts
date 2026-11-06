import { PasswordRecoveryOperations } from "./passwordRecoveryOperations";
import { createRecoveryAuthClient } from "./recoveryAuthClient";

// This client does not share stored Auth sessions with other H.O.R.U.S pages.
const recoveryClient = createRecoveryAuthClient(
  import.meta.env.VITE_HORUS_SUPABASE_URL,
  import.meta.env.VITE_HORUS_SUPABASE_ANON_KEY,
);

export const horusPasswordRecoveryService = new PasswordRecoveryOperations(
  recoveryClient?.auth ?? null,
);
