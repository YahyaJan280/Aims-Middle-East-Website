import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import {
  Menu,
  X,
  ChevronDown,
  Eye,
  Users,
  Hospital,
  Globe,
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

export default function Volunteer() {
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
          name: "Community Camps",
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
                      <ul className="absolute left-0 mt-2 bg-white rounded-md shadow-lg min-w-[200px] z-50">
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
                    className="hover:text-gray-200"
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
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Serve Your Community.
                  <br />
                  Make a Difference.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Join us in our mission to improve health and well-being
                  across Pakistan and the Middle East
                </p>
                <a>
                  href="#volunteer-form"
                  className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                
                  Become a Volunteer
                </a>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                  alt="Volunteers in action"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Volunteer Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Why Volunteer?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Make a Difference */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <Heart className="w-10 h-10 text-teal-700" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Make a Difference
                </h3>
                <p className="text-lg text-gray-600">
                  Support free medical camps and patient treatments
                </p>
              </div>
            </div>

            {/* Meet New People */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <Users className="w-10 h-10 text-teal-700" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Meet New People
                </h3>
                <p className="text-lg text-gray-600">
                  Build your skills and community
                </p>
              </div>
            </div>

            {/* Build Your Skills */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <svg
                    className="w-10 h-10 text-teal-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Build Your Skills
                </h3>
                <p className="text-lg text-gray-600">
                  Gain valuable opportunities for personal and professional
                  growth
                </p>
              </div>
            </div>

            {/* Contribute to the Community */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <Globe className="w-10 h-10 text-teal-700" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Contribute to the Community
                </h3>
                <p className="text-lg text-gray-600">
                  Be part of meaningful change in your community
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Opportunities Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Volunteer Opportunities
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0"></div>
                <p className="text-xl text-gray-900 font-medium">
                  Healthcare Services
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0"></div>
                <p className="text-xl text-gray-900 font-medium">
                  Community Outreach
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0"></div>
                <p className="text-xl text-gray-900 font-medium">
                  Event Planning
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0"></div>
                <p className="text-xl text-gray-900 font-medium">
                  Fundraising
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Registration Form */}
          <div
            id="volunteer-form"
            className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Volunteer Registration
            </h2>

            <VolunteerForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    interests: [],
    availability: "",
    experience: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Your EmailJS credentials
    const SERVICE_ID = "service_wd9gooh";
    const TEMPLATE_ID = "template_2xlqfxa";
    const PUBLIC_KEY = "FfvG5phgHdo5IX-K_";

    const templateParams = {
      to_email: "asdkhn@gmail.com",
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      address: formData.address,
      interests: formData.interests.join(", ") || "None selected",
      availability: formData.availability || "Not specified",
      experience: formData.experience || "No previous experience mentioned",
      message: `New volunteer registration:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
City/Area: ${formData.address}

Areas of Interest:
${formData.interests.map((i) => `- ${i}`).join("\n") || "None selected"}

Availability: ${formData.availability || "Not specified"}

Previous Experience:
${formData.experience || "No previous experience mentioned"}`,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      alert("Thank you for registering as a volunteer! We will contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        interests: [],
        availability: "",
        experience: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Sorry, there was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    "Healthcare Services",
    "Community Outreach",
    "Event Planning",
    "Fundraising",
    "Education & Training",
    "Administrative Support",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="john.doe@example.com"
          />
        </div>
      </div>

      {/* Phone and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="+92 300 1234567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City/Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Peshawar, KPK"
          />
        </div>
      </div>

      {/* Areas of Interest */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-4">
          Areas of Interest <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {opportunities.map((opportunity) => (
            <label
              key={opportunity}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(opportunity)}
                onChange={() => handleCheckboxChange(opportunity)}
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="text-gray-700">{opportunity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Availability <span className="text-red-500">*</span>
        </label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select your availability</option>
          <option value="weekdays">Weekdays</option>
          <option value="weekends">Weekends</option>
          <option value="flexible">Flexible</option>
          <option value="specific">Specific Days (will discuss)</option>
        </select>
      </div>

      {/* Previous Experience */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Previous Volunteer Experience{" "}
          <span className="text-gray-500">(Optional)</span>
        </label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="Tell us about any previous volunteer experience..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-12 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-lg rounded-lg transition-colors shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Register as Volunteer"}
        </button>
      </div>
    </form>
  );
}