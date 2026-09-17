import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="cta" className="py-28 bg-card relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jet/97 via-jet/90 to-jet/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/8 pointer-events-none z-10" />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/12 pointer-events-none z-10" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-20">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${isVisible ? "visible" : ""} max-w-3xl`}
        >
          <span className="section-label block mb-6">Get In Touch</span>
          <div className="gold-line" />
          <h2 className="section-heading mb-6">
            Find Your Next{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4B57A, #C6A15B, #9E7B3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Opportunity
            </span>{" "}
            Together
          </h2>
          <p className="section-subheading mb-10 max-w-xl">
            Whether you are learning your first tool, strengthening your practice, or ready
            to guide someone else, there is a meaningful way to participate here.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => {
                const contact = document.querySelector("#contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary group"
            >
              <span>Explore Opportunities</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const process = document.querySelector("#process");
                if (process) process.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
