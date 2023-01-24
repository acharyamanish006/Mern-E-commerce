import React from "react";
import Product from "../subComponent/Product";
import "./css/Store.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Store() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/get/all/product", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        // dispatch({
        //   type: "searchValue",
        // });
      })
      .catch((err) => console.log(err));
  }, []);
  // const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

  //pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const totalPage = Math.round(product.length / postPerPage) + 1;

  console.log(search);
  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3> New Offer </h3>
        </div>
        <div className="productCollection">
          {product
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
