import React, { useRef } from "react";
import "../reset.css";
import "./App.scss";
import NavBar from "./NavBar";
import Content from "./Content";
function App(props) {
  const pageRef = useRef();
  return (
    <div ref={pageRef} className="page-container">
      <NavBar pageRef={pageRef} />
      <Content />
    </div>
  );
}

export default App;
