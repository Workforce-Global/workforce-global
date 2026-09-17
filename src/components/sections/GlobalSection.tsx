import { useScrollReveal } from "../../hooks/useScrollReveal";
import { MapPin, Globe2, Users2, Wifi } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Headquartered in Accra, Ghana" },
  { icon: Globe2, label: "Connecting learners across 12+ countries" },
  { icon: Wifi, label: "Remote-first collaboration model" },
  { icon: Users2, label: "Global network of partners & alumni" },
];

// SVG world map paths (simplified equirectangular)
const continentPaths = [
  // North America
  "M 120 120 L 200 100 L 220 150 L 200 180 L 160 200 L 130 185 L 100 160 Z",
  // South America
  "M 170 220 L 220 215 L 230 270 L 210 320 L 175 330 L 155 285 Z",
  // Europe
  "M 390 90 L 460 80 L 480 110 L 455 130 L 420 135 L 395 120 Z",
  // Africa
  "M 400 145 L 460 140 L 475 175 L 470 240 L 440 280 L 405 275 L 390 240 L 385 185 Z",
  // Asia
  "M 470 75 L 580 60 L 640 95 L 650 150 L 590 170 L 500 165 L 460 130 Z",
  // Australia
  "M 570 230 L 640 220 L 655 265 L 625 290 L 580 285 L 558 260 Z",
];

// Ghana coordinates on SVG (approx)
const ghana = { x: 415, y: 192 };

// International connection points
const connections = [
  { x: 170, y: 145, label: "North America" },
  { x: 190, y: 255, label: "South America" },
  { x: 425, y: 105, label: "Europe" },
  { x: 560, y: 120, label: "Asia" },
  { x: 610, y: 255, label: "Australia" },
];

const GlobalSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="global" className="py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "visible" : ""} mb-16 text-center max-w-2xl mx-auto`}
        >
          <span className="section-label block mb-4">Our Reach</span>
          <div className="gold-line mx-auto" />
          <h2 className="section-heading mb-5">
            Based in Ghana.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4B57A, #C6A15B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Building for the World.
            </span>
          </h2>
          <p className="section-subheading mx-auto text-center">
            From Accra to Amsterdam, our remote-first community makes it possible to learn,
            collaborate, and contribute with people anywhere on the planet.
          </p>
        </div>

        {/* Map + highlights */}
        <div
          ref={mapRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${mapVisible ? "visible" : ""} card-premium p-6 md:p-10`}
        >
          {/* SVG World Map */}
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingBottom: "46%" }}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 760 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="World map showing Workforce Global locations"
            >
              {/* Background */}
              <rect width="760" height="350" fill="rgba(26,26,26,0.5)" rx="16" />

              {/* Grid lines */}
              {[...Array(7)].map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0" y1={i * 50} x2="760" y2={i * 50}
                  stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                />
              ))}
              {[...Array(16)].map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 50} y1="0" x2={i * 50} y2="350"
                  stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                />
              ))}

              {/* Continent shapes */}
              {continentPaths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="rgba(255,255,255,0.07)"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              ))}

              {/* Connection lines from Ghana */}
              {mapVisible &&
                connections.map((conn) => (
                  <line
                    key={conn.label}
                    x1={ghana.x}
                    y1={ghana.y}
                    x2={conn.x}
                    y2={conn.y}
                    stroke="rgba(198,161,91,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

              {/* Remote connection dots */}
              {connections.map((conn) => (
                <g key={conn.label}>
                  <circle cx={conn.x} cy={conn.y} r="4" fill="rgba(198,161,91,0.4)" />
                  <circle cx={conn.x} cy={conn.y} r="8" fill="none" stroke="rgba(198,161,91,0.15)" strokeWidth="1" />
                </g>
              ))}

              {/* Ghana HQ marker */}
              <circle cx={ghana.x} cy={ghana.y} r="7" fill="#C6A15B" />
              <circle cx={ghana.x} cy={ghana.y} r="14" fill="none" stroke="rgba(198,161,91,0.4)" strokeWidth="1.5">
                <animate attributeName="r" values="10;20;10" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* HQ Label */}
              <text x={ghana.x + 12} y={ghana.y - 6} fill="#C6A15B" fontSize="9" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
                Accra, Ghana
              </text>
              <text x={ghana.x + 12} y={ghana.y + 5} fill="rgba(198,161,91,0.6)" fontSize="8" fontFamily="Inter, sans-serif">
                HQ
              </text>
            </svg>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-white/5"
              >
                <div className="service-icon-wrap !mb-0 !w-8 !h-8 shrink-0">
                  <Icon size={14} className="text-gold" />
                </div>
                <span
                  className="text-xs text-muted-foreground leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
