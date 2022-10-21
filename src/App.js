import { React, useRef } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Treats from "./components/Treats";
import "./index.css";

function App() {
  const treatsBtn = useRef(null);
  const locationsBtn = useRef(null);
  const recommBtn = useRef(null);

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
          <button className="intro-btns">Locations</button>
          <button className="intro-btns">Recommendations</button>
        </div>
      }
      <Intro />
      <div ref={treatsBtn}>
        <Treats />
      </div>
    </div>
  );
}

export default App;
