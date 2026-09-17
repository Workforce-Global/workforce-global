import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="team" className="py-28 bg-background relative overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.03] blur-[150px] bg-gold pointer-events-none" />
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-16 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/8 pointer-events-none" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/12 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${isVisible ? "visible" : ""} max-w-3xl`}
        >
          <span className="section-label block mb-6">Our People</span>
          <div className="gold-line" />
          <h2 className="section-heading mb-6">
            Want to know our current{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4B57A, #C6A15B, #9E7B3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              organisational structure?
            </span>
          </h2>
          <p className="section-subheading mb-10 max-w-xl">
            Explore our interactive organisation chart to see our team, reporting
            structure, and the people who create opportunities for our community.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => navigate("/team")}
              className="btn-primary group"
            >
              <span>View Our Team Structure</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const contact = document.querySelector("#contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
