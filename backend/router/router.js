const express = require("express");
const { sign_in, sign_up, sign_out } = require("../controller/user_controller");
const Auth = require("../middleware/Auth");
const router = express.Router();

//routes
router.route("/sign/in").post(sign_in);
router.route("/sign/up").post(sign_up);
router.route("/sign/out").get(Auth, sign_out);

module.exports = router;
