import React, { useState, useEffect } from "react";
import logo from "../images/navbar-logo/logo.png";
import logo2 from "../images/navbar-logo/logo2.png";

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 800);
    });
  }, []);

  return (
    <nav
      className={
        scroll
          ? "navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
          : "navbar navbar-expand-lg fixed-top navbar-light"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={scroll ? logo2 : logo} alt="logo" width="88" height="28" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#languages">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-link active"
                href="https://drive.google.com/file/d/1JxY-SJDrhP6iNT99SEnDDGQmGVLGbnzR/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
