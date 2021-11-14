const { Answer, Question } = require("../../../db/postgres/db");

const changeBestAnswer = async (req, res) => {
  const { idAnswer, idQuestion } = req.body;
  const user = req.user;

  try {
    const questionFinded = await Question.findByPk(idQuestion);

    if (questionFinded.userId !== user.id)
      return res.status(401).json({ error: "the user is not the same" });

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

module.exports = changeBestAnswer;
