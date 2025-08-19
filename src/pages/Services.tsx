import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Server, Shield, Cloud, HardDrive, Network, AlertTriangle, 
  Database, FileText, Globe, Map, Monitor, BarChart3, 
  Settings, Lock, ShoppingCart, Target, Users, 
  FolderOpen, Camera, KeyRound, BrainCircuit, Layers,
  Cpu, Zap, Building2
} from "lucide-react";
import modernDatacenterImage from "@/assets/modern-datacenter.jpg";
import supercomputerImage from "@/assets/supercomputer.jpg";
import networkInfrastructureImage from "@/assets/network-infrastructure.jpg";
import softwareDevelopmentImage from "@/assets/software-development.jpg";

const Services = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      icon: Database,
      titleKey: "products.info_management.title",
      descriptionKey: "products.info_management.description"
    },
    {
      icon: Shield,
      titleKey: "products.security_management.title",
      descriptionKey: "products.security_management.description"
    },
    {
      icon: FileText,
      titleKey: "products.digital_archiving.title",
      descriptionKey: "products.digital_archiving.description"
    },
    {
      icon: Globe,
      titleKey: "products.web_mobile.title",
      descriptionKey: "products.web_mobile.description"
    },
    {
      icon: Map,
      titleKey: "products.gis.title",
      descriptionKey: "products.gis.description"
    },
    {
      icon: Monitor,
      titleKey: "products.passenger_info.title",
      descriptionKey: "products.passenger_info.description"
    },
    {
      icon: Monitor,
      titleKey: "products.screen_management.title",
      descriptionKey: "products.screen_management.description"
    },
    {
      icon: BarChart3,
      titleKey: "products.business_intelligence.title",
      descriptionKey: "products.business_intelligence.description"
    },
    {
      icon: Settings,
      titleKey: "products.process_management.title",
      descriptionKey: "products.process_management.description"
    },
    {
      icon: Lock,
      titleKey: "products.cybersecurity.title",
      descriptionKey: "products.cybersecurity.description"
    },
    {
      icon: ShoppingCart,
      titleKey: "products.procurement.title",
      descriptionKey: "products.procurement.description"
    },
    {
      icon: Target,
      titleKey: "products.internal_control.title",
      descriptionKey: "products.internal_control.description"
    },
    {
      icon: Target,
      titleKey: "products.strategic_planning.title",
      descriptionKey: "products.strategic_planning.description"
    },
    {
      icon: KeyRound,
      titleKey: "products.license_tracking.title",
      descriptionKey: "products.license_tracking.description"
    },
    {
      icon: Users,
      titleKey: "products.customer_tracking.title",
      descriptionKey: "products.customer_tracking.description"
    },
    {
      icon: Users,
      titleKey: "products.hr_management.title",
      descriptionKey: "products.hr_management.description"
    },
    {
      icon: FolderOpen,
      titleKey: "products.document_management.title",
      descriptionKey: "products.document_management.description"
    },
    {
      icon: Camera,
      titleKey: "products.vehicle_counting.title",
      descriptionKey: "products.vehicle_counting.description"
    },
    {
      icon: KeyRound,
      titleKey: "products.access_control.title",
      descriptionKey: "products.access_control.description"
    },
    {
      icon: BrainCircuit,
      titleKey: "products.big_data.title",
      descriptionKey: "products.big_data.description"
    }
  ];

  const systemIntegrationServices = [
    {
      icon: Server,
      titleKey: "integration.server_solutions.title",
      descriptionKey: "integration.server_solutions.description"
    },
    {
      icon: HardDrive,
      titleKey: "integration.data_storage.title",
      descriptionKey: "integration.data_storage.description"
    },
    {
      icon: Layers,
      titleKey: "integration.server_virtualization.title",
      descriptionKey: "integration.server_virtualization.description"
    },
    {
      icon: Database,
      titleKey: "integration.storage_virtualization.title",
      descriptionKey: "integration.storage_virtualization.description"
    },
    {
      icon: Cloud,
      titleKey: "integration.private_cloud.title",
      descriptionKey: "integration.private_cloud.description"
    },
    {
      icon: Zap,
      titleKey: "integration.system_automation.title",
      descriptionKey: "integration.system_automation.description"
    },
    {
      icon: Building2,
      titleKey: "integration.data_center.title",
      descriptionKey: "integration.data_center.description"
    },
    {
      icon: Cpu,
      titleKey: "integration.supercomputer.title",
      descriptionKey: "integration.supercomputer.description"
    },
    {
      icon: Shield,
      titleKey: "integration.it_security.title",
      descriptionKey: "integration.it_security.description"
    },
    {
      icon: Network,
      titleKey: "integration.virtualization.title",
      descriptionKey: "integration.virtualization.description"
    },
    {
      icon: AlertTriangle,
      titleKey: "integration.disaster_recovery.title",
      descriptionKey: "integration.disaster_recovery.description"
    },
    {
      icon: BrainCircuit,
      titleKey: "integration.big_data.title",
      descriptionKey: "integration.big_data.description"
    }
  ];
  
  const carouselSlides = [
    {
      image: modernDatacenterImage,
      titleKey: "services.data_center.title",
      descriptionKey: "services.data_center.description"
    },
    {
      image: supercomputerImage,
      titleKey: "services.hpc.title", 
      descriptionKey: "services.hpc.description"
    },
    {
      image: networkInfrastructureImage,
      titleKey: "services.system_integration.title",
      descriptionKey: "services.system_integration.description"
    },
    {
      image: softwareDevelopmentImage,
      titleKey: "services.virtualization.title",
      descriptionKey: "services.virtualization.description"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 fade-in">
              {t("services.title")}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto mb-12 slide-up">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Services Carousel */}
          <div className="mb-16">
            <ImageCarousel slides={carouselSlides.map(slide => ({
              image: slide.image,
              title: t(slide.titleKey),
              description: t(slide.descriptionKey)
            }))} className="max-w-5xl mx-auto" />
          </div>

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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card key={product.titleKey} className="card-gradient border-border/50 glow-on-hover h-full">
                    <CardHeader className="text-center pb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight mb-2">
                        {t(product.titleKey)}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {t(product.descriptionKey)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {systemIntegrationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={service.titleKey} className="card-gradient border-border/50 glow-on-hover h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">
                            {t(service.titleKey)}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-base">
                            {t(service.descriptionKey)}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
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