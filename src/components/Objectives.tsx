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
      className="bg-muted/30 pb-10"
      
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll opacity-0 s"
            style={{ fontFamily: "Gotham HTF" }}
          >
            <span className="gradient-text">Our Objectives</span>
          </h2>
          <p className="paragraph-text text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0">
            Three pillars of excellence that guide our mission to transform
            healthcare delivery across the region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-12">
          {objectives.map((objective, index) => (
            <div key={index} className="animate-on-scroll mt-[20px] opacity-0 group">
              <div className="relative bg-card p-8  lg:p-10 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/20 h-full">
                {/* Floating Icon */}
                <div className="relative mb-8 ">
                  <div
                    className={`absolute -top-4 -left-4 w-16 h-16 ${objective.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pulse-glow`}
                  >
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-12 h-12"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                  {objective.title}
                </h3>

                <p className="paragraph-text text-muted-foreground mb-6 leading-relaxed">
                  {objective.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 ">
                  {objective.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      {/* <div className="w-2 h-2 bg-gradient-primary rounded-full"></div> */}
                       <img src={arrow} alt="" className="w-5 h-5  text-secondary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Impact Section */}
        <div className="lg:mt-20 mt-8 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <div className="p-6  bg-card rounded-xl shadow-card border border-border/50">
              <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h4
                className="text-lg font-bold gradient-text mb-2"
                style={{ fontFamily: "Gotham HTF" }}
              >
                Medical Excellence
              </h4>
              <p className="paragraph-text text-sm text-muted-foreground">
                World-class healthcare standards
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="p-6 bg-card rounded-xl shadow-card border border-border/50">
              <BookOpen
                className="w-12 h-12 text-secondary mx-auto mb-4 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <h4
                className="text-lg font-bold gradient-text mb-2"
                style={{ fontFamily: "Gotham HTF" }}
              >
                Research Innovation
              </h4>
              <p className="paragraph-text text-sm text-muted-foreground">
                Advancing medical knowledge
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <div className="p-6 bg-card rounded-xl shadow-card border border-border/50">
              <Users
                className="w-12 h-12 text-primary mx-auto mb-4 animate-float"
                style={{ animationDelay: "2s" }}
              />
              <h4
                className="text-lg font-bold gradient-text mb-2"
                style={{ fontFamily: "Gotham HTF" }}
              >
                Community Impact
              </h4>
              <p className="paragraph-text text-sm text-muted-foreground">
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
