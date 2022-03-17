import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon
        className="icon t"
        icon={faTwitterSquare}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon f"
        icon={faFacebookSquare}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon i"
        icon={faInstagramSquare}
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        className="icon g"
        icon={faGithubSquare}
      ></FontAwesomeIcon>
    </div>
  );
}
