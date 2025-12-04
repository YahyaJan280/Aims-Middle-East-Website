import React from "react";
import DubaiHumanitarian from "@/assets/Dubai humanitarian .png";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DubaiHumanitarianSection = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-4 rounded-xl relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] py-16">
      <div className="text-center mb-10 ">
        <h2 className="text-2xl text-primary font-roboto text-bold  lg:text-5xl sm:text-3xl md:text-4xl md:text-center  font-bold xl:text-center text-left mb-3">
          Proud Member of <br/> Dubai Humanitarian
        </h2>
        <p className="text-lg font-roboto font-medium text-left lg:text-center  sm:text-xl text-muted-foreground text-gray-700">
          Together for a Healthier, More Resilient World.
        </p>
      </div>

      <div className="max-w-[1210px] mx-auto  grid lg:grid-cols-2 gap-12 items-start space-y-6">
        {/* Left Column - Text */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed lg:mt-24 text-left">
          <p className="text-muted-foreground">
            At{" "}
            <span className="font-semibold text-primary">AIMS Middle East</span>
            , we are proud to be a recognized member of{" "}
            <span className="font-semibold ">Dubai Humanitarian</span>, the
            world’s largest humanitarian hub dedicated to advancing global aid,
            development, and community well-being.
          </p>
          <p className="text-muted-foreground">
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
          <div className="shadow-lg p-4 rounded-xl  w-full sm:w-10/12 lg:w-full lg:h-80 flex flex-col sm:flex-row items-center justify-center gap-6">
            <img
              src={DubaiHumanitarian}
              alt="Dubai Humanitarian Logo"
              loading="lazy"
              decoding="async"
              className="w-full sm:w-1/2 max-w-sm h-auto object-contain aspect-[3/2]"
            />
          </div>
        </div>
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-16">
        <Button
          variant="gradient"
          className="bg-[#00adee] text-white font-semibold px-4 sm:px-5 md:px-8 py-6 sm:py-2.5 rounded-lg 
                       transition-all hover:bg-[#055baa] hover:text-white hover:scale-105 hover:shadow-xl shadow-md 
                       text-xs sm:text-sm md:text-lg"
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
