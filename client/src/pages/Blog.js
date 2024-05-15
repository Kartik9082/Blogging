import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";
import useBlog from "../hooks/useBlog";

const Blog = () => {
  useBlog();

  const blogs = useSelector((store) => store.blogs);

  if (!blogs) return null;

  return (
    <>
      <div className="border-b-2 border-black">Trending blogs</div>
      <div className="flex flex-wrap gap-6 my-4">
        {blogs?.blog?.data?.posts?.length === 0 ? (
          <div>No posts to display.</div>
        ) : (
          blogs?.blog?.data?.posts?.map((post) => (
            <PostCard key={post._id} {...post} />
          ))
        )}
      </div>
    </>
  );
};

export default Blog;
