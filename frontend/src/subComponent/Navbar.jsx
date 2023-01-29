import logo from "../img/nvidia-png.png";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
//
import { useDispatch, useSelector } from "react-redux";
import { user_info } from "../Redux-toolkit/Features/userInfo";

export const Navbar = () => {
  const dispatch = useDispatch();
  //
  const { auth } = useSelector((state) => state.isAuth);

  const { user } = useSelector((state) => state.userInfo);
  // if (auth) {
  useEffect(() => {
    dispatch(user_info());
    // getData();
  }, [dispatch, auth]);
  // dispatch(user_info());

  // {
  //   user === null
  //     : (user_img = user.avatar);
  // }
  // // }

  //
  // let user =  useSelector((state) => state.userInfo);
  // async function getData() {

  // }
  ///res search bar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // <div>
  //   {/* <Button
  //     id="basic-button"
  //     aria-controls={open ? "basic-menu" : undefined}
  //     aria-haspopup="true"
  //     aria-expanded={open ? "true" : undefined}
  //     onClick={handleClick}
  //   >
  //     Dashboard
  //   </Button> */}
  //   <Menu
  //     id="basic-menu"
  //     anchorEl={anchorEl}
  //     open={open}
  //     onClose={handleClose}
  //     MenuListProps={{
  //       "aria-labelledby": "basic-button",
  //     }}
  //   >
  //     <MenuItem onClick={handleClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleClose}>My account</MenuItem>
  //     <MenuItem onClick={handleClose}>Logout</MenuItem>
  //   </Menu>
  // </div>;
  //
  const [search, setSearch] = useState("");

  function search_value(e) {
    setSearch(e.target.value);

    // dispatch({
    //   type: "searchValue",
    //   payload: search,
    // });
  }
  function send_search() {
    // e.preventDefault();
    // if (e.key === "Enter") {
    <Navigate to={`/search/${search}`} />;
    // console.log(`/search/${search}`);
    // }
  }
  // const { name } = useSelector((state) => state.search);
  // console.log(name);
  return (
    <div className="navContainer">
      <div className="Wrapper">
        <div className="navWrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="igm" />
            </Link>
          </div>
          <div className="search">
            <input
              type="search"
              className="searchBar"
              // onKeyDown={send_search}
              onChange={search_value}
            />

            <Link to={`/search/${search}`}>
              <FontAwesomeIcon
                icon={faSearch}
                className="fontawesomeIcon  "
                onClick={send_search}
              ></FontAwesomeIcon>
            </Link>

            {/* res search bar */}
            {/* <Link to={`/search/${search}`}> */}
            <FontAwesomeIcon
              icon={faSearch}
              className="fontawesomeIcon fontawesomeIcon_search"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            {/* </Link> */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem className="w-screen ">
                {" "}
                <input
                  type="search"
                  className="w-10/12 py-1 px-1 mr-3"
                  // onKeyDown={send_search}
                  onChange={search_value}
                />
                <Link to={`/search/${search}`}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="fontawesomeIcon fontawesomeIcon_search"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={send_search}
                  />
                </Link>
              </MenuItem>
              {/* <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
            {/* <FontAwesomeIcon
              icon={faX}
              className="fontawesomeIcon fontawesomeIcon_X"
            ></FontAwesomeIcon> */}
          </div>
          <div className="avatar">
            <Link to={"/profile"}>
              {/* <Avatar className="w-full" /> */}
              {user == null ? (
                <Avatar sx={{ width: 45, height: 45 }} />
              ) : (
                <Avatar src={user.avatar} sx={{ width: 45, height: 45 }} />
              )}
            </Link>
          </div>
        </div>
        <div className="navList">
          <ul>
            <li>
              <Link to="/home">
                <FontAwesomeIcon
                  icon={faHome}
                  className="fontawesomeIcon"
                ></FontAwesomeIcon>
                Home
              </Link>
            </li>
            <li>
              <Link to="/store">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="fontawesomeIcon"
                ></FontAwesomeIcon>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="fontawesomeIcon"
                ></FontAwesomeIcon>
                My Wish list
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="fontawesomeIcon"
                ></FontAwesomeIcon>
                MY Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
