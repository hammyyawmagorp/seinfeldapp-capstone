import React from "react";
import Treats from "./Treats";

const TreatsCard = ({ treat }) => {
  const handleLocationBtn = () => {
    console.log("Find me!");
  };

  return (
    <div className="treat-card">
      <h2 className="card-header">{treat.food_name}</h2>
      <p>
        <img className="card-image" src={treat.image_url} alt="food image" />
      </p>
      <p>{treat.episode}</p>
      <p>{treat.episode_name}</p>
      <p>
        Characters: <br></br>
        {treat.characters}
      </p>
    </div>
  );
};

export default TreatsCard;
