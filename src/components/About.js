import React from "react";
import Fade from "react-reveal/Fade";
import data from "../mydata";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>
          <Fade bottom cascade>
            About.
          </Fade>
        </h1>
        <Fade bottom>
          <p>
            I'm a passionate front-end developer, I believe that learning is a
            life-long journey.
          </p>
          <p>
            Because I have a good experience in creating Wordpress websites, I
            worked as a freelancer for 3 years and built many websites for
            clients. From the start of 2019, I decided to dive deeper and learn
            front-end development to be my main career.
          </p>
          <p>
            In Mars 2020, I joined a front-end Bootcamp and I gained experiences
            in React, Javascript, Bootstrap, SASS, and many other skills.
          </p>
          <p>
            I have the ability to work effectively in teams, and the flexibility
            to work remotely, I like to work with people who have goals and aim
            to achieve it.
          </p>
        </Fade>
      </div>
      {data.ShowAboutImage ? (
        <img src={data.aboutImage} alt="about iamge"></img>
      ) : null}
    </div>
  );
};

export default About;
