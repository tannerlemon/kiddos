import React from "react";
import "./Project.css";
import { useTimer } from "react-timer-hook";
import robots from "../imgs/robots.png";
import shapes from "../imgs/shapes.png";
import spinner from "../imgs/space-spinner.png";

export default function Project() {
  function Timer({ expiryTimestamp }) {
    const { seconds, minutes, start, pause, restart } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

    return (
      <div className="timer">
        <p>timer</p>
        <div className="timerNumbers">
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button
          onClick={() => {
            // Restarts to 30 minute timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 1800);
            restart(time);
          }}
        >
          restart
        </button>
      </div>
    );
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 1800);

  return (
    <div className="projectWrapper">
      <div className="sidebar">
        <div className="blueContainer">
          <Timer expiryTimestamp={time} />
        </div>
        <div className="blueContainer">
          <div className="materials">
            <p>materials</p>
            <br />
            <p>toilet paper rolls</p>
            <p>paint</p>
            <p>glue</p>
            <p>sticks</p>
          </div>
        </div>
        <div className="blueContainer">
          <p className="messOrNah">no mess</p>
        </div>
        <div className="blueContainer spacebar">
          <div className="space">
            <div className="spinnerIcon">
              <img alt="spinner icon" src={spinner} />
            </div>
            <p>spacebar</p>
          </div>
        </div>
      </div>
      <div className="projectContainer">
        <div className="robots">
          <img alt="robot illustration" src={robots} />
          <div className="description">
            <h1>build a robot</h1>
            <p>
              use your creativity to build a robot from the materials you have
              in front of you
            </p>
          </div>
          <div className="steps">
            <div className="aStep">
              <h1>step 1</h1>
              <p>build a base — something that stands up by itself</p>
            </div>
            <div className="shapes">
              <img alt="base examples" src={shapes} />
            </div>
          </div>
          <p>by taNr leMn.</p>
        </div>
      </div>
    </div>
  );
}
