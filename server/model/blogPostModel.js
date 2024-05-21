const mongoose = require("mongoose");

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
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
  ],

  likes: {
    type: Array,
    default: [],
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
    select: "name", // Select the fields you want to populate from the 'User' model
  }).populate({
    path: "comments",
    select: "comment user", // Select fields from the 'Comment' model
    populate: {
      path: "user",
      select: "name", // Populate the 'user' field within the 'Comment' model
    },
  });
  next();
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
