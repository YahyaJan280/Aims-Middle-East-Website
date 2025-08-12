import { useEffect, useRef } from "react";
import { Heart, Users, Stethoscope } from "lucide-react";
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
      className="py-20 lg:py-20 bg-background "
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 mt-[-20px]">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll opacity-0 ">
            <span
              className="gradient-text "
              style={{ fontFamily: "Gotham HTF" }}
            >
              Our Purpose
            </span>
          </h2>
          <p className="paragraph-text text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0">
            Like the flowing waters of the Abaseen river, we bring life, hope,
            and healing to communities across the Middle East
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Vision Card */}
          <div className="animate-on-scroll opacity-0">
            <div className="bg-card p-8 lg:p-12 bg-muted/30 rounded-2xl hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3  rounded-xl group-hover:scale-110 transition-transform duration-300 mt-[-10px]">
                  {/* <Target className="w-8 h-8 text-white" /> */}
                  <img
                    src={visionIcon}
                    alt=""
                    className=" h-[50px] text-white"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold gradient-text mb-4 mt-4"
                    style={{ fontFamily: "Gotham HTF" }}
                  >
                    Our Vision
                  </h3>
                </div>
              </div>
              <p className="paragraph-text text-lg text-muted-foreground leading-relaxed">
                To be the leading institution in providing comprehensive,
                affordable, and accessible diabetes healthcare across the Middle
                East, transforming lives through innovative medical care and
                community empowerment.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={arrow} alt="" className="w-5 h-5  text-secondary" />
                  <span className="text-foreground font-semibold text-foreground mb-2">
                    Comprehensive Diabetes Care
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={arrow} alt="" className="w-5 h-5  text-secondary" />
                  <span className="text-foreground font-semibold text-foreground mb-2">
                    Community-centered Approch
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={arrow} alt="" className="w-5 h-5  text-secondary" />
                  <span className="text-foreground font-semibold text-foreground mb-2">
                    Medical exellence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll opacity-0 ">
            <div className="p-8 lg:p-12 rounded-2xl bg-muted/30 hover:shadow-glow transition-all duration-500 border border-border/50  group">
              <div className="flex items-start space-x-4 mb-6 ">
                <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {/* <Heart className="w-8 h-8 text-white" /> */}
                  <img
                    src={missionIcon}
                    alt=""
                    className="h-[50px] text-white"
                  />
                </div>
                <div>
                  <h3
                    className="text-2xl lg:text-3xl mt-4 font-bold gradient-text mb-4"
                    style={{ fontFamily: "Gotham HTF" }}
                  >
                    Our Mission
                  </h3>
                </div>
              </div>
              <p className="paragraph-text text-lg text-muted-foreground leading-relaxed mb-6">
                To pool public and private sector resources to enhance
                accessibility to quality diabetes and non-communicable disease
                (NCD) care in Khyber Pakhtunkhwa and across Pakistan, while
                advancing medical research and professional development.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg ">
                  {/* <p className="text-sm text-muted-foreground">Uniting public and private sectors for maximum impact</p> */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5  text-secondary"
                    />
                    <span className="text-foreground font-semibold text-foreground mb-2">
                      Resource Mobilization
                    </span>
                  </div>
                </div>
                <div className="rounded-lg ">
                  <div className="flex items-center space-x-3">
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5  text-secondary"
                    />
                    <span className="text-foreground font-semibold text-foreground mb-2">
                      Qualty Care Access
                    </span>
                  </div>
                </div>
                <div className=" rounded-lg ">
                  <div className="flex items-center space-x-3">
                    <img
                      src={arrow}
                      alt=""
                      className="w-5 h-5  text-secondary"
                    />
                    <span className="text-foreground font-semibold text-foreground mb-2">
                      Research & Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* River Metaphor Section */}
        <div className="lg:mt-18 mt-[60px] text-center animate-on-scroll opacity-0 relative overflow-hidden bg-gradient-to-br from-[#4B61D1] to-[#4B61D1]/90 rounded-2xl">
          {/* Top-left white overlay */}
          <div className="absolute  top-0 left-0 w-40 h-40 bg-white rounded-br-full opacity-20 mix-blend-lighten z-10"></div>

          <div className="absolute  bottom-0 right-0 w-40 h-40 bg-white rounded-tl-full opacity-20 mix-blend-lighten z-10"></div>
          {/* Main content card */}
          <div className="relative  z-20 max-w-4xl mx-auto bg-gradient-primary/5 p-8 lg:p-12 rounded-2xl border border-primary/10">
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
