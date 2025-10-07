import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Membership() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Female",
    uploadCNIC: false,
    uploadProfCert: false,
    uploadProfCertApplicable: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [touched, setTouched] = useState({});

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

  const validateField = (field) => {
    if (!touched[field]) return true;
    return formData[field] && formData[field].trim() !== "";
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.dob
    ) {
      setSubmitMessage("Please fill in all required fields.");
      setTouched({
        fullName: true,
        email: true,
        phone: true,
        dob: true,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Prepare email message (will go in the {{message}} field)
      const message = `
New Membership Application

Date of Birth: ${formData.dob}
Gender: ${formData.gender}

Documents to Upload:
- CNIC/ID Proof: ${formData.uploadCNIC ? "Yes" : "No"}
- Professional Certification: ${formData.uploadProfCert ? "Yes" : "No"}
- Professional Certification (if applicable): ${
        formData.uploadProfCertApplicable ? "Yes" : "No"
      }
      `;

      // Using your existing EmailJS "Contact Us" template
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_wd9gooh", // Replace with your EmailJS Service ID
            template_id: "template_2xlqfxa", // Replace with your "Contact Us" Template ID
            user_id: "FfvG5phgHdo5IX-K_", // Replace with your EmailJS Public Key
            template_params: {
              fullName: formData.fullName, // Maps to {{fullName}}
              email: formData.email, // Maps to {{email}}
              phone: formData.phone, // Maps to {{phone}}
              message: message, // Maps to {{message}}
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage(
          "Application submitted successfully! We will contact you soon."
        );
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "Female",
          uploadCNIC: false,
          uploadProfCert: false,
          uploadProfCertApplicable: false,
        });
        setTouched({});
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "There was an error submitting your application. Please try again or contact us directly at asdkhn@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Join Our Community
            </div>
            <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold text-primary/95 mb-4">
              Become a Member
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our community of passionate individuals dedicated to making a
              positive impact across Pakistan and the Middle East.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-primary/95 px-6 md:px-8 py-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Membership Application Form
              </h2>
              <p className="text-blue-100 mt-2">
                Please fill in all required information
              </p>
            </div>

            {/* Form Body */}
            <div className="p-6 md:p-8 lg:p-10">
              <div className="space-y-8">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h3>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur("fullName")}
                          placeholder="Enter your full name"
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            !validateField("fullName")
                              ? "border-red-300 focus:border-red-500"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                          required
                        />
                        {!validateField("fullName") && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            This field is required
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email and Phone */}
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
                            placeholder="your.email@example.com"
                            className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              !validateField("email")
                                ? "border-red-300 focus:border-red-500"
                                : "border-gray-300 focus:border-blue-500"
                            }`}
                            required
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
                            required
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

                    {/* Date of Birth and Gender */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="dob"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur("dob")}
                            className={`w-full pl-11 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              !validateField("dob")
                                ? "border-red-300 focus:border-red-500"
                                : "border-gray-300 focus:border-blue-500"
                            }`}
                            required
                          />
                          {!validateField("dob") && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              This field is required
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="gender"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors bg-white"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                          <option value="Other">Other</option>
                          <option value="Prefer not to say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Document Upload{" "}
                    <span className="text-sm font-normal text-gray-500">
                      (Optional)
                    </span>
                  </h3>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Please indicate which documents you will be submitting
                      with your application
                    </p>

                    <div className="space-y-3">
                      <label className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="uploadCNIC"
                          checked={formData.uploadCNIC}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">
                            CNIC / National ID Proof
                          </span>
                          <p className="text-sm text-gray-500 mt-1">
                            Upload a copy of your national identification card
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="uploadProfCert"
                          checked={formData.uploadProfCert}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">
                            Professional Certification
                          </span>
                          <p className="text-sm text-gray-500 mt-1">
                            Upload relevant professional certificates or
                            licenses
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="uploadProfCertApplicable"
                          checked={formData.uploadProfCertApplicable}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                          <span className="text-base font-medium text-gray-900">
                            Additional Professional Documents
                          </span>
                          <p className="text-sm text-gray-500 mt-1">
                            Any other relevant professional documentation (if
                            applicable)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
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
                    className="w-full bg-primary/95 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Submit Application
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our terms and
                    conditions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help? Contact us at{" "}
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
