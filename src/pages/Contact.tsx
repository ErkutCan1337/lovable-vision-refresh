import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Merkez Ofis",
    details: ["Mutlukent Mah. 2037. Cad. No:30", "Çankaya, Ankara, Türkiye"]
  },
  {
    icon: Building2, 
    title: "ArGe Ofisi",
    details: ["Gazi Teknopark B Blok No:19", "Gölbaşı, Ankara, Türkiye"]
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@2cteknoloji.com", "destek@2cteknoloji.com"]
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+90 312 XXX XX XX", "+90 312 XXX XX XX"]
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              İletişim
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Projeleriniz ve teknoloji ihtiyaçlarınız hakkında bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümleri sunmak için hazır.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    Bizimle İletişime Geçin
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Formu doldurarak bize ulaşabilir, projeleriniz hakkında bilgi alabilirsiniz.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Ad</Label>
                        <Input id="firstName" placeholder="Adınız" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Soyad</Label>
                        <Input id="lastName" placeholder="Soyadınız" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="ornek@email.com" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="+90 5XX XXX XX XX" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Şirket</Label>
                      <Input id="company" placeholder="Şirket adınız" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Konu</Label>
                      <Input id="subject" placeholder="Mesajınızın konusu" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Projeniz veya ihtiyacınız hakkında detaylı bilgi veriniz..." 
                        className="mt-1 min-h-[120px]" 
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full">
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <Card key={info.title} className="border-border/50">
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary-foreground" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
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
                  <h3 className="font-semibold text-foreground mb-3">Çalışma Saatleri</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 09:00 - 13:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-2">Acil Destek</h4>
                    <p className="text-sm text-muted-foreground">
                      Kritik sistemler için 7/24 acil destek hizmeti mevcuttur.
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