import { useEffect, useRef } from "react";
import { Heart, Users, Handshake, ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BgImage from "@/assets/JoinOurMission.png";

const CallToAction = () => {
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

  const actionCards = [
    {
      icon: Heart,
      title: "Donate",
      description:
        "Support our mission with a contribution that directly impacts patient care and community health",
      buttonText: "Make a Donation",
      gradient: "bg-gradient-to-br from-primary to-primary/90",
      path: "/get-involved/donate",
      features: [
        "Direct patient support",
        "Medical equipment funding",
        "Research advancement",
        "Community programs",
      ],
    },
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a hands-on difference in healthcare delivery",
      buttonText: "Become a Volunteer",
      gradient: "bg-gradient-to-br from-primary to-primary/90",
      path: "/get-involved/volunteer",
      features: [
        "Patient care assistance",
        "Community outreach",
        "Educational programs",
        "Administrative support",
      ],
    },
    {
      icon: Handshake,
      title: "Partner",
      description:
        "Collaborate with us as an organizational partner to expand our reach and amplify our impact",
      buttonText: "Partner With Us",
      gradient: "bg-gradient-to-br from-primary to-primary/90",
      path: "/partners/become",
      features: [
        "Strategic partnerships",
        "Resource sharing",
        "Joint initiatives",
        "Knowledge exchange",
      ],
    },
  ];

  return (
 <section
  id="cta"
  ref={sectionRef}
  className="
    relative 
    w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 
    overflow-hidden 
    py-16 sm:py-20 md:py-24 lg:py-28
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",       // Cover entire container
    backgroundPosition: "center",   // Keep image centered
    backgroundRepeat: "no-repeat",  // Prevent tiling
    imageRendering: "auto",         // Keep image sharp
    transform: "translateZ(0)",     // Force GPU rendering for crispness
  }}
>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-10 lg:px-20  max-w-[1370px]">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl text-white font-roboto sm:text-3xl md:text-5xl font-bold mb-3">
            Join Us in
            <br />
            Building Accessible Care
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 leading-relaxed font-medium">
            Together, we can flow like the Abaseen river—bringing life, hope,
            and healing to every corner of our region. Your support creates
            ripples of positive change that transform entire communities.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 mb-12 sm:mb-14 md:mb-16">
          {actionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="animate-on-scroll opacity-0 group">
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-5 sm:mb-6">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${card.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0`}
                      >
                        <IconComponent 
                          className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
                          strokeWidth={2}
                          style={{ transform: 'translateZ(0)' }}
                        />
                      </div>
                      <h3 className="text-xl sm:text-3xl md:text-2xl font-bold text-white leading-tight truncate">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-left text-white mb-6 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
                      {card.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                          <span className="text-sm text-white leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={card.path}
                    className="w-full bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                  >
                    {card.buttonText}
                    <ArrowRight 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      strokeWidth={2}
                      style={{ transform: 'translateZ(0)' }}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/20 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-sm sm:text-base text-white mb-6 leading-relaxed">
              Connect with us today and become part of a movement that's
              transforming healthcare across the Middle East. Every action
              creates waves of positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-6 sm:mb-7 md:mb-8">
              <a
                href="mailto:asdkhn@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Mail 
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" 
                  strokeWidth={2}
                  style={{ transform: 'translateZ(0)' }}
                />
                <span className="text-sm sm:text-base">asdkhn@gmail.com</span>
              </a>

              <div className="hidden sm:block w-px h-6 bg-white/30"></div>

              <a
                href="tel:+971507698076"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Phone 
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" 
                  strokeWidth={2}
                  style={{ transform: 'translateZ(0)' }}
                />
                <span className="text-sm sm:text-base">+971 50 769 8076</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium border border-white flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  strokeWidth={2}
                  style={{ transform: 'translateZ(0)' }}
                />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;