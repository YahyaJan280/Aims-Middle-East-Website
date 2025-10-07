import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import logo1 from "@/assets/logo1.png"
import logo2 from "@/assets/logo2.jpg"
import logo3 from "@/assets/logo3.jpg"
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

const StrategicPartnersPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const partners = [
    { logo: logo1, alt: "Seal of Good Practice" },
    { logo: logo2, alt: "Academic Development Office" },
    { logo: logo3, alt: "Alhumd Shariah Advisory Services" },
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

      <div className="bg-white min-h-screen py-16 px-4">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are proud to partner with other industry leaders and organizations to achieve our goals. 
            Our strategic partners share our commitment to excellence and innovation, and together, 
            we are stronger.
          </p>
        </div>

        {/* Partners Logo Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <img 
                src={logo1} 
                alt="Seal of Good Practice" 
                className="mx-auto w-24 h-auto mb-4 object-contain"
              />
              <p className="font-roboto font-medium text-sm text-gray-600">
                Islamic Centre for Vrbanisation - Excellence in healthcare practices and ethical standards.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <img 
                src={logo2} 
                alt="Academic Development Office" 
                className="mx-auto w-24 h-auto mb-4 object-contain"
              />
              <p className="font-roboto font-medium text-sm text-gray-600">
                Promoting academic excellence and research in healthcare education.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <img 
                src={logo3} 
                alt="Alhumd Shariah Advisory Services" 
                className="mx-auto w-24 h-auto mb-4 object-contain"
              />
              <p className="font-roboto font-medium text-sm text-gray-600">
                AIMS Pakistan is certified by PCP for excellence and leadership under FBR's NPO evaluation standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StrategicPartnersPage;