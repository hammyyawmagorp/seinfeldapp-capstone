// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const { getInfo } = require("./controller.js");

// const PORT = process.env.SERVER_PORT || 5050;

// app.use(express.json());
// app.use("/", express.static("../build"));
// app.use(cors());

// app.get("/info", getInfo);

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

// transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
// });

// app.post("/send", function (req, res) {
//   let mailOptions = {
//     // from: `${req.body.mailerState.name}`,
//     to: process.env.EMAIL,
//     subject: `Message from : ${req.body.mailerState.txtemail}`,
//     text: `
//   My name is ${req.body.mailerState.name} and my favorite character is ${req.body.mailerState.favchar}.
//   ${req.body.mailerState.message} -
//   You can email me at ${req.body.mailerState.txtemail}`,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("== Message Sent ==");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
