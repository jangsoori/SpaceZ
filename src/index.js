import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import "./mediaqueries/mobilePortrait.scss";
import "./mediaqueries/tabletPortrait.scss";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
