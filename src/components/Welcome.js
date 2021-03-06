import React from "react";
import "../App.css";
import redDude from "../imgs/Happy Bunch Standing-1.png";
import purpleDude from "../imgs/Happy Bunch Sitting.png";
import greenDude from "../imgs/Happy Bunch Standing.png";

export default function InfoBlock() {
  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          <img className="duder" src={redDude} />
          <img className="gDude" src={greenDude} />
          <h1>welcome.</h1>
          <p>
            We made this to help keep your kiddos occupied while you GET STUFF
            DONE. It's super easy to use (so easy that your kiddos can do it).
            Follow the steps to get started.
          </p>
          <img className="purpleDude" src={purpleDude} />
          <p>Your kiddos are going to love this (and so are you).</p>
        </div>
      </div>
      <div className="button">
        <div className="buttonTextWrapper">
          <h2>begin</h2>
          <p>press spacebar</p>
        </div>
      </div>
    </>
  );
}
