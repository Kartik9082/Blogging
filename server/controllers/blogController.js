const BlogPost = require("./../model/blogPostModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const posts = await BlogPost.find();
  res.status(200).json({
    status: "success",
    results: posts.length,
    data: {
      posts,
    },
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      post,
    },
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    return next(new AppError("No post found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) {
    return next(new AppError("No post found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      post,
    },
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await BlogPost.findByIdAndDelete(req.params.id);
  if (!post) {
    return next(new AppError("No post found with that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
