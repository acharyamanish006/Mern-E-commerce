import React from "react";
import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

export const Review = ({ data }) => {
  const { rating, review, user } = data;

  if (user === null) {
    return "loading";
  }

  return (
    <div>
      <div className="mt-8 border-b-2 border-gray-100 pb-5 pl-3 ">
        <div className="">
          <Rating readOnly size="small" value={rating} />
          <div className="flex align-middle justify-start">
            {user.avatar == null ? (
              <Avatar sx={{ width: 24, height: 24 }} />
            ) : (
              <Avatar sx={{ width: 24, height: 24 }} src={user.avatar} />
            )}
            <p className="ml-3 font-light text-sm capitalize">{user.name}</p>
          </div>
        </div>
        <div className="ml-5 mt-3">
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};
