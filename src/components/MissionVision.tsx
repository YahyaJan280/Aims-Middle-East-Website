import { useEffect, useRef } from "react";
import visionIcon from "@/assets/Vision.svg";
import missionIcon from "@/assets/Mission.svg";
import arrow from "@/assets/Arrow.svg";

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
                el.classList.remove("opacity-0");
                el.classList.add("animate-slide-up");
              }, index * 200);
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

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-on-scroll opacity-0">
            <span className="gradient-text font-roboto">Our Purpose</span>
          </h2>
          <p className="font-roboto text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 animate-on-scroll opacity-0">
            Like the flowing waters of the Abaseen river, we bring life, hope,
            and healing to communities across the Middle East
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 items-stretch">
          {/* Vision Card */}
          <div className="animate-on-scroll opacity-0">
            <div className="h-full p-6 sm:p-8 lg:p-10 bg-muted/30 rounded-2xl hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <img src={visionIcon} alt="" className="h-10 sm:h-12 flex-shrink-0" />
                <h3 className="font-roboto text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  Our Vision
                </h3>
              </div>
              <p className="font-roboto text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                To be the leading institution in providing comprehensive,
                affordable, and accessible diabetes healthcare across the Middle
                East, transforming lives through innovative medical care and
                community empowerment.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Comprehensive Diabetes Care",
                  "Community-centered Approach",
                  "Medical Excellence",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="font-roboto flex items-center gap-3"
                  >
                    <img src={arrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-foreground font-semibold text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0">
            <div className="h-full p-6 sm:p-8 lg:p-10 bg-muted/30 rounded-2xl hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group">
              <div className="flex items-start gap-3 sm:gap-4 mb-6">
                <img src={missionIcon} alt="" className="h-10 sm:h-12 flex-shrink-0" />
                <h3 className="font-roboto text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  Our Mission
                </h3>
              </div>
              <p className="font-roboto text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                To pool public and private sector resources to enhance
                accessibility to quality diabetes and non-communicable disease
                (NCD) care in Khyber Pakhtunkhwa and across Pakistan, while
                advancing medical research and professional development.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Resource Mobilization",
                  "Quality Care Access",
                  "Research & Development",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="font-roboto flex items-center gap-3"
                  >
                    <img src={arrow} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-foreground font-semibold text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* River Metaphor Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 animate-on-scroll opacity-0 relative overflow-hidden bg-primary/95 rounded-2xl">
          {/* Decorative Overlays */}
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-br-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-tl-full opacity-20 mix-blend-lighten z-10"></div>

          {/* Main Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">
            <h3 className="font-roboto text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
              The Abaseen Spirit
            </h3>
            <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              Just as the Abaseen river flows through the landscapes of our
              region, bringing life and sustenance to all it touches, AIMS
              Middle East flows through communities, bringing hope, healing, and
              transformation. Our mission is as constant and nurturing as these
              ancient waters, reaching every corner where care is needed most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;