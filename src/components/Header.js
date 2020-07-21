import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";

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
            <a href="/assets/Hassan_Abduldayem_CV.pdf" download>
              Download My Resume
            </a>
          </button>
        </p>
      </Fade>
    </div>
  );
};

export default Header;
