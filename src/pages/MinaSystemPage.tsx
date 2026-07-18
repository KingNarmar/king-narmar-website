import { useEffect } from "react";
import "./MinaSystemPage.css";

const SUPPORT_EMAIL = "support.mina-system@kingnarmar.com";

type Capability = {
  icon: string;
  title: string;
  description: string;
};

type Solution = {
  label: string;
  title: string;
  description: string;
};

const SOLUTIONS: Solution[] = [
  {
    label: "Control",
    title: "One operational source of truth",
    description:
      "Replace scattered paper, spreadsheets, and chat messages with structured company records for workers, tools, custody, and movements.",
  },
  {
    label: "Accountability",
    title: "Clear responsibility at every step",
    description:
      "Connect each issue, return, loss, damage, approval, photo, document, and signature to the people and records involved.",
  },
  {
    label: "Visibility",
    title: "Faster answers for management",
    description:
      "Search operational history, review balances, follow pending actions, and generate reports without rebuilding the story manually.",
  },
];

const CAPABILITIES: Capability[] = [
  {
    icon: "WK",
    title: "Workers & organization",
    description:
      "Manage workers, departments, job titles, company codes, and the records needed to keep operational teams organized.",
  },
  {
    icon: "TL",
    title: "Tools & materials",
    description:
      "Build a structured catalog with categories, units, status, availability, and the information needed for day-to-day control.",
  },
  {
    icon: "TX",
    title: "Issue & return transactions",
    description:
      "Record issue, return, lost, damaged, and other custody movements with validation and a clear transaction history.",
  },
  {
    icon: "AP",
    title: "Approvals & accountability",
    description:
      "Support controlled workflows for actions that need review, confirmation, or an accountable decision before completion.",
  },
  {
    icon: "PH",
    title: "Photos, files & signatures",
    description:
      "Attach images, PDFs, supporting documents, and signatures so important actions keep their operational evidence.",
  },
  {
    icon: "RP",
    title: "Reports & document output",
    description:
      "Generate searchable reports and business documents for workers, tools, transactions, custody, and signed records.",
  },
  {
    icon: "RB",
    title: "Roles & company access",
    description:
      "Separate company workspaces and give owners, administrators, and members access based on their responsibilities.",
  },
  {
    icon: "DM",
    title: "Demo & live operation",
    description:
      "Use a dedicated demo experience for product evaluation while keeping live company workflows clearly separated.",
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Set up the company",
    description:
      "Create the workspace, company profile, users, roles, departments, job titles, categories, and units.",
  },
  {
    number: "02",
    title: "Register operations",
    description:
      "Add workers and tools, then keep operational master data ready for daily transactions.",
  },
  {
    number: "03",
    title: "Capture every movement",
    description:
      "Record issue, return, loss, damage, approvals, evidence, and signatures as the work happens.",
  },
  {
    number: "04",
    title: "Review and report",
    description:
      "Search history, inspect responsibility, follow balances, and produce clear documents for the business.",
  },
];

function setMetaDescription(content: string) {
  let description = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );

  if (!description) {
    description = document.createElement("meta");
    description.name = "description";
    document.head.appendChild(description);
  }

  description.content = content;
}

