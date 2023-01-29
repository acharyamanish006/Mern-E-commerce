import React from "react";
import Product from "../subComponent/Product";
import "./css/Store.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Store() {
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:8080/api/v1/get/all/product", {
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data.product);
  //       // dispatch({
  //       //   type: "searchValue",
  //       // });
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const { products, loading } = useSelector((state) => state.allProduct);

  const { search } = useSelector((state) => state.search);

  const [currentPage, setCurrentPage] = useState(1);
  if (!products) {
    return "Loading...";
  }

  //pagenation
  const postPerPage = 15;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const totalPage = Math.round(products.length / postPerPage) + 1;

  if (loading) {
    return "Loading...";
  }
  if (!products) {
    return "Loading...";
  }
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3> New Offer </h3>
        </div>
        <div className="productCollection">
          {products
            .filter((item) => {
              return search.toLowerCase() === " "
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((data) => {
              return <Product key={data._id} data={data} />;
            })
            .slice(indexOfFirstPost, indexOfLastPost)}
        </div>
        <Stack spacing={2}>
          <Pagination
            count={totalPage}
            onChange={(event, page) => {
              setCurrentPage(page);
            }}
          />
        </Stack>
      </div>
    </div>
  );
}
