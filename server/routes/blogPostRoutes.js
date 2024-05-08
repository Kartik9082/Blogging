const blogController = require("./../controllers/blogController");
const authController = require("./../controllers/authController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(blogController.getAllPosts)
  .post(blogController.createPost);

router
  .route("/:id")
  .get(blogController.getPost)
  .patch(blogController.updatePost)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    blogController.deletePost
  );
module.exports = router;
