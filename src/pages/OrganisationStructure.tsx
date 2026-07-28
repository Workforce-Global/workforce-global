import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import PremiumFooter from "../components/PremiumFooter";
import OrganogramGraph from "../components/OrganogramGraph";
import { employees } from "../data/organogramData";
import { ArrowLeft, Users } from "lucide-react";

const OrganisationStructure = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Page Header */}
      <section className="pt-40 pb-12 bg-background relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-[120px] bg-gold pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full border border-gold/8 pointer-events-none" />
        <div className="absolute top-1/4 right-20 w-40 h-40 rounded-full border border-gold/12 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-10 group"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div
            ref={headerRef}
            className={`reveal ${headerVisible ? "visible" : ""} max-w-2xl`}
          >
            <span className="section-label block mb-4">Our Organisation</span>
            <div className="gold-line" />
            <h1 className="section-heading mb-5">Organisation Structure</h1>
            <p className="section-subheading">
              An interactive map of our team, reporting lines, and the people who make
              Workforce Global exceptional. Click any node to learn more.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #D4B57A, #C6A15B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {employees.length}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Team Members
              </p>
            </div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #D4B57A, #C6A15B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {new Set(employees.map((e) => e.department)).size}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Departments
              </p>
            </div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #D4B57A, #C6A15B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Manrope', sans-serif",
                }}
              >
                {employees.filter((e) => e.managerId === null).length}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Executive{employees.filter((e) => e.managerId === null).length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organogram canvas */}
      <section className="pb-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-2">
              <span className="inline-block w-5 h-5 rounded-full border-2 border-gold/70 bg-gold/15" />
              CEO / Co-Founder
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full border border-gold/30 bg-card" />
              Department Lead
            </span>
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-8 border-t border-dashed"
                style={{ borderColor: "rgba(198,161,91,0.4)" }}
              />
              Reports to
            </span>
          </div>

          {/* Graph */}
          <div
            className="rounded-3xl border border-border overflow-hidden bg-card relative"
            style={{ height: "clamp(520px, 65vh, 800px)" }}
          >
            <OrganogramGraph />
          </div>

          {/* Department directory */}
          <div className="mt-16">
            <h2
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <Users size={20} className="text-gold" />
              Department Directory
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from(new Set(employees.map((e) => e.department))).map((dept) => {
                const members = employees.filter((e) => e.department === dept);
                return (
                  <div
                    key={dept}
                    className="card-premium group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold tracking-[0.15em] uppercase text-gold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {dept}
                      </span>
                      <span className="text-xs text-muted-foreground">{members.length} member{members.length !== 1 ? "s" : ""}</span>
                    </div>
                    <ul className="space-y-2">
                      {members.map((m) => (
                        <li key={m.id} className="flex items-center gap-2.5">
                          {m.photo ? (
                            <img
                              src={m.photo}
                              alt={m.name}
                              className="w-7 h-7 rounded-full object-cover object-top border border-border"
                            />
                          ) : (
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border border-border"
                              style={{ background: "rgba(198,161,91,0.1)", color: "#C6A15B" }}
                            >
                              {m.name[0]}
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {m.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">{m.role}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
};

export default OrganisationStructure;
