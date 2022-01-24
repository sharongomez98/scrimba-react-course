import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={reactLogo} alt="React Logo" />
      <h3 className="nav--logo_title">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
