import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReferenceSlide {
  image: string;
  title: string;
  description: string;
}

interface ReferencesSliderProps {
  slides: ReferenceSlide[];
  className?: string;
}

export const ReferencesSlider = ({ slides, className }: ReferencesSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Slider Container */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-80 sm:h-96 bg-gradient-card border border-border/50 rounded-2xl overflow-hidden glow-on-hover">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                  {/* Image Container */}
                  <div className="w-full max-w-4xl h-48 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-xl shadow-elegant mb-6">
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 z-20",
          "w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elegant",
          "flex items-center justify-center transition-all duration-300",
          "hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed",
          "border border-border/20"
        )}
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 z-20",
          "w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elegant",
          "flex items-center justify-center transition-all duration-300",
          "hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed",
          "border border-border/20"
        )}
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-primary scale-125 shadow-glow"
                : "bg-border hover:bg-border/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};