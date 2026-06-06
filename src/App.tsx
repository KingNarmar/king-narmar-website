import "./App.css";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/reset-password") {
    return <ResetPasswordPage />;
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