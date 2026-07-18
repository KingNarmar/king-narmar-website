import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BackToTopButton } from "../components/BackToTopButton";
import { MinaSystemPage } from "./MinaSystemPage";
import "./MinaSystemExperiencePage.css";

const PRODUCT_VISUAL_PATH = "/assets/mina-system-product-artwork.png";

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