export function MinaSystemPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.content ?? "";

    document.title =
      "M.I.N.A System | Materials Inventory Navigation Assistant";
    setMetaDescription(
      "M.I.N.A System is a multi-company materials inventory and custody platform for workers, tools, transactions, approvals, evidence, and reports.",
    );

    return () => {
      document.title = previousTitle;
      setMetaDescription(previousDescription);
    };
  }, []);

  return (
    <main className="mina-page">
      <a className="mina-skip-link" href="#mina-main-content">
        Skip to content
      </a>

      <div className="mina-page-background" aria-hidden="true">
        <div className="mina-grid" />
        <div className="mina-orb mina-orb-gold" />
        <div className="mina-orb mina-orb-blue" />
      </div>

      <header className="mina-header glass-panel">
        <a className="brand-lockup" href="/" aria-label="King Narmar home">
          <span className="brand-mark glow-gold">KN</span>
          <span>
            <strong>KING NARMAR</strong>
            <small>Software Solutions</small>
          </span>
        </a>

        <nav className="mina-nav" aria-label="M.I.N.A System navigation">
          <a href="#solutions">Solutions</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#availability">Availability</a>
          <a href="#support">Support</a>
        </nav>
      </header>

      <div id="mina-main-content">
        <section className="mina-hero" aria-labelledby="mina-title">
          <div className="mina-hero-copy">
            <div className="mina-eyebrow-row">
              <p className="mina-kicker">Business Operations Platform</p>
              <span className="mina-version-pill">Windows · Android · iOS</span>
            </div>

            <h1 id="mina-title">
              M.I.N.A
              <span>System</span>
            </h1>

            <p className="mina-full-name">
              Materials Inventory Navigation Assistant
            </p>

            <p className="mina-hero-description">
              A multi-company SaaS platform built to organize workers, tools,
              materials, custody, transactions, approvals, evidence, documents,
              and reporting in one controlled operational workflow.
            </p>

            <div className="mina-hero-actions">
              <a className="btn btn-primary" href="#availability">
                View download status
              </a>
              <a
                className="btn btn-secondary"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                Contact product support
              </a>
            </div>

            <div className="mina-status-row" aria-label="Platform status">
              <article>
                <span className="mina-status-dot mina-status-dot-review" />
                <div>
                  <strong>Windows</strong>
                  <small>Microsoft Store certification</small>
                </div>
              </article>
              <article>
                <span className="mina-status-dot mina-status-dot-testing" />
                <div>
                  <strong>Android</strong>
                  <small>Closed testing — under review</small>
                </div>
              </article>
              <article>
                <span className="mina-status-dot mina-status-dot-soon" />
                <div>
                  <strong>iOS</strong>
                  <small>Coming soon</small>
                </div>
              </article>
            </div>
          </div>

          <div
            className="mina-product-stage"
            role="img"
            aria-label="Illustration of M.I.N.A System running on desktop and mobile"
          >
            <div className="mina-stage-glow" />

            <div className="mina-desktop-frame">
              <div className="mina-window-bar">
                <div className="mina-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>M.I.N.A System</span>
                <span className="mina-live-chip">Company workspace</span>
              </div>

              <div className="mina-desktop-body">
                <aside className="mina-mock-sidebar" aria-hidden="true">
                  <span className="mina-mock-logo">M</span>
                  <i className="is-active" />
                  <i />
                  <i />
                  <i />
                  <i />
                </aside>

                <div className="mina-mock-content">
                  <div className="mina-mock-heading">
                    <div>
                      <small>Operations overview</small>
                      <strong>Dashboard</strong>
                    </div>
                    <span>+ Add transaction</span>
                  </div>

                  <div className="mina-mock-stats">
                    <article>
                      <small>Workers</small>
                      <strong>248</strong>
                      <span>Active records</span>
                    </article>
                    <article>
                      <small>Tools</small>
                      <strong>1,426</strong>
                      <span>Tracked items</span>
                    </article>
                    <article>
                      <small>Open custody</small>
                      <strong>317</strong>
                      <span>Current balances</span>
                    </article>
                  </div>

                  <div className="mina-mock-table">
                    <div className="mina-mock-table-title">
                      <strong>Recent transactions</strong>
                      <span>View all</span>
                    </div>
                    <div className="mina-mock-row mina-mock-row-header">
                      <span>Worker</span>
                      <span>Transaction</span>
                      <span>Status</span>
                    </div>
                    <div className="mina-mock-row">
                      <span><i /> Ahmed Hassan</span>
                      <span>Tool issue</span>
                      <b>Approved</b>
                    </div>
                    <div className="mina-mock-row">
                      <span><i /> Michael George</span>
                      <span>Tool return</span>
                      <b>Completed</b>
                    </div>
                    <div className="mina-mock-row">
                      <span><i /> Omar Ali</span>
                      <span>Damage report</span>
                      <b className="is-pending">Pending</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mina-mobile-frame">
              <div className="mina-mobile-speaker" />
              <div className="mina-mobile-screen">
                <div className="mina-mobile-top">
                  <span className="mina-mock-logo">M</span>
                  <div>
                    <small>New transaction</small>
                    <strong>Issue tools</strong>
                  </div>
                </div>

                <div className="mina-mobile-field">
                  <small>Worker</small>
                  <strong>Ahmed Hassan</strong>
                </div>
                <div className="mina-mobile-field">
                  <small>Tool</small>
                  <strong>Angle Grinder 4.5&quot;</strong>
                </div>
                <div className="mina-mobile-evidence">
                  <span>Photo evidence</span>
                  <div>+</div>
                </div>
                <div className="mina-mobile-signature">
                  <small>Signature</small>
                  <span>Ahmed H.</span>
                </div>
                <div className="mina-mobile-submit">Save transaction</div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mina-section mina-solutions-section"
          id="solutions"
          aria-labelledby="solutions-title"
        >
          <div className="mina-section-heading">
            <p className="mina-section-kicker">Operational problems, solved</p>
            <h2 id="solutions-title">
              Move from fragmented records to{" "}
              <span className="premium-gradient-text">controlled operations.</span>
            </h2>
            <p>
              M.I.N.A System is designed around the daily reality of warehouses,
              workshops, maintenance teams, projects, and companies that need
              faster records without losing accountability.
            </p>
          </div>

          <div className="mina-solution-grid">
            {SOLUTIONS.map((solution) => (
              <article className="mina-solution-card glass-panel" key={solution.label}>
                <span>{solution.label}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mina-section mina-capabilities-section"
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <div className="mina-section-heading mina-section-heading-left">
            <p className="mina-section-kicker">Core capabilities</p>
            <h2 id="capabilities-title">
              The tools your operation needs to{" "}
              <span className="premium-gradient-text">stay in control.</span>
            </h2>
          </div>

          <div className="mina-capability-grid">
            {CAPABILITIES.map((capability) => (
              <article className="mina-capability-card glass-panel" key={capability.title}>
                <span className="mina-capability-icon" aria-hidden="true">
                  {capability.icon}
                </span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mina-section mina-workflow-section" aria-labelledby="workflow-title">
          <div className="mina-workflow-panel glass-panel">
            <div className="mina-section-heading mina-section-heading-left">
              <p className="mina-section-kicker">From setup to reporting</p>
              <h2 id="workflow-title">
                One connected operational flow.
              </h2>
              <p>
                Each stage builds on the previous one, so daily transactions
                stay connected to company structure, people, assets, evidence,
                and final reporting.
              </p>
            </div>

            <div className="mina-workflow-grid">
              {WORKFLOW_STEPS.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mina-section mina-control-section" aria-labelledby="control-title">
          <div className="mina-control-copy">
            <p className="mina-section-kicker">Built for company control</p>
            <h2 id="control-title">
              Business access without mixing company data.
            </h2>
            <p>
              M.I.N.A System is designed as a multi-tenant product with separate
              company workspaces, role-based permissions, controlled access,
              and operational records that support traceability.
            </p>
          </div>

          <div className="mina-control-cards">
            <article className="glass-panel">
              <span>01</span>
              <div>
                <h3>Company-scoped workspaces</h3>
                <p>
                  Users work inside the company context they are authorized to
                  access.
                </p>
              </div>
            </article>
            <article className="glass-panel">
              <span>02</span>
              <div>
                <h3>Role-based responsibility</h3>
                <p>
                  Owners, administrators, and members receive access aligned
                  with their responsibilities.
                </p>
              </div>
            </article>
            <article className="glass-panel">
              <span>03</span>
              <div>
                <h3>Evidence and history</h3>
                <p>
                  Transactions can preserve the documents, images, signatures,
                  and records needed to explain what happened.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="mina-section mina-availability-section"
          id="availability"
          aria-labelledby="availability-title"
        >
          <div className="mina-section-heading">
            <p className="mina-section-kicker">Platform availability</p>
            <h2 id="availability-title">
              Choose your platform.
              <span className="premium-gradient-text"> Public links activate after approval.</span>
            </h2>
            <p>
              The store buttons below show the current release status. They will
              become active only when the corresponding official public listing
              is available.
            </p>
          </div>

          <div className="mina-store-grid">
            <article className="mina-store-card glass-panel mina-store-card-windows">
              <div className="mina-store-card-top">
                <StoreIcon platform="windows" />
                <span className="mina-store-status mina-store-status-review">
                  In certification
                </span>
              </div>
              <h3>Windows</h3>
              <p>
                Submitted to Microsoft Partner Center and currently going
                through Microsoft Store certification.
              </p>
              <button
                className="mina-store-button"
                type="button"
                disabled
                aria-label="Microsoft Store download is pending certification"
              >
                <StoreIcon platform="windows" />
                <span>
                  <small>Get it from</small>
                  Microsoft Store
                </span>
              </button>
            </article>

            <article className="mina-store-card glass-panel mina-store-card-android">
              <div className="mina-store-card-top">
                <StoreIcon platform="android" />
                <span className="mina-store-status mina-store-status-testing">
                  Closed testing
                </span>
              </div>
              <h3>Android</h3>
              <p>
                Available to the current Google Play closed-testing group while
                the release remains under review.
              </p>
              <button
                className="mina-store-button"
                type="button"
                disabled
                aria-label="Google Play public download is not available yet"
              >
                <StoreIcon platform="android" />
                <span>
                  <small>Get it on</small>
                  Google Play
                </span>
              </button>
            </article>

            <article className="mina-store-card glass-panel mina-store-card-ios">
              <div className="mina-store-card-top">
                <StoreIcon platform="ios" />
                <span className="mina-store-status mina-store-status-soon">
                  Coming soon
                </span>
              </div>
              <h3>iPhone & iPad</h3>
              <p>
                The iOS release is planned for a later stage and is not
                available on the Apple App Store yet.
              </p>
              <button
                className="mina-store-button"
                type="button"
                disabled
                aria-label="Apple App Store release is coming soon"
              >
                <StoreIcon platform="ios" />
                <span>
                  <small>Download on the</small>
                  App Store
                </span>
              </button>
            </article>
          </div>
        </section>

        <section
          className="mina-section mina-support-section"
          id="support"
          aria-labelledby="support-title"
        >
          <div className="mina-support-panel glass-panel">
            <div>
              <p className="mina-section-kicker">Support & legal</p>
              <h2 id="support-title">Product information you can verify.</h2>
              <p>
                Review the current privacy and deletion information, or contact
                the product support address for help with M.I.N.A System.
              </p>
            </div>

            <div className="mina-support-links">
              <a href="/mina-system/privacy-policy">Privacy Policy</a>
              <a href="/mina-system/account-deletion">Account Deletion</a>
              <a href={`mailto:${SUPPORT_EMAIL}`}>Product Support</a>
              <span aria-label="Terms are not available yet">Terms · Coming soon</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="mina-footer">
        <a className="brand-lockup" href="/">
          <span className="brand-mark">KN</span>
          <span>
            <strong>KING NARMAR</strong>
            <small>Software Solutions</small>
          </span>
        </a>
        <p>
          M.I.N.A System — Materials Inventory Navigation Assistant
        </p>
      </footer>
    </main>
  );
}

function StoreIcon({
  platform,
}: {
  platform: "windows" | "android" | "ios";
}) {
  if (platform === "windows") {
    return (
      <svg
        className="mina-store-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M2.5 4.2 11 3v8H2.5V4.2Zm9.7-1.35L21.5 1.5V11h-9.3V2.85ZM2.5 12.2H11v8L2.5 19v-6.8Zm9.7 0h9.3v9.45l-9.3-1.35v-8.1Z" />
      </svg>
    );
  }

  if (platform === "android") {
    return (
      <svg
        className="mina-store-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m3.2 2.5 11.15 9.5L3.2 21.5V2.5Zm12.45 10.6 2.65 2.25-3.35 1.9-2.3-1.95 3-2.2Zm3.8 3.25 1.35 1.15c.7.6.55 1.55-.25 2l-4.1 2.3 3-5.45ZM12.65 8.7l2.3-1.95 4.1 2.3-3.4 2.85-3-3.2Zm3.8-6.5 4.1 2.3c.8.45.95 1.4.25 2l-1.35 1.15-3-5.45Z" />
      </svg>
    );
  }

  return (
    <svg
      className="mina-store-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M16.7 12.8c.03-2.35 1.92-3.48 2.01-3.54-1.08-1.58-2.77-1.8-3.37-1.83-1.43-.15-2.8.85-3.53.85-.74 0-1.87-.83-3.08-.8-1.58.02-3.05.92-3.87 2.34-1.66 2.87-.42 7.1 1.18 9.43.78 1.13 1.71 2.39 2.93 2.34 1.18-.05 1.62-.76 3.04-.76 1.42 0 1.82.76 3.06.73 1.27-.02 2.07-1.13 2.85-2.27.9-1.31 1.27-2.58 1.29-2.64-.03-.01-2.48-.95-2.51-3.85ZM14.4 5.92c.65-.79 1.09-1.89.97-2.99-.94.04-2.09.63-2.76 1.42-.6.69-1.13 1.81-.99 2.88 1.06.08 2.13-.53 2.78-1.31Z" />
    </svg>
  );
}
