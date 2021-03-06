const router = require("express").Router();
const PostRoutes = require("./post.routes.js");
const UserRoutes = require("./user.routes.js");

router.use("/posts", PostRoutes);
router.use("/users", UserRoutes);

module.exports = router;
