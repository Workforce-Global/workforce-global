import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "FinTrack Pro",
    industry: "FinTech",
    challenge:
      "A pan-African microfinance institution needed a digital platform to serve 200,000+ customers who had never used mobile banking.",
    solution:
      "We designed and built a USSD + mobile-first fintech platform with multilingual support, offline-capable transactions, and seamless KYC onboarding.",
    result: "200K+ users onboarded in 6 months. 40% reduction in customer support costs.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop",
    color: "from-gold/20 to-transparent",
  },
  {
    name: "AgriConnect Platform",
    industry: "AgriTech",
    challenge:
      "Smallholder farmers across West Africa lacked access to real-time market prices, weather data, and agricultural inputs.",
    solution:
      "A multilingual PWA connecting farmers to buyers, agronomists, and input suppliers — with AI-driven crop advisory and mobile money integration.",
    result: "12,000 farmers served. 30% increase in average income reported.",
    tech: ["Next.js", "Python", "Supabase", "Docker", "Figma"],
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&auto=format&fit=crop",
    color: "from-emerald-900/20 to-transparent",
  },
  {
    name: "EduHub LMS",
    industry: "EdTech",
    challenge:
      "A university consortium needed a scalable, branded LMS to manage 50,000 students across 8 campuses with offline learning support.",
    solution:
      "Custom learning management system with adaptive content delivery, offline sync, live classes, and detailed analytics dashboards.",
    result: "98% uptime. Course completion rates improved by 55%.",
    tech: ["React", "TypeScript", "Node.js", "Firebase", "Flutter"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format&fit=crop",
    color: "from-blue-900/20 to-transparent",
  },
];

const ProjectsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20`}
        >
          <span className="section-label block mb-4">Case Studies</span>
          <div className="gold-line" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading max-w-xl">Featured Projects</h2>
            <p className="section-subheading lg:max-w-sm">
              Real challenges. Thoughtful solutions. Measurable results.
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <ProjectCard key={project.name} project={project} isEven={isEven} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  isEven,
  index,
}: {
  project: (typeof projects)[0];
  isEven: boolean;
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? "visible" : ""} grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/6`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image — alternates sides */}
      <div className={`relative h-72 lg:h-auto ${!isEven ? "lg:order-2" : ""} overflow-hidden`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? project.color : project.color.replace("from-", "from-r-")} to-transparent`} />
        {/* Industry badge */}
        <div className="absolute top-5 left-5">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gold/40 text-gold"
            style={{ background: "rgba(11,11,11,0.7)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-8 lg:p-10 bg-card flex flex-col justify-between ${!isEven ? "lg:order-1" : ""}`}>
        <div>
          <h3 className="text-2xl font-bold text-foreground font-manrope mb-4">
            {project.name}
          </h3>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Challenge
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Solution
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-full min-h-[2rem] bg-gold/40 rounded-full shrink-0 mt-0.5" />
              <p className="text-foreground text-sm font-medium">{project.result}</p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs border border-white/10 text-muted-foreground bg-background/50"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-white/5">
          <button className="flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            View Case Study
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
