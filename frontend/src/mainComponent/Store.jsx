import React from "react";
import Product from "../subComponent/Product";
import "./css/Store.css";
import { useEffect, useState } from "react";

export default function Store() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get/all/product", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(product);
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3> New Offer </h3>
        </div>
        <div className="productCollection">
          {product.map((data) => {
            return <Product key={data._id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
