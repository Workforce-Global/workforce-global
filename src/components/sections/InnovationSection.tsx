import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Trophy, Zap, Rocket, Lightbulb, GraduationCap, Users2 } from "lucide-react";

const programs = [
  {
    icon: Trophy,
    title: "Hackathons",
    description:
      "48–72 hour intensive innovation sprints where teams compete to build real solutions to real problems. We design, organize, and run hackathons for corporations, governments, and universities.",
    badge: "Signature Program",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Product Sprints",
    description:
      "Accelerated 2–4 week product development cycles where our team works alongside your team to take an idea from concept to tested prototype.",
    badge: "Rapid Delivery",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80&auto=format&fit=crop",
  },
  {
    icon: Rocket,
    title: "Startup Incubation",
    description:
      "A structured program providing early-stage founders with technical co-building, mentorship, and network access to launch and validate their ventures.",
    badge: "Venture Building",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80&auto=format&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Innovation Challenges",
    description:
      "Open innovation competitions that crowdsource solutions from diverse talent pools — students, professionals, and entrepreneurs — to address complex challenges.",
    badge: "Open Innovation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Student Programs",
    description:
      "Technical training, mentorship, and project-based learning programs designed for university students entering the technology industry.",
    badge: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80&auto=format&fit=crop",
  },
  {
    icon: Users2,
    title: "Community Events",
    description:
      "Conferences, meetups, demo days, and developer gatherings that build the innovation ecosystem across Ghana and Africa.",
    badge: "Community",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80&auto=format&fit=crop",
  },
];

const InnovationSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="innovation" className="py-28 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.02] blur-[160px] bg-gold pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20`}
        >
          <span className="section-label block mb-4">Innovation Programs</span>
          <div className="gold-line" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading max-w-xl">
              Beyond Software, We Build Ecosystems
            </h2>
            <p className="section-subheading lg:max-w-sm">
              Our programs cultivate talent, drive innovation, and build the communities
              that fuel Africa's digital future.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map(({ icon: Icon, title, description, badge, image }, i) => (
            <div
              key={title}
              className={`group rounded-3xl overflow-hidden border border-white/6 bg-card hover:border-gold/20 transition-all duration-500 ${gridVisible ? "reveal visible" : "reveal"
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent" />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-gold/40 text-gold"
                    style={{ background: "rgba(11,11,11,0.75)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="service-icon-wrap !mb-0 !w-9 !h-9">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-manrope">{title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
