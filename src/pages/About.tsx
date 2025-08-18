import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teamConsultingImage from "@/assets/team-consulting.jpg";
import officeExteriorImage from "@/assets/office-exterior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Image Section */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img 
              src={teamConsultingImage} 
              alt="2C Teknoloji ekibi danışmanlık hizmeti verirken" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                  Hakkımızda
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  15+ yıllık deneyimimizle teknoloji çözümleri sunuyoruz
                </p>
              </div>
            </div>
          </div>
          
          <div className="mx-auto max-w-6xl">
            {/* Content with Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="prose prose-lg">
                <p className="text-xl leading-8 text-foreground mb-8">
                  2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve entegre çözümler sunarak 
                  platform bağımsız bir şekilde çalışmalarına devam etmekteyiz.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-6">Detaylarla 2C</h2>
                <p className="mb-6 text-foreground leading-relaxed">
                  2C, ülkemiz ekonomisine katkı sağlayan yerli teknolojiler üretebilen, rekabet edilebilir ürünler ve 
                  çözümler sunan, müşteri odaklı kaliteli hizmet veren bir teknoloji şirketi olarak faaliyet göstermektedir.
                </p>
                
                <p className="mb-6 text-foreground leading-relaxed">
                  Uzman kadromuz ile sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri, 
                  bilişim güvenliği, sanallaştırma ve felaket kurtarma alanlarında kapsamlı hizmetler sunmaktayız.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={officeExteriorImage} 
                    alt="2C Teknoloji ofis binası" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">Modern Ofis Merkezi</h3>
                      <p className="text-sm text-white/90">Ankara'da merkez ofisimiz</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-card rounded-xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Misyonumuz</h3>
                  <p className="text-foreground leading-relaxed">
                    Teknoloji alanında yenilikçi çözümler geliştirerek müşterilerimizin dijital dönüşüm süreçlerinde 
                    güvenilir iş ortağı olmak ve yerli teknoloji ekosisteminin gelişimine katkıda bulunmak.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Vizyon</h3>
                <p className="text-muted-foreground text-sm">
                  Teknoloji alanında öncü ve güvenilir bir marka olmak
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">İnovasyon</h3>
                <p className="text-muted-foreground text-sm">
                  Sürekli gelişim ve yenilikçi çözümler
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-card rounded-xl border border-border/50">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Güven</h3>
                <p className="text-muted-foreground text-sm">
                  Müşteri memnuniyeti odaklı hizmet anlayışı
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;