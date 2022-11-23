import React, { useState } from "react";
// import axios from "axios";

const Tips = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:5050/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Try Again. Message Not Sent");
        }
      })
      .then(async (res) => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };
  return (
    <div>
      <form onSubmit={submitEmail}>
        <fieldset>
          <legend>React NodeMailer Contact Form</legend>
          <input
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send Message</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Tips;
