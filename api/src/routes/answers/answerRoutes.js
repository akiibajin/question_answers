const answerRouter = require("express").Router();
const {
  UserAuthenticated,
} = require("../../passport/authentications/userAuthenticate");

const {
  getAnswers,
  postAnswers,
  changeAnswerBool,
} = require("../../cores/answers/utils/answerUtils");


answerRouter.route("/").get(getAnswers).post(UserAuthenticated, postAnswers);


answerRouter.route("/changeBool").put(UserAuthenticated, changeAnswerBool);

module.exports = answerRouter;
