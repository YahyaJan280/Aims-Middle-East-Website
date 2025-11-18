import { useEffect, useRef } from "react";
import {
  Eye,
  Target,
  CheckCircle2,
  Waves,
  Sparkles,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

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
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Pattern */}

      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-block animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"></div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 sm:mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className=" bg-clip-text text-primary">Our Purpose</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-4xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-muted-foreground leading-relaxed font-light">
            Like the flowing waters of the{" "}
            <span className="font-semibold text-primary">Abaseen river</span>,
            we bring life, hope, and healing to communities across the Middle
            East
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24">
          {/* Vision Card */}
          <div className="animate-on-scroll  opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 group h-full flex flex-col overflow-hidden">
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>

              <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18  bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <Eye
                        className="w-8 h-8 sm:w-9 sm:h-9 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl sm:text-4xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                      Our Vision
                    </h3>
                    <div className="h-1 w-16 bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-muted-foreground mb-8 font-light">
                  To be the{" "}
                  <span className="font-semibold text-slate-900">
                    leading institution
                  </span>{" "}
                  in providing comprehensive, affordable, and accessible
                  diabetes healthcare across the Middle East, transforming lives
                  through innovative medical care and community empowerment.
                </p>

                <div className="border-t border-red-500 mb-8 "></div>

                {/* Key Points */}
                <div className="space-y-4 mt-auto">
                  {visionPoints.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-transparent group-hover:from-blue-100 group-hover:translate-x-2 transition-all duration-300 border border-blue-100/50"
                        style={{ transitionDelay: `${idx * 75}ms` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent
                            className="w-5 h-5 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-base sm:text-lg text-slate-700 font-medium">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-600/0 to-blue-700/0 group-hover:from-blue-500/5 group-hover:via-blue-600/5 group-hover:to-blue-700/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 group h-full flex flex-col overflow-hidden">
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>

              {/* Floating Icon Background */}

              <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3  transition-all duration-300 shadow-lg">
                      <Target
                        className="w-8 h-8 sm:w-9 sm:h-9 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl sm:text-4xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                      Our Mission
                    </h3>
                    <div className="h-1 w-16 bg-primary  rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-muted-foreground mb-8 font-light">
                  To pool public and private sector resources to enhance
                  accessibility to{" "}
                  <span className="font-semibold text-slate-900">
                    quality diabetes and NCD care
                  </span>{" "}
                  in Khyber Pakhtunkhwa and across Pakistan, while advancing
                  medical research and professional development.
                </p>

                <div className="border-t border-red-500 mb-8"></div>

                {/* Key Points */}
                <div className="space-y-4 mt-auto">
                  {missionPoints.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-transparent group-hover:from-blue-100 group-hover:translate-x-2 transition-all duration-300 border border-blue-100/50"
                        style={{ transitionDelay: `${idx * 75}ms` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent
                            className="w-5 h-5 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                        <span className="text-base sm:text-lg text-slate-700 font-medium">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-600/0 to-blue-700/0 group-hover:from-blue-500/5 group-hover:via-blue-600/5 group-hover:to-blue-700/5 transition-all duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Abaseen Spirit Section */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative bg-primary rounded-3xl shadow-2xl overflow-hidden group">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full opacity-20 -mr-40 -mt-40 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-20 -ml-40 -mb-40 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-[0.02]"></div>

            {/* Wave Pattern */}

            <div className="relative z-10 p-10 sm:p-12 lg:p-16 xl:p-20">
              <div className="max-w-5xl mx-auto text-center">
                {/* Icon */}

                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
                  The Abaseen Spirit
                </h3>

                <div className="h-1 w-24 bg-white/50 rounded-full mx-auto mb-8"></div>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto font-light">
                  Just as the Abaseen river flows through the landscapes of our
                  region, bringing life and sustenance to all it touches,{" "}
                  <span className="font-semibold">
                    AIMS Middle East flows through communities
                  </span>
                  , bringing hope, healing, and transformation. Our mission is
                  as constant and nurturing as these ancient waters, reaching
                  every corner where care is needed most.
                </p>

                {/* Stats or CTA could go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
