import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Monitor, Layout, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/digital-archiving-hero.jpg";

export default function ScreenManagement() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Monitor,
      title: "Multi-Screen Control",
      description: "Manage unlimited displays from a single centralized dashboard"
    },
    {
      icon: Layout,
      title: "Content Templates",
      description: "Pre-designed templates for professional presentations"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Automated content scheduling and playlist management"
    }
  ];

  const benefits = [
    "Real-time content updates",
    "Remote screen management",
    "Multi-zone screen layouts",
    "Brand consistency tools",
    "Analytics and reporting",
    "Emergency alert broadcasting",
    "Cloud-based architecture",
    "Mobile app control"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Corporate Screen Management Software" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl fade-in">
                Corporate Screen Management Software
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground fade-in" style={{animationDelay: "0.1s"}}>
                Streamline your digital signage and display management across your entire organization with our powerful, easy-to-use platform.
              </p>
              <div className="mt-10 flex items-center gap-x-6 fade-in" style={{animationDelay: "0.2s"}}>
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    View All Services
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
            <h2 className="text-base font-semibold leading-7 text-primary">Digital Signage Excellence</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Control all your screens from one platform
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our screen management solution provides complete control over your digital
              signage network, enabling you to deliver targeted content efficiently.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-gradient border-border/50 glow-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
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
              Enterprise-Grade Features
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

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transform your corporate communications
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Elevate your digital signage strategy with our comprehensive screen management platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Free Trial
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