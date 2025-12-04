import React, { useEffect, useRef } from "react";
import bgElement from "@/assets/Abaseen-Spirit-BG .png"
import {
  Eye,
  Target,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Users,
  Award,
} from "lucide-react";
import DiamondBgImage from "@/assets/our-purpose-bg.png";

const MissionVision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0", "translate-y-8");
                el.classList.add("opacity-100", "translate-y-0");
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const visionPoints = [
    { text: "Comprehensive Diabetes Care", icon: Award },
    { text: "Community-centered Approach", icon: Users },
    { text: "Medical Excellence", icon: Sparkles },
  ];

  const missionPoints = [
    { text: "Resource Mobilization", icon: TrendingUp },
    { text: "Quality Care Access", icon: CheckCircle2 },
    { text: "Research & Development", icon: Target },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Top-Left Background Image */}
      <img
        src={DiamondBgImage}
        alt=""
        className="absolute top-10 -left-8 w-40 h-20  sm:w-48 sm:h-20 md:w-56 md:h-24 lg:w-64 lg:h-72 opacity-90 pointer-events-none z-0 object-contain animate-float-up"
        style={{ animationDelay: "0s", rotate: "90deg" }}
      />

      {/* Bottom-Right Background Image */}
      <img
        src={DiamondBgImage}
        alt=""
        className="absolute bottom-10 -right-16 lg:-right-4 w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-36 md:-right-24 lg:w-64 lg:h-44 opacity-90 pointer-events-none z-0 object-contain animate-float-down"
        style={{ animationDelay: "1s", rotate: "90deg" }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-primary">Our Purpose</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg  lg:text-gray-700 max-w-2xl mx-auto animate-on-scroll -mt-1 opacity-0  transition-all duration-700 leading-relaxed font-medium lg:text-muted-foreground">
            Like the flowing waters of the{" "}
            <span className="font-semibold text-primary">Abaseen river</span>,
            we bring life, <br /> hope, and healing to communities across the
            Middle East
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Vision Card */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 h-full">
              <div className="p-5 sm:p-6 md:p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    Our Vision
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-left text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                  To be the{" "}
                  <span className="font-semibold text-primary">
                    leading institution
                  </span>{" "}
                  in providing comprehensive, affordable, and accessible
                  diabetes healthcare across the Middle East, transforming lives
                  through innovative medical care and community empowerment.
                </p>

                <div className="border-t border-slate-200 my-4"></div>

                {/* Key Points */}
                <div className="space-y-2.5">
                  {visionPoints.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent
                            className="w-4 h-4 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-sm  text-gray-700 text-muted-foreground leading-snug">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 h-full">
              <div className="p-5 sm:p-6 md:p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    Our Mission
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-left text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                  To pool public and private sector resources to enhance
                  accessibility to{" "}
                  <span className="font-semibold text-primary">
                    quality diabetes and NCD care
                  </span>{" "}
                  in Khyber Pakhtunkhwa and across Pakistan, while advancing
                  medical research and professional development.
                </p>

                <div className="border-t border-slate-200 my-4"></div>

                {/* Key Points */}
                <div className="space-y-2.5">
                  {missionPoints.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent
                            className="w-4 h-4 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <span className="text-sm  text-gray-700 text-muted-foreground leading-snug">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Abaseen Spirit Section */}

        <div className="animate-on-scroll opacity-0  translate-y-9 transition-all duration-700 relative rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-3xl bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgElement})`,
              backgroundSize: "100% 100%",
            }}
          />
          {/* Content */}
          <div
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/Abaseen-Spirit-BG.png)" }}
          >
            <div className="relative z-10 max-w-[1200px] mx-auto text-center px-2 sm:px-8 md:px-10 lg:px-12 sm:py-20 py-6 md:py-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                The Abaseen Spirit
              </h3>

              <div className="h-1 w-16 bg-white rounded-full mx-auto mb-3 -mt-3"></div>

              <p className="text-sm sm:text-base text-center text-white mb-6 leading-relaxed max-w-3xl mx-auto">
                Just as the Abaseen river flows through the landscapes of our
                region, bringing life and sustenance to all it touches,{" "}
                <span className="font-bold text-white">
                  AIMS Middle East flows through communities
                </span>
                , bringing hope, healing, and transformation. Our mission is as
                constant and nurturing as these ancient waters, reaching every
                corner where care is needed most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
