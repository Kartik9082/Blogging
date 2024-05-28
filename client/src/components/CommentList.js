import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector(
    (store) => store?.blogs?.singleBlog?.data?.post?.comments
  );

  return (
    <>
      <div className="w-full bg-[#111111] p-2  overflow-y-scroll no-scrollbar">
        {comments && comments?.length > 0 ? (
          comments.map((comment) => (
            <ul className="flex " key={comment?._id}>
              <li className="text-sm w-full text-white mb-2">
                <span className="mx-2 font-medium text-gray-300 border-b-2">
                  {comment?.user?.name}{" "}
                </span>
                {comment?.comment}
              </li>
            </ul>
          ))
        ) : (
          <div className="w-full flex justify-center text-center h-40 font-semibold text-xl text-white">
            No comments yet
          </div>
        )}
      </div>
    </>
  );
};

export default CommentList;
