const { User } = require("../../../db/postgres/db");
const bcrypt = require("bcrypt-nodejs");
const passwordEncrypted = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


const userSignUp = async (req, res) => {
    const { email, name, password } = req.body;
    try {
      const newUser = await User.create({
        email,
        name,
        password: passwordEncrypted(password),
      });
      res.json({ message: "User created" });
    } catch (error) {
      res.status(401).json({
        error: `An error has ocurred when tried to create a new user, the error is: ${error}`,
      });
    }
  };

  module.exports=userSignUp