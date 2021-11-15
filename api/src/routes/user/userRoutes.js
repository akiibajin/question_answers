const userRouter = require("express").Router();
const passport = require("passport")

const userLogIn=require("../../cores/user/use-case/user-LogIn")
const userSignUp=require("../../cores/user/use-case/user-SignUp")
const userLogOut=require("../../cores/user/use-case/user-LogOut")
const userPermissions=require("../../cores/user/use-case/user-permission")
const { UserAuthenticated } = require("../../passport/authentications/userAuthenticate");
 
userRouter.route("/login").post(passport.authenticate("Login"), userLogIn);

userRouter.route("/signUp").post(userSignUp);

userRouter.route("/logOut").get(UserAuthenticated,userLogOut)

userRouter.route("/test").get(UserAuthenticated,userPermissions)

module.exports = userRouter;
 