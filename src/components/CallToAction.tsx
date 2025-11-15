import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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

  const actionCards = [
    {
      icon: Heart,
      title: "Donate",
      description:
        "Support our mission with a contribution that directly impacts patient care and community health",
      buttonText: "Make a Donation",
      gradient: "bg-gradient-primary",
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
      gradient: "bg-gradient-secondary",
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
      gradient: "bg-gradient-primary",
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
      className="relative -ml-[50vw] -mr-[50vw] left-1/2 right-1/2  w-screen bg-primary/95 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 max-w-7xl mx-auto">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full -translate-x-32 sm:-translate-x-48 -translate-y-32 sm:-translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full translate-x-32 sm:translate-x-48 translate-y-32 sm:translate-y-48"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-on-scroll opacity-0">
            Join Us in Building
            <span className="font-roboto block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2 text-white">
              Accessible Care
            </span>
          </h2>
          <p className="font-roboto font-medium text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto px-4 animate-on-scroll opacity-0 leading-relaxed">
            Together, we can flow like the Abaseen river—bringing life, hope,
            and healing to every corner of our region. Your support creates
            ripples of positive change that transform entire communities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-14 lg:mb-16">
          {actionCards.map((card, index) => (
            <div key={index} className="animate-on-scroll opacity-0 group">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-glow h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${card.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <card.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-roboto text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-roboto font-medium text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {card.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 sm:gap-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-white/70 rounded-full flex-shrink-0"></div>
                      <span className="font-roboto font-medium text-white text-xs sm:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  onClick={() => window.location.href = card.path}
                  className="font-roboto font-medium w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary group-hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  {card.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 lg:p-12 rounded-2xl border border-white/20 text-center">
            <h3 className="font-roboto text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="font-roboto font-medium text-sm sm:text-base lg:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              Connect with us today and become part of a movement that's
              transforming healthcare across the Middle East. Every action, no
              matter how small, creates waves of positive change.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <a
                href="mailto:asdkhn@gmail.com"
                className="font-roboto font-medium flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-roboto font-medium text-xs sm:text-sm">
                  asdkhn@gmail.com
                </span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <a
                href="tel:+971507698076"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/90 transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-xs sm:text-sm">+971 50 769 8076</span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="font-roboto font-medium bg-white text-primary hover:bg-primary/90 hover:text-white border-white group text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;