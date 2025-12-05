import React from "react";
import { Link } from "react-router-dom";
import { FileText, CheckCircle2, Award, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";

const MoUPage = () => {
  const certifications = [
    {
      image: logo1,
      title: "Diabetes General Hospital & Research Center, Peshawar",
      description:
        "The Diabetes General Hospital & Research Center, a project of AIMS, is officially licensed as a 30-bed In-Patient Facility. This recognition underscores our continuous dedication to providing quality medical care, research, and community health services in the region.",
      badge: "Licensed Facility",
      icon: Award,
    },
    {
      image: logo2,
      title: "Alhamd Shariah Advisory Services Certification",
      description:
        "Alhamd Shariah Advisory Services has certified the Zakat process of AIMS Pakistan. This certification reaffirms our compliance with Shariah principles and our commitment to maintaining transparency and trust in the utilization of Zakat funds for healthcare and social development.",
      badge: "Shariah Compliant",
      icon: Shield,
    },
    {
      image: logo3,
      title: "Pakistan Centre for Philanthropy (PCP) Certification",
      description:
        "AIMS Pakistan has been certified by the Pakistan Centre for Philanthropy (PCP) for Excellence and Leadership under the FBR's Non-Profit Organization (NPO) Evaluation Standards. This certification validates our effective governance, accountability, and commitment to delivering measurable social impact.",
      badge: "PCP Certified",
      icon: CheckCircle2,
    },
  ];

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-roboto pt-20">
        {/* Hero Section */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="font-roboto  sm:text-4xl    text-primary mb-4 sm:mb-6  font-bold text-3xl md:text-4xl lg:text-5xl">
                  Memorandum of Understanding
                </h1>
                <p className="font-roboto text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl text-muted-foreground mx-auto leading-relaxed">
                  At AIMS Middle East, we believe that meaningful partnerships,
                  official recognitions, and transparent practices are the
                  foundation of sustainable impact. Our collaborations and
                  certifications reflect our unwavering commitment to ethical
                  governance, quality healthcare, and community welfare.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Certifications Section */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center  mb-12 sm:mb-16">
                <h2 className="font-roboto  font-bold text-primary mb-4   text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
                  Official Recognitions & Certifications
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 gap-6   max-w-[1200px] sm:gap-8 lg:gap-10  mx-auto">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100 group"
                  >
                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/95"></div>

                    <div className="flex flex-col md:flex-row">
                      {/* Left Section (Logo & Badge) */}
                      <div className="md:w-1/3 p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-white border-b md:border-b-0 md:border-r border-gray-100 ">
                        <div className="relative mb-4">
                          <div className="w-28 h-28 sm:w-32  sm:h-32 lg:w-36 lg:h-36 bg-white rounded-xl shadow-md flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary/10 rounded-full  p-2">
                            <cert.icon
                              className="w-5 h-5 text-primary"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                        <span className="font-roboto bg-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                          {cert.badge}
                        </span>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className="font-roboto text-xl text-left sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4  transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="font-roboto text-left text-sm sm:text-base lg:text-lg text-gray-600 text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-white to-gray-50">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-[1200px] mx-auto">
                <div className="relative bg-[#055baa] rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 xl:p-14 overflow-hidden group">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 -ml-32 -mb-32 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10 text-center">
                    <h3 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Join Our Network of Excellence
                    </h3>
                    <p className="font-roboto text-sm sm:text-base lg:text-lg text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                      Partner with AIMS Middle East to create meaningful impact
                      through certified, ethical, and transparent healthcare
                      initiatives.
                    </p>
                    <Link to="/get-involved/membership">
                      <button className="font-roboto bg-white text-[#055baa] hover:bg-[#00adee] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg transform hover:scale-105">
                        Become a Partner
                      </button>
                    </Link>
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

export default MoUPage;
