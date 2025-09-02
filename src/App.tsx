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
import InformationManagement from "./pages/products/InformationManagement";
import DigitalArchiving from "./pages/products/DigitalArchiving";
import WebMobile from "./pages/products/WebMobile";
import BusinessIntelligence from "./pages/products/BusinessIntelligence";
import BigData from "./pages/products/BigData";
import PassengerInfo from "./pages/products/PassengerInfo";
import Compliance from "./pages/products/Compliance";
import GisSolutions from "./pages/products/GisSolutions";
import ScreenManagement from "./pages/products/ScreenManagement";
import ProcessManagement from "./pages/products/ProcessManagement";
import Cybersecurity from "./pages/products/Cybersecurity";

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
        <Route path="/products/information-management" element={<InformationManagement />} />
        <Route path="/products/digital-archiving" element={<DigitalArchiving />} />
        <Route path="/products/web-mobile" element={<WebMobile />} />
        <Route path="/products/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/products/big-data" element={<BigData />} />
        <Route path="/products/passenger-info" element={<PassengerInfo />} />
        <Route path="/products/compliance" element={<Compliance />} />
        <Route path="/products/gis-solutions" element={<GisSolutions />} />
        <Route path="/products/screen-management" element={<ScreenManagement />} />
        <Route path="/products/process-management" element={<ProcessManagement />} />
        <Route path="/products/cybersecurity" element={<Cybersecurity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
