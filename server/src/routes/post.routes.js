const router = require("express").Router();
const validate = require("joi").validate;
const {
  newPost,
  getAllPosts,
  validation
} = require("../controllers/post.controller");
const authenticate = require("../controllers/auth.controller");

router.route("/").post(authenticate, newPost).get(getAllPosts);

module.exports = router;
