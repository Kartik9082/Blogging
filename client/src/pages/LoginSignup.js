import { useState } from "react";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <section className="h-2/3 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sampleimage"
        />
      </div>
      <form className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left m-4">
          <label className="mr-1">
            {isSignInForm ? "Sign in" : "Sign up"}{" "}
          </label>
        </div>

        {!isSignInForm && (
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm"></div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            {isSignInForm ? "Login" : "Sign Up"}
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? (
              <span>
                {" "}
                Don&apos;t have an account?{" "}
                <span className="text-blue-800">Register </span>{" "}
              </span>
            ) : (
              <span>
                {" "}
                Already Registered.{" "}
                <span className="text-blue-800">Login Now </span>{" "}
              </span>
            )}
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
