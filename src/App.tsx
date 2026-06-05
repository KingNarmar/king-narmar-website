import "./App.css";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";

function App() {
  return (
    <main className="app-shell">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}

export default App;
