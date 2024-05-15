// UserProfile.js

import React from "react";
import useGetMyProfile from "../hooks/useGetMyProfile";

const Profile = () => {
  useGetMyProfile();
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
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="rounded-full w-24 h-24"
        />
        <h2 className="text-xl font-semibold mt-2">John Doe</h2>
        <p className="text-gray-600">Web Developer</p>
        <p className="text-gray-600">Location: New York, USA</p>
        <p className="text-gray-600">Email: john@example.com</p>
        <p className="mt-4">Bio:</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Profile;
