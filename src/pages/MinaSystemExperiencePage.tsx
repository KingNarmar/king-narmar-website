import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BackToTopButton } from "../components/BackToTopButton";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";

const PRODUCT_VISUAL_PATH = "/assets/mina-system-product-artwork.png";
const MICROSOFT_STORE_URL =
  "https://apps.microsoft.com/detail/9NFCTDV1SZJG";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.minasystem.app";

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

    return activatePublishedStoreAvailability();
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

function activatePublishedStoreAvailability() {
  const windowsHeroStatus = document.querySelector<HTMLElement>(
    ".mina-status-row article:first-child small",
  );
  const windowsHeroDot = document.querySelector<HTMLElement>(
    ".mina-status-row article:first-child .mina-status-dot",
  );
  const androidHeroStatus = document.querySelector<HTMLElement>(
    ".mina-status-row article:nth-child(2) small",
  );
  const androidHeroDot = document.querySelector<HTMLElement>(
    ".mina-status-row article:nth-child(2) .mina-status-dot",
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
  const androidCard = document.querySelector<HTMLElement>(
    ".mina-store-card-android",
  );
  const windowsStatus = windowsCard?.querySelector<HTMLElement>(
    ".mina-store-status",
  );
  const androidStatus = androidCard?.querySelector<HTMLElement>(
    ".mina-store-status",
  );
  const windowsDescription = windowsCard?.querySelector<HTMLElement>("p");
  const androidDescription = androidCard?.querySelector<HTMLElement>("p");
  const windowsButton = windowsCard?.querySelector<HTMLButtonElement>(
    ".mina-store-button",
  );
  const androidButton = androidCard?.querySelector<HTMLButtonElement>(
    ".mina-store-button",
  );

  if (!windowsCard || !windowsButton || !androidCard || !androidButton) {
    return undefined;
  }

  const originalWindowsHeroStatus = windowsHeroStatus?.textContent ?? "";
  const originalWindowsHeroDotStyle = windowsHeroDot?.style.cssText ?? "";
  const originalAndroidHeroStatus = androidHeroStatus?.textContent ?? "";
  const originalAndroidHeroDotStyle = androidHeroDot?.style.cssText ?? "";
  const originalAvailabilityHeadline = availabilityHeadline?.textContent ?? "";
  const originalAvailabilityCopy = availabilityCopy?.textContent ?? "";
  const originalWindowsStatus = windowsStatus?.textContent ?? "";
  const originalWindowsStatusStyle = windowsStatus?.style.cssText ?? "";
  const originalAndroidStatus = androidStatus?.textContent ?? "";
  const originalAndroidStatusStyle = androidStatus?.style.cssText ?? "";
  const originalWindowsDescription = windowsDescription?.textContent ?? "";
  const originalAndroidDescription = androidDescription?.textContent ?? "";
  const originalWindowsButtonStyle = windowsButton.style.cssText;
  const originalAndroidButtonStyle = androidButton.style.cssText;

  if (windowsHeroStatus) {
    windowsHeroStatus.textContent = "Available on Microsoft Store";
  }

  setAvailableDot(windowsHeroDot);

  if (androidHeroStatus) {
    androidHeroStatus.textContent = "Available on Google Play";
  }

  setAvailableDot(androidHeroDot);

  if (availabilityHeadline) {
    availabilityHeadline.textContent =
      "Windows and Android are available now.";
  }

  if (availabilityCopy) {
    availabilityCopy.textContent =
      "Download M.I.N.A System from the official Microsoft Store and Google Play listings. The iOS link remains inactive until its public release is available.";
  }

  setAvailableStatus(windowsStatus);
  setAvailableStatus(androidStatus);

  if (windowsDescription) {
    windowsDescription.textContent =
      "Available publicly on Microsoft Store for compatible Windows devices.";
  }

  if (androidDescription) {
    androidDescription.textContent =
      "Available publicly on Google Play for compatible Android devices.";
  }

  const microsoftStoreLink = createStoreLink(
    windowsButton,
    MICROSOFT_STORE_URL,
    "Download M.I.N.A System from Microsoft Store (opens in a new tab)",
  );
  const googlePlayLink = createStoreLink(
    androidButton,
    GOOGLE_PLAY_URL,
    "Download M.I.N.A System from Google Play (opens in a new tab)",
  );

  windowsButton.style.display = "none";
  androidButton.style.display = "none";
  windowsCard.appendChild(microsoftStoreLink);
  androidCard.appendChild(googlePlayLink);

  return () => {
    microsoftStoreLink.remove();
    googlePlayLink.remove();
    windowsButton.style.cssText = originalWindowsButtonStyle;
    androidButton.style.cssText = originalAndroidButtonStyle;

    if (windowsHeroStatus) {
      windowsHeroStatus.textContent = originalWindowsHeroStatus;
    }

    if (windowsHeroDot) {
      windowsHeroDot.style.cssText = originalWindowsHeroDotStyle;
    }

    if (androidHeroStatus) {
      androidHeroStatus.textContent = originalAndroidHeroStatus;
    }

    if (androidHeroDot) {
      androidHeroDot.style.cssText = originalAndroidHeroDotStyle;
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

    if (androidStatus) {
      androidStatus.textContent = originalAndroidStatus;
      androidStatus.style.cssText = originalAndroidStatusStyle;
    }

    if (windowsDescription) {
      windowsDescription.textContent = originalWindowsDescription;
    }

    if (androidDescription) {
      androidDescription.textContent = originalAndroidDescription;
    }
  };
}

function setAvailableDot(dot: HTMLElement | null) {
  if (!dot) {
    return;
  }

  dot.style.color = "#22c55e";
  dot.style.background = "currentColor";
}

function setAvailableStatus(status: HTMLElement | null) {
  if (!status) {
    return;
  }

  status.textContent = "Available now";
  status.style.color = "#86efac";
  status.style.background = "rgba(34, 197, 94, 0.09)";
}

function createStoreLink(
  disabledButton: HTMLButtonElement,
  href: string,
  ariaLabel: string,
) {
  const storeLink = document.createElement("a");
  storeLink.className = `${disabledButton.className} btn`;
  storeLink.href = href;
  storeLink.target = "_blank";
  storeLink.rel = "noopener noreferrer";
  storeLink.setAttribute("aria-label", ariaLabel);
  storeLink.style.cursor = "pointer";
  storeLink.style.opacity = "1";
  storeLink.style.color = "#f8fafc";
  storeLink.style.textDecoration = "none";

  for (const child of Array.from(disabledButton.childNodes)) {
    storeLink.appendChild(child.cloneNode(true));
  }

  return storeLink;
}
