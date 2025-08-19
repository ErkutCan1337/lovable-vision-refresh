import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ServicesOverview } from "@/components/ServicesOverview";
import { CompanyStats } from "@/components/CompanyStats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <CompanyStats />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
