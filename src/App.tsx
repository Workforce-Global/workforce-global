import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "@/hooks/useLoading";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import OrganisationStructure from "./pages/OrganisationStructure";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <LoadingProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/team" element={<OrganisationStructure />} />
                  {/* All content is on the homepage as a single-page experience */}
                  <Route path="*" element={<Index />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </LoadingProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;