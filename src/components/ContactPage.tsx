import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import contactImage from "@/assets/contactImage.jpg";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navigation />

      {/* Contact Section */}
      <section className="py-20 bg-white px-6 md:px-16 pt-32">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
          {/* Left: Contact Form + Cards */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Contact Form */}
            <div>
              <h2 className="font-roboto font-bold text-3xl text-gray-800 mb-2">
                Talk to Us
              </h2>
              <p className="text-gray-600 mb-6">
                Meet Xperience-AI – your intelligent productivity sidekick. From
                generation.
              </p>

              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="w-full py-3 bg-primary/90 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send your message
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                By clicking, you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
                ,{" "}
                <a href="#" className="underline">
                  Privacy
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Data Protection Policy
                </a>
                .
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className=" py-10 px-4">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-6">
                {/* Office Location Card */}
                <div className="bg-white p-6 rounded-xl rounded-br-[3rem] shadow-lg w-full md:w-1/3 text-center">
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
                <div className="bg-white p-6 rounded-xl rounded-br-[2rem] shadow-lg w-full md:w-1/3 text-center">
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
                <div className="bg-white p-6 rounded-xl rounded-br-[2rem] shadow-lg w-full md:w-1/3 text-center">
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
