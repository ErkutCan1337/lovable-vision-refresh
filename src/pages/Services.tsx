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

const products = [
  {
    icon: Database,
    title: "Information Management System",
    description: "Kapsamlı bilgi yönetimi ve organizasyon çözümleri"
  },
  {
    icon: Shield,
    title: "Security Management Systems", 
    description: "Güvenlik yönetimi ve izleme sistemleri"
  },
  {
    icon: FileText,
    title: "Digital Archiving Systems",
    description: "Dijital arşivleme ve dokümantasyon çözümleri"
  },
  {
    icon: Globe,
    title: "Web and Mobile Technology Solutions",
    description: "Web ve mobil uygulama geliştirme hizmetleri"
  },
  {
    icon: Map,
    title: "GIS-Based Information Systems",
    description: "Coğrafi bilgi sistemleri ve haritalama çözümleri"
  },
  {
    icon: Monitor,
    title: "Passenger Information Display Software",
    description: "Yolcu bilgilendirme ve görüntüleme sistemleri"
  },
  {
    icon: Monitor,
    title: "Corporate Screen Management Software",
    description: "Kurumsal ekran yönetimi ve içerik dağıtımı"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "İş zekası ve veri analizi çözümleri"
  },
  {
    icon: Settings,
    title: "Process Management Software",
    description: "Süreç yönetimi ve optimizasyon yazılımları"
  },
  {
    icon: Lock,
    title: "Information Security and Cybersecurity Solutions",
    description: "Bilgi güvenliği ve siber güvenlik çözümleri"
  },
  {
    icon: ShoppingCart,
    title: "Procurement and Asset Management",
    description: "Satın alma ve varlık yönetimi sistemleri"
  },
  {
    icon: Target,
    title: "Internal Control Software",
    description: "İç kontrol ve denetim yazılım çözümleri"
  },
  {
    icon: Target,
    title: "Strategic Planning Software",
    description: "Stratejik planlama ve yönetim sistemleri"
  },
  {
    icon: KeyRound,
    title: "License Tracking Software",
    description: "Lisans takip ve yönetim sistemleri"
  },
  {
    icon: Users,
    title: "Customer Tracking and Appointment System",
    description: "Müşteri takip ve randevu yönetim sistemleri"
  },
  {
    icon: Users,
    title: "Personnel Tracking and HR Management Software",
    description: "Personel takip ve insan kaynakları yönetimi"
  },
  {
    icon: FolderOpen,
    title: "Document Management System",
    description: "Doküman yönetimi ve arşivleme çözümleri"
  },
  {
    icon: Camera,
    title: "Vehicle Counting and License Plate Recognition",
    description: "Araç sayım ve plaka tanıma sistemleri"
  },
  {
    icon: KeyRound,
    title: "Access Control Systems Management Software",
    description: "Erişim kontrol sistemleri yönetim yazılımı"
  },
  {
    icon: BrainCircuit,
    title: "Big Data Solutions",
    description: "Büyük veri analizi ve işleme çözümleri"
  }
];

const systemIntegrationServices = [
  {
    icon: Server,
    title: "Server Solutions",
    description: "Kurumsal sunucu çözümleri ve altyapı kurulumu"
  },
  {
    icon: HardDrive,
    title: "Data Storage Solutions", 
    description: "Veri depolama ve yedekleme sistemleri"
  },
  {
    icon: Layers,
    title: "Server Virtualization Solutions",
    description: "Sunucu sanallaştırma teknolojileri"
  },
  {
    icon: Database,
    title: "Data Storage Virtualization",
    description: "Veri depolama sanallaştırma çözümleri"
  },
  {
    icon: Cloud,
    title: "Private Cloud Solutions",
    description: "Özel bulut altyapısı ve yönetimi"
  },
  {
    icon: Zap,
    title: "System Automation Solutions",
    description: "Sistem otomasyonu ve süreç yönetimi"
  },
  {
    icon: Building2,
    title: "Data Center Solutions",
    description: "Veri merkezi tasarımı ve kurulumu"
  },
  {
    icon: Cpu,
    title: "Supercomputer Solutions (HPC)",
    description: "Yüksek performanslı hesaplama sistemleri"
  },
  {
    icon: Shield,
    title: "IT Security Solutions",
    description: "Bilişim teknolojileri güvenlik çözümleri"
  },
  {
    icon: Network,
    title: "Virtualization Solutions",
    description: "Ağ ve sistem sanallaştırma teknolojileri"
  },
  {
    icon: AlertTriangle,
    title: "Disaster Recovery Solutions",
    description: "Felaket kurtarma ve iş sürekliliği planları"
  },
  {
    icon: BrainCircuit,
    title: "Big Data Solutions",
    description: "Büyük veri analizi ve işleme platformları"
  }
];

const Services = () => {
  const { t } = useLanguage();
  
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
                Ürün ve Çözümlerimiz
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                İşletmenizin dijital dönüşümü için kapsamlı yazılım çözümleri
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <Card key={product.title} className="card-gradient border-border/50 glow-on-hover h-full">
                    <CardHeader className="text-center pb-2">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight mb-2">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {product.description}
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
                Altyapı kurulumu ve sistem entegrasyonu alanında profesyonel hizmetler
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {systemIntegrationServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="card-gradient border-border/50 glow-on-hover h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold text-foreground mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-base">
                            {service.description}
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