import React from "react";
import "../Css/header.css";
import Navbar from "./Navbar";

const header = () => {
  return (
    <div className="mainhead-cont">
      <Navbar />
      <h1 id="Headerlab"><strong>E</strong>vent<strong>G</strong>enius</h1>
      <p id="header-paragraph">
        Whether you're looking to book a cocktail party, post-work gathering,
        celebratory function, conference, business meeting, wedding or private
        dining event, our dedicated Urban Events team can create a package that
        will meet your every need.
      </p>
    </div>
  );
};

export default header;
