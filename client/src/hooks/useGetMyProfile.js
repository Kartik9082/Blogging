import { useEffect, useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";
import { getCurrentUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetMyProfile = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store?.user?.userData?.token);
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const getMyProfile = async () => {
      if (!token) {
        setLoading(false); // Set loading state to false if there's no token
        return;
      }

      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        const data = res.data;
        dispatch(getCurrentUser(data));
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false); // Set loading state to false after the request completes
      }
    };

    getMyProfile();
  }, [dispatch, token]);

  return loading; // Return loading state from the custom hook
};

export default useGetMyProfile;
