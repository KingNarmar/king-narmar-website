/**
 * H.O.R.U.S credential creation policy.
 * Matches Flutter's PasswordPolicy and the approved issue #349 contract.
 * Array.from counts Unicode code points rather than UTF-16 code units.
 */
export const HORUS_PASSWORD_MIN_LENGTH = 15;

export function isValidNewPassword(password: string): boolean {
  return Array.from(password).length >= HORUS_PASSWORD_MIN_LENGTH;
}
