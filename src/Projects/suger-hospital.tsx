import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SugerHospital from "@/assets/Suger-Hospital.jpg";

const SugarHospital = () => {
  return (
    <>
      <Navigation />

      <div className="bg-white font-roboto">
        {/* Hero Section - Edge-to-Edge with Background Image */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-8 sm:mt-8 md:mt-12 lg:mt-12">
          <section
            className="relative h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[600px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${SugerHospital})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 h-full w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8  flex items-center">
              <div className="max-w-[1200px] mx-auto w-full">
                <div className="text-white max-w-3xl">
                  <h1 className="font-roboto text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight text-center md:text-left">
                    Transforming Diabetes Care in Khyber Pakhtunkhwa
                  </h1>
                  <p className="font-roboto  text-base sm:text-lg md:text-xl text-white leading-relaxed -mt-5 text-center md:text-left">
                    Advanced treatment, compassionate care, and innovative
                    research for a healthier community.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* About Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                      alt="Healthcare professional"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 sm:h-80 lg:h-96 xl:h-[500px]"
                    />
                  </div>
                  <div>
                    <h2 className="font-roboto text-2xl sm:text-4xl lg:text-4xl  font-bold text-primary mb-3 sm:mb-4 lg:mb-6 lg:text-left text-left md:text-left">
                      About the Project
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-left">
                      Sugar Hospital & Research Center, a flagship project of
                      AIMS Middle East, is dedicated to providing specialized
                      healthcare for diabetes and related conditions. Our
                      mission is to combine compassionate patient care with
                      advanced medical expertise, ensuring every individual
                      receives effective treatment.
                    </p>

                    <div className="space-y-3 sm:space-y-4 font-roboto">
                      {[
                        "24/7 Emergency & Outpatient Care",
                        "Advanced Diagnostic Facilities",
                        "Research & Innovation Labs",
                        "Personalized Patient Care",
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-primary/95"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <h3 className="font-roboto font-semibold text-primary/95 text-sm sm:text-base lg:text-lg">
                            {text}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Research Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-50">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-2">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 lg:mb-6 lg:text-left text-left md:text-left">
                      Research & Innovation
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-left">
                      At Sugar Hospital, research and innovation are at the
                      heart of our mission. Our team works tirelessly to advance
                      the understanding, treatment, and prevention of diabetes.
                    </p>

                    <div className="space-y-3 sm:space-y-4 font-roboto">
                      {[
                        "Early Detection & Prevention",
                        "Treatment Protocol Development",
                        "Community Education Programs",
                      ].map((topic, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary/95 rounded-full flex-shrink-0 mt-2"></div>
                          <h3 className="font-roboto font-semibold text-primary text-sm sm:text-base lg:text-lg">
                            {topic}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=700&fit=crop"
                      alt="Researcher with microscope"
                      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-64 sm:h-80 lg:h-96 xl:h-[500px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-6">
          <section className="relative py-12 w-full   sm:py-16 lg:py-20 xl:py-24 bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-primary"></div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mt-">
              <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="font-roboto text-xl sm:text-2xl lg:text-4xl md:text-4xl  text-white font-bold mb-3 sm:mb-4 lg:mb-6">
                  Leading the Way in Diabetes Care
                </h2>
                <p className="font-roboto text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6 lg:mb-8 px-4">
                  Join us in our mission to provide world-class <br/> diabetes care
                  and research in Khyber Pakhtunkhwa
                </p>
                <a
                  href="https://sugarhospital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-roboto bg-white hover:bg-red-500 hover:text-white text-primary/95 font-semibold px-6 sm:px-8 lg:px-8 py-3 lg:py-2 sm:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SugarHospital;
