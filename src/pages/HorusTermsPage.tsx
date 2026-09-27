import "./MinaSystemLegalPage.css";

const SUPPORT_EMAIL = "support.horus@kingnarmar.com";

export function HorusTermsPage() {
  return (
    <main className="legal-page"><div className="legal-shell"><section className="legal-card">
      <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
      <p className="legal-kicker">H.O.R.U.S System</p><h1>Terms of Service</h1><p className="legal-updated">Last updated: 2026-09-27</p>
      <div className="legal-section"><h2>Service</h2><p>H.O.R.U.S System is software provided by King Narmar for authorized business users to manage heavy transport operations within company workspaces. These terms apply to access to and use of H.O.R.U.S.</p></div>
      <div className="legal-section"><h2>Authorized use</h2><p>Users must provide accurate account information, keep credentials secure, use only company workspaces and information they are authorized to access, and comply with applicable law and their organization&apos;s policies. Users must not attempt to bypass access controls, interfere with the service, or access another tenant&apos;s data without authorization.</p></div>
      <div className="legal-section"><h2>Company data and responsibility</h2><p>Customers and authorized users are responsible for the accuracy, legality, and appropriate use of business information they enter or upload, including customer, driver, fleet, trip, document, and financial records. H.O.R.U.S permissions support company controls but do not replace an organization&apos;s own operational, accounting, employment, transport, or legal obligations.</p></div>
      <div className="legal-section"><h2>Accounts and access</h2><p>Access may depend on authentication, company membership, assigned roles, and the availability of the service. Access may be restricted when necessary to protect users, company data, the service, or to address misuse or legal requirements.</p></div>
      <div className="legal-section"><h2>Availability and changes</h2><p>King Narmar may maintain, secure, improve, or change H.O.R.U.S over time. No software service can be guaranteed to be uninterrupted or error-free. Material changes to these terms will be reflected by updating this page.</p></div>
      <div className="legal-section"><h2>Intellectual property</h2><p>H.O.R.U.S System, its software, product design, branding, and related materials remain the property of King Narmar or their respective rights holders. Use of the service does not transfer ownership of the software or King Narmar branding to the user.</p></div>
      <div className="legal-section"><h2>Business records and backups</h2><p>Organizations remain responsible for reviewing important operational and financial records and for maintaining any independent records or exports required by their own policies or applicable law.</p></div>
      <div className="legal-section"><h2>Privacy</h2><p>Use of personal and business information is described in the <a href="/horus/privacy-policy">H.O.R.U.S Privacy Policy</a>.</p></div>
      <div className="legal-section"><h2>Support</h2><p>For product support or questions about these terms, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p></div>
      <div className="legal-actions"><a className="legal-button" href="/horus/support">H.O.R.U.S Support</a><a className="legal-button-secondary" href="/horus/privacy-policy">Privacy Policy</a><a className="legal-button-secondary" href="/">Back to KING NARMAR</a></div>
    </section></div></main>
  );
}
