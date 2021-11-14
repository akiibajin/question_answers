const questionRouter = require("express").Router();

const getquestions = require("../../cores/questions/use-case/get-questions");
const postQuestions = require("../../cores/questions/use-case/post-questions");
const getQuestionById = require("../../cores/questions/use-case/search-questions-byId");
const getUserQuestion = require("../../cores/questions/use-case/get-user-questions")
const {
  UserAuthenticated,
} = require("../../passport/authentications/userAuthenticate");

questionRouter
  .route("/")
  .get(getquestions)
  .post(UserAuthenticated, postQuestions);
questionRouter.route("/:id").get(getQuestionById);
questionRouter.route("/userQuestions",UserAuthenticated,getUserQuestion)
  .get()

module.exports = questionRouter;
