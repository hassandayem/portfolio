import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <h1 className="heading-background">CREATIVE</h1>
      <header>
        <h1>
          <Fade bottom cascade>
            {data.name}
          </Fade>
        </h1>
      </header>
      <Fade bottom>
        <p className="header-title">
          {data.headerTagline[0]}
          <br></br>
          {data.headerTagline[1]}
          <br></br>
          {data.headerTagline[2]}
          <br></br>
          <button className="basic-btn">
            <Link
              className="link"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Learn More
            </Link>
          </button>
        </p>
      </Fade>
    </div>
  );
};

export default Header;
