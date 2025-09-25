import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 ">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 xl:px-0">
        {/* Logo */}
        <div>
          <img src={logo} alt="ScapeSync Logo" className="h-[60px] w-[147px] md:h-[60px] md:w-[147px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#3BA334] text-white font-bold text-base leading-[26px] capitalize py-[10px] px-[26px] rounded-lg shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col items-center gap-4">
          <button className="bg-[#3BA334] text-white font-bold text-base leading-[26px] capitalize py-[10px] px-[26px] rounded-lg shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 w-full text-center">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
