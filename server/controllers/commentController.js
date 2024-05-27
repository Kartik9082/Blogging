const Comment = require("../model/commentModel");
const BlogPost = require("../model/blogPostModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createComment = catchAsync(async (req, res, next) => {
  const { comment, user, post } = req.body;

  // Create the new comment
  const newComment = await Comment.create({ comment, user, post });

  // Update the associated blog post with the new comment's ID
  await BlogPost.findByIdAndUpdate(post, {
    $push: { comments: newComment._id },
  });

  // Populate the user and post fields before sending the response
  // const populatedComment = await newComment
  //   .populate("user", "name")
  //   .populate("post", "title")
  //   .execPopulate();

  res.status(201).json({
    status: "success",
    data: {
      comment: newComment,
    },
  });
});

exports.getAllComments = catchAsync(async (req, res, next) => {
  const { postId } = req.params;

  // Find comments associated with the specified blog post
  const comments = await Comment.find({ post: postId });

  res.status(200).json({
    status: "success",
    results: comments.length,
    data: {
      comments,
    },
  });
});

exports.getComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) {
    return next(new AppError("Comment not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      comment,
    },
  });
});

exports.updateComment = catchAsync(async (req, res, next) => {
  const updatedComment = await Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedComment) {
    return next(new AppError("Comment not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      comment: updatedComment,
    },
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);

  if (!comment) {
    return next(new AppError("Comment not found", 404));
  }

  // Update the associated blog post by removing the deleted comment's ID
  await BlogPost.findByIdAndUpdate(comment.post, {
    $pull: { comments: comment._id },
  });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
