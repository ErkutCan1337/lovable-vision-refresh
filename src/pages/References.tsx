import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Users, Award, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const References = () => {
  const { t } = useLanguage();
  
  const partnerLogos = [
    "/lovable-uploads/fde2526d-5c5b-407c-800a-30d1b8f0f766.png",
    "/lovable-uploads/6d37afee-58c6-467e-9e16-e824f40f3c94.png",
    "/lovable-uploads/00c495b0-56d9-4818-8ef6-25ea2c641c8d.png",
    "/lovable-uploads/95d53cb6-8d9c-4673-bb14-e44a0abde0e0.png",
    "/lovable-uploads/bd2f2332-ad41-4c85-828f-28da412f9907.png",
    "/lovable-uploads/c042e8b6-1a7e-45de-9d31-1bed58dacbac.png"
  ];

  const sectors = [
    "references.sectors.education",
    "references.sectors.defense", 
    "references.sectors.health",
    "references.sectors.public",
    "references.sectors.finance",
    "references.sectors.energy",
    "references.sectors.telecom",
    "references.sectors.automotive",
    "references.sectors.manufacturing",
    "references.sectors.logistics",
    "references.sectors.tourism",
    "references.sectors.agriculture"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section with Animated Partner Logos */}
          <div className="relative mb-20">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                {t("references.title")}
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                {t("references.subtitle")}
              </p>
            </div>
            
            {/* Animated Logo Carousel */}
            <div className="relative overflow-hidden py-8">
              <div className="flex animate-scroll gap-8">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 h-24 bg-white/95 rounded-xl p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                <div className="text-lg font-semibold text-foreground mb-1">{t("references.stats.clients")}</div>
                <div className="text-sm text-muted-foreground">{t("references.stats.clients_desc")}</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.1s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">200+</div>
                <div className="text-lg font-semibold text-foreground mb-1">{t("references.stats.projects")}</div>
                <div className="text-sm text-muted-foreground">{t("references.stats.projects_desc")}</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <div className="text-lg font-semibold text-foreground mb-1">{t("references.stats.experience")}</div>
                <div className="text-sm text-muted-foreground">{t("references.stats.experience_desc")}</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.3s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Handshake className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">%98</div>
                <div className="text-lg font-semibold text-foreground mb-1">{t("references.stats.satisfaction")}</div>
                <div className="text-sm text-muted-foreground">{t("references.stats.satisfaction_desc")}</div>
              </div>
            </div>
          </div>

          {/* Sectors We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t("references.sectors_title")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {sectors.map((sectorKey, index) => (
                <div 
                  key={sectorKey} 
                  className="bg-gradient-card rounded-lg p-4 text-center border border-border/50 glow-on-hover fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <span className="text-sm font-medium text-foreground">{t(sectorKey)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-background rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("references.cta.title")}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {t("references.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors"
              >
                {t("references.cta.contact")}
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {t("references.cta.services")}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default References;