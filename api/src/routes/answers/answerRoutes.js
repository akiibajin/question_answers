const answerRouter = require("express").Router();
const {
  UserAuthenticated,
} = require("../../passport/authentications/userAuthenticate");

const getAnswers = require("../../cores/answers/use-case/get-answers");
const postAnswers = require("../../cores/answers/use-case/post-answers");
const changeBestAnswer = require("../../cores/answers/use-case/change-best-answer");

answerRouter.route("/")
  .get(getAnswers)
  .post(UserAuthenticated, postAnswers);

answerRouter.route("/changeBool")
  .put(UserAuthenticated, changeBestAnswer);

module.exports = answerRouter;
