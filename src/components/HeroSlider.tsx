import { useCallback, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Database, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroDatacenter from "@/assets/hero-datacenter.jpg";
import heroHpc from "@/assets/hero-hpc.jpg";
import heroSecurity from "@/assets/hero-security.jpg";

export function HeroSlider() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      dragFree: false,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    {
      image: heroDatacenter,
      titleKey: "home.hero.slide1.title",
      descriptionKey: "home.hero.slide1.description",
      ctaKey: "home.hero.cta",
      link: "/services"
    },
    {
      image: heroHpc,
      titleKey: "home.hero.slide2.title",
      descriptionKey: "home.hero.slide2.description",
      ctaKey: "home.hero.cta",
      link: "/services"
    },
    {
      image: heroSecurity,
      titleKey: "home.hero.slide3.title",
      descriptionKey: "home.hero.slide3.description",
      ctaKey: "home.hero.cta",
      link: "/services"
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-none w-full h-full relative">
              {/* Parallax Background */}
              <div 
                className="absolute inset-0 w-full h-full will-change-transform transition-transform duration-1000 ease-out"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-4xl mx-auto">
                  {/* Glassmorphism Card */}
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight animate-fade-in">
                      {t(slide.titleKey)}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      {t(slide.descriptionKey)}
                    </p>
                    <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                      <Button 
                        size="lg" 
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-full px-12 py-4 text-lg font-light transition-all duration-300 hover:scale-105" 
                        asChild
                      >
                        <Link to={slide.link} className="flex items-center gap-3">
                          {t(slide.ctaKey)}
                          <ArrowRight className="h-5 w-5" />
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
      
      {/* Minimal Navigation Arrows */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:text-white transition-colors" />
      </button>
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:text-white transition-colors" />
      </button>
      
      {/* Minimal Dot Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex 
                ? 'w-12 h-3 bg-white' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}