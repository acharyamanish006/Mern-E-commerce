import React from "react";
import "./css/product_info.css";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { delete_product } from "../Redux-toolkit/Features/deleteProduct";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductInfo = ({ data, id }) => {
  const { name, img, price, disPrice, reviews, brand, condition } = data;
  const { user } = useSelector((state) => state.userInfo);

  let rating = data.Rating;
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
  const dispatch = useDispatch();
  function deleteProduct() {
    dispatch(delete_product(id));
    alert("Product Deleted");
  }
  const [quantity, setQuantity] = useState(1);
  function quantity_add() {
    setQuantity((pre) => pre + 1);
  }
  function quantity_sub() {
    if (quantity < 1) {
      return;
    }
    setQuantity((pre) => pre - 1);
  }

  return (
    <div className="w-11/12 ">
      <div className="productCollection">
        <div className="product-info-img ">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="product-info-body">
          <h3 className="w-11/12 p-2">{name}</h3>
          <div className="flex border-b-2 border-gray-100 p-2 max-sm:flex-col ">
            <div className="flex m-2 justify-center max-sm:justify-start">
              <Rating
                name="half-rating"
                readOnly
                defaultValue={2.5}
                value={rating}
                precision={0.5}
                size="small"
              />
              <p className="text-gray-400 text-sm mx-2 ">
                {" "}
                {reviews == null ? 0 : reviews.length} Rating
              </p>
            </div>
            <p className="m-2 text-gray-400 text-sm capitalize ">
              Brand : {brand ? brand : "no brand"}
            </p>
            <p className="m-2 text-gray-400 text-sm capitalize ">
              condition : {condition ? condition : "N/S"}
            </p>
          </div>
          <div className="flex-col border-b-2 border-gray-100 p-2 my-1">
            <p className=" text-red-500 text-2xl">
              RS: {price == null ? price : price.toLocaleString("en-US")}
            </p>
            <p className="text-gray-400 text-base line-through">
              RS:{" "}
              {disPrice == null ? " 00000" : disPrice.toLocaleString("en-US")}
            </p>
          </div>
          <div className="flex my-5">
            <p className="m-2">Quantity</p>
            <div className="flex">
              <button
                className="rounded-md bg-gray-300 px-3 text-white mx-3"
                onClick={quantity_sub}
              >
                -
              </button>
              <p className="m-1">{quantity}</p>
              <button
                className="rounded-md bg-gray-300 px-3  text-white mx-3"
                onClick={quantity_add}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-11 mb-5 ">
            <button
              className="rounded-md bg-green-400 px-3 py-2 text-white mx-3 "
              onClick={add_toCart}
            >
              Add to Cart
            </button>
            <button className="rounded-md bg-red-500 px-3 py-2 text-white mx-3 max-sm:mt-2">
              Buy Now
            </button>
            {user.isAdmin ? (
              <Link to={"/store"}>
                <button
                  className="rounded-md bg-blue-400 px-3 py-2 text-white mx-3 max-sm:mt-2 max-sm:w-11/12 "
                  onClick={deleteProduct}
                >
                  Delete
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
