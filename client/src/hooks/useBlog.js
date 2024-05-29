import axios from "axios";
import { useDispatch } from "react-redux";
import { getBlog } from "../redux/blogslice";
import { useEffect } from "react";
import { BLOG_API_ENDPOINT } from "../utils/constants";

const useBlog = () => {
  const dispatch = useDispatch();

  const getPosts = async () => {
    try {
      const response = await axios.get(BLOG_API_ENDPOINT);
      dispatch(getBlog(response.data));
    } catch (error) {
      // Handle errors
      console.error("Error fetching blog posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
};

export default useBlog;
