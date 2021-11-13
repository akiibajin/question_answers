const questionRouter = require("express").Router();
const {
  getquestions,
  postQuestions,
  getQuestionById
} = require("../../cores/questions/utils/questionsUtils");
const {
  UserAuthenticated,
} = require("../../passport/authentications/userAuthenticate");

questionRouter
  .route("/")
  .get(getquestions)
  .post(UserAuthenticated, postQuestions);
questionRouter
  .route("/:id")
  .get(getQuestionById)

module.exports = questionRouter;
