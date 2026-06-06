import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "../lib/supabaseClient";
import "./ResetPasswordPage.css";

type PageStatus = "checking" | "ready" | "saving" | "success" | "error";

export function ResetPasswordPage() {
  const [status, setStatus] = useState<PageStatus>("checking");
  const [message, setMessage] = useState("Checking your reset link...");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    async function verifyRecoveryToken() {
      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get("token_hash");

      if (!tokenHash) {
        setStatus("error");
        setMessage(
          "This reset link is missing its secure token. Please request a new password reset email."
        );
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "recovery",
      });

      if (error) {
        setStatus("error");
        setMessage(
          "This reset link is invalid or has expired. Please request a new password reset email."
        );
        return;
      }

      setStatus("ready");
      setMessage("Enter a new password for your Mina System account.");
    }

    void verifyRecoveryToken();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setStatus("error");
      setMessage(
        "We could not update your password. Please request a new reset link and try again."
      );
      return;
    }

    await supabase.auth.signOut();

    setStatus("success");
    setPassword("");
    setConfirmPassword("");
    setMessage(
      "Your password has been updated successfully. You can now return to Mina System and sign in with your new password."
    );
  }

  const isFormDisabled = status !== "ready";

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand">
          <span className="auth-logo">KN</span>
          <div>
            <p>KING NARMAR</p>
            <small>Software Solutions</small>
          </div>
        </div>

        <p className="auth-kicker">Mina System Account</p>

        <h1>Reset your password</h1>

        <p className={`auth-message auth-message-${status}`}>{message}</p>

        {status !== "success" && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="new-password">New password</label>
            <input
              id="new-password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={password}
              disabled={isFormDisabled}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter new password"
            />

            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
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

        <p className="auth-footer">
          If you did not request this change, please ignore this page.
        </p>
      </section>
    </main>
  );
}