import { useState, useEffect } from "react";
import { X, CalendarClock } from "lucide-react";
import { useMaintenance } from "@/context/MaintenanceContext";
import { maintenanceConfig } from "@/config/maintenance";

const MaintenanceBanner = () => {
  const { isScheduledMaintenance, isGlobalMaintenance } = useMaintenance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If it's globally down, don't show the banner (they are already on the maintenance page)
    if (isGlobalMaintenance) return;
    
    // Check if user dismissed it in this session
    const dismissed = sessionStorage.getItem("wg-maintenance-banner-dismissed");
    
    if (isScheduledMaintenance && !dismissed) {
      setIsVisible(true);
    }
  }, [isScheduledMaintenance, isGlobalMaintenance]);

  if (!isVisible) return null;

  const { scheduled } = maintenanceConfig;

  const handleDismiss = () => {
    sessionStorage.setItem("wg-maintenance-banner-dismissed", "true");
    setIsVisible(false);
  };

  return (
    <div className="bg-gold/10 border-b border-gold/20 relative z-[60] px-4 py-3 animate-fade-in">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left pr-8">
        <div className="flex items-center gap-2 text-gold">
          <CalendarClock size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Scheduled Maintenance</span>
        </div>
        
        <p className="text-xs text-muted-foreground">
          {scheduled.message} Expected downtime: <strong className="text-foreground font-medium">{scheduled.date}, {scheduled.startTime} - {scheduled.endTime}</strong>.
        </p>
        
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:bg-gold/10 hover:text-gold transition-colors"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
