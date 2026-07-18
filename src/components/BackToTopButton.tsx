import { useEffect, useState } from "react";
import "./BackToTopButton.css";

type BackToTopButtonProps = {
  threshold?: number;
};

export function BackToTopButton({ threshold = 520 }: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [threshold]);

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
    <button
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      type="button"
      onClick={handleBackToTop}
      aria-label="Back to the top of the page"
      title="Back to top"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 19V5m0 0-6 6m6-6 6 6" />
      </svg>
      <span>Back to top</span>
    </button>
  );
}
