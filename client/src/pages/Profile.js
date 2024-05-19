// UserProfile.js

import React from "react";
import useGetMyProfile from "../hooks/useGetMyProfile";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = () => {
  useGetMyProfile();
  const user = useSelector((store) => store?.user);
  // console.log(user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto mt-8 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Profile</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
      <div className="mt-4">
        <img
          src="https://picsum.photos/seed/picsum/200"
          alt="User Avatar"
          className="rounded-full w-24 h-24"
        />
        <h2 className="text-xl font-semibold mt-2">
          {user?.userData?.data?.user?.name}
        </h2>
        <p className="text-gray-600">Role:{user?.userData?.data?.user?.role}</p>
        <p className="text-gray-600">{user?.userData?.data?.user?.email}</p>
        {/* <p className="mt-4">Bio:</p> */}
        <p className="text-gray-600">{user?.userData?.data?.user?.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
