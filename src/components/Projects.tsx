import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Activity,
  ExternalLink,
  TrendingUp,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

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
    <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white mt-16 sm:mt-18 md:mt-20 lg:mt-20">
      <section
        id="projects"
        ref={sectionRef}
        className="py-12 sm:py-16 lg:py-20 xl:py-24"
      >
        <div className="w-full xl:-mt-20 max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-[1700px] mx-auto">
            {/* Heading */}
            <div className="text-center mb-10 sm:mb-14 lg:mb-16 xl:mb-20">
              <h2 className="font-roboto font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl  mb-4 sm:mb-6 animate-on-scroll opacity-0 text-primary">
                Our Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 text-muted-foreground max-w-3xl -mt-3 mx-auto animate-on-scroll opacity-0 transition-all duration-700 leading-relaxed font-light">
                Transforming healthcare delivery <br/> and improving lives across
                regions.
              </p>
            </div>

            {/* Projects Cards */}
            <div className="animate-on-scroll opacity-0 mb-10 sm:mb-14 lg:mb-16 xl:mb-20">
              <div className="grid gap-6 sm:gap-8 lg:gap-8 xl:gap-10 lg:grid-cols-2">
                {/* Left Column - Sugar Hospital */}
                <div className="relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden group">
                  {/* Gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/95"></div>

                  <div className="flex-grow">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin
                          className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-3xl md:text-3xl  font-bold bg-primary bg-clip-text text-transparent leading-tight truncate">
                          {projects[activeProject].name}
                        </h3>
                        <p className="font-roboto text-xs font-medium sm:text-sm lg:text-sm xl:text-base text-gray-600 mt-1 flex items-center ">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          {projects[activeProject].location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-roboto text-left  text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                      {projects[activeProject].longDescription}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-4 sm:mb-6"></div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-roboto font-bold text-primary">
                          {projects[activeProject].stats.patients}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase">
                          Patients
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                          {projects[activeProject].stats.staff}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase">
                          Staff
                        </div>
                      </div>
                      <div className="col-span-2 text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                          {projects[activeProject].stats.established}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase">
                          Established
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center mt-4">
                    <a
                      href="https://sugarhospital.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="font-roboto font-medium text-sm p-6 sm:text-base lg:text-base xl:text-lg w-full border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />{" "}
                        Visit Project
                      </Button>
                    </a>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/95 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                </div>

                {/* Right Column - Public Health */}
                <div className="relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden group">
                  {/* Gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/95"></div>

                  <div className="flex-grow">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Activity
                          className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-3xl md:text-3xl text-left font-bold bg-primary bg-clip-text text-transparent leading-tight truncate">
                          Public Health
                        </h3>
                        <p className="font-roboto font-medium text-xs sm:text-sm lg:text-sm xl:text-base text-gray-600 mt-1 flex items-center">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />{" "}
                          Khyber Pakhtunkhwa, Pakistan
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base  text-left  text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                      Since its inception, AIMS community program has regularly
                      held awareness, chronic diseases screening & treatment
                      camps across KP — conducting{" "}
                      <span className="text-sm sm:text-base  text-left  text-muted-foreground text-gray-600 mb-6 leading-relaxed">
                        40+ camps
                      </span>{" "}
                      and serving over{" "}
                      <span className="text-sm sm:text-base  text-left  text-muted-foreground text-gray-600 mb-6 leading-relaxed">3,000+</span>{" "}
                      patients to date.
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-4 sm:mb-6"></div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                          40+
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase">
                          Camps Held
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group/stat">
                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">
                          3,000+
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase">
                          Patients Served
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center mt-4">
                    <Link
                      to="/projects/community camps"
                      className="bg-primary text-white p-3 font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base lg:text-base xl:text-lg w-full shadow-lg hover:shadow-xl"
                    >
                      Visit Community Camp
                    </Link>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="animate-on-scroll opacity-0 relative bg-primary rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group/cta">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-20 -mr-32 -mt-32 group-hover/cta:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-20 -ml-32 -mb-32 group-hover/cta:scale-150 transition-transform duration-700"></div>

              <div className="relative z-20 p-6 sm:p-8 lg:p-12 xl:p-16 text-center ">
               <h3 className="text-xl sm:text-3xl md:text-3xl  font-bold  bg-clip-text text-white leading-tight truncate">
                  Join Our Mission
                </h3>
                <p className="text-sm sm:text-base  text-center  text-muted-foreground text-white mb-6 leading-relaxed">
                  Every project represents hope, healing, and transformation. <br />
                  Partner with us to make a lasting impact on communities.
                </p>
                <Link to="/partners/become">
                  <Button className="font-roboto font-medium bg-white text-primary hover:bg-gray-50 hover:text-primary hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl px-6 sm:px-8 py-3 shadow-xl hover:shadow-2xl">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
