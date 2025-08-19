import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReferencesSlider } from "@/components/ReferencesSlider";
import { Building2, Users, Award, Handshake } from "lucide-react";

const References = () => {
  const referenceSlides = [
    {
      image: "/lovable-uploads/fde2526d-5c5b-407c-800a-30d1b8f0f766.png",
      title: "Kamu Kurumları",
      description: "Türkiye'nin önde gelen bakanlık ve kamu kurumlarıyla stratejik ortaklıklar kurarak dijital dönüşüm projelerinde liderlik ediyoruz."
    },
    {
      image: "/lovable-uploads/6d37afee-58c6-467e-9e16-e824f40f3c94.png",
      title: "Üniversite & Akademik Kurumlar",
      description: "Türkiye'nin prestijli üniversiteleriyle akademik işbirliği yaparak eğitim teknolojileri ve araştırma projelerinde aktif rol alıyoruz."
    },
    {
      image: "/lovable-uploads/00c495b0-56d9-4818-8ef6-25ea2c641c8d.png",
      title: "Özel Sektör & Kurumlar",
      description: "Belediyeler, özel kuruluşlar ve sivil toplum organizasyonları ile çeşitli teknoloji çözümleri geliştiriyoruz."
    }
  ];

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
              İş Ortaklarımız ve Referanslarımız
            </h2>
            
            <ReferencesSlider slides={referenceSlides} />
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
          <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
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