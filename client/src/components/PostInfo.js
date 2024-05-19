import { useParams } from "react-router-dom";
import useSingleBlog from "../hooks/useSingleBlog";
import { useSelector } from "react-redux";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const PostInfo = () => {
  const { id } = useParams();
  useSingleBlog(id);
  const blog = useSelector(
    (store) => store?.blogs?.singleBlog?.data?.data?.post
  );

  console.log(blog);

  return (
    <div className="flex justify-center min-w-[80%] bg-gradient-to-r from-[#a8edea] to-[#fed6e3] min-h-[100vh]">
      <div className="absolute w-8/12 flex flex-col m-4  p-4 bg-white rounded-xl">
        <div className="flex justify-around items-center m-2 p-2 bg-stone-200">
          <div className="text-2xl font-bold">{blog.title}</div>
          <div className="text-sm text-slate-800">- {blog?.author?.name}</div>
        </div>
        <div className="flex justify-center items-center m-2 py-2 w-10/12">
          <p className="m-auto">{blog?.content}</p>
        </div>
        <div className="flex gap-5">
          <button>
            <AiFillLike size={22} />
          </button>
          <button>
            <FaCommentAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;
