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

const Impact = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
   
     <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary/95 text-white py-24">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-center leading-relaxed">
            At AIMS Middle East, we are committed to making healthcare accessible in underdeveloped areas of Khyber Pakhtunkhwa. Since 2022, our initiatives have focused on screenings, medical care, and awareness, bringing vital support to communities that need it most.
          </p>
        </div>
      </section>

      {/* Impact Section 1: 2,500+ Patients */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
              alt="Patients receiving healthcare"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              2,500+ Patients
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 2022, over 2,500 individuals have been screened and provided with care and essential medicines. Each screening represents not just treatment but a chance at early detection and healthier living.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section 2: 40+ Camps Annually */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                40+ Camps Annually
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every year, we organize more than 40 free medical camps across KPK. These camps reach remote communities, offering consultations, medicines, and health awareness where formal healthcare services are often unavailable.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop"
                alt="Medical camp with volunteers"
                className="rounded-xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
         <div className="py-14">
      <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto">
            At AIMS Middle East, these milestones reflect our mission: to deliver hope, care, and healthier futures across underserved communities.
          </p>
    </div>
      </section>
   
      {/* Sustainable Change Section */}
      <section className="relative py-10 bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&h=600&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-primary/95"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sustainable Change
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Our impact extends beyond immediate care. By building awareness and prioritizing prevention, we aim to create lasting improvements in community health and well-being.
          </p>
          
        </div>
      </section>

      {/* Closing Section */}
     
    </div>

      <Footer />
      </>
  )
}

export default Impact
