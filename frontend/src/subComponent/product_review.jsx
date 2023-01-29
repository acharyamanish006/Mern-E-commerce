import React from "react";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { Review } from "./review";
import { Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add_reviews } from "../Redux-toolkit/Features/addReviews";
import { auth } from "../Redux-toolkit/Features/auth";

export const ProductReview = ({ data, id }) => {
  const [value, setValue] = useState(5);
  const [review, setReview] = useState("");
  const [Reviews, setReviews] = useState([]);
  const dispatch = useDispatch();
  const { name, reviews } = data;

  useEffect(() => {
    setReviews(reviews);
    dispatch(auth());
  }, [dispatch, reviews]);

  const { user_id } = useSelector((state) => state.AuthId);

  function send_review(e) {
    e.preventDefault();
    dispatch(add_reviews({ user_id, id, value, review }));
    setReview("");
    setValue(0);
    alert("Review Added");
  }
  //
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  if (Reviews === undefined) {
    return "loading";
  }
  let totalPage;

  Reviews.length < 9
    ? (totalPage = 1)
    : (totalPage = Math.round(Reviews.length / postPerPage) + 1);
  return (
    <div>
      <div className="ProductDescription-wrapper">
        <div>
          <div className="bg-gray-50 mb-10 ">
            <h3 className="p-5 font-bold">
              Ratings & Reviews of{" "}
              {name == null ? name : name.substring(0, 20) + "..."}
            </h3>
          </div>
          <div className="border-b-2 border-gray-100 pb-5 mt-3 ">
            <Rating
              name="simple-controlled"
              precision={0.5}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <form onSubmit={send_review}>
              <input
                type="text"
                placeholder="Review"
                className="border-b-2 border-gray-50 w-1/2 p-2"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <input
                type="submit"
                className="rounded-md bg-blue-400 px-3 py-2 text-white mx-3 cursor-pointer "
              />
            </form>
          </div>
          {Reviews.map((data) => {
            return <Review key={data._id} data={data} />;
          }).slice(indexOfFirstPost, indexOfLastPost)}
        </div>
        <Stack spacing={2} className="mt-4">
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
};
