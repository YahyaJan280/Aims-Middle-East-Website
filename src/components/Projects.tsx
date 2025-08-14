import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
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
      longDescription: "Sugar Hospital represents...",
      stats: { patients: "3,500+", staff: "85", established: "2022" },
      features: ["24/7 Emergency...", "Specialized endocrinology..."],
      impact: ["Reduced diabetes complications...", "Trained 200+..."],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className=" bg-background  mt-10 lg:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 ">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 ">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 animate-on-scroll opacity-0">
            <span className="gradient-text">Our Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0">
            Transforming healthcare delivery...
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-on-scroll opacity-0">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                activeProject === index
                  ? "bg-gradient-primary text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="animate-on-scroll opacity-0 lg:max-w-[1210px] lg:ml-[60px]">
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-card">
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-4 mb-4 sm:mb-6 ">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                      {projects[activeProject].name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {projects[activeProject].location}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6">
                  {projects[activeProject].longDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(projects[activeProject].stats).map(([label, value]) => (
                    <div
                      key={label}
                      className={`text-center p-3 sm:p-4 bg-accent/10 rounded-xl border border-border/30 
                      ${label.toLowerCase() === "established" ? "col-span-2" : ""}`}
                    >
                      <div className="text-lg sm:text-xl font-bold gradient-text">
                        {value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {label.charAt(0).toUpperCase() + label.slice(1)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gradient" className="w-full sm:w-auto text-sm sm:text-base">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                    <ExternalLink className="mr-2 w-4 h-4" /> Visit Project
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold gradient-text mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {projects[activeProject].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-2 w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold gradient-text mb-2">
                    Measurable Impact
                  </h4>
                  <ul className="space-y-2">
                    {projects[activeProject].impact.map((impact, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 p-2 bg-accent/10 border-l-4 border-secondary"
                      >
                        <div className="mt-2 w-2 h-2 bg-gradient-secondary rounded-full"></div>
                        <span className="text-sm sm:text-base">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center animate-on-scroll lg:max-w-[1210px] lg:ml-[60px] opacity-0 relative bg-gradient-to-br from-[#4B61D1] to-[#4B61D1]/90 rounded-2xl overflow-hidden">
         <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-br-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-tl-full opacity-20 mix-blend-lighten z-10"></div>
          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-white mb-3">
              Join Our Mission
            </h3>
            <p className="text-white text-sm sm:text-base lg:text-lg mb-4 max-w-2xl mx-auto">
              Every project represents hope, healing, and transformation...
            </p>
            <Button
              className="animate-pulse-glow bg-white text-primary hover:text-white"
              size="lg"
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
