import { useEffect } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import { getCurrentUser } from "../redux/userSlice";

import { useDispatch, useSelector } from "react-redux";

const useGetMyProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.user?.userData?.token);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        const data = await res.data;
        // console.log(data?.user);
        dispatch(getCurrentUser(data));
      } catch (error) {
        console.log(error);
      }
    };
    getMyProfile();
  }, [dispatch, token]);
};

export default useGetMyProfile;
