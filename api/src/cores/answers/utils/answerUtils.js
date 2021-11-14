const { Answer, Question } = require("../../../db/postgres/db");

const getAnswers = async (req, res) => {
  const { idQuestion } = req.query;
  console.log(idQuestion);
  try {
    const allAnswers = await Answer.findAll({
      where: { questionId: Number(idQuestion) },
    });
    res.json(allAnswers);
  } catch (error) {
    res.status(401).json({
      error: `An error ocurred when trying to get the answers, this is the error: ${error}`,
    });
  }
};

const postAnswers = async (req, res) => {
  const user = req.user;
  const { answerToSend, idQuestion } = req.body;
  console.log("lo que llega por body: ", req.body);
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

const changeAnswerBool = async (req, res) => {
  const { idAnswer, idQuestion } = req.body;
  const user = req.user;

  try {
    const questionFinded = await Question.findByPk(idQuestion);
    if (questionFinded.userId !== user.id)
      return res.json({ error: "the user is not the same" });

    const theBestAnswer = await Answer.findOne({
      where: { questionId: idQuestion, theBest: true },
    });

    if (theBestAnswer) {
      theBestAnswer.set({ theBest: false });
      await theBestAnswer.save();
    }

    const newBestAnswer = await Answer.findByPk(idAnswer);
    newBestAnswer.set({ theBest: true });
    await newBestAnswer.save();

    const allAnswers = await Answer.findAll({
      where: { questionId: idQuestion },
    });

    return res.json(allAnswers);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAnswers,
  postAnswers,
  changeAnswerBool,
};
