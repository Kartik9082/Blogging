import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/blogPost");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const res = await response.json();
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="border-b-2 border-black">Trending blogs</div>
      <div className="flex flex-wrap gap-6 my-4">
        {data.posts.length === 0 ? (
          <div>No posts to display.</div>
        ) : (
          data.posts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </>
  );
};

export default Blog;
