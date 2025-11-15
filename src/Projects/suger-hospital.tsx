import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SugerHospital from "@/assets/Suger-Hospital.jpg";

const SugarHospital = () => {
  return (
    <>
      <Navigation />

      <div className="bg-white font-roboto">
        {/* Hero Section - Edge to Edge with Background Image */}
        <section
          className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${SugerHospital})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center md:text-left">
                Transforming Diabetes Care in Khyber Pakhtunkhwa
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-center md:text-left">
                Advanced treatment, compassionate care, and innovative research for a healthier community.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                alt="Healthcare professional"
                className="rounded-lg shadow-xl object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/95 mb-4 sm:mb-6 text-center md:text-left">
                About the Project
              </h2>
              <p className="text-base sm:text-lg text-gray-700 text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Sugar Hospital & Research Center, a flagship project of AIMS Middle East, is dedicated to providing specialized healthcare for diabetes and related conditions. Our mission is to combine compassionate patient care with advanced medical expertise, ensuring every individual receives effective treatment.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  "24/7 Emergency & Outpatient Care",
                  "Advanced Diagnostic Facilities",
                  "Research & Innovation Labs",
                  "Personalized Patient Care",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-primary/95"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-primary/95 text-base sm:text-lg">{text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-2">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary/95 mb-4 sm:mb-6 text-center md:text-left">
                Research & Innovation
              </h2>
              <p className="text-base sm:text-lg text-gray-700 text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                At Sugar Hospital, research and innovation are at the heart of our mission. Our team works tirelessly to advance the understanding, treatment, and prevention of diabetes.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {["Early Detection & Prevention", "Treatment Protocol Development", "Community Education Programs"].map(
                  (topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary/95 rounded-full flex-shrink-0 mt-2"></div>
                      <h3 className="font-semibold text-primary/95 text-base sm:text-lg">
                        {topic}
                      </h3>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=700&fit=crop"
                alt="Researcher with microscope"
                className="rounded-lg shadow-xl object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
              />
            </div>
          </div>
        </section>

        {/* CTA Section - Edge to Edge */}
        <section
          className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 py-16 sm:py-20 lg:py-24 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url(https://i.postimg.cc/bvHYwJqy/image.png)" }}
        >
          <div className="absolute inset-0 bg-primary/95"></div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 sm:mb-6">
              Leading the Way in Diabetes Care
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              Join us in our mission to provide world-class diabetes care and research in Khyber Pakhtunkhwa
            </p>
            <a href="https://sugarhospital.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white hover:bg-red-500 hover:text-white text-primary/95 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors text-sm sm:text-base">
                Learn More
              </button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SugarHospital;