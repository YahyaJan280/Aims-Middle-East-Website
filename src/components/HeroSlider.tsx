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
        "Leading social welfare diabetes healthcare organization serving globally",
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
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="
        relative 
        w-screen left-1/2 right-1/2 -ml-[50vw] xl:mt-12 mt-8 md:mt-12 -mr-[50vw] 
        h-[calc(100vh-80px)]
        overflow-hidden flex items-center
        bg-black
      "
    >
      {/* Background Slider */}
      <div className="absolute inset-0 ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
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
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 text-center max-w-6xl mx-auto">
        <h1 className="font-roboto font-bold text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-white leading-tight">
          {slides[currentSlide].title}
        </h1>

        <h2 className="font-roboto text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-white mt-2">
          {slides[currentSlide].subtitle}
        </h2>

        <p className="font-roboto text-base sm:text-lg md:text-2xl text-white mt-6 max-w-3xl mx-auto">
          {slides[currentSlide].description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            variant="gradient-outline"
            size="lg"
            onClick={() => scrollToSection("mission")}
            className="text-white border-white hover:bg-white hover:text-white transition"
          >
            Our Mission
          </Button>

          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-[#ea1e26] text-white hover:bg-white hover:text-secondary transition"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
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
