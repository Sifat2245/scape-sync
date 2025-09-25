import React from "react";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full py-5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="ScapeSync Logo" className="h-[60px] w-[147px]" />
        </div>

        <div>
          <button className="bg-[#3BA334] text-white font-bold text-base leading-[26px] capitalize py-[10px] px-[26px] rounded-lg shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
