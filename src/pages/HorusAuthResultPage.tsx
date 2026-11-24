import type { AuthResult } from "../features/horus-auth/presentation/authResult";
import { authResultCopy, authResultLabels } from "../features/horus-auth/presentation/authResultCopy";
import "./MinaSystemLegalPage.css";

export function HorusAuthResultPage({ outcome }: { outcome: AuthResult }) {
  const result = authResultCopy[outcome];

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

          <p className="legal-kicker">{authResultLabels.kicker}</p>
          <h1>{result.title}</h1>

          <div className="legal-section">
            <p>{result.message}</p>
          </div>

          <div className="legal-notice" dir="rtl" lang="ar">
            {result.arabic}
          </div>

          <div className="legal-actions">
            <a className="legal-button" href="/horus/support">
              {authResultLabels.support}
            </a>
            <a className="legal-button-secondary" href="/">
              {authResultLabels.back}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
