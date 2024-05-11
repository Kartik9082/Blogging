import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around min-h-10 max-w-full items-center shadow-inner p-3">
      <div>
        <a href="/">
          {" "}
          <h1 className="font-semibold cursor-pointer">MERN BLOG</h1>
        </a>
      </div>
      <div>
        <ul className="flex gap-10">
          <Link to="/">
            <li className="cursor-pointer hover:text-blue-400 transition delay-75 ">
              Home
            </li>
          </Link>
          <Link to="/blog">
            <li className="cursor-pointer hover:text-blue-400 transition delay-75  ">
              Blog
            </li>
          </Link>
          <li className="cursor-pointer hover:text-blue-400 transition delay-75  ">
            Posts+
          </li>
        </ul>
      </div>
      <div className="bg-black text-white rounded-sm px-2 py-1 ">
        <Link to="/login">
          <h1>LOGIN</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
