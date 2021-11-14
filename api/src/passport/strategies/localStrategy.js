const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bCrypt = require("bcrypt-nodejs");
const { User } = require("../../db/postgres/db");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  return done(null, user);
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
      const compareEncrypt = function (passwordSent, passwordDb) {
        return bCrypt.compareSync(passwordSent, passwordDb);
      };

      // User.findOne({ where:{email} }, function (err, user) {
      //   if (err) return done(err);
      //   if (!user)
      //     return done(null, false, { message: "Incorrect username." });

      //   const isValidPassword = bCrypt.compareSync(password, user.password);

      //   if (!isValidPassword)
      //     return done(null, false, { message: "Incorrect password." });

      //   return done(null, user);
      // });

      User.findOne({ where: { email } })
        .then((userAnswer) => {
          if (!userAnswer) {
            return done(null, false, {
              message: "Error in login",
            });
          } else if (compareEncrypt(password, userAnswer.password)) {
            return done(null, userAnswer);
          } else {
            return done(null, false);
          }
        })
        .catch((e) => {console.error(e);return done(e,false)});
    }
  )
);
