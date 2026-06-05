import "./ServicesSection.css";

type Service = {
  title: string;
  description: string;
  highlights: string[];
};

const SERVICES: Service[] = [
  {
    title: "Custom Business Systems",
    description:
      "Tailored software that turns daily manual work into organized, trackable, and scalable business workflows.",
    highlights: ["Internal tools", "Approval flows", "Process control"],
  },
  {
    title: "Flutter Apps",
    description:
      "Cross-platform applications with clean interfaces, structured logic, and room to grow from MVP to full product.",
    highlights: ["Mobile apps", "Desktop apps", "Responsive UI"],
  },
  {
    title: "Excel & VBA Automation",
    description:
      "Smart spreadsheets, macros, forms, and reports built to reduce repetitive work and improve accuracy.",
    highlights: ["VBA tools", "Automated reports", "Data entry forms"],
  },
  {
    title: "Inventory / Warehouse Solutions",
    description:
      "Practical systems for stock control, tool custody, warehouse movements, accountability, and operational visibility.",
    highlights: ["Stock tracking", "Custody reports", "Warehouse control"],
  },
  {
    title: "Dashboards & Reporting",
    description:
      "Clear dashboards that transform raw data into useful insights for faster decisions and better management.",
    highlights: ["KPIs", "Powerful reports", "Decision support"],
  },
];

export function ServicesSection() {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-background">
        <div className="services-orb services-orb-gold" />
        <div className="services-orb services-orb-blue" />
      </div>

      <div className="services-container">
        <p className="services-kicker glass-pill">What The Kingdom Builds</p>

        <div className="services-heading">
          <h2 id="services-title">
            Services built for
            <span className="premium-gradient-text">
              real business control.
            </span>
          </h2>

          <p>
            KING NARMAR SOFTWARE SOLUTIONS helps businesses replace scattered
            manual work with smart systems, automation, dashboards, and digital
            workflows.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article className="service-card glass-card" key={service.title}>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul aria-label={`${service.title} highlights`}>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
