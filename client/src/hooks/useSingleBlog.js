import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSingleBlog } from "../redux/blogslice";
import axios from "axios";
import { BLOG_API_ENDPOINT } from "../utils/constants";

const useSingleBlog = (id) => {
  const dispatch = useDispatch();

  const getSinglePost = async () => {
    try {
      const data = await axios.get(`${BLOG_API_ENDPOINT}/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const json = await data;
      dispatch(getSingleBlog(json));
    } catch (error) {
      console.log("ERORR", error);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, []);
};

export default useSingleBlog;
