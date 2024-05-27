import React from "react";
import useGetMyProfile from "../hooks/useGetMyProfile";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

// Import a placeholder image
// import defaultProfileImage from "../../../server/public/user-image/default-profile-photo";

const Profile = () => {
  useGetMyProfile();
  const user = useSelector((store) => store?.user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Use the photo if available, otherwise use the default profile image
  const profileImage = user?.getCurrentUser?.data?.user?.photo;
  // console.log(profileImage);
  return (
    <div className="min-h-screen bg-gray-100 flex ">
      <div className="max-w-full h-[80vh] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mr-4 object-cover"
                src={`http://localhost:5001${profileImage}`} // Use the profileImage variable here
                alt="User"
                onError={(e) => console.error("Error loading image:", e)}
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {user?.getCurrentUser?.data?.user?.name}
                </h1>
                <p className="text-gray-600 text-sm">
                  {user?.getCurrentUser?.data?.user?.role}
                </p>
              </div>
            </div>
            <Link to="/edit">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit Profile
              </button>
            </Link>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              {user?.getCurrentUser?.data?.user?.bio}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              {user?.getCurrentUser?.data?.user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
