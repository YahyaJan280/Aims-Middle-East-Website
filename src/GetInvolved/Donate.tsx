import { useState } from "react";
import {
  Heart,
  Users,
  Copy,
  Check,
  CreditCard,
  Building2,
  Smartphone,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Donation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    donationType: "",
    donationCategory: "",
    paymentMethod: "",
    donationFor: "Patient Care & Treatment",
    donationAmount: "",
    paymentProof: null,
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [copiedField, setCopiedField] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Bank account details
  const bankDetails = {
    bankName: "Allied Bank Limited",
    accountTitle: "Diabetes Research Foundation",
    accountNumber: "0010123456789",
    iban: "PK36ABPA0010123456789012",
    swiftCode: "ABPAPKKA",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const handleProceedToPayment = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.donationCategory ||
      !formData.paymentMethod ||
      !formData.donationAmount
    ) {
      alert("Please fill in all required fields including donation amount.");
      return;
    }

    if (formData.paymentMethod === "Credit/Debit Card") {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv) {
        alert("Please fill in all card details.");
        return;
      }
    }

    setShowPaymentSection(true);
  };

  const handleStripePayment = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentSuccess(true);
      alert(
        `Payment of $${formData.donationAmount} processed successfully via Credit/Debit Card`
      );
    }, 2000);
  };

  const handleManualPaymentSubmit = async () => {
    if (!formData.paymentProof) {
      alert("Please upload payment proof before submitting.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentSuccess(true);
      alert(
        "Thank you! Your donation and payment proof have been submitted successfully. We will verify and confirm shortly."
      );
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      donationType: "",
      donationCategory: "",
      paymentMethod: "",
      donationFor: "Patient Care & Treatment",
      donationAmount: "",
      paymentProof: null,
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setShowPaymentSection(false);
    setPaymentSuccess(false);
  };

  if (paymentSuccess) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-roboto">
          <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] mt-16 sm:mt-18 md:mt-20 lg:mt-12">
            <section className="py-12 sm:py-16 lg:py-20">
              <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h2 className="font-roboto text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Thank You for Your Generosity!
                    </h2>
                    <p className="font-roboto text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      Your donation of{" "}
                      <span className="font-bold text-primary/95">
                        ${formData.donationAmount}
                      </span>{" "}
                      for{" "}
                      <span className="font-semibold">
                        {formData.donationFor}
                      </span>{" "}
                      has been received.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 text-left">
                      <h3 className="font-roboto font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                        Donation Details:
                      </h3>
                      <div className=" space-y-2 text-sm text-gray-600 ">
                        <p>
                          <span className="font-medium">Name:</span>{" "}
                          {formData.fullName}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {formData.email}
                        </p>
                        <p>
                          <span className="font-medium">Category:</span>{" "}
                          {formData.donationCategory}
                        </p>
                        <p>
                          <span className="font-medium">Payment Method:</span>{" "}
                          {formData.paymentMethod}
                        </p>
                      </div>
                    </div>
                    <p className="font-roboto text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                      A confirmation email has been sent to{" "}
                      <span className="font-medium">{formData.email}</span>
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary/95 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
                    >
                      Make Another Donation
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-roboto">
        {/* Hero Section - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white mt-16 sm:mt-18 md:mt-20 lg:mt-12">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h1 className="font-roboto text-left md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8   text-3xl sm:text-4xl  ">
                      Where Your Donation Makes a Difference
                    </h1>
                    <button
                      onClick={() =>
                        document
                          .getElementById("donation-form")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors text-left flex shadow-md hover:shadow-lg"
                    >
                      Donate Now
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
                      alt="Healthcare professionals"
                      className="rounded-2xl shadow-xl w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Impact Cards - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-gradient-to-b from-gray-50 to-white">
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/95 p-3 rounded-lg flex-shrink-0">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-roboto text-lg sm:text-xl font-bold text-primary  mb-2 text-left">
                          Healthcare Access
                        </h3>
                        <p className="font-roboto text-sm sm:text-base text-gray-600 text-muted-foreground leading-relaxed">
                          Support free medical camps and patient treatments
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/95 p-3 rounded-lg flex-shrink-0">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-roboto text-lg sm:text-xl font-bold text-primary mb-2 text-left">
                          Research & Innovation
                        </h3>
                        <p className="font-roboto text-sm sm:text-base text-gray-600 text-muted-foreground leading-relaxed">
                          Fund research in diabetes and community health
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/95 p-3 rounded-lg flex-shrink-0">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-roboto text-lg sm:text-xl font-bold text-primary mb-2 text-left">
                          Community Programs
                        </h3>
                        <p className="font-roboto text-sm sm:text-base text-gray-600 text-muted-foreground leading-relaxed">
                          Provide education and awareness for better living
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/95 p-3 rounded-lg flex-shrink-0">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-roboto text-lg sm:text-xl font-bold text-primary mb-2 text-left">
                          Zakat & Sadaqah
                        </h3>
                        <p className="font-roboto text-sm sm:text-base text-gray-600 text-muted-foreground leading-relaxed">
                          Certified by Alhamd Shariah Advisory Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Donation Form - Edge-to-Edge */}
        <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-white">
          <section id="donation-form" className="py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="max-w-[1200px] mx-auto">
                <div className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border border-gray-100">
                  <h2 className="font-roboto text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-6 sm:mb-8">
                    Make Your Contribution
                  </h2>

                  <div className="space-y-5 sm:space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                          Phone Number{" "}
                          <span className="text-gray-500">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                          Donation Amount{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="donationAmount"
                          value={formData.donationAmount}
                          onChange={handleInputChange}
                          placeholder="Enter amount"
                          required
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    {/* Donation Category and Payment Method */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-xl font-medium text-gray-900 mb-4 text-left">
                          Donation Category{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-3">
                          {[
                            "General Donation",
                            "Zakat",
                            "Sadaqah",
                            "Hospital Fund",
                            "Community Health",
                          ].map((type) => (
                            <label
                              key={type}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="donationCategory"
                                value={type}
                                checked={formData.donationCategory === type}
                                onChange={handleInputChange}
                                className="w-4 h-4 sm:w-5 sm:h-5 text-primary/95 border-gray-300 focus:ring-blue-600"
                              />
                              <span className="text-sm sm:text-base text-gray-700">
                                {type}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xl font-medium text-gray-900 mb-4 text-left">
                          Payment Method <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-3">
                          {[
                            "Credit/Debit Card",
                            "Bank Transfer",
                            "Mobile Wallet / QR Payment",
                          ].map((method) => (
                            <label
                              key={method}
                              className="flex items-center space-x-3 cursor-pointer text-left"
                            >
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method}
                                checked={formData.paymentMethod === method}
                                onChange={handleInputChange}
                                className="w-4 h-4 sm:w-5 sm:h-5 text-primary/95 border-gray-300 focus:ring-blue-600"
                              />
                              <span className="text-sm sm:text-base text-gray-700">
                                {method}
                              </span>
                            </label>
                          ))}
                        </div>

                        {/* Card Details */}
                        {formData.paymentMethod === "Credit/Debit Card" && (
                          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                            <div className="flex items-center mb-4">
                              <CreditCard className="w-5 h-5 text-primary/95 mr-2" />
                              <h4 className="text-sm font-semibold text-gray-900">
                                Card Details
                              </h4>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                                  Card Number{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleInputChange}
                                  placeholder="1234 5678 9012 3456"
                                  maxLength={19}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expiry Date{" "}
                                    <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="MM/YY"
                                    maxLength={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CVV <span className="text-red-500">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    placeholder="123"
                                    maxLength={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Payment Proof Upload */}
                        {(formData.paymentMethod === "Bank Transfer" ||
                          formData.paymentMethod ===
                            "Mobile Wallet / QR Payment") && (
                          <div className="mt-6">
                            <label className="block text-sm font-medium text-primary/95 mb-2">
                              Upload Payment Proof{" "}
                              <span className="text-gray-500">(Optional)</span>
                            </label>
                            <input
                              type="file"
                              id="paymentProof"
                              accept="image/*,application/pdf"
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  paymentProof: e.target.files[0],
                                }))
                              }
                              className="hidden"
                            />
                            <label
                              htmlFor="paymentProof"
                              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm cursor-pointer inline-block"
                            >
                              Choose File
                            </label>
                            <span className="ml-3 text-sm text-gray-500">
                              {formData.paymentProof
                                ? formData.paymentProof.name
                                : "No file chosen"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary mb-4">
                        Donation For
                      </label>
                      <input
                        type="text"
                        name="donationFor"
                        value={formData.donationFor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                        placeholder="Patient Care & Treatment"
                      />
                    </div>

                    {!showPaymentSection && (
                      <div className="pt-6 flex justify-center">
                        <button
                          onClick={handleProceedToPayment}
                          className="w-full md:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-primary  text-white font-semibold text-base sm:text-lg rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Payment Section */}
                  {showPaymentSection && (
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-gray-200">
                      <h3 className="font-roboto text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
                        How to Send Money
                      </h3>

                      {/* Bank Transfer */}
                      {formData.paymentMethod === "Bank Transfer" && (
                        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 mb-6 border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-lg mr-3">
                              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h2 className="font-roboto text-xl sm:text-2xl font-bold text-primary/95">
                              Bank Transfer Details
                            </h2>
                          </div>
                          <div className="space-y-3">
                            {Object.entries(bankDetails).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between items-center bg-gray-50 rounded-lg p-3 shadow-sm"
                              >
                                <div>
                                  <p className="text-xs text-gray-500 uppercase">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </p>
                                  <p className="font-mono font-semibold text-gray-900 text-sm sm:text-base">
                                    {value}
                                  </p>
                                </div>
                                <button
                                  onClick={() => handleCopy(value, key)}
                                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  {copiedField === key ? (
                                    <Check className="w-5 h-5 text-green-600" />
                                  ) : (
                                    <Copy className="w-5 h-5 text-gray-600" />
                                  )}
                                </button>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={handleManualPaymentSubmit}
                            disabled={isSubmitting}
                            className="w-full mt-6 px-6 py-3 bg-primary/95 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-400 text-sm sm:text-base"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Donation"}
                          </button>
                        </div>
                      )}

                      {/* QR Payment */}
                      {formData.paymentMethod ===
                        "Mobile Wallet / QR Payment" && (
                        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 mb-6 border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-lg mr-3">
                              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h2 className="font-roboto text-xl sm:text-2xl font-bold text-blue-600">
                              Scan QR Code to Pay
                            </h2>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-4">
                              <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=diabetescare@bank&pn=DiabetesFoundation&cu=PKR"
                                alt="Payment QR Code"
                                className="w-40 h-40 sm:w-48 sm:h-48"
                              />
                            </div>
                            <p className="text-center text-sm sm:text-base text-gray-600 mb-4">
                              Scan with any mobile banking app or digital wallet
                            </p>
                          </div>

                          <button
                            onClick={handleManualPaymentSubmit}
                            disabled={isSubmitting}
                            className="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-400 text-sm sm:text-base"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Donation"}
                          </button>
                        </div>
                      )}

                      {/* Card Payment */}
                      {formData.paymentMethod === "Credit/Debit Card" && (
                        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 mb-6 border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-lg mr-3">
                              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <h2 className="font-roboto text-xl sm:text-2xl font-bold text-blue-600">
                              Complete Card Payment
                            </h2>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm mb-4">
                            <div className="space-y-4">
                              <div className="flex justify-between items-center py-3 border-b">
                                <span className="text-sm sm:text-base text-gray-600">
                                  Donation Amount:
                                </span>
                                <span className="text-xl sm:text-2xl font-bold text-blue-600">
                                  ${formData.donationAmount}
                                </span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="text-sm sm:text-base text-gray-600">
                                  Card Number:
                                </span>
                                <span className="font-mono text-sm sm:text-base">
                                  •••• •••• •••• {formData.cardNumber.slice(-4)}
                                </span>
                              </div>
                              <div className="flex justify-between items-center py-2">
                                <span className="text-sm sm:text-base text-gray-600">
                                  Name:
                                </span>
                                <span className="font-medium text-sm sm:text-base">
                                  {formData.fullName}
                                </span>
                              </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                              <p className="text-xs sm:text-sm text-blue-800">
                                <strong>Mock Payment:</strong> This is a demo
                                form. No actual transaction will be processed.
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={handleStripePayment}
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg rounded-lg transition-colors disabled:bg-gray-400 flex items-center justify-center shadow-md hover:shadow-lg"
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              `Pay ${formData.donationAmount}`
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
