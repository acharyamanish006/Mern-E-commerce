import React from "react";
import Product from "../subComponent/Product";
import "../mainComponent/css/Store.css";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

export default function SearchedProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/get/product/search/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data.searched_product);
        // dispatch({
        //   type: "searchValue",
        // });
      })
      .catch((err) => console.log(err));
  }, [id]);

  //pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 15;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  let totalPage;

  product.length < 15
    ? (totalPage = 1)
    : (totalPage = Math.round(product.length / postPerPage) + 1);

  return (
    <div className="productContainer">
      <div className="productWrapper">
        <div className="productHeading">
          <h3>
            {" "}
            {product.length} results for "{id}"
          </h3>
        </div>
        <div className="productCollection">
          {product
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
