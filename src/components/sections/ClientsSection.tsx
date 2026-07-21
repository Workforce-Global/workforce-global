import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  Rocket, Building2, Globe, Heart, GraduationCap,
  Landmark, Banknote, Stethoscope
} from "lucide-react";

const clients = [
  {
    icon: Rocket,
    title: "Startups",
    description: "We help founders move from idea to MVP and beyond — fast.",
  },
  {
    icon: Building2,
    title: "SMEs",
    description: "Digital tools and automation that keep growing businesses competitive.",
  },
  {
    icon: Globe,
    title: "Enterprises",
    description: "Scalable, secure enterprise-grade software for large organizations.",
  },
  {
    icon: Heart,
    title: "NGOs",
    description: "Technology for social impact — built for mission-driven organizations.",
  },
  {
    icon: GraduationCap,
    title: "Universities",
    description: "Learning platforms, research tools, and campus management systems.",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Civic tech and e-government solutions built for scale and transparency.",
  },
  {
    icon: Banknote,
    title: "Financial Institutions",
    description: "Fintech platforms, core banking integrations, and digital wallets.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Health informatics, telemedicine, and patient management systems.",
  },
];

const ClientsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="clients" className="py-28 bg-graphite relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full border border-gold/8 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Who We Serve</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Who We Work With</h2>
          <p className="section-subheading mx-auto text-center">
            From early-stage startups to international institutions — we partner with
            organizations of every scale and sector.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {clients.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`card-premium group text-center ${gridVisible ? "reveal visible" : "reveal"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="service-icon-wrap mx-auto mb-4">
                <Icon size={20} className="text-gold" />
              </div>
              <h3 className="text-base font-bold text-soft-white mb-2 font-manrope">
                {title}
              </h3>
              <p className="text-xs text-warm-gray leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
