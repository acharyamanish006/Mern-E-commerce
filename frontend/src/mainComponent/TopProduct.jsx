import React from "react";
import "./css/topProduct.css";
import Product from "../subComponent/Product";
import { useEffect, useState } from "react";

export default function TopProduct({ name, priceRange }) {
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
  //.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  return (
    <div className="ProductContainer">
      <div className="ProductWrapper">
        <div className="ProductHeading">
          <h3> {name}</h3>
        </div>
        <div className="ProductCollection">
          {product
            .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            .filter((product) => product.price < priceRange)
            .map((data) => {
              return <Product key={data._id} data={data} />;
            })
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
}
