import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselSlide {
  image: string;
  title: string;
  description: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  className?: string;
  autoplay?: boolean;
}

export function ImageCarousel({ slides, className = "", autoplay = true }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplay ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`relative ${className}`}>
      <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full relative">
              <div className="relative h-80 lg:h-96">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{slide.title}</h3>
                  <p className="text-muted-foreground">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 hover:bg-background/90 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 hover:bg-background/90 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>
    </div>
  );
}