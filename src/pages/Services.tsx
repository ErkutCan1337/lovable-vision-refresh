import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Cloud, HardDrive, Network, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Sistem Entegrasyon Hizmetleri",
    description: "Kurumsal altyapı entegrasyonu ve sistem optimizasyonu çözümleri",
    details: [
      "Altyapı tasarımı ve kurulumu",
      "Sistem entegrasyonu ve optimizasyonu", 
      "Performans izleme ve raporlama",
      "Teknik destek ve bakım hizmetleri"
    ]
  },
  {
    icon: HardDrive,
    title: "Veri Merkezi Çözümleri",
    description: "Modern ve güvenli veri merkezi altyapı çözümleri",
    details: [
      "Veri merkezi tasarımı ve kurulumu",
      "Sunucu ve depolama altyapısı",
      "Ağ altyapısı ve güvenlik",
      "7/24 izleme ve yönetim"
    ]
  },
  {
    icon: Network,
    title: "Süper Bilgisayar Çözümleri (HPC)",
    description: "Yüksek performanslı hesaplama sistemleri ve HPC çözümleri",
    details: [
      "HPC cluster tasarımı ve kurulumu",
      "Performans optimizasyonu",
      "Ölçeklenebilir mimariler",
      "Paralel işleme çözümleri"
    ]
  },
  {
    icon: Shield,
    title: "Bilişim Güvenliği Çözümleri", 
    description: "Kapsamlı siber güvenlik ve veri koruma çözümleri",
    details: [
      "Güvenlik analizi ve değerlendirme",
      "Koruma sistemleri kurulumu",
      "Risk yönetimi ve izleme",
      "Güvenlik eğitimi ve danışmanlık"
    ]
  },
  {
    icon: Cloud,
    title: "Sanallaştırma Çözümleri",
    description: "Verimli kaynak kullanımı için sanallaştırma teknolojileri",
    details: [
      "Sanal makine altyapısı",
      "Kaynak optimizasyonu",
      "Merkezi yönetim sistemleri",
      "Yedekleme ve kurtarma"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Felaket Kurtarma Çözümleri",
    description: "İş sürekliliği için felaket kurtarma ve yedekleme sistemleri",
    details: [
      "Yedekleme stratejisi geliştirme",
      "Kurtarma planları hazırlama", 
      "İş sürekliliği sağlama",
      "Test ve doğrulama süreçleri"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Ürün & Hizmetlerimiz
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Teknoloji alanında uzman kadromuz ile kapsamlı çözümler sunuyoruz. 
              Her ihtiyaca özel entegre sistemler geliştiriyoruz.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="card-gradient border-border/50 glow-on-hover">
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
                        <CardDescription className="text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
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

export default Services;