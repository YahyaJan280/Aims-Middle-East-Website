import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Stethoscope, GraduationCap, Users, Heart, Eye, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 mt-10 font-roboto">
        {/* Hero Section */}
        <section className="relative bg-primary/95 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About AIMS Middle East
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Empowering communities and restoring health, dignity, and hope across regions.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="container mx-auto px-6 py-20 font-roboto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Medical professionals providing healthcare"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold text-primary/95 mb-6">
                Who We Are
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium mb-6">
                AIMS Middle East (Abaseen Institute of Medical Sciences) is a registered NGO
                committed to delivering compassionate, affordable, and accessible healthcare.
                Inspired by the Abaseen Spirit — “Father of the Rivers” — we bring care and hope
                to communities across Pakistan and the Middle East.
              </p>

              <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold text-primary/95 mb-4">
                Our Purpose
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                We exist to reduce the burden of diabetes, hypertension, and other
                non-communicable diseases (NCDs) through prevention, education, and care.
              </p>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: Stethoscope, title: "Quality Treatment", desc: "Accessible care for all" },
              { Icon: GraduationCap, title: "Medical Research & Training", desc: "Empowering professionals" },
              { Icon: Users, title: "Community Awareness", desc: "Promoting prevention & education" },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-8"
              >
                <Icon className="w-12 h-12 text-primary/95 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-primary/95 mb-2">{title}</h1>
                <p className="text-gray-700 text-lg font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-gray-50 py-0 lg:py-2 font-roboto">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-primary/95">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-primary/95 mr-4" />
                <h1 className="text-4xl font-bold text-primary/95">Vision</h1>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                To lead a comprehensive, quality-assured, and affordable diabetes healthcare
                institute for the region.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-primary/95">
              <div className="flex items-center mb-6">
                <Heart className="w-10 h-10 text-primary/95 mr-4" />
                <h1 className="text-4xl font-bold text-primary/95">Mission</h1>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                To pool resources from public and private sectors in KP, Pakistan, and beyond to
                build sustainable healthcare solutions for diabetes and NCDs.
              </p>
            </div>
          </div>
        </section>

        {/* Recognitions & Partnerships */}
        <section className="bg-white py-20 font-roboto">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-primary/95 mb-6">
              Recognitions & Partnerships
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium">
              Strengthened by donors, partners, and dedicated staff, we continue expanding our
              reach and impact.
            </p>

            <div className="max-w-xl mx-auto">
              <div className="bg-primary/95 text-white rounded-2xl shadow-xl p-10">
                <Globe className="w-14 h-14 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Proud Member of</h1>
                <p className="text-lg font-medium">Dubai Humanitarian (since 2022)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary/95 text-white py-20 text-center font-roboto">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              AIMS Middle East continues its mission to make healthcare accessible,
              inclusive, and filled with hope.
            </h1>
            <Link to='/get-involved/membership'>
            <button className="inline-block bg-white text-primary/95 px-10 py-4 mt-4 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join Our Mission
            </button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
