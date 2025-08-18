import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Handshake } from "lucide-react";

const References = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Referanslarımız
            </h1>
            <p className="text-lg leading-8 text-muted-foreground">
              Güvenilir teknoloji partneri olarak birçok kurumsal müşteriyle uzun vadeli işbirlikleri gerçekleştiriyoruz. 
              İşte bizimle çalışan değerli kurumlarımız.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Kurumsal Müşteri</div>
                <div className="text-sm text-muted-foreground">Çeşitli sektörlerden</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.1s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">200+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Başarılı Proje</div>
                <div className="text-sm text-muted-foreground">Tamamlanan işler</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.2s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <div className="text-lg font-semibold text-foreground mb-1">Yıl Deneyim</div>
                <div className="text-sm text-muted-foreground">Sektörde tecrübe</div>
              </div>
              
              <div className="text-center fade-in" style={{animationDelay: '0.3s'}}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mb-4">
                  <Handshake className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">%98</div>
                <div className="text-lg font-semibold text-foreground mb-1">Müşteri Memnuniyeti</div>
                <div className="text-sm text-muted-foreground">Kaliteli hizmet</div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              İş Ortaklarımız
            </h2>
            
            {/* University and Academic Partners */}
            <Card className="card-gradient border-border/50 mb-8 glow-on-hover">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Üniversite & Akademik Kurumlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-8 mb-6">
                  <img 
                    src="/lovable-uploads/f0bf5316-e75c-41f1-9aa3-0b5b1ce6b1c7.png" 
                    alt="University and Academic Partners" 
                    className="w-full h-auto max-h-32 object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Gaziantep Üniversitesi</Badge>
                  <Badge variant="secondary">Gaziantep Sanayi Odası</Badge>
                  <Badge variant="secondary">TİTAN</Badge>
                  <Badge variant="secondary">SMQT</Badge>
                  <Badge variant="secondary">Çankırı Karatekin Üniversitesi</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Akademik kurumlarla işbirliği yaparak eğitim ve araştırma projelerinde teknoloji altyapısı desteği sağlıyoruz.
                </p>
              </CardContent>
            </Card>

            {/* Government and Public Institutions */}
            <Card className="card-gradient border-border/50 glow-on-hover">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Kamu Kurumları & Uluslararası Organizasyonlar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-8 mb-6">
                  <img 
                    src="/lovable-uploads/95d53cb6-8d9c-4673-bb14-e44a0abde0e0.png" 
                    alt="Government and International Organization Partners" 
                    className="w-full h-auto max-h-32 object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">T.C. Aile ve Sosyal Politikalar Bakanlığı</Badge>
                  <Badge variant="secondary">T.C. Orman ve Su İşleri Bakanlığı</Badge>
                  <Badge variant="secondary">Türk Hava Kuvvetleri</Badge>
                  <Badge variant="secondary">World Health Organization</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Kamu kurumları ve uluslararası organizasyonlarla stratejik ortaklıklar kurarak büyük ölçekli projeler gerçekleştiriyoruz.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sectors We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Eğitim", "Savunma", "Sağlık", "Kamu", "Finans", "Enerji",
                "Telekomünikasyon", "Otomotiv", "İmalat", "Lojistik", "Turizm", "Tarım"
              ].map((sector, index) => (
                <div 
                  key={sector} 
                  className="bg-gradient-card rounded-lg p-4 text-center border border-border/50 glow-on-hover fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <span className="text-sm font-medium text-foreground">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Bizimle Çalışmak İster misiniz?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Teknoloji projelerinizde güvenilir iş ortağı arıyorsanız, uzman ekibimizle 
              size özel çözümler geliştirebiliriz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition-colors"
              >
                İrtibata Geçin
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-lg border border-white/20 text-primary-foreground px-8 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Hizmetlerimizi İnceleyin
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