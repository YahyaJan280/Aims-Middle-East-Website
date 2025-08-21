import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons
import aimsLogo from '@/assets/Navbar-Logo-White.png';
import Navigation from "@/components/Navigation"; // Import the updated Navigation component
import Footer from '@/components/Footer'; // Import Footer component

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Updated Navbar */}
      <Navigation /> {/* Use the updated Navigation component */}

      {/* Contact Section with Padding Top */}
      <section className="py-20 bg-white px-6 md:px-16 pt-32">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-roboto font-bold text-3xl  text-center text-gray-800 mb-6">Contact Us</h2>

          {/* Contact Info and Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">You can reach us using the details below:</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="h-6 text-gray-700" />
                  <span className="text-gray-700">(+92) 91 5892728</span>
                </div>
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="h-6 text-gray-700" />
                  <span className="text-gray-700">contact@sugarhospital.com</span>
                </div>
                {/* Location */}
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="h-6 text-gray-700" />
                  <span className="text-gray-700">A-6 B/3, Phase 5, Opposite Edhi Homes, Peshawar, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary/90 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer /> {/* The footer component */}
    </div>
  );
};

export default ContactPage;
