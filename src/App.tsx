import "./App.css";
import { ConfirmEmailPage } from "./pages/ConfirmEmailPage";
import { MinaSystemAccountDeletionPage } from "./pages/MinaSystemAccountDeletionPage";
import { MinaSystemPrivacyPolicyPage } from "./pages/MinaSystemPrivacyPolicyPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/reset-password") {
    return <ResetPasswordPage />;
  }

  if (currentPath === "/confirm-email") {
    return <ConfirmEmailPage />;
  }

  if (currentPath === "/mina-system/privacy-policy") {
    return <MinaSystemPrivacyPolicyPage />;
  }

  if (currentPath === "/mina-system/account-deletion") {
    return <MinaSystemAccountDeletionPage />;
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

export default App;
