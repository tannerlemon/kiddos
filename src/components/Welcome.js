import React from "react";
import "../App.css";
import redDude from "../imgs/Happy Bunch Standing-1.png";
import purpleDude from "../imgs/Happy Bunch Sitting.png";
import greenDude from "../imgs/Happy Bunch Standing.png";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Time from "../components/Time";

export default function Welcome() {
  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          <h1>welcome.</h1>
          <p>
            We made this to help keep your kiddos occupied while you GET STUFF
            DONE. It's super easy to use (so easy that your kiddos can do it).
            Follow the steps to get started.
          </p>
          <br />
          <br /> <p>Your kiddos are going to love this (and so are you).</p>
        </div>
      </div>
      <Link
        className="Link"
        to={{
          pathname: "/time",
          state: { modal: true },
        }}
      >
        <div className="button">
          <div className="buttonTextWrapper">
            <h2>begin</h2>
            <p>press spacebar</p>
          </div>
        </div>
      </Link>
    </>
  );
}
