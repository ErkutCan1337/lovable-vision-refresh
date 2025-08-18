import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Monitor, ShoppingCart, Shield, Truck, CreditCard } from "lucide-react";
import projectManagementImage from "@/assets/project-management.jpg";
import projectDashboardImage from "@/assets/project-dashboard.jpg";
import modernDatacenterImage from "@/assets/modern-datacenter.jpg";
import networkInfrastructureImage from "@/assets/network-infrastructure.jpg";

const projects = [
  {
    icon: MapPin,
    title: "CBS Tabanlı Bilgi Sistemleri",
    description: "Coğrafi Bilgi Sistemleri tabanlı entegre veri yönetim çözümleri",
    category: "Coğrafi Bilgi Sistemleri",
    status: "Tamamlandı",
    technologies: ["GIS", "PostgreSQL", "Web Teknolojileri"]
  },
  {
    icon: ShoppingCart,
    title: "Talep Tabanlı E-Ticaret Portalı", 
    description: "Dinamik talep yönetimi özellikli modern e-ticaret platformu",
    category: "E-Ticaret",
    status: "Aktif",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    icon: Shield,
    title: "CCTV ve Güvenlik Yönetim Projeleri",
    description: "Entegre güvenlik kamera sistemleri ve merkezi yönetim çözümleri",
    category: "Güvenlik Sistemleri",
    status: "Tamamlandı", 
    technologies: ["IP Cameras", "Analytics", "Mobile Apps"]
  },
  {
    icon: Truck,
    title: "Terminal (Otogar) Yönetim Projesi",
    description: "Otogar operasyonlarının dijital yönetimi için kapsamlı sistem",
    category: "Ulaşım Yönetimi",
    status: "Geliştirme Aşamasında",
    technologies: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    icon: CreditCard,
    title: "HGS Entegrasyon Sistemleri",
    description: "Hızlı Geçiş Sistemi entegrasyonu ve ödeme altyapısı",
    category: "Ödeme Sistemleri", 
    status: "Tamamlandı",
    technologies: ["REST API", "Payment Gateway", "Security"]
  },
  {
    icon: Monitor,
    title: "Kurumsal Altyapı Modernizasyonu",
    description: "Büyük ölçekli kurumsal IT altyapısının yenilenmesi ve optimizasyonu", 
    category: "Altyapı",
    status: "Devam Ediyor",
    technologies: ["VMware", "Storage", "Network Security"]
  }
];

const Projects = () => {
  const carouselSlides = [
    {
      image: projectManagementImage,
      title: "Proje Yönetimi",
      description: "Profesyonel proje yönetimi ile başarılı çözümler"
    },
    {
      image: projectDashboardImage,
      title: "Analitik Dashboard",
      description: "Modern veri görselleştirme ve analiz sistemleri"
    },
    {
      image: modernDatacenterImage,
      title: "Altyapı Projeleri",
      description: "Kurumsal IT altyapısı ve veri merkezi çözümleri"
    },
    {
      image: networkInfrastructureImage,
      title: "Ağ Altyapısı",
      description: "Güvenli ve ölçeklenebilir ağ mimarisi kurulumu"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 fade-in">
              Projelerimiz
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12 slide-up">
              Çeşitli sektörlerde gerçekleştirdiğimiz başarılı projeler ve çözümlerimiz. 
              Her proje, müşteri ihtiyaçlarına özel geliştirilmiş teknoloji çözümleridir.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="mb-16">
            <ImageCarousel slides={carouselSlides} className="max-w-5xl mx-auto" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={project.title} className="card-gradient border-border/50 glow-on-hover">
                  <CardHeader>
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                        <Badge 
                          variant={project.status === 'Tamamlandı' ? 'default' : project.status === 'Aktif' ? 'secondary' : 'outline'}
                          className="mb-2"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Kategori</h4>
                        <p className="text-foreground">{project.category}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Teknolojiler</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;