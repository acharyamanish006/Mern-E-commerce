import React, { useState } from "react";
import { useEffect } from "react";
import WishlistProduct from "../subComponent/wishlistProduct";
export const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get/product/wishlist", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setWishlist(data.myWishList))
      .catch((err) => console.log(err));
  }, []);
  let totalPrice = 0;
  // let i;
  // for (i = 0; i < wishlist.length; i++) {
  // console.log("hey");
  wishlist.filter((data) => {
    totalPrice += data.price;
  });
  // }
  console.log(totalPrice);
  // let price = data.price.toLocaleString("en-US");

  return (
    <div className="rounded-md m-2 w-11/12 bg-white   ">
      {wishlist.map((data) => {
        return <WishlistProduct key={data._id} data={data} />;
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
