import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Cloud, HardDrive, Network, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesOverview() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Server,
      titleKey: "services.system_integration.title",
      descriptionKey: "services.system_integration.description",
      features: [
        "services.features.infrastructure_design",
        "services.features.system_integration",
        "services.features.performance_optimization"
      ]
    },
    {
      icon: HardDrive,
      titleKey: "services.data_center.title",
      descriptionKey: "services.data_center.description",
      features: [
        "services.features.data_center_design", 
        "services.features.infrastructure_setup", 
        "services.features.monitoring_24_7"
      ]
    },
    {
      icon: Network,
      titleKey: "services.hpc.title",
      descriptionKey: "services.hpc.description",
      features: [
        "services.features.hpc_cluster_setup", 
        "services.features.performance_analysis", 
        "services.features.scalable_solutions"
      ]
    },
    {
      icon: Shield,
      titleKey: "services.security.title",
      descriptionKey: "services.security.description",
      features: [
        "services.features.security_analysis", 
        "services.features.protection_systems", 
        "services.features.risk_management"
      ]
    },
    {
      icon: Cloud,
      titleKey: "services.virtualization.title",
      descriptionKey: "services.virtualization.description",
      features: [
        "services.features.vm_infrastructure", 
        "services.features.resource_optimization", 
        "services.features.central_management"
      ]
    },
    {
      icon: AlertTriangle,
      titleKey: "services.disaster_recovery.title",
      descriptionKey: "services.disaster_recovery.description",
      features: [
        "services.features.backup_strategy", 
        "services.features.recovery_plans", 
        "services.features.business_continuity"
      ]
    }
  ];
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.titleKey} className="card-gradient border-border/50 glow-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                        {t(service.titleKey)}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {t(service.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      {t("projects.view_details")}
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
              {t("services.title")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}