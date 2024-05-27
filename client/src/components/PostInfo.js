import { Link, useParams } from "react-router-dom";
import useSingleBlog from "../hooks/useSingleBlog";
import { useSelector } from "react-redux";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import CommentSection from "./CommentSection";

const PostInfo = () => {
  const [toggleComment, setToggleComment] = useState(true);
  const { id } = useParams();
  useSingleBlog(id);
  const blog = useSelector((store) => store?.blogs?.singleBlog?.data?.post);
  const userId = blog?.author?._id;

  console.log(blog?.blogImage, "image");
  if (!blog)
    return (
      <div className="text-red-600 font-medium text-2xl text-center flex justify-center  items-center">
        {" "}
        Unable To fetch Details{" "}
      </div>
    );

  const handleToggle = () => {
    setToggleComment(!toggleComment);
  };

  return (
    <div className="flex flex-col items-center min-w-[80%] bg-gradient-to-r from-[#a8edea] to-[#fed6e3] min-h-[100vh]">
      <div className=" w-8/12 flex flex-col mt-4 p-4 bg-white rounded-xl">
        <div className="flex justify-around items-center m-2 p-2 bg-gradient-to-r from-[gray] to-[white]">
          <div className="text-2xl font-bold">{blog.title}</div>
          <Link to={"/user/" + userId}>
            <div className="text-sm text-slate-800">- {blog?.author?.name}</div>
          </Link>
        </div>
        <div className="flex flex-col items-center m-2 py-2 w-10/12">
          <div className="w-8/12 h-auto">
            {blog?.blogImage === undefined ? (
              ""
            ) : (
              <img
                src={`http://localhost:5001${blog?.blogImage}`}
                alt="blogImage"
                className="rounded-xl w-auto h-auto"
              />
            )}
          </div>
          <div>
            <p className="m-auto">{blog?.content}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <button onClick={handleToggle}>
            <FaCommentAlt />
          </button>
        </div>
      </div>

      {toggleComment && (
        <>
          <div className="w-8/12 flex flex-col gap-10 m-4">
            <CommentSection _id={id} />
          </div>
        </>
      )}
    </div>
  );
};

export default PostInfo;
