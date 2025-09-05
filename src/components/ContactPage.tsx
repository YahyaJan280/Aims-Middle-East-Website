import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";
import Contactimage from "@/assets/contactImg.png";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <header className="sticky top-0 z-50">
          <nav className="flex items-center justify-between bg-primary p-4 w-full">
            {/* Logo */}
            <div className="flex items-center ml-2 lg:ml-8">
              <Link to="/">
                <img
                  src={Aims}
                  alt="AIMS Logo"
                  className="h-10 sm:h-12 w-auto max-w-[120px] hover:scale-105 lg:ml-28 transition-transform duration-300"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Nav Links */}
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } flex-col sm:flex sm:flex-row justify-center items-center sm:gap-8 gap-4
               absolute sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2
               w-full sm:w-auto bg-primary sm:bg-transparent sm:p-0`}
            >
              <li>
                <a
                  href="#"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Purpose
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Objectives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Impact
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-roboto font-medium text-white hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div
              className="sm:hidden flex flex-col cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block w-6 h-1 bg-white my-1 rounded-md"></span>
              <span className="block w-6 h-1 bg-white my-1 rounded-md"></span>
              <span className="block w-6 h-1 bg-white my-1 rounded-md"></span>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-roboto font-bold gradient-text mb-4">
              Get In Touch
            </h1>
            <p className="text-xl font-roboto font-medium text-gray-600 max-w-2xl mx-auto">
              Have questions or need support? We're here to help. Reach out to
              us through any of the channels below.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto">
            {/* Left - Form */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-4xl flex justify-center items-center gradient-text font-bold mb-6">
                  Talk To Us
                </h2>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                    onClick={handleSubmit}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-indigo-600 mb-4">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4">Emails</h3>
                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                    <li>faisalinam1972@gmail.com</li>
                    <li>hZiah@hotmail.com</li>
                  </ul>
                </div>

                {/* Phone Numbers Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-emerald-600 mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4">Phone Numbers</h3>
                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                    <li> +971 50 950 2616</li>
                    <li> +971 50 769 8076</li>
                    <li> +971 56 170 0567</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - Optimized Image */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <img
                  src={Contactimage}
                  alt="Contact illustration"
                  loading="lazy"
                  className="w-full h-full object-cover object-center min-h-[400px] lg:min-h-[700px] max-h-[800px]"
                  srcSet={`${Contactimage} 600w, ${Contactimage} 1200w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
