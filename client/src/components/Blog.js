import React from "react";

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-12">
            <h1 className="text-center">Blog</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-10 mt-4">
            <div className="card">
              <h5 className="card-header">
                Authentication Steps for Ruby on Rails
              </h5>
              <div className="card-body">
                <p className="card-text">The Log-in/Log-out/Sign-up Features</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@s.reitiger/authentication-steps-for-ruby-on-rails-54affc6a0f62"
                  className="btn btn-secondary"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 mt-4">
            <div className="card">
              <h5 className="card-header">
                How to Use the JSON Formatted Data in Ruby and JavaScript
              </h5>
              <div className="card-body">
                <p className="card-text">
                  CRUD of the HTTP methods for utilizing data — Create, read,
                  update and delete
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@s.reitiger/how-to-use-the-json-formatted-data-in-ruby-and-javascript-4f7cd202886b"
                  className="btn btn-secondary"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-10 mt-4">
            <div className="card">
              <h5 className="card-header">Designing websites with Bootstrap</h5>
              <div className="card-body">
                <p className="card-text">
                  How Bootstrap helped my websites look awesome!
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@s.reitiger/designing-websites-with-bootstrap-852d0f783583"
                  className="btn btn-secondary"
                >
                  Reito
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
