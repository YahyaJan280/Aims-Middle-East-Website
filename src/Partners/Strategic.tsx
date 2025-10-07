import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";
import { Handshake } from "lucide-react";

const StrategicPartnersPage = () => {
  const partners = [
    {
      logo: logo1,
      name: "Islamic Centre for Urbanisation",
      description:
        "Excellence in healthcare practices and ethical community standards.",
    },
    {
      logo: logo2,
      name: "Academic Development Office",
      description:
        "Promoting academic excellence and advancing healthcare research and education.",
    },
    {
      logo: logo3,
      name: "Alhamd Shariah Advisory Services",
      description:
        "Certified by PCP for excellence and leadership under FBR’s NPO evaluation standards.",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-28 px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full shadow-lg mb-6 border border-primary/30">
            <Handshake className="w-10 h-10 text-primary/95" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary/95 mb-4">
            Strategic Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are proud to collaborate with visionary organizations that share
            our commitment to excellence, innovation, and community well-being.
            Together, we advance sustainable healthcare and impactful social
            initiatives across the region.
          </p>
        </div>

        {/* Partners Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-primary/95 text-center mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-primary/95 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-28 h-28 object-contain mb-4 rounded-lg bg-white p-2 shadow-md"
                  />
                  <h3 className="text-xl font-bold text-primary/95 mb-2">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-primary/95 rounded-3xl shadow-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner with AIMS Middle East
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hands with us to create sustainable impact through
              partnerships that redefine excellence and integrity in healthcare
              and social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partners/become">
                <button className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  Become a Partner
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StrategicPartnersPage;
