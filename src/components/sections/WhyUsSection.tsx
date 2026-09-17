import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useCounter } from "../../hooks/useCounter";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Learning Opportunities" },
  { value: 12, suffix: "+", label: "Countries Connected" },
  { value: 200, suffix: "K+", label: "People Reached" },
  { value: 97, suffix: "%", label: "Participant Confidence" },
];

const values = [
  "Real challenges with room to experiment",
  "Learning through meaningful contribution",
  "Guidance and feedback throughout the experience",
  "Cross-disciplinary collaboration",
  "Practical skills you can demonstrate",
  "Modern tools and thoughtful practice",
  "A community that keeps you moving forward",
  "Opportunities for different experience levels",
  "Africa-first, globally connected perspective",
  "Ethical and responsible problem-solving",
];

const CounterStat = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCounter({ end: value, duration: 2200 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center p-8"
    >
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <p
        className="text-muted-foreground text-sm mt-2"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
};

const WhyUsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="why-us" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Why Participate</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Experience That Moves You Forward</h2>
          <p className="section-subheading mx-auto text-center">
            The right opportunity can turn curiosity into capability, confidence, and community.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card">
              <CounterStat {...stat} />
            </div>
          ))}
        </div>

        {/* Value propositions */}
        <div
          ref={valuesRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 gap-x-16 gap-y-4"
        >
          {values.map((v, i) => (
            <div
              key={v}
              className={`flex items-start gap-3 py-4 border-b border-white/5 ${
                valuesVisible ? "reveal visible" : "reveal"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
              <span
                className="text-foreground text-sm leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 rounded-3xl p-10 bg-background border border-gold/15 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(ellipse at center, #C6A15B 0%, transparent 70%)",
            }}
          />
          <p className="section-label mb-3">Ready to take part?</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-manrope mb-4">
            Your Next Experience Starts Here
          </h3>
          <button
            onClick={() => {
              const contact = document.querySelector("#contact");
              if (contact) contact.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary mt-2"
          >
            Find an Opportunity
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
