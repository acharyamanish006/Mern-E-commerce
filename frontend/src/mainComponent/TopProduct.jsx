import React from "react";
import "./css/topProduct.css";
import Product from "../subComponent/Product";

export default function TopProduct({ name }) {
  return (
    <div className="ProductContainer">
      <div className="ProductWrapper">
        <div className="ProductHeading">
          <h3> {name}</h3>
        </div>
        <div className="ProductCollection">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
