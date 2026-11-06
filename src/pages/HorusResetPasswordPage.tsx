import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

import {
  HORUS_PASSWORD_MIN_LENGTH,
  validateNewPassword,
} from "../features/horus-auth/domain/passwordPolicy";
import { horusPasswordRecoveryService } from "../features/horus-auth/data/passwordRecoveryService";
import type { TokenVerificationOutcome } from "../features/horus-auth/data/passwordRecoveryOperations";
import {
  horusResetCopy,
  type HorusResetLocale,
  type HorusResetMessage,
} from "../features/horus-auth/presentation/resetPasswordCopy";
import "./ResetPasswordPage.css";
import "./HorusAuthPage.css";

type PageStatus = "checking" | "ready" | "saving" | "success" | "error";
type PageState = { status: PageStatus; message: HorusResetMessage };
type VerificationResult = TokenVerificationOutcome | "missingToken";

export function HorusResetPasswordPage() {
  const [locale, setLocale] = useState<HorusResetLocale>(() =>
    navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en",
  );
  const [page, setPage] = useState<PageState>({
    status: "checking",
    message: "checking",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const verificationRequest = useRef<Promise<VerificationResult> | null>(null);
  const submissionPending = useRef(false);

  useEffect(() => {
    // Reuse the in-flight verification across React StrictMode effect replay.
    if (!verificationRequest.current) {
      const url = new URL(window.location.href);
      const tokenHash = url.searchParams.get("token_hash");

      if (!tokenHash) {
        verificationRequest.current = Promise.resolve("missingToken");
      } else {
        // Do not keep a one-time credential in the browser address bar/history.
        url.searchParams.delete("token_hash");
        window.history.replaceState(
          window.history.state,
          "",
          `${url.pathname}${url.search}${url.hash}`,
        );
        verificationRequest.current =
          horusPasswordRecoveryService.verifyToken(tokenHash);
      }
    }

    let active = true;
    void verificationRequest.current.then((outcome) => {
      if (!active) return;

      switch (outcome) {
        case "verified":
          setPage({ status: "ready", message: "ready" });
          break;
        case "unconfigured":
          setPage({ status: "error", message: "unconfigured" });
          break;
        case "missingToken":
          setPage({ status: "error", message: "missingToken" });
          break;
        case "invalid":
          setPage({ status: "error", message: "invalidToken" });
          break;
      }
    });

    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (page.status !== "ready" || submissionPending.current) return;

    const validation = validateNewPassword(password);
    if (validation !== "valid") {
      setPage({ status: "ready", message: validation });
      return;
    }

    if (password !== confirmPassword) {
      setPage({ status: "ready", message: "mismatch" });
      return;
    }

    submissionPending.current = true;
    setPage({ status: "saving", message: "saving" });

    const outcome =
      await horusPasswordRecoveryService.updatePasswordAndSignOut(password);
    submissionPending.current = false;

    switch (outcome) {
      case "updated":
        setPassword("");
        setConfirmPassword("");
        setPage({ status: "success", message: "success" });
        break;
      case "signOutFailed":
        setPassword("");
        setConfirmPassword("");
        setPage({ status: "error", message: "signOutFailed" });
        break;
      case "unconfigured":
        setPage({ status: "error", message: "unconfigured" });
        break;
      case "updateFailed":
        setPage({ status: "ready", message: "updateFailed" });
        break;
    }
  }

  async function handleRetrySignOut() {
    if (page.message !== "signOutFailed" || submissionPending.current) return;

    submissionPending.current = true;
    setPage({ status: "saving", message: "signingOut" });
    const outcome = await horusPasswordRecoveryService.signOut();
    submissionPending.current = false;

    if (outcome === "signedOut") {
      setPage({ status: "success", message: "success" });
    } else {
      setPage({
        status: "error",
        message: outcome === "unconfigured" ? "unconfigured" : "signOutFailed",
      });
    }
  }

  const copy = horusResetCopy[locale];
  const isFormDisabled = page.status !== "ready";

  return (
    <main
      className="auth-page horus-auth-page"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <section className="auth-card">
        <div className="horus-reset-language-switch">
          <button
            className="horus-reset-language-toggle"
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
          >
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

        <h1>
          {copy.heading} <span>{copy.headingAccent}</span>
        </h1>

        <p
          className={`auth-message auth-message-${page.status}`}
          role={page.status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {copy.messages[page.message]}
        </p>

        {(page.status === "ready" || page.status === "saving") && (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="horus-new-password">{copy.newPassword}</label>
            <input
              id="horus-new-password"
              type="password"
              autoComplete="new-password"
              minLength={HORUS_PASSWORD_MIN_LENGTH}
              value={password}
              disabled={isFormDisabled}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={copy.enterPassword}
              required
            />

            <label htmlFor="horus-confirm-password">
              {copy.confirmPassword}
            </label>
            <input
              id="horus-confirm-password"
              type="password"
              autoComplete="new-password"
              minLength={HORUS_PASSWORD_MIN_LENGTH}
              value={confirmPassword}
              disabled={isFormDisabled}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder={copy.confirmPasswordPlaceholder}
              required
            />

            <button type="submit" disabled={isFormDisabled}>
              {page.status === "saving"
                ? copy.updating
                : copy.updatePassword}
            </button>
          </form>
        )}

        {page.status === "error" && page.message === "signOutFailed" && (
          <button
            className="auth-link-button"
            type="button"
            onClick={handleRetrySignOut}
          >
            {copy.retrySignOut}
          </button>
        )}

        {page.status === "success" && (
          <a className="auth-link-button" href="https://kingnarmar.com">
            {copy.backToSite}
          </a>
        )}

        <div className="auth-help-card">
          <strong>{copy.securityNoteTitle}</strong>
          {copy.securityNote}
        </div>
      </section>
    </main>
  );
}
