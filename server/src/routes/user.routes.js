const router = require("express").Router();
const validate = require("joi").validate;
const { signup, validation, login, getUserByUsername } = require("../controllers/user.controller");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/user/:username").get(getUserByUsername);

module.exports = router;
