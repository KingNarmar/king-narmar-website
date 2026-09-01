import { useMemo, useState } from "react";
import "./ResetPasswordPage.css";
import "./HorusAuthPage.css";
import "./HorusInvitationPage.css";

type CopyStatus = "idle" | "copied" | "error";

export function HorusInvitationPage() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const invitationCode = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token")?.trim() ?? "";
  }, []);

  const hasInvitationCode = invitationCode.length > 0;

  async function copyInvitationCode() {
    if (!hasInvitationCode) return;

    try {
      await navigator.clipboard.writeText(invitationCode);
      setCopyStatus("copied");
    } catch (_) {
      setCopyStatus("error");
    }
  }

  return (
    <main className="auth-page horus-auth-page horus-invitation-page">
      <section className="auth-card horus-invitation-card">
        <div className="auth-brand">
          <span className="auth-logo">HR</span>
          <div>
            <p>H.O.R.U.S SYSTEM</p>
            <small>Heavy Operations &amp; Route Unified System</small>
          </div>
        </div>

        <p className="auth-kicker">Secure Company Invitation</p>

        <h1>
          Join your <span>company workspace</span>
        </h1>

        {hasInvitationCode ? (
          <>
            <p className="auth-message auth-message-success">
              Your invitation is ready. Open H.O.R.U.S System, sign in with the
              invited email address, open the invitation screen, and paste the
              code below to review and accept it.
            </p>

            <div className="horus-invitation-code" aria-label="Invitation code">
              <code>{invitationCode}</code>
              <button type="button" onClick={copyInvitationCode}>
                {copyStatus === "copied" ? "Copied" : "Copy code"}
              </button>
            </div>

            {copyStatus === "error" && (
              <p className="horus-invitation-copy-error">
                Copy was blocked by the browser. Select the code manually and
                copy it.
              </p>
            )}

            <div className="auth-help-card" dir="rtl" lang="ar">
              <strong>دعوة آمنة للانضمام إلى الشركة</strong>
              افتح H.O.R.U.S System وسجّل الدخول باستخدام البريد الإلكتروني
              الذي وصلت إليه الدعوة، ثم افتح شاشة الدعوات والصق الرمز الموجود
              بالأعلى لمراجعة الدعوة وقبولها بشكل صريح.
            </div>
          </>
        ) : (
          <>
            <p className="auth-message auth-message-error">
              This invitation link is missing its secure code. Please ask the
              company administrator to send or resend the invitation.
            </p>

            <div className="auth-help-card" dir="rtl" lang="ar">
              <strong>رابط الدعوة غير مكتمل</strong>
              لا يحتوي هذا الرابط على رمز الدعوة الآمن. اطلب من مسؤول الشركة
              إرسال الدعوة أو إعادة إرسالها مرة أخرى.
            </div>
          </>
        )}

        <p className="auth-footer">
          H.O.R.U.S System never asks you to send this invitation code to another
          person. Only use it inside the official H.O.R.U.S application.
        </p>
      </section>
    </main>
  );
}
