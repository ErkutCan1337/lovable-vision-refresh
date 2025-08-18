import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-center mb-8">
              Hakkımızda
            </h1>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl leading-8 mb-8">
                2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve entegre çözümler sunarak 
                platform bağımsız bir şekilde çalışmalarına devam etmekteyiz.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Detaylarla 2C</h2>
              <p className="mb-6">
                2C, ülkemiz ekonomisine katkı sağlayan yerli teknolojiler üretebilen, rekabet edilebilir ürünler ve 
                çözümler sunan, müşteri odaklı kaliteli hizmet veren bir teknoloji şirketi olarak faaliyet göstermektedir.
              </p>
              
              <p className="mb-6">
                Uzman kadromuz ile sistem entegrasyon, veri merkezi çözümleri, süper bilgisayar teknolojileri, 
                bilişim güvenliği, sanallaştırma ve felaket kurtarma alanlarında kapsamlı hizmetler sunmaktayız.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-8 mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-4">Misyonumuz</h3>
                <p>
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