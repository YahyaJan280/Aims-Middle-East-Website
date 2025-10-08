import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";

const MoUPage = () => {
  const certifications = [
    {
      image: logo1,
      title: "Diabetes General Hospital & Research Center, Peshawar",
      period: "2025–2028",
      description:
        "The Diabetes General Hospital & Research Center, a project of AIMS, is officially licensed as a 30-bed In-Patient Facility. This recognition underscores our continuous dedication to providing quality medical care, research, and community health services in the region.",
      badge: "Licensed Facility",
    },
    {
      image: logo2,
      title: "Alhamd Shariah Advisory Services Certification",
      period: "Fiscal Year Ending June 30, 2025",
      description:
        "Alhamd Shariah Advisory Services has certified the Zakat process of AIMS Pakistan. This certification reaffirms our compliance with Shariah principles and our commitment to maintaining transparency and trust in the utilization of Zakat funds for healthcare and social development.",
      badge: "Shariah Compliant",
    },
    {
      image: logo3,
      title: "Pakistan Centre for Philanthropy (PCP) Certification",
      period: "Excellence & Leadership Standard",
      description:
        "AIMS Pakistan has been certified by the Pakistan Centre for Philanthropy (PCP) for Excellence and Leadership under the FBR's Non-Profit Organization (NPO) Evaluation Standards. This certification validates our effective governance, accountability, and commitment to delivering measurable social impact.",
      badge: "PCP Certified",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-28 font-roboto px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          

          <h1 className="text-4xl md:text-5xl font-bold text-primary/95 mb-4 py-8">
            Memorandum of Understanding
          </h1>
         
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At AIMS Middle East, we believe that meaningful partnerships,
            official recognitions, and transparent practices are the foundation
            of sustainable impact. Our collaborations and certifications reflect
            our unwavering commitment to ethical governance, quality healthcare,
            and community welfare.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto mb-24 font-roboto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary/95 text-center font-roboto mb-4">
            Official Recognitions & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary/95 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 gap-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Left Section (No background) */}
                  <div className="md:w-1/4 p-8 flex flex-col items-center justify-center text-primary/95">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-28 h-28 object-contain mb-4 rounded-lg bg-white p-2 shadow-md"
                    />
                    <span className="bg-primary/10 text-primary/95 px-4 py-1.5 rounded-full text-sm font-semibold">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/4 p-8 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold text-primary/95 flex-1">
                        {cert.title}
                      </h3>
                      <span className="bg-primary/10 text-primary/95 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center font-roboto">
          <div className="bg-primary/95 rounded-3xl shadow-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Network of Excellence
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Partner with AIMS Middle East to create meaningful impact through
              certified, ethical, and transparent healthcare initiatives.
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

export default MoUPage;
