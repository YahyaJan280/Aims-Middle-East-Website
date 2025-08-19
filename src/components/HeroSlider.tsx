import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroHealthcare from "@/assets/hero-healthcare.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import heroCompassion from "@/assets/hero-compassion.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroHealthcare,
      title: "AIMS Middle East",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-5xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up"
            style={{ fontFamily: "Gotham HTF" }}
          >
            <span className="block">{slides[currentSlide].title}</span>
            <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {slides[currentSlide].subtitle}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
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

     
    </section>
  );
};

export default HeroSlider;
