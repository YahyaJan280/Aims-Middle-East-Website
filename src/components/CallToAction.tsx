import { useEffect, useRef } from "react";
import { Heart, Users, Handshake, ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BgImage from "@/assets/lastBg.png";

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
      gradient: "bg-blue-200",
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
      gradient: "bg-blue-200",
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
      gradient: "bg-blue-200",
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
      className="relative w-screen left-[50%] right-[50%] -ml-[50vw]  -mr-[50vw] py-16 sm:py-20 lg:py-32 bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Inner responsive container */}
      <div className="relative z-10 max-w-[1370px] mx-auto px-4 sm:px-6 md:px-10  lg:px-20">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-16 ">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-roboto font-bold text-white mb-3">
            Join Us in
            <br />
            Building Accessible Care
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white  max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 leading-relaxed font-semibold">
            Together, we can flow like the Abaseen river—bringing life, hope,
            and healing to every corner of our region. Your support creates
            ripples of positive change that transform entire communities.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-16">
          {actionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="animate-on-scroll opacity-0 group">
                <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 md:hover:scale-105 md:hover:shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-5 sm:mb-6">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${card.gradient} rounded-2xl flex items-center justify-center md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0`}
                      >
                        <IconComponent
                          className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                          strokeWidth={2}
                          style={{ transform: "translateZ(0)" }}
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight truncate">
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
                          className="flex items-center gap-3 md:group-hover:translate-x-2 transition-transform duration-300"
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
                    className="w-full bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg md:group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                  >
                    {card.buttonText}
                    <ArrowRight
                      className="w-4 h-4 md:group-hover:translate-x-1 transition-transform"
                      strokeWidth={2}
                      style={{ transform: "translateZ(0)" }}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:py-10 lg:py-12 rounded-2xl border border-white/20 text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
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
                />
                <span className="text-sm sm:text-base">+971 50 769 8076</span>
              </a>
            </div>

            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-white/90 py-2.5 rounded-lg font-medium border border-white flex items-center justify-center gap-2 mx-auto text-sm w-[250px] transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight
                className="w-4 h-4 transition-transform"
                
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
