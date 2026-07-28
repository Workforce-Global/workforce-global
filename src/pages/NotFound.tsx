import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, MessageSquareWarning } from "lucide-react";
import Navigation from "../components/Navigation";
import PremiumFooter from "../components/PremiumFooter";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Page Not Found | Workforce Global";
    // Add meta tag to prevent indexing of the 404 page
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "noindex, nofollow");

    return () => {
      document.title = "Workforce Global";
      metaRobots?.setAttribute("content", "index, follow");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-20">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] bg-gold pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-gold/10 pointer-events-none animate-spin-slow" />
        
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10 animate-fade-in">
          {/* Animated 404 text */}
          <h1 
            className="text-[8rem] md:text-[12rem] font-bold leading-none select-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, rgba(198,161,91,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-manrope">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            <Link
              to="/"
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Home size={16} />
              Go Home
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground/60">
            <p>
              Think this is an error? <a href="/#contact" className="text-gold hover:underline transition-all">Contact Support</a>
            </p>
          </div>
        </div>
      </main>

      <PremiumFooter />
    </div>
  );
};

export default NotFound;
