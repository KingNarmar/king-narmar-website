import { useEffect } from "react";
import "./StartProjectPage.css";

const TALLY_FORM_URL =
  "https://tally.so/embed/zxOpY0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_SCRIPT_ID = "tally-embed-script";
const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

const ROADMAP_STEPS = [
  {
    title: "Requirements Review",
    description:
      "We review your answers, uploads, workflow notes, and current pain points.",
  },
  {
    title: "System Roadmap",
    description:
      "We turn your requirements into a clear modules list, priorities, and build phases.",
  },
  {
    title: "Scope & Plan",
    description:
      "We prepare the estimated scope, implementation plan, and next discussion points.",
  },
];

export function StartProjectPage() {
  useEffect(() => {
    const tallyWindow = window as Window & {
      Tally?: { loadEmbeds: () => void };
    };

    const existingScript = document.getElementById(TALLY_SCRIPT_ID);

    if (existingScript) {
      tallyWindow.Tally?.loadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = TALLY_SCRIPT_ID;
    script.src = TALLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => tallyWindow.Tally?.loadEmbeds();
    document.body.appendChild(script);
  }, []);

  return (
    <main className="start-project-page">
      <div className="start-project-background" aria-hidden="true">
        <div className="start-project-orb start-project-orb-gold" />
        <div className="start-project-orb start-project-orb-blue" />
        <div className="start-project-grid" />
      </div>

      <header className="start-project-header glass-panel">
        <a className="brand-lockup" href="/">
          <span className="brand-mark glow-gold">KN</span>
          <span>
            <strong>KING NARMAR</strong>
            <small>Software Solutions</small>
          </span>
        </a>

        <nav className="start-project-nav" aria-label="Project intake navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="start-project-hero" aria-labelledby="start-project-title">
        <p className="start-project-kicker glass-pill">Client Intake Portal</p>

        <h1 id="start-project-title">
          Start Your Project
          <span className="premium-gradient-text">Build The Roadmap.</span>
        </h1>

        <p className="start-project-copy">
          Tell us about your business, current workflow, required system, and
          upload any screenshots, Excel sheets, PDFs, photos, or documents that
          help us understand what you need.
        </p>

        <div className="start-project-steps" aria-label="What happens next">
          {ROADMAP_STEPS.map((step) => (
            <article className="glass-card" key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="start-project-form-section" aria-label="Project brief form">
        <div className="start-project-form-intro glass-card">
          <span>Project Brief</span>
          <h2>Share the details once. We&apos;ll prepare the roadmap.</h2>
          <p>
            This form adapts based on the system type you choose. You can also
            upload supporting files so we can understand the workflow before the
            first project discussion.
          </p>
        </div>

        <div className="start-project-form-card glass-panel glass-panel-blue">
          <iframe
            className="start-project-tally-frame"
            data-tally-src={TALLY_FORM_URL}
            src={TALLY_FORM_URL}
            loading="lazy"
            width="100%"
            height="1220"
            title="KingNarmar project intake form"
          />
        </div>
      </section>
    </main>
  );
}
