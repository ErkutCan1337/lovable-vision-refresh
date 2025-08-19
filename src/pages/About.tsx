import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from "@/components/ImageCarousel";
import teamConsultingImage from "@/assets/team-consulting.jpg";
import officeExteriorImage from "@/assets/office-exterior.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";
import officeBuildingImage from "@/assets/office-building.jpg";
const About = () => {
  const carouselSlides = [{
    image: teamConsultingImage,
    title: "Uzman Danışmanlık",
    description: "15+ yıllık deneyimimizle teknoloji çözümleri sunuyoruz"
  }, {
    image: teamCollaborationImage,
    title: "Takım Çalışması",
    description: "Profesyonel ekibimizle müşteri odaklı hizmet"
  }, {
    image: officeBuildingImage,
    title: "Modern Ofis",
    description: "Ankara merkezli güçlü altyapımız"
  }, {
    image: "/lovable-uploads/c042e8b6-1a7e-45de-9d31-1bed58dacbac.png",
    title: "Teknoloji Merkezi",
    description: "Yenilikçi çözümler geliştirme merkezi"
  }, {
    image: "/lovable-uploads/6f07a378-ac26-46b5-aba8-8d59796b538f.png",
    title: "Information Technology Corporation (USA)",
    description: "Uluslararası teknoloji iş birliği"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6 fade-in">
              Hakkımızda
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12 slide-up text-slate-50">
              2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve entegre çözümler sunarak platform bağımsız bir şekilde çalışmalarına devam etmekteyiz. Firmamız, verimliliğin artırılması, rekabet üstünlüğünün sağlanmasını ve ölçülebilir maliyet kazancının oluşması için müşteri odaklı bir firma olmayı ön planda tutmaktadır. Yenilikçi fikirlerimiz ve pazar-odaklı hizmetlerimiz aracılığıyla daha güvenli ve sağlıklı yaşam için karşılaşılan sorunları çözerek sürdürülebilir bir başarı amaçlıyoruz.
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
                <h2 className="text-3xl font-bold text-foreground">Detaylarla 2C</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  2C, ülkemiz ekonomisine katkı sağlayan yerli teknolojiler üretebilen, rekabet edilebilir ürünler ve 
                  çözümler sunan, müşteri odaklı kaliteli hizmet veren bir teknoloji şirketi olarak faaliyet göstermektedir.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Uzman kadromuz ile sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri, 
                  bilişim güvenliği, sanallaştırma ve felaket kurtarma alanlarında kapsamlı hizmetler sunmaktayız.
                </p>

                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-3">Misyonumuz</h3>
                  <p className="text-foreground leading-relaxed">
                    Müşterilerimizin ihtiyaçlarını net bir şekilde çıkarılması ve bu ihtiyacın karşılanması için en uygun teknolojinin sağlanması
                    Müşteri memnuniyetini sürekliliğinin sağlanması
                    Yüksek kalitede ürün ve hizmetler sunulması
                    Teknoloji alt yapılarının hatasız bir şekilde hazırlanması
                    Global pazarda rekabet edebilir teknolojilerin üretilmesi
                    Bilgi toplumuna dönüşüm sürecinde Türkiye’nin rekabet gücünün ve refah seviyesinin artmasına destek verilmesi şeklindedir
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-4">Neden 2C?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      15+ yıllık sektör deneyimi
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Uzman teknik kadro
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Müşteri odaklı hizmet anlayışı
                    </li>
                    <li className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Yerli teknoloji odaklı çözümler
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
                  <h3 className="text-xl font-semibold text-primary mb-4">Başarı Hikayeleri</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Tamamlanan Proje</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
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
                <h3 className="text-lg font-semibold text-foreground mb-3">Vizyon</h3>
                <p className="text-muted-foreground">
                  Teknoloji alanında öncü ve güvenilir bir marka olmak
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">İnovasyon</h3>
                <p className="text-muted-foreground">
                  Sürekli gelişim ve yenilikçi çözümler
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-xl border border-border/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Güven</h3>
                <p className="text-muted-foreground">
                  Müşteri memnuniyeti odaklı hizmet anlayışı
                </p>
              </div>
            </div>

            {/* Academy-University Partnership Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Akademi-Üniversite İş Birliği</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Türkiye'nin önde gelen üniversiteleri ve araştırma kurumları ile stratejik iş birlikleri gerçekleştiriyoruz.
                </p>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all">
                <div className="max-w-4xl mx-auto">
                  <img 
                    src="/lovable-uploads/1de01bad-b817-4cfc-a93c-f7e8b5ebf769.png" 
                    alt="Akademi-Üniversite İş Birliği - ODTÜ, İTÜ, Galatasaray Üniversitesi, TOBB ETÜ, Atılım Üniversitesi, Antalya Üniversitesi" 
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