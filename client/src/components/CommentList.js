import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector(
    (store) => store?.blogs?.singleBlog?.data?.post?.comments
  );
  return (
    <>
      <div className="w-full bg-white p-2">
        {comments && comments?.length > 0 ? (
          comments.map((comment) => (
            <ul className="flex" key={comment?._id}>
              <span>👤</span>
              <li className="text-lg  w-full text-gray-600">
                <span className="mx-2 font-medium text-black">
                  {comment?.user?.name}
                </span>
                {comment?.comment}
              </li>
            </ul>
          ))
        ) : (
          <div className="w-full items-center flex justify-center bg-white text-center h-40 font-semibold text-xl">
            No comments yet
          </div>
        )}
      </div>
    </>
  );
};

export default CommentList;
