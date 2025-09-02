import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
    {
      icon: DollarSign,
      title: t("procurement.benefits.cost.title"),
      description: t("procurement.benefits.cost.desc")
    },
    {
      icon: TrendingUp,
      title: t("procurement.benefits.efficiency.title"),
      description: t("procurement.benefits.efficiency.desc")
    },
    {
      icon: Database,
      title: t("procurement.benefits.visibility.title"),
      description: t("procurement.benefits.visibility.desc")
    },
    {
      icon: Settings,
      title: t("procurement.benefits.automation.title"),
      description: t("procurement.benefits.automation.desc")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Procurement and Asset Management Solutions | Enterprise Resource Planning</title>
      <meta name="description" content="Streamline procurement processes and optimize asset management with our comprehensive ERP solution. Real-time tracking, vendor management, and spend analytics." />
      <meta name="keywords" content="procurement management, asset management, ERP, inventory tracking, vendor management, purchase orders, spend analytics" />
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${procurementHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t("procurement.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              {t("procurement.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  {t("procurement.hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  {t("procurement.hero.explore")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t("procurement.overview.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("procurement.overview.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("procurement.features.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("procurement.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("procurement.benefits.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("procurement.benefits.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("procurement.process.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("procurement.process.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: t("procurement.process.step1"), desc: t("procurement.process.step1.desc") },
              { step: "2", title: t("procurement.process.step2"), desc: t("procurement.process.step2.desc") },
              { step: "3", title: t("procurement.process.step3"), desc: t("procurement.process.step3.desc") },
              { step: "4", title: t("procurement.process.step4"), desc: t("procurement.process.step4.desc") }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("procurement.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t("procurement.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  {t("procurement.cta.demo")}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">
                  {t("procurement.cta.learn")}
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