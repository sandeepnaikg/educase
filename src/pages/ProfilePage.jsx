// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const ProfilePage = () => {
//   const [name, setName] = useState("sandeep naik");
//   const [email, setEmail] = useState("gugulothsandeepnaik82@gmail.com");
//   useEffect(() => {
//     const storedUser = localStorage.getItem("reactInternship");

//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setEmail(parsedUser.email || "gugulothsandeepnaik82@gmail.com");
//       setName(parsedUser.fullName || "sandeep naik");
//     } else {
//       setEmail("gugulothsandeepnaik82@gmail.com");
//       setName("sandeep naik");
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//       className="bg-[#F7F8F9] flex flex-col min-h-[812px] gap-5 w-[375px]"
//     >
//       <div className="flex items-center text-[18px] h-[100px] pl-4 bg-white">
//         Account Settings
//       </div>

//       <div className="pl-[20px] flex gap-5">
//         <div className="relative">
//           <img
//             src="./Ellipse 114@2x.png"
//             className="h-[76px] w-[76px]"
//             alt="Profile IMG"
//           />
//           <img
//             src="./Group 1585@2x.png"
//             className="absolute h-[23px] w-[23px] right-0 bottom-0"
//             alt=""
//           />
//         </div>
//         <div className="flex flex-col">
//           <h3 className="text-[15px]">{name}</h3>
//           <h3 className="text-[14px]">{email}</h3>
//         </div>
//       </div>

//       <div className="px-[20px] text-[14px] font-300 border-dashed border-gray-400 border-b pb-7">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//         efficitur, nunc nec facilisis fringilla, nisi nunc bibendum ligula,
//         vitae facilisis nunc nunc nec nisi. 
//       </div>
//     </motion.div>
//   );
// };

// export default ProfilePage;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [name, setName] = useState("sandeep naik");
  const [email, setEmail] = useState("gugulothsandeepnaik82@gmail.com");
  
  useEffect(() => {
    const storedUser = localStorage.getItem("reactInternship");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setEmail(parsedUser.email || "gugulothsandeepnaik82@gmail.com");
      setName(parsedUser.fullName || "sandeep naik");
    } else {
      setEmail("gugulothsandeepnaik82@gmail.com");
      setName("sandeep naik");
    }
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gray-50 flex flex-col min-h-screen w-full max-w-md mx-auto"
    >
     
      <div className="flex items-center text-lg font-light h-16 px-6 bg-white">
        Account Settings
      </div>
      
      
      <div className="bg-gray-180 mt-2">
        
        <div className="px-6 py-6 flex gap-4">
          <div className="relative">
            <img
              src="./Ellipse 114@2x.png"
              className="h-16 w-16 rounded-full"
              alt="Profile IMG"
            />
            <img
             src="./Group 1585@2x.png"
            className="absolute h-[23px] w-[23px] right-0 bottom-0"
           alt=""
        />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-base font-medium">{name}</h3>
            <h3 className="text-sm text-gray-600">{email}</h3>
          </div>
        </div>
        
        <div className="px-6 py-3 text-xs border-b border-dashed border-gray-300 text-gray-600">
  Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing <br />
  Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut <br />
  Labore Et Dolore Magna Aliquyam Erat, Sed Diam
</div>

      </div>
      
     
      <div className="bg-gray-50 flex-grow"></div>
    </motion.div>
  );
};

export default ProfilePage;