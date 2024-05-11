import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../redux/blogslice";
import { useEffect } from "react";

const useBlog = () => {
  const dispatch = useDispatch();

  const getPosts = async () => {
    const data = await fetch("http://localhost:5001/api/v1/blogPost");
    const json = await data.json();

    dispatch(getBlog(json));
  };

  useEffect(() => {
    getPosts();
  }, []);
};

export default useBlog;
