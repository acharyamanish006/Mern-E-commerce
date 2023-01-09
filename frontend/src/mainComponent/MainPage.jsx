import React from "react";
import Banner from "../subComponent/Banner";
import Home from "./Home";
import TopProduct from "./TopProduct";

export default function MainPage() {
  return (
    <div>
      <Home />
      <TopProduct name="Top Choice's" />
      <TopProduct name="Recommended for You" />
      <Banner />
      <TopProduct name="Best Seller" />
    </div>
  );
}
