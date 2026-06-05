import { KingdomScene } from "../components/three/KingdomScene";

export function HeroSection() {
  return (
    <section className="royal-hero" aria-labelledby="hero-title">
      <div className="hero-background">
        <div className="hero-orb hero-orb-gold" />
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-grid" />
      </div>

      <header className="hero-header glass-panel">
        <a className="brand-lockup" href="/">
          <span className="brand-mark glow-gold">KN</span>
          <span>
            <strong>KING NARMAR</strong>
            <small>Software Solutions</small>
          </span>
        </a>

        <nav className="hero-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero-content">
        <div className="hero-3d-stage hero-3d-stage-premium" aria-label="3D royal code core">
          <KingdomScene />
        </div>

        <p className="hero-kicker glass-pill">The Kingdom of Code</p>

        <h1 id="hero-title">
          Build Systems.
          <span className="premium-gradient-text">Rule The Chaos.</span>
        </h1>

        <p className="hero-copy">
          KING NARMAR SOFTWARE SOLUTIONS builds smart business systems,
          automation tools, dashboards, and custom software that turn daily
          operational chaos into controlled workflows.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Enter The Kingdom
          </a>

          <a
            className="btn btn-secondary"
            href="https://github.com/KingNarmar"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="hero-stats" aria-label="Brand capabilities">
          <article className="glass-card glow-blue">
            <strong>3D</strong>
            <span>Interactive Web</span>
          </article>

          <article className="glass-card glow-gold">
            <strong>AI</strong>
            <span>Automation Ready</span>
          </article>

          <article className="glass-card glow-blue">
            <strong>ERP</strong>
            <span>Business Logic</span>
          </article>
        </div>
      </div>

      <div className="royal-console glass-panel glass-panel-blue" aria-label="Code preview">
        <div className="console-topbar">
          <span />
          <span />
          <span />
        </div>

        <pre>
          <code>{`kingnarmar.init({
  brand: "KING NARMAR",
  mission: "Build smart systems",
  status: "Ready for the next level"
});`}</code>
        </pre>
      </div>
    </section>
  );
}
