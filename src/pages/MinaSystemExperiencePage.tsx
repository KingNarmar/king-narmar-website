import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";

const PRODUCT_VISUAL_PATH = "/assets/mina-system-product-artwork.png";

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

      {productStage &&
        createPortal(
          <figure className="mina-product-artwork">
            <img
              src={PRODUCT_VISUAL_PATH}
              alt="M.I.N.A System shown on mobile, tablet, and desktop devices"
              width="1648"
              height="928"
              loading="eager"
              fetchPriority="high"
            />
          </figure>,
          productStage,
        )}

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
