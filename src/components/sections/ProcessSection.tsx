import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Search, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "Start with your interests, current skills, and the kind of challenge you want to explore. Every useful experience begins with good questions.",
    detail: "Choose a track · Understand the brief · Set a learning goal · Meet your peers",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Shape a thoughtful approach with your team. You will learn to turn ambiguity into a clear plan and an experience people can use.",
    detail: "Research · Ideation · Wireframing · Feedback",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description:
      "Make, test, and improve something real. Work in small iterations, ask for help, and learn from the decisions your team makes.",
    detail: "Collaborative building · Peer reviews · Experiments · Documentation",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Share what you made, what changed, and what you learned. Showing your work is part of building confidence and a useful portfolio.",
    detail: "Demo day · Reflection · Portfolio evidence · Community feedback",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Grow",
    description:
      "Carry the learning forward through new opportunities, mentorship, and challenges that help you keep developing.",
    detail: "Next opportunity · Mentorship · Skill practice · Community contribution",
  },
];

const ProcessSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="process" className="py-28 bg-card relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Your Journey</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">From Curiosity to Confidence</h2>
          <p className="section-subheading mx-auto text-center">
            A practical rhythm that helps you find an opportunity, contribute meaningfully,
            and turn each experience into your next step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {steps.map(({ icon: Icon, number, title, description, detail }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ProcessStep
                  key={title}
                  icon={Icon}
                  number={number}
                  title={title}
                  description={description}
                  detail={detail}
                  isLeft={isLeft}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({
  icon: Icon,
  number,
  title,
  description,
  detail,
  isLeft,
  index,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  number: string;
  title: string;
  description: string;
  detail: string;
  isLeft: boolean;
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } ${isVisible ? (isLeft ? "reveal-left visible" : "reveal-right visible") : (isLeft ? "reveal-left" : "reveal-right")}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
        <div
          className={`card-premium inline-block w-full max-w-sm ${isLeft ? "md:ml-auto" : ""}`}
        >
          {/* Number */}
          <div
            className={`text-4xl font-bold font-manrope mb-3 ${isLeft ? "md:text-right" : ""}`}
            style={{
              background: "linear-gradient(135deg, rgba(198,161,91,0.4), rgba(198,161,91,0.1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {number}
          </div>
          <h3 className={`text-xl font-bold text-foreground font-manrope mb-3 ${isLeft ? "md:text-right" : ""}`}>
            {title}
          </h3>
          <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${isLeft ? "md:text-right" : ""}`}>
            {description}
          </p>
          <div
            className={`text-xs text-gold/70 leading-relaxed ${isLeft ? "md:text-right" : ""}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {detail}
          </div>
        </div>
      </div>

      {/* Center dot — hidden on mobile (replaced by left-line) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
        <div className="process-dot flex items-center justify-center">
          <Icon size={8} className="text-gold" />
        </div>
      </div>

      {/* Mobile dot */}
      <div className="md:hidden absolute left-4 top-6 z-10">
        <div className="process-dot flex items-center justify-center">
          <Icon size={8} className="text-gold" />
        </div>
      </div>

      {/* Right side spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

export default ProcessSection;
