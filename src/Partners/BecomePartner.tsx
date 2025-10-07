import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const BecomePartnerPage = () => {
  const partnershipPoints = [
    {
      title: "Drive Transformation",
      description:
        "Become a part of our strategic partnership network and join hands in driving transformation and achieving shared goals in healthcare and social sectors across the region.",
    },
    {
      title: "Share Our Vision, Amplify Our Mission",
      description:
        "Align with our mission of accessible healthcare and ethical governance — and move forward together in shaping a sustainable future for our communities.",
    },
    {
      title: "Collaborate for Impact",
      description:
        "Partner with us to leverage collective expertise, amplify our reach, and deliver impactful solutions to some of the most pressing challenges in healthcare.",
    },
    {
      title: "Strengthen Communities",
      description:
        "Work with us to empower individuals, strengthen communities, and create long-lasting impact across diverse societal needs and healthcare goals.",
    },
  ];

  return (
    <>
      <Navigation />

      <section className="bg-white min-h-screen py-24 px-6">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-primary/95 mb-6 tracking-tight">
            Become a Partner
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Partnering with AIMS Middle East means aligning with our vision to
            create sustainable healthcare and community development. Together,
            we can transform ideas into impact.
          </p>
        </div>

        {/* Partnership Points */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {partnershipPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-primary/95 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}

          <div className="text-center mt-20">
            <p className="text-lg text-gray-700 mb-6">
              Ready to make an impact together?
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary/95 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:bg-primary transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BecomePartnerPage;
