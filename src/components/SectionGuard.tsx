import React from "react";
import { useMaintenance } from "@/context/MaintenanceContext";
import SectionMaintenance from "./maintenance/SectionMaintenance";

interface SectionGuardProps {
  children: React.ReactNode;
  section: string;
}

export const SectionGuard: React.FC<SectionGuardProps> = ({ children, section }) => {
  const { isSectionUnderMaintenance } = useMaintenance();

  if (isSectionUnderMaintenance(section)) {
    return <SectionMaintenance section={section} />;
  }

  return <>{children}</>;
};

export default SectionGuard;
