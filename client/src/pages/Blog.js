import { useEffect, useState } from "react";

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
    <div className="">
      {data.posts.length === 0 ? (
        <div>No posts to display.</div>
      ) : (
        data.posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>Author: {post.author.name}</p>
            <p>Content: {post.content}</p>
            <p>Created At: {post.createdAt}</p>
            <h2>{post.comments}</h2>
            {/* Render other properties as needed */}
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
