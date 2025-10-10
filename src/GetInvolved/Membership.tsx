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
    if (!formData.fullName || !formData.email || !formData.phone || !formData.dob) {
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
      const message = `
New Membership Application

Date of Birth: ${formData.dob}
Gender: ${formData.gender}

Documents to Upload:
- CNIC/ID Proof: ${formData.uploadCNIC ? "Yes" : "No"}
- Professional Certification: ${formData.uploadProfCert ? "Yes" : "No"}
- Additional Docs: ${formData.uploadProfCertApplicable ? "Yes" : "No"}
      `;

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_wd9gooh",
          template_id: "template_2xlqfxa",
          user_id: "FfvG5phgHdo5IX-K_",
          template_params: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message,
          },
        }),
      });

      if (response.ok) {
        setSubmitMessage("Application submitted successfully! We will contact you soon.");
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 mt-8 to-blue-50 py-12 font-roboto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12 py-8 lg:py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary/95 mb-4">
              Become a Member
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join our community of passionate individuals dedicated to making a
              positive impact across Pakistan and the Middle East.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary/95 px-6 md:px-8 py-6 text-center text-white">
              <h1 className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-3">
                Membership Application Form
              </h1>
              <p className="text-blue-100 mt-2">
                Please fill in all required information
              </p>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 lg:p-10 space-y-8">
              {/* Personal Information */}
              <div>
                <h1 className="text-xl font-bold text-primary/95 mb-6 pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                  Personal Information
                </h1>

                {/* Full Name */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Enter your full name"
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors font-roboto ${
                          !validateField("fullName")
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                      />
                      {!validateField("fullName") && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1 font-roboto">
                          <AlertCircle className="w-4 h-4" /> This field is required
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "email",
                        label: "Email Address",
                        type: "email",
                        icon: Mail,
                        placeholder: "your.email@example.com",
                      },
                      {
                        name: "phone",
                        label: "Phone Number",
                        type: "tel",
                        icon: Phone,
                        placeholder: "+92 300 1234567",
                      },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {field.label} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur(field.name)}
                            placeholder={field.placeholder}
                            className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors font-roboto ${
                              !validateField(field.name)
                                ? "border-red-300 focus:border-red-500"
                                : "border-gray-300 focus:border-blue-500"
                            }`}
                          />
                          {!validateField(field.name) && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1 font-roboto">
                              <AlertCircle className="w-4 h-4" /> This field is required
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h1 className="text-xl font-bold text-primary/95 mb-6 pb-2 border-b-2 border-blue-200 flex items-center gap-2">
                  Document Upload
                  <span className="text-sm font-normal text-gray-500">(Optional)</span>
                </h1>

                <div className="bg-gray-50 rounded-xl p-6 space-y-4 font-roboto">
                  <p className="text-sm text-gray-600 mb-4">
                    Please indicate which documents you will be submitting with your application
                  </p>

                  {[
                    {
                      name: "uploadCNIC",
                      title: "CNIC / National ID Proof",
                      desc: "Upload a copy of your national identification card",
                    },
                    {
                      name: "uploadProfCert",
                      title: "Professional Certification",
                      desc: "Upload relevant professional certificates or licenses",
                    },
                    {
                      name: "uploadProfCertApplicable",
                      title: "Additional Professional Documents",
                      desc: "Any other relevant professional documentation (if applicable)",
                    },
                  ].map((item) => (
                    <label
                      key={item.name}
                      className="flex items-start p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-primary/70 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name]}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary/95 border-gray-300 rounded focus:ring-2 focus:ring-primary/70"
                      />
                      <div className="ml-3">
                        <span className="text-base font-semibold text-gray-900">{item.title}</span>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-lg font-roboto ${
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
                  className="w-full bg-primary/95 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:bg-primary disabled:bg-gray-400 flex items-center justify-center gap-2 font-roboto"
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
                <p className="text-center text-sm text-gray-500 mt-4 font-roboto">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center font-roboto">
            <p className="text-gray-600">
              Need help? Contact us at{" "}
              <a
                href="mailto:asdkhn@gmail.com"
                className="text-primary/95 hover:text-primary font-semibold"
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
