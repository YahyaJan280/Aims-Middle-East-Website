import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Impact = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white font-roboto">
        {/* Hero Section - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-primary/95 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our Impact
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
              At AIMS Middle East, we are committed to making healthcare
              accessible in underdeveloped areas of Khyber Pakhtunkhwa. Since
              2022, our initiatives have focused on screenings, medical care,
              and awareness — bringing vital support to communities that need it
              most.
            </p>
          </div>
        </section>

        {/* Section 1: 2,500+ Patients */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 font-roboto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                alt="Patients receiving healthcare"
                className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-72 md:h-80"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary/95 mb-4 sm:mb-6">
                2,500+ Patients
              </h2>
              <p className="text-base sm:text-lg text-gray-700 text-muted-foreground leading-relaxed">
                Since 2022, over 2,500 individuals have been screened and
                provided with care and essential medicines. Each screening
                represents not just treatment, but a chance at early detection
                and healthier living.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 40+ Camps Annually - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-gray-50 py-12 sm:py-16 lg:py-20 font-roboto overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary/95 mb-4 sm:mb-6">
                  40+ Camps Annually
                </h2>
                <p className="text-base sm:text-lg text-gray-700 text-muted-foreground leading-relaxed">
                  Every year, we organize more than 40 free medical camps across
                  KPK. These camps reach remote communities, offering
                  consultations, medicines, and health awareness where formal
                  healthcare services are often unavailable.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop"
                  alt="Medical camp with volunteers"
                  className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-72 md:h-80"
                />
              </div>
            </div>
            
            {/* Bottom Text */}
            <div className="text-center px-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto">
                At AIMS Middle East, these milestones reflect our mission: to
                deliver hope, care, and healthier futures across underserved
                communities.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainable Change Section - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 py-16 sm:py-20 lg:py-24 bg-cover bg-center font-roboto overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&h=600&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-primary/95 opacity-95"></div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Sustainable Change
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Our impact extends beyond immediate care. By building awareness
              and prioritizing prevention, we aim to create lasting improvements
              in community health and well-being.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Impact;