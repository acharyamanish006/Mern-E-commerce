import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import { Link, Navigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./css/profileSidebar.css";

const ProfileSidebar = () => {
  const dispatch = useDispatch();
  function signOut() {
    fetch("http://localhost:8080/api/v1/sign/out", {
      credentials: "include",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        // window.location.reload(true);
        alert("Your Signed Out");
        dispatch({
          type: "is_Auth",
          payload: false,
        });
        // <Navigate to={"/"} />;
      })
      .catch((err) => console.log(err));
  }
  const [show, setShow] = useState(false);
  function ham() {
    // console.log(`sjw${show}`);
    setShow(!show);
  }

  // useEffect(() => {
  //   dispatch({
  //     type: "is_Auth",
  //     payload: auth,
  //   });
  //   console.log(auth);
  // }, [dispatch, auth]);
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="profileSidebarContainer">
      {/* <div className="show hover:cursor-pointer " onClick={ham}>
        {show ? (
          <CloseIcon className="mui-close" />
        ) : (
          <MenuIcon className="mui-ham" />
        )}
      </div> */}
      <div
        className={
          " profileSidebar bg-white p-10 m-2 h-fit rounded-md " +
          (show ? "profileSidebar-show " : "")
        }
      >
        <div>
          <h3 className="capitalize">Welcome {user.name}</h3>
        </div>
        <div>
          <Link to={"/profile/user-info"}>
            <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
              <PersonOutlineOutlinedIcon />
              <p className="px-1">Personal data</p>
            </div>
          </Link>
          <Link to={"/wishlist"}>
            <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
              <FavoriteBorderOutlinedIcon />
              <p className="px-1">Favorites</p>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="flex m-2 bg-slate-100 p-2 px-5 rounded-md hover:cursor-pointer hover:bg-slate-300 hover:text-white ">
              <ShoppingCartOutlinedIcon />
              <p className="px-1">Carts</p>
            </div>
          </Link>
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
          <Link to={"/profile/sell-product"}>
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
    </div>
  );
};

export default ProfileSidebar;
