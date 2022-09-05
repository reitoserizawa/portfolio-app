import React from "react";
import Image from "../images/mixed-memojis.png";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <img src={Image} className="imageAboutPage" alt="" />
          </div>

          <div className="col-lg-5">
            <h1 className="text-left">About Me</h1>
            <h2 className="text-left">
              Full-stack <span>Web Developer</span>{" "}
              <i className="fa-solid fa-display"></i>
            </h2>
            <p>
              I'm Reito Serizawa, a full-stack software engineer from Japan
              living in NYC. <br />I am passionate about tackling difficult
              problems and solving algorithms. <br />I immigrated to the U.S. in
              December 2021 and graduated from the Flatiron School Software
              Engineering Bootcamp in July 2022.
            </p>
            <p>
              I develop websites with HTML, CSS, JavaScript and Ruby, including
              the libraries such as React.js and Ruby on Rails. <br />I use
              Bootstrap, Figma and Photoshop for designing.
            </p>
            <p>
              As a result-oriented person, <br />I always work hard to bring the
              best outcomes from my projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
