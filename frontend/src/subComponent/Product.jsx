import React from "react";
import "./css/product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";

export default function Product({ data }) {
  const { name, img, isWishlist } = data;
  const id = data._id;
  // console.log(isWishlist);

  let Pname = name.substring(0, 80);
  let price = data.price.toLocaleString("en-US");

  function add_toCart() {
    fetch(`http://localhost:8080/api/v1/get/product/cart/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("product add to cart");
      })
      .catch((err) => console.log(err));
  }
  function add_toWishlist() {
    fetch(`http://localhost:8080/api/v1/get/product/wishlist/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("product add to cart");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="products">
        <FontAwesomeIcon
          onClick={add_toWishlist}
          icon={faHeart}
          className={
            "fontawesomeIcon " +
            (isWishlist ? "fontawesomeIcon-red" : "fontawesomeIcon-gray")
          }
        ></FontAwesomeIcon>
        <div className="productImg">
          <img src={img} alt="" />
        </div>
        <div className="productTitle">
          {name.length > 80 ? <h3>{Pname + "..."}</h3> : <h3>{name}</h3>}
        </div>
        <div className="Stars">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className="productPrice">
          <p>NRS:{price}</p>
          <p className="underlinePrice">NRS:1,000.00</p>
        </div>

        <div className="productBtn">
          <button onClick={add_toCart}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fontawesomeIcon_Cart"
            ></FontAwesomeIcon>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
