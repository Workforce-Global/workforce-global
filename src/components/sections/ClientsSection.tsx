import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  Rocket, Building2, Globe, Heart, GraduationCap,
  Landmark, Banknote, Stethoscope
} from "lucide-react";

const clients = [
  {
    icon: Rocket,
    title: "Curious Beginners",
    description: "Start with a welcoming challenge and learn alongside people at a similar stage.",
  },
  {
    icon: Building2,
    title: "Emerging Practitioners",
    description: "Strengthen your existing skills through meaningful briefs and feedback.",
  },
  {
    icon: Globe,
    title: "Experienced Builders",
    description: "Share what you know, lead a workstream, and support the next wave of talent.",
  },
  {
    icon: Heart,
    title: "Mentors",
    description: "Guide learners with practical insight, thoughtful feedback, and encouragement.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Build confidence and portfolio evidence before your first or next role.",
  },
  {
    icon: Landmark,
    title: "Community Partners",
    description: "Bring a real challenge that gives people a useful place to practice.",
  },
  {
    icon: Banknote,
    title: "Career Explorers",
    description: "Try different roles and discover the kinds of problems you want to solve.",
  },
  {
    icon: Stethoscope,
    title: "Collaborative Teams",
    description: "Meet people across disciplines and learn how strong teams make progress together.",
  },
];

const ClientsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="clients" className="py-28 bg-card relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full border border-gold/8 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Our Community</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">There Is a Place for You Here</h2>
          <p className="section-subheading mx-auto text-center">
            Whether you are starting out, building experience, or ready to mentor, you can
            find a meaningful way to participate.
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
              <h3 className="text-base font-bold text-foreground mb-2 font-manrope">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
