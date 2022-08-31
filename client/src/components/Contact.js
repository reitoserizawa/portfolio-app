import React, { useState } from "react";
import Errors from "./Error";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    details: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setContact({
            name: "",
            email: "",
            subject: "",
            details: "",
          });
          window.alert(
            "Thank you for contacting me! I will get back to you ASAP."
          );
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-12">
            <h1 className="text-center">Contact</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div
              style={{
                maxWidth: "100%",
                overflow: "hidden",
                color: "red",
                width: "100%",
                height: "500px",
                marginBottom: "15px",
              }}
            >
              <div
                id="embeddedmap-display"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: "0" }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Jersey+City&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  title="Jersey City Google Map"
                ></iframe>
              </div>
              <a
                className="googlemaps-html"
                href="https://dedicatedhosting.pro"
                id="make-mapdata"
              >
                click
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Subject"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
              />
              <div className="mb-3 mt-3">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="details"
                  placeholder="Details"
                  value={contact.details}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary mt-3">
                Submit
              </button>
              {errors.length !== 0 ? <Errors errors={errors} /> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
