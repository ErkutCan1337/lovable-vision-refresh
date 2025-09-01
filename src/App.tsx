import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import References from "./pages/References";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SystemIntegration from "./pages/products/SystemIntegration";
import DataCenter from "./pages/products/DataCenter";
import HpcSolutions from "./pages/products/HpcSolutions";
import SecuritySolutions from "./pages/products/SecuritySolutions";
import Virtualization from "./pages/products/Virtualization";
import DisasterRecovery from "./pages/products/DisasterRecovery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/system-integration" element={<SystemIntegration />} />
          <Route path="/products/data-center" element={<DataCenter />} />
          <Route path="/products/hpc-solutions" element={<HpcSolutions />} />
          <Route path="/products/security-solutions" element={<SecuritySolutions />} />
          <Route path="/products/virtualization" element={<Virtualization />} />
          <Route path="/products/disaster-recovery" element={<DisasterRecovery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
