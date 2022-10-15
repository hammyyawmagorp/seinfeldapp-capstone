import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="intro-div">
        <p className="intro-para">
          Welcome to the ultimate Seinfeld fan site. Over its 9 seasons fans
          were treated to many amazing Seinfeldian treats. Craving a Chocolate
          Babka, some Muffin Tops, specialty soups, yada yada yada...? Then
          you’ve come to the right place!<br></br>
          <br></br>
          Search for your favorite Seinfeldian treats. Learn more about them.
          See where you can get some of the treats in New York City.<br></br>
          <br></br>
          You can also send us reccomendations/ideas for more items!
        </p>
        <button className="intro-btns">Treats</button>
        <button className="intro-btns">Locations</button>
        <button className="intro-btns">Recommendations</button>
      </div>
    </div>
  );
};

export default Intro;
