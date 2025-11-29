import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  GraduationCap,
  Users,
  Heart,
  Eye,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import "@/App.css";

export default function Header() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 font-roboto">
        {/* Hero Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary mt-6 md:mt-8 lg:mt-12">
          <section className="relative text-white py-12 md:py-16 lg:py-20  overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-roboto font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
                  About AIMS Middle East
                </h1>
                <p className="font-roboto text-base sm:text-lg md:text-xl mx-auto leading-relaxed font-medium">
                  Empowering communities and restoring health, ,<br/> dignity, and hope
                  across regions.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Who We Are Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-20">
                  <div className="order-2 md:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                      alt="Medical professionals providing healthcare"
                      className="rounded-2xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-left md:text-left font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                      Who We Are
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-muted-foreground text-left font-medium mb-4 md:mb-6 lg:mb-8">
                      AIMS Middle East (Abaseen Institute of Medical Sciences)
                      is a registered NGO committed to delivering compassionate,
                      affordable, and accessible healthcare. Inspired by the
                      Abaseen Spirit — "Father of the Rivers" — we bring care
                      and hope to communities across Pakistan and the Middle
                      East.
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-left md:text-left font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                      Our Purpose
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-muted-foreground text-left font-medium">
                      We exist to reduce the burden of diabetes, hypertension,
                      and other non-communicable diseases (NCDs) through
                      prevention, education, and care.
                    </p>
                  </div>
                </div>

                {/* Core Values Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {[
                    {
                      Icon: Stethoscope,
                      title: "Quality Treatment",
                      desc: "Accessible care for all",
                    },
                    {
                      Icon: GraduationCap,
                      title: "Medical Research & Training",
                      desc: "Empowering professionals",
                    },
                    {
                      Icon: Users,
                      title: "Community Awareness",
                      desc: "Promoting prevention & education",
                    },
                  ].map(({ Icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 md:p-8 lg:p-10 border border-gray-100"
                    >
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">
                        {title}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base font-medium text-gray-700">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Vision & Mission Section - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-100">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {/* Vision */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border-t-4 border-primary hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Eye className="w-8 h-8 md:w-10 md:h-10 text-primary mr-3 md:mr-4 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-primary">
                      Vision
                    </h2>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 text-muted-foreground text-left leading-relaxed font-medium">
                    To lead a comprehensive, quality-assured, and affordable
                    diabetes healthcare institute for the region.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border-t-4 border-primary hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary mr-3 md:mr-4 flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-primary">
                      Mission
                    </h2>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed text-muted-foreground text-left font-medium">
                    To pool resources from public and private sectors in KP,
                    Pakistan, and beyond to build sustainable healthcare
                    solutions for diabetes and NCDs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recognitions & Partnerships - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-primary mb-4 md:mb-6">
                  Recognitions & Partnerships
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12 font-medium">
                  Strengthened by donors, partners, and dedicated staff, we
                  continue expanding our reach and impact.
                </p>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-primary text-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 xl:p-14 hover:shadow-2xl transition-shadow duration-300">
                    <Globe className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4" />
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                      Proud Member of
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl font-medium">
                      Dubai Humanitarian (since 2022)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Closing CTA - Full Width Background */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary">
          <section className="text-white py-12 md:py-16 lg:py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                  AIMS Middle East continues its mission to make healthcare
                  accessible, inclusive, and filled with hope.
                </h2>
                <Link to="/get-involved/membership">
                  <button className="inline-block bg-white text-primary px-6 md:px-8 lg:px-10 py-3 md:py-4 mt-4 rounded-xl text-sm md:text-base lg:text-lg xl:text-xl font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Join Our Mission
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
}