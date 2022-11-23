import React, { useState } from "react";
// import axios from "axios";

const Tips = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    txtemail: "",
    favchar: "",
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
          txtemail: "",
          name: "",
          favchar: "",
          message: "",
        });
      });
  };
  return (
    <div>
      <h1 className="tips-header">Tips & Comments?</h1>
      <form onSubmit={submitEmail}>
        <div>
          <p>
            Are there any other foods or locations you would like to see? Are
            you loving the site? Do you have and tips for us? Or maybe you just
            want to tell us how much you love Seinfeld! Write to us using the
            form below!{" "}
          </p>
        </div>
        <h5>All Fields Are Required</h5>
        <label>First Name: </label>
        <input
          className="form-input-fields"
          placeholder="Name"
          onChange={handleStateChange}
          name="name"
          value={mailerState.name}
          required
        />
        <br></br>
        <label>Email: </label>
        <input
          className="form-input-fields"
          placeholder="Email"
          onChange={handleStateChange}
          type="email"
          name="txtemail"
          value={mailerState.txtemail}
          required
        />
        <br></br>
        <label>Favorite Character: </label>
        <input
          className="form-input-fields"
          placeholder="Fav Character?"
          onChange={handleStateChange}
          name="favchar"
          value={mailerState.favchar}
          required
        />
        <br></br>
        <label>First Name: </label>
        <br></br>
        <textarea
          placeholder="Message"
          onChange={handleStateChange}
          name="message"
          value={mailerState.message}
          required
        />
        <br></br>
        <button className="form-btn">Send</button>
      </form>
    </div>
  );
};
export default Tips;
