import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Package, 
  BarChart3, 
  Shield, 
  Clock,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Database,
  Settings,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import procurementHero from "@/assets/procurement-hero.jpg";

export default function Procurement() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Package,
      title: t("procurement.features.inventory.title"),
      description: t("procurement.features.inventory.desc")
    },
    {
      icon: FileText,
      title: t("procurement.features.purchase.title"),
      description: t("procurement.features.purchase.desc")
    },
    {
      icon: Users,
      title: t("procurement.features.vendor.title"),
      description: t("procurement.features.vendor.desc")
    },
    {
      icon: BarChart3,
      title: t("procurement.features.analytics.title"),
      description: t("procurement.features.analytics.desc")
    },
    {
      icon: Shield,
      title: t("procurement.features.compliance.title"),
      description: t("procurement.features.compliance.desc")
    },
    {
      icon: Clock,
      title: t("procurement.features.lifecycle.title"),
      description: t("procurement.features.lifecycle.desc")
    }
  ];

  const benefits = [
    t("procurement.benefits.cost.title"),
    t("procurement.benefits.efficiency.title"),
    t("procurement.benefits.visibility.title"),
    t("procurement.benefits.automation.title"),
    "Real-time reporting capabilities",
    "Seamless integration with existing systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Procurement and Asset Management Solutions | Enterprise Resource Planning</title>
      <meta name="description" content="Streamline procurement processes and optimize asset management with our comprehensive ERP solution. Real-time tracking, vendor management, and spend analytics." />
      <meta name="keywords" content="procurement management, asset management, ERP, inventory tracking, vendor management, purchase orders, spend analytics" />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={procurementHero} 
            alt={t("procurement.hero.title")} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl fade-in">
                {t("procurement.hero.title")}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground fade-in" style={{animationDelay: "0.1s"}}>
                {t("procurement.hero.subtitle")}
              </p>
              <div className="mt-10 flex items-center gap-x-6 fade-in" style={{animationDelay: "0.2s"}}>
                <Button size="lg" asChild>
                  <Link to="/contact">
                    {t("procurement.hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    {t("procurement.hero.explore")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">{t("procurement.overview.title")}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("procurement.features.title")}
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("procurement.features.subtitle")}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-gradient border-border/50 glow-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
              {t("procurement.benefits.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("procurement.process.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("procurement.process.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: t("procurement.process.step1"), desc: t("procurement.process.step1.desc") },
              { step: "2", title: t("procurement.process.step2"), desc: t("procurement.process.step2.desc") },
              { step: "3", title: t("procurement.process.step3"), desc: t("procurement.process.step3.desc") },
              { step: "4", title: t("procurement.process.step4"), desc: t("procurement.process.step4.desc") }
            ].map((item, index) => (
              <div key={index} className="relative text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 text-muted-foreground/50 h-5 w-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("procurement.cta.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              {t("procurement.cta.subtitle")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {t("procurement.cta.demo")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}