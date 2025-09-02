import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Package, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import procurementHero from "@/assets/procurement-hero.jpg";

const Procurement = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Package,
      title: "Asset Lifecycle Management",
      description: "Complete tracking and management of assets from procurement to disposal"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Advanced analytics and reporting for better procurement decisions"
    },
    {
      icon: Shield,
      title: "Compliance Tracking",
      description: "Ensure compliance with procurement policies and regulations"
    }
  ];

  const benefits = [
    "Streamlined procurement processes",
    "Real-time asset tracking and monitoring",
    "Automated purchase order management",
    "Vendor performance analytics",
    "Budget control and forecasting",
    "Integration with existing ERP systems",
    "Mobile access for field teams",
    "Comprehensive audit trails"
  ];

  const modules = [
    {
      title: "Purchase Management",
      description: "Automate requisitions, approvals, and purchase orders",
      features: ["Electronic requisitions", "Multi-level approvals", "PO generation", "Budget validation"]
    },
    {
      title: "Vendor Management",
      description: "Manage vendor relationships and performance",
      features: ["Vendor database", "Performance tracking", "Contract management", "RFQ/RFP tools"]
    },
    {
      title: "Asset Tracking",
      description: "Complete visibility of all organizational assets",
      features: ["Barcode/RFID tracking", "Maintenance scheduling", "Depreciation tracking", "Location management"]
    },
    {
      title: "Inventory Control",
      description: "Optimize inventory levels and reduce costs",
      features: ["Stock level monitoring", "Reorder automation", "Warehouse management", "ABC analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={procurementHero} 
            alt="Procurement and Asset Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl fade-in">
                {t("products.procurement.title")}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground fade-in" style={{animationDelay: "0.1s"}}>
                {t("products.procurement.description")}
              </p>
              <div className="mt-10 flex items-center gap-x-6 fade-in" style={{animationDelay: "0.2s"}}>
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Complete Procurement & Asset Management Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your procurement processes and gain complete visibility over your assets with our comprehensive management platform
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-accent/50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Comprehensive Modules</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {modules.map((module, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              asChild
              className="group"
            >
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Procurement;