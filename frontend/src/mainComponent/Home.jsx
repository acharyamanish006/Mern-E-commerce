import React from "react";
import "./css/home.css";
import Graphics from "../img/RTX3060Ti.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <div className="homeText">
          <h4>Graphics Card</h4>
          <h3>Super Value deals</h3>
          <h2>ON Graphics Card</h2>
          <p>available on 25% discount</p>
          <button>EXPLORE</button>
        </div>
        <div className="homeImg">
          <img src={Graphics} alt="img" />
        </div>
      </div>
    </div>
  );
}
