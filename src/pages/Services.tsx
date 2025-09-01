import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  Server, Shield, Cloud, HardDrive, Network, AlertTriangle, 
  Database, FileText, Globe, Map, Monitor, BarChart3, 
  Settings, Lock, ShoppingCart, Target, Users, 
  FolderOpen, Camera, KeyRound, BrainCircuit, Layers,
  Cpu, Zap, Building2, ArrowRight, Briefcase, Brain, 
  ShieldCheck, Code2, ChartBar, Cog
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const products = [
    {
      icon: Database,
      titleKey: "products.info_management.title",
      descriptionKey: "products.info_management.description",
      path: "/products/information-management",
      gradient: "from-blue-500 to-blue-600",
      category: "information"
    },
    {
      icon: Shield,
      titleKey: "products.security_management.title",
      descriptionKey: "products.security_management.description",
      path: "/products/security-solutions",
      gradient: "from-purple-500 to-purple-600",
      category: "security"
    },
    {
      icon: FileText,
      titleKey: "products.digital_archiving.title",
      descriptionKey: "products.digital_archiving.description",
      path: "/products/digital-archiving",
      gradient: "from-green-500 to-green-600",
      category: "digital"
    },
    {
      icon: Globe,
      titleKey: "products.web_mobile.title",
      descriptionKey: "products.web_mobile.description",
      path: "/products/web-mobile",
      gradient: "from-cyan-500 to-cyan-600",
      category: "digital"
    },
    {
      icon: Map,
      titleKey: "products.gis.title",
      descriptionKey: "products.gis.description",
      path: "/products/gis-solutions",
      gradient: "from-orange-500 to-orange-600",
      category: "digital"
    },
    {
      icon: Monitor,
      titleKey: "products.passenger_info.title",
      descriptionKey: "products.passenger_info.description",
      path: "/products/passenger-information",
      gradient: "from-indigo-500 to-indigo-600",
      category: "business"
    },
    {
      icon: Monitor,
      titleKey: "products.screen_management.title",
      descriptionKey: "products.screen_management.description",
      path: "/products/screen-management",
      gradient: "from-pink-500 to-pink-600",
      category: "business"
    },
    {
      icon: BarChart3,
      titleKey: "products.business_intelligence.title",
      descriptionKey: "products.business_intelligence.description",
      path: "/products/business-intelligence",
      gradient: "from-teal-500 to-teal-600",
      category: "business"
    },
    {
      icon: Settings,
      titleKey: "products.process_management.title",
      descriptionKey: "products.process_management.description",
      path: "/products/process-management",
      gradient: "from-gray-500 to-gray-600",
      category: "process"
    },
    {
      icon: Lock,
      titleKey: "products.cybersecurity.title",
      descriptionKey: "products.cybersecurity.description",
      path: "/products/cybersecurity",
      gradient: "from-red-500 to-red-600",
      category: "security"
    },
    {
      icon: ShoppingCart,
      titleKey: "products.procurement.title",
      descriptionKey: "products.procurement.description",
      path: "/products/procurement",
      gradient: "from-amber-500 to-amber-600",
      category: "process"
    },
    {
      icon: Target,
      titleKey: "products.internal_control.title",
      descriptionKey: "products.internal_control.description",
      path: "/products/internal-control",
      gradient: "from-lime-500 to-lime-600",
      category: "process"
    },
    {
      icon: Target,
      titleKey: "products.strategic_planning.title",
      descriptionKey: "products.strategic_planning.description",
      path: "/products/strategic-planning",
      gradient: "from-violet-500 to-violet-600",
      category: "process"
    },
    {
      icon: KeyRound,
      titleKey: "products.license_tracking.title",
      descriptionKey: "products.license_tracking.description",
      path: "/products/license-tracking",
      gradient: "from-rose-500 to-rose-600",
      category: "data"
    },
    {
      icon: Users,
      titleKey: "products.customer_tracking.title",
      descriptionKey: "products.customer_tracking.description",
      path: "/products/customer-tracking",
      gradient: "from-sky-500 to-sky-600",
      category: "information"
    },
    {
      icon: Users,
      titleKey: "products.hr_management.title",
      descriptionKey: "products.hr_management.description",
      path: "/products/hr-management",
      gradient: "from-emerald-500 to-emerald-600",
      category: "information"
    },
    {
      icon: FolderOpen,
      titleKey: "products.document_management.title",
      descriptionKey: "products.document_management.description",
      path: "/products/document-management",
      gradient: "from-yellow-500 to-yellow-600",
      category: "information"
    },
    {
      icon: Camera,
      titleKey: "products.vehicle_counting.title",
      descriptionKey: "products.vehicle_counting.description",
      path: "/products/vehicle-counting",
      gradient: "from-fuchsia-500 to-fuchsia-600",
      category: "data"
    },
    {
      icon: KeyRound,
      titleKey: "products.access_control.title",
      descriptionKey: "products.access_control.description",
      path: "/products/access-control",
      gradient: "from-slate-500 to-slate-600",
      category: "security"
    },
    {
      icon: BrainCircuit,
      titleKey: "products.big_data.title",
      descriptionKey: "products.big_data.description",
      path: "/products/big-data",
      gradient: "from-cyan-600 to-blue-600",
      category: "data"
    }
  ];

  const productCategories = [
    { id: "all", label: "All Solutions", icon: Briefcase },
    { id: "information", label: "Information Management", icon: Database },
    { id: "security", label: "Security Solutions", icon: ShieldCheck },
    { id: "digital", label: "Digital Solutions", icon: Code2 },
    { id: "business", label: "Business Intelligence", icon: ChartBar },
    { id: "process", label: "Process Management", icon: Cog },
    { id: "data", label: "Data & Analytics", icon: Brain }
  ];

  const systemIntegrationServices = [
    {
      icon: Server,
      titleKey: "integration.server_solutions.title",
      descriptionKey: "integration.server_solutions.description",
      path: "/products/system-integration",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: HardDrive,
      titleKey: "integration.data_storage.title",
      descriptionKey: "integration.data_storage.description",
      path: "/products/data-center",
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Layers,
      titleKey: "integration.server_virtualization.title",
      descriptionKey: "integration.server_virtualization.description",
      path: "/products/virtualization",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Database,
      titleKey: "integration.storage_virtualization.title",
      descriptionKey: "integration.storage_virtualization.description",
      path: "/products/virtualization",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: Cloud,
      titleKey: "integration.private_cloud.title",
      descriptionKey: "integration.private_cloud.description",
      path: "/products/private-cloud",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      icon: Zap,
      titleKey: "integration.system_automation.title",
      descriptionKey: "integration.system_automation.description",
      path: "/products/system-automation",
      gradient: "from-yellow-600 to-amber-600"
    },
    {
      icon: Building2,
      titleKey: "integration.data_center.title",
      descriptionKey: "integration.data_center.description",
      path: "/products/data-center",
      gradient: "from-slate-600 to-gray-600"
    },
    {
      icon: Cpu,
      titleKey: "integration.supercomputer.title",
      descriptionKey: "integration.supercomputer.description",
      path: "/products/hpc-solutions",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: Shield,
      titleKey: "integration.it_security.title",
      descriptionKey: "integration.it_security.description",
      path: "/products/security-solutions",
      gradient: "from-red-600 to-pink-600"
    },
    {
      icon: Network,
      titleKey: "integration.virtualization.title",
      descriptionKey: "integration.virtualization.description",
      path: "/products/virtualization",
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      icon: AlertTriangle,
      titleKey: "integration.disaster_recovery.title",
      descriptionKey: "integration.disaster_recovery.description",
      path: "/products/disaster-recovery",
      gradient: "from-rose-600 to-red-600"
    },
    {
      icon: BrainCircuit,
      titleKey: "integration.big_data.title",
      descriptionKey: "integration.big_data.description",
      path: "/products/big-data",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Products and Solutions Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("services.products.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.products.subtitle")}
              </p>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-2 bg-background border">
                {productCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex flex-col items-center gap-1.5 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-accent/50 transition-all"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-xs font-medium text-center leading-tight">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              
              {productCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {(category.id === "all" ? products : products.filter(p => p.category === category.id)).map((product, index) => {
                      const Icon = product.icon;
                      return (
                        <div 
                          key={product.titleKey}
                          onClick={() => navigate(product.path)}
                          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br bg-card hover:bg-accent/10 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl animate-fade-in"
                          style={{animationDelay: `${index * 0.05}s`}}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                          <div className="relative p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="h-7 w-7 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {t(product.titleKey)}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {t(product.descriptionKey)}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-sm font-medium">Learn more</span>
                              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* System Integration Services Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {t("services.system_integration.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.integration.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {systemIntegrationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.titleKey}
                    onClick={() => navigate(service.path)}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br bg-card hover:bg-accent/10 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-xl"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {t(service.titleKey)}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {t(service.descriptionKey)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;