import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "@/hooks/useLoading";
import { ThemeProvider } from "@/components/theme-provider";
import { MaintenanceProvider } from "@/context/MaintenanceContext";

import Index from "./pages/Index";
import OrganisationStructure from "./pages/OrganisationStructure";
import NotFound from "./pages/NotFound";

import MaintenancePage from "./components/maintenance/MaintenancePage";
import MaintenanceBanner from "./components/maintenance/MaintenanceBanner";
import RouteGuard from "./components/RouteGuard";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <MaintenanceProvider>
            <LoadingProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <MaintenanceBanner />
                  <Routes>
                    {/* Maintenance Route */}
                    <Route path="/maintenance" element={<MaintenancePage />} />

                    {/* App Routes Protected by RouteGuard */}
                    <Route 
                      path="/" 
                      element={
                        <RouteGuard>
                          <Index />
                        </RouteGuard>
                      } 
                    />
                    <Route 
                      path="/team" 
                      element={
                        <RouteGuard section="dashboard">
                          <OrganisationStructure />
                        </RouteGuard>
                      } 
                    />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </LoadingProvider>
          </MaintenanceProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;