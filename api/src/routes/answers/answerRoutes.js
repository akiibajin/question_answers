const answerRouter = require("express").Router()
const { UserAuthenticated } = require("../../passport/authentications/userAuthenticate")
const {getAnswers,postAnswers} = require("../../cores/answers/utils/answerUtils")
answerRouter.route("/")
    .get(getAnswers)
    .post(UserAuthenticated,postAnswers)
module.exports = answerRouter 