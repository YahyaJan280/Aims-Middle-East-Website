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
    text: "Empowering healthcare professionals\nand transforming lives.",
    image: Hero1,
  },
  {
    title: "AIMS Middle East\nStrength in Care",
    text: "Leading Social welfare diabetes\nhealthcare organization serving globally.",
    image: Hero2,
  },
  {
    title: "Building a Future of\nAccessible Care",
    text: "Empowering healthcare professionals\nand transforming lives.",
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

        @keyframes moveRightLeft {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }

        .animate-slide-in {
          animation: fadeInSlide 0.8s ease-out forwards;
        }

        .animate-image-in {
          animation: fadeInImage 0.8s ease-out forwards, moveRightLeft 4s ease-in-out infinite 0.8s;
        }

        /* Ensure proper alignment on all screens */
        @media (max-width: 1024px) {
          .hero-content {
            text-align: center;
          }
        }
      `}</style>

      <section className="relative w-screen min-h-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-[#0553a0] via-[#055baa] to-[#0d7ed6] overflow-hidden">
        {/* ANIMATED HEARTS BACKGROUND - Right Side */}
        <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[50%] md:w-[45%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] z-[1] pointer-events-none flex items-center justify-end">
          <img
            src={HeartsBackgroundImage}
            alt=""
            className="w-full h-full object-contain opacity-90"
            style={{
              animation: "floatHearts 15s ease-in-out infinite",
              objectPosition: "right center",
            }}
          />
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#055baa]/85 via-[#055baa]/50 to-transparent z-[2]" />

        {/* MAIN CONTENT */}
        <div className="relative z-[5] w-full min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-20 sm:py-24 md:py-28 lg:py-16">
            <div className="grid grid-cols-1 max-w-[1330px] lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center justify-items-start">
              {/* LEFT: Text Content */}
              <div className="text-white space-y-1  sm:space-y-3 ml-2 lg:ml-5 md:space-y-4 lg:space-y-0 animate-slide-in w-full max-w-xl lg:max-w-none text-left order-1">
                <h1
                  className="font-bold leading-tight text-xl lg:text-4xl whitespace-pre-line"
                  style={{ fontSize: "40px" }}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-white/95 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: "16px" }}
                >
                  {slide.text}
                </p>

                <div className="pt-2 sm:pt-3 md:pt-4 flex justify-left lg:justify-start">
                  <a
                    href="https://dubaihumanitarian.ae/member/aims-middle-east/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#055baa] font-semibold 
                       px-4 sm:px-5 md:px-5 
                       py-2 sm:py-2.5 
                       rounded-lg 
                       transition-all hover:bg-[#00adee] hover:text-white hover:scale-105 hover:shadow-xl 
                       shadow-md 
                       text-xs sm:text-sm md:text-sm"
                      >
                    Learn More
                  </a>
                </div>
              </div>

              {/* RIGHT: Slider Image */}
              <div className="relative flex justify-center lg:justify-end animate-image-in w-full order-2">
                <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <img
                    key={index}
                    src={slide.image}
                    className="w-full h-auto object-cover rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-2xl transition-all duration-700"
                    alt="Hero Slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
