const { Sequelize, Op } = require("sequelize");

const userModel = require("../../cores/user/model/userPostgres");
const questionModel = require("../../cores/questions/model/questionPostgres");
const answerModel = require("../../cores/answers/model/answerPostgres")
require("dotenv").config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DBNAME = process.env.DB_DBNAME
const DB_DATABASE = process.env.DB_DATABASE

console.log(`${DB_DBNAME}://${DB_USERNAME}:${DB_PASSWORD}@/${DB_DATABASE}`, "host: ",process.env.PSQL_HOST)
const sequelize = new Sequelize(
  `${DB_DBNAME}://${DB_USERNAME}:${DB_PASSWORD}@${process.env.PSQL_HOST}:5432/${DB_DATABASE}`);

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


// if (process.env.NODE_ENV === "production") {
//   sequelize = new Sequelize(process.env.DATABASE_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.POSTGRES_DB || "elitypescript",
//     process.env.POSTGRES_USER || "eli",
//     "",
//     {
//       host: process.env.PSQL_HOST || "localhost",
//       dialect: "postgres",
//       pool: {
//         max: 100,
//         min: 0,
//         idle: 200000,
//         // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
//         acquire: 1000000,
//       },
//     }
//   );
// }