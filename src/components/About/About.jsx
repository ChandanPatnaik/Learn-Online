import React from "react";
import "./About.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="a-left">
        {" "}
        <span>
          <h3>Always something new to learn</h3>
          <p>
            With courses added regularly to our catalog, you always get the
            latest skills. Sale from <b>₹475</b>ends today.
          </p>
        </span>
        <button className="button a-button">Let's Started</button>
      </div>

      <div className="a-right">
        <div className="a-maincircle">
          <div className="a-seccircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="a-seccircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="a-seccircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="a-seccircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="a-seccircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="a-backcircle bluecircle"></div>
        <div className="a-backcircle yellowcircle"></div>
      </div>
    </div>
  );
};

export default About;
