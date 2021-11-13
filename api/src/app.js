const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./passport/strategies/localStrategy")
const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:3000",credentials:true,methods:["GET","POST","OPTIONS","DELETE","PUT"]}));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/index"));

module.exports = app;
