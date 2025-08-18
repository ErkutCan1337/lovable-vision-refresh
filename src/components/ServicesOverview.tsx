import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Cloud, HardDrive, Network, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Server,
    title: "Sistem Entegrasyon Hizmetleri",
    description: "Kurumsal altyapı entegrasyonu ve sistem optimizasyonu çözümleri",
    features: ["Altyapı tasarımı", "Sistem entegrasyonu", "Performans optimizasyonu"]
  },
  {
    icon: HardDrive,
    title: "Veri Merkezi Çözümleri",
    description: "Modern ve güvenli veri merkezi altyapı çözümleri",
    features: ["Veri merkezi tasarımı", "Altyapı kurulumu", "7/24 izleme"]
  },
  {
    icon: Network,
    title: "Süper Bilgisayar Çözümleri (HPC)",
    description: "Yüksek performanslı hesaplama sistemleri ve HPC çözümleri",
    features: ["HPC cluster kurulumu", "Performans analizi", "Ölçeklenebilir çözümler"]
  },
  {
    icon: Shield,
    title: "Bilişim Güvenliği Çözümleri",
    description: "Kapsamlı siber güvenlik ve veri koruma çözümleri",
    features: ["Güvenlik analizi", "Koruma sistemleri", "Risk yönetimi"]
  },
  {
    icon: Cloud,
    title: "Sanallaştırma Çözümleri",
    description: "Verimli kaynak kullanımı için sanallaştırma teknolojileri",
    features: ["VM altyapısı", "Kaynak optimizasyonu", "Merkezi yönetim"]
  },
  {
    icon: AlertTriangle,
    title: "Felaket Kurtarma Çözümleri",
    description: "İş sürekliliği için felaket kurtarma ve yedekleme sistemleri",
    features: ["Yedekleme stratejisi", "Kurtarma planları", "İş sürekliliği"]
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ürün & Hizmetlerimiz
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Teknoloji alanında uzman kadromuz ile kapsamlı çözümler sunuyoruz. 
            Her ihtiyaca özel entegre sistemler geliştiriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="card-gradient border-border/50 glow-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      Detayları Gör
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services" className="flex items-center gap-2">
              Tüm Hizmetleri İnceleyin
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}