import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { CompanyStats } from "@/components/CompanyStats";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CompanyStats />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
