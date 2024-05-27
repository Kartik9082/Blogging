import React from "react";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

const CommentSection = ({ _id }) => {
  return (
    <div className="flex ">
      <CommentList />
      <CreateComment _id={_id} />
    </div>
  );
};

export default CommentSection;
