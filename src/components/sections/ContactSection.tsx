import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const services = [
  "Custom Software Development",
  "Mobile App Development",
  "Digital Commerce",
  "AI & Automation",
  "Product Strategy & Consulting",
  "Innovation Programs / Hackathons",
  "UI/UX Design",
  "Other",
];

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.05 });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section id="contact" className="py-28 bg-jet relative overflow-hidden">
      {/* Subtle background dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(198,161,91,0.8) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-20 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Contact</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">Start the Conversation</h2>
          <p className="section-subheading mx-auto text-center">
            Tell us about your project. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Content grid */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`${contentVisible ? "reveal visible" : "reveal"} grid lg:grid-cols-5 gap-8`}
        >
          {/* Contact Info — left panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="card-premium">
              <h3 className="text-lg font-bold text-soft-white font-manrope mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@workforceglobal.co",
                    href: "mailto:hello@workforceglobal.co",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+233 XX XXX XXXX",
                    href: "tel:+233XXXXXXXX",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Accra, Ghana",
                    href: "#",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon–Fri, 8AM – 6PM GMT",
                    href: undefined,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="service-icon-wrap !mb-0 !w-9 !h-9 shrink-0">
                      <Icon size={15} className="text-gold" />
                    </div>
                    <div>
                      <div
                        className="text-xs text-warm-gray mb-0.5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-soft-white hover:text-gold transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm text-soft-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="card-premium">
              <h4 className="text-sm font-semibold text-soft-white mb-4 font-manrope">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-2">
                {["LinkedIn", "Twitter / X", "GitHub", "Instagram"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-full text-xs border border-white/10 text-warm-gray hover:border-gold/30 hover:text-gold transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form — right panel */}
          <div className="lg:col-span-3 card-premium">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-soft-white font-manrope mb-3">
                  Message Sent!
                </h3>
                <p className="text-warm-gray text-sm max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs text-warm-gray mb-2"
                      htmlFor="contact-name"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs text-warm-gray mb-2"
                      htmlFor="contact-email"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="input-premium"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs text-warm-gray mb-2"
                    htmlFor="contact-company"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Company / Organization
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="input-premium"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs text-warm-gray mb-2"
                    htmlFor="contact-service"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Service You're Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-premium appearance-none cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <option value="" style={{ background: "#1A1A1A" }}>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#1A1A1A" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs text-warm-gray mb-2"
                    htmlFor="contact-message"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, and timeline..."
                    className="input-premium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center group"
                >
                  <span>Send Message</span>
                  <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
