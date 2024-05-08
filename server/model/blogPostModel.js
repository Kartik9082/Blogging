const mongoose = require("mongoose");
const User = require("./userModel");

const blogPostSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: [
    {
      type: Date,
      default: Date.now(),
    },
  ],
});

blogPostSchema.pre(/find/, function (next) {
  this.populate({
    path: "author",
    select: "name email",
  });
  next();
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
