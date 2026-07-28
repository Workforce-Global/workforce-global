import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useMaintenance } from "@/context/MaintenanceContext";
import SectionMaintenance from "./maintenance/SectionMaintenance";

interface RouteGuardProps {
  children: React.ReactNode;
  section?: string;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({ children, section }) => {
  const location = useLocation();
  const { isGlobalMaintenance, isSectionUnderMaintenance } = useMaintenance();

  // 1. Check global maintenance
  if (isGlobalMaintenance && location.pathname !== "/maintenance") {
    return <Navigate to="/maintenance" replace state={{ from: location }} />;
  }

  // 2. Check section maintenance
  if (section && isSectionUnderMaintenance(section)) {
    return <SectionMaintenance section={section} />;
  }

  // 3. Render children normally
  return <>{children}</>;
};

export default RouteGuard;
