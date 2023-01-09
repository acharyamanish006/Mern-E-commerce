import React from "react";
import Product from "../subComponent/Product";
import "./css/Store.css";

export default function Store() {
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3> New Offer </h3>
        </div>
        <div className="productCollection">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
