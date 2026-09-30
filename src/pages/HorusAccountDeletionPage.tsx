import "./MinaSystemLegalPage.css";

const PRIVACY_EMAIL = "privacy.horus@kingnarmar.com";
const SUPPORT_EMAIL = "support.horus@kingnarmar.com";

export function HorusAccountDeletionPage() {
  return (
    <main className="legal-page"><div className="legal-shell"><section className="legal-card">
      <div className="legal-brand"><span className="legal-logo">KN</span><div><p>KING NARMAR</p><small>Software Solutions</small></div></div>
      <p className="legal-kicker">H.O.R.U.S System</p><h1>Account Deletion</h1><p className="legal-updated">Last updated: 2026-09-27</p>
      <div className="legal-section"><h2>How to request deletion</h2><p>Signed-in H.O.R.U.S users can open Settings and choose Request account deletion. The request schedules account deletion after a 7-day cooling-off period. During that period, the request can be cancelled from the same Settings section.</p></div>
      <div className="legal-section"><h2>Ownership requirement</h2><p>A user who is the sole active owner of a company cannot request account deletion until ownership continuity is established. Transfer or grant ownership to another eligible active company member first. Deleting a user account does not delete a company.</p></div>
      <div className="legal-section"><h2>What is deleted</h2><p>At finalization, H.O.R.U.S removes the user's authentication account, credentials and sessions, personal user profile, and company memberships. Access to H.O.R.U.S ends.</p></div>
      <div className="legal-section"><h2>What is retained</h2><p>Company-owned operational, financial, audit, and document records are not deleted with an individual user account. This includes records such as customers, drivers, fleet, routes, trips, invoices, payments, expenses, settlements, and company documents. Minimal historical actor information, such as the display name and role recorded when an action occurred, may be retained so company audit and accountability records remain understandable. H.O.R.U.S does not retain a deleted user's email address or phone number merely for historical attribution.</p></div>
      <div className="legal-section"><h2>Need help without app access?</h2><p>If you cannot access the in-app deletion control, contact <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> and request account deletion assistance. Identity and authorization checks may be required before a request can be processed. General product support is available at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p></div>
      <div className="legal-actions"><a className="legal-button" href={`mailto:${PRIVACY_EMAIL}?subject=H.O.R.U.S%20Account%20Deletion%20Request`}>Request deletion assistance</a><a className="legal-button-secondary" href="/horus/privacy-policy">Privacy Policy</a><a className="legal-button-secondary" href="/horus/support">Support</a><a className="legal-button-secondary" href="/">Back to KING NARMAR</a></div>
    </section></div></main>
  );
}
