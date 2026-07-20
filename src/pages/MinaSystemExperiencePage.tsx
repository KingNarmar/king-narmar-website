import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BackToTopButton } from "../components/BackToTopButton";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";

const PRODUCT_VISUAL_PATH = "/assets/mina-system-product-artwork.png";
const MICROSOFT_STORE_URL =
  "https://apps.microsoft.com/detail/9NFCTDV1SZJG";

export function MinaSystemExperiencePage() {
  const [productStage, setProductStage] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const productStageFrame = window.requestAnimationFrame(() => {
      setProductStage(
        document.querySelector<HTMLElement>(".mina-product-stage"),
      );
    });

    return () => {
      window.cancelAnimationFrame(productStageFrame);
    };
  }, []);

  useEffect(() => {
    if (!productStage) {
      return;
    }

    return activateWindowsStoreAvailability();
  }, [productStage]);

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

      <BackToTopButton />
    </>
  );
}

function activateWindowsStoreAvailability() {
  const heroStatus = document.querySelector<HTMLElement>(
    ".mina-status-row article:first-child small",
  );
  const heroDot = document.querySelector<HTMLElement>(
    ".mina-status-row article:first-child .mina-status-dot",
  );
  const availabilityHeadline = document.querySelector<HTMLElement>(
    ".mina-availability-section .mina-section-heading h2 span",
  );
  const availabilityCopy = document.querySelector<HTMLElement>(
    ".mina-availability-section .mina-section-heading > p:last-child",
  );
  const windowsCard = document.querySelector<HTMLElement>(
    ".mina-store-card-windows",
  );
  const windowsStatus = windowsCard?.querySelector<HTMLElement>(
    ".mina-store-status",
  );
  const windowsDescription = windowsCard?.querySelector<HTMLElement>("p");
  const disabledButton = windowsCard?.querySelector<HTMLButtonElement>(
    ".mina-store-button",
  );

  if (!windowsCard || !disabledButton) {
    return undefined;
  }

  const originalHeroStatus = heroStatus?.textContent ?? "";
  const originalHeroDotStyle = heroDot?.style.cssText ?? "";
  const originalAvailabilityHeadline = availabilityHeadline?.textContent ?? "";
  const originalAvailabilityCopy = availabilityCopy?.textContent ?? "";
  const originalWindowsStatus = windowsStatus?.textContent ?? "";
  const originalWindowsStatusStyle = windowsStatus?.style.cssText ?? "";
  const originalWindowsDescription = windowsDescription?.textContent ?? "";
  const originalButtonHidden = disabledButton.hidden;

  if (heroStatus) {
    heroStatus.textContent = "Available on Microsoft Store";
  }

  if (heroDot) {
    heroDot.style.color = "#22c55e";
    heroDot.style.background = "currentColor";
  }

  if (availabilityHeadline) {
    availabilityHeadline.textContent = "Windows is available now.";
  }

  if (availabilityCopy) {
    availabilityCopy.textContent =
      "Download M.I.N.A System for Windows from the official Microsoft Store listing. Android and iOS links remain inactive until their public releases are available.";
  }

  if (windowsStatus) {
    windowsStatus.textContent = "Available now";
    windowsStatus.style.color = "#86efac";
    windowsStatus.style.background = "rgba(34, 197, 94, 0.09)";
  }

  if (windowsDescription) {
    windowsDescription.textContent =
      "Available publicly on Microsoft Store for compatible Windows devices.";
  }

  const storeLink = document.createElement("a");
  storeLink.className = `${disabledButton.className} btn`;
  storeLink.href = MICROSOFT_STORE_URL;
  storeLink.target = "_blank";
  storeLink.rel = "noopener noreferrer";
  storeLink.setAttribute(
    "aria-label",
    "Download M.I.N.A System from Microsoft Store (opens in a new tab)",
  );
  storeLink.style.cursor = "pointer";
  storeLink.style.opacity = "1";
  storeLink.style.color = "#f8fafc";
  storeLink.style.textDecoration = "none";

  for (const child of Array.from(disabledButton.childNodes)) {
    storeLink.appendChild(child.cloneNode(true));
  }

  disabledButton.hidden = true;
  windowsCard.appendChild(storeLink);

  return () => {
    storeLink.remove();
    disabledButton.hidden = originalButtonHidden;

    if (heroStatus) {
      heroStatus.textContent = originalHeroStatus;
    }

    if (heroDot) {
      heroDot.style.cssText = originalHeroDotStyle;
    }

    if (availabilityHeadline) {
      availabilityHeadline.textContent = originalAvailabilityHeadline;
    }

    if (availabilityCopy) {
      availabilityCopy.textContent = originalAvailabilityCopy;
    }

    if (windowsStatus) {
      windowsStatus.textContent = originalWindowsStatus;
      windowsStatus.style.cssText = originalWindowsStatusStyle;
    }

    if (windowsDescription) {
      windowsDescription.textContent = originalWindowsDescription;
    }
  };
}
