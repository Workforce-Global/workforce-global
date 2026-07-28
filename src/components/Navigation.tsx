import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    sub: ["Custom Software", "Digital Commerce", "Automation", "Consulting"],
  },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isDark, setIsDark] = useState(true);

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

  useEffect(() => {
    const updateIsDark = () => {
      setIsDark(
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    };
    updateIsDark();
    
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateIsDark);
      return () => mediaQuery.removeEventListener("change", updateIsDark);
    }
  }, [theme]);

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    // External route (starts with /)
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }
    // If we're not on the homepage, navigate home first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
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
          ? "bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-premium-md py-2"
          : "bg-transparent py-3"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Workforce Global Home"
            >
              <div className="transition-transform duration-300 group-hover:scale-105 flex items-center">
                <img
                  src={isDark ? "./wg_whiteindarkfull-removebg-preview.png" : "./wg_darkinwhite_full-removebg-preview.png"}
                  alt="Workforce Global Logo"
                  className="h-20 md:h-20 w-auto object-contain"
                />
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
                          className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-gold hover:bg-white/5 transition-colors"
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

            {/* CTA & Controls */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={cycleTheme}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                title={`Current Theme: ${theme}`}
                aria-label="Toggle Theme"
              >
                {theme === "light" && <Sun size={16} />}
                {theme === "dark" && <Moon size={16} />}
                {theme === "system" && <Monitor size={16} />}
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary text-xs px-5 py-2.5"
              >
                <span>Start a Project</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
                className="w-full text-left py-3 px-2 text-base text-muted-foreground hover:text-gold border-b border-white/5 transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
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
