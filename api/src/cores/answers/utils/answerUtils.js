const { Answer, Question } = require("../../../db/postgres/db");

const getAnswers = async (req, res) => {
  try {
    const allAnswers = await Answer.findAll();
    res.json(allAnswers)
  } catch (error) {
    res
      .status(401)
      .json({
        error: `An error ocurred when trying to get the answers, this is the error: ${error}`,
      });
  }
};

const postAnswers = async(req, res) => {
  const user = req.user;
  const { answerContent } = req.body;
  try {
    const newAnswer = await Answer.create({
      answerContent,
    });
    await user.addAnswers(newAnswer);
    res.json({message:"success"})
  } catch (error) {
    res
      .status(404)
      .json({
        error: `An error has ocurred when ${user.name} tried to post an answer: this is the error: ${error}`,
      });
  }
};
module.exports = {
  getAnswers,
  postAnswers,
};
