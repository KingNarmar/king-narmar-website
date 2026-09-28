import "./MinaSystemLegalPage.css";

const PRIVACY_EMAIL = "privacy.horus@kingnarmar.com";
const SUPPORT_EMAIL = "support.horus@kingnarmar.com";

export function HorusPrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell"><section className="legal-card">
        <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
        <p className="legal-kicker">H.O.R.U.S System</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 2026-09-28</p>
        <div className="legal-section"><h2>Overview</h2><p>H.O.R.U.S System is a multi-tenant SaaS platform for heavy transport operations. This policy explains how H.O.R.U.S handles information when authorized users access company workspaces and use operational workflows.</p></div>
        <div className="legal-section"><h2>Information H.O.R.U.S handles</h2><p>Depending on how a company uses the service, H.O.R.U.S may handle:</p><ul>
          <li>Account information such as name, email address, phone number, user ID, authentication state, company membership, and role.</li>
          <li>Company profile, settings, subscription, and authorized-user information.</li>
          <li>Customer and business-contact information, including names, phone numbers, addresses, payment terms, and operational notes.</li>
          <li>Driver records, including contact details, national ID information, licence details, status, notes, and uploaded driver documents.</li>
          <li>Fleet, route, trip, cargo, loading, waybill, proof-of-delivery, and other transport-operation records and documents.</li>
          <li>Invoices, payments, expenses, driver finance, company finance, and related business records.</li>
          <li>Audit, security, troubleshooting, invitation, and lifecycle records used to protect and operate the service.</li>
        </ul></div>
        <div className="legal-section"><h2>Why information is used</h2><p>Information is used to authenticate users, provide company-scoped workspaces, enforce role-based access, run transport and finance workflows, store business documents, generate operational records and reports, maintain auditability, protect the service, troubleshoot problems, and provide support.</p></div>
        <div className="legal-section"><h2>Service providers</h2><p>H.O.R.U.S uses Supabase for backend services including authentication, database, and private file storage. Infrastructure and other configured service providers may process information only as needed to deliver and protect the service.</p></div>
        <div className="legal-section"><h2>Tenant isolation and security</h2><p>H.O.R.U.S is designed as a multi-tenant service. Company-owned business data is protected by authenticated access, company membership, role-based authorization, database row-level security, and access controls for private business-document storage. Network communication with production services uses HTTPS.</p></div>
        <div className="legal-section"><h2>Sharing and sale</h2><p>King Narmar does not sell H.O.R.U.S user data. Information may be processed by service providers as necessary to operate, secure, and support H.O.R.U.S, or disclosed when required by applicable law.</p></div>
        <div className="legal-section"><h2>Retention and deletion</h2><p>Business and operational records may be retained while needed to provide the company workspace and to preserve legitimate business, security, audit, contractual, or legal records. H.O.R.U.S does not currently promise a single fixed retention period for every category of data.</p><p>Users can request deletion of their H.O.R.U.S account from the application or through the public <a href="/horus/account-deletion">Account Deletion page</a>. Account deletion removes the user identity and access after the applicable cooling-off period, subject to ownership-continuity checks. Company-owned operational, financial, document, and audit records may remain where needed for the company workspace, accountability, security, contractual, or legal purposes. Historical actor attribution may retain the minimum display name and role needed for accountability.</p></div>
        <div className="legal-section"><h2>Children</h2><p>H.O.R.U.S is a business operations service and is not directed to children.</p></div>
        <div className="legal-section"><h2>Changes to this policy</h2><p>This policy may be updated when H.O.R.U.S features, data practices, service providers, or legal requirements change. The current version and update date will remain available on this page.</p></div>
        <div className="legal-section"><h2>Contact</h2><p>Privacy questions: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</p><p>Product support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p></div>
        <div className="legal-actions"><a className="legal-button" href="/horus/support">H.O.R.U.S Support</a><a className="legal-button-secondary" href="/horus/terms">Terms of Service</a><a className="legal-button-secondary" href="/">Back to KING NARMAR</a></div>
      </section></div>
    </main>
  );
}
