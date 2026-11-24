export type ConfirmationOutcome =
  | "confirmed"
  | "missingToken"
  | "unconfigured"
  | "invalidOrUsed"
  | "verificationFailed"
  | "signOutFailed";

type AuthReply = { error: { code?: string } | null };

export interface ConfirmationClient {
  verify(token: string): Promise<AuthReply>;
  signOut(): Promise<AuthReply>;
}

/** One verification per page lifetime, including effect replay. */
export function createConfirmationAttempt(client: ConfirmationClient | null) {
  let pending: Promise<ConfirmationOutcome> | undefined;

  async function execute(token: string | null): Promise<ConfirmationOutcome> {
    if (!token) return "missingToken";
    if (!client) return "unconfigured";
    try {
      const { error } = await client.verify(token);
      if (error) {
        return error.code === "otp_expired" || error.code === "invalid_token"
          ? "invalidOrUsed"
          : "verificationFailed";
      }
    } catch {
      return "verificationFailed";
    }
    try {
      const { error } = await client.signOut();
      return error ? "signOutFailed" : "confirmed";
    } catch {
      return "signOutFailed";
    }
  }

  return {
    run(readToken: () => string | null): Promise<ConfirmationOutcome> {
      pending ??= Promise.resolve().then(() => execute(readToken())).catch(
        (): ConfirmationOutcome => "verificationFailed",
      );
      return pending;
    },
  };
}
