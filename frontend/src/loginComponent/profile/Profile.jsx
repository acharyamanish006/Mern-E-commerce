import { Avatar } from "@mui/material";
import React from "react";
import ProfileSidebar from "./profileSidebar";

import { useSelector } from "react-redux";
import "./css/profileSidebar.css";

const Profile = () => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="flex">
      <div className="profile_sidebar">
        <ProfileSidebar />
      </div>
      <div className=" bg-white m-2 rounded-md p-5 h-fit ">
        <div className="flex">
          <div className="px-5">
            {user == null ? (
              <Avatar />
            ) : (
              <Avatar sx={{ width: 96, height: 96 }} src={user.avatar} />
            )}
          </div>
          <div>
            <div className="p-3">
              <label className="font-bold capitalize ">Full Name</label>
              <p className="capitalize">{user.name}</p>
            </div>
            <div className="p-3">
              <label className="font-bold">Email Address</label>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-11  flex justify-end">
          <button className="rounded-md bg-gray-500 px-3 py-1 text-white mx-3">
            Edit
          </button>
          <button
            type="submit"
            className="rounded-md bg-gray-500 px-3 py-1 text-white mx-3"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
