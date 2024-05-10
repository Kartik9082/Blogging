const Navbar = () => {
  return (
    <div className="flex gap-2 justify-evenly items-center text-2xl m-5 border-y-4 border-slate-700 p-4">
      <div className="border-x-4 border-slate-700 p-2">
        <h1 className="">MERN BLOG</h1>
      </div>
      <div className="">
        <ul className="flex gap-20 justify-evenly ">
          <li className="text-2xl border-y-4 hover:border-hidden p-1 border-slate-700 cursor-pointer hover:text-red-400">
            Home
          </li>
          <li className="text-2xl border-y-4 hover:border-hidden p-1 border-slate-700 cursor-pointer hover:text-red-400">
            Blog
          </li>
          <li className="text-2xl border-y-4 hover:border-hidden p-1 border-slate-700 cursor-pointer hover:text-red-400">
            About
          </li>
        </ul>
      </div>
      <div className="border-x-4 p-2 border-slate-700">
        <h1>KARTIKAY</h1>
      </div>
    </div>
  );
};

export default Navbar;
