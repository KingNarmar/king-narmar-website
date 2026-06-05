import "./App.css";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";

function App() {
  return (
    <main className="app-shell">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
