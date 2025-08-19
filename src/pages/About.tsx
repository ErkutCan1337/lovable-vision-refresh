import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import { useLanguage } from "@/contexts/LanguageContext";
import teamConsultingImage from "@/assets/team-consulting.jpg";
import officeExteriorImage from "@/assets/office-exterior.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import officeBuildingImage from "@/assets/office-building.jpg";

const About = () => {
  const { t } = useLanguage();
  
  const carouselSlides = [{
    image: teamConsultingImage,
    title: t("carousel.expert_consulting.title"),
    description: t("carousel.expert_consulting.description")
  }, {
    image: teamCollaborationImage,
    title: t("carousel.team_work.title"),
    description: t("carousel.team_work.description")
  }, {
    image: officeBuildingImage,
    title: t("carousel.modern_office.title"),
    description: t("carousel.modern_office.description")
  }, {
    image: "/lovable-uploads/c042e8b6-1a7e-45de-9d31-1bed58dacbac.png",
    title: t("carousel.tech_center.title"),
    description: t("carousel.tech_center.description")
  }, {
    image: "/lovable-uploads/6f07a378-ac26-46b5-aba8-8d59796b538f.png",
    title: t("carousel.itc_usa.title"),
    description: t("carousel.itc_usa.description")
  }];
  
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 fade-in">
              {t("about.title")}
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12 slide-up text-slate-50">
              {t("about.hero.description")}
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mb-16">
            <ImageCarousel slides={carouselSlides} className="max-w-4xl mx-auto" />
          </div>
          
          <div className="mx-auto max-w-6xl">
            {/* Content with Visual Enhancement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">{t("about.details.title")}</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  {t("about.details.p1")}
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  {t("about.details.p2")}
                </p>

                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-3">{t("about.mission.title")}</h3>
                  <p className="text-foreground leading-relaxed">
                    {t("about.mission.description")}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("about.why2c.title")}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {t("about.why2c.experience")}
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {t("about.why2c.expert_team")}
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {t("about.why2c.customer_focused")}
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {t("about.why2c.local_tech")}
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("about.success_stories.title")}</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">{t("about.success_stories.projects")}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">{t("about.success_stories.customers")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("about.vision.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.vision.description")}
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("about.innovation.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.innovation.description")}
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{t("about.trust.title")}</h3>
                <p className="text-muted-foreground">
                  {t("about.trust.description")}
                </p>
              </div>
            </div>

            {/* Academy-University Partnership Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.partnership.title")}</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  {t("about.partnership.description")}
                </p>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all">
                <div className="max-w-4xl mx-auto">
                  <img 
                    src="/lovable-uploads/1de01bad-b817-4cfc-a93c-f7e8b5ebf769.png" 
                    alt={t("about.partnership.alt")}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;