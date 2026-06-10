import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { horusSupabase } from "../lib/horusSupabaseClient";
import "./ResetPasswordPage.css";
import "./HorusAuthPage.css";

type PageStatus = "checking" | "ready" | "saving" | "success" | "error";

export function HorusResetPasswordPage() {
  const [status, setStatus] = useState<PageStatus>("checking");
  const [message, setMessage] = useState("Checking your H.O.R.U.S reset link...");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function verifyRecoveryToken() {
      if (!horusSupabase) {
        setStatus("error");
        setMessage(
          "H.O.R.U.S authentication is not configured on this website yet.",
        );
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get("token_hash");

      if (!tokenHash) {
        setStatus("error");
        setMessage(
          "This reset link is missing its secure token. Please request a new password reset email.",
        );
        return;
      }

      const { error } = await horusSupabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "recovery",
      });

      if (error) {
        setStatus("error");
        setMessage(
          "This reset link is invalid or has expired. Please request a new password reset email.",
        );
        return;
      }

      setStatus("ready");
      setMessage("Enter a new password for your H.O.R.U.S System account.");
    }

    void verifyRecoveryToken();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!horusSupabase) {
      setStatus("error");
      setMessage("H.O.R.U.S authentication is not configured on this website yet.");
      return;
    }

    if (password.length < 8) {
      setStatus("ready");
      setMessage("Your new password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("ready");
      setMessage("The two passwords do not match.");
      return;
    }

    setStatus("saving");
    setMessage("Updating your password...");

    const { error } = await horusSupabase.auth.updateUser({
      password,
    });

    if (error) {
      setStatus("error");
      setMessage(
        "We could not update your password. Please request a new reset link and try again.",
      );
      return;
    }

    await horusSupabase.auth.signOut();

    setStatus("success");
    setPassword("");
    setConfirmPassword("");
    setMessage(
      "Your password has been updated successfully. You can now return to H.O.R.U.S System and sign in with your new password.",
    );
  }

  const isFormDisabled = status !== "ready";

  return (
    <main className="auth-page horus-auth-page">
      <section className="auth-card">
        <div className="auth-brand">
          <span className="auth-logo">HR</span>
          <div>
            <p>H.O.R.U.S SYSTEM</p>
            <small>Heavy Operations & Route Unified System</small>
          </div>
        </div>

        <p className="auth-kicker">Secure Password Recovery</p>

        <h1>
          Reset <span>your password</span>
        </h1>

        <p className={`auth-message auth-message-${status}`}>{message}</p>

        {status !== "success" && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="horus-new-password">New password</label>
            <input
              id="horus-new-password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={password}
              disabled={isFormDisabled}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter new password"
            />

            <label htmlFor="horus-confirm-password">Confirm password</label>
            <input
              id="horus-confirm-password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={confirmPassword}
              disabled={isFormDisabled}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm new password"
            />

            <button type="submit" disabled={isFormDisabled}>
              {status === "saving" ? "Updating..." : "Update password"}
            </button>
          </form>
        )}

        {status === "success" && (
          <a className="auth-link-button" href="https://kingnarmar.com">
            Back to KING NARMAR
          </a>
        )}

        <div className="auth-help-card">
          <strong>Security note</strong>
          If you did not request this password reset, you can safely ignore this
          page and keep using your current password.
        </div>
      </section>
    </main>
  );
}
