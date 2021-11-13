const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bCrypt = require("bcrypt-nodejs");
const { User } = require("../../db/postgres/db");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

passport.use(
  "Login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const CompareEncrypt = function (passwordSent, passwordDb) {
        return bCrypt.compareSync(passwordSent, passwordDb);
      };
      User.findOne({ where: { email } }).then((userAnswer) => {
        if (!userAnswer) {
          return done(null, false, {
            message: "Error in login",
          });
        } else if (CompareEncrypt(password, userAnswer.password)) {
          return done(null, userAnswer);
        } else {
          return done(null, false);
        }
      });
    }
  )
);
