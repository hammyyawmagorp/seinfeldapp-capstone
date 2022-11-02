// import React from "react";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const Trivia = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="trivia-card">
//       <motion.div
//         className="trivia-card-motion"
//         transition={{ layout: { duration: 1, type: "spring" } }}
//         layout
//       >
//         <motion.h2 layout="position">Trivia Question 1</motion.h2>{" "}
//         <button onClick={() => setIsOpen(!isOpen)} className="trivia-card-btn">
//           Button
//         </button>
//         {isOpen && (
//           <motion.div className="expand">
//             <p>
//               Trivia Answer 1. Lorem<br></br> ipsum dolor.
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//       <motion.div
//         className="trivia-card-motion"
//         transition={{ layout: { duration: 1, type: "spring" } }}
//         layout
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <motion.h2 layout="position">Trivia Question 2</motion.h2>
//         <button onClick={() => setIsOpen(!isOpen)} className="trivia-card-btn">
//           Button
//         </button>
//         {isOpen && (
//           <motion.div className="expand">
//             <p>
//               Trivia Answer 2. Lorem<br></br> ipsum dolor.
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Trivia;
