import { useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroDatacenter from "@/assets/hero-datacenter.jpg";
import heroHpc from "@/assets/hero-hpc.jpg";
import heroSecurity from "@/assets/hero-security.jpg";

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slides = [
    {
      image: heroDatacenter,
      title: "Veri Merkezi Çözümleri",
      subtitle: "Yeni nesil altyapı teknolojileri ile geleceği inşa ediyoruz",
      description: "Modern veri merkezi çözümleri ile işletmenizin dijital dönüşümünü destekliyoruz.",
      icon: Database,
      cta: "Veri Merkezi Hizmetleri",
      link: "/services"
    },
    {
      image: heroHpc,
      title: "Yüksek Performans Bilişim",
      subtitle: "Süper bilgisayar teknolojileri ile sınırları aşın",
      description: "HPC çözümleri ile karmaşık hesaplamaları hızla gerçekleştirin.",
      icon: Cpu,
      cta: "HPC Çözümleri",
      link: "/services"
    },
    {
      image: heroSecurity,
      title: "Siber Güvenlik",
      subtitle: "Gelişmiş güvenlik çözümleri ile verilerinizi koruyun",
      description: "Kapsamlı siber güvenlik hizmetleri ile dijital varlıklarınızı güvende tutun.",
      icon: Shield,
      cta: "Güvenlik Hizmetleri",
      link: "/services"
    }
  ];

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-8">
                <div className="max-w-7xl w-full">
                  <div className="max-w-3xl">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                        <slide.icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 fade-in">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6 slide-up">
                      {slide.subtitle}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl slide-up">
                      {slide.description}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 slide-up">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground glow-on-hover" 
                        asChild
                      >
                        <Link to={slide.link} className="flex items-center gap-2">
                          {slide.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="border-primary/30 text-foreground hover:bg-primary/10" 
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
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/30 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/60 rounded-full opacity-60 float-animation"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/40 rounded-full opacity-40 float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary/50 rounded-full opacity-50 float-animation" style={{animationDelay: '4s'}}></div>
    </section>
  );
}