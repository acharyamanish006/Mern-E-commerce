import React from "react";
import "./css/product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
//react state
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetch_allProduct } from "../Redux-toolkit/Features/FetchData";

export default function Product({ data }) {
  // let product = useSelector((state) => state.allProduct);
  // console.log(product);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetch_allProduct());
  // }, []);
  // console.log(data);
  const { name, price, img } = data;

  let Pname = name.substring(0, 80);
  // if (name.length > 5) {
  //   let Pname = name.substring(0, 50);
  //   return Pname;
  // }
  // const name = data.name;
  // const price = data.price;

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
