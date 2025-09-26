import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion"; //eslint-disable-line
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="ScapeSync Logo"
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-[60px] xl:h-[60px] transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to={"/auth/login"}>
            <button className="bg-[#3BA334] text-white font-bold text-sm sm:text-base md:text-base leading-[26px] capitalize py-2 px-6 rounded-lg shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden mt-2 px-4 flex flex-col items-center gap-4 pb-4"
        >
          <Link to={'/auth/login'}>
            <button className="bg-[#3BA334] text-white font-bold text-base leading-[26px] capitalize py-2 px-6 rounded-lg shadow-[0_6px_14px_rgba(59,163,52,0.4)] hover:shadow-[0_6px_20px_rgba(59,170,10,0.5)] hover:-translate-y-1 transition-all duration-300 w-full text-center">
              Get Started
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
