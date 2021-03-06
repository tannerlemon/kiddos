import "./App.css";
import React, { useEffect, useState } from "react";
import repeatIcon from "./imgs/repeat.png";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="pageWrapper">
      <div className="navbar">
        <div>nannyBot</div>
        <img className="repeatIcon" src={repeatIcon} />
      </div>
      <div className="main">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
