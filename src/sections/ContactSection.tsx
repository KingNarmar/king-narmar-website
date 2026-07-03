import "./ContactSection.css";

const START_PROJECT_URL = "/start-project";
const WHATSAPP_URL = "https://wa.me/971581255496";
const LINKEDIN_URL = "https://www.linkedin.com/in/mina-bushra-733993317/";
const GITHUB_URL = "https://github.com/KingNarmar";
const EMAIL_URL = "mailto:contact@kingnarmar.com";
const SUPPORT_EMAIL_URL = "mailto:support@kingnarmar.com";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  description: string;
};

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: "+971 58 125 5496",
    href: WHATSAPP_URL,
    description:
      "Best for direct project inquiries, quick questions, and fast business communication.",
  },
  {
    label: "LinkedIn",
    value: "Mina Bushra",
    href: LINKEDIN_URL,
    description:
      "Best for recruiters, partnerships, business updates, and professional networking.",
  },
  {
    label: "GitHub",
    value: "KingNarmar",
    href: GITHUB_URL,
    description:
      "Explore repositories, experiments, public code, and ongoing product development.",
  },
  {
    label: "Business Email",
    value: "contact@kingnarmar.com",
    href: EMAIL_URL,
    description:
      "Best for detailed proposals, formal requests, collaboration, and business discussions.",
  },
  {
    label: "Support Email",
    value: "support@kingnarmar.com",
    href: SUPPORT_EMAIL_URL,
    description:
      "Best for existing clients, product support, follow-ups, and technical assistance.",
  },
];

export function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-background">
        <div className="contact-orb contact-orb-gold" />
        <div className="contact-orb contact-orb-blue" />
      </div>

      <div className="contact-container">
        <div className="contact-cta glass-panel glass-panel-blue">
          <p className="contact-kicker glass-pill">Ready For The Next Build?</p>

          <h2 id="contact-title">
            Let&apos;s turn your
            <span className="premium-gradient-text">
              workflow into a system.
            </span>
          </h2>

          <p className="contact-lead">
            Whether you need a business system, a dashboard, a Flutter app, or
            an automation tool, KING NARMAR SOFTWARE SOLUTIONS can help turn the
            idea into a clear, usable, and scalable digital product.
          </p>

          <div className="contact-primary-actions">
            <a className="btn btn-primary" href={START_PROJECT_URL}>
              Fill Project Brief
            </a>

            <a
              className="btn btn-secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Start On WhatsApp
            </a>

            <a className="btn btn-secondary" href={EMAIL_URL}>
              Send Email
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              className="contact-card glass-card"
              href={channel.href}
              key={channel.label}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
              <p>{channel.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
