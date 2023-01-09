import React from "react";
import "./css/footer.css";
import esewa from "../img/eSewa.png";
import khalti from "../img/khalti.png";
import connect from "../img/connect_IPS.jpg";
import Link from "@mui/material/Link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="details">
          <div className="catagories">
            <h3>Catagories</h3>
            <p>Nvidia Graphics Cards</p>
            <p>AMD Radeon Graphics Cards</p>
            <p>Intel® Arc Graphics Cards</p>
          </div>
          <div className="aboutUs">
            <h3>About Us</h3>
            <p>about</p>
            <p>Terms and Conditions</p>
            <p>Warranty</p>
            <p>Privacy Policy</p>
          </div>
          <div className="customerService">
            <h3>CUSTOMER SERVICE</h3>
            <p>Shipping and Return Policy</p>
            <p>My Account</p>
            <p>Contact Us</p>
          </div>
          <div className="supportUs">
            <h3>SUPPORT</h3>
            <p>Email: manish.acharya313@gmail.com</p>
            <p>Phone : 000-111-222-333</p>
            <p>Address: Tandi, Chitwan</p>
          </div>
        </div>
        <hr />
        <div className="paymentSection">
          <div className="payment">
            <h3>PAYMENT METHOD:</h3>
            <div>
              <img src={esewa} alt="" />
            </div>
            <div>
              <img src={khalti} alt="" />
            </div>
            <div>
              <img src={connect} alt="" />
            </div>
          </div>
          <div className="followUs">
            <h3>
              Follow US :
              <FacebookOutlinedIcon className="fontawesomeIcon" />
              <InstagramIcon className="fontawesomeIcon" />
              <TwitterIcon className="fontawesomeIcon" />
              <GitHubIcon className="fontawesomeIcon" />
            </h3>
          </div>
        </div>

        <div className="copyright">
          <div>
            <p>
              {" "}
              {"Copyright © "}
              <Link color="inherit" href="https://portfolio-b79f3.web.app/">
                Acharya Manish
              </Link>{" "}
              Ltd.
              {new Date().getFullYear()}. All Rights Reserved.
              {"."}
            </p>
          </div>
        </div>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </div>
    </div>
  );
}
