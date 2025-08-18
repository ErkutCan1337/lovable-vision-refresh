import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teamWorkingImage from "@/assets/team-working.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Image Section */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img 
              src={teamWorkingImage} 
              alt="2C Teknoloji ekibi çalışırken" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-center">
                Hakkımızda
              </h1>
            </div>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-xl leading-8 text-foreground mb-8">
                2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve entegre çözümler sunarak 
                platform bağımsız bir şekilde çalışmalarına devam etmekteyiz.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Detaylarla 2C</h2>
              <p className="mb-6 text-foreground">
                2C, ülkemiz ekonomisine katkı sağlayan yerli teknolojiler üretebilen, rekabet edilebilir ürünler ve 
                çözümler sunan, müşteri odaklı kaliteli hizmet veren bir teknoloji şirketi olarak faaliyet göstermektedir.
              </p>
              
              <p className="mb-6 text-foreground">
                Uzman kadromuz ile sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri, 
                bilişim güvenliği, sanallaştırma ve felaket kurtarma alanlarında kapsamlı hizmetler sunmaktayız.
              </p>
              
              <div className="bg-gradient-card rounded-lg p-8 mt-12 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">Misyonumuz</h3>
                <p className="text-foreground">
                  Teknoloji alanında yenilikçi çözümler geliştirerek müşterilerimizin dijital dönüşüm süreçlerinde 
                  güvenilir iş ortağı olmak ve yerli teknoloji ekosisteminin gelişimine katkıda bulunmak.
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