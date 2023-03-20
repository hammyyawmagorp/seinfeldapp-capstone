import React, { useState } from "react";
import supabaseFeedback from "../config/supabaseFeedbackClient";

const Tips = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [character, setCharacter] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setCharacter("");
    setMessage("");

    if (!name || !email || !character || !message) {
      setFormError("Please fill in all fields correctly");
      return;
    }

    const { data, error } = await supabaseFeedback
      .from("seinfeldsitefeedback")
      .insert([{ name, email, character, message }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all fields correctly");
    }
    if (data) {
      setFormError(null);
    }
  };

  return (
    <div>
      <h1 className="tips-header">Tips & Comments?</h1>
      <form className="form-box" onSubmit={handleSubmit}>
        <div>
          <p className="tips-para">
            Are there any other foods or locations you would like to see? Are
            you loving the site? Do you have and tips for us? Or maybe you just
            want to tell us how much you love Seinfeld! <br></br>
            <br></br>Write to us using the form below:{" "}
          </p>
        </div>
        <h5>All Fields Are Required</h5>
        <p className="form-input-labels">
          Name:
          <input
            type="text"
            className="form-input-fields"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            required
          />
        </p>
        <p className="form-input-labels">
          Email:
          <input
            className="form-input-fields"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            required
          />
        </p>

        <p className="form-input-labels">
          Favorite Character:
          <input
            className="form-input-fields"
            placeholder="Fav Character?"
            onChange={(e) => setCharacter(e.target.value)}
            name="character"
            value={character}
            required
          />
        </p>
        <p className="form-input-message">
          Message:<br></br>
          <br></br>
          <textarea
            className="form-message-box"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            value={message}
            required
          />
        </p>
        <button className="form-btn">Send</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};
export default Tips;
