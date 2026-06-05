import "./App.css";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";

function App() {
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
