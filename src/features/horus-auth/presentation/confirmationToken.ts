/** Remove the credential before any network operation. Preserve unrelated URL state. */
export function takeConfirmationToken(href: string, replace: (path: string) => void) {
  const url = new URL(href);
  const token = url.searchParams.get("token_hash");
  if (url.searchParams.has("token_hash")) {
    url.searchParams.delete("token_hash");
    replace(url.pathname + url.search + url.hash);
  }
  return token;
}
