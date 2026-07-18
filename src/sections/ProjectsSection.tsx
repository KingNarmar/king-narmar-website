import "./ProjectsSection.css";

type ProjectLink = {
  label: string;
  href?: string;
};

type Project = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  technology: string[];
  value: string;
  links: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    title: "M.I.N.A System",
    subtitle: "Materials Inventory Navigation Assistant",
    problem:
      "Companies need a reliable way to control inventory, custody, users, reports, and accountability across teams.",
    solution:
      "A scalable business platform designed to manage company setup, workers, tools, transactions, reporting, and role-based access.",
    technology: ["Flutter", "Dart", "Supabase", "Cubit", "Clean Architecture"],
    value:
      "Built to become a sellable multi-company system that improves control, reduces manual work, and creates clear accountability.",
    links: [{ label: "Explore M.I.N.A System", href: "/mina-system" }],
  },
  {
    title: "Tools Tracking Demo",
    subtitle: "Offline custody tracking for warehouse operations",
    problem:
      "Manual tool issue and return processes create missing records, unclear responsibility, and slow reporting.",
    solution:
      "A desktop app that tracks issued and returned tools, captures image proof, calculates balances, and generates worker PDF reports.",
    technology: ["Flutter", "Dart", "Drift", "SQLite", "PDF Reports"],
    value:
      "Saved 10+ manual hours weekly and improved accountability for 200+ tools through clear custody records.",
    links: [{ label: "Demo unavailable" }],
  },
  {
    title: "Excel Workforce Scheduler",
    subtitle: "Fair weekly worker distribution system",
    problem:
      "Manual scheduling can create unfair workload distribution and makes it hard to match workers with weekly requirements.",
    solution:
      "An Excel and VBA scheduler that uses requirements, availability, history, and data quality checks to generate balanced schedules.",
    technology: ["Excel", "VBA", "UserForms", "Automation", "Reports"],
    value:
      "Helps teams reduce scheduling mistakes, detect shortages, and distribute work fairly across equivalent workers.",
    links: [{ label: "Download unavailable" }],
  },
];

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-background">
        <div className="projects-grid-pattern" />
        <div className="projects-orb projects-orb-gold" />
        <div className="projects-orb projects-orb-blue" />
      </div>

      <div className="projects-container">
        <p className="projects-kicker glass-pill">Proof Of Capability</p>

        <div className="projects-heading">
          <h2 id="projects-title">
            Real projects.
            <span className="premium-gradient-text">Real operational value.</span>
          </h2>

          <p>
            A showcase of systems built around real business problems: inventory
            control, tool custody, workforce scheduling, reporting, and automation.
          </p>
        </div>

        <div className="projects-list">
          {PROJECTS.map((project, index) => (
            <article className="project-card glass-panel" key={project.title}>
              <div className="project-card-header">
                <span className="project-index">
                  Project {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </div>

              <div className="project-story-grid">
                <div>
                  <span>Problem</span>
                  <p>{project.problem}</p>
                </div>

                <div>
                  <span>Solution</span>
                  <p>{project.solution}</p>
                </div>

                <div>
                  <span>Business Value</span>
                  <p>{project.value}</p>
                </div>
              </div>

              <div className="project-tech-row" aria-label={`${project.title} technology stack`}>
                {project.technology.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links" aria-label={`${project.title} links`}>
                {project.links.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ) : (
                    <span className="project-link-unavailable" key={link.label}>
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
