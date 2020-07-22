import React from "react";
import Planets from "../Planets";
import "./Home.scss";

function Home(props) {
  return (
    <div className="home">
      <Planets className="home-hero-image" />
      <div className="home-hero-text">
        <p className="hero-text-big">To the Mars...</p>
        <p className="hero-text-big">...and beyond!</p>
        <p className="hero-text-small">Shall we?</p>
      </div>
      <button className="cta-button">Launch the adventure!</button>
    </div>
  );
}

export default Home;
