import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./ResetPasswordPage.css";

type PageStatus = "checking" | "success" | "error";

export function ConfirmEmailPage() {
  const [status, setStatus] = useState<PageStatus>("checking");
  const [message, setMessage] = useState("Confirming your email address...");

  useEffect(() => {
    async function confirmEmail() {
      const params = new URLSearchParams(window.location.search);
      const tokenHash = params.get("token_hash");

      if (!tokenHash) {
        setStatus("error");
        setMessage(
          "This confirmation link is missing its secure token. Please request a new confirmation email.",
        );
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
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

      await supabase.auth.signOut();

      setStatus("success");
      setMessage(
        "Your email has been confirmed successfully. You can now return to Mina System and sign in.",
      );
    }

    void confirmEmail();
  }, []);

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

        <h1>Confirm your email</h1>

        <p className={`auth-message auth-message-${status}`}>{message}</p>

        {status === "success" && (
          <a className="auth-link-button" href="https://kingnarmar.com">
            Back to KING NARMAR
          </a>
        )}
      </section>
    </main>
  );
}
