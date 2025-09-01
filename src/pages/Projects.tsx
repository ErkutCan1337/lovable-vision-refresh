import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Monitor, ShoppingCart, Shield, Truck, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: MapPin,
      titleKey: "projects.gis.title",
      descriptionKey: "projects.gis.description",
      categoryKey: "projects.gis.category",
      statusKey: "projects.status.completed",
      technologies: ["GIS", "PostgreSQL", "Web Teknolojileri"]
    },
    {
      icon: ShoppingCart,
      titleKey: "projects.ecommerce.title",
      descriptionKey: "projects.ecommerce.description",
      categoryKey: "projects.ecommerce.category",
      statusKey: "projects.status.active",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      icon: Shield,
      titleKey: "projects.cctv.title",
      descriptionKey: "projects.cctv.description",
      categoryKey: "projects.cctv.category",
      statusKey: "projects.status.completed",
      technologies: ["IP Cameras", "Analytics", "Mobile Apps"]
    },
    {
      icon: Truck,
      titleKey: "projects.terminal.title",
      descriptionKey: "projects.terminal.description",
      categoryKey: "projects.terminal.category",
      statusKey: "projects.status.development",
      technologies: ["Java", "Spring Boot", "PostgreSQL"]
    },
    {
      icon: CreditCard,
      titleKey: "projects.hgs.title",
      descriptionKey: "projects.hgs.description",
      categoryKey: "projects.hgs.category",
      statusKey: "projects.status.completed",
      technologies: ["REST API", "Payment Gateway", "Security"]
    },
    {
      icon: Monitor,
      titleKey: "projects.infrastructure.title",
      descriptionKey: "projects.infrastructure.description",
      categoryKey: "projects.infrastructure.category",
      statusKey: "projects.status.ongoing",
      technologies: ["VMware", "Storage", "Network Security"]
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section with Project Showcase */}
          <div className="relative mb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute left-[50%] top-0 -translate-x-[50%] w-[200%] h-[200%]">
                <div className="h-full w-full bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5 rotate-12" />
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 fade-in">
                {t("projects.title")}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto slide-up">
                {t("projects.subtitle")}
              </p>
            </div>

            {/* Live Project Stats Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-gradient-card border border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">{t("projects.stats.active")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">150+</div>
                <div className="text-sm text-muted-foreground">{t("projects.stats.completed")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground">{t("projects.stats.satisfaction")}</div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={project.titleKey} className="card-gradient border-border/50 glow-on-hover">
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
                            {t(project.titleKey)}
                          </CardTitle>
                        </div>
                        <Badge 
                          variant={t(project.statusKey) === t('projects.status.completed') ? 'default' : t(project.statusKey) === t('projects.status.active') ? 'secondary' : 'outline'}
                          className="mb-2"
                        >
                          {t(project.statusKey)}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {t(project.descriptionKey)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">{t("projects.category")}</h4>
                        <p className="text-foreground">{t(project.categoryKey)}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">{t("projects.technologies")}</h4>
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