import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Eye,
  Users,
  FileCheck,
  Building,
  Hospital,
  BarChart3,
  Heart,
  FileText,
  Briefcase,
  Handshake,
  UserPlus,
  UserCheck,
  BadgeDollarSign,
  Building2,
  Bell,
  BookOpen,
} from "lucide-react";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "./Footer";

export default function TermsOfService() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      name: "About",
      submenu: [
        { name: "Overview ", path: "/about/overview", icon: Eye },
        { name: "Impact ", path: "/impact/glance", icon: BarChart3 },
      ],
    },
    {
      name: "Projects",
      submenu: [
        { name: "Sugar Hospital", path: "/projects/sugar-hospital", icon: Hospital },
        { name: "Community Outreach Camps", path: "/projects/community-outreach", icon: Users },
      ],
    },
    {
      name: "Impact",
    },
    {
      name: "Partners",
      submenu: [
        { name: "Strategic Partners", path: "/partners/strategic", icon: Briefcase },
        { name: "MoUs & Collaborations", path: "/partners/mous", icon: Handshake },
        { name: "Become a Partner", path: "/partners/become", icon: UserPlus },
      ],
    },
    {
      name: "Get Involved",
      submenu: [
        { name: "Donate", path: "/get-involved/donate", icon: Heart },
        { name: "Volunteer", path: "/get-involved/volunteer", icon: UserCheck },
        { name: "Membership", path: "/get-involved/membership", icon: BadgeDollarSign },
        { name: "Corporate Giving & CSR", path: "/get-involved/csr", icon: Building2 },
      ],
    },
    {
      name: "News",
      submenu: [
        { name: "Updates & Events", path: "/news/updates", icon: Bell },
        { name: "Research & Education", path: "/news/research", icon: BookOpen },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-primary shadow-md">
          <nav className="flex items-center justify-between px-6 lg:px-20 py-4">
            {/* Logo */}
            <Link to="/">
              <img
                src={Aims}
                alt="AIMS Logo"
                className="h-10 sm:h-12 lg:ml-20 w-auto max-w-[120px] hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex flex-1 justify-center lg:mr-48 items-center gap-8 text-white font-medium">
              {menuItems.map((item, idx) => (
                <li key={idx} className="relative">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                        className="flex items-center gap-1 hover:text-gray-200"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform ${
                            openDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === idx && (
                        <ul className="absolute left-0 mt-2 bg-white rounded-md shadow-lg min-w-[250px] z-50">
                          {item.submenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={sub.path}
                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <sub.icon size={16} className="text-indigo-600" />
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-gray-300"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-primary text-white p-4">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === idx ? null : idx)
                          }
                          className="w-full flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">{item.name}</div>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openDropdown === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === idx && (
                          <ul className="ml-6 mt-2 space-y-2">
                            {item.submenu.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={sub.path}
                                  className="flex items-center gap-2 hover:text-gray-300"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  <sub.icon size={16} className="text-cyan-400" />
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card rounded-lg shadow-card p-8 border border-border">
            <h1 className="text-4xl items-center text-primary flex justify-center font-roboto font-bold mb-6">
              Terms of Service
            </h1>

            <p className="text-lg text-muted-foreground font-roboto leading-relaxed mb-6">
              Welcome to the AIMS Middle East website. By using our services,
              you agree to the following terms and conditions:
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Scope of Services
                  </h2>
                </div>
                <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                  AIMS Middle East provides healthcare programs, patient support,
                  education, and research initiatives focusing on diabetes and
                  non-communicable diseases (NCDs). Our services aim to enhance
                  access to quality healthcare, promote innovation, and empower
                  communities.
                </p>
              </section>

              {/* Section 2 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Use of Content
                  </h2>
                </div>
                <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                  All website content is for educational and informational purposes. Content should not be used as a substitute for professional medical advice. Always consult a healthcare provider for medical concerns. Unauthorized use, modification, or reproduction of website materials is prohibited.
                </p>
              </section>

              {/* Section 3 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    User Obligations
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-muted-foreground font-roboto leading-relaxed text-base mb-4">
                    Users agree to:
                  </p>
                  <div className="bg-muted rounded-lg p-6">
                    <ul className="space-y-4 font-roboto">
                      <li className="flex items-start space-x-3">
                        <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-base">
                          Provide accurate and truthful information when engaging with us.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-base">
                          Use our services in a lawful and ethical manner.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-base">
                          Refrain from transmitting harmful, misleading, or unauthorized content.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Remaining Sections */}
              {/* Section 4 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start mb-4 space-x-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Intellectual Property
                  </h2>
                </div>
                <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                  All content, including text, images, and research materials, are the intellectual property of AIMS Middle East unless otherwise credited. Any unauthorized reproduction or distribution is strictly prohibited.
                </p>
              </section>

              {/* Section 5 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start mb-4 space-x-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Partnerships & Memberships
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base ml-14">
                  As a recognized member of Dubai Humanitarian, AIMS Middle East may collaborate with international organizations, NGOs, and healthcare institutions. By using our services, you acknowledge that certain programs may be delivered in partnership with these entities.
                </p>
              </section>

              {/* Section 6 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start mb-4 space-x-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    6
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                  AIMS Middle East shall not be held liable for any outcomes resulting from misuse of website content or external links. Services are provided "as is" without warranties of completeness, accuracy, or uninterrupted availability.
                </p>
              </section>

              {/* Section 7 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start mb-4 space-x-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                    7
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Amendments
                  </h2>
                </div>
                <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                  AIMS Middle East reserves the right to update or revise these Terms of Service and Privacy Policy at any time. Continued use of our services constitutes acceptance of the updated terms.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
