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
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary mt-8 md:mt-12 lg:mt-12">
          <section className="relative text-white py-16 sm:py-20 lg:py-24 xl:py-28">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  About AIMS Middle East
                </h1>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl max-w-3xl mx-auto leading-relaxed font-medium px-4">
                  Empowering communities and restoring health, dignity, and hope
                  across regions.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Who We Are Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 items-center mb-12 sm:mb-16 lg:mb-20">
                  <div className="order-2 md:order-1">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                      alt="Medical professionals providing healthcare"
                      className="rounded-2xl shadow-xl w-full h-auto object-cover hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="font-roboto text-3xl md:text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-center md:text-left font-bold text-primary mb-3 sm:mb-4 lg:mb-6">
                      Who We Are
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed font-medium mb-4 sm:mb-6 lg:mb-8">
                      AIMS Middle East (Abaseen Institute of Medical Sciences)
                      is a registered NGO committed to delivering compassionate,
                      affordable, and accessible healthcare. Inspired by the
                      Abaseen Spirit — "Father of the Rivers" — we bring care
                      and hope to communities across Pakistan and the Middle
                      East.
                    </p>

                    <h2 className="font-roboto text-3xl sm:text-3xl md:text-4xl  lg:text-4xl xl:text-5xl 2xl:text-5xl text-center md:text-left font-bold text-primary mb-3 sm:mb-4">
                      Our Purpose
                    </h2>
                    <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg text-gray-700 text-muted-foreground leading-relaxed font-medium">
                      We exist to reduce the burden of diabetes, hypertension,
                      and other non-communicable diseases (NCDs) through
                      prevention, education, and care.
                    </p>
                  </div>
                </div>

                {/* Core Values Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12">
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
                      className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 sm:p-8 lg:p-8 xl:p-10 border border-gray-100"
                    >
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary/95 mx-auto mb-4" />
                      <h3 className="font-roboto text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-xl font-bold text-primary/95 mb-2">
                        {title}
                      </h3>
                      <p className="font-roboto text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium text-gray-700 text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Vision & Mission Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gray-100">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                {/* Vision */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-8 xl:p-10 border-t-4 border-primary/95 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 sm:mr-4 flex-shrink-0" />
                    <h2 className="font-roboto text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-primary/95">
                      Vision
                    </h2>
                  </div>
                  <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed font-medium">
                    To lead a comprehensive, quality-assured, and affordable
                    diabetes healthcare institute for the region.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-8 xl:p-10 border-t-4 border-primary/95 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 sm:mr-4 flex-shrink-0" />
                    <h2 className="font-roboto text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-primary/95">
                      Mission
                    </h2>
                  </div>
                  <p className="font-roboto text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-700 text-muted-foreground leading-relaxed font-medium">
                    To pool resources from public and private sectors in KP,
                    Pakistan, and beyond to build sustainable healthcare
                    solutions for diabetes and NCDs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recognitions & Partnerships - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-primary/95 mb-4 sm:mb-6">
                  Recognitions & Partnerships
                </h2>
                <p className="font-roboto text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 text-muted-foreground font-medium px-4">
                  Strengthened by donors, partners, and dedicated staff, we
                  continue expanding our reach and impact.
                </p>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-primary/95 text-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 xl:p-14 hover:shadow-2xl transition-shadow duration-300">
                    <Globe className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4" />
                    <h3 className="font-roboto text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2">
                      Proud Member of
                    </h3>
                    <p className="font-roboto text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      Dubai Humanitarian (since 2022)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Closing CTA - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-primary">
          <section className="text-white py-12 sm:py-16 lg:py-20 xl:py-24 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="font-roboto text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-4">
                  AIMS Middle East continues its mission to make healthcare
                  accessible, inclusive, and filled with hope.
                </h2>
                <Link to="/get-involved/membership">
                  <button className="inline-block bg-white text-primary/95 px-8 sm:px-10 py-3 sm:py-4 mt-4 rounded-xl text-sm sm:text-base lg:text-lg xl:text-xl font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
