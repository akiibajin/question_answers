const userLogIn = (req, res) => {
  const user = req.user;
  res.json(user);
};

module.exports = userLogIn;
