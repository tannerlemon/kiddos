import React from "react";
import "../yesNo.scss";
import { Link } from "react-router-dom";

export default function Mess() {
  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          <h1>are messy projects allowed?</h1>
          <div class="cd-switch">
            <div class="switch">
              <input type="radio" name="choice" id="no" />
              <label className="label" for="no">
                no
              </label>
              <input type="radio" name="choice" id="yes" checked />
              <label className="label" for="yes">
                yes
              </label>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="Link"
        to={{
          pathname: "/search",
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
