import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CommunityOutreach = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white font-roboto">
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary mt-8 sm:mt-18 md:mt-12 lg:mt-12">
          <section className="text-white py-16 sm:py-20 lg:py-24 xl:py-28">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6">
                  Community Health Camps
                </h1>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                  At AIMS Middle East, our community health camps are designed
                  to provide essential healthcare services to underserved areas.
                  Through these camps, we ensure that quality medical care
                  reaches even the most remote communities.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Accessible Care Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
                  <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-primary mb-4 sm:mb-6">
                    Accessible Care for Everyone
                  </h2>
                  <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed">
                    We organize mobile and stationary camps that deliver free
                    medical check-ups, consultations, and treatments, targeting
                    communities with limited access to healthcare.
                  </p>
                </div>

                {/* Services Provided */}
                <div>
                  <h3 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-primary text-center mb-8 sm:mb-10 lg:mb-12">
                    Services Provided
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 xl:gap-10">
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
                        className="flex gap-4 items-start p-5 sm:p-6 lg:p-7 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600"
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
                          <h4 className="font-roboto text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h4>
                          <p className="font-roboto text-xs sm:text-sm lg:text-base text-gray-700 text-muted-foreground">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 2,500+ Patients Served Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-50">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-12">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80"
                      alt="Medical professionals providing healthcare at community camp"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 sm:h-80 lg:h-96 xl:h-[450px]"
                    />
                  </div>
                  <div>
                    <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-primary mb-4 sm:mb-6">
                      2,500+ Patients Served
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Since our inception, we have successfully screened and
                      provided medical care to over 2,500 individuals across
                      Khyber Pakhtunkhwa. Each camp brings hope and healing to
                      families who otherwise lack access to essential healthcare
                      services.
                    </p>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed">
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

        {/* 40+ Camps Annually Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-2">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-primary mb-4 sm:mb-6">
                      40+ Camps Annually
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Every year, we organize more than 40 free medical camps
                      across remote and underserved areas of KPK. These camps
                      are strategically planned to reach communities where
                      healthcare infrastructure is minimal or non-existent.
                    </p>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed">
                      From mountainous villages to rural settlements, our mobile
                      health units bring comprehensive medical services directly
                      to those who need them most, ensuring no one is left
                      behind.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop&q=80"
                      alt="Medical team conducting health screening at outdoor camp"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 sm:h-80 lg:h-96 xl:h-[450px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Impact in Numbers - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary ">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-white text-center mb-10 sm:mb-12 lg:mb-16">
                  Impact in Numbers
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl  lg:text-5xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
                      2,500+
                    </div>
                    <p className="font-roboto text-base sm:text-lg lg:text-xl text-gray-100 font-semibold">
                      Patients Served Every Year
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
                      30+
                    </div>
                    <p className="font-roboto text-base sm:text-lg lg:text-xl text-gray-100 font-semibold">
                      Camps Conducted Every Year
                    </p>
                  </div>
                  <div className="sm:col-span-2 md:col-span-1">
                    <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl  font-bold text-white mb-3 sm:mb-4">
                      15+
                    </div>
                    <p className="font-roboto text-base sm:text-lg lg:text-xl text-gray-100 font-semibold">
                      Remote Locations Reached
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24 text-center">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  Join Us in Making a Difference
                </h2>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-xl text-gray-700 max-w-3xl mx-auto text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-4">
                  Your support enables us to extend our reach and bring quality
                  healthcare to more communities across Khyber Pakhtunkhwa.
                  Together, we can build healthier futures.
                </p>
                <Link to="/get-involved/Donate">
                  <button className="font-roboto bg-primary  text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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
