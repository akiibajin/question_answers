const userRouter = require("express").Router();
const passport = require("passport")
const { userLogin, userSignIn } = require("../../cores/user/utils/userUtils")

userRouter.route("/login").post(passport.authenticate("Login"), userLogin);

userRouter.route("/signIn").post(userSignIn);

module.exports = userRouter;
 