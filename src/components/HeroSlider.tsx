import React from "react";
import HeroImage from "@/assets/Flowing-Care-Image.png";

// ICONS
import HeartIcon from "@/assets/E1.png";
import EqualIcon from "@/assets/E2.png";
import SmileIcon from "@/assets/E3.png";
import DiamondIcon from "@/assets/E4.png";

const HeroSection = () => {
  return (
    <section className="w-screen h-[527px] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 bg-[#055baa] overflow-hidden">

      {/* MAIN WRAPPER */}
      <div className="max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 text-white">
          <h1 className="text-left font-roboto text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Flowing Care 
            <br />To Those In Need
          </h1>

          <p className="text-lg font-roboto  text-left text-white/90 mb-6">
            Empowering healthcare professionals <br /> and transforming lives.
          </p>

          <button className="bg-white text-primary flex items-left justify-left font-semibold px-6 py-3 rounded-xl transition-all">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE + ICONS */}
        <div className="relative flex justify-center lg:justify-end">

          {/* MAIN IMAGE */}
         {/* MAIN IMAGE */}
<img
  src={HeroImage}
  className="w-full max-w-[320px] sm:max-w-md lg:max-w-lg rounded-xl object-cover"
  alt="Hero"
/>

{/* ---- ICONS WITH INDIVIDUAL ANIMATIONS ---- */}

{/* Floating Heart */}
<img
  src={HeartIcon}
  className="
    absolute 
    w-8 top-[38%] left-[5%]      /* mobile */

    sm:w-12 sm:top-[34%] sm:left-[12%]  /* tablet */

    lg:w-20 lg:top-[41%] lg:left-[17%]  /* desktop */
    animate-beat
  "
  alt=""
/>

{/* Gently Spinning Diamond */}
<img
  src={DiamondIcon}
  className="
    absolute
    w-10 top-[72%] left-[60%]      /* mobile */

    sm:w-16 sm:top-[68%] sm:left-[66%]  /* tablet */

    lg:w-32 lg:top-[70%] lg:left-[70%]  /* desktop */
    animate-beat
  "
  alt=""
/>

{/* Equal Icon */}
<img
  src={EqualIcon}
  className="
    absolute
    w-6 top-[43%] left-[58%]      /* mobile */

    sm:w-10 sm:top-[41%] sm:left-[63%]  /* tablet */

    lg:w-16 lg:top-[40%] lg:left-[68%]  /* desktop */
    animate-beat
  "
  alt=""
/>

{/* Smile Icon */}
<img
  src={SmileIcon}
  className="
    absolute
    w-3 top-[74%] left-[16%]      /* mobile */

    sm:w-4 sm:top-[72%] sm:left-[23%]  /* tablet */

    lg:w-7 lg:top-[70%] lg:left-[31%]  /* desktop */
    animate-beat
  "
  alt=""
/>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
