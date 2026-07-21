import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=85&auto=format&fit=crop"
          alt="Innovation and technology"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-jet/85 via-jet/75 to-jet/90" />
        {/* Subtle gold vignette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-jet to-transparent" />
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
            <span className="text-xs text-warm-gray" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Based in Ghana · Building for the World
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-manrope text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[1.05] text-soft-white mb-8"
          >
            Engineering the{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #D4B57A, #C6A15B, #9E7B3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Future
            </span>
            ,<br className="hidden md:block" /> One Solution at a Time.
          </h1>

          {/* Supporting text */}
          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-warm-gray leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Workforce Global partners with startups, businesses, and organizations to design,
            build, and scale software products, digital experiences, and innovation initiatives
            that create lasting impact.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary group"
            >
              <span>Start Your Project</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToProjects}
              className="btn-secondary"
            >
              Explore Our Work
            </button>
          </div>

          {/* Social proof strip */}
          <div className="mt-16 flex items-center gap-6 flex-wrap">
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Countries Reached", value: "12+" },
              { label: "Innovation Programs", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-bold text-gold font-manrope">{stat.value}</div>
                  <div className="text-xs text-warm-gray" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 last:hidden" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-warm-gray hover:text-gold transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce group-hover:text-gold" />
      </button>
    </section>
  );
};

export default HeroSection;
