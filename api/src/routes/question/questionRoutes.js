const questionRouter = require("express").Router();

const getquestions = require("../../cores/questions/use-case/get-questions");
const postQuestions = require("../../cores/questions/use-case/post-questions");
const getQuestionById = require("../../cores/questions/use-case/search-questions-byId");

const {
  UserAuthenticated,
} = require("../../passport/authentications/userAuthenticate");

questionRouter
  .route("/")
  .get(getquestions)
  .post(UserAuthenticated, postQuestions);
questionRouter.route("/:id").get(getQuestionById);

module.exports = questionRouter;
