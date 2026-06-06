import "./MinaSystemLegalPage.css";

const DELETION_EMAIL = "deletion.mina-system@kingnarmar.com";
const PRIVACY_EMAIL = "privacy.mina-system@kingnarmar.com";
const SUPPORT_EMAIL = "support.mina-system@kingnarmar.com";

export function MinaSystemAccountDeletionPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <section className="legal-card">
          <div className="legal-brand">
            <span className="legal-logo">KN</span>
            <div>
              <p>KING NARMAR</p>
              <small>Software Solutions</small>
            </div>
          </div>

          <p className="legal-kicker">Mina System</p>
          <h1>Account Deletion Request</h1>
          <p className="legal-updated">Last updated: 2026-06-06</p>

          <div className="legal-section">
            <h2>How to submit a request</h2>
            <p>
              Mina System users can request deletion of their personal account
              and related active profile data by sending an email to{" "}
              <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a>.
            </p>

            <div className="legal-notice">
              Email subject: Mina System Account Deletion Request
            </div>
          </div>

          <div className="legal-section">
            <h2>Information to include</h2>
            <ul>
              <li>Your Mina System account email address.</li>
              <li>Your full name.</li>
              <li>Your company or workspace name, if applicable.</li>
              <li>
                Whether you are requesting personal user account deletion or
                full company workspace deletion.
              </li>
              <li>
                A clear statement that you want to delete your Mina System
                account or workspace.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Personal user account deletion</h2>
            <p>
              After verification, Mina System may delete or anonymize active
              account profile data and related personal identifiers. Historical
              company business records may retain limited identifying snapshots,
              such as the user&apos;s name and role at the time of an action,
              where required for company accountability, security, audit,
              contractual, or legal purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2>Company workspace deletion</h2>
            <p>
              Company workspace deletion is separate from personal user account
              deletion. If an authorized company owner requests deletion of an
              entire company workspace, Mina System may delete or anonymize
              company workspace data, including workers, tools, transactions,
              reports, and related uploaded files, subject to required retention
              obligations and verification.
            </p>
          </div>

          <div className="legal-section">
            <h2>Verification and processing</h2>
            <p>
              Mina System may ask for additional information to verify that the
              requester is the owner of the account or an authorized company
              workspace owner. Requests are reviewed before processing to
              protect company accountability, audit history, and security.
            </p>
          </div>

          <div className="legal-section">
            <h2>Other contacts</h2>
            <p>
              For privacy questions, contact{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
            </p>
            <p>
              For product support, contact{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </div>

          <div className="legal-actions">
            <a
              className="legal-button"
              href={`mailto:${DELETION_EMAIL}?subject=Mina%20System%20Account%20Deletion%20Request`}
            >
              Email Deletion Request
            </a>
            <a
              className="legal-button-secondary"
              href="/mina-system/privacy-policy"
            >
              View Privacy Policy
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
