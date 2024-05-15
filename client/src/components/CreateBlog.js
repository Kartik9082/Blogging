import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BLOG_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((store) => store.user);
  // console.log(user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.post(`${BLOG_API_ENDPOINT}`, {
        title,
        content,
        author: user?.userData?.data?.user?._id,
      });
      const data = await res.data;
      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);
      if (data.status === "success") {
        toast.success(data.status);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#a8edea] to-[#fed6e3] min-h-screen p-4">
      <div className=" flex items flex-col m-auto w-5/6 border border-black  bg-white rounded-xl overflow-hidden shadow-md mzz">
        <h1 className="text-2xl font-semibold text-center">Create Blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            className="outline-none p-2 rounded-lg m-2 w-3/4"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            className="outline-none p-2 rounded-lg m-2 w-3/4"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            type="submit"
            className="m-2 w-5/6 p-2 rounded-lg bg-slate-900 text-white"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
// title, content, user
