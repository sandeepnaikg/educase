// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     const userData = {
//       email,
//       password,
//     };
//     localStorage.setItem("reactInternship", JSON.stringify(userData));

//     setTimeout(() => {
//       navigate("/profile");
//     }, 300);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//       className="bg-[#F7F8F9] flex flex-col min-h-[812px] py-10 px-5 gap-5 w-[375px]"
//     >
//       <div>
//         <div>
//           <h1 className="text-[28px] w-[188px] font-[500]">
//             Signin to your PopX account
//           </h1>
//           <h2 className="text-[18px] text-gray-500">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//           </h2>
//         </div>

//         <form
//           className="mt-[31px] flex flex-col gap-[29px]"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div className="flex flex-col gap-1 relative">
//             <label
//               className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-fit text-[13px]"
//               htmlFor="email"
//             >
//               Email address<span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="sandeep naik"
//                 className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-1 relative">
//             <label
//               className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-fit text-[13px]"
//               htmlFor="pass"
//             >
//               Password<span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
//               <input
//                 type="password"
//                 id="pass"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter password"
//                 className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
//               />
//             </div>
//           </div>
//         </form>
//       </div>

//       <div className="flex flex-col gap-3 font-[400]">
//         <button
//           onClick={handleLogin}
//           className="bg-[#CBCBCB] h-[46px] text-white py-3 rounded-md transition-opacity duration-300 ease-out"
//         >
//           Login
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const userData = {
      email,
      password,
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
      className="bg-[#F7F8F9] flex flex-col min-h-screen py-10 px-5 gap-5 w-[375px]"
    >
      <div>
        <div>
        <h1 className="text-[28px] w-[188px] font-[500] bg-[#F7F8F9]">Signin to your PopX account</h1>
          <h2 className="text-[18px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
        </div>

        <form
          className="mt-[31px] flex flex-col gap-[29px]"
          onSubmit={(e) => e.preventDefault()}
        >
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-fit text-[13px]"
              htmlFor="email"
            >
              Email address &nbsp;
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 relative">
            <label
              className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-fit text-[13px]"
              htmlFor="password"
            >
              Password &nbsp; &nbsp;
            </label>
            <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-3 font-[400] ">
        <button
          onClick={handleLogin}
          className="bg-[#6C25FF]  text-white py-3 rounded-md transition-opacity duration-300 ease-out"
        >
          Login
        </button>
      </div>
    </motion.div>
  );
};

export default SignupPage;
