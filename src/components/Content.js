import React from "react";
import ContentPages from "./ContentPages";
import Rocket from "./Rocket";
import "./Content.scss";
function Content(props) {
  return (
    <main className="content">
      <ContentPages />
      <Rocket />
    </main>
  );
}

export default Content;
