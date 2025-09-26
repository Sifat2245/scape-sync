import React from "react";
import footerLogo from "../assets/footer-images/footerLogo.svg";
import topVector from "../assets/footer-images/Vector 3.svg";
import bottomVector from "../assets/footer-images/Vector 2.svg";
import rightVector from "../assets/footer-images/Vector 4.svg";
import appleLogo from "../assets/footer-images/Apple.svg";
import playLogo from "../assets/download-button-logo/Playstore.png";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F3B34] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="absolute -right-22 -top-80 scale-110 opacity-30">
            <img src={topVector} alt="" />
        </div>
        <div className="absolute right-64 -bottom-42 scale-110 opacity-30">
            <img src={bottomVector} alt="" />
        </div>
        <div className="absolute -right-80 -bottom-36 scale-110 opacity-30">
            <img src={rightVector} alt="" />
        </div>
        <div className="relative z-10 px-6 lg:px-12 xl:px-0 py-16 lg:py-32">
          <div className="flex flex-wrap gap-10 justify-between">
            {/* Left column - Logo + Socials */}
            <div>
              <img
                src={footerLogo}
                alt="ScapeSync Logo"
                className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto"
              />
            </div>

            {/* Middle column - Description */}
            <div>
              <p className="text-sm lg:text-lg max-w-md leading-relaxed text-gray-200/80">
                Your all-in-one platform for job scheduling, employee
                management, and client service built to keep your business
                running smoothly from anywhere.
              </p>
            </div>

            {/* Right column - Download buttons */}
            <div className="flex items-start lg:items-end gap-4">
              {/* App Store */}
              <a href="#" aria-label="Download on the App Store">
                <div className="px-4 py-2 rounded-lg border-2 border-[#347C30] transition-all duration-300 hover:bg-[#347C30] hover:shadow-md hover:scale-105 cursor-pointer">
                  <div className="flex gap-4 items-center">
                    <img
                      src={appleLogo}
                      className="w-[26px] h-[32px]"
                      alt="Apple Logo"
                    />
                    <div>
                      <p className="text-[10px]">Download on the</p>
                      <p className="text-[16px] lg:text-[20px]">App Store</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" aria-label="Get it on Google Play">
                <div className="px-4 py-2 rounded-lg border-2 border-[#347C30] transition-all duration-300 hover:bg-[#347C30] hover:shadow-md hover:scale-105 cursor-pointer">
                  <div className="flex gap-4 items-center">
                    <img
                      src={playLogo}
                      className="w-[26px] h-[32px]"
                      alt="Playstore Logo"
                    />
                    <div>
                      <p className="text-[10px]">Download on the</p>
                      <p className="text-[16px] lg:text-[20px]">Google Play</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-10 text-gray-300 pb-14 px-6 md:px-8 xl:px-0">
          <a href="#" aria-label="YouTube">
            <Youtube className=" hover:text-white transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6 hover:text-white transition" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6 hover:text-white transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-white transition" />
          </a>
        </div>
      </div>
      {/* Bottom Copyright */}
      <div className=" border-t border-[#D7DAE0]/50 text-sm text-neutral-200/40">
        <div className="max-w-[1440px] mx-auto py-4 text-center lg:text-left">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
