import React from "react";
import "../yesNo.scss";
import { Link } from "react-router-dom";

export default function Spinner() {
  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          <h1>kiddos turn!</h1>
          <p>
            have your kiddo tap the spacebar <br />
            until they find a project they like
          </p>
          <br />
          <p>how old are your kiddos?</p>
          <div className="radio">
            <div className="radioOption">
              <input
                className="radioInput"
                type="radio"
                id="2-3"
                name="age"
                value="2-3"
              />
              <span class="radioControl"></span>
              <label className="radioLabel" for="2-3">
                2-3 years old
              </label>
            </div>
            <br />
            <div className="radioOption">
              <input
                className="radioInput"
                type="radio"
                id="4-6"
                name="age"
                value="4-6"
              />
              <span class="radioControl"></span>
              <label className="radioLabel" for="4-6">
                4-6 years old
              </label>
            </div>
            <br />
            <div className="radioOption">
              <input
                className="radioInput"
                type="radio"
                id="7-9"
                name="age"
                value="7-9"
              />
              <span class="radioControl"></span>
              <label className="radioLabel" for="7-9">
                7-9 years old
              </label>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="Link"
        to={{
          pathname: "/project",
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
