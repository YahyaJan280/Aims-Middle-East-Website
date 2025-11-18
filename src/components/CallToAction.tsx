import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
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
      className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-primary overflow-hidden py-16 lg:py-24"
    >
      {/* Full-Width Background Circles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-[1290px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-roboto text-4xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Join Us in Building
            <span className="block text-4xl sm:text-4xl lg:text-6xl mt-2 font-bold">
              Accessible Care
            </span>
          </h2>
          <p className="font-roboto font-medium text-lg sm:text-xl lg:text-xl text-white max-w-3xl mx-auto animate-on-scroll opacity-0 leading-relaxed">
            Together, we can flow like the Abaseen river—bringing life, hope,
            and healing to every corner of our region. Your support creates
            ripples of positive change that transform entire communities.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12">
          {actionCards.map((card, index) => (
            <div key={index} className="animate-on-scroll opacity-0 group">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-glow h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-16 h-16 ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-roboto text-2xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {card.title}
                  </h3>
                  <p className="font-roboto font-medium text-white mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                        <span className="font-roboto font-medium text-white text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to={card.path}>
                  <Button
                    variant="outline"
                    className="font-roboto font-medium w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary group-hover:scale-105 transition-all duration-300"
                  >
                    {card.buttonText}
                    <ArrowRight className="w-4 h-4 lg:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll opacity-0">
          <div className="bg-white/10 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-white/20 text-center max-w-4xl mx-auto">
            <h3 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="font-roboto font-medium text-white mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
              Connect with us today and become part of a movement that's
              transforming healthcare across the Middle East. Every action, no
              matter how small, creates waves of positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="mailto:info@aimsmiddleeast.org"
                className="font-roboto font-medium flex items-center space-x-3 text-white hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">asdkhn@gmail.com</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <a
                href="tel:+92000000000"
                className="flex items-center space-x-3 text-white hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">+971 50 769 8076</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-roboto font-medium bg-white text-primary hover:bg-primary/90 border-white group flex items-center justify-center"
                >
                  Contact Us Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
