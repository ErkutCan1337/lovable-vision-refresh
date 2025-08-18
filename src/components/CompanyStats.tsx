import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Clock, Award } from "lucide-react";
import teamWorkingImage from "@/assets/team-working.jpg";
import officeBuildingImage from "@/assets/office-building.jpg";

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Tamamlanan Proje",
    description: "Başarıyla teslim edilen teknoloji projeleri"
  },
  {
    icon: Users,
    value: "15+",
    label: "Yıllık Deneyim",
    description: "Sektörde biriken uzman tecrübe"
  },
  {
    icon: Award,
    value: "50+",
    label: "Mutlu Müşteri",
    description: "Güvenli çözümlerle kazanılan güven"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Teknik Destek",
    description: "Kesintisiz hizmet garantisi"
  }
];

export function CompanyStats() {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Güçlü Rakamlarla 2C
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Yılların getirdiği deneyim ve müşteri memnuniyeti odaklı yaklaşımımızın sonuçları
          </p>
        </div>

        {/* Background Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={teamWorkingImage} 
              alt="2C ekibi çalışma anında" 
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
              <div className="p-6 text-foreground">
                <h3 className="text-xl font-bold mb-2">Uzman Ekibimiz</h3>
                <p className="text-muted-foreground">Deneyimli teknisyenler ve mühendislerden oluşan güçlü kadromuz</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={officeBuildingImage} 
              alt="2C teknoloji merkez ofisi" 
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end">
              <div className="p-6 text-foreground">
                <h3 className="text-xl font-bold mb-2">Modern Tesis</h3>
                <p className="text-muted-foreground">Ankara merkezli teknoloji üssümüzden hizmet veriyoruz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="card-gradient border-border/50 hover:shadow-lg transition-all duration-300 glow-on-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-lg font-semibold text-foreground mt-1">{stat.label}</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}