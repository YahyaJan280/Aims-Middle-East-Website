import React from "react";
import { Link } from "react-router-dom";
import Aims from "@/assets/Navbar-Logo-White.png";

import { useState } from "react";

export default function TermsOfService() {
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
            <p className="text-lg text-muted-foreground font-roboto leading-relaxed">
              Welcome to the AIMS Middle East website. By using our services,
              you agree to the following terms and conditions:
            </p>
          </div>
          <div className="mb-8 pb-6 border-b border-border"></div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="border-l-4  border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Scope of Services
                </h2>
              </div>
              <p className="text font-roboto-muted-foreground leading-relaxed text-base ml-14">
                AIMS Middle East provides healthcare programs, patient support,
                education, and research initiatives focusing on diabetes and
                non-communicable diseases (NCDs). Our services aim to enhance
                access to quality healthcare, promote innovation, and empower
                communities.
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Use of Content
                </h2>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                All website content is for educational and informational
                purposes. Content should not be used as a substitute for
                professional medical advice. Always consult a healthcare
                provider for medical concerns. Unauthorized use, modification,
                or reproduction of website materials is prohibited.
              </p>
            </section>

            {/* Section 3 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start space-x-3 mb-4">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  User Obligations
                </h2>
              </div>
              <div className="ml-14">
                <p className="text-muted-foreground font-roboto leading-relaxed text-base mb-4">
                  Users agree to:
                </p>
                <div className="bg-muted rounded-lg  p-6">
                  <ul className="space-y-4 font-roboto">
                    <li className="flex items-start space-x-3">
                      <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-roboto text-base">
                        Provide accurate and truthful information when engaging
                        with us.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-roboto text-base">
                        Use our services in a lawful and ethical manner.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-primary rounded-full w-2 h-2 mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-muted-foreground font-roboto text-base">
                        Refrain from transmitting harmful, misleading, or
                        unauthorized content.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start mb-4 space-x-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                All content, including text, images, and research materials, are
                the intellectual property of AIMS Middle East unless otherwise
                credited. Any unauthorized reproduction or distribution is
                strictly prohibited.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start mb-4 space-x-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Partnerships & Memberships
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base ml-14">
                As a recognized member of Dubai Humanitarian, AIMS Middle East
                may collaborate with international organizations, NGOs, and
                healthcare institutions. By using our services, you acknowledge
                that certain programs may be delivered in partnership with these
                entities.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start mb-4 space-x-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  6
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                AIMS Middle East shall not be held liable for any outcomes
                resulting from misuse of website content or external links.
                Services are provided "as is" without warranties of
                completeness, accuracy, or uninterrupted availability.
              </p>
            </section>

            {/* Section 7 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-start mb-4 space-x-3">
                <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  7
                </div>
                <h2 className="text-2xl font-roboto font-bold text-foreground mt-1">
                  Amendments
                </h2>
              </div>
              <p className="text-muted-foreground font-roboto leading-relaxed text-base ml-14">
                AIMS Middle East reserves the right to update or revise these
                Terms of Service and Privacy Policy at any time. Continued use
                of our services constitutes acceptance of the updated terms.
              </p>
            </section>
          </div>

          {/* Footer Notice */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-accent rounded-lg p-6">
              <p className="text-sm text-accent-foreground font-roboto text-center">
                <strong>Important Notice:</strong> These terms are effective as
                of the date specified above. For questions regarding these
                terms, please contact AIMS Middle East directly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
