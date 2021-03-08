import React from "react";
import { Link } from "react-router-dom";

export default function Time() {
  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          <h1>how much time do you need?</h1>
          <input type="range" className="slider"></input>
        </div>
      </div>
      <Link
        className="Link"
        to={{
          pathname: "/mess",
          state: { modal: true },
        }}
      >
        <div className="button">
          <div className="buttonTextWrapper">
            <h2>next</h2>
            <p>press spacebar</p>
          </div>
        </div>
      </Link>
    </>
  );
}
