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
        "National Bank of Pakistan takes pride in providing services including Shariah-compliant banking products, adhering to your faith and offering a premium choice to meet financial needs free of RIBA. NBP supports NPOs like AIMS Pakistan and community-based objectives through the bank's Corporate Social Responsibility (CSR) program.",
    },
    {
      logo: Hilton,
      name: "Hilton Pharma",
      description:
        "Hilton Pharma is among Pakistan's leading pharmaceutical companies. It markets products under license from world-renowned research-based pharmaceutical companies and its own branded generic specialties. Hilton Pharma regularly supports Sugar Hospital and community outreach programs.",
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

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-roboto">
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white mt-16 sm:mt-18 md:mt-20 lg:mt-12">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="font-roboto sm:text-4xl md:text-4xl lg:text-5xl text-3xl   font-bold text-primary/95 mb-4 sm:mb-6">
                  Strategic Partners
                </h1>
                <p className="font-roboto text-base sm:text-lg md:text-xl  lg:text-lg xl:text-xl 2xl:text-xl text-gray-700 max-w-4xl mx-auto text-muted-foreground leading-relaxed px-4">
                  We are proud to collaborate with visionary organizations that
                  share  our commitment<br/> to excellence, innovation, and community
                  well-being. Together, we advance sustainable healthcare and
                  impactful social initiatives across the region.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Partners Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl  font-bold text-primary/95 text-center mb-3 sm:mb-4">
                  Our Trusted Partners
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-primary/95 mx-auto mb-8 sm:mb-10 lg:mb-12 rounded-full"></div>

                {/* Grid layout — exactly 3 cards per row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className=" rounded-2xl shadow-lg hover:shadow-2xl p-5 sm:p-6 lg:p-7 text-center hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex flex-col items-center mb-4">
                        {/* Logo */}
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4"
                        />
                        <h3 className="font-roboto  sm:text-xl lg:text-xl text-2xl font-bold text-primary/95 mb-2">
                          {partner.name}
                        </h3>
                      </div>
                      <p className="font-roboto text-xs sm:text-sm lg:text-sm text-gray-700 text-muted-foreground leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="relative  text-white py-16 sm:py-20 lg:py-24 xl:py-28">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* BLUE CARD WITH CIRCLES INSIDE */}
              <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#055baa] rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 xl:p-14 overflow-hidden">
                {/* Circles inside card */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>

                <h3 className="font-roboto text-2xl sm:text-4xl lg:text-4xl  font-bold text-white mb-3 sm:mb-4">
                  Partner with AIMS Middle East
                </h3>

                <p className="font-roboto text-sm sm:text-base lg:text-lg x text-indigo-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                  Join hands with us to create sustainable impact through
                  partnerships that redefine excellence and integrity in
                  healthcare and social development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/get-involved/membership">
                    <button className="font-roboto bg-white text-[#055baa] hover:bg-[#00adee] hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg transform hover:scale-105">
                      Become a Partner
                    </button>
                  </Link>
                </div>
              </div>
              {/* END CARD */}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default StrategicPartnersPage;
