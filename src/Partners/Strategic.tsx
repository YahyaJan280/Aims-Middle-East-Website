import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import diabetes from "@/assets/diabetes.png";
import KMU from "@/assets/KMU-Logo.png";
import Methi from "@/assets/Meethi-Zindagi.png";
import NBP from "@/assets/NBP.jpg";
import Hilton from "@/assets/Hilton.png";
import LifeforaChild from "@/assets/child.jpg";

const StrategicPartnersPage = () => {
  const partners = [
    {
      logo: diabetes,
      name: "Diabetes Association Khyber Pakhtunkhwa",
      description:
        "Established in 1985, Diabetes Association KP is a charitable organization and owner of the Sugar Hospital land and building. AIMS and the Association collaborate under a long-term MOU to support diabetes care in KP.",
    },
    {
      logo: KMU,
      name: "Khyber Medical University (KMU) & (IFM)",
      description:
        "KMU and AIMS jointly promote Family Medicine in KP. The Department of Family Medicine supports Sugar Hospital as a training and research center for diabetes and related diseases and organizes monthly outreach camps.",
    },
    {
      logo: Methi,
      name: "Meethi Zindagi",
      description:
        "Meethi Zindagi works for the diabetes community across Pakistan through awareness, education, and support. It provides free insulin and glucometers to children with diabetes.",
    },
    {
      logo: NBP,
      name: "National Bank",
      description:
        "National Bank of Pakistan takes pride in providing services including Shariah-compliant banking products, adhering to your faith and offering a premium choice to meet financial needs free of RIBA. NBP supports NPOs like AIMS Pakistan and community-based objectives through the bank’s Corporate Social Responsibility (CSR) program.",
    },
    {
      logo: Hilton,
      name: "Hilton Pharma",
      description:
        "Hilton Pharma is among Pakistan’s leading pharmaceutical companies. It markets products under license from world-renowned research-based pharmaceutical companies and its own branded generic specialties. Hilton Pharma regularly supports Sugar Hospital and community outreach programs.",
    },
    {
      logo: LifeforaChild,
      name: "Life for a Child",
      description:
        "An Australian charity supporting children with type 1 diabetes worldwide. It provides Sugar Hospital with insulin, monitoring equipment, and long-term patient support, improving lives in over 48 countries.",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-28 px-4 font-roboto">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-20">
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
        <div className="max-w-[1215px] mx-auto mb-24 font-roboto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary/95 text-center mb-4">
            Our Trusted Partners
          </h2>
          <div className="w-24 h-1 bg-primary/95 mx-auto mb-12 rounded-full"></div>

          {/* Grid layout — exactly 3 cards per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  {/* ✅ Clean logo without background, padding, or shadow */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <h3 className="text-lg font-bold text-primary/95 mb-2">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center font-roboto">
          <div className="bg-primary/95 rounded-3xl shadow-2xl p-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Partner with AIMS Middle East
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hands with us to create sustainable impact through
              partnerships that redefine excellence and integrity in healthcare
              and social development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved/membership">
                <button className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  Become a Partner
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
