import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "@/hooks/useLoading";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* All content is on the homepage as a single-page experience */}
                <Route path="*" element={<Index />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LoadingProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;