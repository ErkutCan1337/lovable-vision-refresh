import { useCallback, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Database, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroDatacenter from "@/assets/hero-datacenter.jpg";
import heroHpc from "@/assets/hero-hpc.jpg";
import heroSecurity from "@/assets/hero-security.jpg";
export function HeroSlider() {
  const {
    t
  } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    dragFree: false,
    containScroll: 'trimSnaps'
  }, [Autoplay({
    delay: 6000,
    stopOnInteraction: false
  })]);
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
  const slides = [{
    image: heroDatacenter,
    titleKey: "home.hero.slide1.title",
    descriptionKey: "home.hero.slide1.description",
    ctaKey: "home.hero.cta",
    link: "/services"
  }, {
    image: heroHpc,
    titleKey: "home.hero.slide2.title",
    descriptionKey: "home.hero.slide2.description",
    ctaKey: "home.hero.cta",
    link: "/services"
  }, {
    image: heroSecurity,
    titleKey: "home.hero.slide3.title",
    descriptionKey: "home.hero.slide3.description",
    ctaKey: "home.hero.cta",
    link: "/services"
  }];
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-none w-full h-full relative">
              {/* Modern Gradient Overlay Background */}
              <div 
                className="absolute inset-0 w-full h-full will-change-transform transition-transform duration-1000 ease-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  transform: `translateY(${scrollY * 0.3}px) scale(1.05)`,
                  filter: 'brightness(0.85) contrast(1.1)'
                }}
              />
              
              {/* Advanced Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
              
              {/* Animated Particles Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="text-center max-w-5xl mx-auto">
                  {/* Modern Glass Card with Gradient Border */}
                  <div className="relative group">
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2rem] opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
                    
                    {/* Main Content Card */}
                    <div className="relative backdrop-blur-2xl bg-background/10 border border-white/10 rounded-[2rem] p-10 md:p-14 lg:p-16 shadow-2xl">
                      {/* Decorative Elements */}
                      <div className="absolute top-6 right-6 text-primary/30">
                        <Sparkles className="w-8 h-8 animate-pulse" />
                      </div>
                      
                      {/* Title with Gradient */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-white mb-8 tracking-tight leading-tight animate-fade-in">
                        <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                          {t(slide.titleKey)}
                        </span>
                      </h1>
                      
                      {/* Description with Better Typography */}
                      <p 
                        className="text-lg md:text-xl lg:text-2xl text-white/75 mb-14 font-light leading-relaxed max-w-3xl mx-auto animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                      >
                        {t(slide.descriptionKey)}
                      </p>
                      
                      {/* Modern CTA Button Group */}
                      <div 
                        className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center"
                        style={{ animationDelay: '0.4s' }}
                      >
                        <Button 
                          size="lg" 
                          className="group relative overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-primary hover:to-secondary text-white border-0 rounded-2xl px-10 py-6 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
                          asChild
                        >
                          <Link to={slide.link} className="flex items-center gap-3">
                            <span className="relative z-10">{t(slide.ctaKey)}</span>
                            <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modern Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>
      
      {/* Modern Dot Navigation with Progress */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className="relative group"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`
              transition-all duration-500 rounded-full overflow-hidden
              ${index === selectedIndex 
                ? 'w-16 h-2 bg-gradient-to-r from-primary/60 to-secondary/60' 
                : 'w-8 h-2 bg-white/30 hover:bg-white/50 hover:w-10'
              }
            `}>
              {index === selectedIndex && (
                <div className="h-full bg-gradient-to-r from-primary to-secondary animate-slide-progress" />
              )}
            </div>
            {index === selectedIndex && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-md -z-10 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}