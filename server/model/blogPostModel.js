const mongoose = require("mongoose");
const User = require("./userModel");

const blogPost = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  },
  createdAt: [
    {
      type: Date,
      default: Date.now(),
    },
  ],
  updatedAt: [
    {
      type: Date,
      default: Date.now(),
    },
  ],
});

const BlogPost = mongoose.model("BlogPost", blogPost);

module.exports = BlogPost;
