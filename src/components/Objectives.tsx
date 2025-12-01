import { useEffect, useRef } from "react";
import {
  Users,
  GraduationCap,
  Megaphone,
  Heart,
  Stethoscope,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

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
              }, index * 250);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const objectives = [
    {
      icon: Heart,
      title: "Patient-Center Treatment",
      description:
        "Delivering high-quality medical treatment and compassionate care to underserved communities across the Middle East",
      features: [
        "Comprehensive diabetes management",
        "Specialized NCD treatment programs",
        "Community-based healthcare delivery",
        "Patient education and support",
      ],
      gradient: "from-primary to-primary/95",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
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
      gradient: "from-primary to-primary/95",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
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
      gradient: "from-primary to-primary/95",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw]  -mr-[50vw] bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 animate-on-scroll opacity-0 text-primary/95">
            Our Objectives
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto animate-on-scroll -mt-3 opacity-0  transition-all duration-700 leading-relaxed font-medium text-muted-foreground">
            Three pillars of excellence that guide our mission to <br/> transform
            healthcare delivery across the region
          </p>
        </div>

        {/* OBJECTIVE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div key={index} className="animate-on-scroll opacity-0 group">
                <div className="relative bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 h-full flex flex-col overflow-hidden">
                  {/* Gradient accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${objective.gradient}`}
                  ></div>

                  {/* Icon Container */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 ${objective.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent
                          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 ${objective.iconColor}`}
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* Heading */}
                    <div className="flex min-w-0">
                      <h3 className="text-xl sm:text-3xl md:text-xl font-bold bg-primary bg-clip-text text-transparent leading-tight truncate">
                        {objective.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base  text-left  text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                    {objective.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 mb-6"></div>

                  {/* Features */}
                  <div className="space-y-3 mt-auto">
                    {objective.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle2
                          className={`w-5 h-5 flex-shrink-0 text-red-500 mt-0.5 ${objective.iconColor}`}
                          strokeWidth={2}
                        />
                        <span className="text-sm  text-gray-700 text-muted-foreground leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${objective.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* IMPACT SECTION */}
        <div className="mt-12 sm:mt-16  md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            <div className="animate-on-scroll opacity-0">
              <div className="relative p-6 sm:p-8 bg-[#0084c7] rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg mb-4">
                    <Stethoscope
                      className="w-7 h-7 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h4 className="text-2xl sm:text-3xl lg:text-3xl  font-bold text-white mb-2">
                    Medical Excellence
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug text-white">
                    World-class healthcare standards
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="relative p-6 sm:p-8 bg-[#2b3990] rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16  -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg mb-4">
                    <BookOpen
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h4 className="text-2xl sm:text-3xl lg:text-3xl  font-bold text-white mb-2">
                    Research Innovation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug text-white">
                    Advancing medical knowledge
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="relative p-6 sm:p-8 bg-[#0084c7] rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg mb-4">
                    <Users
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h4 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-2">
                    Community Impact
                  </h4>
                  <p className="text-sm text-muted-foreground leading-snug text-white">
                    Transforming lives together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;