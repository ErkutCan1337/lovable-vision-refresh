import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Database } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-glow rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-dark rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl fade-in">
            Teknoloji ile
            <span className="block text-white/90">
              Geleceği Şekillendiriyoruz
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-white/80 max-w-2xl mx-auto slide-up">
            2C olarak müşterilerimize ihtiyacı doğrultusunda değer oluşturmayı ve 
            entegre çözümler sunarak platform bağımsız bir şekilde çalışmalarına devam etmekteyiz.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 slide-up">
            <Button variant="secondary" size="lg" className="glow-on-hover bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Hizmetlerimizi Keşfedin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/about">
                Hakkımızda
              </Link>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto slide-up">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">Güvenlik</h3>
                <p className="text-white/80 text-sm mt-1">Bilişim güvenliği çözümleri</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">Yüksek Performans</h3>
                <p className="text-white/80 text-sm mt-1">Süper bilgisayar çözümleri</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Database className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold">Veri Merkezi</h3>
                <p className="text-white/80 text-sm mt-1">Altyapı çözümleri</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-glow rounded-full opacity-60 float-animation"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary-foreground/30 rounded-full opacity-40 float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary-glow rounded-full opacity-50 float-animation" style={{animationDelay: '4s'}}></div>
    </section>
  );
}