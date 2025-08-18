import { Building2, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "15+",
    label: "Yıllık Deneyim",
    description: "Teknoloji sektöründe"
  },
  {
    icon: Users,
    value: "100+",
    label: "Mutlu Müşteri",
    description: "Başarılı proje teslimi"
  },
  {
    icon: Clock,
    value: "7/24",
    label: "Destek Hizmeti",
    description: "Kesintisiz hizmet"
  },
  {
    icon: Award,
    value: "50+",
    label: "Tamamlanan Proje",
    description: "Çeşitli sektörlerde"
  }
];

export function CompanyStats() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="text-center fade-in" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}