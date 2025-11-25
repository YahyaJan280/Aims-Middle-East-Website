import React, { useState, useEffect } from "react";

// Sample images - replace with your actual imports
import Hero1 from "@/assets/Flowing-Care-Image (1).png";
import Hero2 from "@/assets/AIMS-Middle-East.png";
import Hero3 from "@/assets/Building-a-Future.png";
import HeartsBackgroundImage from "@/assets/Heart-element (1).png";

// ------------ SLIDES DATA ------------------
const slides = [
  {
    title: "Flowing Care\nTo Those In Need",
    text: "Empowering healthcare professionals and transforming lives.",
    image: Hero1,
  },
  {
    title: "AIMS Middle East Strength in Care",
    text: "Leading Social welfare diabetes healthcare organization serving globally.",
    image: Hero2,
  },
  {
    title: "Building a Future of Accessible Care",
    text: "Empowering healthcare professionals and transforming lives.",
    image: Hero3,
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <>
      <style>{`
        @keyframes floatHearts {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(-30px) translateX(-10px) scale(1.1);
          }
          75% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInImage {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: fadeInSlide 0.8s ease-out forwards;
        }

        .animate-image-in {
          animation: fadeInImage 0.8s ease-out forwards;
        }
      `}</style>

      <section className="relative w-screen h-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-[#0553a0] via-[#055baa] to-[#0d7ed6] overflow-hidden">
        
        {/* ANIMATED HEARTS BACKGROUND - Right Side */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[45%] lg:w-[30%]  z-[1] pointer-events-none flex items-center justify-end">
          <img 
            src={HeartsBackgroundImage} 
            alt="" 
            className="w-full h-full object-cover opacity-95"
            style={{
              animation: 'floatHearts 15s ease-in-out infinite',
              objectPosition: 'right center',
            }}
          />
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#055baa]/80 via-[#055baa]/40 to-transparent z-[2]" />

        {/* MAIN CONTENT */}
        <div className="relative z-[5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* LEFT: Text Content */}
            <div className="text-white space-y-4 sm:space-y-6 animate-slide-in text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight whitespace-pre-line text-left">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-xl leading-relaxed text-left">
                {slide.text}
              </p>

              <div className="flex justify-start">
                <button className="bg-white text-[#055baa] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:bg-white/95 hover:scale-105 hover:shadow-2xl shadow-xl text-base sm:text-lg mt-2 sm:mt-4">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT: Slider Image */}
            <div className="relative flex justify-center lg:justify-end animate-image-in">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <img
                  key={index}
                  src={slide.image}
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-cover transition-all duration-700"
                  alt="Hero Slide"
                />
              </div>
            </div>
          </div>
        </div>

       


      </section>
    </>
  );
};

export default HeroSection;