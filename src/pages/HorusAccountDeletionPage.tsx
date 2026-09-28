import "./MinaSystemLegalPage.css";

const PRIVACY_EMAIL = "privacy.horus@kingnarmar.com";
const SUPPORT_EMAIL = "support.horus@kingnarmar.com";

export function HorusAccountDeletionPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell"><section className="legal-card">
        <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
        <p className="legal-kicker">H.O.R.U.S System</p>
        <h1>Account Deletion</h1>
        <p className="legal-updated">Last updated: 2026-09-28</p>

        <div className="legal-section"><h2>Delete your H.O.R.U.S account</h2>
          <p>Signed-in users can request account deletion from H.O.R.U.S Settings → Account deletion. The request enters a 7-day cooling-off period and can be cancelled from the same screen before finalization.</p>
        </div>

        <div className="legal-section"><h2>If you cannot access the app</h2>
          <p>Email <a href={`mailto:${PRIVACY_EMAIL}?subject=H.O.R.U.S%20Account%20Deletion%20Request`}>{PRIVACY_EMAIL}</a> from the email address associated with your H.O.R.U.S account. Identity verification may be required before a deletion request can be processed.</p>
        </div>

        <div className="legal-section"><h2>Ownership continuity</h2>
          <p>A user who is the only active Owner of a company workspace must transfer or grant ownership to another active member before account deletion can proceed. Deleting a user account never silently deletes a company workspace.</p>
        </div>

        <div className="legal-section"><h2>What is deleted</h2>
          <p>After the cooling-off period, finalization removes the user's H.O.R.U.S authentication identity, active sessions and credentials, personal user profile, and company memberships. Access to company workspaces ends.</p>
        </div>

        <div className="legal-section"><h2>What is retained</h2>
          <p>Company-owned operational, financial, document, subscription, settings, and audit records are retained where needed for the company workspace, accountability, security, contractual, or legal purposes. Historical actions keep the minimum actor attribution needed for accountability, such as the actor's historical display name and role. Email addresses and authentication credentials are not retained merely for historical attribution.</p>
        </div>

        <div className="legal-section"><h2>Need help?</h2>
          <p>Privacy requests: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</p>
          <p>Product support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </div>

        <div className="legal-actions">
          <a className="legal-button" href={`mailto:${PRIVACY_EMAIL}?subject=H.O.R.U.S%20Account%20Deletion%20Request`}>Request deletion by email</a>
          <a className="legal-button-secondary" href="/horus/privacy-policy">Privacy Policy</a>
          <a className="legal-button-secondary" href="/horus/support">Support</a>
          <a className="legal-button-secondary" href="/">Back to KING NARMAR</a>
        </div>
      </section></div>
    </main>
  );
}
