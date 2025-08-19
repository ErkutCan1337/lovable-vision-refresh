import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import developersWorkingImage from "@/assets/developers-working.jpg";
import careerGrowthImage from "@/assets/career-growth.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import officeBuildingImage from "@/assets/office-building.jpg";

const Careers = () => {
  const { t } = useLanguage();

  const jobOpenings = [
    {
      titleKey: "careers.jobs.java_dev.title",
      typeKey: "careers.job_type.full_time",
      locationKey: "careers.location.ankara",
      experienceKey: "careers.experience.2_5",
      descriptionKey: "careers.jobs.java_dev.description",
      requirements: [
        "careers.jobs.java_dev.req1",
        "careers.jobs.java_dev.req2",
        "careers.jobs.java_dev.req3", 
        "careers.jobs.java_dev.req4",
        "careers.jobs.java_dev.req5"
      ]
    },
    {
      titleKey: "careers.jobs.sysadmin.title",
      typeKey: "careers.job_type.full_time",
      locationKey: "careers.location.ankara",
      experienceKey: "careers.experience.3_7",
      descriptionKey: "careers.jobs.sysadmin.description",
      requirements: [
        "careers.jobs.sysadmin.req1",
        "careers.jobs.sysadmin.req2",
        "careers.jobs.sysadmin.req3",
        "careers.jobs.sysadmin.req4",
        "careers.jobs.sysadmin.req5"
      ]
    },
    {
      titleKey: "careers.jobs.security.title",
      typeKey: "careers.job_type.full_time",
      locationKey: "careers.location.ankara",
      experienceKey: "careers.experience.3_6",
      descriptionKey: "careers.jobs.security.description",
      requirements: [
        "careers.jobs.security.req1",
        "careers.jobs.security.req2",
        "careers.jobs.security.req3",
        "careers.jobs.security.req4",
        "careers.jobs.security.req5"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      titleKey: "careers.growth.title",
      descriptionKey: "careers.growth.description"
    },
    {
      icon: Code,
      titleKey: "careers.innovation.title",
      descriptionKey: "careers.innovation.description"
    },
    {
      icon: MapPin,
      titleKey: "careers.team.title",
      descriptionKey: "careers.team.description"
    },
    {
      icon: Clock,
      titleKey: "careers.balance.title",
      descriptionKey: "careers.balance.description"
    }
  ];

  const carouselSlides = [
    {
      image: developersWorkingImage,
      title: t("careers.carousel.development.title"),
      description: t("careers.carousel.development.description")
    },
    {
      image: careerGrowthImage,
      title: t("careers.carousel.growth.title"),
      description: t("careers.carousel.growth.description")
    },
    {
      image: teamCollaborationImage,
      title: t("careers.carousel.teamwork.title"),
      description: t("careers.carousel.teamwork.description")
    },
    {
      image: officeBuildingImage,
      title: t("careers.carousel.office.title"),
      description: t("careers.carousel.office.description")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 fade-in">
              {t("careers.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12 slide-up">
              {t("careers.subtitle")}
            </p>
          </div>

          {/* Careers Carousel */}
          <div className="mb-16">
            <ImageCarousel slides={carouselSlides} className="max-w-5xl mx-auto" />
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">{t("careers.why_join.title")}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                    <Card key={benefit.titleKey} className="text-center border-border/50 bg-gradient-card glow-on-hover">
                      <CardContent className="pt-8 pb-6">
                        <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-3 text-lg">{t(benefit.titleKey)}</h3>
                        <p className="text-muted-foreground">{t(benefit.descriptionKey)}</p>
                      </CardContent>
                    </Card>
                );
              })}
            </div>
          </div>

          {/* Job Openings */}
          <div>
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">{t("careers.open_positions")}</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={job.titleKey} className="card-gradient border-border/50 glow-on-hover">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground mb-2">
                          {t(job.titleKey)}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {t(job.typeKey)}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {t(job.locationKey)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {t(job.experienceKey)}
                          </div>
                        </div>
                      </div>
                      <Button variant="hero" className="mt-4 sm:mt-0" asChild>
                        <Link to="/contact">{t("careers.apply_now")}</Link>
                      </Button>
                    </div>
                        <CardDescription className="text-muted-foreground text-base leading-relaxed">
                          {t(job.descriptionKey)}
                        </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">{t("careers.requirements")}</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {t(req)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                {t("careers.contact_cta")}
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">{t("careers.contact_button")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;