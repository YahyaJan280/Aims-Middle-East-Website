import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import SugerHospital from '@/assets/Suger-Hospital.jpg'
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

import { Stethoscope, GraduationCap, Lightbulb, Globe } from "lucide-react";


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
        name: "community capms",
        path: "/projects/community camps",
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

const sugarHospital = () => {

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
      <section className="relative h-[500px] bg-cover bg-center" style={{
       backgroundImage: `url(${SugerHospital})`
      }}>
        <div className="absolute inset-0  bg-black/50"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="text-white lg:pl-16 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Diabetes Care in Khyber Pakhtunkhwa
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Advanced treatment, compassionate care, and innovative research for a healthier community
            </p>
           
          </div>
        </div>
      </section>

      {/* About the Project Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
              alt="Healthcare professional with tablet"
              className="rounded-lg shadow-xl object-cover w-full h-[500px]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About the Project
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sugar Hospital & Research Center, a flagship project of AIMS Middle East, is dedicated to providing specialized healthcare for diabetes and related conditions. Our mission is to combine compassionate patient care with advanced medical expertise, ensuring every individual receives timely and effective treatment.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">24/7 Emergency & Outpatient Care</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Advanced Diagnostic Facilities</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Research & Innovation Labs</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Personalized Patient Care</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Diabetes Management</h3>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Endocrinology Consultations</h3>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Research & Clinical Trials</h3>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Nutrition & Wellness</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Research & Innovation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Sugar Hospital, research and innovation are at the heart of our mission. Our dedicated team works tirelessly to advance the understanding, treatment, and prevention of diabetes. Through clinical studies, technology integration, and community-focused research, we aim to develop innovative solutions that improve patient outcomes and set new standards in healthcare.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Early Detection & Prevention</h3>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Treatment Protocol Development</h3>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Community Education Programs</h3>
              </div>
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

      {/* Call to Action with Hospital Image Background */}
      <section className="relative py-20 bg-cover bg-center" style={{
        backgroundImage: 'url(https://i.postimg.cc/bvHYwJqy/image.png)'
      }}>
        <div className="absolute inset-0 bg-primary/95"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Leading the Way in Diabetes Care
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join us in our mission to provide world-class diabetes care and research in Khyber Pakhtunkhwa
          </p>
          <Link to='https://sugarhospital.com/'>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Learn More
          </button>
          </Link>
        </div>
      </section>
    </div>
    <Footer />
 </>
  )
}

export default sugarHospital
