import "./MinaSystemLegalPage.css";

const SUPPORT_EMAIL = "support.horus@kingnarmar.com";
const PRIVACY_EMAIL = "privacy.horus@kingnarmar.com";

export function HorusSupportPage() {
  return (
    <main className="legal-page"><div className="legal-shell"><section className="legal-card">
      <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
      <p className="legal-kicker">H.O.R.U.S System</p><h1>Support & Contact</h1><p className="legal-updated">Official H.O.R.U.S product contact</p>
      <div className="legal-section"><h2>Product support</h2><p>For help with H.O.R.U.S access, application behavior, company workflows, or technical problems, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p><p>When requesting support, describe the issue and the affected workflow. Do not send passwords, authentication tokens, secret keys, or unnecessary sensitive business documents by email.</p></div>
      <div className="legal-section"><h2>Privacy contact</h2><p>For questions or requests concerning privacy and personal information handled by H.O.R.U.S, email <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.</p></div>
      <div className="legal-section"><h2>Legal information</h2><p>Review the public H.O.R.U.S Privacy Policy and Terms of Service for information about data handling and service use.</p></div>
      <div className="legal-actions"><a className="legal-button" href={`mailto:${SUPPORT_EMAIL}`}>Email H.O.R.U.S Support</a><a className="legal-button-secondary" href="/horus/privacy-policy">Privacy Policy</a><a className="legal-button-secondary" href="/horus/terms">Terms of Service</a><a className="legal-button-secondary" href="/">Back to KING NARMAR</a></div>
    </section></div></main>
  );
}
