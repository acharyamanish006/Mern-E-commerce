import React from "react";
import banner from "../img/banner.jpg";
import "./css/banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="" />
    </div>
  );
}
