import React, { useState } from "react";
import { useEffect } from "react";
import WishlistProduct from "../subComponent/wishlistProduct";
import "./css/Store.css";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get/product/cart", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCart(data.myCart))
      .catch((err) => console.log(err));
  }, []);
  let totalPrice = 0;

  cart.filter((data) => {
    return (totalPrice += data.price);
  });

  return (
    <div className="rounded-md m-2 w-11/12 bg-white  ">
      {cart.map((data) => {
        return <WishlistProduct key={data._id} data={data} icon={false} />;
      })}
      <div className=" flex justify-end m-4">
        <p className="font-bold font-mono">TotalPrice = </p>
        <p className="pl-2 text-red-500 font-semibold">
          {" "}
          RS: {totalPrice.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
};
