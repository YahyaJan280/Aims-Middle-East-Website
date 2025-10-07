import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  Hospital,
  Heart,
  Briefcase,
  Handshake,

  Building2,
  Bell,
  BookOpen,
  TrendingUp,
  User,
  Mail,
  Phone,
  Globe,
  Upload,
  CheckCircle,
  AlertCircle,
   Target,
  MessageSquare,
} from "lucide-react";

export default function CSRPartnership() {



  const [formData, setFormData] = useState({
    orgName: "",
    website: "",
    industry: "",
    contactName: "",
    designation: "",
    email: "",
    phone: "",
    financialDonation: false,
    sponsorship: false,
    inKind: false,
    volunteering: false,
    csrCollaboration: false,
    healthcare: false,
    diabetesHospital: false,
    medicalCamps: false,
    education: false,
    otherArea: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [touched, setTouched] = useState({});
  const [fileName, setFileName] = useState("");



 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const validateField = (field) => {
    if (!touched[field]) return true;
    return formData[field] && formData[field].trim() !== "";
  };

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = [
      "orgName",
      "contactName",
      "email",
      "phone",
      "message",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].trim() === ""
    );

    if (missingFields.length > 0 || !formData.consent) {
      setSubmitMessage(
        "Please fill in all required fields and accept the consent."
      );
      const newTouched = {};
      requiredFields.forEach((field) => (newTouched[field] = true));
      setTouched(newTouched);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Prepare partnership types
      const partnershipTypes = [];
      if (formData.financialDonation)
        partnershipTypes.push("Financial Donation");
      if (formData.sponsorship)
        partnershipTypes.push("Sponsorship (Events/Programs)");
      if (formData.inKind) partnershipTypes.push("In-kind Contribution");
      if (formData.volunteering)
        partnershipTypes.push("Employee Volunteering Program");
      if (formData.csrCollaboration)
        partnershipTypes.push("CSR Collaboration/Long-term Partnership");

      // Prepare areas of interest
      const areasOfInterest = [];
      if (formData.healthcare) areasOfInterest.push("Healthcare Projects");
      if (formData.diabetesHospital)
        areasOfInterest.push("Diabetes Hospital & Research Center");
      if (formData.medicalCamps)
        areasOfInterest.push("Community Medical Camps");
      if (formData.education)
        areasOfInterest.push("Education & Awareness Programs");
      if (formData.otherArea)
        areasOfInterest.push(`Other: ${formData.otherArea}`);

      const message = `
New Corporate Partnership Inquiry

ORGANIZATION INFORMATION:
Organization Name: ${formData.orgName}
Website: ${formData.website || "Not provided"}
Industry/Sector: ${formData.industry || "Not specified"}

CONTACT PERSON:
Full Name: ${formData.contactName}
Designation/Role: ${formData.designation || "Not specified"}
Email: ${formData.email}
Phone: ${formData.phone}

TYPE OF PARTNERSHIP/SUPPORT:
${partnershipTypes.length > 0 ? partnershipTypes.join(", ") : "Not specified"}

AREAS OF INTEREST:
${areasOfInterest.length > 0 ? areasOfInterest.join(", ") : "Not specified"}

MESSAGE/PROPOSAL:
${formData.message}

${fileName ? `Document Attached: ${fileName}` : "No document attached"}
      `;

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_wd9gooh",
            template_id: "template_2xlqfxa",
            user_id: "FfvG5phgHdo5IX-K_",
            template_params: {
              fullName: formData.contactName,
              email: formData.email,
              phone: formData.phone,
              message: message,
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage(
          "Partnership inquiry submitted successfully! We will contact you soon to discuss opportunities."
        );
        // Reset form
        setFormData({
          orgName: "",
          website: "",
          industry: "",
          contactName: "",
          designation: "",
          email: "",
          phone: "",
          financialDonation: false,
          sponsorship: false,
          inKind: false,
          volunteering: false,
          csrCollaboration: false,
          healthcare: false,
          diabetesHospital: false,
          medicalCamps: false,
          education: false,
          otherArea: "",
          message: "",
          consent: false,
        });
        setTouched({});
        setFileName("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "There was an error submitting your inquiry. Please try again or contact us directly at asdkhn@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
     <>
     <Navigation />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-primary/90 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Handshake className="w-4 h-4" />
            Corporate Partnership
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary/95 mb-6">
            Partner with AIMS Middle East
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hands with AIMS Middle East to create a lasting impact in
            healthcare, education, and community development. Fill out the form
            below to explore partnership opportunities under your organization's
            CSR or giving program.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-primary/95 px-6 md:px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              Corporate Giving & CSR Partnership Form
            </h2>
            <p className="text-blue-100 mt-2">
              Let's create meaningful change together
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="space-y-10">
              {/* 1. Organization Information */}
              <div>
                <h3 className="text-xl font-bold text-primary/95 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary/95" />
                  Organization Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="orgName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        value={formData.orgName}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("orgName")}
                        placeholder="Enter organization name"
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          !validateField("orgName")
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                      />
                      {!validateField("orgName") && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Website (if any)
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="www.example.com"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Industry / Sector
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white appearance-none"
                        >
                          <option value="">Select industry</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Education">Education</option>
                          <option value="Finance">Finance</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="IT / Technology">
                            IT / Technology
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Contact Person */}
              <div>
                <h3 className="text-xl font-bold text-primary/95 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <User className="w-6 h-6 text-primary/95" />
                  Contact Person
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("contactName")}
                          placeholder="Enter full name"
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            !validateField("contactName")
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                        />
                        {!validateField("contactName") && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            This field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="designation"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Designation / Role
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          placeholder="e.g., CSR Manager"
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("email")}
                          placeholder="your.email@company.com"
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            !validateField("email")
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                        />
                        {!validateField("email") && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            This field is required
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("phone")}
                          placeholder="+92 300 1234567"
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            !validateField("phone")
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                        />
                        {!validateField("phone") && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            This field is required
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Type of Partnership */}
              <div>
                <h3 className="text-xl font-bold text-primary/95 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <Handshake className="w-6 h-6 text-primary/95" />
                  Type of Partnership / Support
                </h3>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <p className="text-sm text-gray-700 mb-4 font-medium">
                    Select one or more options:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        name: "financialDonation",
                        label: "Financial Donation",
                        icon: Heart,
                      },
                      {
                        name: "sponsorship",
                        label: "Sponsorship (Events / Programs)",
                        icon: Target,
                      },
                      {
                        name: "inKind",
                        label:
                          "In-kind Contribution (Equipment, Supplies, etc.)",
                        icon: Building2,
                      },
                      {
                        name: "volunteering",
                        label: "Employee Volunteering Program",
                        icon: Users,
                      },
                      {
                        name: "csrCollaboration",
                        label: "CSR Collaboration / Long-term Partnership",
                        icon: Handshake,
                      },
                    ].map(({ name, label, icon: Icon }) => (
                      <label
                        key={name}
                        className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          name={name}
                          checked={formData[name]}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="ml-3 flex items-center gap-2">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <span className="text-base font-medium text-gray-900">
                            {label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Area of Interest */}
              <div>
                <h3 className="text-xl font-bold text-primary/95 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary/95" />
                  Area of Interest
                </h3>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <p className="text-sm text-primary/95 mb-4 font-medium">
                    Which cause would you like to support?
                  </p>

                  <div className="space-y-3">
                    {[
                      { name: "healthcare", label: "Healthcare Projects" },
                      {
                        name: "diabetesHospital",
                        label: "Diabetes Hospital & Research Center",
                      },
                      {
                        name: "medicalCamps",
                        label: "Community Medical Camps",
                      },
                      {
                        name: "education",
                        label: "Education & Awareness Programs",
                      },
                    ].map(({ name, label }) => (
                      <label
                        key={name}
                        className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-green-400 hover:shadow-md cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          name={name}
                          checked={formData[name]}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {label}
                        </span>
                      </label>
                    ))}

                    <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                      <label
                        htmlFor="otherArea"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Other (Please specify):
                      </label>
                      <input
                        type="text"
                        id="otherArea"
                        name="otherArea"
                        value={formData.otherArea}
                        onChange={handleInputChange}
                        placeholder="Describe other areas of interest"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Message / Proposal */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  Message / Proposal <span className="text-red-500">*</span>
                </h3>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Briefly describe your interest or proposal:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("message")}
                    rows={6}
                    placeholder="Tell us about your organization's CSR goals, proposed partnership ideas, or any specific initiatives you'd like to discuss..."
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                      !validateField("message")
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                  ></textarea>
                  {!validateField("message") && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              {/* 6. Upload File */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200 flex items-center gap-2">
                  <Upload className="w-6 h-6 text-blue-600" />
                  Upload File{" "}
                  <span className="text-sm font-normal text-gray-500">
                    (Optional)
                  </span>
                </h3>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-gray-50">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <span className="text-blue-600 hover:text-blue-800 font-semibold">
                      Click to upload
                    </span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <p className="text-sm text-gray-500 mt-2">
                      CSR proposal, brochure, or document (PDF, DOC, DOCX - Max
                      10MB)
                    </p>
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  {fileName && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{fileName}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 7. Consent */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-base text-gray-800">
                    I agree to allow AIMS Middle East to contact me regarding
                    partnership opportunities.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-lg ${
                    submitMessage.includes("successfully")
                      ? "bg-green-50 border-2 border-green-200"
                      : "bg-red-50 border-2 border-red-200"
                  }`}
                >
                  {submitMessage.includes("successfully") ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className={`text-sm font-medium ${
                      submitMessage.includes("successfully")
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-primary/90 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 disabled:from-gray-400 disabled:to-gray-500 text-white text-lg font-semibold py-5 px-6 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Partnership Inquiry...
                    </>
                  ) : (
                    <>
                      <Handshake className="w-6 h-6" />
                      Send Partnership Inquiry
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  We typically respond within 2-3 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Questions? Contact our partnerships team at{" "}
            <a
              href="mailto:asdkhn@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              asdkhn@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
