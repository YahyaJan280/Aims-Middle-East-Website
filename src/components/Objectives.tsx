import { useEffect, useRef } from "react";
import {
  Users,
  GraduationCap,
  Megaphone,
  Heart,
  Stethoscope,
  BookOpen,
} from "lucide-react";
import arrow from "@/assets/Arrow.svg";

const Objectives = () => {
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
                el.classList.add("animate-scale-in");
              }, index * 300);
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

  const objectives = [
    {
      icon: Heart,
      title: "Patient-Centered Treatment",
      description:
        "Delivering high-quality medical treatment and compassionate care to underserved communities across the Middle East",
      features: [
        "Comprehensive diabetes management",
        "Specialized NCD treatment programs",
        "Community-based healthcare delivery",
        "Patient education and support",
      ],
      gradient: "bg-gradient-primary",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description:
        "Advancing medical expertise through integrated training programs and cutting-edge research initiatives",
      features: [
        "Continuous medical education",
        "Research collaboration programs",
        "Clinical skills enhancement",
        "Knowledge sharing platforms",
      ],
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Megaphone,
      title: "Community Awareness",
      description:
        "Leading advocacy efforts for disease prevention and promoting early intervention strategies",
      features: [
        "Public health campaigns",
        "Early screening programs",
        "Health education workshops",
        "Community outreach initiatives",
      ],
      gradient: "bg-gradient-primary",
    },
  ];

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="bg-muted/30 py-12 relative w-screen -ml-[50vw]  mt-12 -mr-[50vw] left-1/2 right-1/2  overflow-hidden  sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-on-scroll opacity-0">
            <span className="gradient-text">Our Objectives</span>
          </h2>
          <p className="font-roboto font-normal text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 animate-on-scroll opacity-0">
            Three pillars of excellence that guide our mission to transform
            healthcare delivery across the region
          </p>
        </div>

        {/* Objectives Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 group"
            >
              <div className="relative bg-card p-6 sm:p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 h-full flex flex-col">
                {/* Floating Icon */}
                <div className="relative mb-6 sm:mb-8">
                  <div
                    className={`absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 ${objective.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pulse-glow`}
                  >
                    <objective.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="w-12 h-12"></div>
                </div>

                {/* Title */}
                <h3 className="font-roboto text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  {objective.title}
                </h3>

                {/* Description */}
                <p className="font-roboto font-normal text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {objective.description}
                </p>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mt-auto">
                  {objective.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start sm:items-center gap-2 sm:gap-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <img
                        src={arrow}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0"
                      />
                      <span className="font-roboto font-normal text-xs sm:text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="animate-on-scroll opacity-0">
            <div className="p-6 sm:p-8 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 h-full">
              <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4 animate-float" />
              <h4 className="font-roboto text-xl sm:text-2xl font-bold gradient-text mb-2">
                Medical Excellence
              </h4>
              <p className="font-roboto font-normal text-xs sm:text-sm text-muted-foreground">
                World-class healthcare standards
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="p-6 sm:p-8 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 h-full">
              <BookOpen
                className="w-10 h-10 sm:w-12 sm:h-12 text-secondary mx-auto mb-3 sm:mb-4 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <h4 className="font-roboto text-xl sm:text-2xl font-bold gradient-text mb-2">
                Research Innovation
              </h4>
              <p className="font-roboto font-normal text-xs sm:text-sm text-muted-foreground">
                Advancing medical knowledge
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 sm:col-span-2 lg:col-span-1">
            <div className="p-6 sm:p-8 bg-card rounded-xl shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 h-full">
              <Users
                className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4 animate-float"
                style={{ animationDelay: "2s" }}
              />
              <h4 className="font-roboto text-xl sm:text-2xl font-bold gradient-text mb-2">
                Community Impact
              </h4>
              <p className="font-roboto font-normal text-xs sm:text-sm text-muted-foreground">
                Transforming lives together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;