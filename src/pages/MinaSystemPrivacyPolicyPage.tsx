import "./MinaSystemLegalPage.css";

const PRIVACY_EMAIL = "privacy.mina-system@kingnarmar.com";
const SUPPORT_EMAIL = "support.mina-system@kingnarmar.com";
const DELETION_EMAIL = "deletion.mina-system@kingnarmar.com";

export function MinaSystemPrivacyPolicyPage() {
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
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 2026-06-06</p>

          <div className="legal-section">
            <h2>Overview</h2>
            <p>
              Mina System is a materials inventory and custody management system
              for companies, warehouses, workshops, maintenance teams, and
              industrial operations. This Privacy Policy explains how Mina
              System handles data when users access the application and use its
              business workflows.
            </p>
          </div>

          <div className="legal-section">
            <h2>Contact</h2>
            <p>
              For privacy questions, contact{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
            </p>
            <p>
              For product support, contact{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </div>

          <div className="legal-section">
            <h2>Data handled by Mina System</h2>
            <p>Mina System may handle the following data:</p>
            <ul>
              <li>Account information such as name, email, and user ID.</li>
              <li>
                Company profile, workspace, settings, and membership data.
              </li>
              <li>Role-based access and company user permissions.</li>
              <li>Worker records, departments, job titles, and HR codes.</li>
              <li>Tool, inventory, and custody transaction records.</li>
              <li>Issue, return, lost, damaged, and accountability records.</li>
              <li>
                Uploaded images, proof files, documents, and company logos.
              </li>
              <li>Generated reports, signed documents, and PDF outputs.</li>
              <li>Audit, security, troubleshooting, and lifecycle records.</li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>Why data is used</h2>
            <p>
              Data is used to provide authentication, company workspaces,
              role-based access, inventory custody workflows, reporting,
              accountability, support, security, audit trails, and
              troubleshooting.
            </p>
          </div>

          <div className="legal-section">
            <h2>Service providers</h2>
            <p>
              Mina System may use Supabase for authentication, database,
              storage, and backend services. Brevo or another configured email
              provider may be used for authentication, account, and support
              email delivery. These providers process data only as needed to
              provide the application and related support services.
            </p>
          </div>

          <div className="legal-section">
            <h2>Data sharing and sale</h2>
            <p>
              Mina System does not sell user data. Data may be processed by
              service providers only as needed to operate the app, protect the
              service, and provide support.
            </p>
          </div>

          <div className="legal-section">
            <h2>Data retention and deletion</h2>
            <p>
              Operational records may be retained while a company workspace
              remains active. Verified personal account deletion requests may
              result in deletion or anonymization of active account profile data
              and related personal identifiers.
            </p>
            <p>
              Historical company business records, including transaction and
              audit records, may retain limited identifying snapshots such as
              the user&apos;s name and role at the time of an action where
              required for company accountability, security, audit, contractual,
              or legal purposes.
            </p>
            <p>
              If an authorized company owner requests deletion of an entire
              company workspace, Mina System may delete or anonymize company
              workspace data, including workers, tools, transactions, reports,
              and related uploaded files, subject to required retention
              obligations and verification.
            </p>

            <div className="legal-notice">
              Account deletion requests should be sent to{" "}
              <a href={`mailto:${DELETION_EMAIL}`}>{DELETION_EMAIL}</a>.
            </div>
          </div>

          <div className="legal-section">
            <h2>Security</h2>
            <p>
              Mina System is designed to use encrypted network connections for
              communication with its backend services. Access to company data is
              controlled through authentication, company membership, and
              role-based permissions.
            </p>
          </div>

          <div className="legal-section">
            <h2>Children</h2>
            <p>
              Mina System is a business productivity application and is not
              intended for children or family-directed use.
            </p>
          </div>

          <div className="legal-section">
            <h2>Updates</h2>
            <p>
              This Privacy Policy may be updated as Mina System changes.
              Material updates should be reflected on this page.
            </p>
          </div>

          <div className="legal-actions">
            <a className="legal-button" href="/mina-system/account-deletion">
              Request Account Deletion
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
