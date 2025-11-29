import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import Navigation from "./Navigation";
import Contactimage from "@/assets/Aims Middle `East Transparent.png";
import Footer from "./Footer";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⭐ NEW: Captcha Ref
  const captchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ⭐ Always required
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

      // Reset form
      setFormData({ fullName: "", email: "", phone: "", message: "" });

      // ⭐ IMPORTANT — Always re-enable captcha (fix)
      captchaRef.current.reset();
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

      <div className="min-h-screen relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-bold text-primary/95 mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-roboto font-normal text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Have questions or need support? We're here to help. Reach out to us through the form below.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start font-roboto">

            {/* LEFT — FORM */}
            <div className="space-y-6 lg:space-y-8">
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 overflow-hidden">

                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/80"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-primary/95 font-bold mb-2">
                    Talk To Us
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 text-left mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-3.5 border rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 text-left mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                          className="w-full pl-12 pr-4 py-3.5 border rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 text-left mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone"
                          className="w-full pl-12 pr-4 py-3.5 border rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 text-left mb-2">Message *</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full pl-12 pr-4 py-3.5 border rounded-xl resize-none"
                        />
                      </div>
                    </div>

                    {/* ⭐ reCAPTCHA ALWAYS ENABLED */}
                    <div className="flex justify-left">
                      <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6Le2LssrAAAAAH8_CeaSQZJVtA3DA6fmbOzI-fLo"
                        onChange={(value) => setCaptchaValue(value)}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="lg:sticky lg:top-24 order-first lg:order-last">
              <div className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-[400px] sm:h-[500px] lg:h-[700px]">
                <img
                  src={Contactimage}
                  alt="Contact AIMS Middle East"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                    We're Here to Help
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg">
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
