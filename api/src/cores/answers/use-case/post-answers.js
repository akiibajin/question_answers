const { Answer, Question } = require("../../../db/postgres/db");

const postAnswers = async (req, res) => {
  const user = req.user;
  const { answerToSend, idQuestion } = req.body;
  try {
    const newAnswer = await Answer.create({
      answerContent: answerToSend,
    });
    await Question.findByPk(idQuestion).then((response) =>
      response.addAnswers(newAnswer)
    );
    await user.addAnswers(newAnswer);
    const updatedAnswers = await Answer.findAll({
      where: { questionId: idQuestion },
    });
    res.json(updatedAnswers);
  } catch (error) {
    res.status(404).json({
      error: `An error has ocurred when ${user.name} tried to post an answer: this is the error: ${error}`,
    });
  }
};

module.exports = postAnswers;
