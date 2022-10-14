import React from "react";
import logo from "./images/seinfeldlogo.png";

const Header = () => {
  return (
    <header>
      <h1 className="main-header">
        Ultimate <img className="main-logo" src={logo} alt="seinfeld logo" />{" "}
        Kitchen
      </h1>
    </header>
  );
};

export default Header;
