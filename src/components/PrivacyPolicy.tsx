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
            <ul className="hidden lg:flex flex-1 justify-center  lg:mr-48 items-center gap-8 text-white font-medium">
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

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card rounded-lg shadow-card p-8 border border-border">
            <h1 className="text-4xl text-primary flex justify-center font-roboto font-bold mb-6">
              Privacy Policy
            </h1>

            {/* Sections */}
            <div className="space-y-8">
              {/* Section 1 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Information We Collect
                  </h2>
                </div>
                <ul className="list-disc ml-14 space-y-2">
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    <strong>Personal Data:</strong> Full name, contact details,
                    demographic information.
                  </li>
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    <strong>Health Data:</strong> Relevant medical information
                    voluntarily provided for healthcare services and research
                    programs.
                  </li>
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    <strong>Technical Data:</strong> Device details, IP address,
                    browser type, and cookies.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Purpose of Data Use
                  </h2>
                </div>
                <ul className="list-disc ml-14 space-y-2">
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    Delivering diabetes and NCD healthcare services.
                  </li>
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    Facilitating community-centered programs and campaigns.
                  </li>
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    Advancing medical research, training, and development.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                    Data Protection & Security
                  </h2>
                </div>
                <ul className="list-disc ml-14 space-y-2">
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    Information handled with strict confidentiality.
                  </li>
                  <li className="text-muted-foreground font-roboto font-medium text-base">
                    Data stored on secure servers with encryption.
                  </li>
                </ul>
              </section>
            </div>

            {/* Footer Notice */}
            <div className="mt-12 pt-8 border-t border-border"></div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}