import "./MinaSystemLegalPage.css";

type AuthResult = {
  title: string;
  message: string;
  status: "success" | "error";
};

function readAuthResult(): AuthResult {
  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(
    window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : window.location.hash,
  );

  const errorCode =
    searchParams.get("error_code") ?? hashParams.get("error_code");
  const error =
    searchParams.get("error") ?? hashParams.get("error");

  if (error || errorCode) {
    if (errorCode === "otp_expired") {
      return {
        status: "error",
        title: "Confirmation link already used or expired",
        message:
          "This one-time confirmation link is no longer valid. If you already confirmed your email, return to H.O.R.U.S System and sign in. Otherwise, request a new confirmation email.",
      };
    }

    return {
      status: "error",
      title: "Email confirmation could not be completed",
      message:
        "H.O.R.U.S could not complete this email confirmation. Return to the app and try signing in. If your email is still unconfirmed, request a new confirmation email.",
    };
  }

  return {
    status: "success",
    title: "Email confirmed",
    message:
      "Your H.O.R.U.S email confirmation was completed. You can now return to H.O.R.U.S System and sign in.",
  };
}

export function HorusAuthResultPage() {
  const result = readAuthResult();

  return (
    <main className="legal-page">
      <div className="legal-shell">
        <section className="legal-card">
          <div className="legal-brand">
            <span className="legal-logo">HR</span>
            <div>
              <p>H.O.R.U.S SYSTEM</p>
              <small>Heavy Operations &amp; Route Unified System</small>
            </div>
          </div>

          <p className="legal-kicker">Secure Account Verification</p>
          <h1>{result.title}</h1>

          <div className="legal-section">
            <p>{result.message}</p>
          </div>

          <div className="legal-notice" dir="rtl" lang="ar">
            {result.status === "success"
              ? "تم تأكيد بريدك الإلكتروني في H.O.R.U.S. يمكنك الآن العودة إلى التطبيق وتسجيل الدخول."
              : "إذا كنت قد أكدت بريدك بالفعل، ارجع إلى تطبيق H.O.R.U.S وحاول تسجيل الدخول. إذا ظل البريد غير مؤكد، اطلب رسالة تأكيد جديدة."}
          </div>

          <div className="legal-actions">
            <a className="legal-button" href="/horus/support">
              H.O.R.U.S Support
            </a>
            <a className="legal-button-secondary" href="/">
              Back to KING NARMAR
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
