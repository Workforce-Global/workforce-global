import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import {
  Code2, ShoppingCart, Cpu, Lightbulb, ArrowUpRight,
  Globe, Smartphone, Database, Cog, BarChart3, Users2, Zap
} from "lucide-react";

const services = [
  {
    icon: Code2,
    category: "Custom Software",
    description:
      "End-to-end software engineering tailored to your business logic, from architecture to deployment.",
    items: ["Enterprise Software", "Web Applications", "Mobile Apps", "APIs & Integrations"],
    accent: "#C6A15B",
  },
  {
    icon: ShoppingCart,
    category: "Digital Commerce",
    description:
      "Scalable e-commerce platforms and customer-facing portals that convert and retain.",
    items: ["E-commerce Platforms", "Payment Integration", "Customer Portals", "Inventory Systems"],
    accent: "#C6A15B",
  },
  {
    icon: Cpu,
    category: "Automation & AI",
    description:
      "Intelligent workflow automation and AI-powered tools that eliminate inefficiency.",
    items: ["Workflow Automation", "Internal Tools", "AI Automation", "Process Optimization"],
    accent: "#C6A15B",
  },
  {
    icon: Lightbulb,
    category: "Strategy & Innovation",
    description:
      "From product strategy to hackathons — we help you think, plan, and build with purpose.",
    items: ["Product Strategy", "Technology Consulting", "Digital Transformation", "Innovation Workshops"],
    accent: "#C6A15B",
  },
];

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Enterprise Software": Globe,
  "Web Applications": Code2,
  "Mobile Apps": Smartphone,
  "APIs & Integrations": Database,
  "E-commerce Platforms": ShoppingCart,
  "Payment Integration": Zap,
  "Customer Portals": Users2,
  "Inventory Systems": BarChart3,
  "Workflow Automation": Cog,
  "Internal Tools": Cpu,
  "AI Automation": Lightbulb,
  "Process Optimization": BarChart3,
  "Product Strategy": Lightbulb,
  "Technology Consulting": Users2,
  "Digital Transformation": Globe,
  "Innovation Workshops": Zap,
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="services" className="py-28 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] bg-gold pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">What We Build</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Our Services</h2>
          <p className="section-subheading mx-auto text-center">
            From product conception to production deployment, we deliver end-to-end
            technology solutions that scale.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.category}
                className={`card-premium group cursor-default ${gridVisible ? "reveal visible" : "reveal"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="service-icon-wrap">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={`text-muted-foreground transition-all duration-300 ${
                      hoveredCard === i ? "text-gold translate-x-0.5 -translate-y-0.5" : ""
                    }`}
                  />
                </div>

                {/* Category + description */}
                <h3
                  className="text-xl font-bold text-foreground mb-3 font-manrope"
                >
                  {service.category}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub-items */}
                <div className="grid grid-cols-2 gap-2">
                  {service.items.map((item) => {
                    const SubIcon = iconMap[item] || Code2;
                    return (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-background/50 border border-white/5 group-hover:border-gold/15 transition-colors"
                      >
                        <SubIcon size={12} className="text-gold/60 shrink-0" />
                        <span
                          className="text-xs text-muted-foreground"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Learn more */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <button
                    onClick={() => {
                      const contact = document.querySelector("#contact");
                      if (contact) contact.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-medium text-gold hover:text-gold-light flex items-center gap-1.5 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Learn More
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
