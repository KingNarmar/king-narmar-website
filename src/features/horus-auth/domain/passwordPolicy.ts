/**
 * H.O.R.U.S hosted Supabase Auth password creation policy.
 * GoTrue counts the minimum in Unicode code points, and applies a 72-byte
 * UTF-8 maximum. This limitation is not a universal 64-Unicode-character cap.
 * Never trim, normalize, truncate, or transform passwords.
 */
export const HORUS_PASSWORD_MIN_LENGTH = 15;
export const HORUS_PASSWORD_MAX_UTF8_BYTES = 72;

export type PasswordCreationValidation = "valid" | "tooShort" | "tooLong";

export function validateNewPassword(
  password: string,
): PasswordCreationValidation {
  if (Array.from(password).length < HORUS_PASSWORD_MIN_LENGTH) {
    return "tooShort";
  }

  if (new TextEncoder().encode(password).byteLength > HORUS_PASSWORD_MAX_UTF8_BYTES) {
    return "tooLong";
  }

  return "valid";
}

export function isValidNewPassword(password: string): boolean {
  return validateNewPassword(password) === "valid";
}
