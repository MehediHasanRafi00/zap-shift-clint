
import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import Logo from "../components/logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="flex-1 flex flex-col justify-center items-start px-10 md:px-20 py-10 bg-white">
        <div className="mb-8">
          <Logo></Logo>
        </div>
        <div className="w-full max-w-[384px] ">
          <Outlet />
        </div>
      </div>

      <div className="flex-1 hidden md:flex justify-center items-center bg-[#fafdf0]">
        <img src={authImg} alt="Auth Illustration" className="w-3/4 max-w-lg" />
      </div>
    </div>
  );
};

export default AuthLayout;
