import React, { useState } from "react";
import "./Cources.css";
import data from "../../Template.json";

function Cources() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="c-nav">
        <div className="templateContainer c-right" id="cources">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="Search for anything"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <div className="template_Container">
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val ;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div className="template" key={val.id}>
                    <img src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <h5>{val.text}</h5>
                    <p className="price">₹{val.price}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cources;
