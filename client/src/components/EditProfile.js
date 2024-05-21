import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";

const EditProfile = () => {
  const user = useSelector((store) => store?.user);
  const { bio, email, name } = user?.getCurrentUser?.data?.user;
  const token = useSelector((store) => store?.user?.userData?.token);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ name, bio, email });
  }, [name, bio, email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.patch(`${USER_API_ENDPOINT}/updateMe`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      if (!data.success) {
        setLoading(false);
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (data.status === "success") {
        toast.success(data.message);
        navigate("/profile");
      }
    } catch (error) {
      setErrorMessage(error.message);
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update"}
        </button>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default EditProfile;
