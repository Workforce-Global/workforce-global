import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Tech {
  name: string;
  category: string;
  description: string;
  icon: string;
}

const technologies: Tech[] = [
  { name: "React", category: "Frontend", description: "Component-based UI library for modern web apps", icon: "⚛" },
  { name: "Next.js", category: "Frontend", description: "Full-stack React framework with SSR & SSG", icon: "▲" },
  { name: "TypeScript", category: "Language", description: "Statically typed JavaScript for safer code", icon: "TS" },
  { name: "Node.js", category: "Backend", description: "JavaScript runtime for scalable server-side apps", icon: "⬡" },
  { name: "Python", category: "Backend", description: "Versatile language for APIs, data, and AI", icon: "🐍" },
  { name: "Flutter", category: "Mobile", description: "Cross-platform mobile development from Google", icon: "◎" },
  { name: "Angular", category: "Frontend", description: "Enterprise-ready web application framework", icon: "🅐" },
  { name: "PostgreSQL", category: "Database", description: "Advanced open-source relational database", icon: "🐘" },
  { name: "Firebase", category: "Platform", description: "Google's app development platform", icon: "🔥" },
  { name: "Supabase", category: "Database", description: "Open-source Firebase alternative on Postgres", icon: "⚡" },
  { name: "Docker", category: "DevOps", description: "Containerization for consistent deployments", icon: "🐳" },
  { name: "AWS", category: "Cloud", description: "Amazon's cloud infrastructure platform", icon: "☁" },
  { name: "Figma", category: "Design", description: "Collaborative interface design and prototyping", icon: "✦" },
  { name: "AI / LLMs", category: "AI", description: "Large language models and AI integrations", icon: "🤖" },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Cloud", "DevOps", "Design", "AI", "Language", "Platform"];

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section id="technologies" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Tech Stack</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Technologies We Use</h2>
          <p className="section-subheading mx-auto text-center">
            We build with battle-tested, modern technologies chosen for performance,
            scalability, and developer experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-jet"
                  : "bg-card border border-white/8 text-muted-foreground hover:border-gold/30 hover:text-foreground"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              className={`tech-card group ${gridVisible ? "reveal-scale visible" : "reveal-scale"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Content Wrapper that fades on hover */}
              <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                {/* Icon */}
                <div
                  className="text-2xl mb-2 leading-none select-none"
                  aria-hidden="true"
                >
                  {tech.icon}
                </div>
                {/* Name */}
                <span
                  className="text-xs font-semibold text-foreground text-center"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {tech.name}
                </span>
                {/* Category badge */}
                <span
                  className="text-[9px] text-gold/60 mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tech.category}
                </span>
              </div>
              {/* Hover tooltip */}
              <div className="tech-tooltip text-[10px] leading-tight">
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
