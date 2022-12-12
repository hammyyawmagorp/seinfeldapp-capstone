import { React, useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Treats from "./components/Treats";
import Locations from "./components/Locations";
import Tips from "./components/Tips";
import BackToTopBtn from "./components/BackToTopBtn";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./index.css";

function App() {
  const treatsBtn = useRef(null);
  const locationsBtn = useRef(null);
  // const triviaBtn = useRef(null);
  const tipsBtn = useRef(null);
  const { isLoaded, loaderror } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loaderror) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      {
        <div>
          <button
            className="intro-btns"
            onClick={() => scrollToSection(treatsBtn)}
          >
            Treats
          </button>
          <button
            className="intro-btns"
            onClick={() => scrollToSection(locationsBtn)}
          >
            Locations
          </button>
          {/* <button
            className="intro-btns"
            onClick={() => scrollToSection(triviaBtn)}
          >
            Trivia
          </button> */}
          <button
            className="intro-btns"
            onClick={() => scrollToSection(tipsBtn)}
          >
            Tips?
          </button>
        </div>
      }

      <Intro />

      <div ref={treatsBtn}>
        <Treats />
      </div>

      <div ref={locationsBtn}>
        <Locations />
      </div>

      <div className="footer-div"></div>

      <div>
        <iframe
          src="https://snazzymaps.com/embed/436432"
          width="75%"
          height="800px"
          style={{
            border: 0,
            // margin: "auto",
            borderBox: "round, black",
            borderRadius: "20px",
          }}
        ></iframe>
      </div>
      {/* 
      <div ref={triviaBtn}>
        <Trivia />
      </div> */}

      <div ref={tipsBtn}>
        <Tips />
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default App;
