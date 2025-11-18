import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Impact = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white font-roboto">
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary mt-8 sm:mt-18 md:mt-12 lg:mt-12">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <section className="relative text-white py-16 sm:py-20 lg:py-24 xl:py-28">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6">
                  Our Impact
                </h1>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                  At AIMS Middle East, we are committed to making healthcare
                  accessible in underdeveloped areas of Khyber Pakhtunkhwa.
                  Since 2022, our initiatives have focused on screenings,
                  medical care, and awareness — bringing vital support to
                  communities that need it most.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Section 1: 2,500+ Patients - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                      alt="Patients receiving healthcare"
                      className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-64 sm:h-72 lg:h-80"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-primary mb-3 sm:mb-4">
                      2,500+ Patients
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed">
                      Since 2022, over 2,500 individuals have been screened and
                      provided with care and essential medicines. Each screening
                      represents not just treatment, but a chance at early
                      detection and healthier living.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 2: 40+ Camps Annually - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-50">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-2">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
                  <div>
                    <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-primary mb-3 sm:mb-4">
                      40+ Camps Annually
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed">
                      Every year, we organize more than 40 free medical camps
                      across KPK. These camps reach remote communities, offering
                      consultations, medicines, and health awareness where
                      formal healthcare services are often unavailable.
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop"
                      alt="Medical camp with volunteers"
                      className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-64 sm:h-72 lg:h-80"
                    />
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="text-center">
                  <p className="font-roboto text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto px-4">
                    At AIMS Middle East, these milestones reflect our mission:
                    to deliver hope, care, and healthier futures across
                    underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sustainable Change Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
          <section
            className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&h=600&fit=crop)",
            }}
          >
            <div className="absolute inset-0 bg-primary/95 opacity-95"></div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
              <div className="max-w-[1200px] mx-auto text-center text-white">
                <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6">
                  Sustainable Change
                </h2>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
                  Our impact extends beyond immediate care. By building
                  awareness and prioritizing prevention, we aim to create
                  lasting improvements in community health and well-being.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Impact;
