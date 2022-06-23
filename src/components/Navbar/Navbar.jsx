import React from "react";
import "./Navbar.css";
import { FaUserGraduate } from 'react-icons/fa'
const navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-logo"><FaUserGraduate /> Eduler</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cources">Cources</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
          <button className="button n-button">Sign Up</button>
      </div>
    </div>
  );
};

export default navbar;
