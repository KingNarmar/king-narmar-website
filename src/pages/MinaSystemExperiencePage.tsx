import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";

const DESKTOP_SCREENSHOT =
  "https://raw.githubusercontent.com/KingNarmar/mina_system/main/screen_shot/dashboard_screen_desktop_layout.png";
const MOBILE_SCREENSHOT =
  "https://raw.githubusercontent.com/KingNarmar/mina_system/main/screen_shot/dashboard_screen_mobile_layout.png";

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

  return (
    <>
      <MinaSystemPage />

      {productStage && createPortal(<RealProductPreview />, productStage)}

      <a
        className={`mina-back-to-top${showBackToTop ? " is-visible" : ""}`}
        href="#mina-title"
        aria-label="Back to the top of the M.I.N.A System page"
        title="Back to top"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 19V5m0 0-6 6m6-6 6 6" />
        </svg>
        <span>Back to top</span>
      </a>
    </>
  );
}

function RealProductPreview() {
  return (
    <div
      className="mina-real-product-preview"
      role="img"
      aria-label="Real M.I.N.A System dashboard shown on desktop and mobile devices"
    >
      <div className="mina-real-preview-grid" aria-hidden="true" />
      <div
        className="mina-real-preview-glow mina-real-preview-glow-gold"
        aria-hidden="true"
      />
      <div
        className="mina-real-preview-glow mina-real-preview-glow-blue"
        aria-hidden="true"
      />

      <div className="mina-real-preview-label">
        <span className="mina-real-preview-label-dot" />
        Real product interface
      </div>

      <div className="mina-real-desktop-shell">
        <div className="mina-real-desktop-topbar" aria-hidden="true">
          <div className="mina-real-window-controls">
            <span />
            <span />
            <span />
          </div>
          <strong>M.I.N.A System</strong>
          <span className="mina-real-live-pill">Live workspace</span>
        </div>

        <div className="mina-real-desktop-screen">
          <img
            src={DESKTOP_SCREENSHOT}
            alt="M.I.N.A System dashboard on desktop"
            width="1109"
            height="543"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="mina-real-desktop-reflection" aria-hidden="true" />
      </div>

      <div className="mina-real-mobile-shell">
        <div className="mina-real-mobile-speaker" aria-hidden="true" />
        <div className="mina-real-mobile-screen">
          <img
            src={MOBILE_SCREENSHOT}
            alt="M.I.N.A System dashboard on mobile"
            width="494"
            height="981"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="mina-real-mobile-glare" aria-hidden="true" />
      </div>

      <div className="mina-real-preview-caption">
        <span>Responsive operations</span>
        <strong>One workspace. Every screen.</strong>
      </div>
    </div>
  );
}
