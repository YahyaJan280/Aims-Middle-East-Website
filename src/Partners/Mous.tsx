import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import {
  Menu,
  X,
  ChevronDown,
  Eye,
  Users,
  Hospital,
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
  Award,
  Shield,
  CheckCircle,
  FileText,
} from "lucide-react";

const menuItems = [
  {
    name: "About",
    submenu: [
      { name: "Overview", path: "/about/overview", icon: Eye },
      { name: "Impact", path: "/about/impact", icon: TrendingUp },
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

const MoUPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const certifications = [
    {
      icon: Hospital,
      title: "Diabetes General Hospital & Research Center, Peshawar",
      period: "2025–2028",
      description: "The Diabetes General Hospital & Research Center, a project of AIMS, is officially licensed as a 30-bed In-Patient Facility. This recognition underscores our continuous dedication to providing quality medical care, research, and community health services in the region.",
      badge: "Licensed Facility",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Shield,
      title: "Alhamd Shariah Advisory Services Certification",
      period: "Fiscal Year Ending June 30, 2025",
      description: "Alhamd Shariah Advisory Services has certified the Zakat process of AIMS Pakistan. This certification reaffirms our compliance with Shariah principles and our commitment to maintaining transparency and trust in the utilization of Zakat funds for healthcare and social development.",
      badge: "Shariah Compliant",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Award,
      title: "Pakistan Centre for Philanthropy (PCP) Certification",
      period: "Excellence & Leadership Standard",
      description: "AIMS Pakistan has been certified by the Pakistan Centre for Philanthropy (PCP) for Excellence and Leadership under the FBR's Non-Profit Organization (NPO) Evaluation Standards. This certification validates our effective governance, accountability, and commitment to delivering measurable social impact.",
      badge: "PCP Certified",
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary shadow-md">
        <nav className="flex items-center justify-between px-6 lg:px-20 py-4">
          <Link to="/">
            <img
              src={Aims}
              alt="AIMS Logo"
              className="h-10 sm:h-12 lg:ml-20 w-auto max-w-[120px] hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </Link>

          <ul className="hidden lg:flex flex-1 justify-center lg:mr-48 font-roboto items-center gap-8 text-white font-medium">
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

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

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

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-4">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Memorandum of Understanding
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
            Building Trust through Certified Excellence
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At AIMS Middle East, we believe that meaningful partnerships, official recognitions, and transparent practices are the foundation of sustainable impact. Our collaborations and certifications reflect our unwavering commitment to ethical governance, quality healthcare, and community welfare.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Excellence</h3>
              <p className="text-gray-600">Recognized by leading authorities</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Compliance</h3>
              <p className="text-gray-600">Shariah-compliant operations</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Governance</h3>
              <p className="text-gray-600">Accountability in every action</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Official Recognitions & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="md:flex">
                  {/* Icon Section */}
                  <div className={`md:w-1/4 bg-gradient-to-br ${cert.color} p-8 flex flex-col items-center justify-center text-white`}>
                    <cert.icon className="w-20 h-20 mb-4" />
                    <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/4 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 flex-1">
                        {cert.title}
                      </h3>
                      <span className="ml-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Network of Excellence
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Partner with AIMS Middle East to create meaningful impact through certified, ethical, and transparent healthcare initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partners/become">
                <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg">
                  Become a Partner
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-700 transition-colors duration-300">
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

export default MoUPage;