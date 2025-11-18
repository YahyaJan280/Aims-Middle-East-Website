import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Navigation from "./Navigation";
import Contactimage from "@/assets/Aims Middle `East Transparent.png";
import Footer from "./Footer";

// Lucide Icons
import {
  Phone,
  Send,
  User,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (idx: number) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("⚠️ Please verify the reCAPTCHA before submitting.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: `New message from ${formData.fullName}`,
    };

    try {
      await emailjs.send(
        "service_wd9gooh",
        "template_2xlqfxa",
        templateParams,
        "FfvG5phgHdo5IX-K_"
      );

      alert("✅ Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setCaptchaValue(null);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      {/* Contact Page Main Content */}
      <div className="min-h-screen relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-roboto font-bold text-primary/95 mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-roboto font-normal text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Have questions or need support? We're here to help. Reach out to
              us through any of the channels below.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start font-roboto">
            {/* Left - Form */}
            <div className="space-y-6 lg:space-y-8">
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/80"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-primary/95 font-bold mb-2">
                    Talk To Us
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 outline-none"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none outline-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>
                    </div>

                    {/* reCAPTCHA */}
                    <div className="flex justify-left ">
                      <ReCAPTCHA
                        sitekey="6Le2LssrAAAAAH8_CeaSQZJVtA3DA6fmbOzI-fLo"
                        onChange={(value) => setCaptchaValue(value)}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-base hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Additional Info Card */}
            </div>

            {/* Right - Image */}
            <div className="lg:sticky lg:top-24 order-first lg:order-last">
              <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[400px] sm:h-[500px] lg:h-[700px] group">
                <img
                  src={Contactimage}
                  alt="Contact AIMS Middle East"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h3 className="font-roboto font-bold text-2xl sm:text-3xl lg:text-4xl mb-2">
                    We're Here to Help
                  </h3>
                  <p className="font-roboto text-sm sm:text-base lg:text-lg text-white/90">
                    Your trusted partner in healthcare excellence
                  </p>
                </div>
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
