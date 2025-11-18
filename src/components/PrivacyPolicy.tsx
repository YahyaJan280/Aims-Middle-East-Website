import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Database,
  FileText,
  Mail,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const sections = [
    {
      number: 1,
      icon: Database,
      title: "Information We Collect",
      items: [
        {
          label: "Personal Data:",
          text: "Full name, contact details, demographic information.",
        },
        {
          label: "Health Data:",
          text: "Relevant medical information voluntarily provided for healthcare services and research programs.",
        },
        {
          label: "Technical Data:",
          text: "Device details, IP address, browser type, and cookies.",
        },
      ],
    },
    {
      number: 2,
      icon: FileText,
      title: "Purpose of Data Use",
      items: [
        { text: "Delivering diabetes and NCD healthcare services." },
        { text: "Facilitating community-centered programs and campaigns." },
        { text: "Advancing medical research, training, and development." },
        { text: "Improving our services and user experience." },
      ],
    },
    {
      number: 3,
      icon: Lock,
      title: "Data Protection & Security",
      items: [
        { text: "Information handled with strict confidentiality." },
        { text: "Data stored on secure servers with encryption." },
        { text: "Regular security audits and compliance monitoring." },
        { text: "Limited access to authorized personnel only." },
      ],
    },
    {
      number: 4,
      icon: Shield,
      title: "Your Rights",
      items: [
        { text: "Access and review your personal data at any time." },
        { text: "Request corrections to inaccurate information." },
        { text: "Withdraw consent for data processing where applicable." },
        { text: "Request deletion of your personal data." },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <Navigation />

        {/* Hero Section */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white pt-24 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-roboto font-bold text-primary mb-4 sm:mb-6">
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-muted-foreground leading-relaxed px-4">
                Your privacy and data security are our top priorities. Learn how
                we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <main className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            {/* Introduction Card */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/80"></div>

                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield
                        className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-roboto font-bold text-primary  mb-3 sm:mb-4">
                      Our Commitment to Your Privacy
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-gray-600 leading-relaxed">
                      AIMS Middle East is committed to protecting your personal
                      information and maintaining transparency about our data
                      practices. This Privacy Policy outlines how we collect,
                      use, store, and safeguard your information in accordance
                      with applicable data protection laws and healthcare
                      regulations.
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
              {sections.map((section, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/80"></div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <section.icon
                            className="w-7 h-7 text-primary"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold flex-shrink-0">
                            {section.number}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-roboto font-bold text-primary transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-6"></div>

                    {/* Items */}
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed group/item"
                        >
                          <CheckCircle2
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                            strokeWidth={2}
                          />
                          <span>
                            {item.label && (
                              <strong className="text-primary/95">
                                {item.label}
                              </strong>
                            )}{" "}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10 -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 -ml-32 -mb-32 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Mail className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-roboto font-bold text-white mb-3">
                      Questions About Your Privacy?
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed mb-6">
                      If you have any questions, concerns, or requests regarding
                      this Privacy Policy or your personal data, please don't
                      hesitate to contact us. We're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="mailto:asdkhn@gmail.com"
                        className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <Mail className="w-5 h-5" />
                        Email Us
                      </a>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold text-sm sm:text-base"
                      >
                        Contact Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
