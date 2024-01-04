import React from "react";
import "./nav.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="navPos">
      <ul className="nav Navigation">
        <Link to="Welcome" smooth={true} duration={500}>
          <li className="nav nav-link">About Me</li>
        </Link>
        <Link to="Education" smooth={true} duration={500}>
          <li className="nav nav-link">Education</li>
        </Link>
        <Link to="Experience" smooth={true} duration={500}>
          <li className="nav nav-link">Experience</li>
        </Link>
        <Link to="Skills" smooth={true} duration={500}>
          <li className="nav nav-link">Skills</li>
        </Link>
        <Link to="Project" smooth={true} duration={500}>
          <li className="nav nav-link">Project</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li className="nav nav-link">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
