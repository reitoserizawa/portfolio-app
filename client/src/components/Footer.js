import React from "react";
import logo from "../images/navbar-logo/logo2.png";
import twitter from "../images/footer/twitter.svg";
import github from "../images/github-icon.webp";
import medium from "../images/footer/medium.svg";
import linkedin from "../images/footer/linkedin.svg";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="#home"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              src={logo}
              className="bi"
              width="88"
              height="28"
              alt="web logo"
            />
          </a>
          <span className="text-muted">
            &copy; Designed and Built by Reito Serizawa
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.linkedin.com/in/reitos/"
            >
              <img
                className="bi"
                width="24"
                height="24"
                src={linkedin}
                alt="linkedin logo"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://twitter.com/reitotter">
              <img
                className="bi"
                width="24"
                height="24"
                src={twitter}
                alt="twitter logo"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://github.com/reitoserizawa">
              <img
                src={github}
                className="bi"
                width="24"
                height="24"
                alt="github logo"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://medium.com/@s.reitiger">
              <img
                src={medium}
                className="bi"
                width="24"
                height="24"
                alt="medium logo"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
