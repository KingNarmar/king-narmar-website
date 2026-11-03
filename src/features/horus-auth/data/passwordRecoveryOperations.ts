export type TokenVerificationOutcome = "verified" | "invalid" | "unconfigured";
export type PasswordUpdateOutcome =
  | "updated"
  | "updateFailed"
  | "signOutFailed"
  | "unconfigured";

/** Minimal auth boundary; the SDK is injected by the Data adapter. */
export interface PasswordRecoveryAuthGateway {
  verifyOtp(input: {
    token_hash: string;
    type: "recovery";
  }): Promise<{ error: unknown }>;
  updateUser(input: { password: string }): Promise<{ error: unknown }>;
  signOut(): Promise<{ error: unknown }>;
}

/** Handles recovery mutations without exposing backend errors to the UI. */
export class PasswordRecoveryOperations {
  private readonly gateway: PasswordRecoveryAuthGateway | null;

  constructor(gateway: PasswordRecoveryAuthGateway | null) {
    this.gateway = gateway;
  }

  async verifyToken(tokenHash: string): Promise<TokenVerificationOutcome> {
    if (!this.gateway) return "unconfigured";

    try {
      const { error } = await this.gateway.verifyOtp({
        token_hash: tokenHash,
        type: "recovery",
      });
      return error ? "invalid" : "verified";
    } catch {
      return "invalid";
    }
  }

  async updatePasswordAndSignOut(password: string): Promise<PasswordUpdateOutcome> {
    if (!this.gateway) return "unconfigured";

    try {
      const { error } = await this.gateway.updateUser({ password });
      if (error) return "updateFailed";
    } catch {
      return "updateFailed";
    }

    try {
      const { error } = await this.gateway.signOut();
      return error ? "signOutFailed" : "updated";
    } catch {
      return "signOutFailed";
    }
  }
}
