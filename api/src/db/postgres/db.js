const { Sequelize, Op } = require("sequelize");

const userModel = require("../../cores/user/model/userPostgres");
const questionModel = require("../../cores/questions/model/questionPostgres");
const answerModel = require("../../cores/answers/model/answerPostgres");
require("dotenv").config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DBNAME = process.env.DB_DBNAME;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_ROUTE = process.env.DB_ROUTE;
let sequelize=null
if (!DB_USERNAME) {
   sequelize = new Sequelize(DB_ROUTE);
} else {
   sequelize = new Sequelize(
    `${DB_DBNAME}://${DB_USERNAME}:${DB_PASSWORD}@${process.env.PSQL_HOST}:5432/${DB_DATABASE}`
  );
}

const User = userModel(sequelize);
const Question = questionModel(sequelize);
const Answer = answerModel(sequelize);

User.hasMany(Question);
User.hasMany(Answer);
Question.hasMany(Answer);

module.exports = {
  db: sequelize,
  User,
  Question,
  Answer,
  Op,
};
