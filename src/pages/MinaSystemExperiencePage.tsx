import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";
import "./MinaSystemVisualRefinement.css";

const DESKTOP_METRICS = [
  { label: "Workers", value: "248", note: "Active records", tone: "gold" },
  { label: "Tools", value: "1,426", note: "Tracked items", tone: "blue" },
  { label: "In custody", value: "318", note: "Open issues", tone: "violet" },
  { label: "Pending", value: "12", note: "Need approval", tone: "green" },
];

const RECENT_TRANSACTIONS = [
  { worker: "Ahmed Hassan", type: "Tool issue", status: "Completed" },
  { worker: "Michael George", type: "Tool return", status: "Completed" },
  { worker: "Omar Ali", type: "Damage report", status: "Review" },
];

const QUICK_ACTIONS = ["Issue tool", "Return tool", "Add worker", "Create report"];

export function MinaSystemExperiencePage() {
  const [productStage, setProductStage] = useState<HTMLElement | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(
    () => window.scrollY > 520,
  );

  useEffect(() => {
    const productStageFrame = window.requestAnimationFrame(() => {
      setProductStage(
        document.querySelector<HTMLElement>(".mina-product-stage"),
      );
    });

    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 520);
    };

    window.addEventListener("scroll", updateBackToTopVisibility, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(productStageFrame);
      window.removeEventListener("scroll", updateBackToTopVisibility);
    };
  }, []);

  const handleBackToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <MinaSystemPage />

      {productStage && createPortal(<ProductInterfaceVisual />, productStage)}

      <button
        className={`mina-back-to-top${showBackToTop ? " is-visible" : ""}`}
        type="button"
        onClick={handleBackToTop}
        aria-label="Back to the absolute top of the M.I.N.A System page"
        title="Back to top"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 19V5m0 0-6 6m6-6 6 6" />
        </svg>
        <span>Back to top</span>
      </button>
    </>
  );
}

function ProductInterfaceVisual() {
  return (
    <div
      className="mina-interface-visual"
      role="img"
      aria-label="Designed product illustration showing the M.I.N.A System dashboard on desktop and mobile"
    >
      <div className="mina-interface-grid" aria-hidden="true" />
      <div className="mina-interface-glow mina-interface-glow-gold" aria-hidden="true" />
      <div className="mina-interface-glow mina-interface-glow-blue" aria-hidden="true" />

      <div className="mina-interface-desktop" aria-hidden="true">
        <div className="mina-interface-desktop-bar">
          <div className="mina-interface-window-controls">
            <span />
            <span />
            <span />
          </div>
          <strong>M.I.N.A System</strong>
          <div className="mina-interface-workspace-chip">Demo Company</div>
        </div>

        <div className="mina-interface-desktop-layout">
          <aside className="mina-interface-sidebar">
            <div className="mina-interface-sidebar-brand">M</div>
            <div className="mina-interface-sidebar-nav">
              {["Dashboard", "Workers", "Tools", "Transactions", "Reports", "Settings"].map(
                (item, index) => (
                  <div
                    className={`mina-interface-sidebar-item${index === 0 ? " is-active" : ""}`}
                    key={item}
                  >
                    <span className="mina-interface-sidebar-icon" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
            <div className="mina-interface-user-chip">
              <span>MA</span>
              <div>
                <strong>Mina Adly</strong>
                <small>Owner</small>
              </div>
            </div>
          </aside>

          <section className="mina-interface-dashboard">
            <div className="mina-interface-dashboard-heading">
              <div>
                <small>Operations overview</small>
                <h3>Dashboard</h3>
              </div>
              <button type="button" tabIndex={-1}>+ Add transaction</button>
            </div>

            <div className="mina-interface-metrics">
              {DESKTOP_METRICS.map((metric) => (
                <article
                  className={`mina-interface-metric mina-interface-metric-${metric.tone}`}
                  key={metric.label}
                >
                  <div className="mina-interface-metric-icon" />
                  <div>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                    <small>{metric.note}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className="mina-interface-dashboard-lower">
              <article className="mina-interface-panel mina-interface-transactions-panel">
                <div className="mina-interface-panel-heading">
                  <div>
                    <small>Latest activity</small>
                    <strong>Recent transactions</strong>
                  </div>
                  <span>View all</span>
                </div>

                <div className="mina-interface-table-head">
                  <span>Worker</span>
                  <span>Transaction</span>
                  <span>Status</span>
                </div>

                {RECENT_TRANSACTIONS.map((transaction, index) => (
                  <div className="mina-interface-table-row" key={transaction.worker}>
                    <div>
                      <span className={`mina-interface-avatar avatar-${index + 1}`}>
                        {transaction.worker
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <strong>{transaction.worker}</strong>
                    </div>
                    <span>{transaction.type}</span>
                    <span
                      className={`mina-interface-status${transaction.status === "Review" ? " is-review" : ""}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                ))}
              </article>

              <article className="mina-interface-panel mina-interface-actions-panel">
                <div className="mina-interface-panel-heading">
                  <div>
                    <small>Move faster</small>
                    <strong>Quick actions</strong>
                  </div>
                </div>

                <div className="mina-interface-actions-grid">
                  {QUICK_ACTIONS.map((action, index) => (
                    <div className={`mina-interface-action action-${index + 1}`} key={action}>
                      <span />
                      <strong>{action}</strong>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="mina-interface-mobile" aria-hidden="true">
        <div className="mina-interface-mobile-speaker" />
        <div className="mina-interface-mobile-screen">
          <div className="mina-interface-mobile-statusbar">
            <span>9:41</span>
            <div><i /><i /><i /></div>
          </div>

          <div className="mina-interface-mobile-header">
            <button type="button" tabIndex={-1} aria-hidden="true">‹</button>
            <strong>Dashboard</strong>
            <span className="mina-interface-mobile-avatar">MA</span>
          </div>

          <div className="mina-interface-mobile-body">
            <div className="mina-interface-mobile-summary">
              {DESKTOP_METRICS.map((metric) => (
                <article key={metric.label}>
                  <span className={`mobile-metric-dot mobile-metric-${metric.tone}`} />
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                </article>
              ))}
            </div>

            <article className="mina-interface-mobile-list">
              <div className="mina-interface-mobile-list-heading">
                <strong>Recent transactions</strong>
                <span>View all</span>
              </div>
              {RECENT_TRANSACTIONS.map((transaction, index) => (
                <div className="mina-interface-mobile-row" key={transaction.worker}>
                  <span className={`mina-interface-mobile-row-icon row-${index + 1}`} />
                  <div>
                    <strong>{transaction.worker}</strong>
                    <small>{transaction.type}</small>
                  </div>
                  <em>{index === 0 ? "Today" : "Yesterday"}</em>
                </div>
              ))}
            </article>
          </div>

          <div className="mina-interface-mobile-nav">
            <span className="is-active"><i /></span>
            <span><i /></span>
            <button type="button" tabIndex={-1}>+</button>
            <span><i /></span>
            <span><i /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
