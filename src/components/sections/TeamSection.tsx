import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  const team = [
    {
      name: "Mohammed",
      role: "Co-Founder & CTO",
      bio: "Visionary engineer and architect of Workforce Global's technical strategy. Mohammed leads our engineering teams with a passion for scalable systems and innovation.",
      image: "/Mohammed.png",
      skills: ["Full-Stack Engineering", "System Architecture", "Product Vision"],
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Meki",
      role: "Co-Founder & CEO",
      bio: "Strategic leader driving Workforce Global's mission of transforming ideas into impactful solutions. Meki brings deep expertise in innovation ecosystems and partnerships.",
      image: "/Meki.png",
      skills: ["Business Strategy", "Innovation Programs", "Partnerships"],
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <section id="team" className="py-28 bg-background relative overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03] blur-[150px] bg-gold pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">The People Behind It</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Meet Our Founders</h2>
          <p className="section-subheading mx-auto text-center">
            Driven by conviction, guided by craft — the builders who started it all.
          </p>
        </div>

        {/* Team cards */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group rounded-3xl overflow-hidden border border-white/6 bg-card hover:border-gold/20 transition-all duration-500 ${
                cardsVisible ? "reveal visible" : "reveal"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent" />
                {/* Role badge */}
                <div className="absolute bottom-5 left-5">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gold/40 text-gold"
                    style={{ background: "rgba(11,11,11,0.8)", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground font-manrope mb-3">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs border border-white/8 text-muted-foreground bg-background/50"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={member.social.linkedin}
                    className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1.5 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    LinkedIn
                    <ArrowRight size={12} className="rotate-[-45deg]" />
                  </a>
                  <span className="text-white/10">·</span>
                  <a
                    href={member.social.twitter}
                    className="text-xs text-muted-foreground hover:text-gold flex items-center gap-1.5 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Twitter
                    <ArrowRight size={12} className="rotate-[-45deg]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're growing. Interested in joining the team?
          </p>
          <button
            onClick={() => {
              const contact = document.querySelector("#contact");
              if (contact) contact.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary text-xs"
          >
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
