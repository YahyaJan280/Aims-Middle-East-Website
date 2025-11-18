import React from "react";
import {
  Shield,
  FileText,
  Users,
  Lock,
  Lightbulb,
  AlertCircle,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function TermsOfService() {
  const sections = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Scope of Services",
      content:
        "AIMS Middle East provides healthcare programs, patient support, education, and research initiatives focusing on diabetes and non-communicable diseases (NCDs). Our services aim to enhance access to quality healthcare, promote innovation, and empower communities.",
    },
    {
      id: 2,
      icon: FileText,
      title: "Use of Content",
      content:
        "All website content is for educational and informational purposes. Content should not be used as a substitute for professional medical advice. Always consult a healthcare provider for medical concerns. Unauthorized use, modification, or reproduction of website materials is prohibited.",
    },
    {
      id: 3,
      icon: Users,
      title: "User Obligations",
      content: "Users agree to:",
      list: [
        "Provide accurate and truthful information when engaging with us.",
        "Use our services in a lawful and ethical manner.",
        "Refrain from transmitting harmful, misleading, or unauthorized content.",
      ],
    },
    {
      id: 4,
      icon: Shield,
      title: "Intellectual Property",
      content:
        "All content, including text, images, and research materials, are the intellectual property of AIMS Middle East unless otherwise credited. Any unauthorized reproduction or distribution is strictly prohibited.",
    },
    {
      id: 5,
      icon: Users,
      title: "Partnerships & Memberships",
      content:
        "As a recognized member of Dubai Humanitarian, AIMS Middle East may collaborate with international organizations, NGOs, and healthcare institutions. By using our services, you acknowledge that certain programs may be delivered in partnership with these entities.",
    },
    {
      id: 6,
      icon: AlertCircle,
      title: "Limitation of Liability",
      content:
        'AIMS Middle East shall not be held liable for any outcomes resulting from misuse of website content or external links. Services are provided "as is" without warranties of completeness, accuracy, or uninterrupted availability.',
    },
    {
      id: 7,
      icon: RefreshCw,
      title: "Amendments",
      content:
        "AIMS Middle East reserves the right to update or revise these Terms of Service and Privacy Policy at any time. Continued use of our services constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen relative  w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
        {/* Hero Section */}
        <div className="bg-primary/95 mt-12 text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mr-4">
                <Shield className="w-14 h-14" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Terms of Service
              </h1>
            </div>
            <p className="text-center text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using AIMS Middle East
              services
            </p>
            <div className="flex justify-center mt-8"></div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-[1250px]  mx-auto px-6 py-16 ">
          {/* Introduction Card */}
          <div className="bg-white  rounded-3xl shadow-2xl p-10 mb-10 border border-slate-200 transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 flex-shrink-0">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Welcome to AIMS Middle East
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  By using our services, you agree to the following terms and
                  conditions. These terms govern your access to and use of our
                  website, services, and programs.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 transform hover:-translate-y-1"
                >
                  <div className="p-10">
                    <div className="flex items-start space-x-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="bg-primary text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                            {section.id}
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center">
                            <IconComponent className="w-3 h-3 text-primary" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex items-center space-x-4 mb-5">
                          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-3">
                            <IconComponent className="w-7 h-7 text-blue-600" />
                          </div>
                          <h2 className="text-3xl font-bold text-primary">
                            {section.title}
                          </h2>
                        </div>

                        {/* Content */}
                        <p className="text-slate-600 leading-relaxed text-muted-foreground text-lg mb-5">
                          {section.content}
                        </p>

                        {/* List if present */}
                        {section.list && (
                          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 rounded-2xl  p-8 border-2 border-blue-100">
                            <ul className="space-y-5">
                              {section.list.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-muted-foreground space-x-4"
                                >
                                  <div className="flex-shrink-0 mt-1.5">
                                    <div className="bg-primary rounded-full w-3 h-3 shadow-md"></div>
                                  </div>
                                  <span className="text-slate-700  text-lg flex-1 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-2 bg-primary"></div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-primary/95 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/15 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/15 rounded-full -ml-24 -mb-24"></div>

            <div className="text-center relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                If you have any questions or concerns regarding these Terms of
                Service, please don't hesitate to contact our team.
              </p>
              <button className="bg-white text-primary px-10 py-3 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>

          {/* Acknowledgment */}
        </main>
      </div>
      <Footer />
    </>
  );
}
