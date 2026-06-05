import "./App.css";

const foundationCards = [
  {
    title: "Royal Landing Page",
    description:
      "Build the first premium landing page for KING NARMAR SOFTWARE SOLUTIONS.",
  },
  {
    title: "3D Hero Scene",
    description:
      "Add the first interactive 3D experience for the Kingdom of Code.",
  },
  {
    title: "Interactive Terminal",
    description:
      "Create a terminal-style feature that lets visitors explore services and projects.",
  },
];

function App() {
  return (
    <main className="app-shell">
      <section className="foundation-hero">
        <p className="eyebrow">Project Foundation Ready</p>

        <h1>
          KING NARMAR
          <span>SOFTWARE SOLUTIONS</span>
        </h1>

        <p className="hero-description">
          A 3D interactive portfolio website for building business systems,
          automation tools, dashboards, and custom software solutions.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://github.com/KingNarmar/king-narmar-website/issues"
            target="_blank"
            rel="noreferrer"
          >
            View Roadmap
          </a>

          <a
            className="secondary-button"
            href="https://github.com/KingNarmar/king-narmar-website"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </section>

      <section className="foundation-grid" aria-label="Next development steps">
        {foundationCards.map((card) => (
          <article className="foundation-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
