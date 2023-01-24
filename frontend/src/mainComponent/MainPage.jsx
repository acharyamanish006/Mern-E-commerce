import React from "react";
import Banner from "../subComponent/Banner";
import Home from "./Home";
import TopProduct from "./TopProduct";

export default function MainPage() {
  return (
    <div>
      <Home />
      <TopProduct name="Top Tier Graphic's Card " priceRange={400000} />
      <TopProduct name="Budget Graphic's Card " priceRange={40000} />
      <Banner />
      <TopProduct name="LowEnd Graphic's Card" priceRange={25000} />
    </div>
  );
}
