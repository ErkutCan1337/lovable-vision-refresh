import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";

const jobOpenings = [
  {
    title: "Java Yazılım Geliştirici",
    type: "Tam Zamanlı",
    location: "Ankara",
    experience: "2-5 Yıl",
    description: "Web tabanlı ve dağıtık mimaride yazılım geliştirme projelerinde çalışacak deneyimli Java geliştiricisi arıyoruz.",
    requirements: [
      "Java teknolojilerinde en az 2 yıl deneyim",
      "Spring Framework bilgisi",
      "Web tabanlı uygulama geliştirme deneyimi",
      "Dağıtık mimari bilgisi",
      "Veritabanı yönetimi deneyimi"
    ]
  },
  {
    title: "Sistem Yöneticisi",
    type: "Tam Zamanlı", 
    location: "Ankara",
    experience: "3-7 Yıl",
    description: "Kurumsal IT altyapısının yönetimi ve sistem entegrasyon projelerinde görev alacak deneyimli sistem yöneticisi.",
    requirements: [
      "Linux/Windows server yönetimi",
      "Veri merkezi altyapısı deneyimi",
      "Ağ yönetimi ve güvenlik",
      "Sanallaştırma teknolojileri",
      "VMware/Hyper-V deneyimi"
    ]
  },
  {
    title: "Bilişim Güvenliği Uzmanı",
    type: "Tam Zamanlı",
    location: "Ankara", 
    experience: "3-6 Yıl",
    description: "Kurumsal güvenlik çözümleri ve siber güvenlik projelerinde çalışacak uzman personel.",
    requirements: [
      "Siber güvenlik alanında deneyim",
      "Güvenlik araçları bilgisi",
      "Risk analizi ve yönetimi",
      "Penetrasyon testleri",
      "Güvenlik sertifikaları tercih edilir"
    ]
  }
];

const benefits = [
  {
    icon: Users,
    title: "Takım Çalışması",
    description: "Deneyimli ve uzman kadro ile birlikte çalışma fırsatı"
  },
  {
    icon: Code,
    title: "Teknoloji Odaklı",
    description: "En güncel teknolojiler ile proje geliştirme imkanı"
  },
  {
    icon: MapPin,
    title: "Merkezi Lokasyon",
    description: "Ankara'da modern ofis ortamında çalışma"
  },
  {
    icon: Clock,
    title: "Esnek Çalışma",
    description: "İş-yaşam dengesi ve esnek çalışma saatleri"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Kariyer Fırsatları
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Aramıza katılacak arkadaşlar, Ankara'da bulunan işyerimizde Java teknolojileri kullanarak, 
              web tabanlı ve dağıtık mimaride yazılım geliştirme projelerinde çalışma imkanı bulacaklar.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Neden 2C Teknoloji?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="text-center border-border/50">
                    <CardContent className="pt-6">
                      <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Job Openings */}
          <div>
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Açık Pozisyonlar</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Card key={job.title} className="card-gradient border-border/50 glow-on-hover">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <Button variant="hero" className="mt-4 sm:mt-0" asChild>
                        <Link to="/contact">Başvuru Yap</Link>
                      </Button>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Gereksinimler:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {req}
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
                Aradığınız pozisyon listede yok mu? Yine de bizimle iletişime geçin!
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">İletişime Geç</Link>
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