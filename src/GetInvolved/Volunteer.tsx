import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { Users, Globe, Heart } from "lucide-react";

export default function Volunteer() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen lg:py-12 py-8 bg-gray-50 font-roboto">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-primary/95 mb-6 leading-tight">
                  Serve Your Community.
                  <br />
                  Make a Difference.
                </h1>
                <p className="text-lg md:text-xl text-center text-gray-700 mb-8 leading-relaxed">
                  Join us in our mission to improve health and well-being across
                  Pakistan and the Middle East.
                </p>
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary/95 text-center mb-12">
            Why Volunteer?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Make a Difference */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/95 p-4 rounded-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary/95 mb-3">
                  Make a Difference
                </h1>
                <p className="text-lg text-gray-600">
                  Support free medical camps and patient treatments.
                </p>
              </div>
            </div>

            {/* Meet New People */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/95 p-4 rounded-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary/95 mb-3">
                  Meet New People
                </h1>
                <p className="text-lg text-gray-600">
                  Build your network, skills, and community.
                </p>
              </div>
            </div>

            {/* Build Your Skills */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/95 p-4 rounded-lg">
                <svg
                  className="w-10 h-10 text-white"
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
              <div>
                <h1 className="text-2xl font-bold text-primary/95 mb-3">
                  Build Your Skills
                </h1>
                <p className="text-lg text-gray-600">
                  Gain valuable opportunities for personal and professional growth.
                </p>
              </div>
            </div>

            {/* Contribute to the Community */}
            <div className="flex items-start space-x-4">
              <div className="bg-primary/95 p-4 rounded-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary/95 mb-3">
                  Contribute to the Community
                </h1>
                <p className="text-lg text-gray-600">
                  Be part of meaningful change in your community.
                </p>
              </div>
            </div>
          </div>

          {/* Volunteer Opportunities Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-2xl text-center md:text-left lg:text-left md:text-5xl font-bold text-primary/95 mb-8">
              Volunteer Opportunities
            </h1>

            <div className="space-y-4 font-roboto">
              {[
                "Healthcare Services",
                "Community Outreach",
                "Event Planning",
                "Fundraising",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gray-900 rounded-full flex-shrink-0"></div>
                  <p className="text-xl text-gray-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Registration Form */}
          <div
            id="volunteer-form"
            className="mt-16 bg-white   rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl justify-center items-center font-bold text-primary/95 text-center mb-8">
              Volunteer Registration
            </h1>

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
    <form onSubmit={handleSubmit} className="space-y-6 font-roboto">
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
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors"
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
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors"
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
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors"
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
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors"
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
            <label key={opportunity} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interests.includes(opportunity)}
                onChange={() => handleCheckboxChange(opportunity)}
                className="w-5 h-5 text-primary/95 border-gray-300 rounded focus:ring-primary/95"
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
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors"
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
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary/95 transition-colors resize-none"
          placeholder="Tell us about any previous volunteer experience..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-6 flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-12 py-4 bg-primary/95 hover:bg-primary/85 text-white font-semibold text-lg rounded-lg transition-all shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Register as Volunteer"}
        </button>
      </div>
    </form>
  );
}
