import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // To use Link for navigation
import Aims from "@/assets/Navbar-Logo-White.png";

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
        <header className="sticky top-0 z-50">
        <nav className="flex items-center justify-between bg-primary p-4 w-full">
          {/* Logo */}
          <div className="flex items-center ml-2 lg:ml-8">
            <Link to="/">
              <img
                src={Aims}
                alt="AIMS Logo"
                className="h-10 sm:h-12 w-auto max-w-[120px] hover:scale-105 lg:ml-28 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links (centered) */}
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
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-card rounded-lg shadow-card p-8 border border-border">
          {/* Introduction */}
          <div className="">
            <p className="text-lg text-muted-foreground font-roboto font-medium leading-relaxed">
              At AIMS Middle East, safeguarding your privacy is a priority. As a
              proud member of Dubai Humanitarian, we are committed to
              maintaining the highest standards of confidentiality,
              transparency, and trust in all our healthcare and community
              initiatives.
            </p>
          </div>
          <div className="mb-8 pb-6 border-b border-border"></div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  1
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Information We Collect
                </h2>
              </div>
              <ul className="list-disc ml-14 space-y-2">
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  <strong>Personal Data:</strong> Full name, contact details,
                  demographic information.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  <strong>Health Data:</strong> Relevant medical information
                  voluntarily provided for healthcare services and research
                  programs.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  <strong>Technical Data:</strong> Device details, IP address,
                  browser type, and cookies for website functionality and
                  analytics.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  2
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Purpose of Data Use
                </h2>
              </div>
              <ul className="list-disc ml-14 space-y-2">
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Delivering comprehensive diabetes and NCD healthcare services.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Facilitating community-centered programs and awareness
                  campaigns.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Advancing medical research, training, and professional
                  development.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Ensuring compliance with applicable laws and regulations.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  3
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Data Protection & Security
                </h2>
              </div>
              <ul className="list-disc ml-14 space-y-2">
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  All information is handled with strict confidentiality.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Data is stored on secure servers with industry-standard
                  encryption.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Access is restricted to authorized medical and administrative
                  professionals.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  4
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Data Sharing
                </h2>
              </div>
              <p className="text-muted-foreground font-roboto font-medium text-base ml-14">
                We do not sell or trade personal data. Information may be shared
                only with:
              </p>
              <ul className="list-disc ml-14 space-y-2 mt-2">
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Healthcare providers directly involved in your care.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Authorized partners and institutions (including Dubai
                  Humanitarian) where collaboration enhances service delivery.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Regulatory authorities when required by law.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  5
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Your Rights
                </h2>
              </div>
              <ul className="list-disc ml-14 space-y-2">
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Request access, correction, or deletion of your data.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Withdraw consent for non-essential communications.
                </li>
                <li className="text-muted-foreground font-roboto font-medium text-base">
                  Raise concerns by contacting us directly.
                </li>
              </ul>
            </section>
          </div>

          {/* Footer Notice */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-accent rounded-lg p-6">
              <p className="text-sm text-accent-foreground font-roboto font-medium text-center">
                <strong>Important Notice:</strong> This Privacy Policy is
                effective as of the date specified above. For questions, please
                contact AIMS Middle East directly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
