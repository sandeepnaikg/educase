import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  const handleSignupClick = () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      navigate("/signup");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#F7F8F9] flex flex-col justify-between min-h-screen py-10 px-5 gap-5 w-[375px] overflow-y-auto"
    >
      <div className="flex flex-col gap-3 font-[400] mt-auto">
        <div>
          <h1 className="font-semibold text-[23px] ">Welcome to PopX</h1>
          <h2 className="opacity-60 text-gray-600 text-[18px] mb-5 max-w-[232px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </h2>
        </div>
        <button
          onClick={handleSignupClick}
          className="bg-[#6C25FF] h-[46px] py-3 text-white rounded-md transition-opacity duration-300 ease-out"
        >
          Create Account
        </button>
        <button
          onClick={handleLoginClick}
          className="bg-[#CEBAFC] h-[46px] py-3 text-black rounded-md transition-opacity duration-300 ease-out"
        >
          Already Registered? Login
        </button>
      </div>
    </motion.div>
  );
};

export default LandingPage;
