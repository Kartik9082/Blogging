const Login = () => {
  return (
    <div className="bg-gradient-to-b from-[#a8edea] to-[#fed6e3]">
      <h1 className="text-3xl font-semibold mb-2 p-2 ">MERNBLOG</h1>
      <div className=" flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Login</h1>
          <div>
            <form>
              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2">
                  Enter Email
                </label>
                <input
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2">
                  Enter Password
                </label>
                <input
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  className="p-2 focus:outline-none focus:outline-indigo-300  border-b-2 w-full"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6ac6ed] to-[#df2ffafa] p-2 text-white rounded-full w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
