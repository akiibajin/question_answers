const { Question } = require("../../../db/postgres/db");

const getUserQuestions = async (req, res) => {
  const user = req.user;
  try {
    const userQuestionsFinded = await Question.findAll({
      where: { userId: user.id },
    });
    res.json(userQuestionsFinded)
  } catch (error) {
    res.status(404).json({
      error: `An error has appeared when the user ${user.name} try to find his questions, this is the error: ${userQuestionsFinded}`,
    });
  }
};

module.exports = getUserQuestions;
