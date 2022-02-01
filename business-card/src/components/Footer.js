import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagram, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  const iconSize =  "25px";
  return (
    <footer className="footer">
      <a className="footer--icon" href="/">
        <FaTwitterSquare size={iconSize}/>
      </a>
      <a className="footer--icon" href="/">
        <FaFacebookSquare size={iconSize}/>
      </a>
      <a className="footer--icon" href="/">
        <FaInstagram size={iconSize}/>
      </a>
      <a className="footer--icon" href="/">
        <FaGithubSquare size={iconSize}/>
      </a>
    </footer>
  );
}
