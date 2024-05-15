import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

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
          <Link to="/create">
            <li className="cursor-pointer hover:text-blue-400 transition delay-75  ">
              Create
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        <h2 className="mr-2">{user?.userData?.data?.user?.name}</h2>
        {user.isLoggedIn ? (
          <h1
            className="bg-black text-white rounded-sm px-2 py-1 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </h1>
        ) : (
          <Link to="/login">
            <h1 className="bg-black text-white rounded-sm px-2 py-1 cursor-pointer">
              Login
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
