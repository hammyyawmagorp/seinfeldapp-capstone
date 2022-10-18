import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Treats from "./components/Treats";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Treats />
    </div>
  );
}

export default App;
