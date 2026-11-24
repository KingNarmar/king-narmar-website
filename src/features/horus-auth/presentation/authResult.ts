export const HORUS_AUTH_RESULT_PATH = "/horus/auth/confirmed";

export type AuthResult = "directAccess" | "callback" | "expired" | "error";

/**
 * A URL describes a redirect, not a verified identity or session.
 * Only the native application can establish its own authenticated session.
 */
export function readAuthResult(href: string): AuthResult {
  const url = new URL(href);
  const parameters = [
    url.searchParams,
    new URLSearchParams(url.hash.slice(1)),
  ];
  const errorKeys = ["error", "error_code", "error_description"];
  const hasError = parameters.some((params) =>
    errorKeys.some((key) => params.has(key)),
  );

  if (hasError) {
    const codes = parameters.flatMap((params) => params.getAll("error_code"));
    return codes.length > 0 && codes.every((code) => code === "otp_expired")
      ? "expired"
      : "error";
  }

  return parameters.some((params) => Boolean(params.get("code")))
    ? "callback"
    : "directAccess";
}

/**
 * Capture once at bootstrap, outside React rendering/StrictMode. This dedicated
 * handoff route needs no query or fragment after the outcome has been read.
 * Other routes, including legacy verification and recovery, remain untouched.
 */
export function captureAuthResult(
  href: string,
  replace: (path: string) => void,
): AuthResult {
  const url = new URL(href);
  if (url.pathname.replace(/\/+$/, "") !== HORUS_AUTH_RESULT_PATH) {
    return "directAccess";
  }

  const result = readAuthResult(href);
  if (url.search || url.hash) {
    replace(url.pathname);
  }
  return result;
}
