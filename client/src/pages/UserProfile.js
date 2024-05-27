import React from "react";
import useGetUser from "../hooks/useGetUser";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { id } = useParams();
  //   console.log("param", id);

  useGetUser({ id });
  const user = useSelector((store) => store?.user?.getUser);
  console.log(user);

  return (
    <div className="flex flex-col h-[80vh] m-2 py-2 w-10/12">
      <div>
        <h1>{user?.data?.user?.name} </h1>
        <div className="w-1/4 ">
          <img
            src={`http://localhost:5001${user?.data?.user?.photo} `}
            alt="User"
            className="rounded-full"
          />
        </div>

        <div>
          <p>{user?.data?.user?.role}</p>
          <p>{user?.data?.user?.email}</p>
          <p>{user?.data?.user?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
