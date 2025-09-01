import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contact.office_main",
      details: ["Mutlukent Mah. 2037. Cad. No:30", "Çankaya, Ankara, Türkiye"]
    },
    {
      icon: Building2, 
      titleKey: "contact.office_rnd",
      details: ["Gazi Teknopark B Blok No:19", "Gölbaşı, Ankara, Türkiye"]
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      details: ["info@2cteknoloji.com", "destek@2cteknoloji.com"]
    },
    {
      icon: Phone,
      titleKey: "contact.phone",
      details: ["+90 (312) 440 47 47", "+1 312 625 21 17"]
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {t("contact.get_in_touch")}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {t("contact.form_description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t("contact.form.first_name")}</Label>
                        <Input id="firstName" placeholder={t("contact.form.first_name_placeholder")} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t("contact.form.last_name")}</Label>
                        <Input id="lastName" placeholder={t("contact.form.last_name_placeholder")} className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                      <Input id="email" type="email" placeholder={t("contact.form.email_example")} className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                      <Input id="phone" placeholder={t("contact.form.phone_placeholder")} className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">{t("contact.form.company")}</Label>
                      <Input id="company" placeholder={t("contact.form.company_placeholder")} className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                      <Input id="subject" placeholder={t("contact.form.subject_placeholder_detailed")} className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">{t("contact.form.message")}</Label>
                      <Textarea 
                        id="message" 
                        placeholder={t("contact.form.message_placeholder_detailed")} 
                        className="mt-1 min-h-[120px]" 
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full">
                      {t("contact.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">{t("contact.info_title")}</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <Card key={info.titleKey} className="border-border/50">
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary-foreground" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">{t(info.titleKey)}</h3>
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <Card className="border-border/50 bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">{t("contact.working_hours")}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{t("contact.working_hours.weekdays")}</p>
                    <p>{t("contact.working_hours.saturday")}</p>
                    <p>{t("contact.working_hours.sunday")}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-2">{t("contact.emergency_support")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("contact.emergency_description")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;