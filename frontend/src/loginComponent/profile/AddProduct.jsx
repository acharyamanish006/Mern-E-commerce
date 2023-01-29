import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import ProfileSidebar from "./profileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { post_product } from "../../Redux-toolkit/Features/addData";

import "./css/profileSidebar.css";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [disPrice, setDisPrice] = useState(0);
  const [description, setDescription] = useState("");
  // const [img_url, setImg_url] = useState("");
  //
  const [brand, setBrand] = useState("Nvidia");
  const [condition, setCondition] = useState("Brand-New");

  const brandChange = (event) => {
    setBrand(event.target.value);
  };
  const conditionChange = (event) => {
    setCondition(event.target.value);
  };

  // const { loading } = useSelector((state) => state.addProduct);

  function add_data() {
    if (!img || !product || !price) {
      return alert("fields can't be empty");
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "vnoavbj1");
    // formData.append("cloud_name", "dru5tgtf6");

    fetch("https://api.cloudinary.com/v1_1/dru5tgtf6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          post_product({
            product,
            price,
            data,
            description,
            brand,
            condition,
            disPrice,
          })
        );
        setLoading(false);
        alert("Product has been created successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="flex">
      <div className="profile_sidebar">
        <ProfileSidebar />
      </div>
      <div className="bg-white p-10 m-2">
        <h2 className="flex justify-center border-b-2 font-bold ">
          Add New Product
        </h2>
        <div className="p-5">
          <div className="flex-wrap p-5  ">
            <label className="font-bold">Product Name</label>
            <input
              type="text"
              className="border-2 mx-3 bg-gray-50 px-2 py-1 rounded-sm "
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="p-5">
            <FormControl>
              <h4 className="font-bold">Product Category</h4>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={brand}
                onChange={brandChange}
              >
                <FormControlLabel
                  value="Nvidia"
                  control={<Radio />}
                  label="Nvidia"
                />
                <FormControlLabel
                  value="Intel Arc"
                  control={<Radio />}
                  label="Intel Arc"
                />
                <FormControlLabel
                  value="AMD Radeon"
                  control={<Radio />}
                  label="AMD Radeon"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="p-5">
            <FormControl>
              <h4 className="font-bold">Product Freshness</h4>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={condition}
                onChange={conditionChange}
              >
                <FormControlLabel
                  value="Brand-New"
                  control={<Radio />}
                  label="Brand New"
                />
                <FormControlLabel
                  value="Second-Hand"
                  control={<Radio />}
                  label="Second Hand"
                />
                <FormControlLabel
                  value="Refurbished"
                  control={<Radio />}
                  label="Refurbished"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="p-5">
            <label className="font-bold"> Image of Product</label>
            <input
              type="file"
              className=" bg-gray-50 ml-2"
              onChange={(e) => setImg(e.target.files[0])}
              // value={img}
            />
          </div>
          <div className="flex p-5">
            <label className="font-bold">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-gray-50 resize-none ml-4 w-full p-2 border-2 rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="p-5">
            <label className="font-bold">Product Price</label>
            <input
              type="number"
              name=""
              id=""
              className="bg-gray-50 ml-4 border-2 rounded-md"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="p-5">
            <label className="font-bold">Discounted Price</label>
            <input
              type="number"
              name=""
              id=""
              className="bg-gray-50 ml-4 border-2 rounded-md"
              onChange={(e) => setDisPrice(e.target.value)}
            />
          </div>
          <div className="p-5">
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              <button
                type="submit"
                className="rounded-md bg-gray-500 px-3 py-1 text-white"
                onClick={add_data}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
