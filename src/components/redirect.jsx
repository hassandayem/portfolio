import React from "react";

const Redirect = () => {
  return (
    <div className="redirect__container">
      <div className="redirect__text-container">
        <h1 className="redirect__heading">
          Hi, this website is not active anymore, please visit my new website
        </h1>
        <a href="https://hassandayem.com" className="redirect__link">
          My New Website
        </a>
      </div>
    </div>
  );
};

export default Redirect;
