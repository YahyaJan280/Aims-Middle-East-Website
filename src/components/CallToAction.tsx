import { useEffect, useRef } from "react";
import { Heart, Users, Handshake, ArrowRight, Mail, Phone } from "lucide-react";

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
      className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-primary overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Full-Width Background Circles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 max-w-[1360px]">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 animate-on-scroll opacity-0 leading-tight">
            Join Us in Building
            <span className="block mt-2">
              Accessible Care
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto animate-on-scroll opacity-0 leading-relaxed font-light">
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
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-white/90 mb-5 sm:mb-6 leading-relaxed text-left">
                      {card.description}
                    </p>
                    <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
                      {card.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-white/70 rounded-full flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-white/90">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={card.path}>
                    <button className="w-full bg-white/10 border border-white/30 text-white hover:bg-white hover:text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
                      {card.buttonText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-white/20 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect with us today and become part of a movement that's
              transforming healthcare across the Middle East. Every action, no
              matter how small, creates waves of positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-6 sm:mb-7 md:mb-8">
              <a
                href="mailto:asdkhn@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm sm:text-base">asdkhn@gmail.com</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <a
                href="tel:+971507698076"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-sm sm:text-base">+971 50 769 8076</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="/contact">
                <button className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium border border-white group flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300">
                  Contact Us Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;