import { Avatar } from "@mui/material";
import React from "react";
import ProfileSidebar from "./profileSidebar";

const Profile = () => {
  return (
    <div className="flex">
      <div>
        <ProfileSidebar />
      </div>
      <div className=" bg-white m-2 rounded-md p-5 h-fit ">
        <div className="flex">
          <div className="px-5">
            <Avatar sx={{ width: 96, height: 96 }} />
          </div>
          <div>
            <div className="p-3">
              <label className="font-bold">Full Name</label>
              <p>Manish Acharya</p>
            </div>
            <div className="p-3">
              <label className="font-bold">Email Address</label>
              <p>manish.acharya313@gmail.com</p>
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
