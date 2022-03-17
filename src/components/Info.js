import React from "react";
import logo from "../pictures/face.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="main-img" src={logo} />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <h5>laurasmith.website</h5>
      <div className="buttons">
        <button className="email-btn">
          <FontAwesomeIcon
            className="email"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <div>Email</div>
        </button>
        <button className="linkedin-btn">
          <FontAwesomeIcon
            className="email"
            icon={faLinkedin}
          ></FontAwesomeIcon>
          <div>Linkedin</div>
        </button>
      </div>
    </div>
  );
}
