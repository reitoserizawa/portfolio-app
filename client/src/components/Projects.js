import React from "react";
import zoomies from "../images/projects/zoomies.png";
import tippie from "../images/projects/tippie.png";
import tipsyholic from "../images/projects/tipsyholic.png";
import yoga from "../images/projects/yoga.png";

function Projects() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-12">
            <h1 className="text-center">Projects</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 mt-4">
            <div className="card">
              <img
                className="card-img-top"
                src={zoomies}
                alt="Card"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Zoomies</h4>
                <p className="card-text">
                  A NYC's dog park tracking app for dog owners and dog lovers
                </p>
                <hr />
                <p className="card-text">
                  <b>Utilized</b>: JavaScript, React.js, Ruby, Ruby on Rails,
                  PostgreSQL, HTML/CSS, Bootstrap
                </p>
                <div className="text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reitoserizawa/zoomies"
                    className="btn btn-outline-secondary"
                    style={{ marginRight: "5px" }}
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=U0r333t5CPE&feature=youtu.be"
                    className="btn btn-outline-secondary"
                    style={{ marginLeft: "5px" }}
                  >
                    Demo <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card">
              <img
                className="card-img-top"
                src={tippie}
                alt="Card"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Tippie</h4>
                <p className="card-text">
                  A reviewing app for restaurants and workers with tipping
                  functionality
                </p>
                <hr />
                <p className="card-text">
                  <b>Utilized</b>: JavaScript, React.js, Ruby, Ruby on Rails,
                  PostgreSQL, RESTful API, HTML/CSS, Bootstrap
                </p>
                <div className="text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reitoserizawa/Tippie"
                    className="btn btn-outline-secondary"
                    style={{ marginRight: "5px" }}
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=mhtTPhMhHZs"
                    className="btn btn-outline-secondary"
                    style={{ marginLeft: "5px" }}
                  >
                    Demo <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row justify-content-center">
          <div className="col-md-5 mt-4">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src={tipsyholic}
                alt="Card"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Tipsyholic</h4>
                <p className="card-text">
                  A cocktail recipe app for bartenders and cocktail lovers to
                  find a recipe and pick a random drink
                </p>
                <hr />
                <p className="card-text">
                  <b>Utilized</b>: JavaScript, API, HTML/CSS, Bootstrap
                </p>
                <div className="text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reitoserizawa/tipsyholic"
                    className="btn btn-outline-secondary"
                  >
                    Code <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-4">
            <div className="card portfolioContent">
              <img
                className="card-img-top"
                src={yoga}
                alt="Card"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h4 className="card-title">Yoga</h4>
                <p className="card-text">
                  A yoga class app for volunteer yoga instructors and yoga
                  students to schedule and attend a yoga class
                </p>
                <hr />
                <p className="card-text">
                  <b>Utilized</b>: JavaScript, React,js, Ruby, Sinatra,
                  HTML/CSS, Bootstrap
                </p>
                <div className="text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reitoserizawa/yoga_front"
                    className="btn btn-outline-secondary"
                    style={{ marginRight: "5px" }}
                  >
                    Frontend <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reitoserizawa/yoga_server"
                    className="btn btn-outline-secondary"
                    style={{ marginLeft: "5px" }}
                  >
                    Backend <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
