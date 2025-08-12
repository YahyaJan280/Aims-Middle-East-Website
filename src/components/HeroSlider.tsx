import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroHealthcare from "@/assets/hero-healthcare.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroCompassion from "@/assets/hero-compassion.jpg";
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroHealthcare,
      title: "Welcome to AIMS Middle East",
      subtitle: "Strength in Care",
      description:
        "Leading comprehensive diabetes healthcare across the Middle East",
    },
    {
      image: heroCommunity,
      title: "Flowing Care",
      subtitle: "To Those in Need",
      description:
        "Like the Abaseen river, bringing life and hope to communities",
    },
    {
      image: heroCompassion,
      title: "Building a Future",
      subtitle: "of Accessible Care",
      description: "Empowering healthcare professionals and transforming lives",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up"
            style={{ fontFamily: "Gotham HTF" }}
          >
            <span className="block">{slides[currentSlide].title}</span>
            <span className="block text-white md:text-7xl lg:text-7xl mt-2 text-6xl text-stone-50">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="paragraph-text text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
            <Button
              variant="gradient-outline"
              size="lg"
              onClick={() => scrollToSection("mission")}
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Our Mission
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-white bg-[#ea1e26] hover:bg-white hover:text-secondary transition-colors duration-300"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronLeft
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300 group"
      >
        <ChevronRight
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSlider;
