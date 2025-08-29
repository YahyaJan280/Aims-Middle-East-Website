import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import contactImage from "@/assets/contactImage.jpg";
import { useState } from "react";
import { Link } from "react-router-dom"; // To use Link for navigation
import Aims from '@/assets/Navbar-Logo-White.png'

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <nav className="flex justify-between  items-center bg-primary p-4 w-full">
          {/* Logo with margin and link to Home */}
          <div className="flex items-center ml-2 lg:ml-8">
            <Link to="/"> {/* Clicking the logo redirects to the home page */}
              <img
                src={Aims}
                alt="AIMS Logo"
                className="h-10 lg:ml-28 ml-[-8px] sm:h-12 w-auto max-w-[120px] hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col sm:flex sm:flex-row mr-96  sm:gap-6 gap-4 absolute sm:relative top-16 left-0 sm:top-auto sm:left-auto w-full sm:w-auto bg-primary sm:bg-transparent p-5 sm:p-0 sm:items-center`}
          >
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Home</a></li>
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Purpose</a></li>
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Objectives</a></li>
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Projects</a></li>
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Impact</a></li>
            <li><a href="#" className="font-roboto font-medium text-white hover:text-gray-300">Contact Us</a></li>
          </ul>

          {/* Get Involved Button */}

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

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-40 pt-22">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row lg:gap-12 items-stretch">
          {/* Left: Contact Form + Cards */}
          <div className="flex-1 flex flex-col justify-between space-y-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-roboto font-bold text-3xl text-gray-800 mb-2">
                Talk to Us
              </h2>
              <p className="font-roboto font-medium text-gray-600 mb-6">
                Meet Xperience-AI – your intelligent productivity sidekick. From
                generation.
              </p>

              <form action="#" method="POST" className="space-y-6">
                <div className="font-roboto font-medium grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <select
                    name="reason"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  >
                    <option value="">Select option</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help?"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>

                <Button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send your message
                </Button>
              </form>

              <p className="font-roboto font-medium text-xs text-gray-500 mt-4">
                By clicking, you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
                ,{" "}
                <a href="#" className="font-roboto font-medium underline">
                  Privacy
                </a>{" "}
                and{" "}
                <a href="#" className="font-roboto font-medium underline">
                  Data Protection Policy
                </a>
                .
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="py-10">
              <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-start gap-6">
                {/* Office Location Card */}
                <div className="bg-white p-6 rounded-xl rounded-br-[3rem] shadow-lg w-full sm:w-1/3 text-center">
                  <div className="text-red-600 text-5xl mb-4">📍</div>
                  <h3 className="font-roboto text-lg font-bold text-gray-800 mb-2">
                    Office Locations
                  </h3>
                  <p className="font-roboto font-medium text-gray-600 text-sm leading-relaxed">
                    102/B, Elephant Rd, Motijheel
                    <br />
                    Dhaka - 1212
                  </p>
                </div>

                {/* Phone Number Card */}
                <div className="bg-white p-6 rounded-xl rounded-br-[2rem] shadow-lg w-full sm:w-1/3 text-center">
                  <div className="font-roboto text-blue-600 text-5xl mb-4">
                    📞
                  </div>
                  <h3 className="font-roboto text-lg font-bold text-gray-800 mb-2">
                    Feel Free to Call Us
                  </h3>
                  <p className="font-roboto font-medium text-gray-600 text-sm leading-relaxed">
                    +00 123 4567 890
                    <br />
                    Emergency
                  </p>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-xl rounded-br-[2rem] shadow-lg w-full sm:w-1/3 text-center">
                  <div className="text-red-600 text-5xl mb-4">✉️</div>
                  <h3 className="font-roboto text-lg font-bold text-gray-800 mb-2">
                    Send E-Mail
                  </h3>
                  <p className="font-roboto font-medium text-gray-600 text-sm leading-relaxed">
                    yourmail@domain.com
                    <br />
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={contactImage}
              alt="Contact Office"
              className="rounded-lg shadow-lg w-full h-full max-h-[700px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
