import { horusSupabase } from "../../../lib/horusSupabaseClient";
import { PasswordRecoveryOperations } from "./passwordRecoveryOperations";

export const horusPasswordRecoveryService = new PasswordRecoveryOperations(
  horusSupabase,
);
