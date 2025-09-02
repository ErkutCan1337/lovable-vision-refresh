import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Map, Database, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/data-center-hero.jpg";

export default function GisSolutions() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Map,
      title: "Spatial Analysis",
      description: "Advanced geographic data analysis and visualization capabilities"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate multiple data sources with geographic information"
    },
    {
      icon: Globe,
      title: "Real-time Mapping",
      description: "Dynamic, interactive maps with real-time data updates"
    }
  ];

  const benefits = [
    "Custom map layers and overlays",
    "Asset tracking and management",
    "Route optimization algorithms",
    "Geofencing capabilities",
    "3D terrain visualization",
    "Offline mapping support",
    "Multi-platform deployment",
    "API integration support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="GIS-based Information Systems" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl fade-in">
                GIS-based Information Systems
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground fade-in" style={{animationDelay: "0.1s"}}>
                Harness the power of geographic information systems to visualize, analyze, and interpret spatial data for better decision-making.
              </p>
              <div className="mt-10 flex items-center gap-x-6 fade-in" style={{animationDelay: "0.2s"}}>
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Explore GIS Solutions
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
            <h2 className="text-base font-semibold leading-7 text-primary">Geographic Intelligence</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Transform spatial data into actionable insights
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our GIS solutions combine powerful mapping technology with data analytics
              to help you make location-based decisions with confidence.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-gradient border-border/50 glow-on-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
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
              Comprehensive GIS Capabilities
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
              Ready to leverage geographic intelligence?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Transform your spatial data into powerful insights with our GIS solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started with GIS
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