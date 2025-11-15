import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Stethoscope, GraduationCap, Users, Heart, Eye, Globe } from "lucide-react";

export default function Header() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 font-roboto">
        {/* Hero Section - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-primary/90 text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About AIMS Middle East
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-4">
              Empowering communities and restoring health, dignity, and hope across regions.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 font-roboto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Medical professionals providing healthcare"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold text-primary/95 mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-6 sm:mb-8">
                AIMS Middle East (Abaseen Institute of Medical Sciences) is a registered NGO
                committed to delivering compassionate, affordable, and accessible healthcare.
                Inspired by the Abaseen Spirit — "Father of the Rivers" — we bring care and hope
                to communities across Pakistan and the Middle East.
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-left font-bold text-primary/95 mb-3 sm:mb-4">
                Our Purpose
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                We exist to reduce the burden of diabetes, hypertension, and other
                non-communicable diseases (NCDs) through prevention, education, and care.
              </p>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { Icon: Stethoscope, title: "Quality Treatment", desc: "Accessible care for all" },
              { Icon: GraduationCap, title: "Medical Research & Training", desc: "Empowering professionals" },
              { Icon: Users, title: "Community Awareness", desc: "Promoting prevention & education" },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-6 sm:p-8"
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary/95 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary/95 mb-2">{title}</h3>
                <p className="text-gray-700 text-base sm:text-lg font-medium text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission Section - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-gray-50 py-12 sm:py-16 lg:py-20 font-roboto overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-t-4 border-primary/95">
              <div className="flex items-center mb-4 sm:mb-6">
                <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-primary/95 mr-3 sm:mr-4 flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary/95">Vision</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                To lead a comprehensive, quality-assured, and affordable diabetes healthcare
                institute for the region.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border-t-4 border-primary/95">
              <div className="flex items-center mb-4 sm:mb-6">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary/95 mr-3 sm:mr-4 flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary/95">Mission</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                To pool resources from public and private sectors in KP, Pakistan, and beyond to
                build sustainable healthcare solutions for diabetes and NCDs.
              </p>
            </div>
          </div>
        </section>

        {/* Recognitions & Partnerships - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-white py-12 sm:py-16 lg:py-20 font-roboto overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/95 mb-4 sm:mb-6">
              Recognitions & Partnerships
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 text-muted-foreground font-medium px-4">
              Strengthened by donors, partners, and dedicated staff, we continue expanding our
              reach and impact.
            </p>

            <div className="max-w-xl mx-auto">
              <div className="bg-primary/95 text-white rounded-2xl shadow-xl p-8 sm:p-10">
                <Globe className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Proud Member of</h3>
                <p className="text-base sm:text-lg font-medium">Dubai Humanitarian (since 2022)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA - Edge to Edge */}
        <section className="relative w-screen -ml-[50vw] -mr-[50vw] left-1/2 right-1/2 bg-primary/90 text-white py-12 sm:py-16 lg:py-20 text-center font-roboto overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 max-w-3xl mx-auto leading-tight">
              AIMS Middle East continues its mission to make healthcare accessible,
              inclusive, and filled with hope.
            </h2>
            <button 
              onClick={() => window.location.href = '/get-involved/membership'}
              className="inline-block bg-white text-primary/95 px-8 sm:px-10 py-3 sm:py-4 mt-4 rounded-full text-base sm:text-lg md:text-xl font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Our Mission
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}