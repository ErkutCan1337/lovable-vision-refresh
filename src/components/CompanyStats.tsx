import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building2, Award, Globe, Clock } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

export function CompanyStats() {
  const stats = [
    {
      name: "Yıl Deneyim",
      value: "15+",
      icon: Clock,
      description: "Teknoloji sektöründe güvenilir tecrübe"
    },
    {
      name: "Mutlu Müşteri", 
      value: "100+",
      icon: Users,
      description: "Başarılı proje ve çözüm ortaklıkları"
    },
    {
      name: "Tamamlanan Proje",
      value: "250+",
      icon: TrendingUp,
      description: "Farklı sektörlerde başarılı uygulamalar"
    },
    {
      name: "Uzman Kadro",
      value: "50+",
      icon: Award,
      description: "Alanında deneyimli profesyonel ekip"
    },
    {
      name: "Şehir", 
      value: "10+",
      icon: Building2,
      description: "Türkiye genelinde hizmet ağı"
    },
    {
      name: "Destek",
      value: "7/24",
      icon: Globe,
      description: "Kesintisiz teknik destek hizmeti"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <img 
            src={officeBuilding} 
            alt="Office building background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src={teamCollaboration} 
            alt="Team collaboration background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background/90"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Rakamlarla 2C Teknoloji
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Güçlü altyapımız ve deneyimli ekibimizle teknoloji çözümlerinde öncü konumumuzu sürdürüyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name} className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm glow-on-hover group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}