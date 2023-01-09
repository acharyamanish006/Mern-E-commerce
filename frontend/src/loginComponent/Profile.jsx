import React from "react";

export const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_wrapper">
        <div className="profile_sidebar">
          <p>My Account</p>
          <p>My Review</p>
        </div>
        <div className="profile_main">
          <div className="profile_content">
            <div className="profile_name">
              <h3>Name</h3>
              <p>Acharya Manish</p>
            </div>
            <div className="profile_email">
              <h3>Email</h3>
              <p>manish.acharya313@gmail.com</p>
            </div>
            <div className="profile_gender">
              <h3>Gender</h3>
              <p>male</p>
            </div>
            <div className="profile_mobile">
              <h3>Mobile Number</h3>
              <p>321478213425</p>
            </div>
          </div>
          <div className="profile_btn">
            <button>Edit Profile</button>
            <button>Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};
