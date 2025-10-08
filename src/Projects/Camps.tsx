import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CommunityOutreach = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-primary/95 text-white py-28">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6">
              Community Health Camps
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-roboto">
              At AIMS Middle East, our community health camps are designed to
              provide essential healthcare services to underserved areas.
              Through these camps, we ensure that quality medical care reaches
              even the most remote communities.
            </p>
          </div>
        </section>

        {/* Accessible Care Section */}
        <section className="container mx-auto px-6 py-10 font-roboto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="md:text-4xl text-2xl font-bold text-primary/95 mb-6">
              Accessible Care for Everyone
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We organize mobile and stationary camps that deliver free medical
              check-ups, consultations, and treatments, targeting communities
              with limited access to healthcare.
            </p>
          </div>

          {/* Services Provided */}
          <div className="mb-20 font-roboto">
            <h3 className="text-3xl font-bold text-primary/95 text-center mb-12">
              Services Provided
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    General Health Check-ups
                  </h4>
                  <p className="text-gray-700">
                    Blood pressure, sugar levels, BMI, etc.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Medical Treatment & Prescriptions
                  </h4>
                  <p className="text-gray-700">
                    Immediate care for common ailments
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Health Awareness & Education
                  </h4>
                  <p className="text-gray-700">
                    Guidance on nutrition, hygiene, and disease prevention
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Specialist Consultations
                  </h4>
                  <p className="text-gray-700">
                    Doctors and specialists visit for specific health concerns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2,500+ Patients Served Section */}
        <section className="bg-gray-50 py-3 font-roboto">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80"
                  alt="Medical professionals providing healthcare at community camp"
                  className="rounded-xl shadow-2xl object-cover w-full h-[450px]"
                />
              </div>
              <div>
                <h2 className="md:text-5xl text-2xl font-bold text-primary/95 mb-6">
                  2,500+ Patients Served
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Since our inception, we have successfully screened and
                  provided medical care to over 2,500 individuals across Khyber
                  Pakhtunkhwa. Each camp brings hope and healing to families who
                  otherwise lack access to essential healthcare services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our dedicated medical teams work tirelessly to ensure every
                  patient receives proper diagnosis, treatment, and follow-up
                  care, making a tangible difference in their lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 40+ Camps Annually Section */}
        <section className="container mx-auto px-6 py-16 font-roboto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="md:text-5xl text-2xl font-bold text-primary/95 mb-6">
                40+ Camps Annually
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every year, we organize more than 40 free medical camps across
                remote and underserved areas of KPK. These camps are
                strategically planned to reach communities where healthcare
                infrastructure is minimal or non-existent.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From mountainous villages to rural settlements, our mobile
                health units bring comprehensive medical services directly to
                those who need them most, ensuring no one is left behind.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop&q=80"
                alt="Medical team conducting health screening at outdoor camp"
                className="rounded-xl shadow-2xl object-cover w-full h-[450px]"
              />
            </div>
          </div>
        </section>

        {/* Impact in Numbers */}
        <section className="bg-primary/95 py-16 font-roboto">
          <div className="container mx-auto px-6">
            <h2 className="md:text-4xl text-3xl font-bold text-white text-center mb-12">
              Impact in Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-4">
                  2,500+
                </div>
                <p className="text-xl text-gray-100 font-semibold">
                  Patients Served Every Year
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-4">
                  30+
                </div>
                <p className="text-xl text-gray-100 font-semibold">
                  Camps Conducted Every Year
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-4">
                  15+
                </div>
                <p className="text-xl text-gray-100 font-semibold">
                  Remote Locations Reached
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-6 py-16 text-center font-roboto">
          <h2 className="md:text-4xl text-3xl font-bold text-primary/95 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 font-roboto">
            Your support enables us to extend our reach and bring quality
            healthcare to more communities across Khyber Pakhtunkhwa. Together,
            we can build healthier futures.
          </p>
          <Link to='/get-involved/Donate'>
          <button className="bg-primary/95 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
            Support Our Camps
          </button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CommunityOutreach;
