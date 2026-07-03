import { lazy, Suspense } from "react";
import "./App.css";
import { MinaSystemAccountDeletionPage } from "./pages/MinaSystemAccountDeletionPage";
import { MinaSystemPrivacyPolicyPage } from "./pages/MinaSystemPrivacyPolicyPage";
import { StartProjectPage } from "./pages/StartProjectPage";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";

const ConfirmEmailPage = lazy(() =>
  import("./pages/ConfirmEmailPage").then((module) => ({
    default: module.ConfirmEmailPage,
  })),
);

const ResetPasswordPage = lazy(() =>
  import("./pages/ResetPasswordPage").then((module) => ({
    default: module.ResetPasswordPage,
  })),
);

const HorusConfirmEmailPage = lazy(() =>
  import("./pages/HorusConfirmEmailPage").then((module) => ({
    default: module.HorusConfirmEmailPage,
  })),
);

const HorusResetPasswordPage = lazy(() =>
  import("./pages/HorusResetPasswordPage").then((module) => ({
    default: module.HorusResetPasswordPage,
  })),
);

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/reset-password") {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <ResetPasswordPage />
      </Suspense>
    );
  }

  if (currentPath === "/confirm-email") {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <ConfirmEmailPage />
      </Suspense>
    );
  }

  if (
    currentPath === "/horus/confirm" ||
    currentPath === "/horus/confirm-email"
  ) {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <HorusConfirmEmailPage />
      </Suspense>
    );
  }

  if (currentPath === "/horus/reset-password") {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <HorusResetPasswordPage />
      </Suspense>
    );
  }

  if (currentPath === "/mina-system/privacy-policy") {
    return <MinaSystemPrivacyPolicyPage />;
  }

  if (currentPath === "/mina-system/account-deletion") {
    return <MinaSystemAccountDeletionPage />;
  }

  if (currentPath === "/start-project") {
    return <StartProjectPage />;
  }

  return (
    <main className="app-shell">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

function PageLoadingFallback() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#050812",
        color: "#f8fafc",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      Loading...
    </main>
  );
}

export default App;
