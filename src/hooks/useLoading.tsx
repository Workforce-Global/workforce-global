import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import OrbitLoader from "@/components/ui/OrbitLoader";

interface LoadingContextType {
  isLoading: boolean;
  statusMessage: string | undefined;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  triggerDemoLoader: (durationMs?: number, message?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string | undefined>("Initializing experience...");

  // Initial app load timer (simulates initial data fetching & ready state)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // 1.4 seconds initial load simulation
    return () => clearTimeout(timer);
  }, []);

  const showLoading = useCallback((message?: string) => {
    setStatusMessage(message);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const triggerDemoLoader = useCallback((durationMs = 2500, message = "Fetching data...") => {
    setStatusMessage(message);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, durationMs);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, statusMessage, showLoading, hideLoading, triggerDemoLoader }}>
      <OrbitLoader isLoading={isLoading} statusMessage={statusMessage} particleCount={4} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
