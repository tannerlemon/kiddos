import "./App.css";
import React, { useEffect, useState } from "react";
import repeatIcon from "./imgs/repeat.png";
import { Link, Switch, Route } from "react-router-dom";
import Time from "./components/Time";
import Welcome from "./components/Welcome";
import Mess from "./components/Mess";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import Project from "./components/Project";

function App() {
  return (
    <div className="pageWrapper">
      <div className="navbar">
        <div>nannyBot</div>
        <img className="repeatIcon" src={repeatIcon} />
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/time" component={Time} />
          <Route exact path="/mess" component={Mess} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/spinner" component={Spinner} />
          <Route exact path="/project" component={Project} />
          <Route>{"404"}</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
