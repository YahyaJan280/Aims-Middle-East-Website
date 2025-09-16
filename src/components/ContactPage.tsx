import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Aims from "@/assets/Navbar-Logo-White.png";
import Contactimage from "@/assets/Aims Middle `East Transparent.png";
import { MapPin, Phone, Mail, Send, User, MessageSquare } from "lucide-react";
import Footer from "./Footer";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // store captcha response token
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("⚠️ Please verify the reCAPTCHA before submitting.");
      return;
    }

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: `New message from ${formData.fullName}`,
      to_email: "asdkhn@gmail.com", // always send here
    };

    try {
      await emailjs.send(
        "service_wd9gooh", // ✅ Your EmailJS Service ID
        "template_2xlqfxa", // ✅ Your EmailJS Template ID
        templateParams,
        "FfvG5phgHdo5IX-K_" // ✅ Your EmailJS Public Key
      );

      alert("✅ Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setCaptchaValue(null); // reset captcha after sending
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    }
  };


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
                  className="h-10 sm:h-12 w-auto max-w-[120px] hover:scale-105 lg:ml-24 transition-transform duration-300"
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
              {["Home", "Purpose", "Objectives", "Projects", "Impact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-roboto font-medium text-white hover:text-gray-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                  </div>
                    {/* reCAPTCHA */}
                  <ReCAPTCHA
                    sitekey="6LfmNMsrAAAAAOmQq4YYkJ7zJrlQpJ_YbQgOX02m"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                  {/* Submit */}
                  <div
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer transform active:scale-95 active:bg-blue-800"
                    onClick={handleSubmit}
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl shadow-lg overflow-hidden relative h-[600px]">
                <img
                  src={Contactimage}
                  alt="Contact"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
