import React from "react";

const WishlistProduct = ({ data }) => {
  const { name, img } = data;

  //   let Pname = name.substring(0, 80);
  let price = data.price.toLocaleString("en-US");
  return (
    <div className=" bg-white  border-gray-50 border-b-2 w-11/12 m-auto py-3">
      {/* <div>
        <input type="radio" name="" id="" />
      </div> */}
      <div className="flex  justify-between align-middle h-fit ">
        <div className=" h-fit m-auto">
          <img src={img} className="w-32 " />
        </div>
        {/* {name.length > 80 ? (
          <h3 className="bg-gray-50 h-fit m-auto w-1/2">{Pname + "..."}</h3>
        ) : ( */}
        <h3 className=" h-fit m-auto w-1/2">{name}</h3>
        {/* )} */}
        <div className=" h-fit m-auto text-red-500 ">RS: {price}</div>
        <div className="flex  h-fit m-auto">
          <button className="rounded-md bg-red-500 px-3 py-1 text-white mx-3 ">
            -
          </button>
          <p>1</p>
          <button className="rounded-md bg-red-500 px-3 py-1 text-white mx-3">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
