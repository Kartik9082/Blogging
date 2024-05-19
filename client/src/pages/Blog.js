import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import useBlog from "../hooks/useBlog";

const Blog = () => {
  useBlog();

  const blogs = useSelector((store) => store.blogs);

  if (!blogs) return null;

  return (
    <div className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] flex flex-col justify-center items-center pt-5 px-10">
      <div className="border-b-2 border-black">Trending blogs</div>
      <div className="flex flex-wrap gap-8 my-4">
        {blogs?.blog?.data?.posts?.length === 0 ? (
          <div>No posts to display.</div>
        ) : (
          blogs?.blog?.data?.posts?.map((post) => (
            <PostCard key={post._id} {...post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;