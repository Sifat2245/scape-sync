import React from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import heroImage from "../assets/hero-image/Rectangle 161124256@3x.png";
import appleLogo from "../assets/download-button-logo/Apple.png";
import playLogo from "../assets/download-button-logo/Playstore.png";
import leafSVG from "../assets/hero-image/leaf.svg";
import leaf2SVG from "../assets/hero-image/leaf2.svg";

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
  },
};

const leafVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.4 },
  },
};

const buttonsContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="w-full overflow-hidden h-[785px] mt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left relative"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute bottom-90 right-80"
              variants={leafVariants}
            >
              <img src={leafSVG} alt="leaf decorative" />
            </motion.div>

            <div className="relative">
              <motion.h1
                variants={textVariants}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] mt-8 md:mt-0 font-bold text-[#202922] tracking-tight leading-snug sm:leading-tight lg:leading-[1.1]"
              >
                All Your Jobs <br className="hidden sm:block" /> One Smart App
              </motion.h1>

              <motion.div
                className="absolute -bottom-1 lg:right-30 -z-10"
                variants={leafVariants}
              >
                <img src={leaf2SVG} alt="leaf decorative" />
              </motion.div>
            </div>

            <motion.p
              variants={textVariants}
              className="mt-6 max-w-lg mx-auto lg:mx-0 text-base sm:text-[14px] md:text-[16px] text-[#5F6A62] leading-relaxed"
            >
              Built for business owners, employees, and clients to streamline
              job scheduling, service tracking, and team management in one
              powerful app.
            </motion.p>

            <motion.div
              className="mt-[75px] flex justify-center lg:justify-start gap-4"
              variants={buttonsContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="#"
                aria-label="Download on the App Store"
                variants={buttonVariants}
              >
                <div className="px-[16px] py-[10px] rounded-lg border-2 border-[#C7E6C5] transition-all duration-300 hover:bg-[#EAF7E9] hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <div className="flex gap-2 items-center">
                    <img
                      src={appleLogo}
                      className="lg:w-[22px] lg:h-[27px]"
                      alt="Apple Logo"
                    />
                    <div>
                      <p className="text-[9px]">Download on the</p>
                      <p className="lg:text-[18px]">App Store</p>
                    </div>
                  </div>
                </div>
              </motion.a>
              <motion.a
                href="#"
                aria-label="Get it on Google Play"
                variants={buttonVariants}
              >
                <div className="px-[16px] py-[10px] rounded-lg border-2 border-[#C7E6C5] transition-all duration-300 hover:bg-[#EAF7E9] hover:shadow-md hover:scale-[1.02] cursor-pointer">
                  <div className="flex gap-2 items-center">
                    <img
                      src={playLogo}
                      className="w-[22px] h-[27px]"
                      alt="Playstore Logo"
                    />
                    <div>
                      <p className="text-[9px]">Download on the</p>
                      <p className="lg:text-[18px]">Google Play</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src={heroImage}
              alt="ScapeSync app on a smartphone"
              className="scale-130 w-[260px] sm:w-[360px] md:w-[480px] lg:w-[560px] xl:w-[680px] 2xl:w-[820px] object-contain mt-18"
            />

            <div
              className="w-[1440px] h-[124px] absolute -bottom-10 md:-bottom-24 -left-80"
              style={{
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
