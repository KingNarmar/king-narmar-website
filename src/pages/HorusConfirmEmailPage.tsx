import { useEffect, useState } from "react";
import { horusSupabase } from "../lib/horusSupabaseClient";
import "./ResetPasswordPage.css";
import "./HorusAuthPage.css";

type PageStatus = "checking" | "success" | "error";

export function HorusConfirmEmailPage() {
  const [status, setStatus] = useState<PageStatus>("checking");
  const [message, setMessage] = useState("Confirming your H.O.R.U.S account...");

  useEffect(() => {
    async function confirmEmail() {
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
          "This confirmation link is missing its secure token. Please request a new confirmation email.",
        );
        return;
      }

      const { error } = await horusSupabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "signup",
      });

      if (error) {
        setStatus("error");
        setMessage(
          "This confirmation link is invalid or has expired. Please request a new confirmation email.",
        );
        return;
      }

      await horusSupabase.auth.signOut();

      setStatus("success");
      setMessage(
        "Your email has been confirmed successfully. You can now return to H.O.R.U.S System and sign in.",
      );
    }

    void confirmEmail();
  }, []);

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

        <p className="auth-kicker">Secure Account Verification</p>

        <h1>
          Confirm <span>your email</span>
        </h1>

        <p className={`auth-message auth-message-${status}`}>{message}</p>

        {status === "success" && (
          <a className="auth-link-button" href="https://kingnarmar.com">
            Back to KING NARMAR
          </a>
        )}

        <p className="auth-footer">
          If you did not create a H.O.R.U.S System account, you can safely ignore
          this page.
        </p>
      </section>
    </main>
  );
}
