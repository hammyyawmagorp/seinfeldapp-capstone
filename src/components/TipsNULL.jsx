// import React, { useState } from "react";
// import supabaseFeedback from "../config/supabaseClient";
// // import axios from "axios";

// const Tips = () => {
//   const [mailerState, setMailerState] = useState({
//     name: "",
//     txtemail: "",
//     favchar: "",
//     message: "",
//   });
//   function handleStateChange(e) {
//     setMailerState((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   }
//   const submitEmail = async (e) => {
//     e.preventDefault();
//     console.log({ mailerState });
//     const response = await fetch("http://localhost:5050/send", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({ mailerState }),
//     })
//       .then((res) => res.json())
//       .then(async (res) => {
//         const resData = await res;
//         console.log(resData);
//         if (resData.status === "success") {
//           alert("Message Sent");
//         } else if (resData.status === "fail") {
//           alert("Try Again. Message Not Sent");
//         }
//       })
//       .then(async (res) => {
//         setMailerState({
//           txtemail: "",
//           name: "",
//           favchar: "",
//           message: "",
//         });
//       });
//   };
//   return (
//     <div>
//       <h1 className="tips-header">Tips & Comments?</h1>
//       <form className="form-box" onSubmit={submitEmail}>
//         <div>
//           <p className="tips-para">
//             Are there any other foods or locations you would like to see? Are
//             you loving the site? Do you have and tips for us? Or maybe you just
//             want to tell us how much you love Seinfeld! <br></br>
//             <br></br>Write to us using the form below:{" "}
//           </p>
//         </div>
//         <h5>All Fields Are Required</h5>
//         <p className="form-input-labels">
//           Name:
//           <input
//             className="form-input-fields"
//             placeholder="Name"
//             onChange={handleStateChange}
//             name="name"
//             value={mailerState.name}
//             required
//           />
//         </p>
//         <p className="form-input-labels">
//           Email:
//           <input
//             className="form-input-fields"
//             placeholder="Email"
//             onChange={handleStateChange}
//             type="email"
//             name="txtemail"
//             value={mailerState.txtemail}
//             required
//           />
//         </p>

//         <p className="form-input-labels">
//           Favorite Character:
//           <input
//             className="form-input-fields"
//             placeholder="Fav Character?"
//             onChange={handleStateChange}
//             name="favchar"
//             value={mailerState.favchar}
//             required
//           />
//         </p>
//         <p className="form-input-message">
//           Message:<br></br>
//           <br></br>
//           <textarea
//             className="form-message-box"
//             placeholder="Message"
//             onChange={handleStateChange}
//             name="message"
//             value={mailerState.message}
//             required
//           />
//           <br></br>
//           *Must be less than 255 Characters
//         </p>
//         <button className="form-btn">Send</button>
//       </form>
//     </div>
//   );
// };
// export default Tips;
