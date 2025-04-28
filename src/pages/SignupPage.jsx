import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email || !password || !isAgency) {
      alert("Please fill all required fields.");
      return;
    }
    const userData = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };
    localStorage.setItem("reactInternship", JSON.stringify(userData));
    setTimeout(() => {
      navigate("/profile");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#F7F8F9] flex flex-col min-h-screen w-[375px] p-5"
    >
      <div className="flex flex-col flex-grow">
        <h1 className="text-[24px] w-[188px] font-[500]">
          Create your PopX account
        </h1>

        <form
          onSubmit={handleCreateAccount}
          className="mt-[31px] flex flex-col gap-[29px] flex-grow"
        >
          {/* All your inputs here */}
          <div className="flex flex-col gap-1 relative">
            {/* Full Name */}
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="fullname"
            >
              Full Name<span className="text-red-500">*</span> &nbsp; &nbsp;
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="text"
                id="fullname"
                placeholder="sandeep naik"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="phonenumber"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="text"
                id="phonenumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="email"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="pass"
            >
              Password <span className="text-red-500">*</span> &nbsp;
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="password"
                id="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
              htmlFor="companyname"
            >
              Company name
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="text"
                id="companyname"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Agency */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px]" htmlFor="agency">
              Are you an Agency?
            </label>
            <div className="flex gap-5 mt-2">
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={isAgency === "Yes"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={isAgency === "No"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Button placed outside form */}
      <div className="mt-6">
        <button
          onClick={handleCreateAccount}
          className="bg-[#6C25FF] w-full h-[46px] text-white py-3 rounded-md transition-opacity duration-300 ease-out"
        >
          Create Account
        </button>
      </div>
    </motion.div>
  );
};

export default SignupPage;
