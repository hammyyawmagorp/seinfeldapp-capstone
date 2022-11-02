import React from "react";
import Treats from "./Treats";
import { motion } from "framer-motion";
import { useState } from "react";

const TreatsCard = ({ treat }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="treat-card"
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <h2 className="card-header" style={{ color: "#451115" }}>
        {treat.food_name}
      </h2>
      <p>
        <img className="card-image" src={treat.image_url} alt="food image" />
      </p>
      <p>{treat.episode}</p>
      <p style={{ color: "#80111A" }}>"{treat.episode_name}"</p>
      <p>
        Characters: <br></br>
        {treat.characters}
      </p>
      <p>
        <button className="treat-card-btn" onClick={() => setIsOpen(!isOpen)}>
          Where To Find?
        </button>
      </p>
      {isOpen && (
        <motion.div
          className="expand"
          // transition={{ layout: { duration: 1, type: "spring" } }}
          // layout
        >
          {treat.location}
          <br></br> {treat.address}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TreatsCard;
