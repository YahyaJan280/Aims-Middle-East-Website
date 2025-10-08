import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Impact = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white font-roboto mt-8">
        {/* Hero Section */}
        <section className="relative bg-primary/95 text-white py-24">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              At AIMS Middle East, we are committed to making healthcare
              accessible in underdeveloped areas of Khyber Pakhtunkhwa. Since
              2022, our initiatives have focused on screenings, medical care,
              and awareness — bringing vital support to communities that need it
              most.
            </p>
          </div>
        </section>

        {/* Section 1: 2,500+ Patients */}
        <section className="container mx-auto px-6 py-16 font-roboto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                alt="Patients receiving healthcare"
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl font-bold text-primary/95 mb-4">
                2,500+ Patients
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2022, over 2,500 individuals have been screened and
                provided with care and essential medicines. Each screening
                represents not just treatment, but a chance at early detection
                and healthier living.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 40+ Camps Annually */}
        <section className="bg-gray-50  font-roboto">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="mt-[-20px]"> 
                <h1 className="text-4xl font-bold text-primary/95 ">
                  40+ Camps Annually
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
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
                  className="rounded-2xl shadow-lg object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
          <div className="py-14 px-6 text-center">
            <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto">
              At AIMS Middle East, these milestones reflect our mission: to
              deliver hope, care, and healthier futures across underserved
              communities.
            </p>
          </div>
        </section>

        {/* Sustainable Change Section */}
        <section
          className="relative py-24 bg-cover bg-center font-roboto"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&h=600&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-primary/95 opacity-95"></div>
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Change
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
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
