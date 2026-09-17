import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

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

  useEffect(() => {
    const els = [headlineRef.current, subtextRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 180);
    });
  }, []);

  const scrollToNext = () => {
    const about = document.querySelector("#about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projects = document.querySelector("#projects");
    if (projects) projects.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={isDark
            ? "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=85&auto=format&fit=crop"}
          alt={isDark ? "Close-up of a computer circuit board" : "Bright modern technology workspace"}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-b from-jet/90 via-jet/80 to-jet/95"
              : "bg-gradient-to-b from-soft-white/95 via-soft-white/85 to-soft-white/95"
          }`}
        />
        {/* Subtle vignette at bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t ${
            isDark ? "from-jet to-transparent" : "from-soft-white to-transparent"
          }`}
        />
      </div>

      {/* Floating geometric shapes (logo-inspired) */}
      <div className="absolute top-24 right-16 lg:right-24 z-10 animate-float opacity-60 hidden md:block">
        <div className="w-20 h-20 rounded-tl-[50%] rounded-br-[50%] border border-gold/25 bg-gold/5" />
      </div>
      <div className="absolute top-48 right-32 lg:right-52 z-10 animate-float-delayed opacity-40 hidden md:block">
        <div className="w-10 h-10 rounded-full border border-gold/20 bg-gold/5" />
      </div>
      <div className="absolute bottom-48 right-12 lg:right-20 z-10 animate-float opacity-30 hidden lg:block">
        <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/3 rotate-12" />
      </div>
      <div className="absolute top-1/3 left-8 lg:left-16 z-10 animate-float-delayed opacity-25 hidden lg:block">
        <div className="w-24 h-24 rounded-3xl border border-gold/15 bg-transparent rotate-6" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-28 pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="section-label">Workforce Global</span>
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Based in Ghana · Building for the World
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-manrope text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.05] text-foreground mb-8"
          >
            Learn by{" "}
            <span
              className="relative inline-block"
              style={{
                color: isDark ? "#C6A15B" : "#7A5B28",
              }}
            >
              Doing
            </span>
            .<br className="hidden md:block" /> Grow Through Real Opportunities.
          </h1>

          {/* Supporting text */}
          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Workforce Global is a community where people learn by doing through real-world
            challenges, collaboration, mentorship, and practical opportunities that build
            confidence, skills, and experience.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary group"
            >
              <span>Find an Opportunity</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToProjects}
              className="btn-secondary"
            >
              See How It Works
            </button>
          </div>

          {/* Social proof strip */}
          <div className="mt-16 flex items-center gap-6 flex-wrap">
            {[
              { label: "Learning Opportunities", value: "50+" },
              { label: "Countries Connected", value: "12+" },
              { label: "People In Our Community", value: "200K+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <div className={`text-2xl font-bold font-manrope ${isDark ? "text-gold" : "text-[#7A5B28]"}`}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
                <div className={`h-8 w-px ${isDark ? "bg-white/10" : "bg-jet/15"} last:hidden`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground ${isDark ? "hover:text-gold" : "hover:text-[#7A5B28]"} transition-colors group`}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={18} className={`animate-bounce ${isDark ? "group-hover:text-gold" : "group-hover:text-[#7A5B28]"}`} />
      </button>
    </section>
  );
};

export default HeroSection;
