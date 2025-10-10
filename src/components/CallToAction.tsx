import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 add this import at the top
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
    path: "/get-involved/donate", // 👈 Added path
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
    path: "/get-involved/volunteer", // 👈 Added path
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
    path: "/partners/become", // 👈 Added path
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
      className="py-8 mt-10 lg:mt-6 lg:py-10  bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 ">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="px-6 sm:px-8 lg:px-12 relative z-10 max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto text-4xl lg:text-6xl font-bold text-white mb-6 animate-on-scroll opacity-0">
            Join Us in Building
            <span className="font-roboto block text-5xl lg:text-7xl mt-2 text-white">
              Accessible Care
            </span>
          </h2>
          <p className="font-roboto font-medium text-xl text-white max-w-3xl mx-auto animate-on-scroll opacity-0">
            Together, we can flow like the Abaseen river—bringing life, hope,
            and healing to every corner of our region. Your support creates
            ripples of positive change that transform entire communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12 ">
          {actionCards.map((card, index) => (
            <div key={index} className="animate-on-scroll opacity-0 group">
              <div className="bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-glow h-full">
                <div
                  className={`w-16 h-16 ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-roboto text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  {card.title}
                </h3>

                <p className="font-roboto font-medium text-white mb-6 leading-relaxed">
                  {card.description}
                </p>

                <div className="space-y-3 mb-8">
                  {card.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                      <span className="font-roboto font-medium text-white text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
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
          <div className="bg-white/10 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-white/20 text-center">
            <h3 className="font-roboto text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="font-roboto font-medium text-white mb-8 max-w-2xl mx-auto">
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
                <span className="font-roboto font-medium text-sm">
                  asdkhn@gmail.com
                </span>
              </a>
              <div className="font-roboto hidden sm:block w-px h-6 bg-white/30"></div>
              <a
                href="tel:+92000000000"
                className="flex items-center space-x-3 text-white hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+971 50 769 8076 </span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-roboto font-medium bg-white text-primary hover:bg-primary/90 border-white group"
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
