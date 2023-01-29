import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { delete_cart } from "../Redux-toolkit/Features/deleteCart";
import { delete_wishlist } from "../Redux-toolkit/Features/deleteWishlist";

const WishlistProduct = ({ data, icon }) => {
  const { name, img, brand, disPrice } = data;
  const dispatch = useDispatch();
  function add_toCart() {
    fetch(`http://localhost:8080/api/v1/get/product/cart/${data._id}`, {
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
    fetch(`http://localhost:8080/api/v1/get/product/wishlist/${data._id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("product add to cart");
      })
      .catch((err) => console.log(err));
  }

  function delete_Cart() {
    dispatch(delete_cart(data._id));
    alert("Product has been remove from the Cart");
  }
  function delete_Wishlist() {
    dispatch(delete_wishlist(data._id));
    alert("Product has been remove from the Wishlist");
  }

  let price = data.price.toLocaleString("en-US");
  return (
    <div className=" bg-white  border-gray-50 border-b-2 w-11/12 m-auto py-3 ">
      <div className="flex justify-between align-middle h-fit max-md:flex-col">
        <div className=" h-fit m-auto max-md:w-2/4">
          <img src={img} className="w-32 max-md:w-fit" alt="" />
        </div>
        {/* {name.length > 80 ? (
          <h3 className="bg-gray-50 h-fit m-auto w-1/2">{Pname + "..."}</h3>
        ) : ( */}
        <div className="flex-col h-fit m-auto w-1/2 max-md:w-full">
          {/* <div className="flex-col h-fit m-auto "> */}
          <h3 className=" ">{name ? name.substring(0, 80) + "..." : name}</h3>
          <p className="m-2 text-gray-400 text-sm capitalize ">
            Brand : {brand ? brand : "no brand"}
          </p>
        </div>
        {/* )} */}
        <div className="h-fit m-auto flex-col ">
          <div className="  text-red-500 ">RS: {price}</div>

          <p className="text-gray-400 text-sm line-through mb-2">
            {" "}
            Rs:
            {disPrice == null ? " 00000" : disPrice.toLocaleString("en-US")}
          </p>
          {icon ? (
            <div className="flex justify-around align-middle max-md:mb-5">
              <div onClick={add_toCart}>
                <ShoppingCartIcon
                  className="text-gray-400 cursor-pointer"
                  fontSize="small"
                />
              </div>
              <div onClick={delete_Wishlist}>
                <DeleteIcon
                  className="text-gray-400 cursor-pointer"
                  fontSize="small"
                />
              </div>
            </div>
          ) : (
            <div className="flex justify-around align-middle max-md:mb-5">
              <div onClick={add_toWishlist}>
                <FavoriteIcon
                  className="text-gray-400 cursor-pointer"
                  fontSize="small"
                />
              </div>
              <div onClick={delete_Cart}>
                <DeleteIcon
                  className="text-gray-400 cursor-pointer"
                  fontSize="small"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex  h-fit m-auto max-md:w-full">
          <button className="rounded-md bg-red-500 px-3 py-2 text-white mx-3 max-md:w-full">
            Buy Now
          </button>
          {/* <button className="rounded-md bg-red-500 px-3 py-1 text-white mx-3 ">
            -
          </button>
          <p>1</p>
          <button className="rounded-md bg-red-500 px-3 py-1 text-white mx-3">
            +
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
