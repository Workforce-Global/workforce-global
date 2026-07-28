import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Target, Eye, Zap, Users, Shield, Globe } from "lucide-react";

const values = [
  { icon: Zap, label: "Innovation-First" },
  { icon: Users, label: "Collaborative" },
  { icon: Shield, label: "Reliable" },
  { icon: Globe, label: "Global-Minded" },
  { icon: Target, label: "Impact-Driven" },
  { icon: Eye, label: "User-Centered" },
];

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(198,161,91,0.8) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <span className="section-label block mb-4">About Us</span>
          <div className="gold-line" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading max-w-xl">
              More Than a Software Company
            </h2>
            <p className="section-subheading lg:max-w-md">
              We are a venture builder, technology partner, and innovation ecosystem
              helping organizations turn ambitious ideas into impactful digital products.
            </p>
          </div>
        </div>

        {/* Split-screen layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* Left — Image + Mission */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`reveal-left ${leftVisible ? "visible" : ""}`}
          >
            <div className="img-reveal mb-6 h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                alt="Workforce Global team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-gold" size={20} />
                <span className="section-label text-gold">Our Mission</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                To empower startups, businesses, NGOs, and institutions with cutting-edge
                software solutions and innovation programs that solve real-world problems
                and drive meaningful change in Africa and beyond.
              </p>
            </div>
          </div>

          {/* Right — Story + Vision */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`reveal-right ${rightVisible ? "visible" : ""} flex flex-col gap-6`}
          >
            <div className="card-premium flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-gold" size={20} />
                <span className="section-label text-gold">Our Vision</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                To be Africa's most trusted technology partner—building the digital
                infrastructure that powers the continent's most ambitious companies and ideas.
              </p>
            </div>

            <div className="card-premium flex-1">
              <span className="section-label block mb-4">Our Story</span>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Workforce Global was founded with a clear conviction: that African talent
                and ingenuity can build world-class technology. We started as a team of
                passionate engineers and designers committed to proving that great software
                can be built anywhere.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Today, we're a full-service innovation studio—building custom software,
                organizing hackathons, running product sprints, and partnering with
                organizations across sectors to engineer solutions that matter.
              </p>
            </div>

            {/* Image */}
            <div className="img-reveal h-48 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop"
                alt="Innovation lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Brand Values */}
        <div
          ref={valuesRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${valuesVisible ? "visible" : ""}`}
        >
          <div className="gold-divider" />
          <p className="section-label mb-6 text-center">What Drives Us</p>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-card hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-default ${
                  valuesVisible ? "reveal visible" : "reveal"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <Icon size={14} className="text-gold" />
                <span
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
