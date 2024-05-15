import { useEffect } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utils/constants";

const useGetMyProfile = (id) => {
  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/me`, {
          withCredentials: true,
        });
      } catch (error) {}
    };
    getMyProfile();
  }, []);
};

export default useGetMyProfile;
