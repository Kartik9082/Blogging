import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BLOG_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 min-h-[410px]">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter title..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="What's going in your mind..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
// title, content, user
