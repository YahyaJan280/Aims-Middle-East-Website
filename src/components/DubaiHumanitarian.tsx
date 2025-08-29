import React from "react";
import HumanitarianLogo2 from "@/assets/Dubai.png"; // Individual image 1
import HumanitarianLogo3 from "@/assets/dubai.jpg"; // Individual image 2
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DubaiHumanitarianSection = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Proud Member of <span className="text-blue-600">Dubai Humanitarian</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Together for a Healthier, More Resilient World.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
          <p>
            At <span className="font-semibold text-blue-600">AIMS Middle East</span>, we are proud to be a recognized member of{" "}
            <span className="font-semibold">Dubai Humanitarian</span>, the world’s largest humanitarian hub dedicated to
            advancing global aid, development, and community well-being.
          </p>
          <p>
            This membership strengthens our commitment to addressing diabetes, hypertension, and
            non-communicable diseases (NCDs) by aligning with a global network of more than 80 humanitarian
            organizations, including the United Nations, international NGOs, and private sector leaders.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-4">What This Membership Means for Us</h3>
          <ul className="space-y-3">
            {[
              "Collaboration – Partnering with global humanitarian actors to expand the impact of our healthcare initiatives.",
              "Innovation – Leveraging Dubai Humanitarian’s ecosystem to improve medical research, training, and awareness programs.",
              "Outreach – Enhancing access to affordable, quality healthcare for underserved communities across the Middle East.",
              "Recognition – Strengthening our credibility as a trusted institution in the fight against non-communicable diseases.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Images */}
        <div className="flex justify-center items-center w-full h-full">
          {/* Frame with two logos side-by-side or stacked */}
          <div className="bg-white p-4 rounded-xl shadow-md w-full sm:w-10/12 lg:w-full flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src={HumanitarianLogo2}
              alt="Dubai Humanitarian Logo 1"
              className="w-full sm:w-1/2 object-contain h-auto"
            />
            <img
              src={HumanitarianLogo3}
              alt="Dubai Humanitarian Logo 2"
              className="w-full sm:w-1/2 object-contain h-auto"
            />
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-12">
        <Button
          variant="gradient"
          className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm sm:text-base"
          asChild
        >
          <a href="https://dubaihumanitarian.ae/member/aims-middle-east/" target="_blank" rel="noopener noreferrer">
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default DubaiHumanitarianSection;
