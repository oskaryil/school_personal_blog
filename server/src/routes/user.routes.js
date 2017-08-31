const router = require("express").Router();
const validate = require("joi").validate;
const { signup, validation, login } = require("../controllers/user.controller");

router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
