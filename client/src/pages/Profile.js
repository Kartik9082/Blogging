// UserProfile.js

import React from "react";
import useGetMyProfile from "../hooks/useGetMyProfile";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
  useGetMyProfile();
  const user = useSelector((store) => store?.user);
  // console.log(user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    // <div className="container mx-auto mt-8 min-h-screen">
    //   <div className="flex items-center justify-between">
    //     <h1 className="text-2xl font-bold">User Profile</h1>
    //     <Link to="/edit">
    //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //         Edit Profile
    //       </button>
    //     </Link>
    //   </div>
    //   <div className="mt-4">
    //     <img
    //       src="https://picsum.photos/seed/picsum/200"
    //       alt="User Avatar"
    //       className="rounded-full w-24 h-24"
    //     />
    //     <h2 className="text-xl font-semibold mt-2">
    //       {user?.userData?.data?.user?.name}
    //     </h2>
    //     <p className="text-gray-600">
    //       Role:{user?.getCurrentUser?.data?.user?.role}
    //     </p>
    //     <p className="text-gray-600">{user?.userData?.data?.user?.email}</p>
    //     {/* <p className="mt-4">Bio:</p> */}
    //     <p className="text-gray-600">{user?.userData?.data?.user?.bio}</p>
    //   </div>
    // </div>
    // <div className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3]">
    //   <div className="max-w-xl w-1/2 h-[80vh] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    //     <div className="px-6 py-4">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center">
    //           <img
    //             className="w-16 h-16 rounded-full mr-4 object-cover"
    //             src="https://picsum.photos/seed/picsum/200"
    //             alt="User"
    //           />
    //           <div>
    //             <h1 className="text-2xl font-bold text-gray-800">
    //               {user?.userData?.data?.user?.name}
    //             </h1>
    //             <p className="text-gray-600 text-sm">
    //               {user?.getCurrentUser?.data?.user?.role}
    //             </p>
    //           </div>
    //         </div>
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //           Edit Profile
    //         </button>
    //       </div>
    //       <div className="mt-4">
    //         <p className="text-gray-700">{user?.userData?.data?.user?.bio}</p>
    //       </div>
    //       <div className="mt-4">
    //         <p className="text-gray-700">
    //           <span className="font-semibold">Email:</span>{" "}
    //           {user?.userData?.data?.user?.email}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gray-100 flex ">
      <div className="max-w-full h-[80vh] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-16 h-16 rounded-full mr-4 object-cover"
                src="https://picsum.photos/seed/picsum/200"
                alt="User"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {user?.userData?.data?.user?.name}
                </h1>
                <p className="text-gray-600 text-sm">
                  {user?.getCurrentUser?.data?.user?.role}
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Profile
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">{user?.userData?.data?.user?.bio}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              {user?.userData?.data?.user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
