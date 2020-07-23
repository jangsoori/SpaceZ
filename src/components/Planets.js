import React, { useState } from "react";
import "./Planets.scss";
export default function Planets(props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 395 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="15.5" r="8.5" fill="#1567A3" />
      <circle cx="59.5" cy="15.5" r="8.5" fill="#70C9DD" />
      <circle cx="116.5" cy="15.5" r="14.5" fill="#EAD6B8" />
      <circle cx="180.5" cy="15.5" r="15.5" fill="#EAD6B8" />
      <circle
        className={props.hover ? `mars active` : "mars"}
        cx="237"
        cy="15.5"
        r="7"
        fill="#CB5F5F"
      />
      <circle cx="289" cy="15.5" r="11" fill="#6F9FE9" />
      <circle cx="341.5" cy="15.5" r="7.5" fill="#B76E2B" />
      <circle cx="389" cy="15.5" r="6" fill="#C4C4C4" />
      <line x1="96" y1="15.5" x2="136" y2="15.5" stroke="white" />
    </svg>
  );
}
