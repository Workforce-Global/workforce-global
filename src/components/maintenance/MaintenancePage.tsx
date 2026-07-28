import { useEffect } from "react";
import { Wrench, Mail, Twitter, Linkedin } from "lucide-react";
import { maintenanceConfig } from "@/config/maintenance";

const MaintenancePage = () => {
  useEffect(() => {
    document.title = "Under Maintenance | Workforce Global";
  }, []);

  // Use config to see if scheduled details are provided
  const { scheduled } = maintenanceConfig;
  const showTime = scheduled.enabled && scheduled.startTime && scheduled.endTime;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.02] blur-[150px] bg-gold pointer-events-none" />
      
      <div className="max-w-xl mx-auto px-6 text-center relative z-10 animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-card border border-gold/20 flex items-center justify-center mx-auto mb-8 shadow-premium-lg">
          <Wrench size={36} className="text-gold" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
          We're optimizing your experience
        </h1>
        
        <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
          Our platform is temporarily unavailable while we perform scheduled maintenance and apply system upgrades. Please check back shortly.
        </p>
        
        {showTime && (
          <div className="inline-block border border-border bg-card/50 rounded-xl px-6 py-4 mb-10">
            <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-1">
              Expected Downtime
            </p>
            <p className="text-sm text-muted-foreground">
              {scheduled.date} &bull; {scheduled.startTime} - {scheduled.endTime}
            </p>
          </div>
        )}
        
        {/* Decorative Progress Bar */}
        <div className="w-full max-w-xs mx-auto h-1.5 bg-card border border-white/5 rounded-full overflow-hidden mb-12 relative">
          <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-gold rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="mailto:connect@workforceglobal.com" className="text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
            <Mail size={16} /> Contact Support
          </a>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-card border border-white/5 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-card border border-white/5 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
        
        {/* Admin hint */}
        <p className="mt-16 text-[10px] text-muted-foreground/30">
          Admin access available via bypass token.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
