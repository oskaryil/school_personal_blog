const router = require("express").Router();
const validate = require("joi").validate;
const {
  newPost,
  getAllPosts,
  deletePost,
  getPostsByUserId,
  validation
} = require("../controllers/post.controller");
const authenticate = require("../controllers/auth.controller");

router
  .route("/")
  .post(authenticate, newPost)
  .get(getAllPosts)
  .delete(authenticate, deletePost);

router.route("/user").get(getPostsByUserId);

module.exports = router;
