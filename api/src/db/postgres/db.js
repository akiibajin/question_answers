const { Sequelize, Op } = require("sequelize");

const userModel = require("../../cores/user/model/userPostgres");
const questionModel = require("../../cores/questions/model/questionPostgres");
const answerModel = require("../../cores/answers/model/answerPostgres")
require("dotenv").config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@/question_answers`,
  { logging: false, native: false }
);

const User = userModel(sequelize);
const Question = questionModel(sequelize);
const Answer = answerModel(sequelize);

User.hasMany(Question)
User.hasMany(Answer)
Question.hasMany(Answer)


module.exports = {
  db: sequelize,
  User,
  Question,
  Answer,
  Op,
};
