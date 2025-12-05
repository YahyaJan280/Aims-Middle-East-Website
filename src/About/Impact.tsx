import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Heart, Users, Stethoscope, TrendingUp } from "lucide-react";
import BgImage from "@/assets/Abaseen-Spirit-BG .png";
const Impact = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen  font-roboto">
        {/* Hero Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-[#0553a0] via-[#055baa] to-[#0d7ed6] mt-8 md:mt-8 lg:mt-8">
          <section className="relative text-white py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-roboto font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
                  Our Impact
                </h1>
                <p className="font-roboto text-base sm:text-lg md:text-xl mx-auto leading-relaxed font-medium">
                  At AIMS Middle East, we are committed to making healthcare
                  accessible in underdeveloped areas of Khyber Pakhtunkhwa.
                  Since 2022, our initiatives have focused  on screenings,
                  medical care, and awareness — bringing vital support to
                  communities that need it most.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Section 1: 2,500+ Patients - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw]  -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-20">
                  <div className="order-2 md:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                      alt="Patients receiving healthcare"
                      className="rounded-2xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-left md:text-left font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                      2,500+ Patients Served
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-left text-muted-foreground font-medium mb-4 md:mb-6">
                      Since 2022, over 2,500 individuals have been screened and
                      provided with care and essential medicines. Each screening
                      represents not just treatment, but a chance at early
                      detection and healthier living.       Our dedicated teams ensure every patient receives
                      comprehensive care, making a real difference in their
                      health outcomes and quality of life.
                    </p>
                   
                  </div>
                </div>

                {/* Impact Stats Cards */}
              </div>
            </div>
          </section>
        </div>

        {/* Section 2: 40+ Camps Annually - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -mt-20 -ml-[50vw] -mr-[50vw] bg-gray-100">
          <section className="py-12 md:py-16 lg:py-2">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl  text-left md:text-left font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                      40+ Camps Annually
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 text-left text-muted-foreground  leading-relaxed font-medium mb-4 md:mb-6">
                      Every year, we organize more than 40 free medical camps
                      across KPK. These camps reach remote communities, offering
                      consultations, medicines, and health awareness where
                      formal healthcare services are often unavailable. From mountainous villages to rural settlements, our mobile
                      health units bring comprehensive medical services directly
                      to those who need them most, ensuring no one is left
                      behind.
                    </p>
                    
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop"
                      alt="Medical camp with volunteers"
                      className="rounded-2xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sustainable Change Section - Full Width Background */}
        
          <section
            className="text-white py-12  sm:py-16 md:py-20 lg:py-12 mt-12 text-center rounded-lg relative  overflow-hidden  bg-no-repeat"
            style={{
              backgroundImage: `url(${BgImage})`,
            }}
          >
           
           

            <div className="container  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Sustainable Change
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl  leading-relaxed font-medium mb-6 sm:mb-8">
                  Our impact extends beyond immediate care. By building
                  awareness and prioritizing prevention, we aim to create
                  lasting improvements in community health and well-being.
                </p>
              </div>
            </div>
          </section>
       
      </div>

      <Footer />
    </>
  );
};

export default Impact;
