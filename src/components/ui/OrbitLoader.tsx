import React, { useEffect, useState } from "react";
import "./OrbitLoader.css";

export interface OrbitLoaderProps {
  /** Controls visibility and trigger fade-out process */
  isLoading?: boolean;
  /** Number of orbiting glowing particles (3 to 5 supported) */
  particleCount?: 3 | 4 | 5;
  /** Force specific theme or auto-detect from system/document class */
  theme?: "dark" | "light" | "auto";
  /** Optional custom text underneath logo */
  brandText?: string;
  /** Optional status text displayed below the stage */
  statusMessage?: string;
  /** Custom logo source URL */
  logoSrc?: string;
  /** Duration of fade out transition in ms */
  fadeDuration?: number;
  /** Whether to render as fixed full-screen overlay or inline container */
  fullScreen?: boolean;
}

export const OrbitLoader: React.FC<OrbitLoaderProps> = ({
  isLoading = true,
  particleCount = 4,
  theme = "auto",
  brandText = "WORKFORCE GLOBAL",
  statusMessage,
  logoSrc,
  fadeDuration = 350,
  fullScreen = true,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(isLoading);
  const [isVisible, setIsVisible] = useState<boolean>(isLoading);
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  // Handle theme auto-detection & resolution
  useEffect(() => {
    if (theme !== "auto") {
      setCurrentTheme(theme);
      return;
    }

    const checkTheme = () => {
      const isDarkClass = document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark") ||
        !document.documentElement.classList.contains("light");
      setCurrentTheme(isDarkClass ? "dark" : "light");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [theme]);

  // Handle smooth Fade In / Fade Out lifecycle
  useEffect(() => {
    if (isLoading) {
      setIsMounted(true);
      // Small timeout to ensure DOM mount before triggering opacity transition
      const timer = setTimeout(() => setIsVisible(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, fadeDuration);
      return () => clearTimeout(timer);
    }
  }, [isLoading, fadeDuration]);

  if (!isMounted) return null;

  // Determine logo source based on current theme if not explicitly overridden
  const resolvedLogoSrc = logoSrc || (
    currentTheme === "light"
      ? "./wg_darkinwhite_full-removebg-preview.png"
      : "./wg_whiteindarkfull-removebg-preview.png"
  );

  // Particle configuration preset mapping
  const particleConfigs = [
    { track: "orbit-track-1", style: "particle-gold-primary" },
    { track: "orbit-track-2", style: "particle-gold-bright" },
    { track: "orbit-track-3", style: "particle-gold-amber" },
    { track: "orbit-track-4", style: "particle-gold-light" },
    { track: "orbit-track-5", style: "particle-gold-dim" },
  ];

  const activeParticles = particleConfigs.slice(0, Math.min(Math.max(particleCount, 3), 5));

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading application..."
      className={`orbit-loader-overlay ${currentTheme}-theme ${fullScreen ? "fixed inset-0 z-[99999]" : "relative py-12"} ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      style={{
        transitionDuration: `${fadeDuration}ms`,
      }}
    >
      <div className="orbit-loader-stage">
        {/* Soft Ambient Focal Light */}
        <div className="orbit-center-glow" aria-hidden="true" />

        {/* Faint Orbital Concentric Tracks */}
        <div className="orbit-ring orbit-ring-1" aria-hidden="true" />
        <div className="orbit-ring orbit-ring-2" aria-hidden="true" />
        <div className="orbit-ring orbit-ring-3" aria-hidden="true" />

        {/* Hardware-Accelerated 60 FPS Orbiting Particles */}
        {activeParticles.map((p, idx) => (
          <div key={idx} className={`orbit-track ${p.track}`} aria-hidden="true">
            <div className={`orbit-particle ${p.style}`} />
          </div>
        ))}

        {/* Stationary Central Brand Logo & Label */}
        <div className="orbit-logo-container">
          <div className="orbit-logo-wrapper">
            <img
              src={resolvedLogoSrc}
              alt="Brand Logo"
              className="orbit-logo-img"
              onError={(e) => {
                // Fallback icon if logo image fails to load
                (e.currentTarget as HTMLElement).style.display = "none";
              }}
            />
          </div>
          {brandText && <span className="orbit-brand-text">{brandText}</span>}
        </div>

        {/* Optional Status Message */}
        {statusMessage && <div className="orbit-status-msg">{statusMessage}</div>}
      </div>
    </div>
  );
};

export default OrbitLoader;
