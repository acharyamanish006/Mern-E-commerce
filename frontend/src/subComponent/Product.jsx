import React from "react";
import "./css/product.css";
import img from "../img/RTX3060Ti.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";

export default function Product() {
  return (
    <div>
      <div className="products">
        <FontAwesomeIcon
          icon={faHeart}
          className={
            "fontawesomeIcon " + (onclick ? "fontawesomeIcon--red" : "")
          }
        ></FontAwesomeIcon>
        <div className="productImg">
          <img src={img} alt="" />
        </div>
        <div className="productTitle">
          <h3>
            {" "}
            NVIDIA GeForce RTX 3060 8GB GDDR6x PCI Express 4.0 Graphics Card -
            Steel and Black
          </h3>
        </div>
        <div className="Stars">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className="productPrice">
          <p>NRS:1,000.00</p>
          <p className="underlinePrice">NRS:1,000.00</p>
        </div>

        <div className="productBtn">
          <button>
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
