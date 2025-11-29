import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CommunityOutreach = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white font-roboto">
        {/* Hero Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary mt-8 md:mt-8 lg:mt-12">
          <section className="text-white py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4 md:mb-6">
                  Community Health Camps
                </h1>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  At AIMS Middle East, our community health camps are designed
                  to provide essential healthcare services to underserved areas.
                  Through these camps, we ensure that quality medical care
                  reaches even the most remote communities.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Accessible Care Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12 lg:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-5xl  font-bold text-primary mb-4 md:mb-6">
                  Accessible Care for Everyone
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                  We organize mobile and stationary camps that deliver free
                  medical check-ups, consultations, and treatments, targeting
                  communities with limited access to healthcare.
                </p>
              </div>

              {/* Services Provided */}
              <div className="max-w-[1200px] mx-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary text-center mb-8 md:mb-10">
                  Services Provided
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  {[
                    {
                      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                      title: "General Health Check-ups",
                      desc: "Blood pressure, sugar levels, BMI, etc.",
                    },
                    {
                      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      title: "Medical Treatment & Prescriptions",
                      desc: "Immediate care for common ailments",
                    },
                    {
                      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                      title: "Health Awareness & Education",
                      desc: "Guidance on nutrition, hygiene, and disease prevention",
                    },
                    {
                      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                      title: "Specialist Consultations",
                      desc: "Doctors and specialists visit for specific health concerns",
                    },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className="flex gap-3 md:gap-4 items-start p-4 md:p-5 lg:p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={service.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2 text-left">
                          {service.title}
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base text-gray-700 text-left">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 2,500+ Patients Served Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-50">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80"
                      alt="Medical professionals providing healthcare at community camp"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 md:h-80 lg:h-96"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-primary mb-4 md:mb-6 text-left">
                      2,500+ Patients Served
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-muted-foreground mb-4 text-left">
                      Since our inception, we have successfully screened and
                      provided medical care to over 2,500 individuals across
                      Khyber Pakhtunkhwa. Each camp brings hope and healing to
                      families who otherwise lack access to essential healthcare
                      services.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-muted-foreground text-left">
                      Our dedicated medical teams work tirelessly to ensure
                      every patient receives proper diagnosis, treatment, and
                      follow-up care, making a tangible difference in their
                      lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 40+ Camps Annually Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-2">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-primary mb-4 md:mb-6 text-left">
                      40+ Camps Annually
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 text-left text-muted-foreground">
                      Every year, we organize more than 40 free medical camps
                      across remote and underserved areas of KPK. These camps
                      are strategically planned to reach communities where
                      healthcare infrastructure is minimal or non-existent.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-left text-muted-foreground">
                      From mountainous villages to rural settlements, our mobile
                      health units bring comprehensive medical services directly
                      to those who need them most, ensuring no one is left
                      behind.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop&q=80"
                      alt="Medical team conducting health screening at outdoor camp"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 md:h-80 lg:h-96"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Impact in Numbers - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary">
          <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-white text-center mb-8 md:mb-12 lg:mb-16">
                  Impact in Numbers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-center">
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                      2,500+
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-100 font-semibold px-2">
                      Patients Served Every Year
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                      30+
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-100 font-semibold px-2">
                      Camps Conducted Every Year
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                      15+
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-100 font-semibold px-2">
                      Remote Locations Reached
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-20 text-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-roboto font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-primary mb-4 md:mb-6">
                  Join Us in Making a Difference
                </h2>
                <p className="tefont-roboto text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 text-muted-foreground md:mb-8">
                  Your support enables us to extend our reach and bring quality
                  healthcare to more communities across Khyber Pakhtunkhwa.
                  Together, we can build healthier futures.
                </p>
                <Link to="/get-involved/donate">
                  <button className="bg-primary text-white font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Support Our Camps
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityOutreach;