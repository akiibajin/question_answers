const userRouter = require("express").Router();
const passport = require("passport")
const { userLogin, userSignIn, userLogout } = require("../../cores/user/utils/userUtils");
const { UserAuthenticated } = require("../../passport/authentications/userAuthenticate");

userRouter.route("/login").post(passport.authenticate("Login"), userLogin);

userRouter.route("/signIn").post(userSignIn);

userRouter.route("/logOut").get(UserAuthenticated,userLogout)

module.exports = userRouter;
 