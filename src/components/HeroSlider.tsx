import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, Shield, Cpu, Database, Building2, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Import hero images
import heroDatacenter from "@/assets/hero-datacenter.jpg";
import heroHpc from "@/assets/hero-hpc.jpg";
import heroSecurity from "@/assets/hero-security.jpg";

const slides = [
  {
    id: 1,
    image: heroDatacenter,
    title: "Veri Merkezi Çözümleri",
    subtitle: "Modern veri merkezi altyapıları ile işletmenizin dijital dönüşümünü destekliyoruz",
    description: "Güvenilir, ölçeklenebilir ve yüksek performanslı veri merkezi çözümleri",
    icon: Database,
    link: "/services",
    buttonText: "Çözümlerimizi Keşfedin"
  },
  {
    id: 2,
    image: heroHpc,
    title: "Süper Bilgisayar Teknolojileri",
    subtitle: "Yüksek performanslı bilgi işlem çözümleri ile karmaşık problemlere çözüm",
    description: "HPC kümeleri ve süper bilgisayar sistemleri ile araştırma ve geliştirme projelerinizi güçlendirin",
    icon: Cpu,
    link: "/services",
    buttonText: "HPC Çözümlerini İncele"
  },
  {
    id: 3,
    image: heroSecurity,
    title: "Siber Güvenlik Çözümleri",
    subtitle: "Kapsamlı güvenlik çözümleri ile dijital varlıklarınızı koruyun",
    description: "İleri teknoloji güvenlik sistemleri ve 7/24 izleme hizmetleri",
    icon: Shield,
    link: "/services",
    buttonText: "Güvenlik Çözümlerini Gör"
  }
];

export function HeroSlider() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[85vh] min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                      {/* Icon */}
                      <div className="mb-6 inline-flex">
                        <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary/30">
                          <slide.icon className="h-8 w-8 text-primary-glow" />
                        </div>
                      </div>

                      {/* Title */}
                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 fade-in">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xl leading-8 text-white/90 mb-4 max-w-2xl slide-up">
                        {slide.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-lg leading-7 text-white/80 mb-8 max-w-2xl slide-up">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 slide-up">
                        <Button 
                          variant="secondary" 
                          size="lg" 
                          className="glow-on-hover bg-primary hover:bg-primary-dark text-white border-0" 
                          asChild
                        >
                          <Link to={slide.link} className="flex items-center gap-2">
                            {slide.buttonText}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm" 
                          asChild
                        >
                          <Link to="/about">
                            Hakkımızda
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Stats */}
                <div className="absolute bottom-8 left-0 right-0 z-10">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <Building2 className="h-8 w-8 text-primary-glow" />
                        <div>
                          <div className="text-white font-semibold text-lg">15+</div>
                          <div className="text-white/80 text-sm">Yıl Deneyim</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <Users className="h-8 w-8 text-primary-glow" />
                        <div>
                          <div className="text-white font-semibold text-lg">100+</div>
                          <div className="text-white/80 text-sm">Mutlu Müşteri</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <Globe className="h-8 w-8 text-primary-glow" />
                        <div>
                          <div className="text-white font-semibold text-lg">24/7</div>
                          <div className="text-white/80 text-sm">Destek</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary" />
        <CarouselNext className="right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary" />
      </Carousel>
    </section>
  );
}