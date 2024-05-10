import Blog from "../pages/Blog";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] flex flex-col  justify-center items-center pt-5 px-10">
      <h1 className="text-5xl flex justify-center m-4">
        Welcome to the MERN BLOG Explore the world of blogs,
      </h1>
      <Blog />
    </div>
  );
};

export default Home;
