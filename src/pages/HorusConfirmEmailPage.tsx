import { useEffect, useRef, useState } from "react";
import { createEmailConfirmationService } from "../features/horus-auth/data/emailConfirmationService";
import { takeConfirmationToken } from "../features/horus-auth/presentation/confirmationToken";
import {
  confirmationCopy,
  type ConfirmationLocale,
  type ConfirmationMessage,
} from "../features/horus-auth/presentation/emailConfirmationCopy";
import "./ResetPasswordPage.css";
import "./HorusAuthPage.css";

export function HorusConfirmEmailPage() {
  const [locale, setLocale] = useState<ConfirmationLocale>(() =>
    navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en",
  );
  const [message, setMessage] = useState<ConfirmationMessage>("checking");
  const attempt = useRef<ReturnType<typeof createEmailConfirmationService> | null>(null);

  useEffect(() => {
    attempt.current ??= createEmailConfirmationService();
    let active = true;
    void attempt.current.run(() =>
      takeConfirmationToken(window.location.href, (path) =>
        window.history.replaceState(window.history.state, "", path),
      ),
    ).then((outcome) => {
      if (active) setMessage(outcome);
    });
    return () => { active = false; };
  }, []);

  const copy = confirmationCopy[locale];
  const status = message === "checking" ? "checking" : message === "confirmed" ? "success" : "error";

  return (
    <main className="auth-page horus-auth-page" lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="auth-card">
        <div className="horus-reset-language-switch">
          <button className="horus-reset-language-toggle" type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}>
            {copy.switchLanguage}
          </button>
        </div>
        <div className="auth-brand">
          <span className="auth-logo">HR</span>
          <div>
            <p>H.O.R.U.S SYSTEM</p>
            <small>Heavy Operations &amp; Route Unified System</small>
          </div>
        </div>
        <p className="auth-kicker">{copy.kicker}</p>
        <h1>{copy.heading} <span>{copy.accent}</span></h1>
        <p className={`auth-message auth-message-${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
          {copy.messages[message]}
        </p>
        {status === "success" && (
          <a className="auth-link-button" href="https://kingnarmar.com">{copy.back}</a>
        )}
        <p className="auth-footer">{copy.footer}</p>
      </section>
    </main>
  );
}
