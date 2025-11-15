import { useEffect, useRef, useState } from "react";
import { MapPin, Activity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove("opacity-0");
                el.classList.add("animate-slide-up");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      name: "Sugar Hospital",
      location: "Peshawar, Pakistan",
      longDescription:
        "Sugar Hospital represents the forefront of healthcare innovation, focusing on diabetes and NCD treatment.",
      stats: { patients: "11,000+", staff: "52", established: "1985" },
      features: [
        "24/7 Emergency services",
        "Specialized endocrinology departments",
        "Advanced diagnostic tools",
      ],
      impact: [
        "Reduced diabetes complications by 40%",
        "Trained 200+ healthcare professionals",
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-roboto font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 animate-on-scroll opacity-0">
            <span className="gradient-text">Our Projects</span>
          </h2>
          <p className="font-roboto font-medium text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-on-scroll opacity-0">
            Transforming healthcare delivery and improving lives across regions.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="animate-on-scroll opacity-0 mb-10 sm:mb-14 lg:mb-16">
          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-10 shadow-card">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
              {/* Left Column - Sugar Hospital */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-sm flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2.5 sm:p-3 bg-gradient-primary rounded-xl flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-roboto font-bold text-xl sm:text-2xl gradient-text">
                        {projects[activeProject].name}
                      </h3>
                      <p className="font-roboto text-xs sm:text-sm text-muted-foreground mt-1 flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        {projects[activeProject].location}
                      </p>
                    </div>
                  </div>

                  <p className="font-roboto text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {projects[activeProject].longDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    {Object.entries(projects[activeProject].stats).map(([label, value]) => (
                      <div
                        key={label}
                        className={`text-center p-3 sm:p-4 bg-accent/10 rounded-xl border border-border/30 ${
                          label.toLowerCase() === "established" ? "col-span-2" : ""
                        }`}
                      >
                        <div className="text-lg sm:text-xl font-roboto font-bold gradient-text">
                          {value}
                        </div>
                        <div className="text-xs font-medium text-muted-foreground uppercase">
                          {label.charAt(0).toUpperCase() + label.slice(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-4">
                  <a
                    href="https://sugarhospital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="font-roboto font-medium text-sm sm:text-base w-full sm:w-auto"
                    >
                      <ExternalLink className="mr-2 w-4 h-4" /> Visit Project
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Column - Public Health */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 shadow-sm flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2.5 sm:p-3 bg-primary/95 rounded-xl shadow-sm flex-shrink-0">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-roboto font-bold text-xl sm:text-2xl gradient-text">
                        Public Health
                      </h3>
                      <p className="font-roboto font-medium text-xs sm:text-sm text-muted-foreground mt-1 flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" /> Khyber Pakhtunkhwa, Pakistan
                      </p>
                    </div>
                  </div>

                  <p className="font-roboto text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Since its inception, AIMS community program has regularly held
                    awareness, chronic diseases screening & treatment camps across KP —
                    conducting{" "}
                    <span className="font-semibold text-primary">40+ camps</span> and
                    serving over{" "}
                    <span className="font-semibold text-primary">3,000+</span> patients to
                    date.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-xl border border-border/30">
                      <div className="text-lg sm:text-xl font-bold gradient-text">40+</div>
                      <div className="text-xs font-medium text-muted-foreground uppercase">
                        Camps Held
                      </div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-xl border border-border/30">
                      <div className="text-lg sm:text-xl font-bold gradient-text">3,000+</div>
                      <div className="text-xs font-medium text-muted-foreground uppercase">
                        Patients Served
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-4">
                  <Button 
                    className="bg-primary text-white font-medium hover:bg-primary/95 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                    onClick={() => window.location.href = '/projects/community-camps'}
                  >
                    Visit Community Camp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-on-scroll opacity-0 relative bg-primary/95 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-br-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-tl-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="relative z-20 p-6 sm:p-8 lg:p-12 text-center">
            <h3 className="font-roboto font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-3 sm:mb-4">
              Join Our Mission
            </h3>
            <p className="font-roboto font-medium text-white text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
              Every project represents hope, healing, and transformation. Partner with us to make a lasting impact on communities.
            </p>
            <Button 
              className="font-roboto font-medium animate-pulse-glow bg-white text-primary hover:text-white text-sm sm:text-base"
              onClick={() => window.location.href = '/partners/become'}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;