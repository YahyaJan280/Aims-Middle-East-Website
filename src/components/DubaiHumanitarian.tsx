import React from "react";
import DubaiHumanitarian from "@/assets/Dubai humanitarian .png";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DubaiHumanitarianSection = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-16">
      <div className="text-center mb-10 ">
        <h2 className="text-4xl gradient-text font-roboto text-bold lg:text-5xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Proud Member of Dubai Humanitarian
        </h2>
        <p className="text-lg font-roboto font-medium  sm:text-xl text-gray-700">
          Together for a Healthier, More Resilient World.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start space-y-6">
        {/* Left Column - Text */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed mt-14 ">
          <p>
            At{" "}
            <span className="font-semibold text-primary">AIMS Middle East</span>
            , we are proud to be a recognized member of{" "}
            <span className="font-semibold">Dubai Humanitarian</span>, the
            world’s largest humanitarian hub dedicated to advancing global aid,
            development, and community well-being.
          </p>
          <p>
            This membership strengthens our commitment to addressing diabetes,
            hypertension, and non-communicable diseases (NCDs) by aligning with
            a global network of more than 80 humanitarian organizations,
            including the United Nations, international NGOs, and private sector
            leaders.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="flex justify-center items-center w-full h-full">
          {/* Frame with two logos side-by-side or stacked */}
          <div className="bg-white p-4 rounded-xl  w-full sm:w-10/12 lg:w-full flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src={DubaiHumanitarian}
              alt="Dubai Humanitarian Logo"
              loading="lazy"
              decoding="async"
              className="w-full sm:w-1/2 max-w-sm h-auto object-contain aspect-[3/2]"
            />

            {/* <img
              src={HumanitarianLogo3}
              alt="Dubai Humanitarian Logo 2"
              className="w-full sm:w-1/2 object-contain h-auto"
            /> */}
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-16">
        <Button
          variant="gradient"
          className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm sm:text-base"
          asChild
        >
          <a
            href="https://dubaihumanitarian.ae/member/aims-middle-east/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default DubaiHumanitarianSection;
