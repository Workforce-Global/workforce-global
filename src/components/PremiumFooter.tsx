import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const WGLogo = () => (
  <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 56 L8 56 A48 48 0 0 1 56 8 Z" fill="#C6A15B" />
    <rect x="64" y="8" width="48" height="48" rx="24" fill="#C6A15B" />
    <rect x="8" y="64" width="48" height="48" rx="6" fill="#C6A15B" />
    <path d="M64 112 L64 64 L112 64 A48 48 0 0 1 64 112 Z" fill="#C6A15B" />
  </svg>
);

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Process", href: "#process" },
    { label: "Global Reach", href: "#global" },
  ],
  Services: [
    { label: "Custom Software", href: "#services" },
    { label: "Digital Commerce", href: "#services" },
    { label: "Automation & AI", href: "#services" },
    { label: "Strategy & Consulting", href: "#services" },
  ],
  Programs: [
    { label: "Hackathons", href: "#innovation" },
    { label: "Product Sprints", href: "#innovation" },
    { label: "Startup Incubation", href: "#innovation" },
    { label: "Student Programs", href: "#innovation" },
  ],
  Connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Start a Project", href: "#contact" },
    { label: "Schedule a Call", href: "#contact" },
    { label: "hello@workforceglobal.co", href: "mailto:hello@workforceglobal.co" },
  ],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const PremiumFooter = () => {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-graphite border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 mb-5 group"
            >
              <WGLogo />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-soft-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  WORKFORCE
                </span>
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  GLOBAL
                </span>
              </div>
            </button>
            <p
              className="text-xs text-warm-gray leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Engineering the Future, One Solution at a Time. Based in Accra, Ghana.
              Building for the World.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-warm-gray hover:text-gold hover:border-gold/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className="lg:col-span-1">
              <h4
                className="text-xs font-semibold tracking-[0.15em] uppercase text-soft-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {col}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith("#") ? (
                      <button
                        onClick={() => scrollTo(href)}
                        className="footer-link text-left"
                      >
                        {label}
                      </button>
                    ) : (
                      <a href={href} className="footer-link flex items-center gap-1 group">
                        {label}
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-warm-gray"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Workforce Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="footer-link text-xs"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
