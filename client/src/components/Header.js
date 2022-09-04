import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import ProfileImage from "../images/profile-image-bgblur.png";

function Header() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Reito.",
        "a Developer.",
        "from Japan.",
        "a Bilingual.",
        "a Problem Solver.",
        "a Dog Lover.",
        "Reito.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="bgimage" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="header-text-container">
              <h1 className="text-center">
                Hi, I am <br /> <span style={{ whiteSpace: "pre" }} ref={el} />
              </h1>
            </div>
          </div>

          <div className="col-lg-7">
            <img
              src={ProfileImage}
              alt="header-profile"
              className="profile-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
