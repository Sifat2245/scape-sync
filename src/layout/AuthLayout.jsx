import Footer from "@/components/Footer";
import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../assets/logo/logo.png";

const AuthLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to={"/"}>
          <div>
            <img src={logo} alt="ScapeSync Logo" className="h-10 w-auto" />
          </div>
        </Link>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
