import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { Link } from "react-router-dom";
const ProfileSidebar = () => {
  function signOut() {
    fetch("http://localhost:8080/api/v1/sign/out", {
      credentials: "include",
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="bg-white p-10 m-2 h-fit rounded-md">
      <div>
        <h3>Welcome Acharya Manish</h3>
      </div>
      <div>
        <Link to={"/profile"}>
          <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
            <PersonOutlineOutlinedIcon />
            <p className="px-1">Personal data</p>
          </div>
        </Link>
        {/* <Link to={"/favorites"}> */}
        <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
          <FavoriteBorderOutlinedIcon />
          <p className="px-1">Favorites</p>
        </div>
        {/* </Link> */}
        {/* <Link to={"/carts"}> */}
        <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
          <ShoppingCartOutlinedIcon />
          <p className="px-1">Carts</p>
        </div>
        {/* </Link> */}
        {/* <Link to={"/orders"}> */}
        <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
          <ListAltOutlinedIcon />
          <p className="px-1">Orders</p>
        </div>
        {/* </Link> */}
        {/* <Link to={"/my-purchases"}> */}
        <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
          <InventoryOutlinedIcon />
          <p className="px-1">My Purchases</p>
        </div>
        {/* </Link> */}
        <Link to={"/sell-product"}>
          <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
            <StorefrontOutlinedIcon />
            <p className="px-1">Sell Product</p>
          </div>
        </Link>
        {/* <Link to={"/sign-out"}> */}
        <div
          className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white "
          onClick={signOut}
        >
          <ExitToAppOutlinedIcon />
          <p className="px-1">Sign Out</p>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProfileSidebar;
