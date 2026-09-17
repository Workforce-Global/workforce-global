import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";


const footerLinks = {
  Explore: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "How It Works", href: "#process" },
    { label: "Our Community", href: "#clients" },
  ],
  Learn: [
    { label: "Learning Paths", href: "#services" },
    { label: "Opportunities", href: "#projects" },
    { label: "Mentorship", href: "#innovation" },
    { label: "Community Events", href: "#innovation" },
  ],
  Participate: [
    { label: "Hackathons", href: "#innovation" },
    { label: "Build Sprints", href: "#innovation" },
    { label: "Innovation Challenges", href: "#innovation" },
    { label: "Student Programs", href: "#innovation" },
  ],
  Connect: [
    { label: "Join the Community", href: "#contact" },
    { label: "Bring a Challenge", href: "#contact" },
    { label: "Find a Mentor", href: "#contact" },
    { label: "connect@workforceglobal.com", href: "mailto:connect@workforceglobal.com" },
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
    <footer className="bg-card border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 mb-5 group"
            >
              <img src="./wg_whiteindarkfull-removebg-preview.png" className="w-auto h-20" />
              {/* <div className="flex flex-col leading-none">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  WORKFORCE GLOBAL
                </span>
              </div>*/ }
            </button>
            <p
              className="text-xs text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A place to learn by doing through real challenges, collaboration, and practical
              experience. Based in Accra, connected to the world.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
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
                className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground mb-4"
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
            className="text-xs text-muted-foreground"
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
