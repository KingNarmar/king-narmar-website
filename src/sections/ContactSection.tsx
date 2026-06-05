import "./ContactSection.css";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  description: string;
};

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: "Start a quick conversation",
    href: "#",
    description:
      "Best for direct project inquiries, quick questions, and fast business communication.",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "#",
    description:
      "Best for recruiters, partnerships, business updates, and professional networking.",
  },
  {
    label: "GitHub",
    value: "View the code journey",
    href: "https://github.com/KingNarmar",
    description:
      "Explore repositories, experiments, public code, and ongoing product development.",
  },
  {
    label: "Email",
    value: "megamarkter@gmail.com",
    href: "mailto:megamarkter@gmail.com",
    description:
      "Best for detailed proposals, formal requests, collaboration, and business discussions.",
  },
];

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-background">
        <div className="contact-orb contact-orb-gold" />
        <div className="contact-orb contact-orb-blue" />
      </div>

      <div className="contact-container">
        <div className="contact-cta glass-panel glass-panel-blue">
          <p className="contact-kicker glass-pill">Ready For The Next Build?</p>

          <h2 id="contact-title">
            Let&apos;s turn your
            <span className="premium-gradient-text">workflow into a system.</span>
          </h2>

          <p className="contact-lead">
            Whether you need a business system, a dashboard, a Flutter app, or an
            automation tool, KING NARMAR SOFTWARE SOLUTIONS can help turn the idea
            into a clear, usable, and scalable digital product.
          </p>

          <div className="contact-primary-actions">
            <a className="btn btn-primary" href="#">
              Start On WhatsApp
            </a>

            <a className="btn btn-secondary" href="mailto:megamarkter@gmail.com">
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