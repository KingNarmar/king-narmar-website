/** A link may be opened by a scanner. Reading its presence never verifies it.
 * The first explicit activation owns the operation for this document lifetime.
 */
export function createExplicitTokenAction<T>(
  readToken: () => string | null,
  verify: (token: string) => Promise<T>,
  missing: T,
  failed: T,
) {
  let pending: Promise<T> | undefined;
  return {
    activate(): Promise<T> {
      pending ??= Promise.resolve().then(async () => {
        const token = readToken();
        return token ? verify(token) : missing;
      }).catch(() => failed);
      return pending;
    },
  };
}
