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
    <section className="py-20 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-glow rounded-full"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Rakamlarla 2C Teknoloji</h2>
          <p className="text-lg text-muted-foreground">Sektördeki başarımızı gösteren önemli veriler</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label} 
                className="text-center fade-in bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 glow-on-hover" 
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-primary mb-6">
                  <Icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-muted-foreground">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}