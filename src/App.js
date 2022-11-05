import { React, useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Treats from "./components/Treats";
import Locations from "./components/Locations";
import Trivia from "./components/Trivia";
import Tips from "./components/Tips";
import BackToTopBtn from "./components/BackToTopBtn";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { mapStyles } from "./components/mapStyles";
import "./index.css";

const containerStyle = {
  width: "80vw",
  height: "80vh",
  margin: "auto",
  borderBox: "round, black",
  borderRadius: "20px",
};

const center = {
  lat: 37.6804,
  lng: -97.769,
};

const options = {
  styles: mapStyles,
};

function App() {
  const treatsBtn = useRef(null);
  const locationsBtn = useRef(null);
  const triviaBtn = useRef(null);
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
          <button
            className="intro-btns"
            onClick={() => scrollToSection(triviaBtn)}
          >
            Trivia
          </button>
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

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={options}
      ></GoogleMap>

      <div ref={triviaBtn}>
        <Trivia />
      </div>

      <div ref={tipsBtn}>
        <Tips />
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default App;
