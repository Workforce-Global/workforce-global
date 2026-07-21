import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";



const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    sub: ["Custom Software", "Digital Commerce", "Automation", "Consulting"],
  },
  { label: "Projects", href: "#projects" },
  { label: "Innovation", href: "#innovation" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 60);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-jet/95 backdrop-blur-xl border-b border-white/5 shadow-premium-md"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center gap-3 group"
              aria-label="Workforce Global Home"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img src="./wg_whiteindarkfull-removebg-preview.png" className="w-20 h-20" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase text-soft-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  WORKFORCE GLOBAL
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.sub && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="nav-link-premium flex items-center gap-1"
                  >
                    {item.label}
                    {item.sub && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                  {item.sub && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-3 w-52 glass-panel rounded-2xl py-2 shadow-premium-lg border border-white/8">
                      {item.sub.map((s) => (
                        <button
                          key={s}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-warm-gray hover:text-gold hover:bg-white/5 transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary text-xs px-5 py-2.5"
              >
                <span>Start a Project</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-warm-gray hover:text-soft-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          style={{ background: "rgba(11, 11, 11, 0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="px-6 py-6 space-y-1 border-t border-white/5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left py-3 px-2 text-base text-warm-gray hover:text-gold border-b border-white/5 transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary w-full justify-center"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
