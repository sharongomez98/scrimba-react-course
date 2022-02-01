//photo, name, buttons, etc
import React from "react";
import profile from "../images/profile.jpg";
import { GrMail } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai"

export default function Info() {
  return (
    <div className="info">
      <img className="info--profile" src={profile} alt="profile" />
      <h1 className="info--title">Sharon Gómez</h1>
      <h2 className="info--subtitle">FullStack Developer</h2>
      <div className="info--buttons">
        <button className="info--button info--button-gray">
          <a className="info--button-icon" href="/">
            <GrMail />
          </a>
          Email
        </button>
        <button className="info--button info--button--blue">
        <a className="info--button-icon" href="/">
            <AiFillLinkedin />
          </a>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
