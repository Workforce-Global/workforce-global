import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "FinTrack Pro",
    industry: "Team Challenge",
    challenge:
      "How might we make essential financial tools easier to understand and access for people using mobile devices for the first time?",
    solution:
      "Participants research the context, sketch a service, and build a mobile-first prototype with guidance from peers and mentors.",
    result: "Practice user research, product thinking, prototyping, and presenting your work.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format&fit=crop",
    color: "from-gold/20 to-transparent",
  },
  {
    name: "AgriConnect Platform",
    industry: "Community Challenge",
    challenge:
      "Explore the information and collaboration barriers faced by smallholder farmers across West Africa.",
    solution:
      "Work in a cross-disciplinary team to map the problem, test assumptions, and create a useful digital concept.",
    result: "Gain experience in collaboration, research, systems thinking, and responsible design.",
    tech: ["Next.js", "Python", "Supabase", "Docker", "Figma"],
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&auto=format&fit=crop",
    color: "from-emerald-900/20 to-transparent",
  },
  {
    name: "EduHub LMS",
    industry: "Learning Build",
    challenge:
      "Design a more accessible learning experience for a diverse community of students and mentors.",
    solution:
      "Build and test a small learning experience with feedback from real participants and an experienced facilitator.",
    result: "Leave with a portfolio piece, feedback, and a clearer sense of what to learn next.",
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
          <span className="section-label block mb-4">Learning Opportunities</span>
          <div className="gold-line" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading max-w-xl">Opportunities to Learn by Doing</h2>
            <p className="section-subheading lg:max-w-sm">
              Join a practical experience, work with others, and leave with skills you can show.
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
                {/* Opportunity format badge */}
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
                The Challenge
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                What You Will Do
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
            Join This Opportunity
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
