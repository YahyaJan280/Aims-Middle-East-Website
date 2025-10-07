import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import { Stethoscope, GraduationCap, Lightbulb, Globe } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  Eye,
  Users,
  Hospital,
  BarChart3,
  Heart,
  Briefcase,
  Handshake,
  UserPlus,
  UserCheck,
  BadgeDollarSign,
  Building2,
  Bell,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
  {
  name: "About",
  submenu: [
    { name: "Overview", path: "/about/overview", icon: Eye },
    { name: "Impact", path: "/about/impact", icon: TrendingUp }, // <-- fixed path
  ],
},
    {
      name: "Projects",
      submenu: [
        {
          name: "Sugar Hospital",
          path: "/projects/sugar-hospital",
          icon: Hospital,
        },
        {
          name: "Community  Camps",
          path: "/projects/community-outreach",
          icon: Users,
        },
      ],
    },
    {
      name: "Partners",
      submenu: [
        {
          name: "Strategic Partners",
          path: "/partners/strategic",
          icon: Briefcase,
        },
        {
          name: "MoUs & Collaborations",
          path: "/partners/mous",
          icon: Handshake,
        },
        { name: "Become a Partner", path: "/partners/become", icon: UserPlus },
      ],
    },
    {
      name: "Get Involved",
      submenu: [
        { name: "Donate", path: "/get-involved/donate", icon: Heart },
        { name: "Volunteer", path: "/get-involved/volunteer", icon: UserCheck },
        {
          name: "Membership",
          path: "/get-involved/membership",
          icon: BadgeDollarSign,
        },
        {
          name: "Corporate Giving & CSR",
          path: "/get-involved/csr",
          icon: Building2,
        },
      ],
    },
    {
      name: "News",
      submenu: [
        { name: "Updates & Events", path: "/news/updates", icon: Bell },
        {
          name: "Research & Education",
          path: "/news/research",
          icon: BookOpen,
        },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
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
          <ul className="hidden lg:flex flex-1  justify-center lg:mr-48 font-roboto items-center gap-8 text-white font-medium">
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
                      <ul className="absolute left-0 mt-2 bg-white rounded-md shadow-lg min-w-[100px] z-50">
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
                    className="hover:text-gray-500"
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
                        <div className="flex items-center gap-2">
                          {item.name}
                        </div>
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

      <div className="min-h-screen bg-gray-50 font-roboto">
        {/* Hero Section */}
        <section className="relative bg-primary/95 text-white py-16 sm:py-20 md:py-24 lg:py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl  font-roboto sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              About AIMS Middle East
            </h1>
            <p className="text-base sm:text-lg  font-roboto md:text-xl lg:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
              communities and empowering people with health, dignity, and hope.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className="relative order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
                alt="Medical professionals providing healthcare"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl  text-center lg:text-left font-roboto sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-gray-700  font-roboto text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-4">
                AIMS Middle East (Abaseen Institute of Medical Sciences) is a
                registered NGO dedicated to delivering compassionate,
                affordable, and accessible healthcare. Inspired by the Abaseen
                Spirit—the "Father of the Rivers"—we flow with care and hope to
                communities across Pakistan and the Middle East.
              </p>
              <h3 className="text-xl text-center lg:text-left font-roboto text-bold sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 mt-6">
                Our Purpose
              </h3>
              <p className="text-gray-700  font-roboto text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                We exist to reduce the burden of diabetes, hypertension, and
                other non-communicable diseases (NCDs) through:
              </p>
            </div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                  <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl  font-roboto md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Quality Treatment
              </h3>
              <p className="text-gray-600  font-roboto text-sm sm:text-base md:text-lg text-center font-medium">
                For those who cannot afford care
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg  font-roboto sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Medical Research & Training
              </h3>
              <p className="text-gray-600  font-roboto text-sm sm:text-base md:text-lg text-center font-medium">
                For professionals
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-full">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl  font-roboto md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Community Awareness
              </h3>
              <p className="text-gray-600  font-roboto text-sm sm:text-base md:text-lg text-center font-medium">
                & prevention programs
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className=" py-12 sm:py-16 md:py-20 lg:py-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-10 border-t-4 border-blue-600">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl  font-roboto sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Vision
                  </h3>
                </div>
                <p className="text-gray-700  font-roboto text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                  To lead a comprehensive, quality-assured, and affordable
                  diabetes healthcare institute for the region.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-10 border-t-4 border-blue-600">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl  font-roboto sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Mission
                  </h3>
                </div>
                <p className="text-gray-700  font-roboto text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                  To pool resources from public and private sectors in KP,
                  Pakistan, and beyond to build sustainable healthcare solutions
                  for Diabetes and NCDs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recognitions & Partnerships Section */}
        <section className="bg-white lg:mt-16 py-12 sm:py-16 md:py-20 lg:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl  font-roboto sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center leading-tight">
              Recognitions & Partnerships
            </h2>
            <p className="text-base sm:text-lg  font-roboto md:text-xl text-gray-600 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed font-medium">
              Strengthened by donors, partners, and dedicated staff, we continue
              to expand our reach and impact.
            </p>

            {/* Proud Member Highlight */}
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="bg-primary/95 text-white rounded-lg shadow-xl p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </div>
                <h3 className="text-xl  font-roboto sm:text-2xl md:text-3xl font-bold mb-2">
                  Proud Member of
                </h3>
                <p className="text-base  font-roboto sm:text-lg md:text-xl font-medium">
                  Dubai Humanitarian (since 2022)
                </p>
              </div>
            </div>
          </div>
        </section>

        
        {/* Closing CTA Section */}
        <section className="bg-primary/95 text-white py-10 sm:py-20 md:py-24 lg:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-roboto sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-xl mx-auto leading-tight">
              AIMS Middle East continues its mission to make healthcare
              accessible, inclusive, and filled with hope.
            </h2>
            <button className="inline-block font-roboto bg-white text-blue-900 px-8 mt-4 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg md:text-xl font-bold shadow-xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Join Our Mission
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
