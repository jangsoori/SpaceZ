import React from "react";
import "../reset.css";
import "./App.scss";
import NavBar from "./NavBar";
import Content from "./Content";
function App(props) {
  return (
    <div className="page-container">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
