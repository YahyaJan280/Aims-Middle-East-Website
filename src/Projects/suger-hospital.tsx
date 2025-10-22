import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import SugerHospital from "@/assets/Suger-Hospital.jpg";
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
      { name: "Sugar Hospital", path: "/projects/sugar-hospital", icon: Hospital },
      { name: "Community Camps", path: "/projects/community camps", icon: Users },
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

const SugarHospital = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-primary shadow-md font-roboto">
        <nav className="flex items-center justify-between px-6 lg:px-20 py-4">
          <Link to="/">
            <img
              src={Aims}
              alt="AIMS Logo"
              className="h-10 sm:h-12 lg:ml-20 w-auto max-w-[120px] hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-1 justify-center lg:mr-48 font-roboto items-center gap-8 text-white font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      className="flex items-center gap-1 hover:text-gray-200"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === idx && (
                      <ul className="absolute left-0 mt-2 bg-white rounded-md shadow-lg w-60 z-50">
                        {item.submenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.path}
                              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <sub.icon size={16} className="text-primary/95" />
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

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-primary text-white p-4 font-roboto">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        className="w-full flex items-center justify-between"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openDropdown === idx ? "rotate-180" : ""}`}
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

      {/* Content */}
      <div className="bg-white font-roboto">
        {/* Hero */}
        <section
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${SugerHospital})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-6 h-full flex items-center relative z-10">
            <div className="text-white lg:pl-16 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight text-center md:text-left">
                Transforming Diabetes Care in Khyber Pakhtunkhwa
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed text-center md:text-left">
                Advanced treatment, compassionate care, and innovative research for a healthier community.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
                alt="Healthcare professional"
                className="rounded-lg shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div>
              <h1 className="md:text-4xl text-3xl font-bold text-primary/95 mb-6 text-center md:text-left">
                About the Project
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Sugar Hospital & Research Center, a flagship project of AIMS Middle East, is dedicated to providing specialized healthcare for diabetes and related conditions. Our mission is to combine compassionate patient care with advanced medical expertise, ensuring every individual receives effective treatment.
              </p>

              <div className="space-y-4">
                {[
                  "24/7 Emergency & Outpatient Care",
                  "Advanced Diagnostic Facilities",
                  "Research & Innovation Labs",
                  "Personalized Patient Care",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary/95"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h1 className="font-semibold text-primary/95 text-lg">{text}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="md:text-4xl text-2xl font-bold text-primary/95 mb-6 text-center md:text-left">
                Research & Innovation
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Sugar Hospital, research and innovation are at the heart of our mission. Our team works tirelessly to advance the understanding, treatment, and prevention of diabetes.
              </p>

              <div className="space-y-4">
                {["Early Detection & Prevention", "Treatment Protocol Development", "Community Education Programs"].map(
                  (topic, i) => (
                    <h1 key={i} className="font-semibold text-primary/95 text-lg mb-2">
                      {topic}
                    </h1>
                  )
                )}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=700&fit=crop"
                alt="Researcher with microscope"
                className="rounded-lg shadow-xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.postimg.cc/bvHYwJqy/image.png)" }}
        >
          <div className="absolute inset-0 bg-primary/95"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 font-roboto">
              Leading the Way in Diabetes Care
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8 font-roboto">
              Join us in our mission to provide world-class diabetes care and research in Khyber Pakhtunkhwa
            </p>
            <Link to="https://sugarhospital.com/">
              <button className="bg-white hover:bg-red-500 hover:text-white text-primary/95 font-semibold px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default SugarHospital;
