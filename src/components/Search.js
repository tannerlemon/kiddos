import { React, useState } from "react";
import "../yesNo.scss";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import addIcon from "../imgs/add.png";

export default function Search() {
  const materials = [
    "toilet paper rolls",
    "paper towel rolls",
    "paper towels",
    "toilet paper",
    "baby wipes",
    "glue",
    "paper",
    "construction paper",
    "scissors",
    "foam",
    "foam balls",
    "cardboard",
    "paint",
    "googley eyes",
    "paint brushes",
    "paper plates",
    "pom poms",
    "markers",
    "tissue paper",
    "paper cups",
    "pipe cleaners",
    "feathers",
    "popsicle sticks",
    "rocks",
    "milk carton",
    "bubble wrap",
  ];

  const options = {
    includeScore: true,
  };

  const fuse = new Fuse(materials, options);

  const [data, setData] = useState(materials);

  const searchData = (pattern) => {
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({ item }) => {
        if (matches.length < 9) {
          matches.push(item);
        }
      });
      setData(matches);
    }

    setShowHeader(false);
  };

  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      <div className="infoBlock">
        <div className="infoWrapper">
          {showHeader && (
            <>
              <h1>search for materials</h1>
              <p>anything lying around will do</p>
            </>
          )}
          <div className="search">
            <input
              className="searchInput"
              type="text"
              onChange={(e) => searchData(e.target.value)}
              placeholder="search for anything..."
            />
          </div>
          <div className="listWrapper">
            {!showHeader &&
              data.map((material) => (
                <div className="listItem">
                  <img alt="add icon" className="add" src={addIcon} />
                  <li>{material}</li>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Link
        className="Link"
        to={{
          pathname: "/spinner",
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
