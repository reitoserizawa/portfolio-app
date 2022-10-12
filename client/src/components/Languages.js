import React from "react";
import html from "../images/html-icon.png";
import css from "../images/css-icon.webp";
import js from "../images/js-icon.svg";
import react from "../images/react-logo.webp";
import ruby from "../images/ruby-icon.png";
import rails from "../images/rails-icon.webp";
import github from "../images/github-icon.webp";
import api from "../images/rest-icon.jpeg";
import command from "../images/command-icon.webp";
import vscode from "../images/vscode-icon.png";
import redux from "../images/redux.png";
import postgresql from "../images/postgresql.png";
import heroku from "../images/heroku.png";
import bootstrap from "../images/bootstrap.png";
import git from "../images/git.png";
import python from "../images/python-logo.png";

function Languages() {
  return (
    <section id="languages">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-12">
            <h1 className="text-center">Skills</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={html}
                    alt="html-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">HTML</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={css}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">CSS</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={js}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">JavaScript</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={react}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">React</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={redux}
                    alt="redux-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Redux</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={ruby}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Ruby</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={rails}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Rails</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={python}
                    alt="python-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Python</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={postgresql}
                    alt="postgresql-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">PostgreSQL</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={git}
                    alt="git-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Git</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={heroku}
                    alt="heroku-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Heroku</h4>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={github}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Github</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={api}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">REST API</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={command}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Command Line</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={vscode}
                    alt="css-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">VS Code</h4>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-4">
            <div className="card servicesText">
              <div className="card-body">
                <div className="icon-container">
                  <img
                    src={bootstrap}
                    alt="bootstrap-icon"
                    className="rounded mx-auto d-block servicesIcon"
                  />
                </div>
                <h4 className="card-title mt-2">Bootstrap</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
