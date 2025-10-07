import { useState } from 'react';
import { Heart, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import {
  Menu,
  X,
  ChevronDown,
  Eye,
  Hospital,
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


export default function Donation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    donationType: '',
    donationCategory: '',
    paymentMethod: '',
    donationFor: 'Patient Care & Treatment'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
 const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'service_wd9gooh';
    const TEMPLATE_ID = 'template_2xlqfxa';
    const PUBLIC_KEY = 'FfvG5phgHdo5IX-K_';
    
    const templateParams = {
      to_email: 'asdkhn@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      donation_type: formData.donationType || 'Not specified',
      donation_category: formData.donationCategory || 'Not selected',
      payment_method: formData.paymentMethod || 'Not selected',
      donation_for: formData.donationFor,
      message: `New donation form submission:\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nDonation Type: ${formData.donationType || 'Not specified'}\nDonation Category: ${formData.donationCategory || 'Not selected'}\nPayment Method: ${formData.paymentMethod || 'Not selected'}\nDonation For: ${formData.donationFor}`
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        donationType: '',
        donationCategory: '',
        paymentMethod: '',
        donationFor: 'Patient Care & Treatment'
      });
      alert('Thank you! Your donation form has been submitted successfully.');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold mb-8 transition-colors">
                Donate Now
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Where Your Donation Makes a Difference
              </h1>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop" 
                alt="Healthcare professionals" 
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Access</h3>
                <p className="text-gray-600">
                  Support free medical camps and patient treatments
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research & Innovation</h3>
                <p className="text-gray-600">
                  Fund research in diabetes and community health
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Programs</h3>
                <p className="text-gray-600">
                  Provide education and awareness for better living
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zakat & Sadaqah</h3>
                <p className="text-gray-600">
                  Certified by Alhamd Shariah Advisory Services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Make Your Contribution
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Type
                </label>
                <input
                  type="text"
                  name="donationType"
                  value={formData.donationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Donation Type
                </label>
                <div className="space-y-3">
                  {['General Donation', 'Zakat', 'Sadaqah', 'Hospital Fund', 'Community Health'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="donationCategory"
                        value={type}
                        checked={formData.donationCategory === type}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-4">
                  Payment Method
                </label>
                <div className="space-y-3">
                  {['Credit/Debit Card', 'Bank Transfer', 'Mobile Wallet / QR Payment'].map((method) => (
                    <label key={method} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <span className="text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Upload Payment Proof <span className="text-gray-500">(Optional)</span>
                  </label>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                    Choose File
                  </button>
                  <span className="ml-3 text-sm text-gray-500">Choose File</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-4">
                Donation For
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  name="donationFor"
                  value={formData.donationFor}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Patient Care & Treatment"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg rounded-lg transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Donate Now'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Certified. Accountable. Transparent.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Zakat certified</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Licensed</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reporting</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
