import { useEffect, useRef } from "react";
import visionIcon from "@/assets/Vision.svg";
import missionIcon from "@/assets/Mission.svg";
import arrow from "@/assets/Arrow.svg";

const MissionVision = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="py-10 lg:py-8 bg-background"
    >
      {/* Container with responsive padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll opacity-0">
            <span
              className="gradient-text"
              style={{ fontFamily: "Gotham HTF" }}
            >
              Our Purpose
            </span>
          </h2>
          <p className="paragraph-text text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0">
            Like the flowing waters of the Abaseen river, we bring life, hope,
            and healing to communities across the Middle East
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Vision Card */}
          <div className="animate-on-scroll opacity-0 ">
            <div className="bg-card p-6 sm:p-8 lg:p-12 bg-muted/30 rounded-2xl hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group">
              <div className="flex items-start gap-4 mb-6">
                <img src={visionIcon} alt="" className="h-12" />
                <h3
                  className="text-2xl lg:text-3xl font-bold gradient-text mt-2 mb-4"
                  style={{ fontFamily: "Gotham HTF" }}
                >
                  Our Vision
                </h3>
              </div>
              <p className="paragraph-text text-lg text-muted-foreground leading-relaxed">
                To be the leading institution in providing comprehensive,
                affordable, and accessible diabetes healthcare across the Middle
                East, transforming lives through innovative medical care and
                community empowerment.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Comprehensive Diabetes Care",
                  "Community-centered Approach",
                  "Medical Excellence",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img src={arrow} alt="" className="w-5 h-5" />
                    <span className="text-foreground font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-muted/30 hover:shadow-glow transition-all duration-500 border border-border/50 group">
              <div className="flex items-start gap-4 mb-4">
                <img src={missionIcon} alt="" className="h-12" />
                <h3
                  className="text-2xl lg:text-3xl mt-2 font-bold gradient-text mb-4"
                  style={{ fontFamily: "Gotham HTF" }}
                >
                  Our Mission
                </h3>
              </div>
              <p className="paragraph-text text-lg text-muted-foreground leading-relaxed mb-6">
                To pool public and private sector resources to enhance
                accessibility to quality diabetes and non-communicable disease
                (NCD) care in Khyber Pakhtunkhwa and across Pakistan, while
                advancing medical research and professional development.
              </p>
              <div className="space-y-4">
                {[
                  "Resource Mobilization",
                  "Quality Care Access",
                  "Research & Development",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img src={arrow} alt="" className="w-5 h-5" />
                    <span className="text-foreground font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* River Metaphor Section */}
        <div className="mt-14  text-center animate-on-scroll opacity-0 relative overflow-hidden bg-gradient-to-br from-[#4B61D1] to-[#4B61D1]/90 rounded-2xl">
          {/* Decorative Overlays */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-br-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-tl-full opacity-20 mix-blend-lighten z-10"></div>

          {/* Main Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 py-10 lg:py-12 bg-gradient-primary/5 rounded-2xl border border-primary/10">
            <h3
              className="text-2xl lg:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "Gotham HTF" }}
            >
              The Abaseen Spirit
            </h3>
            <p className="paragraph-text text-lg text-white leading-relaxed">
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
