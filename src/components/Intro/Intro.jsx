import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Avatar from "../../img/avatar.png";

const Intro = () => {
  return (
    <div className="intro" id="home">
      <div className="i-left">
        <div className="i-intro">
          <span>Get there. From here.</span>
          <span>
            Chart your path to success. Log in for limited-time savings on the
            latest topics.
          </span>
        </div>
       <a href="#cources"> <button className="i-button button"> get Started</button> </a>
        <div className="i-icons">
          <a href="https://github.com/ChandanPatnaik">
            <img src={Github} alt="" />
          </a>
          <img src={Instagram} alt="" />
          <a href="https://www.linkedin.com/in/chandan-patnaik/">
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Avatar} alt="" />

      </div>
    </div>
  );
};

export default Intro;
