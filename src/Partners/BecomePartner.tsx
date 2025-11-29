import React from "react";
import { Handshake, Target, Users, TrendingUp, Zap, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const BecomePartnerPage = () => {
  const partnershipPoints = [
    {
      title: "Drive Transformation",
      description:
        "Become a part of our strategic partnership network and join hands in driving transformation and achieving shared goals in healthcare and social sectors across the region.",
      icon: Zap,
    },
    {
      title: "Share Our Vision, Amplify Our Mission",
      description:
        "Align with our mission of accessible healthcare and ethical governance — and move forward together in shaping a sustainable future for our communities.",
      icon: Target,
    },
    {
      title: "Collaborate for Impact",
      description:
        "Partner with us to leverage collective expertise, amplify our reach, and deliver impactful solutions to some of the most pressing challenges in healthcare.",
      icon: Users,
    },
    {
      title: "Strengthen Communities",
      description:
        "Work with us to empower individuals, strengthen communities, and create long-lasting impact across diverse societal needs and healthcare goals.",
      icon: Heart,
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-roboto">
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white mt-16 sm:mt-18 md:mt-20 lg:mt-12">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto text-center">
                {/* Icon Badge */}

                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl  font-bold text-primary mb-4 sm:mb-6  md:text-4xl ">
                  Become a Partner
                </h1>
                <p className="font-roboto  sm:text-lg text-gray-700 max-w-2xl mx-auto text-muted-foreground leading-relaxed px-4 text-base md:text-2xl">
                  Partnering with AIMS Middle East means aligning with our
                  vision to create sustainable healthcare and community
                  development. Together, we can transform ideas into impact.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Partnership Points Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  {partnershipPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div
                        key={index}
                        className="relative bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-6 sm:p-8 group"
                      >
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

                        {/* Background Icon */}

                        {/* Icon Badge */}
                        <div className="relative mb-4 text-left">
                          <div className="inline-flex  w-14 h-14 bg-blue-100 rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent
                              className="w-7 h-7 text-left text-primary"
                              strokeWidth={2}
                            />
                          </div>
                        </div>

                        <h3 className="relative text-left font-roboto text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-bold text-primary mb-3 sm:mb-4">
                          {point.title}
                        </h3>
                        <p className="relative text-left font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 leading-relaxed text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto text-center">
                <div className="relative bg-primary rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 xl:p-14 overflow-hidden">
                  {/* Subtle decorative circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-20 -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-20 -ml-32 -mb-32"></div>

                  <div className="relative z-10">
                    <h3 className="font-roboto text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4">
                      Ready to Make an Impact Together?
                    </h3>
                    <p className="font-roboto text-sm sm:text-base lg:text-lg xl:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                      Join our network of strategic partners and create
                      meaningful change in healthcare and community development
                      across the region.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <button className="font-roboto bg-white text-primary hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg transform hover:scale-105">
                          Get in Touch
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BecomePartnerPage;
