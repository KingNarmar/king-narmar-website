import { useEffect } from "react";
import "./StartProjectPage.css";

const TALLY_FORM_URL =
  "https://tally.so/embed/zxOpY0?alignLeft=1&hideTitle=1&dynamicHeight=1";
const TALLY_SCRIPT_ID = "tally-embed-script";
const TALLY_SCRIPT_SRC = "https://tally.so/widgets/embed.js";

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
          <a className="start-project-nav-active" href="/start-project">
            Start Project
          </a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="start-project-form-page" aria-labelledby="start-project-title">
        <div className="start-project-form-heading">
          <p className="start-project-kicker glass-pill">Client Intake Portal</p>

          <h1 id="start-project-title">Start Your Project</h1>

          <p>
            Fill this project brief once and attach any screenshots, Excel
            sheets, PDFs, photos, or workflow documents. We will review it and
            prepare the roadmap, modules list, estimated scope, and next steps.
          </p>
        </div>

        <div className="start-project-form-card glass-panel glass-panel-blue">
          <iframe
            className="start-project-tally-frame"
            data-tally-src={TALLY_FORM_URL}
            src={TALLY_FORM_URL}
            loading="lazy"
            width="100%"
            height="1500"
            title="KingNarmar project intake form"
          />
        </div>
      </section>
    </main>
  );
}
