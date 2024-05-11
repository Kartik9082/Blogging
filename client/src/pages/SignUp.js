import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setErrorMessage("Please fill out all fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("http://localhost:5001/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      console.log(data);
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
      setErrorMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#a8edea] to-[#fed6e3]">
      <h1 className="text-3xl font-semibold mb-2 p-2 ">MERNBLOG</h1>
      <div className=" flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Create Account
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  id="name"
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="text"
                  placeholder="Enter username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Enter Email
                </label>
                <input
                  id="email"
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Enter Password
                </label>
                <input
                  id="password"
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[#6ac6ed] to-[#df2ffafa] p-2 text-white rounded-full w-full"
              >
                {loading ? "Loading...." : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
