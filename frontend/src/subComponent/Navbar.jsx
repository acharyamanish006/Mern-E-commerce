import logo from "../img/nvidia-png.png";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

export const Navbar = () => {
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
            <input type="search" className="searchBar" />
            <FontAwesomeIcon
              icon={faSearch}
              className="fontawesomeIcon  "
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faSearch}
              className="fontawesomeIcon fontawesomeIcon_search"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faX}
              className="fontawesomeIcon fontawesomeIcon_X"
            ></FontAwesomeIcon>
          </div>
          <div className="signOut">
            <Link to={"/profile"}>
              <Avatar />
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
