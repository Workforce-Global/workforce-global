import { Wrench } from "lucide-react";

interface SectionMaintenanceProps {
  section: string;
}

const SectionMaintenance = ({ section }: SectionMaintenanceProps) => {
  // Format section name (e.g. "dashboard" -> "Dashboard")
  const formattedSection = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <section className="py-20 bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-[80px] bg-gold pointer-events-none" />
      
      <div className="max-w-xl mx-auto px-6 text-center relative z-10 animate-fade-in py-10 border border-border/50 bg-card/30 rounded-3xl shadow-sm backdrop-blur-sm">
        <div className="w-14 h-14 rounded-xl bg-card border border-gold/20 flex items-center justify-center mx-auto mb-5 shadow-premium-sm">
          <Wrench size={20} className="text-gold" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-3 font-manrope">
          {formattedSection} Under Maintenance
        </h2>
        
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          This section is temporarily unavailable while improvements are being deployed.
        </p>
      </div>
    </section>
  );
};

export default SectionMaintenance;
