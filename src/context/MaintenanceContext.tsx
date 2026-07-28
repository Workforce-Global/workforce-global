import React, { createContext, useContext, useEffect, useState } from "react";
import { maintenanceConfig } from "@/config/maintenance";

interface MaintenanceContextType {
  isGlobalMaintenance: boolean;
  isScheduledMaintenance: boolean;
  isAdmin: boolean;
  isSectionUnderMaintenance: (section: string) => boolean;
}

const MaintenanceContext = createContext<MaintenanceContextType>({
  isGlobalMaintenance: false,
  isScheduledMaintenance: false,
  isAdmin: false,
  isSectionUnderMaintenance: () => false,
});

export const MaintenanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for admin bypass token in localStorage
    const checkAdmin = () => {
      try {
        const hasBypass = localStorage.getItem(maintenanceConfig.admin.bypassKey) === "true";
        setIsAdmin(hasBypass);
      } catch (e) {
        console.error("Failed to check admin bypass", e);
      }
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, []);

  const isSectionUnderMaintenance = (section: string) => {
    if (isAdmin) return false; // Admins bypass section maintenance too
    return maintenanceConfig.sections[section] === true;
  };

  const value = {
    isGlobalMaintenance: maintenanceConfig.global && !isAdmin,
    isScheduledMaintenance: maintenanceConfig.scheduled.enabled,
    isAdmin,
    isSectionUnderMaintenance,
  };

  return <MaintenanceContext.Provider value={value}>{children}</MaintenanceContext.Provider>;
};

export const useMaintenance = () => useContext(MaintenanceContext);
